# Sparrowhawk

[![CI](https://github.com/0xdlow/sparrowhawk/workflows/CI/badge.svg)](https://github.com/0xdlow/sparrowhawk/actions/workflows/ci.yml)
[![Release](https://github.com/0xdlow/sparrowhawk/workflows/Release/badge.svg)](https://github.com/0xdlow/sparrowhawk/actions/workflows/release.yml)
[![CodeQL](https://github.com/0xdlow/sparrowhawk/workflows/CodeQL/badge.svg)](https://github.com/0xdlow/sparrowhawk/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg?style=flat&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-3.x-F7D336.svg?style=flat&logo=pinia)](https://pinia.vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue_Router-4.x-4FC08D.svg?style=flat&logo=vue.js)](https://router.vuejs.org/)
[![Vue I18n](https://img.shields.io/badge/Vue_I18n-9.x-4FC08D.svg?style=flat&logo=vue.js)](https://vue-i18n.intlify.dev/)

<div align="center">
  <a href="README.zh-CN.md">中文</a> | <a href="README.md">English</a>
</div>

A modern Vue 3 + TypeScript front-end project template with various practical features and best practices.

## ✨ Features

- 🔧 **Vue 3 + TypeScript** - Based on Vue 3's Composition API and TypeScript, providing type safety and better development experience
- ⚡ **Vite Build** - Using Vite as the build tool for lightning-fast development server and optimized production builds
- 📦 **Pinia State Management** - Integrated Pinia state management for simple and intuitive state management solutions
- 🧭 **Vue Router** - Built-in Vue Router with support for route guards and dynamic routing
- 🌐 **Internationalization** - Integrated Vue I18n with support for multiple languages
- 🔌 **API Integration** - Pre-configured API services with request interception, error handling, and authentication

## 🚀 Quick Start

### Using This Template

#### Method 1: Using the GitHub Interface

1. Click the "Use this template" button at the top of the repository page
2. Enter a name and description for your new repository
3. Choose public or private repository
4. Click "Create repository from template"

#### Method 2: Clone and Set Up Manually

```bash
# Clone the repository
git clone https://github.com/0xdlow/sparrowhawk.git my-project

# Navigate to the project directory
cd my-project

# Remove the original Git history
rm -rf .git

# Initialize a new Git repository
git init
git add .
git commit -m "Initial commit from Sparrowhawk template"

# Link to your remote repository (if you have one)
git remote add origin https://github.com/0xdlow/my-project.git
git push -u origin main
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── api/            # API related code
│   ├── config/     # API configuration
│   ├── helpers/    # API helper functions
│   └── services/   # API services
├── assets/         # Static assets
├── components/     # Vue components
├── config/         # Application configuration
├── i18n/           # Internationalization
│   └── locales/    # Language files
├── layouts/        # Layout components
├── routes/         # Route configuration
├── stores/         # Pinia state stores
├── styles/         # Global styles
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── views/          # Page components
```

## 🛠️ Technology Stack

- [Vue.js 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)

## 🔌 API Usage

The project has a pre-configured complete API service structure, including request interception, error handling, authentication, and retry mechanisms.

### API Service Structure

```
src/api/
├── config/             # API configuration
│   ├── index.ts        # Basic configuration (base URL, timeout, etc.)
│   └── interceptors.ts # Request/response interceptors
├── helpers/            # API helper functions
│   ├── authHelper.ts   # Authentication related helpers
│   ├── cancelHelper.ts # Request cancellation helpers
│   ├── errorHandler.ts # Error handling
│   └── retryHelper.ts  # Request retry mechanism
├── services/           # API services
│   └── userService.ts  # User-related APIs
└── index.ts            # API entry point
```

### Usage Example

```typescript
// Import API service
import { userService } from '@/api/services/userService';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const user = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const fetchUser = async (id: string) => {
      loading.value = true;
      error.value = null;
      
      try {
        user.value = await userService.getUserById(id);
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    };

    return { user, loading, error, fetchUser };
  }
});
```

### Creating a New API Service

1. Create a new service file in the `src/api/services/` directory, for example `productService.ts`:

```typescript
import apiClient from '../index';
import { Product } from '@/shared/types';

export const productService = {
  getProducts: () => apiClient.get<Product[]>('/products'),
  getProductById: (id: string) => apiClient.get<Product>(`/products/${id}`),
  createProduct: (product: Omit<Product, 'id'>) => apiClient.post<Product>('/products', product),
  updateProduct: (id: string, product: Partial<Product>) => apiClient.put<Product>(`/products/${id}`, product),
  deleteProduct: (id: string) => apiClient.delete(`/products/${id}`)
};
```

2. Import and use in your components:

```typescript
import { productService } from '@/api/services/productService';

// Use the service
const products = await productService.getProducts();
```

## 🔧 Custom Configuration

### Environment Variables

Create a `.env.local` file to set local environment variables:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

### Adding New Languages

1. Create a new language file in the `src/i18n/locales/` directory
2. Import and register the new language in `src/i18n/index.ts`

## 🔄 CI/CD

This project has a complete CI/CD pipeline to ensure code quality and automated deployment:

> Note: CI/CD badges will be displayed automatically after uploading the project to GitHub. You need to replace the repository path in the GitHub Actions workflow files with your actual repository path.

### Continuous Integration (CI)

The following checks run automatically on every push to the main branch or when creating a Pull Request:

- **Code Style Check**: Using ESLint to ensure consistent code style
- **Type Check**: Using the TypeScript compiler to validate type safety
- **Build Test**: Ensuring the project can be successfully built

### Security Analysis

- **CodeQL Analysis**: Automatically detecting security vulnerabilities in the code

### Continuous Deployment (CD)

- **Automatic Release**: When creating a new version tag (e.g., `v1.0.0`), the project is automatically built and a GitHub Release is created

### Running CI Checks Locally

Before committing your code, you can run the following commands to simulate CI checks:

```bash
# Code style check
npm run lint

# Type check
npm run typecheck

# Build test
npm run build
```

## 📄 License

[MIT](LICENSE) 