
const {src, dest, watch, parallel }= require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const cssnano= require('cssnano');
const postcss= require('gulp-postcss');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');


 
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'img/**/*'
  }
   

function css() {
    return (
        src(paths.scss)
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(postcss([autoprefixer(), cssnano()]))
          // .pipe(postcss([autoprefixer()]))
          .pipe(sourcemaps.write('.'))
          .pipe(dest('./build/css'))
      )
    
};

function javascript() {
    return src(paths.js)
      .pipe(sourcemaps.init())
      .pipe(concat('app.js')) // final output file name
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./build/js'))
  }
  function imagenes() {
    return src(paths.imagenes)
      .pipe(cache(imagemin({ optimizationLevel: 3 })))
      .pipe(dest('build/img'))
      .pipe(notify({ message: 'Imagen Completada' }))
  }
   
  function versionWebp() {
    return src(paths.imagenes)
      .pipe(webp())
      .pipe(dest('build/img'))
      .pipe(notify({ message: 'Imagen Completada' }))
  }
   
  function watchArchivos() {
    watch(paths.scss, css)
    watch(paths.js, javascript)
    watch(paths.imagenes, imagenes)
    watch(paths.imagenes, versionWebp)
  }
   

exports.default = parallel(css, javascript,  versionwebp, watchArchivos);

