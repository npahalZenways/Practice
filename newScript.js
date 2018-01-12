// string functions

var myString = "hello this is a string";

// length
console.log(myString.length);

// indexOf
console.log(myString.indexOf(' is'));

// concat
console.log(myString.concat('hello'));

// split
console.log(myString.split(''));

// slice
console.log(myString.slice(3,7));

// toUpperCase // toLowerCase
console.log(myString.toUpperCase(), myString.toLowerCase());


// functions

function testFunction(param1){
	return function inner_function(){
		return param1;
	}
}
//assigning a function to a variable
var assigned = testFunction;
var assigned2 = assigned(123); 
var assigned3 = assigned2();

console.log(assigned, assigned2, assigned3);

// anonymous function

var aFunction = function(){
	console.log('This is an anonymous function');
}

aFunction();

// IIFE - Immediately invoking function expression || Self-invoking functions

(function(){
	console.log('This is an IIFE');
})();
// IIFE can be used once per execution of program , we cannot re-use this function

// callbacks

function myCallback(input){
	console.log('>>2<<, Call back execution and received input is ', input);
}

function consume(callback){
	console.log('>>1<<, Callback starting');
	callback('hello');
	console.log('>>3<<, callback completed');
}

consume(myCallback);

consume(function(i){
	console.log('>>2<<, I\'m an anonymous function, input: ', i)
});

var i = 0;
// setTimeout(callback_function, time)
var myInterval = setInterval(function(){ console.log(i++)}, 3000);
clearInterval(myInterval);

// Promises

var myInput = 'hello';

var myPromise = new Promise(function(res, rej){
	if(myInput == 'hello'){
		setTimeout(function(){
			res('This is resolved');
		}, 3000);
	} else {
		setTimeout(function(){
			rej('This is rejected');
		}, 5000);
	}
})
myPromise.then(function(res){
	console.log(res);
}).catch(function(res){
	console.log(res)
})