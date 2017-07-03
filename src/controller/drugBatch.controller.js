myApp.controller('drugBatchController',function($scope,$http){
    $scope.name = "DrugBatch";
    $http.get("http://localhost:4000/api/stock/drugBatch")
        .then(function(response) {
            console.log(response);
            //$scope.vendors = response.data;

        });

    $scope.addBatch = function() {
        console.log("Added");
        console.log($scope.request);
        $http.post('http://localhost:4000/api/drugBatch/', $scope.request).then(function(response){
            console.log(response);
            window.alert("Request Sent");
        });
    };


});
