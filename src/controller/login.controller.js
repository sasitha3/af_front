/**
 * Created by PAVANI on 7/2/2017.
 */
var myApp = angular.module('myApp', ['ngCookies']);
myApp.controller('loginController',function($scope, $http, $window, $cookies){

    $scope.loginDet = function () {

        console.log($scope.username);
        console.log($scope.password);
        var login = {
            method: 'POST',
            url: 'http://localhost:4000/api/authenticate',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                userName:$scope.username,
                password:$scope.password
            }
        };
        $http(login).then(function(response){
            //alert('request add');

            console.log(response.data);
            if(response.data.success){
               $cookies.put('userRole', response.data.userRole);
                $cookies.put('userName', response.data.userName);
                $cookies.put('token', response.data.token);

                $window.location.href = 'index.html';
            }else {
                alert('user Name password is incorrect');
            }
            console.log('requested');
            //$window.location.href = 'index.html';
        });
    }

});
