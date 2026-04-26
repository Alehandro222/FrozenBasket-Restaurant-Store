import { useState } from 'react';
import { submitContact } from '../services/api';
import type { ContactForm } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await submitContact(formData);
      setStatus('success');
      setResponseMessage(response.message);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setResponseMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setResponseMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-950">Contact Us</h2>
        
        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold mb-2 text-red-900">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-red-950 placeholder-red-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-red-900">Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-red-950 placeholder-red-300"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2 text-red-900">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-red-950 placeholder-red-300"
              placeholder="you@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2 text-red-900">Message / Order Inquiry</label>
            <textarea 
              name="message" 
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Questions, catering requests, or feedback..."
              className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-red-950 placeholder-red-300"
            />
          </div>
          
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-red-700 text-white py-4 rounded-lg hover:bg-red-800 transition font-bold text-lg shadow-md shadow-red-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending... 📨' : 'Send Message'}
          </button>

          {/* Success Message */}
          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
              ✅ {responseMessage}
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
              ❌ {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}