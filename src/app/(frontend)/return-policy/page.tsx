import React from 'react'

export default function ReturnPolicyPage() {
    return (
        <div className="container inner-page">
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.5rem' }}>Return Policy</h1>
            <div style={{ color: 'var(--muted)', maxWidth: '800px', lineHeight: '1.8' }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>1. Returns</h3>
                <p>We accept returns up to 30 days after delivery, if the item is unused and in its original condition. We will refund the full order amount minus the shipping costs.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>2. Exchanges</h3>
                <p>If you need to exchange a product for the same item in a different size or color, please contact our support team. We only replace items if they are defective, damaged, or the wrong size.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--foreground)' }}>3. Refunds Process</h3>
                <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed and credited back to your original payment method automatically within a certain number of days.</p>
            </div>
        </div>
    )
}
