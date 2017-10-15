var gulp = require('gulp');
var browserify = require("browserify");
var babelify = require("babelify");
var fs = require("fs");

gulp.task('transpile', function () {
    return browserify("./web/js/index.jsx")
        .transform("babelify", {presets: ["env","react","es2015"]})
        .bundle()
        .pipe(fs.createWriteStream("./web/js/bundle.js"));
});

gulp.task('default', function(){
   console.log('default');
});




