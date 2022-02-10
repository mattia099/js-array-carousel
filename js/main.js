const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const sliderWrapper = document.querySelector('.slider-wrapper');

let slide;
let currentIndex=0;
//ciclo che mi crea div slide con immagine e testo dentro
for(i=0; i<items.length; i++){
    slide = document.createElement('div');
    slide.classList.add('slide');
    const img = `<img src="${items[i]}">`;
    const slideText = `<div class="slide-text">
                            <h2>${title[i]}</h2>
                            <h3>${text[i]}</h3>
                        </div>`; 
    
    slide.innerHTML = img + slideText;
    sliderWrapper.append(slide);

}
//vettore di tutti gli elementi che hanno la classe slide
let slideVett = [...document.getElementsByClassName("slide")];

//aggingo classe active che mi rende visibile una slide
slideVett[currentIndex].classList.add('active');


console.log(sliderWrapper);


