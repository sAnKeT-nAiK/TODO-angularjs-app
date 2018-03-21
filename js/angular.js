var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Demo Message'}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput});
        $scope.todoInput = "";
    };

    $scope.remove = function(x) {
        $scope.todoList.splice(x,1);
        
    };
    $scope.dn=function(x){



        $scope.cl = {
        "background-color" : "#CCF2CC",

     }
 }

  $scope.ndn=function(x){

        $scope.cl = {
        "background-color" : "#FFE2BF",


     }
 }
});
