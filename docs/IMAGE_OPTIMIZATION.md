# Image Optimization Guide

## Responsive Image Sizing Configuration

This document defines standard image sizes and `sizes` attribute patterns for optimal image selection across devices.

**Requirements Validated:** 19.1, 19.3, 19.4, 19.5

## Breakpoints

The application uses the following responsive breakpoints for image sizing:

- **Mobile**: < 768px → serve 640-828px images
- **Tablet**: 768-1200px → serve 1080-1200px images
- **Desktop**: > 1200px → serve 1920-2048px images
- **High-DPI**: Automatically serve 2x variants for retina displays

## Next.js Image Configuration

Configured in `next.config.mjs`:

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 64, 96, 128, 256, 384],
  minimumCacheTTL: 604800, // 7 days
}
```

## Sizes Attribute Patterns

### Full-Width Images (Hero, Banners)

For images that span the full viewport width:

```tsx
<Image
  src="/hero-bg.png"
  alt="Hero background"
  fill
  quality={85}
  sizes="100vw"
  priority // for above-fold images only
/>
```

**Sizes breakdown:**
- `100vw` = Image takes full viewport width on all devices

### Constrained Content Images

For images within a max-width container (e.g., 1200px):

```tsx
<Image
  src="/content-image.jpg"
  alt="Content"
  width={1200}
  height={600}
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>
```

**Sizes breakdown:**
- Mobile (< 768px): `100vw` - full width
- Tablet (768-1200px): `80vw` - 80% of viewport
- Desktop (> 1200px): `1200px` - fixed max width

### Grid Images (2-column, 3-column layouts)

For images in responsive grid layouts:

**2-Column Grid:**
```tsx
<Image
  src="/grid-item.jpg"
  alt="Grid item"
  width={600}
  height={400}
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
/>
```

**3-Column Grid:**
```tsx
<Image
  src="/grid-item.jpg"
  alt="Grid item"
  width={400}
  height={300}
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Sizes breakdown (3-column):**
- Mobile (< 768px): `100vw` - stacked, full width
- Tablet (768-1200px): `50vw` - 2 columns
- Desktop (> 1200px): `33vw` - 3 columns

### Card/Thumbnail Images

For smaller images like cards or thumbnails:

```tsx
<Image
  src="/thumbnail.jpg"
  alt="Thumbnail"
  width={384}
  height={256}
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
/>
```

### Avatar/Icon Images

For small fixed-size images:

```tsx
<Image
  src="/avatar.jpg"
  alt="User avatar"
  width={128}
  height={128}
  quality={90}
  sizes="128px"
/>
```

## High-DPI (Retina) Support

Next.js automatically serves 2x resolution variants for high-DPI displays:

- Standard display (1x): Serves image at specified size
- Retina display (2x): Serves image at 2x size (e.g., 640px → 1280px actual)
- Limit for mobile: Cap at 2x to prevent excessive bandwidth usage

**Configuration for mobile optimization:**
```tsx
// Mobile-specific sizing
const isMobile = window.innerWidth < 768;
const quality = isMobile ? 80 : 85; // Lower quality on mobile if needed
```

## Priority Loading Strategy

### Above-the-Fold Images (Priority)

```tsx
<Image
  src="/hero-bg.png"
  alt="Hero"
  fill
  priority // Preload for LCP optimization
  quality={85}
  sizes="100vw"
/>
```

**When to use `priority`:**
- Hero/banner images
- LCP (Largest Contentful Paint) elements
- First visible content

### Below-the-Fold Images (Lazy)

```tsx
<Image
  src="/below-fold.jpg"
  alt="Content"
  width={800}
  height={600}
  loading="lazy" // Default behavior
  quality={85}
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

**Default behavior:**
- Lazy loading enabled by default
- Loads when within 1000px of viewport
- Fade-in transition on load

## Image Format Priority

Next.js serves images in this order of preference:

1. **AVIF** - Best compression (if browser supports)
2. **WebP** - Good compression (fallback)
3. **Original format** (JPEG/PNG) - Final fallback

**Configuration is automatic** via `next.config.mjs` formats array.

## Quality Settings

Recommended quality settings by use case:

- **Hero images**: 85 (high quality for visual impact)
- **Content images**: 85 (balanced quality/size)
- **Thumbnails**: 80 (smaller, quality less critical)
- **Avatars/icons**: 90 (small files, quality important)
- **Background images**: 75-80 (can be lower, often subtle)

## Performance Considerations

### Mobile Optimization

```tsx
// Example: Adaptive quality based on connection speed
import { useConnectionSpeed } from '@/hooks/useConnectionSpeed';

const isSlowConnection = useConnectionSpeed() === '2g' || useConnectionSpeed() === 'slow-2g';
const quality = isSlowConnection ? 75 : 85;

<Image src="/image.jpg" quality={quality} />
```

### Bandwidth Optimization

- Mobile devices: Cap at 2x pixel ratio maximum
- Slow connections: Reduce quality to 75
- Use appropriate `sizes` to prevent downloading oversized images

## Common Patterns Summary

| Use Case | Sizes Attribute | Notes |
|----------|----------------|-------|
| Full-width hero | `100vw` | Use with `fill` and `priority` |
| Constrained content | `(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px` | Within max-width container |
| 2-column grid | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px` | Responsive grid |
| 3-column grid | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw` | Responsive grid |
| Thumbnails | `(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px` | Cards/previews |
| Fixed size | `128px` | Avatars, icons |

## Verification

To verify responsive images are working correctly:

1. **Check Network tab**: Confirm correct image sizes are loaded
2. **Test on devices**: Verify appropriate sizes on mobile, tablet, desktop
3. **Check formats**: Confirm AVIF/WebP being served (not original format)
4. **Monitor LCP**: Ensure hero images load quickly with `priority`
5. **Validate CLS**: Confirm explicit dimensions prevent layout shift

## References

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Responsive Images MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- Requirements: 19.1, 19.3, 19.4, 19.5
