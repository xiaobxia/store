/**
 * Created by xiaobxia on 2017/8/17.
 */
const gulp = require('gulp');
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const del = require('del');

const storeJsPath = './src/store.js';
const distPath = './dist/';

//清理dist文件夹
gulp.task('clean_dist', function () {
  return del(distPath);
});
//es5化store.js
gulp.task('es5_storeJs', function () {
  return gulp.src(storeJsPath)
    .pipe(babel())
    .pipe(gulp.dest(distPath));
});
//生成压缩版store.js
gulp.task('compress_storeJs', function () {
  return gulp.src(storeJsPath)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(distPath));
});
gulp.task('default', gulp.series('clean_dist', gulp.parallel('es5_storeJs', 'compress_storeJs')));
