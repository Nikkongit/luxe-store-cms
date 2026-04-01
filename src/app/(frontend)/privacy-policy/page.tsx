import React from 'react'

export default function PrivacyPolicyPage() {
    return (
        <div className="container inner-page">
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
            <div style={{ color: 'var(--muted)', maxWidth: '800px', lineHeight: '1.8' }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>1. Information We Collect</h3>
                <p>We collect information you provide directly to us when you create an account, make a purchase, or contact customer support. This may include your name, email address, physical address, and payment information.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>2. How We Use Your Information</h3>
                <p>We use the information we collect to fulfill your orders, communicate with you about products and promotions, and improve our services. We do not sell your personal information to third parties.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>3. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
            </div>
        </div>
    )
}
