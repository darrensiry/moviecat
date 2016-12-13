/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    angular.module('moviecat.coming_soon',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/coming_soon',{
                templateUrl:'./coming_soon/view.html'
            })
        }])
})(angular)