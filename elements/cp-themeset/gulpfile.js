const path = require("path");
const fs = require("fs");

const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const stripCssComments = require("gulp-strip-css-comments");
const trim = require("gulp-trim");
const decomment = require("decomment");
const del = require("del");
let watcher;

gulp.task("clean", () => {
  return del(["./*.umd.*"]);
});

gulp.task("sass", () => {
  return gulp
    .src(["./*.scss"])
    .pipe(sass())
    .pipe(stripCssComments())
    .pipe(trim())
    .pipe(gulp.dest("./"));
});

gulp.task("replaceStyles", () => {
  return gulp
    .src("./src/cp-themeset.js")
    .pipe(
      replace(
        /<style id="\${templateId}-style"><\/style>/g,
        '<style id="${templateId}-style">' +
          fs.readFileSync("./cp-themeset.css") +
          "</style>"
      )
    )
    .pipe(gulp.dest("./"));
});

gulp.task("compile", () => {
  return gulp
    .src(["./cp-themeset.js"])
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".umd"
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("stopwatch", done => {
  watcher.close();
  done();
});

gulp.task("watch", () => {
  watcher = gulp.watch(["./*.scss"], gulp.series("stopwatch", "sass", "watch"));
  return watcher;
});

gulp.task("default", gulp.series("clean", "sass", "replaceStyles", "compile"));

gulp.task("dev", gulp.series("default", "watch"));
