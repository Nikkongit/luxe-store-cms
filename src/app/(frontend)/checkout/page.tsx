'use client'

import React, { useState, useEffect, useSyncExternalStore } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cartStore } from '@/store/cartStore'

const emptyCartSnapshot: any[] = []

export default function CheckoutPage() {
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false)
    const [mounted, setMounted] = useState(false)
    
    const cartItems = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, () => emptyCartSnapshot)
    const subtotal = cartItems.reduce((acc, item) => acc + (item.product.salePrice || item.product.price || 0) * item.quantity, 0)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)
        
        // Simulate payment processing delay
        setTimeout(() => {
            router.push('/checkout/success')
        }, 1500)
    }

    return (
        <div className="checkout-page inner-page pt-10 pb-20">
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                        Secure Checkout
                    </h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
                        Test Environment: No actual charges will be made.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem', alignItems: 'start' }}>
                    
                    {/* Checkout Form */}
                    <form className="contact-form" onSubmit={handleCheckout} style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Contact Information</h3>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Email Address</label>
                            <input type="email" required placeholder="you@example.com" style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                        </div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', marginTop: '2.5rem', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Shipping Address</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>First Name</label>
                                <input type="text" required style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Last Name</label>
                                <input type="text" required style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Street Address</label>
                            <input type="text" required style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>City</label>
                                <input type="text" required style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Postal Code</label>
                                <input type="text" required style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', marginTop: '2.5rem', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Payment System (Test)</h3>
                        <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1.5rem', borderRadius: '4px', border: '1px solid var(--border)', opacity: 0.9 }}>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Card Number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" maxLength={19} required style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)', letterSpacing: '2px' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Expiry Date (MM/YY)</label>
                                    <input type="text" placeholder="12/26" maxLength={5} required style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>CVC</label>
                                    <input type="text" placeholder="123" maxLength={4} required style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary" disabled={isProcessing} style={{ width: '100%', padding: '1.2rem', marginTop: '3rem', fontSize: '1.1rem', letterSpacing: '2px', opacity: isProcessing ? 0.7 : 1 }}>
                            {isProcessing ? 'AUTHORIZING...' : 'PAY NOW'}
                        </button>
                    </form>

                    {/* Order Summary Sidebar */}
                    <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)', position: 'sticky', top: '100px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Order Summary</h3>
                        
                        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                            {mounted && cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                                    <span>{item.quantity}x {item.product.name}</span>
                                    <span>${((item.product.salePrice || item.product.price || 0) * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                                </div>
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                <span>Cart Subtotal</span>
                                <strong>${mounted ? subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '0.00'}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}>
                                <span>Shipping (Express)</span>
                                <span>Complimentary</span>
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.3rem', marginTop: '1.5rem' }}>
                            <strong>Total</strong>
                            <strong>${mounted ? subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '0.00'}</strong>
                        </div>
                        
                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.8rem' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            <span>Payments are 256-bit SSL encrypted</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .checkout-page .container > div {
                        grid-template-columns: 1fr !important;
                    }
                    .checkout-page .container > div > div:last-child {
                        order: -1;
                        position: relative !important;
                        top: 0 !important;
                    }
                }
            `}</style>
        </div>
    )
}
