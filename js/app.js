//http://stackoverflow.com/questions/16930473/angularjs-factory-http-get-json-file

var app = angular.module('showfax', ['jsonService']);

app.controller('MainCtrl', function($scope, projectList, projectShow, $filter) {
	$scope.showDetail = false;
  $scope.currentPage = 0;
  

  projectList.get(function(data){
    $scope.projects = data.projects;
    $scope.locations = data.locations;
    $scope.project_types = data.project_types;
  });

  $scope.setId = function(id){
    projectShow.get( {pid: id}, function(data){
      $scope.projectShow = data.project;
    });
    $scope.showDetail = true;
  }
});
