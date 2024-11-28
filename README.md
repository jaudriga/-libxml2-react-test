# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To make it work edit `node_modules/react-scripts/config/webpack.config.js` with

```js
...
    resolve: {
        fallback: { 		fs: false, // Use false if you don't need fs in the browser
		path: require.resolve('path-browserify'),
		crypto: require.resolve('crypto-browserify'),
		stream: require.resolve('stream-browserify'),
		vm: require.resolve('vm-browserify'),
		buffer: require.resolve('buffer')
        },
...
    module: {
      strictExportPresence: true,
      rules: [
      ...
        {
            test: /\.cjs$/,
            type: 'javascript/auto', // Tell Webpack to treat .cjs as a JavaScript module
        },
```
