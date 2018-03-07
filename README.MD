### JS Tutorial

Based on the Modular JavaScript tutorial [playlist series](https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f) by LearnCode.academy.

##### Learned 

* had a problem with dropping a missing quote ruining the syntax parsing of script template in the HTML file. I rapidly isolated the problem to having something to do with `.html()` returning undefined. However actually diagnosing & resolving the root cause led me down several different paths since I was unfamiliar with templating. Tried `.innerHTML`, tried `.text`, tried `textContent`. Finally it caught my attention I missed the surrounding quote around my id 🤦‍‍. Thought I'd try writing in raw Notepad++ again... A better [linter](https://en.wikipedia.org/wiki/Lint_(software)) would've made the syntax highlighting more obviously egregious, possibly with some glaring inline tooltips. Maybe a klaxon 🚨📢.

* from a standard OOP perspective, syntax like the following strikes me as odd:

```
	var people = {
		people: ['Will', 'Laura'], 		// oddity #1
		
		//...
		render: function() {
			var data = {
				people: this.people		//oddity #2
			};
		}
	}
```

but it can make sense in JavaScript. Since there's no "real" classes, and as "everything's an object", seeing the exact same literal for both outer variable, inner attribute name in oddity #1 appears acceptable.  For oddity #2, it's just a matter of familiarizing oneself with `this`'s scope. In essence, `var people = ...` is equivalent to an inner functions' inner variable's `this.people`, as demonstrated by the various `console.log` added.  This indicates `this` has "higher" (or unexpected) scope access beyond what I've expected. Time to review `this` in more depth.


##### Next topics

* javascript object nesting 
* this
* delegate
* event
* iife