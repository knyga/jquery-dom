##Jquery-dom
Wrapper on jsdom that includes jquery libary and promises.

###Installation
`npm install jquery-dom`

###Examples
```javascript
var jqd = require('jquery-dom'),

jqd("http://weblabs.pro")
.success(function() {
	var $pagination = this.$('.pagination a'),
		prelast = $pagination.length-2;
	var cnt = +$pagination.eq(prelast > -1 ? prelast : 0).text();

	console.log(cnt);

})
.fail(function(errors) {
	console.error(errors);
})
.run();
```

###Licence
Copyright 2014 Oleksandr Knyga <oleksandrknyga@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
