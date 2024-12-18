// // next.config.js
// const nextConfig = {
    
//   };
  
//   module.exports = nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['https://www.ccimendoza.com/'],
  },
 
}

module.exports = nextConfig
