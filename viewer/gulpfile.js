var gulp = require('gulp');
var del = require('del');
gulp.task('clean', () => del(['dist/*']));
gulp.task('html', () => gulp.src('./src/index.html').pipe(gulp.dest('dist')));
gulp.task('assets', () => gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets')));
gulp.task('formiojs', () => gulp.src('./node_modules/formiojs/dist/**/*').pipe(gulp.dest('dist/lib/formiojs')));
gulp.task('seamless', () => gulp.src('./node_modules/seamless/build/**/*').pipe(gulp.dest('dist/lib/seamless')));
gulp.task('font-awesome', () => gulp.src(['./node_modules/font-awesome/css/font-awesome.css', './node_modules/font-awesome/fonts/*']).pipe(gulp.dest('dist/lib/fontawesome')));
gulp.task('uswds-styles', () => gulp.src('./node_modules/uswds/dist/css/uswds.min.css').pipe(gulp.dest('dist/lib/uswds')));
gulp.task('uswds-img', () => gulp.src('./node_modules/uswds/dist/img/**/*').pipe(gulp.dest('dist/lib/img')));
gulp.task('uswds-fonts', () => gulp.src('./node_modules/uswds/dist/fonts/**/*').pipe(gulp.dest('dist/lib/fonts')));
gulp.task('custom', () => gulp.src('./node_modules/@formio/uswds/lib/css/styles.css').pipe(gulp.dest('dist/lib/uswds')));
gulp.task('build', gulp.series('clean', gulp.parallel(
  'html',
  'assets',
  'formiojs',
  'seamless',
  'custom',
  'font-awesome',
  'uswds-styles',
  'uswds-img',
  'uswds-fonts',
)));

const s3 = require("gulp-s3");
gulp.task('deploy', function () {
  var settings = require('../aws.json');
  settings.bucket = 'apps.form.io';
  settings.region = 'us-east-1';
  return gulp.src('./dist/**/*').pipe(s3(settings,  {
    uploadPath: '/uswds'
  }));
});
