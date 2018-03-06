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
			this.$button.on('click', this.addPerson.bind(this));
			this.$ul.delegate('em.del', 'click', this.deletePerson.bind(this));
		},
		//this is the guy (function) that touches HTML, not anywhere else
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
		deletePerson: function(e) {
			var $remove = $(e.target).closest('li');
			var i = this.$ul.find('li').index($remove);
			
			this.people.splice(i,1);
			this.render();
		}
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