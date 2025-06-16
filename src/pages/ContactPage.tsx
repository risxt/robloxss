import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Clock, Shield, Zap, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your Roblox digital items. Could you please provide more information about your products and services?"
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const handleDiscordContact = () => {
    window.open('https://discord.gg/example', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      description: 'Quick responses within minutes',
      action: handleWhatsAppContact,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: Send,
      name: 'Discord',
      description: 'Join our community server',
      action: handleDiscordContact,
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:from-indigo-600 hover:to-purple-700'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'We\'re available around the clock to help with your orders and questions.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All purchases are protected with secure payment methods and verification.'
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Most digital items are delivered within minutes of purchase confirmation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about our products or need help with your order? We're here to help!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.button
                key={method.name}
                onClick={method.action}
                className={`p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-300 text-left group`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {method.name}
                    </h3>
                    <p className="text-gray-400">
                      {method.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 group-hover:text-cyan-400 transition-colors">
                  <span>Contact us via {method.name}</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose Our Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Need Immediate Help?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            For urgent matters or immediate assistance with your orders, we recommend contacting us via WhatsApp 
            for the fastest response time. Our team is ready to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleWhatsAppContact}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Support</span>
            </motion.button>
            <motion.button
              onClick={handleDiscordContact}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              <span>Join Discord</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;