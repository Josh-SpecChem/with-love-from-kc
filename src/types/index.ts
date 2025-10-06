// Core data interfaces for Made With Love KC

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: ProductCategory;
  tags: string[];
  availability: ProductStatus;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  custom?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  media_urls: string[];
  hashtags: string[];
  engagement_metrics: {
    likes: number;
    comments: number;
    shares?: number;
  };
  post_date: string;
  category: PostCategory;
  products_tagged?: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  orders: Order[];
  testimonials?: Testimonial[];
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  customer_id: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: OrderStatus;
  shipping_address: Address;
  billing_address?: Address;
  payment_method: string;
  created_at: string;
  updated_at: string;
  shipped_at?: string;
  delivered_at?: string;
}

export interface OrderItem {
  product_id: string;
  product: Product;
  quantity: number;
  price: number;
  customizations?: ProductCustomization[];
}

export interface ProductCustomization {
  type: 'text' | 'color' | 'size' | 'image';
  value: string;
  label: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Testimonial {
  id: string;
  customer_id: string;
  customer: Customer;
  product_id?: string;
  product?: Product;
  rating: number;
  comment: string;
  verified_purchase: boolean;
  created_at: string;
}

// Enums and utility types
export type ProductCategory = 'apparel' | 'accessories' | 'home' | 'custom';
export type ProductStatus = 'available' | 'out_of_stock' | 'discontinued' | 'pre_order';
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
export type PostCategory = 'product' | 'behind_scenes' | 'event' | 'lifestyle' | 'testimonial';

// Component prop interfaces
export interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured' | 'compact';
  showQuickAdd?: boolean;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  columns?: 1 | 2 | 3 | 4;
  showFilters?: boolean;
  onProductClick?: (product: Product) => void;
}

export interface InstagramGalleryProps {
  posts: InstagramPost[];
  loading?: boolean;
  showFilters?: boolean;
  onPostClick?: (post: InstagramPost) => void;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface ButtonVariant {
  variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export interface CardVariant {
  variant: 'default' | 'featured' | 'testimonial' | 'product';
  className?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  options?: { label: string; value: string }[];
}

export interface ValidationRule {
  type: 'required' | 'email' | 'min' | 'max' | 'pattern';
  value?: any;
  message: string;
}

// API response types
export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface PostsResponse {
  posts: InstagramPost[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface OrdersResponse {
  orders: Order[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export interface SuccessResponse {
  message: string;
  data?: any;
}

// Theme and UI types
export type Theme = 'light' | 'dark' | 'system';
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AnimationType = 'fade' | 'slide' | 'scale' | 'bounce';

// Cart and wishlist types
export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: ProductCustomization[];
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  discount?: {
    code: string;
    amount: number;
    type: 'percentage' | 'fixed';
  };
}

export interface Wishlist {
  id: string;
  customer_id?: string;
  items: Product[];
  created_at: string;
  updated_at: string;
}

// Search and filter types
export interface ProductFilters {
  category?: ProductCategory[];
  priceRange?: {
    min: number;
    max: number;
  };
  availability?: ProductStatus[];
  tags?: string[];
  rating?: number;
  sortBy?: 'name' | 'price' | 'rating' | 'date' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchResult {
  products: Product[];
  posts?: InstagramPost[];
  total: number;
  query: string;
  filters: ProductFilters;
}

// Admin types
export interface AdminDashboard {
  metrics: {
    totalSales: number;
    totalOrders: number;
    totalCustomers: number;
    averageOrderValue: number;
    instagramEngagement: number;
    inventoryAlerts: number;
  };
  recentOrders: Order[];
  recentPosts: InstagramPost[];
  inventoryAlerts: Product[];
}

export interface SyncStatus {
  lastSync: string;
  postsSynced: number;
  newPosts: number;
  status: 'idle' | 'syncing' | 'error' | 'success';
  error?: string;
}


