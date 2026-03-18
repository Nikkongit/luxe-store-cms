import Link from 'next/link'
import React from 'react'

export default function CartPage() {
    return (
        <div className="cart-page">
            <div className="container">
                <header className="page-header" style={{ textAlign: 'left', padding: '0 0 40px 0' }}>
                    <h1 style={{ fontSize: '2.5rem' }}>Your Bag</h1>
                    <p>Review the items in your bag before checkout.</p>
                </header>

                <div className="cart-grid">
                    <div className="cart-items">
                        <div className="cart-item">
                            <img src="/images/bag_category.png" alt="Cart Item" className="cart-item-image" />
                            <div className="cart-item-details">
                                <div className="cart-item-header">
                                    <h3 className="cart-item-title">Signature Leather Tote</h3>
                                    <p className="cart-item-price">$1,250</p>
                                </div>
                                <div className="cart-item-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <button style={{ color: 'var(--muted)', textDecoration: 'underline' }}>Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <img src="/images/jewelry_category.png" alt="Cart Item" className="cart-item-image" />
                            <div className="cart-item-details">
                                <div className="cart-item-header">
                                    <h3 className="cart-item-title">Diamond Pendant Necklace</h3>
                                    <p className="cart-item-price">$3,400</p>
                                </div>
                                <div className="cart-item-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <button style={{ color: 'var(--muted)', textDecoration: 'underline' }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$4,650</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Complimentary</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>$4,650</span>
                        </div>
                        <Link href="/checkout" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '2rem', width: '100%' }}>
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
