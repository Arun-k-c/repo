import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: "",
          email: "",
          message: ""
        });
      }, 3000);
    }, 1000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      id="contact"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div 
        className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md md:max-w-lg border border-indigo-100"
        variants={fadeIn}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-10 text-white relative overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-10 -left-10 w-24 h-24 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
          
          <motion.h2 
            className="text-4xl font-bold mb-3 relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-indigo-100 text-lg"
          >
            I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        {submitted ? (
          <motion.div 
            className="p-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className="w-20 h-20 bg-green-100 text-green-600 text-4xl flex items-center justify-center rounded-full mx-auto mb-6"
              animate={{ 
                scale: [0.8, 1.2, 1],
                rotate: [0, 10, 0, -10, 0]
              }}
              transition={{ duration: 0.8 }}
            >
              ✓
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form 
            className="p-10 space-y-6"
            onSubmit={handleSubmit}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`relative ${focused === 'name' ? 'ring-2 ring-indigo-300' : ''}`}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className="block w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
                  placeholder="Your name"
                />
                {focused === 'name' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`relative ${focused === 'email' ? 'ring-2 ring-indigo-300' : ''}`}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  className="block w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
                  placeholder="your.email@example.com"
                />
                {focused === 'email' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`relative ${focused === 'message' ? 'ring-2 ring-indigo-300' : ''}`}
              >
                <textarea
                  name="message"
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={4}
                  className="block w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
                  placeholder="Your message here..."
                ></textarea>
                {focused === 'message' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-4">
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium text-lg"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 25px -5px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;