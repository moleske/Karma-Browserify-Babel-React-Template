var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var del = require('del');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


function createArtifacts() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    return browserify({
            entries: './src/index.js',
            debug: true,
            transform: ['babelify']
        })
        .bundle()
        .pipe(source('assets/app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
}

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('hotReload', function() {
    createArtifacts().pipe(connect.reload());
});

gulp.task('build', function() {
    createArtifacts();
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['hotReload']);
});

gulp.task('serve', ['build', 'connect', 'watch']);

gulp.task('clean:dist', function() {
   return del(['dist/*'])
});

gulp.task('clean:node_modules', function() {
   return del(['node_modules/*'])
});
