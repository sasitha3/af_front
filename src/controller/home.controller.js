/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('homeContoller',function($scope, $cookies){
    $scope.name = " This is Home ";
    $scope.userRole = $cookies.get("userRole");
    $scope.userName = $cookies.get("userName");
    $scope.token = $cookies.get("token");
    console.log($scope.userName);
});

