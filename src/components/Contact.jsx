import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Message sent successfully! Thank you for contacting us.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section id="contact" className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        className="max-w-xl mx-auto space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message:
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}