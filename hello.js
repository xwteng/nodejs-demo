'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function test(num1,num2){
	console.log(num1+'+'+num2+'='+(num1+num2));
}

module.exports = {
	greet:greet,
	add:test
};