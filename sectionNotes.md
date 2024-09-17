---

## -Output Managment (include bundles auto in index.html once created ) --

1. npm install --save-dev html-webpack-plugin
   (plugin to auto include the bundles files in html )

2. add to config file :
   plugins: [
   new HtmlWebpackPlugin({
   title: 'Output Management',
   }),
   ],
