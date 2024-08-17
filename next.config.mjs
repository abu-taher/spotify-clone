/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'e-cdns-images.dzcdn.net',
        },
        {
          protocol: 'https',
          hostname: 'api.deezer.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn-preview-6.dzcdn.net',
        },
        {
          protocol: 'https',
          hostname: 'cdn-preview-5.dzcdn.net',
        },

        {
          protocol: 'https',
          hostname: 'cdn-preview-0.dzcdn.net',
        }

      ],
    },
};

export default nextConfig;