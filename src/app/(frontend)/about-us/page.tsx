import React from 'react'
import Link from 'next/link'

export default function AboutUsPage() {
    return (
        <div className="about-us-page inner-page">
            <div className="container">
                <header className="page-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--foreground)' }}>Our Heritage</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0' }}>The legacy behind the LUXE brand.</p>
                </header>

                <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-image" style={{ borderRadius: '4px', overflow: 'hidden' }}>
                        <img src="/luxe-store-cms/images/hero.png" alt="LUXE Heritage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="about-text" style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--foreground)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: '1.2' }}>Redefining Modern Elegance</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Founded in 2012 by visionary creatives, LUXE Store originated from a simple yet profound desire: to bridge the gap between timeless European craftsmanship and modern, avant-garde design. 
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We believe that luxury is not merely defined by a price tag, but by the relentless pursuit of perfection. Every seam, every textile, and every silhouette carefully curated in our collection speaks to a deeper appreciation for artistry. We collaborate exclusively with independent ateliers in Milan, Paris, and Tokyo.
                        </p>
                        <p style={{ marginBottom: '2.5rem' }}>
                            Today, LUXE Store stands as a beacon for the discerning modern visionary. Our commitment extends beyond aesthetic perfection—we focus fiercely on sustainable practices, ensuring that the legacy of high fashion respects the world it inhabits.
                        </p>
                        
                        <Link href="/products" className="btn-primary">
                            Explore The Collection
                        </Link>
                    </div>
                </div>

                <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '6rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                    <div>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--foreground)', fontWeight: 300 }}>10+</h4>
                        <p style={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginTop: '0.5rem' }}>Years of Excellence</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--foreground)', fontWeight: 300 }}>50k</h4>
                        <p style={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginTop: '0.5rem' }}>Global Visionaries</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--foreground)', fontWeight: 300 }}>100%</h4>
                        <p style={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginTop: '0.5rem' }}>Ethically Sourced</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
