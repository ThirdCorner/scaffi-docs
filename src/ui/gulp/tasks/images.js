'use strict';

import gulp from 'gulp';
import size from 'gulp-size';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import path from '../paths';
import debug from 'gulp-debug';

/**
 * The 'images' task optimize and copies images to `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('images', () => {
    return gulp.src(path.app.images)
        // .pipe(cache(imagemin({
        //     progressive: true,
        //     interlaced: true
        // })))
        .pipe(gulp.dest(path.build.dist.images))
        .pipe(size({title: 'images'}));
});
