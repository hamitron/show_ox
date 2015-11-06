//https://docs.angularjs.org/api/ngResource/service/$resource

angular.module('jsonService', ['ngResource'])
  .factory('projectList', ['$resource', function($resource){
    return $resource('http://10.253.202.100:3000/api/projects');
  }])
  .factory('projectShow', ['$resource', function($resource){
  	return $resource('http://10.253.202.100:3000/api/projects/:pid.json', {pid:'@pid'});
  }]);
