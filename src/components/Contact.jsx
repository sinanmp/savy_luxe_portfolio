import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-16 flex items-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center" data-aos="fade-up">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-4xl font-bold mb-6 text-[#bc9c4e]">Get in Touch</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the Savy Lux difference. Let's connect and explore how we can bring luxury to your life.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-[#bc9c4e]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#bc9c4e] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-[#bc9c4e]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#bc9c4e] transition-colors"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-[#bc9c4e]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#bc9c4e] transition-colors"
              ></textarea>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#bc9c4e] text-black px-8 py-3 rounded-full hover:bg-[#bc9c4e]/90 transition-all duration-300 font-medium transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 