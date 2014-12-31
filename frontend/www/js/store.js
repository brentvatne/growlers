(function() {
  var Store = function(FluxUtil, Dispatcher, ApiConstants, AppConstants, $localStorage) {
    var _repo = $localStorage;
    _repo.breweries = _repo.breweries || [];

    var store = FluxUtil.createStore({
      getBreweries: function() {
        return _repo.breweries;
      },

      dispatcherIndex: Dispatcher.register(function(payload) {
        var action = payload.action;

        if (action.response != ApiConstants.PENDING) {
          switch(action.actionType) {
            case AppConstants.FETCH_BREWERIES:
              _repo.breweries = action.response;
              store.emitChange(action);
              break;
          }

          return true;
        }
      })
    });

  return store;
}

  angular.module('app')
    .factory('Store', Store)
})();
