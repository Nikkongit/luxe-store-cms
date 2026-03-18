import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <h3>LUXE Store</h3>
                        <p>Premium essentials for the modern lifestyle.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/admin">Admin Control</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LUXE Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
