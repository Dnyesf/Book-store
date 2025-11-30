export interface Book {
  id: number;
  title: string;
  author: string;
  publisher?: string;
  price: number;
  originalPrice?: number;
  coverUrl: string;
  rating: number;
  category: string;
  description: string;
  isNew?: boolean;
  tags?: string[];
}

export interface CartItem extends Book {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface Author {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Publisher {
  id: number;
  name: string;
  logoUrl?: string;
}