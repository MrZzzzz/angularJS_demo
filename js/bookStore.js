angular.module("bookStore",["ngRoute","cart"])
// 每页显示的数量
.constant("pageBooksNum",10)
// 点击页码改变颜色
.constant("clickPageClass","btn-primary")
// 设置路由
.config(function($routeProvider){
	$routeProvider.when("/itBooks",{templateUrl:"views/itBooks.html"});
	$routeProvider.when("/shenghuoBooks",{templateUrl:"views/shenghuo.html"});
	$routeProvider.when("/jianshenBooks",{templateUrl:"views/jianshen.html"});
	$routeProvider.when("/lvyouBooks",{templateUrl:"views/lvyou.html"});
	$routeProvider.when("/cart",{templateUrl:"views/cart.html"});
	$routeProvider.otherwise({templateUrl:"views/itBooks.html"});
})
