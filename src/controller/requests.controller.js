myApp.controller('requestsController',function($scope,$http){
    $scope.name = "Requests";

    $http.get("http://localhost:4000/api/stock/")
        .then(function(response) {
            console.log(response);
            $scope.requests = response.data;
        });

    $scope.showDetails = function(id){
        console.log("Edited");
        console.log(id);
        $http.get('http://localhost:4000/api/stock/' + id).success(function(response){
            $scope.drug = response;
        });

    };

    $scope.sendRequest = function() {
        console.log("Added");
        console.log($scope.request);
        $http.post('http://localhost:4000/api/stock/', $scope.request).then(function(response){
            console.log(response);
            window.alert("Request Sent");
        });
    };

});