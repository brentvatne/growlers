(function() {
  var Routes = function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'MapCtrl'
      })

      .state('app.map', {
        url: "/map",
        views: {
          'menuContent' :{
            templateUrl: "templates/map.html"
          }
        }
      })

    $urlRouterProvider.otherwise('/app/map');
  }

  angular.module('app')
    .config(Routes);
})();
