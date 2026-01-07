'use strict';
const gulp = require('gulp');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const template = require('gulp-template');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Clean lib folder.
gulp.task('clean', require('del').bind(null, ['dist', 'lib']));

// Compile all *.ejs files to pre-compiled templates and append *.js to the filename.
gulp.task('templates', () =>
  gulp
    .src('./src/**/*.ejs')
    .pipe(
      template.precompile({
        evaluate: /\{%([\s\S]+?)%\}/g,
        interpolate: /\{\{([\s\S]+?)\}\}/g,
        escape: /\{\{\{([\s\S]+?)\}\}\}/g,
        variable: 'ctx',
      }),
    )
    .pipe(
      insert.prepend(
        'Object.defineProperty(exports, "__esModule", {\n' +
          '  value: true\n' +
          '});\n' +
          'exports.default=',
      ),
    )
    .pipe(
      rename({
        extname: '.ejs.js',
      }),
    )
    .pipe(gulp.dest('lib')),
);

gulp.task('css', function () {
  return gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('lib/css'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss').pipe(gulp.dest('lib/sass'));
});

gulp.task('copy-css', function () {
  return gulp.src('lib/css/styles.css').pipe(rename('uswds.css')).pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp
    .src('dist/uswds.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(
      rename({
        extname: '.min.css',
      }),
    )
    .pipe(gulp.dest('dist'));
});

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('templates', 'css', 'sass'), 'copy-css', 'minify-css'),
);
