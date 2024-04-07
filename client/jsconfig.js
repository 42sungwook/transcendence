module.exports = {
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@": ["./src"],
      "@core": ["./src/core"],
      "@pages": ["./src/pages"],
      "@components": ["./src/components"],
      "@constants": ["./src/constants"],
      "@route": ["./src/route"],
      "@utils": ["./utils"],
    },
  },
  exclude: ["dist", "node_modules"],
};
