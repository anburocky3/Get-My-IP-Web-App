import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  server: {
    cors: true,
    proxy: {
      "/ip": {
        target: "https://ipv4.icanhazip.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
