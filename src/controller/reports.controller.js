myApp.controller('reportsController',function($scope,$http) {
    $scope.name = "Reports";
    $http.get("http://localhost:4000/api/stock/reports")
        .then(function(response) {
            console.log(response);
            $scope.report = response.data;
        });
    //     $http.get("http://localhost:4000/api/stock/reports")
    //     .then(function(response) {
    //         var count=0;
    //         // Date.prototype.yyyymmdd = function() {
    //         //     var mm = this.getMonth() + 1; // getMonth() is zero-based
    //         //     var dd = this.getDate();
    //         //
    //         //     return [this.getFullYear(),
    //         //         (mm>9 ? '' : '0') + mm,
    //         //         (dd>9 ? '' : '0') + dd
    //         //     ].join('');
    //         // };
    //         //
    //         // var date = new Date();
    //         // date.yyyymmdd();
    //         // console.log(date);
    //         // var d = new Date();
    //         // var n = d.toISOString();
    //         var day="2017-02-07";
    //         console.log(response);
    //         $scope.report={};
    //         console.log(response.data.length)
    //         //$scope.requests = response.data;
    //         for(var i=0;i<response.data.length;i++){
    //             if(response.data[i].expiryDate<=n){
    //                 $scope.report[count]=response.data[i];
    //                 count++;
    //             }
    //         }

        // });



});


