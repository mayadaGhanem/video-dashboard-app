import { GET_MOVIES_URL } from './src/constant/service';
// import { GET_MOVIES_URL } from "./src/constant/service";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
 import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api": {
        target: GET_MOVIES_URL, // API URL
        changeOrigin: true, // Change the origin to the target
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the /api prefix
      },
    },
  },
  resolve: {
    alias: {
      Svg: path.resolve(__dirname, "src/Svg"),
      Component: path.resolve(__dirname, "src/component"),
      Helpers: path.resolve(__dirname, "src/helpers"),
    },
  },
});
