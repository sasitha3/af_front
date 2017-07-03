/**
 * Created by PAVANI on 7/2/2017.
 */
myApp.controller('themeContoller',function($scope,$window, $cookies){
    $scope.name = " This is Theme ";
    $scope.userRole = $cookies.get("userRole");
    $scope.userName = $cookies.get("userName");
    $scope.token = $cookies.get("token");
    console.log($scope.userName);
    
    $scope.logout = function () {
        $cookies.remove("userRole");
        $cookies.remove("userName");
        $cookies.remove("token");
        $window.location.href = "login.html"

    }
});
