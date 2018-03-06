var people = ['Sleepy', 'Sneezy'];
console.log (people);
console.log (this.people);

(function() {

	var people = {
		people: ['Will', 'Laura'],
		init: function() {
			//efficient DOM usage
			this.cacheDom();
			this.bindEvents();
			this.render();
		},
		cacheDom: function() {
			this.$el = $('#peopleModule');	//author's convention: likes to add $ to vars from JQuery searches. 
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = this.$el.find('#people-template').html();

		},
		bindEvents: function() {
			//usually don't want to write functions directly in an event bind, it's just not a good pattern. for a lot of reasons.
			this.$button.on('click', addPerson);
		},
		render: function() {
			var data = {
				people: this.people,
			};
			console.log (data.people);
			console.log (this.people);
			this.$ul.html(Mustache.render(this.template, data)); 
		},
		addPerson: function() {
			this.people.push(this.$input.val());
		},
	};
	
	people.init();

})()

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