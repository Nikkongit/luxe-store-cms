import React from 'react';
import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <div className="page-header" style={{ padding: '120px 20px 60px' }}>
      <h1>Collections</h1>
      <p>Explore our exclusive curated collections.</p>
      
      <div className="container" style={{ marginTop: '4rem' }}>
        <div className="categories-grid">
           {/* Replace these place holders with generated images once added */}
          <Link href="/collections/winter" className="category-card">
            <img src="/luxe-store-cms/images/hero.png" alt="Winter Collection" className="category-image" />
            <div className="category-overlay">
              <span className="category-title">Winter '26</span>
            </div>
          </Link>
          <Link href="/collections/summer" className="category-card">
            <img src="/luxe-store-cms/images/women.png" alt="Summer Collection" className="category-image" />
            <div className="category-overlay">
              <span className="category-title">Summer '26</span>
            </div>
          </Link>
          <Link href="/collections/essentials" className="category-card">
            <img src="/luxe-store-cms/images/men.png" alt="Essentials" className="category-image" />
            <div className="category-overlay">
              <span className="category-title">Essentials</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
