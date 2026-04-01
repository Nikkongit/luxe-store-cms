import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { dummyFeaturedProducts } from '@/components/ProductGrid'
import { Metadata } from 'next'
import { AddToCartButton } from '@/components/AddToCartButton'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const payload = await getPayload({ config: await config })
    const { docs } = await payload.find({
        collection: 'products',
        where: { slug: { equals: slug } },
        limit: 1,
    })

    const product = docs[0] || dummyFeaturedProducts.find(p => p.slug === slug)

    if (!product) {
        return { title: 'Product Not Found | LUXE' }
    }

    let desc = `Buy ${product.name} at LUXE Store.`
    if (typeof product.description === 'string') {
        desc = product.description
    }

    return {
        title: `${product.name} | LUXE Store`,
        description: desc,
    }
}

export default async function ProductDetailPage({ params }: Props) {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    
    let docs: any[] = []
    
    try {
        const payload = await getPayload({ config: await config })
        const result = await payload.find({
            collection: 'products',
            where: { slug: { equals: slug } },
            limit: 1,
            depth: 2,
        })
        docs = result.docs
    } catch(e) {
        // Fallback for missing DB
    }

    const cmsProduct = docs[0]
    const dummyProduct = dummyFeaturedProducts.find((p) => p.slug === slug)
    
    const product = cmsProduct || dummyProduct

    if (!product) {
        notFound()
    }

    // Resolve Image
    let imageUrl = '/luxe-store-cms/images/hero.png'
    if (cmsProduct && cmsProduct.images?.[0]?.image) {
        if (typeof cmsProduct.images[0].image === 'object' && cmsProduct.images[0].image.url) {
            imageUrl = cmsProduct.images[0].image.url
        }
    } else if (dummyProduct && dummyProduct.image) {
        imageUrl = dummyProduct.image
    }

    const price = product.price || 0
    const salePrice = product.salePrice

    return (
        <div className="product-detail-page inner-page">
            <div className="container">
                <div className="product-detail-grid">
                    <div className="product-gallery">
                        <img 
                            src={imageUrl} 
                            alt={product.name} 
                            className="main-image"
                        />
                    </div>
                    
                    <div className="product-essentials">
                        {product.badge && (
                            <span className={`badge ${product.badge} inline-block w-max mb-4`} style={{ position: 'relative', top: 0, left: 0, display: 'inline-block', width: 'max-content' }}>
                                {product.badge}
                            </span>
                        )}
                        
                        <h1>{product.name}</h1>
                        
                        <div className="price-display">
                            {salePrice ? (
                                <>
                                    <span className="original-price-large">${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                                    <span style={{ color: 'var(--danger)' }}>${salePrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                                </>
                            ) : (
                                <span>${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                            )}
                        </div>

                        <div className="description">
                            {product.description ? (
                                <p>{product.description}</p>
                            ) : (
                                <p>This premium item embodies the very essence of luxury. Handcrafted with the finest materials and an uncompromising attention to detail, it is designed for those who accept nothing but the best.</p>
                            )}
                            
                            <ul style={{ marginTop: '1.5rem', marginLeft: '1.5rem', color: 'var(--muted)', listStyleType: 'disc' }}>
                                <li>Premium materials and craftsmanship</li>
                                <li>Authentic LUXE design</li>
                                <li>Global complimentary shipping</li>
                            </ul>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                            <AddToCartButton product={product} />
                            <Link 
                                href="/checkout" 
                                className="btn-secondary" 
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    padding: '1rem', 
                                    letterSpacing: '2px', 
                                    border: '1px solid var(--foreground)', 
                                    background: 'transparent', 
                                    color: 'var(--foreground)',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                BUY NOW
                            </Link>
                        </div>

                        <div className="meta">
                            {product.categories && product.categories.length > 0 && (
                                <span><strong>Category:</strong> {(product.categories as any[]).map(c => typeof c === 'object' ? c.title : c).join(', ')}</span>
                            )}
                            {product.gender && (
                                <span style={{ textTransform: 'capitalize' }}><strong>Gender:</strong> {product.gender.replace('_', ' ')}</span>
                            )}
                            {product.storeCollection && (
                                <span style={{ textTransform: 'capitalize' }}><strong>Collection:</strong> {product.storeCollection}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
