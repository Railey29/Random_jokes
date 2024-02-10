// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4|jpg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static",
            publicPath: "/_next/static",
          },
        },
      ],
    });

    return config;
  },
};
