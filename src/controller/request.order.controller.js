/**
 * Created by PAVANI on 5/21/2017.
 */
myApp.controller('requestOrderController', function ($scope, $http, $window) {
    $scope.name = "Sasitha";
    $http.get("http://localhost:4000/api/orders/request")
        .then(function (response) {
            console.log(response);
            var count = 0;
            $scope.request = {};
            console.log(response.data.length);
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].status == 'requested') {
                    $scope.request[count] = response.data[i];
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

    var request = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };

    $scope.remove = function () {
        $window.location.href = '#!/diliverList';
    }

    $scope.handleOrders = function (allDet) {
        console.log(allDet);
        var deliver = {
            method: 'POST',
            url: 'http://localhost:4000/api/orders/delivers',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                requestId: allDet._id,
                orderId: allDet.orderId,
                vendor: allDet.vendor,
                quantity: allDet.quantity,
                status: "delivered"
            }
        };

        $http(deliver).then(function (err) {
            //alert('request add');

            console.log('requested');
            $window.location.href = '#!/diliverList';
        });


    }
});