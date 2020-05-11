var       // required plugins
gulp      = require('gulp'),
watch     = require('gulp-watch'),
prefix    = require('autoprefixer'),
sync      = require('browser-sync').create(),
plumber   = require('gulp-plumber'),
rename = require('gulp-rename'),
postcss   = require('gulp-postcss'),
importcss = require('postcss-import'),
nested    = require('postcss-nested'),
hexrgba   = require('postcss-hexrgba'),
vars      = require('postcss-simple-vars'),
mixins    = require('postcss-mixins'),
maps      = require('gulp-sourcemaps');


gulp.task('watch', function(){
  sync.init({
    server: {
      baseDir: './App/'
    },
    notify: false
  });
  watch('./App/css/**/**.css',gulp.series('compiled-stream'));
  watch('./App/**.html', function(){
    sync.reload()
  });
  watch('./App/js/**.js', function(){
    sync.reload()
  });
});

gulp.task('compile', function(){
  return gulp.src('./App/css/styles.css')
  .pipe(maps.init())
  .pipe(postcss([importcss, mixins, nested, vars, hexrgba, prefix]))
  .pipe(plumber())
  .pipe(rename({
    extname: '.css'
  }))
  .pipe(maps.write('/'))
  .pipe(gulp.dest('./App/'))
});

gulp.task('compiled-stream', gulp.series('compile', function(){
  return gulp.src('./App/styles.css')
  .pipe(sync.stream());
}))