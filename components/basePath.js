// On GitHub Pages the site is served under /portfolio, so root-absolute asset
// paths (/assets/...) need the base path prepended. next/image and next/link do
// this automatically, but plain <img> tags (used by EditableImage so we can show
// user-uploaded data URLs) do not — so prepend it ourselves.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const withBase = (p) => {
  if (!p) return p
  // Leave data URLs and absolute http(s) URLs untouched.
  if (p.startsWith('data:') || p.startsWith('http')) return p
  return p.startsWith('/') ? BASE + p : p
}
