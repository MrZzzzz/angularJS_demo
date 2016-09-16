angular.module("cart",[])
.factory("cart",function(){
	var cart=[];
	return {
		// 添加购物车
		addBookToCart:function(id,img,title,price){
			var flag=false;
			angular.forEach(cart,function(item){
				if(item.id==id){
					item.count++;
					flag=true;
				}
			})
			if(flag==false){
				var book={
					"id":id,
					"img":img,
					"title":title,
					"price":price,
					"count":1
				};
				cart.push(book);
			}
		},
		// 得到购物者中的书
		getCart:function(){
			return cart;
		},
		// 删除购物车中的书
		deleteFormCart:function(id){
			angular.forEach(cart,function(item,index){
				if(item.id==id){
					if(item.count==1){
						cart.splice(index,1);
					}else{
						item.count--;
					}
				}
			})
		},
		// 计算总价格
		getSumPrice:function(){
			var sum=0;
			angular.forEach(cart,function(item){
				sum+=item.price*item.count;
			})
			return sum;
		},
		// 得到购物车中总共几本书
		getBooksCount:function(){
			var count=0;
			angular.forEach(cart,function(item){
				count+=item.count;
			})
			return count;
		}

	}
	
})