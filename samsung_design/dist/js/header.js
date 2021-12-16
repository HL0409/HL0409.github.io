(function (global, factory) {
    global = global;
    global.HeaderUtil = factory(); //함수실행구문
})(window, function () {
    'use strict';
    var win = window,
        Util = win.Common.util,
        Mobile = win.Common.RESPONSIVE.MOBILE.WIDTH;
    var HeaderUtil = (function (isUndefined) {
        function HeaderUtil(container, args) {
            var defParams = {
                obj: container,
                closeCta: '.header-close',
                headerUtil: '.header-util',
                searchCta: '.header-search__cta',
                langCta: '.header-lang__cta',
                searchClass: 'is-search-opened',
                langClass: 'is-lang-opened',
                viewType: null
            };
            this.opts = Util.def(defParams, args || {});
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        HeaderUtil.prototype = {
            init: function () {
                this.setElements();
                this.resizeFunc();
                this.initLayout();
                this.bindEvents(true);
            },
            setElements: function () {
                this.closeCta = this.obj.find(this.opts.closeCta);
                this.headerUtil = this.obj.find(this.opts.headerUtil);
                this.searchCta = this.headerUtil.find(this.opts.searchCta);
                this.langCta = this.headerUtil.find(this.opts.langCta);
            },
            initLayout: function () {},
            bindEvents: function (type) {
                if (type) {
                    $(win).on('resize', this.resizeFunc.bind(this)); //브라우저에서 일어나는 이벤트
                    this.obj.on('click', this.headerClickFunc.bind(this));
                } else {
                    $(win).off('resize');
                    this.obj.off('click');
                }
            },
            resizeFunc: function () {
                this.winWidth = Util.winSize().w;
                win.clearTimeout(this.resizeEndFunc); //클리어를 계속해서 밑에가 실행 안되게
                this.resizeEndFunc = win.setTimeout(
                    this.onResizeEndFunc.bind(this),
                    150
                ); //가만히있으면 clear실행안돼서 됨
            },
            onResizeEndFunc: function () {
                console.log('resize end');
                this.setLayout(); //resize 끝나면 setLayout
            },
            setLayout: function () {
                if (this.winWidth > Mobile) {
                    if (this.opts.viewType != 'PC') {
                        // NULL도 포함! mo pc 기준점에서만 찍히게
                        this.opts.viewType = 'PC';
                        console.log('pc');
                        this.initLayout();
                    }
                } else {
                    if (this.opts.viewType != 'MO') {
                        this.opts.viewType = 'MO';
                        console.log('mo');
                        this.initLayout();
                    }
                }
            },
            headerClickFunc: function (e) {
                e.preventDefault();
                var target = $(e.target);
                if (target[0] === this.searchCta[0]) {
                    this.searchClick();
                } else if (target[0] === this.langCta[0]) {
                    this.langClick();
                } else if (target[0] === this.closeCta[0]) {
                    this.searchClose();
                }
            },
            searchClick: function () {
                if (this.obj.hasClass(this.opts.langClass)) {
                    this.obj.removeClass(this.opts.langClass);
                    this.obj.addClass(this.opts.searchClass);
                } else {
                    this.obj.addClass(this.opts.searchClass);
                }
            },
            searchClose: function () {
                this.obj.removeClass(this.opts.searchClass);
            },
            langClick: function () {
                this.obj.toggleClass(this.opts.langClass);
            }
        };
        return HeaderUtil;
    })();
    return HeaderUtil;
});
(function (global, factory) {
    global = global;
    $(function () {
        factory();
    });
})(window, function () {
    'use strict';
    var HeaderUtil = (function () {
        var win = window,
            Util = win.Common.util;

        function HeaderUtil(args) {
            var defParams = {
                obj: '.header'
            };
            this.opts = Util.def(defParams, args || {});
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        HeaderUtil.prototype = {
            init: function () {
                this.callComponent();
            },
            callComponent: function () {
                var _this = this;
                for (var i = 0, max = this.obj.length; i < max; i++) {
                    (function (index) {
                        //즉시실행함수로 하는 이유는? i의 결과값이 달라짐! 검색해보기
                        var instance = new win.HeaderUtil(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new HeaderUtil();
    })();
    return HeaderUtil;
});
