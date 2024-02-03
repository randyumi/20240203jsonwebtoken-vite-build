import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import checker from "vite-plugin-checker";

export default defineConfig(() => {
  return {
    server: {
      port: 8080,
      host: true,
    },
    build: {
      sourcemap: "inline" as const,
      target: "node18",
      outDir: `dist/`,
    },
    plugins: [
      ...VitePluginNode({
        adapter: "fastify",
        appPath: `./index.ts`,
      }),
      checker({
        typescript: true,
      }),
    ],
    tsCompiler: "esbuild",
  };
});
