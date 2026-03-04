# LUXE Store CMS

A premium e-commerce backup built with Payload CMS v3.

## Tech Stack
- **Payload CMS v3**
- **MongoDB**
- **Google OAuth**
- **TypeScript**

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env` file based on the requirements:
   ```env
   PAYLOAD_SECRET=your-secret-key
   MONGODB_URI=your-mongodb-connection
   SERVER_URL=http://localhost:3000

   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Admin Panel
Access the Payload admin panel at:
[http://localhost:3000/admin](http://localhost:3000/admin)

## API Endpoints
- **Storefront Products**: `/api/products?where[status][equals]=published`
- **User Authentication**: `/api/users/login`
- **Google OAuth**: `/api/users/oauth/google`
