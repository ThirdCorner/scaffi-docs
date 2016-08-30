'use strict';

import del from 'del';
import rev from 'gulp-rev';
import gulp from 'gulp';
import util from 'gulp-util';
import size from 'gulp-size';
//import uglify from 'gulp-uglify';
import usemin from 'gulp-usemin';
import inject from 'gulp-inject';
import header from 'gulp-header';
import bytediff from 'gulp-bytediff';
import minifyCss from 'gulp-minify-css';
import minifyHtml from 'gulp-minify-html';
import runSequence from 'run-sequence';
import path from '../paths';
import {BANNER} from '../const';


//=============================================
//            UTILS FUNCTIONS
//=============================================
const LOG = util.log;
const COLORS = util.colors;
const BASE_URL = '/';

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted perentage
 */
function formatPercent(num, precision){
    return (num * 100).toFixed(precision);
}

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    const difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return COLORS.yellow(data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' +
        (data.endSize / 1000).toFixed(2) + ' kB and is ' +
        formatPercent(1 - data.percent, 2) + '%' + difference);
}

//=============================================
//                  TASKS
//=============================================
/**
 * The 'clean' task delete 'build' and '.tmp' directories.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('clean', (cb) => {
    const files = [].concat(path.build.basePath, path.tmp.basePath);
    LOG('Cleaning: ' + COLORS.blue(files));

    return del(files, {force:true}, cb);
});

/**
 * The 'copy' task just copies files from A to B. We use it here
 * to copy our files that haven't been copied by other tasks
 * e.g. (favicon, etc.) into the `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('extras', () => {
    return gulp.src([path.app.basePath + '*.{ico,png,txt}'])
        .pipe(gulp.dest(path.build.dist.basePath));
});

/**
 * Create JS production bundle.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('bundle', ['jshint'], (cb) => {
    const ENV = !!util.env.env ? util.env.env : 'DEV';
    const Builder = require('systemjs-builder');
    const builder = new Builder();
    const inputPath = 'app/app';
    const outputFile = `${path.tmp.scripts}build.js`;
    const outputOptions = {sourceMaps: true, config: {sourceRoot: path.tmp.scripts}, conditions: { 'ENV|mock': ENV.toLowerCase() === 'prototype','ENV|test': ENV.toLowerCase() === 'test', 'ENV|environment': ENV.toLowerCase()} };

    var systemNormalize = builder.loader.normalize;
    builder.loader.normalize = function(name, parentName, parentAddress) {
      // if(name.startsWith("app/")) {
      //   name = "src\\" + name;
      // }
      //if (name === 'APP') name = path.app.app;

      return systemNormalize.call(this, name, parentName, parentAddress);
    };
    builder.loadConfig(`${path.root}/jspm.conf.js`)
        .then(() => {
            builder.buildStatic(inputPath, outputFile, outputOptions)
                .then(() => cb())
                .catch((ex) => cb(new Error(ex)));
        });
});

/**
 * The 'compile' task compile all js, css and html files.
 *
 * 1. it inject bundle into `index.html`
 * 2. css      - replace local path with CDN url, minify, add revision number, add banner header
 *    js       - annotates the sources before minifying, minify, add revision number, add banner header
 *    html     - replace local path with CDN url, minify
 *
 * @return {Stream}
 */
gulp.task('compile', ['htmlhint', 'sass', 'vendor-css',  'bundle'], () => {

    return gulp.src(path.app.html)
        .pipe(inject(gulp.src(path.tmp.scripts + 'build.js', {read: false}), {
            starttag: '<!-- inject:build:js -->',
            ignorePath: [path.app.basePath]
        }))
        .pipe(inject(gulp.src('.'), {
            starttag: '<!-- inject:baseUrl -->',
            transform: () => `<base href="${BASE_URL}">`
        }))
        .pipe(usemin({
            css:        [
                bytediff.start(),
                minifyCss({keepSpecialComments: 0}),
                bytediff.stop(bytediffFormatter),
                rev(),
                header(BANNER)
            ],
            /*jshint camelcase: false */
            js:         [
                bytediff.start(),
                //uglify(),
                bytediff.stop(bytediffFormatter),
                rev(),
                header(BANNER)
            ],
            html:       [
                bytediff.start(),
                minifyHtml({empty:true}),
                bytediff.stop(bytediffFormatter)
            ]
        }))
        .pipe(gulp.dest(path.build.dist.basePath))
        .pipe(size({title: 'compile', showFiles: true}));
});

/**
 * The 'build' task gets app ready for deployment by processing files
 * and put them into directory ready for production.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('build', (cb) => {
    runSequence(
        ['clean'],
        ['compile', 'extras', 'images', 'fonts'],
        [ 'css'],
        cb
    );
});
