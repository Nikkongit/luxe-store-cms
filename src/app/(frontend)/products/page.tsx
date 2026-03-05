import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import React from 'react'

export default async function ProductsPage() {
    const payload = await getPayload({ config: await config })
    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            status: { equals: 'published' }
        }
    })

    return (
        <div className="products-page">
            <div className="container">
                <header className="page-header">
                    <h1>All Products</h1>
                    <p>Explore our curated collection of luxury items.</p>
                </header>

                <div className="product-grid">
                    {products.length === 0 && <p>No products found.</p>}
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
