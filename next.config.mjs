/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {urlImports: ['https://themer.sanity.build/']},
  reactCompiler: true,
  images: {
    remotePatterns: [
      { 
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

export default nextConfig;
