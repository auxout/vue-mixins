(function() {
  module.exports = {
    methods: {
      getDPR: function() {
        return window.devicePixelRatio || Math.round(window.screen.deviceXDPI / window.screen.logicalXDPI);
      }
    }
  };

}).call(this);
