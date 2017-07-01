/**
 * Created by PAVANI on 5/21/2017.
 */
myApp.controller('requestOrderController',function($scope, $http){
    $scope.name = "Sasitha";
    $http.get("http://localhost:4000/api/orders/request")
        .then(function(response) {
            console.log(response);
             $scope.request = response.data;

        });
});