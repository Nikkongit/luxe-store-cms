import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-20 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-3xl space-y-4">
        <p><strong>Effective Date:</strong> January 1, 2026</p>
        <p>
          At LUXE Store, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
        <p>We may collect personal information such as your name, email address, shipping address, and payment details when you place an order or interact with our store.</p>
        
        <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
        <p>We use your information to process transactions, deliver products, and improve our customer service. We do not sell your personal data to third parties.</p>

        <h3 className="text-xl font-semibold mt-6">3. Cookies</h3>
        <p>Our website uses cookies to enhance your browsing experience and provide personalized content. You can configure your browser to block cookies, though some site features may not function properly.</p>
      </div>
    </div>
  )
}
