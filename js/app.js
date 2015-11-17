var showfax = angular.module('showfax', [
  "showfaxServices",
  "showfaxControllers",
  ]);

showfax.config(['$httpProvider', function ($httpProvider) {
 delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);





  
