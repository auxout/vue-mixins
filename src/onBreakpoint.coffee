enquire = require('enquire.js')

module.exports =
  props:
    screenSM:
      type: Number
      default: 544
    screenMD:
      type: Number
      default: 768
    screenLG:
      type: Number
      default: 992
    screenXL:
      type: Number
      default: 1200

  data: () ->
    screenSize: null
    breakPoinsts:
      "xs":
        query:   "screen and (max-width: #{@screenSM-1}px)"
        handler:
          match:   => @screenSize = 'xs'; @$emit("screen:xs:enter"); @$broadcast("screen:xs:enter");
          unmatch: => @$emit("screen:xs:leave"); @$broadcast("screen:xs:leave")
      "sm":
        query: "screen and (min-width: #{@screenSM}px) and (max-width: #{@screenMD-1}px)"
        handler:
          match:   => @screenSize = 'sm'; @$emit("screen:sm:enter"); @$broadcast("screen:sm:enter");
          unmatch: => @$emit("screen:sm:leave"); @$broadcast("screen:sm:leave");
      "sm:up":
        query: "screen and (min-width: #{@screenSM}px)"
        handler:
          match:   => @$emit("screen:sm:up:enter"); @$broadcast("screen:sm:up:enter");
          unmatch: => @$emit("screen:sm:up:leave"); @$broadcast("screen:sm:up:leave");
      "sm:down":
        query: "screen and (max-width: #{@screenMD-1}px)"
        handler:
          match:   => @$emit("screen:sm:down:enter"); @$broadcast("screen:sm:down:enter");
          unmatch: => @$emit("screen:sm:down:leave"); @$broadcast("screen:sm:down:leave");
      "md":
        query: "screen and (min-width: #{@screenMD}px) and (max-width: #{@screenLG-1}px)"
        handler:
          match:   => @screenSize = 'md'; @$emit("screen:md:enter"); @$broadcast("screen:md:enter");
          unmatch: => @$emit("screen:md:leave"); @$broadcast("screen:md:leave");
      "md:up":
        query: "screen and (min-width: #{@screenMD}px)"
        handler:
          match:   => @$emit("screen:md:up:enter"); @$broadcast("screen:md:up:enter");
          unmatch: => @$emit("screen:md:up:leave"); @$broadcast("screen:md:up:leave");
      "md:down":
        query: "screen and (max-width: #{@screenLG-1}px)"
        handler:
          match:   => @$emit("screen:md:down:enter"); @$broadcast("screen:md:down:enter");
          unmatch: => @$emit("screen:md:down:leave"); @$broadcast("screen:md:down:leave");
      "lg":
        query: "screen and (min-width: #{@screenLG}px) and (max-width: #{@screenXL-1}px)"
        handler:
          match:   => @screenSize = 'lg'; @$emit("screen:lg:enter"); @$broadcast("screen:lg:enter");
          unmatch: => @$emit("screen:lg:leave"); @$broadcast("screen:lg:leave");
      "lg:up":
        query: "screen and (min-width: #{@screenLG}px)"
        handler:
          match:   => @$emit("screen:lg:up:enter"); @$broadcast("screen:lg:up:enter");
          unmatch: => @$emit("screen:lg:up:leave"); @$broadcast("screen:lg:up:leave");
      "lg:down":
        query: "screen and (max-width: #{@screenXL-1}px)"
        handler:
          match:   => @$emit("screen:lg:down:enter"); @$broadcast("screen:lg:down:enter");
          unmatch: => @$emit("screen:lg:down:leave"); @$broadcast("screen:lg:down:leave");
      "xl":
        query: "xl": "screen and (min-width: #{@screenXL}px)"
        handler:
          match:   => @screenSize = 'xl'; @$emit("screen:xl:enter"); @$broadcast("screen:xl:enter");
          unmatch: => @$emit("screen:xl:leave"); @$broadcast("screen:xl:leave");

  ready: () ->
    for key, val of @breakPoinsts
      enquire.register val.query, val.handler

  beforeDestroy: ->
    for key, val of @breakPoinsts
      enquire.unregister val.query
