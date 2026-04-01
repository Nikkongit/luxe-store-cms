import React from 'react'
import Link from 'next/link'

export const dummyFeaturedProducts = [
  { id: '1', slug: 'signature-leather-tote', name: 'Signature Leather Tote', price: 1250, image: '/luxe-store-cms/images/bags.png', badge: 'new', gender: 'women', storeCollection: 'essentials', categories: ['bags'] },
  { id: '2', slug: 'diamond-tennis-bracelet', name: 'Diamond Tennis Bracelet', price: 3400, image: '/luxe-store-cms/images/jewelry.png', gender: 'women', storeCollection: 'winter', categories: ['jewelry'] },
  { id: '3', slug: 'cashmere-blend-coat', name: 'Cashmere Blend Coat', price: 890, image: '/luxe-store-cms/images/women.png', gender: 'unisex', storeCollection: 'winter', categories: ['clothing'] },
  { id: '4', slug: 'silk-wrap-blouse', name: 'Silk Wrap Blouse', price: 450, salePrice: 380, image: '/luxe-store-cms/images/hero.png', badge: 'sale', gender: 'women', storeCollection: 'summer', categories: ['clothing'] },
  { id: '5', slug: 'mens-classic', name: 'Mens Classic Watch', price: 2100, image: '/luxe-store-cms/images/men.png', gender: 'men', storeCollection: 'essentials', categories: ['jewelry'] },
  { id: '6', slug: 'unisex-sunglasses', name: 'Aviator Sunglasses', price: 350, image: '/luxe-store-cms/images/bags.png', gender: 'unisex', storeCollection: 'summer', categories: ['bags'] }
]

export const ProductGrid = ({ products, skipFallback = false }: { products: any[], skipFallback?: boolean }) => {
  const displayProducts = (products.length > 0 || skipFallback) ? products : dummyFeaturedProducts

  return (
    <div className="product-grid">
      {displayProducts.map((product) => (
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
            ) : product.image ? (
              <img src={product.image} alt={product.name} />
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
  )
}
