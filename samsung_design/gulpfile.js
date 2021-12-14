var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function () {
    return gulp
        .src([
            './src/html/*', // 불러올 파일의 위치
            '!' + './src/html/include*' // 읽지 않고 패스할 파일의 위치
        ])
        .pipe(
            fileinclude({
                prefix: '@@',
                basepath: '@file'
            })
        )
        .pipe(gulp.dest('./dist/html')); // 변환한 파일의 저장 위치 지정
});

gulp.task('buildCss', function () {
    return gulp
        .src([
            './src/css/*' // 불러올 파일의 위치
        ])
        .pipe(gulp.dest('./dist/css')); // 변환한 파일의 저장 위치 지정
});
gulp.task('buildHtml', function () {
    return gulp
        .src([
            './src/html/*', // 불러올 파일의 위치
            '!' + './src/html/include*'
        ])
        .pipe(gulp.dest('./dist/html')); // 변환한 파일의 저장 위치 지정
});
gulp.task('buildJs', function () {
    return gulp
        .src([
            './src/js/*' // 불러올 파일의 위치
        ])
        .pipe(gulp.dest('./dist/js')); // 변환한 파일의 저장 위치 지정
});
gulp.task('buildFont', function () {
    return gulp
        .src([
            './src/fonts/*' // 불러올 파일의 위치
        ])
        .pipe(gulp.dest('./dist/fonts')); // 변환한 파일의 저장 위치 지정
});
gulp.task('buildImg', function () {
    return gulp
        .src([
            './src/img/*' // 불러올 파일의 위치
        ])
        .pipe(gulp.dest('./dist/img')); // 변환한 파일의 저장 위치 지정
});

gulp.task(
    'build',
    gulp.series(
        'fileinclude',
        gulp.parallel('buildCss', 'buildJs', 'buildFont', 'buildImg')
    )
);

var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
        .pipe(browserSync.stream({ match: './src/**/*.css' })); // broswer-sync로 전송 추가
});

var browserSync = require('browser-sync');
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './src',
            directory: true,
            index: '../index.html'
        }
    });
});
// 다음은 파일이 수정 될 경우 자동으로 인식하고 동작하도록 watch task를 만듭니다.
gulp.task('watch:all', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch('html/*.html').on('change', browserSync.reload);
});

gulp.task(
    'watch',
    gulp.parallel('browser-sync', 'watch:all', gulp.series('sass'))
);

gulp.task('default', gulp.series('sass'));

// gulp.task('sass', async function () {
//     return sass('./src/scss/main.scss')
//         .on('error', function (err) {
//             console.err('Error', err.message);
//         })
//         .pipe(gulp.dest('./src/css'));
// });

// gulp.task('sass:watch', async function () {
//     gulp.watch('./**/*.scss', gulp.series('sass'));
// });

// gulp.task('watch', gulp.series('sass', 'sass:watch'));
