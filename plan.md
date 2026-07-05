Replace the default browser scrolling in the HabitFlow application with a premium smooth scrolling experience.

Do NOT use the browser's native scrollbar behavior.

The scrolling should feel identical to modern SaaS websites such as:

• Linear
• Vercel
• Apple
• Stripe
• Framer
• Notion
• Raycast

===============================================================================
OBJECTIVE
===============================================================================

Implement buttery-smooth scrolling across the entire React application.

Scrolling should feel premium, fluid, and responsive.

Avoid lag, jitter, or delayed interactions.

===============================================================================
SCROLL LIBRARY
===============================================================================

Use Lenis (preferred).

Do NOT use Locomotive Scroll.

Do NOT create custom CSS hacks.

Use the latest version of Lenis with React.

===============================================================================
GLOBAL SCROLL
===============================================================================

Apply smooth scrolling globally.

The entire application should use the same scroll behavior.

Scrolling should work for all over the website

===============================================================================
SCROLL FEEL
===============================================================================

The scroll should feel

✔ Smooth

✔ Responsive

✔ Natural

✔ Inertia based

✔ Premium

✔ High FPS

Never feel slow or heavy.

Scrolling should immediately respond to user input.

===============================================================================
ANIMATION
===============================================================================

Integrate Lenis with Framer Motion.

Animations should remain perfectly synchronized while scrolling.

No animation flickering.

No layout jumping.

===============================================================================
SCROLLBAR
===============================================================================

Hide the default browser scrollbar.

Replace it with a custom thin scrollbar.

Scrollbar should be

• Minimal

• Rounded

• Semi-transparent

• Modern

• Visible only while scrolling

• Fade out after scrolling stops

Scrollbar colors

Light Mode

Track
#F1F5F9

Thumb
#6366F1

Dark Mode

Track
#111827

Thumb
#8B5CF6

Scrollbar width

6px

Rounded

999px

Hover effect

Slightly brighter thumb.

===============================================================================
SCROLL PERFORMANCE
===============================================================================

Maintain

60 FPS

No dropped frames

No memory leaks

Optimized requestAnimationFrame loop

No unnecessary re-renders

===============================================================================
PAGE TRANSITIONS
===============================================================================

When navigating between pages

Automatically scroll to top.

Animate page transitions smoothly.

No sudden jump.

===============================================================================
MODALS
===============================================================================

When any modal opens

Lock background scrolling.

Only modal content should scroll.

Restore previous scroll position after closing.

===============================================================================
DRAWERS
===============================================================================

Background scrolling should stop while drawer is open.

Drawer content should scroll smoothly.

===============================================================================
SIDEBAR
===============================================================================

Sidebar should have its own independent smooth scrolling.

Hide scrollbar until hover.

Maintain smooth inertia.

===============================================================================
RESPONSIVE
===============================================================================

Desktop

Smooth scrolling enabled

Laptop

Smooth scrolling enabled

Tablet

Smooth scrolling enabled

Mobile

Native touch scrolling

Do NOT negatively affect mobile performance.

===============================================================================
ACCESSIBILITY
===============================================================================

Respect

prefers-reduced-motion

If enabled

Disable smooth scrolling automatically.

Use native browser scrolling.

===============================================================================
CODE QUALITY
===============================================================================

Create reusable architecture.

Suggested structure

components/
  SmoothScrollProvider.jsx

hooks/
  useLenis.js

utils/
  scrollToTop.js

Integrate globally using App.jsx or Layout.jsx.

Keep the implementation clean and modular.

===============================================================================
EXPECTED RESULT
===============================================================================

The entire HabitFlow application should feel like a premium modern SaaS product.

Scrolling should be buttery smooth, responsive, elegant, and synchronized with Framer Motion animations.

The experience should match the quality of Linear, Vercel, Stripe, Apple, and Framer websites while maintaining excellent performance and clean React architecture.