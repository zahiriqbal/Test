# Test
----------------------------------------------------------------------------
RUN:
____

Git clone project

Switch to the directory folder and run the two command below:

-npm i
-gulp

Now open ‘index.html’ file from terminal using this command:

-open index.html
----------------------------------------------------------------------------

TEST:
____

To run the test in terminal use this command below:

-gulp test

To break the test go to : gulpfile.js
FIND: gulp.task('test', ['sass', 'copy:icons', 'copy:govuk_template_mustache']);

AND REPLACE: 'copy:govuk_template_mustache’  

WITH THIS: 'py:govuk_template_mustache'
