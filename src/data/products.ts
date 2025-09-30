export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women';
  subcategory: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 't-shirts',
    description: 'Comfortable cotton t-shirt perfect for everyday wear. Made from 100% organic cotton.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'jeans',
    description: 'Premium denim jeans with a modern slim fit. Comfortable and stylish for any occasion.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Casual Button-Down Shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'shirts',
    description: 'Versatile button-down shirt that works for both casual and semi-formal occasions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Pink', 'Gray'],
    rating: 4.3,
    reviews: 67,
    inStock: true
  },
  {
    id: '4',
    name: 'Hooded Sweatshirt',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'hoodies',
    description: 'Cozy hooded sweatshirt perfect for layering. Made from soft cotton blend.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Green'],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Chino Pants',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1506629905607-9b5a0b0b0b0b?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'pants',
    description: 'Classic chino pants that are both comfortable and professional.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    rating: 4.4,
    reviews: 92,
    inStock: true
  },
  {
    id: '6',
    name: 'Leather Jacket',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'jackets',
    description: 'Premium leather jacket with classic styling. A timeless addition to any wardrobe.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown'],
    rating: 4.8,
    reviews: 45,
    inStock: true,
    featured: true
  },

  // Women's Clothing
  {
    id: '7',
    name: 'Floral Summer Dress',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'dresses',
    description: 'Beautiful floral dress perfect for summer. Light and airy with a flattering silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral Blue', 'Floral Pink', 'Floral Yellow'],
    rating: 4.6,
    reviews: 203,
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'High-Waisted Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'jeans',
    description: 'Trendy high-waisted jeans with a flattering fit. Perfect for any body type.',
    sizes: ['24', '26', '28', '30', '32', '34'],
    colors: ['Light Blue', 'Dark Blue', 'Black', 'White'],
    rating: 4.5,
    reviews: 178,
    inStock: true,
    featured: true
  },
  {
    id: '9',
    name: 'Silk Blouse',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'blouses',
    description: 'Elegant silk blouse that adds sophistication to any outfit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Blush'],
    rating: 4.7,
    reviews: 134,
    inStock: true
  },
  {
    id: '10',
    name: 'Knit Sweater',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'sweaters',
    description: 'Cozy knit sweater perfect for layering. Soft and comfortable for all-day wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Navy', 'Pink'],
    rating: 4.4,
    reviews: 167,
    inStock: true,
    featured: true
  },
  {
    id: '11',
    name: 'Midi Skirt',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'skirts',
    description: 'Versatile midi skirt that can be dressed up or down. Perfect for any occasion.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Burgundy'],
    rating: 4.3,
    reviews: 98,
    inStock: true
  },
  {
    id: '12',
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'jackets',
    description: 'Classic denim jacket that never goes out of style. Perfect for layering.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    rating: 4.6,
    reviews: 145,
    inStock: true,
    featured: true
  },
  {
    id: '13',
    name: 'Crop Top',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'tops',
    description: 'Trendy crop top perfect for summer. Comfortable and stylish.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Pink', 'Yellow'],
    rating: 4.2,
    reviews: 89,
    inStock: true
  },
  {
    id: '14',
    name: 'Wide-Leg Pants',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'pants',
    description: 'Comfortable wide-leg pants with a modern silhouette. Perfect for work or casual wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Cream'],
    rating: 4.5,
    reviews: 112,
    inStock: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: 'men' | 'women'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
