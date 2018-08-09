new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0,
		inputPlaceholder: 'enter text'
	},
	methods: {
		increase: function(num, event) {
			this.counter += num;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertMe: function(event) {
			console.log(event.target.value);
			event.target.value = '';
		}
	}
});
