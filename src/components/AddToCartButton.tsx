'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cartStore } from '@/store/cartStore'

export const AddToCartButton = ({ product }: { product: any }) => {
    const [showPopup, setShowPopup] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const popupHtml = (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div 
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                onClick={() => setShowPopup(false)}
            />
            
            <div style={{ position: 'relative', background: 'var(--surface)', padding: '3rem', borderRadius: '4px', maxWidth: '420px', width: '90%', textAlign: 'center', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', animation: 'fadeUp 0.3s ease-out forwards' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--border)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', color: 'var(--foreground)', letterSpacing: '1px', textTransform: 'uppercase' }}>Added to Cart</h3>
                
                <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
                    Your item has been elegantly secured. Note: Checkout is currently running in preview mode. No real charges will be processed.
                </p>
                
                <button 
                    className="btn-primary" 
                    onClick={() => setShowPopup(false)}
                    style={{ width: '100%', padding: '1rem', letterSpacing: '2px' }}
                >
                    CONTINUE
                </button>
            </div>
            
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )

    return (
        <>
            <button 
                className="btn-primary"
                onClick={() => {
                    cartStore.addItem(product)
                    setShowPopup(true)
                }}
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '1rem', 
                    letterSpacing: '2px', 
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    width: '100%'
                }}
            >
                ADD TO CART
            </button>

            {mounted && showPopup && typeof document !== 'undefined' ? createPortal(popupHtml, document.body) : null}
        </>
    )
}
