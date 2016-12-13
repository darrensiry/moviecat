/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    //首页模块：
    angular.module('moviecat.home',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home_page',{
                //因为是在index里面执行，所以这个地址是相对于index而言；
                templateUrl:'./home/view.html'
            })
        }])
})(angular)