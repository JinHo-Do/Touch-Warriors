angular.module('warriors.lcd', [
  'ngMaterial'
])
  .controller('LcdController', function($scope, $firebaseObject) {
    // var rootRef = firebase.database().ref();
    var ref = firebase.database().ref().child('data');
    var obj = new $firebaseObject(ref);
    obj.$loaded().then(function() {
      obj.$bindTo($scope, 'data')
      console.log($scope)
    })

    var ref2 = firebase.database().ref().child('message');
    var obj2 = new $firebaseObject(ref2);
    obj2.$loaded().then(function() {
      obj2.$bindTo($scope, 'message')
      console.log($scope)
    })

    $scope.data = {};
    $scope.message = {};
    $scope.message.$value = '연결중';
    $scope.isClicked = false;
    $scope.hasWrong = false;
    $scope.warnMessage = "잘못된 워리어 등장!"

    $scope.brake = function() {
      // if (!$scope.isClicked) {
      //   $scope.isClicked = true;

        if ($scope.message.$value !== '어려움') {
          $scope.data.$value = 0;
        }
        $scope.message.$value = '어려움';

      //   setTimeout(function() {
      //     $scope.isClicked = false;
      //   }, 5000);
      // } else {
      //   console.log('5초 후 터치!!!');
      // }
    }

    $scope.park = function() {
      // if (!$scope.isClicked) {
      //   $scope.isClicked = true;
  
        if ($scope.message.$value !== '쉽시다') {
          $scope.data.$value = 0;
        }
        $scope.message.$value = '쉽시다';
      
      // setTimeout(function() {
      //     $scope.isClicked = false;
      //   }, 5000);
      // } else {
      //   console.log('5초 후 터치!!!');
      // }
    }

    $scope.up = function() {
      // if (!$scope.isClicked) {
      //   $scope.isClicked = true;

        if ($scope.message.$value !== '연결중') {
          $scope.data.$value += 1;
        }

      //   setTimeout(function() {
      //     $scope.isClicked = false;
      //   }, 5000);
      // } else {
      //   console.log('5초 후 터치!!!');
      // }
    }

    $scope.down = function() {
      // if (!$scope.isClicked) {
      //   $scope.isClicked = true;

        if ($scope.message.$value !== '연결중') {
          $scope.data.$value -= 1;
        }

      //   setTimeout(function() {
      //     $scope.isClicked = false;
      //   }, 5000);
      // } else {
      //   console.log('5초 후 터치!!!');
      // }
    }
  })
  