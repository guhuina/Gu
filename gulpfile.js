// 引入 gulp
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	minifyCSS = require('gulp-minify-css'),
	rename = require("gulp-rename");

gulp.task('sass', function() {
    return sass('usage/demo/page/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('usage/demo/export/'));
});

gulp.task('compile', function() {
    return sass('css/gu.scss') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('css/'));
});

gulp.task('min', function () {
    return gulp.src('css/gu.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('css/'))
});

//Watch Task
gulp.task('watch',function(){
	return gulp.watch('lib/**/*.scss',['sass']);
});

gulp.task('default',['sass','watch']);