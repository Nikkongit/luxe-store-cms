import React from 'react'
import Link from 'next/link'

export default function CheckoutPage() {
    return (
        <div className="checkout-page">
            <div className="container">
                <header className="page-header" style={{ textAlign: 'left', padding: '0 0 40px 0' }}>
                    <h1 style={{ fontSize: '2.5rem' }}>Checkout</h1>
                    <p>Complete your luxury purchase securely.</p>
                </header>

                <div className="checkout-grid">
                    <div className="checkout-form">
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 300, borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                            1. Shipping Details
                        </h2>
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="Jane" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="123 Luxury Ave, Suite 4B" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" className="form-control" placeholder="New York" />
                                </div>
                                <div className="form-group">
                                    <label>Postal Code</label>
                                    <input type="text" className="form-control" placeholder="10001" />
                                </div>
                            </div>

                            <h2 style={{ fontSize: '1.5rem', margin: '3rem 0 1.5rem', fontWeight: 300, borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                                2. Payment Method
                            </h2>
                            <div className="form-group">
                                <label>Card Number</label>
                                <input type="text" className="form-control" placeholder="•••• •••• •••• ••••" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Expiry Date</label>
                                    <input type="text" className="form-control" placeholder="MM/YY" />
                                </div>
                                <div className="form-group">
                                    <label>CVC</label>
                                    <input type="text" className="form-control" placeholder="123" />
                                </div>
                            </div>

                            <button type="button" className="btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                                Place Order
                            </button>
                        </form>
                    </div>

                    <div className="cart-summary" style={{ position: 'sticky', top: '100px' }}>
                        <h3>Order Summary</h3>
                        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                            <img src="/images/bag_category.png" alt="Item" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                            <div>
                                <p style={{ fontWeight: 500 }}>Signature Leather Tote</p>
                                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>$1,250</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                            <img src="/images/jewelry_category.png" alt="Item" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                            <div>
                                <p style={{ fontWeight: 500 }}>Diamond Pendant</p>
                                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>$3,400</p>
                            </div>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$4,650</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Complimentary</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>$4,650</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
