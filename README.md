# Karma-Browserify-Babel-React-Template
Barebones (well, relatively barebones) template for testing and building a React App.
Uses Gulp for all the tasks, gulp-connect for hot reload (JS files only)

Thanks to [carpeliam](https://github.com/carpeliam) for guidance in setting up new React Apps

#### Install
```
npm install
```

#### Testing
```
npm test
```
Uses PhantomJS and Dots Reporter

#### Run Locally
```
npm start
```
Builds artifacts to dist, enables hot reloading of JS files

#### Build Only
```
npm run build
```
Only builds artifacts to dist

#### Clean
```
npm run cleanDist
```
Deletes all folders and files in dist
```
npm run cleanModules
```
Deletes all folders and files in node_modules
