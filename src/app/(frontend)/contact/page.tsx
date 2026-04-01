import React from 'react'

export default function ContactPage() {
    return (
        <div className="contact-page inner-page">
            <div className="container">
                <header className="page-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--foreground)' }}>Contact Us</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0' }}>Our concierge team is at your absolute disposal.</p>
                </header>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' }}>
                    
                    <div className="contact-info" style={{ background: 'var(--surface)', padding: '3rem', borderRadius: '4px' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--foreground)', fontWeight: 300, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Headquarters</h3>
                        
                        <div style={{ marginBottom: '2rem' }}>
                            <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Address</strong>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                                LUXE Maison<br/>
                                123 Luxury Avenue, Suite 400<br/>
                                Fashion District, Paris 75001<br/>
                                France
                            </p>
                        </div>
                        
                        <div style={{ marginBottom: '2rem' }}>
                            <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Inquiries</strong>
                            <p style={{ color: 'var(--muted)' }}>concierge@luxestore.example.com</p>
                            <p style={{ color: 'var(--muted)' }}>+33 1 23 45 67 89</p>
                        </div>
                        
                        <div>
                            <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Business Hours</strong>
                            <p style={{ color: 'var(--muted)' }}>Monday - Friday</p>
                            <p style={{ color: 'var(--muted)' }}>9:00 AM - 6:00 PM (CET)</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper" style={{ padding: '1rem 0' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--foreground)', fontWeight: 300, marginBottom: '2rem' }}>Send a Message</h3>
                        <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>Full Name</label>
                                <input type="text" className="form-control" placeholder="John Doe" style={{ width: '100%', padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: '2px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>Email Address</label>
                                <input type="email" className="form-control" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: '2px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>Order Number (Optional)</label>
                                <input type="text" className="form-control" placeholder="#LUX-123456" style={{ width: '100%', padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: '2px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>Message</label>
                                <textarea className="form-control" placeholder="How may we assist you?" style={{ width: '100%', padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: '2px', minHeight: '150px', resize: 'vertical' }}></textarea>
                            </div>
                            <button type="button" className="btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center', border: 'none', cursor: 'pointer' }}>
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
