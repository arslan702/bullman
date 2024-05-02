/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'bullman-api.onrender.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'bullman.netlify.app',
            pathname: '**',
          }
        ]
        // remotePatterns: ["localhost", "bullman-api.onrender.com", "bullman.netlify.app"],
      },
};

export default nextConfig;
