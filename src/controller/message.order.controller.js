/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('messageController',function($scope, $http, $window, $rootScope){
    $scope.name = "Messages";
    // $http.get("http://localhost:4000/api/orders/rejects")
    //     .then(function(response) {
    //         console.log(response);
    //          $scope.reject = response.data;
    //
    //     });
    $scope.sendEmail = function () {
        console.log('works');
        alert('works');
        $window.location.href = '#!/orderList';


    }
});