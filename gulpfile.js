'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const rename = require("gulp-rename");
const cssnano = require('gulp-cssnano');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

 
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('compiled.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('./src/assets/js/**/*.js')
    // .pipe(jshint())
    // .pipe(jshint.reporter(stylish, {beep: true}))
    // .pipe(jshint.reporter('fail'))
    .pipe(concat('compiled.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
    .pipe(browserSync.stream());
});
 
gulp.task('sass-watch', gulp.series('sass'), function (done) {
  reload;
  done();
});

gulp.task('js-watch', gulp.series('scripts'), function (done) {
  reload;
  done();
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
          baseDir: './',
          index: './public/index.html'
        }
    });
    gulp.watch("./wcag demo.html").on("change", gulp.series(reload));
    gulp.watch("./assets/scss/main.scss").on("change", gulp.series('sass-watch'));
    gulp.watch("./assets/js/main.js").on("change", gulp.series('js-watch'));
});

gulp.task('default', gulp.series('serve'));