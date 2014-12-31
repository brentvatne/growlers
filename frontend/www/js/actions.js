(function() {
  var Actions = function(GrowlersApi, Store, Dispatcher, ApiConstants, AppConstants) {
    return {
      fetchBreweries: function() {
        GrowlersApi.fetchBreweries();
      }
    }
  }

  angular.module('app').factory('Actions', Actions)
})();
