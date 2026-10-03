import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir el dev server desde el móvil en la misma red (IP local).
  allowedDevOrigins: ["192.168.4.28", "192.168.4.28:3000"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
