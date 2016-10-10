const gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  wait = require('gulp-wait'),
  exec = require('child_process').exec;

const paths = {
  js: './app/assets/javascripts/**/*.js'
};

gulp.task('bundleJS', function () {
  exec('webpack', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['bundleJS'])
});

gulp.task('default', ['bundleJS', 'watch']);