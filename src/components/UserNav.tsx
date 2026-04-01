'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export const UserNav = () => {
    const [user, setUser] = useState<{name?: string, email?: string} | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/luxe-store-cms/api/users/me')
                if (res.ok) {
                    const data = await res.json()
                    if (data.user) {
                        setUser(data.user)
                    }
                }
            } catch (e) {
                // Ignore error
            } finally {
                setIsLoading(false)
            }
        }
        
        // Timeout fetching so we don't block the UI rendering completely
        fetchUser()
    }, [])

    if (isLoading) {
        return <span className="action-btn" style={{ opacity: 0.5 }}>...</span>
    }

    if (user) {
        // Display just the first name, or email if name isn't set
        const displayName = user.name?.split(' ')[0] || user.email?.split('@')[0] || 'Account'
        return (
            <div style={{ position: 'relative', display: 'inline-block' }} className="user-dropdown-container">
                <Link href="/account" className="action-btn flex items-center gap-2">
                    {displayName}
                </Link>
            </div>
        )
    }

    return <Link href="/login" className="action-btn">Sign In</Link>
}
