import { Button } from '@ecommerce/ui-primitives';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-2xl">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-lg">
              Welcome to Acme Store
            </h1>
            <p className="text-xl text-blue-100 mb-lg">
              Discover premium products curated just for you. Experience excellence
              in every purchase.
            </p>
            <Link href="/products">
              <Button size="lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-2xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-lg">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Product Image {i}</span>
                </div>
                <div className="p-md">
                  <h3 className="font-bold mb-sm">Premium Product {i}</h3>
                  <p className="text-text-secondary text-sm mb-md">
                    High-quality product with excellent features
                  </p>
                  <div className="flex items-center justify-between mb-md">
                    <span className="text-2xl font-bold text-brand-primary">
                      ${99.99}
                    </span>
                    <span className="text-sm text-feedback-success">In Stock</span>
                  </div>
                  <Link href={`/products/${i}`} className="block">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-2xl bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-lg">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {['Electronics', 'Fashion', 'Home & Garden'].map((category) => (
              <div
                key={category}
                className="bg-white p-lg rounded-lg border border-gray-200 hover:border-brand-primary transition-colors cursor-pointer"
              >
                <div className="bg-gray-200 h-32 rounded mb-md flex items-center justify-center">
                  <span className="text-gray-400">{category} Image</span>
                </div>
                <h3 className="text-xl font-bold text-center">{category}</h3>
                <p className="text-center text-text-secondary text-sm mt-sm">
                  Browse our {category.toLowerCase()} collection
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2xl bg-brand-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-md">
            Ready to Start Shopping?
          </h2>
          <p className="text-blue-100 mb-lg max-w-2xl mx-auto">
            Browse our extensive collection of premium products and find exactly
            what you're looking for.
          </p>
          <Link href="/products">
            <Button variant="secondary" size="lg">
              Browse All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
