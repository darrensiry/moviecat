/**
 * Created by yanfeng on 2016/12/13.
 */
(function (angular) {
    //创建一个服务来发送jsonp请求：
    angular.module('inThetherJson',[])
        .service('inThetherJsonpSrv',['$window',function ($window) {
            var doc=$window.document;
            this.myJSONP= function (url,params,callback) {
                // https://api.douban.com/v2/movie/in_theaters?callback=myCallback&count=10&start=1
                url+='?';
                for(var k in params){
                    url+=k+'='+params[k]+'&'
                }
                var cdName='itcast_jsonp_'+(new Date()-0);
                url+='callback='+cdName;
                console.log(url);

                var script=doc.createElement('script');
                script.src=url;
                doc.body.appendChild(script);//相当于：在body的里面加了一个<script src=url></script>,那么就会被自动调用，
                //调用之后返回的是一个函数调用的固定格式,然后就会在全局环境中招同名的函数，将参数传入并执行；

                //根据函数名创建一个函数
                $window[cdName]= function (data) {
                    callback(data);
                }

            }
        }])
})(angular)