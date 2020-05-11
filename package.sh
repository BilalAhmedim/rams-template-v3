# npm update
echo "npm update"
npm install npm@latest

# init npm
echo "npm Init"
npm init

# install gulp global 
echo "install Gulp Globaly..."
npm install gulp-cli@latest --g

# install gulp locally
echo "install gulp locally"
npm install gulp@latest --save-dev

# install postcss and it's modules
echo "install postcss and modules..."
npm install gulp-postcss postcss-import postcss-mixins postcss-simple-vars postcss-hexrgba postcss-nested --save-dev

# install normalize
echo "install normalize.css..."
npm install normalize.css --save

# install auto prefixer
echo "installing autoprefixer"
npm install autoprefixer@latest --save-dev

# install browsersync
echo "install browsed-sync..."
npm install browser-sync --save-dev

# install gulp watcher
echo "installing gulp-watch"
npm install gulp-watch@latest --save-dev

# install plumber error reporting tool
echo "install gulp-plumber..."
npm install gulp-plumber@latest --save-dev

# install nano, rename sourcemaps
echo "install gulp-rename gulp-nano gulp-sourcemaps"
npm install gulp-rename gulp-nano gulp-sourcemaps --save-dev