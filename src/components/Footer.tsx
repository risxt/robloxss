import React from 'react';
import { motion } from 'framer-motion';
import { Package, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                RobloxShop
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Your trusted marketplace for premium Roblox digital items. Get the best pets, accounts, boosts, and gamepasses with secure transactions and instant delivery.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <motion.a
                href="https://discord.gg/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span>Discord</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Products', 'Featured Items', 'Best Sellers', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Pets', 'Accounts', 'Boosts', 'Gamepasses'].map((category) => (
                <li key={category}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {category}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RobloxShop. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the Roblox community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;