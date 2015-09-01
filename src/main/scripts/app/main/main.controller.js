'use strict';

angular.module('forza')
    .controller('MainController', function ($rootScope, $scope, $timeout, $mdSidenav, $mdUtil, $log) {
    $scope.push=true;
    $rootScope.togglePush=function(){
      $scope.push=!$scope.push;
    };
    $rootScope.pushStatus=function(){
      if ($scope.push){
        return 'notifications_none'
      }
      return 'notifications_off';
    };

    $rootScope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      },200);
      return debounceFn;
    }

    $rootScope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

    });
