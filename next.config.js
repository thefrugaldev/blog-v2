module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    config.externals = {
      ...config.externals,
      canvas: "canvas",
      critters: "critters",
    };

    return config;
  },
  target: "serverless",
};
