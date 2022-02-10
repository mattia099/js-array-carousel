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
const sliderList = document.querySelector('.slider-list');
let slide;
let element;
let currentIndex = 0;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev')

//ciclo che mi crea div slide con immagine e testo dentro
for(i=0; i<items.length; i++){
    //slider-wrapper
    slide = document.createElement('div');
    slide.classList.add('slide');
    const img = `<img src="${items[i]}">`;
    const slideText = `<div class="slide-text">
                            <h2>${title[i]}</h2>
                            <h3>${text[i]}</h3>
                        </div>`; 
    
    slide.innerHTML = img + slideText;
    sliderWrapper.append(slide);
    
    //slider-list
    element = document.createElement('div');
    element.classList.add('element');
    element.innerHTML = img;
    sliderList.append(element);
    

    
    
}

//vettori di tutti gli elementi che hanno la classe slide ed element
let slideVett = [...document.getElementsByClassName("slide")];
let elementVett = [...document.getElementsByClassName("element")];

//aggingo classe active che mi rende visibile una slide e un element
slideVett[currentIndex].classList.add('active');
elementVett[currentIndex].classList.add('active');


//Click per scorrere foto
next.addEventListener('click', function(){
    if(currentIndex == 0){
        slideVett[currentIndex].classList.remove('active');
        elementVett[currentIndex].classList.remove('active');
        currentIndex = items.length-1;
        slideVett[currentIndex].classList.add('active');
        elementVett[currentIndex].classList.add('active');  
    }
    else{
        slideVett[currentIndex].classList.remove('active');
        elementVett[currentIndex].classList.remove('active'); 
        currentIndex--;
        slideVett[currentIndex].classList.add('active');
        elementVett[currentIndex].classList.add('active');    
    }

})

prev.addEventListener('click', function(){

    if(currentIndex == items.length-1){
        slideVett[currentIndex].classList.remove('active');
        elementVett[currentIndex].classList.remove('active'); 
        currentIndex = 0;
        slideVett[currentIndex].classList.add('active');
        elementVett[currentIndex].classList.add('active');
    }
        slideVett[currentIndex].classList.remove('active');
        elementVett[currentIndex].classList.remove('active'); 
        currentIndex++;
        slideVett[currentIndex].classList.add('active');
        elementVett[currentIndex].classList.add('active');
    
})


