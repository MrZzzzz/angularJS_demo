angular.module("cart")
.controller("cartCtrl",function($scope,cart){
	// 加入购物车
	$scope.addBookTocart=function(id,img,title,price){
		cart.addBookToCart(id,img,title,price);
	}
	// 得到购物车中有多少本书
	$scope.getBooksCounts=function(){
		return cart.getBooksCount();
	}
	// 得到购物车
	$scope.getCart=function(){
		return cart.getCart();
	}
	// 从购物车中删除书籍
	$scope.deleteBookFromCart=function(id){
		cart.deleteFormCart(id);
	}
	// 计算总价格
	$scope.getSumPrice=function(){
		return cart.getSumPrice();
	}
})