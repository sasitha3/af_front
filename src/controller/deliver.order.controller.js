/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('deliverOrderController',function($scope, $http, $window){
    $scope.name = "Sasitha";

    $http.get("http://localhost:4000/api/orders/delivers")
        .then(function(response) {
            console.log(response);
            var count = 0;
            $scope.deliver = {};
            console.log(response.data.length);
            //$scope.allOrder = response.data;
            for (var i=0 ; i<response.data.length; i++){
                if(response.data[i].status == 'delivered' || response.data[i].status == 'half'){

                    $scope.deliver[count] = response.data[i];

                    count++;
                }
            }
           // $scope.deliver = response.data;

        });

    $scope.release = function (id) {
        console.log('works');
        var order = {
            method: 'PUT',
            url: 'http://localhost:4000/api/stock/'+id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                status: "done"
            }

        };
        $http(order).then(function(err){
            //alert('request add');

            console.log('requested');
            $window.location.href = '#!/orderList';
        });
    }

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

    var reOrder = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };


    $scope.reject = function (deli) {
        $scope.rejects = deli;
        console.log($scope.rejects);
    }
    
    $scope.addReject = function () {
        console.log('reject');
        console.log($scope.reason);
        var reject = {
            method: 'POST',
            url: 'http://localhost:4000/api/orders/rejects',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                orderId:$scope.rejects.orderId ,
                quantity: $scope.rejects.quantity,
                reason: $scope.reason,
                status: "reject"
            }
        };
        $http(reject).then(function(err){
            //alert('request add');

            console.log('requested');
            $window.location.href = '#!/rejectList';
        });
    }
});
