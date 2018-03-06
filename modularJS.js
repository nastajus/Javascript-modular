var people = [];
var template = $('#people-template').html();  //"{{#people}}" is mustache.js

//tried this...
//var template = document.getElementById('people-template');
//var template = document.getElementById('people-template').innerHTML;
//var template = document.getElementById('people-template').textContent;

//object literal
var myModule = {
	name: 'Will',
	age: 34,
	sayName: function() {
		console.log(this.name);
	},
	setName: function(newName) {
		this.name = newName;
	}
}

myModule.setName('Willis');
myModule.sayName();