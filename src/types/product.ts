export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: 'meat' | 'food' | 'imported-goods' | 'dairy' | 'spices';
  price: number;
  countInStock: number;
  weight?: string;
  origin?: string;
  isHalal: boolean;
  isOrganic: boolean;
  rating: number;
  numReviews: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}