// require dependencies
var gulp          = require('gulp'),
    browserify    = require('browserify'),
    reactify      = require('reactify'),
    source        = require('vinyl-source-stream');

// Task which compiles jsx to js using reactify
gulp.task('browserify', function () {
  browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'))
});

// Task which copies src/html to dist/html and assets files.
gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))

  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'))

});

// Setup default task to run all tasks at once
gulp.task('default', ['browserify', 'copy'],  function () {
  return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});
