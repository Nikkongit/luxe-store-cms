import Link from 'next/link'
import React from 'react'

import { ThemeToggle } from './ThemeToggle'
import { CartDrawer } from './CartDrawer'
import { UserNav } from './UserNav'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    LUXE
                </Link>
                <nav className="nav">
                    <Link href="/products">Shop All</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/collections">Collections</Link>
                    <Link href="/gender">Gender</Link>
                </nav>
                <div className="auth-links">
                    <ThemeToggle />
                    <CartDrawer />
                    <UserNav />
                </div>
            </div>
        </header>
    )
}
