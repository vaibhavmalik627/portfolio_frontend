import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase" // ✅ No semicolon here
    }
  },
  build: {
    rollupOptions: {
      external: ['react-icons/fa']
    }
  }
});
