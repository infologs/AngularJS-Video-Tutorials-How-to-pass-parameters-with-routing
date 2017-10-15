// Code goes here
var app = angular.module("MyApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
      .when("/", {
          template: "<h1>This is the main page</h1>"
      })
      .when("/red", {
          templateUrl: "red.html",
          controller: "cnt1"
      })
      .when("/green", {
          templateUrl: "green.html",
          controller: function ($scope) {
              $scope.message = "From Internal Controller with in routing...";
          }
      })
        .when("/params/:id", {
            templateUrl: "params.html",
            controller: "paramsController"
        })

        .when("/params/:id/:name", {
            templateUrl: "params.html",
            controller: "paramsController"
        })

        .when("/purple", {
            templateUrl: "purple.html",
            controller: "cnt1"
        })
       
      .otherwise({
          template: "<h1>no page found</h1>"
      })
    /*.otherwise({
        redirectTo: "/green"
    });*/

    
});

app.controller("paramsController", ["$scope", "$routeParams", function ($scope, $routeParams) {
    $scope.EmployeeId = $routeParams.id;
    $scope.EmployeeName = $routeParams.name;

}]);

app.controller("cnt1", ["$scope",function($scope){

  $scope.message = "From Red page";

}]);

app.controller("cnt2", ["$scope",function($scope){

  $scope.message = "From Green page";

}]);