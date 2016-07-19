(function() {
  module.exports = {
    props: {
      isLoading: Boolean,
      "default": false
    },
    data: function() {
      return {
        loading: this.isLoading
      };
    },
    methods: {
      startLoading: function() {
        this.isLoading = true;
        return this.loading = true;
      },
      finishLoading: function() {
        this.isLoading = false;
        return this.loading = false;
      }
    }
  };

}).call(this);
