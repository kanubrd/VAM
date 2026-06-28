# Utility Hooks

This directory contains core utility hooks for the premium enterprise enhancement feature.

## Available Hooks

### `useReducedMotion`
Detects if the user has enabled prefers-reduced-motion in their system settings for accessibility compliance.

```tsx
import { useReducedMotion } from '@/hooks/useReducedMotion';

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ 
        duration: prefersReducedMotion ? 0.01 : 0.6 
      }}
    />
  );
}
```

### `useMediaQuery`
Responsive breakpoint detection using CSS media queries.

```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

### `useDeviceType`
Mobile/desktop/tablet detection using standard responsive breakpoints.

```tsx
import { useDeviceType } from '@/hooks/useDeviceType';

function Component() {
  const { isMobile, isTablet, isDesktop, isMobileOrTablet } = useDeviceType();
  
  // Disable parallax on mobile devices
  const enableParallax = isDesktop;
  
  return (
    <div>
      {enableParallax && <ParallaxEffect />}
    </div>
  );
}
```

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: >= 1024px

### `useDebounce`
Input debouncing for performance optimization of expensive operations.

```tsx
import { useDebounce } from '@/hooks/useDebounce';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    // This only runs 300ms after user stops typing
    if (debouncedSearchTerm) {
      performExpensiveSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

**Recommended delays:**
- Search input: 300ms
- Scroll calculations: 150ms
- Resize handlers: 200ms

## Testing

All hooks have comprehensive unit tests. Run tests with:

```bash
npm test hooks/
```

## Requirements Coverage

These hooks support the following requirements:
- **21.1, 21.2**: Accessibility - Reduced motion detection
- **23.1**: Mobile optimization - Device type detection
- **24.4**: Interaction responsiveness - Input debouncing

## Related Components

These hooks are used by:
- Animation system components (`components/animations/`)
- Parallax effects
- Performance-critical features
- Responsive UI components
