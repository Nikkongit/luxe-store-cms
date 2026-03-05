import React from 'react'

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
                            <li><a href="/products">Products</a></li>
                            <li><a href="/admin">Admin Control</a></li>
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
