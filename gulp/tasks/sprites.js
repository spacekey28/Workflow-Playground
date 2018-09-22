var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

var config = {
  mode: {
    css: {

    }
  }
}

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/dist/sprite/'));
});