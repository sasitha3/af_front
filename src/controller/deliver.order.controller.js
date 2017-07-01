/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('deliverOrderController',function($scope, $http){
    $scope.name = "Sasitha";

    $http.get("http://localhost:4000/api/orders/delivers")
        .then(function(response) {
            console.log(response);
           $scope.deliver = response.data;

        });
});
