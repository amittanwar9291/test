const del = require("del");

del.sync(
  [
    "../dist/**",
    "release/**",
    "release/.icon-ico",
    "app/**",
    "logs/**",
    "main/**/*.js",
    "main/**/*.js.map",
    "main.js",
    "main.js.map"
  ],
  { force: true }
);
console.log("clean finished");
process.exit();
