(function (global, factory) {
    global = global;
    global.Common = factory();
})(window, function () {
    'use strict';
    var Common = (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            win = window,
            $ = win.jQuery,
            doc = win.document;
        return {
            util: {
                isSupportTransform: (function () {
                    return (
                        'WebkitTransform' in doc.body.style ||
                        'MozTransform' in doc.body.style ||
                        'msTransform' in doc.body.style ||
                        'OTransform' in doc.body.style ||
                        'transform' in doc.body.style
                    );
                })(),
                isSupportTransition: (function () {
                    return (
                        'WebkitTransition' in doc.body.style ||
                        'MozTransition' in doc.body.style ||
                        'msTransition' in doc.body.style ||
                        'OTransition' in doc.body.style ||
                        'transition' in doc.body.style
                    );
                })(),
                isSupportTransforms3d:
                    (window.Modernizr && Modernizr.csstransforms3d === true) ||
                    (function () {
                        var div = document.createElement('div').style;
                        return (
                            'webkitPerspective' in div ||
                            'MozPerspective' in div ||
                            'OPerspective' in div ||
                            'MsPerspective' in div ||
                            'perspective' in div
                        );
                    })(),
                isDevice: (function () {
                    var isDevice =
                        'ontouchstart' in win ||
                        (win.DocumentTouch && doc instanceof win.DocumentTouch);
                    isDevice
                        ? $('html').addClass('isTouchDevice')
                        : $('html').addClass('isNotTouchDevice');
                    return isDevice;
                })(),
                isIOS: (function () {
                    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    isIOS
                        ? $('html').addClass('isIosDevice')
                        : $('html').addClass('isNotIosDevice');
                    return isIOS;
                })(),
                isIEorEdge: (function () {
                    var word;
                    var agent = navigator.userAgent.toLowerCase();
                    if (navigator.appName == 'Microsoft Internet Explorer') {
                        word = 'msie ';
                    } else if (agent.search('trident') > -1) {
                        word = 'trident/.*rv:';
                    } else if (agent.search('edge/') > -1) {
                        word = 'edge/';
                    } else {
                        return -1;
                    }
                    var reg = new RegExp(
                        word + '([0-9]{1,})(\\.{0,}[0-9]{0,1})'
                    );
                    if (reg.exec(agent) != null) {
                        $('html').addClass('isIEorEdge');
                        return parseFloat(RegExp.$1 + RegExp.$2);
                    }
                    return -1;
                })(),
                isObject: function (o) {
                    return (
                        typeof o === 'object' &&
                        o !== null &&
                        o.constructor &&
                        o.constructor === Object
                    );
                },
                getBoundingClientRect: function (target) {
                    return target[0].getBoundingClientRect();
                },
                getTransitionCss: function (targetProperty, target) {
                    var propertys = target.css('transition-property'),
                        durations = target.css('transition-duration'),
                        delays = target.css('transition-delay');
                    var slicePropertys = propertys
                            .split(',')
                            .map(function (val) {
                                return $.trim(val);
                            }),
                        sliceDurations = durations
                            .split(',')
                            .map(function (val) {
                                return parseFloat($.trim(val)) * 1000;
                            }),
                        sliceDelays = delays.split(',').map(function (val) {
                            return parseFloat($.trim(val)) * 1000;
                        }),
                        hasIndex = $.inArray(targetProperty, slicePropertys);
                    return sliceDurations[hasIndex] + sliceDelays[hasIndex];
                },
                def: function () {
                    var args = [],
                        len$1 = arguments.length;
                    while (len$1--) args[len$1] = arguments[len$1];
                    var to = Object(args[0]);
                    for (var i = 1; i < args.length; i += 1) {
                        var nextSource = args[i];
                        if (nextSource !== undefined && nextSource !== null) {
                            var keysArray = Object.keys(Object(nextSource));
                            for (
                                var nextIndex = 0, len = keysArray.length;
                                nextIndex < len;
                                nextIndex += 1
                            ) {
                                var nextKey = keysArray[nextIndex];
                                var desc = Object.getOwnPropertyDescriptor(
                                    nextSource,
                                    nextKey
                                );
                                if (desc !== undefined && desc.enumerable) {
                                    if (
                                        this.isObject(to[nextKey]) &&
                                        this.isObject(nextSource[nextKey])
                                    ) {
                                        this.def(
                                            to[nextKey],
                                            nextSource[nextKey]
                                        );
                                    } else if (
                                        !this.isObject(to[nextKey]) &&
                                        this.isObject(nextSource[nextKey])
                                    ) {
                                        to[nextKey] = {};
                                        this.def(
                                            to[nextKey],
                                            nextSource[nextKey]
                                        );
                                    } else {
                                        to[nextKey] = nextSource[nextKey];
                                    }
                                }
                            }
                        }
                    }
                    return to;
                }
            },
            RESPONSIVE: {
                MOBILE: {
                    NAME: 'mobile',
                    WIDTH: 767
                }
            }
        };
    })();
    return Common;
});
