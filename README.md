# How to deploy ES2015+ code to production

This is a boilerplate project which shows how you can deploy ES2015+ code to production by just using webpack and adding 2 lines of code in html.

The boilerplate project has been created for JavaScript Conference Armenia(jsconfam18).

Here is link of presentation
https://docs.google.com/presentation/d/1nwXYF6POhhSelww4lvnB61KRocpur9wlIx2DPixFTWI/edit?usp=drivesdk

# Technics

There are 2 webpack configs in this project.
Webpack.config.modern.js is a configuration for generating bundle with ES2015+ standards.


Webpack.config.legacy.js is a configuration for generating bundle with ES5 standards.

In index.html file there are 2 lines of code

```
<script nomodule src="dist/bundle.legacy.js"></script>
<script type="module" src="dist/bundle.modern.mjs"></script>
```

Modern browsers execute bundle.modern.mjs
Old browsers execute bundle.legacy.js

#How to run app

```
npm install
```

To generate modern bundle run
```
npm run modern
```

To generate legace bundle run
```
npm run legacy
```

To start webpack dev server run
```
webpack-dev-server --config webpack.config.modern.js
