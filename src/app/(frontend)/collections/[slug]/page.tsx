import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'
import { ProductGrid } from '@/components/ProductGrid'

export default async function CollectionsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: await config })

    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            and: [
                { status: { equals: 'published' } },
                { storeCollection: { equals: slug } }
            ]
        }
    })

    const collectionTitle = slug.charAt(0).toUpperCase() + slug.slice(1)

    return (
        <div className="category-page inner-page">
            <div className="container">
                <header className="page-header">
                    <h1>{collectionTitle} Collection</h1>
                    <p>Discover our exclusive selection of the {collectionTitle} collection.</p>
                </header>

                <ProductGrid products={products} />
            </div>
        </div>
    )
}
