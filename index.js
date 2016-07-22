vueMixins = {
  getDPR: require('./dist/getDPR.js'),
  isLoading: require('./dist/isLoading.js'),
  onBreakpoint: require('./dist/onBreakpoint.js'),
  onElementResize: require('./dist/onElementResize.js'),
  onWindowResize: require('./dist/onWindowResize.js'),
  onWindowScroll: require('./dist/onWindowScroll.js'),
}
if (module.exports != null){
  module.exports = vueMixins
} else {
  window.vueMixins = vueMixins
}
