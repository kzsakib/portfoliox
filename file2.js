(self.webpackChunk = self.webpackChunk || []).push([
  ["617"],
  {
    9904: function () {
      "use strict";
      !(function () {
        if ("undefined" == typeof window) return;
        let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          t = !!e && parseInt(e[1], 10) >= 16;
        if ("objectFit" in document.documentElement.style != !1 && !t) {
          window.objectFitPolyfill = function () {
            return !1;
          };
          return;
        }
        let n = function (e) {
            let t = window.getComputedStyle(e, null),
              n = t.getPropertyValue("position"),
              i = t.getPropertyValue("overflow"),
              a = t.getPropertyValue("display");
            (n && "static" !== n) || (e.style.position = "relative"),
              "hidden" !== i && (e.style.overflow = "hidden"),
              (a && "inline" !== a) || (e.style.display = "block"),
              0 === e.clientHeight && (e.style.height = "100%"),
              -1 === e.className.indexOf("object-fit-polyfill") &&
                (e.className += " object-fit-polyfill");
          },
          i = function (e) {
            let t = window.getComputedStyle(e, null),
              n = {
                "max-width": "none",
                "max-height": "none",
                "min-width": "0px",
                "min-height": "0px",
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                "margin-top": "0px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px",
              };
            for (let i in n)
              t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i]);
          },
          a = function (e) {
            let t = e.parentNode;
            n(t),
              i(e),
              (e.style.position = "absolute"),
              (e.style.height = "100%"),
              (e.style.width = "auto"),
              e.clientWidth > t.clientWidth
                ? ((e.style.top = "0"),
                  (e.style.marginTop = "0"),
                  (e.style.left = "50%"),
                  (e.style.marginLeft = -(e.clientWidth / 2) + "px"))
                : ((e.style.width = "100%"),
                  (e.style.height = "auto"),
                  (e.style.left = "0"),
                  (e.style.marginLeft = "0"),
                  (e.style.top = "50%"),
                  (e.style.marginTop = -(e.clientHeight / 2) + "px"));
          },
          r = function (e) {
            if (void 0 === e || e instanceof Event)
              e = document.querySelectorAll("[data-object-fit]");
            else if (e && e.nodeName) e = [e];
            else if ("object" != typeof e || !e.length || !e[0].nodeName)
              return !1;
            for (let n = 0; n < e.length; n++) {
              if (!e[n].nodeName) continue;
              let i = e[n].nodeName.toLowerCase();
              if ("img" === i) {
                if (t) continue;
                e[n].complete
                  ? a(e[n])
                  : e[n].addEventListener("load", function () {
                      a(this);
                    });
              } else
                "video" === i
                  ? e[n].readyState > 0
                    ? a(e[n])
                    : e[n].addEventListener("loadedmetadata", function () {
                        a(this);
                      })
                  : a(e[n]);
            }
            return !0;
          };
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", r)
          : r(),
          window.addEventListener("resize", r),
          (window.objectFitPolyfill = r);
      })();
    },
    1724: function () {
      "use strict";
      function e(e) {
        Webflow.env("design") ||
          ($("video").each(function () {
            e && $(this).prop("autoplay") ? this.play() : this.pause();
          }),
          $(".w-background-video--control").each(function () {
            e ? n($(this)) : t($(this));
          }));
      }
      function t(e) {
        e.find("> span").each(function (e) {
          $(this).prop("hidden", () => 0 === e);
        });
      }
      function n(e) {
        e.find("> span").each(function (e) {
          $(this).prop("hidden", () => 1 === e);
        });
      }
      "undefined" != typeof window &&
        $(document).ready(() => {
          let i = window.matchMedia("(prefers-reduced-motion: reduce)");
          i.addEventListener("change", (t) => {
            e(!t.matches);
          }),
            i.matches && e(!1),
            $("video:not([autoplay])").each(function () {
              $(this)
                .parent()
                .find("")
                .each(function () {
                  t($(this));
                });
            }),
            $(document).on(
              "click",
              ".w-background-video--control",
              function (e) {
                if (Webflow.env("design")) return;
                let i = $(e.currentTarget),
                  a = $(`video#${i.attr("aria-controls")}`).get(0);
                if (a)
                  if (a.paused) {
                    let e = a.play();
                    n(i),
                      e &&
                        "function" == typeof e.catch &&
                        e.catch(() => {
                          t(i);
                        });
                  } else a.pause(), t(i);
              }
            );
        });
    },
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new F.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            q.test(e) || !K.test(e)
              ? (i = parseInt(e, 10))
              : K.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          H.debug && window && window.console.warn(e);
        }
        var s,
          l,
          c,
          d = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(s, l) {
              function c() {
                var e = new d();
                return a(e.init) && e.init.apply(e, arguments), e;
              }
              function d() {}
              l === n && ((l = s), (s = Object)), (c.Bare = d);
              var u,
                f = (r[e] = s[e]),
                p = (d[e] = c[e] = new r());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (d[e] = c[e] = o(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((u = {}),
                    a(e) ? (u = e.call(c, p, f, c, s)) : i(e) && (u = e),
                    i(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return a(p.init) || (p.init = s), c;
                }),
                c.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          m = /[A-Z]/,
          h = "number",
          y = /^(rgb|#)/,
          T = /(em|cm|mm|in|pt|pc|px)$/,
          I = /(em|cm|mm|in|pt|pc|px|%)$/,
          b = /(deg|rad|turn)$/,
          v = "unitless",
          O = /(all|none) 0s ease 0s/,
          S = /^(width|height)$/,
          _ = document.createElement("a"),
          R = ["Webkit", "Moz", "O", "ms"],
          w = ["-webkit-", "-moz-", "-o-", "-ms-"],
          A = function (e) {
            if (e in _.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < R.length; t++)
              if ((n = R[t] + i) in _.style) return { dom: n, css: w[t] + e };
          },
          C = (t.support = {
            bind: Function.prototype.bind,
            transform: A("transform"),
            transition: A("transition"),
            backface: A("backface-visibility"),
            timing: A("transition-timing-function"),
          });
        if (C.transition) {
          var L = C.timing.dom;
          if (((_.style[L] = u["ease-in-back"][0]), !_.style[L]))
            for (var N in f) u[N][0] = f[N];
        }
        var M = (t.frame =
            (s =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && C.bind
              ? s.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          P = (t.now =
            (c =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && C.bind
              ? c.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          x = d(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Q[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  s = this.props[i];
                return (
                  s || (s = this.props[i] = new r.Bare()),
                  s.init(this.$el, n, a, t),
                  s
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      s.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    }
                  ),
                    d.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a));
                  var p = this,
                    g = !1,
                    E = {};
                  M(function () {
                    u.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E);
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function s(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                d.call(this);
            }
            function l() {
              s.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function d() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[C.transition.dom] = n));
            }
            function u(e, t, i) {
              var a,
                r,
                o,
                s,
                l = t !== f,
                c = {};
              for (a in e)
                (o = e[a]),
                  a in Y
                    ? (c.transform || (c.transform = {}), (c.transform[a] = o))
                    : (m.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Q ? (c[a] = o) : (s || (s = {}), (s[a] = o)));
              for (a in c) {
                if (((o = c[a]), !(r = this.props[a]))) {
                  if (!l) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && s && i.call(this, s);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function h(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                H.keepInherited && !H.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !O.test(n) && (this.upstream = n);
              }
              C.backface &&
                H.hideBackface &&
                j(this.el, C.backface.css, "hidden");
            }),
              h("add", n),
              h("start", i),
              h("wait", function (e) {
                (e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0));
              }),
              h("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              h("next", a),
              h("stop", s),
              h("set", function (e) {
                s.call(this, e), u.call(this, e, p, E);
              }),
              h("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              h("hide", l),
              h("redraw", c),
              h("destroy", function () {
                s.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          F = d(x, function (t) {
            function n(t, n) {
              var i = e.data(t, g) || e.data(t, g, new x.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          U = d(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, i) {
              (this.$el = e), (this.el = e[0]);
              var a,
                o,
                s,
                l = t[0];
              n[2] && (l = n[2]),
                W[l] && (l = W[l]),
                (this.name = l),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (s = "ease"),
                  void 0 !== o && (s = o),
                  a in u ? a : s)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = S.test(this.name)),
                (this.unit = i.unit || this.unit || H.defaultUnit),
                (this.angle = i.angle || this.angle || H.defaultAngle),
                H.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new V({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                j(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  j(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  s = "string" == typeof e;
                switch (t) {
                  case h:
                    if (r) return e;
                    if (s && "" === e.replace(E, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case y:
                    if (s) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case T:
                    if (r) return e + this.unit;
                    if (s && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case I:
                    if (r) return e + this.unit;
                    if (s && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case b:
                    if (r) return e + this.angle;
                    if (s && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (r || (s && I.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          k = d(U, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          D = d(U, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          G = d(U, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                (a = (r = Y[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Y.perspective &&
                    H.perspective &&
                    ((this.current.perspective = H.perspective),
                    j(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  j(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                j(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a)));
                  }),
                  i
                );
              });
          }),
          V = d(function (t) {
            function r() {
              var e,
                t,
                n,
                i = l.length;
              if (i)
                for (M(r), t = P(), e = i; e--; ) (n = l[e]) && n.render(t);
            }
            var s = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || s.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = s.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = s.from),
                void 0 === i && (i = s.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = P()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = P()),
                  (this.active = !0),
                  1 === l.push(this) && M(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, l)) >= 0 &&
                    ((t = l.slice(n + 1)),
                    (l.length = n),
                    t.length && (l = l.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2])
                        ))
                      : Math.round((this.begin + o * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(E, "");
                  i !== e.replace(E, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a);
              });
            var l = [],
              c = 1e3;
          }),
          X = d(V, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          B = d(V, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new V({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          H = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !C.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!C.transition) return (H.fallback = !0);
          H.agentTests.push("(" + e + ")");
          var t = RegExp(H.agentTests.join("|"), "i");
          H.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new V(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var j = e.style,
          z = e.css,
          W = { transform: C.transform && C.transform.css },
          Q = {
            color: [k, y],
            background: [k, y, "background-color"],
            "outline-color": [k, y],
            "border-color": [k, y],
            "border-top-color": [k, y],
            "border-right-color": [k, y],
            "border-bottom-color": [k, y],
            "border-left-color": [k, y],
            "border-width": [U, T],
            "border-top-width": [U, T],
            "border-right-width": [U, T],
            "border-bottom-width": [U, T],
            "border-left-width": [U, T],
            "border-spacing": [U, T],
            "letter-spacing": [U, T],
            margin: [U, T],
            "margin-top": [U, T],
            "margin-right": [U, T],
            "margin-bottom": [U, T],
            "margin-left": [U, T],
            padding: [U, T],
            "padding-top": [U, T],
            "padding-right": [U, T],
            "padding-bottom": [U, T],
            "padding-left": [U, T],
            "outline-width": [U, T],
            opacity: [U, h],
            top: [U, I],
            right: [U, I],
            bottom: [U, I],
            left: [U, I],
            "font-size": [U, I],
            "text-indent": [U, I],
            "word-spacing": [U, I],
            width: [U, I],
            "min-width": [U, I],
            "max-width": [U, I],
            height: [U, I],
            "min-height": [U, I],
            "max-height": [U, I],
            "line-height": [U, v],
            "scroll-top": [D, h, "scrollTop"],
            "scroll-left": [D, h, "scrollLeft"],
          },
          Y = {};
        C.transform &&
          ((Q.transform = [G]),
          (Y = {
            x: [I, "translateX"],
            y: [I, "translateY"],
            rotate: [b],
            rotateX: [b],
            rotateY: [b],
            scale: [h],
            scaleX: [h],
            scaleY: [h],
            skew: [b],
            skewX: [b],
            skewY: [b],
          })),
          C.transform &&
            C.backface &&
            ((Y.z = [I, "translateZ"]),
            (Y.rotateZ = [b]),
            (Y.scaleZ = [h]),
            (Y.perspective = [T]));
        var q = /ms/,
          K = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        s,
        l,
        c,
        d,
        u,
        f,
        p,
        g,
        E,
        m,
        h,
        y,
        T,
        I,
        b,
        v,
        O = window.$,
        S = n(5487) && O.tram;
      ((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (s = Function.prototype),
        r.push,
        (l = r.slice),
        r.concat,
        o.toString,
        (c = o.hasOwnProperty),
        (d = r.forEach),
        (u = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (g = r.indexOf),
        r.lastIndexOf,
        (E = Object.keys),
        s.bind,
        (m =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (d && e.forEach === d) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var s = i.keys(e), r = 0, o = s.length; r < o; r++)
                  if (t.call(n, e[s[r]], s[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : u && e.map === u
              ? e.map(t, n)
              : (m(e, function (e, a, r) {
                  i.push(t.call(n, e, a, r));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              h(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (m(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          }),
        (h =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                ? e.some(t, n)
                : (m(e, function (e, i, o) {
                    if (r || (r = t.call(n, e, i, o))) return a;
                  }),
                  !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : h(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(l.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              S.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            s,
            l,
            c = function () {
              var d = i.now() - s;
              d < t
                ? (a = setTimeout(c, t - d))
                : ((a = null), n || ((l = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (s = i.now());
            var d = n && !a;
            return (
              a || (a = setTimeout(c, t)),
              d && ((l = e.apply(o, r)), (o = r = null)),
              l
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return c.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (T = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (I = /\\|'|\r|\n|\u2028|\u2029/g),
        (b = function (e) {
          return "\\" + T[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            s = "__p+='";
          e.replace(r, function (t, n, i, a, r) {
            return (
              (s += e.slice(o, r).replace(I, b)),
              (o = r + t.length),
              n
                ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (s += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (s += "';\n");
          var l = t.variable;
          if (l) {
            if (!v.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else (s = "with(obj||{}){\n" + s + "}\n"), (l = "obj");
          s =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            s +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", s);
          } catch (e) {
            throw ((e.source = s), e);
          }
          var c = function (e) {
            return a.call(this, e, i);
          };
          return (c.source = "function(" + l + "){\n" + s + "}"), c;
        }),
        (e.exports = i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            s = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function d() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function u() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            e.length && e.remove(), a || o.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && s.hostname !== p && (f = !0),
                f &&
                  !l &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (i = e("<img>")
                      .attr("src")
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  u(),
                  setTimeout(u, 500),
                  e(a).off(c, d).on(c, d));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            s = document.location,
            l = "hashchange",
            c =
              n.load ||
              function () {
                var t, n, i;
                (a = !0),
                  (window.WebflowEditor = !0),
                  r.off(l, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (g(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (g(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    g(n, i), t(!1);
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n);
              },
            d = !1;
          try {
            d =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !a && /\?edit/.test(s.hash) && c();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            d
              ? c()
              : s.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
                  /\?edit$/.test(s.href)) &&
                c()
              : r.on(l, u).triggerHandler(l),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function s() {
                      t = !1;
                    }
                    function l() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", c),
                        document.removeEventListener("mousedown", c),
                        document.removeEventListener("mouseup", c),
                        document.removeEventListener("pointermove", c),
                        document.removeEventListener("pointerdown", c),
                        document.removeEventListener("pointerup", c),
                        document.removeEventListener("touchmove", c),
                        document.removeEventListener("touchstart", c),
                        document.removeEventListener("touchend", c));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", s, !0),
                      document.addEventListener("pointerdown", s, !0),
                      document.addEventListener("touchstart", s, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), l());
                        },
                        !0
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, s;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (s = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === s && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            (a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var r = window.jQuery,
        o = {},
        s = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + s, OUTRO: "w-ix-outro" + s }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        s = [],
        l = window.Webflow || [],
        c = window.jQuery,
        d = c(window),
        u = c(document),
        f = c.isFunction,
        p = (r._ = n(5756)),
        g = (r.tram = n(5487) && c.tram),
        E = !1,
        m = !1;
      function h(e) {
        r.env() &&
          (f(e.design) && d.on("__wf_design", e.design),
          f(e.preview) && d.on("__wf_preview", e.preview)),
          f(e.destroy) && d.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(s, e.ready) || s.push(e.ready);
            })(e);
      }
      function y(e) {
        var t;
        f(e.design) && d.off("__wf_design", e.design),
          f(e.preview) && d.off("__wf_preview", e.preview),
          f(e.destroy) && d.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (s = p.filter(s, function (e) {
              return e !== t.ready;
            })));
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && y(o[e]);
          var i = (o[e] = t(c, p, n) || {});
          return h(i), i;
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (E) {
            f(e) && e();
            return;
          }
          l.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var T = navigator.userAgent.toLowerCase(),
        I = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        b = (r.env.chrome =
          /chrome/.test(T) &&
          /Google/.test(navigator.vendor) &&
          parseInt(T.match(/chrome\/(\d+)\./)[1], 10)),
        v = (r.env.ios = /(ipod|iphone|ipad)/.test(T));
      (r.env.safari = /safari/.test(T) && !b && !v),
        I &&
          u.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = I
          ? function (e) {
              return e === i || c.contains(e, i);
            }
          : function () {
              return !0;
            });
      var O = "resize.webflow orientationchange.webflow load.webflow",
        S = "scroll.webflow " + O;
      function _(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function R(e) {
        f(e) && e();
      }
      function w() {
        a && (a.reject(), d.off("load", a.resolve)),
          (a = new c.Deferred()),
          d.on("load", a.resolve);
      }
      (r.resize = _(d, O)),
        (r.scroll = _(d, S)),
        (r.redraw = _()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          (E = !0),
            m ? ((m = !1), p.each(o, h)) : p.each(s, R),
            p.each(l, R),
            r.resize.up();
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          (e = e || {}),
            (m = !0),
            d.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(o, y),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (s = []),
            (l = []),
            "pending" === a.state() && w();
        }),
        c(r.ready),
        w(),
        (e.exports = window.Webflow = r);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            s = e(window),
            l = i.env(),
            c = window.location,
            d = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function g() {
            var e = s.scrollTop(),
              n = s.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  s = 0.5 * n,
                  l = a.is(":visible") && r + o - s >= e && r + s <= e + n;
                t.active !== l && ((t.active = l), E(i, u, l));
              }
            });
          }
          function E(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (n = l && i.env("design")),
                    (r = i.env("slug") || c.pathname || ""),
                    i.scroll.off(g),
                    (a = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((d.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            d.hash.length > 1 &&
                            d.host + d.pathname === c.host + c.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(d.hash)) return;
                            var s = e(d.hash);
                            s.length && a.push({ link: o, sec: s, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            E(
                              o,
                              u,
                              (!l && d.href === c.href) ||
                                i === r ||
                                (f.test(i) && p.test(r))
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(g), g());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            s = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = i.env("editor") ? ".w-editor-body" : "body",
            d =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function m(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function h(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var c =
                g.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== c) {
                var u,
                  f = e(c);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = c),
                  n.hash !== u &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== u &&
                    a.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(d),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              s = t.outerHeight();
                            s < o && (a -= Math.round((o - s) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              E.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              s.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          c = Date.now(),
                          u = function () {
                            var e,
                              t,
                              r,
                              s,
                              d,
                              f = Date.now() - c;
                            window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (s = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((d = r / s) < 0.5
                                      ? 4 * d * d * d
                                      : (d - 1) * (2 * d - 2) * (2 * d - 2) +
                                        1))
                            ),
                              f <= o ? l(u) : "function" == typeof n && n();
                          };
                        l(u);
                      }
                    })(f, function () {
                      m(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        m(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, h),
                o.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              s = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function c(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i,
                  l,
                  c,
                  d,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  g = p - a;
                (a = p),
                  Math.abs(g) > s &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (l = t),
                    (c = { direction: g > 0 ? "right" : "left" }),
                    (d = e.Event(i, { originalEvent: l })),
                    e(l.target).trigger(d, c),
                    u());
              }
            }
            function d(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function u() {
              r = !1;
            }
            t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", d, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", d, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", l, !1),
                  t.removeEventListener("touchmove", c, !1),
                  t.removeEventListener("touchend", d, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", l, !1),
                  t.removeEventListener("mousemove", c, !1),
                  t.removeEventListener("mouseup", d, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      i.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            o,
            s,
            l,
            c = {},
            d = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            g = i.env(),
            E = ".w-nav",
            m = "w--open",
            h = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            T = "w--nav-dropdown-list-open",
            I = "w--nav-link-open",
            b = a.triggers,
            v = e();
          function O() {
            i.resize.off(S);
          }
          function S() {
            o.each(x);
          }
          function _(n, i) {
            var a,
              o,
              c,
              d,
              p,
              g = e(i),
              m = e.data(i, E);
            m ||
              (m = e.data(i, E, {
                open: !1,
                el: g,
                config: {},
                selectedIdx: -1,
              })),
              (m.menu = g.find(".w-nav-menu")),
              (m.links = m.menu.find(".w-nav-link")),
              (m.dropdowns = m.menu.find(".w-dropdown")),
              (m.dropdownToggle = m.menu.find(".w-dropdown-toggle")),
              (m.dropdownList = m.menu.find(".w-dropdown-list")),
              (m.button = g.find(".w-nav-button")),
              (m.container = g.find(".w-container")),
              (m.overlayContainerId = "w-nav-overlay-" + n),
              (m.outside =
                ((a = m).outside && f.off("click" + E, a.outside),
                function (t) {
                  var n = e(t.target);
                  (l && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    P(a, n);
                }));
            var h = g.find(".w-nav-brand");
            h &&
              "/" === h.attr("href") &&
              null == h.attr("aria-label") &&
              h.attr("aria-label", "home"),
              m.button.attr("style", "-webkit-user-select: text;"),
              null == m.button.attr("aria-label") &&
                m.button.attr("aria-label", "menu"),
              m.button.attr("role", "button"),
              m.button.attr("tabindex", "0"),
              m.button.attr("aria-controls", m.overlayContainerId),
              m.button.attr("aria-haspopup", "menu"),
              m.button.attr("aria-expanded", "false"),
              m.el.off(E),
              m.button.off(E),
              m.menu.off(E),
              A(m),
              s
                ? (w(m),
                  m.el.on(
                    "setting" + E,
                    ((o = m),
                    function (e, n) {
                      n = n || {};
                      var i = u.width();
                      A(o),
                        !0 === n.open && D(o, !0),
                        !1 === n.open && V(o, !0),
                        o.open &&
                          t.defer(function () {
                            i !== u.width() && L(o);
                          });
                    })
                  ))
                : ((c = m).overlay ||
                    ((c.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(c.el)),
                    c.overlay.attr("id", c.overlayContainerId),
                    (c.parent = c.menu.parent()),
                    V(c, !0)),
                  m.button.on("click" + E, N(m)),
                  m.menu.on("click" + E, "a", M(m)),
                  m.button.on(
                    "keydown" + E,
                    ((d = m),
                    function (e) {
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return (
                            N(d)(), e.preventDefault(), e.stopPropagation()
                          );
                        case r.ESCAPE:
                          return V(d), e.preventDefault(), e.stopPropagation();
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                        case r.HOME:
                        case r.END:
                          if (!d.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === r.END
                              ? (d.selectedIdx = d.links.length - 1)
                              : (d.selectedIdx = 0),
                            C(d),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  m.el.on(
                    "keydown" + E,
                    ((p = m),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case r.HOME:
                          case r.END:
                            return (
                              e.keyCode === r.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              V(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_LEFT:
                          case r.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              x(n, i);
          }
          function R(t, n) {
            var i = e.data(n, E);
            i && (w(i), e.removeData(n, E));
          }
          function w(e) {
            e.overlay && (V(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function A(e) {
            var n = {},
              i = e.config || {},
              a = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(a)),
              (n.animDirect = /left$/.test(a) ? -1 : 1),
              i.animation !== a && e.open && t.defer(L, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var r = e.el.attr("data-duration");
            (n.duration = null != r ? Number(r) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function C(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), M(t);
            }
          }
          function L(e) {
            e.open && (V(e, !0), D(e, !0));
          }
          function N(e) {
            return p(function () {
              e.open ? V(e) : D(e);
            });
          }
          function M(t) {
            return function (n) {
              var a = e(this).attr("href");
              if (!i.validClick(n.currentTarget))
                return void n.preventDefault();
              a && 0 === a.indexOf("#") && t.open && V(t);
            };
          }
          (c.ready =
            c.design =
            c.preview =
              function () {
                (s = g && i.env("design")),
                  (l = i.env("editor")),
                  (n = e(document.body)),
                  (o = f.find(E)).length && (o.each(_), O(), i.resize.on(S));
              }),
            (c.destroy = function () {
              (v = e()), O(), o && o.length && o.each(R);
            });
          var P = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || V(e);
            }
          });
          function x(t, n) {
            var i = e.data(n, E),
              a = (i.collapsed = "none" !== i.button.css("display"));
            if ((!i.open || a || s || V(i, !0), i.container.length)) {
              var r,
                o =
                  ("none" === (r = i.container.css(F)) && (r = ""),
                  function (t, n) {
                    (n = e(n)).css(F, ""), "none" === n.css(F) && n.css(F, r);
                  });
              i.links.each(o), i.dropdowns.each(o);
            }
            i.open && G(i);
          }
          var F = "max-width";
          function U(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function k(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function D(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(U),
                e.links.addClass(I),
                e.dropdowns.addClass(h),
                e.dropdownToggle.addClass(y),
                e.dropdownList.addClass(T),
                e.button.addClass(m);
              var n = e.config;
              ("none" === n.animation ||
                !d.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var a = G(e),
                r = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                l = e.el.height(),
                c = e.el[0];
              if (
                (x(0, c),
                b.intro(0, c),
                i.redraw.up(),
                s || f.on("click" + E, e.outside),
                t)
              )
                return void p();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                d(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * o, height: a })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(o);
                return;
              }
              d(e.menu)
                .add(u)
                .set({ y: -(l + r) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function G(e) {
            var t = e.config,
              i = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(i)
                : "fixed" !== e.el.css("position") &&
                  (i -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(i),
              i
            );
          }
          function V(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(m);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !d.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                b.outro(0, e.el[0]),
                f.off("click" + E, e.outside),
                t)
              ) {
                d(e.menu).stop(), s();
                return;
              }
              var i = "transform " + n.duration + "ms " + n.easing2,
                a = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                o = e.el.height();
              if (n.animOver)
                return void d(e.menu)
                  .add(i)
                  .start({ x: r * n.animDirect })
                  .then(s);
              d(e.menu)
                .add(i)
                .start({ y: -(o + a) })
                .then(s);
            }
            function s() {
              e.menu.height(""),
                d(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(k),
                e.links.removeClass(I),
                e.dropdowns.removeClass(h),
                e.dropdownToggle.removeClass(y),
                e.dropdownList.removeClass(T),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return c;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return z;
        },
        animationFrameChanged: function () {
          return G;
        },
        clearRequested: function () {
          return F;
        },
        elementStateChanged: function () {
          return j;
        },
        eventListenerAdded: function () {
          return U;
        },
        eventStateChanged: function () {
          return D;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return H;
        },
        instanceStarted: function () {
          return B;
        },
        mediaQueriesDefined: function () {
          return Q;
        },
        parameterChanged: function () {
          return V;
        },
        playbackRequested: function () {
          return P;
        },
        previewRequested: function () {
          return M;
        },
        rawDataImported: function () {
          return A;
        },
        sessionInitialized: function () {
          return C;
        },
        sessionStarted: function () {
          return L;
        },
        sessionStopped: function () {
          return N;
        },
        stopRequested: function () {
          return x;
        },
        testFrameRendered: function () {
          return k;
        },
        viewportWidthChanged: function () {
          return W;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: s,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: d,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: m,
          IX2_EVENT_STATE_CHANGED: h,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: I,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: S,
          IX2_VIEWPORT_WIDTH_CHANGED: _,
          IX2_MEDIA_QUERIES_DEFINED: R,
        } = r.IX2EngineActionTypes,
        { reifyState: w } = o.IX2VanillaUtils,
        A = (e) => ({ type: s, payload: { ...w(e) } }),
        C = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        L = () => ({ type: c }),
        N = () => ({ type: d }),
        M = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        P = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: s,
          verbose: l,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: s,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: l,
            rawData: c,
          },
        }),
        x = (e) => ({ type: p, payload: { actionListId: e } }),
        F = () => ({ type: g }),
        U = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        k = (e = 1) => ({ type: m, payload: { step: e } }),
        D = (e, t) => ({ type: h, payload: { stateKey: e, newState: t } }),
        G = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        V = (e, t) => ({ type: T, payload: { key: e, value: t } }),
        X = (e) => ({ type: I, payload: { ...e } }),
        B = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        H = (e) => ({ type: v, payload: { instanceId: e } }),
        j = (e, t, n, i) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        z = ({ actionListId: e, isPlaying: t }) => ({
          type: S,
          payload: { actionListId: e, isPlaying: t },
        }),
        W = ({ width: e, mediaQueries: t }) => ({
          type: _,
          payload: { width: e, mediaQueries: t },
        }),
        Q = () => ({ type: R });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return g;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        s = (i = n(7243)) && i.__esModule ? i : { default: i },
        l = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, o.createStore)(s.default);
      function f(e) {
        e() && (0, l.observeRequests)(u);
      }
      function p(e) {
        g(), (0, l.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function g() {
        (0, l.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return T;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return g;
        },
        getQuerySelector: function () {
          return m;
        },
        getRefType: function () {
          return S;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return h;
        },
        isSiblingNode: function () {
          return I;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: s } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: d,
          WF_PAGE: u,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function g(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[s](e);
      }
      function m({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function h(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function T(e, t) {
        return e.contains(t);
      }
      function I(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[s] && n[s](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function S(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : d
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return Z;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return eg;
        },
        stopAllActionGroups: function () {
          return ep;
        },
        stopEngine: function () {
          return er;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = y(n(9777)),
        o = y(n(4738)),
        s = y(n(4659)),
        l = y(n(3452)),
        c = y(n(6633)),
        d = y(n(3729)),
        u = y(n(2397)),
        f = y(n(5082)),
        p = n(7087),
        g = n(9468),
        E = n(3946),
        m = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = T(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        h = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (T = function (e) {
          return e ? n : t;
        })(e);
      }
      let I = Object.keys(p.QuickEffectIds),
        b = (e) => I.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: S,
          RENDER_GENERAL: _,
          W_MOD_IX: R,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: w,
          getElementId: A,
          getDestinationValues: C,
          observeStore: L,
          getInstanceId: N,
          renderHTMLElement: M,
          clearAllStyles: P,
          getMaxDurationItemIndex: x,
          getComputedStyle: F,
          getInstanceOrigin: U,
          reduceListToGroup: k,
          shouldNamespaceEventParameter: D,
          getNamespacedParameterId: G,
          shouldAllowMediaQuery: V,
          cleanupHTMLElement: X,
          clearObjectCache: B,
          stringifyTarget: H,
          mediaQueriesEqual: j,
          shallowEqual: z,
        } = g.IX2VanillaUtils,
        {
          isPluginType: W,
          createPluginInstance: Q,
          getPluginDuration: Y,
        } = g.IX2VanillaPlugins,
        q = navigator.userAgent,
        K = q.match(/iPad/i) || q.match(/iPhone/);
      function Z(e) {
        L({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: J }),
          L({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: et,
          }),
          L({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: en }),
          L({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ei });
      }
      function J({ rawData: e, defer: t }, n) {
        let i = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), ee();
        };
        t ? setTimeout(i, 0) : i();
      }
      function ee() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function et(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: s,
            testManual: l,
            verbose: c = !0,
          } = e,
          { rawData: d } = e;
        if (i && a && d && s) {
          let e = d.actionLists[i];
          e && (d = k({ actionList: e, actionItemId: a, rawData: d }));
        }
        if (
          (ea({ store: t, rawData: d, allowEvents: o, testManual: l }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
        ) {
          eg({ store: t, actionListId: i }),
            ef({ store: t, actionListId: i, eventId: r });
          let e = eE({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: s,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !s,
              })
            );
        }
      }
      function en({ actionListId: e }, t) {
        e ? eg({ store: t, actionListId: e }) : ep({ store: t }), er(t);
      }
      function ei(e, t) {
        er(t), P({ store: t, elementApi: m });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(O),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              el(e),
                (0, u.default)(n, (t, n) => {
                  let i = h.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!K) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = m.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: c } = l,
                      d = ec(n, eu);
                    if (!(0, s.default)(d)) return;
                    (0, u.default)(d, (e, i) => {
                      let a = n[i],
                        {
                          action: s,
                          id: d,
                          mediaQueries: u = l.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = s.config;
                      j(u, l.mediaQueryKeys) ||
                        t.dispatch((0, E.mediaQueriesDefined)()),
                        s.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              s = (0, r.default)(a, ({ id: e }) => e === i),
                              l = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            s &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: s,
                                  smoothing: l,
                                  restingValue: c,
                                }) {
                                  let { ixData: d, ixSession: u } =
                                      e.getState(),
                                    { events: f } = d,
                                    g = f[i],
                                    { eventTypeId: E } = g,
                                    h = {},
                                    y = {},
                                    T = [],
                                    { continuousActionGroups: I } = s,
                                    { id: b } = s;
                                  D(E, a) && (b = G(t, b));
                                  let S =
                                    u.hasBoundaryNodes && n
                                      ? m.getClosestElement(n, O)
                                      : null;
                                  I.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? S : null,
                                        o = H(a) + v + i;
                                      if (
                                        ((y[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0)
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(y[o], t, e)),
                                        !h[o])
                                      ) {
                                        h[o] = !0;
                                        let { config: t } = e;
                                        w({
                                          config: t,
                                          event: g,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: m,
                                        }).forEach((e) => {
                                          T.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    T.forEach(({ element: t, key: n }) => {
                                      let a = y[n],
                                        s = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: d } = s,
                                        u = (
                                          d === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                s.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : W(d)
                                        )
                                          ? Q(d)?.(t, s)
                                          : null,
                                        f = C(
                                          {
                                            element: t,
                                            actionItem: s,
                                            elementApi: m,
                                          },
                                          u
                                        );
                                      em({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: s,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: b,
                                        actionGroups: a,
                                        smoothing: l,
                                        restingValue: c,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: d + v + i,
                                  eventTarget: e,
                                  eventId: d,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: s,
                                  smoothing: l,
                                  restingValue: u,
                                });
                              });
                          }),
                        (s.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          b(s.actionTypeId)) &&
                          ef({ store: t, actionListId: f, eventId: d });
                    });
                    let g = (e) => {
                        let { ixSession: i } = t.getState();
                        ed(d, (r, o, s) => {
                          let c = n[o],
                            d = i.eventState[s],
                            { action: u, mediaQueries: f = l.mediaQueryKeys } =
                              c;
                          if (!V(f, i.mediaQueryKey)) return;
                          let g = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: s,
                              },
                              d
                            );
                            z(i, d) ||
                              t.dispatch((0, E.eventStateChanged)(s, i));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(g)
                            : g();
                        });
                      },
                      h = (0, f.default)(g, 12),
                      y = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? h : g;
                            e.addEventListener(n, a),
                              t.dispatch((0, E.eventListenerAdded)(e, [n, a]));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(y)
                      : "string" == typeof i && y(e);
                  })({ logic: i, store: e, events: t });
                });
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  es.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              L({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  er(e),
                    P({ store: e, elementApi: m }),
                    ea({ store: e, allowEvents: !0 }),
                    ee();
                },
              }));
          e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(i, r)), t)) {
                    let t = L({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i);
        }
      }
      function er(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), B(), e.dispatch((0, E.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let es = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, E.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let ec = (e, t) => (0, l.default)((0, d.default)(e, t), c.default),
        ed = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + v + i);
            });
          });
        },
        eu = (e) =>
          w({
            config: { target: e.target, targets: e.targets },
            elementApi: m,
          });
      function ef({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: s } = i,
          l = s[n],
          c = r[t];
        if (c && c.useFirstGroupAsInitialState) {
          let r = (0, o.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !V(
              (0, o.default)(l, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = w({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : a,
                event: l,
                elementApi: m,
              }),
              s = W(r);
            o.forEach((a) => {
              let o = s ? Q(r)?.(a, i) : null;
              em({
                destination: C({ element: a, actionItem: i, elementApi: m }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ep({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            eh(t, e),
              i &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: s } = e.getState(),
          l = s.hasBoundaryNodes && n ? m.getClosestElement(n, O) : null;
        (0, u.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            s = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && s) {
            if (l && r && !m.elementContains(l, n.element)) return;
            eh(n, e),
              n.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: s,
        verbose: l,
      }) {
        let { ixData: c, ixSession: d } = e.getState(),
          { events: u } = c,
          f = u[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: E } = (0,
          o.default)(c, `actionLists.${a}`, {});
        if (!g || !g.length) return !1;
        r >= g.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && E && r++;
        let h =
            (0 === r || (1 === r && E)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, o.default)(g, [r, "actionItems"], []);
        if (!y.length || !V(p, d.mediaQueryKey)) return !1;
        let T = d.hasBoundaryNodes && n ? m.getClosestElement(n, O) : null,
          I = x(y),
          v = !1;
        return (
          y.forEach((o, c) => {
            let { config: d, actionTypeId: u } = o,
              p = W(u),
              { target: g } = d;
            g &&
              w({
                config: d,
                event: f,
                eventTarget: n,
                elementRoot: g.boundaryMode ? T : null,
                elementApi: m,
              }).forEach((d, f) => {
                let g = p ? Q(u)?.(d, o) : null,
                  E = p ? Y(u)(d, o) : null;
                v = !0;
                let y = F({ element: d, actionItem: o }),
                  T = C({ element: d, actionItem: o, elementApi: m }, g);
                em({
                  store: e,
                  element: d,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: I === c && 0 === f,
                  computedStyle: y,
                  destination: T,
                  immediate: s,
                  verbose: l,
                  pluginInstance: g,
                  pluginDuration: E,
                  instanceDelay: h,
                });
              });
          }),
          v
        );
      }
      function em(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: s,
            pluginInstance: l,
            continuous: c,
            restingValue: d,
            eventId: u,
          } = a,
          f = N(),
          { ixElements: g, ixSession: h, ixData: y } = n.getState(),
          T = A(g, r),
          { refState: I } = g[T] || {},
          b = m.getRefType(r),
          v = h.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (v && c)
          switch (y.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = d;
              break;
            default:
              t = 0.5;
          }
        let O = U(r, I, i, o, m, l);
        if (
          (n.dispatch(
            (0, E.instanceAdded)({
              instanceId: f,
              elementId: T,
              origin: O,
              refType: b,
              skipMotion: v,
              skipToValue: t,
              ...a,
            })
          ),
          ey(document.body, "ix2-animation-started", f),
          s)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            eT(i[t], e);
          })(n, f);
        L({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eT }),
          c || n.dispatch((0, E.instanceStarted)(f, h.tick));
      }
      function eh(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        o === S && X(r, i, m), t.dispatch((0, E.instanceRemoved)(e.id));
      }
      function ey(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function eT(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: s,
            renderType: l,
            current: c,
            groupIndex: d,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: g,
            isCarrier: h,
            styleProp: y,
            verbose: T,
            pluginInstance: I,
          } = e,
          { ixData: b, ixSession: v } = t.getState(),
          { events: O } = b,
          { mediaQueries: R = b.mediaQueryKeys } = O && O[u] ? O[u] : {};
        if (V(R, v.mediaQueryKey) && (i || n || a)) {
          if (c || (l === _ && a)) {
            t.dispatch((0, E.elementStateChanged)(r, s, c, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              d = a && a[s];
            (i === S || W(s)) && M(n, a, d, u, o, y, m, l, I);
          }
          if (a) {
            if (h) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: d + 1,
                verbose: T,
              });
              T &&
                !e &&
                t.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: g,
                    isPlaying: !1,
                  })
                );
            }
            eh(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eg;
          },
        });
      let a = u(n(5801)),
        r = u(n(4738)),
        o = u(n(3789)),
        s = n(7087),
        l = n(1970),
        c = n(3946),
        d = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: g,
          MOUSE_UP: E,
          MOUSE_OVER: m,
          MOUSE_OUT: h,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: T,
          SLIDER_ACTIVE: I,
          SLIDER_INACTIVE: b,
          TAB_ACTIVE: v,
          TAB_INACTIVE: O,
          NAVBAR_CLOSE: S,
          NAVBAR_OPEN: _,
          MOUSE_MOVE: R,
          PAGE_SCROLL_DOWN: w,
          SCROLL_INTO_VIEW: A,
          SCROLL_OUT_OF_VIEW: C,
          PAGE_SCROLL_UP: L,
          SCROLLING_IN_VIEW: N,
          PAGE_FINISH: M,
          ECOMMERCE_CART_CLOSE: P,
          ECOMMERCE_CART_OPEN: x,
          PAGE_START: F,
          PAGE_SCROLL: U,
        } = s.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: G } = s.IX2EngineConstants,
        { getNamespacedParameterId: V } = d.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        B = X(({ element: e, nativeEvent: t }) => e === t.target),
        H = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        j = (0, a.default)([B, H]),
        z = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !et[a.eventTypeId]) return a;
          }
          return null;
        },
        W = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!z(e, i);
        },
        Q = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: s } = t,
            { actionListId: c, autoStopEventId: d } = o.config,
            u = z(e, d);
          return (
            u &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: d + G + i.split(G)[1],
                actionListId: (0, r.default)(u, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: s,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: s,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            a
          );
        },
        Y = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        q = { handler: Y(j, Q) },
        K = { ...q, types: [k, D].join(" ") },
        Z = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        J = "mouseover mouseout",
        ee = { types: Z },
        et = { PAGE_START: F, PAGE_FINISH: M },
        en = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ei = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        er = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = en(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return ei(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        eo = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [k, D].indexOf(i) ? i === k : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        es = (e) => (t, n) => {
          let i = { elementHovered: ea(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: s } = en(),
              {
                event: { config: l, eventTypeId: c },
              } = t,
              { scrollOffsetValue: d, scrollOffsetUnit: u } = l,
              f = o - s,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === u ? d : (s * (d || 0)) / 100) / f,
              E = 0;
            n &&
              ((i = p > n.percentTop),
              (E = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let m = c === w ? p >= E + g : p <= E - g,
              h = {
                ...n,
                percentTop: p,
                inBounds: m,
                anchorTop: E,
                scrollingDown: i,
              };
            return (n && m && (a || h.inBounds !== n.inBounds) && e(t, h)) || h;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ed =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        eu = (e = !0) => ({
          ...K,
          handler: Y(
            e ? j : B,
            eo((e, t) => (t.isActive ? q.handler(e, t) : t))
          ),
        }),
        ef = (e = !0) => ({
          ...K,
          handler: Y(
            e ? j : B,
            eo((e, t) => (t.isActive ? t : q.handler(e, t)))
          ),
        }),
        ep = {
          ...ee,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === A) === n
                ? (Q(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: er(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        eg = {
          [I]: eu(),
          [b]: ef(),
          [T]: eu(),
          [y]: ef(),
          [_]: eu(!1),
          [S]: ef(!1),
          [v]: eu(),
          [O]: ef(),
          [x]: { types: "ecommerce-cart-open", handler: Y(j, Q) },
          [P]: { types: "ecommerce-cart-close", handler: Y(j, Q) },
          [f]: {
            types: "click",
            handler: Y(
              j,
              ed((e, { clickCount: t }) => {
                W(e) ? 1 === t && Q(e) : Q(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: Y(
              j,
              ed((e, { clickCount: t }) => {
                2 === t && Q(e);
              })
            ),
          },
          [g]: { ...q, types: "mousedown" },
          [E]: { ...q, types: "mouseup" },
          [m]: {
            types: J,
            handler: Y(
              j,
              es((e, t) => {
                t.elementHovered && Q(e);
              })
            ),
          },
          [h]: {
            types: J,
            handler: Y(
              j,
              es((e, t) => {
                t.elementHovered || Q(e);
              })
            ),
          },
          [R]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: d,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: g = r.clientY,
                  pageX: E = r.pageX,
                  pageY: m = r.pageY,
                } = i,
                h = "X_AXIS" === l,
                y = "mouseout" === i.type,
                T = f / 100,
                I = d,
                b = !1;
              switch (o) {
                case s.EventBasedOn.VIEWPORT:
                  T = h
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                case s.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = en();
                  T = h ? Math.min(e + E, n) / n : Math.min(t + m, i) / i;
                  break;
                }
                case s.EventBasedOn.ELEMENT:
                default: {
                  I = V(a, d);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== j({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: s, height: l } = n;
                  if (!e && !ec({ left: p, top: g }, n)) break;
                  (b = !0), (T = h ? (p - r) / s : (g - o) / l);
                }
              }
              return (
                y && (T > 0.95 || T < 0.05) && (T = Math.round(T)),
                (o !== s.EventBasedOn.ELEMENT || b || b !== r.elementHovered) &&
                  ((T = u ? 1 - T : T),
                  e.dispatch((0, c.parameterChanged)(I, T))),
                {
                  elementHovered: b,
                  clientX: p,
                  clientY: g,
                  pageX: E,
                  pageY: m,
                }
              );
            },
          },
          [U]: {
            types: Z,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = en(),
                s = a / (r - o);
              (s = i ? 1 - s : s), e.dispatch((0, c.parameterChanged)(n, s));
            },
          },
          [N]: {
            types: Z,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: d,
                  clientHeight: u,
                } = en(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: m,
                  addEndOffset: h,
                  addStartOffset: y,
                  addOffsetValue: T = 0,
                  endOffsetValue: I = 0,
                } = n;
              if (f === s.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / l : o / d;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(g, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = V(i, g),
                  r = e.getBoundingClientRect(),
                  o = (y ? T : 0) / 100,
                  s = (h ? I : 0) / 100;
                (o = E ? o : 1 - o), (s = m ? s : 1 - s);
                let l = r.top + Math.min(r.height * o, u),
                  f = Math.min(u + (r.top + r.height * s - l), d),
                  p = Math.min(Math.max(0, u - l), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [A]: ep,
          [C]: ep,
          [w]: {
            ...ee,
            handler: el((e, t) => {
              t.scrollingDown && Q(e);
            }),
          },
          [L]: {
            ...ee,
            handler: el((e, t) => {
              t.scrollingDown || Q(e);
            }),
          },
          [M]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(B, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && Q(e), n;
            }),
          },
          [F]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(B, (e, t) => (t || Q(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: s,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: d,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: E } = i.IX2EngineConstants,
        {
          getItemConfigByKey: m,
          getRenderType: h,
          getStyleProp: y,
        } = a.IX2VanillaUtils,
        T = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: s,
              parameterId: l,
              actionGroups: c,
              destinationKeys: d,
              smoothing: u,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: h,
              skipMotion: y,
              skipToValue: T,
            } = e,
            { parameters: I } = t.payload,
            b = Math.max(1 - u, 0.01),
            v = I[l];
          null == v && ((b = 1), (v = g));
          let O = f((Math.max(v, 0) || 0) - s),
            S = y ? T : f(s + O * b),
            _ = 100 * S;
          if (S === s && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: r } = c[e];
            if ((0 === e && (n = r[0]), _ >= t)) {
              n = r[0];
              let s = c[e + 1],
                l = s && _ !== t;
              (i = l ? s.actionItems[0] : null),
                l && ((a = t / 100), (o = (s.keyframe - t) / 100));
            }
          }
          let R = {};
          if (n && !i)
            for (let e = 0, { length: t } = d; e < t; e++) {
              let t = d[e];
              R[t] = m(E, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (S - a) / o,
              t = p(n.config.easing, e, h);
            for (let e = 0, { length: a } = d; e < a; e++) {
              let a = d[e],
                r = m(E, a, n.config),
                o = (m(E, a, i.config) - r) * t + r;
              R[a] = o;
            }
          }
          return (0, r.merge)(e, { position: S, current: R });
        },
        I = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: s,
              verbose: l,
              actionItem: c,
              destination: d,
              destinationKeys: u,
              pluginDuration: g,
              instanceDelay: m,
              customEasingFn: h,
              skipMotion: y,
            } = e,
            T = c.config.easing,
            { duration: I, delay: b } = c.config;
          null != g && (I = g),
            (b = null != m ? m : b),
            s === E ? (I = 0) : (o || y) && (I = b = 0);
          let { now: v } = t.payload;
          if (n && i) {
            let t = v - (a + b);
            if (l) {
              let t = I + b,
                n = f(Math.min(Math.max(0, (v - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / I), 1)),
              o = p(T, n, h),
              s = {},
              c = null;
            return (
              u.length &&
                (c = u.reduce((e, t) => {
                  let n = d[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return (e[t] = r * o + a), e;
                }, {})),
              (s.current = c),
              (s.position = n),
              1 === n && ((s.active = !1), (s.complete = !0)),
              (0, r.merge)(e, s)
            );
          }
          return e;
        },
        b = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case s:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: s,
                  eventStateKey: l,
                  actionListId: c,
                  groupIndex: d,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: m,
                  continuous: T,
                  parameterId: I,
                  actionGroups: b,
                  smoothing: v,
                  restingValue: O,
                  pluginInstance: S,
                  pluginDuration: _,
                  instanceDelay: R,
                  skipMotion: w,
                  skipToValue: A,
                } = t.payload,
                { actionTypeId: C } = a,
                L = h(C),
                N = y(L, C),
                M = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: P } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: M,
                immediate: E,
                verbose: m,
                current: null,
                actionItem: a,
                actionTypeId: C,
                eventId: o,
                eventTarget: s,
                eventStateKey: l,
                actionListId: c,
                groupIndex: d,
                renderType: L,
                isCarrier: u,
                styleProp: N,
                continuous: T,
                parameterId: I,
                actionGroups: b,
                smoothing: v,
                restingValue: O,
                pluginInstance: S,
                pluginDuration: _,
                instanceDelay: R,
                skipMotion: w,
                skipToValue: A,
                customEasingFn:
                  Array.isArray(P) && 4 === P.length ? g(P) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case d: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case u: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  s = e[a],
                  l = s.continuous ? T : I;
                n = (0, r.set)(n, a, l(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        s = n(9468),
        l = n(7718),
        c = n(1540),
        { ixElements: d } = s.IX2ElementsReducer,
        u = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: d,
          ixInstances: l.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: s,
          IX2_CLEAR_REQUESTED: l,
        } = i.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        d = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [s]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        u = (e = c, t) => {
          if (t.type in d) {
            let n = [d[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: s,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: d,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = i.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        m = (e = E, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case s: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case l:
              return E;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case c: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case d: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case g:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return d;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        s = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        d = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        s = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        c = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = s();
          if (!i) return;
          let o = i.getInstance(e),
            l = i.rive.StateMachineInputType,
            { name: c, inputs: d = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), a in d || r in d)) {
                  let t = e.layout,
                    n = d[a] ?? t.fit,
                    i = d[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in d) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case l.Boolean:
                        null != d[e] && (i.value = !!d[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case l.Trigger:
                        d[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? u(o.rive) : i.setLoadHandler(e, u);
        },
        g = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        s = (e, t) => e.value[t],
        l = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        d = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            s = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          a ? s(a.spline) : i.setLoadHandler(e, s);
        },
        g = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        s = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(a) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, r.normalizeColor)(a)
            : void 0;
        },
        c = (e) => e.value,
        d = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(u).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        a = c(n(7377)),
        r = c(n(2866)),
        o = c(n(2570)),
        s = c(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let d = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...s }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return I;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return g;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return T;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return m;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return h;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return s;
        },
        IX2_STOP_REQUESTED: function () {
          return d;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        s = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        d = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        m = "IX2_INSTANCE_ADDED",
        h = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        I = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return en;
        },
        AUTO: function () {
          return j;
        },
        BACKGROUND: function () {
          return D;
        },
        BACKGROUND_COLOR: function () {
          return k;
        },
        BAR_DELIMITER: function () {
          return Q;
        },
        BORDER_COLOR: function () {
          return G;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return Y;
        },
        COLON_DELIMITER: function () {
          return W;
        },
        COLOR: function () {
          return V;
        },
        COMMA_DELIMITER: function () {
          return z;
        },
        CONFIG_UNIT: function () {
          return m;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return g;
        },
        CONFIG_Y_VALUE: function () {
          return d;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return P;
        },
        FLEX: function () {
          return B;
        },
        FONT_VARIATION_SETTINGS: function () {
          return x;
        },
        HEIGHT: function () {
          return U;
        },
        HTML_ELEMENT: function () {
          return ee;
        },
        IMMEDIATE_CHILDREN: function () {
          return q;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return M;
        },
        PARENT: function () {
          return Z;
        },
        PLAIN_OBJECT: function () {
          return et;
        },
        PRESERVE_3D: function () {
          return J;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return er;
        },
        RENDER_TRANSFORM: function () {
          return ei;
        },
        ROTATE_X: function () {
          return R;
        },
        ROTATE_Y: function () {
          return w;
        },
        ROTATE_Z: function () {
          return A;
        },
        SCALE_3D: function () {
          return _;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return S;
        },
        SIBLINGS: function () {
          return K;
        },
        SKEW: function () {
          return C;
        },
        SKEW_X: function () {
          return L;
        },
        SKEW_Y: function () {
          return N;
        },
        TRANSFORM: function () {
          return h;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return T;
        },
        TRANSLATE_Z: function () {
          return I;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return F;
        },
        WILL_CHANGE: function () {
          return H;
        },
        W_MOD_IX: function () {
          return s;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        s = "w-mod-ix",
        l = ".w-dyn-item",
        c = "xValue",
        d = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        E = "zUnit",
        m = "unit",
        h = "transform",
        y = "translateX",
        T = "translateY",
        I = "translateZ",
        b = "translate3d",
        v = "scaleX",
        O = "scaleY",
        S = "scaleZ",
        _ = "scale3d",
        R = "rotateX",
        w = "rotateY",
        A = "rotateZ",
        C = "skew",
        L = "skewX",
        N = "skewY",
        M = "opacity",
        P = "filter",
        x = "font-variation-settings",
        F = "width",
        U = "height",
        k = "backgroundColor",
        D = "background",
        G = "borderColor",
        V = "color",
        X = "display",
        B = "flex",
        H = "willChange",
        j = "AUTO",
        z = ",",
        W = ":",
        Q = "|",
        Y = "CHILDREN",
        q = "IMMEDIATE_CHILDREN",
        K = "SIBLINGS",
        Z = "PARENT",
        J = "preserve-3d",
        ee = "HTML_ELEMENT",
        et = "PLAIN_OBJECT",
        en = "ABSTRACT_NODE",
        ei = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        er = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return s;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = c(n(1833), t),
        o = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let s = u(n(8023)),
        l = u(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: s,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        d = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [s]: !0, [l]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return s;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return d;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        s = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        d = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          s = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (s.startsWith("#")) {
          let e = s.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (s.startsWith("rgba")) {
          let e = s.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (s.startsWith("rgb")) {
          let e = s.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10));
        } else if (s.startsWith("hsla")) {
          let e,
            n,
            o,
            l = s.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            d = parseFloat(l[1].replace("%", "")) / 100,
            u = parseFloat(l[2].replace("%", "")) / 100;
          r = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * u - 1)) * d,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            g = u - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = p), (o = 0))
            : c >= 60 && c < 120
            ? ((e = p), (n = f), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (o = p))
            : c >= 180 && c < 240
            ? ((e = 0), (n = p), (o = f))
            : c >= 240 && c < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + g) * 255)),
            (i = Math.round((n + g) * 255)),
            (a = Math.round((o + g) * 255));
        } else if (s.startsWith("hsl")) {
          let e,
            n,
            r,
            o = s.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            c = parseFloat(o[1].replace("%", "")) / 100,
            d = parseFloat(o[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * d - 1)) * c,
            f = u * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = d - u / 2;
          l >= 0 && l < 60
            ? ((e = u), (n = f), (r = 0))
            : l >= 60 && l < 120
            ? ((e = f), (n = u), (r = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = u), (r = f))
            : l >= 180 && l < 240
            ? ((e = 0), (n = f), (r = u))
            : l >= 240 && l < 300
            ? ((e = f), (n = 0), (r = u))
            : ((e = u), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return s;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return d;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        s = f(n(3767)),
        l = f(n(5861)),
        c = f(n(1799)),
        d = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return d;
          },
          IS_BROWSER_ENV: function () {
            return s;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        s = "undefined" != typeof window,
        l = (e, t) => (s ? e() : t),
        c = l(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        d = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return d;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        s = (i = n(1361)) && i.__esModule ? i : { default: i };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function d(e) {
        return (0, s.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return B;
          },
          bouncePast: function () {
            return H;
          },
          ease: function () {
            return s;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return d;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return P;
          },
          inCirc: function () {
            return C;
          },
          inCubic: function () {
            return g;
          },
          inElastic: function () {
            return U;
          },
          inExpo: function () {
            return R;
          },
          inOutBack: function () {
            return F;
          },
          inOutCirc: function () {
            return N;
          },
          inOutCubic: function () {
            return m;
          },
          inOutElastic: function () {
            return D;
          },
          inOutExpo: function () {
            return A;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return T;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return _;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return h;
          },
          inQuint: function () {
            return I;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return x;
          },
          outBounce: function () {
            return M;
          },
          outCirc: function () {
            return L;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return k;
          },
          outExpo: function () {
            return w;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return b;
          },
          outSine: function () {
            return S;
          },
          swingFrom: function () {
            return V;
          },
          swingFromTo: function () {
            return G;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        s = (0, o.default)(0.25, 0.1, 0.25, 1),
        l = (0, o.default)(0.42, 0, 1, 1),
        c = (0, o.default)(0, 0, 0.58, 1),
        d = (0, o.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function g(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function h(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function I(e) {
        return Math.pow(e, 5);
      }
      function b(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function S(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function _(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function w(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function A(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function C(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function L(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function N(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function M(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function P(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function x(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function F(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function D(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function B(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function H(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return d;
        },
        isPluginType: function () {
          return s;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function s(e) {
        return o.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        c = l("getPluginConfig"),
        d = l("getPluginOrigin"),
        u = l("getPluginDuration"),
        f = l("getPluginDestination"),
        p = l("createPluginInstance"),
        g = l("renderPlugin"),
        E = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return eW;
        },
        clearAllStyles: function () {
          return eH;
        },
        clearObjectCache: function () {
          return ef;
        },
        getActionListProgress: function () {
          return eq;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return ev;
        },
        getDestinationValues: function () {
          return eL;
        },
        getElementId: function () {
          return em;
        },
        getInstanceId: function () {
          return eg;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eC;
        },
        getMaxDurationItemIndex: function () {
          return eY;
        },
        getNamespacedParameterId: function () {
          return eJ;
        },
        getRenderType: function () {
          return eN;
        },
        getStyleProp: function () {
          return eM;
        },
        mediaQueriesEqual: function () {
          return e1;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return eK;
        },
        reifyState: function () {
          return eh;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return d.default;
        },
        shouldAllowMediaQuery: function () {
          return e0;
        },
        shouldNamespaceEventParameter: function () {
          return eZ;
        },
        stringifyTarget: function () {
          return e2;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = E(n(4075)),
        o = E(n(1455)),
        s = E(n(5720)),
        l = n(1185),
        c = n(7087),
        d = E(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: m,
          TRANSFORM: h,
          TRANSLATE_3D: y,
          SCALE_3D: T,
          ROTATE_X: I,
          ROTATE_Y: b,
          ROTATE_Z: v,
          SKEW: O,
          PRESERVE_3D: S,
          FLEX: _,
          OPACITY: R,
          FILTER: w,
          FONT_VARIATION_SETTINGS: A,
          WIDTH: C,
          HEIGHT: L,
          BACKGROUND_COLOR: N,
          BORDER_COLOR: M,
          COLOR: P,
          CHILDREN: x,
          IMMEDIATE_CHILDREN: F,
          SIBLINGS: U,
          PARENT: k,
          DISPLAY: D,
          WILL_CHANGE: G,
          AUTO: V,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: B,
          BAR_DELIMITER: H,
          RENDER_TRANSFORM: j,
          RENDER_GENERAL: z,
          RENDER_STYLE: W,
          RENDER_PLUGIN: Q,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Y,
          TRANSFORM_SCALE: q,
          TRANSFORM_ROTATE: K,
          TRANSFORM_SKEW: Z,
          STYLE_OPACITY: J,
          STYLE_FILTER: ee,
          STYLE_FONT_VARIATION: et,
          STYLE_SIZE: en,
          STYLE_BACKGROUND_COLOR: ei,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: er,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: es,
        } = c.ActionTypeConsts,
        el = (e) => e.trim(),
        ec = Object.freeze({ [ei]: N, [ea]: M, [er]: P }),
        ed = Object.freeze({
          [g.TRANSFORM_PREFIXED]: h,
          [N]: m,
          [R]: R,
          [w]: w,
          [C]: C,
          [L]: L,
          [A]: A,
        }),
        eu = new Map();
      function ef() {
        eu.clear();
      }
      let ep = 1;
      function eg() {
        return "i" + ep++;
      }
      let eE = 1;
      function em(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function eh({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function eT({ store: e, select: t, onChange: n, comparator: i = ey }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, s) || n((s = r), e);
          }),
          s = t(a());
        return o;
      }
      function eI(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, s;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, r) =>
              e.concat(
                eb({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                })
              ),
            []
          );
        let {
            getValidDocument: d,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: m,
            elementContains: h,
            isSiblingNode: y,
          } = a,
          { target: T } = e;
        if (!T) return [];
        let {
          id: I,
          objectId: b,
          selector: v,
          selectorGuids: O,
          appliesTo: S,
          useEventTarget: _,
        } = eI(T);
        if (b) return [eu.has(b) ? eu.get(b) : eu.set(b, {}).get(b)];
        if (S === c.EventAppliesTo.PAGE) {
          let e = d(I);
          return e ? [e] : [];
        }
        let R = (t?.action?.config?.affectedElements ?? {})[I || v] || {},
          w = !!(R.id || R.selector),
          A = t && u(eI(t.target));
        if (
          (w
            ? ((r = R.limitAffectedElements), (o = A), (s = u(R)))
            : (o = s = u({ id: I, selector: v, selectorGuids: O })),
          t && _)
        ) {
          let e = n && (s || !0 === _) ? [n] : f(A);
          if (s) {
            if (_ === k) return f(s).filter((t) => e.some((e) => h(t, e)));
            if (_ === x) return f(s).filter((t) => e.some((e) => h(e, t)));
            if (_ === U) return f(s).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == o || null == s
          ? []
          : g.IS_BROWSER_ENV && i
          ? f(s).filter((e) => i.contains(e))
          : r === x
          ? f(o, s)
          : r === F
          ? p(f(o)).filter(m(s))
          : r === U
          ? E(f(o)).filter(m(s))
          : f(s);
      }
      function ev({ element: e, actionItem: t }) {
        if (!g.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case en:
          case ei:
          case ea:
          case er:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eO = /px/,
        eS = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eU[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: s } = i;
        if ((0, p.isPluginType)(s)) return (0, p.getPluginOrigin)(s)(t[s], i);
        switch (i.actionTypeId) {
          case Y:
          case q:
          case K:
          case Z:
            return t[i.actionTypeId] || ex[i.actionTypeId];
          case ee:
            return eS(t[i.actionTypeId], i.config.filters);
          case et:
            return e_(t[i.actionTypeId], i.config.fontVariations);
          case J:
            return { value: (0, r.default)(parseFloat(o(e, R)), 1) };
          case en: {
            let t,
              a = o(e, C),
              s = o(e, L);
            return {
              widthValue:
                i.config.widthUnit === V
                  ? eO.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === V
                  ? eO.test(s)
                    ? parseFloat(s)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(s), parseFloat(n.height)),
            };
          }
          case ei:
          case ea:
          case er:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = ec[t],
                o = i(e, a),
                s = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eV, eG.test(o) ? o : n[a]).split(X);
              return {
                rValue: (0, r.default)(parseInt(s[0], 10), 255),
                gValue: (0, r.default)(parseInt(s[1], 10), 255),
                bValue: (0, r.default)(parseInt(s[2], 10), 255),
                aValue: (0, r.default)(parseFloat(s[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case eo:
            return { value: (0, r.default)(o(e, D), n.display) };
          case es:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let ew = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eC = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case ee: {
              let e = (0, s.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case et: {
              let e = (0, s.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eL({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Y:
          case q:
          case K:
          case Z: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case en: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: s } = t.config,
              { widthValue: l, heightValue: c } = t.config;
            if (!g.IS_BROWSER_ENV) return { widthValue: l, heightValue: c };
            if (o === V) {
              let t = i(e, C);
              a(e, C, ""), (l = r(e, "offsetWidth")), a(e, C, t);
            }
            if (s === V) {
              let t = i(e, L);
              a(e, L, ""), (c = r(e, "offsetHeight")), a(e, L, t);
            }
            return { widthValue: l, heightValue: c };
          }
          case ei:
          case ea:
          case er: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: s,
            } = t.config;
            if (s && s.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, s),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case ee:
            return t.config.filters.reduce(ew, {});
          case et:
            return t.config.fontVariations.reduce(eA, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eN(e) {
        return /^TRANSFORM_/.test(e)
          ? j
          : /^STYLE_/.test(e)
          ? W
          : /^GENERAL_/.test(e)
          ? z
          : /^PLUGIN_/.test(e)
          ? Q
          : void 0;
      }
      function eM(e, t) {
        return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, i, a, r, s, l, c) {
        switch (l) {
          case j:
            var d = e,
              u = t,
              f = n,
              E = a,
              m = s;
            let h = eD
                .map((e) => {
                  let t = ex[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: s = "",
                    } = u[e] || {};
                  switch (e) {
                    case Y:
                      return `${y}(${n}${r}, ${i}${o}, ${a}${s})`;
                    case q:
                      return `${T}(${n}${r}, ${i}${o}, ${a}${s})`;
                    case K:
                      return `${I}(${n}${r}) ${b}(${i}${o}) ${v}(${a}${s})`;
                    case Z:
                      return `${O}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: R } = m;
            eX(d, g.TRANSFORM_PREFIXED, m),
              R(d, g.TRANSFORM_PREFIXED, h),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i }
              ) {
                return (
                  (e === Y && void 0 !== i) ||
                  (e === q && void 0 !== i) ||
                  (e === K && (void 0 !== t || void 0 !== n))
                );
              })(E, f) && R(d, g.TRANSFORM_STYLE_PREFIXED, S);
            return;
          case W:
            return (function (e, t, n, i, a, r) {
              let { setStyle: s } = r;
              switch (i.actionTypeId) {
                case en: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: l } = n;
                  void 0 !== o &&
                    (t === V && (t = "px"), eX(e, C, r), s(e, C, o + t)),
                    void 0 !== l &&
                      (a === V && (a = "px"), eX(e, L, r), s(e, L, l + a));
                  break;
                }
                case ee:
                  var l = i.config;
                  let c = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ek(n, l)})`,
                      ""
                    ),
                    { setStyle: d } = r;
                  eX(e, w, r), d(e, w, c);
                  break;
                case et:
                  i.config;
                  let u = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = r;
                  eX(e, A, r), f(e, A, u);
                  break;
                case ei:
                case ea:
                case er: {
                  let t = ec[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    c = n.aValue;
                  eX(e, t, r),
                    s(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${a},${o},${l})`
                        : `rgba(${a},${o},${l},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  eX(e, a, r), s(e, a, n.value + t);
                }
              }
            })(e, 0, n, a, r, s);
          case z:
            var N = e,
              M = a,
              P = s;
            let { setStyle: x } = P;
            if (M.actionTypeId === eo) {
              let { value: e } = M.config;
              x(N, D, e === _ && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, a);
          }
        }
      }
      let ex = {
          [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Z]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eU = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ek = (e, t) => {
          let n = (0, s.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eD = Object.keys(ex),
        eG = /^rgb/,
        eV = RegExp("rgba?\\(([^)]+)\\)");
      function eX(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = ed[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, G);
        if (!o) return void r(e, G, i);
        let s = o.split(X).map(el);
        -1 === s.indexOf(i) && r(e, G, s.concat(i).join(X));
      }
      function eB(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = ed[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, G);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            G,
            o
              .split(X)
              .map(el)
              .filter((e) => e !== i)
              .join(X)
          );
      }
      function eH({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            s = a[o];
          s && ej({ actionList: s, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            ej({ actionList: a[e], elementApi: t });
          });
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        i &&
          i.forEach((e) => {
            ez({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                ez({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function ez({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          (i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : eQ({ effect: e$, actionTypeId: a, elementApi: n })),
            eb({ config: r, event: t, elementApi: n }).forEach(i);
        });
      }
      function eW(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === en) {
          let { config: n } = t;
          n.widthUnit === V && i(e, C, ""), n.heightUnit === V && i(e, L, "");
        }
        a(e, G) && eQ({ effect: eB, actionTypeId: r, elementApi: n })(e);
      }
      let eQ =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case Y:
            case q:
            case K:
            case Z:
              e(i, g.TRANSFORM_PREFIXED, n);
              break;
            case ee:
              e(i, w, n);
              break;
            case et:
              e(i, A, n);
              break;
            case J:
              e(i, R, n);
              break;
            case en:
              e(i, C, n), e(i, L, n);
              break;
            case ei:
            case ea:
            case er:
              e(i, ec[t], n);
              break;
            case eo:
              e(i, D, n);
          }
        };
      function e$(e, t, n) {
        let { setStyle: i } = n;
        eB(e, t, n),
          i(e, t, ""),
          t === g.TRANSFORM_PREFIXED && i(e, g.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eY(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function eq(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          s = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              l = n[eY(n)],
              { config: c, actionTypeId: d } = l;
            a.id === l.id && (s = o + r);
            let u = eN(d) === z ? 0 : c.duration;
            o += c.delay + u;
          }),
          o > 0 ? (0, u.optimizeFloat)(s / o) : 0
        );
      }
      function eK({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eZ(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eJ(e, t) {
        return e + B + t;
      }
      function e0(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e1(e, t) {
        return (0, d.default)(e && e.sort(), t && t.sort());
      }
      function e2(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + H + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + H + n + H + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return S;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: s,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: d,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: m,
          CONFIG_UNIT: h,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: I,
        } = o.IX2EngineActionTypes,
        b = {},
        v = (e = b, t = {}) => {
          switch (t.type) {
            case y:
              return b;
            case T: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: s,
                } = t.payload,
                { actionTypeId: l } = o,
                c = e;
              return (
                (0, r.getIn)(c, [n, i]) !== i && (c = O(c, i, s, n, o)),
                S(c, n, l, a, o)
              );
            }
            case I: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return S(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function O(e, t, n, i, a) {
        let o =
          n === l ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function S(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return _.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let _ = [
        [d, g],
        [u, E],
        [f, m],
        [p, h],
      ];
    },
    5050: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "plugin", {
          enumerable: !0,
          get: function () {
            return i.plugin;
          },
        });
      let i = n(4574);
    },
    2605: function (e, t) {
      "use strict";
      function n(e) {
        e.addAction("class", {
          createCustomTween: (e, t, n, i, a) => {
            let r = n.class,
              o = r?.selectors || [],
              s = r?.operation,
              l = o
                ? i.map((e) => ({ element: e, classList: [...e.classList] }))
                : [],
              c = () => {
                if (s && o)
                  for (let e of i)
                    "addClass" === s
                      ? o.forEach((t) => e.classList.add(t))
                      : "removeClass" === s
                      ? o.forEach((t) => e.classList.remove(t))
                      : "toggleClass" === s &&
                        o.forEach((t) => e.classList.toggle(t));
              };
            return (
              e.to(
                {},
                { duration: 0.001, onComplete: c, onReverseComplete: c },
                a && 0 !== a ? a : 0.001
              ),
              () => {
                if (o) {
                  for (let e of l)
                    if (
                      e.element &&
                      (e.element instanceof HTMLElement &&
                        (e.element.className = ""),
                      e.element.classList)
                    )
                      for (let t of e.classList) e.element.classList.add(t);
                }
              }
            );
          },
        })
          .addAction("style", {
            createTweenConfig: (e) => {
              let t = { to: {}, from: {} };
              for (let n in e) {
                let i = e[n],
                  a = Array.isArray(i) ? i[1] : i,
                  r = Array.isArray(i) ? i[0] : void 0;
                null != a && (t.to[n] = a), null != r && (t.from[n] = r);
              }
              return t;
            },
          })
          .addAction("transform", {
            createTweenConfig: (e) => {
              let t = { to: {}, from: {} };
              for (let n in e) {
                let i = e[n],
                  a = Array.isArray(i) ? i[1] : i,
                  r = Array.isArray(i) ? i[0] : void 0;
                switch (n) {
                  case "autoAlpha":
                  case "opacity":
                    null != a &&
                      "string" == typeof a &&
                      (a = parseFloat(a) / 100),
                      null != r &&
                        "string" == typeof r &&
                        (r = parseFloat(r) / 100);
                    break;
                  case "transformOrigin":
                    "string" == typeof i
                      ? (r = a = a || i)
                      : "string" == typeof r
                      ? (a = r)
                      : "string" == typeof a && (r = a);
                    break;
                  case "xPercent":
                  case "yPercent":
                    null != a && "string" == typeof a && (a = parseFloat(a)),
                      null != r && "string" == typeof r && (r = parseFloat(r));
                }
                null != a && (t.to[n] = a), null != r && (t.from[n] = r);
              }
              return t;
            },
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "build", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    9845: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "build", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = n(2908),
        a = n(6969);
      function r(e) {
        e.addCondition("prefersReducedMotion", new o())
          .addCondition("webflowBreakpoints", new s())
          .addCondition("customMediaQuery", new l())
          .addCondition("colorScheme", new c())
          .addCondition("elementDataAttribute", new d())
          .addCondition("currentTime", new u())
          .addCondition("elementState", new f());
      }
      class o {
        cache = null;
        isReactive = !0;
        ensure() {
          if (!this.cache) {
            let e = window.matchMedia("(prefers-reduced-motion: reduce)");
            (this.cache = { mql: e, matches: e.matches, callbacks: new Set() }),
              e.addEventListener("change", (e) => {
                for (let t of ((this.cache.matches = e.matches),
                this.cache.callbacks))
                  t();
              });
          }
          return this.cache;
        }
        async evaluate(e) {
          let [t, , n] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.PREFERS_REDUCED_MOTION) return !1;
          let a = this.ensure().matches;
          return 1 === n ? !a : a;
        }
        observe(e, t) {
          let [n] = e;
          if (n !== i.IX3_WF_EXTENSION_KEYS.PREFERS_REDUCED_MOTION)
            return a.noop;
          let r = this.ensure(),
            o = async () => t(await this.evaluate(e));
          return r.callbacks.add(o), () => r.callbacks.delete(o);
        }
        dispose() {
          this.cache && (this.cache.callbacks.clear(), (this.cache = null));
        }
      }
      class s {
        static breakpointQueries = {
          main: "(min-width: 992px)",
          medium: "(max-width: 991px) and (min-width: 768px)",
          small: "(max-width: 767px) and (min-width: 480px)",
          tiny: "(max-width: 479px)",
          large: "(min-width: 1280px)",
          xl: "(min-width: 1440px)",
          xxl: "(min-width: 1920px)",
        };
        cache = new Map();
        isReactive = !0;
        ensure(e) {
          let t = this.cache.get(e);
          if (!t) {
            let n = window.matchMedia(e);
            (t = { mql: n, matches: n.matches, callbacks: new Set() }),
              n.addEventListener("change", (e) => {
                for (let n of ((t.matches = e.matches), t.callbacks)) n();
              }),
              this.cache.set(e, t);
          }
          return t;
        }
        getResult(e) {
          return !!e && this.ensure(e).matches;
        }
        observeQ(e, t) {
          if (!e) return a.noop;
          let n = this.ensure(e);
          return n.callbacks.add(t), () => n.callbacks.delete(t);
        }
        async evaluate(e) {
          let [t, n, a] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.WEBFLOW_BREAKPOINTS || !n)
            return !1;
          let { breakpoints: r } = n;
          if (!r?.length) return 1 === a;
          let o = r.some((e) => {
            let t = s.breakpointQueries[e];
            return !!t && this.getResult(t);
          });
          return 1 === a ? !o : o;
        }
        observe(e, t) {
          let [n, r] = e;
          if (n !== i.IX3_WF_EXTENSION_KEYS.WEBFLOW_BREAKPOINTS || !r)
            return a.noop;
          let { breakpoints: o } = r;
          if (!o?.length) return a.noop;
          let l = async () => t(await this.evaluate(e)),
            c = [];
          return (
            o.forEach((e) => {
              let t = s.breakpointQueries[e];
              t && c.push(this.observeQ(t, l));
            }),
            () => c.forEach((e) => e())
          );
        }
        dispose() {
          this.cache.forEach((e) => e.callbacks.clear()), this.cache.clear();
        }
      }
      class l {
        cache = new Map();
        isReactive = !0;
        ensure(e) {
          let t = this.cache.get(e);
          if (!t) {
            let n = window.matchMedia(e);
            (t = { mql: n, matches: n.matches, callbacks: new Set() }),
              n.addEventListener("change", (e) => {
                for (let n of ((t.matches = e.matches), t.callbacks)) n();
              }),
              this.cache.set(e, t);
          }
          return t;
        }
        getResult(e) {
          return !!e && this.ensure(e).matches;
        }
        observeQ(e, t) {
          if (!e) return a.noop;
          let n = this.ensure(e);
          return n.callbacks.add(t), () => n.callbacks.delete(t);
        }
        async evaluate(e) {
          let [t, n, a] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.CUSTOM_MEDIA_QUERY || !n) return !1;
          let { query: r } = n;
          if (!r?.trim()) return 1 === a;
          let o = this.getResult(r);
          return 1 === a ? !o : o;
        }
        observe(e, t) {
          let [n, r] = e;
          if (n !== i.IX3_WF_EXTENSION_KEYS.CUSTOM_MEDIA_QUERY || !r)
            return a.noop;
          let { query: o } = r;
          if (!o?.trim()) return a.noop;
          let s = async () => t(await this.evaluate(e));
          return this.observeQ(o, s);
        }
        dispose() {
          this.cache.forEach((e) => e.callbacks.clear()), this.cache.clear();
        }
      }
      class c {
        cache = null;
        isReactive = !0;
        ensure() {
          if (!this.cache) {
            let e = window.matchMedia("(prefers-color-scheme: dark)");
            (this.cache = { mql: e, matches: e.matches, callbacks: new Set() }),
              e.addEventListener("change", (e) => {
                for (let t of ((this.cache.matches = e.matches),
                this.cache.callbacks))
                  t();
              });
          }
          return this.cache;
        }
        async evaluate(e) {
          let [t, n, a] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.COLOR_SCHEME || !n) return !1;
          let { scheme: r } = n,
            o = this.ensure().matches,
            s = "dark" === r ? o : !o;
          return 1 === a ? !s : s;
        }
        observe(e, t) {
          let [n] = e;
          if (n !== i.IX3_WF_EXTENSION_KEYS.COLOR_SCHEME) return a.noop;
          let r = this.ensure(),
            o = async () => t(await this.evaluate(e));
          return r.callbacks.add(o), () => r.callbacks.delete(o);
        }
        dispose() {
          this.cache && (this.cache.callbacks.clear(), (this.cache = null));
        }
      }
      class d {
        observers = new Map();
        isReactive = !1;
        compare(e, t, n) {
          if (null === e) return !1;
          switch (n) {
            case "=":
              return e === t;
            case "~":
              return e.includes(t);
            case "^":
              return e.startsWith(t);
            case "$":
              return e.endsWith(t);
            case "?":
              return !0;
            case ">":
              return parseFloat(e) > parseFloat(t);
            case "<":
              return parseFloat(e) < parseFloat(t);
            case ">=":
              return parseFloat(e) >= parseFloat(t);
            case "<=":
              return parseFloat(e) <= parseFloat(t);
            default:
              return !1;
          }
        }
        async evaluate(e) {
          let [t, n, a] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_DATA_ATTRIBUTE || !n)
            return !1;
          let { selector: r, attribute: o, value: s = "", operator: l } = n,
            c = 1 === a;
          if (!r || !o) return c;
          let d = document.querySelector(r);
          if (!d) return c;
          let u = this.compare(d.getAttribute(`data-${o}`), String(s), l);
          return c ? !u : u;
        }
        observe(e, t) {
          if (e[0] !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_DATA_ATTRIBUTE || !e[1])
            return a.noop;
          let { selector: n, attribute: r } = e[1];
          return n && r ? this.observeAttr(n, r, e, t) : a.noop;
        }
        observeAttr(e, t, n, i) {
          let a = `elementDataAttribute:${e}:${t}`,
            r = this.observers.get(a);
          if (!r) {
            let n = new MutationObserver((e) => {
                for (let n of e)
                  if (
                    "attributes" === n.type &&
                    n.attributeName === `data-${t}`
                  ) {
                    r?.callbacks.forEach((e) => e());
                    break;
                  }
              }),
              i = document.querySelector(e);
            i &&
              n.observe(i, { attributes: !0, attributeFilter: [`data-${t}`] }),
              (r = { observer: n, callbacks: new Set() }),
              this.observers.set(a, r);
          }
          let o = () => this.evaluate(n).then(i);
          return (
            r.callbacks.add(o),
            () => {
              let e = this.observers.get(a);
              e &&
                (e.callbacks.delete(o),
                e.callbacks.size ||
                  (e.observer.disconnect(), this.observers.delete(a)));
            }
          );
        }
        dispose() {
          this.observers.forEach((e) => {
            e.observer.disconnect(), e.callbacks.clear();
          }),
            this.observers.clear();
        }
      }
      class u {
        intervalId = null;
        callbacks = new Set();
        isReactive = !0;
        parseTime(e) {
          let t = e.match(/^(\d{1,2}):(\d{2})$/);
          if (!t) return null;
          let n = parseInt(t[1], 10),
            i = parseInt(t[2], 10);
          return n < 0 || n > 23 || i < 0 || i > 59
            ? null
            : { hours: n, minutes: i };
        }
        getCurrentTime() {
          let e = new Date();
          return { hours: e.getHours(), minutes: e.getMinutes() };
        }
        timeToMinutes(e) {
          return 60 * e.hours + e.minutes;
        }
        compareTime(e, t, n, i) {
          let a = this.parseTime(n);
          if (!a) return !1;
          let r = this.timeToMinutes(e),
            o = this.timeToMinutes(a);
          switch (t) {
            case "before":
              return r < o;
            case "after":
              return r > o;
            case "between": {
              if (!i) return !1;
              let e = this.parseTime(i);
              if (!e) return !1;
              let t = this.timeToMinutes(e);
              return r >= o && r <= t;
            }
            default:
              return !1;
          }
        }
        async evaluate(e) {
          let [t, n, a] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.CURRENT_TIME || !n) return !1;
          let { comparison: r, time: o, endTime: s } = n;
          if (!o?.trim()) return 1 === a;
          let l = this.getCurrentTime(),
            c = this.compareTime(l, r, o, s);
          return 1 === a ? !c : c;
        }
        observe(e, t) {
          let [n] = e;
          if (n !== i.IX3_WF_EXTENSION_KEYS.CURRENT_TIME) return a.noop;
          let r = async () => t(await this.evaluate(e));
          return (
            this.callbacks.add(r),
            this.intervalId ||
              1 !== this.callbacks.size ||
              (this.intervalId = window.setInterval(() => {
                this.callbacks.forEach((e) => e());
              }, 6e4)),
            () => {
              this.callbacks.delete(r),
                0 === this.callbacks.size &&
                  this.intervalId &&
                  (clearInterval(this.intervalId), (this.intervalId = null));
            }
          );
        }
        dispose() {
          this.callbacks.clear(),
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
        }
      }
      class f {
        observers = new Map();
        isReactive = !1;
        async evaluate(e) {
          let [t, n, a] = e;
          if (t !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_STATE || !n) return !1;
          let { selector: r, state: o, className: s } = n,
            l = 1 === a;
          if (!r) return l;
          let c = document.querySelector(r);
          if (!c) return l;
          let d = !1;
          switch (o) {
            case "visible":
              d = c.offsetWidth > 0 && c.offsetHeight > 0;
              break;
            case "hidden":
              d = 0 === c.offsetWidth || 0 === c.offsetHeight;
              break;
            case "hasClass":
              d = !!s && c.classList.contains(s);
              break;
            default:
              d = !0;
          }
          return l ? !d : d;
        }
        observe(e, t) {
          if (e[0] !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_STATE || !e[1])
            return a.noop;
          let { selector: n } = e[1];
          return n ? this.observeEl(n, e, t) : a.noop;
        }
        observeEl(e, t, n) {
          let i = `elementState:${e}`,
            a = this.observers.get(i);
          if (!a) {
            let t = new MutationObserver(() =>
                a?.callbacks.forEach((e) => e())
              ),
              n = document.querySelector(e);
            n && t.observe(n, { attributes: !0, childList: !0, subtree: !0 }),
              (a = { observer: t, callbacks: new Set() }),
              this.observers.set(i, a);
          }
          let r = () => this.evaluate(t).then(n);
          return (
            a.callbacks.add(r),
            () => {
              let e = this.observers.get(i);
              e &&
                (e.callbacks.delete(r),
                e.callbacks.size ||
                  (e.observer.disconnect(), this.observers.delete(i)));
            }
          );
        }
        dispose() {
          this.observers.forEach((e) => {
            e.observer.disconnect(), e.callbacks.clear();
          }),
            this.observers.clear();
        }
      }
    },
    3922: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        elementTargetSelector: function () {
          return d;
        },
        safeClosest: function () {
          return l;
        },
        safeGetElementById: function () {
          return a;
        },
        safeMatches: function () {
          return c;
        },
        safeQuerySelector: function () {
          return s;
        },
        safeQuerySelectorAll: function () {
          return r;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      function a(e) {
        try {
          return document.getElementById(e);
        } catch {
          return console.warn(new o(`Invalid id syntax: ${e}`)), null;
        }
      }
      function r(e, t) {
        try {
          return t.querySelectorAll(e);
        } catch {
          return console.warn(new o(`Invalid selector syntax: ${e}`)), null;
        }
      }
      class o extends Error {
        selector;
        scope;
        constructor(e, t, n) {
          super(e),
            (this.selector = t),
            (this.scope = n),
            (this.name = "IX3SelectorError");
        }
      }
      function s(e, t) {
        try {
          return t.querySelector(e);
        } catch {
          return console.warn(new o(`Invalid selector syntax: ${e}`)), null;
        }
      }
      function l(e, t) {
        try {
          return e.closest(t);
        } catch {
          return console.warn(new o(`Invalid selector syntax: ${t}`)), null;
        }
      }
      function c(e, t) {
        try {
          return e.matches(t);
        } catch {
          return console.warn(new o(`Invalid selector syntax: ${t}`)), !1;
        }
      }
      let d = (e) =>
        `[data-wf-target*="${CSS.escape(`[${JSON.stringify(e)}`)}"]`;
    },
    4574: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "plugin", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(6151),
        a = n(2605),
        r = n(9845),
        o = n(7775),
        s = n(1983),
        l = n(2908),
        c = new s.RuntimeBuilder(l.CORE_PLUGIN_INFO);
      (0, i.build)(c), (0, a.build)(c), (0, r.build)(c), (0, o.build)(c);
      let d = c.buildRuntime();
    },
    7775: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "build", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(2104),
        a = n(2908),
        r = n(3922),
        o = [];
      function s(e) {
        e.addTargetResolver("id", {
          resolve: ([, e]) => {
            let [t, n] = Array.isArray(e) ? e : [e];
            if (!t) return o;
            let i = (0, r.safeGetElementById)(t);
            return l(i ? [i] : o, n);
          },
        })
          .addTargetResolver("trigger-only", {
            resolve: ([, e], { triggerElement: t }) => {
              let n = Array.isArray(e) ? e[1] : void 0;
              return t ? l([t], n) : o;
            },
            isDynamic: !0,
          })
          .addTargetResolver("inst", {
            resolve: ([, e], { triggerElement: t }) => {
              if (!Array.isArray(e)) return o;
              let [n, a] = e,
                s = Array.isArray(n),
                c = s ? a : void 0,
                d = s ? (0, i.pair)(n[0], n[1]) : (0, i.pair)(n, a),
                u = (0, r.safeQuerySelectorAll)(
                  (0, r.elementTargetSelector)(d),
                  document
                );
              if (!u || !u.length) return o;
              let f = Array.from(u);
              if (!t) return l(f, c);
              let p = t.dataset.wfTarget;
              if (!p) return o;
              try {
                let e = JSON.parse(p),
                  t = (0, i.getFirst)(d),
                  n = e.find((e) => (0, i.getFirst)((0, i.getFirst)(e)) === t);
                if (!n) return o;
                let a = (0, i.getSecond)(n),
                  r = f.filter((e) =>
                    (e.dataset.wfTarget || "").includes(`${JSON.stringify(a)}]`)
                  );
                return l(r, c);
              } catch (e) {
                return o;
              }
            },
            isDynamic: !0,
          })
          .addTargetResolver("class", {
            resolve: ([, e]) => {
              let [t, n] = Array.isArray(e) ? e : [e];
              if (!t) return o;
              let i = (0, r.safeQuerySelectorAll)(`.${t}`, document);
              return i ? l(Array.from(i), n) : o;
            },
          })
          .addTargetResolver("selector", {
            resolve: ([, e]) => {
              let [t, n] = Array.isArray(e) ? e : [e];
              if (!t) return o;
              let i = (0, r.safeQuerySelectorAll)(t, document);
              return i ? l(Array.from(i), n) : o;
            },
          })
          .addTargetResolver("body", { resolve: () => [document.body] })
          .addTargetResolver("attribute", {
            resolve: ([, e]) => {
              let [t, n] = Array.isArray(e) ? e : [e];
              if (!t) return o;
              let i = (0, r.safeQuerySelectorAll)(t, document);
              return i ? l(Array.from(i), n) : o;
            },
          });
      }
      function l(e, t) {
        if (!t) return e;
        if (Array.isArray(t)) {
          let [i, o] = t;
          switch (i) {
            case a.TargetScope.FIRST_ANCESTOR: {
              let t = [];
              for (let n of e)
                if (o) {
                  let e = (0, r.safeClosest)(n, o);
                  e && t.push(e);
                }
              return t;
            }
            case a.TargetScope.FIRST_DESCENDANT: {
              let t = [];
              for (let n of e) {
                let e = o
                  ? (0, r.safeQuerySelector)(o, n)
                  : n.firstElementChild;
                e && t.push(e);
              }
              return t;
            }
            case a.TargetScope.DESCENDANTS: {
              let t = [];
              for (let n of e)
                for (let e of (0, r.safeQuerySelectorAll)(o, n) || [])
                  t.push(e);
              return t;
            }
            case a.TargetScope.ANCESTORS: {
              let t = [];
              for (let n of e) {
                let e = n.parentElement;
                for (; e; )
                  (!o || (0, r.safeMatches)(e, o)) && t.push(e),
                    (e = e.parentElement);
              }
              return t;
            }
            default:
              var n = i;
              throw Error(`[scope.type] Unhandled case: ${JSON.stringify(n)}`);
          }
        }
        switch (t) {
          case a.TargetScope.CHILDREN: {
            let t = [];
            for (let n of e) for (let e of n.children) t.push(e);
            return t;
          }
          case a.TargetScope.PARENT: {
            let t = [];
            for (let n of e) n.parentElement && t.push(n.parentElement);
            return t;
          }
          case a.TargetScope.SIBLINGS: {
            let t = [];
            for (let n of e)
              if (n.parentElement)
                for (let e of n.parentElement.children) e !== n && t.push(e);
            return t;
          }
          case a.TargetScope.NEXT: {
            let t = [];
            for (let n of e) {
              let e = n.nextElementSibling;
              e && t.push(e);
            }
            return t;
          }
          case a.TargetScope.PREVIOUS: {
            let t = [];
            for (let n of e) {
              let e = n.previousElementSibling;
              e && t.push(e);
            }
            return t;
          }
          default:
            return e;
        }
      }
    },
    6151: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "build", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let i = n(6969);
      function a(e) {
        (function (e) {
          let t = new WeakMap();
          e.addTrigger("click", (e, n, i, a) => {
            let [, r] = e,
              o = i.addEventListener(
                n,
                "click",
                (i) => {
                  let o = r.pluginConfig?.click,
                    s = t.get(n) || new WeakMap();
                  t.set(n, s);
                  let l = (s.get(e) || 0) + 1;
                  switch ((s.set(e, l), o)) {
                    case "each":
                    default:
                      a(i);
                      break;
                    case "first":
                      1 === l && a(i);
                      break;
                    case "second":
                      2 === l && a(i);
                      break;
                    case "odd":
                      l % 2 == 1 && a(i);
                      break;
                    case "even":
                      l % 2 == 0 && a(i);
                      break;
                    case "custom": {
                      let e = r.pluginConfig?.custom;
                      e && l === e && a(i);
                    }
                  }
                },
                { delegate: !0 }
              );
            return () => {
              o(), t.delete(n);
            };
          });
        })(e),
          (function (e) {
            let t = new WeakMap();
            e.addTrigger("hover", (e, n, i, a) => {
              let [, r] = e,
                o = [],
                s = (e, i) => {
                  if (r.pluginConfig?.type !== i) return;
                  let o = r.pluginConfig?.hover || "each",
                    s = t.get(n) || new Map();
                  t.set(n, s);
                  let l = (s.get(i) || 0) + 1;
                  switch ((s.set(i, l), o)) {
                    case "each":
                    default:
                      a(e);
                      break;
                    case "first":
                      1 === l && a(e);
                      break;
                    case "second":
                      2 === l && a(e);
                      break;
                    case "odd":
                      l % 2 == 1 && a(e);
                      break;
                    case "even":
                      l % 2 == 0 && a(e);
                      break;
                    case "custom": {
                      let t = r.pluginConfig?.custom;
                      t && l === t && a(e);
                    }
                  }
                };
              return (
                o.push(
                  i.addEventListener(n, "mouseenter", (e) => {
                    s(e, "mouseenter");
                  })
                ),
                o.push(
                  i.addEventListener(n, "mouseover", (e) => {
                    s(e, "mouseover");
                  })
                ),
                o.push(
                  i.addEventListener(n, "mouseleave", (e) => {
                    s(e, "mouseleave");
                  })
                ),
                () => {
                  o.forEach((e) => e()), (o.length = 0), t.delete(n);
                }
              );
            });
          })(e),
          e.addTrigger("load", (e, t, n, a) => {
            let r = e[1],
              o = !1,
              s = () => {
                o || ((o = !0), a({ target: t }));
              };
            switch (r.pluginConfig?.triggerPoint) {
              case "immediate":
                return s(), i.noop;
              case "fullyLoaded":
                if ("complete" === document.readyState) return s(), i.noop;
                return n.addEventListener(window, "load", s);
              default:
                if (
                  "complete" === document.readyState ||
                  "interactive" === document.readyState
                )
                  return s(), i.noop;
                return n.addEventListener(document, "DOMContentLoaded", s);
            }
          }),
          e.addTrigger("focus", (e, t, n, i) => {
            let a = e[1];
            return n.addEventListener(
              t,
              a.pluginConfig?.useFocusWithin ? "focusin" : "focus",
              i,
              { delegate: !a.pluginConfig?.useFocusWithin }
            );
          }),
          e.addTrigger("blur", (e, t, n, i) => {
            let a = e[1];
            return n.addEventListener(
              t,
              a.pluginConfig?.useFocusWithin ? "focusout" : "blur",
              i,
              { delegate: !a.pluginConfig?.useFocusWithin }
            );
          }),
          e.addTrigger("scroll", (e, t, n, a) => (a({ target: t }), i.noop)),
          e.addTrigger("custom", (e, t, n, a) => {
            let r = e[1],
              o = r.pluginConfig?.eventName;
            return o
              ? n.addEventListener(t, o, a, { delegate: !1, kind: "custom" })
              : i.noop;
          }),
          e.addTrigger("change", (e, t, n, i) =>
            n.addEventListener(t, "change", i)
          );
      }
    },
    6969: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "noop", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = () => {};
    },
    2908: function (e, t, n) {
      "use strict";
      var i, a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "CORE_PLUGIN_INFO", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i = n(2387)),
        (a = t),
        Object.keys(i).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(a, e) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
      let r = { namespace: "wf", pluginId: "core", version: "1.0.0" };
    },
    2387: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i,
        a,
        r,
        o = {
          IX3_WF_EXTENSION_KEYS: function () {
            return n;
          },
          TargetScope: function () {
            return i;
          },
        };
      for (var s in o)
        Object.defineProperty(t, s, { enumerable: !0, get: o[s] });
      ((a = n || (n = {})).CLASS = "wf:class"),
        (a.BODY = "wf:body"),
        (a.ID = "wf:id"),
        (a.TRIGGER_ONLY = "wf:trigger-only"),
        (a.SELECTOR = "wf:selector"),
        (a.ATTRIBUTE = "wf:attribute"),
        (a.INST = "wf:inst"),
        (a.STYLE = "wf:style"),
        (a.TRANSFORM = "wf:transform"),
        (a.CLICK = "wf:click"),
        (a.HOVER = "wf:hover"),
        (a.LOAD = "wf:load"),
        (a.FOCUS = "wf:focus"),
        (a.BLUR = "wf:blur"),
        (a.SCROLL = "wf:scroll"),
        (a.CUSTOM = "wf:custom"),
        (a.CHANGE = "wf:change"),
        (a.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion"),
        (a.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints"),
        (a.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery"),
        (a.COLOR_SCHEME = "wf:colorScheme"),
        (a.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute"),
        (a.CURRENT_TIME = "wf:currentTime"),
        (a.ELEMENT_STATE = "wf:elementState"),
        ((r = i || (i = {})).ALL = "all"),
        (r.PARENT = "parent"),
        (r.CHILDREN = "children"),
        (r.SIBLINGS = "siblings"),
        (r.NEXT = "next"),
        (r.PREVIOUS = "previous"),
        (r.FIRST_ANCESTOR = "first-ancestor"),
        (r.FIRST_DESCENDANT = "first-descendant"),
        (r.DESCENDANTS = "descendants"),
        (r.ANCESTORS = "ancestors");
    },
    1983: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        CORE_OPERATORS: function () {
          return r.CORE_OPERATORS;
        },
        DEFAULTS: function () {
          return r.DEFAULTS;
        },
        TimelineControlType: function () {
          return r.TimelineControlType;
        },
        TweenType: function () {
          return r.TweenType;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(6213);
      function o(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      o(n(4182), t), o(n(3646), t), o(n(5686), t);
    },
    3646: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ConditionCategoryBuilder: function () {
          return s;
        },
        DesignBuilder: function () {
          return l;
        },
        TargetCategoryBuilder: function () {
          return r;
        },
        TriggerCategoryBuilder: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      class a {
        categoryId;
        config;
        properties;
        constructor(e, t) {
          (this.categoryId = e), (this.config = t), (this.properties = []);
        }
        addProperty(e, t, n) {
          return (
            this.properties.push({
              id: e,
              schema: { ...t, description: n?.description || t.description },
            }),
            this
          );
        }
        getDefinition() {
          return {
            id: this.categoryId,
            label: this.config.label,
            properties: this.properties,
            propertyType: this.config.propertyType || "tween",
          };
        }
      }
      class r {
        categoryId;
        config;
        targets;
        constructor(e, t) {
          (this.categoryId = e), (this.config = t), (this.targets = []);
        }
        addTargetSchema(e, t) {
          return this.targets.push({ id: e, schema: t }), this;
        }
        getDefinition() {
          return {
            id: this.categoryId,
            label: this.config.label,
            order: this.config.order,
            targets: this.targets,
          };
        }
      }
      class o {
        categoryId;
        config;
        triggers;
        constructor(e, t) {
          (this.categoryId = e), (this.config = t), (this.triggers = []);
        }
        addTriggerSchema(e, t) {
          return this.triggers.push({ id: e, schema: t }), this;
        }
        getDefinition() {
          return {
            id: this.categoryId,
            label: this.config.label,
            order: this.config.order,
            triggers: this.triggers,
          };
        }
      }
      class s {
        categoryId;
        config;
        conditions;
        constructor(e, t) {
          (this.categoryId = e), (this.config = t), (this.conditions = []);
        }
        addConditionSchema(e, t) {
          return this.conditions.push({ id: e, schema: t }), this;
        }
        getDefinition() {
          return {
            id: this.categoryId,
            label: this.config.label,
            order: this.config.order,
            conditions: this.conditions,
          };
        }
      }
      class l {
        baseInfo;
        categories = new Map();
        targetCategories = new Map();
        triggerCategories = new Map();
        conditionCategories = new Map();
        constructor(e) {
          this.baseInfo = e;
        }
        addCategory(e, t) {
          let n = new a(e, t);
          return this.categories.set(e, n), n;
        }
        addTargetCategory(e, t) {
          let n = new r(e, t);
          return this.targetCategories.set(e, n), n;
        }
        addTriggerCategory(e, t) {
          let n = new o(e, t);
          return this.triggerCategories.set(e, n), n;
        }
        addConditionCategory(e, t) {
          let n = new s(e, t);
          return this.conditionCategories.set(e, n), n;
        }
        buildDesign() {
          let e = [];
          for (let [, t] of this.categories) e.push(t.getDefinition());
          let t = [];
          for (let [, e] of this.targetCategories) t.push(e.getDefinition());
          let n = [];
          for (let [, e] of this.triggerCategories) n.push(e.getDefinition());
          let i = [];
          for (let [, e] of this.conditionCategories) i.push(e.getDefinition());
          return {
            namespace: this.baseInfo.namespace,
            pluginId: this.baseInfo.pluginId,
            version: this.baseInfo.version,
            displayName: this.baseInfo.displayName,
            description: this.baseInfo.description,
            categories: e.length > 0 ? e : void 0,
            targetCategories: t.length > 0 ? t : void 0,
            triggerCategories: n.length > 0 ? n : void 0,
            conditionCategories: i.length > 0 ? i : void 0,
          };
        }
      }
    },
    4182: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RuntimeBuilder", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class n {
        baseInfo;
        extensions = [];
        lifecycle = {};
        constructor(e) {
          this.baseInfo = e;
        }
        addTrigger(e, t) {
          let n = `${this.baseInfo.namespace}:${e}`;
          return (
            this.extensions.push({
              extensionPoint: "trigger",
              id: n,
              triggerType: n,
              implementation: t,
            }),
            this
          );
        }
        addAction(e, t) {
          let n = `${this.baseInfo.namespace}:${e}`;
          return (
            this.extensions.push({
              extensionPoint: "action",
              id: n,
              actionType: n,
              implementation: t,
            }),
            this
          );
        }
        addTargetResolver(e, t) {
          let n = `${this.baseInfo.namespace}:${e}`;
          return (
            this.extensions.push({
              extensionPoint: "targetResolver",
              id: n,
              resolverType: n,
              implementation: t,
            }),
            this
          );
        }
        addCondition(e, t) {
          let n = `${this.baseInfo.namespace}:${e}`;
          return (
            this.extensions.push({
              extensionPoint: "condition",
              id: n,
              conditionType: n,
              implementation: t,
            }),
            this
          );
        }
        onInitialize(e) {
          return (this.lifecycle.initialize = e), this;
        }
        onActivate(e) {
          return (this.lifecycle.activate = e), this;
        }
        onDeactivate(e) {
          return (this.lifecycle.deactivate = e), this;
        }
        onDispose(e) {
          return (this.lifecycle.dispose = e), this;
        }
        createManifest() {
          let e = this.extensions.map((e) => `${e.extensionPoint}:${e.id}`);
          return {
            id: [this.baseInfo.namespace, this.baseInfo.pluginId],
            version: this.baseInfo.version,
            name: this.baseInfo.displayName || this.baseInfo.pluginId,
            description: this.baseInfo.description || "",
            dependencies: this.baseInfo.dependencies,
            features: e,
          };
        }
        buildRuntime() {
          return {
            manifest: this.createManifest(),
            extensions: this.extensions,
            ...this.lifecycle,
          };
        }
      }
    },
    5686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "TransformBuilder", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class n {
        baseInfo;
        triggerTransforms = new Map();
        targetTransforms = new Map();
        conditionTransforms = new Map();
        actionTransforms = new Map();
        constructor(e) {
          this.baseInfo = e;
        }
        addTargetTransform(e, t) {
          return (
            this.targetTransforms.set(
              this.createExtensionKey(e),
              function (e, n, i) {
                return t(e, n, i);
              }
            ),
            this
          );
        }
        addTriggerTransform(e, t) {
          return (
            this.triggerTransforms.set(
              this.createExtensionKey(e),
              function (e, n, i) {
                return t(e, n, i);
              }
            ),
            this
          );
        }
        addConditionTransform(e, t) {
          return (
            this.conditionTransforms.set(
              this.createExtensionKey(e),
              function (e, n, i) {
                return t(e, n, i);
              }
            ),
            this
          );
        }
        addActionTransform(e, t) {
          return (
            this.actionTransforms.set(
              this.createExtensionKey(e),
              function (e, n, i) {
                return t(e, n, i);
              }
            ),
            this
          );
        }
        createExtensionKey(e) {
          return `${this.baseInfo.namespace}:${e}`;
        }
        buildTransform() {
          return {
            namespace: this.baseInfo.namespace,
            pluginId: this.baseInfo.pluginId,
            version: this.baseInfo.version,
            displayName: this.baseInfo.displayName,
            description: this.baseInfo.description,
            triggerTransforms: this.triggerTransforms,
            targetTransforms: this.targetTransforms,
            conditionTransforms: this.conditionTransforms,
            actionTransforms: this.actionTransforms,
          };
        }
      }
    },
    6213: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i,
        a,
        r,
        o,
        s,
        l,
        c,
        d = {
          CORE_OPERATORS: function () {
            return a;
          },
          DEFAULTS: function () {
            return r;
          },
          TimelineControlType: function () {
            return n;
          },
          TweenType: function () {
            return i;
          },
        };
      for (var u in d)
        Object.defineProperty(t, u, { enumerable: !0, get: d[u] });
      ((o = n || (n = {})).STANDARD = "standard"),
        (o.SCROLL = "scroll"),
        (o.LOAD = "load"),
        ((s = i || (i = {}))[(s.To = 0)] = "To"),
        (s[(s.From = 1)] = "From"),
        (s[(s.FromTo = 2)] = "FromTo"),
        ((l = a || (a = {})).AND = "wf:and"),
        (l.OR = "wf:or"),
        ((c = r || (r = {}))[(c.DURATION = 0.5)] = "DURATION");
    },
    2019: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        EASING_NAMES: function () {
          return o.EASING_NAMES;
        },
        IX3: function () {
          return r.IX3;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(8968),
        o = n(3648);
    },
    4054: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AnimationCoordinator", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = n(1983),
        a = n(3648);
      class r {
        timelineDefs;
        getHandler;
        getTargetResolver;
        resolveFn;
        env;
        subs;
        dynamicFlags;
        cleanupFns;
        scrollTriggers;
        globalSplitRegistry;
        timelineTargetsCache;
        constructor(e, t, n, i, r) {
          (this.timelineDefs = e),
            (this.getHandler = t),
            (this.getTargetResolver = n),
            (this.resolveFn = i),
            (this.env = r),
            (this.subs = new Map()),
            (this.dynamicFlags = new Map()),
            (this.cleanupFns = new Map()),
            (this.scrollTriggers = new Map()),
            (this.globalSplitRegistry = new Map()),
            (this.timelineTargetsCache = new WeakMap()),
            (this.getStaggerConfig = (e) => {
              if (!e) return;
              let {
                  ease: t,
                  amount: n,
                  from: i,
                  grid: r,
                  axis: o,
                  each: s,
                } = e,
                l = {};
              return (
                null != n && (l.amount = (0, a.toSeconds)(n)),
                null != s && (l.each = (0, a.toSeconds)(s)),
                null != i && (l.from = i),
                null != r && (l.grid = r),
                null != o && (l.axis = o),
                null != t && (l.ease = a.EASING_NAMES[t] || "none"),
                l
              );
            });
        }
        createTimeline(e, t) {
          this.destroy(e);
          let n = this.timelineDefs.get(e);
          if (!n) return;
          let i = this.isDynamicTimeline(n);
          this.dynamicFlags.set(e, i);
          let a = new Set(),
            r = new Set();
          for (let [, e, n] of t.triggers) {
            if (n) for (let e of this.resolveFn(n, {})) r.add(e);
            e?.controlType && a.add(e.controlType);
          }
          if (!r.size || !i) {
            let t = this.buildSubTimeline(e, null, a);
            this.ensureSubs(e).set(null, t);
          }
          if (r.size) {
            let t = this.ensureSubs(e);
            for (let n of r)
              if (!t.has(n)) {
                let r = i
                  ? this.buildSubTimeline(e, n, a)
                  : this.getSub(e, null);
                i && t.set(n, r);
              }
          }
        }
        getTimeline(e, t) {
          return this.getSub(e, t).timeline;
        }
        play(e, t, n) {
          this.getSub(e, t).timeline.play(n ?? void 0);
        }
        pause(e, t, n) {
          let i = this.getSubOrNull(e, t);
          i && (void 0 !== n ? i.timeline.pause(n) : i.timeline.pause());
        }
        resume(e, t, n) {
          this.getSubOrNull(e, t)?.timeline.resume(n);
        }
        reverse(e, t, n) {
          this.getSub(e, t).timeline.reverse(n);
        }
        restart(e, t) {
          this.getSub(e, t).timeline.restart();
        }
        togglePlayReverse(e, t) {
          let n = this.getSub(e, t).timeline,
            i = n.progress();
          0 === i
            ? n.play()
            : 1 === i
            ? n.reverse()
            : n.reversed()
            ? n.play()
            : n.reverse();
        }
        seek(e, t, n) {
          this.getSubOrNull(e, n)?.timeline.seek(t);
        }
        setTimeScale(e, t, n) {
          this.getSubOrNull(e, n)?.timeline.timeScale(t);
        }
        setTotalProgress(e, t, n) {
          this.getSubOrNull(e, n)?.timeline.totalProgress(t);
        }
        isPlaying(e, t) {
          return !!this.getSubOrNull(e, t)?.timeline.isActive();
        }
        isPaused(e, t) {
          return !!this.getSubOrNull(e, t)?.timeline.paused();
        }
        destroy(e) {
          let t = this.subs.get(e);
          if (t) {
            for (let [, e] of t) {
              if (
                ((e.rebuildState = "init"),
                e.timeline && (e.timeline.revert(), e.timeline.kill()),
                e.scrollTriggerIds)
              ) {
                for (let t of e.scrollTriggerIds) this.cleanupScrollTrigger(t);
                e.scrollTriggerIds.clear();
              }
              e.scrollTriggerConfigs && e.scrollTriggerConfigs.clear(),
                this.timelineTargetsCache.delete(e);
            }
            for (let [, e] of this.globalSplitRegistry)
              e.splitInstance.revert();
            for (let t of (this.globalSplitRegistry.clear(),
            this.cleanupFns.get(e) ?? []))
              t();
            this.cleanupFns.delete(e),
              this.subs.delete(e),
              this.dynamicFlags.delete(e);
          }
        }
        isDynamicTimeline(e) {
          let t = e.actions;
          if (!t?.length) return !1;
          for (let e of t)
            for (let t of e.targets ?? [])
              if (this.getTargetResolver(t)?.isDynamic) return !0;
          return !1;
        }
        ensureSubs(e) {
          return (
            this.subs.has(e) || this.subs.set(e, new Map()), this.subs.get(e)
          );
        }
        getSub(e, t) {
          let n = this.ensureSubs(e),
            i = this.dynamicFlags.get(e),
            a = n.get(i ? t : null);
          return a || ((a = this.buildSubTimeline(e, t)), n.set(t, a)), a;
        }
        getSubOrNull(e, t) {
          let n = this.dynamicFlags.get(e);
          return this.subs.get(e)?.get(n ? t ?? null : null);
        }
        convertToGsapDefaults(e) {
          let t = {};
          if (
            (null != e.duration && (t.duration = (0, a.toSeconds)(e.duration)),
            null != e.ease && (t.ease = a.EASING_NAMES[e.ease] || "none"),
            null != e.delay && (t.delay = e.delay),
            null != e.repeat && (t.repeat = e.repeat),
            null != e.repeatDelay &&
              (t.repeatDelay = (0, a.toSeconds)(e.repeatDelay)),
            null != e.stagger)
          ) {
            let n = this.getStaggerConfig(e.stagger);
            n && (t.stagger = n);
          }
          return null != e.yoyo && (t.yoyo = e.yoyo), t;
        }
        buildSubTimeline(e, t, n) {
          let i = this.timelineDefs.get(e),
            a = i?.settings,
            r = {
              timeline: window.gsap.timeline({
                ...this.convertToGsapDefaults(a || {}),
                paused: !0,
                reversed: !!i?.playInReverse,
                data: { id: e, triggerEl: t || void 0 },
              }),
              timelineId: e,
              elementContext: t,
              timelineDef: i,
              rebuildState: "init",
              controlTypes: n,
            };
          if (!i?.actions) return r;
          if (this.env.win.SplitText)
            for (let [
              e,
              { types: n, masks: a },
            ] of this.analyzeSplitRequirements(i.actions, t)) {
              let t = this.getSplitTypeString(n),
                i = this.getMaskString(a);
              this.doSplitText(
                { type: t, mask: i },
                [e],
                r,
                this.env.win.SplitText
              );
            }
          return this.buildTimeline(r), r;
        }
        buildTimeline(e) {
          let t = e.timelineDef,
            n = e.elementContext,
            i = e.timeline,
            a = e.timelineId,
            r = new Map();
          for (let e = 0; e < t.actions.length; e++) {
            let s = t.actions[e];
            if (!s) continue;
            let l = JSON.stringify(s.targets),
              c = !0,
              d = o(s),
              u = "none" === d ? l : `${l}_split_${d}`;
            for (let e of Object.values(s.properties ?? {})) {
              let t = r.get(u) || new Set();
              for (let n of (r.set(u, t), Object.keys(e || {})))
                t.has(n) ? (c = !1) : t.add(n);
            }
            let f = this.collectTargets(s, n);
            if (!f.length) continue;
            let p = f;
            "none" !== d &&
              this.env.win.SplitText &&
              (p = this.getSplitElements(f, d)),
              0 !== p.length && this.buildTweensForAction(s, p, i, a, c);
          }
        }
        collectTargets(e, t) {
          if (!e.targets) return [];
          let n = [];
          for (let i of e.targets ?? []) {
            let e = this.resolveFn(i, t ? { triggerElement: t } : {});
            n.push(...e);
          }
          return n;
        }
        buildTweensForAction(e, t, n, r, o) {
          for (let s in e.properties) {
            let l = this.getHandler(s);
            if (!l) continue;
            let c = e.properties[s] || {};
            try {
              let s = e.timing.position;
              if (
                ((s =
                  "string" == typeof s && s.endsWith("ms")
                    ? (0, a.toSeconds)(s)
                    : s),
                l.createTweenConfig)
              ) {
                let r = l.createTweenConfig(c),
                  d = Object.keys(r.from || {}).length > 0,
                  u = Object.keys(r.to || {}).length > 0,
                  f = e.tt ?? 0;
                if (0 === f && !u) continue;
                if (1 === f && !d) continue;
                if (2 === f && !d && !u) continue;
                let p = e.timing?.duration ?? i.DEFAULTS.DURATION,
                  g = this.getStaggerConfig(e.timing?.stagger);
                g && 0 === p && (p = 0.001);
                let E = { id: e.id, presetId: e.presetId, color: e.color },
                  m = {
                    force3D: !0,
                    ...(!o && { immediateRender: o }),
                    data: E,
                    ...(e.timing?.duration != null && {
                      duration: (0, a.toSeconds)(p),
                    }),
                    ...(e.timing?.repeat != null && {
                      repeat: e.timing.repeat,
                    }),
                    ...(e.timing?.repeatDelay != null && {
                      repeatDelay: (0, a.toSeconds)(e.timing.repeatDelay),
                    }),
                    ...(e.timing?.ease != null && {
                      ease: a.EASING_NAMES[e.timing.ease] || "none",
                    }),
                    ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                    ...(g && { stagger: g }),
                  };
                1 === f
                  ? n.from(t, { ...m, ...r.from }, s || 0)
                  : 2 === f
                  ? n.fromTo(t, { ...r.from }, { ...m, ...r.to }, s || 0)
                  : n.to(t, { ...m, ...r.to }, s || 0);
              } else if (l.createCustomTween) {
                let i = l.createCustomTween(n, e, c, t, s || 0);
                if (i) {
                  let e = this.cleanupFns.get(r) || new Set();
                  this.cleanupFns.set(r, e), e.add(i);
                }
              }
            } catch (e) {
              console.error("Error building tween:", e);
            }
          }
        }
        analyzeSplitRequirements(e, t) {
          let n = new Map();
          for (let i of e) {
            let e = o(i);
            if ("none" === e) continue;
            let a = "object" == typeof i.splitText ? i.splitText.mask : void 0;
            for (let r of this.collectTargets(i, t)) {
              if (r === document.body) continue;
              let t = n.get(r) || { types: new Set(), masks: new Set() };
              n.set(r, t), t.types.add(e), a && t.masks.add(a);
            }
          }
          return n;
        }
        getSplitTypeString(e) {
          return (
            e.has("chars") && !e.has("words") && (e = new Set([...e, "words"])),
            ["lines", "words", "chars"].filter((t) => e.has(t)).join(", ")
          );
        }
        getMaskString(e) {
          if (0 !== e.size) {
            if (e.has("lines")) return "lines";
            if (e.has("words")) return "words";
            if (e.has("chars")) return "chars";
          }
        }
        doSplitText(e, t, n, i) {
          try {
            let r = s(e.type);
            for (let o of t) {
              let t = this.globalSplitRegistry.get(o);
              if (t) {
                let n = new Set(s(t.splitTextConfig.type));
                if (r.every((e) => n.has(e))) continue;
                t.splitInstance.revert(),
                  this.globalSplitRegistry.delete(o),
                  (e = {
                    type: [...new Set([...n, ...r])].join(", "),
                    mask: e.mask || t.splitTextConfig.mask,
                  });
              }
              let l = { type: e.type },
                c = s(e.type);
              c.includes("lines") &&
                ((n.timeline.data.splitLines = !0),
                (l.linesClass = (0, a.defaultSplitClass)("line")),
                (l.autoSplit = !0),
                (l.onSplit = () => {
                  "init" !== n.rebuildState
                    ? this.scheduleRebuildForElement(o)
                    : (n.rebuildState = "idle");
                })),
                c.includes("words") &&
                  (l.wordsClass = (0, a.defaultSplitClass)("word")),
                c.includes("chars") &&
                  (l.charsClass = (0, a.defaultSplitClass)("letter")),
                e.mask && (l.mask = e.mask);
              let d = new i([o], l);
              this.globalSplitRegistry.set(o, {
                splitInstance: d,
                splitTextConfig: e,
              }),
                t && this.scheduleRebuildForElement(o);
            }
          } catch (e) {
            console.error("Error splitting text:", e);
          }
        }
        scheduleRebuild(e) {
          if (
            "building" === e.rebuildState ||
            "rebuild_pending" === e.rebuildState
          ) {
            e.rebuildState = "rebuild_pending";
            return;
          }
          (e.rebuildState = "building"),
            this.timelineTargetsCache.delete(e),
            this.rebuildTimelineOnTheFly(e);
        }
        rebuildTimelineOnTheFly(e) {
          let t = e.timeline.progress(),
            n = e.controlTypes?.has(i.TimelineControlType.LOAD) && 1 !== t,
            a = e.timeline.isActive() || n;
          if (
            (e.timeline.pause(),
            e.timeline.revert(),
            e.timeline.clear(),
            this.buildTimeline(e),
            e.timeline.progress(t),
            e.scrollTriggerIds && e.scrollTriggerConfigs)
          )
            for (let t of e.scrollTriggerIds) {
              let n = this.scrollTriggers.get(t),
                i = e.scrollTriggerConfigs.get(t);
              if (n && i) {
                let a = { ...i, animation: e.timeline };
                if ((n.kill(), this.env.win.ScrollTrigger)) {
                  let e = this.env.win.ScrollTrigger.create(a);
                  this.scrollTriggers.set(t, e);
                }
              }
            }
          else a && e.timeline.play();
          "rebuild_pending" === e.rebuildState
            ? ((e.rebuildState = "building"), this.rebuildTimelineOnTheFly(e))
            : (e.rebuildState = "idle");
        }
        getStaggerConfig;
        getSplitElements(e, t) {
          let n = [];
          for (let i of e) {
            let e = this.globalSplitRegistry.get(i);
            if (e && s(e.splitTextConfig.type).includes(t)) {
              let i = e.splitInstance[t];
              i?.length && n.push(...i);
            }
          }
          return n.length > 0 ? n : e;
        }
        setupScrollControl(e, t, n, i) {
          if (void 0 === this.env.win.ScrollTrigger)
            return void console.warn("ScrollTrigger plugin is not available.");
          let a = `st_${e}_${t}_${
            i.id || window.crypto.randomUUID().slice(0, 8)
          }`;
          this.cleanupScrollTrigger(a);
          let r = this.getTimeline(e, i);
          if (!r) return void console.warn(`Timeline ${e} not found`);
          let o = (function (e, t, n, i, a) {
            let r = (function (e, t, n) {
                let i = {},
                  a = (e) =>
                    e &&
                    (e.parentElement === document.body || e === document.body);
                if (void 0 !== e.pin)
                  if ("boolean" == typeof e.pin)
                    e.pin && !a(t) && (i.pin = e.pin);
                  else {
                    let r = n(e.pin, { triggerElement: t });
                    r.length > 0 && !a(r[0]) && (i.pin = r[0]);
                  }
                if (e.endTrigger) {
                  let a = n(e.endTrigger, { triggerElement: t });
                  a.length > 0 && (i.endTrigger = a[0]);
                }
                if (e.scroller) {
                  let a = n(e.scroller, { triggerElement: t });
                  a.length > 0 ? (i.scroller = a[0]) : (i.scroller = window);
                }
                return i;
              })(e, t, a),
              o = [
                e.enter || "none",
                e.leave || "none",
                e.enterBack || "none",
                e.leaveBack || "none",
              ],
              s = {
                trigger: t,
                markers: e.showMarkers ?? !1,
                start: e.clamp ? `clamp(${e.start})` : e.start || "top bottom",
                end: e.clamp ? `clamp(${e.end})` : e.end || "bottom top",
                scrub: e.scrub ?? !1,
                horizontal: e.horizontal || !1,
                toggleActions: o.join(" "),
                id: n,
                ...r,
              };
            return (
              !1 !== s.scrub
                ? (s.animation = i)
                : Object.assign(
                    s,
                    (function (e, t) {
                      let [n, i, a, r] = e,
                        o = (e) => () => {
                          if (void 0 !== e)
                            switch (e) {
                              case "play":
                                t.play();
                                break;
                              case "pause":
                                t.pause();
                                break;
                              case "resume":
                                t.resume();
                                break;
                              case "reverse":
                                t.reverse();
                                break;
                              case "restart":
                                t.restart();
                                break;
                              case "reset":
                                t.pause(0);
                                break;
                              case "complete":
                                t.progress(1);
                            }
                        },
                        s = {};
                      return (
                        "none" !== n && (s.onEnter = o(n)),
                        "none" !== i && (s.onLeave = o(i)),
                        "none" !== a && (s.onEnterBack = o(a)),
                        "none" !== r && (s.onLeaveBack = o(r)),
                        s
                      );
                    })(o, i)
                  ),
              s
            );
          })(n, i, a, r, this.resolveFn);
          try {
            let t = this.env.win.ScrollTrigger.create(o);
            this.scrollTriggers.set(a, t);
            let n = this.getSub(e, i);
            n.scrollTriggerIds || (n.scrollTriggerIds = new Set()),
              n.scrollTriggerConfigs || (n.scrollTriggerConfigs = new Map()),
              n.scrollTriggerIds.add(a),
              n.scrollTriggerConfigs.set(a, o);
          } catch (e) {
            console.error("Failed to create ScrollTrigger:", e);
          }
        }
        cleanupScrollTrigger(e) {
          let t = this.scrollTriggers.get(e);
          t && (t.kill(), this.scrollTriggers.delete(e));
        }
        getScrollTriggers() {
          return this.scrollTriggers;
        }
        getTimelineTargets(e) {
          let t = this.timelineTargetsCache.get(e);
          if (t) return t;
          for (let n of ((t = new WeakSet()), e.timelineDef.actions ?? []))
            for (let i of this.collectTargets(n, e.elementContext)) t.add(i);
          return this.timelineTargetsCache.set(e, t), t;
        }
        scheduleRebuildForElement(e) {
          for (let [, t] of this.subs)
            for (let [, n] of t)
              this.getTimelineTargets(n).has(e) && this.scheduleRebuild(n);
        }
      }
      function o(e) {
        return e.splitText
          ? "string" == typeof e.splitText
            ? e.splitText
            : e.splitText.type
          : "none";
      }
      function s(e) {
        return e.split(", ");
      }
    },
    4651: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ConditionEvaluator: function () {
          return o;
        },
        ConditionalPlaybackManager: function () {
          return s;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1983);
      class o {
        getConditionEvaluator;
        sharedObservers = new Map();
        conditionCache = new Map();
        CACHE_TTL = 100;
        constructor(e) {
          this.getConditionEvaluator = e;
        }
        evaluateConditionsForTrigger = async (e, t) => {
          if (!e?.length) return !0;
          let n = e.some(([e]) => e === r.CORE_OPERATORS.OR);
          return this.evaluateCondition(
            [n ? r.CORE_OPERATORS.OR : r.CORE_OPERATORS.AND, { conditions: e }],
            t
          );
        };
        observeConditionsForTrigger = (e, t) => {
          if (!e?.length) return () => {};
          let n = [],
            i = [];
          for (let t of e) {
            let e = this.getConditionEvaluator(t);
            e?.isReactive ? n.push(t) : i.push(t[0]);
          }
          if (0 === n.length) return () => {};
          let a = n.map((e) => this.getOrCreateSharedObserver(e, t));
          return () => {
            for (let e of a) e();
          };
        };
        disposeSharedObservers = () => {
          for (let [e, t] of this.sharedObservers)
            try {
              t.cleanup();
            } catch (t) {
              console.error("Error disposing shared observer: %s", e, t);
            }
          this.sharedObservers.clear(), this.conditionCache.clear();
        };
        observeCondition = (e, t) => {
          let n = this.getEvaluator(e);
          if (n?.observe)
            try {
              return n.observe(e, t);
            } catch (e) {
              console.error("Error setting up condition observer:", e);
            }
        };
        getEvaluator = (e) => {
          let [t] = e;
          return t === r.CORE_OPERATORS.AND || t === r.CORE_OPERATORS.OR
            ? this.getLogicalEvaluator(t)
            : this.getConditionEvaluator(e);
        };
        getLogicalEvaluator = (e) => ({
          evaluate: async (t, n) => {
            let [, i, a] = t,
              { conditions: o } = i || {};
            if (!Array.isArray(o)) return !1;
            if (!o.length) return !0;
            let s = e === r.CORE_OPERATORS.OR,
              l = 1 === a;
            for (let e of o) {
              let t = await this.evaluateCondition(e, n);
              if (s ? t : !t) return s ? !l : !!l;
            }
            return s ? !!l : !l;
          },
          observe: (e, t) => {
            let [, n] = e,
              { conditions: i } = n || {};
            if (!Array.isArray(i)) return () => {};
            let a = i.map((n) =>
              this.observeCondition(n, async () =>
                t(await this.evaluateCondition(e))
              )
            );
            return () => a.forEach((e) => e && e());
          },
        });
        evaluateCondition = async (e, t) => {
          let n = this.generateConditionCacheKey(e, t),
            i = Date.now(),
            a = this.conditionCache.get(n);
          if (a && i - a.timestamp < this.CACHE_TTL) return a.result;
          let r = this.getEvaluator(e);
          if (!r)
            return (
              console.warn(`No evaluator found for condition type '${e[0]}'`),
              !1
            );
          try {
            let a = await r.evaluate(e, t);
            return this.conditionCache.set(n, { result: a, timestamp: i }), a;
          } catch (e) {
            return console.error("Error evaluating condition:", e), !1;
          }
        };
        generateConditionCacheKey = (e, t) => {
          let [n, i, a] = e,
            r = i ? JSON.stringify(i) : "",
            o = t ? `:ctx:${t.id}` : "";
          return `${n}:${r}${a ? ":negate" : ""}${o}`;
        };
        invalidateConditionCache = (e) => {
          let [t] = e,
            n = [];
          for (let e of this.conditionCache.keys())
            e.startsWith(`${t}:`) && n.push(e);
          n.forEach((e) => this.conditionCache.delete(e));
        };
        generateObserverKey = (e) => {
          let [t, n, i] = e,
            a = n ? JSON.stringify(n) : "";
          return `${t}:${a}${i ? ":negate" : ""}`;
        };
        getOrCreateSharedObserver = (e, t) => {
          let n = this.generateObserverKey(e),
            i = this.sharedObservers.get(n);
          if (!i) {
            let t = this.getEvaluator(e);
            if (!t?.observe) return () => {};
            let a = new Set(),
              r = t.observe(e, async () => {
                this.invalidateConditionCache(e);
                let t = Array.from(a, async (e) => {
                  try {
                    await e();
                  } catch (e) {
                    console.error("Error in shared observer callback:", e);
                  }
                });
                await Promise.allSettled(t);
              });
            if (!r) return () => {};
            (i = { cleanup: r, refCount: 0, callbacks: a }),
              this.sharedObservers.set(n, i);
          }
          return (
            i.callbacks.add(t),
            i.refCount++,
            () => this.releaseSharedObserver(n, t)
          );
        };
        releaseSharedObserver = (e, t) => {
          let n = this.sharedObservers.get(e);
          if (
            n &&
            n.callbacks.delete(t) &&
            ((n.refCount = Math.max(0, n.refCount - 1)),
            n.refCount <= 0 && 0 === n.callbacks.size)
          ) {
            try {
              n.cleanup();
            } catch (e) {
              console.error("Error cleaning up shared observer:", e);
            }
            this.sharedObservers.delete(e);
          }
        };
      }
      class s {
        matchMediaInstances = new Map();
        setupConditionalContext = (e, t, n) => {
          let { conditionalPlayback: i, triggers: a, id: o } = e;
          if (!i || 0 === i.length) return void t(null);
          this.cleanup(o);
          let s = window.gsap.matchMedia();
          this.matchMediaInstances.set(o, s);
          let l = !0,
            c = a.some(
              ([, { controlType: e }]) => e === r.TimelineControlType.LOAD
            );
          s.add(this.buildConditionsObject(i), (e) => {
            if (c && !l) return !1;
            l = !1;
            let a = this.evaluateConditions(e.conditions || {}, i);
            return (a && "skip-to-end" !== a.behavior) || t(a), n;
          });
        };
        cleanup = (e) => {
          let t = this.matchMediaInstances.get(e);
          t && (t.revert(), this.matchMediaInstances.delete(e));
        };
        destroy = () => {
          for (let [e] of this.matchMediaInstances) this.cleanup(e);
          this.matchMediaInstances.clear();
        };
        buildConditionsObject = (e) => {
          let t = {};
          for (let n of e)
            switch (n.type) {
              case "prefers-reduced-motion":
                t.prefersReduced = "(prefers-reduced-motion: reduce)";
                break;
              case "breakpoint":
                (n.breakpoints || []).forEach((e) => {
                  let n = l[e];
                  n && (t[`breakpoint_${e}`] = n);
                });
            }
          return (t.fallback = "(min-width: 0px)"), t;
        };
        evaluateConditions(e, t) {
          let n = [];
          for (let i of t)
            "prefers-reduced-motion" === i.type &&
              e.prefersReduced &&
              n.push({ condition: i, type: "prefers-reduced-motion" }),
              "breakpoint" === i.type &&
                (i.breakpoints || []).some((t) => e[`breakpoint_${t}`]) &&
                n.push({ condition: i, type: "breakpoint" });
          if (0 === n.length) return null;
          let i = n.find(({ condition: e }) => "dont-animate" === e.behavior);
          if (i)
            return {
              behavior: "dont-animate",
              matchedConditions: {
                prefersReduced: "prefers-reduced-motion" === i.type,
                breakpointMatched: "breakpoint" === i.type,
              },
            };
          let a = n[0];
          return {
            behavior: a.condition.behavior,
            matchedConditions: {
              prefersReduced: "prefers-reduced-motion" === a.type,
              breakpointMatched: "breakpoint" === a.type,
            },
          };
        }
      }
      let l = {
        tiny: "(max-width: 479px) and (min-width: 0px)",
        small: "(max-width: 767px) and (min-width: 480px)",
        medium: "(max-width: 991px) and (min-width: 768px)",
        main: "(min-width: 992px)",
      };
    },
    6976: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "EventManager", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let i = n(3648);
      class a {
        static instance;
        elementHandlers = new WeakMap();
        eventTypeHandlers = new Map();
        customEventTypes = new Map();
        delegatedHandlers = new Map();
        batchedEvents = new Map();
        batchFrameId = null;
        defaultMaxBatchSize = 10;
        defaultMaxBatchAge = 100;
        defaultErrorHandler = (e, t) =>
          console.error("[EventManager] Error handling event:", e, t);
        constructor() {}
        static getInstance() {
          return a.instance || (a.instance = new a()), a.instance;
        }
        addEventListener(e, t, n, i) {
          try {
            var a;
            let o = i?.kind === "custom",
              s = {
                ...(o ? { delegate: !1, passive: !0, batch: !1 } : r[t] || {}),
                ...i,
                errorHandler: i?.errorHandler || this.defaultErrorHandler,
              };
            if (!o && "load" === t && "complete" in e && e.complete)
              return (
                setTimeout(() => {
                  try {
                    n(new Event("load"), e);
                  } catch (e) {
                    s.errorHandler?.(e, new Event("load"));
                  }
                }, 0),
                () => {}
              );
            if (!e || !e.addEventListener)
              throw Error("Invalid element provided to addEventListener");
            let l = this.createWrappedHandler(n, s, e),
              c = this.registerHandler(e, t, n, l.handler, s, o, l.cleanup);
            if (o)
              return () => {
                this.removeHandler(e, t, n, !0), c.cleanup?.();
              };
            let d = new AbortController();
            return (
              this.ensureDelegatedHandler(t),
              s.delegate ||
                ((a = s),
                ("window" === a.target
                  ? window
                  : "document" === a.target
                  ? document
                  : null) || e).addEventListener(t, c.wrappedHandler, {
                  passive: s.passive,
                  signal: d.signal,
                }),
              () => {
                d.abort(), this.removeHandler(e, t, n, !1);
              }
            );
          } catch (e) {
            return i?.errorHandler?.(e, new Event(t)), () => {};
          }
        }
        emit(e, t, n, i) {
          try {
            let a = this.customEventTypes.get(e);
            if (!a?.size) return;
            let r = new CustomEvent(e, {
              detail: t,
              bubbles: i?.bubbles ?? !0,
              cancelable: !0,
            });
            for (let t of a)
              if (!n || n === t.element || t.element.contains(n))
                try {
                  t.wrappedHandler(r);
                } catch (t) {
                  console.error(`[EventManager] Error emitting ${e}:`, t);
                }
          } catch (t) {
            console.error(
              `[EventManager] Error emitting custom event ${e}:`,
              t
            );
          }
        }
        dispose() {
          for (let [, e] of (null !== this.batchFrameId &&
            (cancelAnimationFrame(this.batchFrameId),
            (this.batchFrameId = null),
            this.batchedEvents.clear()),
          this.delegatedHandlers))
            e.controller.abort();
          for (let [, e] of this.eventTypeHandlers)
            for (let t of e) t.cleanup?.();
          for (let [, e] of this.customEventTypes)
            for (let t of e) t.cleanup?.();
          this.delegatedHandlers.clear(),
            (this.elementHandlers = new WeakMap()),
            this.eventTypeHandlers.clear(),
            this.customEventTypes.clear();
        }
        createWrappedHandler(e, t, n) {
          let a = (i) => {
            try {
              let a =
                "window" === t.target
                  ? window
                  : "document" === t.target
                  ? document
                  : n;
              e(i, a);
            } catch (e) {
              (t.errorHandler || this.defaultErrorHandler)(e, i);
            }
          };
          if (t.batch) {
            let e = (e) => {
              let t = e.type || "unknown";
              this.batchedEvents.has(t) || this.batchedEvents.set(t, []),
                this.batchedEvents.get(t).push({
                  event: e,
                  target: n,
                  timestamp: e.timeStamp || performance.now(),
                }),
                null == this.batchFrameId &&
                  (this.batchFrameId = requestAnimationFrame(() =>
                    this.processBatchedEvents()
                  ));
            };
            return t.throttleMs && t.throttleMs > 0
              ? { handler: e, cleanup: (0, i.throttle)(a, t.throttleMs).cancel }
              : t.debounceMs && t.debounceMs > 0
              ? { handler: e, cleanup: (0, i.debounce)(a, t.debounceMs).cancel }
              : { handler: e };
          }
          if (t.throttleMs && t.throttleMs > 0) {
            let e = (0, i.throttle)(a, t.throttleMs);
            if (t.debounceMs && t.debounceMs > 0) {
              let n = (0, i.debounce)(e, t.debounceMs);
              return {
                handler: n,
                cleanup: () => {
                  n.cancel?.(), e.cancel?.();
                },
              };
            }
            return { handler: e, cleanup: e.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let e = (0, i.debounce)(a, t.debounceMs);
            return { handler: e, cleanup: e.cancel };
          }
          return { handler: a };
        }
        processBatchedEvents() {
          if (null === this.batchFrameId) return;
          this.batchFrameId = null;
          let e = performance.now();
          for (let [t, n] of this.batchedEvents) {
            let i = this.eventTypeHandlers.get(t);
            if (!i?.size) continue;
            let a = n.filter((t) => e - t.timestamp < this.defaultMaxBatchAge);
            if (!a.length) continue;
            a.sort((e, t) => e.timestamp - t.timestamp);
            let r =
              a.length <= this.defaultMaxBatchSize
                ? a
                : a.slice(-this.defaultMaxBatchSize);
            for (let { event: t, target: n } of r)
              for (let a of ((t.batchTimestamp = e),
              (t.batchSize = r.length),
              i))
                try {
                  a.config.delegate
                    ? a.wrappedHandler(t)
                    : ("window" === a.config.target ||
                        "document" === a.config.target ||
                        n === t.target ||
                        n.contains(t.target)) &&
                      a.wrappedHandler(t);
                } catch (e) {
                  (a.config.errorHandler || this.defaultErrorHandler)(e, t);
                }
          }
          this.batchedEvents.clear();
        }
        ensureDelegatedHandler(e) {
          if (this.delegatedHandlers.has(e)) return;
          let t = new AbortController(),
            n = (t) => {
              let n = this.eventTypeHandlers.get(e);
              if (n?.size) {
                for (let i of t.composedPath
                  ? t.composedPath()
                  : t.target
                  ? [t.target]
                  : [])
                  if (i instanceof Element) {
                    for (let a of n)
                      if (
                        a.config.delegate &&
                        (a.element === i || a.element.contains(i))
                      )
                        try {
                          a.wrappedHandler(t);
                        } catch (t) {
                          console.error(`[EventDelegator] Error for ${e}:`, t);
                        }
                    if (!t.bubbles) break;
                  }
              }
            },
            i = [
              "focus",
              "blur",
              "focusin",
              "focusout",
              "mouseenter",
              "mouseleave",
            ].includes(e);
          document.addEventListener(e, n, {
            passive: !1,
            capture: i,
            signal: t.signal,
          }),
            this.delegatedHandlers.set(e, { handler: n, controller: t });
        }
        registerHandler(e, t, n, i, a, r, o) {
          let s = {
            element: e,
            originalHandler: n,
            wrappedHandler: i,
            config: a,
            cleanup: o,
          };
          if (r) {
            let e = this.customEventTypes.get(t) || new Set();
            e.add(s), this.customEventTypes.set(t, e);
          } else {
            let n = this.elementHandlers.get(e) || new Set();
            n.add(s), this.elementHandlers.set(e, n);
            let i = this.eventTypeHandlers.get(t) || new Set();
            i.add(s), this.eventTypeHandlers.set(t, i);
          }
          return s;
        }
        removeHandler(e, t, n, i) {
          if (i) {
            let i = this.customEventTypes.get(t);
            if (i?.size) {
              for (let a of i)
                if (a.element === e && a.originalHandler === n) {
                  i.delete(a),
                    i.size || this.customEventTypes.delete(t),
                    a.cleanup?.();
                  break;
                }
            }
          } else {
            let i,
              a = this.eventTypeHandlers.get(t);
            if (!a?.size) return;
            let r = this.elementHandlers.get(e);
            if (!r?.size) return;
            for (let e of r)
              if (e.originalHandler === n) {
                i = e;
                break;
              }
            if (i) {
              if ((r.delete(i), a.delete(i), !a.size)) {
                this.eventTypeHandlers.delete(t);
                let e = this.delegatedHandlers.get(t);
                e && (e.controller.abort(), this.delegatedHandlers.delete(t));
              }
              i.cleanup?.();
            }
          }
        }
      }
      let r = {
        load: { delegate: !1, passive: !0 },
        DOMContentLoaded: { target: "document", passive: !0 },
        readystatechange: { target: "document", passive: !0 },
        beforeunload: { target: "window", passive: !1 },
        unload: { target: "window", passive: !1 },
        pageshow: { target: "window", passive: !0 },
        pagehide: { target: "window", passive: !0 },
        click: { delegate: !0, passive: !1 },
        dblclick: { delegate: !0, passive: !0 },
        mousedown: { delegate: !0, passive: !0 },
        mouseup: { delegate: !0, passive: !0 },
        mousemove: { delegate: !0, batch: !0, passive: !0 },
        mouseenter: { delegate: !1, passive: !0 },
        mouseleave: { delegate: !1, passive: !0 },
        mouseout: { delegate: !0, passive: !0 },
        contextmenu: { delegate: !0, passive: !1 },
        wheel: { delegate: !0, throttleMs: 16, passive: !0, batch: !0 },
        touchstart: { delegate: !0, passive: !0 },
        touchend: { delegate: !0, passive: !1 },
        touchmove: { delegate: !0, batch: !0, passive: !0 },
        touchcancel: { delegate: !0, passive: !0 },
        pointerdown: { delegate: !0, passive: !0 },
        pointerup: { delegate: !0, passive: !0 },
        pointermove: { delegate: !0, batch: !0, passive: !0 },
        pointerenter: { delegate: !1, passive: !0 },
        pointerleave: { delegate: !1, passive: !0 },
        pointercancel: { delegate: !0, passive: !0 },
        keydown: { delegate: !0, passive: !1 },
        keyup: { delegate: !0, passive: !1 },
        keypress: { delegate: !0, passive: !1 },
        input: { delegate: !0, passive: !1 },
        change: { delegate: !0, passive: !1 },
        focus: { delegate: !1, passive: !0 },
        blur: { delegate: !1, passive: !0 },
        focusin: { delegate: !0, passive: !0 },
        focusout: { delegate: !0, passive: !0 },
        submit: { delegate: !0, passive: !1 },
        reset: { delegate: !0, passive: !1 },
        select: { delegate: !0, passive: !0 },
        selectionchange: { target: "document", passive: !0 },
        dragstart: { delegate: !0, passive: !1 },
        drag: { delegate: !0, passive: !0 },
        dragenter: { delegate: !0, passive: !1 },
        dragleave: { delegate: !0, passive: !0 },
        dragover: { delegate: !0, passive: !1 },
        drop: { delegate: !0, passive: !1 },
        dragend: { delegate: !0, passive: !0 },
        play: { delegate: !0, passive: !0 },
        pause: { delegate: !0, passive: !0 },
        ended: { delegate: !0, passive: !0 },
        timeupdate: { delegate: !0, batch: !0, passive: !0 },
        canplay: { delegate: !0, passive: !0 },
        canplaythrough: { delegate: !0, passive: !0 },
        loadeddata: { delegate: !0, passive: !0 },
        animationstart: { delegate: !0, passive: !0 },
        animationend: { delegate: !0, passive: !0 },
        animationiteration: { delegate: !0, passive: !0 },
        transitionstart: { delegate: !0, passive: !0 },
        transitionend: { delegate: !0, passive: !0 },
        transitionrun: { delegate: !0, passive: !0 },
        transitioncancel: { delegate: !0, passive: !0 },
        scroll: { delegate: !1, throttleMs: 16, passive: !0 },
        resize: { target: "window", throttleMs: 16, passive: !0 },
        intersection: { delegate: !1, passive: !0 },
        orientationchange: { target: "window", passive: !0 },
        visibilitychange: { target: "document", passive: !0 },
        storage: { target: "window", passive: !0 },
        online: { target: "window", passive: !0 },
        offline: { target: "window", passive: !0 },
        hashchange: { target: "window", passive: !0 },
        popstate: { target: "window", passive: !0 },
        copy: { delegate: !0, passive: !1 },
        cut: { delegate: !0, passive: !1 },
        paste: { delegate: !0, passive: !1 },
        compositionstart: { delegate: !0, passive: !1 },
        compositionupdate: { delegate: !0, passive: !1 },
        compositionend: { delegate: !0, passive: !1 },
        beforeinput: { delegate: !0, passive: !1 },
      };
    },
    8968: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "IX3", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let i = n(1983),
        a = n(6976),
        r = n(4054),
        o = n(4651),
        s = n(8912),
        l = n(3648);
      class c {
        env;
        static instance;
        pluginReg;
        timelineDefs;
        interactions;
        triggeredElements;
        triggerCleanupFunctions;
        conditionalPlaybackManager;
        windowSize;
        prevWindowSize;
        windowResizeSubscribers;
        debouncedWindowResize;
        bodyResizeObserver;
        triggerObservers;
        timelineRefCounts;
        interactionTimelineRefs;
        reactiveCallbackQueues;
        debouncedReactiveCallback;
        pendingReactiveUpdates;
        reactiveExecutionContext;
        eventMgr;
        loadInteractions;
        coordinator;
        conditionEval;
        constructor(e) {
          (this.env = e),
            (this.pluginReg = new s.PluginRegistry()),
            (this.timelineDefs = new Map()),
            (this.interactions = new Map()),
            (this.triggeredElements = new Map()),
            (this.triggerCleanupFunctions = new Map()),
            (this.windowSize = { w: 0, h: 0 }),
            (this.prevWindowSize = { w: 0, h: 0 }),
            (this.windowResizeSubscribers = new Set()),
            (this.debouncedWindowResize = (0, l.debounce)(() => {
              for (let e of this.windowResizeSubscribers) e();
            }, 200)),
            (this.bodyResizeObserver = null),
            (this.triggerObservers = new Map()),
            (this.timelineRefCounts = new Map()),
            (this.interactionTimelineRefs = new Map()),
            (this.reactiveCallbackQueues = new Map()),
            (this.pendingReactiveUpdates = new Map()),
            (this.reactiveExecutionContext = new Set()),
            (this.eventMgr = a.EventManager.getInstance()),
            (this.loadInteractions = []),
            (this.addEventListener = this.eventMgr.addEventListener.bind(
              this.eventMgr
            )),
            (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
            (this.resolveTargets = (e, t) => {
              let n = this.pluginReg.getTargetResolver(e);
              return n
                ? n.resolve(e, t)
                : (console.warn("No target resolver:", e[0]), []);
            }),
            window.addEventListener("resize", this.debouncedWindowResize),
            (this.coordinator = new r.AnimationCoordinator(
              this.timelineDefs,
              this.pluginReg.getActionHandler.bind(this.pluginReg),
              this.pluginReg.getTargetResolver.bind(this.pluginReg),
              this.resolveTargets,
              e
            )),
            (this.conditionEval = new o.ConditionEvaluator(
              this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
            )),
            (this.conditionalPlaybackManager =
              new o.ConditionalPlaybackManager()),
            (this.debouncedReactiveCallback = (0, l.debounce)(
              () => this.processPendingReactiveUpdates(),
              16,
              { leading: !1, trailing: !0, maxWait: 100 }
            ));
        }
        getCoordinator() {
          return this.coordinator;
        }
        addEventListener;
        emit;
        static async init(e) {
          return (this.instance = new c(e)), this.instance;
        }
        async registerPlugin(e) {
          await this.pluginReg.registerPlugin(e);
        }
        register(e, t) {
          if (t?.length) for (let e of t) this.timelineDefs.set(e.id, e);
          if (e?.length) {
            for (let t of e) {
              if (this.interactions.has(t.id)) {
                console.warn(
                  `Interaction with ID ${t.id} already exists. Use update() to modify it.`
                );
                continue;
              }
              this.interactions.set(t.id, t);
              let e = new Set();
              this.interactionTimelineRefs.set(t.id, e),
                this.conditionalPlaybackManager.setupConditionalContext(
                  t,
                  (n) => {
                    for (let n of t.timelineIds ?? [])
                      e.add(n),
                        this.incrementTimelineRefCount(n),
                        this.coordinator.createTimeline(n, t);
                    for (let e of t.triggers ?? []) this.bindTrigger(e, t, n);
                  },
                  () => {
                    this.cleanupInteractionAnimations(t.id);
                  }
                );
            }
            for (let e of this.loadInteractions) e();
            if (
              ((this.loadInteractions.length = 0),
              this.coordinator.getScrollTriggers().size > 0)
            ) {
              this.windowResizeSubscribers.add(() => {
                (this.windowSize.h = window.innerHeight),
                  (this.windowSize.w = window.innerWidth);
              });
              let e = (0, l.debounce)(
                  () => {
                    (this.prevWindowSize.h = this.windowSize.h),
                      (this.prevWindowSize.w = this.windowSize.w);
                  },
                  210,
                  { leading: !0, trailing: !1 }
                ),
                t = (0, l.debounce)(() => {
                  if (
                    this.windowSize.h === this.prevWindowSize.h &&
                    this.windowSize.w === this.prevWindowSize.w
                  )
                    for (let e of this.coordinator.getScrollTriggers().values())
                      e.refresh();
                }, 210);
              (this.bodyResizeObserver = new ResizeObserver((n) => {
                for (let i of n) i.target === document.body && (e(), t());
              })),
                document.body && this.bodyResizeObserver.observe(document.body);
            }
          }
          return this;
        }
        remove(e) {
          for (let t of Array.isArray(e) ? e : [e]) {
            if (!this.interactions.has(t)) {
              console.warn(
                `Interaction with ID ${t} not found, skipping removal.`
              );
              continue;
            }
            this.cleanupTriggerObservers(t), this.unbindAllTriggers(t);
            let e = this.decrementTimelineReferences(t);
            this.cleanupUnusedTimelines(e),
              this.interactions.delete(t),
              this.triggeredElements.delete(t),
              this.interactionTimelineRefs.delete(t),
              this.conditionalPlaybackManager.cleanup(t);
          }
          return this;
        }
        update(e, t) {
          let n = Array.isArray(e) ? e : [e],
            i = t ? (Array.isArray(t) ? t : [t]) : [];
          for (let e of (i.length && this.register([], i), n)) {
            let { id: t } = e;
            if (!this.interactions.has(t)) {
              console.warn(
                `Interaction with ID ${t} not found, registering as new.`
              ),
                this.register([e], []);
              continue;
            }
            this.remove(t), this.register([e], []);
          }
          return this;
        }
        cleanupUnusedTimelines(e) {
          for (let t of e) {
            this.coordinator.destroy(t), this.timelineDefs.delete(t);
            let e = `st_${t}_`;
            for (let [t, n] of this.coordinator.getScrollTriggers().entries())
              t.startsWith(e) &&
                (n.kill(), this.coordinator.getScrollTriggers().delete(t));
          }
        }
        destroy() {
          let e = Array.from(this.interactions.keys());
          this.remove(e),
            (this.loadInteractions.length = 0),
            this.env.win.ScrollTrigger &&
              (this.env.win.ScrollTrigger.getAll().forEach((e) => e.kill()),
              this.bodyResizeObserver?.disconnect(),
              (this.bodyResizeObserver = null)),
            window.removeEventListener("resize", this.debouncedWindowResize);
          try {
            this.debouncedReactiveCallback.cancel();
          } catch (e) {
            console.error(
              "Error canceling debounced callback during destroy:",
              e
            );
          }
          this.pendingReactiveUpdates.clear(),
            this.reactiveCallbackQueues.clear(),
            this.reactiveExecutionContext.clear(),
            this.conditionEval.disposeSharedObservers(),
            this.conditionalPlaybackManager.destroy(),
            this.windowResizeSubscribers.clear(),
            this.timelineDefs.clear(),
            this.interactions.clear(),
            this.triggeredElements.clear(),
            this.triggerCleanupFunctions.clear(),
            this.triggerObservers.clear(),
            this.interactionTimelineRefs.clear();
        }
        bindTrigger(e, t, n) {
          let a = t.id,
            r = this.pluginReg.getTriggerHandler(e),
            o = e[1];
          if (!r) return void console.warn("No trigger handler:", e[0]);
          let s = this.triggerCleanupFunctions.get(a) || new Map();
          this.triggerCleanupFunctions.set(a, s);
          let { delay: c = 0, controlType: d, scrollTriggerConfig: u } = o,
            f = (0, l.toSeconds)(c),
            p = { addEventListener: this.addEventListener, emit: this.emit },
            g = e[2],
            E = [];
          if (
            (g && (E = this.resolveTargets(g, {})),
            d === i.TimelineControlType.LOAD)
          ) {
            if (window.__wf_ix3) return;
            this.loadInteractions.push(() => {
              if (null !== n) {
                "skip-to-end" === n.behavior && this.skipToEndState(t, null);
                return;
              }
              let e = () => {
                for (let e = 0; e < t.timelineIds?.length; e++) {
                  let n = t.timelineIds[e];
                  n &&
                    (this.coordinator.getTimeline(n, null).data.splitLines
                      ? document.fonts.ready.then(() => {
                          this.runTimelineAction(n, o, null);
                        })
                      : this.runTimelineAction(n, o, null));
                }
              };
              f ? setTimeout(e, 1e3 * f) : e();
            });
          } else if (d === i.TimelineControlType.SCROLL) {
            if (!u) return;
            for (let e = 0; e < E.length; e++) {
              let i = E[e];
              if (i) {
                if (null !== n) {
                  "skip-to-end" === n.behavior && this.skipToEndState(t, i);
                  continue;
                }
                for (let e of t.timelineIds ?? [])
                  this.coordinator.setupScrollControl(e, a, u, i);
              }
            }
          } else if (d === i.TimelineControlType.STANDARD || (!d && e[2]))
            for (let i = 0; i < E.length; i++) {
              let l = E[i];
              if (!l) continue;
              let c = s.get(l) || new Set();
              s.set(l, c);
              let d = r(e, l, p, () => {
                if (null !== n) {
                  "skip-to-end" === n.behavior && this.skipToEndState(t, null);
                  return;
                }
                o.conditionalLogic
                  ? this.runTrigger(e, l, a).catch((e) =>
                      console.error("Error in trigger execution:", e)
                    )
                  : f
                  ? setTimeout(() => {
                      this.runTrigger(e, l, a).catch((e) =>
                        console.error("Error in delayed trigger execution:", e)
                      );
                    }, 1e3 * f)
                  : this.runTrigger(e, l, a).catch((e) =>
                      console.error("Error in trigger execution:", e)
                    );
              });
              d && c.add(d);
            }
          o.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
        }
        setupTriggerReactiveMonitoring(e, t) {
          let { conditionalLogic: n } = e[1];
          if (!n) return;
          let i = `${t.id}:${t.triggers.indexOf(e)}`;
          try {
            let e = this.conditionEval.observeConditionsForTrigger(
                n.conditions,
                async () => {
                  await this.executeReactiveCallbackSafely(
                    t.id,
                    i,
                    async () => {
                      let e =
                        (await this.conditionEval.evaluateConditionsForTrigger(
                          n.conditions,
                          t
                        ))
                          ? n.ifTrue
                          : n.ifFalse;
                      if (e) {
                        let n = this.triggeredElements.get(t.id);
                        if (!n) return;
                        let i = [];
                        for (let e of n)
                          for (let n of t.timelineIds ?? [])
                            i.push({
                              timelineId: n,
                              element: e,
                              action: "pause-reset",
                            });
                        await this.executeTimelineOperationsAsync(i),
                          n.forEach((n) => {
                            this.executeConditionalOutcome(e, n, t);
                          });
                      }
                    }
                  );
                }
              ),
              a = this.triggerObservers.get(t.id);
            a || ((a = new Map()), this.triggerObservers.set(t.id, a)),
              a.set(i, e);
          } catch (e) {
            console.error("Error setting up trigger reactive monitoring:", e);
          }
        }
        async executeReactiveCallbackSafely(e, t, n) {
          this.reactiveExecutionContext.has(t) ||
            (this.pendingReactiveUpdates.set(t, n),
            this.debouncedReactiveCallback());
        }
        async processPendingReactiveUpdates() {
          if (0 === this.pendingReactiveUpdates.size) return;
          let e = new Map(this.pendingReactiveUpdates);
          this.pendingReactiveUpdates.clear();
          let t = new Map();
          for (let [n, i] of e) {
            let e = n.split(":")[0];
            t.has(e) || t.set(e, []),
              t.get(e).push({ triggerKey: n, callback: i });
          }
          for (let [e, n] of t)
            await this.processInteractionReactiveUpdates(e, n);
        }
        async processInteractionReactiveUpdates(e, t) {
          let n = this.reactiveCallbackQueues.get(e);
          if (n)
            try {
              await n;
            } catch (e) {
              console.error("Error waiting for pending reactive callback:", e);
            }
          let i = this.executeInteractionUpdates(t);
          this.reactiveCallbackQueues.set(e, i);
          try {
            await i;
          } finally {
            this.reactiveCallbackQueues.get(e) === i &&
              this.reactiveCallbackQueues.delete(e);
          }
        }
        async executeInteractionUpdates(e) {
          for (let { triggerKey: t, callback: n } of e) {
            this.reactiveExecutionContext.add(t);
            try {
              await n();
            } catch (e) {
              console.error("Error in reactive callback for %s:", t, e);
            } finally {
              this.reactiveExecutionContext.delete(t);
            }
          }
        }
        async executeTimelineOperationsAsync(e) {
          if (e.length)
            return new Promise((t) => {
              Promise.resolve().then(() => {
                e.forEach(({ timelineId: e, element: t, action: n }) => {
                  try {
                    if (!this.timelineDefs.has(e))
                      return void console.warn(
                        `Timeline ${e} not found, skipping operation`
                      );
                    if (!t.isConnected)
                      return void console.warn(
                        "Element no longer in DOM, skipping timeline operation"
                      );
                    "pause-reset" === n
                      ? this.coordinator.pause(e, t, 0)
                      : console.warn(`Unknown timeline action: ${n}`);
                  } catch (t) {
                    console.error(
                      "Error executing timeline operation: %s, %s",
                      n,
                      e,
                      t
                    );
                  }
                }),
                  t();
              });
            });
        }
        async runTrigger(e, t, n) {
          if (window.__wf_ix3) return;
          let i = e[1],
            a = this.triggeredElements.get(n);
          a || this.triggeredElements.set(n, (a = new Set())), a.add(t);
          let r = this.interactions.get(n);
          if (r && r.triggers.includes(e))
            if (i.conditionalLogic)
              try {
                let e = (await this.conditionEval.evaluateConditionsForTrigger(
                  i.conditionalLogic.conditions,
                  r
                ))
                  ? i.conditionalLogic.ifTrue
                  : i.conditionalLogic.ifFalse;
                e && this.executeConditionalOutcome(e, t, r);
              } catch (e) {
                console.error("Error evaluating trigger conditional logic:", e),
                  r.timelineIds.forEach((e) => this.runTimelineAction(e, i, t));
              }
            else r.timelineIds.forEach((e) => this.runTimelineAction(e, i, t));
        }
        skipToEndState(e, t) {
          e.timelineIds.forEach((e) => {
            let n = this.coordinator.getTimeline(e, t);
            this.coordinator.setTotalProgress(e, +!n.reversed(), t ?? null);
          });
        }
        executeConditionalOutcome(e, t, n) {
          let i,
            {
              control: a,
              targetTimelineId: r,
              speed: o,
              jump: s,
              delay: c = 0,
            } = e,
            d = (0, l.toSeconds)(c);
          if ("none" === a) return;
          if (r) {
            if (!n.timelineIds.includes(r))
              return void console.warn(
                `Target timeline '${r}' not found in interaction '${
                  n.id
                }'. Available timelines: ${n.timelineIds.join(", ")}`
              );
            i = [r];
          } else i = n.timelineIds;
          let u = () => {
            i.forEach((e) => {
              void 0 !== o && this.coordinator.setTimeScale(e, o, t);
              let n = (0, l.toSeconds)(s);
              switch (a) {
                case "play":
                  this.coordinator.play(e, t, n);
                  break;
                case "pause":
                case "stop":
                  this.coordinator.pause(e, t, n);
                  break;
                case "resume":
                  this.coordinator.resume(e, t, n);
                  break;
                case "reverse":
                  this.coordinator.reverse(e, t, n);
                  break;
                case "restart":
                default:
                  this.coordinator.restart(e, t);
                  break;
                case "togglePlayReverse":
                  this.coordinator.togglePlayReverse(e, t);
              }
            });
          };
          d
            ? setTimeout(() => {
                u();
              }, 1e3 * d)
            : u();
        }
        runTimelineAction(e, t, n) {
          this.coordinator.setTimeScale(e, t.speed ?? 1, n);
          let i = (0, l.toSeconds)(t.jump);
          switch (t.control) {
            case "play":
              this.coordinator.play(e, n, i);
              break;
            case "pause":
            case "stop":
              this.coordinator.pause(e, n, i);
              break;
            case "resume":
              this.coordinator.resume(e, n, i);
              break;
            case "reverse":
              this.coordinator.reverse(e, n, i);
              break;
            case "restart":
            case void 0:
              this.coordinator.restart(e, n);
              break;
            case "togglePlayReverse":
              this.coordinator.togglePlayReverse(e, n);
              break;
            case "none":
              break;
            default:
              t.control;
          }
        }
        resolveTargets;
        incrementTimelineRefCount(e) {
          let t = this.timelineRefCounts.get(e) || 0;
          this.timelineRefCounts.set(e, t + 1);
        }
        decrementTimelineRefCount(e) {
          let t = Math.max(0, (this.timelineRefCounts.get(e) || 0) - 1);
          return this.timelineRefCounts.set(e, t), t;
        }
        decrementTimelineReferences(e) {
          let t = new Set(),
            n = this.interactionTimelineRefs.get(e);
          if (!n) return t;
          for (let e of n) 0 === this.decrementTimelineRefCount(e) && t.add(e);
          return t;
        }
        unbindAllTriggers(e) {
          let t = this.triggerCleanupFunctions.get(e);
          if (t) {
            for (let [, e] of t)
              for (let t of e)
                try {
                  t();
                } catch (e) {
                  console.error("Error during trigger cleanup:", e);
                }
            this.triggerCleanupFunctions.delete(e);
          }
        }
        cleanupTriggerObservers(e) {
          let t = this.triggerObservers.get(e);
          if (t) {
            for (let [e, n] of t) {
              try {
                n();
              } catch (e) {
                console.error("Error during trigger observer cleanup:", e);
              }
              this.pendingReactiveUpdates.delete(e),
                this.reactiveExecutionContext.delete(e);
            }
            this.reactiveCallbackQueues.delete(e),
              this.triggerObservers.delete(e);
          }
        }
        cleanupInteractionAnimations(e) {
          this.unbindAllTriggers(e);
          let t = this.interactionTimelineRefs.get(e);
          if (t)
            for (let e of t) {
              let t = this.decrementTimelineReferences(e);
              this.cleanupUnusedTimelines(t);
            }
          this.triggeredElements.delete(e);
        }
      }
    },
    8912: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PluginRegistry", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class n {
        plugins = new Map();
        extensionsByPoint = new Map();
        activePlugins = new Set();
        pluginStorage = new Map();
        constructor() {
          ["trigger", "action", "targetResolver", "condition"].forEach((e) =>
            this.extensionsByPoint.set(e, new Map())
          );
        }
        async registerPlugin(e) {
          let t = i(e.manifest.id);
          if (this.plugins.has(t))
            throw Error(`Plugin ${t} is already registered`);
          let n = Object.entries(e.manifest.dependencies ?? {});
          for (let [e] of n)
            if (!this.plugins.has(e))
              throw Error(`Missing dependency: ${e} required by ${t}`);
          for (let n of (this.plugins.set(t, e),
          e.initialize && (await e.initialize()),
          e.extensions))
            this.registerExtension(n);
          n.length || (await this.activatePlugin(t));
        }
        registerExtension(e) {
          this.extensionsByPoint.has(e.extensionPoint) ||
            this.extensionsByPoint.set(e.extensionPoint, new Map());
          let t = this.extensionsByPoint.get(e.extensionPoint),
            n = e.id;
          if (t.has(n))
            throw Error(
              `Extension ${n} is already registered for point ${e.extensionPoint}`
            );
          t.set(n, e);
        }
        async activatePlugin(e) {
          if (this.activePlugins.has(e)) return;
          let t = this.plugins.get(e);
          if (!t) throw Error(`Cannot activate unknown plugin: ${e}`);
          for (let e of Object.keys(t.manifest.dependencies ?? {}))
            await this.activatePlugin(e);
          t.activate && (await t.activate()), this.activePlugins.add(e);
        }
        async deactivatePlugin(e) {
          if (!this.activePlugins.has(e)) return;
          let t = this.plugins.get(e);
          if (!t) throw Error(`Cannot deactivate unknown plugin: ${e}`);
          t.deactivate && (await t.deactivate()), this.activePlugins.delete(e);
        }
        async unregisterPlugin(e, t) {
          let n = i([e, t]),
            a = this.plugins.get(n);
          if (a) {
            for (let e of (this.activePlugins.has(n) &&
              (await this.deactivatePlugin(n)),
            a.extensions))
              "condition" === e.extensionPoint &&
                e.implementation.dispose &&
                (await e.implementation.dispose()),
                this.extensionsByPoint
                  .get(e.extensionPoint)
                  ?.delete(`${n}:${e.id}`);
            a.dispose && (await a.dispose()),
              this.plugins.delete(n),
              this.pluginStorage.delete(n);
          }
        }
        getExtensions(e) {
          return this.extensionsByPoint.get(e) || new Map();
        }
        getExtensionImpl(e, t) {
          return this.getExtensions(t).get(e)?.implementation;
        }
        getTriggerHandler([e]) {
          return this.getExtensionImpl(e, "trigger");
        }
        getActionHandler(e) {
          return this.getExtensionImpl(e, "action");
        }
        getTargetResolver([e]) {
          return this.getExtensionImpl(e, "targetResolver");
        }
        getConditionEvaluator([e]) {
          return this.getExtensionImpl(e, "condition");
        }
        getAllPlugins() {
          return this.plugins.values();
        }
      }
      function i(e) {
        return `${e[0]}:${e[1]}`;
      }
    },
    3648: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EASING_NAMES: function () {
          return l;
        },
        debounce: function () {
          return o;
        },
        defaultSplitClass: function () {
          return r;
        },
        throttle: function () {
          return s;
        },
        toSeconds: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      function a(e) {
        return "string" == typeof e ? parseFloat(e) / 1e3 : e;
      }
      function r(e) {
        return `gsap_split_${e}++`;
      }
      let o = (
          e,
          t = 0,
          { leading: n = !1, trailing: i = !0, maxWait: a } = {}
        ) => {
          let r,
            o,
            s,
            l = 0,
            c = () => {
              (l = 0), (r = void 0), i && e.apply(o, s);
            };
          function d(...i) {
            (o = this),
              (s = i),
              !l && ((l = performance.now()), n && e.apply(o, s));
            let u = performance.now() - l;
            if (a && u >= a) {
              clearTimeout(r), c();
              return;
            }
            clearTimeout(r), (r = setTimeout(c, t));
          }
          return (
            (d.cancel = () => {
              clearTimeout(r), (r = void 0), (l = 0);
            }),
            d
          );
        },
        s = (
          e,
          t = 0,
          { leading: n = !0, trailing: i = !0, maxWait: a } = {}
        ) => {
          let r,
            o,
            s,
            l = 0,
            c = (t) => {
              (l = t), (r = void 0), e.apply(o, s);
            };
          function d(...e) {
            let u = performance.now();
            l || n || (l = u);
            let f = t - (u - l);
            (o = this),
              (s = e),
              f <= 0 || (a && u - l >= a)
                ? (r && (clearTimeout(r), (r = void 0)), c(u))
                : i && !r && (r = setTimeout(() => c(performance.now()), f));
          }
          return (
            (d.cancel = () => {
              clearTimeout(r), (r = void 0), (l = 0);
            }),
            d
          );
        },
        l = [
          "none",
          "power1.in",
          "power1.out",
          "power1.inOut",
          "power2.in",
          "power2.out",
          "power2.inOut",
          "power3.in",
          "power3.out",
          "power3.inOut",
          "power4.in",
          "power4.out",
          "power4.inOut",
          "back.in",
          "back.out",
          "back.inOut",
          "bounce.in",
          "bounce.out",
          "bounce.inOut",
          "circ.in",
          "circ.out",
          "circ.inOut",
          "elastic.in",
          "elastic.out",
          "elastic.inOut",
          "expo.in",
          "expo.out",
          "expo.inOut",
          "sine.in",
          "sine.out",
          "sine.inOut",
        ];
    },
    3973: function (e, t, n) {
      "use strict";
      let i = n(2019),
        a = n(5050),
        r = n(3949),
        o = { doc: document, win: window };
      class s {
        getInstance = () => this.instance;
        emit = (e, t, n, i) => {
          this.instance && this.instance.emit(e, t, n, i);
        };
        destroy = () => {
          this.instance && (this.instance.destroy(), (this.instance = null));
        };
        ready = async () => {
          if (!this.instance)
            try {
              (this.instance = await i.IX3.init(o)),
                await this.instance.registerPlugin(a.plugin);
            } catch (e) {
              throw (console.error("Error initializing IX3:", e), e);
            }
        };
      }
      r.define("ix3", () => new s());
    },
    2104: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        getFirst: function () {
          return a;
        },
        getSecond: function () {
          return r;
        },
        pair: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e[0],
        r = (e) => e[1],
        o = (e, t) => [e, t];
    },
    4438: function () {
      function e() {
        let e = Webflow.require("ix3");
        e.ready().then(() => {
          let t = e.getInstance();
          t &&
            (t.register(
              [
                {
                  id: "i-263a7beb",
                  triggers: [["wf:load", { controlType: "load" }]],
                  deleted: !1,
                },
                {
                  id: "i-464d35c5",
                  triggers: [
                    [
                      "wf:hover",
                      {
                        controlType: "standard",
                        pluginConfig: { type: "mouseenter", hover: "each" },
                      },
                      ["wf:selector", ".navigation-link"],
                    ],
                  ],
                  timelineIds: ["t-d74d1d33"],
                  deleted: !1,
                },
                {
                  id: "i-6292b8d2",
                  triggers: [
                    [
                      "wf:scroll",
                      {
                        controlType: "scroll",
                        scrollTriggerConfig: {
                          clamp: !0,
                          start: "top 5%",
                          end: "bottom top",
                          scrub: 0.8,
                          enter: "play",
                          leave: "none",
                          enterBack: "none",
                          leaveBack: "none",
                        },
                      },
                      ["wf:selector", ".navigation-link.simple-text"],
                    ],
                  ],
                  timelineIds: ["t-f665d14b"],
                  deleted: !1,
                },
                {
                  id: "i-7a25b2de",
                  triggers: [["wf:load", { controlType: "load" }]],
                  timelineIds: ["t-8e699a61"],
                  deleted: !1,
                },
                {
                  id: "i-8c2d1899",
                  triggers: [
                    [
                      "wf:scroll",
                      {
                        controlType: "scroll",
                        scrollTriggerConfig: {
                          clamp: !0,
                          start: "top bottom",
                          end: "bottom 50",
                          scrub: 0.8,
                          enter: "play",
                          leave: "none",
                          enterBack: "none",
                          leaveBack: "none",
                        },
                      },
                      ["wf:class", ["hero-main-title"]],
                    ],
                  ],
                  timelineIds: ["t-177a50b7"],
                  deleted: !1,
                },
                {
                  id: "i-af255dbf",
                  triggers: [["wf:load", { controlType: "load" }]],
                  deleted: !1,
                },
                {
                  id: "i-b174ee5c",
                  triggers: [
                    [
                      "wf:scroll",
                      {
                        controlType: "scroll",
                        scrollTriggerConfig: {
                          clamp: !0,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 0.8,
                          enter: "play",
                          leave: "none",
                          enterBack: "none",
                          leaveBack: "none",
                        },
                      },
                      ["wf:class", ["display-1"]],
                    ],
                  ],
                  deleted: !1,
                },
                {
                  id: "i-ea1ece2d",
                  triggers: [
                    [
                      "wf:scroll",
                      {
                        controlType: "scroll",
                        scrollTriggerConfig: {
                          clamp: !0,
                          start: "top bottom",
                          end: "bottom 50",
                          scrub: 0.8,
                          enter: "play",
                          leave: "none",
                          enterBack: "none",
                          leaveBack: "none",
                        },
                      },
                      ["wf:class", ["display-1.second._5rem"]],
                    ],
                  ],
                  timelineIds: ["t-ead5046d"],
                  deleted: !1,
                },
              ],
              [
                {
                  id: "t-d74d1d33",
                  deleted: !1,
                  actions: [
                    {
                      id: "ta-2c98bc36",
                      targets: [
                        [
                          "wf:trigger-only",
                          ["", ["descendants", ".nav-text.first"]],
                        ],
                      ],
                      timing: {
                        duration: 0.25,
                        position: 0,
                        stagger: { each: 0.03 },
                        ease: 1,
                      },
                      tt: 2,
                      properties: { "wf:transform": { y: ["0%", "-100%"] } },
                      splitText: { type: "chars" },
                    },
                    {
                      id: "ta-1e09627b",
                      targets: [
                        [
                          "wf:trigger-only",
                          ["", ["descendants", ".nav-text.second"]],
                        ],
                      ],
                      timing: {
                        duration: 0.25,
                        position: 0,
                        stagger: { each: 0.03 },
                        ease: 1,
                      },
                      tt: 2,
                      properties: { "wf:transform": { y: ["0%", "-100%"] } },
                      splitText: { type: "chars" },
                    },
                  ],
                },
                { id: "t-f665d14b", deleted: !1 },
                { id: "t-8e699a61", deleted: !1 },
                {
                  id: "t-177a50b7",
                  deleted: !1,
                  actions: [
                    {
                      id: "ta-085d37bb",
                      targets: [["wf:trigger-only", ""]],
                      timing: {
                        duration: 10,
                        position: 0,
                        stagger: { each: 1 },
                        ease: 1,
                      },
                      tt: 2,
                      properties: {
                        "wf:transform": {},
                        "wf:style": {
                          color: [
                            "hsla(29.999999999999964, 0.00%, 100.00%, 0.07)",
                            "white",
                          ],
                        },
                      },
                      splitText: { type: "chars" },
                    },
                  ],
                },
                {
                  id: "t-ead5046d",
                  deleted: !1,
                  actions: [
                    {
                      id: "ta-762c0365",
                      targets: [["wf:trigger-only", ""]],
                      timing: {
                        duration: 2,
                        position: 0,
                        stagger: { each: 1 },
                        ease: 1,
                      },
                      tt: 2,
                      properties: {
                        "wf:transform": {},
                        "wf:style": {
                          color: [
                            "hsla(29.999999999999964, 0.00%, 100.00%, 0.15)",
                            "white",
                          ],
                        },
                      },
                      splitText: { type: "chars" },
                    },
                  ],
                },
              ]
            ),
            window.dispatchEvent(new CustomEvent("__wf_ix3_ready")),
            document.documentElement.classList.add("w-mod-ix3"));
        });
      }
      Webflow.require("ix2").init({
        events: {
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-with-animation",
              originalId:
                "68231bdf454ad3015f997bcd|05edb923-4bb7-61e4-4119-1635cc622ebd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-with-animation",
                originalId:
                  "68231bdf454ad3015f997bcd|05edb923-4bb7-61e4-4119-1635cc622ebd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1969109389b,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-with-animation",
              originalId:
                "68231bdf454ad3015f997bcd|05edb923-4bb7-61e4-4119-1635cc622ebd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-with-animation",
                originalId:
                  "68231bdf454ad3015f997bcd|05edb923-4bb7-61e4-4119-1635cc622ebd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1969109389b,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd6a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd6a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c947d9a4,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd6a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd6a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c947d9a4,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-160",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c947d9a4,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-168",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c947d9a4,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-166",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c947d9a4,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1127",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2ec87728-4b9f-a5bf-eacf-e9e9575fcd78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c947d9a4,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".project-circle",
              originalId:
                "6900b2a78435eda1c71700b2|a7364a09-74be-e076-65dd-4d306f661016",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".project-circle",
                originalId:
                  "6900b2a78435eda1c71700b2|a7364a09-74be-e076-65dd-4d306f661016",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d3f8d2a1,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".project-circle",
              originalId:
                "6900b2a78435eda1c71700b2|a7364a09-74be-e076-65dd-4d306f661016",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".project-circle",
                originalId:
                  "6900b2a78435eda1c71700b2|a7364a09-74be-e076-65dd-4d306f661016",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d3f8d2a2,
          },
          "e-93": {
            id: "e-93",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-260",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".hero_pricing-features-div",
              originalId:
                "6825ea9eb7381332f90db208|d60c3446-b29e-86a4-7341-0279a74119e1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero_pricing-features-div",
                originalId:
                  "6825ea9eb7381332f90db208|d60c3446-b29e-86a4-7341-0279a74119e1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18fc83cb2ea,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-365",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".hero_pricing-link",
              originalId:
                "6825ea9eb7381332f90db208|13f98ad5-89df-8ab9-69f0-05f554263e55",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero_pricing-link",
                originalId:
                  "6825ea9eb7381332f90db208|13f98ad5-89df-8ab9-69f0-05f554263e55",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18fc83c77d8,
          },
          "e-158": {
            id: "e-158",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-159",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "635eb179-85f7-067d-94b1-dffe60beb2a9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "635eb179-85f7-067d-94b1-dffe60beb2a9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1844ffa8f4e,
          },
          "e-159": {
            id: "e-159",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-158",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "635eb179-85f7-067d-94b1-dffe60beb2a9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "635eb179-85f7-067d-94b1-dffe60beb2a9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1844ffa8f4f,
          },
          "e-160": {
            id: "e-160",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-161",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item-top",
              originalId:
                "66f67ee139c1b9340c2a354e|8a5d260f-35cb-2844-c095-069bae8327a5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item-top",
                originalId:
                  "66f67ee139c1b9340c2a354e|8a5d260f-35cb-2844-c095-069bae8327a5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1860f928be4,
          },
          "e-161": {
            id: "e-161",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-160",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item-top",
              originalId:
                "66f67ee139c1b9340c2a354e|8a5d260f-35cb-2844-c095-069bae8327a5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item-top",
                originalId:
                  "66f67ee139c1b9340c2a354e|8a5d260f-35cb-2844-c095-069bae8327a5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1860f928be6,
          },
          "e-186": {
            id: "e-186",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-187" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c406bd2e-a066-15b4-8717-9d5ba6e07a98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c406bd2e-a066-15b4-8717-9d5ba6e07a98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x196b5573085,
          },
          "e-260": {
            id: "e-260",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-261",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c406bd2e-a066-15b4-8717-9d5ba6e07a99",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c406bd2e-a066-15b4-8717-9d5ba6e07a99",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196fc2329e4,
          },
          "e-262": {
            id: "e-262",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-263",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196fc234194,
          },
          "e-264": {
            id: "e-264",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-265",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196fc237724,
          },
          "e-695": {
            id: "e-695",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2953",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-first-line",
              originalId:
                "63d27ba3339364653915dd5b|dc717b1b-77bc-479f-9689-81dad6daa8aa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-first-line",
                originalId:
                  "63d27ba3339364653915dd5b|dc717b1b-77bc-479f-9689-81dad6daa8aa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x184ecffd5b9,
          },
          "e-696": {
            id: "e-696",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2952",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-first-line",
              originalId:
                "63d27ba3339364653915dd5b|dc717b1b-77bc-479f-9689-81dad6daa8aa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-first-line",
                originalId:
                  "63d27ba3339364653915dd5b|dc717b1b-77bc-479f-9689-81dad6daa8aa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x184ecffd5bb,
          },
          "e-918": {
            id: "e-918",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-919",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".navlinks",
              originalId: "ad883500-9bc3-e473-0676-774b6022cab2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".navlinks",
                originalId: "ad883500-9bc3-e473-0676-774b6022cab2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17bbb989d2e,
          },
          "e-919": {
            id: "e-919",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-73",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-918",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".navlinks",
              originalId: "ad883500-9bc3-e473-0676-774b6022cab2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".navlinks",
                originalId: "ad883500-9bc3-e473-0676-774b6022cab2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17bbb989d2f,
          },
          "e-920": {
            id: "e-920",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1086",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".social-icon-wrapper",
              originalId:
                "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-icon-wrapper",
                originalId:
                  "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ad3b79da8,
          },
          "e-921": {
            id: "e-921",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1085",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".social-icon-wrapper",
              originalId:
                "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-icon-wrapper",
                originalId:
                  "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ad3b79dad,
          },
          "e-923": {
            id: "e-923",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-924",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-main",
              originalId:
                "6900b2a78435eda1c71700b2|b71b72a6-6e19-db41-1b90-ad3fe7feaddc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-main",
                originalId:
                  "6900b2a78435eda1c71700b2|b71b72a6-6e19-db41-1b90-ad3fe7feaddc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191f2661cff,
          },
          "e-924": {
            id: "e-924",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-923",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-main",
              originalId:
                "6900b2a78435eda1c71700b2|b71b72a6-6e19-db41-1b90-ad3fe7feaddc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-main",
                originalId:
                  "6900b2a78435eda1c71700b2|b71b72a6-6e19-db41-1b90-ad3fe7feaddc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191f2661d00,
          },
          "e-982": {
            id: "e-982",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-983",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-link",
              originalId:
                "6900b2a78435eda1c71700b2|0a74d73b-6745-a10e-8980-82bcc84feb8c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-link",
                originalId:
                  "6900b2a78435eda1c71700b2|0a74d73b-6745-a10e-8980-82bcc84feb8c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198aa897a0f,
          },
          "e-983": {
            id: "e-983",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-982",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-link",
              originalId:
                "6900b2a78435eda1c71700b2|0a74d73b-6745-a10e-8980-82bcc84feb8c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-link",
                originalId:
                  "6900b2a78435eda1c71700b2|0a74d73b-6745-a10e-8980-82bcc84feb8c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198aa897a10,
          },
          "e-994": {
            id: "e-994",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-995",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198ad35a97d,
          },
          "e-998": {
            id: "e-998",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-999",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ee27e0aa20fefce1d76e82",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ee27e0aa20fefce1d76e82",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198ad360207,
          },
          "e-1000": {
            id: "e-1000",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1001",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a30ae69f16a541afc009d7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a30ae69f16a541afc009d7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198ad365559,
          },
          "e-1002": {
            id: "e-1002",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1003",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b8",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b8",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198ad367e09,
          },
          "e-1063": {
            id: "e-1063",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1064",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "df305e81-b48d-c5fc-e32e-e795c1b8a94b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "df305e81-b48d-c5fc-e32e-e795c1b8a94b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x198bcd9523b,
          },
          "e-1067": {
            id: "e-1067",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-88",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1068",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198cd1eea14,
          },
          "e-1070": {
            id: "e-1070",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-89",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bd719ca3-a203-b525-6582-d6c9aac8ec9b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bd719ca3-a203-b525-6582-d6c9aac8ec9b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-89-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198cd9df021,
          },
          "e-1071": {
            id: "e-1071",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-90",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1073",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".work-wrapper-first",
              originalId:
                "64a56a67a9d7531fc6ee4bdb|ee9335a3-5378-7fe6-7969-5e7d52cdaac2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-wrapper-first",
                originalId:
                  "64a56a67a9d7531fc6ee4bdb|ee9335a3-5378-7fe6-7969-5e7d52cdaac2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17d2deddac1,
          },
          "e-1072": {
            id: "e-1072",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-91",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2207",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".work-wrapper-first",
              originalId:
                "64a56a67a9d7531fc6ee4bdb|ee9335a3-5378-7fe6-7969-5e7d52cdaac2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-wrapper-first",
                originalId:
                  "64a56a67a9d7531fc6ee4bdb|ee9335a3-5378-7fe6-7969-5e7d52cdaac2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17d2deddac3,
          },
          "e-1079": {
            id: "e-1079",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-96",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".photo-interaction.main",
              originalId:
                "6166fbb9d0c38d6b21560baa|7ba6d6b1-5f9e-ff89-a96b-978dfd24d2e6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".photo-interaction.main",
                originalId:
                  "6166fbb9d0c38d6b21560baa|7ba6d6b1-5f9e-ff89-a96b-978dfd24d2e6",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-96-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x17c83db52f7,
          },
          "e-1080": {
            id: "e-1080",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1081",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".photo-interaction",
              originalId:
                "66e2b1bedee2f37918c1606c|ac15bcbf-2d43-cc43-d316-b616ab29075f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".photo-interaction.main",
                originalId:
                  "66e2b1bedee2f37918c1606c|ac15bcbf-2d43-cc43-d316-b616ab29075f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17c9cffd1c2,
          },
          "e-1093": {
            id: "e-1093",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1094",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b2|32bd1ad4-0d71-8567-9ca0-148d730d0a06",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b2|32bd1ad4-0d71-8567-9ca0-148d730d0a06",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199e3f32deb,
          },
          "e-1095": {
            id: "e-1095",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-98",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1096",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d7a0b71d-84da-f0e0-4ac9-6e42feab2d16",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d7a0b71d-84da-f0e0-4ac9-6e42feab2d16",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199e3f32deb,
          },
          "e-1096": {
            id: "e-1096",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-99",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1095",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d7a0b71d-84da-f0e0-4ac9-6e42feab2d16",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d7a0b71d-84da-f0e0-4ac9-6e42feab2d16",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199e3f32deb,
          },
          "e-1097": {
            id: "e-1097",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-100",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1101",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".wrok-card-wrapper",
              originalId:
                "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".wrok-card-wrapper",
                originalId:
                  "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1969fbbe689,
          },
          "e-1098": {
            id: "e-1098",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-101",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1097",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".wrok-card-wrapper",
              originalId:
                "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".wrok-card-wrapper",
                originalId:
                  "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1969fbbe689,
          },
          "e-1099": {
            id: "e-1099",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1100",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".work-wrapper",
              originalId: "df7eae8a-688a-8486-ae08-39bd4ce106c7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-wrapper",
                originalId: "df7eae8a-688a-8486-ae08-39bd4ce106c7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196408abfb4,
          },
          "e-1100": {
            id: "e-1100",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-103",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1102",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".work-wrapper",
              originalId: "df7eae8a-688a-8486-ae08-39bd4ce106c7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-wrapper",
                originalId: "df7eae8a-688a-8486-ae08-39bd4ce106c7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196408abfb4,
          },
          "e-1101": {
            id: "e-1101",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-104",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1102",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".button-with-line",
              originalId:
                "5f05efbfb137c969f39f5299|9b6b9ee8-d20a-8759-c468-75c81518df35",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-with-line",
                originalId:
                  "5f05efbfb137c969f39f5299|9b6b9ee8-d20a-8759-c468-75c81518df35",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17207e5003d,
          },
          "e-1102": {
            id: "e-1102",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1101",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".button-with-line",
              originalId:
                "5f05efbfb137c969f39f5299|9b6b9ee8-d20a-8759-c468-75c81518df35",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-with-line",
                originalId:
                  "5f05efbfb137c969f39f5299|9b6b9ee8-d20a-8759-c468-75c81518df35",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17207e50040,
          },
          "e-1103": {
            id: "e-1103",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-106",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".work-wrapper",
              originalId:
                "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b8d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-wrapper",
                originalId:
                  "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b8d",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-106-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 70,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-106-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x199e92758d3,
          },
          "e-1104": {
            id: "e-1104",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1105",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".wrok-card-wrapper",
              originalId:
                "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".wrok-card-wrapper",
                originalId:
                  "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199ec85ea2c,
          },
          "e-1106": {
            id: "e-1106",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1107",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b2|d79fa38c-8ecb-a176-9278-ba6c01f79147",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b2|d79fa38c-8ecb-a176-9278-ba6c01f79147",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199eccdbab6,
          },
          "e-1108": {
            id: "e-1108",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-107",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1109",
              },
            },
            mediaQueries: ["main", "tiny"],
            target: {
              id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199eced0154,
          },
          "e-1109": {
            id: "e-1109",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-108",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1108",
              },
            },
            mediaQueries: ["main", "tiny"],
            target: {
              id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199eced0155,
          },
          "e-1110": {
            id: "e-1110",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-109",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1111",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199ecf32564,
          },
          "e-1111": {
            id: "e-1111",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-110",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1110",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199ecf32565,
          },
          "e-1124": {
            id: "e-1124",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-111",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b2|09fdc19b-61c6-b3bf-ed1a-c198bb519de8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b2|09fdc19b-61c6-b3bf-ed1a-c198bb519de8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-111-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180cf836238,
          },
          "e-1125": {
            id: "e-1125",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-112",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b2|09fdc19b-61c6-b3bf-ed1a-c198bb519de8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b2|09fdc19b-61c6-b3bf-ed1a-c198bb519de8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-112-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180cf840d51,
          },
          "e-1126": {
            id: "e-1126",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1127",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-main-wrapper",
              originalId:
                "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-main-wrapper",
                originalId:
                  "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920f1bdd59,
          },
          "e-1127": {
            id: "e-1127",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-114",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-main-wrapper",
              originalId:
                "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-main-wrapper",
                originalId:
                  "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920f1bdd5b,
          },
          "e-1128": {
            id: "e-1128",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-115",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1129",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-main-wrapper",
              originalId:
                "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-main-wrapper",
                originalId:
                  "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920f1d3288,
          },
          "e-1129": {
            id: "e-1129",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-116",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1128",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-main-wrapper",
              originalId:
                "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-main-wrapper",
                originalId:
                  "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920f1d328a,
          },
          "e-1130": {
            id: "e-1130",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c601a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c601a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1921ec24d3f,
          },
          "e-1131": {
            id: "e-1131",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c6021",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c6021",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x199f1a8c280,
          },
          "e-1132": {
            id: "e-1132",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c602f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c602f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x199f1a8c7bb,
          },
          "e-1133": {
            id: "e-1133",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c6028",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c6028",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x199f1a92981,
          },
          "e-1134": {
            id: "e-1134",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1135",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".service-item",
              originalId: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".service-item",
                originalId: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f1fbe0a1,
          },
          "e-1136": {
            id: "e-1136",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: { actionListId: "slideInTop", autoStopEventId: "e-1137" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c6018",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c6018",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "TOP",
              effectIn: !0,
            },
            createdOn: 0x199f1ff286a,
          },
          "e-1138": {
            id: "e-1138",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c601f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c601f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f1ff4c5a,
          },
          "e-1140": {
            id: "e-1140",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1141",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c6026",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c6026",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f1ff78d3,
          },
          "e-1142": {
            id: "e-1142",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1143",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65ae50dc-c2e2-aac2-89ea-e734043c602d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65ae50dc-c2e2-aac2-89ea-e734043c602d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f1ffaa5c,
          },
          "e-1144": {
            id: "e-1144",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1145",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecd1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecd1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f1ffd4d9,
          },
          "e-1146": {
            id: "e-1146",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1147",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecdb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecdb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f1fff6d6,
          },
          "e-1154": {
            id: "e-1154",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1155",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b7|e185878a-b5ac-b6cb-7762-3a4c95325cac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b7|e185878a-b5ac-b6cb-7762-3a4c95325cac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199f25d9fce,
          },
          "e-1156": {
            id: "e-1156",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-111",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "528a429d-d8e0-bb7b-63db-ba5915b8ef51",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "528a429d-d8e0-bb7b-63db-ba5915b8ef51",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-111-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19a07e38a95,
          },
          "e-1157": {
            id: "e-1157",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-112",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "528a429d-d8e0-bb7b-63db-ba5915b8ef51",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "528a429d-d8e0-bb7b-63db-ba5915b8ef51",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-112-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19a07e3b040,
          },
          "e-1158": {
            id: "e-1158",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-118",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1159",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".social-wrapper",
              originalId:
                "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-wrapper",
                originalId:
                  "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ad3b79da8,
          },
          "e-1159": {
            id: "e-1159",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1158",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".social-wrapper",
              originalId:
                "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-wrapper",
                originalId:
                  "62972fdde98a9519548aa3d3|87c1ba0b-e148-fd97-ec43-87cf6825ffe1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ad3b79dad,
          },
          "e-1168": {
            id: "e-1168",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1169",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b8|332e5157-6377-32d1-9aef-9c6e8b3516cc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b8|332e5157-6377-32d1-9aef-9c6e8b3516cc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a45b18bec,
          },
          "e-1170": {
            id: "e-1170",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1171",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6900b2a78435eda1c71700b8|332e5157-6377-32d1-9aef-9c6e8b3516d4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6900b2a78435eda1c71700b8|332e5157-6377-32d1-9aef-9c6e8b3516d4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a45b18bec,
          },
        },
        actionLists: {
          "a-7": {
            id: "a-7",
            title: "Button Arrow Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: -250,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18b23605d7e,
          },
          "a-8": {
            id: "a-8",
            title: "Button Arrow Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: 250,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18b23605d7e,
          },
          a: {
            id: "a",
            title: "Navbar Menu Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {},
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {},
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {},
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {},
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f3042c6,
          },
          "a-2": {
            id: "a-2",
            title: "Navbar Menu Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 400,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {},
                      widthValue: 24,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f363110,
          },
          "a-3": {
            id: "a-3",
            title: "Dropdown (Tablet) Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3a2434d,
          },
          "a-4": {
            id: "a-4",
            title: "Dropdown (Tablet) Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3a2434d,
          },
          "a-5": {
            id: "a-5",
            title: "Navbar Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: -2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17a9ec81501,
          },
          "a-6": {
            id: "a-6",
            title: "Navbar Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 0,
                      target: {},
                      yValue: -2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9ec8f4a7,
          },
          "a-14": {
            id: "a-14",
            title: "Play Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "53b3",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-14-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {},
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196d3f8e928,
          },
          "a-15": {
            id: "a-15",
            title: "Play Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-15-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "53b3",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196d3f8e928,
          },
          "a-19": {
            id: "a-19",
            title: "Service Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {},
                      zValue: 135,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1844ff2c15f,
          },
          "a-20": {
            id: "a-20",
            title: "Service Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      heightValue: 0,
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1844ff2c15f,
          },
          "a-21": {
            id: "a-21",
            title: "Accordion Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {},
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-21-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1860f9299c3,
          },
          "a-22": {
            id: "a-22",
            title: "Accordion Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-22-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1860f9299c3,
          },
          "a-66": {
            id: "a-66",
            title: "Button Line Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-66-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0.6,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-66-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x184ec740ef5,
          },
          "a-67": {
            id: "a-67",
            title: "Button Line Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-67-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {},
                      value: 0.6,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x184ec740ef5,
          },
          "a-72": {
            id: "a-72",
            title: "Navlink Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-72-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 400,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17bbb98a82a,
          },
          "a-73": {
            id: "a-73",
            title: "Navlink Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-73-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17bbb98a82a,
          },
          "a-74": {
            id: "a-74",
            title: "Social Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-74-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ad2dab708,
          },
          "a-75": {
            id: "a-75",
            title: "Social Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-75-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ad2dab708,
          },
          "a-77": {
            id: "a-77",
            title: "Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-77-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-77-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-77-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.135, 0.9, 0.15, 1],
                      duration: 900,
                      target: {},
                      xValue: 1,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-77-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.135, 0.9, 0.15, 1],
                      duration: 900,
                      target: {},
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191f23f5f4a,
          },
          "a-78": {
            id: "a-78",
            title: "Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-78-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.135, 0.9, 0.15, 1],
                      duration: 900,
                      target: {},
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-78-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.135, 0.9, 0.15, 1],
                      duration: 900,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191f23f5f4a,
          },
          "a-85": {
            id: "a-85",
            title: "CTA Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-85-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e4,
                      target: {},
                      zValue: 359,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-85-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e4,
                      target: {},
                      zValue: -359,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-85-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-85-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198ad3055b2,
          },
          "a-88": {
            id: "a-88",
            title: "Marquee Scrolling Vertical",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-88-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-88-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {},
                      xValue: -21,
                      yValue: null,
                      xUnit: "vw",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198cd1ef3ef,
          },
          "a-89": {
            id: "a-89",
            title: "Footer Movement",
            continuousParameterGroups: [
              {
                id: "a-89-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-89-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6900b2a78435eda1c71700b2|7314af82-d05c-2b84-d3a9-223e8e39f664",
                          },
                          yValue: -100,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-89-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6900b2a78435eda1c71700b2|7314af82-d05c-2b84-d3a9-223e8e39f664",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198c7207cd2,
          },
          "a-90": {
            id: "a-90",
            title: "Work Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-90-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-photo-first",
                        selectorGuids: ["1764eb67-bd89-575d-8136-63f500189ff0"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-90-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-90-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-photo-first",
                        selectorGuids: ["1764eb67-bd89-575d-8136-63f500189ff0"],
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-90-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-photo-first",
                        selectorGuids: ["1764eb67-bd89-575d-8136-63f500189ff0"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "478a",
                          value: 6,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-90-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17d2dede9c8,
          },
          "a-91": {
            id: "a-91",
            title: "Work Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-91-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-photo-first",
                        selectorGuids: ["1764eb67-bd89-575d-8136-63f500189ff0"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-91-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-photo-first",
                        selectorGuids: ["1764eb67-bd89-575d-8136-63f500189ff0"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3928",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-91-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {},
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-91-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17d2dede9c8,
          },
          "a-96": {
            id: "a-96",
            title: "Photo Interaction",
            continuousParameterGroups: [
              {
                id: "a-96-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-96-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: null,
                          yValue: 10,
                          xUnit: "px",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-96-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: null,
                          yValue: -10,
                          xUnit: "px",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x17c83be1b80,
          },
          "a-97": {
            id: "a-97",
            title: "Move In 0.4s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-97-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-97-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 101,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-97-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-97-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 0,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-97-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {},
                      yValue: -101,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-97-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17bbfee2fe8,
          },
          "a-98": {
            id: "a-98",
            title: "Contact Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-98-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-shape",
                        selectorGuids: ["65d1b41c-3d7c-4773-608a-0c466842715a"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-98-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutSine",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-shape",
                        selectorGuids: ["65d1b41c-3d7c-4773-608a-0c466842715a"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-98-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".photo-author",
                        selectorGuids: ["077bb2a2-5642-5860-9e9e-3a483312dfcc"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199e3346e51,
          },
          "a-99": {
            id: "a-99",
            title: "Contact Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-99-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutSine",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-shape",
                        selectorGuids: ["65d1b41c-3d7c-4773-608a-0c466842715a"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-99-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".photo-author",
                        selectorGuids: ["077bb2a2-5642-5860-9e9e-3a483312dfcc"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199e3346e51,
          },
          "a-100": {
            id: "a-100",
            title: "Wrok Wrapper Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-100-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-100-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0, 0.913, 0.795, 1.018],
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                      },
                      widthValue: 130,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1969fbbf148,
          },
          "a-101": {
            id: "a-101",
            title: "Wrok Wrapper Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-101-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0, 0.913, 0.795, 1.018],
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6900b2a78435eda1c71700b2|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1969fbbf148,
          },
          "a-102": {
            id: "a-102",
            title: "Work Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-102-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-card-thumbnail-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d6"],
                      },
                      xValue: 1.02,
                      yValue: 1.02,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-102-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-title-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d5"],
                      },
                      xValue: 30,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-title-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-bg",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d8"],
                      },
                      xValue: 1.4,
                      yValue: 1.4,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-102-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-bg",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d8"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".wrok-primay-photo.second-photo",
                        selectorGuids: [
                          "079894f7-29f2-7272-9f19-05c9d6c7f6d3",
                          "079894f7-29f2-7272-9f19-05c9d6c7f6db",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".wrok-primay-photo.first-photo",
                        selectorGuids: [
                          "079894f7-29f2-7272-9f19-05c9d6c7f6d3",
                          "37e5fe4c-2d64-3439-5c9c-39021ec44552",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-102-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".wrok-primay-photo.first-photo",
                        selectorGuids: [
                          "079894f7-29f2-7272-9f19-05c9d6c7f6d3",
                          "37e5fe4c-2d64-3439-5c9c-39021ec44552",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".wrok-primay-photo.second-photo",
                        selectorGuids: [
                          "079894f7-29f2-7272-9f19-05c9d6c7f6d3",
                          "079894f7-29f2-7272-9f19-05c9d6c7f6db",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-card-thumbnail-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d6"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-102-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-bg",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d8"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-102-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-bg",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d8"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-title-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d5"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-title-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d5"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1964067c77f,
          },
          "a-103": {
            id: "a-103",
            title: "Work Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-103-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-bg",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d8"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-103-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".wrok-primay-photo.first-photo",
                        selectorGuids: [
                          "079894f7-29f2-7272-9f19-05c9d6c7f6d3",
                          "37e5fe4c-2d64-3439-5c9c-39021ec44552",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-103-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".wrok-primay-photo.second-photo",
                        selectorGuids: [
                          "079894f7-29f2-7272-9f19-05c9d6c7f6d3",
                          "079894f7-29f2-7272-9f19-05c9d6c7f6db",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-103-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-card-thumbnail-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d6"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-103-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-bg",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d8"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-103-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-title-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d5"],
                      },
                      xValue: 30,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-103-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-title-wrapper",
                        selectorGuids: ["079894f7-29f2-7272-9f19-05c9d6c7f6d5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1964067c77f,
          },
          "a-104": {
            id: "a-104",
            title: "Button Line Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-104-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-line-overlay",
                        selectorGuids: ["cd860bde-5d82-096a-e94d-5cf556f63230"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-104-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-line-overlay",
                        selectorGuids: ["cd860bde-5d82-096a-e94d-5cf556f63230"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-104-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["cd860bde-5d82-096a-e94d-5cf556f6322b"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x173332e6c0a,
          },
          "a-105": {
            id: "a-105",
            title: "Button Line Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-105-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-line-overlay",
                        selectorGuids: ["cd860bde-5d82-096a-e94d-5cf556f63230"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-105-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["cd860bde-5d82-096a-e94d-5cf556f6322b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x173332e6c0a,
          },
          "a-106": {
            id: "a-106",
            title: "Mouse Movement Work",
            continuousParameterGroups: [
              {
                id: "a-106-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-106-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-bg",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d8",
                            ],
                          },
                          xValue: 20,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-106-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".project-card-thumbnail-wrapper",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d6",
                            ],
                          },
                          xValue: -10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-106-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-bg",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d8",
                            ],
                          },
                          xValue: -20,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-106-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".project-card-thumbnail-wrapper",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d6",
                            ],
                          },
                          xValue: 10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-106-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-106-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-bg",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d8",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-106-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".project-card-thumbnail-wrapper",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d6",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-106-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-bg",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d8",
                            ],
                          },
                          yValue: -20,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-106-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".project-card-thumbnail-wrapper",
                            selectorGuids: [
                              "079894f7-29f2-7272-9f19-05c9d6c7f6d6",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x199e9276ebd,
          },
          "a-107": {
            id: "a-107",
            title: "Service Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-107-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".services-image-wrapper",
                        selectorGuids: ["73476521-bbd1-a632-cdfe-ea4cc5dcea83"],
                      },
                      widthValue: 0,
                      widthUnit: "vh",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-107-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.38, 0.005, 0.215, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".services-image-wrapper",
                        selectorGuids: ["73476521-bbd1-a632-cdfe-ea4cc5dcea83"],
                      },
                      widthValue: 10,
                      widthUnit: "vh",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-107-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.38, 0.005, 0.215, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-title",
                        selectorGuids: ["f5cd0f3a-a475-ed37-a1e4-1c3552ec567c"],
                      },
                      xValue: 3,
                      xUnit: "vh",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199eced0fbe,
          },
          "a-108": {
            id: "a-108",
            title: "Service Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-108-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.38, 0.005, 0.215, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".services-image-wrapper",
                        selectorGuids: ["73476521-bbd1-a632-cdfe-ea4cc5dcea83"],
                      },
                      widthValue: 0,
                      widthUnit: "vh",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-108-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.38, 0.005, 0.215, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-title",
                        selectorGuids: ["f5cd0f3a-a475-ed37-a1e4-1c3552ec567c"],
                      },
                      xValue: 0,
                      xUnit: "vh",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199eced0fbe,
          },
          "a-109": {
            id: "a-109",
            title: "Services First Click",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-109-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom",
                        selectorGuids: ["ff94f41a-b140-ef4e-5ea4-babfb2650be7"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-109-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom-text",
                        selectorGuids: ["1e1f6d06-776a-79aa-136b-453850edac19"],
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-109-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom-text",
                        selectorGuids: ["1e1f6d06-776a-79aa-136b-453850edac19"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-109-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom",
                        selectorGuids: ["ff94f41a-b140-ef4e-5ea4-babfb2650be7"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-109-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom-text",
                        selectorGuids: ["1e1f6d06-776a-79aa-136b-453850edac19"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-109-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom-text",
                        selectorGuids: ["1e1f6d06-776a-79aa-136b-453850edac19"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-109-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".line-1",
                        selectorGuids: ["4d329cdc-0ce3-d8c1-5a09-ffdcd0535edb"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199ecf33537,
          },
          "a-110": {
            id: "a-110",
            title: "Services Second Click",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-110-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom",
                        selectorGuids: ["ff94f41a-b140-ef4e-5ea4-babfb2650be7"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-110-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom-text",
                        selectorGuids: ["1e1f6d06-776a-79aa-136b-453850edac19"],
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-110-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-bottom-text",
                        selectorGuids: ["1e1f6d06-776a-79aa-136b-453850edac19"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-110-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".line-1",
                        selectorGuids: ["4d329cdc-0ce3-d8c1-5a09-ffdcd0535edb"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199ecf33537,
          },
          "a-111": {
            id: "a-111",
            title: "Hero First Animation",
            continuousParameterGroups: [
              {
                id: "a-111-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-111-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-images.left",
                            selectorGuids: [
                              "5b45728d-dff9-3efd-5d70-78492b83b483",
                              "5b45728d-dff9-3efd-5d70-78492b83b491",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-111-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-main-title",
                            selectorGuids: [
                              "5b45728d-dff9-3efd-5d70-78492b83b47f",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-111-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-images.left",
                            selectorGuids: [
                              "5b45728d-dff9-3efd-5d70-78492b83b483",
                              "5b45728d-dff9-3efd-5d70-78492b83b491",
                            ],
                          },
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-111-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-main-title",
                            selectorGuids: [
                              "5b45728d-dff9-3efd-5d70-78492b83b47f",
                            ],
                          },
                          xValue: -70,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18080db9a08,
          },
          "a-112": {
            id: "a-112",
            title: "Hero Second Animation",
            continuousParameterGroups: [
              {
                id: "a-112-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-112-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-images.right-slide",
                            selectorGuids: [
                              "5b45728d-dff9-3efd-5d70-78492b83b483",
                              "5b45728d-dff9-3efd-5d70-78492b83b487",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-112-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-images.right-slide",
                            selectorGuids: [
                              "5b45728d-dff9-3efd-5d70-78492b83b483",
                              "5b45728d-dff9-3efd-5d70-78492b83b487",
                            ],
                          },
                          yValue: -90,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18080db9a08,
          },
          "a-113": {
            id: "a-113",
            title: "Arrow Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-113-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".buton-icon-svg",
                        selectorGuids: ["b6edbb50-fdef-e689-1dfc-7b27a43dbd47"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".buton-icon-svg.is-absolute",
                        selectorGuids: [
                          "b6edbb50-fdef-e689-1dfc-7b27a43dbd47",
                          "b6edbb50-fdef-e689-1dfc-7b27a43dbd4a",
                        ],
                      },
                      xValue: -30,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-113-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".buton-icon-svg",
                        selectorGuids: ["b6edbb50-fdef-e689-1dfc-7b27a43dbd47"],
                      },
                      xValue: 30,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".buton-icon-svg.is-absolute",
                        selectorGuids: [
                          "b6edbb50-fdef-e689-1dfc-7b27a43dbd47",
                          "b6edbb50-fdef-e689-1dfc-7b27a43dbd4a",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1895b27b4e3,
          },
          "a-114": {
            id: "a-114",
            title: "Arrow Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-114-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".buton-icon-svg",
                        selectorGuids: ["b6edbb50-fdef-e689-1dfc-7b27a43dbd47"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-114-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".buton-icon-svg.is-absolute",
                        selectorGuids: [
                          "b6edbb50-fdef-e689-1dfc-7b27a43dbd47",
                          "b6edbb50-fdef-e689-1dfc-7b27a43dbd4a",
                        ],
                      },
                      xValue: -30,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1895b27b4e3,
          },
          "a-115": {
            id: "a-115",
            title: "Blog Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-115-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCirc",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".paralax-image",
                        selectorGuids: ["b6edbb50-fdef-e689-1dfc-7b27a43dbd45"],
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920f1d3bf5,
          },
          "a-116": {
            id: "a-116",
            title: "Blog Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-116-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCirc",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".paralax-image",
                        selectorGuids: ["b6edbb50-fdef-e689-1dfc-7b27a43dbd45"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920f1d3bf5,
          },
          "a-117": {
            id: "a-117",
            title: "Main Image Parallax",
            continuousParameterGroups: [
              {
                id: "a-117-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-117-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".paralax-image",
                            selectorGuids: [
                              "b6edbb50-fdef-e689-1dfc-7b27a43dbd45",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-117-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".paralax-image",
                            selectorGuids: [
                              "b6edbb50-fdef-e689-1dfc-7b27a43dbd45",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x192059a2051,
          },
          "a-118": {
            id: "a-118",
            title: "Social Footer Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-118-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["06e2c54d-e2ac-4ad9-cbe8-aeb0f7f2d495"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ad2dab708,
          },
          "a-119": {
            id: "a-119",
            title: "Social Footer Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-119-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["06e2c54d-e2ac-4ad9-cbe8-aeb0f7f2d495"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ad2dab708,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          slideInTop: {
            id: "slideInTop",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      }),
        "complete" === document.readyState
          ? e()
          : document.addEventListener("readystatechange", () => {
              "complete" === document.readyState && e();
            });
    },
  },
]);
