import React from 'react'

export default function TermsConditionsPage() {
    return (
        <div className="container inner-page">
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.5rem' }}>Terms & Conditions</h1>
            <div style={{ color: 'var(--muted)', maxWidth: '800px', lineHeight: '1.8' }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>1. Agreement to Terms</h3>
                <p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on LUXE Store's website for personal, non-commercial transitory viewing only.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>3. Pricing and Availability</h3>
                <p>All prices are subject to change without notice. We reserve the right to modify or discontinue products at any time without liability.</p>
            </div>
        </div>
    )
}
