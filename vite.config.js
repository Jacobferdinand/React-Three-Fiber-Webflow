import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
      output: {
        format: "umd",
        entryFileNames: "main.jsx",
        esModule: false,
        compact: true,
        globals: {
          jquery: "$",
        },
      },
      external: ["jquery"],
    },
  },
});
