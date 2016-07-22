(function() {
  var enquire;

  enquire = require('enquire.js');

  module.exports = {
    props: {
      screenSM: {
        type: Number,
        "default": 544
      },
      screenMD: {
        type: Number,
        "default": 768
      },
      screenLG: {
        type: Number,
        "default": 992
      },
      screenXL: {
        type: Number,
        "default": 1200
      }
    },
    data: function() {
      return {
        screenSize: null,
        breakPoinsts: {
          "xs": {
            query: "screen and (max-width: " + (this.screenSM - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.screenSize = 'xs';
                  _this.$emit("screen:xs:enter");
                  return _this.$broadcast("screen:xs:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:xs:leave");
                  return _this.$broadcast("screen:xs:leave");
                };
              })(this)
            }
          },
          "sm": {
            query: "screen and (min-width: " + this.screenSM + "px) and (max-width: " + (this.screenMD - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.screenSize = 'sm';
                  _this.$emit("screen:sm:enter");
                  return _this.$broadcast("screen:sm:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:sm:leave");
                  return _this.$broadcast("screen:sm:leave");
                };
              })(this)
            }
          },
          "sm:up": {
            query: "screen and (min-width: " + this.screenSM + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.$emit("screen:sm:up:enter");
                  return _this.$broadcast("screen:sm:up:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:sm:up:leave");
                  return _this.$broadcast("screen:sm:up:leave");
                };
              })(this)
            }
          },
          "sm:down": {
            query: "screen and (max-width: " + (this.screenMD - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.$emit("screen:sm:down:enter");
                  return _this.$broadcast("screen:sm:down:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:sm:down:leave");
                  return _this.$broadcast("screen:sm:down:leave");
                };
              })(this)
            }
          },
          "md": {
            query: "screen and (min-width: " + this.screenMD + "px) and (max-width: " + (this.screenLG - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.screenSize = 'md';
                  _this.$emit("screen:md:enter");
                  return _this.$broadcast("screen:md:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:md:leave");
                  return _this.$broadcast("screen:md:leave");
                };
              })(this)
            }
          },
          "md:up": {
            query: "screen and (min-width: " + this.screenMD + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.$emit("screen:md:up:enter");
                  return _this.$broadcast("screen:md:up:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:md:up:leave");
                  return _this.$broadcast("screen:md:up:leave");
                };
              })(this)
            }
          },
          "md:down": {
            query: "screen and (max-width: " + (this.screenLG - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.$emit("screen:md:down:enter");
                  return _this.$broadcast("screen:md:down:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:md:down:leave");
                  return _this.$broadcast("screen:md:down:leave");
                };
              })(this)
            }
          },
          "lg": {
            query: "screen and (min-width: " + this.screenLG + "px) and (max-width: " + (this.screenXL - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.screenSize = 'lg';
                  _this.$emit("screen:lg:enter");
                  return _this.$broadcast("screen:lg:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:lg:leave");
                  return _this.$broadcast("screen:lg:leave");
                };
              })(this)
            }
          },
          "lg:up": {
            query: "screen and (min-width: " + this.screenLG + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.$emit("screen:lg:up:enter");
                  return _this.$broadcast("screen:lg:up:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:lg:up:leave");
                  return _this.$broadcast("screen:lg:up:leave");
                };
              })(this)
            }
          },
          "lg:down": {
            query: "screen and (max-width: " + (this.screenXL - 1) + "px)",
            handler: {
              match: (function(_this) {
                return function() {
                  _this.$emit("screen:lg:down:enter");
                  return _this.$broadcast("screen:lg:down:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:lg:down:leave");
                  return _this.$broadcast("screen:lg:down:leave");
                };
              })(this)
            }
          },
          "xl": {
            query: {
              "xl": "screen and (min-width: " + this.screenXL + "px)"
            },
            handler: {
              match: (function(_this) {
                return function() {
                  _this.screenSize = 'xl';
                  _this.$emit("screen:xl:enter");
                  return _this.$broadcast("screen:xl:enter");
                };
              })(this),
              unmatch: (function(_this) {
                return function() {
                  _this.$emit("screen:xl:leave");
                  return _this.$broadcast("screen:xl:leave");
                };
              })(this)
            }
          }
        }
      };
    },
    ready: function() {
      var key, ref, results, val;
      ref = this.breakPoinsts;
      results = [];
      for (key in ref) {
        val = ref[key];
        results.push(enquire.register(val.query, val.handler));
      }
      return results;
    },
    beforeDestroy: function() {
      var key, ref, results, val;
      ref = this.breakPoinsts;
      results = [];
      for (key in ref) {
        val = ref[key];
        results.push(enquire.unregister(val.query));
      }
      return results;
    }
  };

}).call(this);
