import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, CreditCard, Truck, Shield } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'payment' | 'delivery' | 'safety';
}

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs: FAQItem[] = [
    // Payment
    {
      id: '1',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods through our secure partners. You can pay via PayPal, credit/debit cards, cryptocurrency, and other digital payment platforms. All payments are processed securely with encryption.',
      category: 'payment'
    },
    {
      id: '2',
      question: 'Is it safe to make payments on your website?',
      answer: 'Absolutely! We use industry-standard SSL encryption and work with trusted payment processors to ensure your financial information is completely secure. We never store your payment details on our servers.',
      category: 'payment'
    },
    {
      id: '3',
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer refunds within 24 hours of purchase if the digital item was not delivered as described. However, due to the nature of digital goods, refunds are evaluated on a case-by-case basis. Please contact our support team for assistance.',
      category: 'payment'
    },

    // Delivery
    {
      id: '4',
      question: 'How quickly will I receive my digital items?',
      answer: 'Most digital items are delivered instantly or within 5-15 minutes after payment confirmation. Some premium accounts or special items may take up to 1-2 hours for manual verification and delivery.',
      category: 'delivery'
    },
    {
      id: '5',
      question: 'How will I receive my purchased items?',
      answer: 'After purchase, you\'ll receive detailed instructions via email and/or WhatsApp on how to claim your items. For accounts, you\'ll get login credentials. For pets and gamepasses, you\'ll receive redemption codes or direct transfers.',
      category: 'delivery'
    },
    {
      id: '6',
      question: 'What if I don\'t receive my items?',
      answer: 'If you don\'t receive your items within the specified timeframe, please contact our support team immediately via WhatsApp or Discord. We\'ll track your order and ensure prompt delivery or provide a full refund.',
      category: 'delivery'
    },

    // Safety
    {
      id: '7',
      question: 'Are the accounts and items legitimate?',
      answer: 'Yes, all our accounts and items are obtained through legitimate means. We work with trusted suppliers and verify all items before listing them. We never sell hacked, stolen, or fraudulent accounts.',
      category: 'safety'
    },
    {
      id: '8',
      question: 'Will my Roblox account get banned for using your services?',
      answer: 'Our items and services comply with Roblox\'s terms of service. However, we recommend following all platform guidelines and using items responsibly. We cannot guarantee against bans due to other activities on your account.',
      category: 'safety'
    },
    {
      id: '9',
      question: 'How do you protect my personal information?',
      answer: 'We take privacy seriously and use advanced encryption to protect your data. We only collect necessary information for order processing and never share your details with third parties without your consent.',
      category: 'safety'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: Search },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'delivery', name: 'Delivery', icon: Truck },
    { id: 'safety', name: 'Safety', icon: Shield }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and policies
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </motion.div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700"
                    >
                      <div className="px-6 py-4 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                const message = encodeURIComponent("Hi! I have a question that's not covered in your FAQ. Could you please help me?");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact WhatsApp Support
            </motion.button>
            <motion.button
              onClick={() => window.open('https://discord.gg/example', '_blank')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Discord Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;