'use client'

import React, { useState, useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { cartStore } from '@/store/cartStore'

const emptyCartSnapshot: any[] = []

export const CartDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    
    const cartItems = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, () => emptyCartSnapshot)
    
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    const subtotal = cartItems.reduce((acc, item) => {
        const price = item.product.salePrice || item.product.price || 0
        return acc + price * item.quantity
    }, 0)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const drawEmptyCart = () => (
        <div className="empty-cart flex text-center" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem' }}>
            <svg className="w-16 h-16 text-muted mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', display: 'block', width: '4rem', height: '4rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginTop: '1rem' }}>Your shopping cart is elegantly empty.</p>
            <button onClick={() => setIsOpen(false)} className="btn-primary" style={{ marginTop: '2rem' }}>
                Continue Shopping
            </button>
        </div>
    )

    const drawCartItems = () => (
        <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
            {cartItems.map((item) => {
                const product = item.product
                const price = product.salePrice || product.price || 0
                
                let imageUrl = '/luxe-store-cms/images/hero.png'
                if (product.images?.[0]?.image?.url) {
                    imageUrl = product.images[0].image.url
                } else if (product.image) {
                    imageUrl = product.image
                }

                return (
                    <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ width: '80px', height: '100px', background: 'var(--surface)', borderRadius: '4px', overflow: 'hidden' }}>
                            <img src={imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{product.name}</h4>
                                <button onClick={() => cartStore.removeItem(item.id)} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '0 0.5rem' }}>&times;</button>
                            </div>
                            <div style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '4px' }}>
                                    <button onClick={() => cartStore.updateQuantity(item.id, item.quantity - 1)} style={{ background: 'none', border: 'none', padding: '0.25rem 0.5rem', cursor: 'pointer', color: 'var(--foreground)' }}>-</button>
                                    <span style={{ padding: '0 0.5rem' }}>{item.quantity}</span>
                                    <button onClick={() => cartStore.updateQuantity(item.id, item.quantity + 1)} style={{ background: 'none', border: 'none', padding: '0.25rem 0.5rem', cursor: 'pointer', color: 'var(--foreground)' }}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

    const drawerHtml = (
        <div style={{ position: 'relative', zIndex: 99999 }}>
            <div 
                className={`cart-overlay ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            <div className={`cart-drawer ${isOpen ? 'open' : ''}`} style={{ height: '100dvh' }}>
                <div className="cart-drawer-header">
                    <h2>Your Cart</h2>
                    <button onClick={() => setIsOpen(false)} className="cart-close-btn">
                        &times;
                    </button>
                </div>

                <div className="cart-drawer-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                    {cartItems.length === 0 ? drawEmptyCart() : drawCartItems()}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-drawer-footer">
                        <div className="cart-summary-line">
                            <span>Subtotal</span>
                            <span>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <p className="cart-drawer-disclaimer" style={{ marginBottom: '1rem' }}>Taxes and shipping calculated at checkout.</p>
                        <Link href="/checkout" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '1rem' }} onClick={() => setIsOpen(false)}>
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)} 
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    padding: 0
                }}
            >
                <span className="action-btn">Cart {mounted && itemCount > 0 ? `(${itemCount})` : '(0)'}</span>
            </button>

            {mounted && typeof document !== 'undefined' ? createPortal(drawerHtml, document.body) : null}
        </>
    )
}
