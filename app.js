const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

// route Handler functions
let routeRootHandler = function routeRootHandler(req, res) {
  res.send('<h3>This is my node.js express test app with git and digital ocean</h3>');
};

// server Handler functions
let serverListen = function serverListen() {
  console.log(`App listening on port ${PORT}`);
}

app.get('/', routeRootHandler);

app.listen(PORT, serverListen);

