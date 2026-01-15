!function (t) {
    var e = {};

    function i(s) {
        if (e[s]) return e[s].exports;
        var r = e[s] = {i: s, l: !1, exports: {}};
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    i.m = t, i.c = e, i.d = function (t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: s})
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(s, r, function (e) {
            return t[e]
        }.bind(null, r));
        return s
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/assets/js", i(i.s = 9)
}([function (t, e, i) {
    "use strict";

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, a = void 0, a = function (t, e) {
                if ("object" !== s(t) || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var r = i.call(t, e || "default");
                    if ("object" !== s(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(n, "string"), "symbol" === s(a) ? a : String(a)), r)
        }
        var n, a
    }

    i.r(e);
    var n = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.handlers = []
        }

        var e, i, s;
        return e = t, (i = [{
            key: "_throwError", value: function () {
                throw new TypeError("Signal handler must be function!")
            }
        }, {
            key: "add", value: function (t, e) {
                return "function" != typeof t ? (this._throwError(), null) : (this.handlers.push({
                    handler: t,
                    context: e
                }), t)
            }
        }, {
            key: "remove", value: function (t) {
                if ("function" != typeof t) return this._throwError(), null;
                for (var e = this.handlers.length, i = 0; i < e; i++) if (t === this.handlers[i].handler) return this.handlers.splice(i, 1), t;
                return null
            }
        }, {
            key: "call", value: function () {
                for (var t = this.handlers.length, e = 0; e < t; e++) {
                    var i = this.handlers[e];
                    i.handler.apply(i.context || null, arguments)
                }
            }
        }, {
            key: "delayedCall", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16;
                e = e || 100;
                var i = Array.prototype.slice.call(arguments);
                i.shift(), setTimeout((function () {
                    t.call.apply(t, i)
                }), e)
            }
        }]) && r(e.prototype, i), s && r(e, s), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    e.default = n
}, function (t, e, i) {
    "use strict";

    function s(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }

    function r(t = {}, e = {}) {
        Object.keys(e).forEach(i => {
            void 0 === t[i] ? t[i] = e[i] : s(e[i]) && s(t[i]) && Object.keys(e[i]).length > 0 && r(t[i], e[i])
        })
    }

    i.d(e, "f", (function () {
        return U
    })), i.d(e, "c", (function () {
        return Z
    })), i.d(e, "d", (function () {
        return Q
    })), i.d(e, "a", (function () {
        return tt
    })), i.d(e, "e", (function () {
        return et
    })), i.d(e, "b", (function () {
        return it
    }));
    const n = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function a() {
        const t = "undefined" != typeof document ? document : {};
        return r(t, n), t
    }

    const o = {
        document: n,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
            "undefined" != typeof setTimeout && clearTimeout(t)
        }
    };

    function l() {
        const t = "undefined" != typeof window ? window : {};
        return r(t, o), t
    }

    function h(t, e = 0) {
        return setTimeout(t, e)
    }

    function u() {
        return Date.now()
    }

    function p(t, e = "x") {
        const i = l();
        let s, r, n;
        const a = function (t) {
            const e = l();
            let i;
            return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
        }(t);
        return i.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(t => t.replace(",", ".")).join(", ")), n = new i.WebKitCSSMatrix("none" === r ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), "x" === e && (r = i.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === e && (r = i.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), r || 0
    }

    function c(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
    }

    function d(...t) {
        const e = Object(t[0]), i = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < t.length; r += 1) {
            const n = t[r];
            if (null != n && (s = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const t = Object.keys(Object(n)).filter(t => i.indexOf(t) < 0);
                for (let i = 0, s = t.length; i < s; i += 1) {
                    const s = t[i], r = Object.getOwnPropertyDescriptor(n, s);
                    void 0 !== r && r.enumerable && (c(e[s]) && c(n[s]) ? n[s].__swiper__ ? e[s] = n[s] : d(e[s], n[s]) : !c(e[s]) && c(n[s]) ? (e[s] = {}, n[s].__swiper__ ? e[s] = n[s] : d(e[s], n[s])) : e[s] = n[s])
                }
            }
        }
        var s;
        return e
    }

    function f(t, e, i) {
        t.style.setProperty(e, i)
    }

    function m({swiper: t, targetPosition: e, side: i}) {
        const s = l(), r = -t.translate;
        let n, a = null;
        const o = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const h = e > r ? "next" : "prev", u = (t, e) => "next" === h && t >= e || "prev" === h && t <= e, p = () => {
            n = (new Date).getTime(), null === a && (a = n);
            const l = Math.max(Math.min((n - a) / o, 1), 0), h = .5 - Math.cos(l * Math.PI) / 2;
            let c = r + h * (e - r);
            if (u(c, e) && (c = e), t.wrapperEl.scrollTo({[i]: c}), u(c, e)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[i]: c})
            }), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(p)
        };
        p()
    }

    function g(t, e = "") {
        return [...t.children].filter(t => t.matches(e))
    }

    function v(t, e = []) {
        const i = document.createElement(t);
        return i.classList.add(...Array.isArray(e) ? e : [e]), i
    }

    function y(t, e) {
        return l().getComputedStyle(t, null).getPropertyValue(e)
    }

    function b(t) {
        let e, i = t;
        if (i) {
            for (e = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (e += 1);
            return e
        }
    }

    function _(t, e) {
        const i = [];
        let s = t.parentElement;
        for (; s;) e ? s.matches(e) && i.push(s) : i.push(s), s = s.parentElement;
        return i
    }

    function x(t, e) {
        e && t.addEventListener("transitionend", (function i(s) {
            s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i))
        }))
    }

    function S(t, e, i) {
        const s = l();
        return i ? t["width" === e ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-left" : "margin-bottom")) : t.offsetWidth
    }

    let E, C, k;

    function w() {
        return E || (E = function () {
            const t = l(), e = a();
            return {
                smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
                touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
            }
        }()), E
    }

    function T(t = {}) {
        return C || (C = function ({userAgent: t} = {}) {
            const e = w(), i = l(), s = i.navigator.platform, r = t || i.navigator.userAgent,
                n = {ios: !1, android: !1}, a = i.screen.width, o = i.screen.height,
                h = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/), c = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                d = "Win32" === s;
            let f = "MacIntel" === s;
            return !u && f && e.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), h && !d && (n.os = "android", n.android = !0), (u || c || p) && (n.os = "ios", n.ios = !0), n
        }(t)), C
    }

    function P() {
        return k || (k = function () {
            const t = l();
            let e = !1;

            function i() {
                const e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }

            if (i()) {
                const i = String(t.navigator.userAgent);
                if (i.includes("Version/")) {
                    const [t, s] = i.split("Version/")[1].split(" ")[0].split(".").map(t => Number(t));
                    e = t < 16 || 16 === t && s < 2
                }
            }
            return {
                isSafari: e || i(),
                needPerspectiveFix: e,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), k
    }

    const A = (t, e) => {
        if (!t || t.destroyed || !t.params) return;
        const i = e.closest(t.isElement ? "swiper-slide" : "." + t.params.slideClass);
        if (i) {
            const e = i.querySelector("." + t.params.lazyPreloaderClass);
            e && e.remove()
        }
    }, M = (t, e) => {
        if (!t.slides[e]) return;
        const i = t.slides[e].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading")
    }, D = t => {
        if (!t || t.destroyed || !t.params) return;
        let e = t.params.lazyPreloadPrevNext;
        const i = t.slides.length;
        if (!i || !e || e < 0) return;
        e = Math.min(e, i);
        const s = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
            r = t.activeIndex;
        if (t.params.grid && t.params.grid.rows > 1) {
            const i = r, n = [i - e];
            return n.push(...Array.from({length: e}).map((t, e) => i + s + e)), void t.slides.forEach((e, i) => {
                n.includes(e.column) && M(t, i)
            })
        }
        const n = r + s - 1;
        if (t.params.rewind || t.params.loop) for (let s = r - e; s <= n + e; s += 1) {
            const e = (s % i + i) % i;
            (e < r || e > n) && M(t, e)
        } else for (let s = Math.max(r - e, 0); s <= Math.min(n + e, i - 1); s += 1) s !== r && (s > n || s < r) && M(t, s)
    };

    function F({swiper: t, runCallbacks: e, direction: i, step: s}) {
        const {activeIndex: r, previousIndex: n} = t;
        let a = i;
        if (a || (a = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition" + s), e && r !== n) {
            if ("reset" === a) return void t.emit("slideResetTransition" + s);
            t.emit("slideChangeTransition" + s), "next" === a ? t.emit("slideNextTransition" + s) : t.emit("slidePrevTransition" + s)
        }
    }

    function I(t) {
        const e = this, i = a(), s = l(), r = e.touchEventsData;
        r.evCache.push(t);
        const {params: n, touches: o, enabled: h} = e;
        if (!h) return;
        if (!n.simulateTouch && "mouse" === t.pointerType) return;
        if (e.animating && n.preventInteractionOnTransition) return;
        !e.animating && n.cssMode && n.loop && e.loopFix();
        let p = t;
        p.originalEvent && (p = p.originalEvent);
        let c = p.target;
        if ("wrapper" === n.touchEventsTarget && !e.wrapperEl.contains(c)) return;
        if ("which" in p && 3 === p.which) return;
        if ("button" in p && p.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        const d = !!n.noSwipingClass && "" !== n.noSwipingClass, f = t.composedPath ? t.composedPath() : t.path;
        d && p.target && p.target.shadowRoot && f && (c = f[0]);
        const m = n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass,
            g = !(!p.target || !p.target.shadowRoot);
        if (n.noSwiping && (g ? function (t, e = this) {
            return function e(i) {
                if (!i || i === a() || i === l()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(t);
                return s || i.getRootNode ? s || e(i.getRootNode().host) : null
            }(e)
        }(m, c) : c.closest(m))) return void (e.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
        o.currentX = p.pageX, o.currentY = p.pageY;
        const v = o.currentX, y = o.currentY, b = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            _ = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (b && (v <= _ || v >= s.innerWidth - _)) {
            if ("prevent" !== b) return;
            t.preventDefault()
        }
        Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = v, o.startY = y, r.touchStartTime = u(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
        let x = !0;
        c.matches(r.focusableElements) && (x = !1, "SELECT" === c.nodeName && (r.isTouched = !1)), i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== c && i.activeElement.blur();
        const S = x && e.allowTouchMove && n.touchStartPreventDefault;
        !n.touchStartForcePreventDefault && !S || c.isContentEditable || p.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", p)
    }

    function L(t) {
        const e = a(), i = this, s = i.touchEventsData, {params: r, touches: n, rtlTranslate: o, enabled: l} = i;
        if (!l) return;
        if (!r.simulateTouch && "mouse" === t.pointerType) return;
        let h = t;
        if (h.originalEvent && (h = h.originalEvent), !s.isTouched) return void (s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", h));
        const p = s.evCache.findIndex(t => t.pointerId === h.pointerId);
        p >= 0 && (s.evCache[p] = h);
        const c = s.evCache.length > 1 ? s.evCache[0] : h, d = c.pageX, f = c.pageY;
        if (h.preventedByNestedSwiper) return n.startX = d, void (n.startY = f);
        if (!i.allowTouchMove) return h.target.matches(s.focusableElements) || (i.allowClick = !1), void (s.isTouched && (Object.assign(n, {
            startX: d,
            startY: f,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: d,
            currentY: f
        }), s.touchStartTime = u()));
        if (r.touchReleaseOnEdges && !r.loop) if (i.isVertical()) {
            if (f < n.startY && i.translate <= i.maxTranslate() || f > n.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1)
        } else if (d < n.startX && i.translate <= i.maxTranslate() || d > n.startX && i.translate >= i.minTranslate()) return;
        if (e.activeElement && h.target === e.activeElement && h.target.matches(s.focusableElements)) return s.isMoved = !0, void (i.allowClick = !1);
        if (s.allowTouchCallbacks && i.emit("touchMove", h), h.targetTouches && h.targetTouches.length > 1) return;
        n.currentX = d, n.currentY = f;
        const m = n.currentX - n.startX, g = n.currentY - n.startY;
        if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold) return;
        if (void 0 === s.isScrolling) {
            let t;
            i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : m * m + g * g >= 25 && (t = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, s.isScrolling = i.isHorizontal() ? t > r.touchAngle : 90 - t > r.touchAngle)
        }
        if (s.isScrolling && i.emit("touchMoveOpposite", h), void 0 === s.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (s.startMoving = !0)), s.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1) return void (s.isTouched = !1);
        if (!s.startMoving) return;
        i.allowClick = !1, !r.cssMode && h.cancelable && h.preventDefault(), r.touchMoveStopPropagation && !r.nested && h.stopPropagation();
        let v = i.isHorizontal() ? m : g, y = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), y = Math.abs(y) * (o ? 1 : -1)), n.diff = v, v *= r.touchRatio, o && (v = -v, y = -y);
        const b = i.touchesDirection;
        i.swipeDirection = v > 0 ? "prev" : "next", i.touchesDirection = y > 0 ? "prev" : "next";
        const _ = i.params.loop && !r.cssMode;
        if (!s.isMoved) {
            if (_ && i.loopFix({direction: i.swipeDirection}), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
                const t = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                i.wrapperEl.dispatchEvent(t)
            }
            s.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", h)
        }
        let x;
        s.isMoved && b !== i.touchesDirection && _ && Math.abs(v) >= 1 && (i.loopFix({
            direction: i.swipeDirection,
            setTranslate: !0
        }), x = !0), i.emit("sliderMove", h), s.isMoved = !0, s.currentTranslate = v + s.startTranslate;
        let S = !0, E = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (E = 0), v > 0 ? (_ && !x && s.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), s.currentTranslate > i.minTranslate() && (S = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** E))) : v < 0 && (_ && !x && s.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: i.slides.length - ("auto" === r.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }), s.currentTranslate < i.maxTranslate() && (S = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** E))), S && (h.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, void (n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
    }

    function B(t) {
        const e = this, i = e.touchEventsData, s = i.evCache.findIndex(e => e.pointerId === t.pointerId);
        if (s >= 0 && i.evCache.splice(s, 1), ["pointercancel", "pointerout", "pointerleave"].includes(t.type)) {
            if (!("pointercancel" === t.type && (e.browser.isSafari || e.browser.isWebView))) return
        }
        const {params: r, touches: n, rtlTranslate: a, slidesGrid: o, enabled: l} = e;
        if (!l) return;
        if (!r.simulateTouch && "mouse" === t.pointerType) return;
        let p = t;
        if (p.originalEvent && (p = p.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", p), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && r.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        r.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const c = u(), d = c - i.touchStartTime;
        if (e.allowClick) {
            const t = p.path || p.composedPath && p.composedPath();
            e.updateClickedSlide(t && t[0] || p.target), e.emit("tap click", p), d < 300 && c - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", p)
        }
        if (i.lastClickTime = u(), h(() => {
            e.destroyed || (e.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        let f;
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, f = r.followFinger ? a ? e.translate : -e.translate : -i.currentTranslate, r.cssMode) return;
        if (r.freeMode && r.freeMode.enabled) return void e.freeMode.onTouchEnd({currentPos: f});
        let m = 0, g = e.slidesSizesGrid[0];
        for (let t = 0; t < o.length; t += t < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const e = t < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== o[t + e] ? f >= o[t] && f < o[t + e] && (m = t, g = o[t + e] - o[t]) : f >= o[t] && (m = t, g = o[o.length - 1] - o[o.length - 2])
        }
        let v = null, y = null;
        r.rewind && (e.isBeginning ? y = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
        const b = (f - o[m]) / g, _ = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (d > r.longSwipesMs) {
            if (!r.longSwipes) return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection && (b >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? v : m + _) : e.slideTo(m)), "prev" === e.swipeDirection && (b > 1 - r.longSwipesRatio ? e.slideTo(m + _) : null !== y && b < 0 && Math.abs(b) > r.longSwipesRatio ? e.slideTo(y) : e.slideTo(m))
        } else {
            if (!r.shortSwipes) return void e.slideTo(e.activeIndex);
            e.navigation && (p.target === e.navigation.nextEl || p.target === e.navigation.prevEl) ? p.target === e.navigation.nextEl ? e.slideTo(m + _) : e.slideTo(m) : ("next" === e.swipeDirection && e.slideTo(null !== v ? v : m + _), "prev" === e.swipeDirection && e.slideTo(null !== y ? y : m))
        }
    }

    function V() {
        const t = this, {params: e, el: i} = t;
        if (i && 0 === i.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {allowSlideNext: s, allowSlidePrev: r, snapGrid: n} = t, a = t.virtual && t.params.virtual.enabled;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
        const o = a && e.loop;
        !("auto" === e.slidesPerView || e.slidesPerView > 1) || !t.isEnd || t.isBeginning || t.params.centeredSlides || o ? t.params.loop && !a ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0) : t.slideTo(t.slides.length - 1, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
            t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
        }, 500)), t.allowSlidePrev = r, t.allowSlideNext = s, t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
    }

    function O(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
    }

    function R() {
        const t = this, {wrapperEl: e, rtlTranslate: i, enabled: s} = t;
        if (!s) return;
        let r;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const n = t.maxTranslate() - t.minTranslate();
        r = 0 === n ? 0 : (t.translate - t.minTranslate()) / n, r !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
    }

    function z(t) {
        A(this, t.target), this.params.cssMode || "auto" !== this.params.slidesPerView && !this.params.autoHeight || this.update()
    }

    let N = !1;

    function G() {
    }

    const q = (t, e) => {
        const i = a(), {params: s, el: r, wrapperEl: n, device: o} = t, l = !!s.nested,
            h = "on" === e ? "addEventListener" : "removeEventListener", u = e;
        r[h]("pointerdown", t.onTouchStart, {passive: !1}), i[h]("pointermove", t.onTouchMove, {
            passive: !1,
            capture: l
        }), i[h]("pointerup", t.onTouchEnd, {passive: !0}), i[h]("pointercancel", t.onTouchEnd, {passive: !0}), i[h]("pointerout", t.onTouchEnd, {passive: !0}), i[h]("pointerleave", t.onTouchEnd, {passive: !0}), (s.preventClicks || s.preventClicksPropagation) && r[h]("click", t.onClick, !0), s.cssMode && n[h]("scroll", t.onScroll), s.updateOnWindowResize ? t[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", V, !0) : t[u]("observerUpdate", V, !0), r[h]("load", t.onLoad, {capture: !0})
    };
    const H = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var j = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function W(t, e) {
        return function (i = {}) {
            const s = Object.keys(i)[0], r = i[s];
            "object" == typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === t[s] && (t[s] = {auto: !0}), s in t && "enabled" in r ? (!0 === t[s] && (t[s] = {enabled: !0}), "object" != typeof t[s] || "enabled" in t[s] || (t[s].enabled = !0), t[s] || (t[s] = {enabled: !1}), d(e, i)) : d(e, i)) : d(e, i)
        }
    }

    const Y = {
        eventsEmitter: {
            on(t, e, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof e) return s;
                const r = i ? "unshift" : "push";
                return t.split(" ").forEach(t => {
                    s.eventsListeners[t] || (s.eventsListeners[t] = []), s.eventsListeners[t][r](e)
                }), s
            }, once(t, e, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof e) return s;

                function r(...i) {
                    s.off(t, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(s, i)
                }

                return r.__emitterProxy = e, s.on(t, r, i)
            }, onAny(t, e) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const s = e ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
            }, offAny(t) {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsAnyListeners) return e;
                const i = e.eventsAnyListeners.indexOf(t);
                return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
            }, off(t, e) {
                const i = this;
                return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (t.split(" ").forEach(t => {
                    void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].forEach((s, r) => {
                        (s === e || s.__emitterProxy && s.__emitterProxy === e) && i.eventsListeners[t].splice(r, 1)
                    })
                }), i) : i
            }, emit(...t) {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let i, s, r;
                "string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], s = t.slice(1, t.length), r = e) : (i = t[0].events, s = t[0].data, r = t[0].context || e), s.unshift(r);
                return (Array.isArray(i) ? i : i.split(" ")).forEach(t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                        e.apply(r, [t, ...s])
                    }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(t => {
                        t.apply(r, s)
                    })
                }), e
            }
        }, update: {
            updateSize: function () {
                const t = this;
                let e, i;
                const s = t.el;
                e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : s.clientWidth, i = void 0 !== t.params.height && null !== t.params.height ? t.params.height : s.clientHeight, 0 === e && t.isHorizontal() || 0 === i && t.isVertical() || (e = e - parseInt(y(s, "padding-left") || 0, 10) - parseInt(y(s, "padding-right") || 0, 10), i = i - parseInt(y(s, "padding-top") || 0, 10) - parseInt(y(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
                    width: e,
                    height: i,
                    size: t.isHorizontal() ? e : i
                }))
            }, updateSlides: function () {
                const t = this;

                function e(e) {
                    return t.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }

                function i(t, i) {
                    return parseFloat(t.getPropertyValue(e(i)) || 0)
                }

                const s = t.params, {wrapperEl: r, slidesEl: n, size: a, rtlTranslate: o, wrongRTL: l} = t,
                    h = t.virtual && s.virtual.enabled, u = h ? t.virtual.slides.length : t.slides.length,
                    p = g(n, `.${t.params.slideClass}, swiper-slide`), c = h ? t.virtual.slides.length : p.length;
                let d = [];
                const m = [], v = [];
                let b = s.slidesOffsetBefore;
                "function" == typeof b && (b = s.slidesOffsetBefore.call(t));
                let _ = s.slidesOffsetAfter;
                "function" == typeof _ && (_ = s.slidesOffsetAfter.call(t));
                const x = t.snapGrid.length, E = t.slidesGrid.length;
                let C = s.spaceBetween, k = -b, w = 0, T = 0;
                if (void 0 === a) return;
                "string" == typeof C && C.indexOf("%") >= 0 ? C = parseFloat(C.replace("%", "")) / 100 * a : "string" == typeof C && (C = parseFloat(C)), t.virtualSize = -C, p.forEach(t => {
                    o ? t.style.marginLeft = "" : t.style.marginRight = "", t.style.marginBottom = "", t.style.marginTop = ""
                }), s.centeredSlides && s.cssMode && (f(r, "--swiper-centered-offset-before", ""), f(r, "--swiper-centered-offset-after", ""));
                const P = s.grid && s.grid.rows > 1 && t.grid;
                let A;
                P && t.grid.initSlides(c);
                const M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(t => void 0 !== s.breakpoints[t].slidesPerView).length > 0;
                for (let r = 0; r < c; r += 1) {
                    let n;
                    if (A = 0, p[r] && (n = p[r]), P && t.grid.updateSlide(r, n, c, e), !p[r] || "none" !== y(n, "display")) {
                        if ("auto" === s.slidesPerView) {
                            M && (p[r].style[e("width")] = "");
                            const a = getComputedStyle(n), o = n.style.transform, l = n.style.webkitTransform;
                            if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), s.roundLengths) A = t.isHorizontal() ? S(n, "width", !0) : S(n, "height", !0); else {
                                const t = i(a, "width"), e = i(a, "padding-left"), s = i(a, "padding-right"),
                                    r = i(a, "margin-left"), o = i(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) A = t + r + o; else {
                                    const {clientWidth: i, offsetWidth: a} = n;
                                    A = t + e + s + r + o + (a - i)
                                }
                            }
                            o && (n.style.transform = o), l && (n.style.webkitTransform = l), s.roundLengths && (A = Math.floor(A))
                        } else A = (a - (s.slidesPerView - 1) * C) / s.slidesPerView, s.roundLengths && (A = Math.floor(A)), p[r] && (p[r].style[e("width")] = A + "px");
                        p[r] && (p[r].swiperSlideSize = A), v.push(A), s.centeredSlides ? (k = k + A / 2 + w / 2 + C, 0 === w && 0 !== r && (k = k - a / 2 - C), 0 === r && (k = k - a / 2 - C), Math.abs(k) < .001 && (k = 0), s.roundLengths && (k = Math.floor(k)), T % s.slidesPerGroup == 0 && d.push(k), m.push(k)) : (s.roundLengths && (k = Math.floor(k)), (T - Math.min(t.params.slidesPerGroupSkip, T)) % t.params.slidesPerGroup == 0 && d.push(k), m.push(k), k = k + A + C), t.virtualSize += A + C, w = A, T += 1
                    }
                }
                if (t.virtualSize = Math.max(t.virtualSize, a) + _, o && l && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = t.virtualSize + C + "px"), s.setWrapperSize && (r.style[e("width")] = t.virtualSize + C + "px"), P && t.grid.updateWrapperSize(A, d, e), !s.centeredSlides) {
                    const e = [];
                    for (let i = 0; i < d.length; i += 1) {
                        let r = d[i];
                        s.roundLengths && (r = Math.floor(r)), d[i] <= t.virtualSize - a && e.push(r)
                    }
                    d = e, Math.floor(t.virtualSize - a) - Math.floor(d[d.length - 1]) > 1 && d.push(t.virtualSize - a)
                }
                if (h && s.loop) {
                    const e = v[0] + C;
                    if (s.slidesPerGroup > 1) {
                        const i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                            r = e * s.slidesPerGroup;
                        for (let t = 0; t < i; t += 1) d.push(d[d.length - 1] + r)
                    }
                    for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && d.push(d[d.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                }
                if (0 === d.length && (d = [0]), 0 !== C) {
                    const i = t.isHorizontal() && o ? "marginLeft" : e("marginRight");
                    p.filter((t, e) => !(s.cssMode && !s.loop) || e !== p.length - 1).forEach(t => {
                        t.style[i] = C + "px"
                    })
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let t = 0;
                    v.forEach(e => {
                        t += e + (C || 0)
                    }), t -= C;
                    const e = t - a;
                    d = d.map(t => t <= 0 ? -b : t > e ? e + _ : t)
                }
                if (s.centerInsufficientSlides) {
                    let t = 0;
                    if (v.forEach(e => {
                        t += e + (C || 0)
                    }), t -= C, t < a) {
                        const e = (a - t) / 2;
                        d.forEach((t, i) => {
                            d[i] = t - e
                        }), m.forEach((t, i) => {
                            m[i] = t + e
                        })
                    }
                }
                if (Object.assign(t, {
                    slides: p,
                    snapGrid: d,
                    slidesGrid: m,
                    slidesSizesGrid: v
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    f(r, "--swiper-centered-offset-before", -d[0] + "px"), f(r, "--swiper-centered-offset-after", t.size / 2 - v[v.length - 1] / 2 + "px");
                    const e = -t.snapGrid[0], i = -t.slidesGrid[0];
                    t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(t => t + i)
                }
                if (c !== u && t.emit("slidesLengthChange"), d.length !== x && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== E && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), !(h || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                    const e = s.containerModifierClass + "backface-hidden", i = t.el.classList.contains(e);
                    c <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                }
            }, updateAutoHeight: function (t) {
                const e = this, i = [], s = e.virtual && e.params.virtual.enabled;
                let r, n = 0;
                "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
                const a = t => s ? e.slides[e.getSlideIndexByData(t)] : e.slides[t];
                if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1) if (e.params.centeredSlides) (e.visibleSlides || []).forEach(t => {
                    i.push(t)
                }); else for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                    const t = e.activeIndex + r;
                    if (t > e.slides.length && !s) break;
                    i.push(a(t))
                } else i.push(a(e.activeIndex));
                for (r = 0; r < i.length; r += 1) if (void 0 !== i[r]) {
                    const t = i[r].offsetHeight;
                    n = t > n ? t : n
                }
                (n || 0 === n) && (e.wrapperEl.style.height = n + "px")
            }, updateSlidesOffset: function () {
                const t = this, e = t.slides,
                    i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
                for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
            }, updateSlidesProgress: function (t = this && this.translate || 0) {
                const e = this, i = e.params, {slides: s, rtlTranslate: r, snapGrid: n} = e;
                if (0 === s.length) return;
                void 0 === s[0].swiperSlideOffset && e.updateSlidesOffset();
                let a = -t;
                r && (a = t), s.forEach(t => {
                    t.classList.remove(i.slideVisibleClass)
                }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
                let o = i.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : "string" == typeof o && (o = parseFloat(o));
                for (let t = 0; t < s.length; t += 1) {
                    const l = s[t];
                    let h = l.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (h -= s[0].swiperSlideOffset);
                    const u = (a + (i.centeredSlides ? e.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
                        p = (a - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
                        c = -(a - h), d = c + e.slidesSizesGrid[t];
                    (c >= 0 && c < e.size - 1 || d > 1 && d <= e.size || c <= 0 && d >= e.size) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(t), s[t].classList.add(i.slideVisibleClass)), l.progress = r ? -u : u, l.originalProgress = r ? -p : p
                }
            }, updateProgress: function (t) {
                const e = this;
                if (void 0 === t) {
                    const i = e.rtlTranslate ? -1 : 1;
                    t = e && e.translate && e.translate * i || 0
                }
                const i = e.params, s = e.maxTranslate() - e.minTranslate();
                let {progress: r, isBeginning: n, isEnd: a, progressLoop: o} = e;
                const l = n, h = a;
                if (0 === s) r = 0, n = !0, a = !0; else {
                    r = (t - e.minTranslate()) / s;
                    const i = Math.abs(t - e.minTranslate()) < 1, o = Math.abs(t - e.maxTranslate()) < 1;
                    n = i || r <= 0, a = o || r >= 1, i && (r = 0), o && (r = 1)
                }
                if (i.loop) {
                    const i = e.getSlideIndexByData(0), s = e.getSlideIndexByData(e.slides.length - 1),
                        r = e.slidesGrid[i], n = e.slidesGrid[s], a = e.slidesGrid[e.slidesGrid.length - 1],
                        l = Math.abs(t);
                    o = l >= r ? (l - r) / a : (l + a - n) / a, o > 1 && (o -= 1)
                }
                Object.assign(e, {
                    progress: r,
                    progressLoop: o,
                    isBeginning: n,
                    isEnd: a
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), n && !l && e.emit("reachBeginning toEdge"), a && !h && e.emit("reachEnd toEdge"), (l && !n || h && !a) && e.emit("fromEdge"), e.emit("progress", r)
            }, updateSlidesClasses: function () {
                const t = this, {slides: e, params: i, slidesEl: s, activeIndex: r} = t,
                    n = t.virtual && i.virtual.enabled, a = t => g(s, `.${i.slideClass}${t}, swiper-slide${t}`)[0];
                let o;
                if (e.forEach(t => {
                    t.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                }), n) if (i.loop) {
                    let e = r - t.virtual.slidesBefore;
                    e < 0 && (e = t.virtual.slides.length + e), e >= t.virtual.slides.length && (e -= t.virtual.slides.length), o = a(`[data-swiper-slide-index="${e}"]`)
                } else o = a(`[data-swiper-slide-index="${r}"]`); else o = e[r];
                if (o) {
                    o.classList.add(i.slideActiveClass);
                    let t = function (t, e) {
                        const i = [];
                        for (; t.nextElementSibling;) {
                            const s = t.nextElementSibling;
                            e ? s.matches(e) && i.push(s) : i.push(s), t = s
                        }
                        return i
                    }(o, `.${i.slideClass}, swiper-slide`)[0];
                    i.loop && !t && (t = e[0]), t && t.classList.add(i.slideNextClass);
                    let s = function (t, e) {
                        const i = [];
                        for (; t.previousElementSibling;) {
                            const s = t.previousElementSibling;
                            e ? s.matches(e) && i.push(s) : i.push(s), t = s
                        }
                        return i
                    }(o, `.${i.slideClass}, swiper-slide`)[0];
                    i.loop && 0 === !s && (s = e[e.length - 1]), s && s.classList.add(i.slidePrevClass)
                }
                t.emitSlidesClasses()
            }, updateActiveIndex: function (t) {
                const e = this, i = e.rtlTranslate ? e.translate : -e.translate, {
                    snapGrid: s,
                    params: r,
                    activeIndex: n,
                    realIndex: a,
                    snapIndex: o
                } = e;
                let l, h = t;
                const u = t => {
                    let i = t - e.virtual.slidesBefore;
                    return i < 0 && (i = e.virtual.slides.length + i), i >= e.virtual.slides.length && (i -= e.virtual.slides.length), i
                };
                if (void 0 === h && (h = function (t) {
                    const {slidesGrid: e, params: i} = t, s = t.rtlTranslate ? t.translate : -t.translate;
                    let r;
                    for (let t = 0; t < e.length; t += 1) void 0 !== e[t + 1] ? s >= e[t] && s < e[t + 1] - (e[t + 1] - e[t]) / 2 ? r = t : s >= e[t] && s < e[t + 1] && (r = t + 1) : s >= e[t] && (r = t);
                    return i.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                }(e)), s.indexOf(i) >= 0) l = s.indexOf(i); else {
                    const t = Math.min(r.slidesPerGroupSkip, h);
                    l = t + Math.floor((h - t) / r.slidesPerGroup)
                }
                if (l >= s.length && (l = s.length - 1), h === n) return l !== o && (e.snapIndex = l, e.emit("snapIndexChange")), void (e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = u(h)));
                let p;
                p = e.virtual && r.virtual.enabled && r.loop ? u(h) : e.slides[h] ? parseInt(e.slides[h].getAttribute("data-swiper-slide-index") || h, 10) : h, Object.assign(e, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: h
                }), e.initialized && D(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), a !== p && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
            }, updateClickedSlide: function (t) {
                const e = this, i = e.params, s = t.closest(`.${i.slideClass}, swiper-slide`);
                let r, n = !1;
                if (s) for (let t = 0; t < e.slides.length; t += 1) if (e.slides[t] === s) {
                    n = !0, r = t;
                    break
                }
                if (!s || !n) return e.clickedSlide = void 0, void (e.clickedIndex = void 0);
                e.clickedSlide = s, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = r, i.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (t = (this.isHorizontal() ? "x" : "y")) {
                const {params: e, rtlTranslate: i, translate: s, wrapperEl: r} = this;
                if (e.virtualTranslate) return i ? -s : s;
                if (e.cssMode) return s;
                let n = p(r, t);
                return n += this.cssOverflowAdjustment(), i && (n = -n), n || 0
            }, setTranslate: function (t, e) {
                const i = this, {rtlTranslate: s, params: r, wrapperEl: n, progress: a} = i;
                let o, l = 0, h = 0;
                i.isHorizontal() ? l = s ? -t : t : h = t, r.roundLengths && (l = Math.floor(l), h = Math.floor(h)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : h, r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -h : r.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : h -= i.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${h}px, 0px)`);
                const u = i.maxTranslate() - i.minTranslate();
                o = 0 === u ? 0 : (t - i.minTranslate()) / u, o !== a && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (t = 0, e = this.params.speed, i = !0, s = !0, r) {
                const n = this, {params: a, wrapperEl: o} = n;
                if (n.animating && a.preventInteractionOnTransition) return !1;
                const l = n.minTranslate(), h = n.maxTranslate();
                let u;
                if (u = s && t > l ? l : s && t < h ? h : t, n.updateProgress(u), a.cssMode) {
                    const t = n.isHorizontal();
                    if (0 === e) o[t ? "scrollLeft" : "scrollTop"] = -u; else {
                        if (!n.support.smoothScroll) return m({
                            swiper: n,
                            targetPosition: -u,
                            side: t ? "left" : "top"
                        }), !0;
                        o.scrollTo({[t ? "left" : "top"]: -u, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === e ? (n.setTransition(0), n.setTranslate(u), i && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(u), i && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (t) {
                    n && !n.destroyed && t.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (t, e) {
                const i = this;
                i.params.cssMode || (i.wrapperEl.style.transitionDuration = t + "ms"), i.emit("setTransition", t, e)
            }, transitionStart: function (t = !0, e) {
                const i = this, {params: s} = i;
                s.cssMode || (s.autoHeight && i.updateAutoHeight(), F({
                    swiper: i,
                    runCallbacks: t,
                    direction: e,
                    step: "Start"
                }))
            }, transitionEnd: function (t = !0, e) {
                const {params: i} = this;
                this.animating = !1, i.cssMode || (this.setTransition(0), F({
                    swiper: this,
                    runCallbacks: t,
                    direction: e,
                    step: "End"
                }))
            }
        }, slide: {
            slideTo: function (t = 0, e = this.params.speed, i = !0, s, r) {
                "string" == typeof t && (t = parseInt(t, 10));
                const n = this;
                let a = t;
                a < 0 && (a = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: h,
                    previousIndex: u,
                    activeIndex: p,
                    rtlTranslate: c,
                    wrapperEl: d,
                    enabled: f
                } = n;
                if (n.animating && o.preventInteractionOnTransition || !f && !s && !r) return !1;
                const g = Math.min(n.params.slidesPerGroupSkip, a);
                let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const y = -l[v];
                if (o.normalizeSlideIndex) for (let t = 0; t < h.length; t += 1) {
                    const e = -Math.floor(100 * y), i = Math.floor(100 * h[t]), s = Math.floor(100 * h[t + 1]);
                    void 0 !== h[t + 1] ? e >= i && e < s - (s - i) / 2 ? a = t : e >= i && e < s && (a = t + 1) : e >= i && (a = t)
                }
                if (n.initialized && a !== p) {
                    if (!n.allowSlideNext && (c ? y > n.translate && y > n.minTranslate() : y < n.translate && y < n.minTranslate())) return !1;
                    if (!n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (p || 0) !== a) return !1
                }
                let b;
                if (a !== (u || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(y), b = a > p ? "next" : a < p ? "prev" : "reset", c && -y === n.translate || !c && y === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(y), "reset" !== b && (n.transitionStart(i, b), n.transitionEnd(i, b)), !1;
                if (o.cssMode) {
                    const t = n.isHorizontal(), i = c ? y : -y;
                    if (0 === e) {
                        const e = n.virtual && n.params.virtual.enabled;
                        e && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), e && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                            d[t ? "scrollLeft" : "scrollTop"] = i
                        })) : d[t ? "scrollLeft" : "scrollTop"] = i, e && requestAnimationFrame(() => {
                            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                        })
                    } else {
                        if (!n.support.smoothScroll) return m({
                            swiper: n,
                            targetPosition: i,
                            side: t ? "left" : "top"
                        }), !0;
                        d.scrollTo({[t ? "left" : "top"]: i, behavior: "smooth"})
                    }
                    return !0
                }
                return n.setTransition(e), n.setTranslate(y), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, s), n.transitionStart(i, b), 0 === e ? n.transitionEnd(i, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (t) {
                    n && !n.destroyed && t.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, b))
                }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (t = 0, e = this.params.speed, i = !0, s) {
                if ("string" == typeof t) {
                    t = parseInt(t, 10)
                }
                const r = this;
                let n = t;
                return r.params.loop && (r.virtual && r.params.virtual.enabled ? n += r.virtual.slidesBefore : n = r.getSlideIndexByData(n)), r.slideTo(n, e, i, s)
            }, slideNext: function (t = this.params.speed, e = !0, i) {
                const s = this, {enabled: r, params: n, animating: a} = s;
                if (!r) return s;
                let o = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                const l = s.activeIndex < n.slidesPerGroupSkip ? 1 : o, h = s.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (a && !h && n.loopPreventsSliding) return !1;
                    s.loopFix({direction: "next"}), s._clientLeft = s.wrapperEl.clientLeft
                }
                return n.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + l, t, e, i)
            }, slidePrev: function (t = this.params.speed, e = !0, i) {
                const s = this, {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: h} = s;
                if (!l) return s;
                const u = s.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (h && !u && r.loopPreventsSliding) return !1;
                    s.loopFix({direction: "prev"}), s._clientLeft = s.wrapperEl.clientLeft
                }

                function p(t) {
                    return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                }

                const c = p(o ? s.translate : -s.translate), d = n.map(t => p(t));
                let f = n[d.indexOf(c) - 1];
                if (void 0 === f && r.cssMode) {
                    let t;
                    n.forEach((e, i) => {
                        c >= e && (t = i)
                    }), void 0 !== t && (f = n[t > 0 ? t - 1 : t])
                }
                let m = 0;
                if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), r.rewind && s.isBeginning) {
                    const r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                    return s.slideTo(r, t, e, i)
                }
                return s.slideTo(m, t, e, i)
            }, slideReset: function (t = this.params.speed, e = !0, i) {
                return this.slideTo(this.activeIndex, t, e, i)
            }, slideToClosest: function (t = this.params.speed, e = !0, i, s = .5) {
                const r = this;
                let n = r.activeIndex;
                const a = Math.min(r.params.slidesPerGroupSkip, n),
                    o = a + Math.floor((n - a) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                if (l >= r.snapGrid[o]) {
                    const t = r.snapGrid[o];
                    l - t > (r.snapGrid[o + 1] - t) * s && (n += r.params.slidesPerGroup)
                } else {
                    const t = r.snapGrid[o - 1];
                    l - t <= (r.snapGrid[o] - t) * s && (n -= r.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, t, e, i)
            }, slideToClickedSlide: function () {
                const t = this, {params: e, slidesEl: i} = t,
                    s = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
                let r, n = t.clickedIndex;
                const a = t.isElement ? "swiper-slide" : "." + e.slideClass;
                if (e.loop) {
                    if (t.animating) return;
                    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = t.getSlideIndex(g(i, `${a}[data-swiper-slide-index="${r}"]`)[0]), h(() => {
                        t.slideTo(n)
                    })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = t.getSlideIndex(g(i, `${a}[data-swiper-slide-index="${r}"]`)[0]), h(() => {
                        t.slideTo(n)
                    })) : t.slideTo(n)
                } else t.slideTo(n)
            }
        }, loop: {
            loopCreate: function (t) {
                const {params: e, slidesEl: i} = this;
                if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                g(i, `.${e.slideClass}, swiper-slide`).forEach((t, e) => {
                    t.setAttribute("data-swiper-slide-index", e)
                }), this.loopFix({slideRealIndex: t, direction: e.centeredSlides ? void 0 : "next"})
            },
            loopFix: function ({
                                   slideRealIndex: t,
                                   slideTo: e = !0,
                                   direction: i,
                                   setTranslate: s,
                                   activeSlideIndex: r,
                                   byController: n,
                                   byMousewheel: a
                               } = {}) {
                const o = this;
                if (!o.params.loop) return;
                o.emit("beforeLoopFix");
                const {slides: l, allowSlidePrev: h, allowSlideNext: u, slidesEl: p, params: c} = o;
                if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && c.virtual.enabled) return e && (c.centeredSlides || 0 !== o.snapIndex ? c.centeredSlides && o.snapIndex < c.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = h, o.allowSlideNext = u, void o.emit("loopFix");
                const d = "auto" === c.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(c.slidesPerView, 10));
                let f = c.loopedSlides || d;
                f % c.slidesPerGroup != 0 && (f += c.slidesPerGroup - f % c.slidesPerGroup), o.loopedSlides = f;
                const m = [], g = [];
                let v = o.activeIndex;
                void 0 === r ? r = o.getSlideIndex(o.slides.filter(t => t.classList.contains(c.slideActiveClass))[0]) : v = r;
                const y = "next" === i || !i, b = "prev" === i || !i;
                let _ = 0, x = 0;
                if (r < f) {
                    _ = Math.max(f - r, c.slidesPerGroup);
                    for (let t = 0; t < f - r; t += 1) {
                        const e = t - Math.floor(t / l.length) * l.length;
                        m.push(l.length - e - 1)
                    }
                } else if (r > o.slides.length - 2 * f) {
                    x = Math.max(r - (o.slides.length - 2 * f), c.slidesPerGroup);
                    for (let t = 0; t < x; t += 1) {
                        const e = t - Math.floor(t / l.length) * l.length;
                        g.push(e)
                    }
                }
                if (b && m.forEach(t => {
                    o.slides[t].swiperLoopMoveDOM = !0, p.prepend(o.slides[t]), o.slides[t].swiperLoopMoveDOM = !1
                }), y && g.forEach(t => {
                    o.slides[t].swiperLoopMoveDOM = !0, p.append(o.slides[t]), o.slides[t].swiperLoopMoveDOM = !1
                }), o.recalcSlides(), "auto" === c.slidesPerView && o.updateSlides(), c.watchSlidesProgress && o.updateSlidesOffset(), e) if (m.length > 0 && b) if (void 0 === t) {
                    const t = o.slidesGrid[v], e = o.slidesGrid[v + _] - t;
                    a ? o.setTranslate(o.translate - e) : (o.slideTo(v + _, 0, !1, !0), s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += e))
                } else s && o.slideToLoop(t, 0, !1, !0); else if (g.length > 0 && y) if (void 0 === t) {
                    const t = o.slidesGrid[v], e = o.slidesGrid[v - x] - t;
                    a ? o.setTranslate(o.translate - e) : (o.slideTo(v - x, 0, !1, !0), s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += e))
                } else o.slideToLoop(t, 0, !1, !0);
                if (o.allowSlidePrev = h, o.allowSlideNext = u, o.controller && o.controller.control && !n) {
                    const e = {
                        slideRealIndex: t,
                        slideTo: !1,
                        direction: i,
                        setTranslate: s,
                        activeSlideIndex: r,
                        byController: !0
                    };
                    Array.isArray(o.controller.control) ? o.controller.control.forEach(t => {
                        !t.destroyed && t.params.loop && t.loopFix(e)
                    }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(e)
                }
                o.emit("loopFix")
            },
            loopDestroy: function () {
                const {params: t, slidesEl: e} = this;
                if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                this.recalcSlides();
                const i = [];
                this.slides.forEach(t => {
                    const e = void 0 === t.swiperSlideIndex ? 1 * t.getAttribute("data-swiper-slide-index") : t.swiperSlideIndex;
                    i[e] = t
                }), this.slides.forEach(t => {
                    t.removeAttribute("data-swiper-slide-index")
                }), i.forEach(t => {
                    e.append(t)
                }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
            }
        }, grabCursor: {
            setGrabCursor: function (t) {
                const e = this;
                if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
                const i = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
                e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
                    e.__preventObserver__ = !1
                })
            }, unsetGrabCursor: function () {
                const t = this;
                t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
                    t.__preventObserver__ = !1
                }))
            }
        }, events: {
            attachEvents: function () {
                const t = this, e = a(), {params: i} = t;
                t.onTouchStart = I.bind(t), t.onTouchMove = L.bind(t), t.onTouchEnd = B.bind(t), i.cssMode && (t.onScroll = R.bind(t)), t.onClick = O.bind(t), t.onLoad = z.bind(t), N || (e.addEventListener("touchstart", G), N = !0), q(t, "on")
            }, detachEvents: function () {
                q(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const t = this, {realIndex: e, initialized: i, params: s, el: r} = t, n = s.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const a = t.getBreakpoint(n, t.params.breakpointsBase, t.el);
                if (!a || t.currentBreakpoint === a) return;
                const o = (a in n ? n[a] : void 0) || t.originalParams, l = H(t, s), h = H(t, o), u = s.enabled;
                l && !h ? (r.classList.remove(s.containerModifierClass + "grid", s.containerModifierClass + "grid-column"), t.emitContainerClasses()) : !l && h && (r.classList.add(s.containerModifierClass + "grid"), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(s.containerModifierClass + "grid-column"), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(e => {
                    if (void 0 === o[e]) return;
                    const i = s[e] && s[e].enabled, r = o[e] && o[e].enabled;
                    i && !r && t[e].disable(), !i && r && t[e].enable()
                });
                const p = o.direction && o.direction !== s.direction,
                    c = s.loop && (o.slidesPerView !== s.slidesPerView || p);
                p && i && t.changeDirection(), d(t.params, o);
                const f = t.params.enabled;
                Object.assign(t, {
                    allowTouchMove: t.params.allowTouchMove,
                    allowSlideNext: t.params.allowSlideNext,
                    allowSlidePrev: t.params.allowSlidePrev
                }), u && !f ? t.disable() : !u && f && t.enable(), t.currentBreakpoint = a, t.emit("_beforeBreakpoint", o), c && i && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()), t.emit("breakpoint", o)
            }, getBreakpoint: function (t, e = "window", i) {
                if (!t || "container" === e && !i) return;
                let s = !1;
                const r = l(), n = "window" === e ? r.innerHeight : i.clientHeight, a = Object.keys(t).map(t => {
                    if ("string" == typeof t && 0 === t.indexOf("@")) {
                        const e = parseFloat(t.substr(1));
                        return {value: n * e, point: t}
                    }
                    return {value: t, point: t}
                });
                a.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
                for (let t = 0; t < a.length; t += 1) {
                    const {point: n, value: o} = a[t];
                    "window" === e ? r.matchMedia(`(min-width: ${o}px)`).matches && (s = n) : o <= i.clientWidth && (s = n)
                }
                return s || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const t = this, {isLocked: e, params: i} = t, {slidesOffsetBefore: s} = i;
                if (s) {
                    const e = t.slides.length - 1, i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * s;
                    t.isLocked = t.size > i
                } else t.isLocked = 1 === t.snapGrid.length;
                !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const {classNames: t, params: e, rtl: i, el: s, device: r} = this, n = function (t, e) {
                    const i = [];
                    return t.forEach(t => {
                        "object" == typeof t ? Object.keys(t).forEach(s => {
                            t[s] && i.push(e + s)
                        }) : "string" == typeof t && i.push(e + t)
                    }), i
                }(["initialized", e.direction, {"free-mode": this.params.freeMode && e.freeMode.enabled}, {autoheight: e.autoHeight}, {rtl: i}, {grid: e.grid && e.grid.rows > 1}, {"grid-column": e.grid && e.grid.rows > 1 && "column" === e.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": e.cssMode}, {centered: e.cssMode && e.centeredSlides}, {"watch-progress": e.watchSlidesProgress}], e.containerModifierClass);
                t.push(...n), s.classList.add(...t), this.emitContainerClasses()
            }, removeClasses: function () {
                const {el: t, classNames: e} = this;
                t.classList.remove(...e), this.emitContainerClasses()
            }
        }
    }, X = {};

    class $ {
        constructor(...t) {
            let e, i;
            1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? i = t[0] : [e, i] = t, i || (i = {}), i = d({}, i), e && !i.el && (i.el = e);
            const s = a();
            if (i.el && "string" == typeof i.el && s.querySelectorAll(i.el).length > 1) {
                const t = [];
                return s.querySelectorAll(i.el).forEach(e => {
                    const s = d({}, i, {el: e});
                    t.push(new $(s))
                }), t
            }
            const r = this;
            r.__swiper__ = !0, r.support = w(), r.device = T({userAgent: i.userAgent}), r.browser = P(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
            const n = {};
            r.modules.forEach(t => {
                t({
                    params: i,
                    swiper: r,
                    extendParams: W(i, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            });
            const o = d({}, j, n);
            return r.params = d({}, o, X, i), r.originalParams = d({}, r.params), r.passedParams = d({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(t => {
                r.on(t, r.params.on[t])
            }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }

        getSlideIndex(t) {
            const {slidesEl: e, params: i} = this, s = b(g(e, `.${i.slideClass}, swiper-slide`)[0]);
            return b(t) - s
        }

        getSlideIndexByData(t) {
            return this.getSlideIndex(this.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0])
        }

        recalcSlides() {
            const {slidesEl: t, params: e} = this;
            this.slides = g(t, `.${e.slideClass}, swiper-slide`)
        }

        enable() {
            const t = this;
            t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }

        disable() {
            const t = this;
            t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }

        setProgress(t, e) {
            t = Math.min(Math.max(t, 0), 1);
            const i = this.minTranslate(), s = (this.maxTranslate() - i) * t + i;
            this.translateTo(s, void 0 === e ? 0 : e), this.updateActiveIndex(), this.updateSlidesClasses()
        }

        emitContainerClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = t.el.className.split(" ").filter(e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
            t.emit("_containerClasses", e.join(" "))
        }

        getSlideClasses(t) {
            const e = this;
            return e.destroyed ? "" : t.className.split(" ").filter(t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass)).join(" ")
        }

        emitSlidesClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = [];
            t.slides.forEach(i => {
                const s = t.getSlideClasses(i);
                e.push({slideEl: i, classNames: s}), t.emit("_slideClass", i, s)
            }), t.emit("_slideClasses", e)
        }

        slidesPerViewDynamic(t = "current", e = !1) {
            const {params: i, slides: s, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: o} = this;
            let l = 1;
            if (i.centeredSlides) {
                let t, e = s[o] ? s[o].swiperSlideSize : 0;
                for (let i = o + 1; i < s.length; i += 1) s[i] && !t && (e += s[i].swiperSlideSize, l += 1, e > a && (t = !0));
                for (let i = o - 1; i >= 0; i -= 1) s[i] && !t && (e += s[i].swiperSlideSize, l += 1, e > a && (t = !0))
            } else if ("current" === t) for (let t = o + 1; t < s.length; t += 1) {
                (e ? r[t] + n[t] - r[o] < a : r[t] - r[o] < a) && (l += 1)
            } else for (let t = o - 1; t >= 0; t -= 1) {
                r[o] - r[t] < a && (l += 1)
            }
            return l
        }

        update() {
            const t = this;
            if (!t || t.destroyed) return;
            const {snapGrid: e, params: i} = t;

            function s() {
                const e = t.rtlTranslate ? -1 * t.translate : t.translate,
                    i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            let r;
            if (i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                e.complete && A(t, e)
            }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && t.updateAutoHeight(); else {
                if (("auto" === i.slidesPerView || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
                    const e = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
                    r = t.slideTo(e.length - 1, 0, !1, !0)
                } else r = t.slideTo(t.activeIndex, 0, !1, !0);
                r || s()
            }
            i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }

        changeDirection(t, e = !0) {
            const i = this, s = i.params.direction;
            return t || (t = "horizontal" === s ? "vertical" : "horizontal"), t === s || "horizontal" !== t && "vertical" !== t || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach(e => {
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            }), i.emit("changeDirection"), e && i.update()), i
        }

        changeLanguageDirection(t) {
            const e = this;
            e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.el.classList.add(e.params.containerModifierClass + "rtl"), e.el.dir = "rtl") : (e.el.classList.remove(e.params.containerModifierClass + "rtl"), e.el.dir = "ltr"), e.update())
        }

        mount(t) {
            const e = this;
            if (e.mounted) return !0;
            let i = t || e.params.el;
            if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
            i.swiper = e, i.shadowEl && (e.isElement = !0);
            const s = () => "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
            let r = (() => {
                if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                    return i.shadowRoot.querySelector(s())
                }
                return g(i, s())[0]
            })();
            return !r && e.params.createElements && (r = v("div", e.params.wrapperClass), i.append(r), g(i, "." + e.params.slideClass).forEach(t => {
                r.append(t)
            })), Object.assign(e, {
                el: i,
                wrapperEl: r,
                slidesEl: e.isElement ? i : r,
                mounted: !0,
                rtl: "rtl" === i.dir.toLowerCase() || "rtl" === y(i, "direction"),
                rtlTranslate: "horizontal" === e.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === y(i, "direction")),
                wrongRTL: "-webkit-box" === y(r, "display")
            }), !0
        }

        init(t) {
            const e = this;
            if (e.initialized) return e;
            return !1 === e.mount(t) || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.loop && e.virtual && e.params.virtual.enabled ? e.slideTo(e.params.initialSlide + e.virtual.slidesBefore, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.params.loop && e.loopCreate(), e.attachEvents(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
                t.complete ? A(e, t) : t.addEventListener("load", t => {
                    A(e, t.target)
                })
            }), D(e), e.initialized = !0, D(e), e.emit("init"), e.emit("afterInit")), e
        }

        destroy(t = !0, e = !0) {
            const i = this, {params: s, el: r, wrapperEl: n, slides: a} = i;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), e && (i.removeClasses(), r.removeAttribute("style"), n.removeAttribute("style"), a && a.length && a.forEach(t => {
                t.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), t.removeAttribute("style"), t.removeAttribute("data-swiper-slide-index")
            })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(t => {
                i.off(t)
            }), !1 !== t && (i.el.swiper = null, function (t) {
                const e = t;
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (t) {
                    }
                    try {
                        delete e[t]
                    } catch (t) {
                    }
                })
            }(i)), i.destroyed = !0), null
        }

        static extendDefaults(t) {
            d(X, t)
        }

        static get extendedDefaults() {
            return X
        }

        static get defaults() {
            return j
        }

        static installModule(t) {
            $.prototype.__modules__ || ($.prototype.__modules__ = []);
            const e = $.prototype.__modules__;
            "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }

        static use(t) {
            return Array.isArray(t) ? (t.forEach(t => $.installModule(t)), $) : ($.installModule(t), $)
        }
    }

    Object.keys(Y).forEach(t => {
        Object.keys(Y[t]).forEach(e => {
            $.prototype[e] = Y[t][e]
        })
    }), $.use([function ({swiper: t, on: e, emit: i}) {
        const s = l();
        let r = null, n = null;
        const a = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
        }, o = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
        };
        e("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver(e => {
                n = s.requestAnimationFrame(() => {
                    const {width: i, height: s} = t;
                    let r = i, n = s;
                    e.forEach(({contentBoxSize: e, contentRect: i, target: s}) => {
                        s && s !== t.el || (r = i ? i.width : (e[0] || e).inlineSize, n = i ? i.height : (e[0] || e).blockSize)
                    }), r === i && n === s || a()
                })
            }), r.observe(t.el)) : (s.addEventListener("resize", a), s.addEventListener("orientationchange", o))
        }), e("destroy", () => {
            n && s.cancelAnimationFrame(n), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", o)
        })
    }, function ({swiper: t, extendParams: e, on: i, emit: s}) {
        const r = [], n = l(), a = (e, i = {}) => {
            const a = new (n.MutationObserver || n.WebkitMutationObserver)(e => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const i = function () {
                    s("observerUpdate", e[0])
                };
                n.requestAnimationFrame ? n.requestAnimationFrame(i) : n.setTimeout(i, 0)
            });
            a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
            }), r.push(a)
        };
        e({observer: !1, observeParents: !1, observeSlideChildren: !1}), i("init", () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = _(t.el);
                    for (let t = 0; t < e.length; t += 1) a(e[t])
                }
                a(t.el, {childList: t.params.observeSlideChildren}), a(t.wrapperEl, {attributes: !1})
            }
        }), i("destroy", () => {
            r.forEach(t => {
                t.disconnect()
            }), r.splice(0, r.length)
        })
    }]);
    var U = $;

    function K(t, e, i, s) {
        return t.params.createElements && Object.keys(s).forEach(r => {
            if (!i[r] && !0 === i.auto) {
                let n = g(t.el, "." + s[r])[0];
                n || (n = v("div", s[r]), n.className = s[r], t.el.append(n)), i[r] = n, e[r] = n
            }
        }), i
    }

    function Z({swiper: t, extendParams: e, on: i, emit: s}) {
        e({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {nextEl: null, prevEl: null};
        const r = t => (Array.isArray(t) || (t = [t].filter(t => !!t)), t);

        function n(e) {
            let i;
            return e && "string" == typeof e && t.isElement && (i = t.el.shadowRoot.querySelector(e), i) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.el.querySelectorAll(e).length && (i = t.el.querySelector(e))), e && !i ? e : i)
        }

        function a(e, i) {
            const s = t.params.navigation;
            (e = r(e)).forEach(e => {
                e && (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
            })
        }

        function o() {
            const {nextEl: e, prevEl: i} = t.navigation;
            if (t.params.loop) return a(i, !1), void a(e, !1);
            a(i, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind)
        }

        function l(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
        }

        function h(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), s("navigationNext"))
        }

        function u() {
            const e = t.params.navigation;
            if (t.params.navigation = K(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
            let i = n(e.nextEl), s = n(e.prevEl);
            Object.assign(t.navigation, {nextEl: i, prevEl: s}), i = r(i), s = r(s);
            const a = (i, s) => {
                i && i.addEventListener("click", "next" === s ? h : l), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
            };
            i.forEach(t => a(t, "next")), s.forEach(t => a(t, "prev"))
        }

        function p() {
            let {nextEl: e, prevEl: i} = t.navigation;
            e = r(e), i = r(i);
            const s = (e, i) => {
                e.removeEventListener("click", "next" === i ? h : l), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
            };
            e.forEach(t => s(t, "next")), i.forEach(t => s(t, "prev"))
        }

        i("init", () => {
            !1 === t.params.navigation.enabled ? c() : (u(), o())
        }), i("toEdge fromEdge lock unlock", () => {
            o()
        }), i("destroy", () => {
            p()
        }), i("enable disable", () => {
            let {nextEl: e, prevEl: i} = t.navigation;
            e = r(e), i = r(i), [...e, ...i].filter(t => !!t).forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass))
        }), i("click", (e, i) => {
            let {nextEl: n, prevEl: a} = t.navigation;
            n = r(n), a = r(a);
            const o = i.target;
            if (t.params.navigation.hideOnClick && !a.includes(o) && !n.includes(o)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
                let e;
                n.length ? e = n[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), s(!0 === e ? "navigationShow" : "navigationHide"), [...n, ...a].filter(t => !!t).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
            }
        });
        const c = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), o()
            }, disable: c, update: o, init: u, destroy: p
        })
    }

    function J(t = "") {
        return "." + t.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")
    }

    function Q({swiper: t, extendParams: e, on: i, emit: s}) {
        const r = "swiper-pagination";
        let n;
        e({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: t => t,
                formatFractionTotal: t => t,
                bulletClass: r + "-bullet",
                bulletActiveClass: r + "-bullet-active",
                modifierClass: r + "-",
                currentClass: r + "-current",
                totalClass: r + "-total",
                hiddenClass: r + "-hidden",
                progressbarFillClass: r + "-progressbar-fill",
                progressbarOppositeClass: r + "-progressbar-opposite",
                clickableClass: r + "-clickable",
                lockClass: r + "-lock",
                horizontalClass: r + "-horizontal",
                verticalClass: r + "-vertical",
                paginationDisabledClass: r + "-disabled"
            }
        }), t.pagination = {el: null, bullets: []};
        let a = 0;
        const o = t => (Array.isArray(t) || (t = [t].filter(t => !!t)), t);

        function l() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function h(e, i) {
            const {bulletActiveClass: s} = t.params.pagination;
            e && (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${i}`), (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${i}-${i}`))
        }

        function u(e) {
            const i = e.target.closest(J(t.params.pagination.bulletClass));
            if (!i) return;
            e.preventDefault();
            const s = b(i) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === s) return;
                const e = t.getSlideIndexByData(s), i = t.getSlideIndexByData(t.realIndex);
                e > t.slides.length - t.loopedSlides && t.loopFix({
                    direction: e > i ? "next" : "prev",
                    activeSlideIndex: e,
                    slideTo: !1
                }), t.slideToLoop(s)
            } else t.slideTo(s)
        }

        function p() {
            const e = t.rtl, i = t.params.pagination;
            if (l()) return;
            let r, u, p = t.pagination.el;
            p = o(p);
            const c = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                d = t.params.loop ? Math.ceil(c / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (u = t.previousRealIndex || 0, r = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (r = t.snapIndex, u = t.previousSnapIndex) : (u = t.previousIndex || 0, r = t.activeIndex || 0), "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const s = t.pagination.bullets;
                let o, l, c;
                if (i.dynamicBullets && (n = S(s[0], t.isHorizontal() ? "width" : "height", !0), p.forEach(e => {
                    e.style[t.isHorizontal() ? "width" : "height"] = n * (i.dynamicMainBullets + 4) + "px"
                }), i.dynamicMainBullets > 1 && void 0 !== u && (a += r - (u || 0), a > i.dynamicMainBullets - 1 ? a = i.dynamicMainBullets - 1 : a < 0 && (a = 0)), o = Math.max(r - a, 0), l = o + (Math.min(s.length, i.dynamicMainBullets) - 1), c = (l + o) / 2), s.forEach(t => {
                    const e = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(t => `${i.bulletActiveClass}${t}`)].map(t => "string" == typeof t && t.includes(" ") ? t.split(" ") : t).flat();
                    t.classList.remove(...e)
                }), p.length > 1) s.forEach(e => {
                    const s = b(e);
                    s === r ? e.classList.add(...i.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), i.dynamicBullets && (s >= o && s <= l && e.classList.add(...(i.bulletActiveClass + "-main").split(" ")), s === o && h(e, "prev"), s === l && h(e, "next"))
                }); else {
                    const e = s[r];
                    if (e && e.classList.add(...i.bulletActiveClass.split(" ")), t.isElement && s.forEach((t, e) => {
                        t.setAttribute("part", e === r ? "bullet-active" : "bullet")
                    }), i.dynamicBullets) {
                        const t = s[o], e = s[l];
                        for (let t = o; t <= l; t += 1) s[t] && s[t].classList.add(...(i.bulletActiveClass + "-main").split(" "));
                        h(t, "prev"), h(e, "next")
                    }
                }
                if (i.dynamicBullets) {
                    const r = Math.min(s.length, i.dynamicMainBullets + 4), a = (n * r - n) / 2 - c * n,
                        o = e ? "right" : "left";
                    s.forEach(e => {
                        e.style[t.isHorizontal() ? o : "top"] = a + "px"
                    })
                }
            }
            p.forEach((e, n) => {
                if ("fraction" === i.type && (e.querySelectorAll(J(i.currentClass)).forEach(t => {
                    t.textContent = i.formatFractionCurrent(r + 1)
                }), e.querySelectorAll(J(i.totalClass)).forEach(t => {
                    t.textContent = i.formatFractionTotal(d)
                })), "progressbar" === i.type) {
                    let s;
                    s = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const n = (r + 1) / d;
                    let a = 1, o = 1;
                    "horizontal" === s ? a = n : o = n, e.querySelectorAll(J(i.progressbarFillClass)).forEach(e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = t.params.speed + "ms"
                    })
                }
                "custom" === i.type && i.renderCustom ? (e.innerHTML = i.renderCustom(t, r + 1, d), 0 === n && s("paginationRender", e)) : (0 === n && s("paginationRender", e), s("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass)
            })
        }

        function c() {
            const e = t.params.pagination;
            if (l()) return;
            const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
            let r = t.pagination.el;
            r = o(r);
            let n = "";
            if ("bullets" === e.type) {
                let s = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
                for (let i = 0; i < s; i += 1) e.renderBullet ? n += e.renderBullet.call(t, i, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], r.forEach(i => {
                "custom" !== e.type && (i.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...i.querySelectorAll(J(e.bulletClass)))
            }), "custom" !== e.type && s("paginationRender", r[0])
        }

        function d() {
            t.params.pagination = K(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let i;
            "string" == typeof e.el && t.isElement && (i = t.el.shadowRoot.querySelector(e.el)), i || "string" != typeof e.el || (i = [...document.querySelectorAll(e.el)]), i || (i = e.el), i && 0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(i) && i.length > 1 && (i = [...t.el.querySelectorAll(e.el)], i.length > 1 && (i = i.filter(e => _(e, ".swiper")[0] === t.el)[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(t.pagination, {el: i}), i = o(i), i.forEach(i => {
                "bullets" === e.type && e.clickable && i.classList.add(e.clickableClass), i.classList.add(e.modifierClass + e.type), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.classList.add(`${e.modifierClass}${e.type}-dynamic`), a = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.classList.add(e.progressbarOppositeClass), e.clickable && i.addEventListener("click", u), t.enabled || i.classList.add(e.lockClass)
            }))
        }

        function f() {
            const e = t.params.pagination;
            if (l()) return;
            let i = t.pagination.el;
            i && (i = o(i), i.forEach(i => {
                i.classList.remove(e.hiddenClass), i.classList.remove(e.modifierClass + e.type), i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && i.removeEventListener("click", u)
            })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
        }

        i("changeDirection", () => {
            if (!t.pagination || !t.pagination.el) return;
            const e = t.params.pagination;
            let {el: i} = t.pagination;
            i = o(i), i.forEach(i => {
                i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            })
        }), i("init", () => {
            !1 === t.params.pagination.enabled ? m() : (d(), c(), p())
        }), i("activeIndexChange", () => {
            void 0 === t.snapIndex && p()
        }), i("snapIndexChange", () => {
            p()
        }), i("snapGridLengthChange", () => {
            c(), p()
        }), i("destroy", () => {
            f()
        }), i("enable disable", () => {
            let {el: e} = t.pagination;
            e && (e = o(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }), i("lock unlock", () => {
            p()
        }), i("click", (e, i) => {
            const r = i.target;
            let {el: n} = t.pagination;
            if (Array.isArray(n) || (n = [n].filter(t => !!t)), t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !r.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && r === t.navigation.nextEl || t.navigation.prevEl && r === t.navigation.prevEl)) return;
                const e = n[0].classList.contains(t.params.pagination.hiddenClass);
                s(!0 === e ? "paginationShow" : "paginationHide"), n.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass))
            }
        });
        const m = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {el: e} = t.pagination;
            e && (e = o(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), f()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = o(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), d(), c(), p()
            }, disable: m, render: c, update: p, init: d, destroy: f
        })
    }

    function tt({swiper: t, extendParams: e, on: i, emit: s, params: r}) {
        let n, o;
        t.autoplay = {running: !1, paused: !1, timeLeft: 0}, e({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let l, h, u, p, c, d, f, m = r && r.autoplay ? r.autoplay.delay : 3e3,
            g = r && r.autoplay ? r.autoplay.delay : 3e3, v = (new Date).getTime;

        function y(e) {
            t && !t.destroyed && t.wrapperEl && e.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", y), C())
        }

        const b = () => {
            if (t.destroyed || !t.autoplay.running) return;
            t.autoplay.paused ? h = !0 : h && (g = l, h = !1);
            const e = t.autoplay.paused ? l : v + g - (new Date).getTime();
            t.autoplay.timeLeft = e, s("autoplayTimeLeft", e, e / m), o = requestAnimationFrame(() => {
                b()
            })
        }, _ = e => {
            if (t.destroyed || !t.autoplay.running) return;
            cancelAnimationFrame(o), b();
            let i = void 0 === e ? t.params.autoplay.delay : e;
            m = t.params.autoplay.delay, g = t.params.autoplay.delay;
            const r = (() => {
                let e;
                if (e = t.virtual && t.params.virtual.enabled ? t.slides.filter(t => t.classList.contains("swiper-slide-active"))[0] : t.slides[t.activeIndex], !e) return;
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
            })();
            !Number.isNaN(r) && r > 0 && void 0 === e && (i = r, m = r, g = r), l = i;
            const a = t.params.speed, h = () => {
                t && !t.destroyed && (t.params.autoplay.reverseDirection ? !t.isBeginning || t.params.loop || t.params.rewind ? (t.slidePrev(a, !0, !0), s("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, a, !0, !0), s("autoplay")) : !t.isEnd || t.params.loop || t.params.rewind ? (t.slideNext(a, !0, !0), s("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, a, !0, !0), s("autoplay")), t.params.cssMode && (v = (new Date).getTime(), requestAnimationFrame(() => {
                    _()
                })))
            };
            return i > 0 ? (clearTimeout(n), n = setTimeout(() => {
                h()
            }, i)) : requestAnimationFrame(() => {
                h()
            }), i
        }, x = () => {
            t.autoplay.running = !0, _(), s("autoplayStart")
        }, S = () => {
            t.autoplay.running = !1, clearTimeout(n), cancelAnimationFrame(o), s("autoplayStop")
        }, E = (e, i) => {
            if (t.destroyed || !t.autoplay.running) return;
            clearTimeout(n), e || (f = !0);
            const r = () => {
                s("autoplayPause"), t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", y) : C()
            };
            if (t.autoplay.paused = !0, i) return d && (l = t.params.autoplay.delay), d = !1, void r();
            const a = l || t.params.autoplay.delay;
            l = a - ((new Date).getTime() - v), t.isEnd && l < 0 && !t.params.loop || (l < 0 && (l = 0), r())
        }, C = () => {
            t.isEnd && l < 0 && !t.params.loop || t.destroyed || !t.autoplay.running || (v = (new Date).getTime(), f ? (f = !1, _(l)) : _(), t.autoplay.paused = !1, s("autoplayResume"))
        }, k = () => {
            if (t.destroyed || !t.autoplay.running) return;
            const e = a();
            "hidden" === e.visibilityState && (f = !0, E(!0)), "visible" === e.visibilityState && C()
        }, w = t => {
            "mouse" === t.pointerType && (f = !0, E(!0))
        }, T = e => {
            "mouse" === e.pointerType && t.autoplay.paused && C()
        };
        i("init", () => {
            t.params.autoplay.enabled && (t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", w), t.el.addEventListener("pointerleave", T)), a().addEventListener("visibilitychange", k), v = (new Date).getTime(), x())
        }), i("destroy", () => {
            t.el.removeEventListener("pointerenter", w), t.el.removeEventListener("pointerleave", T), a().removeEventListener("visibilitychange", k), t.autoplay.running && S()
        }), i("beforeTransitionStart", (e, i, s) => {
            !t.destroyed && t.autoplay.running && (s || !t.params.autoplay.disableOnInteraction ? E(!0, !0) : S())
        }), i("sliderFirstMove", () => {
            !t.destroyed && t.autoplay.running && (t.params.autoplay.disableOnInteraction ? S() : (u = !0, p = !1, f = !1, c = setTimeout(() => {
                f = !0, p = !0, E(!0)
            }, 200)))
        }), i("touchEnd", () => {
            if (!t.destroyed && t.autoplay.running && u) {
                if (clearTimeout(c), clearTimeout(n), t.params.autoplay.disableOnInteraction) return p = !1, void (u = !1);
                p && t.params.cssMode && C(), p = !1, u = !1
            }
        }), i("slideChange", () => {
            !t.destroyed && t.autoplay.running && (d = !0)
        }), Object.assign(t.autoplay, {start: x, stop: S, pause: E, resume: C})
    }

    function et({swiper: t, extendParams: e, on: i}) {
        e({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let s = !1, r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const i = e.clickedIndex, s = e.clickedSlide;
            if (s && s.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let r;
            r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, t.params.loop ? t.slideToLoop(r) : t.slideTo(r)
        }

        function o() {
            const {thumbs: e} = t.params;
            if (s) return !1;
            s = !0;
            const i = t.constructor;
            if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), t.thumbs.swiper.update(); else if (c(e.swiper)) {
                const s = Object.assign({}, e.swiper);
                Object.assign(s, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new i(s), r = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function l(e) {
            const i = t.thumbs.swiper;
            if (!i || i.destroyed) return;
            const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            let r = 1;
            const n = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.forEach(t => t.classList.remove(n)), i.params.loop || i.params.virtual && i.params.virtual.enabled) for (let e = 0; e < r; e += 1) g(i.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach(t => {
                t.classList.add(n)
            }); else for (let e = 0; e < r; e += 1) i.slides[t.realIndex + e] && i.slides[t.realIndex + e].classList.add(n);
            const a = t.params.thumbs.autoScrollOffset, o = a && !i.params.loop;
            if (t.realIndex !== i.realIndex || o) {
                const r = i.activeIndex;
                let n, l;
                if (i.params.loop) {
                    const e = i.slides.filter(e => e.getAttribute("data-swiper-slide-index") === "" + t.realIndex)[0];
                    n = i.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
                o && (n += "next" === l ? a : -1 * a), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = n > r ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > r && i.params.slidesPerGroup, i.slideTo(n, e ? 0 : void 0))
            }
        }

        t.thumbs = {swiper: null}, i("beforeInit", () => {
            const {thumbs: e} = t.params;
            if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                const i = a(), s = () => {
                    const s = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                    if (s && s.swiper) e.swiper = s.swiper, o(), l(!0); else if (s) {
                        const i = r => {
                            e.swiper = r.detail[0], s.removeEventListener("init", i), o(), l(!0), e.swiper.update(), t.update()
                        };
                        s.addEventListener("init", i)
                    }
                    return s
                }, r = () => {
                    if (t.destroyed) return;
                    s() || requestAnimationFrame(r)
                };
                requestAnimationFrame(r)
            } else o(), l(!0)
        }), i("slideChange update resize observerUpdate", () => {
            l()
        }), i("setTransition", (e, i) => {
            const s = t.thumbs.swiper;
            s && !s.destroyed && s.setTransition(i)
        }), i("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        }), Object.assign(t.thumbs, {init: o, update: l})
    }

    function it({swiper: t, extendParams: e, emit: i, once: s}) {
        e({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    if (t.params.cssMode) return;
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                }, onTouchMove: function () {
                    if (t.params.cssMode) return;
                    const {touchEventsData: e, touches: i} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: i[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({position: i[t.isHorizontal() ? "currentX" : "currentY"], time: u()})
                }, onTouchEnd: function ({currentPos: e}) {
                    if (t.params.cssMode) return;
                    const {params: r, wrapperEl: n, rtlTranslate: a, snapGrid: o, touchEventsData: l} = t,
                        h = u() - l.touchStartTime;
                    if (e < -t.minTranslate()) t.slideTo(t.activeIndex); else if (e > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (l.velocities.length > 1) {
                                const e = l.velocities.pop(), i = l.velocities.pop(), s = e.position - i.position,
                                    n = e.time - i.time;
                                t.velocity = s / n, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, l.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const h = t.velocity * e;
                            let p = t.translate + h;
                            a && (p = -p);
                            let c, d = !1;
                            const f = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let m;
                            if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -f && (p = t.maxTranslate() - f), c = t.maxTranslate(), d = !0, l.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (m = !0); else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > f && (p = t.minTranslate() + f), c = t.minTranslate(), d = !0, l.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (m = !0); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1) if (o[t] > -p) {
                                    e = t;
                                    break
                                }
                                p = Math.abs(o[e] - p) < Math.abs(o[e - 1] - p) || "next" === t.swipeDirection ? o[e] : o[e - 1], p = -p
                            }
                            if (m && s("transitionEnd", () => {
                                t.loopFix()
                            }), 0 !== t.velocity) {
                                if (e = a ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const i = Math.abs((a ? -p : p) - t.translate),
                                        s = t.slidesSizesGrid[t.activeIndex];
                                    e = i < s ? r.speed : i < 2 * s ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && d ? (t.updateProgress(c), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, () => {
                                t && !t.destroyed && l.allowMomentumBounce && (i("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                                    t.setTranslate(c), x(n, () => {
                                        t && !t.destroyed && t.transitionEnd()
                                    })
                                }, 0))
                            })) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, () => {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && i("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || h >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }
}, function (t, e, i) {
    "use strict";

    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    i.d(e, "a", (function () {
        return je
    }));
    /*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var r, n, a, o, l, h, u, p, c, d, f, m, g, v = function () {
        return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
    }, y = 1, b = [], _ = [], x = [], S = Date.now, E = function (t, e) {
        return e
    }, C = function (t, e) {
        return ~x.indexOf(t) && x[x.indexOf(t) + 1][e]
    }, k = function (t) {
        return !!~d.indexOf(t)
    }, w = function (t, e, i, s, r) {
        return t.addEventListener(e, i, {passive: !s, capture: !!r})
    }, T = function (t, e, i, s) {
        return t.removeEventListener(e, i, !!s)
    }, P = function () {
        return f && f.isPressed || _.cache++
    }, A = function (t, e) {
        var i = function i(s) {
            if (s || 0 === s) {
                y && (a.history.scrollRestoration = "manual");
                var r = f && f.isPressed;
                s = i.v = Math.round(s) || (f && f.iOS ? 1 : 0), t(s), i.cacheID = _.cache, r && E("ss", s)
            } else (e || _.cache !== i.cacheID || E("ref")) && (i.cacheID = _.cache, i.v = t());
            return i.v + i.offset
        };
        return i.offset = 0, t && i
    }, M = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: A((function (t) {
            return arguments.length ? a.scrollTo(t, D.sc()) : a.pageXOffset || o.scrollLeft || l.scrollLeft || h.scrollLeft || 0
        }))
    }, D = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: M,
        sc: A((function (t) {
            return arguments.length ? a.scrollTo(M.sc(), t) : a.pageYOffset || o.scrollTop || l.scrollTop || h.scrollTop || 0
        }))
    }, F = function (t, e) {
        return (e && e._ctx && e._ctx.selector || r.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== r.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }, I = function (t, e) {
        var i = e.s, s = e.sc;
        k(t) && (t = o.scrollingElement || l);
        var n = _.indexOf(t), a = s === D.sc ? 1 : 2;
        !~n && (n = _.push(t) - 1), _[n + a] || w(t, "scroll", P);
        var h = _[n + a], u = h || (_[n + a] = A(C(t, i), !0) || (k(t) ? s : A((function (e) {
            return arguments.length ? t[i] = e : t[i]
        }))));
        return u.target = t, h || (u.smooth = "smooth" === r.getProperty(t, "scrollBehavior")), u
    }, L = function (t, e, i) {
        var s = t, r = t, n = S(), a = n, o = e || 50, l = Math.max(500, 3 * o), h = function (t, e) {
            var l = S();
            e || l - n > o ? (r = s, s = t, a = n, n = l) : i ? s += t : s = r + (t - r) / (l - a) * (n - a)
        };
        return {
            update: h, reset: function () {
                r = s = i ? 0 : s, a = n = 0
            }, getVelocity: function (t) {
                var e = a, o = r, u = S();
                return (t || 0 === t) && t !== s && h(t), n === a || u - a > l ? 0 : (s + (i ? o : -o)) / ((i ? u : n) - e) * 1e3
            }
        }
    }, B = function (t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    }, V = function (t) {
        var e = Math.max.apply(Math, t), i = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(i) ? e : i
    }, O = function () {
        var t, e, i, s;
        (c = r.core.globals().ScrollTrigger) && c.core && (t = c.core, e = t.bridge || {}, i = t._scrollers, s = t._proxies, i.push.apply(i, _), s.push.apply(s, x), _ = i, x = s, E = function (t, i) {
            return e[t](i)
        })
    }, R = function (t) {
        return (r = t || v()) && "undefined" != typeof document && document.body && (a = window, o = document, l = o.documentElement, h = o.body, d = [a, o, l, h], r.utils.clamp, g = r.core.context || function () {
        }, p = "onpointerenter" in h ? "pointer" : "mouse", u = z.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = z.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
            return y = 0
        }), 500), O(), n = 1), n
    };
    M.op = D, _.cache = 0;
    var z = function () {
        function t(t) {
            this.init(t)
        }

        var e, i, d;
        return t.prototype.init = function (t) {
            n || R(r) || console.warn("Please gsap.registerPlugin(Observer)"), c || O();
            var e = t.tolerance, i = t.dragMinimum, s = t.type, d = t.target, v = t.lineHeight, y = t.debounce,
                _ = t.preventDefault, x = t.onStop, E = t.onStopDelay, C = t.ignore, A = t.wheelSpeed, z = t.event,
                N = t.onDragStart, G = t.onDragEnd, q = t.onDrag, H = t.onPress, j = t.onRelease, W = t.onRight,
                Y = t.onLeft, X = t.onUp, $ = t.onDown, U = t.onChangeX, K = t.onChangeY, Z = t.onChange,
                J = t.onToggleX, Q = t.onToggleY, tt = t.onHover, et = t.onHoverEnd, it = t.onMove, st = t.ignoreCheck,
                rt = t.isNormalizer, nt = t.onGestureStart, at = t.onGestureEnd, ot = t.onWheel, lt = t.onEnable,
                ht = t.onDisable, ut = t.onClick, pt = t.scrollSpeed, ct = t.capture, dt = t.allowClicks,
                ft = t.lockAxis, mt = t.onLockAxis;
            this.target = d = F(d) || l, this.vars = t, C && (C = r.utils.toArray(C)), e = e || 1e-9, i = i || 0, A = A || 1, pt = pt || 1, s = s || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(a.getComputedStyle(h).lineHeight) || 22);
            var gt, vt, yt, bt, _t, xt, St, Et = this, Ct = 0, kt = 0, wt = I(d, M), Tt = I(d, D), Pt = wt(), At = Tt(),
                Mt = ~s.indexOf("touch") && !~s.indexOf("pointer") && "pointerdown" === m[0], Dt = k(d),
                Ft = d.ownerDocument || o, It = [0, 0, 0], Lt = [0, 0, 0], Bt = 0, Vt = function () {
                    return Bt = S()
                }, Ot = function (t, e) {
                    return (Et.event = t) && C && ~C.indexOf(t.target) || e && Mt && "touch" !== t.pointerType || st && st(t, e)
                }, Rt = function () {
                    var t = Et.deltaX = V(It), i = Et.deltaY = V(Lt), s = Math.abs(t) >= e, r = Math.abs(i) >= e;
                    Z && (s || r) && Z(Et, t, i, It, Lt), s && (W && Et.deltaX > 0 && W(Et), Y && Et.deltaX < 0 && Y(Et), U && U(Et), J && Et.deltaX < 0 != Ct < 0 && J(Et), Ct = Et.deltaX, It[0] = It[1] = It[2] = 0), r && ($ && Et.deltaY > 0 && $(Et), X && Et.deltaY < 0 && X(Et), K && K(Et), Q && Et.deltaY < 0 != kt < 0 && Q(Et), kt = Et.deltaY, Lt[0] = Lt[1] = Lt[2] = 0), (bt || yt) && (it && it(Et), yt && (q(Et), yt = !1), bt = !1), xt && !(xt = !1) && mt && mt(Et), _t && (ot(Et), _t = !1), gt = 0
                }, zt = function (t, e, i) {
                    It[i] += t, Lt[i] += e, Et._vx.update(t), Et._vy.update(e), y ? gt || (gt = requestAnimationFrame(Rt)) : Rt()
                }, Nt = function (t, e) {
                    ft && !St && (Et.axis = St = Math.abs(t) > Math.abs(e) ? "x" : "y", xt = !0), "y" !== St && (It[2] += t, Et._vx.update(t, !0)), "x" !== St && (Lt[2] += e, Et._vy.update(e, !0)), y ? gt || (gt = requestAnimationFrame(Rt)) : Rt()
                }, Gt = function (t) {
                    if (!Ot(t, 1)) {
                        var e = (t = B(t, _)).clientX, s = t.clientY, r = e - Et.x, n = s - Et.y, a = Et.isDragging;
                        Et.x = e, Et.y = s, (a || Math.abs(Et.startX - e) >= i || Math.abs(Et.startY - s) >= i) && (q && (yt = !0), a || (Et.isDragging = !0), Nt(r, n), a || N && N(Et))
                    }
                }, qt = Et.onPress = function (t) {
                    Ot(t, 1) || t && t.button || (Et.axis = St = null, vt.pause(), Et.isPressed = !0, t = B(t), Ct = kt = 0, Et.startX = Et.x = t.clientX, Et.startY = Et.y = t.clientY, Et._vx.reset(), Et._vy.reset(), w(rt ? d : Ft, m[1], Gt, _, !0), Et.deltaX = Et.deltaY = 0, H && H(Et))
                }, Ht = Et.onRelease = function (t) {
                    if (!Ot(t, 1)) {
                        T(rt ? d : Ft, m[1], Gt, !0);
                        var e = !isNaN(Et.y - Et.startY),
                            i = Et.isDragging && (Math.abs(Et.x - Et.startX) > 3 || Math.abs(Et.y - Et.startY) > 3),
                            s = B(t);
                        !i && e && (Et._vx.reset(), Et._vy.reset(), _ && dt && r.delayedCall(.08, (function () {
                            if (S() - Bt > 300 && !t.defaultPrevented) if (t.target.click) t.target.click(); else if (Ft.createEvent) {
                                var e = Ft.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, a, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                            }
                        }))), Et.isDragging = Et.isGesturing = Et.isPressed = !1, x && !rt && vt.restart(!0), G && i && G(Et), j && j(Et, i)
                    }
                }, jt = function (t) {
                    return t.touches && t.touches.length > 1 && (Et.isGesturing = !0) && nt(t, Et.isDragging)
                }, Wt = function () {
                    return (Et.isGesturing = !1) || at(Et)
                }, Yt = function (t) {
                    if (!Ot(t)) {
                        var e = wt(), i = Tt();
                        zt((e - Pt) * pt, (i - At) * pt, 1), Pt = e, At = i, x && vt.restart(!0)
                    }
                }, Xt = function (t) {
                    if (!Ot(t)) {
                        t = B(t, _), ot && (_t = !0);
                        var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? a.innerHeight : 1) * A;
                        zt(t.deltaX * e, t.deltaY * e, 0), x && !rt && vt.restart(!0)
                    }
                }, $t = function (t) {
                    if (!Ot(t)) {
                        var e = t.clientX, i = t.clientY, s = e - Et.x, r = i - Et.y;
                        Et.x = e, Et.y = i, bt = !0, (s || r) && Nt(s, r)
                    }
                }, Ut = function (t) {
                    Et.event = t, tt(Et)
                }, Kt = function (t) {
                    Et.event = t, et(Et)
                }, Zt = function (t) {
                    return Ot(t) || B(t, _) && ut(Et)
                };
            vt = Et._dc = r.delayedCall(E || .25, (function () {
                Et._vx.reset(), Et._vy.reset(), vt.pause(), x && x(Et)
            })).pause(), Et.deltaX = Et.deltaY = 0, Et._vx = L(0, 50, !0), Et._vy = L(0, 50, !0), Et.scrollX = wt, Et.scrollY = Tt, Et.isDragging = Et.isGesturing = Et.isPressed = !1, g(this), Et.enable = function (t) {
                return Et.isEnabled || (w(Dt ? Ft : d, "scroll", P), s.indexOf("scroll") >= 0 && w(Dt ? Ft : d, "scroll", Yt, _, ct), s.indexOf("wheel") >= 0 && w(d, "wheel", Xt, _, ct), (s.indexOf("touch") >= 0 && u || s.indexOf("pointer") >= 0) && (w(d, m[0], qt, _, ct), w(Ft, m[2], Ht), w(Ft, m[3], Ht), dt && w(d, "click", Vt, !1, !0), ut && w(d, "click", Zt), nt && w(Ft, "gesturestart", jt), at && w(Ft, "gestureend", Wt), tt && w(d, p + "enter", Ut), et && w(d, p + "leave", Kt), it && w(d, p + "move", $t)), Et.isEnabled = !0, t && t.type && qt(t), lt && lt(Et)), Et
            }, Et.disable = function () {
                Et.isEnabled && (b.filter((function (t) {
                    return t !== Et && k(t.target)
                })).length || T(Dt ? Ft : d, "scroll", P), Et.isPressed && (Et._vx.reset(), Et._vy.reset(), T(rt ? d : Ft, m[1], Gt, !0)), T(Dt ? Ft : d, "scroll", Yt, ct), T(d, "wheel", Xt, ct), T(d, m[0], qt, ct), T(Ft, m[2], Ht), T(Ft, m[3], Ht), T(d, "click", Vt, !0), T(d, "click", Zt), T(Ft, "gesturestart", jt), T(Ft, "gestureend", Wt), T(d, p + "enter", Ut), T(d, p + "leave", Kt), T(d, p + "move", $t), Et.isEnabled = Et.isPressed = Et.isDragging = !1, ht && ht(Et))
            }, Et.kill = Et.revert = function () {
                Et.disable();
                var t = b.indexOf(Et);
                t >= 0 && b.splice(t, 1), f === Et && (f = 0)
            }, b.push(Et), rt && k(d) && (f = Et), Et.enable(z)
        }, e = t, (i = [{
            key: "velocityX", get: function () {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY", get: function () {
                return this._vy.getVelocity()
            }
        }]) && s(e.prototype, i), d && s(e, d), t
    }();
    z.version = "3.12.2", z.create = function (t) {
        return new z(t)
    }, z.register = R, z.getAll = function () {
        return b.slice()
    }, z.getById = function (t) {
        return b.filter((function (e) {
            return e.vars.id === t
        }))[0]
    }, v() && r.registerPlugin(z);
    /*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var N, G, q, H, j, W, Y, X, $, U, K, Z, J, Q, tt, et, it, st, rt, nt, at, ot, lt, ht, ut, pt, ct, dt, ft, mt, gt,
        vt, yt, bt, _t, xt, St = 1, Et = Date.now, Ct = Et(), kt = 0, wt = 0, Tt = function (t, e, i) {
            var s = Nt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return i["_" + e + "Clamp"] = s, s ? t.substr(6, t.length - 7) : t
        }, Pt = function (t, e) {
            return !e || Nt(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
        }, At = function () {
            return Q = 1
        }, Mt = function () {
            return Q = 0
        }, Dt = function (t) {
            return t
        }, Ft = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, It = function () {
            return "undefined" != typeof window
        }, Lt = function () {
            return N || It() && (N = window.gsap) && N.registerPlugin && N
        }, Bt = function (t) {
            return !!~Y.indexOf(t)
        }, Vt = function (t) {
            return ("Height" === t ? gt : q["inner" + t]) || j["client" + t] || W["client" + t]
        }, Ot = function (t) {
            return C(t, "getBoundingClientRect") || (Bt(t) ? function () {
                return Oe.width = q.innerWidth, Oe.height = gt, Oe
            } : function () {
                return Zt(t)
            })
        }, Rt = function (t, e) {
            var i = e.s, s = e.d2, r = e.d, n = e.a;
            return Math.max(0, (i = "scroll" + s) && (n = C(t, i)) ? n() - Ot(t)()[r] : Bt(t) ? (j[i] || W[i]) - Vt(s) : t[i] - t["offset" + s])
        }, zt = function (t, e) {
            for (var i = 0; i < rt.length; i += 3) (!e || ~e.indexOf(rt[i + 1])) && t(rt[i], rt[i + 1], rt[i + 2])
        }, Nt = function (t) {
            return "string" == typeof t
        }, Gt = function (t) {
            return "function" == typeof t
        }, qt = function (t) {
            return "number" == typeof t
        }, Ht = function (t) {
            return "object" == typeof t
        }, jt = function (t, e, i) {
            return t && t.progress(e ? 0 : 1) && i && t.pause()
        }, Wt = function (t, e) {
            if (t.enabled) {
                var i = e(t);
                i && i.totalTime && (t.callbackAnimation = i)
            }
        }, Yt = Math.abs, Xt = "padding", $t = "px", Ut = function (t) {
            return q.getComputedStyle(t)
        }, Kt = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t
        }, Zt = function (t, e) {
            var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ut(t)[tt] && N.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), s = t.getBoundingClientRect();
            return i && i.progress(0).kill(), s
        }, Jt = function (t, e) {
            var i = e.d2;
            return t["offset" + i] || t["client" + i] || 0
        }, Qt = function (t) {
            var e, i = [], s = t.labels, r = t.duration();
            for (e in s) i.push(s[e] / r);
            return i
        }, te = function (t) {
            var e = N.utils.snap(t), i = Array.isArray(t) && t.slice(0).sort((function (t, e) {
                return t - e
            }));
            return i ? function (t, s, r) {
                var n;
                if (void 0 === r && (r = .001), !s) return e(t);
                if (s > 0) {
                    for (t -= r, n = 0; n < i.length; n++) if (i[n] >= t) return i[n];
                    return i[n - 1]
                }
                for (n = i.length, t += r; n--;) if (i[n] <= t) return i[n];
                return i[0]
            } : function (i, s, r) {
                void 0 === r && (r = .001);
                var n = e(i);
                return !s || Math.abs(n - i) < r || n - i < 0 == s < 0 ? n : e(s < 0 ? i - t : i + t)
            }
        }, ee = function (t, e, i, s) {
            return i.split(",").forEach((function (i) {
                return t(e, i, s)
            }))
        }, ie = function (t, e, i, s, r) {
            return t.addEventListener(e, i, {passive: !s, capture: !!r})
        }, se = function (t, e, i, s) {
            return t.removeEventListener(e, i, !!s)
        }, re = function (t, e, i) {
            (i = i && i.wheelHandler) && (t(e, "wheel", i), t(e, "touchmove", i))
        }, ne = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
        ae = {toggleActions: "play", anticipatePin: 0}, oe = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
        le = function (t, e) {
            if (Nt(t)) {
                var i = t.indexOf("="), s = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                ~i && (t.indexOf("%") > i && (s *= e / 100), t = t.substr(0, i - 1)), t = s + (t in oe ? oe[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        }, he = function (t, e, i, s, r, n, a, o) {
            var l = r.startColor, h = r.endColor, u = r.fontSize, p = r.indent, c = r.fontWeight,
                d = H.createElement("div"), f = Bt(i) || "fixed" === C(i, "pinType"), m = -1 !== t.indexOf("scroller"),
                g = f ? W : i, v = -1 !== t.indexOf("start"), y = v ? l : h,
                b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return b += "position:" + ((m || o) && f ? "fixed;" : "absolute;"), (m || o || !f) && (b += (s === D ? "right" : "bottom") + ":" + (n + parseFloat(p)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = b, d.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(d, g.children[0]) : g.appendChild(d), d._offset = d["offset" + s.op.d2], ue(d, 0, s, v), d
        }, ue = function (t, e, i, s) {
            var r = {display: "block"}, n = i[s ? "os2" : "p2"], a = i[s ? "p2" : "os2"];
            t._isFlipped = s, r[i.a + "Percent"] = s ? -100 : 0, r[i.a] = s ? "1px" : 0, r["border" + n + "Width"] = 1, r["border" + a + "Width"] = 0, r[i.p] = e + "px", N.set(t, r)
        }, pe = [], ce = {}, de = function () {
            return Et() - kt > 34 && (yt || (yt = requestAnimationFrame(Me)))
        }, fe = function () {
            (!lt || !lt.isPressed || lt.startX > W.clientWidth) && (_.cache++, lt ? yt || (yt = requestAnimationFrame(Me)) : Me(), kt || _e("scrollStart"), kt = Et())
        }, me = function () {
            pt = q.innerWidth, ut = q.innerHeight
        }, ge = function () {
            _.cache++, !J && !ot && !H.fullscreenElement && !H.webkitFullscreenElement && (!ht || pt !== q.innerWidth || Math.abs(q.innerHeight - ut) > .25 * q.innerHeight) && X.restart(!0)
        }, ve = {}, ye = [], be = function t() {
            return se(je, "scrollEnd", t) || Te(!0)
        }, _e = function (t) {
            return ve[t] && ve[t].map((function (t) {
                return t()
            })) || ye
        }, xe = [], Se = function (t) {
            for (var e = 0; e < xe.length; e += 5) (!t || xe[e + 4] && xe[e + 4].query === t) && (xe[e].style.cssText = xe[e + 1], xe[e].getBBox && xe[e].setAttribute("transform", xe[e + 2] || ""), xe[e + 3].uncache = 1)
        }, Ee = function (t, e) {
            var i;
            for (et = 0; et < pe.length; et++) !(i = pe[et]) || e && i._ctx !== e || (t ? i.kill(1) : i.revert(!0, !0));
            e && Se(e), e || _e("revert")
        }, Ce = function (t, e) {
            _.cache++, (e || !bt) && _.forEach((function (t) {
                return Gt(t) && t.cacheID++ && (t.rec = 0)
            })), Nt(t) && (q.history.scrollRestoration = ft = t)
        }, ke = 0, we = function () {
            W.appendChild(mt), gt = mt.offsetHeight || q.innerHeight, W.removeChild(mt)
        }, Te = function (t, e) {
            if (!kt || t) {
                we(), bt = je.isRefreshing = !0, _.forEach((function (t) {
                    return Gt(t) && ++t.cacheID && (t.rec = t())
                }));
                var i = _e("refreshInit");
                nt && je.sort(), e || Ee(), _.forEach((function (t) {
                    Gt(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                })), pe.slice(0).forEach((function (t) {
                    return t.refresh()
                })), pe.forEach((function (t, e) {
                    if (t._subPinOffset && t.pin) {
                        var i = t.vars.horizontal ? "offsetWidth" : "offsetHeight", s = t.pin[i];
                        t.revert(!0, 1), t.adjustPinSpacing(t.pin[i] - s), t.refresh()
                    }
                })), pe.forEach((function (t) {
                    var e = Rt(t.scroller, t._dir);
                    ("max" === t.vars.end || t._endClamp && t.end > e) && t.setPositions(t.start, Math.max(t.start + 1, e), !0)
                })), i.forEach((function (t) {
                    return t && t.render && t.render(-1)
                })), _.forEach((function (t) {
                    Gt(t) && (t.smooth && requestAnimationFrame((function () {
                        return t.target.style.scrollBehavior = "smooth"
                    })), t.rec && t(t.rec))
                })), Ce(ft, 1), X.pause(), ke++, bt = 2, Me(2), pe.forEach((function (t) {
                    return Gt(t.vars.onRefresh) && t.vars.onRefresh(t)
                })), bt = je.isRefreshing = !1, _e("refresh")
            } else ie(je, "scrollEnd", be)
        }, Pe = 0, Ae = 1, Me = function (t) {
            if (!bt || 2 === t) {
                je.isUpdating = !0, xt && xt.update(0);
                var e = pe.length, i = Et(), s = i - Ct >= 50, r = e && pe[0].scroll();
                if (Ae = Pe > r ? -1 : 1, bt || (Pe = r), s && (kt && !Q && i - kt > 200 && (kt = 0, _e("scrollEnd")), K = Ct, Ct = i), Ae < 0) {
                    for (et = e; et-- > 0;) pe[et] && pe[et].update(0, s);
                    Ae = 1
                } else for (et = 0; et < e; et++) pe[et] && pe[et].update(0, s);
                je.isUpdating = !1
            }
            yt = 0
        },
        De = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Fe = De.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Xt, Xt + "Top", Xt + "Right", Xt + "Bottom", Xt + "Left"]),
        Ie = function (t, e, i, s) {
            if (!t._gsap.swappedIn) {
                for (var r, n = De.length, a = e.style, o = t.style; n--;) a[r = De[n]] = i[r];
                a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o.bottom = o.right = "auto", a.flexBasis = i.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a.width = Jt(t, M) + $t, a.height = Jt(t, D) + $t, a[Xt] = o.margin = o.top = o.left = "0", Be(s), o.width = o.maxWidth = i.width, o.height = o.maxHeight = i.height, o[Xt] = i[Xt], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
            }
        }, Le = /([A-Z])/g, Be = function (t) {
            if (t) {
                var e, i, s = t.t.style, r = t.length, n = 0;
                for ((t.t._gsap || N.core.getCache(t.t)).uncache = 1; n < r; n += 2) i = t[n + 1], e = t[n], i ? s[e] = i : s[e] && s.removeProperty(e.replace(Le, "-$1").toLowerCase())
            }
        }, Ve = function (t) {
            for (var e = Fe.length, i = t.style, s = [], r = 0; r < e; r++) s.push(Fe[r], i[Fe[r]]);
            return s.t = t, s
        }, Oe = {left: 0, top: 0}, Re = function (t, e, i, s, r, n, a, o, l, h, u, p, c, d) {
            Gt(t) && (t = t(o)), Nt(t) && "max" === t.substr(0, 3) && (t = p + ("=" === t.charAt(4) ? le("0" + t.substr(3), i) : 0));
            var f, m, g, v = c ? c.time() : 0;
            if (c && c.seek(0), isNaN(t) || (t = +t), qt(t)) c && (t = N.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, p, t)), a && ue(a, i, s, !0); else {
                Gt(e) && (e = e(o));
                var y, b, _, x, S = (t || "0").split(" ");
                g = F(e, o) || W, (y = Zt(g) || {}) && (y.left || y.top) || "none" !== Ut(g).display || (x = g.style.display, g.style.display = "block", y = Zt(g), x ? g.style.display = x : g.style.removeProperty("display")), b = le(S[0], y[s.d]), _ = le(S[1] || "0", i), t = y[s.p] - l[s.p] - h + b + r - _, a && ue(a, _, s, i - _ < 20 || a._isStart && _ > 20), i -= i - _
            }
            if (d && (o[d] = t || -.001, t < 0 && (t = 0)), n) {
                var E = t + i, C = n._isStart;
                f = "scroll" + s.d2, ue(n, E, s, C && E > 20 || !C && (u ? Math.max(W[f], j[f]) : n.parentNode[f]) <= E + 1), u && (l = Zt(a), u && (n.style[s.op.p] = l[s.op.p] - s.op.m - n._offset + $t))
            }
            return c && g && (f = Zt(g), c.seek(p), m = Zt(g), c._caScrollDist = f[s.p] - m[s.p], t = t / c._caScrollDist * p), c && c.seek(v), c ? t : Math.round(t)
        }, ze = /(webkit|moz|length|cssText|inset)/i, Ne = function (t, e, i, s) {
            if (t.parentNode !== e) {
                var r, n, a = t.style;
                if (e === W) {
                    for (r in t._stOrig = a.cssText, n = Ut(t)) +r || ze.test(r) || !n[r] || "string" != typeof a[r] || "0" === r || (a[r] = n[r]);
                    a.top = i, a.left = s
                } else a.cssText = t._stOrig;
                N.core.getCache(t).uncache = 1, e.appendChild(t)
            }
        }, Ge = function (t, e, i) {
            var s = e, r = s;
            return function (e) {
                var n = Math.round(t());
                return n !== s && n !== r && Math.abs(n - s) > 3 && Math.abs(n - r) > 3 && (e = n, i && i()), r = s, s = e, e
            }
        }, qe = function (t, e, i) {
            var s = {};
            s[e.p] = "+=" + i, N.set(t, s)
        }, He = function (t, e) {
            var i = I(t, e), s = "_scroll" + e.p2, r = function e(r, n, a, o, l) {
                var h = e.tween, u = n.onComplete, p = {};
                a = a || i();
                var c = Ge(i, a, (function () {
                    h.kill(), e.tween = 0
                }));
                return l = o && l || 0, o = o || r - a, h && h.kill(), n[s] = r, n.modifiers = p, p[s] = function () {
                    return c(a + o * h.ratio + l * h.ratio * h.ratio)
                }, n.onUpdate = function () {
                    _.cache++, Me()
                }, n.onComplete = function () {
                    e.tween = 0, u && u.call(h)
                }, h = e.tween = N.to(t, n)
            };
            return t[s] = i, i.wheelHandler = function () {
                return r.tween && r.tween.kill() && (r.tween = 0)
            }, ie(t, "wheel", i.wheelHandler), je.isTouch && ie(t, "touchmove", i.wheelHandler), r
        }, je = function () {
            function t(e, i) {
                G || t.register(N) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), dt(this), this.init(e, i)
            }

            return t.prototype.init = function (e, i) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), wt) {
                    var s, r, n, a, o, l, h, u, p, c, d, f, m, g, v, y, b, S, E, k, w, T, P, A, L, B, V, O, R, z, G, Y, X,
                        Z, tt, it, st, rt, ot, lt, ht, ut, pt = e = Kt(Nt(e) || qt(e) || e.nodeType ? {trigger: e} : e, ae),
                        ct = pt.onUpdate, dt = pt.toggleClass, ft = pt.id, mt = pt.onToggle, gt = pt.onRefresh,
                        yt = pt.scrub, Ct = pt.trigger, At = pt.pin, Mt = pt.pinSpacing, It = pt.invalidateOnRefresh,
                        Lt = pt.anticipatePin, zt = pt.onScrubComplete, ee = pt.onSnapComplete, re = pt.once, oe = pt.snap,
                        ue = pt.pinReparent, de = pt.pinSpacer, me = pt.containerAnimation, ve = pt.fastScrollEnd,
                        ye = pt.preventOverlaps, _e = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? M : D,
                        xe = !yt && 0 !== yt, Se = F(e.scroller || q), Ee = N.core.getCache(Se), Ce = Bt(Se),
                        we = "fixed" === ("pinType" in e ? e.pinType : C(Se, "pinType") || Ce && "fixed"),
                        Pe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], Me = xe && e.toggleActions.split(" "),
                        De = "markers" in e ? e.markers : ae.markers,
                        Fe = Ce ? 0 : parseFloat(Ut(Se)["border" + _e.p2 + "Width"]) || 0, Le = this,
                        ze = e.onRefreshInit && function () {
                            return e.onRefreshInit(Le)
                        }, Ge = function (t, e, i) {
                            var s = i.d, r = i.d2, n = i.a;
                            return (n = C(t, "getBoundingClientRect")) ? function () {
                                return n()[s]
                            } : function () {
                                return (e ? Vt(r) : t["client" + r]) || 0
                            }
                        }(Se, Ce, _e), je = function (t, e) {
                            return !e || ~x.indexOf(t) ? Ot(t) : function () {
                                return Oe
                            }
                        }(Se, Ce), We = 0, Ye = 0, Xe = 0, $e = I(Se, _e);
                    if (Le._startClamp = Le._endClamp = !1, Le._dir = _e, Lt *= 45, Le.scroller = Se, Le.scroll = me ? me.time.bind(me) : $e, a = $e(), Le.vars = e, i = i || e.animation, "refreshPriority" in e && (nt = 1, -9999 === e.refreshPriority && (xt = Le)), Ee.tweenScroll = Ee.tweenScroll || {
                        top: He(Se, D),
                        left: He(Se, M)
                    }, Le.tweenTo = s = Ee.tweenScroll[_e.p], Le.scrubDuration = function (t) {
                        (X = qt(t) && t) ? Y ? Y.duration(t) : Y = N.to(i, {
                            ease: "expo",
                            totalProgress: "+=0",
                            duration: X,
                            paused: !0,
                            onComplete: function () {
                                return zt && zt(Le)
                            }
                        }) : (Y && Y.progress(1).kill(), Y = 0)
                    }, i && (i.vars.lazy = !1, i._initted && !Le.isReverted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.duration() && i.render(0, !0, !0), Le.animation = i.pause(), i.scrollTrigger = Le, Le.scrubDuration(yt), z = 0, ft || (ft = i.vars.id)), oe && (Ht(oe) && !oe.push || (oe = {snapTo: oe}), "scrollBehavior" in W.style && N.set(Ce ? [W, j] : Se, {scrollBehavior: "auto"}), _.forEach((function (t) {
                        return Gt(t) && t.target === (Ce ? H.scrollingElement || j : Se) && (t.smooth = !1)
                    })), n = Gt(oe.snapTo) ? oe.snapTo : "labels" === oe.snapTo ? function (t) {
                        return function (e) {
                            return N.utils.snap(Qt(t), e)
                        }
                    }(i) : "labelsDirectional" === oe.snapTo ? (lt = i, function (t, e) {
                        return te(Qt(lt))(t, e.direction)
                    }) : !1 !== oe.directional ? function (t, e) {
                        return te(oe.snapTo)(t, Et() - Ye < 500 ? 0 : e.direction)
                    } : N.utils.snap(oe.snapTo), Z = oe.duration || {
                        min: .1,
                        max: 2
                    }, Z = Ht(Z) ? U(Z.min, Z.max) : U(Z, Z), tt = N.delayedCall(oe.delay || X / 2 || .1, (function () {
                        var t = $e(), e = Et() - Ye < 500, r = s.tween;
                        if (!(e || Math.abs(Le.getVelocity()) < 10) || r || Q || We === t) Le.isActive && We !== t && tt.restart(!0); else {
                            var a = (t - l) / g, o = i && !xe ? i.totalProgress() : a,
                                u = e ? 0 : (o - G) / (Et() - K) * 1e3 || 0,
                                p = N.utils.clamp(-a, 1 - a, Yt(u / 2) * u / .185), c = a + (!1 === oe.inertia ? 0 : p),
                                d = U(0, 1, n(c, Le)), f = Math.round(l + d * g), m = oe, v = m.onStart, y = m.onInterrupt,
                                b = m.onComplete;
                            if (t <= h && t >= l && f !== t) {
                                if (r && !r._initted && r.data <= Yt(f - t)) return;
                                !1 === oe.inertia && (p = d - a), s(f, {
                                    duration: Z(Yt(.185 * Math.max(Yt(c - o), Yt(d - o)) / u / .05 || 0)),
                                    ease: oe.ease || "power3",
                                    data: Yt(f - t),
                                    onInterrupt: function () {
                                        return tt.restart(!0) && y && y(Le)
                                    },
                                    onComplete: function () {
                                        Le.update(), We = $e(), z = G = i && !xe ? i.totalProgress() : Le.progress, ee && ee(Le), b && b(Le)
                                    }
                                }, t, p * g, f - t - p * g), v && v(Le, s.tween)
                            }
                        }
                    })).pause()), ft && (ce[ft] = Le), (ot = (Ct = Le.trigger = F(Ct || !0 !== At && At)) && Ct._gsap && Ct._gsap.stRevert) && (ot = ot(Le)), At = !0 === At ? Ct : F(At), Nt(dt) && (dt = {
                        targets: Ct,
                        className: dt
                    }), At && (!1 === Mt || "margin" === Mt || (Mt = !(!Mt && At.parentNode && At.parentNode.style && "flex" === Ut(At.parentNode).display) && Xt), Le.pin = At, (r = N.core.getCache(At)).spacer ? v = r.pinState : (de && ((de = F(de)) && !de.nodeType && (de = de.current || de.nativeElement), r.spacerIsNative = !!de, de && (r.spacerState = Ve(de))), r.spacer = S = de || H.createElement("div"), S.classList.add("pin-spacer"), ft && S.classList.add("pin-spacer-" + ft), r.pinState = v = Ve(At)), !1 !== e.force3D && N.set(At, {force3D: !0}), Le.spacer = S = r.spacer, R = Ut(At), A = R[Mt + _e.os2], k = N.getProperty(At), w = N.quickSetter(At, _e.a, $t), Ie(At, S, R), b = Ve(At)), De) {
                        f = Ht(De) ? Kt(De, ne) : ne, c = he("scroller-start", ft, Se, _e, f, 0), d = he("scroller-end", ft, Se, _e, f, 0, c), E = c["offset" + _e.op.d2];
                        var Ue = F(C(Se, "content") || Se);
                        u = this.markerStart = he("start", ft, Ue, _e, f, E, 0, me), p = this.markerEnd = he("end", ft, Ue, _e, f, E, 0, me), me && (rt = N.quickSetter([u, p], _e.a, $t)), we || x.length && !0 === C(Se, "fixedMarkers") || (ut = Ut(ht = Ce ? W : Se).position, ht.style.position = "absolute" === ut || "fixed" === ut ? ut : "relative", N.set([c, d], {force3D: !0}), B = N.quickSetter(c, _e.a, $t), O = N.quickSetter(d, _e.a, $t))
                    }
                    if (me) {
                        var Ke = me.vars.onUpdate, Ze = me.vars.onUpdateParams;
                        me.eventCallback("onUpdate", (function () {
                            Le.update(0, 0, 1), Ke && Ke.apply(me, Ze || [])
                        }))
                    }
                    if (Le.previous = function () {
                        return pe[pe.indexOf(Le) - 1]
                    }, Le.next = function () {
                        return pe[pe.indexOf(Le) + 1]
                    }, Le.revert = function (t, e) {
                        if (!e) return Le.kill(!0);
                        var s = !1 !== t || !Le.enabled, r = J;
                        s !== Le.isReverted && (s && (it = Math.max($e(), Le.scroll.rec || 0), Xe = Le.progress, st = i && i.progress()), u && [u, p, c, d].forEach((function (t) {
                            return t.style.display = s ? "none" : "block"
                        })), s && (J = Le, Le.update(s)), !At || ue && Le.isActive || (s ? function (t, e, i) {
                            Be(i);
                            var s = t._gsap;
                            if (s.spacerIsNative) Be(s.spacerState); else if (t._gsap.swappedIn) {
                                var r = e.parentNode;
                                r && (r.insertBefore(t, e), r.removeChild(e))
                            }
                            t._gsap.swappedIn = !1
                        }(At, S, v) : Ie(At, S, Ut(At), L)), s || Le.update(s), J = r, Le.isReverted = s)
                    }, Le.refresh = function (r, n, f, _) {
                        if (!J && Le.enabled || n) if (At && r && kt) ie(t, "scrollEnd", be); else {
                            !bt && ze && ze(Le), J = Le, s.tween && !f && (s.tween.kill(), s.tween = 0), Y && Y.pause(), It && i && i.revert({kill: !1}).invalidate(), Le.isReverted || Le.revert(!0, !0), Le._subPinOffset = !1;
                            var x, E, C, w, A, B, O, R, z, G, q, X, $, U = Ge(), K = je(),
                                Z = me ? me.duration() : Rt(Se, _e), Q = g <= .01, et = 0, rt = _ || 0,
                                nt = Ht(f) ? f.end : e.end, ot = e.endTrigger || Ct,
                                lt = Ht(f) ? f.start : e.start || (0 !== e.start && Ct ? At ? "0 0" : "0 100%" : 0),
                                ht = Le.pinnedContainer = e.pinnedContainer && F(e.pinnedContainer, Le),
                                ut = Ct && Math.max(0, pe.indexOf(Le)) || 0, pt = ut;
                            for (De && Ht(f) && (X = N.getProperty(c, _e.p), $ = N.getProperty(d, _e.p)); pt--;) (B = pe[pt]).end || B.refresh(0, 1) || (J = Le), !(O = B.pin) || O !== Ct && O !== At && O !== ht || B.isReverted || (G || (G = []), G.unshift(B), B.revert(!0, !0)), B !== pe[pt] && (ut--, pt--);
                            for (Gt(lt) && (lt = lt(Le)), lt = Tt(lt, "start", Le), l = Re(lt, Ct, U, _e, $e(), u, c, Le, K, Fe, we, Z, me, Le._startClamp && "_startClamp") || (At ? -.001 : 0), Gt(nt) && (nt = nt(Le)), Nt(nt) && !nt.indexOf("+=") && (~nt.indexOf(" ") ? nt = (Nt(lt) ? lt.split(" ")[0] : "") + nt : (et = le(nt.substr(2), U), nt = Nt(lt) ? lt : (me ? N.utils.mapRange(0, me.duration(), me.scrollTrigger.start, me.scrollTrigger.end, l) : l) + et, ot = Ct)), nt = Tt(nt, "end", Le), h = Math.max(l, Re(nt || (ot ? "100% 0" : Z), ot, U, _e, $e() + et, p, d, Le, K, Fe, we, Z, me, Le._endClamp && "_endClamp")) || -.001, et = 0, pt = ut; pt--;) (O = (B = pe[pt]).pin) && B.start - B._pinPush <= l && !me && B.end > 0 && (x = B.end - (Le._startClamp ? Math.max(0, B.start) : B.start), (O === Ct && B.start - B._pinPush < l || O === ht) && isNaN(lt) && (et += x * (1 - B.progress)), O === At && (rt += x));
                            if (l += et, h += et, Le._startClamp && (Le._startClamp += et), Le._endClamp && !bt && (Le._endClamp = h || -.001, h = Math.min(h, Rt(Se, _e))), g = h - l || (l -= .01) && .001, Q && (Xe = N.utils.clamp(0, 1, N.utils.normalize(l, h, it))), Le._pinPush = rt, u && et && ((x = {})[_e.a] = "+=" + et, ht && (x[_e.p] = "-=" + $e()), N.set([u, p], x)), At) x = Ut(At), w = _e === D, C = $e(), T = parseFloat(k(_e.a)) + rt, !Z && h > 1 && (q = {
                                style: q = (Ce ? H.scrollingElement || j : Se).style,
                                value: q["overflow" + _e.a.toUpperCase()]
                            }, Ce && "scroll" !== Ut(W)["overflow" + _e.a.toUpperCase()] && (q.style["overflow" + _e.a.toUpperCase()] = "scroll")), Ie(At, S, x), b = Ve(At), E = Zt(At, !0), R = we && I(Se, w ? M : D)(), Mt && ((L = [Mt + _e.os2, g + rt + $t]).t = S, (pt = Mt === Xt ? Jt(At, _e) + g + rt : 0) && L.push(_e.d, pt + $t), Be(L), ht && pe.forEach((function (t) {
                                t.pin === ht && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                            })), we && $e(it)), we && ((A = {
                                top: E.top + (w ? C - l : R) + $t,
                                left: E.left + (w ? R : C - l) + $t,
                                boxSizing: "border-box",
                                position: "fixed"
                            }).width = A.maxWidth = Math.ceil(E.width) + $t, A.height = A.maxHeight = Math.ceil(E.height) + $t, A.margin = A.marginTop = A.marginRight = A.marginBottom = A.marginLeft = "0", A[Xt] = x[Xt], A[Xt + "Top"] = x[Xt + "Top"], A[Xt + "Right"] = x[Xt + "Right"], A[Xt + "Bottom"] = x[Xt + "Bottom"], A[Xt + "Left"] = x[Xt + "Left"], y = function (t, e, i) {
                                for (var s, r = [], n = t.length, a = i ? 8 : 0; a < n; a += 2) s = t[a], r.push(s, s in e ? e[s] : t[a + 1]);
                                return r.t = t.t, r
                            }(v, A, ue), bt && $e(0)), i ? (z = i._initted, at(1), i.render(i.duration(), !0, !0), P = k(_e.a) - T + g + rt, V = Math.abs(g - P) > 1, we && V && y.splice(y.length - 2, 2), i.render(0, !0, !0), z || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), at(0)) : P = g, q && (q.value ? q.style["overflow" + _e.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + _e.a)); else if (Ct && $e() && !me) for (E = Ct.parentNode; E && E !== W;) E._pinOffset && (l -= E._pinOffset, h -= E._pinOffset), E = E.parentNode;
                            G && G.forEach((function (t) {
                                return t.revert(!1, !0)
                            })), Le.start = l, Le.end = h, a = o = bt ? it : $e(), me || bt || (a < it && $e(it), Le.scroll.rec = 0), Le.revert(!1, !0), Ye = Et(), tt && (We = -1, tt.restart(!0)), J = 0, i && xe && (i._initted || st) && i.progress() !== st && i.progress(st || 0, !0).render(i.time(), !0, !0), (Q || Xe !== Le.progress || me) && (i && !xe && i.totalProgress(me && l < -.001 && !Xe ? N.utils.normalize(l, h, 0) : Xe, !0), Le.progress = Q || (a - l) / g === Xe ? 0 : Xe), At && Mt && (S._pinOffset = Math.round(Le.progress * P)), Y && Y.invalidate(), isNaN(X) || (X -= N.getProperty(c, _e.p), $ -= N.getProperty(d, _e.p), qe(c, _e, X), qe(u, _e, X - (_ || 0)), qe(d, _e, $), qe(p, _e, $ - (_ || 0))), Q && !bt && Le.update(), !gt || bt || m || (m = !0, gt(Le), m = !1)
                        }
                    }, Le.getVelocity = function () {
                        return ($e() - o) / (Et() - K) * 1e3 || 0
                    }, Le.endAnimation = function () {
                        jt(Le.callbackAnimation), i && (Y ? Y.progress(1) : i.paused() ? xe || jt(i, Le.direction < 0, 1) : jt(i, i.reversed()))
                    }, Le.labelToScroll = function (t) {
                        return i && i.labels && (l || Le.refresh() || l) + i.labels[t] / i.duration() * g || 0
                    }, Le.getTrailing = function (t) {
                        var e = pe.indexOf(Le), i = Le.direction > 0 ? pe.slice(0, e).reverse() : pe.slice(e + 1);
                        return (Nt(t) ? i.filter((function (e) {
                            return e.vars.preventOverlaps === t
                        })) : i).filter((function (t) {
                            return Le.direction > 0 ? t.end <= l : t.start >= h
                        }))
                    }, Le.update = function (t, e, r) {
                        if (!me || r || t) {
                            var n, u, p, d, f, m, v, _ = !0 === bt ? it : Le.scroll(), x = t ? 0 : (_ - l) / g,
                                E = x < 0 ? 0 : x > 1 ? 1 : x || 0, C = Le.progress;
                            if (e && (o = a, a = me ? $e() : _, oe && (G = z, z = i && !xe ? i.totalProgress() : E)), Lt && !E && At && !J && !St && kt && l < _ + (_ - o) / (Et() - K) * Lt && (E = 1e-4), E !== C && Le.enabled) {
                                if (d = (f = (n = Le.isActive = !!E && E < 1) !== (!!C && C < 1)) || !!E != !!C, Le.direction = E > C ? 1 : -1, Le.progress = E, d && !J && (u = E && !C ? 0 : 1 === E ? 1 : 1 === C ? 2 : 3, xe && (p = !f && "none" !== Me[u + 1] && Me[u + 1] || Me[u], v = i && ("complete" === p || "reset" === p || p in i))), ye && (f || v) && (v || yt || !i) && (Gt(ye) ? ye(Le) : Le.getTrailing(ye).forEach((function (t) {
                                    return t.endAnimation()
                                }))), xe || (!Y || J || St ? i && i.totalProgress(E, !(!J || !Ye && !t)) : (Y._dp._time - Y._start !== Y._time && Y.render(Y._dp._time - Y._start), Y.resetTo ? Y.resetTo("totalProgress", E, i._tTime / i._tDur) : (Y.vars.totalProgress = E, Y.invalidate().restart()))), At) if (t && Mt && (S.style[Mt + _e.os2] = A), we) {
                                    if (d) {
                                        if (m = !t && E > C && h + 1 > _ && _ + 1 >= Rt(Se, _e), ue) if (t || !n && !m) Ne(At, S); else {
                                            var k = Zt(At, !0), M = _ - l;
                                            Ne(At, W, k.top + (_e === D ? M : 0) + $t, k.left + (_e === D ? 0 : M) + $t)
                                        }
                                        Be(n || m ? y : b), V && E < 1 && n || w(T + (1 !== E || m ? 0 : P))
                                    }
                                } else w(Ft(T + P * E));
                                oe && !s.tween && !J && !St && tt.restart(!0), dt && (f || re && E && (E < 1 || !vt)) && $(dt.targets).forEach((function (t) {
                                    return t.classList[n || re ? "add" : "remove"](dt.className)
                                })), ct && !xe && !t && ct(Le), d && !J ? (xe && (v && ("complete" === p ? i.pause().totalProgress(1) : "reset" === p ? i.restart(!0).pause() : "restart" === p ? i.restart(!0) : i[p]()), ct && ct(Le)), !f && vt || (mt && f && Wt(Le, mt), Pe[u] && Wt(Le, Pe[u]), re && (1 === E ? Le.kill(!1, 1) : Pe[u] = 0), f || Pe[u = 1 === E ? 1 : 3] && Wt(Le, Pe[u])), ve && !n && Math.abs(Le.getVelocity()) > (qt(ve) ? ve : 2500) && (jt(Le.callbackAnimation), Y ? Y.progress(1) : jt(i, "reverse" === p ? 1 : !E, 1))) : xe && ct && !J && ct(Le)
                            }
                            if (O) {
                                var F = me ? _ / me.duration() * (me._caScrollDist || 0) : _;
                                B(F + (c._isFlipped ? 1 : 0)), O(F)
                            }
                            rt && rt(-_ / me.duration() * (me._caScrollDist || 0))
                        }
                    }, Le.enable = function (e, i) {
                        Le.enabled || (Le.enabled = !0, ie(Se, "resize", ge), Ce || ie(Se, "scroll", fe), ze && ie(t, "refreshInit", ze), !1 !== e && (Le.progress = Xe = 0, a = o = We = $e()), !1 !== i && Le.refresh())
                    }, Le.getTween = function (t) {
                        return t && s ? s.tween : Y
                    }, Le.setPositions = function (t, e, i, s) {
                        if (me) {
                            var r = me.scrollTrigger, n = me.duration(), a = r.end - r.start;
                            t = r.start + a * t / n, e = r.start + a * e / n
                        }
                        Le.refresh(!1, !1, {
                            start: Pt(t, i && !!Le._startClamp),
                            end: Pt(e, i && !!Le._endClamp)
                        }, s), Le.update()
                    }, Le.adjustPinSpacing = function (t) {
                        if (L && t) {
                            var e = L.indexOf(_e.d) + 1;
                            L[e] = parseFloat(L[e]) + t + $t, L[1] = parseFloat(L[1]) + t + $t, Be(L)
                        }
                    }, Le.disable = function (e, i) {
                        if (Le.enabled && (!1 !== e && Le.revert(!0, !0), Le.enabled = Le.isActive = !1, i || Y && Y.pause(), it = 0, r && (r.uncache = 1), ze && se(t, "refreshInit", ze), tt && (tt.pause(), s.tween && s.tween.kill() && (s.tween = 0)), !Ce)) {
                            for (var n = pe.length; n--;) if (pe[n].scroller === Se && pe[n] !== Le) return;
                            se(Se, "resize", ge), Ce || se(Se, "scroll", fe)
                        }
                    }, Le.kill = function (t, s) {
                        Le.disable(t, s), Y && !s && Y.kill(), ft && delete ce[ft];
                        var n = pe.indexOf(Le);
                        n >= 0 && pe.splice(n, 1), n === et && Ae > 0 && et--, n = 0, pe.forEach((function (t) {
                            return t.scroller === Le.scroller && (n = 1)
                        })), n || bt || (Le.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.revert({kill: !1}), s || i.kill()), u && [u, p, c, d].forEach((function (t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        })), xt === Le && (xt = 0), At && (r && (r.uncache = 1), n = 0, pe.forEach((function (t) {
                            return t.pin === At && n++
                        })), n || (r.spacer = 0)), e.onKill && e.onKill(Le)
                    }, pe.push(Le), Le.enable(!1, !1), ot && ot(Le), i && i.add && !g) {
                        var Je = Le.update;
                        Le.update = function () {
                            Le.update = Je, l || h || Le.refresh()
                        }, N.delayedCall(.01, Le.update), g = .01, l = h = 0
                    } else Le.refresh();
                    At && function () {
                        if (_t !== ke) {
                            var t = _t = ke;
                            requestAnimationFrame((function () {
                                return t === ke && Te(!0)
                            }))
                        }
                    }()
                } else this.update = this.refresh = this.kill = Dt
            }, t.register = function (e) {
                return G || (N = e || Lt(), It() && window.document && t.enable(), G = wt), G
            }, t.defaults = function (t) {
                if (t) for (var e in t) ae[e] = t[e];
                return ae
            }, t.disable = function (t, e) {
                wt = 0, pe.forEach((function (i) {
                    return i[e ? "kill" : "disable"](t)
                })), se(q, "wheel", fe), se(H, "scroll", fe), clearInterval(Z), se(H, "touchcancel", Dt), se(W, "touchstart", Dt), ee(se, H, "pointerdown,touchstart,mousedown", At), ee(se, H, "pointerup,touchend,mouseup", Mt), X.kill(), zt(se);
                for (var i = 0; i < _.length; i += 3) re(se, _[i], _[i + 1]), re(se, _[i], _[i + 2])
            }, t.enable = function () {
                if (q = window, H = document, j = H.documentElement, W = H.body, N && ($ = N.utils.toArray, U = N.utils.clamp, dt = N.core.context || Dt, at = N.core.suppressOverwrites || Dt, ft = q.history.scrollRestoration || "auto", Pe = q.pageYOffset, N.core.globals("ScrollTrigger", t), W)) {
                    wt = 1, (mt = document.createElement("div")).style.height = "100vh", mt.style.position = "absolute", we(), function t() {
                        return wt && requestAnimationFrame(t)
                    }(), z.register(N), t.isTouch = z.isTouch, ct = z.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ie(q, "wheel", fe), Y = [q, H, j, W], N.matchMedia ? (t.matchMedia = function (t) {
                        var e, i = N.matchMedia();
                        for (e in t) i.add(e, t[e]);
                        return i
                    }, N.addEventListener("matchMediaInit", (function () {
                        return Ee()
                    })), N.addEventListener("matchMediaRevert", (function () {
                        return Se()
                    })), N.addEventListener("matchMedia", (function () {
                        Te(0, 1), _e("matchMedia")
                    })), N.matchMedia("(orientation: portrait)", (function () {
                        return me(), me
                    }))) : console.warn("Requires GSAP 3.11.0 or later"), me(), ie(H, "scroll", fe);
                    var e, i, s = W.style, r = s.borderTopStyle, n = N.core.Animation.prototype;
                    for (n.revert || Object.defineProperty(n, "revert", {
                        value: function () {
                            return this.time(-.01, !0)
                        }
                    }), s.borderTopStyle = "solid", e = Zt(W), D.m = Math.round(e.top + D.sc()) || 0, M.m = Math.round(e.left + M.sc()) || 0, r ? s.borderTopStyle = r : s.removeProperty("border-top-style"), Z = setInterval(de, 250), N.delayedCall(.5, (function () {
                        return St = 0
                    })), ie(H, "touchcancel", Dt), ie(W, "touchstart", Dt), ee(ie, H, "pointerdown,touchstart,mousedown", At), ee(ie, H, "pointerup,touchend,mouseup", Mt), tt = N.utils.checkPrefix("transform"), Fe.push(tt), G = Et(), X = N.delayedCall(.2, Te).pause(), rt = [H, "visibilitychange", function () {
                        var t = q.innerWidth, e = q.innerHeight;
                        H.hidden ? (it = t, st = e) : it === t && st === e || ge()
                    }, H, "DOMContentLoaded", Te, q, "load", Te, q, "resize", ge], zt(ie), pe.forEach((function (t) {
                        return t.enable(0, 1)
                    })), i = 0; i < _.length; i += 3) re(se, _[i], _[i + 1]), re(se, _[i], _[i + 2])
                }
            }, t.config = function (e) {
                "limitCallbacks" in e && (vt = !!e.limitCallbacks);
                var i = e.syncInterval;
                i && clearInterval(Z) || (Z = i) && setInterval(de, i), "ignoreMobileResize" in e && (ht = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (zt(se) || zt(ie, e.autoRefreshEvents || "none"), ot = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function (t, e) {
                var i = F(t), s = _.indexOf(i), r = Bt(i);
                ~s && _.splice(s, r ? 6 : 2), e && (r ? x.unshift(q, e, W, e, j, e) : x.unshift(i, e))
            }, t.clearMatchMedia = function (t) {
                pe.forEach((function (e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                }))
            }, t.isInViewport = function (t, e, i) {
                var s = (Nt(t) ? F(t) : t).getBoundingClientRect(), r = s[i ? "width" : "height"] * e || 0;
                return i ? s.right - r > 0 && s.left + r < q.innerWidth : s.bottom - r > 0 && s.top + r < q.innerHeight
            }, t.positionInViewport = function (t, e, i) {
                Nt(t) && (t = F(t));
                var s = t.getBoundingClientRect(), r = s[i ? "width" : "height"],
                    n = null == e ? r / 2 : e in oe ? oe[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
                return i ? (s.left + n) / q.innerWidth : (s.top + n) / q.innerHeight
            }, t.killAll = function (t) {
                if (pe.slice(0).forEach((function (t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill()
                })), !0 !== t) {
                    var e = ve.killAll || [];
                    ve = {}, e.forEach((function (t) {
                        return t()
                    }))
                }
            }, t
        }();
    je.version = "3.12.2", je.saveStyles = function (t) {
        return t ? $(t).forEach((function (t) {
            if (t && t.style) {
                var e = xe.indexOf(t);
                e >= 0 && xe.splice(e, 5), xe.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), N.core.getCache(t), dt())
            }
        })) : xe
    }, je.revert = function (t, e) {
        return Ee(!t, e)
    }, je.create = function (t, e) {
        return new je(t, e)
    }, je.refresh = function (t) {
        return t ? ge() : (G || je.register()) && Te(!0)
    }, je.update = function (t) {
        return ++_.cache && Me(!0 === t ? 2 : 0)
    }, je.clearScrollMemory = Ce, je.maxScroll = function (t, e) {
        return Rt(t, e ? M : D)
    }, je.getScrollFunc = function (t, e) {
        return I(F(t), e ? M : D)
    }, je.getById = function (t) {
        return ce[t]
    }, je.getAll = function () {
        return pe.filter((function (t) {
            return "ScrollSmoother" !== t.vars.id
        }))
    }, je.isScrolling = function () {
        return !!kt
    }, je.snapDirectional = te, je.addEventListener = function (t, e) {
        var i = ve[t] || (ve[t] = []);
        ~i.indexOf(e) || i.push(e)
    }, je.removeEventListener = function (t, e) {
        var i = ve[t], s = i && i.indexOf(e);
        s >= 0 && i.splice(s, 1)
    }, je.batch = function (t, e) {
        var i, s = [], r = {}, n = e.interval || .016, a = e.batchMax || 1e9, o = function (t, e) {
            var i = [], s = [], r = N.delayedCall(n, (function () {
                e(i, s), i = [], s = []
            })).pause();
            return function (t) {
                i.length || r.restart(!0), i.push(t.trigger), s.push(t), a <= i.length && r.progress(1)
            }
        };
        for (i in e) r[i] = "on" === i.substr(0, 2) && Gt(e[i]) && "onRefreshInit" !== i ? o(0, e[i]) : e[i];
        return Gt(a) && (a = a(), ie(je, "refresh", (function () {
            return a = e.batchMax()
        }))), $(t).forEach((function (t) {
            var e = {};
            for (i in r) e[i] = r[i];
            e.trigger = t, s.push(je.create(e))
        })), s
    };
    var We, Ye = function (t, e, i, s) {
        return e > s ? t(s) : e < 0 && t(0), i > s ? (s - e) / (i - e) : i < 0 ? e / (e - i) : 1
    }, Xe = function t(e, i) {
        !0 === i ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (z.isTouch ? " pinch-zoom" : "") : "none", e === j && t(W, i)
    }, $e = {auto: 1, scroll: 1}, Ue = function (t) {
        var e, i = t.event, s = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target,
            a = n._gsap || N.core.getCache(n), o = Et();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; n && n !== W && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !$e[(e = Ut(n)).overflowY] && !$e[e.overflowX]);) n = n.parentNode;
            a._isScroll = n && n !== s && !Bt(n) && ($e[(e = Ut(n)).overflowY] || $e[e.overflowX]), a._isScrollT = o
        }
        (a._isScroll || "x" === r) && (i.stopPropagation(), i._gsapAllow = !0)
    }, Ke = function (t, e, i, s) {
        return z.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: s = s && Ue,
            onPress: s,
            onDrag: s,
            onScroll: s,
            onEnable: function () {
                return i && ie(H, z.eventTypes[0], Je, !1, !0)
            },
            onDisable: function () {
                return se(H, z.eventTypes[0], Je, !0)
            }
        })
    }, Ze = /(input|label|select|textarea)/i, Je = function (t) {
        var e = Ze.test(t.target.tagName);
        (e || We) && (t._gsapAllow = !0, We = e)
    }, Qe = function (t) {
        Ht(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
        var e, i, s, r, n, a, o, l, h = t, u = h.normalizeScrollX, p = h.momentum, c = h.allowNestedScroll,
            d = h.onRelease, f = F(t.target) || j, m = N.core.globals().ScrollSmoother, g = m && m.get(),
            v = ct && (t.content && F(t.content) || g && !1 !== t.content && !g.smooth() && g.content()), y = I(f, D),
            b = I(f, M), x = 1,
            S = (z.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth,
            E = 0, C = Gt(p) ? function () {
                return p(e)
            } : function () {
                return p || 2.8
            }, k = Ke(f, t.type, !0, c), w = function () {
                return r = !1
            }, T = Dt, P = Dt, A = function () {
                i = Rt(f, D), P = U(ct ? 1 : 0, i), u && (T = U(0, Rt(f, M))), s = ke
            }, L = function () {
                v._gsap.y = Ft(parseFloat(v._gsap.y) + y.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            }, B = function () {
                A(), n.isActive() && n.vars.scrollY > i && (y() > i ? n.progress(1) && y(i) : n.resetTo("scrollY", i))
            };
        return v && N.set(v, {y: "+=0"}), t.ignoreCheck = function (t) {
            return ct && "touchmove" === t.type && function () {
                if (r) {
                    requestAnimationFrame(w);
                    var t = Ft(e.deltaY / 2), i = P(y.v - t);
                    if (v && i !== y.v + y.offset) {
                        y.offset = i - y.v;
                        var s = Ft((parseFloat(v && v._gsap.y) || 0) - y.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + s + ", 0, 1)", v._gsap.y = s + "px", y.cacheID = _.cache, Me()
                    }
                    return !0
                }
                y.offset && L(), r = !0
            }() || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
        }, t.onPress = function () {
            r = !1;
            var t = x;
            x = Ft((q.visualViewport && q.visualViewport.scale || 1) / S), n.pause(), t !== x && Xe(f, x > 1.01 || !u && "x"), a = b(), o = y(), A(), s = ke
        }, t.onRelease = t.onGestureStart = function (t, e) {
            if (y.offset && L(), e) {
                _.cache++;
                var s, r, a = C();
                u && (r = (s = b()) + .05 * a * -t.velocityX / .227, a *= Ye(b, s, r, Rt(f, M)), n.vars.scrollX = T(r)), r = (s = y()) + .05 * a * -t.velocityY / .227, a *= Ye(y, s, r, Rt(f, D)), n.vars.scrollY = P(r), n.invalidate().duration(a).play(.01), (ct && n.vars.scrollY >= i || s >= i - 1) && N.to({}, {
                    onUpdate: B,
                    duration: a
                })
            } else l.restart(!0);
            d && d(t)
        }, t.onWheel = function () {
            n._ts && n.pause(), Et() - E > 1e3 && (s = 0, E = Et())
        }, t.onChange = function (t, e, i, r, n) {
            if (ke !== s && A(), e && u && b(T(r[2] === e ? a + (t.startX - t.x) : b() + e - r[1])), i) {
                y.offset && L();
                var l = n[2] === i, h = l ? o + t.startY - t.y : y() + i - n[1], p = P(h);
                l && h !== p && (o += p - h), y(p)
            }
            (i || e) && Me()
        }, t.onEnable = function () {
            Xe(f, !u && "x"), je.addEventListener("refresh", B), ie(q, "resize", B), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), k.enable()
        }, t.onDisable = function () {
            Xe(f, !0), se(q, "resize", B), je.removeEventListener("refresh", B), k.kill()
        }, t.lockAxis = !1 !== t.lockAxis, (e = new z(t)).iOS = ct, ct && !y() && y(1), ct && N.ticker.add(Dt), l = e._dc, n = N.to(e, {
            ease: "power4",
            paused: !0,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Ge(y, y(), (function () {
                    return n.pause()
                }))
            },
            onUpdate: Me,
            onComplete: l.vars.onComplete
        }), e
    };
    je.sort = function (t) {
        return pe.sort(t || function (t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, je.observe = function (t) {
        return new z(t)
    }, je.normalizeScroll = function (t) {
        if (void 0 === t) return lt;
        if (!0 === t && lt) return lt.enable();
        if (!1 === t) return lt && lt.kill();
        var e = t instanceof z ? t : Qe(t);
        return lt && lt.target === e.target && lt.kill(), Bt(e.target) && (lt = e), e
    }, je.core = {
        _getVelocityProp: L, _inputObserver: Ke, _scrollers: _, _proxies: x, bridge: {
            ss: function () {
                kt || _e("scrollStart"), kt = Et()
            }, ref: function () {
                return J
            }
        }
    }, Lt() && N.registerPlugin(je)
}, function (t, e, i) {
    "use strict";

    function s(t) {
        return "string" == typeof t || t instanceof String
    }

    function r(t) {
        var e;
        return "object" == typeof t && null != t && "Object" === (null == t || null == (e = t.constructor) ? void 0 : e.name)
    }

    function n(t, e) {
        return Array.isArray(e) ? n(t, (t, i) => e.includes(i)) : Object.entries(t).reduce((t, i) => {
            let [s, r] = i;
            return e(r, s) && (t[s] = r), t
        }, {})
    }

    i.d(e, "a", (function () {
        return f
    }));
    const a = "NONE", o = "LEFT", l = "FORCE_LEFT", h = "RIGHT", u = "FORCE_RIGHT";

    function p(t) {
        return t.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    }

    function c(t, e) {
        if (e === t) return !0;
        const i = Array.isArray(e), s = Array.isArray(t);
        let r;
        if (i && s) {
            if (e.length != t.length) return !1;
            for (r = 0; r < e.length; r++) if (!c(e[r], t[r])) return !1;
            return !0
        }
        if (i != s) return !1;
        if (e && t && "object" == typeof e && "object" == typeof t) {
            const i = e instanceof Date, s = t instanceof Date;
            if (i && s) return e.getTime() == t.getTime();
            if (i != s) return !1;
            const n = e instanceof RegExp, a = t instanceof RegExp;
            if (n && a) return e.toString() == t.toString();
            if (n != a) return !1;
            const o = Object.keys(e);
            for (r = 0; r < o.length; r++) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
            for (r = 0; r < o.length; r++) if (!c(t[o[r]], e[o[r]])) return !1;
            return !0
        }
        return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString()
    }

    class d {
        constructor(t) {
            for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
        }

        get startChangePos() {
            return Math.min(this.cursorPos, this.oldSelection.start)
        }

        get insertedCount() {
            return this.cursorPos - this.startChangePos
        }

        get inserted() {
            return this.value.substr(this.startChangePos, this.insertedCount)
        }

        get removedCount() {
            return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
        }

        get removed() {
            return this.oldValue.substr(this.startChangePos, this.removedCount)
        }

        get head() {
            return this.value.substring(0, this.startChangePos)
        }

        get tail() {
            return this.value.substring(this.startChangePos + this.insertedCount)
        }

        get removeDirection() {
            return !this.removedCount || this.insertedCount ? a : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? o : h
        }
    }

    function f(t, e) {
        return new f.InputMask(t, e)
    }

    function m(t) {
        if (null == t) throw new Error("mask property should be defined");
        return t instanceof RegExp ? f.MaskedRegExp : s(t) ? f.MaskedPattern : t === Date ? f.MaskedDate : t === Number ? f.MaskedNumber : Array.isArray(t) || t === Array ? f.MaskedDynamic : f.Masked && t.prototype instanceof f.Masked ? t : f.Masked && t instanceof f.Masked ? t.constructor : t instanceof Function ? f.MaskedFunction : (console.warn("Mask not found for mask", t), f.Masked)
    }

    function g(t) {
        if (!t) throw new Error("Options in not defined");
        if (f.Masked) {
            if (t.prototype instanceof f.Masked) return {mask: t};
            const {mask: e, ...i} = t instanceof f.Masked ? {mask: t} : r(t) && t.mask instanceof f.Masked ? t : {};
            if (e) {
                const t = e.mask;
                return {...n(e, (t, e) => !e.startsWith("_")), mask: e.constructor, _mask: t, ...i}
            }
        }
        return r(t) ? {...t} : {mask: t}
    }

    function v(t) {
        if (f.Masked && t instanceof f.Masked) return t;
        const e = g(t), i = m(e.mask);
        if (!i) throw new Error("Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask.");
        return e.mask === i && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new i(e)
    }

    f.createMask = v;

    class y {
        get selectionStart() {
            let t;
            try {
                t = this._unsafeSelectionStart
            } catch {
            }
            return null != t ? t : this.value.length
        }

        get selectionEnd() {
            let t;
            try {
                t = this._unsafeSelectionEnd
            } catch {
            }
            return null != t ? t : this.value.length
        }

        select(t, e) {
            if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
                this._unsafeSelect(t, e)
            } catch {
            }
        }

        get isActive() {
            return !1
        }
    }

    f.MaskElement = y;

    class b extends y {
        constructor(t) {
            super(), this.input = t, this._handlers = {}
        }

        get rootElement() {
            var t, e, i;
            return null != (t = null == (e = (i = this.input).getRootNode) ? void 0 : e.call(i)) ? t : document
        }

        get isActive() {
            return this.input === this.rootElement.activeElement
        }

        bindEvents(t) {
            Object.keys(t).forEach(e => this._toggleEventHandler(b.EVENTS_MAP[e], t[e]))
        }

        unbindEvents() {
            Object.keys(this._handlers).forEach(t => this._toggleEventHandler(t))
        }

        _toggleEventHandler(t, e) {
            this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e)
        }
    }

    b.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur"
    }, f.HTMLMaskElement = b;

    class _ extends b {
        constructor(t) {
            super(t), this.input = t, this._handlers = {}
        }

        get _unsafeSelectionStart() {
            return null != this.input.selectionStart ? this.input.selectionStart : this.value.length
        }

        get _unsafeSelectionEnd() {
            return this.input.selectionEnd
        }

        _unsafeSelect(t, e) {
            this.input.setSelectionRange(t, e)
        }

        get value() {
            return this.input.value
        }

        set value(t) {
            this.input.value = t
        }
    }

    f.HTMLMaskElement = b;

    class x extends b {
        get _unsafeSelectionStart() {
            const t = this.rootElement, e = t.getSelection && t.getSelection(), i = e && e.anchorOffset,
                s = e && e.focusOffset;
            return null == s || null == i || i < s ? i : s
        }

        get _unsafeSelectionEnd() {
            const t = this.rootElement, e = t.getSelection && t.getSelection(), i = e && e.anchorOffset,
                s = e && e.focusOffset;
            return null == s || null == i || i > s ? i : s
        }

        _unsafeSelect(t, e) {
            if (!this.rootElement.createRange) return;
            const i = this.rootElement.createRange();
            i.setStart(this.input.firstChild || this.input, t), i.setEnd(this.input.lastChild || this.input, e);
            const s = this.rootElement, r = s.getSelection && s.getSelection();
            r && (r.removeAllRanges(), r.addRange(i))
        }

        get value() {
            return this.input.textContent || ""
        }

        set value(t) {
            this.input.textContent = t
        }
    }

    f.HTMLContenteditableMaskElement = x;
    f.InputMask = class {
        constructor(t, e) {
            this.el = t instanceof y ? t : t.isContentEditable && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? new x(t) : new _(t), this.masked = v(e), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
        }

        maskEquals(t) {
            var e;
            return null == t || (null == (e = this.masked) ? void 0 : e.maskEquals(t))
        }

        get mask() {
            return this.masked.mask
        }

        set mask(t) {
            if (this.maskEquals(t)) return;
            if (!(t instanceof f.Masked) && this.masked.constructor === m(t)) return void this.masked.updateOptions({mask: t});
            const e = t instanceof f.Masked ? t : v({mask: t});
            e.unmaskedValue = this.masked.unmaskedValue, this.masked = e
        }

        get value() {
            return this._value
        }

        set value(t) {
            this.value !== t && (this.masked.value = t, this.updateControl(), this.alignCursor())
        }

        get unmaskedValue() {
            return this._unmaskedValue
        }

        set unmaskedValue(t) {
            this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor())
        }

        get typedValue() {
            return this.masked.typedValue
        }

        set typedValue(t) {
            this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl(), this.alignCursor())
        }

        get displayValue() {
            return this.masked.displayValue
        }

        _bindEvents() {
            this.el.bindEvents({
                selectionChange: this._saveSelection,
                input: this._onInput,
                drop: this._onDrop,
                click: this._onClick,
                focus: this._onFocus,
                commit: this._onChange
            })
        }

        _unbindEvents() {
            this.el && this.el.unbindEvents()
        }

        _fireEvent(t, e) {
            const i = this._listeners[t];
            i && i.forEach(t => t(e))
        }

        get selectionStart() {
            return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
        }

        get cursorPos() {
            return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
        }

        set cursorPos(t) {
            this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection())
        }

        _saveSelection() {
            this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
                start: this.selectionStart,
                end: this.cursorPos
            }
        }

        updateValue() {
            this.masked.value = this.el.value, this._value = this.masked.value
        }

        updateControl() {
            const t = this.masked.unmaskedValue, e = this.masked.value, i = this.displayValue,
                s = this.unmaskedValue !== t || this.value !== e;
            this._unmaskedValue = t, this._value = e, this.el.value !== i && (this.el.value = i), s && this._fireChangeEvents()
        }

        updateOptions(t) {
            const {mask: e, ...i} = t, s = !this.maskEquals(e), r = !c(this.masked, i);
            s && (this.mask = e), r && this.masked.updateOptions(i), (s || r) && this.updateControl()
        }

        updateCursor(t) {
            null != t && (this.cursorPos = t, this._delayUpdateCursor(t))
        }

        _delayUpdateCursor(t) {
            this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(() => {
                this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor())
            }, 10)
        }

        _fireChangeEvents() {
            this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
        }

        _abortUpdateCursor() {
            this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
        }

        alignCursor() {
            this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, o))
        }

        alignCursorFriendly() {
            this.selectionStart === this.cursorPos && this.alignCursor()
        }

        on(t, e) {
            return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
        }

        off(t, e) {
            if (!this._listeners[t]) return this;
            if (!e) return delete this._listeners[t], this;
            const i = this._listeners[t].indexOf(e);
            return i >= 0 && this._listeners[t].splice(i, 1), this
        }

        _onInput(t) {
            if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
            const e = new d({
                    value: this.el.value,
                    cursorPos: this.cursorPos,
                    oldValue: this.displayValue,
                    oldSelection: this._selection
                }), i = this.masked.rawInputValue,
                s = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection, {
                    input: !0,
                    raw: !0
                }).offset, r = i === this.masked.rawInputValue ? e.removeDirection : a;
            let n = this.masked.nearestInputPos(e.startChangePos + s, r);
            r !== a && (n = this.masked.nearestInputPos(n, a)), this.updateControl(), this.updateCursor(n), delete this._inputEvent
        }

        _onChange() {
            this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
        }

        _onDrop(t) {
            t.preventDefault(), t.stopPropagation()
        }

        _onFocus(t) {
            this.alignCursorFriendly()
        }

        _onClick(t) {
            this.alignCursorFriendly()
        }

        destroy() {
            this._unbindEvents(), this._listeners.length = 0, delete this.el
        }
    };

    class S {
        static normalize(t) {
            return Array.isArray(t) ? t : [t, new S]
        }

        constructor(t) {
            Object.assign(this, {inserted: "", rawInserted: "", skip: !1, tailShift: 0}, t)
        }

        aggregate(t) {
            return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this
        }

        get offset() {
            return this.tailShift + this.inserted.length
        }
    }

    f.ChangeDetails = S;

    class E {
        constructor(t, e, i) {
            void 0 === t && (t = ""), void 0 === e && (e = 0), this.value = t, this.from = e, this.stop = i
        }

        toString() {
            return this.value
        }

        extend(t) {
            this.value += String(t)
        }

        appendTo(t) {
            return t.append(this.toString(), {tail: !0}).aggregate(t._appendPlaceholder())
        }

        get state() {
            return {value: this.value, from: this.from, stop: this.stop}
        }

        set state(t) {
            Object.assign(this, t)
        }

        unshift(t) {
            if (!this.value.length || null != t && this.from >= t) return "";
            const e = this.value[0];
            return this.value = this.value.slice(1), e
        }

        shift() {
            if (!this.value.length) return "";
            const t = this.value[this.value.length - 1];
            return this.value = this.value.slice(0, -1), t
        }
    }

    class C {
        constructor(t) {
            this._value = "", this._update({...C.DEFAULTS, ...t}), this._initialized = !0
        }

        updateOptions(t) {
            Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t))
        }

        _update(t) {
            Object.assign(this, t)
        }

        get state() {
            return {_value: this.value, _rawInputValue: this.rawInputValue}
        }

        set state(t) {
            this._value = t._value
        }

        reset() {
            this._value = ""
        }

        get value() {
            return this._value
        }

        set value(t) {
            this.resolve(t, {input: !0})
        }

        resolve(t, e) {
            void 0 === e && (e = {input: !0}), this.reset(), this.append(t, e, ""), this.doCommit()
        }

        get unmaskedValue() {
            return this.value
        }

        set unmaskedValue(t) {
            this.resolve(t, {})
        }

        get typedValue() {
            return this.parse ? this.parse(this.value, this) : this.unmaskedValue
        }

        set typedValue(t) {
            this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t)
        }

        get rawInputValue() {
            return this.extractInput(0, this.displayValue.length, {raw: !0})
        }

        set rawInputValue(t) {
            this.resolve(t, {raw: !0})
        }

        get displayValue() {
            return this.value
        }

        get isComplete() {
            return !0
        }

        get isFilled() {
            return this.isComplete
        }

        nearestInputPos(t, e) {
            return t
        }

        totalInputPositions(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), Math.min(this.displayValue.length, e - t)
        }

        extractInput(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), this.displayValue.slice(t, e)
        }

        extractTail(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), new E(this.extractInput(t, e), t)
        }

        appendTail(t) {
            return s(t) && (t = new E(String(t))), t.appendTo(this)
        }

        _appendCharRaw(t, e) {
            return t ? (this._value += t, new S({inserted: t, rawInserted: t})) : new S
        }

        _appendChar(t, e, i) {
            void 0 === e && (e = {});
            const s = this.state;
            let r;
            if ([t, r] = this.doPrepareChar(t, e), r = r.aggregate(this._appendCharRaw(t, e)), r.inserted) {
                let t, n = !1 !== this.doValidate(e);
                if (n && null != i) {
                    const e = this.state;
                    !0 === this.overwrite && (t = i.state, i.unshift(this.displayValue.length - r.tailShift));
                    let s = this.appendTail(i);
                    n = s.rawInserted === i.toString(), n && s.inserted || "shift" !== this.overwrite || (this.state = e, t = i.state, i.shift(), s = this.appendTail(i), n = s.rawInserted === i.toString()), n && s.inserted && (this.state = e)
                }
                n || (r = new S, this.state = s, i && t && (i.state = t))
            }
            return r
        }

        _appendPlaceholder() {
            return new S
        }

        _appendEager() {
            return new S
        }

        append(t, e, i) {
            if (!s(t)) throw new Error("value should be string");
            const r = s(i) ? new E(String(i)) : i;
            let n;
            null != e && e.tail && (e._beforeTailState = this.state), [t, n] = this.doPrepare(t, e);
            for (let i = 0; i < t.length; ++i) {
                const s = this._appendChar(t[i], e, r);
                if (!s.rawInserted && !this.doSkipInvalid(t[i], e, r)) break;
                n.aggregate(s)
            }
            return (!0 === this.eager || "append" === this.eager) && null != e && e.input && t && n.aggregate(this._appendEager()), null != r && (n.tailShift += this.appendTail(r).tailShift), n
        }

        remove(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(e), new S
        }

        withValueRefresh(t) {
            if (this._refreshing || !this._initialized) return t();
            this._refreshing = !0;
            const e = this.rawInputValue, i = this.value, s = t();
            return this.rawInputValue = e, this.value && this.value !== i && 0 === i.indexOf(this.value) && this.append(i.slice(this.displayValue.length), {}, ""), delete this._refreshing, s
        }

        runIsolated(t) {
            if (this._isolated || !this._initialized) return t(this);
            this._isolated = !0;
            const e = this.state, i = t(this);
            return this.state = e, delete this._isolated, i
        }

        doSkipInvalid(t, e, i) {
            return Boolean(this.skipInvalid)
        }

        doPrepare(t, e) {
            return void 0 === e && (e = {}), S.normalize(this.prepare ? this.prepare(t, this, e) : t)
        }

        doPrepareChar(t, e) {
            return void 0 === e && (e = {}), S.normalize(this.prepareChar ? this.prepareChar(t, this, e) : t)
        }

        doValidate(t) {
            return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
        }

        doCommit() {
            this.commit && this.commit(this.value, this)
        }

        splice(t, e, i, s, r) {
            void 0 === s && (s = a), void 0 === r && (r = {input: !0});
            const n = t + e, p = this.extractTail(n), c = !0 === this.eager || "remove" === this.eager;
            let d;
            c && (s = function (t) {
                switch (t) {
                    case o:
                        return l;
                    case h:
                        return u;
                    default:
                        return t
                }
            }(s), d = this.extractInput(0, n, {raw: !0}));
            let f = t;
            const m = new S;
            if (s !== a && (f = this.nearestInputPos(t, e > 1 && 0 !== t && !c ? a : s), m.tailShift = f - t), m.aggregate(this.remove(f)), c && s !== a && d === this.rawInputValue) if (s === l) {
                let t;
                for (; d === this.rawInputValue && (t = this.displayValue.length);) m.aggregate(new S({tailShift: -1})).aggregate(this.remove(t - 1))
            } else s === u && p.unshift();
            return m.aggregate(this.append(i, r, p))
        }

        maskEquals(t) {
            return this.mask === t
        }

        typedValueEquals(t) {
            const e = this.typedValue;
            return t === e || C.EMPTY_VALUES.includes(t) && C.EMPTY_VALUES.includes(e) || !!this.format && this.format(t, this) === this.format(this.typedValue, this)
        }
    }

    C.DEFAULTS = {skipInvalid: !0}, C.EMPTY_VALUES = [void 0, null, ""], f.Masked = C;

    class k {
        constructor(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0), this.chunks = t, this.from = e
        }

        toString() {
            return this.chunks.map(String).join("")
        }

        extend(t) {
            if (!String(t)) return;
            t = s(t) ? new E(String(t)) : t;
            const e = this.chunks[this.chunks.length - 1],
                i = e && (e.stop === t.stop || null == t.stop) && t.from === e.from + e.toString().length;
            if (t instanceof E) i ? e.extend(t.toString()) : this.chunks.push(t); else if (t instanceof k) {
                if (null == t.stop) {
                    let e;
                    for (; t.chunks.length && null == t.chunks[0].stop;) e = t.chunks.shift(), e.from += t.from, this.extend(e)
                }
                t.toString() && (t.stop = t.blockIndex, this.chunks.push(t))
            }
        }

        appendTo(t) {
            if (!(t instanceof f.MaskedPattern)) {
                return new E(this.toString()).appendTo(t)
            }
            const e = new S;
            for (let i = 0; i < this.chunks.length && !e.skip; ++i) {
                const s = this.chunks[i], r = t._mapPosToBlock(t.displayValue.length), n = s.stop;
                let a;
                if (null != n && (!r || r.index <= n)) {
                    if (s instanceof k || t._stops.indexOf(n) >= 0) {
                        const i = t._appendPlaceholder(n);
                        e.aggregate(i)
                    }
                    a = s instanceof k && t._blocks[n]
                }
                if (a) {
                    const i = a.appendTail(s);
                    i.skip = !1, e.aggregate(i), t._value += i.inserted;
                    const r = s.toString().slice(i.rawInserted.length);
                    r && e.aggregate(t.append(r, {tail: !0}))
                } else e.aggregate(t.append(s.toString(), {tail: !0}))
            }
            return e
        }

        get state() {
            return {
                chunks: this.chunks.map(t => t.state),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex
            }
        }

        set state(t) {
            const {chunks: e, ...i} = t;
            Object.assign(this, i), this.chunks = e.map(t => {
                const e = "chunks" in t ? new k : new E;
                return e.state = t, e
            })
        }

        unshift(t) {
            if (!this.chunks.length || null != t && this.from >= t) return "";
            const e = null != t ? t - this.from : t;
            let i = 0;
            for (; i < this.chunks.length;) {
                const t = this.chunks[i], s = t.unshift(e);
                if (t.toString()) {
                    if (!s) break;
                    ++i
                } else this.chunks.splice(i, 1);
                if (s) return s
            }
            return ""
        }

        shift() {
            if (!this.chunks.length) return "";
            let t = this.chunks.length - 1;
            for (; 0 <= t;) {
                const e = this.chunks[t], i = e.shift();
                if (e.toString()) {
                    if (!i) break;
                    --t
                } else this.chunks.splice(t, 1);
                if (i) return i
            }
            return ""
        }
    }

    class w {
        constructor(t, e) {
            this.masked = t, this._log = [];
            const {offset: i, index: s} = t._mapPosToBlock(e) || (e < 0 ? {
                index: 0,
                offset: 0
            } : {index: this.masked._blocks.length, offset: 0});
            this.offset = i, this.index = s, this.ok = !1
        }

        get block() {
            return this.masked._blocks[this.index]
        }

        get pos() {
            return this.masked._blockStartPos(this.index) + this.offset
        }

        get state() {
            return {index: this.index, offset: this.offset, ok: this.ok}
        }

        set state(t) {
            Object.assign(this, t)
        }

        pushState() {
            this._log.push(this.state)
        }

        popState() {
            const t = this._log.pop();
            return t && (this.state = t), t
        }

        bindBlock() {
            this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length))
        }

        _pushLeft(t) {
            for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null == (e = this.block) ? void 0 : e.displayValue.length) || 0) {
                var e;
                if (t()) return this.ok = !0
            }
            return this.ok = !1
        }

        _pushRight(t) {
            for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (t()) return this.ok = !0;
            return this.ok = !1
        }

        pushLeftBeforeFilled() {
            return this._pushLeft(() => {
                if (!this.block.isFixed && this.block.value) return this.offset = this.block.nearestInputPos(this.offset, l), 0 !== this.offset || void 0
            })
        }

        pushLeftBeforeInput() {
            return this._pushLeft(() => {
                if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, o), !0
            })
        }

        pushLeftBeforeRequired() {
            return this._pushLeft(() => {
                if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, o), !0
            })
        }

        pushRightBeforeFilled() {
            return this._pushRight(() => {
                if (!this.block.isFixed && this.block.value) return this.offset = this.block.nearestInputPos(this.offset, u), this.offset !== this.block.value.length || void 0
            })
        }

        pushRightBeforeInput() {
            return this._pushRight(() => {
                if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, a), !0
            })
        }

        pushRightBeforeRequired() {
            return this._pushRight(() => {
                if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, a), !0
            })
        }
    }

    class T {
        constructor(t) {
            Object.assign(this, t), this._value = "", this.isFixed = !0
        }

        get value() {
            return this._value
        }

        get unmaskedValue() {
            return this.isUnmasking ? this.value : ""
        }

        get rawInputValue() {
            return this._isRawInput ? this.value : ""
        }

        get displayValue() {
            return this.value
        }

        reset() {
            this._isRawInput = !1, this._value = ""
        }

        remove(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new S
        }

        nearestInputPos(t, e) {
            void 0 === e && (e = a);
            const i = this._value.length;
            switch (e) {
                case o:
                case l:
                    return 0;
                case a:
                case h:
                case u:
                default:
                    return i
            }
        }

        totalInputPositions(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this._value.length), this._isRawInput ? e - t : 0
        }

        extractInput(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = this._value.length), void 0 === i && (i = {}), i.raw && this._isRawInput && this._value.slice(t, e) || ""
        }

        get isComplete() {
            return !0
        }

        get isFilled() {
            return Boolean(this._value)
        }

        _appendChar(t, e) {
            void 0 === e && (e = {});
            const i = new S;
            if (this.isFilled) return i;
            const s = !0 === this.eager || "append" === this.eager,
                r = this.char === t && (this.isUnmasking || e.input || e.raw) && (!e.raw || !s) && !e.tail;
            return r && (i.rawInserted = this.char), this._value = i.inserted = this.char, this._isRawInput = r && (e.raw || e.input), i
        }

        _appendEager() {
            return this._appendChar(this.char, {tail: !0})
        }

        _appendPlaceholder() {
            const t = new S;
            return this.isFilled || (this._value = t.inserted = this.char), t
        }

        extractTail() {
            return new E("")
        }

        appendTail(t) {
            return s(t) && (t = new E(String(t))), t.appendTo(this)
        }

        append(t, e, i) {
            const s = this._appendChar(t[0], e);
            return null != i && (s.tailShift += this.appendTail(i).tailShift), s
        }

        doCommit() {
        }

        get state() {
            return {_value: this._value, _rawInputValue: this.rawInputValue}
        }

        set state(t) {
            this._value = t._value, this._isRawInput = Boolean(t._rawInputValue)
        }
    }

    class P {
        constructor(t) {
            const {parent: e, isOptional: i, placeholderChar: s, displayChar: r, lazy: n, eager: a, ...o} = t;
            this.masked = v(o), Object.assign(this, {
                parent: e,
                isOptional: i,
                placeholderChar: s,
                displayChar: r,
                lazy: n,
                eager: a
            })
        }

        reset() {
            this.isFilled = !1, this.masked.reset()
        }

        remove(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.value.length), 0 === t && e >= 1 ? (this.isFilled = !1, this.masked.remove(t, e)) : new S
        }

        get value() {
            return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
        }

        get unmaskedValue() {
            return this.masked.unmaskedValue
        }

        get rawInputValue() {
            return this.masked.rawInputValue
        }

        get displayValue() {
            return this.masked.value && this.displayChar || this.value
        }

        get isComplete() {
            return Boolean(this.masked.value) || this.isOptional
        }

        _appendChar(t, e) {
            if (void 0 === e && (e = {}), this.isFilled) return new S;
            const i = this.masked.state, s = this.masked._appendChar(t, this.currentMaskFlags(e));
            return s.inserted && !1 === this.doValidate(e) && (s.inserted = s.rawInserted = "", this.masked.state = i), s.inserted || this.isOptional || this.lazy || e.input || (s.inserted = this.placeholderChar), s.skip = !s.inserted && !this.isOptional, this.isFilled = Boolean(s.inserted), s
        }

        append(t, e, i) {
            return this.masked.append(t, this.currentMaskFlags(e), i)
        }

        _appendPlaceholder() {
            const t = new S;
            return this.isFilled || this.isOptional || (this.isFilled = !0, t.inserted = this.placeholderChar), t
        }

        _appendEager() {
            return new S
        }

        extractTail(t, e) {
            return this.masked.extractTail(t, e)
        }

        appendTail(t) {
            return this.masked.appendTail(t)
        }

        extractInput(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.value.length), this.masked.extractInput(t, e, i)
        }

        nearestInputPos(t, e) {
            void 0 === e && (e = a);
            const i = this.value.length, s = Math.min(Math.max(t, 0), i);
            switch (e) {
                case o:
                case l:
                    return this.isComplete ? s : 0;
                case h:
                case u:
                    return this.isComplete ? s : i;
                case a:
                default:
                    return s
            }
        }

        totalInputPositions(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.value.length), this.value.slice(t, e).length
        }

        doValidate(t) {
            return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)))
        }

        doCommit() {
            this.masked.doCommit()
        }

        get state() {
            return {
                _value: this.value,
                _rawInputValue: this.rawInputValue,
                masked: this.masked.state,
                isFilled: this.isFilled
            }
        }

        set state(t) {
            this.masked.state = t.masked, this.isFilled = t.isFilled
        }

        currentMaskFlags(t) {
            var e;
            return {
                ...t,
                _beforeTailState: (null == t || null == (e = t._beforeTailState) ? void 0 : e.masked) || (null == t ? void 0 : t._beforeTailState)
            }
        }
    }

    P.DEFAULT_DEFINITIONS = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./
    };
    f.MaskedRegExp = class extends C {
        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            const e = t.mask;
            e && (t.validate = t => t.search(e) >= 0), super._update(t)
        }
    };

    class A extends C {
        constructor(t) {
            super({
                ...A.DEFAULTS, ...t,
                definitions: Object.assign({}, P.DEFAULT_DEFINITIONS, null == t ? void 0 : t.definitions)
            })
        }

        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            t.definitions = Object.assign({}, this.definitions, t.definitions), super._update(t), this._rebuildMask()
        }

        _rebuildMask() {
            const t = this.definitions;
            this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
            const e = this.mask;
            if (!e || !t) return;
            let i = !1, s = !1;
            for (let r = 0; r < e.length; ++r) {
                if (this.blocks) {
                    const t = e.slice(r), i = Object.keys(this.blocks).filter(e => 0 === t.indexOf(e));
                    i.sort((t, e) => e.length - t.length);
                    const s = i[0];
                    if (s) {
                        const {expose: t, ...e} = g(this.blocks[s]), i = v({
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            displayChar: this.displayChar,
                            overwrite: this.overwrite, ...e,
                            parent: this
                        });
                        i && (this._blocks.push(i), t && (this.exposeBlock = i), this._maskedBlocks[s] || (this._maskedBlocks[s] = []), this._maskedBlocks[s].push(this._blocks.length - 1)), r += s.length - 1;
                        continue
                    }
                }
                let n = e[r], a = n in t;
                if (n === A.STOP_CHAR) {
                    this._stops.push(this._blocks.length);
                    continue
                }
                if ("{" === n || "}" === n) {
                    i = !i;
                    continue
                }
                if ("[" === n || "]" === n) {
                    s = !s;
                    continue
                }
                if (n === A.ESCAPE_CHAR) {
                    if (++r, n = e[r], !n) break;
                    a = !1
                }
                const o = a ? new P({
                    isOptional: s,
                    lazy: this.lazy,
                    eager: this.eager,
                    placeholderChar: this.placeholderChar,
                    displayChar: this.displayChar, ...g(t[n]),
                    parent: this
                }) : new T({char: n, eager: this.eager, isUnmasking: i});
                this._blocks.push(o)
            }
        }

        get state() {
            return {...super.state, _blocks: this._blocks.map(t => t.state)}
        }

        set state(t) {
            const {_blocks: e, ...i} = t;
            this._blocks.forEach((t, i) => t.state = e[i]), super.state = i
        }

        reset() {
            super.reset(), this._blocks.forEach(t => t.reset())
        }

        get isComplete() {
            return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(t => t.isComplete)
        }

        get isFilled() {
            return this._blocks.every(t => t.isFilled)
        }

        get isFixed() {
            return this._blocks.every(t => t.isFixed)
        }

        get isOptional() {
            return this._blocks.every(t => t.isOptional)
        }

        doCommit() {
            this._blocks.forEach(t => t.doCommit()), super.doCommit()
        }

        get unmaskedValue() {
            return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((t, e) => t + e.unmaskedValue, "")
        }

        set unmaskedValue(t) {
            if (this.exposeBlock) {
                const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
                this.exposeBlock.unmaskedValue = t, this.appendTail(e), this.doCommit()
            } else super.unmaskedValue = t
        }

        get value() {
            return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((t, e) => t + e.value, "")
        }

        set value(t) {
            if (this.exposeBlock) {
                const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
                this.exposeBlock.value = t, this.appendTail(e), this.doCommit()
            } else super.value = t
        }

        get typedValue() {
            return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue
        }

        set typedValue(t) {
            if (this.exposeBlock) {
                const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
                this.exposeBlock.typedValue = t, this.appendTail(e), this.doCommit()
            } else super.typedValue = t
        }

        get displayValue() {
            return this._blocks.reduce((t, e) => t + e.displayValue, "")
        }

        appendTail(t) {
            return super.appendTail(t).aggregate(this._appendPlaceholder())
        }

        _appendEager() {
            var t;
            const e = new S;
            let i = null == (t = this._mapPosToBlock(this.displayValue.length)) ? void 0 : t.index;
            if (null == i) return e;
            this._blocks[i].isFilled && ++i;
            for (let t = i; t < this._blocks.length; ++t) {
                const i = this._blocks[t]._appendEager();
                if (!i.inserted) break;
                e.aggregate(i)
            }
            return e
        }

        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const i = this._mapPosToBlock(this.displayValue.length), s = new S;
            if (!i) return s;
            for (let n = i.index; ; ++n) {
                var r;
                const i = this._blocks[n];
                if (!i) break;
                const a = i._appendChar(t, {
                    ...e,
                    _beforeTailState: null == (r = e._beforeTailState) || null == (r = r._blocks) ? void 0 : r[n]
                }), o = a.skip;
                if (s.aggregate(a), o || a.rawInserted) break
            }
            return s
        }

        extractTail(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length);
            const i = new k;
            return t === e || this._forEachBlocksInRange(t, e, (t, e, s, r) => {
                const n = t.extractTail(s, r);
                n.stop = this._findStopBefore(e), n.from = this._blockStartPos(e), n instanceof k && (n.blockIndex = e), i.extend(n)
            }), i
        }

        extractInput(t, e, i) {
            if (void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), void 0 === i && (i = {}), t === e) return "";
            let s = "";
            return this._forEachBlocksInRange(t, e, (t, e, r, n) => {
                s += t.extractInput(r, n, i)
            }), s
        }

        _findStopBefore(t) {
            let e;
            for (let i = 0; i < this._stops.length; ++i) {
                const s = this._stops[i];
                if (!(s <= t)) break;
                e = s
            }
            return e
        }

        _appendPlaceholder(t) {
            const e = new S;
            if (this.lazy && null == t) return e;
            const i = this._mapPosToBlock(this.displayValue.length);
            if (!i) return e;
            const s = i.index, r = null != t ? t : this._blocks.length;
            return this._blocks.slice(s, r).forEach(i => {
                if (!i.lazy || null != t) {
                    var s;
                    const t = i._appendPlaceholder(null == (s = i._blocks) ? void 0 : s.length);
                    this._value += t.inserted, e.aggregate(t)
                }
            }), e
        }

        _mapPosToBlock(t) {
            let e = "";
            for (let i = 0; i < this._blocks.length; ++i) {
                const s = this._blocks[i], r = e.length;
                if (e += s.displayValue, t <= e.length) return {index: i, offset: t - r}
            }
        }

        _blockStartPos(t) {
            return this._blocks.slice(0, t).reduce((t, e) => t + e.displayValue.length, 0)
        }

        _forEachBlocksInRange(t, e, i) {
            void 0 === e && (e = this.displayValue.length);
            const s = this._mapPosToBlock(t);
            if (s) {
                const t = this._mapPosToBlock(e), r = t && s.index === t.index, n = s.offset,
                    a = t && r ? t.offset : this._blocks[s.index].displayValue.length;
                if (i(this._blocks[s.index], s.index, n, a), t && !r) {
                    for (let e = s.index + 1; e < t.index; ++e) i(this._blocks[e], e, 0, this._blocks[e].displayValue.length);
                    i(this._blocks[t.index], t.index, 0, t.offset)
                }
            }
        }

        remove(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length);
            const i = super.remove(t, e);
            return this._forEachBlocksInRange(t, e, (t, e, s, r) => {
                i.aggregate(t.remove(s, r))
            }), i
        }

        nearestInputPos(t, e) {
            if (void 0 === e && (e = a), !this._blocks.length) return 0;
            const i = new w(this, t);
            if (e === a) return i.pushRightBeforeInput() ? i.pos : (i.popState(), i.pushLeftBeforeInput() ? i.pos : this.displayValue.length);
            if (e === o || e === l) {
                if (e === o) {
                    if (i.pushRightBeforeFilled(), i.ok && i.pos === t) return t;
                    i.popState()
                }
                if (i.pushLeftBeforeInput(), i.pushLeftBeforeRequired(), i.pushLeftBeforeFilled(), e === o) {
                    if (i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.ok && i.pos <= t) return i.pos;
                    if (i.popState(), i.ok && i.pos <= t) return i.pos;
                    i.popState()
                }
                return i.ok ? i.pos : e === l ? 0 : (i.popState(), i.ok ? i.pos : (i.popState(), i.ok ? i.pos : 0))
            }
            return e === h || e === u ? (i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.pushRightBeforeFilled() ? i.pos : e === u ? this.displayValue.length : (i.popState(), i.ok ? i.pos : (i.popState(), i.ok ? i.pos : this.nearestInputPos(t, o)))) : t
        }

        totalInputPositions(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length);
            let i = 0;
            return this._forEachBlocksInRange(t, e, (t, e, s, r) => {
                i += t.totalInputPositions(s, r)
            }), i
        }

        maskedBlock(t) {
            return this.maskedBlocks(t)[0]
        }

        maskedBlocks(t) {
            const e = this._maskedBlocks[t];
            return e ? e.map(t => this._blocks[t]) : []
        }
    }

    A.DEFAULTS = {
        lazy: !0,
        placeholderChar: "_"
    }, A.STOP_CHAR = "`", A.ESCAPE_CHAR = "\\", A.InputDefinition = P, A.FixedDefinition = T, f.MaskedPattern = A;

    class M extends A {
        get _matchFrom() {
            return this.maxLength - String(this.from).length
        }

        constructor(t) {
            super(t)
        }

        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            const {
                to: e = this.to || 0,
                from: i = this.from || 0,
                maxLength: s = this.maxLength || 0,
                autofix: r = this.autofix,
                ...n
            } = t;
            this.to = e, this.from = i, this.maxLength = Math.max(String(e).length, s), this.autofix = r;
            const a = String(this.from).padStart(this.maxLength, "0"),
                o = String(this.to).padStart(this.maxLength, "0");
            let l = 0;
            for (; l < o.length && o[l] === a[l];) ++l;
            n.mask = o.slice(0, l).replace(/0/g, "\\0") + "0".repeat(this.maxLength - l), super._update(n)
        }

        get isComplete() {
            return super.isComplete && Boolean(this.value)
        }

        boundaries(t) {
            let e = "", i = "";
            const [, s, r] = t.match(/^(\D*)(\d*)(\D*)/) || [];
            return r && (e = "0".repeat(s.length) + r, i = "9".repeat(s.length) + r), e = e.padEnd(this.maxLength, "0"), i = i.padEnd(this.maxLength, "9"), [e, i]
        }

        doPrepareChar(t, e) {
            let i;
            if (void 0 === e && (e = {}), [t, i] = super.doPrepareChar(t.replace(/\D/g, ""), e), !this.autofix || !t) return [t, i];
            const s = String(this.from).padStart(this.maxLength, "0"),
                r = String(this.to).padStart(this.maxLength, "0"), n = this.value + t;
            if (n.length > this.maxLength) return ["", i];
            const [a, o] = this.boundaries(n);
            return Number(o) < this.from ? [s[n.length - 1], i] : Number(a) > this.to ? "pad" === this.autofix && n.length < this.maxLength ? ["", i.aggregate(this.append(s[n.length - 1] + t, e))] : [r[n.length - 1], i] : [t, i]
        }

        doValidate(t) {
            const e = this.value;
            if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;
            const [i, s] = this.boundaries(e);
            return this.from <= Number(s) && Number(i) <= this.to && super.doValidate(t)
        }
    }

    f.MaskedRange = M;

    class D extends A {
        constructor(t) {
            const {mask: e, pattern: i, ...r} = {...D.DEFAULTS, ...t};
            super({...r, mask: s(e) ? e : i})
        }

        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            const {mask: e, pattern: i, blocks: r, ...n} = {...D.DEFAULTS, ...t},
                a = Object.assign({}, D.GET_DEFAULT_BLOCKS());
            t.min && (a.Y.from = t.min.getFullYear()), t.max && (a.Y.to = t.max.getFullYear()), t.min && t.max && a.Y.from === a.Y.to && (a.m.from = t.min.getMonth() + 1, a.m.to = t.max.getMonth() + 1, a.m.from === a.m.to && (a.d.from = t.min.getDate(), a.d.to = t.max.getDate())), Object.assign(a, this.blocks, r), Object.keys(a).forEach(e => {
                const i = a[e];
                !("autofix" in i) && "autofix" in t && (i.autofix = t.autofix)
            }), super._update({...n, mask: s(e) ? e : i, blocks: a})
        }

        doValidate(t) {
            const e = this.date;
            return super.doValidate(t) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
        }

        isDateExist(t) {
            return this.format(this.parse(t, this), this).indexOf(t) >= 0
        }

        get date() {
            return this.typedValue
        }

        set date(t) {
            this.typedValue = t
        }

        get typedValue() {
            return this.isComplete ? super.typedValue : null
        }

        set typedValue(t) {
            super.typedValue = t
        }

        maskEquals(t) {
            return t === Date || super.maskEquals(t)
        }
    }

    D.GET_DEFAULT_BLOCKS = () => ({
        d: {mask: M, from: 1, to: 31, maxLength: 2},
        m: {mask: M, from: 1, to: 12, maxLength: 2},
        Y: {mask: M, from: 1900, to: 9999}
    }), D.DEFAULTS = {
        mask: Date, pattern: "d{.}`m{.}`Y", format: (t, e) => {
            if (!t) return "";
            return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".")
        }, parse: (t, e) => {
            const [i, s, r] = t.split(".").map(Number);
            return new Date(r, s - 1, i)
        }
    }, f.MaskedDate = D;

    class F extends C {
        constructor(t) {
            super({...F.DEFAULTS, ...t}), this.currentMask = void 0
        }

        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            super._update(t), "mask" in t && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(t => {
                const {expose: e, ...i} = g(t),
                    s = v({overwrite: this._overwrite, eager: this._eager, skipInvalid: this._skipInvalid, ...i});
                return e && (this.exposeMask = s), s
            }) : [])
        }

        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const i = this._applyDispatch(t, e);
            return this.currentMask && i.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))), i
        }

        _applyDispatch(t, e, i) {
            void 0 === t && (t = ""), void 0 === e && (e = {}), void 0 === i && (i = "");
            const s = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
                r = this.rawInputValue,
                n = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : r, a = r.slice(n.length),
                o = this.currentMask, l = new S, h = null == o ? void 0 : o.state;
            if (this.currentMask = this.doDispatch(t, {...e}, i), this.currentMask) if (this.currentMask !== o) {
                if (this.currentMask.reset(), n) {
                    const t = this.currentMask.append(n, {raw: !0});
                    l.tailShift = t.inserted.length - s.length
                }
                a && (l.tailShift += this.currentMask.append(a, {raw: !0, tail: !0}).tailShift)
            } else h && (this.currentMask.state = h);
            return l
        }

        _appendPlaceholder() {
            const t = this._applyDispatch();
            return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t
        }

        _appendEager() {
            const t = this._applyDispatch();
            return this.currentMask && t.aggregate(this.currentMask._appendEager()), t
        }

        appendTail(t) {
            const e = new S;
            return t && e.aggregate(this._applyDispatch("", {}, t)), e.aggregate(this.currentMask ? this.currentMask.appendTail(t) : super.appendTail(t))
        }

        currentMaskFlags(t) {
            var e, i;
            return {
                ...t,
                _beforeTailState: (null == (e = t._beforeTailState) ? void 0 : e.currentMaskRef) === this.currentMask && (null == (i = t._beforeTailState) ? void 0 : i.currentMask) || t._beforeTailState
            }
        }

        doDispatch(t, e, i) {
            return void 0 === e && (e = {}), void 0 === i && (i = ""), this.dispatch(t, this, e, i)
        }

        doValidate(t) {
            return super.doValidate(t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)))
        }

        doPrepare(t, e) {
            void 0 === e && (e = {});
            let [i, s] = super.doPrepare(t, e);
            if (this.currentMask) {
                let t;
                [i, t] = super.doPrepare(i, this.currentMaskFlags(e)), s = s.aggregate(t)
            }
            return [i, s]
        }

        doPrepareChar(t, e) {
            void 0 === e && (e = {});
            let [i, s] = super.doPrepareChar(t, e);
            if (this.currentMask) {
                let t;
                [i, t] = super.doPrepareChar(i, this.currentMaskFlags(e)), s = s.aggregate(t)
            }
            return [i, s]
        }

        reset() {
            var t;
            null == (t = this.currentMask) || t.reset(), this.compiledMasks.forEach(t => t.reset())
        }

        get value() {
            return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : ""
        }

        set value(t) {
            this.exposeMask ? (this.exposeMask.value = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = t
        }

        get unmaskedValue() {
            return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : ""
        }

        set unmaskedValue(t) {
            this.exposeMask ? (this.exposeMask.unmaskedValue = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = t
        }

        get typedValue() {
            return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : ""
        }

        set typedValue(t) {
            if (this.exposeMask) return this.exposeMask.typedValue = t, this.currentMask = this.exposeMask, void this._applyDispatch();
            let e = String(t);
            this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e
        }

        get displayValue() {
            return this.currentMask ? this.currentMask.displayValue : ""
        }

        get isComplete() {
            var t;
            return Boolean(null == (t = this.currentMask) ? void 0 : t.isComplete)
        }

        get isFilled() {
            var t;
            return Boolean(null == (t = this.currentMask) ? void 0 : t.isFilled)
        }

        remove(t, e) {
            const i = new S;
            return this.currentMask && i.aggregate(this.currentMask.remove(t, e)).aggregate(this._applyDispatch()), i
        }

        get state() {
            var t;
            return {
                ...super.state,
                _rawInputValue: this.rawInputValue,
                compiledMasks: this.compiledMasks.map(t => t.state),
                currentMaskRef: this.currentMask,
                currentMask: null == (t = this.currentMask) ? void 0 : t.state
            }
        }

        set state(t) {
            const {compiledMasks: e, currentMaskRef: i, currentMask: s, ...r} = t;
            e && this.compiledMasks.forEach((t, i) => t.state = e[i]), null != i && (this.currentMask = i, this.currentMask.state = s), super.state = r
        }

        extractInput(t, e, i) {
            return this.currentMask ? this.currentMask.extractInput(t, e, i) : ""
        }

        extractTail(t, e) {
            return this.currentMask ? this.currentMask.extractTail(t, e) : super.extractTail(t, e)
        }

        doCommit() {
            this.currentMask && this.currentMask.doCommit(), super.doCommit()
        }

        nearestInputPos(t, e) {
            return this.currentMask ? this.currentMask.nearestInputPos(t, e) : super.nearestInputPos(t, e)
        }

        get overwrite() {
            return this.currentMask ? this.currentMask.overwrite : this._overwrite
        }

        set overwrite(t) {
            this._overwrite = t
        }

        get eager() {
            return this.currentMask ? this.currentMask.eager : this._eager
        }

        set eager(t) {
            this._eager = t
        }

        get skipInvalid() {
            return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid
        }

        set skipInvalid(t) {
            this._skipInvalid = t
        }

        maskEquals(t) {
            return Array.isArray(t) ? this.compiledMasks.every((e, i) => {
                if (!t[i]) return;
                const {mask: s, ...r} = t[i];
                return c(e, r) && e.maskEquals(s)
            }) : super.maskEquals(t)
        }

        typedValueEquals(t) {
            var e;
            return Boolean(null == (e = this.currentMask) ? void 0 : e.typedValueEquals(t))
        }
    }

    F.DEFAULTS = void 0, F.DEFAULTS = {
        dispatch: (t, e, i, s) => {
            if (!e.compiledMasks.length) return;
            const r = e.rawInputValue, n = e.compiledMasks.map((n, a) => {
                const o = e.currentMask === n,
                    h = o ? n.displayValue.length : n.nearestInputPos(n.displayValue.length, l);
                return n.rawInputValue !== r ? (n.reset(), n.append(r, {raw: !0})) : o || n.remove(h), n.append(t, e.currentMaskFlags(i)), n.appendTail(s), {
                    index: a,
                    weight: n.rawInputValue.length,
                    totalInputPositions: n.totalInputPositions(0, Math.max(h, n.nearestInputPos(n.displayValue.length, l)))
                }
            });
            return n.sort((t, e) => e.weight - t.weight || e.totalInputPositions - t.totalInputPositions), e.compiledMasks[n[0].index]
        }
    }, f.MaskedDynamic = F;
    f.MaskedEnum = class extends A {
        constructor(t) {
            super(t)
        }

        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            const {enum: e, ...i} = t;
            if (e) {
                const t = e.map(t => t.length), s = Math.min(...t), r = Math.max(...t) - s;
                i.mask = "*".repeat(s), r && (i.mask += "[" + "*".repeat(r) + "]"), this.enum = e
            }
            super._update(i)
        }

        doValidate(t) {
            return this.enum.some(t => 0 === t.indexOf(this.unmaskedValue)) && super.doValidate(t)
        }
    };
    f.MaskedFunction = class extends C {
        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            super._update({...t, validate: t.mask})
        }
    };

    class I extends C {
        constructor(t) {
            super({...I.DEFAULTS, ...t})
        }

        updateOptions(t) {
            super.updateOptions(t)
        }

        _update(t) {
            super._update(t), this._updateRegExps()
        }

        _updateRegExps() {
            const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                e = (this.scale ? "(" + p(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
            this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(p).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(p(this.thousandsSeparator), "g")
        }

        _removeThousandsSeparators(t) {
            return t.replace(this._thousandsSeparatorRegExp, "")
        }

        _insertThousandsSeparators(t) {
            const e = t.split(this.radix);
            return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix)
        }

        doPrepareChar(t, e) {
            void 0 === e && (e = {});
            const [i, s] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (e.input && e.raw || !e.input && !e.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t), e);
            return t && !i && (s.skip = !0), !i || this.allowPositive || this.value || "-" === i || s.aggregate(this._appendChar("-")), [i, s]
        }

        _separatorsCount(t, e) {
            void 0 === e && (e = !1);
            let i = 0;
            for (let s = 0; s < t; ++s) this._value.indexOf(this.thousandsSeparator, s) === s && (++i, e && (t += this.thousandsSeparator.length));
            return i
        }

        _separatorsCountFromSlice(t) {
            return void 0 === t && (t = this._value), this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
        }

        extractInput(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), [t, e] = this._adjustRangeWithSeparators(t, e), this._removeThousandsSeparators(super.extractInput(t, e, i))
        }

        _appendCharRaw(t, e) {
            if (void 0 === e && (e = {}), !this.thousandsSeparator) return super._appendCharRaw(t, e);
            const i = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                s = this._separatorsCountFromSlice(i);
            this._value = this._removeThousandsSeparators(this.value);
            const r = super._appendCharRaw(t, e);
            this._value = this._insertThousandsSeparators(this._value);
            const n = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                a = this._separatorsCountFromSlice(n);
            return r.tailShift += (a - s) * this.thousandsSeparator.length, r.skip = !r.rawInserted && t === this.thousandsSeparator, r
        }

        _findSeparatorAround(t) {
            if (this.thousandsSeparator) {
                const e = t - this.thousandsSeparator.length + 1, i = this.value.indexOf(this.thousandsSeparator, e);
                if (i <= t) return i
            }
            return -1
        }

        _adjustRangeWithSeparators(t, e) {
            const i = this._findSeparatorAround(t);
            i >= 0 && (t = i);
            const s = this._findSeparatorAround(e);
            return s >= 0 && (e = s + this.thousandsSeparator.length), [t, e]
        }

        remove(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = this.displayValue.length), [t, e] = this._adjustRangeWithSeparators(t, e);
            const i = this.value.slice(0, t), s = this.value.slice(e), r = this._separatorsCount(i.length);
            this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(i + s));
            const n = this._separatorsCountFromSlice(i);
            return new S({tailShift: (n - r) * this.thousandsSeparator.length})
        }

        nearestInputPos(t, e) {
            if (!this.thousandsSeparator) return t;
            switch (e) {
                case a:
                case o:
                case l: {
                    const i = this._findSeparatorAround(t - 1);
                    if (i >= 0) {
                        const s = i + this.thousandsSeparator.length;
                        if (t < s || this.value.length <= s || e === l) return i
                    }
                    break
                }
                case h:
                case u: {
                    const e = this._findSeparatorAround(t);
                    if (e >= 0) return e + this.thousandsSeparator.length
                }
            }
            return t
        }

        doValidate(t) {
            let e = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
            if (e) {
                const t = this.number;
                e = e && !isNaN(t) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
            }
            return e && super.doValidate(t)
        }

        doCommit() {
            if (this.value) {
                const t = this.number;
                let e = t;
                null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = this.format(e, this));
                let i = this.value;
                this.normalizeZeros && (i = this._normalizeZeros(i)), this.padFractionalZeros && this.scale > 0 && (i = this._padFractionalZeros(i)), this._value = i
            }
            super.doCommit()
        }

        _normalizeZeros(t) {
            const e = this._removeThousandsSeparators(t).split(this.radix);
            return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (t, e, i, s) => e + s), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix))
        }

        _padFractionalZeros(t) {
            if (!t) return t;
            const e = t.split(this.radix);
            return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix)
        }

        doSkipInvalid(t, e, i) {
            void 0 === e && (e = {});
            const s = 0 === this.scale && t !== this.thousandsSeparator && (t === this.radix || t === I.UNMASKED_RADIX || this.mapToRadix.includes(t));
            return super.doSkipInvalid(t, e, i) && !s
        }

        get unmaskedValue() {
            return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, I.UNMASKED_RADIX)
        }

        set unmaskedValue(t) {
            super.unmaskedValue = t
        }

        get typedValue() {
            return this.parse(this.unmaskedValue, this)
        }

        set typedValue(t) {
            this.rawInputValue = this.format(t, this).replace(I.UNMASKED_RADIX, this.radix)
        }

        get number() {
            return this.typedValue
        }

        set number(t) {
            this.typedValue = t
        }

        get allowNegative() {
            return null != this.min && this.min < 0 || null != this.max && this.max < 0
        }

        get allowPositive() {
            return null != this.min && this.min > 0 || null != this.max && this.max > 0
        }

        typedValueEquals(t) {
            return (super.typedValueEquals(t) || I.EMPTY_VALUES.includes(t) && I.EMPTY_VALUES.includes(this.typedValue)) && !(0 === t && "" === this.value)
        }
    }

    I.UNMASKED_RADIX = ".", I.EMPTY_VALUES = [...C.EMPTY_VALUES, 0], I.DEFAULTS = {
        mask: Number,
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: [I.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: t => t.toLocaleString("en-US", {useGrouping: !1, maximumFractionDigits: 20})
    }, f.MaskedNumber = I;
    const L = {MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue"};

    function B(t, e, i) {
        void 0 === e && (e = L.MASKED), void 0 === i && (i = L.MASKED);
        const s = v(t);
        return t => s.runIsolated(s => (s[e] = t, s[i]))
    }

    f.PIPE_TYPE = L, f.createPipe = B, f.pipe = function (t, e, i, s) {
        return B(e, i, s)(t)
    };
    try {
        globalThis.IMask = f
    } catch {
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
        }
        return t
    }, r = function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
            var i = [], s = !0, r = !1, n = void 0;
            try {
                for (var a, o = t[Symbol.iterator](); !(s = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); s = !0) ;
            } catch (t) {
                r = !0, n = t
            } finally {
                try {
                    !s && o.return && o.return()
                } finally {
                    if (r) throw n
                }
            }
            return i
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    e.default = function (t, e) {
        var i = [], r = [];
        return function () {
            if (t && t instanceof HTMLElement && "SELECT" === t.tagName.toUpperCase()) i.push(t); else if (t && "string" == typeof t) for (var o = document.querySelectorAll(t), l = 0, h = o.length; l < h; ++l) o[l] instanceof HTMLElement && "SELECT" === o[l].tagName.toUpperCase() && i.push(o[l]); else if (t && t.length) for (var u = 0, p = t.length; u < p; ++u) t[u] instanceof HTMLElement && "SELECT" === t[u].tagName.toUpperCase() && i.push(t[u]);
            for (var c = 0, d = i.length; c < d; ++c) r.push(a(i[c], s({}, n, e)));
            return r
        }()
    }, i(22);
    var n = {
        containerClass: "custom-select-container",
        openerClass: "custom-select-opener",
        panelClass: "custom-select-panel",
        optionClass: "custom-select-option",
        optgroupClass: "custom-select-optgroup",
        isSelectedClass: "is-selected",
        hasFocusClass: "has-focus",
        isDisabledClass: "is-disabled",
        isOpenClass: "is-open"
    };

    function a(t, e) {
        var i = !1, s = "", n = t, a = void 0, o = void 0, l = void 0, h = void 0, u = void 0, p = void 0, c = void 0,
            d = "";

        function f(t) {
            l && l.classList.remove(e.hasFocusClass), void 0 !== t ? ((l = t).classList.add(e.hasFocusClass), i && (t.offsetTop < t.offsetParent.scrollTop || t.offsetTop > t.offsetParent.scrollTop + t.offsetParent.clientHeight - t.clientHeight) && t.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel", {bubbles: !0}))) : l = void 0
        }

        function m(t) {
            h && (h.classList.remove(e.isSelectedClass), h.removeAttribute("id"), o.removeAttribute("aria-activedescendant")), void 0 !== t ? (t.classList.add(e.isSelectedClass), t.setAttribute("id", "customSelect-" + s + "-selectedOption"), o.setAttribute("aria-activedescendant", "customSelect-" + s + "-selectedOption"), h = t, o.children[0].textContent = h.customSelectOriginalOption.text) : (h = void 0, o.children[0].textContent = ""), f(t)
        }

        function g(t) {
            var e = [].indexOf.call(n.options, l.customSelectOriginalOption);
            n.options[e + t] && f(n.options[e + t].customSelectCstOption)
        }

        function v(t) {
            if (t || void 0 === t) {
                var s = document.querySelector(".customSelect." + e.isOpenClass);
                s && (s.customSelect.open = !1), a.classList.add(e.isOpenClass), a.classList.add(e.isOpenClass), o.setAttribute("aria-expanded", "true"), h && (u.scrollTop = h.offsetTop), a.dispatchEvent(new CustomEvent("custom-select:open")), i = !0
            } else a.classList.remove(e.isOpenClass), o.setAttribute("aria-expanded", "false"), i = !1, f(h), a.dispatchEvent(new CustomEvent("custom-select:close"));
            return i
        }

        function y(t) {
            t.target === o || o.contains(t.target) ? i ? v(!1) : v() : t.target.classList && t.target.classList.contains(e.optionClass) && u.contains(t.target) ? (m(t.target), h.customSelectOriginalOption.selected = !0, v(!1), n.dispatchEvent(new CustomEvent("change"))) : t.target === n ? o !== document.activeElement && n !== document.activeElement && o.focus() : i && !a.contains(t.target) && v(!1)
        }

        function b(t) {
            t.target.classList && t.target.classList.contains(e.optionClass) && f(t.target)
        }

        function _(t) {
            if (i) switch (t.keyCode) {
                case 13:
                case 32:
                    m(l), h.customSelectOriginalOption.selected = !0, n.dispatchEvent(new CustomEvent("change")), v(!1);
                    break;
                case 27:
                    v(!1);
                    break;
                case 38:
                    g(-1);
                    break;
                case 40:
                    g(1);
                    break;
                default:
                    if (t.keyCode >= 48 && t.keyCode <= 90) {
                        c && clearTimeout(c), c = setTimeout((function () {
                            d = ""
                        }), 1500), d += String.fromCharCode(t.keyCode);
                        for (var e = 0, s = n.options.length; e < s; e++) if (n.options[e].text.toUpperCase().substr(0, d.length) === d) {
                            f(n.options[e].customSelectCstOption);
                            break
                        }
                    }
            } else 40 !== t.keyCode && 38 !== t.keyCode && 32 !== t.keyCode || v()
        }

        function x() {
            var t = n.selectedIndex;
            m(-1 === t ? void 0 : n.options[t].customSelectCstOption)
        }

        function S(t) {
            var e = t.currentTarget, i = t.target;
            i.offsetTop < e.scrollTop ? e.scrollTop = i.offsetTop : e.scrollTop = i.offsetTop + i.clientHeight - e.clientHeight
        }

        function E() {
            document.addEventListener("click", y), u.addEventListener("mouseover", b), u.addEventListener("custom-select:focus-outside-panel", S), n.addEventListener("change", x), a.addEventListener("keydown", _)
        }

        function C() {
            document.removeEventListener("click", y), u.removeEventListener("mouseover", b), u.removeEventListener("custom-select:focus-outside-panel", S), n.removeEventListener("change", x), a.removeEventListener("keydown", _)
        }

        function k(t) {
            var i = t, s = [];
            if (void 0 === i.length) throw new TypeError("Invalid Argument");
            for (var r = 0, n = i.length; r < n; r++) if (i[r] instanceof HTMLElement && "OPTGROUP" === i[r].tagName.toUpperCase()) {
                var a = document.createElement("div");
                a.classList.add(e.optgroupClass), a.setAttribute("data-label", i[r].label), a.customSelectOriginalOptgroup = i[r], i[r].customSelectCstOptgroup = a;
                for (var o = k(i[r].children), l = 0, h = o.length; l < h; l++) a.appendChild(o[l]);
                s.push(a)
            } else {
                if (!(i[r] instanceof HTMLElement && "OPTION" === i[r].tagName.toUpperCase())) throw new TypeError("Invalid Argument");
                var u = document.createElement("div");
                u.classList.add(e.optionClass), u.textContent = i[r].text, u.setAttribute("data-value", i[r].value), u.setAttribute("role", "option"), u.customSelectOriginalOption = i[r], i[r].customSelectCstOption = u, i[r].selected && m(u), s.push(u)
            }
            return s
        }

        function w(t, e, i) {
            var s = void 0;
            if (void 0 === i || i === n) s = u; else {
                if (!(i instanceof HTMLElement && "OPTGROUP" === i.tagName.toUpperCase() && n.contains(i))) throw new TypeError("Invalid Argument");
                s = i.customSelectCstOptgroup
            }
            var r = t instanceof HTMLElement ? [t] : t;
            if (e) for (var a = 0, o = r.length; a < o; a++) s === u ? n.appendChild(r[a]) : s.customSelectOriginalOptgroup.appendChild(r[a]);
            for (var l = k(r), h = 0, p = l.length; h < p; h++) s.appendChild(l[h]);
            return r
        }

        (a = document.createElement("div")).classList.add(e.containerClass, "customSelect"), (o = document.createElement("span")).className = e.openerClass, o.setAttribute("role", "combobox"), o.setAttribute("aria-autocomplete", "list"), o.setAttribute("aria-expanded", "false"), o.innerHTML = "<span>\n   " + (-1 !== n.selectedIndex ? n.options[n.selectedIndex].text : "") + "\n   </span>", u = document.createElement("div");
        for (var T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", P = 0; P < 5; P++) s += T.charAt(Math.floor(Math.random() * T.length));
        return u.id = "customSelect-" + s + "-panel", u.className = e.panelClass, u.setAttribute("role", "listbox"), o.setAttribute("aria-owns", u.id), w(n.children, !1), a.appendChild(o), n.parentNode.replaceChild(a, n), a.appendChild(n), a.appendChild(u), document.querySelector('label[for="' + n.id + '"]') ? p = document.querySelector('label[for="' + n.id + '"]') : "LABEL" === a.parentNode.tagName.toUpperCase() && (p = a.parentNode), void 0 !== p && (p.setAttribute("id", "customSelect-" + s + "-label"), o.setAttribute("aria-labelledby", "customSelect-" + s + "-label")), n.disabled ? a.classList.add(e.isDisabledClass) : (o.setAttribute("tabindex", "0"), n.setAttribute("tabindex", "-1"), E()), a.customSelect = {
            get pluginOptions() {
                return e
            }, get open() {
                return i
            }, set open(t) {
                v(t)
            }, get disabled() {
                return n.disabled
            }, set disabled(t) {
                !function (t) {
                    t && !n.disabled ? (a.classList.add(e.isDisabledClass), n.disabled = !0, o.removeAttribute("tabindex"), a.dispatchEvent(new CustomEvent("custom-select:disabled")), C()) : !t && n.disabled && (a.classList.remove(e.isDisabledClass), n.disabled = !1, o.setAttribute("tabindex", "0"), a.dispatchEvent(new CustomEvent("custom-select:enabled")), E())
                }(t)
            }, get value() {
                return n.value
            }, set value(t) {
                var e, i;
                e = t, (i = n.querySelector("option[value='" + e + "']")) || (i = r(n.options, 1)[0]), i.selected = !0, m(n.options[n.selectedIndex].customSelectCstOption)
            }, append: function (t, e) {
                return w(t, !0, e)
            }, insertBefore: function (t, e) {
                return function (t, e) {
                    var i = void 0;
                    if (e instanceof HTMLElement && "OPTION" === e.tagName.toUpperCase() && n.contains(e)) i = e.customSelectCstOption; else {
                        if (!(e instanceof HTMLElement && "OPTGROUP" === e.tagName.toUpperCase() && n.contains(e))) throw new TypeError("Invalid Argument");
                        i = e.customSelectCstOptgroup
                    }
                    var s = k(t.length ? t : [t]);
                    return i.parentNode.insertBefore(s[0], i), e.parentNode.insertBefore(t.length ? t[0] : t, e)
                }(t, e)
            }, remove: function (t) {
                var e = void 0;
                if (t instanceof HTMLElement && "OPTION" === t.tagName.toUpperCase() && n.contains(t)) e = t.customSelectCstOption; else {
                    if (!(t instanceof HTMLElement && "OPTGROUP" === t.tagName.toUpperCase() && n.contains(t))) throw new TypeError("Invalid Argument");
                    e = t.customSelectCstOptgroup
                }
                e.parentNode.removeChild(e);
                var i = t.parentNode.removeChild(t);
                return x(), i
            }, empty: function () {
                for (var t = []; n.children.length;) u.removeChild(u.children[0]), t.push(n.removeChild(n.children[0]));
                return m(), t
            }, destroy: function () {
                for (var t = 0, e = n.options.length; t < e; t++) delete n.options[t].customSelectCstOption;
                for (var i = n.getElementsByTagName("optgroup"), s = 0, r = i.length; s < r; s++) delete i.customSelectCstOptgroup;
                return C(), a.parentNode.replaceChild(n, a)
            }, opener: o, select: n, panel: u, container: a
        }, n.customSelect = a.customSelect, a.customSelect
    }
}, function (t, e, i) {
    "use strict";

    function s(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    /*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    i.d(e, "a", (function () {
        return Ns
    }));
    var n, a, o, l, h, u, p, c, d, f, m, g, v, y, b,
        _ = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
        x = {duration: .5, overwrite: !1, delay: 0}, S = 1e8, E = 2 * Math.PI, C = E / 4, k = 0, w = Math.sqrt,
        T = Math.cos, P = Math.sin, A = function (t) {
            return "string" == typeof t
        }, M = function (t) {
            return "function" == typeof t
        }, D = function (t) {
            return "number" == typeof t
        }, F = function (t) {
            return void 0 === t
        }, I = function (t) {
            return "object" == typeof t
        }, L = function (t) {
            return !1 !== t
        }, B = function () {
            return "undefined" != typeof window
        }, V = function (t) {
            return M(t) || A(t)
        }, O = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
        }, R = Array.isArray, z = /(?:-?\.?\d|\.)+/gi, N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        G = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, H = /[+-]=-?[.\d]+/,
        j = /[^,'"\[\]\s]+/gi, W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Y = {}, X = {}, $ = function (t) {
            return (X = Et(t, Y)) && Si
        }, U = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        }, K = function (t, e) {
            return !e && console.warn(t)
        }, Z = function (t, e) {
            return t && (Y[t] = e) && X && (X[t] = e) || Y
        }, J = function () {
            return 0
        }, Q = {suppressEvents: !0, isStart: !0, kill: !1}, tt = {suppressEvents: !0, kill: !1}, et = {suppressEvents: !0},
        it = {}, st = [], rt = {}, nt = {}, at = {}, ot = 30, lt = [], ht = "", ut = function (t) {
            var e, i, s = t[0];
            if (I(s) || M(s) || (t = [t]), !(e = (s._gsap || {}).harness)) {
                for (i = lt.length; i-- && !lt[i].targetTest(s);) ;
                e = lt[i]
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ve(t[i], e))) || t.splice(i, 1);
            return t
        }, pt = function (t) {
            return t._gsap || ut(te(t))[0]._gsap
        }, ct = function (t, e, i) {
            return (i = t[e]) && M(i) ? t[e]() : F(i) && t.getAttribute && t.getAttribute(e) || i
        }, dt = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        }, ft = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, mt = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0
        }, gt = function (t, e) {
            var i = e.charAt(0), s = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === i ? t + s : "-" === i ? t - s : "*" === i ? t * s : t / s
        }, vt = function (t, e) {
            for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i;) ;
            return s < i
        }, yt = function () {
            var t, e, i = st.length, s = st.slice(0);
            for (rt = {}, st.length = 0, t = 0; t < i; t++) (e = s[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }, bt = function (t, e, i, s) {
            st.length && !a && yt(), t.render(e, i, s || a && e < 0 && (t._initted || t._startAt)), st.length && !a && yt()
        }, _t = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(j).length < 2 ? e : A(t) ? t.trim() : t
        }, xt = function (t) {
            return t
        }, St = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t
        }, Et = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, Ct = function t(e, i) {
            for (var s in i) "__proto__" !== s && "constructor" !== s && "prototype" !== s && (e[s] = I(i[s]) ? t(e[s] || (e[s] = {}), i[s]) : i[s]);
            return e
        }, kt = function (t, e) {
            var i, s = {};
            for (i in t) i in e || (s[i] = t[i]);
            return s
        }, wt = function (t) {
            var e, i = t.parent || l, s = t.keyframes ? (e = R(t.keyframes), function (t, i) {
                for (var s in i) s in t || "duration" === s && e || "ease" === s || (t[s] = i[s])
            }) : St;
            if (L(t.inherit)) for (; i;) s(t, i.vars.defaults), i = i.parent || i._dp;
            return t
        }, Tt = function (t, e, i, s, r) {
            void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
            var n, a = t[s];
            if (r) for (n = e[r]; a && a[r] > n;) a = a._prev;
            return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = a, e.parent = e._dp = t, e
        }, Pt = function (t, e, i, s) {
            void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
            var r = e._prev, n = e._next;
            r ? r._next = n : t[i] === e && (t[i] = n), n ? n._prev = r : t[s] === e && (t[s] = r), e._next = e._prev = e.parent = null
        }, At = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        }, Mt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i;) i._dirty = 1, i = i.parent;
            return t
        }, Dt = function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        }, Ft = function (t, e, i, s) {
            return t._startAt && (a ? t._startAt.revert(tt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, s))
        }, It = function (t) {
            return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }, Lt = function (t, e) {
            var i = Math.floor(t /= e);
            return t && i === t ? i - 1 : i
        }, Bt = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }, Vt = function (t) {
            return t._end = mt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        }, Ot = function (t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && (t._start = mt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Vt(t), i._dirty || Mt(i, t)), t
        }, Rt = function (t, e) {
            var i;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Bt(t.rawTime(), e), (!e._dur || Ut(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), Mt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration()) for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                t._zTime = -1e-8
            }
        }, zt = function (t, e, i, s) {
            return e.parent && At(e), e._start = mt((D(i) ? i : i || t !== l ? Yt(t, i, e) : t._time) + e._delay), e._end = mt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Tt(t, e, "_first", "_last", t._sort ? "_start" : 0), qt(e) || (t._recent = e), s || Rt(t, e), t._ts < 0 && Ot(t, t._tTime), t
        }, Nt = function (t, e) {
            return (Y.ScrollTrigger || U("scrollTrigger", e)) && Y.ScrollTrigger.create(e, t)
        }, Gt = function (t, e, i, s, r) {
            return je(t, e, r), t._initted ? !i && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Ee.frame ? (st.push(t), t._lazy = [r, s], 1) : void 0 : 1
        }, qt = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        }, Ht = function (t, e, i, s) {
            var r = t._repeat, n = mt(e) || 0, a = t._tTime / t._tDur;
            return a && !s && (t._time *= n / t._dur), t._dur = n, t._tDur = r ? r < 0 ? 1e10 : mt(n * (r + 1) + t._rDelay * r) : n, a > 0 && !s && Ot(t, t._tTime = t._tDur * a), t.parent && Vt(t), i || Mt(t.parent, t), t
        }, jt = function (t) {
            return t instanceof Re ? Mt(t) : Ht(t, t._dur)
        }, Wt = {_start: 0, endTime: J, totalDuration: J}, Yt = function t(e, i, s) {
            var r, n, a, o = e.labels, l = e._recent || Wt, h = e.duration() >= S ? l.endTime(!1) : e._dur;
            return A(i) && (isNaN(i) || i in o) ? (n = i.charAt(0), a = "%" === i.substr(-1), r = i.indexOf("="), "<" === n || ">" === n ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === n ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (r < 0 ? l : s).totalDuration() / 100 : 1)) : r < 0 ? (i in o || (o[i] = h), o[i]) : (n = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), a && s && (n = n / 100 * (R(s) ? s[0] : s).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), s) + n : h + n)) : null == i ? h : +i
        }, Xt = function (t, e, i) {
            var s, r, n = D(e[1]), a = (n ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
            if (n && (o.duration = e[1]), o.parent = i, t) {
                for (s = o, r = i; r && !("immediateRender" in s);) s = r.vars.defaults || {}, r = L(r.vars.inherit) && r.parent;
                o.immediateRender = L(s.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new Ue(e[0], o, e[a + 1])
        }, $t = function (t, e) {
            return t || 0 === t ? e(t) : e
        }, Ut = function (t, e, i) {
            return i < t ? t : i > e ? e : i
        }, Kt = function (t, e) {
            return A(t) && (e = W.exec(t)) ? e[1] : ""
        }, Zt = [].slice, Jt = function (t, e) {
            return t && I(t) && "length" in t && (!e && !t.length || t.length - 1 in t && I(t[0])) && !t.nodeType && t !== h
        }, Qt = function (t, e, i) {
            return void 0 === i && (i = []), t.forEach((function (t) {
                var s;
                return A(t) && !e || Jt(t, 1) ? (s = i).push.apply(s, te(t)) : i.push(t)
            })) || i
        }, te = function (t, e, i) {
            return o && !e && o.selector ? o.selector(t) : !A(t) || i || !u && Ce() ? R(t) ? Qt(t, i) : Jt(t) ? Zt.call(t, 0) : t ? [t] : [] : Zt.call((e || p).querySelectorAll(t), 0)
        }, ee = function (t) {
            return t = te(t)[0] || K("Invalid scope") || {}, function (e) {
                var i = t.current || t.nativeElement || t;
                return te(e, i.querySelectorAll ? i : i === t ? K("Invalid scope") || p.createElement("div") : t)
            }
        }, ie = function (t) {
            return t.sort((function () {
                return .5 - Math.random()
            }))
        }, se = function (t) {
            if (M(t)) return t;
            var e = I(t) ? t : {each: t}, i = De(e.ease), s = e.from || 0, r = parseFloat(e.base) || 0, n = {},
                a = s > 0 && s < 1, o = isNaN(s) || a, l = e.axis, h = s, u = s;
            return A(s) ? h = u = {
                center: .5,
                edges: .5,
                end: 1
            }[s] || 0 : !a && o && (h = s[0], u = s[1]), function (t, a, p) {
                var c, d, f, m, g, v, y, b, _, x = (p || e).length, E = n[x];
                if (!E) {
                    if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, S])[1])) {
                        for (y = -S; y < (y = p[_++].getBoundingClientRect().left) && _ < x;) ;
                        _--
                    }
                    for (E = n[x] = [], c = o ? Math.min(_, x) * h - .5 : s % _, d = _ === S ? 0 : o ? x * u / _ - .5 : s / _ | 0, y = 0, b = S, v = 0; v < x; v++) f = v % _ - c, m = d - (v / _ | 0), E[v] = g = l ? Math.abs("y" === l ? m : f) : w(f * f + m * m), g > y && (y = g), g < b && (b = g);
                    "random" === s && ie(E), E.max = y - b, E.min = b, E.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (_ > x ? x - 1 : l ? "y" === l ? x / _ : _ : Math.max(_, x / _)) || 0) * ("edges" === s ? -1 : 1), E.b = x < 0 ? r - x : r, E.u = Kt(e.amount || e.each) || 0, i = i && x < 0 ? Ae(i) : i
                }
                return x = (E[t] - E.min) / E.max || 0, mt(E.b + (i ? i(x) : x) * E.v) + E.u
            }
        }, re = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (i) {
                var s = mt(Math.round(parseFloat(i) / t) * t * e);
                return (s - s % 1) / e + (D(i) ? 0 : Kt(i))
            }
        }, ne = function (t, e) {
            var i, s, r = R(t);
            return !r && I(t) && (i = r = t.radius || S, t.values ? (t = te(t.values), (s = !D(t[0])) && (i *= i)) : t = re(t.increment)), $t(e, r ? M(t) ? function (e) {
                return s = t(e), Math.abs(s - e) <= i ? s : e
            } : function (e) {
                for (var r, n, a = parseFloat(s ? e.x : e), o = parseFloat(s ? e.y : 0), l = S, h = 0, u = t.length; u--;) (r = s ? (r = t[u].x - a) * r + (n = t[u].y - o) * n : Math.abs(t[u] - a)) < l && (l = r, h = u);
                return h = !i || l <= i ? t[h] : e, s || h === e || D(e) ? h : h + Kt(e)
            } : re(t))
        }, ae = function (t, e, i, s) {
            return $t(R(t) ? !e : !0 === i ? !!(i = 0) : !s, (function () {
                return R(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * s) / s
            }))
        }, oe = function (t, e, i) {
            return $t(i, (function (i) {
                return t[~~e(i)]
            }))
        }, le = function (t) {
            for (var e, i, s, r, n = 0, a = ""; ~(e = t.indexOf("random(", n));) s = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, s - e - 7).match(r ? j : z), a += t.substr(n, e - n) + ae(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), n = s + 1;
            return a + t.substr(n, t.length - n)
        }, he = function (t, e, i, s, r) {
            var n = e - t, a = s - i;
            return $t(r, (function (e) {
                return i + ((e - t) / n * a || 0)
            }))
        }, ue = function (t, e, i) {
            var s, r, n, a = t.labels, o = S;
            for (s in a) (r = a[s] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && (n = s, o = r);
            return n
        }, pe = function (t, e, i) {
            var s, r, n, a = t.vars, l = a[e], h = o, u = t._ctx;
            if (l) return s = a[e + "Params"], r = a.callbackScope || t, i && st.length && yt(), u && (o = u), n = s ? l.apply(r, s) : l.call(r), o = h, n
        }, ce = function (t) {
            return At(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && pe(t, "onInterrupt"), t
        }, de = [], fe = function (t) {
            if (B() && t) {
                var e = (t = !t.name && t.default || t).name, i = M(t), s = e && !i && t.init ? function () {
                        this._props = []
                    } : t, r = {init: J, render: ri, add: qe, kill: ai, modifier: ni, rawVars: 0},
                    n = {targetTest: 0, get: 0, getSetter: ti, aliases: {}, register: 0};
                if (Ce(), t !== s) {
                    if (nt[e]) return;
                    St(s, St(kt(t, r), n)), Et(s.prototype, Et(r, kt(t, n))), nt[s.prop = e] = s, t.targetTest && (lt.push(s), it[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                Z(e, s), t.register && t.register(Si, s, hi)
            } else t && de.push(t)
        }, me = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ge = function (t, e, i) {
            return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, ve = function (t, e, i) {
            var s, r, n, a, o, l, h, u, p, c, d = t ? D(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : me.black;
            if (!d) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]) d = me[t]; else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
                    d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3)) if (d = c = t.match(z), e) {
                    if (~t.indexOf("=")) return d = t.match(N), i && d.length < 4 && (d[3] = 1), d
                } else a = +d[0] % 360 / 360, o = +d[1] / 100, s = 2 * (l = +d[2] / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), d.length > 3 && (d[3] *= 1), d[0] = ge(a + 1 / 3, s, r), d[1] = ge(a, s, r), d[2] = ge(a - 1 / 3, s, r); else d = t.match(z) || me.transparent;
                d = d.map(Number)
            }
            return e && !c && (s = d[0] / 255, r = d[1] / 255, n = d[2] / 255, l = ((h = Math.max(s, r, n)) + (u = Math.min(s, r, n))) / 2, h === u ? a = o = 0 : (p = h - u, o = l > .5 ? p / (2 - h - u) : p / (h + u), a = h === s ? (r - n) / p + (r < n ? 6 : 0) : h === r ? (n - s) / p + 2 : (s - r) / p + 4, a *= 60), d[0] = ~~(a + .5), d[1] = ~~(100 * o + .5), d[2] = ~~(100 * l + .5)), i && d.length < 4 && (d[3] = 1), d
        }, ye = function (t) {
            var e = [], i = [], s = -1;
            return t.split(_e).forEach((function (t) {
                var r = t.match(G) || [];
                e.push.apply(e, r), i.push(s += r.length + 1)
            })), e.c = i, e
        }, be = function (t, e, i) {
            var s, r, n, a, o = "", l = (t + o).match(_e), h = e ? "hsla(" : "rgba(", u = 0;
            if (!l) return t;
            if (l = l.map((function (t) {
                return (t = ve(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), i && (n = ye(t), (s = i.c).join(o) !== n.c.join(o))) for (a = (r = t.replace(_e, "1").split(G)).length - 1; u < a; u++) o += r[u] + (~s.indexOf(u) ? l.shift() || h + "0,0,0,0)" : (n.length ? n : l.length ? l : i).shift());
            if (!r) for (a = (r = t.split(_e)).length - 1; u < a; u++) o += r[u] + l[u];
            return o + r[a]
        }, _e = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in me) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(), xe = /hsl[a]?\(/, Se = function (t) {
            var e, i = t.join(" ");
            if (_e.lastIndex = 0, _e.test(i)) return e = xe.test(i), t[1] = be(t[1], e), t[0] = be(t[0], e, ye(t[1])), !0
        }, Ee = function () {
            var t, e, i, s, r, n, a = Date.now, o = 500, l = 33, d = a(), f = d, g = 1e3 / 240, v = g, y = [],
                b = function i(h) {
                    var u, p, c, m, b = a() - f, _ = !0 === h;
                    if (b > o && (d += b - l), ((u = (c = (f += b) - d) - v) > 0 || _) && (m = ++s.frame, r = c - 1e3 * s.time, s.time = c /= 1e3, v += u + (u >= g ? 4 : g - u), p = 1), _ || (t = e(i)), p) for (n = 0; n < y.length; n++) y[n](c, r, m, h)
                };
            return s = {
                time: 0, frame: 0, tick: function () {
                    b(!0)
                }, deltaRatio: function (t) {
                    return r / (1e3 / (t || 60))
                }, wake: function () {
                    c && (!u && B() && (h = u = window, p = h.document || {}, Y.gsap = Si, (h.gsapVersions || (h.gsapVersions = [])).push(Si.version), $(X || h.GreenSockGlobals || !h.gsap && h || {}), i = h.requestAnimationFrame, de.forEach(fe)), t && s.sleep(), e = i || function (t) {
                        return setTimeout(t, v - 1e3 * s.time + 1 | 0)
                    }, m = 1, b(2))
                }, sleep: function () {
                    (i ? h.cancelAnimationFrame : clearTimeout)(t), m = 0, e = J
                }, lagSmoothing: function (t, e) {
                    o = t || 1 / 0, l = Math.min(e || 33, o)
                }, fps: function (t) {
                    g = 1e3 / (t || 240), v = 1e3 * s.time + g
                }, add: function (t, e, i) {
                    var r = e ? function (e, i, n, a) {
                        t(e, i, n, a), s.remove(r)
                    } : t;
                    return s.remove(t), y[i ? "unshift" : "push"](r), Ce(), r
                }, remove: function (t, e) {
                    ~(e = y.indexOf(t)) && y.splice(e, 1) && n >= e && n--
                }, _listeners: y
            }
        }(), Ce = function () {
            return !m && Ee.wake()
        }, ke = {}, we = /^[\d.\-M][\d.\-,\s]/, Te = /["']/g, Pe = function (t) {
            for (var e, i, s, r = {}, n = t.substr(1, t.length - 3).split(":"), a = n[0], o = 1, l = n.length; o < l; o++) i = n[o], e = o !== l - 1 ? i.lastIndexOf(",") : i.length, s = i.substr(0, e), r[a] = isNaN(s) ? s.replace(Te, "").trim() : +s, a = i.substr(e + 1).trim();
            return r
        }, Ae = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        }, Me = function t(e, i) {
            for (var s, r = e._first; r;) r instanceof Re ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (s = r._ease, r._ease = r._yEase, r._yEase = s, r._yoyo = i)), r = r._next
        }, De = function (t, e) {
            return t && (M(t) ? t : ke[t] || function (t) {
                var e, i, s, r, n = (t + "").split("("), a = ke[n[0]];
                return a && n.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Pe(n[1])] : (e = t, i = e.indexOf("(") + 1, s = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < s ? e.indexOf(")", s + 1) : s)).split(",").map(_t)) : ke._CE && we.test(t) ? ke._CE("", t) : a
            }(t)) || e
        }, Fe = function (t, e, i, s) {
            void 0 === i && (i = function (t) {
                return 1 - e(1 - t)
            }), void 0 === s && (s = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, n = {easeIn: e, easeOut: i, easeInOut: s};
            return dt(t, (function (t) {
                for (var e in ke[t] = Y[t] = n, ke[r = t.toLowerCase()] = i, n) ke[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = n[e]
            })), n
        }, Ie = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        }, Le = function t(e, i, s) {
            var r = i >= 1 ? i : 1, n = (s || (e ? .3 : .45)) / (i < 1 ? i : 1), a = n / E * (Math.asin(1 / r) || 0),
                o = function (t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * P((t - a) * n) + 1
                }, l = "out" === e ? o : "in" === e ? function (t) {
                    return 1 - o(1 - t)
                } : Ie(o);
            return n = E / n, l.config = function (i, s) {
                return t(e, i, s)
            }, l
        }, Be = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var s = function (t) {
                return t ? --t * t * ((i + 1) * t + i) + 1 : 0
            }, r = "out" === e ? s : "in" === e ? function (t) {
                return 1 - s(1 - t)
            } : Ie(s);
            return r.config = function (i) {
                return t(e, i)
            }, r
        };
    dt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var i = e < 5 ? e + 1 : e;
        Fe(t + ",Power" + (i - 1), e ? function (t) {
            return Math.pow(t, i)
        } : function (t) {
            return t
        }, (function (t) {
            return 1 - Math.pow(1 - t, i)
        }), (function (t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        }))
    })), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, Fe("Elastic", Le("in"), Le("out"), Le()), g = 7.5625, y = 1 / (v = 2.75), Fe("Bounce", (function (t) {
        return 1 - b(1 - t)
    }), b = function (t) {
        return t < y ? g * t * t : t < .7272727272727273 ? g * Math.pow(t - 1.5 / v, 2) + .75 : t < .9090909090909092 ? g * (t -= 2.25 / v) * t + .9375 : g * Math.pow(t - 2.625 / v, 2) + .984375
    }), Fe("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Fe("Circ", (function (t) {
        return -(w(1 - t * t) - 1)
    })), Fe("Sine", (function (t) {
        return 1 === t ? 1 : 1 - T(t * C)
    })), Fe("Back", Be("in"), Be("out"), Be()), ke.SteppedEase = ke.steps = Y.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t, s = t + (e ? 0 : 1), r = e ? 1 : 0;
            return function (t) {
                return ((s * Ut(0, 1 - 1e-8, t) | 0) + r) * i
            }
        }
    }, x.ease = ke["quad.out"], dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return ht += t + "," + t + "Params,"
    }));
    var Ve = function (t, e) {
        this.id = k++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ct, this.set = e ? e.getSetter : ti
    }, Oe = function () {
        function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ht(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), m || Ee.wake()
        }

        var e = t.prototype;
        return e.delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function (t, e) {
            if (Ce(), !arguments.length) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (Ot(this, t), !i._dp || i.parent || Rt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && zt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), bt(this, t, e)), this
        }, e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + It(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + It(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Lt(this._tTime, i) + 1 : 1
        }, e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Ut(-Math.abs(this._delay), this._tDur, e), !0), Vt(this), Dt(this)
        }, e.paused = function (t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
        }, e.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && zt(e, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function (t) {
            return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.revert = function (t) {
            void 0 === t && (t = et);
            var e = a;
            return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
        }, e.globalTime = function (t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : i
        }, e.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, jt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function (t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, jt(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, e.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function (t, e) {
            return this.totalTime(Yt(this, t), L(e))
        }, e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, L(e))
        }, e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, e.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, e.resume = function () {
            return this.paused(!1)
        }, e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
        }, e.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
        }, e.isActive = function () {
            var t, e = this.parent || this._dp, i = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8))
        }, e.eventCallback = function (t, e, i) {
            var s = this.vars;
            return arguments.length > 1 ? (e ? (s[t] = e, i && (s[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete s[t], this) : s[t]
        }, e.then = function (t) {
            var e = this;
            return new Promise((function (i) {
                var s = M(t) ? t : xt, r = function () {
                    var t = e.then;
                    e.then = null, M(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), i(s), e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
            }))
        }, e.kill = function () {
            ce(this)
        }, t
    }();
    St(Oe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Re = function (t) {
        function e(e, i) {
            var r;
            return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = L(e.sortChildren), l && zt(e.parent || l, s(r), i), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && Nt(s(r), e.scrollTrigger), r
        }

        r(e, t);
        var i = e.prototype;
        return i.to = function (t, e, i) {
            return Xt(0, arguments, this), this
        }, i.from = function (t, e, i) {
            return Xt(1, arguments, this), this
        }, i.fromTo = function (t, e, i, s) {
            return Xt(2, arguments, this), this
        }, i.set = function (t, e, i) {
            return e.duration = 0, e.parent = this, wt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ue(t, e, Yt(this, i), 1), this
        }, i.call = function (t, e, i) {
            return zt(this, Ue.delayedCall(0, t, e), i)
        }, i.staggerTo = function (t, e, i, s, r, n, a) {
            return i.duration = e, i.stagger = i.stagger || s, i.onComplete = n, i.onCompleteParams = a, i.parent = this, new Ue(t, i, Yt(this, r)), this
        }, i.staggerFrom = function (t, e, i, s, r, n, a) {
            return i.runBackwards = 1, wt(i).immediateRender = L(i.immediateRender), this.staggerTo(t, e, i, s, r, n, a)
        }, i.staggerFromTo = function (t, e, i, s, r, n, a, o) {
            return s.startAt = i, wt(s).immediateRender = L(s.immediateRender), this.staggerTo(t, e, s, r, n, a, o)
        }, i.render = function (t, e, i) {
            var s, r, n, o, h, u, p, c, d, f, m, g, v = this._time, y = this._dirty ? this.totalDuration() : this._tDur,
                b = this._dur, _ = t <= 0 ? 0 : mt(t), x = this._zTime < 0 != t < 0 && (this._initted || !b);
            if (this !== l && _ > y && t >= 0 && (_ = y), _ !== this._tTime || i || x) {
                if (v !== this._time && b && (_ += this._time - v, t += this._time - v), s = _, d = this._start, u = !(c = this._ts), x && (b || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (m = this._yoyo, h = b + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, i);
                    if (s = mt(_ % h), _ === y ? (o = this._repeat, s = b) : ((o = ~~(_ / h)) && o === _ / h && (s = b, o--), s > b && (s = b)), f = Lt(this._tTime, h), !v && this._tTime && f !== o && this._tTime - f * h - this._dur <= 0 && (f = o), m && 1 & o && (s = b - s, g = 1), o !== f && !this._lock) {
                        var S = m && 1 & f, E = S === (m && 1 & o);
                        if (o < f && (S = !S), v = S ? 0 : _ % b ? b : _, this._lock = 1, this.render(v || (g ? 0 : mt(o * h)), e, !b)._lock = 0, this._tTime = _, !e && this.parent && pe(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (b = this._dur, y = this._tDur, E && (this._lock = 2, v = S ? b : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Me(this, g)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (p = function (t, e, i) {
                    var s;
                    if (i > e) for (s = t._first; s && s._start <= i;) {
                        if ("isPause" === s.data && s._start > e) return s;
                        s = s._next
                    } else for (s = t._last; s && s._start >= i;) {
                        if ("isPause" === s.data && s._start < e) return s;
                        s = s._prev
                    }
                }(this, mt(v), mt(s))) && (_ -= s - (s = p._start)), this._tTime = _, this._time = s, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && s && !e && !o && (pe(this, "onStart"), this._tTime !== _)) return this;
                if (s >= v && t >= 0) for (r = this._first; r;) {
                    if (n = r._next, (r._act || s >= r._start) && r._ts && p !== r) {
                        if (r.parent !== this) return this.render(t, e, i);
                        if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, e, i), s !== this._time || !this._ts && !u) {
                            p = 0, n && (_ += this._zTime = -1e-8);
                            break
                        }
                    }
                    r = n
                } else {
                    r = this._last;
                    for (var C = t < 0 ? t : s; r;) {
                        if (n = r._prev, (r._act || C <= r._end) && r._ts && p !== r) {
                            if (r.parent !== this) return this.render(t, e, i);
                            if (r.render(r._ts > 0 ? (C - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (C - r._start) * r._ts, e, i || a && (r._initted || r._startAt)), s !== this._time || !this._ts && !u) {
                                p = 0, n && (_ += this._zTime = C ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        r = n
                    }
                }
                if (p && !e && (this.pause(), p.render(s >= v ? 0 : -1e-8)._zTime = s >= v ? 1 : -1, this._ts)) return this._start = d, Vt(this), this.render(t, e, i);
                this._onUpdate && !e && pe(this, "onUpdate", !0), (_ === y && this._tTime >= this.totalDuration() || !_ && v) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !b) && (_ === y && this._ts > 0 || !_ && this._ts < 0) && At(this, 1), e || t < 0 && !v || !_ && !v && y || (pe(this, _ === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < y && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, i.add = function (t, e) {
            var i = this;
            if (D(e) || (e = Yt(this, e, t)), !(t instanceof Oe)) {
                if (R(t)) return t.forEach((function (t) {
                    return i.add(t, e)
                })), this;
                if (A(t)) return this.addLabel(t, e);
                if (!M(t)) return this;
                t = Ue.delayedCall(0, t)
            }
            return this !== t ? zt(this, t, e) : this
        }, i.getChildren = function (t, e, i, s) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === s && (s = -S);
            for (var r = [], n = this._first; n;) n._start >= s && (n instanceof Ue ? e && r.push(n) : (i && r.push(n), t && r.push.apply(r, n.getChildren(!0, e, i)))), n = n._next;
            return r
        }, i.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;) if (e[i].vars.id === t) return e[i]
        }, i.remove = function (t) {
            return A(t) ? this.removeLabel(t) : M(t) ? this.killTweensOf(t) : (Pt(this, t), t === this._recent && (this._recent = this._last), Mt(this))
        }, i.totalTime = function (e, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = mt(Ee.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
        }, i.addLabel = function (t, e) {
            return this.labels[t] = Yt(this, e), this
        }, i.removeLabel = function (t) {
            return delete this.labels[t], this
        }, i.addPause = function (t, e, i) {
            var s = Ue.delayedCall(0, e || J, i);
            return s.data = "isPause", this._hasPause = 1, zt(this, s, Yt(this, t))
        }, i.removePause = function (t) {
            var e = this._first;
            for (t = Yt(this, t); e;) e._start === t && "isPause" === e.data && At(e), e = e._next
        }, i.killTweensOf = function (t, e, i) {
            for (var s = this.getTweensOf(t, i), r = s.length; r--;) ze !== s[r] && s[r].kill(t, e);
            return this
        }, i.getTweensOf = function (t, e) {
            for (var i, s = [], r = te(t), n = this._first, a = D(e); n;) n instanceof Ue ? vt(n._targets, r) && (a ? (!ze || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && s.push(n) : (i = n.getTweensOf(r, e)).length && s.push.apply(s, i), n = n._next;
            return s
        }, i.tweenTo = function (t, e) {
            e = e || {};
            var i, s = this, r = Yt(s, t), n = e, a = n.startAt, o = n.onStart, l = n.onStartParams,
                h = n.immediateRender, u = Ue.to(s, St({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (a && "time" in a ? a.time : s._time)) / s.timeScale()) || 1e-8,
                    onStart: function () {
                        if (s.pause(), !i) {
                            var t = e.duration || Math.abs((r - (a && "time" in a ? a.time : s._time)) / s.timeScale());
                            u._dur !== t && Ht(u, t, 0, 1).render(u._time, !0, !0), i = 1
                        }
                        o && o.apply(u, l || [])
                    }
                }, e));
            return h ? u.render(0) : u
        }, i.tweenFromTo = function (t, e, i) {
            return this.tweenTo(e, St({startAt: {time: Yt(this, t)}}, i))
        }, i.recent = function () {
            return this._recent
        }, i.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ue(this, Yt(this, t))
        }, i.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ue(this, Yt(this, t), 1)
        }, i.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, i.shiftChildren = function (t, e, i) {
            void 0 === i && (i = 0);
            for (var s, r = this._first, n = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return Mt(this)
        }, i.invalidate = function (e) {
            var i = this._first;
            for (this._lock = 0; i;) i.invalidate(e), i = i._next;
            return t.prototype.invalidate.call(this, e)
        }, i.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Mt(this)
        }, i.totalDuration = function (t) {
            var e, i, s, r = 0, n = this, a = n._last, o = S;
            if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -t : t));
            if (n._dirty) {
                for (s = n.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && n._sort && a._ts && !n._lock ? (n._lock = 1, zt(n, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (r -= i, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += i / n._ts, n._time -= i, n._tTime -= i), n.shiftChildren(-i, !1, -Infinity), o = 0), a._end > r && a._ts && (r = a._end), a = e;
                Ht(n, n === l && n._time > r ? n._time : r, 1, 1), n._dirty = 0
            }
            return n._tDur
        }, e.updateRoot = function (t) {
            if (l._ts && (bt(l, Bt(t, l)), d = Ee.frame), Ee.frame >= ot) {
                ot += _.autoSleep || 120;
                var e = l._first;
                if ((!e || !e._ts) && _.autoSleep && Ee._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ee.sleep()
                }
            }
        }, e
    }(Oe);
    St(Re.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
    var ze, Ne, Ge = function (t, e, i, s, r, n, a) {
        var o, l, h, u, p, c, d, f, m = new hi(this._pt, t, e, 0, 1, si, null, r), g = 0, v = 0;
        for (m.b = i, m.e = s, i += "", (d = ~(s += "").indexOf("random(")) && (s = le(s)), n && (n(f = [i, s], t, e), i = f[0], s = f[1]), l = i.match(q) || []; o = q.exec(s);) u = o[0], p = s.substring(g, o.index), h ? h = (h + 1) % 5 : "rgba(" === p.substr(-5) && (h = 1), u !== l[v++] && (c = parseFloat(l[v - 1]) || 0, m._pt = {
            _next: m._pt,
            p: p || 1 === v ? p : ",",
            s: c,
            c: "=" === u.charAt(1) ? gt(c, u) - c : parseFloat(u) - c,
            m: h && h < 4 ? Math.round : 0
        }, g = q.lastIndex);
        return m.c = g < s.length ? s.substring(g, s.length) : "", m.fp = a, (H.test(s) || d) && (m.e = 0), this._pt = m, m
    }, qe = function (t, e, i, s, r, n, a, o, l, h) {
        M(s) && (s = s(r || 0, t, n));
        var u, p = t[e],
            c = "get" !== i ? i : M(p) ? l ? t[e.indexOf("set") || !M(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : p,
            d = M(p) ? l ? Je : Ze : Ke;
        if (A(s) && (~s.indexOf("random(") && (s = le(s)), "=" === s.charAt(1) && ((u = gt(c, s) + (Kt(c) || 0)) || 0 === u) && (s = u)), !h || c !== s || Ne) return isNaN(c * s) || "" === s ? (!p && !(e in t) && U(e, s), Ge.call(this, t, e, c, s, d, o || _.stringFilter, l)) : (u = new hi(this._pt, t, e, +c || 0, s - (c || 0), "boolean" == typeof p ? ii : ei, 0, d), l && (u.fp = l), a && u.modifier(a, this, t), this._pt = u)
    }, He = function (t, e, i, s, r, n) {
        var a, o, l, h;
        if (nt[t] && !1 !== (a = new nt[t]).init(r, a.rawVars ? e[t] : function (t, e, i, s, r) {
            if (M(t) && (t = Ye(t, r, e, i, s)), !I(t) || t.style && t.nodeType || R(t) || O(t)) return A(t) ? Ye(t, r, e, i, s) : t;
            var n, a = {};
            for (n in t) a[n] = Ye(t[n], r, e, i, s);
            return a
        }(e[t], s, r, n, i), i, s, n) && (i._pt = o = new hi(i._pt, r, t, 0, 1, a.render, a, 0, a.priority), i !== f)) for (l = i._ptLookup[i._targets.indexOf(r)], h = a._props.length; h--;) l[a._props[h]] = o;
        return a
    }, je = function t(e, i, s) {
        var r, o, h, u, p, c, d, f, m, g, v, y, b, _ = e.vars, E = _.ease, C = _.startAt, k = _.immediateRender,
            w = _.lazy, T = _.onUpdate, P = _.onUpdateParams, A = _.callbackScope, M = _.runBackwards, D = _.yoyoEase,
            F = _.keyframes, I = _.autoRevert, B = e._dur, V = e._startAt, O = e._targets, R = e.parent,
            z = R && "nested" === R.data ? R.vars.targets : O, N = "auto" === e._overwrite && !n, G = e.timeline;
        if (G && (!F || !E) && (E = "none"), e._ease = De(E, x.ease), e._yEase = D ? Ae(De(!0 === D ? E : D, x.ease)) : 0, D && e._yoyo && !e._repeat && (D = e._yEase, e._yEase = e._ease, e._ease = D), e._from = !G && !!_.runBackwards, !G || F && !_.stagger) {
            if (y = (f = O[0] ? pt(O[0]).harness : 0) && _[f.prop], r = kt(_, it), V && (V._zTime < 0 && V.progress(1), i < 0 && M && k && !I ? V.render(-1, !0) : V.revert(M && B ? tt : Q), V._lazy = 0), C) {
                if (At(e._startAt = Ue.set(O, St({
                    data: "isStart",
                    overwrite: !1,
                    parent: R,
                    immediateRender: !0,
                    lazy: !V && L(w),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: P,
                    callbackScope: A,
                    stagger: 0
                }, C))), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a || !k && !I) && e._startAt.revert(tt), k && B && i <= 0 && s <= 0) return void (i && (e._zTime = i))
            } else if (M && B && !V) if (i && (k = !1), h = St({
                overwrite: !1,
                data: "isFromStart",
                lazy: k && !V && L(w),
                immediateRender: k,
                stagger: 0,
                parent: R
            }, r), y && (h[f.prop] = y), At(e._startAt = Ue.set(O, h)), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a ? e._startAt.revert(tt) : e._startAt.render(-1, !0)), e._zTime = i, k) {
                if (!i) return
            } else t(e._startAt, 1e-8, 1e-8);
            for (e._pt = e._ptCache = 0, w = B && L(w) || w && !B, o = 0; o < O.length; o++) {
                if (d = (p = O[o])._gsap || ut(O)[o]._gsap, e._ptLookup[o] = g = {}, rt[d.id] && st.length && yt(), v = z === O ? o : z.indexOf(p), f && !1 !== (m = new f).init(p, y || r, e, v, z) && (e._pt = u = new hi(e._pt, p, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function (t) {
                    g[t] = u
                })), m.priority && (c = 1)), !f || y) for (h in r) nt[h] && (m = He(h, r, e, v, p, z)) ? m.priority && (c = 1) : g[h] = u = qe.call(e, p, h, "get", r[h], v, z, 0, _.stringFilter);
                e._op && e._op[o] && e.kill(p, e._op[o]), N && e._pt && (ze = e, l.killTweensOf(p, g, e.globalTime(i)), b = !e.parent, ze = 0), e._pt && w && (rt[d.id] = 1)
            }
            c && li(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = T, e._initted = (!e._op || e._pt) && !b, F && i <= 0 && G.render(S, !0, !0)
    }, We = function (t, e, i, s) {
        var r, n, a = e.ease || s || "power1.inOut";
        if (R(e)) n = i[t] || (i[t] = []), e.forEach((function (t, i) {
            return n.push({t: i / (e.length - 1) * 100, v: t, e: a})
        })); else for (r in e) n = i[r] || (i[r] = []), "ease" === r || n.push({t: parseFloat(t), v: e[r], e: a})
    }, Ye = function (t, e, i, s, r) {
        return M(t) ? t.call(e, i, s, r) : A(t) && ~t.indexOf("random(") ? le(t) : t
    }, Xe = ht + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $e = {};
    dt(Xe + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
        return $e[t] = 1
    }));
    var Ue = function (t) {
        function e(e, i, r, a) {
            var o;
            "number" == typeof i && (r.duration = i, i = r, r = null);
            var h, u, p, c, d, f, m, g, v = (o = t.call(this, a ? i : wt(i)) || this).vars, y = v.duration, b = v.delay,
                x = v.immediateRender, S = v.stagger, E = v.overwrite, C = v.keyframes, k = v.defaults,
                w = v.scrollTrigger, T = v.yoyoEase, P = i.parent || l,
                A = (R(e) || O(e) ? D(e[0]) : "length" in i) ? [e] : te(e);
            if (o._targets = A.length ? ut(A) : K("GSAP target " + e + " not found. https://greensock.com", !_.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = E, C || S || V(y) || V(b)) {
                if (i = o.vars, (h = o.timeline = new Re({
                    data: "nested",
                    defaults: k || {},
                    targets: P && "nested" === P.data ? P.vars.targets : A
                })).kill(), h.parent = h._dp = s(o), h._start = 0, S || V(y) || V(b)) {
                    if (c = A.length, m = S && se(S), I(S)) for (d in S) ~Xe.indexOf(d) && (g || (g = {}), g[d] = S[d]);
                    for (u = 0; u < c; u++) (p = kt(i, $e)).stagger = 0, T && (p.yoyoEase = T), g && Et(p, g), f = A[u], p.duration = +Ye(y, s(o), u, f, A), p.delay = (+Ye(b, s(o), u, f, A) || 0) - o._delay, !S && 1 === c && p.delay && (o._delay = b = p.delay, o._start += b, p.delay = 0), h.to(f, p, m ? m(u, f, A) : 0), h._ease = ke.none;
                    h.duration() ? y = b = 0 : o.timeline = 0
                } else if (C) {
                    wt(St(h.vars.defaults, {ease: "none"})), h._ease = De(C.ease || i.ease || "none");
                    var M, F, B, z = 0;
                    if (R(C)) C.forEach((function (t) {
                        return h.to(A, t, ">")
                    })), h.duration(); else {
                        for (d in p = {}, C) "ease" === d || "easeEach" === d || We(d, C[d], p, C.easeEach);
                        for (d in p) for (M = p[d].sort((function (t, e) {
                            return t.t - e.t
                        })), z = 0, u = 0; u < M.length; u++) (B = {
                            ease: (F = M[u]).e,
                            duration: (F.t - (u ? M[u - 1].t : 0)) / 100 * y
                        })[d] = F.v, h.to(A, B, z), z += B.duration;
                        h.duration() < y && h.to({}, {duration: y - h.duration()})
                    }
                }
                y || o.duration(y = h.duration())
            } else o.timeline = 0;
            return !0 !== E || n || (ze = s(o), l.killTweensOf(A), ze = 0), zt(P, s(o), r), i.reversed && o.reverse(), i.paused && o.paused(!0), (x || !y && !C && o._start === mt(P._time) && L(x) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(s(o)) && "nested" !== P.data) && (o._tTime = -1e-8, o.render(Math.max(0, -b) || 0)), w && Nt(s(o), w), o
        }

        r(e, t);
        var i = e.prototype;
        return i.render = function (t, e, i) {
            var s, r, n, o, l, h, u, p, c, d = this._time, f = this._tDur, m = this._dur, g = t < 0,
                v = t > f - 1e-8 && !g ? f : t < 1e-8 ? 0 : t;
            if (m) {
                if (v !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                    if (s = v, p = this.timeline, this._repeat) {
                        if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, i);
                        if (s = mt(v % o), v === f ? (n = this._repeat, s = m) : ((n = ~~(v / o)) && n === v / o && (s = m, n--), s > m && (s = m)), (h = this._yoyo && 1 & n) && (c = this._yEase, s = m - s), l = Lt(this._tTime, o), s === d && !i && this._initted) return this._tTime = v, this;
                        n !== l && (p && this._yEase && Me(p, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(mt(o * n), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Gt(this, g ? t : s, i, e, v)) return this._tTime = 0, this;
                        if (d !== this._time) return this;
                        if (m !== this._dur) return this.render(t, e, i)
                    }
                    if (this._tTime = v, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (c || this._ease)(s / m), this._from && (this.ratio = u = 1 - u), s && !d && !e && !n && (pe(this, "onStart"), this._tTime !== v)) return this;
                    for (r = this._pt; r;) r.r(u, r.d), r = r._next;
                    p && p.render(t < 0 ? t : !s && h ? -1e-8 : p._dur * p._ease(s / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Ft(this, t, 0, i), pe(this, "onUpdate")), this._repeat && n !== l && this.vars.onRepeat && !e && this.parent && pe(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && Ft(this, t, 0, !0), (t || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && At(this, 1), e || g && !d || !(v || d || h) || (pe(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
                }
            } else !function (t, e, i, s) {
                var r, n, o, l = t.ratio, h = e < 0 || !e && (!t._start && function t(e) {
                    var i = e.parent;
                    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
                }(t) && (t._initted || !qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !qt(t)) ? 0 : 1, u = t._rDelay, p = 0;
                if (u && t._repeat && (p = Ut(0, t._tDur, e), n = Lt(p, u), t._yoyo && 1 & n && (h = 1 - h), n !== Lt(t._tTime, u) && (l = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== l || a || s || 1e-8 === t._zTime || !e && t._zTime) {
                    if (!t._initted && Gt(t, e, s, i, p)) return;
                    for (o = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = p, r = t._pt; r;) r.r(h, r.d), r = r._next;
                    e < 0 && Ft(t, e, 0, !0), t._onUpdate && !i && pe(t, "onUpdate"), p && t._repeat && !i && t.parent && pe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && At(t, 1), i || a || (pe(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, i);
            return this
        }, i.targets = function () {
            return this._targets
        }, i.invalidate = function (e) {
            return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, i.resetTo = function (t, e, i, s) {
            m || Ee.wake(), this._ts || this.play();
            var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || je(this, r), function (t, e, i, s, r, n, a) {
                var o, l, h, u, p = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                if (!p) for (p = t._ptCache[e] = [], h = t._ptLookup, u = t._targets.length; u--;) {
                    if ((o = h[u][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                    if (!o) return Ne = 1, t.vars[e] = "+=0", je(t, a), Ne = 0, 1;
                    p.push(o)
                }
                for (u = p.length; u--;) (o = (l = p[u])._pt || l).s = !s && 0 !== s || r ? o.s + (s || 0) + n * o.c : s, o.c = i - o.s, l.e && (l.e = ft(i) + Kt(l.e)), l.b && (l.b = o.s + Kt(l.b))
            }(this, t, e, i, s, this._ease(r / this._dur), r) ? this.resetTo(t, e, i, s) : (Ot(this, 0), this.parent || Tt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, i.kill = function (t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ce(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, ze && !0 !== ze.vars.overwrite)._first || ce(this), this.parent && i !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var s, r, n, a, o, l, h, u = this._targets, p = t ? te(t) : u, c = this._ptLookup, d = this._pt;
            if ((!e || "all" === e) && function (t, e) {
                for (var i = t.length, s = i === e.length; s && i-- && t[i] === e[i];) ;
                return i < 0
            }(u, p)) return "all" === e && (this._pt = 0), ce(this);
            for (s = this._op = this._op || [], "all" !== e && (A(e) && (o = {}, dt(e, (function (t) {
                return o[t] = 1
            })), e = o), e = function (t, e) {
                var i, s, r, n, a = t[0] ? pt(t[0]).harness : 0, o = a && a.aliases;
                if (!o) return e;
                for (s in i = Et({}, e), o) if (s in i) for (r = (n = o[s].split(",")).length; r--;) i[n[r]] = i[s];
                return i
            }(u, e)), h = u.length; h--;) if (~p.indexOf(u[h])) for (o in r = c[h], "all" === e ? (s[h] = e, a = r, n = {}) : (n = s[h] = s[h] || {}, a = e), a) (l = r && r[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Pt(this, l, "_pt"), delete r[o]), "all" !== n && (n[o] = 1);
            return this._initted && !this._pt && d && ce(this), this
        }, e.to = function (t, i) {
            return new e(t, i, arguments[2])
        }, e.from = function (t, e) {
            return Xt(1, arguments)
        }, e.delayedCall = function (t, i, s, r) {
            return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: s,
                onReverseCompleteParams: s,
                callbackScope: r
            })
        }, e.fromTo = function (t, e, i) {
            return Xt(2, arguments)
        }, e.set = function (t, i) {
            return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
        }, e.killTweensOf = function (t, e, i) {
            return l.killTweensOf(t, e, i)
        }, e
    }(Oe);
    St(Ue.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), dt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        Ue[t] = function () {
            var e = new Re, i = Zt.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
    }));
    var Ke = function (t, e, i) {
        return t[e] = i
    }, Ze = function (t, e, i) {
        return t[e](i)
    }, Je = function (t, e, i, s) {
        return t[e](s.fp, i)
    }, Qe = function (t, e, i) {
        return t.setAttribute(e, i)
    }, ti = function (t, e) {
        return M(t[e]) ? Ze : F(t[e]) && t.setAttribute ? Qe : Ke
    }, ei = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }, ii = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }, si = function (t, e) {
        var i = e._pt, s = "";
        if (!t && e.b) s = e.b; else if (1 === t && e.e) s = e.e; else {
            for (; i;) s = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + s, i = i._next;
            s += e.c
        }
        e.set(e.t, e.p, s, e)
    }, ri = function (t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    }, ni = function (t, e, i, s) {
        for (var r, n = this._pt; n;) r = n._next, n.p === s && n.modifier(t, e, i), n = r
    }, ai = function (t) {
        for (var e, i, s = this._pt; s;) i = s._next, s.p === t && !s.op || s.op === t ? Pt(this, s, "_pt") : s.dep || (e = 1), s = i;
        return !e
    }, oi = function (t, e, i, s) {
        s.mSet(t, e, s.m.call(s.tween, i, s.mt), s)
    }, li = function (t) {
        for (var e, i, s, r, n = t._pt; n;) {
            for (e = n._next, i = s; i && i.pr > n.pr;) i = i._next;
            (n._prev = i ? i._prev : r) ? n._prev._next = n : s = n, (n._next = i) ? i._prev = n : r = n, n = e
        }
        t._pt = s
    }, hi = function () {
        function t(t, e, i, s, r, n, a, o, l) {
            this.t = e, this.s = s, this.c = r, this.p = i, this.r = n || ei, this.d = a || this, this.set = o || Ke, this.pr = l || 0, this._next = t, t && (t._prev = this)
        }

        return t.prototype.modifier = function (t, e, i) {
            this.mSet = this.mSet || this.set, this.set = oi, this.m = t, this.mt = i, this.tween = e
        }, t
    }();
    dt(ht + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return it[t] = 1
    })), Y.TweenMax = Y.TweenLite = Ue, Y.TimelineLite = Y.TimelineMax = Re, l = new Re({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), _.stringFilter = Se;
    var ui = [], pi = {}, ci = [], di = 0, fi = 0, mi = function (t) {
        return (pi[t] || ci).map((function (t) {
            return t()
        }))
    }, gi = function () {
        var t = Date.now(), e = [];
        t - di > 2 && (mi("matchMediaInit"), ui.forEach((function (t) {
            var i, s, r, n, a = t.queries, o = t.conditions;
            for (s in a) (i = h.matchMedia(a[s]).matches) && (r = 1), i !== o[s] && (o[s] = i, n = 1);
            n && (t.revert(), r && e.push(t))
        })), mi("matchMediaRevert"), e.forEach((function (t) {
            return t.onMatch(t)
        })), di = t, mi("matchMedia"))
    }, vi = function () {
        function t(t, e) {
            this.selector = e && ee(e), this.data = [], this._r = [], this.isReverted = !1, this.id = fi++, t && this.add(t)
        }

        var e = t.prototype;
        return e.add = function (t, e, i) {
            M(t) && (i = e, e = t, t = M);
            var s = this, r = function () {
                var t, r = o, n = s.selector;
                return r && r !== s && r.data.push(s), i && (s.selector = ee(i)), o = s, t = e.apply(s, arguments), M(t) && s._r.push(t), o = r, s.selector = n, s.isReverted = !1, t
            };
            return s.last = r, t === M ? r(s) : t ? s[t] = r : r
        }, e.ignore = function (t) {
            var e = o;
            o = null, t(this), o = e
        }, e.getTweens = function () {
            var e = [];
            return this.data.forEach((function (i) {
                return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof Ue && !(i.parent && "nested" === i.parent.data) && e.push(i)
            })), e
        }, e.clear = function () {
            this._r.length = this.data.length = 0
        }, e.kill = function (t, e) {
            var i = this;
            if (t) {
                var s = this.getTweens();
                this.data.forEach((function (t) {
                    "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function (t) {
                        return s.splice(s.indexOf(t), 1)
                    })))
                })), s.map((function (t) {
                    return {g: t.globalTime(0), t: t}
                })).sort((function (t, e) {
                    return e.g - t.g || -1 / 0
                })).forEach((function (e) {
                    return e.t.revert(t)
                })), this.data.forEach((function (e) {
                    return !(e instanceof Ue) && e.revert && e.revert(t)
                })), this._r.forEach((function (e) {
                    return e(t, i)
                })), this.isReverted = !0
            } else this.data.forEach((function (t) {
                return t.kill && t.kill()
            }));
            if (this.clear(), e) for (var r = ui.length; r--;) ui[r].id === this.id && ui.splice(r, 1)
        }, e.revert = function (t) {
            this.kill(t || {})
        }, t
    }(), yi = function () {
        function t(t) {
            this.contexts = [], this.scope = t
        }

        var e = t.prototype;
        return e.add = function (t, e, i) {
            I(t) || (t = {matches: t});
            var s, r, n, a = new vi(0, i || this.scope), l = a.conditions = {};
            for (r in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === r ? n = 1 : (s = h.matchMedia(t[r])) && (ui.indexOf(a) < 0 && ui.push(a), (l[r] = s.matches) && (n = 1), s.addListener ? s.addListener(gi) : s.addEventListener("change", gi));
            return n && e(a), this
        }, e.revert = function (t) {
            this.kill(t || {})
        }, e.kill = function (t) {
            this.contexts.forEach((function (e) {
                return e.kill(t, !0)
            }))
        }, t
    }(), bi = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach((function (t) {
                return fe(t)
            }))
        },
        timeline: function (t) {
            return new Re(t)
        },
        getTweensOf: function (t, e) {
            return l.getTweensOf(t, e)
        },
        getProperty: function (t, e, i, s) {
            A(t) && (t = te(t)[0]);
            var r = pt(t || {}).get, n = i ? xt : _t;
            return "native" === i && (i = ""), t ? e ? n((nt[e] && nt[e].get || r)(t, e, i, s)) : function (e, i, s) {
                return n((nt[e] && nt[e].get || r)(t, e, i, s))
            } : t
        },
        quickSetter: function (t, e, i) {
            if ((t = te(t)).length > 1) {
                var s = t.map((function (t) {
                    return Si.quickSetter(t, e, i)
                })), r = s.length;
                return function (t) {
                    for (var e = r; e--;) s[e](t)
                }
            }
            t = t[0] || {};
            var n = nt[e], a = pt(t), o = a.harness && (a.harness.aliases || {})[e] || e, l = n ? function (e) {
                var s = new n;
                f._pt = 0, s.init(t, i ? e + i : e, f, 0, [t]), s.render(1, s), f._pt && ri(1, f)
            } : a.set(t, o);
            return n ? l : function (e) {
                return l(t, o, i ? e + i : e, a, 1)
            }
        },
        quickTo: function (t, e, i) {
            var s, r = Si.to(t, Et(((s = {})[e] = "+=0.1", s.paused = !0, s), i || {})), n = function (t, i, s) {
                return r.resetTo(e, t, i, s)
            };
            return n.tween = r, n
        },
        isTweening: function (t) {
            return l.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = De(t.ease, x.ease)), Ct(x, t || {})
        },
        config: function (t) {
            return Ct(_, t || {})
        },
        registerEffect: function (t) {
            var e = t.name, i = t.effect, s = t.plugins, r = t.defaults, n = t.extendTimeline;
            (s || "").split(",").forEach((function (t) {
                return t && !nt[t] && !Y[t] && K(e + " effect requires " + t + " plugin.")
            })), at[e] = function (t, e, s) {
                return i(te(t), St(e || {}, r), s)
            }, n && (Re.prototype[e] = function (t, i, s) {
                return this.add(at[e](t, I(i) ? i : (s = i) && {}, this), s)
            })
        },
        registerEase: function (t, e) {
            ke[t] = De(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? De(t, e) : ke
        },
        getById: function (t) {
            return l.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i, s, r = new Re(t);
            for (r.smoothChildTiming = L(t.smoothChildTiming), l.remove(r), r._dp = 0, r._time = r._tTime = l._time, i = l._first; i;) s = i._next, !e && !i._dur && i instanceof Ue && i.vars.onComplete === i._targets[0] || zt(r, i, i._start - i._delay), i = s;
            return zt(l, r, 0), r
        },
        context: function (t, e) {
            return t ? new vi(t, e) : o
        },
        matchMedia: function (t) {
            return new yi(t)
        },
        matchMediaRefresh: function () {
            return ui.forEach((function (t) {
                var e, i, s = t.conditions;
                for (i in s) s[i] && (s[i] = !1, e = 1);
                e && t.revert()
            })) || gi()
        },
        addEventListener: function (t, e) {
            var i = pi[t] || (pi[t] = []);
            ~i.indexOf(e) || i.push(e)
        },
        removeEventListener: function (t, e) {
            var i = pi[t], s = i && i.indexOf(e);
            s >= 0 && i.splice(s, 1)
        },
        utils: {
            wrap: function t(e, i, s) {
                var r = i - e;
                return R(e) ? oe(e, t(0, e.length), i) : $t(s, (function (t) {
                    return (r + (t - e) % r) % r + e
                }))
            }, wrapYoyo: function t(e, i, s) {
                var r = i - e, n = 2 * r;
                return R(e) ? oe(e, t(0, e.length - 1), i) : $t(s, (function (t) {
                    return e + ((t = (n + (t - e) % n) % n || 0) > r ? n - t : t)
                }))
            }, distribute: se, random: ae, snap: ne, normalize: function (t, e, i) {
                return he(t, e, 0, 1, i)
            }, getUnit: Kt, clamp: function (t, e, i) {
                return $t(i, (function (i) {
                    return Ut(t, e, i)
                }))
            }, splitColor: ve, toArray: te, selector: ee, mapRange: he, pipe: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }), t)
                }
            }, unitize: function (t, e) {
                return function (i) {
                    return t(parseFloat(i)) + (e || Kt(i))
                }
            }, interpolate: function t(e, i, s, r) {
                var n = isNaN(e + i) ? 0 : function (t) {
                    return (1 - t) * e + t * i
                };
                if (!n) {
                    var a, o, l, h, u, p = A(e), c = {};
                    if (!0 === s && (r = 1) && (s = null), p) e = {p: e}, i = {p: i}; else if (R(e) && !R(i)) {
                        for (l = [], h = e.length, u = h - 2, o = 1; o < h; o++) l.push(t(e[o - 1], e[o]));
                        h--, n = function (t) {
                            t *= h;
                            var e = Math.min(u, ~~t);
                            return l[e](t - e)
                        }, s = i
                    } else r || (e = Et(R(e) ? [] : {}, e));
                    if (!l) {
                        for (a in i) qe.call(c, e, a, "get", i[a]);
                        n = function (t) {
                            return ri(t, c) || (p ? e.p : e)
                        }
                    }
                }
                return $t(s, n)
            }, shuffle: ie
        },
        install: $,
        effects: at,
        ticker: Ee,
        updateRoot: Re.updateRoot,
        plugins: nt,
        globalTimeline: l,
        core: {
            PropTween: hi,
            globals: Z,
            Tween: Ue,
            Timeline: Re,
            Animation: Oe,
            getCache: pt,
            _removeLinkedListItem: Pt,
            reverting: function () {
                return a
            },
            context: function (t) {
                return t && o && (o.data.push(t), t._ctx = o), o
            },
            suppressOverwrites: function (t) {
                return n = t
            }
        }
    };
    dt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return bi[t] = Ue[t]
    })), Ee.add(Re.updateRoot), f = bi.to({}, {duration: 0});
    var _i = function (t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    }, xi = function (t, e) {
        return {
            name: t, rawVars: 1, init: function (t, i, s) {
                s._onInit = function (t) {
                    var s, r;
                    if (A(i) && (s = {}, dt(i, (function (t) {
                        return s[t] = 1
                    })), i = s), e) {
                        for (r in s = {}, i) s[r] = e(i[r]);
                        i = s
                    }
                    !function (t, e) {
                        var i, s, r, n = t._targets;
                        for (i in e) for (s = n.length; s--;) (r = t._ptLookup[s][i]) && (r = r.d) && (r._pt && (r = _i(r, i)), r && r.modifier && r.modifier(e[i], t, n[s], i))
                    }(t, i)
                }
            }
        }
    }, Si = bi.registerPlugin({
        name: "attr", init: function (t, e, i, s, r) {
            var n, a, o;
            for (n in this.tween = i, e) o = t.getAttribute(n) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[n], s, r, 0, 0, n)).op = n, a.b = o, this._props.push(n)
        }, render: function (t, e) {
            for (var i = e._pt; i;) a ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
        }
    }, {
        name: "endArray", init: function (t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
        }
    }, xi("roundProps", re), xi("modifiers"), xi("snap", ne)) || bi;
    Ue.version = Re.version = Si.version = "3.12.2", c = 1, B() && Ce();
    ke.Power0, ke.Power1, ke.Power2, ke.Power3, ke.Power4, ke.Linear, ke.Quad, ke.Cubic, ke.Quart, ke.Quint, ke.Strong, ke.Elastic, ke.Back, ke.SteppedEase, ke.Bounce, ke.Sine, ke.Expo, ke.Circ;
    /*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Ei, Ci, ki, wi, Ti, Pi, Ai, Mi, Di = {}, Fi = 180 / Math.PI, Ii = Math.PI / 180, Li = Math.atan2,
        Bi = /([A-Z])/g, Vi = /(left|right|width|margin|padding|x)/i, Oi = /[\s,\(]\S/,
        Ri = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, zi = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, Ni = function (t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, Gi = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        }, qi = function (t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        }, Hi = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }, ji = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        }, Wi = function (t, e, i) {
            return t.style[e] = i
        }, Yi = function (t, e, i) {
            return t.style.setProperty(e, i)
        }, Xi = function (t, e, i) {
            return t._gsap[e] = i
        }, $i = function (t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i
        }, Ui = function (t, e, i, s, r) {
            var n = t._gsap;
            n.scaleX = n.scaleY = i, n.renderTransform(r, n)
        }, Ki = function (t, e, i, s, r) {
            var n = t._gsap;
            n[e] = i, n.renderTransform(r, n)
        }, Zi = "transform", Ji = Zi + "Origin", Qi = function t(e, i) {
            var s = this, r = this.target, n = r.style;
            if (e in Di && n) {
                if (this.tfm = this.tfm || {}, "transform" === e) return Ri.transform.split(",").forEach((function (e) {
                    return t.call(s, e, i)
                }));
                if (~(e = Ri[e] || e).indexOf(",") ? e.split(",").forEach((function (t) {
                    return s.tfm[t] = vs(r, t)
                })) : this.tfm[e] = r._gsap.x ? r._gsap[e] : vs(r, e), this.props.indexOf(Zi) >= 0) return;
                r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Ji, i, "")), e = Zi
            }
            (n || i) && this.props.push(e, i, n[e])
        }, ts = function (t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        }, es = function () {
            var t, e, i = this.props, s = this.target, r = s.style, n = s._gsap;
            for (t = 0; t < i.length; t += 3) i[t + 1] ? s[i[t]] = i[t + 2] : i[t + 2] ? r[i[t]] = i[t + 2] : r.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Bi, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) n[e] = this.tfm[e];
                n.svg && (n.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), (t = Ai()) && t.isStart || r[Zi] || (ts(r), n.uncache = 1)
            }
        }, is = function (t, e) {
            var i = {target: t, props: [], revert: es, save: Qi};
            return t._gsap || Si.core.getCache(t), e && e.split(",").forEach((function (t) {
                return i.save(t)
            })), i
        }, ss = function (t, e) {
            var i = Ci.createElementNS ? Ci.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ci.createElement(t);
            return i.style ? i : Ci.createElement(t)
        }, rs = function t(e, i, s) {
            var r = getComputedStyle(e);
            return r[i] || r.getPropertyValue(i.replace(Bi, "-$1").toLowerCase()) || r.getPropertyValue(i) || !s && t(e, as(i) || i, 1) || ""
        }, ns = "O,Moz,ms,Ms,Webkit".split(","), as = function (t, e, i) {
            var s = (e || Ti).style, r = 5;
            if (t in s && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(ns[r] + t in s);) ;
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? ns[r] : "") + t
        }, os = function () {
            "undefined" != typeof window && window.document && (Ei = window, Ci = Ei.document, ki = Ci.documentElement, Ti = ss("div") || {style: {}}, ss("div"), Zi = as(Zi), Ji = Zi + "Origin", Ti.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Mi = !!as("perspective"), Ai = Si.core.reverting, wi = 1)
        }, ls = function t(e) {
            var i,
                s = ss("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode, n = this.nextSibling, a = this.style.cssText;
            if (ki.appendChild(s), s.appendChild(this), this.style.display = "block", e) try {
                i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {
            } else this._gsapBBox && (i = this._gsapBBox());
            return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), ki.removeChild(s), this.style.cssText = a, i
        }, hs = function (t, e) {
            for (var i = e.length; i--;) if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        }, us = function (t) {
            var e;
            try {
                e = t.getBBox()
            } catch (i) {
                e = ls.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === ls || (e = ls.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +hs(t, ["x", "cx", "x1"]) || 0,
                y: +hs(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        }, ps = function (t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !us(t))
        }, cs = function (t, e) {
            if (e) {
                var i = t.style;
                e in Di && e !== Ji && (e = Zi), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Bi, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        }, ds = function (t, e, i, s, r, n) {
            var a = new hi(t._pt, e, i, 0, 1, n ? ji : Hi);
            return t._pt = a, a.b = s, a.e = r, t._props.push(i), a
        }, fs = {deg: 1, rad: 1, turn: 1}, ms = {grid: 1, flex: 1}, gs = function t(e, i, s, r) {
            var n, a, o, l, h = parseFloat(s) || 0, u = (s + "").trim().substr((h + "").length) || "px", p = Ti.style,
                c = Vi.test(i), d = "svg" === e.tagName.toLowerCase(),
                f = (d ? "client" : "offset") + (c ? "Width" : "Height"), m = "px" === r, g = "%" === r;
            return r === u || !h || fs[r] || fs[u] ? h : ("px" !== u && !m && (h = t(e, i, s, "px")), l = e.getCTM && ps(e), !g && "%" !== u || !Di[i] && !~i.indexOf("adius") ? (p[c ? "width" : "height"] = 100 + (m ? u : r), a = ~i.indexOf("adius") || "em" === r && e.appendChild && !d ? e : e.parentNode, l && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Ci && a.appendChild || (a = Ci.body), (o = a._gsap) && g && o.width && c && o.time === Ee.time && !o.uncache ? ft(h / o.width * 100) : ((g || "%" === u) && !ms[rs(a, "display")] && (p.position = rs(e, "position")), a === e && (p.position = "static"), a.appendChild(Ti), n = Ti[f], a.removeChild(Ti), p.position = "absolute", c && g && ((o = pt(a)).time = Ee.time, o.width = a[f]), ft(m ? n * h / 100 : n && h ? 100 / n * h : 0))) : (n = l ? e.getBBox()[c ? "width" : "height"] : e[f], ft(g ? h / n * 100 : h / 100 * n)))
        }, vs = function (t, e, i, s) {
            var r;
            return wi || os(), e in Ri && "transform" !== e && ~(e = Ri[e]).indexOf(",") && (e = e.split(",")[0]), Di[e] && "transform" !== e ? (r = Ps(t, s), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : As(rs(t, Ji)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = xs[e] && xs[e](t, e, i) || rs(t, e) || ct(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? gs(t, e, r, i) + i : r
        }, ys = function (t, e, i, s) {
            if (!i || "none" === i) {
                var r = as(e, t, 1), n = r && rs(t, r, 1);
                n && n !== i ? (e = r, i = n) : "borderColor" === e && (i = rs(t, "borderTopColor"))
            }
            var a, o, l, h, u, p, c, d, f, m, g, v = new hi(this._pt, t.style, e, 0, 1, si), y = 0, b = 0;
            if (v.b = i, v.e = s, i += "", "auto" === (s += "") && (t.style[e] = s, s = rs(t, e) || s, t.style[e] = i), Se(a = [i, s]), s = a[1], l = (i = a[0]).match(G) || [], (s.match(G) || []).length) {
                for (; o = G.exec(s);) c = o[0], f = s.substring(y, o.index), u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1), c !== (p = l[b++] || "") && (h = parseFloat(p) || 0, g = p.substr((h + "").length), "=" === c.charAt(1) && (c = gt(h, c) + g), d = parseFloat(c), m = c.substr((d + "").length), y = G.lastIndex - m.length, m || (m = m || _.units[e] || g, y === s.length && (s += m, v.e += m)), g !== m && (h = gs(t, e, p, m) || 0), v._pt = {
                    _next: v._pt,
                    p: f || 1 === b ? f : ",",
                    s: h,
                    c: d - h,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
                v.c = y < s.length ? s.substring(y, s.length) : ""
            } else v.r = "display" === e && "none" === s ? ji : Hi;
            return H.test(s) && (v.e = 0), this._pt = v, v
        }, bs = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, _s = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, s, r, n = e.t, a = n.style, o = e.u, l = n._gsap;
                if ("all" === o || !0 === o) a.cssText = "", s = 1; else for (r = (o = o.split(",")).length; --r > -1;) i = o[r], Di[i] && (s = 1, i = "transformOrigin" === i ? Ji : Zi), cs(n, i);
                s && (cs(n, Zi), l && (l.svg && n.removeAttribute("transform"), Ps(n, 1), l.uncache = 1, ts(a)))
            }
        }, xs = {
            clearProps: function (t, e, i, s, r) {
                if ("isFromStart" !== r.data) {
                    var n = t._pt = new hi(t._pt, e, i, 0, 0, _s);
                    return n.u = s, n.pr = -10, n.tween = r, t._props.push(i), 1
                }
            }
        }, Ss = [1, 0, 0, 1, 0, 0], Es = {}, Cs = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        }, ks = function (t) {
            var e = rs(t, Zi);
            return Cs(e) ? Ss : e.substr(7).match(N).map(ft)
        }, ws = function (t, e) {
            var i, s, r, n, a = t._gsap || pt(t), o = t.style, l = ks(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Ss : l : (l !== Ss || t.offsetParent || t === ki || a.svg || (r = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (n = 1, s = t.nextElementSibling, ki.appendChild(t)), l = ks(t), r ? o.display = r : cs(t, "display"), n && (s ? i.insertBefore(t, s) : i ? i.appendChild(t) : ki.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        }, Ts = function (t, e, i, s, r, n) {
            var a, o, l, h = t._gsap, u = r || ws(t, !0), p = h.xOrigin || 0, c = h.yOrigin || 0, d = h.xOffset || 0,
                f = h.yOffset || 0, m = u[0], g = u[1], v = u[2], y = u[3], b = u[4], _ = u[5], x = e.split(" "),
                S = parseFloat(x[0]) || 0, E = parseFloat(x[1]) || 0;
            i ? u !== Ss && (o = m * y - g * v) && (l = S * (-g / o) + E * (m / o) - (m * _ - g * b) / o, S = S * (y / o) + E * (-v / o) + (v * _ - y * b) / o, E = l) : (S = (a = us(t)).x + (~x[0].indexOf("%") ? S / 100 * a.width : S), E = a.y + (~(x[1] || x[0]).indexOf("%") ? E / 100 * a.height : E)), s || !1 !== s && h.smooth ? (b = S - p, _ = E - c, h.xOffset = d + (b * m + _ * v) - b, h.yOffset = f + (b * g + _ * y) - _) : h.xOffset = h.yOffset = 0, h.xOrigin = S, h.yOrigin = E, h.smooth = !!s, h.origin = e, h.originIsAbsolute = !!i, t.style[Ji] = "0px 0px", n && (ds(n, h, "xOrigin", p, S), ds(n, h, "yOrigin", c, E), ds(n, h, "xOffset", d, h.xOffset), ds(n, h, "yOffset", f, h.yOffset)), t.setAttribute("data-svg-origin", S + " " + E)
        }, Ps = function (t, e) {
            var i = t._gsap || new Ve(t);
            if ("x" in i && !e && !i.uncache) return i;
            var s, r, n, a, o, l, h, u, p, c, d, f, m, g, v, y, b, x, S, E, C, k, w, T, P, A, M, D, F, I, L, B, V = t.style,
                O = i.scaleX < 0, R = getComputedStyle(t), z = rs(t, Ji) || "0";
            return s = r = n = l = h = u = p = c = d = 0, a = o = 1, i.svg = !(!t.getCTM || !ps(t)), R.translate && ("none" === R.translate && "none" === R.scale && "none" === R.rotate || (V[Zi] = ("none" !== R.translate ? "translate3d(" + (R.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== R.rotate ? "rotate(" + R.rotate + ") " : "") + ("none" !== R.scale ? "scale(" + R.scale.split(" ").join(",") + ") " : "") + ("none" !== R[Zi] ? R[Zi] : "")), V.scale = V.rotate = V.translate = "none"), g = ws(t, i.svg), i.svg && (i.uncache ? (P = t.getBBox(), z = i.xOrigin - P.x + "px " + (i.yOrigin - P.y) + "px", T = "") : T = !e && t.getAttribute("data-svg-origin"), Ts(t, T || z, !!T || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== Ss && (x = g[0], S = g[1], E = g[2], C = g[3], s = k = g[4], r = w = g[5], 6 === g.length ? (a = Math.sqrt(x * x + S * S), o = Math.sqrt(C * C + E * E), l = x || S ? Li(S, x) * Fi : 0, (p = E || C ? Li(E, C) * Fi + l : 0) && (o *= Math.abs(Math.cos(p * Ii))), i.svg && (s -= f - (f * x + m * E), r -= m - (f * S + m * C))) : (B = g[6], I = g[7], M = g[8], D = g[9], F = g[10], L = g[11], s = g[12], r = g[13], n = g[14], h = (v = Li(B, F)) * Fi, v && (T = k * (y = Math.cos(-v)) + M * (b = Math.sin(-v)), P = w * y + D * b, A = B * y + F * b, M = k * -b + M * y, D = w * -b + D * y, F = B * -b + F * y, L = I * -b + L * y, k = T, w = P, B = A), u = (v = Li(-E, F)) * Fi, v && (y = Math.cos(-v), L = C * (b = Math.sin(-v)) + L * y, x = T = x * y - M * b, S = P = S * y - D * b, E = A = E * y - F * b), l = (v = Li(S, x)) * Fi, v && (T = x * (y = Math.cos(v)) + S * (b = Math.sin(v)), P = k * y + w * b, S = S * y - x * b, w = w * y - k * b, x = T, k = P), h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0, u = 180 - u), a = ft(Math.sqrt(x * x + S * S + E * E)), o = ft(Math.sqrt(w * w + B * B)), v = Li(k, w), p = Math.abs(v) > 2e-4 ? v * Fi : 0, d = L ? 1 / (L < 0 ? -L : L) : 0), i.svg && (T = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Cs(rs(t, Zi)), T && t.setAttribute("transform", T))), Math.abs(p) > 90 && Math.abs(p) < 270 && (O ? (a *= -1, p += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, p += p <= 0 ? 180 : -180)), e = e || i.uncache, i.x = s - ((i.xPercent = s && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = n + "px", i.scaleX = ft(a), i.scaleY = ft(o), i.rotation = ft(l) + "deg", i.rotationX = ft(h) + "deg", i.rotationY = ft(u) + "deg", i.skewX = p + "deg", i.skewY = c + "deg", i.transformPerspective = d + "px", (i.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (V[Ji] = As(z)), i.xOffset = i.yOffset = 0, i.force3D = _.force3D, i.renderTransform = i.svg ? Is : Mi ? Fs : Ds, i.uncache = 0, i
        }, As = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, Ms = function (t, e, i) {
            var s = Kt(e);
            return ft(parseFloat(e) + parseFloat(gs(t, "x", i + "px", s))) + s
        }, Ds = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fs(t, e)
        }, Fs = function (t, e) {
            var i = e || this, s = i.xPercent, r = i.yPercent, n = i.x, a = i.y, o = i.z, l = i.rotation, h = i.rotationY,
                u = i.rotationX, p = i.skewX, c = i.skewY, d = i.scaleX, f = i.scaleY, m = i.transformPerspective,
                g = i.force3D, v = i.target, y = i.zOrigin, b = "", _ = "auto" === g && t && 1 !== t || !0 === g;
            if (y && ("0deg" !== u || "0deg" !== h)) {
                var x, S = parseFloat(h) * Ii, E = Math.sin(S), C = Math.cos(S);
                S = parseFloat(u) * Ii, x = Math.cos(S), n = Ms(v, n, E * x * -y), a = Ms(v, a, -Math.sin(S) * -y), o = Ms(v, o, C * x * -y + y)
            }
            "0px" !== m && (b += "perspective(" + m + ") "), (s || r) && (b += "translate(" + s + "%, " + r + "%) "), (_ || "0px" !== n || "0px" !== a || "0px" !== o) && (b += "0px" !== o || _ ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + ") "), "0deg" !== l && (b += "rotate(" + l + ") "), "0deg" !== h && (b += "rotateY(" + h + ") "), "0deg" !== u && (b += "rotateX(" + u + ") "), "0deg" === p && "0deg" === c || (b += "skew(" + p + ", " + c + ") "), 1 === d && 1 === f || (b += "scale(" + d + ", " + f + ") "), v.style[Zi] = b || "translate(0, 0)"
        }, Is = function (t, e) {
            var i, s, r, n, a, o = e || this, l = o.xPercent, h = o.yPercent, u = o.x, p = o.y, c = o.rotation, d = o.skewX,
                f = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, y = o.xOrigin, b = o.yOrigin, _ = o.xOffset,
                x = o.yOffset, S = o.forceCSS, E = parseFloat(u), C = parseFloat(p);
            c = parseFloat(c), d = parseFloat(d), (f = parseFloat(f)) && (d += f = parseFloat(f), c += f), c || d ? (c *= Ii, d *= Ii, i = Math.cos(c) * m, s = Math.sin(c) * m, r = Math.sin(c - d) * -g, n = Math.cos(c - d) * g, d && (f *= Ii, a = Math.tan(d - f), r *= a = Math.sqrt(1 + a * a), n *= a, f && (a = Math.tan(f), i *= a = Math.sqrt(1 + a * a), s *= a)), i = ft(i), s = ft(s), r = ft(r), n = ft(n)) : (i = m, n = g, s = r = 0), (E && !~(u + "").indexOf("px") || C && !~(p + "").indexOf("px")) && (E = gs(v, "x", u, "px"), C = gs(v, "y", p, "px")), (y || b || _ || x) && (E = ft(E + y - (y * i + b * r) + _), C = ft(C + b - (y * s + b * n) + x)), (l || h) && (a = v.getBBox(), E = ft(E + l / 100 * a.width), C = ft(C + h / 100 * a.height)), a = "matrix(" + i + "," + s + "," + r + "," + n + "," + E + "," + C + ")", v.setAttribute("transform", a), S && (v.style[Zi] = a)
        }, Ls = function (t, e, i, s, r) {
            var n, a, o = A(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? Fi : 1) - s, h = s + l + "deg";
            return o && ("short" === (n = r.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360), "cw" === n && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === n && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), t._pt = a = new hi(t._pt, e, i, s, l, Ni), a.e = h, a.u = "deg", t._props.push(i), a
        }, Bs = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, Vs = function (t, e, i) {
            var s, r, n, a, o, l, h, u = Bs({}, i._gsap), p = i.style;
            for (r in u.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), p[Zi] = e, s = Ps(i, 1), cs(i, Zi), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[Zi], p[Zi] = e, s = Ps(i, 1), p[Zi] = n), Di) (n = u[r]) !== (a = s[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = Kt(n) !== (h = Kt(a)) ? gs(i, r, n, h) : parseFloat(n), l = parseFloat(a), t._pt = new hi(t._pt, s, r, o, l - o, zi), t._pt.u = h || 0, t._props.push(r));
            Bs(s, u)
        };
    dt("padding,margin,Width,Radius", (function (t, e) {
        var i = "Top", s = "Right", r = "Bottom", n = "Left",
            a = (e < 3 ? [i, s, r, n] : [i + n, i + s, r + s, r + n]).map((function (i) {
                return e < 2 ? t + i : "border" + i + t
            }));
        xs[e > 1 ? "border" + t : t] = function (t, e, i, s, r) {
            var n, o;
            if (arguments.length < 4) return n = a.map((function (e) {
                return vs(t, e, i)
            })), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
            n = (s + "").split(" "), o = {}, a.forEach((function (t, e) {
                return o[t] = n[e] = n[e] || n[(e - 1) / 2 | 0]
            })), t.init(e, o, r)
        }
    }));
    var Os, Rs, zs = {
        name: "css", register: os, targetTest: function (t) {
            return t.style && t.nodeType
        }, init: function (t, e, i, s, r) {
            var n, a, o, l, h, u, p, c, d, f, m, g, v, y, b, x, S, E, C, k, w = this._props, T = t.style,
                P = i.vars.startAt;
            for (p in wi || os(), this.styles = this.styles || is(t), x = this.styles.props, this.tween = i, e) if ("autoRound" !== p && (a = e[p], !nt[p] || !He(p, e, i, s, t, r))) if (h = typeof a, u = xs[p], "function" === h && (h = typeof (a = a.call(i, s, t, r))), "string" === h && ~a.indexOf("random(") && (a = le(a)), u) u(this, t, p, a, i) && (b = 1); else if ("--" === p.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(p) + "").trim(), a += "", _e.lastIndex = 0, _e.test(n) || (c = Kt(n), d = Kt(a)), d ? c !== d && (n = gs(t, p, n, d) + d) : c && (a += c), this.add(T, "setProperty", n, a, s, r, 0, 0, p), w.push(p), x.push(p, 0, T[p]); else if ("undefined" !== h) {
                if (P && p in P ? (n = "function" == typeof P[p] ? P[p].call(i, s, t, r) : P[p], A(n) && ~n.indexOf("random(") && (n = le(n)), Kt(n + "") || (n += _.units[p] || Kt(vs(t, p)) || ""), "=" === (n + "").charAt(1) && (n = vs(t, p))) : n = vs(t, p), l = parseFloat(n), (f = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), p in Ri && ("autoAlpha" === p && (1 === l && "hidden" === vs(t, "visibility") && o && (l = 0), x.push("visibility", 0, T.visibility), ds(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== p && "transform" !== p && ~(p = Ri[p]).indexOf(",") && (p = p.split(",")[0])), m = p in Di) if (this.styles.save(p), g || ((v = t._gsap).renderTransform && !e.parseTransform || Ps(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new hi(this._pt, T, Zi, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === p) this._pt = new hi(this._pt, v, "scaleY", v.scaleY, (f ? gt(v.scaleY, f + o) : o) - v.scaleY || 0, zi), this._pt.u = 0, w.push("scaleY", p), p += "X"; else {
                    if ("transformOrigin" === p) {
                        x.push(Ji, 0, T[Ji]), E = void 0, C = void 0, k = void 0, E = (S = a).split(" "), C = E[0], k = E[1] || "50%", "top" !== C && "bottom" !== C && "left" !== k && "right" !== k || (S = C, C = k, k = S), E[0] = bs[C] || C, E[1] = bs[k] || k, a = E.join(" "), v.svg ? Ts(t, a, 0, y, 0, this) : ((d = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && ds(this, v, "zOrigin", v.zOrigin, d), ds(this, T, p, As(n), As(a)));
                        continue
                    }
                    if ("svgOrigin" === p) {
                        Ts(t, a, 1, y, 0, this);
                        continue
                    }
                    if (p in Es) {
                        Ls(this, v, p, l, f ? gt(l, f + a) : a);
                        continue
                    }
                    if ("smoothOrigin" === p) {
                        ds(this, v, "smooth", v.smooth, a);
                        continue
                    }
                    if ("force3D" === p) {
                        v[p] = a;
                        continue
                    }
                    if ("transform" === p) {
                        Vs(this, a, t);
                        continue
                    }
                } else p in T || (p = as(p) || p);
                if (m || (o || 0 === o) && (l || 0 === l) && !Oi.test(a) && p in T) o || (o = 0), (c = (n + "").substr((l + "").length)) !== (d = Kt(a) || (p in _.units ? _.units[p] : c)) && (l = gs(t, p, n, d)), this._pt = new hi(this._pt, m ? v : T, p, l, (f ? gt(l, f + o) : o) - l, m || "px" !== d && "zIndex" !== p || !1 === e.autoRound ? zi : qi), this._pt.u = d || 0, c !== d && "%" !== d && (this._pt.b = n, this._pt.r = Gi); else if (p in T) ys.call(this, t, p, n, f ? f + a : a); else if (p in t) this.add(t, p, n || t[p], f ? f + a : a, s, r); else if ("parseTransform" !== p) {
                    U(p, a);
                    continue
                }
                m || (p in T ? x.push(p, 0, T[p]) : x.push(p, 1, n || t[p])), w.push(p)
            }
            b && li(this)
        }, render: function (t, e) {
            if (e.tween._time || !Ai()) for (var i = e._pt; i;) i.r(t, i.d), i = i._next; else e.styles.revert()
        }, get: vs, aliases: Ri, getSetter: function (t, e, i) {
            var s = Ri[e];
            return s && s.indexOf(",") < 0 && (e = s), e in Di && e !== Ji && (t._gsap.x || vs(t, "x")) ? i && Pi === i ? "scale" === e ? $i : Xi : (Pi = i || {}) && ("scale" === e ? Ui : Ki) : t.style && !F(t.style[e]) ? Wi : ~e.indexOf("-") ? Yi : ti(t, e)
        }, core: {_removeProperty: cs, _getMatrix: ws}
    };
    Si.utils.checkPrefix = as, Si.core.getStyleSaver = is, Rs = dt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Os = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
        Di[t] = 1
    })), dt(Os, (function (t) {
        _.units[t] = "deg", Es[t] = 1
    })), Ri[Rs[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Os, dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
        var e = t.split(":");
        Ri[e[1]] = Rs[e[0]]
    })), dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
        _.units[t] = "px"
    })), Si.registerPlugin(zs);
    var Ns = Si.registerPlugin(zs) || Si;
    Ns.core.Tween
}, function (t, e) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function (t, e, i) {
    "use strict";
    i.d(e, "a", (function () {
        return _
    }));
    /*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var s, r, n, a, o, l, h, u, p = function () {
        return "undefined" != typeof window
    }, c = function () {
        return s || p() && (s = window.gsap) && s.registerPlugin && s
    }, d = function (t) {
        return "string" == typeof t
    }, f = function (t) {
        return "function" == typeof t
    }, m = function (t, e) {
        var i = "x" === e ? "Width" : "Height", s = "scroll" + i, r = "client" + i;
        return t === n || t === a || t === o ? Math.max(a[s], o[s]) - (n["inner" + i] || a[r] || o[r]) : t[s] - t["offset" + i]
    }, g = function (t, e) {
        var i = "scroll" + ("x" === e ? "Left" : "Top");
        return t === n && (null != t.pageXOffset ? i = "page" + e.toUpperCase() + "Offset" : t = null != a[i] ? a : o), function () {
            return t[i]
        }
    }, v = function (t, e) {
        if (!(t = l(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var i = t.getBoundingClientRect(), s = !e || e === n || e === o, r = s ? {
            top: a.clientTop - (n.pageYOffset || a.scrollTop || o.scrollTop || 0),
            left: a.clientLeft - (n.pageXOffset || a.scrollLeft || o.scrollLeft || 0)
        } : e.getBoundingClientRect(), h = {x: i.left - r.left, y: i.top - r.top};
        return !s && e && (h.x += g(e, "x")(), h.y += g(e, "y")()), h
    }, y = function (t, e, i, s, r) {
        return isNaN(t) || "object" == typeof t ? d(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + s - r : "max" === t ? m(e, i) - r : Math.min(m(e, i), v(t, e)[i] - r) : parseFloat(t) - r
    }, b = function () {
        s = c(), p() && s && "undefined" != typeof document && document.body && (n = window, o = document.body, a = document.documentElement, l = s.utils.toArray, s.config({autoKillThreshold: 7}), h = s.config(), r = 1)
    }, _ = {
        version: "3.12.2", name: "scrollTo", rawVars: 1, register: function (t) {
            s = t, b()
        }, init: function (t, e, i, a, o) {
            r || b();
            var l = s.getProperty(t, "scrollSnapType");
            this.isWin = t === n, this.target = t, this.tween = i, e = function (t, e, i, s) {
                if (f(t) && (t = t(e, i, s)), "object" != typeof t) return d(t) && "max" !== t && "=" !== t.charAt(1) ? {
                    x: t,
                    y: t
                } : {y: t};
                if (t.nodeType) return {y: t, x: t};
                var r, n = {};
                for (r in t) n[r] = "onAutoKill" !== r && f(t[r]) ? t[r](e, i, s) : t[r];
                return n
            }(e, a, t, o), this.vars = e, this.autoKill = !!e.autoKill, this.getX = g(t, "x"), this.getY = g(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), u || (u = s.core.globals().ScrollTrigger), "smooth" === s.getProperty(t, "scrollBehavior") && s.set(t, {scrollBehavior: "auto"}), l && "none" !== l && (this.snap = 1, this.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (this.add(this, "x", this.x, y(e.x, t, "x", this.x, e.offsetX || 0), a, o), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, y(e.y, t, "y", this.y, e.offsetY || 0), a, o), this._props.push("scrollTo_y")) : this.skipY = 1
        }, render: function (t, e) {
            for (var i, s, r, a, o, l = e._pt, p = e.target, c = e.tween, d = e.autoKill, f = e.xPrev, g = e.yPrev, v = e.isWin, y = e.snap, b = e.snapInline; l;) l.r(t, l.d), l = l._next;
            i = v || !e.skipX ? e.getX() : f, r = (s = v || !e.skipY ? e.getY() : g) - g, a = i - f, o = h.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), d && (!e.skipX && (a > o || a < -o) && i < m(p, "x") && (e.skipX = 1), !e.skipY && (r > o || r < -o) && s < m(p, "y") && (e.skipY = 1), e.skipX && e.skipY && (c.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(c, e.vars.onAutoKillParams || []))), v ? n.scrollTo(e.skipX ? i : e.x, e.skipY ? s : e.y) : (e.skipY || (p.scrollTop = e.y), e.skipX || (p.scrollLeft = e.x)), !y || 1 !== t && 0 !== t || (s = p.scrollTop, i = p.scrollLeft, b ? p.style.scrollSnapType = b : p.style.removeProperty("scroll-snap-type"), p.scrollTop = s + 1, p.scrollLeft = i + 1, p.scrollTop = s, p.scrollLeft = i), e.xPrev = e.x, e.yPrev = e.y, u && u.update()
        }, kill: function (t) {
            var e = "scrollTo" === t;
            (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
        }
    };
    _.max = m, _.getOffset = v, _.buildGetter = g, c() && s.registerPlugin(_)
}, function (module, exports, __webpack_require__) {
    "undefined" != typeof navigator && function (t, e) {
        module.exports = e()
    }(0, (function () {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999,
            setWebWorker = function (t) {
                _useWebWorker = !!t
            }, getWebWorker = function () {
                return _useWebWorker
            }, setLocationHref = function (t) {
                locationHref = t
            }, getLocationHref = function () {
                return locationHref
            };

        function createTag(t) {
            return document.createElement(t)
        }

        function extendPrototype(t, e) {
            var i, s, r = t.length;
            for (i = 0; i < r; i += 1) for (var n in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, n) && (e.prototype[n] = s[n])
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {
            }

            return e.prototype = t, e
        }

        var audioControllerFactory = function () {
            function t(t) {
                this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }

            return t.prototype = {
                addAudio: function (t) {
                    this.audios.push(t)
                }, pause: function () {
                    var t, e = this.audios.length;
                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                }, resume: function () {
                    var t, e = this.audios.length;
                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                }, setRate: function (t) {
                    var e, i = this.audios.length;
                    for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                }, createAudio: function (t) {
                    return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({src: [t]}) : {
                        isPlaying: !1,
                        play: function () {
                            this.isPlaying = !0
                        },
                        seek: function () {
                            this.isPlaying = !1
                        },
                        playing: function () {
                        },
                        rate: function () {
                        },
                        setVolume: function () {
                        }
                    }
                }, setAudioFactory: function (t) {
                    this.audioFactory = t
                }, setVolume: function (t) {
                    this._volume = t, this._updateVolume()
                }, mute: function () {
                    this._isMuted = !0, this._updateVolume()
                }, unmute: function () {
                    this._isMuted = !1, this._updateVolume()
                }, getVolume: function () {
                    return this._volume
                }, _updateVolume: function () {
                    var t, e = this.audios.length;
                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
            }, function () {
                return new t
            }
        }(), createTypedArray = function () {
            function t(t, e) {
                var i, s = 0, r = [];
                switch (t) {
                    case"int16":
                    case"uint8c":
                        i = 1;
                        break;
                    default:
                        i = 1.1
                }
                for (s = 0; s < e; s += 1) r.push(i);
                return r
            }

            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (e, i) {
                return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
            } : t
        }();

        function createSizedArray(t) {
            return Array.apply(null, {length: t})
        }

        function _typeof$6(t) {
            return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), _shouldRoundValues = !1,
            bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};

        function ProjectInterface$1() {
            return {}
        }

        !function () {
            var t,
                e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function (t) {
            if ("object" === _typeof$6(t) && t.length) {
                var e, i = createSizedArray(t.length), s = t.length;
                for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                return i
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;

        function roundValues(t) {
            _shouldRoundValues = !!t
        }

        function bmRnd(t) {
            return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, i, s) {
            this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, i, s) {
            this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, i) {
            this.type = t, this.firstFrame = e, this.totalFrames = i
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e
        }

        var createElementID = (_count = 0, function () {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
        }), _count;

        function HSVtoRGB(t, e, i) {
            var s, r, n, a, o, l, h, u;
            switch (l = i * (1 - e), h = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), u = i * (1 - (1 - o) * e), a % 6) {
                case 0:
                    s = i, r = u, n = l;
                    break;
                case 1:
                    s = h, r = i, n = l;
                    break;
                case 2:
                    s = l, r = i, n = u;
                    break;
                case 3:
                    s = l, r = h, n = i;
                    break;
                case 4:
                    s = u, r = l, n = i;
                    break;
                case 5:
                    s = i, r = l, n = h
            }
            return [s, r, n]
        }

        function RGBtoHSV(t, e, i) {
            var s, r = Math.max(t, e, i), n = Math.min(t, e, i), a = r - n, o = 0 === r ? 0 : a / r, l = r / 255;
            switch (r) {
                case n:
                    s = 0;
                    break;
                case t:
                    s = e - i + a * (e < i ? 6 : 0), s /= 6 * a;
                    break;
                case e:
                    s = i - t + 2 * a, s /= 6 * a;
                    break;
                case i:
                    s = t - e + 4 * a, s /= 6 * a
            }
            return [s, o, l]
        }

        function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }

        var rgbToHex = function () {
            var t, e, i = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
            return function (t, e, s) {
                return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), "#" + i[t] + i[e] + i[s]
            }
        }(), setSubframeEnabled = function (t) {
            subframeEnabled = !!t
        }, getSubframeEnabled = function () {
            return subframeEnabled
        }, setExpressionsPlugin = function (t) {
            expressionsPlugin = t
        }, getExpressionsPlugin = function () {
            return expressionsPlugin
        }, setExpressionInterfaces = function (t) {
            expressionsInterfaces = t
        }, getExpressionInterfaces = function () {
            return expressionsInterfaces
        }, setDefaultCurveSegments = function (t) {
            defaultCurveSegments = t
        }, getDefaultCurveSegments = function () {
            return defaultCurveSegments
        }, setIdPrefix = function (t) {
            idPrefix$1 = t
        }, getIdPrefix = function () {
            return idPrefix$1
        };

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
            return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var dataManager = function () {
            var t, e, i = 1, s = [], r = {
                onmessage: function () {
                }, postMessage: function (e) {
                    t({data: e})
                }
            }, n = {
                postMessage: function (t) {
                    r.onmessage({data: t})
                }
            };

            function a() {
                e || ((e = function (e) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {type: "text/javascript"}),
                            s = URL.createObjectURL(i);
                        return new Worker(s)
                    }
                    return t = e, r
                }((function (t) {
                    if (n.dataManager || (n.dataManager = function () {
                        function t(r, n) {
                            var a, o, l, h, u, c, d = r.length;
                            for (o = 0; o < d; o += 1) if ("ks" in (a = r[o]) && !a.completed) {
                                if (a.completed = !0, a.hasMask) {
                                    var f = a.masksProperties;
                                    for (h = f.length, l = 0; l < h; l += 1) if (f[l].pt.k.i) s(f[l].pt.k); else for (c = f[l].pt.k.length, u = 0; u < c; u += 1) f[l].pt.k[u].s && s(f[l].pt.k[u].s[0]), f[l].pt.k[u].e && s(f[l].pt.k[u].e[0])
                                }
                                0 === a.ty ? (a.layers = e(a.refId, n), t(a.layers, n)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && p(a)
                            }
                        }

                        function e(t, e) {
                            var i = function (t, e) {
                                for (var i = 0, s = e.length; i < s;) {
                                    if (e[i].id === t) return e[i];
                                    i += 1
                                }
                                return null
                            }(t, e);
                            return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                        }

                        function i(t) {
                            var e, r, n;
                            for (e = t.length - 1; e >= 0; e -= 1) if ("sh" === t[e].ty) if (t[e].ks.k.i) s(t[e].ks.k); else for (n = t[e].ks.k.length, r = 0; r < n; r += 1) t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && s(t[e].ks.k[r].e[0]); else "gr" === t[e].ty && i(t[e].it)
                        }

                        function s(t) {
                            var e, i = t.i.length;
                            for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                        }

                        function r(t, e) {
                            var i = e ? e.split(".") : [100, 100, 100];
                            return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                        }

                        var n, a = function () {
                            var t = [4, 4, 14];

                            function e(t) {
                                var e, i, s, r = t.length;
                                for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = t[e], s = void 0, s = i.t.d, i.t.d = {
                                    k: [{
                                        s: s,
                                        t: 0
                                    }]
                                })
                            }

                            return function (i) {
                                if (r(t, i.v) && (e(i.layers), i.assets)) {
                                    var s, n = i.assets.length;
                                    for (s = 0; s < n; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                }
                            }
                        }(), o = (n = [4, 7, 99], function (t) {
                            if (t.chars && !r(n, t.v)) {
                                var e, s = t.chars.length;
                                for (e = 0; e < s; e += 1) {
                                    var a = t.chars[e];
                                    a.data && a.data.shapes && (i(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
                                        p: {
                                            k: [0, 0],
                                            a: 0
                                        },
                                        s: {k: [100, 100], a: 0},
                                        a: {k: [0, 0], a: 0},
                                        r: {k: 0, a: 0},
                                        o: {k: 100, a: 0}
                                    }, t.chars[e].t || (a.data.shapes.push({ty: "no"}), a.data.shapes[0].it.push({
                                        p: {
                                            k: [0, 0],
                                            a: 0
                                        },
                                        s: {k: [100, 100], a: 0},
                                        a: {k: [0, 0], a: 0},
                                        r: {k: 0, a: 0},
                                        o: {k: 100, a: 0},
                                        sk: {k: 0, a: 0},
                                        sa: {k: 0, a: 0},
                                        ty: "tr"
                                    })))
                                }
                            }
                        }), l = function () {
                            var t = [5, 7, 15];

                            function e(t) {
                                var e, i, s, r = t.length;
                                for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = t[e], s = void 0, "number" == typeof (s = i.t.p).a && (s.a = {
                                    a: 0,
                                    k: s.a
                                }), "number" == typeof s.p && (s.p = {
                                    a: 0,
                                    k: s.p
                                }), "number" == typeof s.r && (s.r = {a: 0, k: s.r}))
                            }

                            return function (i) {
                                if (r(t, i.v) && (e(i.layers), i.assets)) {
                                    var s, n = i.assets.length;
                                    for (s = 0; s < n; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                }
                            }
                        }(), h = function () {
                            var t = [4, 1, 9];

                            function e(t) {
                                var i, s, r, n = t.length;
                                for (i = 0; i < n; i += 1) if ("gr" === t[i].ty) e(t[i].it); else if ("fl" === t[i].ty || "st" === t[i].ty) if (t[i].c.k && t[i].c.k[0].i) for (r = t[i].c.k.length, s = 0; s < r; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255); else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                            }

                            function i(t) {
                                var i, s = t.length;
                                for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes)
                            }

                            return function (e) {
                                if (r(t, e.v) && (i(e.layers), e.assets)) {
                                    var s, n = e.assets.length;
                                    for (s = 0; s < n; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                }
                            }
                        }(), u = function () {
                            var t = [4, 4, 18];

                            function e(t) {
                                var i, s, r;
                                for (i = t.length - 1; i >= 0; i -= 1) if ("sh" === t[i].ty) if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed; else for (r = t[i].ks.k.length, s = 0; s < r; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed); else "gr" === t[i].ty && e(t[i].it)
                            }

                            function i(t) {
                                var i, s, r, n, a, o, l = t.length;
                                for (s = 0; s < l; s += 1) {
                                    if ((i = t[s]).hasMask) {
                                        var h = i.masksProperties;
                                        for (n = h.length, r = 0; r < n; r += 1) if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl; else for (o = h[r].pt.k.length, a = 0; a < o; a += 1) h[r].pt.k[a].s && (h[r].pt.k[a].s[0].c = h[r].cl), h[r].pt.k[a].e && (h[r].pt.k[a].e[0].c = h[r].cl)
                                    }
                                    4 === i.ty && e(i.shapes)
                                }
                            }

                            return function (e) {
                                if (r(t, e.v) && (i(e.layers), e.assets)) {
                                    var s, n = e.assets.length;
                                    for (s = 0; s < n; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                }
                            }
                        }();

                        function p(t) {
                            0 === t.t.a.length && t.t.p
                        }

                        var c = {
                            completeData: function (i) {
                                i.__complete || (h(i), a(i), o(i), l(i), u(i), t(i.layers, i.assets), function (i, s) {
                                    if (i) {
                                        var r = 0, n = i.length;
                                        for (r = 0; r < n; r += 1) 1 === i[r].t && (i[r].data.layers = e(i[r].data.refId, s), t(i[r].data.layers, s))
                                    }
                                }(i.chars, i.assets), i.__complete = !0)
                            }
                        };
                        return c.checkColors = h, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = u, c.completeLayers = t, c
                    }()), n.assetLoader || (n.assetLoader = function () {
                        function t(t) {
                            var e = t.getResponseHeader("content-type");
                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                        }

                        return {
                            load: function (e, i, s, r) {
                                var n, a = new XMLHttpRequest;
                                try {
                                    a.responseType = "json"
                                } catch (t) {
                                }
                                a.onreadystatechange = function () {
                                    if (4 === a.readyState) if (200 === a.status) n = t(a), s(n); else try {
                                        n = t(a), s(n)
                                    } catch (t) {
                                        r && r(t)
                                    }
                                };
                                try {
                                    a.open(["G", "E", "T"].join(""), e, !0)
                                } catch (t) {
                                    a.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                                }
                                a.send()
                            }
                        }
                    }()), "loadAnimation" === t.data.type) n.assetLoader.load(t.data.path, t.data.fullPath, (function (e) {
                        n.dataManager.completeData(e), n.postMessage({id: t.data.id, payload: e, status: "success"})
                    }), (function () {
                        n.postMessage({id: t.data.id, status: "error"})
                    })); else if ("complete" === t.data.type) {
                        var e = t.data.animation;
                        n.dataManager.completeData(e), n.postMessage({id: t.data.id, payload: e, status: "success"})
                    } else "loadData" === t.data.type && n.assetLoader.load(t.data.path, t.data.fullPath, (function (e) {
                        n.postMessage({id: t.data.id, payload: e, status: "success"})
                    }), (function () {
                        n.postMessage({id: t.data.id, status: "error"})
                    }))
                }))).onmessage = function (t) {
                    var e = t.data, i = e.id, r = s[i];
                    s[i] = null, "success" === e.status ? r.onComplete(e.payload) : r.onError && r.onError()
                })
            }

            function o(t, e) {
                var r = "processId_" + (i += 1);
                return s[r] = {onComplete: t, onError: e}, r
            }

            return {
                loadAnimation: function (t, i, s) {
                    a();
                    var r = o(i, s);
                    e.postMessage({
                        type: "loadAnimation",
                        path: t,
                        fullPath: window.location.origin + window.location.pathname,
                        id: r
                    })
                }, loadData: function (t, i, s) {
                    a();
                    var r = o(i, s);
                    e.postMessage({
                        type: "loadData",
                        path: t,
                        fullPath: window.location.origin + window.location.pathname,
                        id: r
                    })
                }, completeAnimation: function (t, i, s) {
                    a();
                    var r = o(i, s);
                    e.postMessage({type: "complete", animation: t, id: r})
                }
            }
        }(), ImagePreloader = function () {
            var t = function () {
                var t = createTag("canvas");
                t.width = 1, t.height = 1;
                var e = t.getContext("2d");
                return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function s(t, e, i) {
                var s = "";
                if (t.e) s = t.p; else if (e) {
                    var r = t.p;
                    -1 !== r.indexOf("images/") && (r = r.split("/")[1]), s = e + r
                } else s = i, s += t.u ? t.u : "", s += t.p;
                return s
            }

            function r(t) {
                var e = 0, i = setInterval(function () {
                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                }.bind(this), 50)
            }

            function n(t) {
                var e = {assetData: t}, i = s(t, this.assetsPath, this.path);
                return dataManager.loadData(i, function (t) {
                    e.img = t, this._footageLoaded()
                }.bind(this), function () {
                    e.img = {}, this._footageLoaded()
                }.bind(this)), e
            }

            function a() {
                this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = n.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }

            return a.prototype = {
                loadAssets: function (t, e) {
                    var i;
                    this.imagesLoadedCb = e;
                    var s = t.length;
                    for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                }, setAssetsPath: function (t) {
                    this.assetsPath = t || ""
                }, setPath: function (t) {
                    this.path = t || ""
                }, loadedImages: function () {
                    return this.totalImages === this.loadedAssets
                }, loadedFootages: function () {
                    return this.totalFootages === this.loadedFootagesCount
                }, destroy: function () {
                    this.imagesLoadedCb = null, this.images.length = 0
                }, getAsset: function (t) {
                    for (var e = 0, i = this.images.length; e < i;) {
                        if (this.images[e].assetData === t) return this.images[e].img;
                        e += 1
                    }
                    return null
                }, createImgData: function (e) {
                    var i = s(e, this.assetsPath, this.path), r = createTag("img");
                    r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function () {
                        n.img = t, this._imageLoaded()
                    }.bind(this), !1), r.src = i;
                    var n = {img: r, assetData: e};
                    return n
                }, createImageData: function (e) {
                    var i = s(e, this.assetsPath, this.path), r = createNS("image");
                    isSafari ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function () {
                        n.img = t, this._imageLoaded()
                    }.bind(this), !1), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                    var n = {img: r, assetData: e};
                    return n
                }, imageLoaded: e, footageLoaded: i, setCacheType: function (t, e) {
                    "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                }
            }, a
        }();

        function BaseEvent() {
        }

        BaseEvent.prototype = {
            triggerEvent: function (t, e) {
                if (this._cbs[t]) for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
            }, addEventListener: function (t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function () {
                    this.removeEventListener(t, e)
                }.bind(this)
            }, removeEventListener: function (t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else this._cbs[t] = null
            }
        };
        var markerParser = function () {
            function t(t) {
                for (var e, i = t.split("\r\n"), s = {}, r = 0, n = 0; n < i.length; n += 1) 2 === (e = i[n].split(":")).length && (s[e[0]] = e[1].trim(), r += 1);
                if (0 === r) throw new Error;
                return s
            }

            return function (e) {
                for (var i = [], s = 0; s < e.length; s += 1) {
                    var r = e[s], n = {time: r.tm, duration: r.dr};
                    try {
                        n.payload = JSON.parse(e[s].cm)
                    } catch (i) {
                        try {
                            n.payload = t(e[s].cm)
                        } catch (t) {
                            n.payload = {name: e[s].cm}
                        }
                    }
                    i.push(n)
                }
                return i
            }
        }(), ProjectInterface = function () {
            function t(t) {
                this.compositions.push(t)
            }

            return function () {
                function e(t) {
                    for (var e = 0, i = this.compositions.length; e < i;) {
                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1
                    }
                    return null
                }

                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
        }(), renderers = {}, registerRenderer = function (t, e) {
            renderers[t] = e
        };

        function getRenderer(t) {
            return renderers[t]
        }

        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for (var t in renderers) if (renderers[t]) return t;
            return ""
        }

        function _typeof$4(t) {
            return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var AnimationItem = function () {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var i = getRenderer(e);
            this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function (t) {
            dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function (t, e) {
            e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
            var i = {wrapper: t, animationData: e}, s = t.attributes;
            i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
            "false" === r ? i.loop = !1 : "true" === r ? i.loop = !0 : "" !== r && (i.loop = parseInt(r, 10));
            var n = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
            i.autoplay = "false" !== n, i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, i, s = this.animationData.layers, r = s.length, n = t.layers, a = n.length;
            for (i = 0; i < a; i += 1) for (e = 0; e < r;) {
                if (s[e].id === n[i].id) {
                    s[e] = n[i];
                    break
                }
                e += 1
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function (t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function () {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (t) {
                this.triggerConfigError(t)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function () {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
                    this.trigger("DOMLoaded")
                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
            }
        }, AnimationItem.prototype.resize = function (t, e) {
            var i = "number" == typeof t ? t : void 0, s = "number" == typeof e ? e : void 0;
            this.renderer.updateContainerSize(i, s)
        }, AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function () {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function (t) {
            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function (t) {
            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function (t) {
            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function (t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, i = 0; i < this.markers.length; i += 1) if ((e = this.markers[i]).payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function (t, e, i) {
            if (!i || this.name === i) {
                var s = Number(t);
                if (isNaN(s)) {
                    var r = this.getMarkerData(t);
                    r && this.goToAndStop(r.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function (t, e, i) {
            if (!i || this.name === i) {
                var s = Number(t);
                if (isNaN(s)) {
                    var r = this.getMarkerData(t);
                    r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
                } else this.goToAndStop(s, e, i);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier, i = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function (t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function (t, e) {
            var i = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function (t, e) {
            if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1) this.segments.push(t[i])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function (t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function (t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function (t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function (t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function (t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function (t) {
            this.loop = t
        }, AnimationItem.prototype.setVolume = function (t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function (t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function (t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function () {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function () {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p; else if (this.assetsPath) {
                var i = t.p;
                -1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, i = this.assets.length; e < i;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function () {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function () {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function (t, e, i) {
            try {
                this.renderer.getElementByPath(t).updateDocumentData(e, i)
            } catch (t) {
            }
        }, AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case"enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case"drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case"loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case"complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case"segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case"destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function () {
            var t = {}, e = [], i = 0, s = 0, r = 0, n = !0, a = !1;

            function o(t) {
                for (var i = 0, r = t.target; i < s;) e[i].animation === r && (e.splice(i, 1), i -= 1, s -= 1, r.isPaused || u()), i += 1
            }

            function l(t, i) {
                if (!t) return null;
                for (var r = 0; r < s;) {
                    if (e[r].elem === t && null !== e[r].elem) return e[r].animation;
                    r += 1
                }
                var n = new AnimationItem;
                return p(n, t), n.setData(t, i), n
            }

            function h() {
                r += 1, f()
            }

            function u() {
                r -= 1
            }

            function p(t, i) {
                t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", u), e.push({
                    elem: i,
                    animation: t
                }), s += 1
            }

            function c(t) {
                var o, l = t - i;
                for (o = 0; o < s; o += 1) e[o].animation.advanceTime(l);
                i = t, r && !a ? window.requestAnimationFrame(c) : n = !0
            }

            function d(t) {
                i = t, window.requestAnimationFrame(c)
            }

            function f() {
                !a && r && n && (window.requestAnimationFrame(d), n = !1)
            }

            return t.registerAnimation = l, t.loadAnimation = function (t) {
                var e = new AnimationItem;
                return p(e, null), e.setParams(t), e
            }, t.setSpeed = function (t, i) {
                var r;
                for (r = 0; r < s; r += 1) e[r].animation.setSpeed(t, i)
            }, t.setDirection = function (t, i) {
                var r;
                for (r = 0; r < s; r += 1) e[r].animation.setDirection(t, i)
            }, t.play = function (t) {
                var i;
                for (i = 0; i < s; i += 1) e[i].animation.play(t)
            }, t.pause = function (t) {
                var i;
                for (i = 0; i < s; i += 1) e[i].animation.pause(t)
            }, t.stop = function (t) {
                var i;
                for (i = 0; i < s; i += 1) e[i].animation.stop(t)
            }, t.togglePause = function (t) {
                var i;
                for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
            }, t.searchAnimations = function (t, e, i) {
                var s,
                    r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                    n = r.length;
                for (s = 0; s < n; s += 1) i && r[s].setAttribute("data-bm-type", i), l(r[s], t);
                if (e && 0 === n) {
                    i || (i = "svg");
                    var a = document.getElementsByTagName("body")[0];
                    a.innerText = "";
                    var o = createTag("div");
                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), l(o, t)
                }
            }, t.resize = function () {
                var t;
                for (t = 0; t < s; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function (t, i, r) {
                var n;
                for (n = 0; n < s; n += 1) e[n].animation.goToAndStop(t, i, r)
            }, t.destroy = function (t) {
                var i;
                for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
            }, t.freeze = function () {
                a = !0
            }, t.unfreeze = function () {
                a = !1, f()
            }, t.setVolume = function (t, i) {
                var r;
                for (r = 0; r < s; r += 1) e[r].animation.setVolume(t, i)
            }, t.mute = function (t) {
                var i;
                for (i = 0; i < s; i += 1) e[i].animation.mute(t)
            }, t.unmute = function (t) {
                var i;
                for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
            }, t.getRegisteredAnimations = function () {
                var t, i = e.length, s = [];
                for (t = 0; t < i; t += 1) s.push(e[t].animation);
                return s
            }, t
        }(), BezierFactory = function () {
            var t = {
                getBezierEasing: function (t, i, s, r, n) {
                    var a = n || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
                    if (e[a]) return e[a];
                    var o = new l([t, i, s, r]);
                    return e[a] = o, o
                }
            }, e = {};
            var i = "function" == typeof Float32Array;

            function s(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function r(t, e) {
                return 3 * e - 6 * t
            }

            function n(t) {
                return 3 * t
            }

            function a(t, e, i) {
                return ((s(e, i) * t + r(e, i)) * t + n(e)) * t
            }

            function o(t, e, i) {
                return 3 * s(e, i) * t * t + 2 * r(e, i) * t + n(e)
            }

            function l(t) {
                this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
            }

            return l.prototype = {
                get: function (t) {
                    var e = this._p[0], i = this._p[1], s = this._p[2], r = this._p[3];
                    return this._precomputed || this._precompute(), e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : a(this._getTForX(t), i, r)
                }, _precompute: function () {
                    var t = this._p[0], e = this._p[1], i = this._p[2], s = this._p[3];
                    this._precomputed = !0, t === e && i === s || this._calcSampleValues()
                }, _calcSampleValues: function () {
                    for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = a(.1 * i, t, e)
                }, _getTForX: function (t) {
                    for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, r = 0, n = 1; 10 !== n && s[n] <= t; ++n) r += .1;
                    var l = r + .1 * ((t - s[--n]) / (s[n + 1] - s[n])), h = o(l, e, i);
                    return h >= .001 ? function (t, e, i, s) {
                        for (var r = 0; r < 4; ++r) {
                            var n = o(e, i, s);
                            if (0 === n) return e;
                            e -= (a(e, i, s) - t) / n
                        }
                        return e
                    }(t, l, e, i) : 0 === h ? l : function (t, e, i, s, r) {
                        var n, o, l = 0;
                        do {
                            (n = a(o = e + (i - e) / 2, s, r) - t) > 0 ? i = o : e = o
                        } while (Math.abs(n) > 1e-7 && ++l < 10);
                        return o
                    }(t, r, r + .1, e, i)
                }
            }, t
        }(), pooling = {
            double: function (t) {
                return t.concat(createSizedArray(t.length))
            }
        }, poolFactory = function (t, e, i) {
            var s = 0, r = t, n = createSizedArray(r);
            return {
                newElement: function () {
                    return s ? n[s -= 1] : e()
                }, release: function (t) {
                    s === r && (n = pooling.double(n), r *= 2), i && i(t), n[s] = t, s += 1
                }
            }
        }, bezierLengthPool = poolFactory(8, (function () {
            return {
                addedLength: 0,
                percents: createTypedArray("float32", getDefaultCurveSegments()),
                lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
        })), segmentsLengthPool = poolFactory(8, (function () {
            return {lengths: [], totalLength: 0}
        }), (function (t) {
            var e, i = t.lengths.length;
            for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
        }));

        function bezFunction() {
            var t = Math;

            function e(t, e, i, s, r, n) {
                var a = t * s + e * r + i * n - r * s - n * t - i * e;
                return a > -.001 && a < .001
            }

            var i = function (t, e, i, s) {
                var r, n, a, o, l, h, u = getDefaultCurveSegments(), p = 0, c = [], d = [],
                    f = bezierLengthPool.newElement();
                for (a = i.length, r = 0; r < u; r += 1) {
                    for (l = r / (u - 1), h = 0, n = 0; n < a; n += 1) o = bmPow(1 - l, 3) * t[n] + 3 * bmPow(1 - l, 2) * l * i[n] + 3 * (1 - l) * bmPow(l, 2) * s[n] + bmPow(l, 3) * e[n], c[n] = o, null !== d[n] && (h += bmPow(c[n] - d[n], 2)), d[n] = c[n];
                    h && (p += h = bmSqrt(h)), f.percents[r] = l, f.lengths[r] = p
                }
                return f.addedLength = p, f
            };

            function s(t) {
                this.segmentLength = 0, this.points = new Array(t)
            }

            function r(t, e) {
                this.partialLength = t, this.point = e
            }

            var n, a = (n = {}, function (t, i, a, o) {
                var l = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                if (!n[l]) {
                    var h, u, p, c, d, f, m, g = getDefaultCurveSegments(), v = 0, y = null;
                    2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                    var b = new s(g);
                    for (p = a.length, h = 0; h < g; h += 1) {
                        for (m = createSizedArray(p), d = h / (g - 1), f = 0, u = 0; u < p; u += 1) c = bmPow(1 - d, 3) * t[u] + 3 * bmPow(1 - d, 2) * d * (t[u] + a[u]) + 3 * (1 - d) * bmPow(d, 2) * (i[u] + o[u]) + bmPow(d, 3) * i[u], m[u] = c, null !== y && (f += bmPow(m[u] - y[u], 2));
                        v += f = bmSqrt(f), b.points[h] = new r(f, m), y = m
                    }
                    b.segmentLength = v, n[l] = b
                }
                return n[l]
            });

            function o(t, e) {
                var i = e.percents, s = e.lengths, r = i.length, n = bmFloor((r - 1) * t), a = t * e.addedLength, o = 0;
                if (n === r - 1 || 0 === n || a === s[n]) return i[n];
                for (var l = s[n] > a ? -1 : 1, h = !0; h;) if (s[n] <= a && s[n + 1] > a ? (o = (a - s[n]) / (s[n + 1] - s[n]), h = !1) : n += l, n < 0 || n >= r - 1) {
                    if (n === r - 1) return i[n];
                    h = !1
                }
                return i[n] + (i[n + 1] - i[n]) * o
            }

            var l = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function (t) {
                    var e, s = segmentsLengthPool.newElement(), r = t.c, n = t.v, a = t.o, o = t.i, l = t._length,
                        h = s.lengths, u = 0;
                    for (e = 0; e < l - 1; e += 1) h[e] = i(n[e], n[e + 1], a[e], o[e + 1]), u += h[e].addedLength;
                    return r && l && (h[e] = i(n[e], n[0], a[e], o[0]), u += h[e].addedLength), s.totalLength = u, s
                }, getNewSegment: function (e, i, s, r, n, a, h) {
                    n < 0 ? n = 0 : n > 1 && (n = 1);
                    var u, p = o(n, h), c = o(a = a > 1 ? 1 : a, h), d = e.length, f = 1 - p, m = 1 - c, g = f * f * f,
                        v = p * f * f * 3, y = p * p * f * 3, b = p * p * p, _ = f * f * m,
                        x = p * f * m + f * p * m + f * f * c, S = p * p * m + f * p * c + p * f * c, E = p * p * c,
                        C = f * m * m, k = p * m * m + f * c * m + f * m * c, w = p * c * m + f * c * c + p * m * c,
                        T = p * c * c, P = m * m * m, A = c * m * m + m * c * m + m * m * c,
                        M = c * c * m + m * c * c + c * m * c, D = c * c * c;
                    for (u = 0; u < d; u += 1) l[4 * u] = t.round(1e3 * (g * e[u] + v * s[u] + y * r[u] + b * i[u])) / 1e3, l[4 * u + 1] = t.round(1e3 * (_ * e[u] + x * s[u] + S * r[u] + E * i[u])) / 1e3, l[4 * u + 2] = t.round(1e3 * (C * e[u] + k * s[u] + w * r[u] + T * i[u])) / 1e3, l[4 * u + 3] = t.round(1e3 * (P * e[u] + A * s[u] + M * r[u] + D * i[u])) / 1e3;
                    return l
                }, getPointInSegment: function (e, i, s, r, n, a) {
                    var l = o(n, a), h = 1 - l;
                    return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * s[0] + (l * l * h + h * l * l + l * h * l) * r[0] + l * l * l * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * s[1] + (l * l * h + h * l * l + l * h * l) * r[1] + l * l * l * i[1])) / 1e3]
                }, buildBezierData: a, pointOnLine2D: e, pointOnLine3D: function (i, s, r, n, a, o, l, h, u) {
                    if (0 === r && 0 === o && 0 === u) return e(i, s, n, a, l, h);
                    var p, c = t.sqrt(t.pow(n - i, 2) + t.pow(a - s, 2) + t.pow(o - r, 2)),
                        d = t.sqrt(t.pow(l - i, 2) + t.pow(h - s, 2) + t.pow(u - r, 2)),
                        f = t.sqrt(t.pow(l - n, 2) + t.pow(h - a, 2) + t.pow(u - o, 2));
                    return (p = c > d ? c > f ? c - d - f : f - d - c : f > d ? f - d - c : d - c - f) > -1e-4 && p < 1e-4
                }
            }
        }

        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;

        function interpolateValue(t, e) {
            var i, s = this.offsetTime;
            "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
            for (var r, n, a, o, l, h, u, p, c, d = e.lastIndex, f = d, m = this.keyframes.length - 1, g = !0; g;) {
                if (r = this.keyframes[f], n = this.keyframes[f + 1], f === m - 1 && t >= n.t - s) {
                    r.h && (r = n), d = 0;
                    break
                }
                if (n.t - s > t) {
                    d = f;
                    break
                }
                f < m - 1 ? f += 1 : (d = 0, g = !1)
            }
            a = this.keyframesMetadata[f] || {};
            var v, y = n.t - s, b = r.t - s;
            if (r.to) {
                a.bezierData || (a.bezierData = bez.buildBezierData(r.s, n.s || r.e, r.to, r.ti));
                var _ = a.bezierData;
                if (t >= y || t < b) {
                    var x = t >= y ? _.points.length - 1 : 0;
                    for (l = _.points[x].point.length, o = 0; o < l; o += 1) i[o] = _.points[x].point[o]
                } else {
                    a.__fnct ? c = a.__fnct : (c = BezierFactory.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get, a.__fnct = c), h = c((t - b) / (y - b));
                    var S, E = _.segmentLength * h,
                        C = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastAddedLength : 0;
                    for (p = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastPoint : 0, g = !0, u = _.points.length; g;) {
                        if (C += _.points[p].partialLength, 0 === E || 0 === h || p === _.points.length - 1) {
                            for (l = _.points[p].point.length, o = 0; o < l; o += 1) i[o] = _.points[p].point[o];
                            break
                        }
                        if (E >= C && E < C + _.points[p + 1].partialLength) {
                            for (S = (E - C) / _.points[p + 1].partialLength, l = _.points[p].point.length, o = 0; o < l; o += 1) i[o] = _.points[p].point[o] + (_.points[p + 1].point[o] - _.points[p].point[o]) * S;
                            break
                        }
                        p < u - 1 ? p += 1 : g = !1
                    }
                    e._lastPoint = p, e._lastAddedLength = C - _.points[p].partialLength, e._lastKeyframeIndex = f
                }
            } else {
                var k, w, T, P, A;
                if (m = r.s.length, v = n.s || r.e, this.sh && 1 !== r.h) if (t >= y) i[0] = v[0], i[1] = v[1], i[2] = v[2]; else if (t <= b) i[0] = r.s[0], i[1] = r.s[1], i[2] = r.s[2]; else {
                    quaternionToEuler(i, slerp(createQuaternion(r.s), createQuaternion(v), (t - b) / (y - b)))
                } else for (f = 0; f < m; f += 1) 1 !== r.h && (t >= y ? h = 1 : t < b ? h = 0 : (r.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[f] ? c = a.__fnct[f] : (k = void 0 === r.o.x[f] ? r.o.x[0] : r.o.x[f], w = void 0 === r.o.y[f] ? r.o.y[0] : r.o.y[f], T = void 0 === r.i.x[f] ? r.i.x[0] : r.i.x[f], P = void 0 === r.i.y[f] ? r.i.y[0] : r.i.y[f], c = BezierFactory.getBezierEasing(k, w, T, P).get, a.__fnct[f] = c)) : a.__fnct ? c = a.__fnct : (k = r.o.x, w = r.o.y, T = r.i.x, P = r.i.y, c = BezierFactory.getBezierEasing(k, w, T, P).get, r.keyframeMetadata = c), h = c((t - b) / (y - b)))), v = n.s || r.e, A = 1 === r.h ? r.s[f] : r.s[f] + (v[f] - r.s[f]) * h, "multidimensional" === this.propType ? i[f] = A : i = A
            }
            return e.lastIndex = d, i
        }

        function slerp(t, e, i) {
            var s, r, n, a, o, l = [], h = t[0], u = t[1], p = t[2], c = t[3], d = e[0], f = e[1], m = e[2], g = e[3];
            return (r = h * d + u * f + p * m + c * g) < 0 && (r = -r, d = -d, f = -f, m = -m, g = -g), 1 - r > 1e-6 ? (s = Math.acos(r), n = Math.sin(s), a = Math.sin((1 - i) * s) / n, o = Math.sin(i * s) / n) : (a = 1 - i, o = i), l[0] = a * h + o * d, l[1] = a * u + o * f, l[2] = a * p + o * m, l[3] = a * c + o * g, l
        }

        function quaternionToEuler(t, e) {
            var i = e[0], s = e[1], r = e[2], n = e[3],
                a = Math.atan2(2 * s * n - 2 * i * r, 1 - 2 * s * s - 2 * r * r), o = Math.asin(2 * i * s + 2 * r * n),
                l = Math.atan2(2 * i * n - 2 * s * r, 1 - 2 * i * i - 2 * r * r);
            t[0] = a / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
        }

        function createQuaternion(t) {
            var e = t[0] * degToRads, i = t[1] * degToRads, s = t[2] * degToRads, r = Math.cos(e / 2),
                n = Math.cos(i / 2), a = Math.cos(s / 2), o = Math.sin(e / 2), l = Math.sin(i / 2), h = Math.sin(s / 2);
            return [o * l * a + r * n * h, o * n * a + r * l * h, r * l * a - o * n * h, r * n * a - o * l * h]
        }

        function getValueAtCurrentTime() {
            var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var s = this.interpolateValue(t, this._caching);
                this.pv = s
            }
            return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
            var e;
            if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0); else for (var i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
        }

        function processEffectsSequence() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                var t;
                this.lock = !0, this._mdf = this._isFirstFrame;
                var e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
                for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, i, s) {
            this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, i, s) {
            var r;
            this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var n = e.k.length;
            for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), r = 0; r < n; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, i, s) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, i, s) {
            var r;
            this.propType = "multidimensional";
            var n, a, o, l, h = e.k.length;
            for (r = 0; r < h - 1; r += 1) e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (n = e.k[r].s, a = e.k[r + 1].s, o = e.k[r].to, l = e.k[r].ti, (2 === n.length && (n[0] !== a[0] || n[1] !== a[1]) && bez.pointOnLine2D(n[0], n[1], a[0], a[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], a[0], a[1], a[0] + l[0], a[1] + l[1]) || 3 === n.length && (n[0] !== a[0] || n[1] !== a[1] || n[2] !== a[2]) && bez.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], a[0] + l[0], a[1] + l[1], a[2] + l[2])) && (e.k[r].to = null, e.k[r].ti = null), n[0] === a[0] && n[1] === a[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === n.length || n[2] === a[2] && 0 === o[2] && 0 === l[2]) && (e.k[r].to = null, e.k[r].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var u = e.k[0].s.length;
            for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), r = 0; r < u; r += 1) this.v[r] = initFrame, this.pv[r] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", u)
            }, this.addEffect = addEffect
        }

        var PropertyFactory = {
            getProp: function (t, e, i, s, r) {
                var n;
                if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length) if ("number" == typeof e.k[0]) n = new MultiDimensionalProperty(t, e, s, r); else switch (i) {
                    case 0:
                        n = new KeyframedValueProperty(t, e, s, r);
                        break;
                    case 1:
                        n = new KeyframedMultidimensionalProperty(t, e, s, r)
                } else n = new ValueProperty(t, e, s, r);
                return n.effectsSequence.length && r.addDynamicProperty(n), n
            }
        };

        function DynamicPropertyContainer() {
        }

        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
            }, iterateDynamicProperties: function () {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
            }, initDynamicPropertyContainer: function (t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var pointPool = poolFactory(8, (function () {
            return createTypedArray("float32", 2)
        }));

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }

        ShapePath.prototype.setPathData = function (t, e) {
            this.c = t, this.setLength(e);
            for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
        }, ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function () {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function (t, e, i, s, r) {
            var n;
            switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                case"v":
                    n = this.v;
                    break;
                case"i":
                    n = this.i;
                    break;
                case"o":
                    n = this.o;
                    break;
                default:
                    n = []
            }
            (!n[s] || n[s] && !r) && (n[s] = pointPool.newElement()), n[s][0] = t, n[s][1] = e
        }, ShapePath.prototype.setTripleAt = function (t, e, i, s, r, n, a, o) {
            this.setXYAt(t, e, "v", a, o), this.setXYAt(i, s, "o", a, o), this.setXYAt(r, n, "i", a, o)
        }, ShapePath.prototype.reverse = function () {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v, i = this.o, s = this.i, r = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), r = 1);
            var n, a = this._length - 1, o = this._length;
            for (n = r; n < o; n += 1) t.setTripleAt(e[a][0], e[a][1], s[a][0], s[a][1], i[a][0], i[a][1], n, !1), a -= 1;
            return t
        }, ShapePath.prototype.length = function () {
            return this._length
        };
        var shapePool = (factory = poolFactory(4, (function () {
            return new ShapePath
        }), (function (t) {
            var e, i = t._length;
            for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
        })), factory.clone = function (t) {
            var e, i = factory.newElement(), s = void 0 === t._length ? t.v.length : t._length;
            for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return i
        }, factory), factory;

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        ShapeCollection.prototype.addShape = function (t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        };
        var shapeCollectionPool = (ob = {
                newShapeCollection: function () {
                    return _length ? pool[_length -= 1] : new ShapeCollection
                }, release: function (t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e]);
                    t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
                }
            }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool,
            ShapePropertyFactory = function () {
                function t(t, e, i) {
                    var s, r, n, a, o, l, h, u, p, c = i.lastIndex, d = this.keyframes;
                    if (t < d[0].t - this.offsetTime) s = d[0].s[0], n = !0, c = 0; else if (t >= d[d.length - 1].t - this.offsetTime) s = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], n = !0; else {
                        for (var f, m, g, v = c, y = d.length - 1, b = !0; b && (f = d[v], !((m = d[v + 1]).t - this.offsetTime > t));) v < y - 1 ? v += 1 : b = !1;
                        if (g = this.keyframesMetadata[v] || {}, c = v, !(n = 1 === f.h)) {
                            if (t >= m.t - this.offsetTime) u = 1; else if (t < f.t - this.offsetTime) u = 0; else {
                                var _;
                                g.__fnct ? _ = g.__fnct : (_ = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, g.__fnct = _), u = _((t - (f.t - this.offsetTime)) / (m.t - this.offsetTime - (f.t - this.offsetTime)))
                            }
                            r = m.s ? m.s[0] : f.e[0]
                        }
                        s = f.s[0]
                    }
                    for (l = e._length, h = s.i[0].length, i.lastIndex = c, a = 0; a < l; a += 1) for (o = 0; o < h; o += 1) p = n ? s.i[a][o] : s.i[a][o] + (r.i[a][o] - s.i[a][o]) * u, e.i[a][o] = p, p = n ? s.o[a][o] : s.o[a][o] + (r.o[a][o] - s.o[a][o]) * u, e.o[a][o] = p, p = n ? s.v[a][o] : s.v[a][o] + (r.v[a][o] - s.v[a][o]) * u, e.v[a][o] = p
                }

                function e() {
                    var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, s = this._caching.lastFrame;
                    return -999999 !== s && (s < e && t < e || s > i && t > i) || (this._caching.lastIndex = s < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                }

                function i() {
                    this.paths = this.localShapeCollection
                }

                function s(t) {
                    (function (t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var i, s = t._length;
                        for (i = 0; i < s; i += 1) if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                        return !0
                    })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function r() {
                    if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                        var t, e;
                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                        var i = this.effectsSequence.length;
                        for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                    } else this._mdf = !1
                }

                function n(t, e, s) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var r = 3 === s ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(r), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function a(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function o(t, s, r) {
                    this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === r ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                    var n = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = {
                        lastFrame: -999999,
                        lastIndex: 0
                    }, this.effectsSequence = [e.bind(this)]
                }

                n.prototype.interpolateShape = t, n.prototype.getValue = r, n.prototype.setVValue = s, n.prototype.addEffect = a, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = s, o.prototype.addEffect = a;
                var l = function () {
                    var t = roundCorner;

                    function e(t, e) {
                        this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                    }

                    return e.prototype = {
                        reset: i, getValue: function () {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                        }, convertEllToPath: function () {
                            var e = this.p.v[0], i = this.p.v[1], s = this.s.v[0] / 2, r = this.s.v[1] / 2,
                                n = 3 !== this.d, a = this.v;
                            a.v[0][0] = e, a.v[0][1] = i - r, a.v[1][0] = n ? e + s : e - s, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + r, a.v[3][0] = n ? e - s : e + s, a.v[3][1] = i, a.i[0][0] = n ? e - s * t : e + s * t, a.i[0][1] = i - r, a.i[1][0] = n ? e + s : e - s, a.i[1][1] = i - r * t, a.i[2][0] = n ? e + s * t : e - s * t, a.i[2][1] = i + r, a.i[3][0] = n ? e - s : e + s, a.i[3][1] = i + r * t, a.o[0][0] = n ? e + s * t : e - s * t, a.o[0][1] = i - r, a.o[1][0] = n ? e + s : e - s, a.o[1][1] = i + r * t, a.o[2][0] = n ? e - s * t : e + s * t, a.o[2][1] = i + r, a.o[3][0] = n ? e - s : e + s, a.o[3][1] = i - r * t
                        }
                    }, extendPrototype([DynamicPropertyContainer], e), e
                }(), h = function () {
                    function t(t, e) {
                        this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                    }

                    return t.prototype = {
                        reset: i, getValue: function () {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                        }, convertStarToPath: function () {
                            var t, e, i, s, r = 2 * Math.floor(this.pt.v), n = 2 * Math.PI / r, a = !0, o = this.or.v,
                                l = this.ir.v, h = this.os.v, u = this.is.v, p = 2 * Math.PI * o / (2 * r),
                                c = 2 * Math.PI * l / (2 * r), d = -Math.PI / 2;
                            d += this.r.v;
                            var f = 3 === this.data.d ? -1 : 1;
                            for (this.v._length = 0, t = 0; t < r; t += 1) {
                                i = a ? h : u, s = a ? p : c;
                                var m = (e = a ? o : l) * Math.cos(d), g = e * Math.sin(d),
                                    v = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                    y = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - v * s * i * f, g - y * s * i * f, m + v * s * i * f, g + y * s * i * f, t, !0), a = !a, d += n * f
                            }
                        }, convertPolygonToPath: function () {
                            var t, e = Math.floor(this.pt.v), i = 2 * Math.PI / e, s = this.or.v, r = this.os.v,
                                n = 2 * Math.PI * s / (4 * e), a = .5 * -Math.PI, o = 3 === this.data.d ? -1 : 1;
                            for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                var l = s * Math.cos(a), h = s * Math.sin(a),
                                    u = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                    p = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - u * n * r * o, h - p * n * r * o, l + u * n * r * o, h + p * n * r * o, t, !0), a += i * o
                            }
                            this.paths.length = 0, this.paths[0] = this.v
                        }
                    }, extendPrototype([DynamicPropertyContainer], t), t
                }(), u = function () {
                    function t(t, e) {
                        this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                    }

                    return t.prototype = {
                        convertRectToPath: function () {
                            var t = this.p.v[0], e = this.p.v[1], i = this.s.v[0] / 2, s = this.s.v[1] / 2,
                                r = bmMin(i, s, this.r.v), n = r * (1 - roundCorner);
                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + n, 0, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - n, t + i, e + s - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - n, e + s, 2, !0), this.v.setTripleAt(t - i + r, e + s, t - i + n, e + s, t - i + r, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - n, 4, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + n, t - i, e - s + r, 5, !0), this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + n, e - s, 6, !0), this.v.setTripleAt(t + i - r, e - s, t + i - n, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + n, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + n, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + n, t + i, e - s + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - n, e - s, 1, !0), this.v.setTripleAt(t - i + r, e - s, t - i + n, e - s, t - i + r, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + n, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - n, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + n, e + s, 5, !0), this.v.setTripleAt(t + i - r, e + s, t + i - n, e + s, t + i - r, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - n, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + n, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - n, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - n, e + s, t + i, e + s, 3, !0)))
                        }, getValue: function () {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                        }, reset: i
                    }, extendPrototype([DynamicPropertyContainer], t), t
                }();
                var p = {
                    getShapeProp: function (t, e, i) {
                        var s;
                        return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new n(t, e, i) : 5 === i ? s = new u(t, e) : 6 === i ? s = new l(t, e) : 7 === i && (s = new h(t, e)), s.k && t.addDynamicProperty(s), s
                    }, getConstructorFunction: function () {
                        return n
                    }, getKeyframedConstructorFunction: function () {
                        return o
                    }
                };
                return p
            }(), Matrix = function () {
                var t = Math.cos, e = Math.sin, i = Math.tan, s = Math.round;

                function r() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                }

                function n(i) {
                    if (0 === i) return this;
                    var s = t(i), r = e(i);
                    return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function a(i) {
                    if (0 === i) return this;
                    var s = t(i), r = e(i);
                    return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
                }

                function o(i) {
                    if (0 === i) return this;
                    var s = t(i), r = e(i);
                    return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
                }

                function l(i) {
                    if (0 === i) return this;
                    var s = t(i), r = e(i);
                    return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function h(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }

                function u(t, e) {
                    return this.shear(i(t), i(e))
                }

                function p(s, r) {
                    var n = t(r), a = e(r);
                    return this._t(n, a, 0, 0, -a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function c(t, e, i) {
                    return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                }

                function d(t, e, i, s, r, n, a, o, l, h, u, p, c, d, f, m) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = r, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = u, this.props[11] = p, this.props[12] = c, this.props[13] = d, this.props[14] = f, this.props[15] = m, this
                }

                function f(t, e, i) {
                    return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                }

                function m(t, e, i, s, r, n, a, o, l, h, u, p, c, d, f, m) {
                    var g = this.props;
                    if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === n && 0 === a && 0 === o && 0 === l && 0 === h && 1 === u && 0 === p) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * n + g[15] * d, g[14] = g[14] * u + g[15] * f, g[15] *= m, this._identityCalculated = !1, this;
                    var v = g[0], y = g[1], b = g[2], _ = g[3], x = g[4], S = g[5], E = g[6], C = g[7], k = g[8], w = g[9],
                        T = g[10], P = g[11], A = g[12], M = g[13], D = g[14], F = g[15];
                    return g[0] = v * t + y * r + b * l + _ * c, g[1] = v * e + y * n + b * h + _ * d, g[2] = v * i + y * a + b * u + _ * f, g[3] = v * s + y * o + b * p + _ * m, g[4] = x * t + S * r + E * l + C * c, g[5] = x * e + S * n + E * h + C * d, g[6] = x * i + S * a + E * u + C * f, g[7] = x * s + S * o + E * p + C * m, g[8] = k * t + w * r + T * l + P * c, g[9] = k * e + w * n + T * h + P * d, g[10] = k * i + w * a + T * u + P * f, g[11] = k * s + w * o + T * p + P * m, g[12] = A * t + M * r + D * l + F * c, g[13] = A * e + M * n + D * h + F * d, g[14] = A * i + M * a + D * u + F * f, g[15] = A * s + M * o + D * p + F * m, this._identityCalculated = !1, this
                }

                function g(t) {
                    var e = t.props;
                    return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                }

                function v() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                }

                function y(t) {
                    for (var e = 0; e < 16;) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1
                    }
                    return !0
                }

                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                    return t
                }

                function _(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                }

                function x(t, e, i) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }
                }

                function S(t, e, i) {
                    return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                }

                function E(t, e, i) {
                    return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                }

                function C(t, e, i) {
                    return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                }

                function k() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4], e = this.props[5] / t,
                        i = -this.props[1] / t, s = -this.props[4] / t, r = this.props[0] / t,
                        n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                        a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t, o = new Matrix;
                    return o.props[0] = e, o.props[1] = i, o.props[4] = s, o.props[5] = r, o.props[12] = n, o.props[13] = a, o
                }

                function w(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                }

                function T(t) {
                    var e, i = t.length, s = [];
                    for (e = 0; e < i; e += 1) s[e] = w(t[e]);
                    return s
                }

                function P(t, e, i) {
                    var s = createTypedArray("float32", 6);
                    if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1]; else {
                        var r = this.props[0], n = this.props[1], a = this.props[4], o = this.props[5], l = this.props[12],
                            h = this.props[13];
                        s[0] = t[0] * r + t[1] * a + l, s[1] = t[0] * n + t[1] * o + h, s[2] = e[0] * r + e[1] * a + l, s[3] = e[0] * n + e[1] * o + h, s[4] = i[0] * r + i[1] * a + l, s[5] = i[0] * n + i[1] * o + h
                    }
                    return s
                }

                function A(t, e, i) {
                    return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                }

                function M(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var i = this.props;
                    return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                }

                function D() {
                    for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += s(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                    return i
                }

                function F(t) {
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(1e4 * t) / 1e4 : t
                }

                function I() {
                    var t = this.props;
                    return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")"
                }

                return function () {
                    this.reset = r, this.rotate = n, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = p, this.shear = h, this.scale = c, this.setTransform = d, this.translate = f, this.transform = m, this.multiply = g, this.applyToPoint = x, this.applyToX = S, this.applyToY = E, this.applyToZ = C, this.applyToPointArray = A, this.applyToTriplePoints = P, this.applyToPointStringified = M, this.toCSS = D, this.to2dCSS = I, this.clone = b, this.cloneFromProps = _, this.equals = y, this.inversePoints = T, this.inversePoint = w, this.getInverseMatrix = k, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                }
            }();

        function _typeof$3(t) {
            return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var lottie = {}, standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";

        function setLocation(t) {
            setLocationHref(t)
        }

        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            setSubframeEnabled(t)
        }

        function setPrefix(t) {
            setIdPrefix(t)
        }

        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if ("string" == typeof t) switch (t) {
                case"high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case"medium":
                    setDefaultCurveSegments(50);
                    break;
                case"low":
                    setDefaultCurveSegments(10)
            } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
            return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
            "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
            switch (t) {
                case"propertyFactory":
                    return PropertyFactory;
                case"shapePropertyFactory":
                    return ShapePropertyFactory;
                case"matrix":
                    return Matrix;
                default:
                    return null
            }
        }

        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                var s = e[i].split("=");
                if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
            }
            return null
        }

        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
            var scripts = document.getElementsByTagName("script"), index = scripts.length - 1,
                myScript = scripts[index] || {src: ""};
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            "object" === _typeof$3(exports) && void 0 !== module || __webpack_require__(38) || (window.bodymovin = lottie)
        } catch (t) {
        }
        var ShapeModifiers = function () {
            var t = {}, e = {};
            return t.registerModifier = function (t, i) {
                e[t] || (e[t] = i)
            }, t.getModifier = function (t, i, s) {
                return new e[t](i, s)
            }, t
        }();

        function ShapeModifier() {
        }

        function TrimModifier() {
        }

        function PuckerAndBloatModifier() {
        }

        ShapeModifier.prototype.initModifierProperties = function () {
        }, ShapeModifier.prototype.addShapeToModifier = function () {
        }, ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection()};
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function (t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function (t, e, i, s, r) {
            var n = [];
            e <= 1 ? n.push({s: t, e: e}) : t >= 1 ? n.push({s: t - 1, e: e - 1}) : (n.push({s: t, e: 1}), n.push({
                s: 0,
                e: e - 1
            }));
            var a, o, l = [], h = n.length;
            for (a = 0; a < h; a += 1) {
                var u, p;
                if (!((o = n[a]).e * r < s || o.s * r > s + i)) u = o.s * r <= s ? 0 : (o.s * r - s) / i, p = o.e * r >= s + i ? 1 : (o.e * r - s) / i, l.push([u, p])
            }
            return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function (t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function (t) {
            var e, i, s, r;
            if (this._mdf || t) {
                var n = this.o.v % 360 / 360;
                if (n < 0 && (n += 1), (e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
                    var a = e;
                    e = i, i = a
                }
                e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
            } else e = this.sValue, i = this.eValue;
            var o, l, h, u, p, c = this.shapes.length, d = 0;
            if (i === e) for (r = 0; r < c; r += 1) this.shapes[r].localShapeCollection.releaseShapes(), this.shapes[r].shape._mdf = !0, this.shapes[r].shape.paths = this.shapes[r].localShapeCollection, this._mdf && (this.shapes[r].pathsData.length = 0); else if (1 === i && 0 === e || 0 === i && 1 === e) {
                if (this._mdf) for (r = 0; r < c; r += 1) this.shapes[r].pathsData.length = 0, this.shapes[r].shape._mdf = !0
            } else {
                var f, m, g = [];
                for (r = 0; r < c; r += 1) if ((f = this.shapes[r]).shape._mdf || this._mdf || t || 2 === this.m) {
                    if (l = (s = f.shape.paths)._length, p = 0, !f.shape._mdf && f.pathsData.length) p = f.totalShapeLength; else {
                        for (h = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(s.shapes[o]), h.push(u), p += u.totalLength;
                        f.totalShapeLength = p, f.pathsData = h
                    }
                    d += p, f.shape._mdf = !0
                } else f.shape.paths = f.localShapeCollection;
                var v, y = e, b = i, _ = 0;
                for (r = c - 1; r >= 0; r -= 1) if ((f = this.shapes[r]).shape._mdf) {
                    for ((m = f.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (v = this.calculateShapeEdges(e, i, f.totalShapeLength, _, d), _ += f.totalShapeLength) : v = [[y, b]], l = v.length, o = 0; o < l; o += 1) {
                        y = v[o][0], b = v[o][1], g.length = 0, b <= 1 ? g.push({
                            s: f.totalShapeLength * y,
                            e: f.totalShapeLength * b
                        }) : y >= 1 ? g.push({
                            s: f.totalShapeLength * (y - 1),
                            e: f.totalShapeLength * (b - 1)
                        }) : (g.push({s: f.totalShapeLength * y, e: f.totalShapeLength}), g.push({
                            s: 0,
                            e: f.totalShapeLength * (b - 1)
                        }));
                        var x = this.addShapes(f, g[0]);
                        if (g[0].s !== g[0].e) {
                            if (g.length > 1) if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                                var S = x.pop();
                                this.addPaths(x, m), x = this.addShapes(f, g[1], S)
                            } else this.addPaths(x, m), x = this.addShapes(f, g[1]);
                            this.addPaths(x, m)
                        }
                    }
                    f.shape.paths = m
                }
            }
        }, TrimModifier.prototype.addPaths = function (t, e) {
            var i, s = t.length;
            for (i = 0; i < s; i += 1) e.addShape(t[i])
        }, TrimModifier.prototype.addSegment = function (t, e, i, s, r, n, a) {
            r.setXYAt(e[0], e[1], "o", n), r.setXYAt(i[0], i[1], "i", n + 1), a && r.setXYAt(t[0], t[1], "v", n), r.setXYAt(s[0], s[1], "v", n + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function (t, e, i, s) {
            e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
        }, TrimModifier.prototype.addShapes = function (t, e, i) {
            var s, r, n, a, o, l, h, u, p = t.pathsData, c = t.shape.paths.shapes, d = t.shape.paths._length, f = 0,
                m = [], g = !0;
            for (i ? (o = i._length, u = i._length) : (i = shapePool.newElement(), o = 0, u = 0), m.push(i), s = 0; s < d; s += 1) {
                for (l = p[s].lengths, i.c = c[s].c, n = c[s].c ? l.length : l.length + 1, r = 1; r < n; r += 1) if (f + (a = l[r - 1]).addedLength < e.s) f += a.addedLength, i.c = !1; else {
                    if (f > e.e) {
                        i.c = !1;
                        break
                    }
                    e.s <= f && e.e >= f + a.addedLength ? (this.addSegment(c[s].v[r - 1], c[s].o[r - 1], c[s].i[r], c[s].v[r], i, o, g), g = !1) : (h = bez.getNewSegment(c[s].v[r - 1], c[s].v[r], c[s].o[r - 1], c[s].i[r], (e.s - f) / a.addedLength, (e.e - f) / a.addedLength, l[r - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1), f += a.addedLength, o += 1
                }
                if (c[s].c && l.length) {
                    if (a = l[r - 1], f <= e.e) {
                        var v = l[r - 1].addedLength;
                        e.s <= f && e.e >= f + v ? (this.addSegment(c[s].v[r - 1], c[s].o[r - 1], c[s].i[0], c[s].v[0], i, o, g), g = !1) : (h = bez.getNewSegment(c[s].v[r - 1], c[s].v[0], c[s].o[r - 1], c[s].i[0], (e.s - f) / v, (e.e - f) / v, l[r - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1)
                    } else i.c = !1;
                    f += a.addedLength, o += 1
                }
                if (i._length && (i.setXYAt(i.v[u][0], i.v[u][1], "i", u), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), f > e.e) break;
                s < d - 1 && (i = shapePool.newElement(), g = !0, m.push(i), o = 0)
            }
            return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var i = e / 100, s = [0, 0], r = t._length, n = 0;
            for (n = 0; n < r; n += 1) s[0] += t.v[n][0], s[1] += t.v[n][1];
            s[0] /= r, s[1] /= r;
            var a, o, l, h, u, p, c = shapePool.newElement();
            for (c.c = t.c, n = 0; n < r; n += 1) a = t.v[n][0] + (s[0] - t.v[n][0]) * i, o = t.v[n][1] + (s[1] - t.v[n][1]) * i, l = t.o[n][0] + (s[0] - t.o[n][0]) * -i, h = t.o[n][1] + (s[1] - t.o[n][1]) * -i, u = t.i[n][0] + (s[0] - t.i[n][0]) * -i, p = t.i[n][1] + (s[1] - t.i[n][1]) * -i, c.setTripleAt(a, o, l, h, u, p, n);
            return c
        }, PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e, i, s, r, n, a, o = this.shapes.length, l = this.amount.v;
            if (0 !== l) for (i = 0; i < o; i += 1) {
                if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], l));
                n.shape.paths = n.localShapeCollection
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function () {
            var t = [0, 0];

            function e(t, e, i) {
                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {k: [0, 0, 0]}, 1, 0, this), e.rx) {
                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                        var s, r = e.or.k.length;
                        for (s = 0; s < r; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                    }
                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(t, e.r || {k: 0}, 0, degToRads, this);
                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {k: [0, 0, 0]}, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {k: [100, 100, 100]}, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }

            return e.prototype = {
                applyToMatrix: function (t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }, getValue: function (e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                            var i;
                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                var s, r;
                                if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime)); else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                    s = [], r = [];
                                    var n = this.px, a = this.py;
                                    n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (s[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), s[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (s[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), s[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (s = [n.pv, a.pv], r[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                } else s = r = t;
                                this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                            }
                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }
                        this.frameId = this.elem.globalData.frameId
                    }
                }, precalculateMatrix: function () {
                    if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                        }
                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                    }
                }, autoOrient: function () {
                }
            }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function (t) {
                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
            }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                getTransformProperty: function (t, i, s) {
                    return new e(t, i, s)
                }
            }
        }();

        function RepeaterModifier() {
        }

        function RoundCornersModifier() {
        }

        function floatEqual(t, e) {
            return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
            return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, i) {
            return t * (1 - i) + e * i
        }

        function lerpPoint(t, e, i) {
            return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
        }

        function quadRoots(t, e, i) {
            if (0 === t) return [];
            var s = e * e - 4 * t * i;
            if (s < 0) return [];
            var r = -e / (2 * t);
            if (0 === s) return [r];
            var n = Math.sqrt(s) / (2 * t);
            return [r - n, r + n]
        }

        function polynomialCoefficients(t, e, i, s) {
            return [3 * e - t - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
            return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, i, s, r) {
            r && pointEqual(t, e) && (e = lerpPoint(t, s, 1 / 3)), r && pointEqual(i, s) && (i = lerpPoint(t, s, 2 / 3));
            var n = polynomialCoefficients(t[0], e[0], i[0], s[0]), a = polynomialCoefficients(t[1], e[1], i[1], s[1]);
            this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, i, s]
        }

        function extrema(t, e) {
            var i = t.points[0][e], s = t.points[t.points.length - 1][e];
            if (i > s) {
                var r = s;
                s = i, i = r
            }
            for (var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1) if (n[a] > 0 && n[a] < 1) {
                var o = t.point(n[a])[e];
                o < i ? i = o : o > s && (s = o)
            }
            return {min: i, max: s}
        }

        function intersectData(t, e, i) {
            var s = t.boundingBox();
            return {cx: s.cx, cy: s.cy, width: s.width, height: s.height, bez: t, t: (e + i) / 2, t1: e, t2: i}
        }

        function splitData(t) {
            var e = t.bez.split(.5);
            return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
            return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, i, s, r, n) {
            if (boxIntersect(t, e)) if (i >= n || t.width <= s && t.height <= s && e.width <= s && e.height <= s) r.push([t.t, e.t]); else {
                var a = splitData(t), o = splitData(e);
                intersectsImpl(a[0], o[0], i + 1, s, r, n), intersectsImpl(a[0], o[1], i + 1, s, r, n), intersectsImpl(a[1], o[0], i + 1, s, r, n), intersectsImpl(a[1], o[1], i + 1, s, r, n)
            }
        }

        function crossProduct(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, i, s) {
            var r = [t[0], t[1], 1], n = [e[0], e[1], 1], a = [i[0], i[1], 1], o = [s[0], s[1], 1],
                l = crossProduct(crossProduct(r, n), crossProduct(a, o));
            return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, i) {
            return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
        }

        function pointDistance(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
            return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {
        }

        function setPoint(t, e, i, s, r, n, a) {
            var o = i - Math.PI / 2, l = i + Math.PI / 2, h = e[0] + Math.cos(i) * s * r,
                u = e[1] - Math.sin(i) * s * r;
            t.setTripleAt(h, u, h + Math.cos(o) * n, u - Math.sin(o) * n, h + Math.cos(l) * a, u - Math.sin(l) * a, t.length())
        }

        function getPerpendicularVector(t, e) {
            var i = [e[0] - t[0], e[1] - t[1]], s = .5 * -Math.PI;
            return [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]]
        }

        function getProjectingAngle(t, e) {
            var i = 0 === e ? t.length() - 1 : e - 1, s = (e + 1) % t.length(),
                r = getPerpendicularVector(t.v[i], t.v[s]);
            return Math.atan2(0, 1) - Math.atan2(r[1], r[0])
        }

        function zigZagCorner(t, e, i, s, r, n, a) {
            var o = getProjectingAngle(e, i), l = e.v[i % e._length], h = e.v[0 === i ? e._length - 1 : i - 1],
                u = e.v[(i + 1) % e._length],
                p = 2 === n ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
                c = 2 === n ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
            setPoint(t, e.v[i % e._length], o, a, s, c / (2 * (r + 1)), p / (2 * (r + 1)), n)
        }

        function zigZagSegment(t, e, i, s, r, n) {
            for (var a = 0; a < s; a += 1) {
                var o = (a + 1) / (s + 1),
                    l = 2 === r ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                    h = e.normalAngle(o);
                setPoint(t, e.point(o), h, n, i, l / (2 * (s + 1)), l / (2 * (s + 1)), r), n = -n
            }
            return n
        }

        function linearOffset(t, e, i) {
            var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [polarOffset(t, s, i), polarOffset(e, s, i)]
        }

        function offsetSegment(t, e) {
            var i, s, r, n, a, o, l;
            i = (l = linearOffset(t.points[0], t.points[1], e))[0], s = l[1], r = (l = linearOffset(t.points[1], t.points[2], e))[0], n = l[1], a = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
            var h = lineIntersection(i, s, r, n);
            null === h && (h = s);
            var u = lineIntersection(a, o, r, n);
            return null === u && (u = a), new PolynomialBezier(i, h, u, o)
        }

        function joinLines(t, e, i, s, r) {
            var n = e.points[3], a = i.points[0];
            if (3 === s) return n;
            if (pointEqual(n, a)) return n;
            if (2 === s) {
                var o = -e.tangentAngle(1), l = -i.tangentAngle(0) + Math.PI,
                    h = lineIntersection(n, polarOffset(n, o + Math.PI / 2, 100), a, polarOffset(a, o + Math.PI / 2, 100)),
                    u = h ? pointDistance(h, n) : pointDistance(n, a) / 2, p = polarOffset(n, o, 2 * u * roundCorner);
                return t.setXYAt(p[0], p[1], "o", t.length() - 1), p = polarOffset(a, l, 2 * u * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], p[0], p[1], t.length()), a
            }
            var c = lineIntersection(pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], n, a, pointEqual(a, i.points[1]) ? i.points[3] : i.points[1]);
            return c && pointDistance(c, n) < r ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : n
        }

        function getIntersection(t, e) {
            var i = t.intersections(e);
            return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null
        }

        function pruneSegmentIntersection(t, e) {
            var i = t.slice(), s = e.slice(), r = getIntersection(t[t.length - 1], e[0]);
            return r && (i[t.length - 1] = t[t.length - 1].split(r[0])[0], s[0] = e[0].split(r[1])[1]), t.length > 1 && e.length > 1 && (r = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(r[0])[0]], [e[e.length - 1].split(r[1])[1]]] : [i, s]
        }

        function pruneIntersections(t) {
            for (var e, i = 1; i < t.length; i += 1) e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
            var i, s, r, n, a = t.inflectionPoints();
            if (0 === a.length) return [offsetSegment(t, e)];
            if (1 === a.length || floatEqual(a[1], 1)) return i = (r = t.split(a[0]))[0], s = r[1], [offsetSegment(i, e), offsetSegment(s, e)];
            i = (r = t.split(a[0]))[0];
            var o = (a[1] - a[0]) / (1 - a[0]);
            return n = (r = r[1].split(o))[0], s = r[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)]
        }

        function OffsetPathModifier() {
        }

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", r = e.length, n = 0; n < r; n += 1) switch (e[n].toLowerCase()) {
                case"italic":
                    s = "italic";
                    break;
                case"bold":
                    i = "700";
                    break;
                case"black":
                    i = "900";
                    break;
                case"medium":
                    i = "500";
                    break;
                case"regular":
                case"normal":
                    i = "400";
                    break;
                case"light":
                case"thin":
                    i = "200"
            }
            return {style: s, weight: t.fWeight || i}
        }

        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function (t, e, i, s, r, n) {
            var a = n ? -1 : 1, o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r), l = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
            t.translate(s.p.v[0] * a * r, s.p.v[1] * a * r, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * a * r), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / l : l), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
        }, RepeaterModifier.prototype.init = function (t, e, i, s) {
            for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function (t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var i, s = t.length;
            for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
        }, RepeaterModifier.prototype.processShapes = function (t) {
            var e, i, s, r, n, a = !1;
            if (this._mdf || t) {
                var o, l = Math.ceil(this.c.v);
                if (this._groups.length < l) {
                    for (; this._groups.length < l;) {
                        var h = {it: this.cloneElements(this._elements), ty: "gr"};
                        h.it.push({
                            a: {a: 0, ix: 1, k: [0, 0]},
                            nm: "Transform",
                            o: {a: 0, ix: 7, k: 100},
                            p: {a: 0, ix: 2, k: [0, 0]},
                            r: {a: 1, ix: 6, k: [{s: 0, e: 0, t: 0}, {s: 0, e: 0, t: 1}]},
                            s: {a: 0, ix: 3, k: [100, 100]},
                            sa: {a: 0, ix: 5, k: 0},
                            sk: {a: 0, ix: 4, k: 0},
                            ty: "tr"
                        }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), a = !0
                }
                for (n = 0, s = 0; s <= this._groups.length - 1; s += 1) {
                    if (o = n < l, this._groups[s]._render = o, this.changeGroupRender(this._groups[s].it, o), !o) {
                        var u = this.elemsData[s].it, p = u[u.length - 1];
                        0 !== p.transform.op.v ? (p.transform.op._mdf = !0, p.transform.op.v = 0) : p.transform.op._mdf = !1
                    }
                    n += 1
                }
                this._currentCopies = l;
                var c = this.o.v, d = c % 1, f = c > 0 ? Math.floor(c) : Math.ceil(c), m = this.pMatrix.props,
                    g = this.rMatrix.props, v = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var y, b, _ = 0;
                if (c > 0) {
                    for (; _ < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                    d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), _ += d)
                } else if (c < 0) {
                    for (; _ > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                    d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), _ -= d)
                }
                for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, n = this._currentCopies; n;) {
                    if (b = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== _) {
                        for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) i[y] = this.matrix.props[y];
                        this.matrix.reset()
                    } else for (this.matrix.reset(), y = 0; y < b; y += 1) i[y] = this.matrix.props[y];
                    _ += 1, n -= 1, s += r
                }
            } else for (n = this._currentCopies, s = 0, r = 1; n;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, s += r;
            return a
        }, RepeaterModifier.prototype.addShape = function () {
        }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function (t, e) {
            var i, s = shapePool.newElement();
            s.c = t.c;
            var r, n, a, o, l, h, u, p, c, d, f, m, g = t._length, v = 0;
            for (i = 0; i < g; i += 1) r = t.v[i], a = t.o[i], n = t.i[i], r[0] === a[0] && r[1] === a[1] && r[0] === n[0] && r[1] === n[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = f = r[0] + (o[0] - r[0]) * h, p = m = r[1] - (r[1] - o[1]) * h, c = u - (u - r[0]) * roundCorner, d = p - (p - r[1]) * roundCorner, s.setTripleAt(u, p, c, d, f, m, v), v += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = c = r[0] + (o[0] - r[0]) * h, p = d = r[1] + (o[1] - r[1]) * h, f = u - (u - r[0]) * roundCorner, m = p - (p - r[1]) * roundCorner, s.setTripleAt(u, p, c, d, f, m, v), v += 1) : (s.setTripleAt(r[0], r[1], a[0], a[1], n[0], n[1], v), v += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], v), v += 1);
            return s
        }, RoundCornersModifier.prototype.processShapes = function (t) {
            var e, i, s, r, n, a, o = this.shapes.length, l = this.rd.v;
            if (0 !== l) for (i = 0; i < o; i += 1) {
                if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], l));
                n.shape.paths = n.localShapeCollection
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function (t) {
            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function (t) {
            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function () {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (i < 0) return [];
            var s = Math.sqrt(i);
            return floatZero(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter((function (t) {
                return t > 0 && t < 1
            }))
        }, PolynomialBezier.prototype.split = function (t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t), i = lerpPoint(this.points[1], this.points[2], t),
                s = lerpPoint(this.points[2], this.points[3], t), r = lerpPoint(e, i, t), n = lerpPoint(i, s, t),
                a = lerpPoint(r, n, t);
            return [new PolynomialBezier(this.points[0], e, r, a, !0), new PolynomialBezier(a, n, s, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function () {
            return {x: extrema(this, 0), y: extrema(this, 1)}
        }, PolynomialBezier.prototype.boundingBox = function () {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            }
        }, PolynomialBezier.prototype.intersections = function (t, e, i) {
            void 0 === e && (e = 2), void 0 === i && (i = 7);
            var s = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, s, i), s
        }, PolynomialBezier.shapeSegment = function (t, e) {
            var i = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
        }, PolynomialBezier.shapeSegmentInverted = function (t, e) {
            var i = (e + 1) % t.length();
            return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function (t, e, i, s) {
            var r = t._length, n = shapePool.newElement();
            if (n.c = t.c, t.c || (r -= 1), 0 === r) return n;
            var a = -1, o = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(n, t, 0, e, i, s, a);
            for (var l = 0; l < r; l += 1) a = zigZagSegment(n, o, e, i, s, -a), o = l !== r - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % r) : null, zigZagCorner(n, t, l + 1, e, i, s, a);
            return n
        }, ZigZagModifier.prototype.processShapes = function (t) {
            var e, i, s, r, n, a, o = this.shapes.length, l = this.amplitude.v,
                h = Math.max(0, Math.round(this.frequency.v)), u = this.pointsType.v;
            if (0 !== l) for (i = 0; i < o; i += 1) {
                if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], l, h, u));
                n.shape.paths = n.localShapeCollection
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function (t, e, i, s) {
            var r = shapePool.newElement();
            r.c = t.c;
            var n, a, o, l = t.length();
            t.c || (l -= 1);
            var h = [];
            for (n = 0; n < l; n += 1) o = PolynomialBezier.shapeSegment(t, n), h.push(offsetSegmentSplit(o, e));
            if (!t.c) for (n = l - 1; n >= 0; n -= 1) o = PolynomialBezier.shapeSegmentInverted(t, n), h.push(offsetSegmentSplit(o, e));
            h = pruneIntersections(h);
            var u = null, p = null;
            for (n = 0; n < h.length; n += 1) {
                var c = h[n];
                for (p && (u = joinLines(r, p, c[0], i, s)), p = c[c.length - 1], a = 0; a < c.length; a += 1) o = c[a], u && pointEqual(o.points[0], u) ? r.setXYAt(o.points[1][0], o.points[1][1], "o", r.length() - 1) : r.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], r.length()), r.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], r.length()), u = o.points[3]
            }
            return h.length && joinLines(r, p, h[0][0], i, s), r
        }, OffsetPathModifier.prototype.processShapes = function (t) {
            var e, i, s, r, n, a, o = this.shapes.length, l = this.amount.v, h = this.miterLimit.v, u = this.lineJoin;
            if (0 !== l) for (i = 0; i < o; i += 1) {
                if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], l, u, h));
                n.shape.paths = n.localShapeCollection
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function () {
            var t = {w: 0, size: 0, shapes: [], data: {shapes: []}}, e = [];
            e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

            function s(t, e) {
                var i = createTag("span");
                i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                var s = createTag("span");
                s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
                var r = s.offsetWidth;
                return s.style.fontFamily = function (t) {
                    var e, i = t.split(","), s = i.length, r = [];
                    for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && r.push(i[e]);
                    return r.join(",")
                }(t) + ", " + e, {node: s, w: r, parent: i}
            }

            function r(t, e) {
                var i, s = document.body && e ? "svg" : "canvas", r = getFontProperties(t);
                if ("svg" === s) {
                    var n = createNS("text");
                    n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", r.style), n.setAttribute("font-weight", r.weight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), i = n
                } else {
                    var a = new OffscreenCanvas(500, 500).getContext("2d");
                    a.font = r.style + " " + r.weight + " 100px " + t.fFamily, i = a
                }
                return {
                    measureText: function (t) {
                        return "svg" === s ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                    }
                }
            }

            function n(t) {
                var e = 0, i = t.charCodeAt(0);
                if (i >= 55296 && i <= 56319) {
                    var s = t.charCodeAt(1);
                    s >= 56320 && s <= 57343 && (e = 1024 * (i - 55296) + s - 56320 + 65536)
                }
                return e
            }

            function a(t) {
                var e = n(t);
                return e >= 127462 && e <= 127487
            }

            var o = function () {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            return o.isModifier = function (t, e) {
                var s = t.toString(16) + e.toString(16);
                return -1 !== i.indexOf(s)
            }, o.isZeroWidthJoiner = function (t) {
                return 8205 === t
            }, o.isFlagEmoji = function (t) {
                return a(t.substr(0, 2)) && a(t.substr(2, 2))
            }, o.isRegionalCode = a, o.isCombinedCharacter = function (t) {
                return -1 !== e.indexOf(t)
            }, o.isRegionalFlag = function (t, e) {
                var i = n(t.substr(e, 2));
                if (127988 !== i) return !1;
                var s = 0;
                for (e += 2; s < 5;) {
                    if ((i = n(t.substr(e, 2))) < 917601 || i > 917626) return !1;
                    s += 1, e += 2
                }
                return 917631 === n(t.substr(e, 2))
            }, o.isVariationSelector = function (t) {
                return 65039 === t
            }, o.BLACK_FLAG_CODE_POINT = 127988, o.prototype = {
                addChars: function (t) {
                    if (t) {
                        var e;
                        this.chars || (this.chars = []);
                        var i, s, r = t.length, n = this.chars.length;
                        for (e = 0; e < r; e += 1) {
                            for (i = 0, s = !1; i < n;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                            s || (this.chars.push(t[e]), n += 1)
                        }
                    }
                }, addFonts: function (t, e) {
                    if (t) {
                        if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list);
                        if (!document.body) return this.isLoaded = !0, t.list.forEach((function (t) {
                            t.helper = r(t), t.cache = {}
                        })), void (this.fonts = t.list);
                        var i, n = t.list, a = n.length, o = a;
                        for (i = 0; i < a; i += 1) {
                            var l, h, u = !0;
                            if (n[i].loaded = !1, n[i].monoCase = s(n[i].fFamily, "monospace"), n[i].sansCase = s(n[i].fFamily, "sans-serif"), n[i].fPath) {
                                if ("p" === n[i].fOrigin || 3 === n[i].origin) {
                                    if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[i].fFamily + '"], style[f-origin="3"][f-family="' + n[i].fFamily + '"]')).length > 0 && (u = !1), u) {
                                        var p = createTag("style");
                                        p.setAttribute("f-forigin", n[i].fOrigin), p.setAttribute("f-origin", n[i].origin), p.setAttribute("f-family", n[i].fFamily), p.type = "text/css", p.innerText = "@font-face {font-family: " + n[i].fFamily + "; font-style: normal; src: url('" + n[i].fPath + "');}", e.appendChild(p)
                                    }
                                } else if ("g" === n[i].fOrigin || 1 === n[i].origin) {
                                    for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) -1 !== l[h].href.indexOf(n[i].fPath) && (u = !1);
                                    if (u) {
                                        var c = createTag("link");
                                        c.setAttribute("f-forigin", n[i].fOrigin), c.setAttribute("f-origin", n[i].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[i].fPath, document.body.appendChild(c)
                                    }
                                } else if ("t" === n[i].fOrigin || 2 === n[i].origin) {
                                    for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) n[i].fPath === l[h].src && (u = !1);
                                    if (u) {
                                        var d = createTag("link");
                                        d.setAttribute("f-forigin", n[i].fOrigin), d.setAttribute("f-origin", n[i].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", n[i].fPath), e.appendChild(d)
                                    }
                                }
                            } else n[i].loaded = !0, o -= 1;
                            n[i].helper = r(n[i], e), n[i].cache = {}, this.fonts.push(n[i])
                        }
                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else this.isLoaded = !0
                }, getCharData: function (e, i, s) {
                    for (var r = 0, n = this.chars.length; r < n;) {
                        if (this.chars[r].ch === e && this.chars[r].style === i && this.chars[r].fFamily === s) return this.chars[r];
                        r += 1
                    }
                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, s)), t
                }, getFontByName: function (t) {
                    for (var e = 0, i = this.fonts.length; e < i;) {
                        if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                }, measureText: function (t, e, i) {
                    var s = this.getFontByName(e), r = t;
                    if (!s.cache[r]) {
                        var n = s.helper;
                        if (" " === t) {
                            var a = n.measureText("|" + t + "|"), o = n.measureText("||");
                            s.cache[r] = (a - o) / 100
                        } else s.cache[r] = n.measureText(t) / 100
                    }
                    return s.cache[r] * i
                }, checkLoadedFonts: function () {
                    var t, e, i, s = this.fonts.length, r = s;
                    for (t = 0; t < s; t += 1) this.fonts[t].loaded ? r -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (r -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (r -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                    0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                }, setIsLoaded: function () {
                    this.isLoaded = !0
                }
            }, o
        }();

        function SlotManager(t) {
            this.animationData = t
        }

        function slotFactory(t) {
            return new SlotManager(t)
        }

        function RenderableElement() {
        }

        SlotManager.prototype.getProp = function (t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
            initRenderable: function () {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            }, addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
            }, removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            }, prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t)
            }, checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            }, checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            }, renderRenderable: function () {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
            }, sourceRectAtTime: function () {
                return {top: 0, left: 0, width: 100, height: 100}
            }, getLayerSize: function () {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {w: this.data.width, h: this.data.height}
            }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
        }, function (t) {
            return blendModeEnums[t] || ""
        }), blendModeEnums;

        function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var i, s = t.ef || [];
            this.effectElements = [];
            var r, n = s.length;
            for (i = 0; i < n; i += 1) r = new GroupEffect(s[i], e), this.effectElements.push(r)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }

        function BaseElement() {
        }

        function FrameElement() {
        }

        function FootageElement(t, e, i) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
        }

        function AudioElement(t, e, i) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
            var s = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {k: [100]}, 1, .01, this)
        }

        function BaseRenderer() {
        }

        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
            var i;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var s, r = this.data.ef.length, n = this.data.ef;
            for (i = 0; i < r; i += 1) {
                switch (s = null, n[i].ty) {
                    case 0:
                        s = new SliderEffect(n[i], e, this);
                        break;
                    case 1:
                        s = new AngleEffect(n[i], e, this);
                        break;
                    case 2:
                        s = new ColorEffect(n[i], e, this);
                        break;
                    case 3:
                        s = new PointEffect(n[i], e, this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(n[i], e, this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(n[i], e, this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(n[i], e, this);
                        break;
                    case 5:
                        s = new EffectsManager(n[i], e, this);
                        break;
                    default:
                        s = new NoValueEffect(n[i], e, this)
                }
                s && this.effectElements.push(s)
            }
        }, BaseElement.prototype = {
            checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                }
                return !1
            }, initExpressions: function () {
                var t = getExpressionInterfaces();
                if (t) {
                    var e = t("layer"), i = t("effects"), s = t("shape"), r = t("text"), n = t("comp");
                    this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var a = i.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = n(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = r(this), this.layerInterface.text = this.layerInterface.textInterface)
                }
            }, setBlendMode: function () {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            }, initBaseData: function (t, e, i) {
                this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            }, getType: function () {
                return this.type
            }, sourceRectAtTime: function () {
            }
        }, FrameElement.prototype = {
            initFrame: function () {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            }, prepareProperties: function (t, e) {
                var i, s = this.dynamicProperties.length;
                for (i = 0; i < s; i += 1) (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            }, addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
            }
        }, FootageElement.prototype.prepareFrame = function () {
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
            return null
        }, FootageElement.prototype.renderFrame = function () {
        }, FootageElement.prototype.destroy = function () {
        }, FootageElement.prototype.initExpressions = function () {
            var t = getExpressionInterfaces();
            if (t) {
                var e = t("footage");
                this.layerInterface = e(this)
            }
        }, FootageElement.prototype.getFootageData = function () {
            return this.footageData
        }, AudioElement.prototype.prepareFrame = function (t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr; else {
                var e = this.tm.v;
                this._currentTime = e
            }
            this._volume = this.lv.v[0];
            var i = this._volume * this._volumeMultiplier;
            this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function () {
        }, AudioElement.prototype.hide = function () {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function () {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function () {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function (t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function () {
            return null
        }, AudioElement.prototype.destroy = function () {
        }, AudioElement.prototype.sourceRectAtTime = function () {
        }, AudioElement.prototype.initExpressions = function () {
        }, BaseRenderer.prototype.checkLayers = function (t) {
            var e, i, s = this.layers.length;
            for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function (t) {
            var e;
            this.completeLayers = !1;
            var i, s = t.length, r = this.layers.length;
            for (e = 0; e < s; e += 1) for (i = 0; i < r;) {
                if (this.layers[i].id === t[e].id) {
                    this.layers[i] = t[e];
                    break
                }
                i += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
            for (var s = this.elements, r = this.layers, n = 0, a = r.length; n < a;) r[n].ind == e && (s[n] && !0 !== s[n] ? (i.push(s[n]), s[n].setAsParent(), void 0 !== r[n].parent ? this.buildElementParenting(t, r[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
        }, BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) if (t[e].xt) {
                var s = this.createComp(t[e]);
                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
            }
        }, BaseRenderer.prototype.getElementById = function (t) {
            var e, i = this.elements.length;
            for (e = 0; e < i; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
            return null
        }, BaseRenderer.prototype.getElementByPath = function (t) {
            var e, i = t.shift();
            if ("number" == typeof i) e = this.elements[i]; else {
                var s, r = this.elements.length;
                for (s = 0; s < r; s += 1) if (this.elements[s].data.nm === i) {
                    e = this.elements[s];
                    break
                }
            }
            return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        };
        var effectTypes = {TRANSFORM_EFFECT: "transformEFfect"};

        function TransformElement() {
        }

        function MaskElement(t, e, i) {
            this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var s, r, n = this.globalData.defs, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var o, l, h, u, p, c, d = this.masksProperties, f = 0, m = [], g = createElementID(), v = "clipPath",
                y = "clip-path";
            for (s = 0; s < a; s += 1) if (("a" !== d[s].mode && "n" !== d[s].mode || d[s].inv || 100 !== d[s].o.k || d[s].o.x) && (v = "mask", y = "mask"), "s" !== d[s].mode && "i" !== d[s].mode || 0 !== f ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), r = createNS("path"), "n" === d[s].mode) this.viewData[s] = {
                op: PropertyFactory.getProp(this.element, d[s].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, d[s], 3),
                elem: r,
                lastPath: ""
            }, n.appendChild(r); else {
                var b;
                if (f += 1, r.setAttribute("fill", "s" === d[s].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== d[s].x.k ? (v = "mask", y = "mask", c = PropertyFactory.getProp(this.element, d[s].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (p = createNS("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), u.appendChild(p), n.appendChild(u), r.setAttribute("stroke", "s" === d[s].mode ? "#000000" : "#ffffff")) : (p = null, c = null), this.storedData[s] = {
                    elem: r,
                    x: c,
                    expan: p,
                    lastPath: "",
                    lastOperator: "",
                    filterId: b,
                    lastRadius: 0
                }, "i" === d[s].mode) {
                    l = m.length;
                    var _ = createNS("g");
                    for (o = 0; o < l; o += 1) _.appendChild(m[o]);
                    var x = createNS("mask");
                    x.setAttribute("mask-type", "alpha"), x.setAttribute("id", g + "_" + f), x.appendChild(r), n.appendChild(x), _.setAttribute("mask", "url(" + getLocationHref() + "#" + g + "_" + f + ")"), m.length = 0, m.push(_)
                } else m.push(r);
                d[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                    elem: r,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, d[s].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, d[s], 3),
                    invRect: h
                }, this.viewData[s].prop.k || this.drawPath(d[s], this.viewData[s].prop.v, this.viewData[s])
            }
            for (this.maskElement = createNS(v), a = m.length, s = 0; s < a; s += 1) this.maskElement.appendChild(m[s]);
            f > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + g + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        TransformElement.prototype = {
            initTransform: function () {
                var t = new Matrix;
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {o: 0},
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: t,
                    localMat: t,
                    localOpacity: 1
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            }, renderTransform: function () {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for (; i < s;) {
                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break
                        }
                        i += 1
                    }
                    if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
            }, renderLocalTransform: function () {
                if (this.localTransforms) {
                    var t = 0, e = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                    if (this.finalTransform._localMatMdf) {
                        var i = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                            var s = this.localTransforms[t].matrix;
                            i.multiply(s)
                        }
                        i.multiply(this.finalTransform.mat)
                    }
                    if (this.finalTransform._opMdf) {
                        var r = this.finalTransform.localOpacity;
                        for (t = 0; t < e; t += 1) r *= .01 * this.localTransforms[t].opacity;
                        this.finalTransform.localOpacity = r
                    }
                }
            }, searchEffectTransforms: function () {
                if (this.renderableEffectsManager) {
                    var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (t.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                        var e = 0, i = t.length;
                        for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
                    }
                }
            }, globalToLocal: function (t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i, s = !0, r = this.comp; s;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : s = !1;
                var n, a = e.length;
                for (i = 0; i < a; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
                return t
            }, mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function (t) {
            var e, i = this.element.finalTransform.mat, s = this.masksProperties.length;
            for (e = 0; e < s; e += 1) if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                var r = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function () {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function (t, e, i) {
            var s, r, n = " M" + e.v[0][0] + "," + e.v[0][1];
            for (r = e._length, s = 1; s < r; s += 1) n += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            if (e.c && r > 1 && (n += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
                var a = "";
                i.elem && (e.c && (a = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", a)), i.lastPath = n
            }
        }, MaskElement.prototype.destroy = function () {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = function () {
            var t = {};
            return t.createFilter = function (t, e) {
                var i = createNS("filter");
                i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"));
                return i
            }, t.createAlphaToLuminanceFilter = function () {
                var t = createNS("feColorMatrix");
                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }, t
        }(), featureSupport = function () {
            var t = {maskType: !0, svgLumaHidden: !0, offscreenCanvas: "undefined" != typeof OffscreenCanvas};
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
        }(), registeredEffects$1 = {}, idPrefix = "filter_result_";

        function SVGEffects(t) {
            var e, i, s = "SourceGraphic", r = t.data.ef ? t.data.ef.length : 0, n = createElementID(),
                a = filtersFactory.createFilter(n, !0), o = 0;
            for (this.filters = [], e = 0; e < r; e += 1) {
                i = null;
                var l = t.data.ef[e].ty;
                if (registeredEffects$1[l]) i = new (0, registeredEffects$1[l].effect)(a, t.effectsManager.effectElements[e], t, idPrefix + o, s), s = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1);
                i && this.filters.push(i)
            }
            o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, i) {
            registeredEffects$1[t] = {effect: e, countsAsEffect: i}
        }

        function SVGBaseElement() {
        }

        function HierarchyElement() {
        }

        function RenderableDOMElement() {
        }

        function IImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function IShapeElement() {
        }

        SVGEffects.prototype.renderFrame = function (t) {
            var e, i = this.filters.length;
            for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function (t) {
            var e, i = this.filters.length, s = [];
            for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
            return s
        }, SVGBaseElement.prototype = {
            initRendererElement: function () {
                this.layerElement = createNS("g")
            }, createContainerElements: function () {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var e = createNS("g");
                    e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var i = createNS("clipPath"), s = createNS("path");
                    s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var r = createElementID();
                    if (i.setAttribute("id", r), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                        var n = createNS("g");
                        n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            }, renderElement: function () {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
            }, destroyBaseElement: function () {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            }, getBaseElement: function () {
                return this.data.hd ? null : this.baseElement
            }, createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
            }, getMatte: function (t) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                    var e, i, s, r, n = this.layerId + "_" + t;
                    if (1 === t || 3 === t) {
                        var a = createNS("mask");
                        a.setAttribute("id", n), a.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), a.appendChild(s), this.globalData.defs.appendChild(a), featureSupport.maskType || 1 !== t || (a.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(s), a.appendChild(r), r.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
                    } else if (2 === t) {
                        var o = createNS("mask");
                        o.setAttribute("id", n), o.setAttribute("mask-type", "alpha");
                        var l = createNS("g");
                        o.appendChild(l), e = createElementID(), i = filtersFactory.createFilter(e);
                        var h = createNS("feComponentTransfer");
                        h.setAttribute("in", "SourceGraphic"), i.appendChild(h);
                        var u = createNS("feFuncA");
                        u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), h.appendChild(u), this.globalData.defs.appendChild(i);
                        var p = createNS("rect");
                        p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(p), (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(s), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), l.appendChild(p), r.appendChild(this.layerElement), l.appendChild(r)), this.globalData.defs.appendChild(o)
                    }
                    this.matteMasks[t] = n
                }
                return this.matteMasks[t]
            }, setMatte: function (t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
            }
        }, HierarchyElement.prototype = {
            initHierarchy: function () {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            }, setHierarchy: function (t) {
                this.hierarchy = t
            }, setAsParent: function () {
                this._isParent = !0
            }, checkParenting: function () {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        }, extendPrototype([RenderableElement, createProxyFunction({
            initElement: function (t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
            }, hide: function () {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
            }, show: function () {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
            }, renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            }, renderInnerContent: function () {
            }, prepareFrame: function (t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
            }, destroy: function () {
                this.innerElem = null, this.destroyBaseElement()
            }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect
        }, IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
                var e, i = this.shapeModifiers.length;
                for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
            }, isShapeInAnimatedModifiers: function (t) {
                for (var e = this.shapeModifiers.length; 0 < e;) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1
            }, renderModifiers: function () {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1) ;
                }
            }, searchProcessedElement: function (t) {
                for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1
                }
                return 0
            }, addProcessedElement: function (t, e) {
                for (var i = this.processedElements, s = i.length; s;) if (i[s -= 1].elem === t) return void (i[s].pos = e);
                i.push(new ProcessedElement(t, e))
            }, prepareFrame: function (t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }
        };
        var lineCapEnum = {1: "butt", 2: "round", 3: "square"}, lineJoinEnum = {1: "miter", 2: "round", 3: "bevel"};

        function SVGShapeData(t, e, i) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
            for (var s = 0, r = t.length; s < r;) {
                if (t[s].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                s += 1
            }
        }

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, i, s) {
            var r;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(s);
            var n, a = e.length || 0;
            for (r = 0; r < a; r += 1) n = PropertyFactory.getProp(t, e[r].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[r] = {
                n: e[r].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
        }

        function SVGNoStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
        }

        function GradientProperty(t, e, i) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
        }

        function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, i) {
            this.transform = {
                mProps: t,
                op: e,
                container: i
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function () {
            this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function (t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, i = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function (t, e) {
            for (var i = 0, s = this.o.length / 2; i < s;) {
                if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                i += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e;) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function (t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, i, s, r = 4 * this.data.p;
                for (e = 0; e < r; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                if (this.o.length) for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, i) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {k: 0}, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {k: 0}, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
            var i = createElementID(), s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
            var r, n, a, o = [];
            for (a = 4 * e.g.p, n = 0; n < a; n += 4) r = createNS("stop"), s.appendChild(r), o.push(r);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = s, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, s, r, n = createNS("mask"), a = createNS("path");
                n.appendChild(a);
                var o = createElementID(), l = createElementID();
                n.setAttribute("id", l);
                var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var u = this.stops;
                for (s = 4 * t.g.p; s < r; s += 2) (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(i), u.push(i);
                a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = n, this.ost = u, this.maskId = l, e.msElem = a
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function (t, e, i, s) {
            if (0 === e) return "";
            var r, n = t.o, a = t.i, o = t.v, l = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
            for (r = 1; r < e; r += 1) l += " C" + s.applyToPointStringified(n[r - 1][0], n[r - 1][1]) + " " + s.applyToPointStringified(a[r][0], a[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
            return i && e && (l += " C" + s.applyToPointStringified(n[r - 1][0], n[r - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
        }, SVGElementsRenderer = function () {
            var t = new Matrix, e = new Matrix;

            function i(t, e, i) {
                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function s() {
            }

            function r(i, s, r) {
                var n, a, o, l, h, u, p, c, d, f, m = s.styles.length, g = s.lvl;
                for (u = 0; u < m; u += 1) {
                    if (l = s.sh._mdf || r, s.styles[u].lvl < g) {
                        for (c = e.reset(), d = g - s.styles[u].lvl, f = s.transformers.length - 1; !l && d > 0;) l = s.transformers[f].mProps._mdf || l, d -= 1, f -= 1;
                        if (l) for (d = g - s.styles[u].lvl, f = s.transformers.length - 1; d > 0;) c.multiply(s.transformers[f].mProps.v), d -= 1, f -= 1
                    } else c = t;
                    if (a = (p = s.sh.paths)._length, l) {
                        for (o = "", n = 0; n < a; n += 1) (h = p.shapes[n]) && h._length && (o += buildShapeString(h, h._length, h.c, c));
                        s.caches[u] = o
                    } else o = s.caches[u];
                    s.styles[u].d += !0 === i.hd ? "" : o, s.styles[u]._mdf = l || s.styles[u]._mdf
                }
            }

            function n(t, e, i) {
                var s = e.style;
                (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function a(t, e, i) {
                o(t, e, i), l(t, e, i)
            }

            function o(t, e, i) {
                var s, r, n, a, o, l = e.gf, h = e.g._hasOpacity, u = e.s.v, p = e.e.v;
                if (e.o._mdf || i) {
                    var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(c, e.o.v)
                }
                if (e.s._mdf || i) {
                    var d = 1 === t.t ? "x1" : "cx", f = "x1" === d ? "y1" : "cy";
                    l.setAttribute(d, u[0]), l.setAttribute(f, u[1]), h && !e.g._collapsable && (e.of.setAttribute(d, u[0]), e.of.setAttribute(f, u[1]))
                }
                if (e.g._cmdf || i) {
                    s = e.cst;
                    var m = e.g.c;
                    for (n = s.length, r = 0; r < n; r += 1) (a = s[r]).setAttribute("offset", m[4 * r] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * r + 1] + "," + m[4 * r + 2] + "," + m[4 * r + 3] + ")")
                }
                if (h && (e.g._omdf || i)) {
                    var g = e.g.o;
                    for (n = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < n; r += 1) a = s[r], e.g._collapsable || a.setAttribute("offset", g[2 * r] + "%"), a.setAttribute("stop-opacity", g[2 * r + 1])
                }
                if (1 === t.t) (e.e._mdf || i) && (l.setAttribute("x2", p[0]), l.setAttribute("y2", p[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", p[0]), e.of.setAttribute("y2", p[1]))); else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(u[0] - p[0], 2) + Math.pow(u[1] - p[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                    o || (o = Math.sqrt(Math.pow(u[0] - p[0], 2) + Math.pow(u[1] - p[1], 2)));
                    var v = Math.atan2(p[1] - u[1], p[0] - u[0]), y = e.h.v;
                    y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                    var b = o * y, _ = Math.cos(v + e.a.v) * b + u[0], x = Math.sin(v + e.a.v) * b + u[1];
                    l.setAttribute("fx", _), l.setAttribute("fy", x), h && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", x))
                }
            }

            function l(t, e, i) {
                var s = e.style, r = e.d;
                r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute("stroke-dasharray", r.dashStr), s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
            }

            return {
                createRenderFunction: function (t) {
                    switch (t.ty) {
                        case"fl":
                            return n;
                        case"gf":
                            return o;
                        case"gs":
                            return a;
                        case"st":
                            return l;
                        case"sh":
                        case"el":
                        case"rc":
                        case"sr":
                            return r;
                        case"tr":
                            return i;
                        case"no":
                            return s;
                        default:
                            return null
                    }
                }
            }
        }();

        function SVGShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
        }

        function LetterProps(t, e, i, s, r, n) {
            this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = r, this.p = n, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!i,
                fc: !!s,
                m: !0,
                p: !0
            }
        }

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {
        }, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {
        }, SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t, e, i, s, r = this.shapes.length, n = this.stylesList.length, a = [], o = !1;
            for (i = 0; i < n; i += 1) {
                for (s = this.stylesList[i], o = !1, a.length = 0, t = 0; t < r; t += 1) -1 !== (e = this.shapes[t]).styles.indexOf(s) && (a.push(e), o = e._isAnimated || o);
                a.length > 1 && o && this.setShapesAsAnimated(a)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var i, s = new SVGStyleData(t, e), r = s.pElem;
            if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, s); else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, s); else if ("gf" === t.ty || "gs" === t.ty) {
                i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))
            } else "no" === t.ty && (i = new SVGNoStyleData(this, t, s));
            return "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), r.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this), s = new SVGTransformData(i, i.o, e);
            return this.addToAnimatedContents(t, s), s
        }, SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
            var s = 4;
            "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
            var r = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, s, this));
            return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var i = 0, s = this.animatedContents.length; i < s;) {
                if (this.animatedContents[i].element === e) return;
                i += 1
            }
            this.animatedContents.push({fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t})
        }, SVGShapeElement.prototype.setElementStyles = function (t) {
            var e, i = t.styles, s = this.stylesList.length;
            for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function (t, e, i, s, r, n, a) {
            var o, l, h, u, p, c, d = [].concat(n), f = t.length - 1, m = [], g = [];
            for (o = f; o >= 0; o -= 1) {
                if ((c = this.searchProcessedElement(t[o])) ? e[o] = i[c - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem), m.push(e[o].style); else if ("gr" === t[o].ty) {
                    if (c) for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l]; else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, d, a), t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
                } else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], s)), u = e[o].transform, d.push(u)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], d, r)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (p = e[o]).closed = !1 : ((p = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = p, this.shapeModifiers.push(p)), g.push(p)) : "rp" === t[o].ty && (c ? (p = e[o]).closed = !0 : (p = ShapeModifiers.getModifier(t[o].ty), e[o] = p, p.init(this, t, o, e), this.shapeModifiers.push(p), a = !1), g.push(p));
                this.addProcessedElement(t[o], o + 1)
            }
            for (f = m.length, o = 0; o < f; o += 1) m[o].closed = !0;
            for (f = g.length, o = 0; o < f; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function () {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function () {
            var t, e, i = this.animatedContents.length;
            for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function (t, e, i, s, r, n) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var a = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, a = !0), this.m !== r && (this.m = r, this._mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }, TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function () {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function (t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData, i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData); else {
                    var s;
                    this.lock = !0, this._mdf = !1;
                    var r = this.effectsSequence.length, n = t || this.data.d.k[this.keysIndex].s;
                    for (s = 0; s < r; s += 1) n = i !== this.keysIndex ? this.effectsSequence[s](n, n.t) : this.effectsSequence[s](this.currentData, n.t);
                    e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function () {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
            return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function (t) {
            for (var e, i, s = [], r = 0, n = t.length, a = !1, o = !1, l = ""; r < n;) a = o, o = !1, e = t.charCodeAt(r), l = t.charAt(r), FontManager.isCombinedCharacter(e) ? a = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, r) ? l = t.substr(r, 14) : (i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (l = t.substr(r, 2), a = !0) : l = FontManager.isFlagEmoji(t.substr(r, 4)) ? t.substr(r, 4) : t.substr(r, 2)) : e > 56319 ? (i = t.charCodeAt(r + 1), FontManager.isVariationSelector(e) && (a = !0)) : FontManager.isZeroWidthJoiner(e) && (a = !0, o = !0), a ? (s[s.length - 1] += l, a = !1) : s.push(l), r += l.length;
            return s
        }, TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e, i, s, r, n, a, o, l = this.elem.globalData.fontManager, h = this.data, u = [], p = 0, c = h.m.g,
                d = 0, f = 0, m = 0, g = [], v = 0, y = 0, b = l.getFontByName(t.f), _ = 0, x = getFontProperties(b);
            t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
            var S, E = t.tr / 1e3 * t.finalSize;
            if (t.sz) for (var C, k, w = !0, T = t.sz[0], P = t.sz[1]; w;) {
                C = 0, v = 0, i = (k = this.buildFinalText(t.t)).length, E = t.tr / 1e3 * t.finalSize;
                var A = -1;
                for (e = 0; e < i; e += 1) S = k[e].charCodeAt(0), s = !1, " " === k[e] ? A = e : 13 !== S && 3 !== S || (v = 0, s = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(k[e], b.fStyle, b.fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(k[e], t.f, t.finalSize), v + _ > T && " " !== k[e] ? (-1 === A ? i += 1 : e = A, C += t.finalLineHeight || 1.2 * t.finalSize, k.splice(e, A === e ? 1 : 0, "\r"), A = -1, v = 0) : (v += _, v += E);
                C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && P < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = k, i = t.finalText.length, w = !1)
            }
            v = -E, _ = 0;
            var M, D = 0;
            for (e = 0; e < i; e += 1) if (s = !1, 13 === (S = (M = t.finalText[e]).charCodeAt(0)) || 3 === S ? (D = 0, g.push(v), y = v > y ? v : y, v = -2 * E, r = "", s = !0, m += 1) : r = M, l.chars ? (o = l.getCharData(M, b.fStyle, l.getFontByName(t.f).fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(r, t.f, t.finalSize), " " === M ? D += _ + E : (v += _ + E + D, D = 0), u.push({
                l: _,
                an: _,
                add: d,
                n: s,
                anIndexes: [],
                val: r,
                line: m,
                animatorJustifyOffset: 0
            }), 2 == c) {
                if (d += _, "" === r || " " === r || e === i - 1) {
                    for ("" !== r && " " !== r || (d -= _); f <= e;) u[f].an = d, u[f].ind = p, u[f].extra = _, f += 1;
                    p += 1, d = 0
                }
            } else if (3 == c) {
                if (d += _, "" === r || e === i - 1) {
                    for ("" === r && (d -= _); f <= e;) u[f].an = d, u[f].ind = p, u[f].extra = _, f += 1;
                    d = 0, p += 1
                }
            } else u[p].ind = p, u[p].extra = 0, p += 1;
            if (t.l = u, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0; else switch (t.boxWidth = y, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = g;
            var F, I, L, B, V = h.a;
            a = V.length;
            var O = [];
            for (n = 0; n < a; n += 1) {
                for ((F = V[n]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), B = 0, L = F.s.b, e = 0; e < i; e += 1) (I = u[e]).anIndexes[n] = B, (1 == L && "" !== I.val || 2 == L && "" !== I.val && " " !== I.val || 3 == L && (I.n || " " == I.val || e == i - 1) || 4 == L && (I.n || e == i - 1)) && (1 === F.s.rn && O.push(B), B += 1);
                h.a[n].s.totalChars = B;
                var R, z = -1;
                if (1 === F.s.rn) for (e = 0; e < i; e += 1) z != (I = u[e]).anIndexes[n] && (z = I.anIndexes[n], R = O.splice(Math.floor(Math.random() * O.length), 1)[0]), I.anIndexes[n] = R
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s);
            i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function (t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function (t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function () {
            var t = Math.max, e = Math.min, i = Math.floor;

            function s(t, e) {
                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {k: 0}, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {v: 100}, this.o = PropertyFactory.getProp(t, e.o || {k: 0}, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {k: 0}, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {k: 0}, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {k: 100}, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }

            return s.prototype = {
                getMult: function (s) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var r = 0, n = 0, a = 1, o = 1;
                    this.ne.v > 0 ? r = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                    var l = BezierFactory.getBezierEasing(r, n, a, o).get, h = 0, u = this.finalS, p = this.finalE,
                        c = this.data.sh;
                    if (2 === c) h = l(h = p === u ? s >= p ? 1 : 0 : t(0, e(.5 / (p - u) + (s - u) / (p - u), 1))); else if (3 === c) h = l(h = p === u ? s >= p ? 0 : 1 : 1 - t(0, e(.5 / (p - u) + (s - u) / (p - u), 1))); else if (4 === c) p === u ? h = 0 : (h = t(0, e(.5 / (p - u) + (s - u) / (p - u), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h); else if (5 === c) {
                        if (p === u) h = 0; else {
                            var d = p - u, f = -d / 2 + (s = e(t(0, s + .5 - u), p - u)), m = d / 2;
                            h = Math.sqrt(1 - f * f / (m * m))
                        }
                        h = l(h)
                    } else 6 === c ? (p === u ? h = 0 : (s = e(t(0, s + .5 - u), p - u), h = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (p - u))) / 2), h = l(h)) : (s >= i(u) && (h = t(0, e(s - u < 0 ? e(p, 1) - (u - s) : p - s, 1))), h = l(h));
                    if (100 !== this.sm.v) {
                        var g = .01 * this.sm.v;
                        0 === g && (g = 1e-8);
                        var v = .5 - .5 * g;
                        h < v ? h = 0 : (h = (h - v) / g) > 1 && (h = 1)
                    }
                    return h * this.a.v
                }, getValue: function (t) {
                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars, i = this.o.v / e, s = this.s.v / e + i,
                        r = this.e.v / e + i;
                    if (s > r) {
                        var n = s;
                        s = r, r = n
                    }
                    this.finalS = s, this.finalE = r
                }
            }, extendPrototype([DynamicPropertyContainer], s), {
                getTextSelectorProp: function (t, e, i) {
                    return new s(t, e, i)
                }
            }
        }();

        function TextAnimatorDataProperty(t, e, i) {
            var s = {propType: !1}, r = PropertyFactory.getProp, n = e.a;
            this.a = {
                r: n.r ? r(t, n.r, 0, degToRads, i) : s,
                rx: n.rx ? r(t, n.rx, 0, degToRads, i) : s,
                ry: n.ry ? r(t, n.ry, 0, degToRads, i) : s,
                sk: n.sk ? r(t, n.sk, 0, degToRads, i) : s,
                sa: n.sa ? r(t, n.sa, 0, degToRads, i) : s,
                s: n.s ? r(t, n.s, 1, .01, i) : s,
                a: n.a ? r(t, n.a, 1, 0, i) : s,
                o: n.o ? r(t, n.o, 0, .01, i) : s,
                p: n.p ? r(t, n.p, 1, 0, i) : s,
                sw: n.sw ? r(t, n.sw, 0, 0, i) : s,
                sc: n.sc ? r(t, n.sc, 1, 0, i) : s,
                fc: n.fc ? r(t, n.fc, 1, 0, i) : s,
                fh: n.fh ? r(t, n.fh, 0, 0, i) : s,
                fs: n.fs ? r(t, n.fs, 0, .01, i) : s,
                fb: n.fb ? r(t, n.fb, 0, .01, i) : s,
                t: n.t ? r(t, n.t, 0, 0, i) : s
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, i) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {alignment: {}}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
        }

        function ITextElement() {
        }

        TextAnimatorProperty.prototype.searchProperties = function () {
            var t, e, i = this._textData.a.length, s = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: s(this._elem, this._textData.p.a, 0, 0, this),
                f: s(this._elem, this._textData.p.f, 0, 0, this),
                l: s(this._elem, this._textData.p.l, 0, 0, this),
                r: s(this._elem, this._textData.p.r, 0, 0, this),
                p: s(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var i, s, r, n, a, o, l, h, u, p, c, d, f, m, g, v, y, b, _, x = this._moreOptions.alignment.v,
                    S = this._animatorsData, E = this._textData, C = this.mHelper, k = this._renderType,
                    w = this.renderedLetters.length, T = t.l;
                if (this._hasMaskedPath) {
                    if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var P, A = _.v;
                        for (this._pathData.r.v && (A = A.reverse()), a = {
                            tLength: 0,
                            segments: []
                        }, n = A._length - 1, v = 0, r = 0; r < n; r += 1) P = bez.buildBezierData(A.v[r], A.v[r + 1], [A.o[r][0] - A.v[r][0], A.o[r][1] - A.v[r][1]], [A.i[r + 1][0] - A.v[r + 1][0], A.i[r + 1][1] - A.v[r + 1][1]]), a.tLength += P.segmentLength, a.segments.push(P), v += P.segmentLength;
                        r = n, _.v.c && (P = bez.buildBezierData(A.v[r], A.v[0], [A.o[r][0] - A.v[r][0], A.o[r][1] - A.v[r][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), a.tLength += P.segmentLength, a.segments.push(P), v += P.segmentLength), this._pathData.pi = a
                    }
                    if (a = this._pathData.pi, o = this._pathData.f.v, c = 0, p = 1, h = 0, u = !0, m = a.segments, o < 0 && _.v.c) for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), p = (f = m[c = m.length - 1].points).length - 1; o < 0;) o += f[p].partialLength, (p -= 1) < 0 && (p = (f = m[c -= 1].points).length - 1);
                    d = (f = m[c].points)[p - 1], g = (l = f[p]).partialLength
                }
                n = T.length, i = 0, s = 0;
                var M, D, F, I, L, B = 1.2 * t.finalSize * .714, V = !0;
                F = S.length;
                var O, R, z, N, G, q, H, j, W, Y, X, $, U = -1, K = o, Z = c, J = p, Q = -1, tt = "",
                    et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var it = 0, st = 0, rt = 2 === t.j ? -.5 : -1, nt = 0, at = !0;
                    for (r = 0; r < n; r += 1) if (T[r].n) {
                        for (it && (it += st); nt < r;) T[nt].animatorJustifyOffset = it, nt += 1;
                        it = 0, at = !0
                    } else {
                        for (D = 0; D < F; D += 1) (M = S[D].a).t.propType && (at && 2 === t.j && (st += M.t.v * rt), (L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars)).length ? it += M.t.v * L[0] * rt : it += M.t.v * L * rt);
                        at = !1
                    }
                    for (it && (it += st); nt < r;) T[nt].animatorJustifyOffset = it, nt += 1
                }
                for (r = 0; r < n; r += 1) {
                    if (C.reset(), N = 1, T[r].n) i = 0, s += t.yOffset, s += V ? 1 : 0, o = K, V = !1, this._hasMaskedPath && (p = J, d = (f = m[c = Z].points)[p - 1], g = (l = f[p]).partialLength, h = 0), tt = "", X = "", W = "", $ = "", et = this.defaultPropsArray; else {
                        if (this._hasMaskedPath) {
                            if (Q !== T[r].line) {
                                switch (t.j) {
                                    case 1:
                                        o += v - t.lineWidths[T[r].line];
                                        break;
                                    case 2:
                                        o += (v - t.lineWidths[T[r].line]) / 2
                                }
                                Q = T[r].line
                            }
                            U !== T[r].ind && (T[U] && (o += T[U].extra), o += T[r].an / 2, U = T[r].ind), o += x[0] * T[r].an * .005;
                            var ot = 0;
                            for (D = 0; D < F; D += 1) (M = S[D].a).p.propType && ((L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars)).length ? ot += M.p.v[0] * L[0] : ot += M.p.v[0] * L), M.a.propType && ((L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars)).length ? ot += M.a.v[0] * L[0] : ot += M.a.v[0] * L);
                            for (u = !0, this._pathData.a.v && (o = .5 * T[0].an + (v - this._pathData.f.v - .5 * T[0].an - .5 * T[T.length - 1].an) * U / (n - 1), o += this._pathData.f.v); u;) h + g >= o + ot || !f ? (y = (o + ot - h) / l.partialLength, R = d.point[0] + (l.point[0] - d.point[0]) * y, z = d.point[1] + (l.point[1] - d.point[1]) * y, C.translate(-x[0] * T[r].an * .005, -x[1] * B * .01), u = !1) : f && (h += l.partialLength, (p += 1) >= f.length && (p = 0, m[c += 1] ? f = m[c].points : _.v.c ? (p = 0, f = m[c = 0].points) : (h -= l.partialLength, f = null)), f && (d = l, g = (l = f[p]).partialLength));
                            O = T[r].an / 2 - T[r].add, C.translate(-O, 0, 0)
                        } else O = T[r].an / 2 - T[r].add, C.translate(-O, 0, 0), C.translate(-x[0] * T[r].an * .005, -x[1] * B * .01, 0);
                        for (D = 0; D < F; D += 1) (M = S[D].a).t.propType && (L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? L.length ? o += M.t.v * L[0] : o += M.t.v * L : L.length ? i += M.t.v * L[0] : i += M.t.v * L));
                        for (t.strokeWidthAnim && (q = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1) (M = S[D].a).a.propType && ((L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars)).length ? C.translate(-M.a.v[0] * L[0], -M.a.v[1] * L[1], M.a.v[2] * L[2]) : C.translate(-M.a.v[0] * L, -M.a.v[1] * L, M.a.v[2] * L));
                        for (D = 0; D < F; D += 1) (M = S[D].a).s.propType && ((L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars)).length ? C.scale(1 + (M.s.v[0] - 1) * L[0], 1 + (M.s.v[1] - 1) * L[1], 1) : C.scale(1 + (M.s.v[0] - 1) * L, 1 + (M.s.v[1] - 1) * L, 1));
                        for (D = 0; D < F; D += 1) {
                            if (M = S[D].a, L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars), M.sk.propType && (L.length ? C.skewFromAxis(-M.sk.v * L[0], M.sa.v * L[1]) : C.skewFromAxis(-M.sk.v * L, M.sa.v * L)), M.r.propType && (L.length ? C.rotateZ(-M.r.v * L[2]) : C.rotateZ(-M.r.v * L)), M.ry.propType && (L.length ? C.rotateY(M.ry.v * L[1]) : C.rotateY(M.ry.v * L)), M.rx.propType && (L.length ? C.rotateX(M.rx.v * L[0]) : C.rotateX(M.rx.v * L)), M.o.propType && (L.length ? N += (M.o.v * L[0] - N) * L[0] : N += (M.o.v * L - N) * L), t.strokeWidthAnim && M.sw.propType && (L.length ? q += M.sw.v * L[0] : q += M.sw.v * L), t.strokeColorAnim && M.sc.propType) for (j = 0; j < 3; j += 1) L.length ? G[j] += (M.sc.v[j] - G[j]) * L[0] : G[j] += (M.sc.v[j] - G[j]) * L;
                            if (t.fillColorAnim && t.fc) {
                                if (M.fc.propType) for (j = 0; j < 3; j += 1) L.length ? H[j] += (M.fc.v[j] - H[j]) * L[0] : H[j] += (M.fc.v[j] - H[j]) * L;
                                M.fh.propType && (H = L.length ? addHueToRGB(H, M.fh.v * L[0]) : addHueToRGB(H, M.fh.v * L)), M.fs.propType && (H = L.length ? addSaturationToRGB(H, M.fs.v * L[0]) : addSaturationToRGB(H, M.fs.v * L)), M.fb.propType && (H = L.length ? addBrightnessToRGB(H, M.fb.v * L[0]) : addBrightnessToRGB(H, M.fb.v * L))
                            }
                        }
                        for (D = 0; D < F; D += 1) (M = S[D].a).p.propType && (L = S[D].s.getMult(T[r].anIndexes[D], E.a[D].s.totalChars), this._hasMaskedPath ? L.length ? C.translate(0, M.p.v[1] * L[0], -M.p.v[2] * L[1]) : C.translate(0, M.p.v[1] * L, -M.p.v[2] * L) : L.length ? C.translate(M.p.v[0] * L[0], M.p.v[1] * L[1], -M.p.v[2] * L[2]) : C.translate(M.p.v[0] * L, M.p.v[1] * L, -M.p.v[2] * L));
                        if (t.strokeWidthAnim && (W = q < 0 ? 0 : q), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                            if (C.translate(0, -t.ls), C.translate(0, x[1] * B * .01 + s, 0), this._pathData.p.v) {
                                b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                                var lt = 180 * Math.atan(b) / Math.PI;
                                l.point[0] < d.point[0] && (lt += 180), C.rotate(-lt * Math.PI / 180)
                            }
                            C.translate(R, z, 0), o -= x[0] * T[r].an * .005, T[r + 1] && U !== T[r + 1].ind && (o += T[r].an / 2, o += .001 * t.tr * t.finalSize)
                        } else {
                            switch (C.translate(i, s, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    C.translate(T[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[r].line]), 0, 0);
                                    break;
                                case 2:
                                    C.translate(T[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[r].line]) / 2, 0, 0)
                            }
                            C.translate(0, -t.ls), C.translate(O, 0, 0), C.translate(x[0] * T[r].an * .005, x[1] * B * .01, 0), i += T[r].l + .001 * t.tr * t.finalSize
                        }
                        "html" === k ? tt = C.toCSS() : "svg" === k ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], $ = N
                    }
                    w <= r ? (I = new LetterProps($, W, Y, X, tt, et), this.renderedLetters.push(I), w += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[r], this.lettersChangedFlag = I.update($, W, Y, X, tt, et) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function (t, e, i) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function (t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function (t, e) {
            var i, s, r = e.length, n = "";
            for (i = 0; i < r; i += 1) "sh" === e[i].ty && (s = e[i].ks.k, n += buildShapeString(s, s.i.length, !0, t));
            return n
        }, ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, s, r) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
            }
            e.translate(s, r, 0)
        }, ITextElement.prototype.buildColor = function (t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {
        }, ITextElement.prototype.validateText = function () {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {shapes: []};

        function SVGTextLottieElement(t, e, i) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
        }

        function ISolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function NullElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
        }

        function SVGRendererBase() {
        }

        function ICompElement() {
        }

        function SVGCompElement(t, e, i) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}
        }

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var i = "";
            if (e && e.title) {
                var s = createNS("title"), r = createElementID();
                s.setAttribute("id", r), s.textContent = e.title, this.svgElement.appendChild(s), i += r
            }
            if (e && e.description) {
                var n = createNS("desc"), a = createElementID();
                n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var l = createNS("g");
            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, i = t.length, s = [], r = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(r), r = "") : r += t[e], e += 1;
            return s.push(r), s
        }, SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
            if (t.shapes && t.shapes.length) {
                var i = t.shapes[0];
                if (i.it) {
                    var s = i.it[i.it.length - 1];
                    s.s && (s.s.k[0] = e, s.s.k[1] = e)
                }
            }
            return t
        }, SVGTextLottieElement.prototype.buildNewText = function () {
            var t, e;
            this.addDynamicProperty(this);
            var i = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
            var s = this.globalData.fontManager.getFontByName(i.f);
            if (s.fClass) this.layerElement.setAttribute("class", s.fClass); else {
                this.layerElement.setAttribute("font-family", s.fFamily);
                var r = i.fWeight, n = i.fStyle;
                this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", r)
            }
            this.layerElement.setAttribute("aria-label", i.t);
            var a, o = i.l || [], l = !!this.globalData.fontManager.chars;
            e = o.length;
            var h = this.mHelper, u = this.data.singleShape, p = 0, c = 0, d = !0, f = .001 * i.tr * i.finalSize;
            if (!u || l || i.sz) {
                var m, g = this.textSpans.length;
                for (t = 0; t < e; t += 1) {
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !l || !u || 0 === t) {
                        if (a = g > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), g <= t) {
                            if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, l) {
                                var v = createNS("g");
                                a.appendChild(v), this.textSpans[t].childSpan = v
                            }
                            this.textSpans[t].span = a, this.layerElement.appendChild(a)
                        }
                        a.style.display = "inherit"
                    }
                    if (h.reset(), u && (o[t].n && (p = -f, c += i.yOffset, c += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(i, h, o[t].line, p, c), p += o[t].l || 0, p += f), l) {
                        var y;
                        if (1 === (m = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this); else {
                            var b = emptyShapeData;
                            m.data && m.data.shapes && (b = this.buildShapeData(m.data, i.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                        }
                        if (this.textSpans[t].glyph) {
                            var _ = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(_.layerElement), _.destroy()
                        }
                        this.textSpans[t].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[t].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                    } else u && a.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                u && a && a.setAttribute("d", "")
            } else {
                var x = this.textContainer, S = "start";
                switch (i.j) {
                    case 1:
                        S = "end";
                        break;
                    case 2:
                        S = "middle";
                        break;
                    default:
                        S = "start"
                }
                x.setAttribute("text-anchor", S), x.setAttribute("letter-spacing", f);
                var E = this.buildTextContents(i.finalText);
                for (e = E.length, c = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) (a = this.textSpans[t].span || createNS("tspan")).textContent = E[t], a.setAttribute("x", 0), a.setAttribute("y", c), a.style.display = "inherit", x.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = a, c += i.finalLineHeight;
                this.layerElement.appendChild(x)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {top: t.y, left: t.x, width: t.width, height: t.height}
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function () {
            var t, e, i = this.textSpans.length;
            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1) (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var i, s, r, n = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
                for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = n[t], s = this.textSpans[t].span, (r = this.textSpans[t].glyph) && r.renderFrame(), i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc))
            }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function () {
        }, NullElement.prototype.getBaseElement = function () {
            return null
        }, NullElement.prototype.destroy = function () {
        }, NullElement.prototype.sourceRectAtTime = function () {
        }, NullElement.prototype.hide = function () {
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var i = createNS("clipPath"), s = createNS("rect");
            s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
            var r = createElementID();
            i.setAttribute("id", r), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function () {
        }, SVGRendererBase.prototype.findIndexByInd = function (t) {
            var e = 0, i = this.layers.length;
            for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
            return -1
        }, SVGRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                    var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (-1 === s) return;
                    if (this.elements[s] && !0 !== this.elements[s]) {
                        var r = e[s].getMatte(this.layers[t].tt);
                        i.setMatte(r)
                    } else this.buildItem(s), this.addPendingElement(i)
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for (var e = 0, i = this.elements.length; e < i;) {
                    if (this.elements[e] === t) {
                        var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                            r = this.elements[s].getMatte(this.layers[e].tt);
                        t.setMatte(r);
                        break
                    }
                    e += 1
                }
            }
        }, SVGRendererBase.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRendererBase.prototype.appendElementInPos = function (t, e) {
            var i = t.getBaseElement();
            if (i) {
                for (var s, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()), r += 1;
                s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
            }
        }, SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function (t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr; else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var i, s = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function (t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function () {
            return this.elements
        }, ICompElement.prototype.destroyElements = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this)
        }, ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
                var e, i = t.length, s = "_";
                for (e = 0; e < i; e += 1) s += t[e].transform.key + "_";
                var r = this.sequences[s];
                return r || (r = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[s] = r, this.sequenceList.push(r)), r
            }, processSequence: function (t, e) {
                for (var i = 0, s = t.transforms.length, r = e; i < s && !e;) {
                    if (t.transforms[i].transform.mProps._mdf) {
                        r = !0;
                        break
                    }
                    i += 1
                }
                if (r) for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
                t._mdf = r
            }, processSequences: function (t) {
                var e, i = this.sequenceList.length;
                for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
            }, getNewKey: function () {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        };
        var lumaLoader = function () {
            var t = "__lottie_element_luma_buffer", e = null, i = null, s = null;

            function r() {
                var r, n, a;
                e || (r = createNS("svg"), n = createNS("filter"), a = createNS("feColorMatrix"), n.setAttribute("id", t), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), n.appendChild(a), r.appendChild(n), r.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (r.style.display = "none"), s = r, document.body.appendChild(s), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
            }

            return {
                load: r, get: function (s) {
                    return e || r(), e.width = s.width, e.height = s.height, i.filter = "url(#" + t + ")", e
                }
            }
        };

        function createCanvas(t, e) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
            var i = createTag("canvas");
            return i.width = t, i.height = e, i
        }

        var assetLoader = {loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas: createCanvas},
            registeredEffects = {};

        function CVEffects(t) {
            var e, i, s = t.data.ef ? t.data.ef.length : 0;
            for (this.filters = [], e = 0; e < s; e += 1) {
                i = null;
                var r = t.data.ef[e].ty;
                if (registeredEffects[r]) i = new (0, registeredEffects[r].effect)(t.effectsManager.effectElements[e], t);
                i && this.filters.push(i)
            }
            this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
            registeredEffects[t] = {effect: e}
        }

        function CVMaskElement(t, e) {
            var i;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var s = this.masksProperties.length, r = !1;
            for (i = 0; i < s; i += 1) "n" !== this.masksProperties[i].mode && (r = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
            this.hasMasks = r, r && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {
        }

        CVEffects.prototype.renderFrame = function (t) {
            var e, i = this.filters.length;
            for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function (t) {
            var e, i = this.filters.length, s = [];
            for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
            return s
        }, CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
                var t, e, i, s, r = this.element.finalTransform.mat, n = this.element.canvasContext,
                    a = this.masksProperties.length;
                for (n.beginPath(), t = 0; t < a; t += 1) if ("n" !== this.masksProperties[t].mode) {
                    var o;
                    this.masksProperties[t].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compSize.w, 0), n.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), n.lineTo(0, this.element.globalData.compSize.h), n.lineTo(0, 0)), s = this.viewData[t].v, e = r.applyToPointArray(s.v[0][0], s.v[0][1], 0), n.moveTo(e[0], e[1]);
                    var l = s._length;
                    for (o = 1; o < l; o += 1) i = r.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                    i = r.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                }
                this.element.globalData.renderer.save(!0), n.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
            this.element = null
        };
        var operationsMap = {1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out"};

        function CVShapeData(t, e, i, s) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var r, n = 4;
            "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
            var a, o = i.length;
            for (r = 0; r < o; r += 1) i[r].closed || (a = {
                transforms: s.addTransformSequence(i[r].transforms),
                trNodes: []
            }, this.styledShapes.push(a), i[r].elements.push(a))
        }

        function CVShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
        }

        function CVTextElement(t, e, i) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, i)
        }

        function CVImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
        }

        function CVSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function CanvasRendererBase() {
        }

        function CanvasContext() {
            this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
            var t;
            this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
            for (t = 0; t < 15; t += 1) {
                var e = new CanvasContext;
                this.stack[t] = e
            }
            this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(t, e, i) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}
        }

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || "",
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {
        }

        function HSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function HShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        function HTextElement(t, e, i) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
        }

        function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var s = PropertyFactory.getProp;
            if (this.pe = s(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this), this.py = s(this, t.ks.p.y, 1, 0, this), this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var r, n = t.ks.or.k.length;
                for (r = 0; r < n; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null
            }
            this.or = s(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = s(this, t.ks.rx, 0, degToRads, this), this.ry = s(this, t.ks.ry, 0, degToRads, this), this.rz = s(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {mProp: this}
        }

        function HImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
        }

        function HybridRendererBase(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, i) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}
        }

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                },
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        CVBaseElement.prototype = {
            createElements: function () {
            }, initRendererElement: function () {
            }, createContainerElements: function () {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var t = this.globalData.canvasContext,
                        e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                    this.buffers.push(e);
                    var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                    this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                }
                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
            }, createContent: function () {
            }, setBlendMode: function () {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            }, createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
            }, hideElement: function () {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            }, showElement: function () {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            }, clearCanvas: function (t) {
                t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
            }, prepareLayer: function () {
                if (this.data.tt >= 1) {
                    var t = this.buffers[0].getContext("2d");
                    this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                }
            }, exitLayer: function () {
                if (this.data.tt >= 1) {
                    var t = this.buffers[1], e = t.getContext("2d");
                    if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                        var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                        i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0)
                    }
                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                }
            }, renderFrame: function (t) {
                if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var e = 0 === this.data.ty;
                    this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            }, destroy: function () {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            }, mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function (t, e) {
            var i = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd
            }, s = {};
            if ("fl" === t.ty || "st" === t.ty ? (s.c = PropertyFactory.getProp(this, t.c, 1, 255, this), s.c.k || (i.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (s.s = PropertyFactory.getProp(this, t.s, 1, null, this), s.e = PropertyFactory.getProp(this, t.e, 1, null, this), s.h = PropertyFactory.getProp(this, t.h || {k: 0}, 0, .01, this), s.a = PropertyFactory.getProp(this, t.a || {k: 0}, 0, degToRads, this), s.g = new GradientProperty(this, t.g, this)), s.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), s.w = PropertyFactory.getProp(this, t.w, 0, null, this), s.w.k || (i.wi = s.w.v), t.d) {
                    var r = new DashProperty(this, t.d, "canvas", this);
                    s.d = r, s.d.k || (i.da = s.d.dashArray, i.do = s.d.dashoffset[0])
                }
            } else i.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(i), s.style = i, s
        }, CVShapeElement.prototype.createGroupElement = function () {
            return {it: [], prevViewData: []}
        }, CVShapeElement.prototype.createTransformElement = function (t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            }
        }, CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e, i = this.stylesList.length;
            for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function (t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function (t, e, i, s, r) {
            var n, a, o, l, h, u, p = t.length - 1, c = [], d = [], f = [].concat(r);
            for (n = p; n >= 0; n -= 1) {
                if ((l = this.searchProcessedElement(t[n])) ? e[n] = i[l - 1] : t[n]._shouldRender = s, "fl" === t[n].ty || "st" === t[n].ty || "gf" === t[n].ty || "gs" === t[n].ty) l ? e[n].style.closed = !1 : e[n] = this.createStyleElement(t[n], f), c.push(e[n].style); else if ("gr" === t[n].ty) {
                    if (l) for (o = e[n].it.length, a = 0; a < o; a += 1) e[n].prevViewData[a] = e[n].it[a]; else e[n] = this.createGroupElement(t[n]);
                    this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, s, f)
                } else "tr" === t[n].ty ? (l || (u = this.createTransformElement(t[n]), e[n] = u), f.push(e[n]), this.addTransformToStyleList(e[n])) : "sh" === t[n].ty || "rc" === t[n].ty || "el" === t[n].ty || "sr" === t[n].ty ? l || (e[n] = this.createShapeElement(t[n])) : "tm" === t[n].ty || "rd" === t[n].ty || "pb" === t[n].ty || "zz" === t[n].ty || "op" === t[n].ty ? (l ? (h = e[n]).closed = !1 : ((h = ShapeModifiers.getModifier(t[n].ty)).init(this, t[n]), e[n] = h, this.shapeModifiers.push(h)), d.push(h)) : "rp" === t[n].ty && (l ? (h = e[n]).closed = !0 : (h = ShapeModifiers.getModifier(t[n].ty), e[n] = h, h.init(this, t, n, e), this.shapeModifiers.push(h), s = !1), d.push(h));
                this.addProcessedElement(t[n], n + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(c), p = d.length, n = 0; n < p; n += 1) d[n].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function () {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function () {
            var t, e, i, s, r, n, a, o, l, h = this.stylesList.length, u = this.globalData.renderer,
                p = this.globalData.canvasContext;
            for (t = 0; t < h; t += 1) if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                for (u.save(), n = l.elements, "st" === o || "gs" === o ? (u.ctxStrokeStyle("st" === o ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle("fl" === o ? l.co : l.grd), u.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && p.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), i = n.length, e = 0; e < i; e += 1) {
                    for ("st" !== o && "gs" !== o || (p.beginPath(), l.da && (p.setLineDash(l.da), p.lineDashOffset = l.do)), r = (a = n[e].trNodes).length, s = 0; s < r; s += 1) "m" === a[s].t ? p.moveTo(a[s].p[0], a[s].p[1]) : "c" === a[s].t ? p.bezierCurveTo(a[s].pts[0], a[s].pts[1], a[s].pts[2], a[s].pts[3], a[s].pts[4], a[s].pts[5]) : p.closePath();
                    "st" !== o && "gs" !== o || (u.ctxStroke(), l.da && p.setLineDash(this.dashResetter))
                }
                "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), u.restore()
            }
        }, CVShapeElement.prototype.renderShape = function (t, e, i, s) {
            var r, n;
            for (n = t, r = e.length - 1; r >= 0; r -= 1) "tr" === e[r].ty ? (n = i[r].transform, this.renderShapeTransform(t, n)) : "sh" === e[r].ty || "el" === e[r].ty || "rc" === e[r].ty || "sr" === e[r].ty ? this.renderPath(e[r], i[r]) : "fl" === e[r].ty ? this.renderFill(e[r], i[r], n) : "st" === e[r].ty ? this.renderStroke(e[r], i[r], n) : "gf" === e[r].ty || "gs" === e[r].ty ? this.renderGradientFill(e[r], i[r], n) : "gr" === e[r].ty ? this.renderShape(n, e[r].it, i[r].it) : e[r].ty;
            s && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i, s, r, n = t.trNodes, a = e.paths, o = a._length;
                n.length = 0;
                var l = t.transforms.finalTransform;
                for (r = 0; r < o; r += 1) {
                    var h = a.shapes[r];
                    if (h && h.v) {
                        for (s = h._length, i = 1; i < s; i += 1) 1 === i && n.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), n.push({t: "c", pts: l.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i])});
                        1 === s && n.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), h.c && s && (n.push({
                            t: "c",
                            pts: l.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0])
                        }), n.push({t: "z"}))
                    }
                }
                t.trNodes = n
            }
        }, CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var i, s = e.styledShapes.length;
                for (i = 0; i < s; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function (t, e, i) {
            var s = e.style;
            (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
            var s, r = e.style;
            if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var n, a = this.globalData.canvasContext, o = e.s.v, l = e.e.v;
                if (1 === t.t) s = a.createLinearGradient(o[0], o[1], l[0], l[1]); else {
                    var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                        u = Math.atan2(l[1] - o[1], l[0] - o[0]), p = e.h.v;
                    p >= 1 ? p = .99 : p <= -1 && (p = -.99);
                    var c = h * p, d = Math.cos(u + e.a.v) * c + o[0], f = Math.sin(u + e.a.v) * c + o[1];
                    s = a.createRadialGradient(d, f, 0, o[0], o[1], h)
                }
                var m = t.g.p, g = e.g.c, v = 1;
                for (n = 0; n < m; n += 1) e.g._hasOpacity && e.g._collapsable && (v = e.g.o[2 * n + 1]), s.addColorStop(g[4 * n] / 100, "rgba(" + g[4 * n + 1] + "," + g[4 * n + 2] + "," + g[4 * n + 3] + "," + v + ")");
                r.grd = s
            }
            r.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function (t, e, i) {
            var s = e.style, r = e.d;
            r && (r._mdf || this._isFirstFrame) && (s.da = r.dashArray, s.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function () {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var i = !1;
            t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var s, r, n, a, o, l, h, u, p, c, d, f, m = this.globalData.fontManager.getFontByName(t.f), g = t.l,
                v = this.mHelper;
            this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length;
            var y = this.data.singleShape, b = .001 * t.tr * t.finalSize, _ = 0, x = 0, S = !0, E = 0;
            for (s = 0; s < r; s += 1) {
                a = (n = this.globalData.fontManager.getCharData(t.finalText[s], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && n.data || {}, v.reset(), y && g[s].n && (_ = -b, x += t.yOffset, x += S ? 1 : 0, S = !1), p = (h = a.shapes ? a.shapes[0].it : []).length, v.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, v, g[s].line, _, x), d = createSizedArray(p - 1);
                var C = 0;
                for (u = 0; u < p; u += 1) if ("sh" === h[u].ty) {
                    for (l = h[u].ks.k.i.length, c = h[u].ks.k, f = [], o = 1; o < l; o += 1) 1 === o && f.push(v.applyToX(c.v[0][0], c.v[0][1], 0), v.applyToY(c.v[0][0], c.v[0][1], 0)), f.push(v.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToX(c.i[o][0], c.i[o][1], 0), v.applyToY(c.i[o][0], c.i[o][1], 0), v.applyToX(c.v[o][0], c.v[o][1], 0), v.applyToY(c.v[o][0], c.v[o][1], 0));
                    f.push(v.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToX(c.i[0][0], c.i[0][1], 0), v.applyToY(c.i[0][0], c.i[0][1], 0), v.applyToX(c.v[0][0], c.v[0][1], 0), v.applyToY(c.v[0][0], c.v[0][1], 0)), d[C] = f, C += 1
                }
                y && (_ += g[s].l, _ += b), this.textSpans[E] ? this.textSpans[E].elem = d : this.textSpans[E] = {elem: d}, E += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function () {
            var t, e, i, s, r, n;
            this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var a, o = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
            e = l.length;
            var h, u, p = null, c = null, d = null, f = this.globalData.renderer;
            for (t = 0; t < e; t += 1) if (!l[t].n) {
                if ((a = o[t]) && (f.save(), f.ctxTransform(a.p), f.ctxOpacity(a.o)), this.fill) {
                    for (a && a.fc ? p !== a.fc && (f.ctxFillStyle(a.fc), p = a.fc) : p !== this.values.fill && (p = this.values.fill, f.ctxFillStyle(this.values.fill)), s = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (n = (u = h[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), r = 2; r < n; r += 6) this.globalData.canvasContext.bezierCurveTo(u[r], u[r + 1], u[r + 2], u[r + 3], u[r + 4], u[r + 5]);
                    this.globalData.canvasContext.closePath(), f.ctxFill()
                }
                if (this.stroke) {
                    for (a && a.sw ? d !== a.sw && (d = a.sw, f.ctxLineWidth(a.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, f.ctxLineWidth(this.values.sWidth)), a && a.sc ? c !== a.sc && (c = a.sc, f.ctxStrokeStyle(a.sc)) : c !== this.values.stroke && (c = this.values.stroke, f.ctxStrokeStyle(this.values.stroke)), s = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (n = (u = h[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), r = 2; r < n; r += 6) this.globalData.canvasContext.bezierCurveTo(u[r], u[r + 1], u[r + 2], u[r + 3], u[r + 4], u[r + 5]);
                    this.globalData.canvasContext.closePath(), f.ctxStroke()
                }
                a && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, i, s = t.getContext("2d"), r = this.img.width, n = this.img.height, a = r / n,
                    o = this.assetData.w / this.assetData.h,
                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                a > o && "xMidYMid slice" === l || a < o && "xMidYMid slice" !== l ? e = (i = n) * o : i = (e = r) / o, s.drawImage(this.img, (r - e) / 2, (n - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function () {
            this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
            this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (t) {
            1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function (t) {
            this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function (t) {
            this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
            this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function (t) {
            this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function (t) {
            this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function (t) {
            this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
            this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function (t) {
            this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function (t, e, i, s) {
            this.canvasContext.fillRect(t, e, i, s)
        }, CanvasRendererBase.prototype.ctxStroke = function () {
            this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function () {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function () {
            this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function (t) {
            this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var i = "0px 0px 0px";
                e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
            var i, s, r, n;
            if (this.reset(), t ? (i = t, s = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = s) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, s = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = s * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var a = this.renderConfig.preserveAspectRatio.split(" "), o = a[1] || "meet", l = a[0] || "xMidYMid",
                    h = l.substr(0, 4), u = l.substr(4);
                r = i / s, (n = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === o || n < r && "slice" === o ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (n < r && "meet" === o || n > r && "slice" === o) ? (i - this.transformCanvas.w * (s / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (n < r && "meet" === o || n > r && "slice" === o) ? (i - this.transformCanvas.w * (s / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === u && (n > r && "meet" === o || n < r && "slice" === o) ? (s - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === u && (n > r && "meet" === o || n < r && "slice" === o) ? (s - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function () {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function (t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var i;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var s = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }, CanvasRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                e[t] = i, i.initExpressions()
            }
        }, CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length, e = 0;
            for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
            this._length = t
        }, CVContextData.prototype.reset = function () {
            this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function (t) {
            this.cArrPos -= 1;
            var e, i = this.stack[this.cArrPos], s = i.transform, r = this.cTr.props;
            for (e = 0; e < 16; e += 1) r[e] = s[e];
            if (t) {
                this.nativeContext.restore();
                var n = this.stack[this.cArrPos + 1];
                this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit
            }
            this.nativeContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]), (t || -1 !== i.opacity && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity), this.currentFillStyle = i.fillStyle, this.currentStrokeStyle = i.strokeStyle, this.currentLineWidth = i.lineWidth, this.currentLineCap = i.lineCap, this.currentLineJoin = i.lineJoin, this.currentMiterLimit = i.miterLimit
        }, CVContextData.prototype.save = function (t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var i, s = this.stack[this.cArrPos];
            for (i = 0; i < 16; i += 1) s.transform[i] = e[i];
            this.cArrPos += 1;
            var r = this.stack[this.cArrPos];
            r.opacity = s.opacity, r.fillStyle = s.fillStyle, r.strokeStyle = s.strokeStyle, r.lineWidth = s.lineWidth, r.lineCap = s.lineCap, r.lineJoin = s.lineJoin, r.miterLimit = s.miterLimit
        }, CVContextData.prototype.setOpacity = function (t) {
            this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function (t) {
            this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function (t) {
            this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function (t) {
            this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function (t) {
            this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function (t) {
            this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function (t) {
            this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function (t) {
            this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function (t) {
            this.transformMat.cloneFromProps(t);
            var e = this.cTr;
            this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
            var i = e.props;
            this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
        }, CVContextData.prototype.opacity = function (t) {
            var e = this.stack[this.cArrPos].opacity;
            e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function (t) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function (t, e, i, s) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, s)
        }, CVContextData.prototype.stroke = function () {
            this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
            var t, e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
            checkBlendMode: function () {
            }, initRendererElement: function () {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            }, createContainerElements: function () {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
            }, renderElement: function () {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
            }, renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            }, destroy: function () {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            }, createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            }, addEffects: function () {
            }, setMatte: function () {
            }
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent = function () {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement; else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        },HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var i, s = t.length;
            for (i = 0; i < s; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        },HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var i, s, r, n, a, o = t.sh.v, l = t.transformers, h = o._length;
            if (!(h <= 1)) {
                for (i = 0; i < h - 1; i += 1) s = this.getTransformedPoint(l, o.v[i]), r = this.getTransformedPoint(l, o.o[i]), n = this.getTransformedPoint(l, o.i[i + 1]), a = this.getTransformedPoint(l, o.v[i + 1]), this.checkBounds(s, r, n, a, e);
                o.c && (s = this.getTransformedPoint(l, o.v[i]), r = this.getTransformedPoint(l, o.o[i]), n = this.getTransformedPoint(l, o.i[0]), a = this.getTransformedPoint(l, o.v[0]), this.checkBounds(s, r, n, a, e))
            }
        },HShapeElement.prototype.checkBounds = function (t, e, i, s, r) {
            this.getBoundsOfCurve(t, e, i, s);
            var n = this.shapeBoundingBox;
            r.x = bmMin(n.left, r.x), r.xMax = bmMax(n.right, r.xMax), r.y = bmMin(n.top, r.y), r.yMax = bmMax(n.bottom, r.yMax)
        },HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        },HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, s) {
            for (var r, n, a, o, l, h, u, p = [[t[0], s[0]], [t[1], s[1]]], c = 0; c < 2; ++c) n = 6 * t[c] - 12 * e[c] + 6 * i[c], r = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * s[c], a = 3 * e[c] - 3 * t[c], n |= 0, a |= 0, 0 === (r |= 0) && 0 === n || (0 === r ? (o = -a / n) > 0 && o < 1 && p[c].push(this.calculateF(o, t, e, i, s, c)) : (l = n * n - 4 * a * r) >= 0 && ((h = (-n + bmSqrt(l)) / (2 * r)) > 0 && h < 1 && p[c].push(this.calculateF(h, t, e, i, s, c)), (u = (-n - bmSqrt(l)) / (2 * r)) > 0 && u < 1 && p[c].push(this.calculateF(u, t, e, i, s, c))));
            this.shapeBoundingBox.left = bmMin.apply(null, p[0]), this.shapeBoundingBox.top = bmMin.apply(null, p[1]), this.shapeBoundingBox.right = bmMax.apply(null, p[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, p[1])
        },HShapeElement.prototype.calculateF = function (t, e, i, s, r, n) {
            return bmPow(1 - t, 3) * e[n] + 3 * bmPow(1 - t, 2) * t * i[n] + 3 * (1 - t) * bmPow(t, 2) * s[n] + bmPow(t, 3) * r[n]
        },HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var i, s = t.length;
            for (i = 0; i < s; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
        },HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
            var i = 0;
            if (t.keyframes) {
                for (var s = 0; s < t.keyframes.length; s += 1) {
                    var r = t.keyframes[s].s;
                    r > i && (i = r)
                }
                i *= t.mult
            } else i = t.v * t.mult;
            e.x -= i, e.xMax += i, e.y -= i, e.yMax += i
        },HShapeElement.prototype.currentBoxContains = function (t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        },HShapeElement.prototype.renderInnerContent = function () {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox, e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var i = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var s = this.shapeCont.style,
                        r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    s.transform = r, s.webkitTransform = r
                }
            }
        },extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),HTextElement.prototype.createContent = function () {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        },HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style, i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var s, r, n = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass; else {
                e.fontFamily = n.fFamily;
                var a = t.fWeight, o = t.fStyle;
                e.fontStyle = o, e.fontWeight = a
            }
            var l, h, u, p = t.l;
            r = p.length;
            var c, d = this.mHelper, f = "", m = 0;
            for (s = 0; s < r; s += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
                    var g,
                        v = this.globalData.fontManager.getCharData(t.finalText[s], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (g = v ? v.data : null, d.reset(), g && g.shapes && g.shapes.length && (c = g.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), f = this.createPathShape(d, c), l.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(l); else {
                        if (this.innerElem.appendChild(h), g && g.shapes) {
                            document.body.appendChild(u);
                            var y = u.getBBox();
                            u.setAttribute("width", y.width + 2), u.setAttribute("height", y.height + 2), u.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                            var b = u.style, _ = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                            b.transform = _, b.webkitTransform = _, p[s].yOffset = y.y - 1
                        } else u.setAttribute("width", 1), u.setAttribute("height", 1);
                        h.appendChild(u)
                    }
                } else if (l.textContent = p[s].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l); else {
                    this.innerElem.appendChild(h);
                    var x = l.style, S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    x.transform = S, x.webkitTransform = S
                }
                this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
            }
            for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        },HTextElement.prototype.renderInnerContent = function () {
            var t;
            if (this.validateText(), this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var i, s, r, n, a, o = 0, l = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
                for (s = h.length, i = 0; i < s; i += 1) h[i].n ? o += 1 : (n = this.textSpans[i], a = this.textPaths[i], r = l[o], o += 1, r._mdf.m && (this.isMasked ? n.setAttribute("transform", r.m) : (n.style.webkitTransform = r.m, n.style.transform = r.m)), n.style.opacity = r.o, r.sw && r._mdf.sw && a.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && a.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (a.setAttribute("fill", r.fc), a.style.color = r.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var u = this.innerElem.getBBox();
                    this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height));
                    if (this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
                        this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = p, t.webkitTransform = p
                    }
                }
            }
        },extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),HCameraElement.prototype.setup = function () {
            var t, e, i, s, r = this.comp.threeDElements.length;
            for (t = 0; t < r; t += 1) if ("3d" === (e = this.comp.threeDElements[t]).type) {
                i = e.perspectiveElem.style, s = e.container.style;
                var n = this.pe.v + "px", a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                i.perspective = n, i.webkitPerspective = n, s.transformOrigin = "0px 0px 0px", s.mozTransformOrigin = "0px 0px 0px", s.webkitTransformOrigin = "0px 0px 0px", i.transform = a, i.webkitTransform = a
            }
        },HCameraElement.prototype.createElements = function () {
        },HCameraElement.prototype.hide = function () {
        },HCameraElement.prototype.renderFrame = function () {
            var t, e, i = this._isFirstFrame;
            if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
            if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy) for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                    var s = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var r;
                    r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var n = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                        a = [r[0] / n, r[1] / n, r[2] / n], o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                        l = Math.atan2(a[1], o), h = Math.atan2(a[0], -a[2]);
                    this.mat.rotateY(h).rotateX(-l)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var u = !this._prevMat.equals(this.mat);
                if ((u || this.pe._mdf) && this.comp.threeDElements) {
                    var p, c, d;
                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) if ("3d" === (p = this.comp.threeDElements[t]).type) {
                        if (u) {
                            var f = this.mat.toCSS();
                            (d = p.container.style).transform = f, d.webkitTransform = f
                        }
                        this.pe._mdf && ((c = p.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
                    }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        },HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0)
        },HCameraElement.prototype.destroy = function () {
        },HCameraElement.prototype.getBaseElement = function () {
            return null
        },extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData), e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        },extendPrototype([BaseRenderer], HybridRendererBase),HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        },HybridRendererBase.prototype.appendElementInPos = function (t, e) {
            var i = t.getBaseElement();
            if (i) {
                var s = this.layers[e];
                if (s.ddd && this.supports3d) this.addTo3dContainer(i, e); else if (this.threeDElements) this.addTo3dContainer(i, e); else {
                    for (var r, n, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a], r = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : n.getBaseElement()) || r), a += 1;
                    r ? s.ddd && this.supports3d || this.layerElement.insertBefore(i, r) : s.ddd && this.supports3d || this.layerElement.appendChild(i)
                }
            }
        },HybridRendererBase.prototype.createShape = function (t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        },HybridRendererBase.prototype.createText = function (t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        },HybridRendererBase.prototype.createCamera = function (t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        },HybridRendererBase.prototype.createImage = function (t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        },HybridRendererBase.prototype.createSolid = function (t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        },HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, i = this.threeDElements.length; e < i;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        },HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
            var i, s, r = createTag("div");
            styleDiv(r);
            var n = createTag("div");
            if (styleDiv(n), "3d" === e) {
                (i = r.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                i.webkitTransformOrigin = "50% 50%", i.mozTransformOrigin = "50% 50%", i.transformOrigin = "50% 50%";
                var a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (s = n.style).transform = a, s.webkitTransform = a
            }
            r.appendChild(n);
            var o = {container: n, perspectiveElem: r, startPos: t, endPos: t, type: e};
            return this.threeDElements.push(o), o
        },HybridRendererBase.prototype.build3dContainers = function () {
            var t, e, i = this.layers.length, s = "";
            for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== s && (s = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== s && (s = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
            for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        },HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
            for (var i = 0, s = this.threeDElements.length; i < s;) {
                if (e <= this.threeDElements[i].endPos) {
                    for (var r, n = this.threeDElements[i].startPos; n < e;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
                    r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t);
                    break
                }
                i += 1
            }
        },HybridRendererBase.prototype.configAnimation = function (t) {
            var e = createTag("div"), i = this.animationItem.wrapper, s = e.style;
            s.width = t.w + "px", s.height = t.h + "px", this.resizerElem = e, styleDiv(e), s.transformStyle = "flat", s.mozTransformStyle = "flat", s.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), s.overflow = "hidden";
            var r = createNS("svg");
            r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
            var n = createNS("defs");
            r.appendChild(n), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        },HybridRendererBase.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        },HybridRendererBase.prototype.updateContainerSize = function () {
            var t, e, i, s, r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight,
                a = r / n;
            this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, i = 0, s = (n - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = n / this.globalData.compSize.h, e = n / this.globalData.compSize.h, i = (r - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2, s = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + s + ",0,1)", o.transform = o.webkitTransform
        },HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide = function () {
            this.resizerElem.style.display = "none"
        },HybridRendererBase.prototype.show = function () {
            this.resizerElem.style.display = "block"
        },HybridRendererBase.prototype.initItems = function () {
            if (this.buildAllItems(), this.camera) this.camera.setup(); else {
                var t, e = this.globalData.compSize.w, i = this.globalData.compSize.h, s = this.threeDElements.length;
                for (t = 0; t < s; t += 1) {
                    var r = this.threeDElements[t].perspectiveElem.style;
                    r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", r.perspective = r.webkitPerspective
                }
            }
        },HybridRendererBase.prototype.searchExtraCompositions = function (t) {
            var e, i = t.length, s = createTag("div");
            for (e = 0; e < i; e += 1) if (t[e].xt) {
                var r = this.createComp(t[e], s, this.globalData.comp, null);
                r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
        },extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        },HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var i, s = 0; s < e;) this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()), s += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        },HCompElement.prototype.createComp = function (t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        },extendPrototype([HybridRendererBase], HybridRenderer),HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function (t) {
            function e(e) {
                for (var i = 0, s = t.layers.length; i < s;) {
                    if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                    i += 1
                }
                return null
            }

            return Object.defineProperty(e, "_name", {value: t.data.nm}), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        };

        function _typeof$2(t) {
            return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function seedRandom(t, e) {
            var i = this, s = e.pow(256, 6), r = e.pow(2, 52), n = 2 * r;

            function a(t) {
                var e, i = t.length, s = this, r = 0, n = s.i = s.j = 0, a = s.S = [];
                for (i || (t = [i++]); r < 256;) a[r] = r++;
                for (r = 0; r < 256; r++) a[r] = a[n = 255 & n + t[r % i] + (e = a[r])], a[n] = e;
                s.g = function (t) {
                    for (var e, i = 0, r = s.i, n = s.j, a = s.S; t--;) e = a[r = 255 & r + 1], i = 256 * i + a[255 & (a[r] = a[n = 255 & n + e]) + (a[n] = e)];
                    return s.i = r, s.j = n, i
                }
            }

            function o(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
            }

            function l(t, e) {
                for (var i, s = t + "", r = 0; r < s.length;) e[255 & r] = 255 & (i ^= 19 * e[255 & r]) + s.charCodeAt(r++);
                return h(e)
            }

            function h(t) {
                return String.fromCharCode.apply(0, t)
            }

            e.seedrandom = function (u, p, c) {
                var d = [], f = l(function t(e, i) {
                    var s, r = [], n = _typeof$2(e);
                    if (i && "object" == n) for (s in e) try {
                        r.push(t(e[s], i - 1))
                    } catch (t) {
                    }
                    return r.length ? r : "string" == n ? e : e + "\0"
                }((p = !0 === p ? {entropy: !0} : p || {}).entropy ? [u, h(t)] : null === u ? function () {
                    try {
                        void 0;
                        var e = new Uint8Array(256);
                        return (i.crypto || i.msCrypto).getRandomValues(e), h(e)
                    } catch (e) {
                        var s = i.navigator, r = s && s.plugins;
                        return [+new Date, i, r, i.screen, h(t)]
                    }
                }() : u, 3), d), m = new a(d), g = function () {
                    for (var t = m.g(6), e = s, i = 0; t < r;) t = 256 * (t + i), e *= 256, i = m.g(1);
                    for (; t >= n;) t /= 2, e /= 2, i >>>= 1;
                    return (t + i) / e
                };
                return g.int32 = function () {
                    return 0 | m.g(4)
                }, g.quick = function () {
                    return m.g(4) / 4294967296
                }, g.double = g, l(h(m.S), t), (p.pass || c || function (t, i, s, r) {
                    return r && (r.S && o(r, m), t.state = function () {
                        return o(m, {})
                    }), s ? (e.random = t, i) : t
                })(g, f, "global" in p ? p.global : this == e, p.state)
            }, l(e.random(), t)
        }

        function initialize$2(t) {
            seedRandom([], t)
        }

        var propTypes = {SHAPE: "shape"};

        function _typeof$1(t) {
            return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var ExpressionManager = function () {
            var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null,
                frames = null, _lottieGlobal = {};

            function resetFrame() {
                _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
                return "number" === t || e instanceof Number || "boolean" === t || "string" === t
            }

            function $bm_neg(t) {
                var e = _typeof$1(t);
                if ("number" === e || t instanceof Number || "boolean" === e) return -t;
                if ($bm_isInstanceOfArray(t)) {
                    var i, s = t.length, r = [];
                    for (i = 0; i < s; i += 1) r[i] = -t[i];
                    return r
                }
                return t.propType ? t.v : -t
            }

            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
                var i = _typeof$1(t), s = _typeof$1(e);
                if (isNumerable(i, t) && isNumerable(s, e) || "string" === i || "string" === s) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) return (t = t.slice(0))[0] += e, t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var r = 0, n = t.length, a = e.length, o = []; r < n || r < a;) ("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                    return o
                }
                return 0
            }

            var add = sum;

            function sub(t, e) {
                var i = _typeof$1(t), s = _typeof$1(e);
                if (isNumerable(i, t) && isNumerable(s, e)) return "string" === i && (t = parseInt(t, 10)), "string" === s && (e = parseInt(e, 10)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) return (t = t.slice(0))[0] -= e, t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var r = 0, n = t.length, a = e.length, o = []; r < n || r < a;) ("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                    return o
                }
                return 0
            }

            function mul(t, e) {
                var i, s, r, n = _typeof$1(t), a = _typeof$1(e);
                if (isNumerable(n, t) && isNumerable(a, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                    for (r = t.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t[s] * e;
                    return i
                }
                if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                    for (r = e.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t * e[s];
                    return i
                }
                return 0
            }

            function div(t, e) {
                var i, s, r, n = _typeof$1(t), a = _typeof$1(e);
                if (isNumerable(n, t) && isNumerable(a, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                    for (r = t.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t[s] / e;
                    return i
                }
                if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                    for (r = e.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t / e[s];
                    return i
                }
                return 0
            }

            function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }

            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;

            function clamp(t, e, i) {
                if (e > i) {
                    var s = i;
                    i = e, e = s
                }
                return Math.min(Math.max(t, e), i)
            }

            function radiansToDegrees(t) {
                return t / degToRads
            }

            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
                return t * degToRads
            }

            var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
                if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                var i;
                e || (e = helperLengthArray);
                var s = Math.min(t.length, e.length), r = 0;
                for (i = 0; i < s; i += 1) r += Math.pow(e[i] - t[i], 2);
                return Math.sqrt(r)
            }

            function normalize(t) {
                return div(t, length(t))
            }

            function rgbToHsl(t) {
                var e, i, s = t[0], r = t[1], n = t[2], a = Math.max(s, r, n), o = Math.min(s, r, n), l = (a + o) / 2;
                if (a === o) e = 0, i = 0; else {
                    var h = a - o;
                    switch (i = l > .5 ? h / (2 - a - o) : h / (a + o), a) {
                        case s:
                            e = (r - n) / h + (r < n ? 6 : 0);
                            break;
                        case r:
                            e = (n - s) / h + 2;
                            break;
                        case n:
                            e = (s - r) / h + 4
                    }
                    e /= 6
                }
                return [e, i, l, t[3]]
            }

            function hue2rgb(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function hslToRgb(t) {
                var e, i, s, r = t[0], n = t[1], a = t[2];
                if (0 === n) e = a, s = a, i = a; else {
                    var o = a < .5 ? a * (1 + n) : a + n - a * n, l = 2 * a - o;
                    e = hue2rgb(l, o, r + 1 / 3), i = hue2rgb(l, o, r), s = hue2rgb(l, o, r - 1 / 3)
                }
                return [e, i, s, t[3]]
            }

            function linear(t, e, i, s, r) {
                if (void 0 !== s && void 0 !== r || (s = e, r = i, e = 0, i = 1), i < e) {
                    var n = i;
                    i = e, e = n
                }
                if (t <= e) return s;
                if (t >= i) return r;
                var a, o = i === e ? 0 : (t - e) / (i - e);
                if (!s.length) return s + (r - s) * o;
                var l = s.length, h = createTypedArray("float32", l);
                for (a = 0; a < l; a += 1) h[a] = s[a] + (r[a] - s[a]) * o;
                return h
            }

            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var i, s = e.length;
                    t || (t = createTypedArray("float32", s));
                    var r = createTypedArray("float32", s), n = BMMath.random();
                    for (i = 0; i < s; i += 1) r[i] = t[i] + n * (e[i] - t[i]);
                    return r
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, i, s) {
                var r, n = t.length, a = shapePool.newElement();
                a.setPathData(!!s, n);
                var o, l, h = [0, 0];
                for (r = 0; r < n; r += 1) o = e && e[r] ? e[r] : h, l = i && i[r] ? i[r] : h, a.setTripleAt(t[r][0], t[r][1], l[0] + t[r][0], l[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
                return a
            }

            function initiateExpression(elem, data, property) {
                function noOp(t) {
                    return t
                }

                if (!elem.globalData.renderConfig.runExpressions) return noOp;
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform,
                    content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                    get: function () {
                        return thisProperty.v
                    }
                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0,
                    height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out,
                    smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint,
                    scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt,
                    expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                    numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd,
                    wiggle = function (t, e) {
                        var i, s, r = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", r);
                        var a = Math.floor(5 * time);
                        for (i = 0, s = 0; i < a;) {
                            for (s = 0; s < r; s += 1) n[s] += -e + 2 * e * BMMath.random();
                            i += 1
                        }
                        var o = 5 * time, l = o - Math.floor(o), h = createTypedArray("float32", r);
                        if (r > 1) {
                            for (s = 0; s < r; s += 1) h[s] = this.pv[s] + n[s] + (-e + 2 * e * BMMath.random()) * l;
                            return h
                        }
                        return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * l
                    }.bind(this);

                function loopInDuration(t, e) {
                    return loopIn(t, e, !0)
                }

                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0)
                }

                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time,
                    velocity, value, text, textIndex, textTotal, selectorValue;

                function lookAt(t, e) {
                    var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                        s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                    return [-Math.atan2(i[1], i[2]) / degToRads, s, 0]
                }

                function easeOut(t, e, i, s, r) {
                    return applyEase(easeOutBez, t, e, i, s, r)
                }

                function easeIn(t, e, i, s, r) {
                    return applyEase(easeInBez, t, e, i, s, r)
                }

                function ease(t, e, i, s, r) {
                    return applyEase(easeInOutBez, t, e, i, s, r)
                }

                function applyEase(t, e, i, s, r, n) {
                    void 0 === r ? (r = i, n = s) : e = (e - i) / (s - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                    var a = t(e);
                    if ($bm_isInstanceOfArray(r)) {
                        var o, l = r.length, h = createTypedArray("float32", l);
                        for (o = 0; o < l; o += 1) h[o] = (n[o] - r[o]) * a + r[o];
                        return h
                    }
                    return (n - r) * a + r
                }

                function nearestKey(t) {
                    var e, i, s, r = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0]) if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, s = data.k[0].t; else {
                        for (e = 0; e < r - 1; e += 1) {
                            if (t === data.k[e].t) {
                                i = e + 1, s = data.k[e].t;
                                break
                            }
                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                                break
                            }
                        }
                        -1 === i && (i = e + 1, s = data.k[e].t)
                    } else i = 0, s = 0;
                    var n = {};
                    return n.index = i, n.time = s / elem.comp.globalData.frameRate, n
                }

                function key(t) {
                    var e, i, s;
                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {time: data.k[t].t / elem.comp.globalData.frameRate, value: []};
                    var r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for (s = r.length, i = 0; i < s; i += 1) e[i] = r[i], e.value[i] = r[i];
                    return e
                }

                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e
                }

                function timeToFrames(t, e) {
                    return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }

                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }

                function substring(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                }

                function substr(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                }

                function posterizeTime(t) {
                    time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                }

                var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent,
                    randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;

                function executeExpression(t) {
                    return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                }

                return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }

            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        }(), Expressions = function () {
            var t = {};
            return t.initExpressions = function (t) {
                var e = 0, i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
                    e += 1
                }, t.renderer.globalData.popExpression = function () {
                    0 === (e -= 1) && function () {
                        var t, e = i.length;
                        for (t = 0; t < e; t += 1) i[t].release();
                        i.length = 0
                    }()
                }, t.renderer.globalData.registerExpressionProperty = function (t) {
                    -1 === i.indexOf(t) && i.push(t)
                }
            }, t.resetFrame = ExpressionManager.resetFrame, t
        }(), MaskManagerInterface = function () {
            function t(t, e) {
                this._mask = t, this._data = e
            }

            Object.defineProperty(t.prototype, "maskPath", {
                get: function () {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
            }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function () {
                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
            });
            return function (e) {
                var i, s = createSizedArray(e.viewData.length), r = e.viewData.length;
                for (i = 0; i < r; i += 1) s[i] = new t(e.viewData[i], e.masksProperties[i]);
                return function (t) {
                    for (i = 0; i < r;) {
                        if (e.masksProperties[i].nm === t) return s[i];
                        i += 1
                    }
                    return null
                }
            }
        }(), ExpressionPropertyInterface = function () {
            var t = {pv: 0, v: 0, mult: 1}, e = {pv: [0, 0, 0], v: [0, 0, 0], mult: 1};

            function i(t, e, i) {
                Object.defineProperty(t, "velocity", {
                    get: function () {
                        return e.getVelocityAtTime(e.comp.currentFrame)
                    }
                }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function (s) {
                    if (!t.numKeys) return 0;
                    var r = "";
                    r = "s" in e.keyframes[s - 1] ? e.keyframes[s - 1].s : "e" in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s;
                    var n = "unidimensional" === i ? new Number(r) : Object.assign({}, r);
                    return n.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate, n.value = "unidimensional" === i ? r[0] : r, n
                }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function s() {
                return t
            }

            return function (r) {
                return r ? "unidimensional" === r.propType ? function (e) {
                    e && "pv" in e || (e = t);
                    var s = 1 / e.mult, r = e.pv * s, n = new Number(r);
                    return n.value = r, i(n, e, "unidimensional"), function () {
                        return e.k && e.getValue(), r = e.v * s, n.value !== r && ((n = new Number(r)).value = r, i(n, e, "unidimensional")), n
                    }
                }(r) : function (t) {
                    t && "pv" in t || (t = e);
                    var s = 1 / t.mult, r = t.data && t.data.l || t.pv.length, n = createTypedArray("float32", r),
                        a = createTypedArray("float32", r);
                    return n.value = a, i(n, t, "multidimensional"), function () {
                        t.k && t.getValue();
                        for (var e = 0; e < r; e += 1) a[e] = t.v[e] * s, n[e] = a[e];
                        return n
                    }
                }(r) : s
            }
        }(), TransformExpressionInterface = function (t) {
            function e(t) {
                switch (t) {
                    case"scale":
                    case"Scale":
                    case"ADBE Scale":
                    case 6:
                        return e.scale;
                    case"rotation":
                    case"Rotation":
                    case"ADBE Rotation":
                    case"ADBE Rotate Z":
                    case 10:
                        return e.rotation;
                    case"ADBE Rotate X":
                        return e.xRotation;
                    case"ADBE Rotate Y":
                        return e.yRotation;
                    case"position":
                    case"Position":
                    case"ADBE Position":
                    case 2:
                        return e.position;
                    case"ADBE Position_0":
                        return e.xPosition;
                    case"ADBE Position_1":
                        return e.yPosition;
                    case"ADBE Position_2":
                        return e.zPosition;
                    case"anchorPoint":
                    case"AnchorPoint":
                    case"Anchor Point":
                    case"ADBE AnchorPoint":
                    case 1:
                        return e.anchorPoint;
                    case"opacity":
                    case"Opacity":
                    case 11:
                        return e.opacity;
                    default:
                        return null
                }
            }

            var i, s, r, n;
            return Object.defineProperty(e, "rotation", {get: ExpressionPropertyInterface(t.r || t.rz)}), Object.defineProperty(e, "zRotation", {get: ExpressionPropertyInterface(t.rz || t.r)}), Object.defineProperty(e, "xRotation", {get: ExpressionPropertyInterface(t.rx)}), Object.defineProperty(e, "yRotation", {get: ExpressionPropertyInterface(t.ry)}), Object.defineProperty(e, "scale", {get: ExpressionPropertyInterface(t.s)}), t.p ? n = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), s = ExpressionPropertyInterface(t.py), t.pz && (r = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                get: function () {
                    return t.p ? n() : [i(), s(), r ? r() : 0]
                }
            }), Object.defineProperty(e, "xPosition", {get: ExpressionPropertyInterface(t.px)}), Object.defineProperty(e, "yPosition", {get: ExpressionPropertyInterface(t.py)}), Object.defineProperty(e, "zPosition", {get: ExpressionPropertyInterface(t.pz)}), Object.defineProperty(e, "anchorPoint", {get: ExpressionPropertyInterface(t.a)}), Object.defineProperty(e, "opacity", {get: ExpressionPropertyInterface(t.o)}), Object.defineProperty(e, "skew", {get: ExpressionPropertyInterface(t.sk)}), Object.defineProperty(e, "skewAxis", {get: ExpressionPropertyInterface(t.sa)}), Object.defineProperty(e, "orientation", {get: ExpressionPropertyInterface(t.or)}), e
        }, LayerExpressionInterface = function () {
            function t(t) {
                var e = new Matrix;
                void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                return e
            }

            function e(t, e) {
                var i = this.getMatrix(e);
                return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
            }

            function i(t, e) {
                var i = this.getMatrix(e);
                return this.applyPoint(i, t)
            }

            function s(t, e) {
                var i = this.getMatrix(e);
                return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
            }

            function r(t, e) {
                var i = this.getMatrix(e);
                return this.invertPoint(i, t)
            }

            function n(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, s = this._elem.hierarchy.length;
                    for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                }
                return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function a(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, s = this._elem.hierarchy.length;
                    for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                }
                return t.inversePoint(e)
            }

            function o(t) {
                var e = new Matrix;
                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, s = this._elem.hierarchy.length;
                    for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t)
                }
                return e.inversePoint(t)
            }

            function l() {
                return [1, 1, 1, 1]
            }

            return function (h) {
                var u;

                function p(t) {
                    switch (t) {
                        case"ADBE Root Vectors Group":
                        case"Contents":
                        case 2:
                            return p.shapeInterface;
                        case 1:
                        case 6:
                        case"Transform":
                        case"transform":
                        case"ADBE Transform Group":
                            return u;
                        case 4:
                        case"ADBE Effect Parade":
                        case"effects":
                        case"Effects":
                            return p.effect;
                        case"ADBE Text Properties":
                            return p.textInterface;
                        default:
                            return null
                    }
                }

                p.getMatrix = t, p.invertPoint = a, p.applyPoint = n, p.toWorld = i, p.toWorldVec = e, p.fromWorld = r, p.fromWorldVec = s, p.toComp = i, p.fromComp = o, p.sampleImage = l, p.sourceRectAtTime = h.sourceRectAtTime.bind(h), p._elem = h;
                var c = getDescriptor(u = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                return Object.defineProperties(p, {
                    hasParent: {
                        get: function () {
                            return h.hierarchy.length
                        }
                    },
                    parent: {
                        get: function () {
                            return h.hierarchy[0].layerInterface
                        }
                    },
                    rotation: getDescriptor(u, "rotation"),
                    scale: getDescriptor(u, "scale"),
                    position: getDescriptor(u, "position"),
                    opacity: getDescriptor(u, "opacity"),
                    anchorPoint: c,
                    anchor_point: c,
                    transform: {
                        get: function () {
                            return u
                        }
                    },
                    active: {
                        get: function () {
                            return h.isInRange
                        }
                    }
                }), p.startTime = h.data.st, p.index = h.data.ind, p.source = h.data.refId, p.height = 0 === h.data.ty ? h.data.h : 100, p.width = 0 === h.data.ty ? h.data.w : 100, p.inPoint = h.data.ip / h.comp.globalData.frameRate, p.outPoint = h.data.op / h.comp.globalData.frameRate, p._name = h.data.nm, p.registerMaskInterface = function (t) {
                    p.mask = new MaskManagerInterface(t, h)
                }, p.registerEffectsInterface = function (t) {
                    p.effect = t
                }, p
            }
        }(), propertyGroupFactory = function (t, e) {
            return function (i) {
                return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
            }
        }, PropertyInterface = function (t, e) {
            var i = {_name: t};
            return function (t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
            }
        }, EffectsExpressionInterface = function () {
            function t(i, s, r, n) {
                function a(t) {
                    for (var e = i.ef, s = 0, r = e.length; s < r;) {
                        if (t === e[s].nm || t === e[s].mn || t === e[s].ix) return 5 === e[s].ty ? h[s] : h[s]();
                        s += 1
                    }
                    throw new Error
                }

                var o, l = propertyGroupFactory(a, r), h = [], u = i.ef.length;
                for (o = 0; o < u; o += 1) 5 === i.ef[o].ty ? h.push(t(i.ef[o], s.effectElements[o], s.effectElements[o].propertyGroup, n)) : h.push(e(s.effectElements[o], i.ef[o].ty, n, l));
                return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                    get: function () {
                        return h[0]()
                    }
                }), Object.defineProperties(a, {
                    numProperties: {
                        get: function () {
                            return i.np
                        }
                    }, _name: {value: i.nm}, propertyGroup: {value: l}
                }), a.enabled = 0 !== i.en, a.active = a.enabled, a
            }

            function e(t, e, i, s) {
                var r = ExpressionPropertyInterface(t.p);
                return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", s)), function () {
                    return 10 === e ? i.comp.compInterface(t.p.v) : r()
                }
            }

            return {
                createEffectsInterface: function (e, i) {
                    if (e.effectsManager) {
                        var s, r = [], n = e.data.ef, a = e.effectsManager.effectElements.length;
                        for (s = 0; s < a; s += 1) r.push(t(n[s], e.effectsManager.effectElements[s], i, e));
                        var o = e.data.ef || [], l = function (t) {
                            for (s = 0, a = o.length; s < a;) {
                                if (t === o[s].nm || t === o[s].mn || t === o[s].ix) return r[s];
                                s += 1
                            }
                            return null
                        };
                        return Object.defineProperty(l, "numProperties", {
                            get: function () {
                                return o.length
                            }
                        }), l
                    }
                    return null
                }
            }
        }(), ShapePathInterface = function (t, e, i) {
            var s = e.sh;

            function r(t) {
                return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null
            }

            var n = propertyGroupFactory(r, i);
            return s.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(r, {
                path: {
                    get: function () {
                        return s.k && s.getValue(), s
                    }
                },
                shape: {
                    get: function () {
                        return s.k && s.getValue(), s
                    }
                },
                _name: {value: t.nm},
                ix: {value: t.ix},
                propertyIndex: {value: t.ix},
                mn: {value: t.mn},
                propertyGroup: {value: i}
            }), r
        }, ShapeExpressionInterface = function () {
            function t(t, o, d) {
                var f, m = [], g = t ? t.length : 0;
                for (f = 0; f < g; f += 1) "gr" === t[f].ty ? m.push(e(t[f], o[f], d)) : "fl" === t[f].ty ? m.push(i(t[f], o[f], d)) : "st" === t[f].ty ? m.push(n(t[f], o[f], d)) : "tm" === t[f].ty ? m.push(a(t[f], o[f], d)) : "tr" === t[f].ty || ("el" === t[f].ty ? m.push(l(t[f], o[f], d)) : "sr" === t[f].ty ? m.push(h(t[f], o[f], d)) : "sh" === t[f].ty ? m.push(ShapePathInterface(t[f], o[f], d)) : "rc" === t[f].ty ? m.push(u(t[f], o[f], d)) : "rd" === t[f].ty ? m.push(p(t[f], o[f], d)) : "rp" === t[f].ty ? m.push(c(t[f], o[f], d)) : "gf" === t[f].ty ? m.push(s(t[f], o[f], d)) : m.push(r(t[f], o[f])));
                return m
            }

            function e(e, i, s) {
                var r = function (t) {
                    switch (t) {
                        case"ADBE Vectors Group":
                        case"Contents":
                        case 2:
                            return r.content;
                        default:
                            return r.transform
                    }
                };
                r.propertyGroup = propertyGroupFactory(r, s);
                var n = function (e, i, s) {
                    var r, n = function (t) {
                        for (var e = 0, i = r.length; e < i;) {
                            if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                            e += 1
                        }
                        return "number" == typeof t ? r[t - 1] : null
                    };
                    n.propertyGroup = propertyGroupFactory(n, s), r = t(e.it, i.it, n.propertyGroup), n.numProperties = r.length;
                    var a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                    return n.transform = a, n.propertyIndex = e.cix, n._name = e.nm, n
                }(e, i, r.propertyGroup), a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
                return r.content = n, r.transform = a, Object.defineProperty(r, "_name", {
                    get: function () {
                        return e.nm
                    }
                }), r.numProperties = e.np, r.propertyIndex = e.ix, r.nm = e.nm, r.mn = e.mn, r
            }

            function i(t, e, i) {
                function s(t) {
                    return "Color" === t || "color" === t ? s.color : "Opacity" === t || "opacity" === t ? s.opacity : null
                }

                return Object.defineProperties(s, {
                    color: {get: ExpressionPropertyInterface(e.c)},
                    opacity: {get: ExpressionPropertyInterface(e.o)},
                    _name: {value: t.nm},
                    mn: {value: t.mn}
                }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), s
            }

            function s(t, e, i) {
                function s(t) {
                    return "Start Point" === t || "start point" === t ? s.startPoint : "End Point" === t || "end point" === t ? s.endPoint : "Opacity" === t || "opacity" === t ? s.opacity : null
                }

                return Object.defineProperties(s, {
                    startPoint: {get: ExpressionPropertyInterface(e.s)},
                    endPoint: {get: ExpressionPropertyInterface(e.e)},
                    opacity: {get: ExpressionPropertyInterface(e.o)},
                    type: {
                        get: function () {
                            return "a"
                        }
                    },
                    _name: {value: t.nm},
                    mn: {value: t.mn}
                }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), s
            }

            function r() {
                return function () {
                    return null
                }
            }

            function n(t, e, i) {
                var s, r = propertyGroupFactory(h, i), n = propertyGroupFactory(l, r);

                function a(i) {
                    Object.defineProperty(l, t.d[i].nm, {get: ExpressionPropertyInterface(e.d.dataProps[i].p)})
                }

                var o = t.d ? t.d.length : 0, l = {};
                for (s = 0; s < o; s += 1) a(s), e.d.dataProps[s].p.setGroupProperty(n);

                function h(t) {
                    return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
                }

                return Object.defineProperties(h, {
                    color: {get: ExpressionPropertyInterface(e.c)},
                    opacity: {get: ExpressionPropertyInterface(e.o)},
                    strokeWidth: {get: ExpressionPropertyInterface(e.w)},
                    dash: {
                        get: function () {
                            return l
                        }
                    },
                    _name: {value: t.nm},
                    mn: {value: t.mn}
                }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), e.w.setGroupProperty(PropertyInterface("Stroke Width", r)), h
            }

            function a(t, e, i) {
                function s(e) {
                    return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : null
                }

                var r = propertyGroupFactory(s, i);
                return s.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", r)), e.e.setGroupProperty(PropertyInterface("End", r)), e.o.setGroupProperty(PropertyInterface("Offset", r)), s.propertyIndex = t.ix, s.propertyGroup = i, Object.defineProperties(s, {
                    start: {get: ExpressionPropertyInterface(e.s)},
                    end: {get: ExpressionPropertyInterface(e.e)},
                    offset: {get: ExpressionPropertyInterface(e.o)},
                    _name: {value: t.nm}
                }), s.mn = t.mn, s
            }

            function o(t, e, i) {
                function s(e) {
                    return t.a.ix === e || "Anchor Point" === e ? s.anchorPoint : t.o.ix === e || "Opacity" === e ? s.opacity : t.p.ix === e || "Position" === e ? s.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : t.s.ix === e || "Scale" === e ? s.scale : t.sk && t.sk.ix === e || "Skew" === e ? s.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? s.skewAxis : null
                }

                var r = propertyGroupFactory(s, i);
                return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", r)), Object.defineProperties(s, {
                    opacity: {get: ExpressionPropertyInterface(e.transform.mProps.o)},
                    position: {get: ExpressionPropertyInterface(e.transform.mProps.p)},
                    anchorPoint: {get: ExpressionPropertyInterface(e.transform.mProps.a)},
                    scale: {get: ExpressionPropertyInterface(e.transform.mProps.s)},
                    rotation: {get: ExpressionPropertyInterface(e.transform.mProps.r)},
                    skew: {get: ExpressionPropertyInterface(e.transform.mProps.sk)},
                    skewAxis: {get: ExpressionPropertyInterface(e.transform.mProps.sa)},
                    _name: {value: t.nm}
                }), s.ty = "tr", s.mn = t.mn, s.propertyGroup = i, s
            }

            function l(t, e, i) {
                function s(e) {
                    return t.p.ix === e ? s.position : t.s.ix === e ? s.size : null
                }

                var r = propertyGroupFactory(s, i);
                s.propertyIndex = t.ix;
                var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return n.s.setGroupProperty(PropertyInterface("Size", r)), n.p.setGroupProperty(PropertyInterface("Position", r)), Object.defineProperties(s, {
                    size: {get: ExpressionPropertyInterface(n.s)},
                    position: {get: ExpressionPropertyInterface(n.p)},
                    _name: {value: t.nm}
                }), s.mn = t.mn, s
            }

            function h(t, e, i) {
                function s(e) {
                    return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : null : s.innerRadius
                }

                var r = propertyGroupFactory(s, i), n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return s.propertyIndex = t.ix, n.or.setGroupProperty(PropertyInterface("Outer Radius", r)), n.os.setGroupProperty(PropertyInterface("Outer Roundness", r)), n.pt.setGroupProperty(PropertyInterface("Points", r)), n.p.setGroupProperty(PropertyInterface("Position", r)), n.r.setGroupProperty(PropertyInterface("Rotation", r)), t.ir && (n.ir.setGroupProperty(PropertyInterface("Inner Radius", r)), n.is.setGroupProperty(PropertyInterface("Inner Roundness", r))), Object.defineProperties(s, {
                    position: {get: ExpressionPropertyInterface(n.p)},
                    rotation: {get: ExpressionPropertyInterface(n.r)},
                    points: {get: ExpressionPropertyInterface(n.pt)},
                    outerRadius: {get: ExpressionPropertyInterface(n.or)},
                    outerRoundness: {get: ExpressionPropertyInterface(n.os)},
                    innerRadius: {get: ExpressionPropertyInterface(n.ir)},
                    innerRoundness: {get: ExpressionPropertyInterface(n.is)},
                    _name: {value: t.nm}
                }), s.mn = t.mn, s
            }

            function u(t, e, i) {
                function s(e) {
                    return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : null
                }

                var r = propertyGroupFactory(s, i), n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return s.propertyIndex = t.ix, n.p.setGroupProperty(PropertyInterface("Position", r)), n.s.setGroupProperty(PropertyInterface("Size", r)), n.r.setGroupProperty(PropertyInterface("Rotation", r)), Object.defineProperties(s, {
                    position: {get: ExpressionPropertyInterface(n.p)},
                    roundness: {get: ExpressionPropertyInterface(n.r)},
                    size: {get: ExpressionPropertyInterface(n.s)},
                    _name: {value: t.nm}
                }), s.mn = t.mn, s
            }

            function p(t, e, i) {
                function s(e) {
                    return t.r.ix === e || "Round Corners 1" === e ? s.radius : null
                }

                var r = propertyGroupFactory(s, i), n = e;
                return s.propertyIndex = t.ix, n.rd.setGroupProperty(PropertyInterface("Radius", r)), Object.defineProperties(s, {
                    radius: {get: ExpressionPropertyInterface(n.rd)},
                    _name: {value: t.nm}
                }), s.mn = t.mn, s
            }

            function c(t, e, i) {
                function s(e) {
                    return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : null
                }

                var r = propertyGroupFactory(s, i), n = e;
                return s.propertyIndex = t.ix, n.c.setGroupProperty(PropertyInterface("Copies", r)), n.o.setGroupProperty(PropertyInterface("Offset", r)), Object.defineProperties(s, {
                    copies: {get: ExpressionPropertyInterface(n.c)},
                    offset: {get: ExpressionPropertyInterface(n.o)},
                    _name: {value: t.nm}
                }), s.mn = t.mn, s
            }

            return function (e, i, s) {
                var r;

                function n(t) {
                    if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? s : r[t - 1];
                    for (var e = 0, i = r.length; e < i;) {
                        if (r[e]._name === t) return r[e];
                        e += 1
                    }
                    return null
                }

                return n.propertyGroup = propertyGroupFactory(n, (function () {
                    return s
                })), r = t(e, i, n.propertyGroup), n.numProperties = r.length, n._name = "Contents", n
            }
        }(), TextExpressionInterface = function (t) {
            var e;

            function i(t) {
                switch (t) {
                    case"ADBE Text Document":
                        return i.sourceText;
                    default:
                        return null
                }
            }

            return Object.defineProperty(i, "sourceText", {
                get: function () {
                    t.textProperty.getValue();
                    var i = t.textProperty.currentData.t;
                    return e && i === e.value || ((e = new String(i)).value = i || new String(i), Object.defineProperty(e, "style", {
                        get: function () {
                            return {fillColor: t.textProperty.currentData.fc}
                        }
                    })), e
                }
            }), i
        };

        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var FootageInterface = (dataInterfaceFactory = function (t) {
            function e(t) {
                return "Outline" === t ? e.outlineInterface() : null
            }

            return e._name = "Outline", e.outlineInterface = function (t) {
                var e = "", i = t.getFootageData();

                function s(t) {
                    if (i[t]) return e = t, "object" === _typeof(i = i[t]) ? s : i;
                    var r = t.indexOf(e);
                    if (-1 !== r) {
                        var n = parseInt(t.substr(r + e.length), 10);
                        return "object" === _typeof(i = i[n]) ? s : i
                    }
                    return ""
                }

                return function () {
                    return e = "", i = t.getFootageData(), s
                }
            }(t), e
        }, function (t) {
            function e(t) {
                return "Data" === t ? e.dataInterface : null
            }

            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
        }), dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
        };

        function getInterface(t) {
            return interfaces[t] || null
        }

        var expressionHelpers = {
            searchExpressions: function (t, e, i) {
                e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
            }, getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t), i = this.getValueAtTime(t + -.01), s = 0;
                if (e.length) {
                    var r;
                    for (r = 0; r < e.length; r += 1) s += Math.pow(i[r] - e[r], 2);
                    s = 100 * Math.sqrt(s)
                } else s = 0;
                return s
            }, getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e, i, s = this.getValueAtTime(t), r = this.getValueAtTime(t + -.001);
                if (s.length) for (e = createTypedArray("float32", s.length), i = 0; i < s.length; i += 1) e[i] = (r[i] - s[i]) / -.001; else e = (r - s) / -.001;
                return e
            }, getValueAtTime: function (t) {
                return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
            }, getStaticValueAtTime: function () {
                return this.pv
            }, setGroupProperty: function (t) {
                this.propertyGroup = t
            }
        };

        function addPropertyDecorator() {
            function t(t, e, i) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var s, r, n, a, o, l = this.comp.renderedFrame, h = this.keyframes, u = h[h.length - 1].t;
                if (l <= u) return this.pv;
                if (i ? r = u - (s = e ? Math.abs(u - this.elem.comp.globalData.frameRate * e) : Math.max(0, u - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), s = u - (r = h[h.length - 1 - e].t)), "pingpong" === t) {
                    if (Math.floor((l - r) / s) % 2 != 0) return this.getValueAtTime((s - (l - r) % s + r) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var p = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                            c = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            d = this.getValueAtTime(((l - r) % s + r) / this.comp.globalData.frameRate, 0),
                            f = Math.floor((l - r) / s);
                        if (this.pv.length) {
                            for (a = (o = new Array(p.length)).length, n = 0; n < a; n += 1) o[n] = (c[n] - p[n]) * f + d[n];
                            return o
                        }
                        return (c - p) * f + d
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(m.length)).length, n = 0; n < a; n += 1) o[n] = m[n] + (m[n] - g[n]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4;
                            return o
                        }
                        return m + (l - u) / .001 * (m - g)
                    }
                }
                return this.getValueAtTime(((l - r) % s + r) / this.comp.globalData.frameRate, 0)
            }

            function e(t, e, i) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var s, r, n, a, o, l = this.comp.renderedFrame, h = this.keyframes, u = h[0].t;
                if (l >= u) return this.pv;
                if (i ? r = u + (s = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - u)) : ((!e || e > h.length - 1) && (e = h.length - 1), s = (r = h[e].t) - u), "pingpong" === t) {
                    if (Math.floor((u - l) / s) % 2 == 0) return this.getValueAtTime(((u - l) % s + u) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var p = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                            d = this.getValueAtTime((s - (u - l) % s + u) / this.comp.globalData.frameRate, 0),
                            f = Math.floor((u - l) / s) + 1;
                        if (this.pv.length) {
                            for (a = (o = new Array(p.length)).length, n = 0; n < a; n += 1) o[n] = d[n] - (c[n] - p[n]) * f;
                            return o
                        }
                        return d - (c - p) * f
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(m.length)).length, n = 0; n < a; n += 1) o[n] = m[n] + (m[n] - g[n]) * (u - l) / .001;
                            return o
                        }
                        return m + (m - g) * (u - l) / .001
                    }
                }
                return this.getValueAtTime((s - ((u - l) % s + u)) / this.comp.globalData.frameRate, 0)
            }

            function i(t, e) {
                if (!this.k) return this.pv;
                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var i, s, r = this.comp.renderedFrame / this.comp.globalData.frameRate, n = r - t,
                    a = e > 1 ? (r + t - n) / (e - 1) : 1, o = 0, l = 0;
                for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                    if (s = this.getValueAtTime(n + o * a), this.pv.length) for (l = 0; l < this.pv.length; l += 1) i[l] += s[l]; else i += s;
                    o += 1
                }
                if (this.pv.length) for (l = 0; l < this.pv.length; l += 1) i[l] /= e; else i /= e;
                return i
            }

            function s(t) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {v: new Matrix});
                var e = this._transformCachingAtTime.v;
                if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var i = this.a.getValueAtTime(t);
                    e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var s = this.s.getValueAtTime(t);
                    e.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var r = this.sk.getValueAtTime(t), n = this.sa.getValueAtTime(t);
                    e.skewFromAxis(-r * this.sk.mult, n * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var a = this.r.getValueAtTime(t);
                    e.rotate(-a * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var o = this.rz.getValueAtTime(t), l = this.ry.getValueAtTime(t), h = this.rx.getValueAtTime(t),
                        u = this.or.getValueAtTime(t);
                    e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-u[2] * this.or.mult).rotateY(u[1] * this.or.mult).rotateX(u[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var p = this.px.getValueAtTime(t), c = this.py.getValueAtTime(t);
                    if (this.data.p.z) {
                        var d = this.pz.getValueAtTime(t);
                        e.translate(p * this.px.mult, c * this.py.mult, -d * this.pz.mult)
                    } else e.translate(p * this.px.mult, c * this.py.mult, 0)
                } else {
                    var f = this.p.getValueAtTime(t);
                    e.translate(f[0] * this.p.mult, f[1] * this.p.mult, -f[2] * this.p.mult)
                }
                return e
            }

            function r() {
                return this.v.clone(new Matrix)
            }

            var n = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (t, e, i) {
                var a = n(t, e, i);
                return a.dynamicProperties.length ? a.getValueAtTime = s.bind(a) : a.getValueAtTime = r.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
            };
            var a = PropertyFactory.getProp;
            PropertyFactory.getProp = function (s, r, n, o, l) {
                var h = a(s, r, n, o, l);
                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = i, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === r.a ? r.k.length : 0, h.propertyIndex = r.ix;
                var u = 0;
                return 0 !== n && (u = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)), h._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: u
                }, expressionHelpers.searchExpressions(s, r, h), h.k && l.addDynamicProperty(h), h
            };
            var o = ShapePropertyFactory.getConstructorFunction(),
                l = ShapePropertyFactory.getKeyframedConstructorFunction();

            function h() {
            }

            h.prototype = {
                vertices: function (t, e) {
                    this.k && this.getValue();
                    var i, s = this.v;
                    void 0 !== e && (s = this.getValueAtTime(e, 0));
                    var r = s._length, n = s[t], a = s.v, o = createSizedArray(r);
                    for (i = 0; i < r; i += 1) o[i] = "i" === t || "o" === t ? [n[i][0] - a[i][0], n[i][1] - a[i][1]] : [n[i][0], n[i][1]];
                    return o
                },
                points: function (t) {
                    return this.vertices("v", t)
                },
                inTangents: function (t) {
                    return this.vertices("i", t)
                },
                outTangents: function (t) {
                    return this.vertices("o", t)
                },
                isClosed: function () {
                    return this.v.c
                },
                pointOnPath: function (t, e) {
                    var i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var s, r = this._segmentsLength, n = r.lengths, a = r.totalLength * t, o = 0, l = n.length, h = 0; o < l;) {
                        if (h + n[o].addedLength > a) {
                            var u = o, p = i.c && o === l - 1 ? 0 : o + 1, c = (a - h) / n[o].addedLength;
                            s = bez.getPointInSegment(i.v[u], i.v[p], i.o[u], i.i[p], c, n[o]);
                            break
                        }
                        h += n[o].addedLength, o += 1
                    }
                    return s || (s = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), s
                },
                vectorOnPath: function (t, e, i) {
                    1 == t ? t = this.v.c : 0 == t && (t = .999);
                    var s = this.pointOnPath(t, e), r = this.pointOnPath(t + .001, e), n = r[0] - s[0], a = r[1] - s[1],
                        o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
                    return 0 === o ? [0, 0] : "tangent" === i ? [n / o, a / o] : [-a / o, n / o]
                },
                tangentOnPath: function (t, e) {
                    return this.vectorOnPath(t, e, "tangent")
                },
                normalOnPath: function (t, e) {
                    return this.vectorOnPath(t, e, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function (t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var u = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (t, e, i, s, r) {
                var n = u(t, e, i, s, r);
                return n.propertyIndex = e.ix, n.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, n) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, n), n.k && t.addDynamicProperty(n), n
            }
        }

        function initialize$1() {
            addPropertyDecorator()
        }

        function addDecorator() {
            TextProperty.prototype.getExpressionValue = function (t, e) {
                var i = this.calculateExpression(e);
                if (t.t !== i) {
                    var s = {};
                    return this.copyData(s, t), s.t = i.toString(), s.__complete = !1, s
                }
                return t
            }, TextProperty.prototype.searchProperty = function () {
                var t = this.searchKeyframes(), e = this.searchExpressions();
                return this.kf = t || e, this.kf
            }, TextProperty.prototype.searchExpressions = function () {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            }
        }

        function initialize() {
            addDecorator()
        }

        function SVGComposableEffect() {
        }

        SVGComposableEffect.prototype = {
            createMergeNode: function (t, e) {
                var i, s, r = createNS("feMerge");
                for (r.setAttribute("result", t), s = 0; s < e.length; s += 1) (i = createNS("feMergeNode")).setAttribute("in", e[s]), r.appendChild(i), r.appendChild(i);
                return r
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, i, s, r) {
            this.filterManager = e;
            var n = createNS("feColorMatrix");
            n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", s + "_tint_1"), t.appendChild(n), (n = createNS("feColorMatrix")).setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", s + "_tint_2"), t.appendChild(n), this.matrixFilter = n;
            var a = this.createMergeNode(s, [r, s + "_tint_1", s + "_tint_2"]);
            t.appendChild(a)
        }

        function SVGFillFilter(t, e, i, s) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", s), t.appendChild(r), this.matrixFilter = r
        }

        function SVGStrokeEffect(t, e, i) {
            this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = []
        }

        function SVGTritoneFilter(t, e, i, s) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(r);
            var n = createNS("feComponentTransfer");
            n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", s), this.matrixFilter = n;
            var a = createNS("feFuncR");
            a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
            var o = createNS("feFuncG");
            o.setAttribute("type", "table"), n.appendChild(o), this.feFuncG = o;
            var l = createNS("feFuncB");
            l.setAttribute("type", "table"), n.appendChild(l), this.feFuncB = l, t.appendChild(n)
        }

        function SVGProLevelsFilter(t, e, i, s) {
            this.filterManager = e;
            var r = this.filterManager.effectElements, n = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n)), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && ((n = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", s), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
        }

        function SVGDropShadowEffect(t, e, i, s, r) {
            var n = e.container.globalData.renderConfig.filterSize, a = e.data.fs || n;
            t.setAttribute("x", a.x || n.x), t.setAttribute("y", a.y || n.y), t.setAttribute("width", a.width || n.width), t.setAttribute("height", a.height || n.height), this.filterManager = e;
            var o = createNS("feGaussianBlur");
            o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", s + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
            var l = createNS("feOffset");
            l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", s + "_drop_shadow_1"), l.setAttribute("result", s + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
            var h = createNS("feFlood");
            h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", s + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
            var u = createNS("feComposite");
            u.setAttribute("in", s + "_drop_shadow_3"), u.setAttribute("in2", s + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", s + "_drop_shadow_4"), t.appendChild(u);
            var p = this.createMergeNode(s, [s + "_drop_shadow_4", r]);
            t.appendChild(p)
        }

        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v,
                    s = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + s + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v, i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
            }
        }, SVGStrokeEffect.prototype.initialize = function () {
            var t, e, i, s, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length, i = 0) : s = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < s; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                p: t,
                m: i
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var n = createNS("mask"), a = createElementID();
                n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); r[0];) o.appendChild(r[0]);
                this.elem.layerElement.appendChild(o), this.masker = n, e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v) for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function (t) {
            var e;
            this.initialized || this.initialize();
            var i, s, r = this.paths.length;
            for (e = 0; e < r; e += 1) if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                var n;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                        o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                        l = s.getTotalLength();
                    n = "0 0 0 " + l * a + " ";
                    var h, u = l * (o - a),
                        p = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                        c = Math.floor(u / p);
                    for (h = 0; h < c; h += 1) n += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                    n += "0 " + 10 * l + " 0 0"
                } else n = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                s.setAttribute("stroke-dasharray", n)
            }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var d = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v,
                    s = this.filterManager.effectElements[2].p.v, r = s[0] + " " + i[0] + " " + e[0],
                    n = s[1] + " " + i[1] + " " + e[1], a = s[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", r), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var i = createNS(t);
            return i.setAttribute("type", "table"), e.appendChild(i), i
        }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, s, r) {
            for (var n, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), u = Array.call(null, {length: 256}), p = 0, c = r - s, d = e - t; o <= 256;) a = (n = o / 256) <= l ? d < 0 ? r : s : n >= h ? d < 0 ? s : r : s + c * Math.pow((n - t) / d, 1 / i), u[p] = a, p += 1, o += 256 / 255;
            return u.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e, i = this.filterManager.effectElements;
                this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var i = this.filterManager.effectElements[3].p.v,
                        s = (this.filterManager.effectElements[2].p.v - 90) * degToRads, r = i * Math.cos(s),
                        n = i * Math.sin(s);
                    this.feOffset.setAttribute("dx", r), this.feOffset.setAttribute("dy", n)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, i) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
        }

        function SVGGaussianBlurEffect(t, e, i, s) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            r.setAttribute("result", s), t.appendChild(r), this.feGaussianBlur = r
        }

        function TransformEffect() {
        }

        function SVGTransformEffect(t, e) {
            this.init(e)
        }

        function CVTransformEffect(t) {
            this.init(t)
        }

        return SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var i = t.layerElement.parentNode;
            if (i) {
                for (var s, r = i.children, n = 0, a = r.length; n < a && r[n] !== t.layerElement;) n += 1;
                n <= a - 2 && (s = r[n + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), s ? i.insertBefore(o, s) : i.appendChild(o)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
                var i = createElementID(), s = createNS("mask");
                s.setAttribute("id", e.layerId), s.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var r = t.globalData.defs;
                r.appendChild(s);
                var n = createNS("symbol");
                n.setAttribute("id", i), this.replaceInParent(e, i), n.appendChild(e.layerElement), r.appendChild(n);
                var a = createNS("use");
                a.setAttribute("href", "#" + i), s.appendChild(a), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function () {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v,
                    s = 3 == i ? 0 : e, r = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + r);
                var n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n)
            }
        }, TransformEffect.prototype.init = function (t) {
            this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function (t) {
            if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                var e = this.effectsManager.effectElements, i = e[0].p.v, s = e[1].p.v, r = 1 === e[2].p.v,
                    n = e[3].p.v, a = r ? n : e[4].p.v, o = e[5].p.v, l = e[6].p.v, h = e[7].p.v;
                this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(.01 * a, .01 * n, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(s[0], s[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
            }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    }))
}, function (t, e, i) {
    t.exports = i(10)
}, function (t, e, i) {
    "use strict";
    i.r(e), function (t) {
        var e = i(5), s = i(7), r = i(2);

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, (r = s.key, a = void 0, a = function (t, e) {
                    if ("object" !== n(t) || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(t, e || "default");
                        if ("object" !== n(s)) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(r, "string"), "symbol" === n(a) ? a : String(a)), s)
            }
            var r, a
        }

        function o(t, e, i) {
            return e && a(t.prototype, e), i && a(t, i), Object.defineProperty(t, "prototype", {writable: !1}), t
        }

        e.a.registerPlugin(r.a, s.a), t.gsap = e.a, e.a.defaults({overwrite: "auto"});
        var l = o((function t() {
            var e = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.env = i(11).default, this.utils = i(12).default, this.classes = {Signal: i(0).default}, this.components = {
                Menu: i(13).default,
                Slider: i(14).default,
                Popups: i(15).default,
                Sort: i(16).default,
                Fotorama: i(17).default,
                GoodInfo: i(18).default,
                Notes: i(19).default,
                GoodAddBasket: i(20).default,
                SelectCountry: i(21).default,
                Accordion: i(23).default,
                SelectTheme: i(24).default,
                BlockSwitcher: i(25).default
            }, this.helpers = {}, this.modules = {
                Filters: i(26).default,
                Filter: i(27).default,
                Cart: i(28).default,
                Subscribe: i(29).default,
                Checkout: i(30).default,
                CheckoutForms: i(31).default,
                Promocode: i(32).default,
                Map: i(33).default,
                ContactsForms: i(34).default,
                BrandMission: i(35).default,
                Parallax: i(36).default,
                LottieAnimations: i(37)
            }, document.addEventListener("DOMContentLoaded", (function () {
                document.documentElement.classList.remove("_loading");
                var t = window.location.hash;
                t && (t = t.substring(1), e.components.Popups.close(), e.components.Popups.getPopup(t) && e.components.Popups.open(t))
            }))
        }));
        t.SIU = new l
    }.call(this, i(6))
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = window.environmentObject, r = {
        isMobile: "_mobile" === s.platform,
        isDesktop: "_desktop" === s.platform,
        isMac: "_mac" === s.os,
        isWin: "_win" === s.os,
        isLinux: "_linux" === s.os,
        isAndroid: "_android" === s.os,
        isIOS: "_ios" === s.os,
        isFF: "_ff" === s.browser,
        isOpera: "_opera" === s.browser,
        isYandex: "_yandex" === s.browser,
        isIE: "_ie" === s.browser,
        isEdge: "_edge" === s.browser,
        isChrome: "_chrome" === s.browser,
        isSafari: "_safari" === s.browser,
        isLocal: s.isLocal
    };
    window.environmentObject = null, delete window.environmentObject, e.default = r
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = {
        now: function () {
            return window.performance && window.performance.now ? this.now = function () {
                return window.performance.now()
            } : this.now = function () {
                return +new Date
            }, this.now()
        }, cubicProgress: function (t) {
            return t = (t = t < 0 ? 0 : t) > 1 ? 1 : t, (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, debounce: function (t) {
            var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return function () {
                var r = this, n = arguments, a = function () {
                    e = null, !s && t.apply(r, n)
                }, o = s && !e;
                clearTimeout(e), e = setTimeout(a, i), o && t.apply(r, n)
            }
        }, throttle: function (t) {
            var e, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, r = !1;

            function n() {
                r ? (e = arguments, i = this) : (t.apply(this, arguments), r = !0, setTimeout((function () {
                    r = !1, e && (n.apply(i, e), e = i = null)
                }), s))
            }

            return n
        }, formatNumber: function (t) {
            for (var e = "", i = (t = t.toString()).length - 1, s = 0; i >= 0; i--, s++) 3 === s ? (s = 0, e = t.substr(i, 1) + " " + e) : e = t.substr(i, 1) + e;
            return e
        }, declOfNum: function (t, e) {
            return e[t % 100 > 4 && t % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][t % 10 < 5 ? t % 10 : 5]]
        }, addPriceToElem: function (t, e) {
            t = String(t).replace(/\B(?=(\d{3})+(?!\d))/g, " "), e.innerText = t + " ₽"
        }, convertValueToNumber: function (t) {
            return parseInt(t.replace(/\s/g, "").match(/\d+/), 10)
        }
    };
    e.default = s
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_show", r = "_active", n = "_no-scroll", a = document.documentElement.classList;
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-menu]"), this.header = document.querySelector("[data-header]"), this.burger = document.querySelector("[data-burger]"), this.closeBtns = document.querySelectorAll("[data-sub-menu-close]"), !this.container || !this.header) return;

            function t() {
                document.querySelectorAll("._show").forEach(t => {
                    t.classList.remove(s)
                })
            }

            let e;
            const i = window.innerWidth;
            e = i < 740 ? "click" : "mouseover", this.burger.addEventListener("click", () => {
                a.contains(n) || a.add(n), this.container.classList.toggle("_open"), this.burger.classList.toggle("_open"), this.burger.classList.contains("_open") || (a.remove(n), t())
            }), this.dropDownLists = document.querySelectorAll("[data-dropdown]"), this.dropDownLists.forEach(r => {
                let n;
                const a = r.parentNode, o = a.querySelector("a");
                n = i < 740 ? o : a, r.hasAttribute("data-menu-lng") && (e = "click"), n.addEventListener(e, t => {
                    t.preventDefault(), a.classList.add(s), o.classList.add(s), this.activeItems = document.querySelectorAll("._show"), this.activeItems.forEach(e => {
                        e !== t.currentTarget && e !== t.currentTarget.parentNode && e.classList.remove(s)
                    }), t.currentTarget.classList.contains(s) ? this.container.classList.add(s) : this.container.classList.remove(s)
                }), window.addEventListener("mouseover", e => {
                    !this.header.contains(e.target) && i > 740 && t()
                }), this.container.querySelectorAll(".menu__link, .menu__logo, .menu__counter-added").forEach(e => {
                    e.addEventListener("mouseover", () => {
                        i > 740 && e !== o && t()
                    })
                })
            });
            document.querySelector("body").addEventListener(e, e => {
                e.composedPath().includes(this.container) || t()
            }), this.closeBtns.forEach(e => {
                e.addEventListener("click", () => {
                    t()
                })
            });
            document.querySelectorAll("[data-menu-lng]").forEach(e => {
                const i = e.parentNode.querySelector("a>span"), s = e.querySelectorAll("li"),
                    n = e.querySelector("._active");
                n && (i.innerText = n.querySelector("a>span").textContent), s.forEach(e => {
                    e.addEventListener("click", n => {
                        n.stopPropagation();
                        const a = e.querySelector("a>span").textContent;
                        for (const t of s) t.classList.remove(r);
                        e.classList.add(r), i.innerText = a, t()
                    })
                })
            })
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(1);
    e.default = new class {
        constructor() {
            document.querySelectorAll("[data-slider]").forEach(t => this.init(t))
        }

        init(t) {
            const e = t.hasAttribute("data-slider-autoplay"), i = t.hasAttribute("data-slider-pagination"),
                r = t.hasAttribute("data-slider-navigation"), n = [], a = {}, o = {}, l = {}, h = window.innerWidth;
            if (i && h < 741) {
                const e = t.getAttribute("data-slider-pagination");
                o.clickable = !0, o.el = t.querySelector(".swiper-pagination"), o.type = e || "bullets", n.push(s.d)
            }
            e && (e && n.push(s.a), a.delay = 2e3), r && (l.nextEl = t.querySelector(".swiper-button-next"), l.prevEl = t.querySelector(".swiper-button-prev"), n.push(s.c)), new s.f(t, {
                modules: n,
                loop: !0,
                pagination: o,
                autoplay: a,
                navigation: l,
                spaceBetween: 5,
                breakpoints: {320: {slidesPerView: 1}, 680: {slidesPerView: 2}, 1024: {slidesPerView: 3}}
            })
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(0);
    const r = document.documentElement.classList, n = "_no-scroll";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.wrapper = document.querySelector("[data-popups]"), !this.wrapper) return;
            this.onOpen = new s.default, this.onClose = new s.default, this.onCloseStart = new s.default, this.opened = !1, this.openedClass = "", this.activePopup = null, this.activePopupName = "", this.popups = document.querySelectorAll("[data-popup]");
            this.animations = {
                slideIn: (t, e, i) => {
                    "bottom" === t.getAttribute("data-popup-pos") && gsap.fromTo(t, {
                        yPercent: 100,
                        display: "block"
                    }, {
                        yPercent: 0, duration: .35, delay: i, onComplete: () => {
                            e()
                        }
                    }), "right" === t.getAttribute("data-popup-pos") && gsap.fromTo(t, {
                        xPercent: 100,
                        display: "block"
                    }, {
                        xPercent: 0, duration: .35, delay: i, onComplete: () => {
                            e()
                        }
                    })
                }, slideOut: (t, e, i) => {
                    "bottom" === t.getAttribute("data-popup-pos") && gsap.to(t, {
                        duration: e ? 0 : .35,
                        yPercent: 100,
                        display: "none",
                        onComplete: () => {
                            i()
                        }
                    }), "right" === t.getAttribute("data-popup-pos") && gsap.to(t, {
                        duration: e ? 0 : .35,
                        xPercent: 100,
                        display: "none",
                        onComplete: () => {
                            i()
                        }
                    })
                }
            }, Array.from(document.querySelectorAll("[data-popup-opener]")).forEach(t => {
                t.addEventListener("click", t => {
                    t.preventDefault(), this.open(t.currentTarget.getAttribute("data-popup-opener"), t.currentTarget.getAttribute("data-popup-opener-delay"))
                })
            }), Array.from(document.querySelectorAll("[data-popup-closer]")).forEach(t => {
                t.addEventListener("click", t => {
                    "A" !== t.target.tagName && t.preventDefault(), this.close()
                })
            }), window.addEventListener("keydown", t => {
                this.opened && "Escape" === t.key && this.close()
            }), this.wrapper.addEventListener("click", t => {
                this.opened && t.target === this.activePopup && this.close()
            })
        }

        open(t, e = 0) {
            if (this.activePopupName === t || this.animating) return;
            this.opened && this.close(!0);
            const i = this.wrapper.querySelector('[data-popup="' + t + '"]');
            if (!i) return void console.log("No popup for " + t + " opener");
            this.opened = !0, this.activePopup = i, this.activePopupName = t, this.popupOpenAnimation = this.activePopup.getAttribute("data-popup-open-animation"), this.wrapper.classList.add("_" + t), this.wrapper.classList.remove("no-pe"), gsap.set(this.wrapper, {autoAlpha: 1}), gsap.to(this.wrapper, {
                duration: .35,
                overwrite: !0,
                display: "flex",
                delay: e
            });
            const s = () => {
                const t = this.activePopup.querySelector("[data-popup-focus]");
                t && t.focus && t.focus(), this.animating = !1
            };
            this.animating = !0, this.animations[this.popupOpenAnimation] ? this.animations[this.popupOpenAnimation](this.activePopup, s, e) : gsap.fromTo(this.activePopup, {
                autoAlpha: 0,
                scale: .98,
                display: "block"
            }, {
                duration: .35, autoAlpha: 1, scale: 1, delay: e, onComplete: () => {
                    s()
                }
            }), r.add("_popup-opened"), this.openedClass = "_popup-opened-" + t, r.add(this.openedClass), r.add(n), window.history.pushState({}, "", "#" + t), this.onOpen.call(this.activePopup)
        }

        close(t = !1) {
            if (!this.animating && this.opened) {
                this.opened = !1, this.wrapper.classList.remove("_" + this.activePopupName), this.onCloseStart.call(this.activePopupName), this.popupCloseAnimation = this.activePopup.getAttribute("data-popup-close-animation"), this.activePopupName = "", this.wrapper.classList.add("no-pe"), gsap.to(this.wrapper, {
                    duration: .35,
                    display: "none"
                });
                const e = () => {
                    r.contains("_menu-opened") || r.remove(n), this.animating = !1, this.onClose.call()
                };
                this.animating = !0, this.animations[this.popupCloseAnimation] ? this.animations[this.popupCloseAnimation](this.activePopup, t, e) : gsap.to(this.activePopup, {
                    duration: t ? 0 : .35,
                    autoAlpha: 0,
                    scale: .98,
                    display: "none",
                    onComplete: () => {
                        e()
                    }
                }), r.remove("_popup-opened"), "" !== this.openedClass && (r.remove(this.openedClass), this.openedClass = ""), window.history.pushState("", document.title, window.location.pathname + window.location.search)
            }
        }

        getPopup(t) {
            return this.wrapper.querySelector('[data-popup="' + t + '"]')
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_active";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-sort-list]"), !this.container) return;
            const t = document.querySelectorAll("[data-sort-item]"), e = document.querySelector("[data-sort-btn]"),
                i = document.querySelector("[data-sort-list]");
            t.forEach(t => {
                t.addEventListener("click", () => {
                    i.classList.remove(s), e.classList.remove(s), e.innerText = "Сортировать"
                })
            })
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(1);
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            const t = document.querySelector("[data-fotorama-swiper]");
            if (!t) return;
            const e = document.querySelector("[data-fotorama-thumbs]"), i = t.hasAttribute("data-fotorama-pagination"),
                r = [], n = {}, a = window.innerWidth;
            if (i && a < 741) {
                const e = t.getAttribute("data-fotorama-pagination");
                n.clickable = !0, n.el = t.querySelector(".swiper-pagination"), n.type = e || "bullets", r.push(s.d)
            }
            r.push(s.c), r.push(s.b), r.push(s.e);
            const o = new s.f(e, {
                modules: r,
                loop: !0,
                spaceBetween: 15,
                slidesPerView: 4,
                freeMode: !0,
                watchSlidesProgress: !0
            });
            new s.f(t, {modules: r, loop: !0, pagination: n, thumbs: {swiper: o}})
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_small", r = "_active";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-good-info]"), !this.container) return;
            const t = document.querySelector("[data-price]"), e = document.querySelector("[data-btn-price]");
            this.imagesFotorama = document.querySelectorAll("[data-fotorama-image]"), this.btnsVolumes = document.querySelectorAll("[data-btn-volume]"), this.btnAllNotes = document.querySelector("[data-all-notes]"), this.contentAllNotes = document.querySelector("[data-all-notes-content]"), this.btnDescMore = document.querySelector("[data-more-description]"), this.contentDescMore = document.querySelector("[data-more-description-content]"), this.btnsVolumes.forEach(i => {
                i.addEventListener("click", () => {
                    this.btnsVolumes.forEach(t => {
                        t.classList.remove(r)
                    }), i.classList.add(r), null != i.getAttribute("data-small-volume") ? this.imagesFotorama.forEach(t => {
                        t.classList.add(s)
                    }) : this.imagesFotorama.forEach(t => {
                        t.classList.remove(s)
                    }), function (i) {
                        const s = i.getAttribute("data-volume-price").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        t.innerText = s + " ₽", e.innerText = s + " ₽"
                    }(i), function (t) {
                        const e = t.getAttribute("data-volume");
                        document.querySelector("[data-fix-btn-volume]").innerText = e
                    }(i)
                })
            })
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(2);
    const r = "_active";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            this.container = document.querySelector("[data-notes]"), this.container && (this.texts = this.container.querySelectorAll("[data-note-text]"), this.pictures = this.container.querySelectorAll("[data-note-picture]"), this.activeText = this.texts[0], this.activeText.classList.add(r), this._desktopAnimation = this._desktopAnimation.bind(this), this._mobileAnimation = this._mobileAnimation.bind(this), this.mm = gsap.matchMedia(), this.mm.add("(min-width: 741px)", this._desktopAnimation), this.mm.add("(max-width: 740px)", this._mobileAnimation))
        }

        _desktopAnimation() {
            this.pictures.forEach((t, e) => {
                s.a.create({
                    trigger: t, start: "top 25%", end: "bottom 75%", ease: "power2.out", onEnter: () => {
                        this.activeText.classList.remove(r), this.activeText = this.texts[e], this.activeText.classList.add(r)
                    }, onEnterBack: () => {
                        this.activeText.classList.remove(r), this.activeText = this.texts[e], this.activeText.classList.add(r)
                    }
                })
            })
        }

        _mobileAnimation() {
            const t = gsap.utils.toArray("[data-note-text]");
            this.pictures.forEach((t, e) => {
                s.a.create({
                    trigger: t, start: "top 10%", end: "bottom 40%", ease: "power2.out", onEnter: () => {
                        this.activeText.classList.remove(r), this.activeText = this.texts[e], this.activeText.classList.add(r)
                    }, onEnterBack: () => {
                        this.activeText.classList.remove(r), this.activeText = this.texts[e], this.activeText.classList.add(r)
                    }
                })
            }), gsap.to(t, {
                yPercent: -100 * (t.length - 1),
                scrollTrigger: {
                    trigger: this.container,
                    start: "top top",
                    end: "bottom 40%",
                    scrub: 1,
                    y: 300,
                    duration: 2,
                    ease: "power2.out"
                }
            })
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_visible";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.description = document.querySelector("[data-good-description]"), !this.description) return;
            const t = document.querySelector("[data-good-add-basket]");
            new IntersectionObserver((function (e) {
                e.forEach((function (e) {
                    e.isIntersecting ? t.classList.remove(s) : t.classList.add(s)
                }))
            }), {threshold: .1}).observe(this.description)
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(4), r = i.n(s);
    e.default = new class {
        constructor() {
            document.querySelectorAll("[data-select]").forEach(t => this.init(t))
        }

        init(t) {
            t.select = t.querySelector("[data-native-select]"), r()(t.select)
        }
    }
}, function (t, e) {
    try {
        var i = new window.CustomEvent("test");
        if (i.preventDefault(), !0 !== i.defaultPrevented) throw new Error("Could not prevent default")
    } catch (t) {
        var s = function (t, e) {
            var i, s;
            return e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), s = i.preventDefault, i.preventDefault = function () {
                s.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function () {
                            return !0
                        }
                    })
                } catch (t) {
                    this.defaultPrevented = !0
                }
            }, i
        };
        s.prototype = window.Event.prototype, window.CustomEvent = s
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    e.default = new class {
        constructor() {
            this.buttons = document.querySelectorAll("[data-accordion]"), this.panels = document.querySelectorAll("[data-panel]"), this.resizeObserver = new ResizeObserver(t => {
                t.forEach(t => {
                    t.target.style.maxHeight && (t.target.style.maxHeight = t.target.scrollHeight + "px")
                })
            }), this.buttons.forEach(t => {
                if (t.addEventListener("click", () => this.togglePanel(t.dataset.accordion)), t.classList.contains("_active")) {
                    const e = document.querySelector(`[data-panel="${t.dataset.accordion}"]`);
                    t.classList.add("_active"), e.classList.add("_active"), e.style.maxHeight = e.style.maxHeight ? null : e.scrollHeight + "px"
                }
            }), this.panels.forEach(t => {
                this.resizeObserver.observe(t)
            })
        }

        togglePanel(t) {
            const e = document.querySelector(`[data-accordion="${t}"]`),
                i = document.querySelector(`[data-panel="${t}"]`);
            e.classList.toggle("_active"), i.classList.toggle("_active"), i.style.maxHeight = i.style.maxHeight ? null : i.scrollHeight + "px"
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(4), r = i.n(s);
    e.default = new class {
        constructor() {
            document.querySelectorAll("[data-select-theme]").forEach(t => this.init(t))
        }

        init(t) {
            t.select = t.querySelector("[data-native-select]"), r()(t.select)
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    e.default = new class {
        constructor() {
            this.buttons = document.querySelectorAll("button[data-target]"), this.blocks = document.querySelectorAll("div[data-block]"), this.container = document.querySelector("[data-scroll-container]"), this.widthForScrollActive = 992, this.init()
        }

        init() {
            document.querySelector("[data-page-switcher]") && (this.buttons.forEach(t => {
                t.addEventListener("click", () => this.switchHashByButton(t))
            }), this.handleHashChange(), window.addEventListener("hashchange", () => this.handleHashChange()))
        }

        switchHashByButton(t) {
            const e = t.getAttribute("data-target");
            window.location.hash = e
        }

        switchBlocks(t) {
            this.buttons.forEach(e => {
                const i = e.getAttribute("data-target") === t;
                e.classList.toggle("_active", i)
            }), window.innerWidth <= this.widthForScrollActive && this.scrollToActiveButton(t), this.blocks.forEach(e => {
                const i = e.getAttribute("data-block") === t;
                e.classList.toggle("_active", i)
            })
        }

        handleHashChange() {
            const t = window.location.hash.substring(1);
            this.switchBlocks(t), window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }

        scrollToActiveButton(t) {
            const e = document.querySelector(`[data-target = ${t}]`), i = this.container.offsetWidth,
                s = e.offsetLeft - (i - e.offsetWidth) / 2;
            this.container.scrollTo({
                left: s,
                behavior: "smooth"
            }), e.classList.contains("_last-link") && setTimeout(() => this.container.scrollTo({
                left: this.container.scrollWidth,
                behavior: "smooth"
            }), 500)
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = document.querySelector("[data-filter-btns]"), r = document.querySelector("[data-sort-btn]"),
        n = document.querySelector("[data-sort-list]");
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            s && (r.addEventListener("click", () => {
                n.classList.toggle("_active"), r.classList.toggle("_active"), r.classList.contains("_active") ? r.innerText = r.getAttribute("data-sort-btn-close-text") : r.innerText = r.getAttribute("data-sort-btn-text")
            }), document.addEventListener("click", t => {
                t.composedPath().includes(n) || t.composedPath().includes(r) || (n.classList.remove("_active"), r.classList.remove("_active"))
            }))
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_active", r = "_open";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-filter]"), !this.container) return;
            this.clearButton = document.querySelector("[data-filter-clear]"), this.applyButton = document.querySelector("[data-filter-apply]"), this.filterCloseButton = document.querySelector("[data-filter-closer-cross]"), this.filterButton = document.querySelector("[data-filter-btn]"), this.filterItems = document.querySelectorAll("[data-filter-item]"), this.goods = document.querySelectorAll("[data-good]"), this.elemCounters = document.querySelectorAll("[data-filter-counter]"), this.filterBlocks = document.querySelectorAll("[data-filter-block]"), this.filterBtns = document.querySelector("[data-filter-btns]"), this.checkboxes = document.querySelectorAll("[data-filter-checkbox]"), this.counter = 0, this.reset = this.reset.bind(this), this.filterItems.forEach(t => {
                const e = t.querySelector("[data-filter-checkbox]");
                e.addEventListener("click", i => {
                    i.stopPropagation(), !0 === e.checked ? (t.classList.add(s), this.counter++) : (t.classList.remove(s), this.counter--), this.elemCounters.forEach(t => {
                        t.innerText = `(${this.counter})`
                    }), this.clearButton.classList.add(s), 0 === this.counter && (this.clearButton.classList.remove(s), this.elemCounters.forEach(t => {
                        t.innerText = ""
                    }))
                }), this.clearButton.addEventListener("click", this.reset)
            }), this.filterBlocks.forEach(t => {
                this.dropdownBtn = t.querySelector("[data-arrow-down]"), this.dropdownBtn.addEventListener("click", () => {
                    t.classList.toggle(r)
                })
            }), document.addEventListener("click", t => {
                t.composedPath().includes(this.filterBtns) || t.composedPath().includes(this.container) || t.composedPath().includes(this.filterButton) || this.reset()
            });
            this.filterCloseButton.addEventListener("click", () => {
                this.reset()
            })
        }

        reset() {
            this.filters = [], this.filterItems.forEach(t => {
                t.classList.remove(s)
            }), this.checkboxes.forEach(t => {
                t.checked = !1
            }), this.filterBlocks.forEach(t => {
                t.classList.remove(r)
            }), this.elemCounters.forEach(t => {
                t.innerText = ""
            }), this.counter = 0, this.clearButton.classList.remove(s)
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(0);
    const r = "_disabled";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            this.container = document.querySelector("[data-cart]"), this.container && (this.goodsList = this.container.querySelector("[data-cart-goods]"), this.minusButtons = this.container.querySelectorAll("[data-counter-minus]"), this.plusButtons = this.container.querySelectorAll("[data-counter-plus]"), this.deleteButtons = this.container.querySelectorAll("[data-good-delete]"), this.submitButton = this.container.querySelector("[data-next-step]"), this.addButtons = document.querySelectorAll("[data-good-add]"), this.onPlusButtonClick = new s.default, this.onMinusButtonClick = new s.default, this.onDeleteItem = new s.default, this.onAddItem = new s.default, this._onPlusBtnClick = this._onPlusBtnClick.bind(this), this._onMinusBtnClick = this._onMinusBtnClick.bind(this), this._onRemoveBtnClick = this._onRemoveBtnClick.bind(this), this._onAddBtnClick = this._onAddBtnClick.bind(this), this.minusButtons.forEach(t => t.addEventListener("click", this._onMinusBtnClick)), this.plusButtons.forEach(t => t.addEventListener("click", this._onPlusBtnClick)), this.deleteButtons.forEach(t => t.addEventListener("click", this._onRemoveBtnClick)), this.addButtons.forEach(t => t.addEventListener("click", this._onAddBtnClick)), this._initQtyInputValidate(), this.updateSubmitBtn())
        }

        _onPlusBtnClick(t) {
            t.preventDefault(), this.updateSubmitBtn(), this.onPlusButtonClick.call(t)
        }

        _onMinusBtnClick(t) {
            t.preventDefault(), this.updateSubmitBtn(), this.onMinusButtonClick.call(t)
        }

        _onAddBtnClick(t) {
            t.preventDefault(), this.updateSubmitBtn(), this.onAddItem.call(t)
        }

        _onRemoveBtnClick(t) {
            t.preventDefault(), this.updateSubmitBtn(), this.onDeleteItem.call(t)
        }

        _initQtyInputValidate() {
            document.querySelectorAll("[data-cart-input]").forEach(t => {
                t.addEventListener("keypress", e => {
                    const i = String.fromCharCode(e.which);
                    return ("" === i || i.match(/^[1-9]\d*$/) || 0 !== t.value.length) && !("" !== i && !i.match(/^[0-9]\d*$/)) || (e.preventDefault(), !1)
                }), t.addEventListener("input", () => {
                    0 === t.value.length && (t.value = 1)
                })
            })
        }

        updateSubmitBtn() {
            this.goodsList.querySelectorAll("[data-cart-item]").length > 0 && this.submitButton.classList.remove(r)
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_invalid", r = "_active";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-subscription]"), !this.container) return;
            const t = this.container.querySelector("[data-subscription-caption]");
            this.subscribeEmail = this.container.querySelector("[data-subscription-email]"), this.subscribeResult = document.querySelector("[data-subscription-result]"), this.reset = this.reset.bind(this), this.submit = this.submit.bind(this), this.submitBtn = document.querySelector("[data-subscription-submit]");
            const e = this.subscribeEmail.placeholder,
                i = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                n = t.getAttribute("data-error");

            function a(t) {
                return i.test(t)
            }

            this.onChangeValidate = function () {
                a(this.subscribeEmail.value) ? (t.classList.remove(s), this.subscribeEmail.classList.remove(s), t.classList.add(r), t.innerText = e) : (this.subscribeEmail.classList.add(s), t.classList.remove(r), t.classList.add(s), t.innerText = n)
            }.bind(this), this.onInput = function () {
                this.submitBtn.disabled = !1, 0 === this.subscribeEmail.value.length && (this.submitBtn.disabled = !0)
            }.bind(this), this.onFocusCaption = function () {
                t.classList.add(r), this.subscribeEmail.placeholder = ""
            }.bind(this), this.subscribeEmail.addEventListener("change", this.onChangeValidate), this.subscribeEmail.addEventListener("focus", this.onFocusCaption), this.subscribeEmail.addEventListener("input", this.onInput), this.subscribeEmail.addEventListener("focusout", i => {
                this.subscribeEmail.contains(i.relatedTarget) || 0 === this.subscribeEmail.value.length && (this.subscribeEmail.placeholder = e, t.classList.remove(s), this.subscribeEmail.classList.remove(s), t.innerText = e, t.classList.remove(r))
            }), this.container.addEventListener("submit", e => {
                e.preventDefault(), a(this.subscribeEmail.value) ? this.submit() : (this.subscribeEmail.classList.add(s), t.classList.remove(r), t.classList.add(s), t.innerText = n)
            })
        }

        submit() {
            (async () => {
                try {
                    const t = "";
                    (await fetch(t, {method: "POST", body: new FormData(this.container)})).ok && this.reset()
                } catch (t) {
                    console.log(t)
                }
            })()
        }

        reset() {
            this.subscribeEmail.value = "", this.container.style.display = "none", this.subscribeResult.style.display = "block"
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    const s = "_open", r = "_inactive", n = "_active", a = "_initial", o = "_invalid";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-checkout]"), !this.container) return;
            this.setDelivery = this.setDelivery.bind(this), this.goodList = document.querySelector("[data-checkout-goods]"), this.goodItem = document.querySelector("[data-checkout-good]"), this.amountPriceElems = document.querySelectorAll("[data-checkout-amount]"), this.deliveryElems = document.querySelectorAll("[data-checkout-delivery]"), this.CheckoutDropdown = document.querySelector("[data-checkout-dropdown]"), this.countriesDelivery = document.querySelectorAll("[data-country-delivery]"), this.countryUnavailable = document.querySelector("[data-country-unavailable]"), this.selectContainer = document.querySelector("[data-select-country]"), this.selectOptions = this.selectContainer.querySelectorAll(".custom-select-option"), this.btnExpand = document.querySelector("[data-checkout-btn-expand]"), this.btnCollapse = document.querySelector("[data-checkout-btn-collapse]");
            this.btnExpand.addEventListener("click", () => {
                this.CheckoutDropdown.classList.add(s), this.btnExpand.parentNode.classList.remove(s)
            }), this.btnCollapse.addEventListener("click", () => {
                this.CheckoutDropdown.classList.remove(s), this.btnExpand.parentNode.classList.add(s)
            }), this.selectOptions.forEach(t => {
                t.addEventListener("click", () => {
                    this.selectedCountry = t.textContent, this.setDelivery()
                })
            })
        }

        setDelivery() {
            this.selectContainer.classList.contains(a) && this.selectContainer.classList.remove(a);
            for (const t of this.countriesDelivery) {
                if (t.textContent === this.selectedCountry) {
                    this.countryUnavailable.classList.remove(n), this.deliveryElems.forEach(e => {
                        e.parentNode.classList.remove(r);
                        const i = t.getAttribute("data-country-price") || 0;
                        e.innerText = i + " ₽", e.setAttribute("data-checkout-delivery", "active")
                    }), this.checkoutInputs = this.container.querySelectorAll("[data-checkout-form-input][required]"), this.submitBtn = document.querySelector("[data-checkout-form-submit]");
                    Array.from(this.checkoutInputs).every(t => 0 !== t.value.length && !t.classList.contains(o)) && !this.countryUnavailable.classList.contains("_active") ? this.submitBtn.removeAttribute("disabled") : this.submitBtn.setAttribute("disabled", !0);
                    break
                }
                this.countryUnavailable.classList.add(n), this.deliveryElems.forEach(t => {
                    t.parentNode.classList.add(r), t.innerText = t.getAttribute("data-checkout-delivery-unavailable"), t.setAttribute("data-checkout-delivery", "inactive")
                })
            }
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(3), r = i(0);
    const n = "_invalid", a = "_active";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-checkout-forms]"), !this.container) return;
            this.form = this.container.querySelector("[data-checkout-form]");
            const t = this.container.querySelectorAll("[data-checkout-form-caption]"),
                e = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

            function i(t) {
                return e.test(t)
            }

            this.select = this.container.querySelector("[data-select-country]"), this.nativeSelect = this.container.querySelector("[data-native-select]"), this.checkoutInputs = this.container.querySelectorAll("[data-checkout-form-input]"), this.checkoutInputsRequireds = this.container.querySelectorAll("[data-checkout-form-input][required]"), this.selectOptions = this.select.querySelectorAll(".custom-select-option"), this.reset = this.reset.bind(this), this.submit = this.submit.bind(this), this.submitBtn = document.querySelector("[data-checkout-form-submit]"), this.countryUnavailable = document.querySelector("[data-country-unavailable]"), this.onCountryChange = new r.default, this.nativeSelect.addEventListener("change", t => {
                this.onInputDis(), this.onCountryChange.call(t)
            }), this.checkoutInputs.forEach((e, r) => {
                const o = e.getAttribute("data-checkout-form-input"), l = t[r].getAttribute("data-error");
                e.hasAttribute("data-checkout-tel") && Object(s.a)(e, {
                    mask: Number,
                    scale: 0
                }), e.hasAttribute("data-checkout-letters-numbers") && Object(s.a)(e, {
                    mask: /^[A-Za-z0-9]+$/,
                    scale: 0
                }), e.addEventListener("focus", (function () {
                    t[r].classList.add(a), e.placeholder = ""
                })), e.addEventListener("blur", () => {
                    0 === e.value.length && (e.placeholder = o, t[r].classList.remove(n), e.classList.remove(n), t[r].innerText = o, t[r].classList.remove(a))
                }), this.onChangeValidate = function () {
                    const s = t[r].getAttribute("data-error-required");
                    this.form.setAttribute("data-checkout-form-error", "false"), 0 === e.value.length && e.hasAttribute("data-required") ? (e.classList.add(n), t[r].classList.remove(a), t[r].classList.add(n), t[r].innerHTML = s) : (e.classList.remove(n), t[r].classList.add(a), t[r].classList.remove(n), t[r].innerHTML = o, this.form.setAttribute("data-checkout-form-error", "true")), "email" === e.type && (i(e.value) || (e.classList.add(n), t[r].classList.remove(a), t[r].classList.add(n), t[r].innerHTML = s + "<br>" + l, this.form.setAttribute("data-checkout-form-error", "true"))), "email" === e.type && (i(e.value) ? (t[r].classList.remove(n), e.classList.remove(n), t[r].classList.add(a), t[r].innerText = o) : (e.classList.add(n), t[r].classList.remove(a), t[r].classList.add(n), t[r].innerText = l))
                }.bind(this), e.addEventListener("change", this.onChangeValidate), this.onInput = function () {
                    0 === !e.value.length && (e.classList.remove(n), t[r].classList.add(a), t[r].classList.remove(n), t[r].innerText = o)
                }.bind(this), e.addEventListener("input", this.onInput)
            }), this.onInputDis = function () {
                this.submitBtn.setAttribute("disabled", !0), Array.from(this.checkoutInputsRequireds).every(t => 0 !== t.value.length && !t.classList.contains(n)) && !this.countryUnavailable.classList.contains(a) ? this.submitBtn.removeAttribute("disabled") : this.submitBtn.setAttribute("disabled", !0)
            }.bind(this), this.checkoutInputs.forEach(t => {
                t.addEventListener("input", this.onInputDis), t.addEventListener("change", this.onInputDis)
            }), this.selectOptions.forEach(t => {
                t.addEventListener("click", () => {
                    this.select.classList.add(a)
                }, {once: !0})
            }), this.form.addEventListener("submit", t => {
                t.preventDefault(), this.submit()
            })
        }

        submit() {
            (async () => {
                try {
                    const t = this.form.getAttribute("action");
                    (await fetch(t, {method: "POST", body: new FormData(this.form)})).ok && this.reset()
                } catch (t) {
                    console.log(t)
                }
            })()
        }

        reset() {
            const t = this.container.querySelectorAll("[data-checkout-form-caption]");
            this.checkoutInputs.forEach((e, i) => {
                const s = e.getAttribute("data-checkout-form-input");
                e.value = "", e.placeholder = s, e.classList.remove(n), t[i].classList.remove(a), t[i].classList.remove(n), this.onInputDis()
            })
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(0);
    const r = "_invalid", n = "_active", a = "_inactive";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            this.container = document.querySelector("[data-promocode]"), this.container && (this.caption = this.container.querySelector("[data-promocode-caption]"), this.input = this.container.querySelector("[data-promocode-input]"), this.discount = document.querySelector("[data-checkout-discount]"), this.promocodeSuccess = this.caption.getAttribute("data-promocode-caption"), this.errorText = this.caption.getAttribute("data-promocode-error"), this.onInput = new s.default, this._onInputInput = this._onInputInput.bind(this), this.input.addEventListener("input", this._onInputInput))
        }

        _onInputInput(t) {
            !t.target.value && this.showDefaultState(), this.onInput.call(t)
        }

        showDefaultState() {
            this.input.value = "", this.input.classList.remove(n), this.caption.classList.remove(n), this.caption.classList.remove(r), this.input.classList.remove(r), this.discount.setAttribute = "inactive", this.discount.parentNode.classList.add(a)
        }

        showOkState() {
            this.caption.classList.remove(r), this.input.classList.remove(r), this.caption.classList.add(n), this.input.classList.add(n), this.caption.innerText = this.promocodeSuccess, this.discount.setAttribute = "active", this.discount.parentNode.classList.remove(a)
        }

        showErrorState() {
            this.input.classList.remove(n), this.input.classList.add(r), this.caption.classList.remove(n), this.caption.classList.add(r), this.caption.innerText = this.errorText, this.discount.setAttribute = "inactive", this.discount.parentNode.classList.add(a)
        }
    }
}, function (t, e, i) {
    "use strict";

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (n = r.key, a = void 0, a = function (t, e) {
                if ("object" !== s(t) || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var r = i.call(t, e || "default");
                    if ("object" !== s(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(n, "string"), "symbol" === s(a) ? a : String(a)), r)
        }
        var n, a
    }

    i.r(e);
    var n = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.init()
        }

        var e, i, s;
        return e = t, (i = [{
            key: "init", value: function () {
                var t, e, i = this;
                if (this.container = document.querySelector('[data-map="ya"]'), this.longitude = null === (t = this.container) || void 0 === t ? void 0 : t.getAttribute("data-longitude"), this.latitude = null === (e = this.container) || void 0 === e ? void 0 : e.getAttribute("data-latitude"), this.container && this.longitude && this.latitude) {
                    var s = [this.latitude, this.longitude];
                    ymaps.ready((function () {
                        var t = new ymaps.Map(i.container, {center: s, zoom: 16}), e = new ymaps.Placemark(s, {}, {
                            iconLayout: "default#image",
                            iconImageHref: "assets/images/shops/shops-map-icon.svg",
                            iconImageSize: [50, 50]
                        });
                        t.geoObjects.add(e), t.behaviors.disable("scrollZoom")
                    }))
                }
            }
        }]) && r(e.prototype, i), s && r(e, s), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    e.default = new n
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(3);
    const r = "_invalid", n = "_active";
    e.default = new class {
        constructor() {
            this.init()
        }

        init() {
            if (this.container = document.querySelector("[data-contacts-forms]"), !this.container) return;
            this.form = this.container.querySelector("[data-contacts-form]");
            const t = this.container.querySelectorAll("[data-contacts-form-caption]"),
                e = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

            function i(t) {
                return e.test(t)
            }

            this.select = this.container.querySelector("[data-select-theme]"), this.nativeSelect = this.container.querySelector("[data-native-select]"), this.contactsInputs = this.container.querySelectorAll("[data-contacts-form-input]"), this.contactsInputsRequire = this.container.querySelectorAll("[data-contacts-form-require]"), this.selectOptions = this.select.querySelectorAll(".custom-select-option"), this.selectOpener = this.select.querySelectorAll(".custom-select-opener"), this.reset = this.reset.bind(this), this.submit = this.submit.bind(this), this.submitBtn = document.querySelector("[data-contacts-form-submit]"), this.contactsInputs.forEach((e, a) => {
                const o = e.getAttribute("data-contacts-form-input"), l = t[a].getAttribute("data-error");
                e.hasAttribute("data-contacts-letters") && Object(s.a)(e, {
                    mask: /^([а-яё\s]+|[a-z\s]+)$/,
                    scale: 0
                }), e.hasAttribute("data-contacts-letters-numbers") && Object(s.a)(e, {
                    mask: /^[A-Za-z0-9]+$/,
                    scale: 0
                }), e.hasAttribute("data-contacts-tel") && Object(s.a)(e, {
                    mask: "+{7}(000)000-00-00",
                    scale: 0
                }), e.addEventListener("focus", (function () {
                    t[a].classList.add(n), e.classList.add(n), e.placeholder = ""
                })), e.addEventListener("focusout", i => {
                    e.contains(i.relatedTarget) || 0 === e.value.length && (e.placeholder = o, t[a].classList.remove(r), e.classList.remove(r), e.classList.remove(n), t[a].innerText = o, t[a].classList.remove(n))
                }), this.onChangeValidate = function () {
                    "email" === e.type && (i(e.value) ? (t[a].classList.remove(r), e.classList.remove(r), t[a].classList.add(n), t[a].innerText = o) : (e.classList.add(r), t[a].classList.remove(n), t[a].classList.add(r), t[a].innerText = l))
                }.bind(this), e.addEventListener("change", this.onChangeValidate), this.onInput = function () {
                    0 === !e.value.length && (e.classList.remove(r), t[a].classList.add(n), t[a].classList.remove(r), t[a].innerText = o)
                }.bind(this), e.addEventListener("input", this.onInput)
            }), this.onInputDis = function () {
                let t = !0;
                const e = this.nativeSelect.options[this.nativeSelect.selectedIndex];
                this.contactsInputsRequire.forEach(i => {
                    0 !== i.value.length ? e.hasAttribute("data-default-value") && (t = !1) : t = !1
                }), this.submitBtn.disabled = !t
            }.bind(this), this.contactsInputsRequire.forEach(t => {
                t.addEventListener("input", this.onInputDis)
            }), this.nativeSelect.addEventListener("change", this.onInputDis), this.selectOptions.forEach(t => {
                t.addEventListener("click", () => {
                    this.select.classList.add(n)
                }, {once: !0})
            }), this.form.onsubmit = e => {
                e.preventDefault(), this.contactsInputs.forEach((e, s) => {
                    const a = e.getAttribute("data-contacts-form-input"), o = t[s].getAttribute("data-error"),
                        l = t[s].getAttribute("data-error-required");
                    this.form.setAttribute("data-contacts-form-error", "false"), 0 === e.value.length && e.hasAttribute("data-required") ? (e.classList.add(r), t[s].classList.remove(n), t[s].classList.add(r), t[s].innerHTML = l) : (e.classList.remove(r), t[s].classList.add(n), t[s].classList.remove(r), t[s].innerHTML = a, this.form.setAttribute("data-contacts-form-error", "true")), "email" === e.type && (i(e.value) || (e.classList.add(r), t[s].classList.remove(n), t[s].classList.add(r), t[s].innerHTML = l + "<br>" + o, this.form.setAttribute("data-contacts-form-error", "true")))
                }), "true" === this.form.getAttribute("data-contacts-form-error") && (this.submit(), this.reset())
            }
        }

        submit() {
            (async () => {
                try {
                    const t = "";
                    (await fetch(t, {method: "POST", body: new FormData(this.form)})).ok && this.reset()
                } catch (t) {
                    console.log(t)
                }
            })()
        }

        reset() {
            const t = this.container.querySelectorAll("[data-contacts-form-caption]");
            this.contactsInputs.forEach((e, i) => {
                const s = e.getAttribute("data-contacts-form-input");
                e.value = "", e.placeholder = s, e.classList.remove(r), t[i].classList.remove(n), t[i].classList.remove(r)
            }), this.submitBtn.disabled = !0
        }
    }
}, function (t, e, i) {
    "use strict";
    i.r(e), function (t) {
        var s = i(2), r = i(1);
        t.gsap = gsap;
        e.default = new class {
            constructor() {
                this.init()
            }

            init() {
                this.container = document.querySelector("[data-brand-mission]"), this.container && (this.brandTitle = this.container.querySelector("[data-brand-mission-title]"), s.a.create({
                    trigger: this.brandTitle,
                    start: "top center",
                    onToggle: () => this.brandTitle.lottieAnimation.play()
                }), this.initSlider())
            }

            initSlider() {
                const t = document.querySelector(".brand-mission__slider"), e = new r.f(t, {
                    slidesPerView: "auto",
                    breakpoints: {
                        320: {spaceBetween: 95, centeredSlides: !0},
                        825: {centeredSlides: !1},
                        1024: {spaceBetween: 65}
                    }
                }), i = () => window.innerWidth - this.brandTitle.offsetWidth - 15, s = () => {
                    gsap.to(this.brandTitle, {x: i() * e.progress, duration: .5})
                };
                e.on("sliderMove", s), e.on("touchEnd", () => {
                    gsap.delayedCall(.1, () => {
                        gsap.to(this.brandTitle, {x: i() * e.progress, duration: .5})
                    })
                }), e.on("resize", () => {
                    s()
                })
            }
        }
    }.call(this, i(6))
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(2);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, (n = s.key, a = void 0, a = function (t, e) {
                if ("object" !== r(t) || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var s = i.call(t, e || "default");
                    if ("object" !== r(s)) return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(n, "string"), "symbol" === r(a) ? a : String(a)), s)
        }
        var n, a
    }

    var a = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.init()
        }

        var e, i, r;
        return e = t, (i = [{
            key: "init", value: function () {
                this.container = document.querySelector("[data-parallax-image-block]"), this.container && (gsap.registerPlugin(s.a), gsap.defaults({
                    ease: "none",
                    duration: 4
                }), this.img = this.container.querySelector("img"), this.container.hasAttribute("data-double-parallax") ? this.start = "-20%" : this.start = "0", this._desktopAnimation = this._desktopAnimation.bind(this), this._mobileAnimation = this._mobileAnimation.bind(this), this.mm = gsap.matchMedia(), this.mm.add("(min-width: 741px)", this._desktopAnimation), this.mm.add("(max-width: 740px)", this._mobileAnimation))
            }
        }, {
            key: "_desktopAnimation", value: function () {
                gsap.fromTo(this.img, {top: this.start}, {
                    top: "20%",
                    scrollTrigger: {
                        trigger: this.container,
                        start: "top=-500px top",
                        end: "bottom top",
                        scrub: !0,
                        fastScrollEnd: 3e3
                    }
                })
            }
        }, {
            key: "_mobileAnimation", value: function () {
                gsap.fromTo(this.img, {top: 0}, {
                    top: "20%",
                    scrollTrigger: {
                        trigger: this.container,
                        start: "top top",
                        end: "bottom top",
                        scrub: !0,
                        fastScrollEnd: 3e3
                    }
                })
            }
        }]) && n(e.prototype, i), r && n(e, r), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    e.default = new a
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i(8), r = i.n(s);

    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, (r = s.key, a = void 0, a = function (t, e) {
                if ("object" !== n(t) || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var s = i.call(t, e || "default");
                    if ("object" !== n(s)) return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(r, "string"), "symbol" === n(a) ? a : String(a)), s)
        }
        var r, a
    }

    var o = function () {
        function t() {
            var e = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), document.querySelectorAll("[data-lottie-animation]").forEach((function (t) {
                e.initPlayer(t, t.getAttribute("data-lottie-animation")), t.lottieAnimation = e
            }))
        }

        var e, i, s;
        return e = t, (i = [{
            key: "initPlayer", value: function (t, e) {
                this.player = r.a.loadAnimation({container: t, renderer: "svg", loop: !1, autoplay: !1, path: e})
            }
        }, {
            key: "play", value: function () {
                this.player.play()
            }
        }]) && a(e.prototype, i), s && a(e, s), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    e.default = new o
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(this, {})
}]);