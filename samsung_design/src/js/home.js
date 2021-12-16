(function (global, factory) {
    global = global;
    global.Home = factory(); //함수실행구문
})(window, function () {
    'use strict';
    var win = window,
        Util = win.Common.util,
        Mobile = win.Common.RESPONSIVE.MOBILE.WIDTH;
    var Home = (function (isUndefined) {
        function Home(container, args) {
            var defParams = {
                obj: container,
                activeClass: 'is-active',
                viewType: null
            };
            this.opts = Util.def(defParams, args || {});
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        Home.prototype = {
            init: function () {
                this.setElements();
                this.resizeFunc();
                this.bindEvents(true);
            },
            setElements: function () {
                this.closeCta = this.obj.find(this.opts.closeCta);
            },
            bindEvents: function (type) {
                if (type) {
                    $(win).on('resize', this.resizeFunc.bind(this)); //브라우저에서 일어나는 이벤트
                    $(win).ready(this.addClassFunc());
                } else {
                    $(win).off('resize');
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
                    }
                } else {
                    if (this.opts.viewType != 'MO') {
                        this.opts.viewType = 'MO';
                        console.log('mo');
                    }
                }
            },
            addClassFunc: function () {
                var _this = this;
                if (!this.opts.obj.hasClass(this.opts.activeClass)) {
                    setTimeout(function () {
                        _this.opts.obj.addClass(_this.opts.activeClass);
                    }, 800);
                }
            }
        };
        return Home;
    })();
    return Home;
});
(function (global, factory) {
    global = global;
    $(function () {
        factory();
    });
})(window, function () {
    'use strict';
    var Home = (function () {
        var win = window,
            Util = win.Common.util;

        function Home(args) {
            var defParams = {
                obj: '.design-home'
            };
            this.opts = Util.def(defParams, args || {});
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        Home.prototype = {
            init: function () {
                this.callComponent();
            },
            callComponent: function () {
                var _this = this;
                for (var i = 0, max = this.obj.length; i < max; i++) {
                    (function (index) {
                        //즉시실행함수로 하는 이유는? i의 결과값이 달라짐! 검색해보기
                        var instance = new win.Home(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Home();
    })();
    return Home;
});
