# PageLoader Fix for Port Forwarding Issue

## Problem
The loading screen doesn't hide when accessing the site through a forwarded port, but works fine on localhost.

## Root Cause
Port forwarding can cause:
- Slower font loading from different origin
- Different timing for resource loading events
- Browser treating forwarded URL differently than localhost

## Solution Applied

### Changes Made to `PageLoader.tsx`

1. **Multiple Event Listeners**: Now listens to both `DOMContentLoaded` and `load` events
2. **Ready State Checks**: Checks `document.readyState` for different loading stages
3. **Fallback Timer**: 5-second maximum timeout to force hide if events don't fire
4. **RequestAnimationFrame**: Ensures DOM is fully painted before starting timer
5. **Console Logging**: Added debug logs to diagnose issues (can be removed later)
6. **Pointer Events**: Added `pointerEvents: 'none'` to prevent interaction blocking

## Testing

### In Browser Console
When you load the forwarded site, check the browser console (F12) for these logs:
```
[PageLoader] Initial readyState: loading
[PageLoader] Document loading, waiting for events
[PageLoader] Load event fired, readyState: complete
[PageLoader] Hiding loader
```

### If Stuck
If you see the first 2 logs but NOT the "Hiding loader" message:
- Font files might be blocking
- External resources timing out
- Network latency issues

### Fallback Behavior
Even if events don't fire, the loader will **automatically hide after 5 seconds**.

## Alternative Solutions

### Option 1: Shorter Fallback (Current)
```typescript
// In PageLoader.tsx line ~26
maxTimeout = setTimeout(hideLoader, 5000); // 5 seconds max
```

### Option 2: Even Shorter Timeout
If 5 seconds is too long, change to:
```typescript
maxTimeout = setTimeout(hideLoader, 3000); // 3 seconds max
```

### Option 3: Simple Fixed Timer (No event waiting)
Replace the entire useEffect with:
```typescript
useEffect(() => {
  const timer = setTimeout(() => setShow(false), 2000);
  return () => clearTimeout(timer);
}, []);
```

## Removing Debug Logs

Once working properly, remove these lines from `PageLoader.tsx`:
- Line ~8: `console.log('[PageLoader] Initial readyState:', ...);`
- Line ~12: `console.log('[PageLoader] Hiding loader');`
- Line ~17: `console.log('[PageLoader] Load event fired, ...);`
- Line ~28: `console.log('[PageLoader] Max timeout reached...);`
- Line ~33: `console.log('[PageLoader] Document already complete');`
- Line ~36: `console.log('[PageLoader] Document interactive...);`
- Line ~40: `console.log('[PageLoader] Document loading...);`

## Font Loading Issue

If fonts are causing the delay:
1. Make sure font files are in `public/fonts/`
2. Check browser Network tab for 404s on font files
3. Consider using `font-display: swap` (already added in styles.css)

## Current Status
✅ Fixed with multi-strategy approach:
- Event-based hiding (normal case)
- 5-second fallback (slow networks)
- Multiple ready state checks (different scenarios)
- Console logs for debugging
