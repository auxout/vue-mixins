module.exports =
  methods:
    getDPR: () ->
      window.devicePixelRatio || Math.round(window.screen.deviceXDPI / window.screen.logicalXDPI)
