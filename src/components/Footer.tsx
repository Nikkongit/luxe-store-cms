import React from 'react'
import Link from 'next/link'
import { FooterAuthLinks } from './FooterAuthLinks'

export const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid flex justify-between gap-10 flex-wrap">
                    <div className="footer-info">
                        <h3>LUXE Store</h3>
                        <p style={{ marginTop: '1rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                          Founded with a passion for uncompromising quality, LUXE Store brings together the world&apos;s most refined essentials. From hand-crafted bags to timeless jewelry, we curate the finest pieces for the modern visionary. Experience authentic luxury with our secure, global shipping.
                        </p>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/products">All Products</Link></li>
                            <li><Link href="/categories">Categories</Link></li>
                            <li><Link href="/collections">Collections</Link></li>
                            <li><Link href="/gender">Gender</Link></li>
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
                            <li><Link href="/return-policy">Return Policy</Link></li>
                        </ul>
                        
                        <h4 style={{ marginTop: '2.5rem' }}>Account</h4>
                        <ul>
                            <FooterAuthLinks />
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '2rem' }}>
                    <p>&copy; {new Date().getFullYear()} LUXE Store. All rights reserved.</p>
                    <div className="payment-icons" style={{ display: 'flex', gap: '0.75rem', opacity: 0.8 }}>
                        {/* Visa */}
                        <svg width="48" height="30" viewBox="0 0 48 30" fill="currentColor">
                           <rect width="48" height="30" rx="4" fill="var(--surface-hover)" />
                           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold">VISA</text>
                        </svg>
                        {/* Mastercard */}
                        <svg width="48" height="30" viewBox="0 0 48 30" fill="currentColor">
                           <rect width="48" height="30" rx="4" fill="var(--surface-hover)" />
                           <circle cx="18" cy="15" r="8" fill="#eb001b" opacity="0.8"/>
                           <circle cx="30" cy="15" r="8" fill="#f79e1b" opacity="0.8"/>
                        </svg>
                        {/* PayPal */}
                        <svg width="48" height="30" viewBox="0 0 48 30" fill="currentColor">
                           <rect width="48" height="30" rx="4" fill="var(--surface-hover)" />
                           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontStyle="italic" fontWeight="bold">PayPal</text>
                        </svg>
                        {/* AMEX */}
                        <svg width="48" height="30" viewBox="0 0 48 30" fill="currentColor">
                           <rect width="48" height="30" rx="4" fill="var(--surface-hover)" />
                           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">AMEX</text>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}
