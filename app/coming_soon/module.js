/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    angular.module('moviecat.coming_soon',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/coming_soon/:page?',{
                templateUrl:'./coming_soon/view.html',
                controller:'coming_soonController'
            })
        }])
        .controller('coming_soonController',['$scope', 'inThetherJsonpSrv','$routeParams','$route',
            function ($scope,inThetherJsonpSrv,$routeParams,$route) {
                $scope.pageSize=5;
                $scope.curPage=$routeParams.page||1;
                $scope.startPage=($scope.curPage-1)*$scope.pageSize;
                inThetherJsonpSrv.myJSONP('https://api.douban.com/v2/movie/coming_soon',{
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