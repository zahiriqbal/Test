'use strict';

// Dependencies
var gulp = require('gulp'),
	copy = require('gulp-copy'),
	sass = require('gulp-sass'),
 mocha = require('gulp-mocha');

	// Copy images
	gulp.task('copy:icons', function () {
	    return gulp.src(['node_modules/govuk_frontend_toolkit/images/**/**.**'])
	        .pipe(gulp.dest('public/images'));
	});

	// Sass task
	gulp.task('sass', function () {
	    return gulp.src('sass/**/*')
	        .pipe(sass({
	            style: 'expanded',
	            sourceComments: 'normal'
	        }).on('error', sass.logError))
	        .pipe(gulp.dest('public/stylesheets'));
	});

	gulp.task('default', ['sass', 'copy:icons']);

	gulp.task('copy:govuk_template_mustache', function () {
        return gulp.src(['node_modules/govuk_template_mustache/assets/**/*'])
            .pipe(gulp.dest('public'));
	});

 gulp.task('default', ['sass', 'copy:icons', 'copy:govuk_template_mustache']);

 gulp.task('mocha', function () {
       return gulp.src('test.js', {read: false})
         .pipe(mocha({reporter: 'nyan'}))
   });

 gulp.task('mocha', () =>
      gulp.src('test.js', {read: false})
       // gulp-mocha needs filepaths so you can't have any plugins before it
       .pipe(mocha({reporter: 'nyan'}))
    );

    gulp.task('test', ['mocha']);
		//to break the test replace 'copy:govuk_template_mustache'  with 'py:govuk_template_mustache'
    gulp.task('test', ['sass', 'copy:icons', 'copy:govuk_template_mustache']);
