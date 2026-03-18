import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid flex justify-between gap-10 flex-wrap">
                    <div className="footer-info max-w-sm">
                        <h3>LUXE Store</h3>
                        <p>Premium essentials for the modern lifestyle. Fast shipping globally.</p>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/products">All Products</Link></li>
                            <li><Link href="/categories">Collections</Link></li>
                            <li><Link href="/cart">Shopping Cart</Link></li>
                            <li><Link href="/checkout">Checkout</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link href="/admin">Admin Login</Link></li>
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
