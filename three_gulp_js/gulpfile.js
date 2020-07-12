let gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            errorLogTrueConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css/'))
});

gulp.task('pugs', function() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('app/'))
});

gulp.task('components', function() {
    return gulp.src('app/scss/components/*.scss')
        .pipe(concat('_components.scss'))
        .pipe(gulp.dest('app/scss/'));
})
gulp.task('sections', function() {
    return gulp.src('app/scss/sections/*.scss')
        .pipe(concat('_sections.scss'))
        .pipe(gulp.dest('app/scss/'));
})

gulp.task('watch', function() {
    gulp.watch('app/scss/sections/*.scss', gulp.parallel('sections'))
    gulp.watch('app/scss/components/*.scss', gulp.parallel('components'))
    gulp.watch('app/pug/*.pug', gulp.parallel('pugs'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch'));