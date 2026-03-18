import React from 'react'

export default function ContactPage() {
  return (
    <div className="container py-20 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="prose max-w-3xl mb-10">
        <p className="mb-4 text-lg">
          We'd love to hear from you. Reach out to our customer support team for any inquiries regarding your orders, our collections, or general questions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="contact-info">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2"><strong>Email:</strong> support@luxestore.example.com</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="mb-2"><strong>Address:</strong><br/>123 Luxury Avenue,<br/>Fashion District, NY 10001</p>
        </div>
        
        <form className="contact-form space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full border p-2" placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border p-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full border p-2 h-32" placeholder="How can we help?"></textarea>
          </div>
          <button type="button" className="btn-primary w-full p-3 bg-black text-white">Send Message</button>
        </form>
      </div>
    </div>
  )
}
