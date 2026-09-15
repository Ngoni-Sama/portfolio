/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo at https://ngoni-sama.github.io/portfolio/,
// so in production everything is prefixed with /portfolio. Locally (next dev)
// the base path is empty so the site runs at the root as usual.
const isProd = process.env.NODE_ENV === 'production'
const repo = 'portfolio'
const base = isProd ? `/${repo}` : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static HTML export for GitHub Pages
  images: { unoptimized: true }, // the Next image optimizer isn't available on Pages
  basePath: base,
  assetPrefix: base,
  trailingSlash: true, // emit /route/index.html so Pages routing works
  env: { NEXT_PUBLIC_BASE_PATH: base },
}

module.exports = nextConfig
