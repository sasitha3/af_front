/**
 * Created by PAVANI on 6/28/2017.
 */

myApp.controller('vendorController',function($scope){
    $scope.name = "Vendors";
    $http.get("http://localhost:4000/api/orders/vendors")
        .then(function(response) {
            console.log(response);
            $scope.vendors = response.data;

        });
});