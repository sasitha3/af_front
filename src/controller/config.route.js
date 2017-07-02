/**
 * Created by PAVANI on 5/21/2017.
 */
var myApp = angular.module('myApp', ['ngRoute']);
console.log("Sasitha ");

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/home', {
            templateUrl : 'orders/home.html',
            controller : 'homeContoller'
        })
        .when('/directory', {
            templateUrl : 'orders/directory.html',
            controller : 'orderController'
        })
        .when('/email', {
            templateUrl : 'orders/email.html',
            controller : 'messageController'
        })
        .when('/requestList', {
            templateUrl : 'orders/requestList.html',
            controller : 'requestOrderController'
        })
        .when('/orderList', {
            templateUrl : 'orders/orderList.html',
            controller : 'orderController'
        })
        .when('/rejectList', {
            templateUrl : 'orders/rejectList.html',
            controller : 'rejectOrderController'
        })
        .when('/diliverList', {
            templateUrl : 'orders/diliverList.html',
            controller : 'deliverOrderController'
        })
        .when('/messages', {
            templateUrl : 'orders/messages.html',
            controller : 'messageController'
        })
        .when('/vendors', {
            templateUrl : 'orders/vendors.html',
            controller : 'vendorController'
        })
        .when('/request', {
            templateUrl : 'stock/request.html',
            controller : 'requestsController'
        })
        .when('/drugBatch', {
            templateUrl : 'stock/drugBatch.html',
            controller : 'drugBatchController'
        })
        .when('/reports', {
            templateUrl : 'stock/reports.html',
            controller : 'reportsController'
        })
        .when('/requestManage', {
            templateUrl : 'stock/requestManage.html',
            controller : 'requestManageController'
        })

        .otherwise({
        redirectTo : '/home'
    });
}]);

