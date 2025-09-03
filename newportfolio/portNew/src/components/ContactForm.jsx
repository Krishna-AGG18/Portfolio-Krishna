import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email service)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6" action="https://formsubmit.co/krishna.2006.work24@gmail.com"
            method="POST">
          {/* Anti-bot */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://krishnaaggarwal.netlify.app/thankyou" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-orange-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-orange-400 rounded-lg focus:outline-none focus:border-orange-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-orange-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-orange-400 rounded-lg focus:outline-none focus:border-orange-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-orange-400">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-orange-400 rounded-lg focus:outline-none focus:border-orange-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-orange-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 bg-black border border-orange-400 rounded-lg focus:outline-none focus:border-orange-600 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">Connect with Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
              GitHub
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
              Instagram
            </a>
            <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
