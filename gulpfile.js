// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

var source = './src/style.sass';
gulp.task('css', function(){
	return gulp.src(source)
	.pipe(plugins.sass())
	.pipe(plugins.csscomb())
	.pipe(plugins.cssbeautify({indent: '  '}))
	.pipe(plugins.autoprefixer())
	.pipe(gulp.dest('./public'))
});