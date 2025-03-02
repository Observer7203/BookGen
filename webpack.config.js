const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.js') // React точка входа
    .addStyleEntry('styles', './assets/styles/app.css') // Добавляем стили
    .enableReactPreset() // Включаем поддержку React JSX
    .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();
