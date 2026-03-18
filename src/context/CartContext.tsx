import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  duration: string;
  schedule: string;
  level: string;
  isLive: boolean;
  students: number;
  rating: number;
  instructor: string;
  topics: string[];
  description: string;
}

interface CartContextType {
  items: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Course[]>([]);

  const addToCart = (course: Course) => {
    if (!items.find((i) => i.id === course.id)) {
      setItems([...items, course]);
    }
  };

  const removeFromCart = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const isInCart = (id: string) => items.some((i) => i.id === id);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, isInCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
