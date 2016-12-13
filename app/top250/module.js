/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    angular.module('moviecat.top250',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/top250',{
                templateUrl:'./top250/view.html'
            })
        }])
})(angular)