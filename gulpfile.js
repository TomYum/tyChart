/**
 * Created by TomYum on 31.01.16.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var include = require('gulp-include');
var uglify = require('gulp-uglify');


/**
* Compile SASS
**/
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
            .on('error',console.log)
        .pipe(gulp.dest('dist/css'));
});


/**
 *
 */
gulp.task('js',function(){
    gulp.src('src/js/tyChart.js')
        .pipe(include())
            .on('error',console.log)
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch',function(){
    gulp.watch('src/sass/**', function() {
        gulp.run('sass');
    });

    gulp.watch('src/js/**', function() {
        gulp.run('js');
    });

});


gulp.task('default',['js','sass','watch']);

