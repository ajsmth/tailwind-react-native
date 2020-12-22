var gulp = require("gulp");
// Keeps watching for amended files
var watch = require("gulp-watch");

var paths = {
  source: "./src",
  destination: "./example/lib",
};

gulp.task("default", function () {
  console.log("watching files in src");
  return gulp
    .src(paths.source + "/**/*", { base: paths.source })
    .pipe(watch(paths.source, { base: paths.source }))
    .pipe(gulp.dest(paths.destination));
});
