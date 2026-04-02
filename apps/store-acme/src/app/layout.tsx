import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Acme Store - Premium E-commerce',
  description: 'Discover premium products at Acme Store',
  openGraph: {
    title: 'Acme Store',
    description: 'Discover premium products at Acme Store',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200 bg-white shadow-sm">
          <nav className="container flex items-center justify-between py-lg">
            <div className="flex items-center gap-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
                  A
                </div>
                <span className="text-xl font-bold text-brand-primary">
                  Acme Store
                </span>
              </div>
            </div>
            <div className="flex items-center gap-lg">
              <a href="/" className="text-text-primary hover:text-brand-primary">
                Home
              </a>
              <a href="/products" className="text-text-primary hover:text-brand-primary">
                Products
              </a>
              <a href="/cart" className="text-text-primary hover:text-brand-primary">
                Cart
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-200 bg-gray-50 mt-2xl">
          <div className="container py-xl">
            <div className="grid grid-cols-4 gap-lg mb-lg">
              <div>
                <h4 className="font-bold mb-md">About</h4>
                <ul className="space-y-sm text-sm text-text-secondary">
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-md">Support</h4>
                <ul className="space-y-sm text-sm text-text-secondary">
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-md">Legal</h4>
                <ul className="space-y-sm text-sm text-text-secondary">
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-md">Follow</h4>
                <ul className="space-y-sm text-sm text-text-secondary">
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-primary">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-lg text-center text-sm text-text-secondary">
              <p>&copy; 2024 Acme Store. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
