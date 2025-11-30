import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book, CartItem, User } from '../types';

interface StoreContextType {
  cart: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: number) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
  clearCart: () => void;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const addToCart = (book: Book) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: number) => {
    setCart(prev => prev.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.id === bookId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const login = (email: string) => {
    // Mock login logic
    if (email.includes('admin')) {
      setUser({ id: 1, name: 'مدیر سیستم', email, role: 'admin' });
    } else {
      setUser({ id: 2, name: 'کاربر گرامی', email, role: 'user' });
    }
  };

  const logout = () => setUser(null);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, user, login, logout, cartTotal }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};