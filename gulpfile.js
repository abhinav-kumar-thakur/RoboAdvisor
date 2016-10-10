const gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  wait = require('gulp-wait'),
  exec = require('child_process').exec;

const paths = {
  html: 'index.html',
  js: './app/assets/javascripts/**/*.js'
};

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('webpack', function () {
  return watch(paths.js, function () {
    exec('webpack', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
  })
    .pipe(wait(3000))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return watch(paths.html)
    .pipe(connect.reload());
});

gulp.task('watch', ['html', 'webpack']);
gulp.task('default', ['connect', 'watch']);