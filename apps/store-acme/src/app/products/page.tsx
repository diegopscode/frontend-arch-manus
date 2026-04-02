'use client';

import { useState } from 'react';
import { Button } from '@ecommerce/ui-primitives';
import Link from 'next/link';

const MOCK_PRODUCTS = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  name: `Premium Product ${i + 1}`,
  price: 99.99 + i * 10,
  originalPrice: 149.99 + i * 10,
  image: `/product-${(i % 4) + 1}.jpg`,
  category: ['Electronics', 'Fashion', 'Home & Garden'][i % 3],
  rating: 4 + Math.random(),
  reviews: Math.floor(Math.random() * 100) + 10,
  inStock: true,
}));

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? MOCK_PRODUCTS.filter((p) => p.category === selectedCategory)
    : MOCK_PRODUCTS;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="py-lg">
      <div className="container">
        <h1 className="text-4xl font-bold mb-lg">Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-50 p-lg rounded-lg border border-gray-200 sticky top-lg">
              <h3 className="font-bold mb-md">Filters</h3>

              {/* Category Filter */}
              <div className="mb-lg">
                <h4 className="font-semibold text-sm mb-md text-text-secondary">
                  Category
                </h4>
                <div className="space-y-sm">
                  {['Electronics', 'Fashion', 'Home & Garden'].map((cat) => (
                    <label key={cat} className="flex items-center gap-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat}
                        onChange={() =>
                          setSelectedCategory(
                            selectedCategory === cat ? null : cat,
                          )
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div>
                <h4 className="font-semibold text-sm mb-md text-text-secondary">
                  Sort By
                </h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-sm py-xs border border-gray-300 rounded text-sm"
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-md text-sm text-text-secondary">
              Showing {sortedProducts.length} products
              {selectedCategory && ` in ${selectedCategory}`}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center relative">
                    <span className="text-gray-400">Product Image</span>
                    {product.originalPrice > product.price && (
                      <div className="absolute top-md right-md bg-feedback-error text-white px-sm py-xs rounded text-sm font-bold">
                        -
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100,
                        )}
                        %
                      </div>
                    )}
                  </div>

                  <div className="p-md">
                    <div className="mb-sm">
                      <span className="text-xs text-text-secondary bg-gray-100 px-sm py-xs rounded">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="font-bold mb-sm line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-sm mb-md">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold ml-xs">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-xs text-text-secondary">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-md mb-md">
                      <span className="text-2xl font-bold text-brand-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-text-secondary line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-sm">
                      <Link href={`/products/${product.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View
                        </Button>
                      </Link>
                      <Button variant="primary" className="flex-1">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
