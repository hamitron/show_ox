//https://docs.angularjs.org/api/ngResource/service/$resource
var showfaxServices = angular.module('showfaxServices', ['ngResource']);

showfaxServices
	.factory('projectList', ['$resource', function($resource){
    	// can be a json file (its in the directory)
    	return $resource('http://10.253.202.100:3000/api/v1/projects/');
  	}])
  .factory('projectShow', ['$resource', function($resource){
  		// does not work outside of the office
    	return $resource('http://10.253.202.100:3000/api/v1/projects/:pid.json', {pid:'@pid'});
  	}]);

//, {}, {'get': {headers: {"Authorization": "Token token=nonfat"}}}