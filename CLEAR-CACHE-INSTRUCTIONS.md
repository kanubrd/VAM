# Clear Browser Cache Instructions

## Problem
When you navigate from the Industries page to Metal Working Fluids page using the links, you see old cached content instead of the updated content.

## Solution - Complete Browser Cache Clear

### Method 1: Hard Refresh (Try this first)
1. Open http://localhost:3000/industries/metalworking directly
2. Press **Ctrl + Shift + R** (or **Ctrl + F5**)
3. Or press **F12** → Right-click refresh button → Select "Empty Cache and Hard Reload"

### Method 2: Clear All Browser Cache (Recommended)
1. Press **Ctrl + Shift + Delete**
2. Select **"All time"** for time range
3. Check **"Cached images and files"**
4. Click **"Clear data"**
5. Close browser completely
6. Reopen browser
7. Go to http://localhost:3000

### Method 3: Incognito/Private Window
1. Open a new **Incognito/Private window** (Ctrl + Shift + N in Chrome/Edge)
2. Navigate to http://localhost:3000
3. Test navigation between pages

### Method 4: Different Browser
Try opening the site in a different browser to confirm the changes are working.

## Server Information
- Server is running at: http://localhost:3000
- Cache has been cleared on the server side
- All changes are properly saved in the code

## Next.js Note
Next.js uses client-side navigation which can cache page content. The hard refresh ensures you get the latest version.
