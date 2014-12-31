var MapCtrl = function($scope, $cordovaGeolocation, $ionicPopup, Store, Actions, ApiConstants) {
  Store.bindState($scope, function(action) {
    if (action && action.response != ApiConstants.PENDING) {
      $scope.breweries = Store.getBreweries();
      $scope.breweryMarkers = [];
      angular.forEach($scope.breweries, function(brewery) {
        $scope.breweryMarkers.push({
          lat: parseFloat(brewery.latitude),
          lng: parseFloat(brewery.longitude),
          message: brewery.title,
          focus: false,
          drag: false
        });
      });
    }
  });
  Actions.fetchBreweries();

  $scope.map = {
    defaults: {
      tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      maxZoom: 18,
      zoomControlPosition: 'bottomleft'
    },
    center: {
      lat: 49.26379240,
      lng: -123.10535280,
      zoom: 15
    },
    events: {
      map: {
        enable: ['context'],
        logic: 'emit'
      }
    }
  };

  $scope.locate = function() {
    $cordovaGeolocation.getCurrentPosition()
      .then(function (position) {
        $scope.map.center.lat = position.coords.latitude;
        $scope.map.center.lng = position.coords.longitude;
        $scope.map.center.zoom = 15;

        $scope.map.markers.now = {
          lat:position.coords.latitude,
          lng:position.coords.longitude,
          focus: true,
          draggable: false
        };
      }, function(err) {
        console.log("Location error!");
        console.log(err);
      });
  };

  $scope.goTo = function(breweryKey) {
    var brewery = $scope.breweryMarkers[breweryKey];

    $scope.map.center = {
      lat: brewery.lat,
      lng: brewery.lng,
      zoom: 15
    };

    $scope.map.markers[breweryKey] = angular.extend($scope.map.markers[breweryKey], {focus: true})
  }
};

angular.module('app').
  controller('MapCtrl', MapCtrl);
