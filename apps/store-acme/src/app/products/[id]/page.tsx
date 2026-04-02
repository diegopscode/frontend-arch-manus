'use client';

import { useState } from 'react';
import { Button } from '@ecommerce/ui-primitives';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');

  // Mock product data
  const product = {
    id: params.id,
    name: `Premium Product ${params.id}`,
    price: 99.99 + parseInt(params.id) * 10,
    originalPrice: 149.99 + parseInt(params.id) * 10,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    category: 'Electronics',
    description:
      'This is a premium product with exceptional quality and features. Perfect for professionals and enthusiasts alike.',
    features: [
      'High-performance components',
      'Durable construction',
      'Eco-friendly materials',
      'Lifetime warranty',
      'Free shipping',
    ],
    specifications: {
      'Dimensions': '10" x 8" x 4"',
      'Weight': '2.5 lbs',
      'Material': 'Premium aluminum',
      'Colors': ['Blue', 'Black', 'Silver'],
      'Warranty': 'Lifetime',
    },
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="py-lg">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-lg flex items-center gap-sm text-sm text-text-secondary">
          <Link href="/" className="hover:text-brand-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-brand-primary">
            Products
          </Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl mb-2xl">
          {/* Product Image */}
          <div>
            <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center mb-md relative">
              <span className="text-gray-400 text-lg">Product Image</span>
              {discount > 0 && (
                <div className="absolute top-lg right-lg bg-feedback-error text-white px-md py-sm rounded-lg font-bold text-lg">
                  -{discount}%
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-sm">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center cursor-pointer hover:border-2 hover:border-brand-primary"
                >
                  <span className="text-gray-400 text-xs">Image {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-lg">
              <span className="inline-block bg-brand-primary text-white px-md py-sm rounded text-sm font-semibold mb-md">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mb-md">{product.name}</h1>

              <div className="flex items-center gap-md mb-lg">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="font-bold ml-sm">{product.rating}</span>
                </div>
                <span className="text-text-secondary">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-lg pb-lg border-b border-gray-200">
              <div className="flex items-center gap-md mb-md">
                <span className="text-4xl font-bold text-brand-primary">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-2xl text-text-secondary line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                {discount > 0 && (
                  <span className="text-lg font-bold text-feedback-error">
                    Save {discount}%
                  </span>
                )}
              </div>
              <p className="text-feedback-success font-semibold">
                ✓ In Stock - Free Shipping
              </p>
            </div>

            {/* Description */}
            <div className="mb-lg">
              <p className="text-text-secondary mb-md">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-lg">
              <h3 className="font-bold mb-md">Color</h3>
              <div className="flex gap-md">
                {product.specifications.Colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color.toLowerCase())}
                    className={`px-md py-sm rounded border-2 transition-all ${
                      selectedColor === color.toLowerCase()
                        ? 'border-brand-primary bg-brand-primary text-white'
                        : 'border-gray-300 hover:border-brand-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-lg">
              <h3 className="font-bold mb-md">Quantity</h3>
              <div className="flex items-center gap-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-md py-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-md py-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-md mb-lg">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                ♡ Wishlist
              </Button>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-lg rounded-lg">
              <h3 className="font-bold mb-md">Key Features</h3>
              <ul className="space-y-sm">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-md">
                    <span className="text-brand-primary font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-lg mb-lg">
          <h2 className="text-2xl font-bold mb-lg">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-md border-b border-gray-200">
                <span className="font-semibold text-text-secondary">{key}</span>
                <span className="text-text-primary">
                  {Array.isArray(value) ? value.join(', ') : value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-lg">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-40 flex items-center justify-center">
                  <span className="text-gray-400">Product</span>
                </div>
                <div className="p-md">
                  <h3 className="font-bold mb-sm">Related Product {i}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-brand-primary">$79.99</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
