/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mmjxvbryigxiaxsqlhmi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/room-images/**",
      },
    ],
  },
};

export default nextConfig;
