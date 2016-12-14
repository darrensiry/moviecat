/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    angular.module('moviecat.top250',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/top250/:page?',{
                templateUrl:'./top250/view.html',
                controller:'top250Controller'
            })
        }])
        .controller('top250Controller',['$scope', 'inThetherJsonpSrv','$routeParams','$route',
            function ($scope,inThetherJsonpSrv,$routeParams,$route) {
                $scope.pageSize=5;
                $scope.curPage=$routeParams.page||1;
                $scope.startPage=($scope.curPage-1)*$scope.pageSize;
                inThetherJsonpSrv.myJSONP('https://api.douban.com/v2/movie/top250',{
                    count:$scope.pageSize,
                    start:$scope.startPage
                }, function (data) {
                    $scope.movieData=data;
                    $scope.moviePages=Math.ceil(data.total/ $scope.pageSize);
                    $scope.$apply();
                })
                $scope.goPage= function (cur) {
                    if(cur<1||cur>$scope.moviePages){
                        return
                    }
                    $route.updateParams({page:cur})
                }

            }])
})(angular)