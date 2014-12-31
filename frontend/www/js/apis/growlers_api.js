(function() {
  var GrowlersApi = function($http, Dispatcher, AppConstants, ApiConstants) {
    var BASE_URL = 'http://growlers-api.herokuapp.com';

    var handleResponse = function(key, params) {
      return function(response) {
        if (response.data.error) {
          dispatch(key, ApiConstants.ERROR, params);
        } else {
          dispatch(key, response.data, params);
        }
      }
    }

    var dispatch = function(key, response, params) {
      payload = {
        actionType: key,
        response: response,
        queryParams: params
      }

      Dispatcher.handleServerAction(payload);
    }

    /* Public Interface */
    return {
      fetchBreweries: function() {
        key = AppConstants.FETCH_BREWERIES
        dispatch(key, ApiConstants.PENDING, {});
        $http.get(BASE_URL + '/breweries').
          then(handleResponse(key, {}));
      },
    }
  }

  angular.module('app').
    factory('GrowlersApi', GrowlersApi)
})();
