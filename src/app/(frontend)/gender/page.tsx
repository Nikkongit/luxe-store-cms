import React from 'react';
import Link from 'next/link';

export default function GenderPage() {
  return (
    <div className="page-header" style={{ padding: '120px 20px 60px' }}>
      <h1>Shop by Gender</h1>
      <p>Discover styles crafted for everyone.</p>

      <div className="container" style={{ marginTop: '4rem' }}>
        <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
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
    </div>
  );
}
