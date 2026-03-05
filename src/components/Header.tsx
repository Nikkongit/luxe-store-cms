import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    LUXE
                </Link>
                <nav className="nav">
                    <Link href="/products">Shop All</Link>
                    <Link href="/categories/bags">Bags</Link>
                    <Link href="/categories/jewelry">Jewelry</Link>
                </nav>
                <div className="auth-links">
                    <Link href="/admin" className="admin-btn">Portal</Link>
                </div>
            </div>
        </header>
    )
}
