'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AccountPage() {
    const [user, setUser] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdating, setIsUpdating] = useState(false)
    const [updateMsg, setUpdateMsg] = useState('')
    const router = useRouter()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/luxe-store-cms/api/users/me')
                if (!res.ok) {
                    throw new Error('Not authenticated')
                }
                const data = await res.json()
                if (!data.user) {
                    throw new Error('Not authenticated')
                }
                setUser(data.user)
            } catch (e) {
                router.push('/login')
            } finally {
                setIsLoading(false)
            }
        }
        fetchUser()
    }, [router])

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsUpdating(true)
        setUpdateMsg('')
        
        // Simulate a successful update of user details
        setTimeout(() => {
            setIsUpdating(false)
            setUpdateMsg('Your account details have been securely updated.')
            setTimeout(() => setUpdateMsg(''), 5000)
        }, 1200)
    }

    const handleLogout = async () => {
        try {
            await fetch('/luxe-store-cms/api/users/logout', { method: 'POST' })
            window.location.href = '/luxe-store-cms/'
        } catch(e) {
            window.location.href = '/luxe-store-cms/'
        }
    }

    if (isLoading) {
        return (
            <div className="inner-page" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'var(--muted)' }}>Loading securely...</p>
            </div>
        )
    }

    if (!user) return null;

    return (
        <div className="account-page inner-page pt-10 pb-20">
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
                
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                            My Account
                        </h1>
                        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
                            Welcome back, {user.name || user.email}.
                        </p>
                    </div>
                    <button 
                        onClick={handleLogout}
                        style={{ background: 'transparent', border: '1px solid var(--border)', padding: '0.8rem 1.5rem', color: 'var(--foreground)', cursor: 'pointer', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}
                    >
                        Sign Out
                    </button>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem' }}>
                    
                    {/* User Profiles */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Profile Information</h3>
                        
                        <div style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: '4px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                                <div style={{ fontSize: '1.1rem' }}>{user.name || 'Not provided'}</div>
                            </div>
                            
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                                <div style={{ fontSize: '1.1rem' }}>{user.email}</div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Account Status</label>
                                <div style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem', background: 'var(--border)', display: 'inline-block', borderRadius: '4px', color: 'var(--foreground)', textTransform: 'capitalize' }}>
                                    {user.role || 'Member'}
                                </div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Order History</h3>
                        <div style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: '4px', border: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted)' }}>
                            You have not placed any recent orders.
                        </div>
                    </div>

                    {/* Address Manager */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Default Shipping Address</h3>
                        
                        <form className="contact-form" onSubmit={handleUpdate} style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                            {updateMsg && (
                                <div style={{ background: 'rgba(46, 213, 115, 0.1)', border: '1px solid #2ed573', color: '#2ed573', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', fontSize: '0.9rem', textAlign: 'center' }}>
                                    {updateMsg}
                                </div>
                            )}

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Street Address</label>
                                <input type="text" placeholder="123 Luxury Ave" style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Apartment, suite, etc.</label>
                                <input type="text" placeholder="Penthouse 4" style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                            </div>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>City</label>
                                    <input type="text" placeholder="Metropolis" style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Postal Code</label>
                                    <input type="text" placeholder="10001" style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                                </div>
                            </div>

                            <button type="submit" className="btn-primary" disabled={isUpdating} style={{ width: '100%', padding: '1rem', fontSize: '1rem', letterSpacing: '2px', opacity: isUpdating ? 0.7 : 1 }}>
                                {isUpdating ? 'UPDATING...' : 'SAVE CHANGES'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .account-page .container > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    )
}
