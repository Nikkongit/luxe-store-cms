import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
      ],
      defaultValue: 'viewer',
      required: true,
    },
    {
      name: 'googleId',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  endpoints: [
    {
      path: '/oauth/google',
      method: 'get',
      handler: async (req) => {
        const client_id = process.env.GOOGLE_CLIENT_ID!
        const redirect_uri = `${process.env.SERVER_URL}/api/users/oauth/google/callback`
        const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`
        return Response.redirect(url)
      },
    },
    {
      path: '/oauth/google/callback',
      method: 'get',
      handler: async (req) => {
        const { searchParams } = new URL(req.url)
        const code = searchParams.get('code')

        if (!code) {
          return Response.json({ message: 'No code provided' }, { status: 400 })
        }

        try {
          const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              code,
              client_id: process.env.GOOGLE_CLIENT_ID!,
              client_secret: process.env.GOOGLE_CLIENT_SECRET!,
              redirect_uri: `${process.env.SERVER_URL}/api/users/oauth/google/callback`,
              grant_type: 'authorization_code',
            }),
          })

          const tokens = await tokenResponse.json()
          if (tokens.error) throw new Error(tokens.error_description || tokens.error)

          const userResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
          })
          const googleUser = await userResponse.json()

          let user = await req.payload.find({
            collection: 'users',
            where: { email: { equals: googleUser.email } },
          })

          if (user.docs.length === 0) {
            await req.payload.create({
              collection: 'users',
              data: {
                email: googleUser.email,
                name: googleUser.name || googleUser.email,
                role: 'viewer',
                googleId: googleUser.sub,
              },
            })
          }

          // In a real scenario, you'd use req.payload.login() here to set cookies
          // For now, redirect to admin
          return Response.redirect(`${process.env.SERVER_URL}/admin`)
        } catch (error: any) {
          return Response.json({ message: error.message }, { status: 500 })
        }
      },
    },
  ],
}
