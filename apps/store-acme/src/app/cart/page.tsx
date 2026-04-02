'use client';

import { useState } from 'react';
import { Button } from '@ecommerce/ui-primitives';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium Product 1',
      price: 99.99,
      quantity: 2,
      image: 'product-1.jpg',
    },
    {
      id: '3',
      name: 'Premium Product 3',
      price: 119.99,
      quantity: 1,
      image: 'product-3.jpg',
    },
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="py-2xl">
        <div className="container text-center">
          <div className="mb-lg">
            <div className="text-6xl mb-md">🛒</div>
            <h1 className="text-3xl font-bold mb-md">Your Cart is Empty</h1>
            <p className="text-text-secondary mb-lg">
              Start shopping to add items to your cart
            </p>
          </div>
          <Link href="/products">
            <Button size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-lg">
      <div className="container">
        <h1 className="text-4xl font-bold mb-lg">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-lg py-md border-b border-gray-200 grid grid-cols-12 gap-md font-semibold text-sm">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Action</div>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="px-lg py-md grid grid-cols-12 gap-md items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-6 flex gap-md">
                      <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400 text-xs">Image</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-sm">{item.name}</h3>
                        <p className="text-sm text-text-secondary">
                          SKU: PROD-{item.id}
                        </p>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex items-center justify-center gap-sm">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-sm py-xs border border-gray-300 rounded hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-sm py-xs border border-gray-300 rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-right font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-feedback-error hover:text-feedback-error font-semibold text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-lg">
              <Link href="/products">
                <Button variant="outline">
                  ← Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-lg sticky top-lg">
              <h2 className="text-xl font-bold mb-lg">Order Summary</h2>

              <div className="space-y-md mb-lg pb-lg border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tax (10%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-feedback-success">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-lg text-lg font-bold">
                <span>Total</span>
                <span className="text-brand-primary">${total.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-text-secondary mb-lg bg-blue-50 p-sm rounded">
                  ✓ Free shipping on orders over $100
                </p>
              )}

              <Button size="lg" className="w-full mb-md">
                Proceed to Checkout
              </Button>

              <Button variant="outline" className="w-full">
                Apply Coupon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
