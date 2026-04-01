import React from 'react'
import Link from 'next/link'

export default function CheckoutSuccessPage() {
    return (
        <div className="checkout-success-page inner-page" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px', padding: '0 1rem' }}>
                
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', border: '1px solid var(--border)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--foreground)' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                
                <h1 style={{ fontSize: '2.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                    Thank you for your order
                </h1>
                
                <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                    Your test payment has completely successfully processed. We have begun exquisitely crafting your order for global complimentary shipping.
                    A confirmation has been sent to your email.
                </p>
                
                <div style={{ padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', marginBottom: '3rem', display: 'inline-block', minWidth: '300px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Order Reference Number</div>
                    <div style={{ fontSize: '1.3rem', letterSpacing: '3px', fontWeight: 'bold' }}>#LX-{Math.floor(Math.random() * 900000) + 100000}</div>
                </div>

                <div>
                    <Link href="/" className="btn-primary" style={{ padding: '1rem 3rem', letterSpacing: '2px' }}>
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        </div>
    )
}
