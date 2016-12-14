/**
 * Created by yanfeng on 2016/12/14.
 */
(function (angular) {
    angular.module('moviecat.movieList',['ngRoute'])
        //配置路由
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/:movielist/:page?',{
                templateUrl:'./movie_list/view.html',
                controller:'moviecatController'
            })
        }])
        .controller('moviecatController',['$scope', 'inThetherJsonpSrv','$routeParams','$route',
            function ($scope,inThetherJsonpSrv,$routeParams,$route) {
                var pageSize=5;
                $scope.curPage=$routeParams.page||1;
                var startPage=($scope.curPage-1)*pageSize;
                inThetherJsonpSrv.myJSONP('https://api.douban.com/v2/movie/'+$routeParams.movielist,
                    {
                        count:pageSize,
                        start:startPage
                    },
                    function (data) {
                        $scope.movieData=data;
                        $scope.moviePages=Math.ceil(data.total/pageSize);
                        $scope.$apply();
                })
                $scope.goPage= function (cur) {
                    if(cur<1||cur>$scope.moviePages){
                        return
                    }
                    $route.updateParams({page:cur});
                }
        }])
})(angular)