var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

var browserSync = require('browser-sync').create();

gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify({
            compress: {
                negate_iife: false
            }
        }))
        .pipe(gulp.dest('./public/build/js'))
        .pipe(livereload());
});

gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(concat('app.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/build/css'))
        .pipe(livereload());
});

gulp.task('views', function() {
    return gulp.src('./views/**')
        .pipe(livereload());
});

gulp.task('demon', function () {
    nodemon({script: './bin/www', ignored: ['gulpfile.js', 'public/**'], ext: 'js jade'}).on('change', ['scripts', 'views']);
});

gulp.task('watch', function() {
    gulp.start('scripts', 'css', 'demon');

    gulp.watch('./src/js/**', ['scripts']);
    gulp.watch('./src/css/**', ['css']);
    gulp.watch('./views/**', ['views']);

    livereload.listen();
});

