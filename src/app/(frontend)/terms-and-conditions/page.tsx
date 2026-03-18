import React from 'react'

export default function TermsAndConditionsPage() {
  return (
    <div className="container py-20 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose max-w-3xl space-y-4">
        <p><strong>Effective Date:</strong> January 1, 2026</p>
        <p>
          Welcome to LUXE Store. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions.
        </p>
        <h3 className="text-xl font-semibold mt-6">1. General Conditions</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information) may be transferred unencrypted over various networks.</p>
        
        <h3 className="text-xl font-semibold mt-6">2. Products and Pricing</h3>
        <p>Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product at any time. We shall not be liable to you or any third party for any modification, price change, or suspension of the service.</p>

        <h3 className="text-xl font-semibold mt-6">3. Accuracy of Billing</h3>
        <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information so we can complete your transactions.</p>
      </div>
    </div>
  )
}
