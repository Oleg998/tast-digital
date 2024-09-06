(() => {
  'use strict';
  var e = {
      2087: (e, t, r) => {
        function n(e) {
          return (
            (n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            n(e)
          );
        }
        function s(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, i(n.key), n);
          }
        }
        function i(e) {
          var t = (function (e, t) {
            if ('object' != n(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var s = r.call(e, 'string');
              if ('object' != n(s)) return s;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == n(t) ? t : String(t);
        }
        var o, a, u;
        (u = r(8578)),
          (a = r(6648)),
          (o = (function () {
            function e() {
              var t,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.formAction = this.formAction.bind(this)),
                (this.closeSuggest = this.closeSuggest.bind(this)),
                this.init(),
                (this.animationDuration =
                  null != (t = r.animationDuration) ? t : 120);
            }
            var t, r;
            return (
              (t = e),
              (r = [
                {
                  key: 'init',
                  value: function () {
                    return (
                      u({
                        suggestSize: 3,
                        featuredContentSize: 3,
                        historySize: 3,
                        showSearchProduct: !0,
                        showSearchAllProducts: !0,
                      }),
                      (this.portalHome =
                        glb.cdnConfig.fnProduct.search ||
                        glb.cdnConfig.fnProduct.home),
                      this.cacheDom(),
                      this.createHtml(),
                      this.listenEvents(),
                      this.executePreSuggest()
                    );
                  },
                },
                {
                  key: 'cacheDom',
                  value: function () {
                    return (this.dom = {
                      $searchContainer: $('#busca-padrao'),
                    });
                  },
                },
                {
                  key: 'formAction',
                  value: function () {
                    var e;
                    if ((e = this.portalHome))
                      return (e = e.replace('index.html', '')) + 'busca/';
                  },
                },
                {
                  key: 'createHtml',
                  value: function () {
                    var e;
                    return (
                      (e = a.createSearchBaseHtml(this.formAction)),
                      this.dom.$searchContainer.html(e),
                      (this.dom.$searchInput = $('#busca-campo')),
                      (this.dom.$suggestContainer = $('.suggest-container')),
                      (this.dom.$searchForm = $('#frmBusca'))
                    );
                  },
                },
                {
                  key: 'executePreSuggest',
                  value: function () {
                    return glb.currentSearch.executePreSuggest(4);
                  },
                },
                {
                  key: 'openSuggest',
                  value: function () {
                    if (
                      (window.glbNavCdnClient.loadAsset(
                        'common',
                        'fn-common-products-svg-container'
                      ),
                      glb.currentSearchDesktop.dom.$suggestContainer.children()
                        .length)
                    )
                      return (
                        glb.$document.trigger('glb.busca.open'),
                        glb.currentSearchDesktop.dom.$suggestContainer
                          .addClass('suggest-container--visible')
                          .css('opacity', 1)
                      );
                  },
                },
                {
                  key: 'closeSuggest',
                  value: function () {
                    return (
                      glb.currentSearchDesktop.dom.$suggestContainer.css(
                        'opacity',
                        0.1
                      ),
                      setTimeout(function () {
                        return (
                          glb.$document.trigger('glb.busca.close'),
                          glb.currentSearchDesktop.dom.$suggestContainer.removeClass(
                            'suggest-container--visible'
                          )
                        );
                      }, this.animationDuration)
                    );
                  },
                },
                {
                  key: 'listenEvents',
                  value: function () {
                    return (
                      this.dom.$searchInput.on('focus', this.openSuggest),
                      this.dom.$searchInput.on('blur', this.closeSuggest),
                      glb.currentSearch.bindElements(
                        this.dom.$searchInput,
                        this.dom.$suggestContainer,
                        this.dom.$searchForm
                      )
                    );
                  },
                },
              ]) && s(t.prototype, r),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })()),
          (window.glb = window.glb || {}),
          (window.glb.SearchDesktop = o),
          (window.loadSearchDesktop = function () {
            if (!window.isTouchable || $(window).width() >= 960)
              return (window.glb.currentSearchDesktop =
                new window.glb.SearchDesktop());
          }),
          e.exports && (e.exports = window.loadSearchDesktop);
      },
      6883: e => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            t(e)
          );
        }
        function r(e, t) {
          for (var r = 0; r < t.length; r++) {
            var s = t[r];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(e, n(s.key), s);
          }
        }
        function n(e) {
          var r = (function (e, r) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var s = n.call(e, 'string');
              if ('object' != t(s)) return s;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(r) ? r : String(r);
        }
        var s;
        (s = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.init = this.init.bind(this)),
              this.init(t);
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function (e) {
                  return (
                    (this.searchUrl = e.replace(/\/$/, '')),
                    (this.portalName = glb.cdnConfig.fnProduct.name),
                    (this.suggestCurrentlyLoading = !1)
                  );
                },
              },
              {
                key: 'getPriority',
                value: function () {
                  var e;
                  return (
                    'famosos' === (e = this.portalName) && (e = 'ego'),
                    e || 'g1'
                  );
                },
              },
              {
                key: 'loadPreSuggest',
                value: function (e, t) {
                  var r;
                  return (
                    (r = {
                      score: !0,
                      size: e,
                      measure_featured_content_click: !0,
                    }),
                    this.suggestCurrentlyLoading &&
                      (console.log('request aborted!'),
                      this.suggestCurrentlyLoading.abort()),
                    (this.suggestCurrentlyLoading = $.get(
                      this.searchUrl + '/suggest',
                      r,
                      function (e) {
                        return t(e);
                      }
                    ))
                  );
                },
              },
              {
                key: 'loadSuggest',
                value: function (e, t, r, n) {
                  var s;
                  return (
                    (s = {
                      q: e,
                      score: !0,
                      size: Math.max(t, r),
                      measure_featured_content_click: !0,
                      prioritarios: this.getPriority(),
                    }),
                    $.get(this.searchUrl + '/suggest', s, function (e) {
                      return (
                        (e.suggestions = e.suggestions.slice(0, t)),
                        (e.suggestions_highlithed =
                          e.suggestions_highlithed.slice(0, t)),
                        (e.featured_content = e.featured_content.slice(0, r)),
                        n(e)
                      );
                    })
                  );
                },
              },
            ]) && r(t.prototype, n),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })()),
          (window.glb = window.glb || {}),
          (window.glb.SearchSuggestClient = s),
          (window.loadSearchSuggestClient = function (e) {
            return (window.glb.currentSearchSuggestClient =
              new window.glb.SearchSuggestClient(e));
          }),
          e.exports && (e.exports = window.loadSearchSuggestClient);
      },
      160: e => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            t(e)
          );
        }
        function r(e, t) {
          for (var r = 0; r < t.length; r++) {
            var s = t[r];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(e, n(s.key), s);
          }
        }
        function n(e) {
          var r = (function (e, r) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var s = n.call(e, 'string');
              if ('object' != t(s)) return s;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(r) ? r : String(r);
        }
        var s;
        (s = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.document = $(document)),
              (this.searchHistoryKey = 'fn-search-history'),
              (this.searchHistoryExpire = 43200),
              (this.searchHistoryLimit = 9),
              this.bind();
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: 'bind',
                value: function () {
                  var e = this;
                  return (
                    this.document.on('glb.busca.searched', function (t, r) {
                      return e.saveSearchTerm(r);
                    }),
                    this.document.on(
                      'glb.busca.featureContent',
                      function (t, r) {
                        var n;
                        if (
                          (n = glb.currentSearch.currentFeaturedContentData[r])
                        )
                          return e.saveFeaturedContent(n);
                      }
                    )
                  );
                },
              },
              {
                key: 'saveSearchTerm',
                value: function (e) {
                  return this.appendToSearchHistory({
                    type: 'suggest',
                    data: e,
                  });
                },
              },
              {
                key: 'saveFeaturedContent',
                value: function (e) {
                  return this.appendToSearchHistory({
                    type: 'featuredContent',
                    data: e,
                  });
                },
              },
              {
                key: 'appendToSearchHistory',
                value: function (e) {
                  var t;
                  return (
                    (t = window.localStorageCache.load(
                      this.searchHistoryKey
                    )) || (t = []),
                    t.push(e),
                    t.length > this.searchHistoryLimit &&
                      (t = t.slice(-this.searchHistoryLimit)),
                    window.localStorageCache.save(
                      this.searchHistoryKey,
                      t,
                      this.searchHistoryExpire
                    )
                  );
                },
              },
              {
                key: 'getSearchHistory',
                value: function () {
                  var e,
                    t,
                    r,
                    n,
                    s,
                    i,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.searchHistoryLimit;
                  if (
                    ((r = function (e, t) {
                      var r, n, s, i, o;
                      for (n = 0, s = e.length; n < s; n++) {
                        if (
                          (r = e[n]).type === (i = t.type) &&
                          'suggest' === i &&
                          r.data === t.data
                        )
                          return !0;
                        if (
                          r.type === (o = t.type) &&
                          'featuredContent' === o &&
                          r.data.url === t.data.url
                        )
                          return !0;
                      }
                      return !1;
                    }),
                    (n = function (e) {
                      return !(
                        'featuredContent' === e.type &&
                        !e.data.hasOwnProperty('title')
                      );
                    }),
                    !(i = window.localStorageCache.load(this.searchHistoryKey))
                      .length)
                  )
                    return !1;
                  for (s = [], t = i.length - 1; t >= 0 && s.length < o; )
                    !r(s, (e = i[t])) && n(e) && s.push(e), t--;
                  return s;
                },
              },
            ]),
            n && r(t.prototype, n),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })()),
          (window.glb = window.glb || {}),
          (window.glb.SearchSuggestHistory = s),
          (window.loadSearchSuggestHistory = function () {
            return (window.glb.currentSearchSuggestHistory =
              new window.glb.SearchSuggestHistory());
          }),
          e.exports && (e.exports = window.loadSearchSuggestHistory);
      },
      6648: e => {
        var t;
        ((t = {}).searchTemplate =
          '<form name="busca-padrao" id="frmBusca" action="{{formAction}}" method="get" accept-charset="utf-8">\n  <fieldset>\n    <input placeholder="BUSCAR" type="search" name="q" id="busca-campo" autocomplete="off" tabindex="1">\n    <input type="text" class="search-hint" id="search-hint" value="" tabindex="-1">\n    <label for="busca-campo" class="lupa">\n      <svg>\n        <use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#eixo-icone-busca"></use>\n      </svg>\n    </label>\n    <input class="regua-search-is-pre-suggest" type="hidden" name="ps" value="on" disabled/>\n    <button class="search-button" type="submit">buscar</button>\n  </fieldset>\n</form>\n<div class="suggest-container suggest-container--popover"></div>'),
          (t.searchSuggestFeaturedContentTemplate =
            '<li class="featured-content {{class_name}}">\n  <div class="featured-content__img">\n    <svg class="regua-navegacao-icon" style="width:{{product_icon_width}}px">\n      <use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#{{product_icon_name}}"></use>\n    </svg>\n  </div>\n  <div class="featured-content__title">\n    <a href="{{url}}" class="featured-content__link">{{title}}</a>\n    <p class="featured-content__parent">EM {{parent}}</p>\n  </div>\n</li>'),
          (t.searchSuggestSuggestionTemplate =
            '<li class="suggestion">\n  <div class="suggestion__img">\n    <svg>\n      <use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#eixo-icone-busca"></use>\n    </svg>\n  </div>\n  <div class="suggestion__title">\n    <a href="#{{text}}" class="suggestion__link">{{text}}</a>\n  </div>\n</li>'),
          (t.searchSuggestOtherOptionsTemplate =
            '{{#showSearchProduct}}\n<li class="other-option search-product">\n  <div class="other-option__img">\n    <svg>\n      <use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#eixo-icone-busca"></use>\n    </svg>\n  </div>\n  <div class="other-option__title">\n    <a href="{{searchUrl}}?q={{query}}" class="other-option__link">\n      <span class="other-option__search-by">buscar por</span> "{{displayQuery}}" <span class="other-option__search-by">em {{portalLabel}}</span>\n    </a>\n  </div>\n</li>\n{{/showSearchProduct}}\n\n{{#showSearchAllProducts}}\n<li class="other-option search-all-products">\n  <div class="other-option__img">\n    <svg>\n      <use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#eixo-icone-busca"></use>\n    </svg>\n  </div>\n  <div class="other-option__title">\n    <a href="{{searchAllUrl}}?q={{query}}" class="other-option__link">\n      <span class="other-option__search-by">buscar por</span> "{{displayQuery}}" <span class="other-option__search-by">na Globo.com</span>\n    </a>\n  </div>\n</li>\n{{/showSearchAllProducts}}'),
          (t.searchSuggestTemplate =
            '<div class="suggest-container__arrow"></div>\n<ul class="suggest">\n  {{#featured_content}}' +
            t.searchSuggestFeaturedContentTemplate +
            '{{/featured_content}}\n\n{{#suggestions}}' +
            t.searchSuggestSuggestionTemplate +
            '{{/suggestions}}\n' +
            t.searchSuggestOtherOptionsTemplate +
            '</ul>'),
          (t.searchPreSuggestTemplate =
            '<div class="suggest-container__arrow"></div>\n<ul class="pre-suggest">\n  {{#searchHistoryHtml}}\n  <li class="suggest-label">meu histórico em {{portalLabel}}:</li>\n  {{{searchHistoryHtml}}}\n  {{/searchHistoryHtml}}\n  <li class="suggest-label">MAIS BUSCADOS:</li>\n  {{#preSuggest.suggestions}}' +
            t.searchSuggestSuggestionTemplate +
            '{{/preSuggest.suggestions}}\n</ul>'),
          (t.productsIcons = {
            combate: {
              name: 'combate_terciario',
              width: 14,
            },
            g1: {
              name: 'g1_primario',
              width: 18,
            },
            globo: {
              name: 'globocom_terciario',
              width: 16,
            },
            ge: {
              name: 'globoesporte_secundario',
              width: 19,
            },
            globonews: {
              name: 'globonews_terciario',
              width: 21,
            },
            ego: {
              name: 'ego_terciario',
              width: 18,
            },
            cartola: {
              name: 'cartola_terciario',
              width: 18,
            },
            globoplay: {
              name: 'globoplay',
              width: 32,
            },
            globosatplay: {
              name: 'globosatplay_terciario',
              width: 16,
            },
            gshow: {
              name: 'gshow_terciario',
              width: 16,
            },
            sportv: {
              name: 'sportv_terciario',
              width: 16,
            },
            techtudo: {
              name: 'techtudo_secundario',
              width: 12,
            },
          }),
          (t.createSearchBaseHtml = function (e) {
            return MustacheFN.render(this.searchTemplate, {
              formAction: e,
            });
          }),
          (t.createSearchPreSuggestHtml = function (e, r) {
            var n;
            return (
              (n = t.createSearchHistoryHtml(r)),
              MustacheFN.render(this.searchPreSuggestTemplate, {
                preSuggest: e,
                searchHistoryHtml: n,
                portalLabel: glb.cdnConfig.fnProduct.label,
              })
            );
          }),
          (t.createSearchHistoryHtml = function (e) {
            var r;
            return (
              !!e.length &&
              (function () {
                var n, s, i;
                for (i = [], n = 0, s = e.length; n < s; n++)
                  'featuredContent' === (r = e[n]).type
                    ? i.push(t.createSearchFeaturedContentHtml(r.data))
                    : 'suggest' === r.type
                    ? i.push(t.createSearchSuggestionHtml(r.data))
                    : i.push('');
                return i;
              })().join('\n')
            );
          }),
          (t.preProcessSuggestData = function (e) {
            var r, n, s, i;
            return (
              e.featured_content &&
                (e.featured_content = (function () {
                  var o, a, u, c;
                  for (
                    c = [], o = 0, a = (u = e.featured_content).length;
                    o < a;
                    o++
                  )
                    (n = u[o]),
                      (s = 'globo'),
                      n.publisher && (s = n.publisher.toLowerCase()),
                      n.product && (s = n.product.toLowerCase()),
                      t.productsIcons[s] || (s = 'globo'),
                      (i = t.productsIcons[s]),
                      (r = 'featured-content--' + s),
                      c.push(
                        $.extend(n, {
                          product_icon_width: i.width,
                          product_icon_name: i.name,
                          class_name: r,
                          term: n.title,
                        })
                      );
                  return c;
                })()),
              e
            );
          }),
          (t.createSearchSuggestHtml = function (e) {
            var r,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              (r = {
                showSearchProduct: !1,
                showSearchAllProducts: !1,
                portalLabel: glb.cdnConfig.fnProduct.label,
              }),
              (n = $.extend(r, n)),
              (e = t.preProcessSuggestData(e)),
              (e = $.extend(e, n)).query && e.query.length > 9
                ? (e.displayQuery = e.query.substring(0, 9) + '...')
                : (e.displayQuery = e.query),
              MustacheFN.render(this.searchSuggestTemplate, e)
            );
          }),
          (t.createSearchSuggestionHtml = function (e) {
            return (
              e.text ||
                (e = {
                  text: e,
                }),
              MustacheFN.render(this.searchSuggestSuggestionTemplate, e)
            );
          }),
          (t.createSearchFeaturedContentHtml = function (e) {
            return MustacheFN.render(
              this.searchSuggestFeaturedContentTemplate,
              e
            );
          }),
          e.exports && (e.exports = t);
      },
      8578: (e, t, r) => {
        function n(e) {
          return (
            (n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            n(e)
          );
        }
        function s(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, i(n.key), n);
          }
        }
        function i(e) {
          var t = (function (e, t) {
            if ('object' != n(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var s = r.call(e, 'string');
              if ('object' != n(s)) return s;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == n(t) ? t : String(t);
        }
        var o, a, u, c;
        (u = r(6883)),
          (c = r(160)),
          (a = r(6648)),
          (o = (function () {
            function e() {
              var t,
                r,
                n,
                s,
                i,
                o,
                a,
                u,
                c =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.refreshPortalDetails =
                  this.refreshPortalDetails.bind(this)),
                (this.renderSuggest = this.renderSuggest.bind(this)),
                (this.toggleItem = this.toggleItem.bind(this)),
                (this.handleKeyRightArrow =
                  this.handleKeyRightArrow.bind(this)),
                (this.handleKeyUpArrow = this.handleKeyUpArrow.bind(this)),
                (this.handleKeyDownArrow = this.handleKeyDownArrow.bind(this)),
                (this.handleKeyBlur = this.handleKeyBlur.bind(this)),
                (this.handleKeyEnter = this.handleKeyEnter.bind(this)),
                this.init(),
                (this.suggestDelay = null != (t = c.suggestDelay) ? t : 200),
                (this.queryMinimumLength =
                  null != (r = c.queryMinimumLength) ? r : 2),
                (this.suggestSize = null != (n = c.suggestSize) ? n : 3),
                (this.preSuggestSize = null != (s = c.preSuggestSize) ? s : 3),
                (this.featuredContentSize =
                  null != (i = c.featuredContentSize) ? i : 3),
                (this.historySize = null != (o = c.historySize) ? o : 3),
                (this.showSearchProduct =
                  null != (a = c.showSearchProduct) && a),
                (this.showSearchAllProducts =
                  null != (u = c.showSearchAllProducts) && u),
                (this.preSuggestKey = 'fn-pre-suggest'),
                (this.preSuggestExpire = 15),
                (this.searchAllUrl = 'http://www.globo.com/busca/'),
                $('html').addClass('has-search');
            }
            var t, r;
            return (
              (t = e),
              (r = [
                {
                  key: 'init',
                  value: function () {
                    return (
                      u(this.searchUrl()),
                      c(),
                      (this.searchItemsSelector =
                        'li.suggestion, li.featured-content, li.other-option'),
                      (this.currentFeaturedContentData = {}),
                      (this.lastExecutedQuery = ''),
                      (this.currentHint = ''),
                      (this.currentSuggestRequest = !1)
                    );
                  },
                },
                {
                  key: 'bindElements',
                  value: function (e, t, r, n) {
                    return (
                      (this.searchInput = e),
                      (this.searchHint = e.nextAll('.search-hint')),
                      (this.searchIsPreSuggest = e.nextAll(
                        '.regua-search-is-pre-suggest'
                      )),
                      (this.suggestContainer = t),
                      (this.searchForm = r),
                      this.formAction(),
                      this.bindSearchEvents(this.renderSuggest, n)
                    );
                  },
                },
                {
                  key: 'executePreSuggest',
                  value: function () {
                    return this.generatePreSuggestHtml(
                      this.renderSuggest,
                      this.suggestSize
                    );
                  },
                },
                {
                  key: 'refreshPortalDetails',
                  value: function () {
                    return (
                      (glb.currentSearchSuggestClient.portalName =
                        glb.cdnConfig.fnProduct.name),
                      this.executePreSuggest()
                    );
                  },
                },
                {
                  key: 'renderSuggest',
                  value: function (e, t) {
                    return (
                      this.suggestContainer.html(e),
                      this.setSuggestHint(t),
                      this.bindSuggestListEvents(this.suggestContainer)
                    );
                  },
                },
                {
                  key: 'setSuggestHint',
                  value: function (e) {
                    var t;
                    return (
                      (this.currentHint = ''),
                      (t = this.searchInput.val()),
                      e &&
                        e.suggestions &&
                        e.suggestions.length &&
                        0 === e.suggestions[0].text.indexOf(t) &&
                        (this.currentHint = e.suggestions[0].text),
                      this.searchHint.val(this.currentHint)
                    );
                  },
                },
                {
                  key: 'searchUrl',
                  value: function () {
                    return glb.cdnConfig.fnBuscaUrl &&
                      /^(http:|https:)?\/\/.+\/busca\/?$/.test(
                        glb.cdnConfig.fnBuscaUrl
                      )
                      ? glb.cdnConfig.fnBuscaUrl
                      : glb.cdnConfig.fnProduct.home &&
                        'prod' === glb.cdnConfig.fnEnv
                      ? glb.cdnConfig.fnProduct.home + 'busca/'
                      : '/busca/';
                  },
                },
                {
                  key: 'formAction',
                  value: function () {
                    return this.searchForm.attr('action', this.searchUrl);
                  },
                },
                {
                  key: 'generateSuggestHtml',
                  value: function (e, t) {
                    var r = this;
                    return (
                      this.currentSuggestRequest &&
                        this.currentSuggestRequest.abort(),
                      glb.$document.trigger('glb.busca.loadSuggest', e),
                      (this.currentSuggestRequest =
                        glb.currentSearchSuggestClient.loadSuggest(
                          e,
                          this.suggestSize,
                          this.featuredContentSize,
                          function (e) {
                            return (
                              r.storeSuggestData(e),
                              t(r.searchSuggestHtml(e), e)
                            );
                          }
                        ))
                    );
                  },
                },
                {
                  key: 'searchSuggestHtml',
                  value: function (e) {
                    return a.createSearchSuggestHtml(e, {
                      showSearchProduct: this.showSearchProduct,
                      showSearchAllProducts: this.showSearchAllProducts,
                      searchUrl: this.searchUrl,
                      searchAllUrl: this.searchAllUrl,
                    });
                  },
                },
                {
                  key: 'generatePreSuggestHtml',
                  value: function (e) {
                    var t,
                      r,
                      n = this;
                    return (
                      (r = glb.currentSearchSuggestHistory.getSearchHistory(
                        this.historySize
                      )),
                      (t = window.localStorageCache.load(this.preSuggestKey))
                        ? e(a.createSearchPreSuggestHtml(t, r))
                        : glb.currentSearchSuggestClient.loadPreSuggest(
                            this.preSuggestSize,
                            function (t) {
                              return (
                                (n.preSuggestMemory = t),
                                localStorageCache.save(
                                  n.preSuggestKey,
                                  t,
                                  n.preSuggestExpire
                                ),
                                e(a.createSearchPreSuggestHtml(t, r))
                              );
                            }
                          )
                    );
                  },
                },
                {
                  key: 'storeSuggestData',
                  value: function (e) {
                    var t, r, n, s, i;
                    for (
                      this.currentFeaturedContentData = {},
                        i = [],
                        r = 0,
                        n = (s = e.featured_content).length;
                      r < n;
                      r++
                    )
                      (t = s[r]),
                        i.push((this.currentFeaturedContentData[t.url] = t));
                    return i;
                  },
                },
                {
                  key: 'bindSuggestListEvents',
                  value: function (e) {
                    var t = this;
                    return $(this.searchItemsSelector, e)
                      .off('click')
                      .on('click', function (e) {
                        return t.toggleItem($(e.currentTarget)), !1;
                      });
                  },
                },
                {
                  key: 'submitSearchForm',
                  value: function (e, t) {
                    return (
                      this.searchIsPreSuggest.prop('disabled', !t),
                      e && this.searchInput.val(e),
                      this.searchForm.submit()
                    );
                  },
                },
                {
                  key: 'bindSearchEvents',
                  value: function (e, t) {
                    var r = this;
                    return (
                      this.searchInput.on('focus', function (e) {
                        return glb.$document.trigger('glb.busca.focused');
                      }),
                      this.searchInput.on('paste cut keyup', function (n) {
                        var s;
                        return (
                          (s = r.searchInput.val()),
                          t && t(s),
                          r.handleInputEventListener(s, e)
                        );
                      }),
                      this.searchInput.on('keydown', function (e) {
                        var t;
                        return (t = e.which), r.handleSpecialKey(t);
                      }),
                      this.searchForm.on('submit', function () {
                        var e;
                        return (
                          !(
                            (e = r.searchInput.val()).trim().length <
                            r.queryMinimumLength
                          ) &&
                          (r.searchInput.blur(),
                          glb.$document.trigger('glb.busca.searched', [e]))
                        );
                      })
                    );
                  },
                },
                {
                  key: 'handleInputEventListener',
                  value: function (e, t) {
                    var r = this;
                    if (e !== this.lastExecutedQuery)
                      return (
                        (this.lastExecutedQuery = e),
                        this.currentDelayInterval &&
                          clearInterval(this.currentDelayInterval),
                        e && e.trim().length >= this.queryMinimumLength
                          ? (this.currentDelayInterval = setTimeout(
                              function () {
                                return r.generateSuggestHtml(e, t);
                              },
                              this.suggestDelay
                            ))
                          : this.generatePreSuggestHtml(t)
                      );
                  },
                },
                {
                  key: 'toggleItem',
                  value: function (e) {
                    return e.hasClass('suggestion')
                      ? this.toggleSuggest(e)
                      : e.hasClass('featured-content')
                      ? this.toggleFeaturedContent(e)
                      : e.hasClass('other-option')
                      ? this.toggleOtherOption(e)
                      : void 0;
                  },
                },
                {
                  key: 'toggleSuggest',
                  value: function (e) {
                    var t, r;
                    return (
                      (t = e.parent('ul').hasClass('pre-suggest')),
                      (r = $('.suggestion__link', e).text()),
                      this.submitSearchForm(r, t)
                    );
                  },
                },
                {
                  key: 'toggleFeaturedContent',
                  value: function (e) {
                    var t;
                    return (
                      (t = $('.featured-content__link', e).attr('href')),
                      glb.$document.trigger('glb.busca.featureContent', [t]),
                      (window.location = t)
                    );
                  },
                },
                {
                  key: 'toggleOtherOption',
                  value: function (e) {
                    return (
                      e.hasClass('search-all-products') &&
                        this.searchForm.attr('action', this.searchAllUrl),
                      this.submitSearchForm()
                    );
                  },
                },
                {
                  key: 'handleSpecialKey',
                  value: function (e) {
                    var t;
                    if (
                      (t = {
                        9: {
                          keyName: 'tab',
                          handler: this.handleKeyBlur,
                        },
                        13: {
                          keyName: 'enter',
                          handler: this.handleKeyEnter,
                        },
                        27: {
                          keyName: 'esc',
                          handler: this.handleKeyBlur,
                        },
                        39: {
                          keyName: 'right',
                          handler: this.handleKeyRightArrow,
                        },
                        38: {
                          keyName: 'up',
                          handler: this.handleKeyUpArrow,
                        },
                        40: {
                          keyName: 'down',
                          handler: this.handleKeyDownArrow,
                        },
                      })[e]
                    )
                      return t[e].handler();
                  },
                },
                {
                  key: 'handleKeyRightArrow',
                  value: function () {
                    if (this.currentHint.length > 0)
                      return this.searchInput.val(this.currentHint), !1;
                  },
                },
                {
                  key: 'handleKeyUpArrow',
                  value: function () {
                    var e;
                    return (
                      (e = $('li.focused', this.suggestContainer)).length
                        ? (e.removeClass('focused'),
                          e
                            .prevAll(this.searchItemsSelector)
                            .first()
                            .addClass('focused'))
                        : $(this.searchItemsSelector, this.suggestContainer)
                            .last()
                            .addClass('focused'),
                      !1
                    );
                  },
                },
                {
                  key: 'handleKeyDownArrow',
                  value: function () {
                    var e;
                    return (
                      (e = $('li.focused', this.suggestContainer)).length
                        ? (e.removeClass('focused'),
                          e
                            .nextAll(this.searchItemsSelector)
                            .first()
                            .addClass('focused'))
                        : $(this.searchItemsSelector, this.suggestContainer)
                            .first()
                            .addClass('focused'),
                      !1
                    );
                  },
                },
                {
                  key: 'handleKeyBlur',
                  value: function () {
                    return this.searchInput.blur(), !1;
                  },
                },
                {
                  key: 'handleKeyEnter',
                  value: function () {
                    var e;
                    return (
                      (e = $('li.focused', this.suggestContainer)).length
                        ? this.toggleItem(e)
                        : this.submitSearchForm(),
                      !1
                    );
                  },
                },
              ]) && s(t.prototype, r),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })()),
          (window.glb = window.glb || {}),
          (window.glb.Search = o),
          (window.loadSearch = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (window.glb.currentSearch = new window.glb.Search(e));
          }),
          e.exports && (e.exports = window.loadSearch);
      },
      9900: (e, t, r) => {
        var n, s, i;
        (s = r(3530)),
          (i = r(2087)),
          (n = r(6648)),
          ((window.glb = window.glb || {}).SearchTemplates = n),
          (window.glb.initSearchWeb = function () {
            if (!window.isTouchable || $(window).width() >= 960) return i();
          }),
          s(window.glb.initSearchWeb);
      },
      3530: e => {
        var t;
        (t = function (e) {
          window.glb.fnCommonReady
            ? e()
            : document.addEventListener('glb.fn.commonReady', e, !1);
        }),
          e.exports && (e.exports = t);
      },
    },
    t = {};
  function r(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var i = (t[n] = {
      exports: {},
    });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return (
      r.d(t, {
        a: t,
      }),
      t
    );
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    r(9900);
})();
