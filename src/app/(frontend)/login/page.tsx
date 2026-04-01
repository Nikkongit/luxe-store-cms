'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            if (isLogin) {
                // Handle Login
                const res = await fetch('/luxe-store-cms/api/users/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                })
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.errors?.[0]?.message || data.message || 'Invalid email or password.')
                }
                
                // Login successful (Payload sets the auth cookie)
                window.location.href = '/luxe-store-cms/' // Force hard redirect to re-hydrate the server layout logic
            } else {
                // Handle Registration
                const res = await fetch('/luxe-store-cms/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        email, 
                        password, 
                        name: `${firstName} ${lastName}`.trim(),
                        role: 'viewer'
                    }),
                })
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.errors?.[0]?.message || data.message || 'Error occurred during registration.')
                }

                // Log them in immediately after creating their account
                const loginRes = await fetch('/luxe-store-cms/api/users/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                })
                
                if (!loginRes.ok) {
                     setIsLogin(true)
                     setError('Account successfully created! Please log in.')
                     setIsLoading(false)
                     return
                }

                window.location.href = '/luxe-store-cms/'
            }
        } catch (err: any) {
            setError(err.message)
            setIsLoading(false)
        }
    }

    return (
        <div className="login-page inner-page">
            <div className="container" style={{ maxWidth: '500px', margin: '0 auto', padding: '0 1rem' }}>
                
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
                        {isLogin 
                            ? 'Welcome back to your luxury experience.' 
                            : 'Join our exclusive community of visionaries.'}
                    </p>
                </header>

                <form 
                    className="contact-form" 
                    onSubmit={handleSubmit}
                    style={{ background: 'var(--surface)', padding: '3rem', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                >
                    {error && (
                        <div style={{ background: 'rgba(235, 87, 87, 0.1)', border: '1px solid var(--danger)', color: 'var(--danger)', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', fontSize: '0.9rem', textAlign: 'center' }}>
                            {error}
                        </div>
                    )}

                    {!isLogin && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>First Name</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} 
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Last Name</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} 
                                />
                            </div>
                        </div>
                    )}
                    
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Email Address</label>
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} 
                        />
                    </div>
                    
                    <div className="form-group" style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Password</label>
                            {isLogin && (
                                <Link href="#" style={{ fontSize: '0.8rem', color: 'var(--foreground)', textDecoration: 'underline' }}>
                                    Forgot Password?
                                </Link>
                            )}
                        </div>
                        <input 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }} 
                        />
                    </div>
                    
                    <button type="submit" className="btn-primary" disabled={isLoading} style={{ width: '100%', padding: '1rem', opacity: isLoading ? 0.7 : 1 }}>
                        {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button 
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin)
                                setError('')
                            }} 
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                color: 'var(--foreground)', 
                                cursor: 'pointer', 
                                padding: 0, 
                                font: 'inherit',
                                textDecoration: 'underline',
                                fontWeight: 500
                            }}
                        >
                            {isLogin ? 'Create Account' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
