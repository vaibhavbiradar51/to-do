module.exports = {
    transpileDependencies: ["vuetify", "feathers-vuex"],
    configureWebpack: {
        devServer: {
          disableHostCheck: true
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                },
            },
        },
    },
}
