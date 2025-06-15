/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://backend-contact-ku2s.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
