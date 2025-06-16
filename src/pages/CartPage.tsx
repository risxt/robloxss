import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleWhatsAppCheckout = () => {
    if (state.items.length === 0) return;
    
    let message = "Hi! I'd like to purchase the following items:\n\n";
    
    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: $${item.product.price} each\n`;
      message += `   Subtotal: $${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `Total Amount: $${state.total.toFixed(2)}\n\n`;
    message += "Please let me know the next steps for payment and delivery.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Continue Shopping</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-400 hover:text-red-300 transition-colors flex items-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear Cart</span>
          </button>
        </motion.div>

        {/* Cart Items */}
        <div className="space-y-6 mb-8">
          {state.items.map((item, index) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Product Image */}
                <div className="w-full md:w-24 h-48 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.product.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full capitalize">
                      {item.product.category}
                    </span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-yellow-500 text-xs">
                      ★ {item.product.rating}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-white font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="text-lg font-bold text-cyan-400">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-400">
                    ${item.product.price} each
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center text-gray-400">
              <span>Subtotal ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <span>Processing Fee</span>
              <span>Free</span>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-white">
                <span>Total</span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  ${state.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Buttons */}
          <div className="mt-8 space-y-4">
            <motion.button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Checkout via WhatsApp</span>
            </motion.button>

            <Link to="/products">
              <motion.button
                className="w-full py-4 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Continue Shopping</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;