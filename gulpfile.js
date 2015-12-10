var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
	  
var paths = {
	root: "./",
	css: "*.css",
	sass: "*.scss",
}


// Sass Compilation
gulp.task('css', function(cb) {
    return sass(paths.sass, {style: 'expanded'})
    .pipe(gulp.dest(paths.root))
});

// Watch tasks
gulp.task('watch', ['css'], function() {
	gulp.watch(paths.sass, ['css']);
});

//Default task
gulp.task('default', ['watch']);