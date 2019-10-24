module.exports = {
    filenameHashing: false,
    publicPath: '',
    css: {
      loaderOptions: {
        scss: {
          prependData: `
                        @import "~@/assets/sass/_vars.scss"; 
                        @import "~@/assets/sass/_responsive.scss";
                        @import "~@/assets/sass/_mixins.scss";
                        @import "~@/assets/sass/_global.scss";
                        @import "~@/assets/sass/forms.scss";
                        `,
        },

      }
    }
  }