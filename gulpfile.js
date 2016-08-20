var gulp  = require('gulp');
var sass  = require('gulp-sass');
var bs    = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('css/**/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(bs.stream());
});

gulp.task('serve', ['sass'], function () {
  bs.init({
    server: './',
    notify: false
  });

  gulp.watch('css/**/*.+(scss|sass)', ['sass']);
  gulp.watch('index.html').on('change', bs.reload);
});

gulp.task('default', ['serve']);
