module.exports =
  props:
    isLoading: Boolean
    default: false
  data: () ->
    loading: @isLoading
  methods:
    startLoading: () ->
      @isLoading = true
      @loading = true
    finishLoading: () ->
      @isLoading = false
      @loading = false
