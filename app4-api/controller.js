angular.module('app').controller('main', function($scope, mainSrvc) {
  $scope.marvel

  mainSrvc.getData().then(function(res) {
    console.log('res', res)
    $scope.marvel = res
  })
})