import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/nikhil7.7.7',
        permanent: true, // Set to true for a 308 redirect (permanent), or false for a 307 redirect (temporary).
      },

      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/315nzcscnb34abe3bnghwxmx5o2y',
        permanent: true, // Set to true for a 308 redirect (permanent), or false for a 307 redirect (temporary).
      },

      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/nikhil-vashisht-9b4415337',
        permanent: true, // Set to true for a 308 redirect (permanent), or false for a 307 redirect (temporary).
      },
      {
        source: '/github',
        destination: 'https://www.github.com/nikhilcodes777',
        permanent: true, // Set to true for a 308 redirect (permanent), or false for a 307 redirect (temporary).
      },

    ];
  },
};

export default nextConfig;
