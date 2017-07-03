myApp.controller('requestManageController',function($scope,$http){
    $scope.name = "RequestManage";
    $http.get("http://localhost:4000/api/stock/requestManage")
        .then(function(response) {
            var count=0;
            console.log(response);
            $scope.request={};
            console.log(response.data.length)
            //$scope.requests = response.data;
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].status=='Computed'){
                    $scope.request[count]=response.data[i];
                    count++;
                }
            }

        });
    // $http.get("http://localhost:4000/api/stock/requestManage")
    //     .then(function(response) {
    //         console.log(response);
    //         $scope.req = response.data;
    //     });




    $scope.confirmRequest = function(id){
        console.log("Updated");
        console.log($scope.request._id);
        $http.put('http://localhost:4000/api/stock/requestManage' + id).then(function(response){
            //refresh();
        });
    };

});
