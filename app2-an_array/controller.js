angular.module('arrayApp').controller('arrayController', function($scope, service) {
  $scope.person = service.myData;
})