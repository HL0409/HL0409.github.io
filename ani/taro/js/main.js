$(function () {
    const activeClass = 'is-active';
    const obj = $('.taro');
    const cardEl = obj.find('.taro__card-inner');

    cardEl.click(function (e) {
        if (!$(e.delegateTarget).hasClass(activeClass)) {
            $(e.delegateTarget).addClass(activeClass);
        }
    });
});
