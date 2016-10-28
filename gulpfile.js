const gulp = require('gulp'),
  watch = require('gulp-watch'),
  wait = require('gulp-wait'),
  sass = require('gulp-sass'),
  exec = require('child_process').exec;

const paths = {
  src: {
    js: './app/assets/javascripts/**/*.js',
    scss: './app/assets/stylesheets/**/*.scss',
    images: './app/assets/images/*.*',
    fonts: 'node_modules/font-awesome/fonts/*'
  },
  dest: {
    css: './app/static/css',
    images: './app/static/images',
    fonts: './app/static/fonts'
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

gulp.task('images', function () {
  gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dest.images));
});

gulp.task('watch', ['bundleJS', 'css'],  function () {
  gulp.watch(paths.src.js, ['bundleJS']);
  gulp.watch(paths.src.scss, ['css']);
});

gulp.task('fonts', function () {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dest.fonts))
});

gulp.task('default', ['bundleJS', 'css', 'images', 'fonts']);