/**
* Jquery-dom
* @author Oleksandr Knyga <oleksandrknyga@gmail.com>
* @license Apache License 2.0 - See file 'LICENSE.md' in this project.
*/

var jsdom = require('jsdom');

module.exports = function(url) {
	var that = this;

	var callbackList = {};

	this.run = function() {
		jsdom.env(url, ["http://code.jquery.com/jquery.js"],
			function(errors, window) {

				if(errors) {
					var fail = callbackList['fail'];

					if("function" === typeof fail) {
						fail.call(window, errors);
					}
				} else {
					var success = callbackList['success'];

					if("function" === typeof success) {
						success.call(window);
					}
				}
				
				var response = callbackList['response'];

				if("function" === typeof response) {
					response.call(window, errors);
				}
			}
		);

		return that;
	};

	this.success = function(callback){
		callbackList['success'] = callback;
		return that;
	};
	this.fail = function(callback){
		callbackList['fail'] = callback;
		return that;
	};
	this.response = function(callback){
		callbackList['response'] = callback;
		return that;
	};

	return that;
}