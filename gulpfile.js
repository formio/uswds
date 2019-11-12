'use strict';
const gulp = require('gulp');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const template = require('gulp-template');
const sass = require('gulp-sass');

// Compile all *.ejs files to pre-compiled templates and append *.js to the filename.
gulp.task('templates', () =>
  gulp.src('./src/**/*.ejs')
    .pipe(template.precompile({
      evaluate: /\{%([\s\S]+?)%\}/g,
      interpolate: /\{\{([\s\S]+?)\}\}/g,
      escape: /\{\{\{([\s\S]+?)\}\}\}/g,
      variable: 'ctx'
    }))
    .pipe(insert.prepend('Object.defineProperty(exports, "__esModule", {\n' +
      '  value: true\n' +
      '});\n' +
      'exports.default='))
    .pipe(rename({
      extname: '.ejs.js'
    }))
    .pipe(gulp.dest('lib'))
);

gulp.task('css', function(){
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('lib/css'))
});

gulp.task('sass', function(){
  return gulp.src('src/sass/*.scss')
    .pipe(gulp.dest('lib/sass'))
});

gulp.task('build', gulp.parallel(
    'templates',
    'css',
    'sass',
  ),
);