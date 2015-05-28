'use strict';

angular
.module('sbAdminApp')
    .controller('ProductsRestController', ['$rootScope', '$scope', 'ProductsService', '$state', function ($rootScope, $scope, ProductsService, $state) {

        $scope.nextPageNum = 2;
        $scope.prevPageNum = 0;
        $scope.currPage = 1;
        $scope.limiteSup = 0;
        $scope.crit = "";

        $scope.products = ProductsService.products.query({isArray: true}, function (data) {
            $scope.limiteSup = $scope.products.pages;
        }, function (error){
            console.log(error);
        });


        $scope.nextPage = function (page) {
            $scope.products = ProductsService.products.query({page: page}, function () {
                $scope.currPage = $scope.products.page;
                $scope.nextPageNum = $scope.currPage + 1;
                $scope.prevPageNum = $scope.currPage - 1;
            });
        };

        $scope.prevPage = function (page) {
            $scope.products = ProductsService.products.query({page: page}, function () {
                $scope.currPage = $scope.products.page;
                $scope.nextPageNum = $scope.currPage + 1;
                $scope.prevPageNum = $scope.currPage - 1;
            });
        };

        $scope.deleteProd = function (prod) {
            if (!confirm("Estas seguro que quieres borrrar?"))
            {
                return false;
            }
            ProductsService.get({ id: prod.id }).$promise.then(function (data) {
                $scope.entry = data;
                    console.log($scope.entry.id);
                var $id = $scope.entry.id;

                ProductsService.products.delete({id: $id}, $scope.entry);

                ProductsService.products.query(function (data) {
                    $scope.products = data;
                });
            });

        };

        $scope.searchPrice = function () {

            var criteria = $scope.crit;
            console.log(criteria);
            $scope.products.filter(function (value, index) {
                if (criteria == value.price)
                {
                    return value;
                }
            });
        };

    $scope.goHome = function () {
        $state.go('dashboard.home');
    };


}]);