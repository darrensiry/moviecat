/**
 * Created by yanfeng on 2016/12/12.
 */
(function (angular) {
    //��ҳģ�飺
    angular.module('moviecat.home',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home_page',{
                //��Ϊ����index����ִ�У����������ַ�������index���ԣ�
                templateUrl:'./home/view.html'
            })
        }])
})(angular)