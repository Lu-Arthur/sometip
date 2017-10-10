
//寄生继承
function Vehicle(){
	this.engines = 1;
}

Vehicle.prototype.ignition = function(){
	console.log("发动引擎");
};
Vehicle.prototype.drive = function(){
	this.ignition();
	console.log("手握方向盘");
};

//"寄生类" Car
function Car(){
	//首先，Car是一个Vehicle
	var car = new Vehicle();

	//接着我们对car进行定制
	car.wheels = 4;

	//保存到Vehicle::drive()进行的特殊引用
	var vehDrive = car.drive;

	//重写Vehicle::drive()
	car.drive = function(){
		// console.log(this === myCar);//true
		vehDrive.call(this);
		console.log("全速前进: "+this.wheels);
	}

	return car;
}


var myCar = new Car();
myCar.drive();//发动引擎   手握方向盘   全速前进: 4

