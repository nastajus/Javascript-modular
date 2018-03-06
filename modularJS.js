var people = {
	people: [],
	template: $('#people-template').html(),
}


// self-executing function
// isolates scope
// "kind of" a module, more like, a "spaghetti code module". 
// gets rid of global variables, but isn't really better coding practices 
(function() {
	//var people = [];
	//var template = $('#people-template').html();

})

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