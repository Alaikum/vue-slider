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
		classeCerchio: '',
		contatoreCerchio: 0,

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
		circles(event) {

			console.log(event.target.dataset.id)
			console.log(this.contatore)
			this.contatore = event.target.dataset.id



			// const contPall= document.querySelector('[data-id="i"]');



		},
		cerchioAttivo(i) {

			

			if (i === this.contatoreCerchio) {
				this.classeCerchio = 'circle__active'

			} 


			return (this.classeCerchio)
		},

		autoPlay: function () {
            var slide = this;
            console.log(this.contatore)
            // console.log(time)
            setInterval(function () {
                // time.localTime = new Date().toLocaleTimeString();
               slide.contatore++
               if (slide.contatore === 5) { slide.contatore = 0 }
            }, 1000);
        },

	},


	mounted() {
        this.autoPlay()
    }
});

