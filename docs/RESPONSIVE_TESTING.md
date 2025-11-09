# Responsive Design Testing

Test devices and breakpoints:
- Mobile: iPhone SE/12 (360–390px) – header hamburger, stacked sections
- Tablet: iPad (768px) – two-column About, grid Projects
- Desktop: 1280–1440px – three-column Projects, centered Hero

Results:
- Navigation: hamburger toggles with accessible `aria-expanded`; links scroll smoothly.
- Hero: background and particles scale fluidly; text remains readable.
- About: skill bars wrap correctly; mouse-follow panel responsive.
- Projects: cards maintain 3D hover without overflow; images lazy load.
- Contact: inputs fill width appropriately; focus states visible.