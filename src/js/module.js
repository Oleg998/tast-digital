
//<![CDATA[
/*! For license information please see web.critical.js.LICENSE.txt */
!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) ||
        Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 3));
})([
  function (t, e) {
    (t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    var r = n(0);
    n(4), n(5);
    var o = r(n(6)),
      i = r(n(7)),
      a = r(n(8)),
      c = n(9),
      s = n(15);
    window.glbDebug.logTick("onBaseCritical"),
      (window.cdaaas = window.cdaaas || {}),
      (window.cdaaas.helpers = window.cdaaas.helpers || {}),
      (window.cdaaas.helpers.loadScript = i.default),
      (window.ScrollSpy = new o.default()),
      (window.globoPage = new a.default()),
      (window.cdaaas.SETTINGS.AD_SMART_CONTAINER = !0),
      (window.cdaaas.helpers.adsSmartContainerSetup =
        s.adsSmartContainerSetup),
      (window.HorizonSchedulePageLoadEvent = c.schedulePageLoadEvent),
      (window.HorizonSendEvent = c.sendHorizonEvent),
      (0, c.horizonClientLoad)(),
      (0, c.schedulePageLoadEvent)();
  },
  function (t, e, n) {},
  function (t, e) {
    (() => {
      "use strict";
      var t = {
          30: function (t, e) {
            var n,
              r =
                (this && this.__extends) ||
                ((n = function (t, e) {
                  return (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(t, e);
                }),
                function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Class extends value " +
                        String(e) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = t;
                  }
                  n(t, e),
                    (t.prototype =
                      null === e
                        ? Object.create(e)
                        : ((r.prototype = e.prototype), new r()));
                });
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.UAGANotInitializedException = void 0);
            var o = (function (t) {
              function e(e, n) {
                return (
                  t.call(
                    this,
                    "[UAGANotInitializedException] ".concat(e),
                    n
                  ) || this
                );
              }
              return r(e, t), e;
            })(Error);
            e.UAGANotInitializedException = o;
          },
          922: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.parseEventToGA4 = e.GA4Tracker = void 0);
            var n = (function () {
              function t() {}
              return (
                (t.prototype.send = function (t) {
                  var e = r(t);
                  (window.dataLayer = window.dataLayer || []),
                    window.dataLayer.push(e);
                }),
                t
              );
            })();
            function r(t) {
              return {
                event: "portfolio_web",
                event_category: t.category,
                event_action: t.action,
                event_label: t.label,
                event_value: t.value,
                event_noninteraction: !!t.nointeraction,
              };
            }
            (e.GA4Tracker = n), (e.parseEventToGA4 = r);
          },
          362: (t, e, n) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.parseEventToUA =
                e.parseUAtoEvent =
                e.pushSender =
                e.globalSender =
                e.UATracker =
                  void 0);
            var r = n(30),
              o = (function () {
                function t(t) {
                  this.configs = t;
                }
                return (
                  (t.prototype.send = function (t) {
                    var e = this.configs,
                      n = e.senders,
                      r = e.panic,
                      o = i(t);
                    n.forEach(function (t) {
                      t(o, { panic: r });
                    });
                  }),
                  t
                );
              })();
            function i(t) {
              return [
                "_trackEvent",
                t.event,
                t.category,
                t.action,
                t.label,
                t.nointeraction,
              ];
            }
            (e.UATracker = o),
              (e.globalSender = function (t, e) {
                var n = e && e.panic;
                if (!window.ga && n)
                  throw new r.UAGANotInitializedException(
                    '"window.ga" não foi definido'
                  );
                if (window.ga) {
                  if ("function" != typeof window.ga)
                    throw new r.UAGANotInitializedException(
                      '"window.ga" não é uma função.'
                    );
                  window.ga.apply(window, t);
                }
              }),
              (e.pushSender = function (t, e) {
                var n = e && e.panic;
                if (!window._ga && n)
                  throw new r.UAGANotInitializedException(
                    '"window._ga" não foi definido.'
                  );
                if (window._ga) {
                  if (window._ga instanceof Array == 0 && n)
                    throw new r.UAGANotInitializedException(
                      '"window.ga" não é um Array.'
                    );
                  (window._ga = window._ga ? window._ga : []),
                    window._ga.push(t);
                }
              }),
              (e.parseUAtoEvent = function (t) {
                return (
                  t[0],
                  {
                    event: t[1],
                    category: t[2],
                    action: t[3],
                    label: t[4],
                    nointeraction: t[5],
                  }
                );
              }),
              (e.parseEventToUA = i);
          },
          843: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.parseEventToHorizon = e.HorizonTracker = void 0);
            var n = (function () {
              function t(t) {
                this.horizonClient = t;
              }
              return (
                (t.prototype.send = function (t) {
                  var e = r(t);
                  this.horizonClient.send(e);
                }),
                t
              );
            })();
            function r(t) {
              return {
                id: "common-event",
                version: "0.1",
                contentType: "common",
                properties: {
                  eventCategory: t.category,
                  eventAction: t.action,
                  eventLabel: t.label,
                },
              };
            }
            (e.HorizonTracker = n), (e.parseEventToHorizon = r);
          },
          304: function (t, e, n) {
            var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.Tracker = void 0);
            var o = n(362),
              i = (function () {
                function t(t) {
                  (this.config = t), (this.config = r({}, t));
                }
                return (
                  (t.prototype.push = function (t) {
                    var e = (0, o.parseUAtoEvent)(t);
                    this.config.clients.forEach(function (t) {
                      t.send(e);
                    });
                  }),
                  (t.prototype.send = function (t) {
                    this.config.clients.forEach(function (e) {
                      e.send(t);
                    });
                  }),
                  t
                );
              })();
            e.Tracker = i;
          },
          156: function (t, e, n) {
            var r =
                (this && this.__createBinding) ||
                (Object.create
                  ? function (t, e, n, r) {
                      void 0 === r && (r = n);
                      var o = Object.getOwnPropertyDescriptor(e, n);
                      (o &&
                        !("get" in o
                          ? !e.__esModule
                          : o.writable || o.configurable)) ||
                        (o = {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        }),
                        Object.defineProperty(t, r, o);
                    }
                  : function (t, e, n, r) {
                      void 0 === r && (r = n), (t[r] = e[n]);
                    }),
              o =
                (this && this.__setModuleDefault) ||
                (Object.create
                  ? function (t, e) {
                      Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e,
                      });
                    }
                  : function (t, e) {
                      t.default = e;
                    }),
              i =
                (this && this.__importStar) ||
                function (t) {
                  if (t && t.__esModule) return t;
                  var e = {};
                  if (null != t)
                    for (var n in t)
                      "default" !== n &&
                        Object.prototype.hasOwnProperty.call(t, n) &&
                        r(e, t, n);
                  return o(e, t), e;
                };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.Horizon = e.GA4 = e.UA = void 0);
            var a = n(922),
              c = n(362),
              s = n(843),
              u = n(304);
            (e.UA = i(n(362))),
              (e.GA4 = i(n(922))),
              (e.Horizon = i(n(843)));
            var l = new Map([
              ["push", c.pushSender],
              ["global", c.globalSender],
            ]);
            e.default = function (t) {
              var e = [],
                n = !!(null == t ? void 0 : t.panic);
              return {
                addGA4: function () {
                  var t = new a.GA4Tracker();
                  return e.push(t), this;
                },
                addUA: function (t) {
                  var r = [l.get(t.sender)],
                    o = new c.UATracker({ panic: n, senders: r });
                  return e.push(o), this;
                },
                addHorizon: function (t) {
                  var n = t.client,
                    r = new s.HorizonTracker(n);
                  return e.push(r), this;
                },
                addCustom: function (t) {
                  return e.push(t), this;
                },
                build: function () {
                  return new u.Tracker({ clients: e });
                },
              };
            };
          },
          987: function (t, e, n) {
            var r =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = r(n(156));
            window.trackerBuilder = o.default;
          },
        },
        e = {};
      !(function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = (e[r] = { exports: {} });
        return t[r].call(i.exports, i, i.exports, n), i.exports;
      })(987);
    })();
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = void 0);
    var r = null,
      o = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
    function i(t, e) {
      var n = t.getBoundingClientRect(),
        r = e.getBoundingClientRect();
      return (
        r.bottom < n.top ||
        r.right < n.left ||
        r.left > n.right ||
        r.top > n.bottom
      );
    }
    function a(t) {
      var e = document.defaultView.getComputedStyle(t),
        n = e.getPropertyValue("overflow-x"),
        r = e.getPropertyValue("overflow-y");
      return "visible" !== n || "visible" !== r;
    }
    function c() {
      return (
        r ||
        ((r = {
          add: o(this.addElement, this),
          clean: o(this.cleanItems, this),
          getItems: o(this.getItems, this),
          debug: o(this.debug, this),
        }),
        (this.onScroll = o(this.onScroll, this)),
        (this.onResize = o(this.onResize, this)),
        (this.items = []),
        this.setDefaultVariables(),
        r)
      );
    }
    (c.prototype.throttle = function (t) {
      var e = !0;
      return function (n) {
        e &&
          (t(n),
          (e = !1),
          setTimeout(function () {
            return (e = !0);
          }, 150));
      };
    }),
      (c.prototype.cleanItems = function () {
        this.items = [];
      }),
      (c.prototype.startListener = function () {
        window.addEventListener("scroll", this.throttle(this.onScroll)),
          window.addEventListener("resize", this.throttle(this.onResize));
      }),
      (c.prototype.stopListeners = function () {
        window.removeEventListener(
          "scroll",
          this.throttle(this.onScroll)
        ),
          window.removeEventListener(
            "resize",
            this.throttle(this.onResize)
          );
      }),
      (c.prototype.resetElementPosition = function () {
        var t;
        this.winHeight = window.innerHeight;
        for (var e = 0, n = this.items.length; e < n; e++)
          (t = this.items[e]).pos = this.getElementPos(t);
        this.items.sort(function (t, e) {
          return t.pos > e.pos ? 1 : t.pos < e.pos ? -1 : 0;
        }),
          this.checkVisibleItems();
      }),
      (c.prototype.getElementPos = function (t) {
        var e = this.getScrollY();
        return t.el.getBoundingClientRect()[t.reference] + e - t.offset;
      }),
      (c.prototype.getScrollY = function () {
        var t;
        return "undefined" != typeof pageYOffset
          ? pageYOffset
          : (t = (t = document.documentElement).clientHeight
              ? t
              : document.body).scrollTop;
      }),
      (c.prototype.onResize = function () {
        this.throttle(function () {
          this.winHeight !== window.innerHeight &&
            this.resetElementPosition();
        });
      }),
      (c.prototype.onScroll = function (t) {
        this.checkDocumentHeight(), this.checkVisibleItems(t);
      }),
      (c.prototype.getItems = function () {
        return this.items;
      }),
      (c.prototype.setDefaultVariables = function () {
        (this.winHeight = window.innerHeight),
          (this.lastPos = this.getScrollY()),
          (this.docHeight = document.body
            ? document.body.offsetHeight
            : 0);
      }),
      (c.prototype.addElement = function (t) {
        var e, n;
        if (t.el) {
          (t.offset = void 0 === t.offset ? 200 : t.offset),
            (t.reference = t.reference || "top"),
            (t.pos = this.getElementPos(t)),
            (n = this.items.length),
            (e = 0);
          for (
            var r = 0, o = this.items.length;
            r < o && !(this.items[r].pos > t.pos);
            r++
          )
            e++;
          this.items.splice(e, 0, t),
            0 === n && (this.setDefaultVariables(), this.startListener()),
            this.checkVisibleItems();
        }
      }),
      (c.prototype.checkDocumentHeight = function () {
        var t = document.body.offsetHeight;
        this.docHeight !== t &&
          ((this.docHeight = t), this.resetElementPosition());
      }),
      (c.prototype.isOverlapped = function (t, e) {
        if (e) return i(t, e);
        for (var n = t.parentElement; n && n !== document.body; ) {
          if (a(n)) return i(t, n);
          n = n.parentElement;
        }
        return !1;
      }),
      (c.prototype.checkVisibleItems = function (t) {
        for (
          var e, n = 0, r = this.getScrollY(), o = this.winHeight + r;
          n < this.items.length;

        )
          if (((e = this.items[n]), this.isOverlapped(e.el))) n += 1;
          else {
            if (!(o >= e.pos)) break;
            e.callback && e.callback(e.el, t), this.items.splice(n, 1);
          }
        (this.lastPos = r), this.items.length || this.stopListeners();
      }),
      (c.prototype.debug = function () {
        for (var t, e, n, r = 0, o = this.items.length; r < o; r++)
          (t = "2px dashed " + (r % 2 ? "red" : "blue")),
            ((e = this.items[r]).el.style.border = t),
            ((n = document.createElement("div")).className =
              "debug-line"),
            (n.style.top = e.pos),
            (n.style.width = "100%"),
            (n.style.position = "absolute"),
            (n.style.borderTop = t),
            document.body.appendChild(n);
      });
    var s = c;
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = void 0);
    var r = function (t, e) {
      var n = document.createElement("script"),
        r = document.getElementsByTagName("script")[0];
      (n.type = "text/javascript"),
        (n.async = !0),
        (n.charset = "utf-8"),
        (n.onload = n.onreadystatechange =
          function () {
            (n.readyState && !/loaded|complete/.test(n.readyState)) ||
              ((n = n.onload = n.onreadystatechange = null),
              e && e.apply(n, arguments));
          }),
        (n.src = t),
        r.parentNode.insertBefore(n, r);
    };
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = void 0);
    var r = function () {
      var t = this,
        e = {
          treatCallback: function (t, e) {
            void 0 !== e && e(t);
          },
          waitForFinish: function (t, e) {
            var n = this;
            t.addEventListener("load", function () {
              n.treatCallback(t, e);
            });
          },
        };
      (this.initialize = function () {
        this.loadMedias(), this.loadCSSs(), this.loadScripts();
      }),
        (this.loadCSSs = function (e) {
          var n = document.querySelectorAll("link[data-src]");
          t.load(n, "href", e);
        }),
        (this.loadScripts = function (e) {
          var n = document.querySelectorAll("script[data-src]");
          t.load(n, "src", e);
        }),
        (this.loadMedias = function () {
          this.loadImages(), this.loadGifs();
        }),
        (this.loadImages = function (e) {
          for (
            var n = document.querySelectorAll(".progressive-img picture"),
              r = n.length - 1;
            r >= 0;
            r--
          )
            window.ScrollSpy.add({
              el: n[r].parentNode,
              offset: 800,
              callback: function (e, n) {
                var r = e.querySelectorAll("picture")[0],
                  o = r.querySelectorAll("source"),
                  i = r.querySelectorAll("img");
                i.length && t.load(i, "src", t.onLoadImages),
                  t.load(o, "srcset");
              },
            });
        }),
        (this.loadGifs = function (e) {
          for (
            var n = document.querySelectorAll(
                ".content-media__gif-container"
              ),
              r = n.length - 1;
            r >= 0;
            r--
          )
            window.ScrollSpy.add({
              el: n[r],
              offset: 800,
              callback: function (e, n) {
                var r = e.querySelectorAll(
                    ".content-media__gif-container__gif-player"
                  )[0],
                  o = e.querySelectorAll(
                    ".content-media__gif-container__gif-placeholder"
                  )[0],
                  i = e.querySelectorAll("source");
                t.load(i, "src"),
                  r.load(),
                  r.addEventListener(
                    "loadeddata",
                    function () {
                      o.style.display = "none";
                    },
                    !1
                  );
              },
            });
        }),
        (this.onLoadImages = function (t) {
          t.classList.add("progressive-loaded");
        }),
        (this.load = function (t, n, r) {
          0 === t.length && e.treatCallback(r);
          for (var o = 0; o < t.length; o++)
            !(function (o) {
              var i = t[o],
                a = i.getAttribute("data-src");
              i.setAttribute(n, a), e.waitForFinish(i, r);
            })(o);
        }),
        this.initialize();
    };
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sendHorizonEvent =
        e.schedulePageLoadEvent =
        e.horizonClientLoad =
          void 0);
    var o = r(n(10)),
      i = r(n(13)),
      a = r(n(14));
    function c(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    var s = function (t) {
        t && window.cdaaas.internals.resolveHorizonPromise
          ? window.cdaaas.internals.resolveHorizonPromise(t)
          : window.cdaaas.internals.rejectHorizonPromise &&
            window.cdaaas.internals.rejectHorizonPromise();
      },
      u = (function () {
        var t = (0, a.default)(
          o.default.mark(function t() {
            var e, n, r, i, a, c;
            return o.default.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        globalWebdeps("horizon-client-v1")
                      );
                    case 3:
                      t.next = 9;
                      break;
                    case 5:
                      throw (
                        ((t.prev = 5),
                        (t.t0 = t.catch(0)),
                        s(),
                        new Error(
                          "Failed to fetch horizon-client-v1",
                          t.t0.msg
                        ))
                      );
                    case 9:
                      return (
                        (e = window.horizon),
                        (n = e.HorizonClient),
                        (r = e.Settings),
                        window.location.hostname.includes(".qa.") &&
                          r.useQAConfiguration(),
                        (i = window.cdaaas.SETTINGS.SITE_ID),
                        (a = window.cdaaas.SETTINGS.CHANNEL),
                        (c = new n(i.toLowerCase(), a.toLowerCase())),
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            var t;
                            "hidden" === document.visibilityState &&
                              (null !== (t = window.HorizonHelpers) &&
                                void 0 !== t &&
                                t.unloadCallbacks &&
                                window.HorizonHelpers.unloadCallbacks.forEach(
                                  function (t) {
                                    try {
                                      t();
                                    } catch (t) {
                                      console.error(
                                        "Horizon unload callback error",
                                        t.msg
                                      );
                                    }
                                  }
                                ),
                              c.unload());
                          }
                        ),
                        s(c),
                        t.abrupt("return", c)
                      );
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
    e.horizonClientLoad = u;
    var l = (function () {
      var t = (0, a.default)(
        o.default.mark(function t(e, n, r) {
          var i,
            a,
            c = arguments;
          return o.default.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (i = c.length > 3 && void 0 !== c[3] ? c[3] : {}),
                    (t.next = 3),
                    window.HorizonClient
                  );
                case 3:
                  (a = t.sent) &&
                    e &&
                    n &&
                    r &&
                    a.send({
                      id: e,
                      version: n,
                      contentType: i.contentType || "bs-template",
                      properties: r,
                    });
                case 5:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
      return function (e, n, r) {
        return t.apply(this, arguments);
      };
    })();
    e.sendHorizonEvent = l;
    var d = function () {
      var t, e;
      return (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                (0, i.default)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(n)
              )
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      })(
        {
          pageType:
            null === (t = globalThis.utag_data) || void 0 === t
              ? void 0
              : t.tipo_pagina,
        },
        (null === (e = globalThis.cdaaas) || void 0 === e
          ? void 0
          : e.PAGE_ANALYTICS_DATA) || {}
      );
    };
    e.schedulePageLoadEvent = function () {
      window.addEventListener("load", function () {
        l("bs-template-load", "1.0", d());
      });
    };
  },
  function (t, e, n) {
    var r = n(11)();
    t.exports = r;
    try {
      regeneratorRuntime = r;
    } catch (t) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = r)
        : Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (t, e, n) {
    var r = n(12).default;
    function o() {
      "use strict";
      (t.exports = o =
        function () {
          return e;
        }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
      var e = {},
        n = Object.prototype,
        i = n.hasOwnProperty,
        a = "function" == typeof Symbol ? Symbol : {},
        c = a.iterator || "@@iterator",
        s = a.asyncIterator || "@@asyncIterator",
        u = a.toStringTag || "@@toStringTag";
      function l(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        l({}, "");
      } catch (t) {
        l = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function d(t, e, n, r) {
        var o = e && e.prototype instanceof h ? e : h,
          i = Object.create(o.prototype),
          a = new P(r || []);
        return (
          (i._invoke = (function (t, e, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return L();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var c = S(a, n);
                  if (c) {
                    if (c === p) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r)
                    throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var s = f(t, e, n);
                if ("normal" === s.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"),
                    s.arg === p)
                  )
                    continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((r = "completed"),
                  (n.method = "throw"),
                  (n.arg = s.arg));
              }
            };
          })(t, n, a)),
          i
        );
      }
      function f(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = d;
      var p = {};
      function h() {}
      function v() {}
      function y() {}
      var g = {};
      l(g, c, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        m = w && w(w(A([])));
      m && m !== n && i.call(m, c) && (g = m);
      var b = (y.prototype = h.prototype = Object.create(g));
      function _(t) {
        ["next", "throw", "return"].forEach(function (e) {
          l(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function E(t, e) {
        var n;
        this._invoke = function (o, a) {
          function c() {
            return new e(function (n, c) {
              !(function n(o, a, c, s) {
                var u = f(t[o], t, a);
                if ("throw" !== u.type) {
                  var l = u.arg,
                    d = l.value;
                  return d && "object" == r(d) && i.call(d, "__await")
                    ? e.resolve(d.__await).then(
                        function (t) {
                          n("next", t, c, s);
                        },
                        function (t) {
                          n("throw", t, c, s);
                        }
                      )
                    : e.resolve(d).then(
                        function (t) {
                          (l.value = t), c(l);
                        },
                        function (t) {
                          return n("throw", t, c, s);
                        }
                      );
                }
                s(u.arg);
              })(o, a, n, c);
            });
          }
          return (n = n ? n.then(c, c) : c());
        };
      }
      function S(t, e) {
        var n = t.iterator[e.method];
        if (void 0 === n) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              S(t, e),
              "throw" === e.method)
            )
              return p;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return p;
        }
        var r = f(n, t.iterator, e.arg);
        if ("throw" === r.type)
          return (
            (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), p
          );
        var o = r.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method &&
                ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              p)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            p);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function O(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function P(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function A(t) {
        if (t) {
          var e = t[c];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              r = function e() {
                for (; ++n < t.length; )
                  if (i.call(t, n))
                    return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (r.next = r);
          }
        }
        return { next: L };
      }
      function L() {
        return { value: void 0, done: !0 };
      }
      return (
        (v.prototype = y),
        l(b, "constructor", y),
        l(y, "constructor", v),
        (v.displayName = l(y, u, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === v || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, y)
              : ((t.__proto__ = y), l(t, u, "GeneratorFunction")),
            (t.prototype = Object.create(b)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        _(E.prototype),
        l(E.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = E),
        (e.async = function (t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new E(d(t, n, r, o), i);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        _(b),
        l(b, u, "Generator"),
        l(b, c, function () {
          return this;
        }),
        l(b, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = A),
        (P.prototype = {
          constructor: P,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(O),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  i.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r],
                a = o.completion;
              if ("root" === o.tryLoc) return n("end");
              if (o.tryLoc <= this.prev) {
                var c = i.call(o, "catchLoc"),
                  s = i.call(o, "finallyLoc");
                if (c && s) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                } else if (c) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error(
                      "try statement without catch or finally"
                    );
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                i.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              p
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), O(n), p;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  O(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = {
                iterator: A(t),
                resultName: e,
                nextLoc: n,
              }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        e
      );
    }
    (t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    function n(e) {
      return (
        (t.exports = n =
          "function" == typeof Symbol &&
          "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    (t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    function n(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          s = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(s) : Promise.resolve(s).then(r, o);
    }
    (t.exports = function (t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);
          function c(t) {
            n(a, o, i, c, s, "next", t);
          }
          function s(t) {
            n(a, o, i, c, s, "throw", t);
          }
          c(void 0);
        });
      };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.adsSmartContainerSetup = void 0);
    var r = function (t, e) {
      return (
        t.forgotRuleEnabled &&
        (e.getBoundingClientRect() || {}).bottom <= 0
      );
    };
    e.adsSmartContainerSetup = function (t) {
      if (t) {
        document.addEventListener("adserver-ad-rendered", function (e) {
          var n,
            o = e.evento_original,
            i = o.isEmpty,
            a = o.size,
            c =
              ((n = e.id_elemento),
              t.find(function (t) {
                return t.name === n;
              }));
          c &&
            (function (t, e, n) {
              var o,
                i =
                  null == t ||
                  null === (o = t.querySelector) ||
                  void 0 === o
                    ? void 0
                    : o.call(t, t);
              i &&
                t &&
                ((t.height = t.height || t.initialHeight),
                e && t.initialHeight
                  ? (function (t, e) {
                      if (t) {
                        var n = e
                          ? "glb-ads-container--hide-opacity"
                          : "glb-ads-container--hide";
                        t.classList.add(n);
                      }
                    })(i, r(t, i))
                  : t.hasMultipleSize &&
                    n[1] !== t.height &&
                    !r(t, i) &&
                    ((t.height =
                      1 === n[1] && t.initialHeight
                        ? t.initialHeight
                        : n[1]),
                    i.style.setProperty(
                      "--glb-banner-height",
                      "".concat(t.height, "px")
                    )));
            })(c, i, a);
        });
      }
    };
  },
]);
(() => {
  "use strict";
  var {
      HAS_FEATURED_IMAGE: t,
      PLATFORM_FROM_CHANNEL: e,
      HZ_TRACKER_ENABLED: n,
    } = window.cdaaas.SETTINGS,
    { ID: o } = window.cdaaas.SETTINGS.RESOURCE,
    { platform: i, bs_content_type: a } = window.utag_data;
  var c = (t) => {
    var e = t.getAttribute("data-block-type");
    return e
      ? "unstyled" === e || "raw" === e
        ? "paragraph"
        : e.replace("backstage-", "")
      : "unknown";
  };
  (window.glbMc.chunksData = (() => {
    for (
      var t = [...document.querySelectorAll("[data-block-type]")]
          .filter((t) => !t.closest(".bs-block--exclude-chunk-children"))
          .sort((t, e) =>
            t.getBoundingClientRect().top >= e.getBoundingClientRect().top
              ? 1
              : -1
          ),
        e = [],
        n = 0;
      n < t.length;
      n++
    ) {
      var o = t[n];
      o &&
        (o.setAttribute("data-block-id", n),
        e.push({
          position: n,
          chunk: o,
          chunkType: c(o),
          offsetHeight: o.offsetHeight,
          offsetWidth: o.offsetWidth,
          clickCount: 0,
          timeVisible: 0,
          timeUntilLastVisible: 0,
          views: [],
        }));
    }
    return e;
  })()),
    (() => {
      if (n) {
        var { chunksData: c } = window.glbMc;
        window.HorizonClient.then((n) => {
          n.send({
            id: "multicontent-load",
            version: "3.0",
            contentType: "multicontent",
            properties: {
              multicontentId: o,
              chunkTotal: c.length,
              hasTopPhoto: t,
              pageType: "multi-content",
              contentType: a,
              deviceGroup: i || e,
              environment: "web",
            },
          });
        });
      }
    })();
})();
/*! For license information please see web.critical.js.LICENSE */
!(function (t) {
  var r = {};
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = r),
    (e.d = function (t, r, n) {
      e.o(t, r) ||
        Object.defineProperty(t, r, { enumerable: !0, get: n });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, r) {
      if ((1 & r && (t = e(t)), 8 & r)) return t;
      if (4 & r && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (e.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & r && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            n,
            o,
            function (r) {
              return t[r];
            }.bind(null, o)
          );
      return n;
    }),
    (e.n = function (t) {
      var r =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (e.p = ""),
    e((e.s = 12));
})([
  function (t, r, e) {
    t.exports = e(7);
  },
  
  
  function (t, r, e) {
    "use strict";
    (function (t) {
      e.d(r, "a", function () {
        return c;
      }),
        e.d(r, "b", function () {
          return s;
        });
      var n = e(0),
        o = e.n(n);
      function i(r, e, n, o, i, a, u) {
        try {
          var c = r[a](u),
            s = c.value;
        } catch (r) {
          return void n(r);
        }
        c.done ? e(s) : t.resolve(s).then(o, i);
      }
      function a(r) {
        return function () {
          var e = this,
            n = arguments;
          return new t(function (t, o) {
            var a = r.apply(e, n);
            function u(r) {
              i(a, t, o, u, c, "next", r);
            }
            function c(r) {
              i(a, t, o, u, c, "throw", r);
            }
            u(void 0);
          });
        };
      }
      var u = (function () {
          var r = a(
            o.a.mark(function r() {
              var e, n, i;
              return o.a.wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.next = 2), window.globalWebdeps("cadun");
                    case 2:
                      return (
                        (e = window),
                        (n = e.Cadun),
                        (i = new t(function (t) {
                          n.Event.subscribe(
                            "userInfoAvailable",
                            function () {
                              var r =
                                0 < arguments.length &&
                                void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return t({
                                glb_id: r.globoId ? r.globoId : null,
                                glb_tipo: r.globoId
                                  ? "logado"
                                  : "anonimo",
                              });
                            }
                          );
                        })),
                        r.abrupt("return", i)
                      );
                    case 5:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
          return function () {
            return r.apply(this, arguments);
          };
        })(),
        c = (function () {
          var t = a(
            o.a.mark(function t() {
              var r;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), u();
                    case 2:
                      return (
                        (r = t.sent),
                        t.abrupt("return", r.glb_id || void 0)
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        s = (function () {
          var t = a(
            o.a.mark(function t() {
              var r;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), u();
                    case 2:
                      return (r = t.sent), t.abrupt("return", r.glb_tipo);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
    }).call(this, e(2));
  },

]);

/* web(desktop) critical javascript */

(function () {
  const fontFamilyToExclude = ["Globotipo Rounded"];
  const FONT_GLOBOTIPO_URL =
    "https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/version/6408cb8fc43ff49841e181db/globotipo-variable.css";

  function includeGlobotipoVariable() {
    let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    linkElement.href = FONT_GLOBOTIPO_URL;
    linkElement.setAttribute("data-origin", "barra-globo");

    document.head.appendChild(linkElement);
  }

  function checkValidAvailableFonts(fontFaceSet) {
    const validFontsAvailable = [...fontFaceSet]
      .filter((fontset) => fontset.family.includes("Globotipo"))
      .filter((fontset) => !fontFamilyToExclude.includes(fontset.family))
      .map((fontSet) => fontSet.family);

    return [...new Set(validFontsAvailable)];
  }

  document.fonts.ready.then((fontFaceSet) => {
    const validFontsAvailable = checkValidAvailableFonts(fontFaceSet);
    const hasFontValidLoaded = validFontsAvailable.length > 0;

    if (!hasFontValidLoaded) {
      includeGlobotipoVariable();
    }
  });
})();
//]]>
