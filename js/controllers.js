var showfaxControllers = angular.module('showfaxControllers',[]).run(function($http) {
   $http.defaults.headers.common.Authorization = "Token token=nonfat"
});

showfaxControllers.controller('projectListCtrl', function($scope, projectList, $filter) {
	// intial hide of project show details
  $scope.showDetail = false;
  $scope.perPage = 20;
  $scope.beginVar = 0;
  $scope.projects = [];
  $scope.filteredProjects = [];
  

  // queries entire project list. set vars.
  projectList
    .get()
    .$promise
    .then(function(data){
      $scope.projects = data.projects;
      $scope.locations = data.locations;
      $scope.project_types = data.project_types;
    });
  
  // upon searching, resets pagination
  $scope.change = function(){
    $scope.beginVar = 0;
  };

  $scope.countOf = function(){
    // set 'out of' on pagination
    if($scope.perPage <= $scope.filteredProjects.length){
      return ($scope.beginVar + $scope.perPage);
    } else {
      // if 'out of' is less than per page, set it to the number on the page
      return $scope.filteredProjects.length;
    };
  };

  // go to next page
  $scope.incrementBeginVar = function(){
    $scope.beginVar += $scope.perPage;
  };

  // go to previous page
  $scope.decrementBeginVar = function(){
    $scope.beginVar -= $scope.perPage;
  };
  

  
});

showfaxControllers.controller('projectShowCtrl', function($scope, projectShow){
    // view project details
  $scope.setId = function(id){
    projectShow
      .get({pid: id})
      .$promise
      .then(function(data){
      $scope.projectShow = data.project;
    });
    $scope.showDetail = true;
  }
})