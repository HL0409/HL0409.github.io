const htmlElem = document.querySelector('html');
const hamburger = document.querySelector('.hamburger_box');
const headerElem = document.querySelector('.header_wrap');
const $main = document.querySelector('main');
let $section = $main.querySelectorAll('main > section');
let activeSec = $main.querySelector('section.on');
const $li = $main.querySelectorAll('main > nav > ul > li');

window.addEventListener('resize', windowCheck);
window.addEventListener('load', windowCheck);
$li.forEach(item => {
    item.addEventListener('click', clickMenu);
});

function windowCheck() {
    if (window.innerWidth <= 500) {
        window.removeEventListener('scroll', headerOn);
        hamburger.addEventListener('click', hamburgerOn);
    } else {
        hamburger.removeEventListener('click', hamburgerOn);
        window.addEventListener('scroll', headerOn);
        let activeSec = $main.querySelector('section.on');
        articleSet(activeSec);
    }
}

function headerOn() {
    var scroll = htmlElem.scrollTop;
    if (scroll > 0) {
        headerElem.style.backgroundColor = '#fff';
    } else {
        headerElem.style.background = '';
    }
}

function hamburgerOn() {
    if (headerElem.classList.contains('on')) {
        headerElem.classList.remove('on');
    } else {
        headerElem.classList.add('on');
    }
}

function articleSet(sec) {
    let articleElem = sec.querySelectorAll('article');
    let articleLast = articleElem[articleElem.length - 1];
    
    if (window.innerWidth < 1839) {
        let articleHeight = 0;  
        articleElem[0].style.top = '240px';
        articleElem.forEach((item, index) => {
            item.style.transform = `translate(-50%, ${item.previousElementSibling.clientHeight * index }px)`;
            articleHeight += item.clientHeight;
        });
        sec.style.height = `${articleHeight + 400}px`;
    } else {
        articleElem[0].style.top = 0;
        articleElem.forEach(item => {
            item.style.transform = 'translate(0)';
        });
        sec.style.height = `${articleLast.clientHeight + 500}px`
    }
}

function clickMenu(e) {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
    $li.forEach(item => {
        item.classList.remove('on');
    });
    
    $section.forEach(item => {
        item.classList.remove('on');
        item.style.height = 0;
        if (item.className === e.target.parentNode.className) {
            item.classList.add('on');
            e.target.parentNode.classList.add('on');
            articleSet(item);
        }
    });
}
