/**
 * Core Commerce Contracts
 * Shared TypeScript interfaces and types for the ecommerce ecosystem
 */

// Product Contracts
export interface IProduct {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  category: string;
  available: boolean;
  stock: number;
  rating?: number;
  reviews?: number;
  attributes?: Record<string, string | string[]>;
  createdAt: string;
  updatedAt: string;
}

// Cart Contracts
export interface ICartItem {
  productId: string;
  quantity: number;
  price: number;
  subtotal: number;
  product?: IProduct;
}

export interface ICart {
  id: string;
  items: ICartItem[];
  total: number;
  subtotal: number;
  tax: number;
  discount?: number;
  createdAt: string;
  updatedAt: string;
}

// Order Contracts
export interface IOrder {
  id: string;
  cartId: string;
  items: ICartItem[];
  total: number;
  subtotal: number;
  tax: number;
  discount?: number;
  shippingAddress: IAddress;
  billingAddress: IAddress;
  paymentMethod: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

// Address Contracts
export interface IAddress {
  id: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isDefault?: boolean;
}

// Customer Contracts
export interface ICustomer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: IAddress[];
  createdAt: string;
  updatedAt: string;
}

// Pricing Contracts
export interface IPriceInfo {
  price: number;
  originalPrice?: number;
  discount?: number;
  discountPercentage?: number;
  tax?: number;
  total?: number;
}

// Pagination Contracts
export interface IPaginationParams {
  page: number;
  limit: number;
  offset?: number;
}

export interface IPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

// Filter Contracts
export interface IFilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
}

export interface IProductFilter {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  attributes?: Record<string, string | string[]>;
  search?: string;
  sortBy?: "name" | "price" | "rating" | "newest";
  sortOrder?: "asc" | "desc";
}

// API Response Contracts
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface IApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
