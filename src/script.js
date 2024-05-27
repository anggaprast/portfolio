window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('fixednav', window.scrollY > 0);
});

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// Project Show Navigation
const projectBtns = document.querySelectorAll('#project-nav button');
const projectItems = document.querySelectorAll('.project-item');

let activeBtn = "web-dev";

showProject(activeBtn);

projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showProject(btn.id);
        btn.classList.add('project-active');
        btn.classList.remove('border-projectnav');
    });
});

function resetActiveBtn() {
    projectBtns.forEach((btn) => {
        btn.classList.remove('project-active');
        btn.classList.add('border-projectnav');
    });
}

function showProject(newProjectBtn) {
    activeBtn = newProjectBtn;
    projectItems.forEach((item) => {
        if (item.classList.contains(activeBtn)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
}
//Function for Graphic Design Gallery Carousel Navigation
let feedkmj = {
    currentSlide: 1,
    element: document.querySelector('#feedkmj'),
    totalSlides: document.querySelector('#feedkmj').childElementCount
};

let posterkmj = {
    currentSlide: 1,
    element: document.querySelector('#posterkmj'),
    totalSlides: document.querySelector('#posterkmj').childElementCount
};
let feedaliens = {
    currentSlide: 1,
    element: document.querySelector('#feedaliens'),
    totalSlides: document.querySelector('#feedaliens').childElementCount
};

function next(name) {
    name.currentSlide = (name.currentSlide < name.totalSlides) ? name.currentSlide + 1 : 1;
    showSlide(name);
};

function prev(name) {
    name.currentSlide = (name.currentSlide > 1) ? name.currentSlide - 1 : name.totalSlides;
    showSlide(name);
};

function showSlide(name) {
    // let carousel = carousels[carouselName];
    let slides = name.element.getElementsByTagName('li');
    for (let i = 0; i < name.totalSlides; i++) {
        const element = slides[i];
        if (name.currentSlide === i + 1) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }
};