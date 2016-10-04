const gulp = require('gulp'),
  connect = require('gulp-connect'),
  exec = require('child_process').exec;

const paths = {
  html: 'index.html',
  js: './app/static/javascripts/app.js'
};

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('webpack', function (cb) {
  exec('webpack', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('html', function () {
  gulp.src(paths.html)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.js, ['webpack']);
});

gulp.task('default', ['connect', 'watch']);