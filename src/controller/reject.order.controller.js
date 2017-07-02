/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('rejectOrderController',function($scope, $http){
    $scope.name = "Reject";
    $http.get("http://localhost:4000/api/orders/rejects")
        .then(function(response) {
            var count = 0;
            $scope.reject = {};
            console.log(response.data.length);
            //$scope.allOrder = response.data;
            for (var i=0 ; i<response.data.length; i++){
                if(response.data[i].status == 'reject'){

                    $scope.reject[count] = response.data[i];

                    count++;
                }
            }

        });

    var order = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };

    var reject = {
        method: 'PUT',
        url: 'http://localhost:4000/api/reject/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };
});
