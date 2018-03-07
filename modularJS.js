// Revealing Module Pattern 
// this is a more traditional vanilla javascript style. 
// the init functionality gets triggered automatically, it doesn't need to be a separate init() method anymore, as this is an IIFE

var people = (function() {
	var people = ['Will', 'Laura'];
	
	//cache COM
	var $el = $('#peopleModule');
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $el.find('#people-template').html();

	//bind events
	$button.on('click', addPerson);
	$ul.delegate('em.del', 'click', deletePerson);

	render();
	
	function render() {
		$ul.html(Mustache.render(template, {people: people})); 
	}
	
	function addPerson() {
		people.push($input.val());
		render();
		$input.val('');
	}
	
	function deletePerson(e) {
		var $remove = $(e.target).closest('li');
		var i = $ul.find('li').index($remove);
		
		people.splice(i,1);
		render();
	}
	
	return {
		addPerson: addPerson,
		deletePerson: deletePerson
	};
})();
	

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