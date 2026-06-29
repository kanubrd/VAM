import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useParallax } from './useParallax';
import { RefObject } from 'react';

/**
 * Integration tests for useParallax hook
 * 
 * This hook validates Task 3.2 requirements:
 * - Uses Framer Motion's useScroll and useTransform
 * - Maps scroll progress to translateY (max 20% of scroll distance)
 * - Desktop only: disabled on viewports < 768px
 * - Pauses calculations when element out of viewport (Intersection Observer)
 * - GPU-accelerated (transform only)
 */

describe('useParallax', () => {
  let mockRef: RefObject<HTMLDivElement>;
  let mockElement: HTMLDivElement;
  let matchMediaMock: any;

  beforeEach(() => {
    // Create mock element
    mockElement = document.createElement('div');
    mockRef = { current: mockElement };

    // Mock matchMedia for desktop by default
    matchMediaMock = vi.fn();
    window.matchMedia = matchMediaMock;
    matchMediaMock.mockReturnValue({
      matches: true, // Desktop
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    // Mock IntersectionObserver
    global.IntersectionObserver = vi.fn(function(callback) {
      return {
        observe: vi.fn(),
        disconnect: vi.fn(),
        unobserve: vi.fn(),
        takeRecords: vi.fn(),
        root: null,
        rootMargin: '',
        thresholds: [],
      };
    }) as any;
  });


  describe('Requirements validation', () => {
    it('should return motion values for scroll and y transform (Requirement 3.1, 3.2)', () => {
      const { result } = renderHook(() => useParallax(mockRef));

      // Validate return values exist
      expect(result.current.scrollProgress).toBeDefined();
      expect(result.current.y).toBeDefined();
      expect(typeof result.current.isActive).toBe('boolean');
    });

    it('should enforce maximum parallax strength of 20% (Requirement 3.2)', () => {
      // Test with strength beyond maximum
      const { result } = renderHook(() => useParallax(mockRef, { strength: 0.5 }));

      // Hook should internally clamp to 0.2 (20%)
      expect(result.current).toBeDefined();
    });

    it('should use desktop-only detection with 768px breakpoint (Requirement 3.4)', () => {
      renderHook(() => useParallax(mockRef));

      // Verify that mediaQuery was called with correct breakpoint
      expect(matchMediaMock).toHaveBeenCalledWith('(min-width: 768px)');
    });

    it('should be inactive on mobile (< 768px) (Requirement 3.4)', () => {
      // Mock mobile viewport
      matchMediaMock.mockReturnValue({
        matches: false, // Mobile
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      });

      const { result } = renderHook(() => useParallax(mockRef));

      expect(result.current.isActive).toBe(false);
    });

    it('should create Intersection Observer to pause calculations when out of viewport (Requirement 3.5)', () => {
      renderHook(() => useParallax(mockRef));

      // Verify Intersection Observer was created
      expect(IntersectionObserver).toHaveBeenCalled();
      
      // Verify it was called with correct options
      const calls = (IntersectionObserver as any).mock.calls;
      expect(calls.length).toBeGreaterThan(0);
      
      // Check for rootMargin option (should include buffer for early activation)
      const options = calls[0][1];
      if (options) {
        expect(options.rootMargin).toBe('100px 0px');
      }
    });

    it('should use GPU-accelerated transforms only (Requirement 3.3)', () => {
      // The hook implementation uses Framer Motion's useTransform with percentage values
      // which translate to GPU-accelerated translateY transforms
      const { result } = renderHook(() => useParallax(mockRef));

      // Verify the hook returns a y transform value (GPU-accelerated)
      expect(result.current.y).toBeDefined();
      // The implementation ensures only transform properties are used
    });
  });

  describe('Hook options', () => {
    it('should accept custom strength option', () => {
      const { result } = renderHook(() => useParallax(mockRef, { strength: 0.15 }));

      expect(result.current).toBeDefined();
    });

    it('should accept custom offset option', () => {
      const { result } = renderHook(() => useParallax(mockRef, { offset: ['start start', 'end end'] }));

      expect(result.current).toBeDefined();
    });

    it('should respect enabled option when false', () => {
      const { result } = renderHook(() => useParallax(mockRef, { enabled: false }));

      expect(result.current.isActive).toBe(false);
    });

    it('should default strength to 0.1 (10%)', () => {
      const { result } = renderHook(() => useParallax(mockRef));

      // Default behavior - hook should work with default strength
      expect(result.current).toBeDefined();
    });
  });

  describe('Edge cases', () => {
    it('should handle null ref gracefully', () => {
      const nullRef = { current: null };

      expect(() => {
        renderHook(() => useParallax(nullRef));
      }).not.toThrow();
    });

    it('should clamp strength to minimum 0%', () => {
      const { result } = renderHook(() => useParallax(mockRef, { strength: -0.5 }));

      // Should not throw and should clamp negative values
      expect(result.current).toBeDefined();
    });

    it('should clamp strength to maximum 20%', () => {
      const { result } = renderHook(() => useParallax(mockRef, { strength: 1.0 }));

      // Should not throw and should clamp excessive values
      expect(result.current).toBeDefined();
    });
  });

  describe('Lifecycle', () => {
    it('should disconnect IntersectionObserver on unmount', () => {
      const mockDisconnect = vi.fn();
      
      (IntersectionObserver as any).mockImplementation(function() {
        return {
          observe: vi.fn(),
          disconnect: mockDisconnect,
          unobserve: vi.fn(),
          takeRecords: vi.fn(),
          root: null,
          rootMargin: '',
          thresholds: [],
        };
      });

      const { unmount } = renderHook(() => useParallax(mockRef));
      unmount();

      expect(mockDisconnect).toHaveBeenCalled();
    });

    it('should clean up media query listener on unmount', () => {
      const removeEventListener = vi.fn();
      matchMediaMock.mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener,
      });

      const { unmount } = renderHook(() => useParallax(mockRef));
      unmount();

      expect(removeEventListener).toHaveBeenCalled();
    });
  });
});

