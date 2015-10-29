var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

gulp.task('html', function() {
  gulp.src(['src/index.html', 'src/quoteDetails.html', 'src/prices.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('prod'));
});

gulp.task('views', function() {
  gulp.src(['src/views/*.html'])
    .pipe(gulp.dest('prod/views'));
});

gulp.task('sass', function () {
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(minifyCss({compatibility: 'ie8'}))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('prod/assets/css'));
});

gulp.task('scripts', function () {
  gulp.src(['src/assets/scripts/*.js', 'src/assets/scripts/services/*.js', 'src/assets/scripts/controllers/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('prod/assets/scripts'));
});

gulp.task('main:watch', function () {
  gulp.watch('src/assets/sass/*.scss', ['sass']);
  gulp.watch('src/assets/scripts/*.js', ['scripts']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/views/*.html', ['views']);
});

gulp.task('default', ['html', 'views', 'sass', 'scripts', 'main:watch']);