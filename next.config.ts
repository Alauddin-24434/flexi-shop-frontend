import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary to the list of allowed domains
  },
};

export default nextConfig;
