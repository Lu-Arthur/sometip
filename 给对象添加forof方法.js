


// 数组：

var myarr = [1,2,3];
for(var v of myarr){
	console.log(v);//1 2 3
}


//for..of循环首先会向被访问对象请求一个迭代器对象，然后通过迭代器对象的next()方法来遍历所有返回值。
//数组有内置的@@iterator，因此for..of可以直接应用在数组上。我们使用内置的@@iterator来手动遍历数组。
var myarr = [1,2,3];
var it = myarr[Symbol.iterator]();
it.next();//{value:1,done:false}
it.next();//{value:2,done:false}
it.next();//{value:3,done:false}
it.next();//{value:undefined,done:true}






var myobj = {
	a:11,
	b:22,
	c:33
};

Object.defineProperty(myobj,Symbol.iterator,{
	enumerable:false,
	writable:false,
	configurable:true,
	value:function(){
		var o = this;
		var idx = 0;
		var ks = Object.keys(o);
		return {
			next:function(){
				return {
					value:o[ks[idx++]],
					done:(idx>ks.length)
				};
			}
		};
	}
});

//手动遍历myobj
var it = myobj[Symbol.iterator]();
it.next();//{value: 11, done: false}
it.next();//{value: 22, done: false}
it.next();//{value: 33, done: false}
it.next();//{value: undefined, done: true}


for(var v of myobj){
	console.log(v);//11  22  33
}


