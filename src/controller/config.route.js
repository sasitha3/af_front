/**
 * Created by PAVANI on 5/21/2017.
 */
var myApp = angular.module('myApp', ['ngRoute']);
console.log("Sasitha ");

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/home', {
            templateUrl : 'orders/home.html',
            controller : 'requestOrderController'
        })
        .when('/directory', {
            templateUrl : 'orders/directory.html',
            controller : 'orderController'
        })
        .when('/email', {
            templateUrl : 'orders/email.html',
            controller : 'emailController'
        })
        .when('/requestList', {
            templateUrl : 'orders/requestList.html',
            controller : 'emailController'
        })
        .when('/orderList', {
            templateUrl : 'orders/orderList.html',
            controller : 'emailController'
        })
        .when('/rejectList', {
            templateUrl : 'orders/rejectList.html',
            controller : 'emailController'
        })
        .when('/diliverList', {
            templateUrl : 'orders/diliverList.html',
            controller : 'emailController'
        })
        .when('/messages', {
            templateUrl : 'orders/messages.html',
            controller : 'emailController'
        })
        .otherwise({
        redirectTo : '/home',
        controller : 'orderController'
    });
}]);

