
function mixin(sourceobj,targetobj){
	for(var key in sourceobj){
		if(!(key in targetobj)){
			targetobj[key] = sourceobj[key];
		}
	}

	return targetobj;
}

var Vehicle = {
	engines:1,
	ignition:function(){
		console.log("Turning on my engine "+this.engines);
	},
	drive:function(){
		this.ignition();
		console.log("Steering and moving forward!");
	}
};

var Car = mixin(Vehicle,{
	engines:55,
	wheels:4,
	drive:function(){
		// console.log(this === Car)//true
		Vehicle.drive.call(this);
		console.log("Rolling on all "+this.wheels+" wheels!");
	}
});

Car.drive();//Turning on my engine  Steering and moving forward!  Rolling on all 4 wheels!
console.log(Car)

