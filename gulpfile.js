const gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  wait = require('gulp-wait'),
  sass = require('gulp-sass'),
  exec = require('child_process').exec;

const paths = {
  src: {
    js: './app/assets/javascripts/**/*.js',
    scss: './app/assets/stylesheets/**/*.scss',
    images: './app/assets/images/*.*'
  },
  dest: {
    css: './app/static/css',
    images: './app/static/images'
  }
};

gulp.task('bundleJS', function () {
  exec('webpack', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('css', function () {
  gulp.src(paths.src.scss)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task('copy', function () {
  gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dest.images));
});

gulp.task('watch', function () {
  gulp.watch(paths.src.js, ['bundleJS']);
  gulp.watch(paths.src.scss, ['css']);
  gulp.watch(paths.src.images, ['copy']);
});

gulp.task('default', ['bundleJS', 'css', 'copy', 'watch']);