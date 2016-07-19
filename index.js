vueMixins = {
  getDPR: require('./getDPR.js'),
}
if (module.exports != null){
  module.exports = vueMixins
} else {
  window.vueMixins = vueMixins
}
