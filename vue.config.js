module.exports = {
    transpileDependencies: ["vuetify", "feathers-vuex"],
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                },
            },
        },
    },
}