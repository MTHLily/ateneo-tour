// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#2F3590',
            'error-color': '#E9222E',
            'border-color-base': '#d9d9d9',
            'box-shadow-base': '0 4px 8px rgba(0, 0, 0, 0.15)'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};