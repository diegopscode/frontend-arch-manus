# Store Acme

Acme brand e-commerce application built with Next.js, React, and TypeScript.

## Features

- **Home Page**: Hero section, featured products, categories, and CTAs
- **Product Listing (PLP)**: Browse products with filtering and sorting
- **Product Detail (PDP)**: Detailed product information with images and specifications
- **Shopping Cart**: Add/remove items, adjust quantities, and view order summary
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Acme Branding**: Custom theme with Acme brand colors (blue primary)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with semantic tokens
- **Components**: Shared UI primitives from `@ecommerce/ui-primitives`
- **Theming**: Acme theme from `@ecommerce/theme-acme`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header and footer
│   ├── globals.css         # Global styles with theme tokens
│   ├── page.tsx            # Home page
│   ├── products/
│   │   ├── page.tsx        # Product listing page (PLP)
│   │   └── [id]/
│   │       └── page.tsx    # Product detail page (PDP)
│   └── cart/
│       └── page.tsx        # Shopping cart page
└── lib/                    # Utilities and helpers
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8.15+

### Installation

From the monorepo root:

```bash
pnpm install
```

### Development

```bash
# Start development server for store-acme
pnpm dev --filter store-acme

# Or from the app directory
cd apps/store-acme
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
pnpm build --filter store-acme
```

### Production

```bash
pnpm start --filter store-acme
```

## Pages

### Home Page (`/`)
- Hero section with CTA
- Featured products grid
- Category showcase
- Call-to-action section

### Products Page (`/products`)
- Product grid with 12 mock products
- Sidebar filters (category, sort)
- Product cards with pricing and ratings
- Quick view and add to cart actions

### Product Detail Page (`/products/[id]`)
- Large product image with gallery
- Product information and pricing
- Color and quantity selection
- Features and specifications
- Related products section

### Cart Page (`/cart`)
- Cart items with quantity controls
- Item removal
- Order summary with tax and shipping
- Checkout CTA
- Empty cart state

## Theming

The app uses the Acme theme with:
- **Primary Color**: #2563eb (Blue)
- **Secondary Color**: #1e40af (Dark Blue)
- **Accent Color**: #3b82f6 (Light Blue)

Theme tokens are imported from:
- `@ecommerce/theme-core` - Design tokens
- `@ecommerce/theme-acme` - Semantic tokens

## Shared Packages

- `@ecommerce/contracts` - Type definitions
- `@ecommerce/sdk-commerce` - API client
- `@ecommerce/ui-primitives` - Button and other UI components
- `@ecommerce/theme-core` - Design tokens
- `@ecommerce/theme-acme` - Acme brand theme

## Development Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes
3. Run linting: `pnpm lint`
4. Type check: `pnpm type-check`
5. Commit with conventional commits: `git commit -m "feat: add feature"`
6. Push and create PR

## Performance Optimizations

- Next.js Image optimization
- Server Components for static content
- Client Components for interactivity
- CSS-in-JS with Tailwind for minimal bundle
- Shared package caching via Turborepo

## SEO

- Metadata configured in layout
- Open Graph tags
- Semantic HTML structure
- Fast page loads with Next.js

## Future Enhancements

- [ ] User authentication
- [ ] Real API integration
- [ ] Shopping cart persistence
- [ ] Checkout flow
- [ ] Order history
- [ ] Product reviews
- [ ] Wishlist functionality
- [ ] Search functionality
- [ ] Analytics integration

## Contributing

Follow the monorepo contribution guidelines. Ensure all code is:
- TypeScript strict mode compliant
- Properly formatted with Prettier
- Linted with ESLint
- Type-safe

## License

MIT
