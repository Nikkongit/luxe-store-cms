import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  
  const { docs: featuredProducts } = await payload.find({
    collection: 'products',
    where: {
      status: { equals: 'published' }
    },
    limit: 4
  })

  return (
    <div className="home-page">
      <section className="hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: 'url(/images/hero_image.png)' }}
        ></div>
        <div className="hero-content">
          <h1>Redefine Your Silhouette</h1>
          <p>Discover the new luxury collection designed for the modern visionary.</p>
          <Link href="/products" className="btn-primary">
            Explore Collection
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <Link href="/categories/bags" className="category-card">
              <img src="/images/bag_category.png" alt="Bags" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Bags</span>
              </div>
            </Link>
            <Link href="/categories/jewelry" className="category-card">
              <img src="/images/jewelry_category.png" alt="Jewelry" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Jewelry</span>
              </div>
            </Link>
            <Link href="/categories/clothing" className="category-card">
              <img src="/images/clothing_category.png" alt="Clothing" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Clothing</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Editions</h2>
          <div className="product-grid">
            {featuredProducts.length === 0 && <p className="text-center">No featured products available.</p>}
            {featuredProducts.map((product) => (
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
                    <img src="/images/bag_category.png" alt="Placeholder" />
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
      </section>
    </div>
  )
}
