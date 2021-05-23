/* var sliders = {
    1: { slider: '.slide_work'},
    2: { slider: '.slide_life'},
    3: { slider: '.slider_growth'}
};

$.each(sliders, function () {

    $(this.slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: this.nav
    });
    $(this.nav).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: this.slider,
        dots: true,
        arrows: true,
        centerMode: false,
        focusOnSelect: true
    });

}); */

$('.slide_item').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnselect: true,
        /* dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            console.log($(slider.$slides[i]).html());
            return '<button class="tab">' + $(slider.$slides[i]).find('.slide_dots') + '</button>';
        }, */
});


var $slickElement = $('.slide_work');
var button1 = $('.slide_work .slide_bar button');
var button2 = $('.slide_life .slide_bar button');
var button3 = $('.slide_growth .slide_bar button');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0);
    //console.log(i + '/' + slick.slideCount);
    //button의 자식방번호 와 현재슬라이드 번호가 같으면 class on 주고 아니면 떼기
    if (Object.keys(button1)[i] == i) {
        for (let j = 0; j < button1.length; j++) {
            button1[j].classList.remove('on');            
        }
        button1[i].classList.add('on');
    }
});

$('.slide_work > .slide_bar button').click(function () {
    var slideNo = $(this).index();
    $('.slide_work > .slide_item').slick('slickGoTo', slideNo);
});
$('.slide_life > .slide_bar button').click(function () {
    var slideNo = $(this).index();
    $('.slide_life > .slide_item').slick('slickGoTo', slideNo);
});
$('.slide_growth > .slide_bar button').click(function () {
    var slideNo = $(this).index();
    $('.slide_growth > .slide_item').slick('slickGoTo', slideNo);
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
        $("header").css("background", "#fff");
    } else {
        $("header").css("background", "none");
    }
});


var current = $('.slide_item').slick('slickCurrentSlide');

/* if (current === button.index()) {
    button[current].classList.add('on');
    console.log('실행');
} else {
    button[current].classList.remove('on');
} */



$('.hamburger_box').click(function () {
    $('header').toggleClass('on');
});



window.addEventListener('resize', windowCheck);
window.addEventListener('load', windowCheck);

const htmlElem = document.querySelector('html');
const introTxt = document.querySelector('.intro_main .cont_txt');
const endTxt = document.querySelector('.cont_end .cont_title');
const imgVision = document.querySelector('#img_vision');
const liVision = document.querySelectorAll('.list_vision > li');



function windowCheck() {
    if (window.innerWidth <= 500) {
        introTxt.innerHTML = '<h2>A WINDOW<br>TO THE VARIETY<br>OF THE WORLD';
        endTxt.innerHTML = '<h3>MORE CONNECTED<br>THAN EVER, LET’S BE<br>HYPERCONNECTED!</h3>';
    } else {
        introTxt.innerHTML = '<h2>A WINDOW TO THE VARIETY<br>OF THE WORLD';
        endTxt.innerHTML = '<h3>MORE CONNECTED THAN EVER<br>LET’S BE HYPERCONNECTED!</h3>';
    }  
}

for (let i = 0; i < liVision.length; i++) {
    liVision[i].addEventListener('mouseenter', hoverImg);
}



function hoverImg() {
    if (this.children[0].textContent === '01') {
        imgVision.src = '../img/hyperconnect/hover-proactive.svg';
    } else if (this.children[0].textContent === '02') {
        imgVision.src = '../img/hyperconnect/hover-oneteam.svg';
    } else if (this.children[0].textContent === '03') {
        imgVision.src = '../img/hyperconnect/hover-aimhigh.svg';
    } else if (this.children[0].textContent === '04') {
        imgVision.src = '../img/hyperconnect/hover-prioritize.svg';
    } else if (this.children[0].textContent === '05') {
        imgVision.src = '../img/hyperconnect/hover-movefast.svg';
    } else if (this.children[0].textContent === '06') {
        imgVision.src = '../img/hyperconnect/hover-logical.svg';
    } else if (this.children[0].textContent === '07') {
        imgVision.src = '../img/hyperconnect/hover-open.svg';
    } else return;
}


