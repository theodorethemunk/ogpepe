! function() {
    var e = {
            775: function(e) {
                let n;
                window._tkq = window._tkq || [];
                const t = console.error;
                const o = {
                    initialize: function(e, n) {
                        o.setUser(e, n), o.identifyUser()
                    },
                    mc: {
                        bumpStat: function(e, n) {
                            const t = function(e, n) {
                                let t = "";
                                if ("object" == typeof e)
                                    for (const n in e) t += "&x_" + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
                                else t = "&x_" + encodeURIComponent(e) + "=" + encodeURIComponent(n);
                                return t
                            }(e, n);
                            (new Image).src = document.location.protocol + "//pixel.wp.com/g.gif?v=wpcom-no-pv" + t + "&t=" + Math.random()
                        }
                    },
                    tracks: {
                        recordEvent: function(e, n) {
                            n = n || {}, 0 === e.indexOf("jetpack_") ? window._tkq.push(["recordEvent", e, n]) : t('- Event name must be prefixed by "jetpack_"')
                        },
                        recordPageView: function(e) {
                            o.tracks.recordEvent("jetpack_page_view", {
                                path: e
                            })
                        }
                    },
                    setUser: function(e, t) {
                        n = {
                            ID: e,
                            username: t
                        }
                    },
                    identifyUser: function() {
                        n && window._tkq.push(["identifyUser", n.ID, n.username])
                    },
                    clearedIdentity: function() {
                        window._tkq.push(["clearIdentity"])
                    }
                };
                e.exports = o
            }
        },
        n = {};
    var t = function t(o) {
        var r = n[o];
        if (void 0 !== r) return r.exports;
        var i = n[o] = {
            exports: {}
        };
        return e[o](i, i.exports, t), i.exports
    }(775);
    window.analytics = t
}();