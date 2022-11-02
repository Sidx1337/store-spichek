module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3070',
          changeOrigin: true
        },
      }
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    }
  }