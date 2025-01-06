/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'i.scdn.co','i1.sndcdn.com'],
  },
  experimental:{
    styledComponents: true,
  },
};

export default nextConfig;
