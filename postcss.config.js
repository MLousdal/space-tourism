const autoprefixer = require('autoprefixer')
const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props');

const postcss = require('postcss');
const postcssCustomMedia = require('postcss-custom-media');

postcss([
  postcssCustomMedia()
]).process('src/assets/scss/main.scss');

const config = {
  plugins: [
    autoprefixer(),
    postcssJitProps(OpenProps),
]
}

module.exports = config