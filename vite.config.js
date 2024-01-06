import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Get-My-IP-Web-App/",
  //   build: {
  //     rollupOptions: {
  //       input: {
  //         // main: resolve(__dirname, "index.html"),
  //       },
  //     },
  //   },
  server: {
    cors: false,
    proxy: {
      "/ip": {
        target: "https://ipv4.icanhazip.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
