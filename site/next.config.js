/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Cyb3rID10ts Kasm Repos',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://cyb3rid10ts.github.io/kasm-registry/',
    contactUrl: 'https://cyb3rid10ts.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
