// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]


const app = new Vue({
	el: '#root',
	data: {
		slides,
		contatore: 0,
	},
	methods: {
		next() {
			// console.log(this.contatore)
			this.contatore++
			if (this.contatore === 5) { this.contatore = 0 }
			
		},
		prev() {
			this.contatore--
			if (this.contatore === -1) { this.contatore = 4 }
			
		},
	},
})


console.log(app)