$(window).load(
    setTimeout(() => {
        $(".loading").fadeOut()
    }, 2500)
    
);
const mail = document.querySelector('.mail');
const mailPop = document.querySelector('aside > span');
const btn = document.querySelectorAll('main .btn');
const detailElem = document.querySelectorAll('.detail');
const btnElem = document.querySelectorAll('.works > li');

mail.addEventListener('click', clickWork);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseenter', enterWork);
    btn[i].addEventListener('mouseleave', leaveWork);
}

btnElem.forEach(item => {
    item.addEventListener('click', popUp);
});

$(".detail").click(function () {
    $(".detail").fadeOut();
});


function popUp(e) {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
    var currClass = e.target.parentNode.id;
    detailElem.forEach(item => {
        if (item.classList.contains(currClass)) {
            $('.'+ currClass).fadeIn();
        }
    });
}

function clickWork(e) {
    if (e.target.tagName !== 'A') return;
    if (mailPop.classList.contains('on')) {
        mailPop.classList.remove('on');
    } else {
        mailPop.classList.add('on')
    }
}

function enterWork(e) {
    if (e.target.id === 'kakaobank') {
        e.target.firstChild.textContent = "Divin'";
    } else if (e.target.id === 'naver') {
        e.target.firstChild.textContent = "Ridin'";
    } else if (e.target.id === 'hyperconnect') {
        e.target.firstChild.textContent =  "Flyin'";
    }
}

function leaveWork(e) {
    if (e.target.id === 'kakaobank') {
        e.target.firstChild.textContent = 'kakaobank';
    } else if (e.target.id === 'naver') {
        e.target.firstChild.textContent = 'naver';
    } else if (e.target.id === 'hyperconnect') {
        e.target.firstChild.textContent = 'hyperconnect';
    }
}

$('.box').on('mousewheel', function (e) {
    var wheelDelta = e.originalEvent.wheelDelta;
    console.log(wheelDelta);
    if (wheelDelta > 0) {
        console.log("up");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    } else {
        console.log("down");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }

});