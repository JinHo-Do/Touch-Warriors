angular.module('warriors', [
  'ngMaterial',
  'warriors.lcd',
  'firebase',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider
    .when('/lcd', {
      templateUrl: 'app/lcd/lcd.html',
      controller: 'LcdController'
    })
    .when('/off', {
      templateUrl: 'app/off/off.html',
      controller: 'LcdController'
    })
    .when('/', {
      templateUrl: 'app/off/off.html',
      controller: 'LcdController'
    })

    $locationProvider.hashPrefix('');
})
.controller('ButtonController', function($scope) {
  $scope.isClick = false;
  $scope.changeClassOn = function() {
    $scope.isClick = true;
  }
  $scope.changeClassOff = function() {
    $scope.isClick = false;
  }
});