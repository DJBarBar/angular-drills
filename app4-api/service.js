angular.module('app').service('mainSrvc', function($http) {

  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=87ce8e5c49aa2ed79a8aa5549401db92&hash=ddd05defda489499bfdc05bccc56f1be'
    }).then(res => {
      // console.log(res)
      return res.data.data.results;
    })
  }

})