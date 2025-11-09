# Performance Optimizations

- Next/Image used for project previews with `sizes` and lazy loading.
- Heavy components (modal) rendered conditionally to avoid initial payload.
- Smooth scroll via CSS avoids JS overhead.
- Tailwind utility classes keep CSS minimal; dark theme via class toggling.
- Metadata and JSON-LD are server-rendered via App Router for minimal client work.
- Framer Motion animations configured with `whileInView` to avoid offscreen work.
- Build target Next.js 14 on Node 18 for stable, efficient runtime.

Benchmarks (local dev):
- LCP dominated by Hero heading; minimal layout shift thanks to static content.
- Images are optimized and lazily loaded; modal content is not part of LCP.