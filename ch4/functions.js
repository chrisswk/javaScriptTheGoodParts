var add = function (a,b) {
	return a + b;
};

//Create myObject.  It has a value and an increment
//method.  The increment method takes an optional
//parameter.  If the argument is not a number, then 1
//is used as the default.

var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

// var sum = function (numberOne, numberTwo) {
// 	return numberOne + numberTwo;
// };



myObject.increment();
console.log((myObject.value));
myObject.increment(2);
console.log((myObject.value));

var sum = add(3,4);
//Augment myObject with a double method.
myObject.double = function() {
	var that = this; //Workaround.

	var helper = function () {
		that.value = add(that.value, that.value);
	};

	helper(); //invoke helper as a function
}

// Invoke double as a method

myObject.double();
console.log(myObject.value);

// Create a constructor function called Quo.
// It amkes an object with a status proeprty.

var Quo = function (string) {
	this.status = string;
};

// called get_status

Quo.prototype.get_status = function () {
	return this.status;
};

//Make an instance of Quo.

var myQuo = new Quo("confused");

console.log(myQuo.get_status()); //confused

var array = [3,4];
var sum = add.apply(null, array); //sum is 7

// Make an object with a status member.

var statusObject = {
	status: 'A-OK'
};

//statusObject does not inherit from Quo.prototype
// but we can invoke the get_status method on statusObject
// even thogh statusObject does not have a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
//status is A-OK

// Make a function that adds a lot of tuff

// Note that defining the variable sum niside of the funciton does not interfere with the sum defined outsie of the function.  The function only sees the inner one.

var sum = function () {
	var i, sum = 0;
	for (i=0; i < arguments.length; i += 1) {
		sum += arguments[i];
	}
	return sum;
};
console.log(sum(4,8,15,16,23,42));//108

var add = function (a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
}