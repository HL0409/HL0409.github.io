const $html = document.querySelector('html');
let depositElem = document.querySelector('.cont_deposit_savings');
let foreignElem = document.querySelector('.cont_foreign');
let loanElem = document.querySelector('.cont_loan');

window.addEventListener('scroll', scrollEvent);

function scrollEvent() {
  if ($html.scrollTop > 1257 && $html.scrollTop <= 2315) {
    depositElem.classList.add('on');
  } else if ($html.scrollTop > 3506 && $html.scrollTop <= 4165) {
    foreignElem.classList.add('on');
  } else if ($html.scrollTop > 4500) {
    loanElem.classList.add('on');
  }
}