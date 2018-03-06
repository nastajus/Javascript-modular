(function() {

	var people = {
		people: ['Will', 'Laura'],
		init: function() {
			//efficient DOM usage
			this.cacheDom();
			this.render();
		},
		cacheDom: function() {
			this.$el = $('#peopleModule');	//author's convention: likes to add $ to vars from JQuery searches. 
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = this.$el.find('#people-template').html();

		},
		render: function() {
			//Mustache.render("hi {{name}}", {name: 'Will'}); 	//that's basically what Mustache does. takes values, spits into string
			var data = {
				people: this.people,
			};
			//$('peopleModule').find('ul').html(Mustache.render(template, data)); 
			this.$ul.html(Mustache.render(this.template, data)); 
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