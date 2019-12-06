var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
gulp.task('clean', () => del(['dist/*']));
gulp.task('html', () => gulp.src('./src/index.html').pipe(plugins.htmlmin({
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true
})).pipe(gulp.dest('dist')));
gulp.task('assets', () => gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets')));
gulp.task('formiojs', () => gulp.src('./node_modules/formiojs/dist/**/*').pipe(gulp.dest('dist/lib/formiojs')));
gulp.task('seamless', () => gulp.src('./node_modules/seamless/build/**/*').pipe(gulp.dest('dist/lib/seamless')));
gulp.task('uswds', () => gulp.src('./node_modules/uswds/dist/**/*').pipe(gulp.dest('dist/lib/uswds')));
gulp.task('@formio/uswds', () => gulp.src('./node_modules/@formio/uswds/**/*').pipe(gulp.dest('dist/lib/uswds')));
gulp.task('@formio/vpat', () => gulp.src('./node_modules/@formio/vpat/**/*').pipe(gulp.dest('dist/lib/vpat')));
gulp.task('build', gulp.series('clean', gulp.parallel(
  'html',
  'assets',
  'formiojs',
  'seamless',
  'uswds',
  '@formio/uswds',
  '@formio/vpat'
)));

const s3 = require("gulp-s3");
gulp.task('deploy', gulp.series('build', function () {
  var settings = require('../aws.json');
  settings.bucket = 'apps.form.io';
  settings.region = 'us-east-1';
  return gulp.src('./dist/**/*').pipe(s3(settings,  {
    uploadPath: '/uswds'
  }));
}));
