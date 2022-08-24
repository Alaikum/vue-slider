// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]


const app= new Vue({
    el:'#root',
    data:{
        slides,
		contatore: 0,
    },
    methods:{
        toUpper(text){
            return text.toUpperCase()
        },
    },
})


console.log(app)