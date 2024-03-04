/** @type {import('next').NextConfig} */

const nextConfig = {
   env: {
      DB_USER: process.env.DB_USER,
      DB_PASS: process.env.DB_PASS,
      DB_NAME: process.env.DB_NAME,
      NEXT_PUBLIC_PROD_SERVER_URL: process.env.NEXT_PUBLIC_PROD_SERVER_URL,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.postimg.cc',
            port: '',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
