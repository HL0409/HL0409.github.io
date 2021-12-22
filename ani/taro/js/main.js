(function (global, factory) {
    global = global;
    global.Taro = factory(); //함수실행구문
})(window, function () {
    'use strict';
    var win = window,
        Util = win.Common.util;
    var Taro = (function (isUndefined) {
        function Taro(container, args) {
            var defParams = {
                obj: container,
                cardInner: '.taro__card-inner',
                activeClass: 'is-active',
                loadedClass: 'is-loaded',
                customEvent: '.Component' + new Date().getTime() + Math.random()
            };
            this.opts = Util.def(defParams, args || {});
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        Taro.prototype = {
            init: function () {
                this.setElements();
                this.bindEvents(true);
            },
            setElements: function () {
                this.cardInner = this.obj.find(this.opts.cardInner);
            },
            changeEvents: function (event) {
                var events = [],
                    eventNames = event.split(' ');
                for (var key in eventNames) {
                    events.push(eventNames[key] + this.opts.customEvent);
                }
                return events.join(' ');
            },
            bindEvents: function (type) {
                if (type) {
                    $(window).ready(this.loadingEndFunc.bind(this));
                    this.cardInner.on(
                        this.changeEvents('click'),
                        this.swipeCardFunc.bind(this)
                    );
                } else {
                    this.cardInner.off(this.changeEvents('click'));
                }
            },
            loadingEndFunc: function () {
                if (!this.obj.hasClass(this.opts.loadedClass)) {
                    this.obj.addClass(this.opts.loadedClass);
                }
            },
            swipeCardFunc: function (e) {
                if (!$(e.delegateTarget).hasClass(this.opts.activeClass)) {
                    $(e.delegateTarget).addClass(this.opts.activeClass);
                }
            }
        };
        return Taro;
    })();
    return Taro;
});
(function (global, factory) {
    global = global;
    $(function () {
        factory();
    });
})(window, function () {
    'use strict';
    var Taro = (function () {
        var win = window,
            Util = win.Common.util;
        function Taro(args) {
            var defParams = {
                obj: '.taro'
            };
            this.opts = Util.def(defParams, args || {});
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        Taro.prototype = {
            init: function () {
                this.callComponent();
            },
            callComponent: function () {
                var _this = this;
                for (var i = 0, max = this.obj.length; i < max; i++) {
                    (function (index) {
                        //즉시실행함수로 하는 이유는? i의 결과값이 달라짐!
                        var instance = new win.Taro(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Taro();
    })();
    return Taro;
});
