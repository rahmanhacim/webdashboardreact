const path = require("path");

const n = "node_modules";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://partner-dev.linkaja.com/cmsc/:path*",
      },
    ];
  },
  webpack(config, options) {
    if (options.isServer) {
      config.externals = ["react", ...config.externals];
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, ".", n, "react"),
      "styled-components": path.resolve(__dirname, ".", n, "styled-components"),
    };

    return config;
  },
};
