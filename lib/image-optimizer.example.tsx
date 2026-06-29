/**
 * Example usage of the image optimizer
 * 
 * This file demonstrates how to use the image optimization functions
 * programmatically in your code.
 */

import { optimizeImages, scanDirectory, optimizeImage } from './image-optimizer';

/**
 * Example 1: Run full optimization on public directory
 */
async function example1_FullOptimization() {
  console.log('Running full image optimization...\n');
  await optimizeImages();
}

/**
 * Example 2: Scan directory to get list of images
 */
async function example2_ScanImages() {
  const publicDir = './public';
  const imageFiles = await scanDirectory(publicDir);
  
  console.log(`Found ${imageFiles.length} images:`);
  imageFiles.forEach(file => console.log(`  - ${file}`));
}

/**
 * Example 3: Optimize a single image
 * Note: Requires sharp to be imported
 */
async function example3_OptimizeSingleImage() {
  // Dynamic import of sharp (since it's not a direct dependency)
  const sharp = (await import('sharp')).default;
  
  const imagePath = './public/hero-bg.png';
  const result = await optimizeImage(imagePath, sharp);
  
  if (result.error) {
    console.error('Optimization failed:', result.error);
  } else {
    console.log('Optimization successful!');
    console.log(`  Original: ${result.originalSize} bytes`);
    console.log(`  WebP: ${result.webpSize} bytes`);
    console.log(`  AVIF: ${result.avifSize} bytes`);
  }
}

/**
 * Example 4: Run optimization from a build script
 */
async function example4_BuildScript() {
  try {
    console.log('🏗️  Running pre-build image optimization...');
    await optimizeImages();
    console.log('✅ Image optimization complete, proceeding with build');
    
    // Continue with your build process here...
    
  } catch (error) {
    console.error('❌ Image optimization failed:', error);
    // Decide whether to continue or fail the build
    process.exit(1);
  }
}

/**
 * Example 5: Custom optimization with progress tracking
 */
async function example5_CustomOptimization() {
  const sharp = (await import('sharp')).default;
  const publicDir = './public';
  
  // Scan for images
  const images = await scanDirectory(publicDir);
  
  console.log(`Processing ${images.length} images...\n`);
  
  let processed = 0;
  let totalSavings = 0;
  
  for (const imagePath of images) {
    const result = await optimizeImage(imagePath, sharp);
    processed++;
    
    if (!result.error && result.avifSize) {
      const savings = result.originalSize - result.avifSize;
      totalSavings += savings;
      
      console.log(`[${processed}/${images.length}] ${imagePath}`);
      console.log(`  Saved ${savings} bytes with AVIF\n`);
    }
  }
  
  console.log(`Total savings: ${totalSavings} bytes`);
}

// Export examples for testing or documentation
export {
  example1_FullOptimization,
  example2_ScanImages,
  example3_OptimizeSingleImage,
  example4_BuildScript,
  example5_CustomOptimization
};

/**
 * Usage in Next.js config (next.config.mjs):
 * 
 * import { optimizeImages } from './lib/image-optimizer.js';
 * 
 * // Run before build
 * if (process.env.OPTIMIZE_IMAGES === 'true') {
 *   await optimizeImages();
 * }
 * 
 * export default nextConfig;
 */

/**
 * Usage in package.json scripts:
 * 
 * {
 *   "scripts": {
 *     "optimize:images": "node scripts/optimize-images.mjs",
 *     "prebuild": "npm run optimize:images",
 *     "build": "next build"
 *   }
 * }
 */

/**
 * Usage with Next.js Image component:
 * 
 * After running the optimizer, use Next.js Image component normally.
 * Next.js will automatically serve the optimized WebP/AVIF variants:
 * 
 * import Image from 'next/image';
 * 
 * function Hero() {
 *   return (
 *     <Image 
 *       src="/hero-bg.png"  // Original path
 *       alt="Hero"
 *       width={1920}
 *       height={1080}
 *       priority
 *       quality={85}
 *     />
 *   );
 * }
 * 
 * The browser will receive:
 * - AVIF if supported (best compression)
 * - WebP if supported (good compression)
 * - PNG as fallback
 */
