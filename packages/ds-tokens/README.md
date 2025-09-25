# 🎨 @luispmoraisc/ds-tokens

> **Design tokens that power consistent visual experiences across all platforms**

[![NPM Version](https://img.shields.io/github/package-json/v/luispmoraisc/siul.core?filename=packages%2Fds-tokens%2Fpackage.json)](https://github.com/luispmoraisc/siul.core/pkgs/npm/ds-tokens)
[![License](https://img.shields.io/npm/l/@luispmoraisc/ds-tokens.svg)](https://github.com/luispmoraisc/siul.core/blob/main/LICENSE)

A comprehensive design token system built with Style Dictionary that ensures visual consistency across web, mobile, and native applications. Transform design decisions into code with multi-platform support.

## ✨ Features

- 🎨 **Multi-Platform Export** - Generate tokens for Web, iOS, Android, and more
- 🔧 **Format Flexibility** - Export as JS, CSS, SCSS, JSON, and native formats
- 🎯 **Category Organization** - Logically grouped tokens (colors, spacing, typography)
- 🚀 **Type-Safe** - Full TypeScript support with auto-generated types
- 🔄 **Build Integration** - Seamless NX monorepo integration
- 📱 **Cross-Platform** - One source of truth for all your applications

## 🛠 Tech Stack

| Technology                                       |
| ------------------------------------------------ |
| [Style Dictionary](https://styledictionary.com/) |
| [TypeScript](https://www.typescriptlang.org/)    |
| [NX](https://nx.dev/)                            |
| [Vite](https://vitejs.dev/)                      |

## 📦 Installation

```bash
# Using npm
npm install @luispmoraisc/ds-tokens

# Using yarn
yarn add @luispmoraisc/ds-tokens

# Using pnpm
pnpm add @luispmoraisc/ds-tokens
```

## 🚀 Usage

### JavaScript/TypeScript

```typescript
import { colors, spacing, typography } from '@luispmoraisc/ds-tokens';

// Use in your components
const Button = styled.button`
  background-color: ${colors.primary[500]};
  padding: ${spacing.md};
  font-family: ${typography.fontFamily.primary};
`;
```

### CSS

```css
@import '@luispmoraisc/ds-tokens/css/tokens.css';

.button {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
  font-family: var(--typography-font-family-primary);
}
```

### SCSS

```scss
@import '@luispmoraisc/ds-tokens/scss/tokens.scss';

.button {
  background-color: $color-primary-500;
  padding: $spacing-md;
  font-family: $typography-font-family-primary;
}
```

## 🏗 Available Token Categories

| Category          | Description                         | Export Formats |
| ----------------- | ----------------------------------- | -------------- |
| 🎨 **Colors**     | Primary, secondary, semantic colors | JS, CSS, SCSS  |
| 📏 **Spacing**    | Consistent spacing scale            | JS, CSS, SCSS  |
| 📝 **Typography** | Font families, sizes, weights       | JS, CSS, SCSS  |

## 🔧 Development Guide

### 🎯 Creating a New Token Category

Follow these steps to add a new token category to the system:

#### 1. **Create Token Structure**

Inside the `src/tokens/categories` folder, create a new directory for your category:

```bash
mkdir src/tokens/categories/shadows
```

Create an `index.json` file with your token definitions:

```json
{
  "shadow": {
    "sm": {
      "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    },
    "md": {
      "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    "lg": {
      "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

> 💡 **Important:** The first attribute (`shadow` in this example) becomes your category name.

#### 2. **Update Configuration**

In the `config.json` file, add your new category to the `files` section under each platform:

```json
{
  "platforms": {
    "js": {
      "files": [
        {
          "filter": "shadow",
          "destination": "js/shadows.js",
          "format": "javascript/es6"
        }
      ]
    }
  }
}
```

#### 3. **Configure Build System**

Update the `vite.config.ts` file to include your new category in the build:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // ... existing entries
        shadows: './src/generated/js/shadows.js',
      },
    },
  },
});
```

#### 4. **Generate Tokens**

Run the build command to generate your new tokens:

```bash
nx build ds-tokens
```

### 🧪 Testing Your Changes

Verify that your tokens are generated correctly:

```bash
# Check generated files
ls src/generated/

# Test the build
nx build ds-tokens

# Run tests if available
nx test ds-tokens
```

## 📚 Documentation

Explore our design tokens in our interactive documentation:

🔗 **[View Token Gallery](https://luispmoraisc.github.io/siul.core/)**

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](https://github.com/luispmoraisc/siul.core/blob/main/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/luispmoraisc/siul.core/blob/main/LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by the <a href="https://github.com/luispmoraisc">@luispmoraisc</a></p>
  <p>
    <a href="https://luispmoraisc.github.io/siul.core/">📖 Documentation</a> •
    <a href="https://github.com/luispmoraisc/siul.core/issues">🐛 Report Bug</a> •
    <a href="https://github.com/luispmoraisc/siul.core/issues">💡 Request Feature</a>
  </p>
</div>
