var app = angular.module;

app.controller{
  
  $scope.toggleSearch = function(element) {
    $scope.showSearch = !$scope.showSearch;
  };
angular.module('userDirectory')
.controller('')
.config(function($employeeProvider, $urlemployeeProvider) {

  $employeeProvider
  .state('intro', {
    url: '/',
    
  })
  .state('main', {
    url: '/main',
  });

  $urlRouterProvider.otherwise("/");

})
$scope.toggleSidenav = function(menuId) {
    $sidenav(menuId).toggle();
  };

