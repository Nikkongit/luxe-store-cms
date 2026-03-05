import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: await config })

    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            slug: { equals: slug }
        }
    })

    if (products.length === 0) {
        return notFound()
    }

    const product = products[0]

    return (
        <div className="product-detail-page">
            <div className="container">
                <div className="product-detail-grid">
                    <div className="product-gallery">
                        {product.images?.[0]?.image && typeof product.images[0].image === 'object' ? (
                            <img
                                src={(product.images[0].image as any).url}
                                alt={product.name}
                                className="main-image"
                            />
                        ) : (
                            <div className="no-image-large">No Image Available</div>
                        )}
                    </div>

                    <div className="product-essentials">
                        {product.badge && <span className={`badge-large ${product.badge}`}>{product.badge}</span>}
                        <h1>{product.name}</h1>
                        <div className="price-display">
                            {product.salePrice ? (
                                <>
                                    <span className="sale-price-large">${product.salePrice}</span>
                                    <span className="original-price-large">${product.price}</span>
                                </>
                            ) : (
                                <span className="price-large">${product.price}</span>
                            )}
                        </div>

                        <div className="description">
                            {/* Description is richText, usually handled by a RichText component */}
                            <p>Premium quality {product.category} for your collection.</p>
                        </div>

                        <button className="add-to-cart">Add to Bag</button>

                        <div className="meta">
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Availability:</strong> {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
