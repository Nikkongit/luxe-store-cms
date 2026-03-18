import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import React from 'react'

export default async function CategoriesPage() {
    const payload = await getPayload({ config: await config })
    
    // In this store, we define categories as hardcoded based on the Products schema options,
    // though there is also a categories collection. Let's just create aesthetic cards for the hardcoded ones.
    const productCategories = [
        { name: 'Bags', slug: 'bags', image: '/images/bag_category.png' },
        { name: 'Jewelry', slug: 'jewelry', image: '/images/jewelry_category.png' },
        { name: 'Clothing', slug: 'clothing', image: '/images/clothing_category.png' },
    ]

    return (
        <div className="categories-list-page" style={{ paddingTop: '120px' }}>
            <div className="container">
                <header className="page-header">
                    <h1>Categories</h1>
                    <p>Select a category to explore our collections.</p>
                </header>

                <div className="categories-grid">
                    {productCategories.map((cat) => (
                        <Link key={cat.slug} href={`/categories/${cat.slug}`} className="category-card">
                            <img src={cat.image} alt={cat.name} className="category-image" />
                            <div className="category-overlay">
                                <span className="category-title">{cat.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
