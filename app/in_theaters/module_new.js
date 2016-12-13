/**
 * Created by yanfeng on 2016/12/13.
 */
(function (angular) {
    angular.module('moviecat.in_theaters_new', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/in_theaters/:page?', {
                //:page表示当前的页数。这个参数可以省略，省略就是表示是第一页
                templateUrl: './in_theaters/view.html',
                controller: 'IntheatersController'
            })
        }])
        .controller('IntheatersController', ['$scope', 'inThetherJsonpSrv','$routeParams','$route',
            function ($scope, inThetherJsonpSrv,$routeParams,$route) {
                $scope.pageSize = 5;
                //根据漏油获取当前页的数目
                $scope.curPage = ($routeParams.page) || 1;
                $scope.moviePageStart = ($scope.curPage - 1) * $scope.pageSize;

                inThetherJsonpSrv.myJSONP('https://api.douban.com/v2/movie/in_theaters', {
                    count: $scope.pageSize,
                    start: $scope.moviePageStart
                }, function (data) {
                    $scope.movieData = data;
                    //因为只有获取完数据后才能确定多少页；
                    $scope.moviePages = Math.ceil(data.total / $scope.pageSize);

                    $scope.$apply();
                })
                $scope.goPage= function (current) {
                    console.log(current);
                    if(current<1||current>$scope.moviePages){
                        return;
                    }
                    $route.updateParams({page:current})
                }


            }])
})(angular)