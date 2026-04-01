import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'
import { ProductGrid } from '@/components/ProductGrid'

export default async function GenderSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: await config })

    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            and: [
                { status: { equals: 'published' } },
                { gender: { equals: slug } }
            ]
        }
    })

    const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1)

    return (
        <div className="category-page inner-page">
            <div className="container">
                <header className="page-header">
                    <h1>{categoryTitle}'s Shop</h1>
                    <p>Discover styles specifically crafted for {categoryTitle}.</p>
                </header>

                <ProductGrid products={products} />
            </div>
        </div>
    )
}
