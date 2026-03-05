import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: await config })

    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            and: [
                { status: { equals: 'published' } },
                { category: { equals: slug } }
            ]
        }
    })

    // Format category name for title
    const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1)

    return (
        <div className="category-page">
            <div className="container">
                <header className="page-header">
                    <h1>{categoryTitle}</h1>
                    <p>Discover our exclusive selection of {slug}.</p>
                </header>

                <div className="product-grid">
                    {products.length === 0 && <p>No products found in this category yet.</p>}
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="product-card"
                        >
                            <div className="product-image-placeholder">
                                {product.images?.[0]?.image && typeof product.images[0].image === 'object' ? (
                                    <img
                                        src={(product.images[0].image as any).url}
                                        alt={product.name}
                                    />
                                ) : (
                                    <div className="no-image">No Image</div>
                                )}
                                {product.badge && <span className={`badge ${product.badge}`}>{product.badge}</span>}
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <div className="price-row">
                                    {product.salePrice ? (
                                        <>
                                            <span className="original-price">${product.price}</span>
                                            <span className="sale-price">${product.salePrice}</span>
                                        </>
                                    ) : (
                                        <span className="price">${product.price}</span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
