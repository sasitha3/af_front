/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('messageController',function($scope, $http, $window, $rootScope){
    $scope.name = "Messages";

    //console.log($rootScope.selectedOrders.drugName);
    $scope.selectOrders = $rootScope.selectedOrders;
    $scope.venEmail = $rootScope.emailAdd;
    var request ={};

    console.log($scope.selectOrders);

    // console.log(request.data.vendor);

    var message = {
        method: 'POST',
        url: 'http://localhost:4000/api/orders/messages',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            to: $scope.venEmail,
                from: "Chee",
                messageSubject: "Sub 1",
                messageBody: $scope.message,
                drugs: {
                    // name: $scope.selectOrders.drugName,
                    // requireDate: $scope.selectOrders.date
                },
        }
    };

    var updateOrder = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };

    $scope.sendEmail = function () {
        console.log('works');

        for(var i = 0; i<$scope.selectOrders.length; i++){

            var request = {
                method: 'POST',
                url: 'http://localhost:4000/api/orders/request',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    orderId: $scope.selectOrders[i]._id,
                    vendor: $scope.venEmail,
                    requireDate: $scope.selectOrders[i].date,
                    quantity:$scope.selectOrders[i].requestQuantity,
                    status: "requested"
                }
            };
            $http(request).then(function(err){
                //alert('request add');

                console.log('requested');
                $window.location.href = '#!/requestList';
            });

        }


        $http(message).then(function(err){

            $window.location.href = '#!/requestList';
        });
        //
        // $http(updateOrder).then(function(){
        //
        //     $window.location.href = '#!/requestList';
        // });
    }



});