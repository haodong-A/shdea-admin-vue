// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import vue from "file:///D:/project%20code/shdea/%E6%96%B0%E5%90%8E%E5%8F%B0/shdea-admin-vue/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_@types+node@20.16.11_sass@1.77.0_terser@5.36.0__vue@3.5.12_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/project%20code/shdea/%E6%96%B0%E5%90%8E%E5%8F%B0/shdea-admin-vue/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.8_@types+node@20.16.11_sass@1.77.0_terser@5.36.0__vue@3.5.12_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import compression from "file:///D:/project%20code/shdea/%E6%96%B0%E5%90%8E%E5%8F%B0/shdea-admin-vue/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.8_@types+node@20.16.11_sass@1.77.0_terser@5.36.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import { visualizer } from "file:///D:/project%20code/shdea/%E6%96%B0%E5%90%8E%E5%8F%B0/shdea-admin-vue/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.24.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

// src/config/proxy.ts
var proxy = {
  "/dev/": {
    target: "http://127.0.0.1:8001",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/dev/, "")
  },
  "/prod/": {
    target: "https://show.cool-admin.com",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/prod/, "/api")
  }
};

// vite.config.ts
import { cool } from "file:///D:/project%20code/shdea/%E6%96%B0%E5%90%8E%E5%8F%B0/shdea-admin-vue/node_modules/.pnpm/@cool-vue+vite-plugin@7.2.4/node_modules/@cool-vue/vite-plugin/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/project%20code/shdea/%E6%96%B0%E5%90%8E%E5%8F%B0/shdea-admin-vue/vite.config.ts";
function toPath(dir) {
  return fileURLToPath(new URL(dir, __vite_injected_original_import_meta_url));
}
var vite_config_default = ({ mode }) => {
  const isDev = mode === "development";
  return {
    plugins: [
      vue(),
      compression(),
      vueJsx(),
      // vueDevTools(),
      cool({
        type: "admin",
        proxy,
        eps: {
          enable: true
        }
      }),
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    ],
    base: "/",
    server: {
      port: 9e3,
      proxy,
      hmr: {
        overlay: true
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      }
    },
    resolve: {
      alias: {
        "/@": toPath("./src"),
        "/$": toPath("./src/modules"),
        "/#": toPath("./src/plugins"),
        "/~": toPath("./packages")
      }
    },
    esbuild: {
      // drop: isDev ? [] : ["console", "debugger"]
    },
    build: {
      minify: "esbuild",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: true,
      // 		drop_debugger: true
      // 	}
      // },
      sourcemap: isDev,
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (!["@cool-vue/crud"].find((e) => id.includes(e))) {
                if (id.includes("prettier")) {
                  return;
                }
                return id.toString().split("node_modules/")[1].replace(".pnpm/", "").split("/")[0];
              } else {
                return "comm";
              }
            }
          }
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2NvbmZpZy9wcm94eS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHByb2plY3QgY29kZVxcXFxzaGRlYVxcXFxcdTY1QjBcdTU0MEVcdTUzRjBcXFxcc2hkZWEtYWRtaW4tdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0IGNvZGVcXFxcc2hkZWFcXFxcXHU2NUIwXHU1NDBFXHU1M0YwXFxcXHNoZGVhLWFkbWluLXZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdCUyMGNvZGUvc2hkZWEvJUU2JTk2JUIwJUU1JTkwJThFJUU1JThGJUIwL3NoZGVhLWFkbWluLXZ1ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJztcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHsgcHJveHkgfSBmcm9tICcuL3NyYy9jb25maWcvcHJveHknO1xuaW1wb3J0IHsgY29vbCB9IGZyb20gJ0Bjb29sLXZ1ZS92aXRlLXBsdWdpbic7XG5cbmZ1bmN0aW9uIHRvUGF0aChkaXI6IHN0cmluZykge1xuXHRyZXR1cm4gZmlsZVVSTFRvUGF0aChuZXcgVVJMKGRpciwgaW1wb3J0Lm1ldGEudXJsKSk7XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWdcbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG5cdGNvbnN0IGlzRGV2ID0gbW9kZSA9PT0gJ2RldmVsb3BtZW50JztcblxuXHRyZXR1cm4ge1xuXHRcdHBsdWdpbnM6IFtcblx0XHRcdHZ1ZSgpLFxuXHRcdFx0Y29tcHJlc3Npb24oKSxcblx0XHRcdHZ1ZUpzeCgpLFxuXHRcdFx0Ly8gdnVlRGV2VG9vbHMoKSxcblx0XHRcdGNvb2woe1xuXHRcdFx0XHR0eXBlOiAnYWRtaW4nLFxuXHRcdFx0XHRwcm94eSxcblx0XHRcdFx0ZXBzOiB7XG5cdFx0XHRcdFx0ZW5hYmxlOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0dmlzdWFsaXplcih7XG5cdFx0XHRcdG9wZW46IGZhbHNlLFxuXHRcdFx0XHRnemlwU2l6ZTogdHJ1ZSxcblx0XHRcdFx0YnJvdGxpU2l6ZTogdHJ1ZVxuXHRcdFx0fSlcblx0XHRdLFxuXHRcdGJhc2U6ICcvJyxcblx0XHRzZXJ2ZXI6IHtcblx0XHRcdHBvcnQ6IDkwMDAsXG5cdFx0XHRwcm94eSxcblx0XHRcdGhtcjoge1xuXHRcdFx0XHRvdmVybGF5OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjc3M6IHtcblx0XHRcdHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcblx0XHRcdFx0c2Nzczoge1xuXHRcdFx0XHRcdGNoYXJzZXQ6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGFsaWFzOiB7XG5cdFx0XHRcdCcvQCc6IHRvUGF0aCgnLi9zcmMnKSxcblx0XHRcdFx0Jy8kJzogdG9QYXRoKCcuL3NyYy9tb2R1bGVzJyksXG5cdFx0XHRcdCcvIyc6IHRvUGF0aCgnLi9zcmMvcGx1Z2lucycpLFxuXHRcdFx0XHQnL34nOiB0b1BhdGgoJy4vcGFja2FnZXMnKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXNidWlsZDoge1xuXHRcdFx0Ly8gZHJvcDogaXNEZXYgPyBbXSA6IFtcImNvbnNvbGVcIiwgXCJkZWJ1Z2dlclwiXVxuXHRcdH0sXG5cdFx0YnVpbGQ6IHtcblx0XHRcdG1pbmlmeTogJ2VzYnVpbGQnLFxuXHRcdFx0Ly8gdGVyc2VyT3B0aW9uczoge1xuXHRcdFx0Ly8gXHRjb21wcmVzczoge1xuXHRcdFx0Ly8gXHRcdGRyb3BfY29uc29sZTogdHJ1ZSxcblx0XHRcdC8vIFx0XHRkcm9wX2RlYnVnZ2VyOiB0cnVlXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH0sXG5cdFx0XHRzb3VyY2VtYXA6IGlzRGV2LFxuXHRcdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0XHRjaHVua0ZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcblx0XHRcdFx0XHRlbnRyeUZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcblx0XHRcdFx0XHRhc3NldEZpbGVOYW1lczogJ3N0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcblx0XHRcdFx0XHRtYW51YWxDaHVua3MoaWQpIHtcblx0XHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcblx0XHRcdFx0XHRcdFx0aWYgKCFbJ0Bjb29sLXZ1ZS9jcnVkJ10uZmluZChlID0+IGlkLmluY2x1ZGVzKGUpKSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcygncHJldHRpZXInKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpZFxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdFx0XHRcdC5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgnLnBucG0vJywgJycpXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJy8nKVswXTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJ2NvbW0nO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdCBjb2RlXFxcXHNoZGVhXFxcXFx1NjVCMFx1NTQwRVx1NTNGMFxcXFxzaGRlYS1hZG1pbi12dWVcXFxcc3JjXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdCBjb2RlXFxcXHNoZGVhXFxcXFx1NjVCMFx1NTQwRVx1NTNGMFxcXFxzaGRlYS1hZG1pbi12dWVcXFxcc3JjXFxcXGNvbmZpZ1xcXFxwcm94eS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdCUyMGNvZGUvc2hkZWEvJUU2JTk2JUIwJUU1JTkwJThFJUU1JThGJUIwL3NoZGVhLWFkbWluLXZ1ZS9zcmMvY29uZmlnL3Byb3h5LnRzXCI7ZXhwb3J0IGNvbnN0IHByb3h5ID0ge1xuXHQnL2Rldi8nOiB7XG5cdFx0dGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo4MDAxJyxcblx0XHRjaGFuZ2VPcmlnaW46IHRydWUsXG5cdFx0cmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvZGV2LywgJycpXG5cdH0sXG5cblx0Jy9wcm9kLyc6IHtcblx0XHR0YXJnZXQ6ICdodHRwczovL3Nob3cuY29vbC1hZG1pbi5jb20nLFxuXHRcdGNoYW5nZU9yaWdpbjogdHJ1ZSxcblx0XHRyZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9wcm9kLywgJy9hcGknKVxuXHR9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLGVBQWUsV0FBVztBQUVwWCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBRW5CLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsa0JBQWtCOzs7QUNOc1YsSUFBTSxRQUFRO0FBQUEsRUFDOVgsU0FBUztBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsU0FBUyxDQUFDLFNBQWlCLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxFQUNyRDtBQUFBLEVBRUEsVUFBVTtBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsU0FBUyxDQUFDLFNBQWlCLEtBQUssUUFBUSxXQUFXLE1BQU07QUFBQSxFQUMxRDtBQUNEOzs7QURKQSxTQUFTLFlBQVk7QUFSOEssSUFBTSwyQ0FBMkM7QUFVcFAsU0FBUyxPQUFPLEtBQWE7QUFDNUIsU0FBTyxjQUFjLElBQUksSUFBSSxLQUFLLHdDQUFlLENBQUM7QUFDbkQ7QUFHQSxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQTZCO0FBQ25ELFFBQU0sUUFBUSxTQUFTO0FBRXZCLFNBQU87QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQTtBQUFBLE1BRVAsS0FBSztBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBLEtBQUs7QUFBQSxVQUNKLFFBQVE7QUFBQSxRQUNUO0FBQUEsTUFDRCxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ047QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNWO0FBQUEsSUFDRDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0oscUJBQXFCO0FBQUEsUUFDcEIsTUFBTTtBQUFBLFVBQ0wsU0FBUztBQUFBLFFBQ1Y7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1IsT0FBTztBQUFBLFFBQ04sTUFBTSxPQUFPLE9BQU87QUFBQSxRQUNwQixNQUFNLE9BQU8sZUFBZTtBQUFBLFFBQzVCLE1BQU0sT0FBTyxlQUFlO0FBQUEsUUFDNUIsTUFBTSxPQUFPLFlBQVk7QUFBQSxNQUMxQjtBQUFBLElBQ0Q7QUFBQSxJQUNBLFNBQVM7QUFBQTtBQUFBLElBRVQ7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9SLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxRQUNkLFFBQVE7QUFBQSxVQUNQLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGFBQWEsSUFBSTtBQUNoQixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQ2hDLGtCQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLE9BQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHO0FBQ2xELG9CQUFJLEdBQUcsU0FBUyxVQUFVLEdBQUc7QUFDNUI7QUFBQSxnQkFDRDtBQUVBLHVCQUFPLEdBQ0wsU0FBUyxFQUNULE1BQU0sZUFBZSxFQUFFLENBQUMsRUFDeEIsUUFBUSxVQUFVLEVBQUUsRUFDcEIsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUFBLGNBQ2YsT0FBTztBQUNOLHVCQUFPO0FBQUEsY0FDUjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
