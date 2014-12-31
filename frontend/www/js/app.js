(function() {
  var app = angular.module('app',
    ['ionic',
     'ngCordova',
     'ngStorage',
     'ngFlux',
     'leaflet-directive'])

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

  app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
})();
