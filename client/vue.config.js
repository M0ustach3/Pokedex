module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: "Pokédex",
    themeColor: '#D06040',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^http'),
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 2,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}