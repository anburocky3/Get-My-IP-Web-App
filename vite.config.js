import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Get-My-IP-Web-App/",
  server: {
    cors: true,
    proxy: {
      "/Get-My-IP-Web-App/ip": {
        target: "https://ipv4.icanhazip.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
