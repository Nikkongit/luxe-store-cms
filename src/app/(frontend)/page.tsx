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
          style={{ backgroundImage: 'url("/luxe-store-cms/images/hero.png")' }}
        ></div>
        <div className="hero-content">
          <h1>Redefine Your Silhouette</h1>
          <p>Discover the new luxury collection designed for the modern visionary.</p>
          <Link href="/products" className="btn-primary">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Category Section with spacing */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <Link href="/categories/bags" className="category-card">
              <img src="/luxe-store-cms/images/bags.png" alt="Bags" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Bags</span>
              </div>
            </Link>
            <Link href="/categories/jewelry" className="category-card">
              <img src="/luxe-store-cms/images/jewelry.png" alt="Jewelry" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Jewelry</span>
              </div>
            </Link>
            <Link href="/categories/clothing" className="category-card">
              <img src="/luxe-store-cms/images/women.png" alt="Clothing" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Clothing</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Curated Collections</h2>
          <div className="categories-grid">
            <Link href="/collections/winter" className="category-card">
              <img src="/luxe-store-cms/images/hero.png" alt="Winter Collection" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Winter '26</span>
              </div>
            </Link>
            <Link href="/collections/essentials" className="category-card">
              <img src="/luxe-store-cms/images/men.png" alt="Essentials" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Essentials</span>
              </div>
            </Link>
            <Link href="/collections/summer" className="category-card">
              <img src="/luxe-store-cms/images/women.png" alt="Summer Collection" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Summer '26</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gender Section */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Shop by Gender</h2>
          <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem' }}>
            <Link href="/gender/women" className="category-card">
              <img src="/luxe-store-cms/images/women.png" alt="Women" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Women</span>
              </div>
            </Link>
            <Link href="/gender/men" className="category-card">
              <img src="/luxe-store-cms/images/men.png" alt="Men" className="category-image" />
              <div className="category-overlay">
                <span className="category-title">Men</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Featured Editions</h2>
          <div className="product-grid">
            {featuredProducts.length === 0 && <p className="text-center" style={{ width: '100%', gridColumn: '1 / -1' }}>No featured products available.</p>}
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
                    <img src="/luxe-store-cms/images/hero.png" alt="Placeholder" />
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
