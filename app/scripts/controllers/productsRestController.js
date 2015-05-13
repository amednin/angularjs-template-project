angular
.module('sbAdminApp')
    .controller('ProductsRestController', ['$scope', 'ProductsService', function ($scope, ProductsService) {

        $scope.nextPageNum = 2;
        $scope.prevPageNum = 0;
        $scope.currPage = 1;
        $scope.products = ProductsService.query();

        console.log($scope.currPage,$scope.nextPageNum);
        $scope.nextPage = function (page) {
            console.log(page);
            $scope.products = ProductsService.query({page: page}, function () {
                $scope.currPage = $scope.products.page;
                $scope.nextPageNum = $scope.currPage + 1;
                $scope.prevPageNum = $scope.currPage - 1;
            });
        };

        $scope.prevPage = function (page) {
            $scope.products = ProductsService.query({page: page}, function () {
                $scope.currPage = $scope.products.page;
                $scope.nextPageNum = $scope.currPage + 1;
                $scope.prevPageNum = $scope.currPage - 1;
            });
        };

}]);