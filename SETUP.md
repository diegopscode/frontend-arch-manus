# Monorepo Setup Documentation

## Phase 2: Base Setup Complete ✅

This document outlines the monorepo structure and setup that has been completed.

## Directory Structure

```
ecommerce-monorepo/
├── apps/                          # Independent Next.js applications
│   ├── store-acme/               # Acme brand e-commerce app
│   ├── store-prime/              # Prime brand e-commerce app
│   └── docs/                     # Design System documentation
│
├── packages/
│   ├── config-*/                 # Shared configurations
│   │   ├── config-eslint/        # ESLint configurations
│   │   ├── config-typescript/    # TypeScript configurations
│   │   └── config-tailwind/      # Tailwind CSS configurations
│   │
│   ├── contracts/                # TypeScript interfaces and types
│   ├── sdk-commerce/             # API client library
│   ├── server-commerce/          # Server-side logic
│   │
│   ├── domain-*/                 # Business logic (pure functions)
│   │   ├── domain-cart/
│   │   ├── domain-catalog/
│   │   ├── domain-pricing/
│   │   └── domain-checkout/
│   │
│   ├── ui-*/                     # React components
│   │   ├── ui-primitives/        # Basic components (Button, Input)
│   │   └── ui-commerce/          # Business components (ProductCard, BuyBox)
│   │
│   ├── modules-*/                # Page compositions
│   │   ├── modules-home/
│   │   ├── modules-plp/
│   │   ├── modules-pdp/
│   │   ├── modules-cart/
│   │   └── modules-checkout/
│   │
│   ├── theme-*/                  # Theming packages
│   │   ├── theme-core/           # Base design tokens
│   │   ├── theme-acme/           # Acme brand theme
│   │   └── theme-prime/          # Prime brand theme
│   │
│   └── utility-*/                # Utilities
│       ├── analytics/
│       ├── observability/
│       ├── feature-flags/
│       └── test-kit/
│
├── .editorconfig                 # Editor configuration
├── .gitignore                    # Git ignore rules
├── .npmrc                        # npm/pnpm configuration
├── .prettierignore               # Prettier ignore rules
├── .prettierrc.js                # Prettier configuration
├── package.json                  # Root package.json
├── pnpm-workspace.yaml           # pnpm workspace configuration
├── turbo.json                    # Turborepo configuration
└── README.md                     # Main documentation
```

## Implemented Packages

### Configuration Packages

#### `@ecommerce/config-typescript`
- **base.json**: Base TypeScript configuration with strict mode
- **nextjs.json**: Next.js specific configuration
- **react-library.json**: React library configuration

#### `@ecommerce/config-eslint`
- **nextjs.js**: ESLint config for Next.js apps
- **library.js**: ESLint config for library packages

#### `@ecommerce/config-tailwind`
- Base Tailwind configuration with design token mappings
- CSS variables for colors, spacing, typography

### Core Packages

#### `@ecommerce/contracts`
**Exports:**
- `IProduct` - Product interface with metadata
- `ICart`, `ICartItem` - Shopping cart interfaces
- `IOrder` - Order interface with status enum
- `IAddress` - Address interface
- `ICustomer` - Customer interface
- `IPriceInfo` - Pricing interface
- `IPaginationParams`, `IPaginatedResponse` - Pagination contracts
- `IProductFilter` - Product filtering interface
- `IApiResponse`, `IApiError` - API response contracts

#### `@ecommerce/sdk-commerce`
**Methods:**
- `getProducts(filter?, pagination?)` - List products
- `getProduct(id)` - Get single product
- `getCart(cartId)` - Get cart
- `createCart()` - Create new cart
- `addToCart(cartId, productId, quantity)` - Add item to cart
- `removeFromCart(cartId, productId)` - Remove item from cart
- `createOrder(cartId, orderData)` - Create order
- `getOrder(orderId)` - Get order details

#### `@ecommerce/theme-core`
**Features:**
- Design tokens (colors, spacing, typography, border-radius)
- Semantic tokens (brand, surface, text, feedback)
- Global CSS with Tailwind directives
- CSS variables for all tokens
- Dark mode support

#### `@ecommerce/ui-primitives`
**Components:**
- `Button` - With variants (primary, secondary, outline, ghost) and sizes (sm, md, lg)
- Loading state support
- Semantic token integration

### Theme Packages

#### `@ecommerce/theme-acme`
- Primary: #2563eb (Blue)
- Secondary: #1e40af (Dark Blue)
- Accent: #3b82f6 (Light Blue)
- Font: Inter

#### `@ecommerce/theme-prime`
- Primary: #dc2626 (Red)
- Secondary: #b91c1c (Dark Red)
- Accent: #ef4444 (Light Red)
- Font: Poppins

## Theming Strategy

### Three-Tier Token System

1. **Design Tokens** (theme-core)
   - Atomic values: `--color-gray-500`, `--spacing-md`
   - Shared across all brands
   - Foundation for semantic tokens

2. **Semantic Tokens** (theme-acme, theme-prime)
   - Context-aware: `--color-brand-primary`, `--color-text-primary`
   - Brand-specific mappings
   - Used in components

3. **Component Consumption**
   - Components use Tailwind classes mapped to semantic tokens
   - Example: `bg-brand-primary` → `var(--color-brand-primary)`
   - No hardcoded hex values

### CSS Variable Flow

```
Design Tokens (theme-core)
        ↓
Semantic Tokens (theme-acme/prime)
        ↓
Tailwind Config Mapping
        ↓
Component Classes
```

## Development Commands

### Root Level

```bash
# Install dependencies
pnpm install

# Development server (all packages)
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Type check all packages
pnpm type-check

# Run tests
pnpm test

# Format code
pnpm format

# Check formatting
pnpm format:check

# Create changeset
pnpm changeset

# Version packages
pnpm version-packages

# Release packages
pnpm release
```

### Package Level

```bash
cd packages/contracts

# Build this package
pnpm build

# Watch mode
pnpm dev

# Lint
pnpm lint

# Type check
pnpm type-check
```

## Turborepo Pipeline

The `turbo.json` defines the build pipeline:

- **build**: Depends on `^build` (dependencies first), caches `.next/**`, `dist/**`, `build/**`
- **lint**: No dependencies, caches results
- **type-check**: No dependencies, caches results
- **test**: Depends on `^build`, caches `coverage/**`
- **dev**: No cache, persistent mode

## pnpm Workspace Configuration

The `pnpm-workspace.yaml` includes:
- `apps/*` - All applications
- `packages/*` - All packages

Benefits:
- Shared node_modules for faster installs
- Workspace protocols for internal dependencies
- Automatic hoisting of common dependencies

## Next Steps

### Phase 3: Create First App (store-acme)

1. Initialize Next.js app in `apps/store-acme`
2. Configure to use shared packages
3. Import `theme-acme` for branding
4. Create layout with global styles
5. Implement pages:
   - Home page
   - Product Listing (PLP)
   - Product Detail (PDP)
   - Shopping Cart
   - Checkout (basic)

### Phase 4: Create Second App (store-prime)

1. Initialize Next.js app in `apps/store-prime`
2. Configure to use shared packages
3. Import `theme-prime` for branding
4. Reuse layouts and components from store-acme
5. Validate theming works independently

### Phase 5: Governance & Testing

1. Set up CI/CD pipeline
2. Add unit tests with Vitest
3. Add E2E tests with Playwright
4. Configure Storybook for component documentation
5. Set up visual regression testing

## Key Architectural Decisions

| Decision | Rationale | Trade-off |
| --- | --- | --- |
| **Monorepo** | Centralized code sharing, easier refactoring | Complexity in CI/CD setup |
| **pnpm workspaces** | Faster installs, better dependency management | Less familiar to some teams |
| **Turborepo** | Build optimization, task caching | Learning curve |
| **CSS Variables** | Runtime theming flexibility, deserialization | Browser support (modern browsers only) |
| **Semantic Tokens** | Decouples branding from components | Requires naming discipline |
| **Independent Apps** | Better performance, SEO, deployment | Slight code duplication |

## Troubleshooting

### Dependencies Not Resolving

```bash
# Clear pnpm cache
pnpm store prune

# Reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors

```bash
# Clean build artifacts
pnpm exec turbo run build -- --force

# Check TypeScript
pnpm type-check
```

### Workspace Protocol Issues

Ensure all internal dependencies use `workspace:*` in package.json:

```json
{
  "dependencies": {
    "@ecommerce/contracts": "workspace:*"
  }
}
```

## Resources

- [pnpm Documentation](https://pnpm.io/)
- [Turborepo Documentation](https://turbo.build/)
- [Next.js Documentation](https://nextjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Status**: Phase 2 Complete ✅  
**Next**: Phase 3 - Create store-acme app
