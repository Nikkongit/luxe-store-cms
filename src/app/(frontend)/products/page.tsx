import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'
import { ProductFilterClient } from './ProductFilterClient'

export default async function ProductsPage() {
    const payload = await getPayload({ config: await config })
    
    // Fetch all published products from CMS
    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            status: { equals: 'published' }
        },
        depth: 1, // Ensure image/badge relationships load fully
        limit: 100 // Grab up to 100 products for quick client-side filtering
    })

    return (
        <div className="products-page inner-page">
            <div className="container">
                <header className="page-header" style={{ textAlign: 'left', padding: '0 0 3rem 0' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--foreground)' }}>All Products</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>Explore our curated collection of luxury items and use the filters below to refine your search.</p>
                </header>

                <main>
                    <ProductFilterClient initialProducts={products} />
                </main>
            </div>
        </div>
    )
}
