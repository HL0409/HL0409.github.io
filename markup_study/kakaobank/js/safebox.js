/* $(document).ready(function () {
}); */

list = document.querySelectorAll('.list');
headerUl = document.querySelector('.gnb_menu');
headerFix = document.querySelector('.header_fixed');
htmlElem = document.querySelector('html');
cont2Txt = document.querySelector('.circle_txt2');
cont1Elem = document.querySelector('.safebox_cont1');
cont2Elem = document.querySelector('.safebox_cont2');
cont3Elem = document.querySelector('.safebox_cont3');

window.addEventListener('scroll', function () {
    console.log(htmlElem.scrollTop);
    if (htmlElem.scrollTop === 0) {
        headerFix.classList.add("on");
    } else {
        headerFix.classList.remove("on");
    }

    if (htmlElem.scrollTop > 374 && htmlElem.scrollTop <= 1000) {
        cont1Elem.classList.add('on');
    }
    if (htmlElem.scrollTop > 1000 && htmlElem.scrollTop <= 1495) {
        cont2Elem.classList.add('on');
    }
    if (htmlElem.scrollTop > 1495) {
        cont3Elem.classList.add('on');
    }
});
headerUl.addEventListener('mouseenter', headerEnter);
headerUl.addEventListener('mouseleave', headerLeave);


for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', listClick);
}

function headerEnter() {
    headerFix.classList.remove('on');
}

function headerLeave() {
    if (htmlElem.scrollTop === 0) {
        headerFix.classList.add('on');
    }
}

function listClick(e) {
    e.preventDefault();
    
    if (this.classList.contains('on')) {
        this.classList.remove('on');
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i].classList.contains('on')) {
                list[i].classList.remove('on');
                this.classList.add('on');
            } else {
                this.classList.add('on');
            }
        }
    }    
}