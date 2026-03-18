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
                    <Link href="/categories">Categories</Link>
                </nav>
                <div className="auth-links">
                    <Link href="/cart" className="action-btn">Cart (0)</Link>
                    <Link href="/admin" className="action-btn">Portal</Link>
                </div>
            </div>
        </header>
    )
}
