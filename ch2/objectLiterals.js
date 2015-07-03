var empty_object = {};

var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

var a={}, b={}, c={}; //different objects

a=b=c={};//same object

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	};
	var another_stooge = Object.create(stooge);
};

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = "Moe";

stooge.profession = 'actor';
another_stooge.profession;

typeof flight.number;
typeof flight.status;
typeof flight.arrival;
typeof flight.manifest;

typeof flight.toString;
typeof flight.constructor;

flight.hasOwnProperty('number');
flight.hasOwnProperty('constructor');

var name;
for (name in another_stooge) {
	if (typeof another_stooge[name] !== 'function') {
		document.writeln(name + ': ' + another_stooge[name]);
	} 
}

var i;
var properties = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];

for (i = 0; i < properties.length; i += 1) {
	document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}

another_stooge.nickname //'Moe'
//Remove nickname form another_stooge, revaeling the nickname of the protoype
delete another_stooge.nickname;

another_stooge.nickname;

var MYAPP = {};

MYAPP.stooge = {
	'first-name': 'Joe',
	'last-name': 'Howard'
};

MYAPP.flight = {
	airline: "Oceanic",
	number 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	}
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};

