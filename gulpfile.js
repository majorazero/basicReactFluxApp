"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); //Runs a local dev server
var open = require("gulp-open"); //Open a URL in a web browser

var  config = {
  port:9500,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./src/*.html", //go int the source directory and find anything that ends in .html
    dist: "./dist"
  }
}

//Start a local development server
gulp.task("connect",function(){
  connect.server({
    root: ["dist"], //where the files are served from
    port: config.port,
    base: config.devBaseUrl,
    livereload: true //self explanatory
  });
});

gulp.task("open",["connect"],function(){ //runs connect first
  gulp.src("dist/index.html")
    .pipe(open({uri: config.devBaseUrl + ":" + config.port +"/"}));
});

gulp.task("html",function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload()); //using npm installed dependencies
});

gulp.task("watch",function(){
  gulp.watch(config.paths.html,["html"]); //if anything changes in paths it will reload the browser.
});

gulp.task("default",["html","open","watch"]); //if you type gulp in command line it will run html and open
