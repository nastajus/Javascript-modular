### JS Tutorial

Based on the Modular JavaScript tutorial [playlist series](https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f) by LearnCode.academy.

##### Learned 

* had a problem with dropping a missing quote ruining the syntax parsing of script template in the HTML file. I rapidly isolated the problem to having something to do with `.html()` returning undefined. However actually diagnosing & resolving the root cause led me down several different paths since I was unfamiliar with templating. Tried `.innerHTML`, tried `.text`, tried `textContent`. Finally it caught my attention I missed the surrounding quote around my id 🤦‍‍. Thought I'd try writing in raw Notepad++ again... A better [linter](https://en.wikipedia.org/wiki/Lint_(software)) would've made the syntax highlighting more obviously egregious, possibly with some glaring inline tooltips. Maybe a klaxon 🚨📢.