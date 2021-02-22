/////////////////////////////////////////////////////
// Variables
/////////////////////////////////////////////////////

const gulp = require('gulp');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const jshint = require('gulp-jshint');
var less = require('gulp-less');
var path = require('path');
var sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');
var paths = {
	srcCSS: './css/style.css',
	srcJS: './js/script.js',
	srcLESS: './css/styles.less',
	srcSASS: './scss/styles.scss',
	distCSS: './css',
	distJS: './js',
	subLESS: './css/**/*.less',
	subSASS: './scss/**/*.scss',
};
sass.compiler = require('node-sass');


/////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////

/*
** watch
*/

function watch() {
	gulp.watch([paths.subSASS, paths.srcSASS], scss);
	gulp.watch([paths.subLESS, paths.srcLESS], less);
	gulp.watch(paths.srcJS, js);
}

// set watch function as default gulp function
exports.default = watch;

/* 
** SASS/SCSS
** compile scss to css, minify css, autoprefix
*/

function scss() {
	return gulp.src(paths.srcSASS)
	.pipe(plumber())
	.pipe(sass())
	.pipe(cleanCSS())
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(gulp.dest(paths.distCSS))
}

exports.scss = scss;

/* 
** LESS
** compile less to css, minify css, autoprefix
*/

function less() {
	return gulp.src(paths.srcLESS)
	.pipe(plumber())
	.pipe(less())
	.pipe(cleanCSS())
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(gulp.dest(paths.distLESS))
}

exports.less = less;

/* 
** JS
** minify js and run through JS Hint
*/

function js() {
	return gulp.src(paths.srcJS)
	.pipe(plumber())
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(minify({
		ext:{
			min:'.min.js'
		},
		exclude: ['tasks'],
		ignoreFiles: ['.combo.js', '-min.js']
	}))
	.pipe(gulp.dest(paths.distJS))
}

exports.js = js;