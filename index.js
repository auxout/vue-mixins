vueMixins = {
  getDPR: require('./getDPR.js'),
  isLoading: require('./isLoading.js'),
  onBreakpoint: require('./onBreakpoint.js'),
  onElementResize: require('./onElementResize.js'),
  onWindowResize: require('./onWindowResize.js'),
}
if (module.exports != null){
  module.exports = vueMixins
} else {
  window.vueMixins = vueMixins
}
