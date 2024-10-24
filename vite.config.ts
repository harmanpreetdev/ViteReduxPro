import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const ensureEnvVars = (env: Record<string, string>, requiredVars: string[]) => {
  requiredVars.forEach((key) => {
    if (!env[key]) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Missing required env variable: ${key}`);
      } else {
        console.warn(`Missing env variable: ${key}. This may cause issues.`);
      }
    }
  });
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    root: ".",
    base: "/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    define: {
      "process.env": {},
      "import.meta.env": env,
    },
  };
});
