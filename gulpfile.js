var gulp  = require('gulp');
var sass  = require('gulp-sass');
var watch = require('gulp-watch');
var bs    = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('src/css/**/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(bs.reload({
      stream: true
    }));
});

gulp.task('bs', function () {
  bs({
    server: {
      baseDir: 'src/',
    },
    open: false, // don't open browser
    notify: false // don't show browserSync notification/ad
  });
});

gulp.task('watch', ['bs'], function () {
  gulp.watch('src/css/**/*.+(scss|sass)', ['sass']);
  gulp.watch('src/index.html', bs.reload);
});

gulp.task('default', ['watch']);
