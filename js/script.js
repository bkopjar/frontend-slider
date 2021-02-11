const slider1 = document.querySelector('.row1');
const slider2 = document.querySelector('.row2');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
var index = 1;

prevBtn.addEventListener('click', ()=> {
    if (index === 1) {
        index = -1;
    }
    slider1.style.justifyContent = 'flex-start';
    slider2.style.justifyContent = 'flex-start';
    slider1.style.transform = 'translate(-5%)';
    slider2.style.transform = 'translate(-5%)';
});

nextBtn.addEventListener('click', ()=> {
    if (index === -1) {
    //slider.appendChild(slider.firstElementChild);
    index = 1;
    }
    slider1.style.justifyContent = 'flex-start';
    slider2.style.justifyContent = 'flex-start';
    slider1.style.transform = 'translate(5%)';
    slider2.style.transform = 'translate(5%)';
});

slider1.addEventListener('transitionend', ()=> {
    if (index === -1) {
        slider1.appendChild(slider1.firstElementChild);
    }
    else if (index === 1) {
        slider1.prepend(slider1.lastElementChild);
    }
    slider1.style.transition = 'none';
    slider1.style.transform = 'translate(0)';
    setTimeout(() => {
        slider1.style.transition = 'all .6s';
    });
});

slider2.addEventListener('transitionend', ()=> {
    if (index === -1) {
        slider2.appendChild(slider2.firstElementChild);
    }
    else if (index === 1) {
        slider2.prepend(slider2.lastElementChild);
    }
    slider2.style.transition = 'none';
    slider2.style.transform = 'translate(0)';
    setTimeout(() => {
        slider2.style.transition = 'all .6s';
    });
});

/*
const slider = document.querySelector('.slider');
const row = document.querySelector('.row1');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let image = document.querySelectorAll('.images'); 
let index = 1;

const firstClone = image[0].cloneNode(true);
const lastClone = image[image.length - 1].cloneNode(true);

firstClone.id = 'firstClone';
lastClone.id = 'lastClone';
row.append(firstClone);
row.prepend(lastClone);

const imageWidth = image[index].clientWidth;
row.style.transform = `translateX(${-imageWidth * index}px)`;

console.log(image);

row.addEventListener('transitionend', () => {
    image = document.querySelectorAll('.images'); 
    if (image[index].id === firstClone.id) {
        row.style.transition = 'none';
        index = 1;
        row.style.transform = `translateX(${-imageWidth * index}px)`;
    }

    if (image[index].id === lastClone.id) {
        row.style.transition = 'none';
        index = image.length - 2;
        row.style.transform = `translateX(${-imageWidth * index}px)`;
    }
});

const nextSlide = () => {
    image = document.querySelectorAll('.images'); 
    if(index >= image.length - 1) return;
    index++;
    row.style.transform = `translateX(${-imageWidth * index}px)`;
    row.style.transition = '.8s';
}

const prevSlide = () => {
    if(index <= 0) return;
    index--;
    row.style.transform = `translateX(${-imageWidth * index}px)`;
    row.style.transition = '.8s';
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
*/





 


