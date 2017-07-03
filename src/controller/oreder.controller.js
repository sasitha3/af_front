/**
 * Created by PAVANI on 5/18/2017.
 */
myApp.controller('orderController',function($scope, $http, $window, $rootScope){
    console.log("working");
    // $scope.order = "order1";
    $rootScope.selectedOrders = [];
    $http.get("http://localhost:4000/api/stock/")
        .then(function(response) {
            var count = 0;
            $scope.order = {};
            console.log(response.data.length);
            //$scope.allOrder = response.data;
            for (var i=0 ; i<response.data.length; i++){
                if(response.data[i].status == 'New' || response.data[i].status == 're-order'){

                    $scope.order[count] = response.data[i];
                    console.log('fly')
                    count++;
                }
            }
           });



    $scope.validateVend = function () {
        $http.get("http://localhost:4000/api/orders/vendors")
            .then(function(response) {
                console.log(response);
                for(var i = 0; i<response.data.length; i++){
                    if(response.data[i].email === $scope.vendorEmail){

                        $rootScope.emailAdd = $scope.vendorEmail;
                        console.log($rootScope.selectedOrders);

                        $window.location.href = '#!/messages';
                    }else{
                        alert('Invalid vendor email');
                        $scope.vendorEmail = "";
                        $window.location.href = '#!/orderList';
                    }
                }
            });
    }
    $scope.getChecks = function (getOrders) {
        console.log(getOrders);
        $rootScope.selectedOrders.push(getOrders);
        //$scope.ordersToMessage = $scope.ordersToMessage + getOrders;
        console.log($rootScope.selectedOrders);
    }

});
console.log("Premadasa ");