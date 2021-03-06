# react-redux-skeleton
A basic **react** skeleton accompanied with **redux** to main your data in a centralized location(redux store). Also includes **React Router v4** to get you started with routing. 

## Getting started

```
git clone git https://github.com/preeminence/react-redux-skeleton.git
cd react-redux-skeleton
npm install
npm run test - to run karma test runner 
npm run dev (to run webpack dev server)
npm run build - to build dist folder for development purpose
npm run build:prod - to build production ready dist folder
npm run server ( to run express server). Run (npm run build) command before running this.
```

### note
> This skeleton is concentrated on the client side of the application with webpack dev server creating a server.
> Basic understanding of [webpack](https://webpack.js.org/) is required
> Minimal code in express is also provided to get you started with server side implementation. 
> For testing purposes karma test runner is included with basic configuration

## Usage

### package.json
```
{
  "name": "react-redux-skeleton",
  "version": "0.1.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "karma start",
    "dev": "webpack-dev-server --hot --inline",
    "server": "node index.js",
    "build": "webpack",
    "build:prod": "webpack -p"
  }
}
```
The following tasks should be done to package.json by the end users
- [ ] Change the name
- [ ] \(Optional) Change the version
- [ ] Add a description
- [ ] Change the **main** attribute (currently set for `webpack.config.js`)
- [ ] Change the scripts as desired

## Directory structure
### src 
* main.js - Start point of the your react application
* store.js - configured redux store with [redux-thunk](https://www.npmjs.com/package/redux-thunk) and [redux-logger](https://www.npmjs.com/package/redux-logger) middlewares.
* **app** - basic application setup with routes and google's [material-ui](http://www.material-ui.com/#/) 
    * **components** - should contain all the different components added to the applicaton
* **styles** - contains all the style files.

### dist
It contains all the files that will be served to your clients 

## Testing
To Test React components karma test runner is used with [jasmine](https://jasmine.github.io/index.html) as testing framework. Similarity with karma and jasmine is adviced.
Refer [React Test Utilities](https://reactjs.org/docs/test-utils.html) on how to test React Components.

Key points 
* karma.conf.js - configuration of karma test runner
* webpack.tests.js - start point for running the test runner
* app/\__tests__/App-test.js - example implementation of testing React components with jasmine


## License
#### MIT License

Copyright (c) [2017] [Preeminence]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
