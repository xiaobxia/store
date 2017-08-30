/**
 * Created by xiaobxia on 2017/8/17.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const babel = require("gulp-babel");
const del = require('del');

const examplePath = './example/';
const sourcePath = './src/';

gulp.task('clean_old_storeJs', function () {
  return del(examplePath + 'store.js');
});
//es5化store.js
gulp.task('es5_storeJs', function () {
  return gulp.src(sourcePath + 'store.js')
    .pipe(babel())
    .pipe(gulp.dest(examplePath));
});

gulp.task('server', function (cb) {
  browserSync({
    server: {
      baseDir: examplePath
    },
    port: 8080,
    notify: false,
    ghostMode: false,
    open: true
  }, cb);
});

gulp.task('build', gulp.series('clean_old_storeJs', 'es5_storeJs'));

gulp.task('watch', function () {
  function serverReload(cb) {
    browserSync.reload();
    cb();
  }

  gulp.watch(sourcePath + 'store.js', gulp.series('build', serverReload));
});

gulp.task('default', gulp.series('build', 'server', 'watch'));

