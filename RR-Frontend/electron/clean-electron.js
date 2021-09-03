const del = require("del");

del.sync([
  "release/**",
  "release/.icon-ico",
  "app/**",
  "logs/**",
  "main/**/*.js",
  "main/**/*.js.map",
  "main.js",
  "main.js.map"
]);
console.log("clean finished");
process.exit();
