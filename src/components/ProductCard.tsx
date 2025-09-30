import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
          <div className="relative h-64 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {discountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
              </div>
            )}
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <HeartIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 capitalize">{product.subcategory}</span>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-gray-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                  color.toLowerCase() === 'black' ? '#000000' :
                                  color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                  color.toLowerCase() === 'gray' ? '#6b7280' :
                                  color.toLowerCase() === 'blue' ? '#3b82f6' :
                                  color.toLowerCase() === 'pink' ? '#ec4899' :
                                  color.toLowerCase() === 'green' ? '#10b981' :
                                  color.toLowerCase() === 'brown' ? '#92400e' :
                                  color.toLowerCase() === 'cream' ? '#fef3c7' :
                                  color.toLowerCase() === 'yellow' ? '#fbbf24' :
                                  color.toLowerCase() === 'burgundy' ? '#7c2d12' :
                                  color.toLowerCase() === 'olive' ? '#65a30d' :
                                  color.toLowerCase() === 'khaki' ? '#a3a3a3' : '#e5e7eb'
                }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        <div className="mt-3">
          <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
