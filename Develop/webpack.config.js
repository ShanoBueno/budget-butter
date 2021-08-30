const WebpackPwaManifest = require("webpack-pwa-manifest");


module.exports = {
  entry: './public/js/idb.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development'
};

new WebpackPwaManifest({
  name: "Budget Tracker",
  short_name: "Budget Tracker",
  description: "An app that allows you to view upcoming food events.",
  start_url: "../index.html",
  background_color: "#01579b",
  theme_color: "#ffffff",
  fingerprints: false,
  inject: false,
})