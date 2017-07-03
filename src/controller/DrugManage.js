/**
 * Created by sacheen on 5/10/2017.
 */
'use strict'


myApp.controller("drugmanage",['$scope','$http','$window', function ($scope, $http,$window) {



// Get details to the frontEnd
    var getData = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/DrugData/GetDrugDetails'
        }).then(function (response) {

            $scope.valuelist=response.data;


        });

    };



    getData();


// send data to backend services while button Add button clicked
    $scope.AddData = function () {

        console.log($scope.value);
        $http.post('http://localhost:4000/api/DrugData/PostDrugDetails', $scope.value).then(function (response) {
            console.log(response);
            getData();


            $scope.value.category=" ";
            $scope.value.name=" ";
            $scope.value.dtype=" ";
            $scope.value.utype=" ";
            $scope.value.dlevel=" ";
            $scope.value.polevel=" ";
            $scope.value.remark=" ";
            $scope.value.vendor=" ";



        });

    };


//Delete data from a row field
    $scope.remove=function (id) {
         var deleteUser = $window.confirm('Are you sure you want to delete the Row?');
        if(deleteUser){

            console.log(id);
            $http.delete('http://localhost:4000/api/DrugData/DeleteDrugDetails/id').then(function (response) {
                console.log(response);

                getData();


            });
        }

    };
//getting datalist and diplaying them in input boxes when edit button click

    $scope.editshow=function (id) {


            $http.get('http://localhost:4000/api/DrugData/EditDrugDetails/id').then(function (response) {

                console.log(response.data);
                $scope.value=response.data;


            });
        };

    // Get category details to the frontEnd
    var getCatData = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/DrugData/GetCatDetails'
        }).then(function (response) {

            $scope.Catvaluelist=response.data;


        });

    };
    getCatData();

//Add category data to database
    $scope.AddCategory = function () {

        console.log($scope.cat);
        $http.post('http://localhost:4000/api/DrugData/PostCatDrugDetails', $scope.cat).then(function (response) {
            console.log(response);
            $scope.cat.catvalue="";
            getCatData();
        });

    };

    //Delete category data from a row field
    $scope.removecat=function (id) {
        var deletecat = $window.confirm('Are you sure you want to delete the category?');
        if(deletecat){

            console.log(id);
            $http.delete('http://localhost:4000/api/DrugData/DeleteDrugcatDetails/'+id).then(function (response) {
                console.log(response);

                getCatData();


            });
        }

    };

    // Get DrugType details to the frontEnd
    var gettypData = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/DrugData/GettypDetails'
        }).then(function (response) {

            $scope.typlist=response.data;


        });

    };
    gettypData();

//Add DrugType data to database
    $scope.Addtyp = function () {

        console.log($scope.typ);
        $http.post('http://localhost:4000/api/DrugData/PosttypDrugDetails', $scope.typ).then(function (response) {
            console.log(response);
            $scope.typ.typvalue="";
            gettypData();
        });

    };

    //Delete DrugType data from a row field
    $scope.removetyp=function (id) {
        var deletetyp = $window.confirm('Are you sure you want to delete the Drug type?');
        if(deletetyp){

            console.log(id);
            $http.delete('http://localhost:4000/api/DrugData/DeleteDrugtypDetails/id').then(function (response) {
                console.log(response);

                gettypData();


            });
        }

    };


    // Get unitDrugType details to the frontEnd
    var GetUniType = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/DrugData/GetunittypDetails'
        }).then(function (response) {

            $scope.unityplist=response.data;


        });

    };
    GetUniType();

//Add unitDrugType data to database
    $scope.Adduni = function () {

        console.log($scope.uni);
        $http.post('http://localhost:4000/api/DrugData/PostunittypDrugDetails', $scope.uni).then(function (response) {
            console.log(response);
            $scope.uni.unitvalue="";
            GetUniType();
        });

    };

    //Delete unitDrugType data from a row field
    $scope.removeunityp=function (id) {
        var deleteunittyp = $window.confirm('Are you sure you want to delete the Unit Type?');
        if(deleteunittyp){

            console.log(id);
            $http.delete('http://localhost:4000/api/DrugData/DeleteDrugUnittypDetails/id').then(function (response) {
                console.log(response);

                GetUniType();


            });
        }

    };


    // Get Vendoe details to the frontEnd
    var GetVendor = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/DrugData/GetVendor'
        }).then(function (response) {

            $scope.ventyplist=response.data;


        });

    };
    GetVendor();

//Add Vendor data to database
    $scope.AddVendor = function () {

        console.log($scope.ven);
        $http.post('http://localhost:4000/api/DrugData/PostVendor', $scope.ven).then(function (response) {
            console.log(response);
            $scope.ven.vendorvalue="";
            GetVendor();
        });

    };

    //Delete vendor data from a row field
    $scope.removevendor=function (id) {
        var deleteVendoe = $window.confirm('Are you sure you want to delete the Unit Type?');
        if(deleteVendoe){

            console.log(id);
            $http.delete('http://localhost:4000/api/DrugData/DeleteVendor/id').then(function (response) {
                console.log(response);

                GetVendor();


            });
        }

    };

    //Update data
    $scope.updateData=function () {

        console.log($scope.value._id);
        $http.put('http://localhost:4000/api/DrugData/updateData/'+$scope.value._id).then(function (rescponce) {

            getData();
        })

    }


    console.log("sacheen ");

}]  );
