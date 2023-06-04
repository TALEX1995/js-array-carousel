console.log('JS OK');

// Recover Element from DOM

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const gallery = document.querySelector('.gallery');
// Gallery Thumbnails DOM Element
const imagesThumbnails = document.querySelectorAll('.gallery-thumbnails .col');

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

// Prepare initial situation carousel

let currentIndex = 0;

images[currentIndex].classList.add('active');

// Prepare initial situation gallery-thumbnails

imagesThumbnails[currentIndex].classList.remove('cover');

// Click Next Function
nextButton.addEventListener('click', function() {

    // Remove class current images carousel
    images[currentIndex].classList.remove('active');
    
    // Gallery-thumbnails add class cover
    imagesThumbnails[currentIndex].classList.add('cover');

    // Add Infinite Carousel Condition
    if (!(currentIndex === (images.length - 1))) {
        currentIndex++;
    } else {
        currentIndex = 0
    }

    // Add class active to current images carousel
    images[currentIndex].classList.add('active');

    // Gallery-thumbnails remove class cover
    imagesThumbnails[currentIndex].classList.remove('cover');
})


// Click prev function
prevButton.addEventListener('click', function() {
    // Remove class current images carousel
    images[currentIndex].classList.remove('active');

    // Gallery-thumbnails add class cover
    imagesThumbnails[currentIndex].classList.add('cover');

    // Add infinite Carousel Condition
    if (!(currentIndex === 0)) {
        currentIndex--;
    } else {
        currentIndex = (images.length - 1);
    }

    // Add class active to current images carousel
    images[currentIndex].classList.add('active');

    // Gallery-thumbnails remove class cover
    imagesThumbnails[currentIndex].classList.remove('cover');
})






