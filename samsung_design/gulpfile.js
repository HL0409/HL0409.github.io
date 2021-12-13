const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

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

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const Fiber = require('fibers');
const dartSass = require('dart-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
// add start : browserSync 설치 및 설정
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'src', // 서버에 띄울 폴더 위치 지정
            directory: true
        }
    });
    gulp.watch('src/*').on('change', browserSync.reload); // src 안의 파일들을 감시하고 있다가, 내용이 변동되면 재실행
});

const apfBrowsers = ['ie >= 8'];

gulp.task('sass', function () {
    const options = {
        sass: {
            outputStyle: 'expanded',
            indentType: 'tab',
            indentWidth: 1,
            compiler: dartSass
        },
        postcss: [
            autoprefixer({
                overrideBrowserslist: apfBrowsers
            })
        ]
    };
    return (
        gulp
            .src('src/scss/*.scss')
            .pipe(
                sass({
                    includePaths: require('node-normalize-scss').includePaths
                })
            )
            // .pipe(sourcemaps.init())
            .pipe(
                sass({
                    fiber: Fiber
                }).on('error', sass.logError)
            )
            .pipe(postcss(options.postcss))
            // .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('src/css'))
            .pipe(browserSync.stream())
    ); // browserSync 가 실행되고 있을 때, scss 변화가 감지되면 바로 수정 반영
});

// add start : 감시대상 scss가 변동되면 자동으로 업데이트!
gulp.task('watch', function () {
    gulp.watch('./src/scss/main.scss', gulp.series('sass')); // 감시해야할 scss 위치 지정
});
// add end

gulp.task('buildCss', function () {
    return gulp
        .src([
            './src/css/*' // 불러올 파일의 위치
        ])
        .pipe(gulp.dest('./dist/css')); // 변환한 파일의 저장 위치 지정
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

gulp.task('default', gulp.parallel('sass', 'watch', 'browserSync'));

gulp.task(
    'build',
    gulp.parallel('fileinclude', 'buildCss', 'buildJs', 'buildFont', 'buildImg')
);
