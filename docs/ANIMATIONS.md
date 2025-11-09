# Animation Implementation

- Library: `framer-motion` for page transitions, hover/tap micro-interactions,
  and scroll-triggered `whileInView` effects.
- Hero: animated gradient overlay, particle dots with looping motion, and a
  typewriter introduction built with a small hook.
- Header: subtle hover scaling on links, mobile menu fade-in/out, and icon
  rotation.
- About: fade-in bio, animated skill bars growing to target percent on entering
  viewport; mouse-follow panel with radial highlight.
- Projects: card hover lift with perspective transform, Next Image lazy-loaded
  with opacity transition, modal using `AnimatePresence`.
- Contact: input focus rings and button micro-interactions; success/error
  message fade.
- Loading: route-level spinner using infinite rotation.

Accessibility: modals are marked `role="dialog"` and `aria-modal`, focus is
managed by closing on overlay click or `Escape`.