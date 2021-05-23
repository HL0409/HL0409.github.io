var sliders = {
    1: { slider: '.slide_work > .slide_item', button: '.slide_work > .slide_bar button'},
    2: { slider: '.slide_life > .slide_item', button: '.slide_life > .slide_bar button'},
    3: { slider: '.slide_growth > .slide_item', button: '.slide_growth > .slide_bar button'}
};

$(document).ready(function () {
    $.each(sliders, function () {
        var slider = $(this.slider);
        var button = $(this.button);

        slider.slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnselect: true,
        });

        for (let i = 0; i < button.length; i++) {
            button[i].style.width = 'calc(100% / ' + button.length + ')';
        }

        button.click(function () {
            var slideNo = $(this).index();
            slider.slick('slickGoTo', slideNo);
        });

        slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0);
            //button의 자식방번호 와 현재슬라이드 번호가 같으면 class on 주고 아니면 떼기
            if (Object.keys(button)[i] == i) {
                for (let j = 0; j < button.length; j++) {
                    button[j].classList.remove('on');
                }
                button[i].classList.add('on');
            }
        });
    });
})

const htmlElem = document.querySelector('html');
const introTxt = document.querySelector('.intro_main .cont_txt');
const endTxt = document.querySelector('.cont_end .cont_title');
const imgVision = document.querySelector('#img_vision');
const liVision = document.querySelectorAll('.list_vision > li');
const hamburger = document.querySelector('.hamburger_box');
const headerElem = document.querySelector('header');

window.addEventListener('resize', windowCheck);
window.addEventListener('load', windowCheck);

function windowCheck() {
    if (window.innerWidth <= 500) {
        introTxt.innerHTML = '<h2>A WINDOW<br>TO THE VARIETY<br>OF THE WORLD';
        endTxt.innerHTML = '<h3>MORE CONNECTED<br>THAN EVER, LET’S BE<br>HYPERCONNECTED!</h3>';

        window.removeEventListener('scroll', headerOn);
        for (let i = 0; i < liVision.length; i++) {
            liVision[i].removeEventListener('mouseenter', hoverImg);
        }

        hamburger.addEventListener('click', hamburgerOn);
    } else {
        introTxt.innerHTML = '<h2>A WINDOW TO THE VARIETY<br>OF THE WORLD';
        endTxt.innerHTML = '<h3>MORE CONNECTED THAN EVER<br>LET’S BE HYPERCONNECTED!</h3>';
        
        hamburger.removeEventListener('click', hamburgerOn);
        window.addEventListener('scroll', headerOn);
        for (let i = 0; i < liVision.length; i++) {
            liVision[i].addEventListener('mouseenter', hoverImg);
        }
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

function hoverImg() {
    var arrLis = Array.from(liVision);
    var crrIndex = arrLis.indexOf(this);
    
    imgVision.src = 'img/hover-' + crrIndex + '.svg';    
}