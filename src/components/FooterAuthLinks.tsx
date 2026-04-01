'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export const FooterAuthLinks = () => {
    const [user, setUser] = useState<{name?: string, email?: string} | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/luxe-store-cms/api/users/me')
                if (res.ok) {
                    const data = await res.json()
                    setUser(data.user || null)
                }
            } catch (e) {
                // Ignore error
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    if (loading) {
        return (
            <li><span style={{ opacity: 0.5 }}>Loading...</span></li>
        )
    }

    if (user) {
        return (
            <>
                <li><Link href="/account">My Profile Details</Link></li>
                <li><Link href="/account">Add/Update Address</Link></li>
                <li><Link href="/account">Order History</Link></li>
            </>
        )
    }

    return (
        <>
            <li><Link href="/login">Customer Login</Link></li>
            <li><Link href="/login">Create Account</Link></li>
        </>
    )
}
