# Ecommerce Monorepo

A scalable monorepo architecture for building multiple e-commerce applications with shared core logic and independent branding strategies.

## 🏗️ Architecture Overview

This monorepo follows a **layered architecture** with clear separation of concerns:

- **Apps**: Independent Next.js applications (store-acme, store-prime)
- **Packages**: Shared libraries organized by domain and responsibility

## 📦 Packages Structure

### Configuration Packages
- `config-eslint` - Shared ESLint configurations
- `config-typescript` - Shared TypeScript configurations
- `config-tailwind` - Shared Tailwind CSS configurations

### Core Packages
- `contracts` - TypeScript interfaces and types
- `sdk-commerce` - API client library
- `server-commerce` - Server-side logic and Route Handlers

### Domain Packages (Business Logic)
- `domain-cart` - Shopping cart logic
- `domain-catalog` - Product catalog logic
- `domain-pricing` - Pricing logic
- `domain-checkout` - Checkout flow logic

### UI Packages
- `ui-primitives` - Basic UI components (Button, Input, etc.)
- `ui-commerce` - Business-specific components (ProductCard, BuyBox, etc.)

### Module Packages (Page Compositions)
- `modules-home` - Home page components
- `modules-plp` - Product Listing Page components
- `modules-pdp` - Product Detail Page components
- `modules-cart` - Shopping cart page components
- `modules-checkout` - Checkout page components

### Theme Packages
- `theme-core` - Base design tokens and Tailwind configuration
- `theme-acme` - Acme brand theme
- `theme-prime` - Prime brand theme

### Utility Packages
- `analytics` - Analytics integration
- `observability` - Logging and monitoring
- `feature-flags` - Feature flag management
- `test-kit` - Testing utilities and configurations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8.15+

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development server
pnpm dev

# Run linting
pnpm lint

# Format code
pnpm format

# Run tests
pnpm test
```

## 📝 Development Workflow

### Adding a New Package

1. Create a new directory in `packages/`
2. Add a `package.json` with the appropriate configuration
3. Create `src/` directory for source code
4. Add TypeScript configuration
5. Update root `turbo.json` if needed

### Creating a New App

1. Create a new directory in `apps/`
2. Initialize a Next.js project
3. Configure to use shared packages from the monorepo
4. Import theme and shared components

## 🎨 Theming Strategy

The monorepo uses a three-tier theming system:

1. **Design Tokens** (`theme-core`) - Atomic design values (colors, spacing, typography)
2. **Semantic Tokens** (`theme-*`) - Context-aware tokens mapped to design tokens
3. **Component Consumption** - Components use semantic tokens via CSS variables

## 🔄 Dependency Management

This monorepo uses:
- **pnpm workspaces** for dependency management
- **Turborepo** for build optimization and caching
- **Changesets** for version management and publishing

## 📚 Documentation

Each package should include:
- `README.md` - Package overview and usage
- `CHANGELOG.md` - Version history (managed by Changesets)
- Inline code documentation

## 🧪 Testing

Testing is configured per package type:
- Unit tests: Vitest or Jest
- Integration tests: Vitest
- E2E tests: Playwright (for apps)
- Visual regression: Chromatic or Percy (optional)

## 🔐 Code Quality

- **TypeScript**: Strict mode enabled across all packages
- **ESLint**: Shared configuration with package-specific rules
- **Prettier**: Automatic code formatting
- **Type Checking**: Turbo task for all packages

## 📦 Publishing

Packages are published using Changesets:

```bash
# Create a changeset
pnpm changeset

# Version packages
pnpm version-packages

# Publish to npm
pnpm release
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes across packages as needed
3. Run `pnpm format` and `pnpm lint`
4. Create a changeset for your changes
5. Submit a pull request

## 📄 License

MIT
