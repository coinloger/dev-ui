# @coinloger/dev-ui

React UI component library for Coinloger projects.

## Installation

```bash
npm install @coinloger/dev-ui
```

## Setup

### 1. Import Styles
Import the library's CSS in your main entry file (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@coinloger/dev-ui/style.css';
```

### 2. Wrap with ThemeProvider
Wrap your application with the `ThemeProvider` to enable dynamic theming:

```tsx
import { ThemeProvider } from '@coinloger/dev-ui';
import { defaultTheme } from './your-theme-config'; // Optional customized theme

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Usage

### Components

```tsx
import { Button, Card, Text } from '@coinloger/dev-ui';

function Example() {
  return (
    <Card>
      <Text variant="lead">Hello World</Text>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

### Theming
You can override default theme values by passing a `ThemeConfig` object to the provider.

```tsx
const customTheme = {
  colors: {
    primary: '#ff0000',
    background: '#f0f0f0'
  }
};
```
