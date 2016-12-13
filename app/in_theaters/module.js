/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    // "use strict";
    //正在热映的部分
    // start your ride
    angular.module('moviecat.in_theaters',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/in_theaters',{
                templateUrl:'./in_theaters/view.html',
                controller:'IntheatersController'
            })
        }])
    //自己模拟从本地获取数据
        .controller('IntheatersController',['$scope','$http', function ($scope,$http) {
            $http({
                method:'GET',
                url:'./in_theaters/data.json'
            }).then(function successCallback(response) {
                $scope.movieData=response.data
                console.log(response);

            }, function errorCallback(response) {
                console.log('失败');
            });
        }])

})(angular);
