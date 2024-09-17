---

## -Loader that process css files and enable webpack to bundle it--

1. npm install --save-dev style-loader css-loader

2. add to config file its own rules:
   module: {
   rules: [
   {
   test: /\.css$/i,=> RE to match any .css file
   use: ['style-loader', 'css-loader'],=> loaders to process the css file
   },
   ],
   },
