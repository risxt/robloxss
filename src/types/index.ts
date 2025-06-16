export interface Product {
  id: string;
  name: string;
  category: 'pets' | 'accounts' | 'boosts' | 'gamepasses';
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'payment' | 'delivery' | 'safety';
}