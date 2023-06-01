console.log('JS OK');

// Recover Element from DOM

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const gallery = document.querySelector('.gallery');


// Prepare IMG Array

const imgArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',];

// Prepare Element to insert into DOM gallery

let imageElements = '';


// Prepare Cicle to insert the element into imageElements

for (let i = 0; i < imgArray.length; i++) {

    imageElements += `<img src="${imgArray[i]}">`;
}

// Insert img into DOM

gallery.innerHTML = imageElements

// Recover all img

const images = document.querySelectorAll('.carousel img')

// Prepare initial situation

let currentIndex = 0;

images[currentIndex].classList.add('active');

