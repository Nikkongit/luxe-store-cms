'use client'

import React, { useState } from 'react'
import { ProductGrid, dummyFeaturedProducts } from '@/components/ProductGrid'

export const ProductFilterClient = ({ initialProducts }: { initialProducts: any[] }) => {
   const [gender, setGender] = useState('all')
   const [collection, setCollection] = useState('all')

   // Use CMS products if available, else fallback to expanded dummy tracking
   const baseProducts = initialProducts.length > 0 ? initialProducts : dummyFeaturedProducts;

   const filteredProducts = baseProducts.filter(p => {
       if (gender !== 'all' && p.gender !== gender) {
           return false;
       }
       if (collection !== 'all' && p.storeCollection !== collection) {
           return false;
       }
       return true
   })

   return (
      <div>
         <div className="filters-bar" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div className="filter-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Filter by Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control" style={{ minWidth: '200px' }}>
                   <option value="all">All Genders</option>
                   <option value="women">Women</option>
                   <option value="men">Men</option>
                   <option value="unisex">Unisex</option>
                </select>
            </div>
            
            <div className="filter-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Filter by Collection:</label>
                <select value={collection} onChange={(e) => setCollection(e.target.value)} className="form-control" style={{ minWidth: '200px' }}>
                   <option value="all">All Collections</option>
                   <option value="winter">Winter Collection</option>
                   <option value="summer">Summer Collection</option>
                   <option value="essentials">Essentials</option>
                </select>
            </div>
         </div>

         {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--muted)', fontSize: '1.2rem' }}>
                No products found matching these filters.
            </div>
         ) : (
            <ProductGrid products={filteredProducts} skipFallback={true} />
         )}
      </div>
   )
}
