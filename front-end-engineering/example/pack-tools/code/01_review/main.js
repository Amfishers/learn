import Vue from './vue.js'
import App from './app.js'

new Vue({
	el: '#app',
	components: {
		app: App
	},
	template: '<app/>'
})