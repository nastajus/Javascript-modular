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
			
			// something with binding events, the context is going to change. it'll no longer be people.
			// when an event fires, "it sets the <this> value to be the item that it was bound on. in this case, button, instead of staying on person.
			
			this.$button.on('click', this.addPerson.bind(this));
		},
		render: function() {
			var data = {
				people: this.people,
			};
			this.$ul.html(Mustache.render(this.template, data)); 
		},
		addPerson: function() {
			this.people.push(this.$input.val());
			this.render();
			this.$input.val('');
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