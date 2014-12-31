(function() {
  var AppConstants = function(FluxUtil) {
    return FluxUtil.defineConstants([
      'FETCH_BREWERIES'
    ]);
  };

  var ApiConstants = function(FluxUtil) {
    return FluxUtil.defineConstants([
      'PENDING', 'ERROR'
    ]);
  };

  angular.module('app')
    .factory('AppConstants', AppConstants)
    .factory('ApiConstants', ApiConstants)
})();
