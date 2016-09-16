angular.module("bookStore")
// 定义it的控制器
.controller("bookStoreJianshenCtrl",function($scope,$http,pageBooksNum,clickPageClass){
	// 加载所有数据
	$http.get("json/jianshen.json").success(function(data){
		$scope.books=data;
		// 得到多少页
		var itBooksLength=$scope.books.length;
		// 加载多少页
		$scope.pageNum=function(){
			var num=Math.ceil(itBooksLength/pageBooksNum);
			var nums=[];
			for (var i = 1; i <=num; i++) {
				nums.push(i);
			}
			return nums;
		}
		$scope.nowpageNum=1;
		// 点击页码切换
		$scope.clickChangePageNum=function(num){
			$scope.nowpageNum=num;
		}
		// 点击页码切换按钮颜色
		$scope.clickChangePageColor=function(num){
			return $scope.nowpageNum==num?clickPageClass:"";
		}
	}).error(function(error){
		console.log(error);
	});
})
// 对数据进行筛选
.filter("showItBooks",function(pageBooksNum) {
	return function(data,nowpageNum){
		if(angular.isArray(data)){
			var datas=data.slice((nowpageNum-1)*pageBooksNum,nowpageNum*pageBooksNum);
			return datas;
		}else{
			return data;
		}
	}
});