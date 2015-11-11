//https://docs.angularjs.org/api/ngResource/service/$resource
var showfaxServices = angular.module('showfaxServices', ['ngResource']);

showfaxServices
	.factory('projectList', ['$resource', function($resource){
    	return $resource('http://10.253.202.100:3000/api/v1/projects/');
  	}])
  .factory('projectShow', ['$resource', function($resource){
    	return $resource('http://10.253.202.100:3000/api/v1/projects/:pid.json', {pid:'@pid'});
  	}]);

//, {}, {'get': {headers: {"Authorization": "Token token=nonfat"}}}