(function() {
  "use strict";

  angular.module("app").controller("messageCtrl", function($scope) {

    $scope.tasks = ["Hey my name s Karoli", "My name is Obed", "My name is Salomon"];
    
    // window.$scope = $scope;
  });
})();