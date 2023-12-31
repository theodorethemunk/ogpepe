! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((n = n || self).BlobGenerator = {})
}(this, function(n) {
    "use strict";

    function a(n) {
        return {
            x: n.x,
            y: n.y,
            handleIn: t({}, n.handleIn),
            handleOut: t({}, n.handleOut)
        }
    }

    function r(e, r) {
        for (var n = function(n) {
                function t(n) {
                    return a(e[u(n, e.length)])
                }
                r({
                    curr: a(e[n]),
                    index: n,
                    sibling: t,
                    prev: function() {
                        return t(n - 1)
                    },
                    next: function() {
                        return t(n + 1)
                    }
                })
            }, t = 0; t < e.length; t++) n(t)
    }

    function c(n, t) {
        var e = [];
        return r(n, function(n) {
            e.push(t(n))
        }), e
    }

    function o(n, t) {
        return {
            x: n.x + t.length * Math.cos(t.angle),
            y: n.y + t.length * Math.sin(t.angle)
        }
    }

    function l(n, t, e) {
        var r = typeof t;
        if (!e.includes(r)) throw '(BlobGenerator) "' + n + '" should have type "' + e.join("|") + '" but was "' + r + '".'
    }

    function i(n) {
        var t, e, r, a, u, o, h = (t = String(n.seed), o = function(n) {
            for (var t = 2166136261, e = 0; e < n.length; e++) t = Math.imul(t ^ n.charCodeAt(e), 16777619);
            return function() {
                return t += t << 13, t ^= t >>> 7, t += t << 3, t ^= t >>> 17, (t += t << 5) >>> 0
            }
        }(t), e = o(), r = o(), a = o(), u = o(), function() {
            var n = (e >>>= 0) + (r >>>= 0) | 0;
            return e = r ^ r >>> 9, r = (a >>>= 0) + (a << 3) | 0, a = (a = a << 21 | a >>> 11) + (n = n + (u = 1 + (u >>>= 0) | 0) | 0) | 0, (n >>> 0) / 4294967296
        });
        l("blobOptions", n, ["object"]), l("seed", n.seed, ["string", "number"]), l("extraPoints", n.extraPoints, ["number"]), l("randomness", n.randomness, ["number"]), l("size", n.size, ["number"]);
        var f = 1 / (1 + Math.abs(n.randomness) / 10),
            i = function(n) {
                for (var t = 2 * Math.PI / n, e = [], r = 0; r < n; r++) {
                    var a = (f + h() * (1 - f)) / 2,
                        u = Math.sin(r * t),
                        o = Math.cos(r * t);
                    e.push({
                        x: .5 + u * a,
                        y: .5 + o * a,
                        handleIn: {
                            angle: 0,
                            length: 0
                        },
                        handleOut: {
                            angle: 0,
                            length: 0
                        }
                    })
                }
                var s, i = 4 / 3 * Math.tan(t / 4) / Math.sin(t / 2) / 2;
                return s = i, c(e, function(n) {
                    var t, e, r, a, u, o = n.curr,
                        i = n.next,
                        h = n.prev,
                        f = (t = h(), r = (e = i()).x - t.x, a = -e.y + t.y, (u = Math.atan2(a, r)) < 0 ? Math.abs(u) : 2 * Math.PI - u);
                    return {
                        x: o.x,
                        y: o.y,
                        handleIn: {
                            angle: f + Math.PI,
                            length: s * d(o, h())
                        },
                        handleOut: {
                            angle: f,
                            length: s * d(o, i())
                        }
                    }
                })
            }(3 + Math.abs(n.extraPoints)),
            s = Math.abs(n.size);
        return c(i, function(n) {
            var t = n.curr;
            return t.x *= s, t.y *= s, t.handleIn.length *= s, t.handleOut.length *= s, t
        })
    }
    var t = function() {
            return (t = Object.assign || function(n) {
                for (var t, e = 1, r = arguments.length; e < r; e++)
                    for (var a in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
                return n
            }).apply(this, arguments)
        },
        u = function(n, t) {
            return (n % t + t) % t
        },
        d = function(n, t) {
            return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
        };
    n.canvasPath = function(n, e) {
        return void 0 === e && (e = {}), t = c(i(n), function(n) {
            var t = n.curr;
            return t.x += e.offsetX || 0, t.y += e.offsetY || 0, t
        }), (u = new Path2D).moveTo(t[0].x, t[0].y), r(t, function(n) {
            var t = n.curr,
                e = (0, n.next)(),
                r = o(t, t.handleOut),
                a = o(e, e.handleIn);
            u.bezierCurveTo(r.x, r.y, a.x, a.y, e.x, e.y)
        }), u;
        var t, u
    }, n.svgPath = function(n) {
        return t = i(n), u = "M" + t[0].x + "," + t[0].y, r(t, function(n) {
            var t = n.curr,
                e = (0, n.next)(),
                r = o(t, t.handleOut),
                a = o(e, e.handleIn);
            u += "C" + r.x + "," + r.y + "," + a.x + "," + a.y + "," + e.x + "," + e.y
        }), u;
        var t, u
    }, Object.defineProperty(n, "__esModule", {
        value: !0
    })
});