(self.webpackChunkweek9 = self.webpackChunkweek9 || []).push([
  [179],
  {
    8255: (X) => {
      function U(b) {
        return Promise.resolve().then(() => {
          var E = new Error("Cannot find module '" + b + "'");
          throw ((E.code = "MODULE_NOT_FOUND"), E);
        });
      }
      (U.keys = () => []), (U.resolve = U), (U.id = 8255), (X.exports = U);
    },
    7238: (X, U, b) => {
      "use strict";
      b.d(U, {
        l3: () => Y,
        _j: () => E,
        LC: () => v,
        ZN: () => me,
        jt: () => B,
        pV: () => te,
        F4: () => F,
        IO: () => ae,
        vP: () => L,
        SB: () => N,
        oB: () => R,
        eR: () => W,
        X$: () => Q,
        ZE: () => we,
        k1: () => Le,
      });
      class E {}
      class v {}
      const Y = "*";
      function Q(Ne, Ee) {
        return { type: 7, name: Ne, definitions: Ee, options: {} };
      }
      function B(Ne, Ee = null) {
        return { type: 4, styles: Ee, timings: Ne };
      }
      function L(Ne, Ee = null) {
        return { type: 2, steps: Ne, options: Ee };
      }
      function R(Ne) {
        return { type: 6, styles: Ne, offset: null };
      }
      function N(Ne, Ee, et) {
        return { type: 0, name: Ne, styles: Ee, options: et };
      }
      function F(Ne) {
        return { type: 5, steps: Ne };
      }
      function W(Ne, Ee, et = null) {
        return { type: 1, expr: Ne, animation: Ee, options: et };
      }
      function te(Ne = null) {
        return { type: 9, options: Ne };
      }
      function ae(Ne, Ee, et = null) {
        return { type: 11, selector: Ne, animation: Ee, options: et };
      }
      function Re(Ne) {
        Promise.resolve(null).then(Ne);
      }
      class me {
        constructor(Ee = 0, et = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = Ee + et);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((Ee) => Ee()),
            (this._onDoneFns = []));
        }
        onStart(Ee) {
          this._onStartFns.push(Ee);
        }
        onDone(Ee) {
          this._onDoneFns.push(Ee);
        }
        onDestroy(Ee) {
          this._onDestroyFns.push(Ee);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Re(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((Ee) => Ee()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((Ee) => Ee()),
            (this._onDestroyFns = []));
        }
        reset() {
          this._started = !1;
        }
        setPosition(Ee) {
          this._position = this.totalTime ? Ee * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(Ee) {
          const et = "start" == Ee ? this._onStartFns : this._onDoneFns;
          et.forEach((Ve) => Ve()), (et.length = 0);
        }
      }
      class we {
        constructor(Ee) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = Ee);
          let et = 0,
            Ve = 0,
            on = 0;
          const bn = this.players.length;
          0 == bn
            ? Re(() => this._onFinish())
            : this.players.forEach((Nt) => {
                Nt.onDone(() => {
                  ++et == bn && this._onFinish();
                }),
                  Nt.onDestroy(() => {
                    ++Ve == bn && this._onDestroy();
                  }),
                  Nt.onStart(() => {
                    ++on == bn && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (Nt, at) => Math.max(Nt, at.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((Ee) => Ee()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((Ee) => Ee.init());
        }
        onStart(Ee) {
          this._onStartFns.push(Ee);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((Ee) => Ee()),
            (this._onStartFns = []));
        }
        onDone(Ee) {
          this._onDoneFns.push(Ee);
        }
        onDestroy(Ee) {
          this._onDestroyFns.push(Ee);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((Ee) => Ee.play());
        }
        pause() {
          this.players.forEach((Ee) => Ee.pause());
        }
        restart() {
          this.players.forEach((Ee) => Ee.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((Ee) => Ee.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((Ee) => Ee.destroy()),
            this._onDestroyFns.forEach((Ee) => Ee()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((Ee) => Ee.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(Ee) {
          const et = Ee * this.totalTime;
          this.players.forEach((Ve) => {
            const on = Ve.totalTime ? Math.min(1, et / Ve.totalTime) : 1;
            Ve.setPosition(on);
          });
        }
        getPosition() {
          const Ee = this.players.reduce(
            (et, Ve) => (null === et || Ve.totalTime > et.totalTime ? Ve : et),
            null
          );
          return null != Ee ? Ee.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((Ee) => {
            Ee.beforeDestroy && Ee.beforeDestroy();
          });
        }
        triggerCallback(Ee) {
          const et = "start" == Ee ? this._onStartFns : this._onDoneFns;
          et.forEach((Ve) => Ve()), (et.length = 0);
        }
      }
      const Le = "!";
    },
    8583: (X, U, b) => {
      "use strict";
      b.d(U, {
        mr: () => we,
        Ov: () => Ri,
        ez: () => Br,
        K0: () => L,
        JJ: () => Un,
        Do: () => Ne,
        V_: () => F,
        Ye: () => Ee,
        S$: () => Re,
        mk: () => Pe,
        sg: () => oe,
        O5: () => Te,
        PC: () => En,
        RF: () => gt,
        n9: () => bt,
        ED: () => At,
        b0: () => Le,
        lw: () => R,
        EM: () => Zr,
        JF: () => qi,
        NF: () => _i,
        w_: () => P,
        bD: () => qr,
        q: () => Y,
        Mx: () => he,
        HT: () => B,
      });
      var E = b(7716);
      let v = null;
      function Y() {
        return v;
      }
      function B(m) {
        v || (v = m);
      }
      class P {}
      const L = new E.OlP("DocumentToken");
      let R = (() => {
        class m {
          historyGo(y) {
            throw new Error("Not implemented");
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)();
          }),
          (m.??prov = (0, E.Yz7)({
            factory: N,
            token: m,
            providedIn: "platform",
          })),
          m
        );
      })();
      function N() {
        return (0, E.LFG)(W);
      }
      const F = new E.OlP("Location Initialized");
      let W = (() => {
        class m extends R {
          constructor(y) {
            super(), (this._doc = y), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Y().getBaseHref(this._doc);
          }
          onPopState(y) {
            const M = Y().getGlobalEventTarget(this._doc, "window");
            return (
              M.addEventListener("popstate", y, !1),
              () => M.removeEventListener("popstate", y)
            );
          }
          onHashChange(y) {
            const M = Y().getGlobalEventTarget(this._doc, "window");
            return (
              M.addEventListener("hashchange", y, !1),
              () => M.removeEventListener("hashchange", y)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(y) {
            this.location.pathname = y;
          }
          pushState(y, M, K) {
            V() ? this._history.pushState(y, M, K) : (this.location.hash = K);
          }
          replaceState(y, M, K) {
            V()
              ? this._history.replaceState(y, M, K)
              : (this.location.hash = K);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(y = 0) {
            this._history.go(y);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)(E.LFG(L));
          }),
          (m.??prov = (0, E.Yz7)({
            factory: te,
            token: m,
            providedIn: "platform",
          })),
          m
        );
      })();
      function V() {
        return !!window.history.pushState;
      }
      function te() {
        return new W((0, E.LFG)(L));
      }
      function De(m, S) {
        if (0 == m.length) return S;
        if (0 == S.length) return m;
        let y = 0;
        return (
          m.endsWith("/") && y++,
          S.startsWith("/") && y++,
          2 == y ? m + S.substring(1) : 1 == y ? m + S : m + "/" + S
        );
      }
      function ae(m) {
        const S = m.match(/#|\?|$/),
          y = (S && S.index) || m.length;
        return m.slice(0, y - ("/" === m[y - 1] ? 1 : 0)) + m.slice(y);
      }
      function ge(m) {
        return m && "?" !== m[0] ? "?" + m : m;
      }
      let Re = (() => {
        class m {
          historyGo(y) {
            throw new Error("Not implemented");
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)();
          }),
          (m.??prov = (0, E.Yz7)({ factory: me, token: m, providedIn: "root" })),
          m
        );
      })();
      function me(m) {
        const S = (0, E.LFG)(L).location;
        return new Le((0, E.LFG)(R), (S && S.origin) || "");
      }
      const we = new E.OlP("appBaseHref");
      let Le = (() => {
          class m extends Re {
            constructor(y, M) {
              if (
                (super(),
                (this._platformLocation = y),
                (this._removeListenerFns = []),
                null == M && (M = this._platformLocation.getBaseHrefFromDOM()),
                null == M)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = M;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(y) {
              return De(this._baseHref, y);
            }
            path(y = !1) {
              const M =
                  this._platformLocation.pathname +
                  ge(this._platformLocation.search),
                K = this._platformLocation.hash;
              return K && y ? `${M}${K}` : M;
            }
            pushState(y, M, K, ce) {
              const ye = this.prepareExternalUrl(K + ge(ce));
              this._platformLocation.pushState(y, M, ye);
            }
            replaceState(y, M, K, ce) {
              const ye = this.prepareExternalUrl(K + ge(ce));
              this._platformLocation.replaceState(y, M, ye);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(y = 0) {
              var M, K;
              null === (K = (M = this._platformLocation).historyGo) ||
                void 0 === K ||
                K.call(M, y);
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.LFG(R), E.LFG(we, 8));
            }),
            (m.??prov = E.Yz7({ token: m, factory: m.??fac })),
            m
          );
        })(),
        Ne = (() => {
          class m extends Re {
            constructor(y, M) {
              super(),
                (this._platformLocation = y),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != M && (this._baseHref = M);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(y = !1) {
              let M = this._platformLocation.hash;
              return null == M && (M = "#"), M.length > 0 ? M.substring(1) : M;
            }
            prepareExternalUrl(y) {
              const M = De(this._baseHref, y);
              return M.length > 0 ? "#" + M : M;
            }
            pushState(y, M, K, ce) {
              let ye = this.prepareExternalUrl(K + ge(ce));
              0 == ye.length && (ye = this._platformLocation.pathname),
                this._platformLocation.pushState(y, M, ye);
            }
            replaceState(y, M, K, ce) {
              let ye = this.prepareExternalUrl(K + ge(ce));
              0 == ye.length && (ye = this._platformLocation.pathname),
                this._platformLocation.replaceState(y, M, ye);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(y = 0) {
              var M, K;
              null === (K = (M = this._platformLocation).historyGo) ||
                void 0 === K ||
                K.call(M, y);
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.LFG(R), E.LFG(we, 8));
            }),
            (m.??prov = E.Yz7({ token: m, factory: m.??fac })),
            m
          );
        })(),
        Ee = (() => {
          class m {
            constructor(y, M) {
              (this._subject = new E.vpe()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = y);
              const K = this._platformStrategy.getBaseHref();
              (this._platformLocation = M),
                (this._baseHref = ae(on(K))),
                this._platformStrategy.onPopState((ce) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: ce.state,
                    type: ce.type,
                  });
                });
            }
            path(y = !1) {
              return this.normalize(this._platformStrategy.path(y));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(y, M = "") {
              return this.path() == this.normalize(y + ge(M));
            }
            normalize(y) {
              return m.stripTrailingSlash(
                (function (m, S) {
                  return m && S.startsWith(m) ? S.substring(m.length) : S;
                })(this._baseHref, on(y))
              );
            }
            prepareExternalUrl(y) {
              return (
                y && "/" !== y[0] && (y = "/" + y),
                this._platformStrategy.prepareExternalUrl(y)
              );
            }
            go(y, M = "", K = null) {
              this._platformStrategy.pushState(K, "", y, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + ge(M)),
                  K
                );
            }
            replaceState(y, M = "", K = null) {
              this._platformStrategy.replaceState(K, "", y, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + ge(M)),
                  K
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(y = 0) {
              var M, K;
              null === (K = (M = this._platformStrategy).historyGo) ||
                void 0 === K ||
                K.call(M, y);
            }
            onUrlChange(y) {
              this._urlChangeListeners.push(y),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((M) => {
                    this._notifyUrlChangeListeners(M.url, M.state);
                  }));
            }
            _notifyUrlChangeListeners(y = "", M) {
              this._urlChangeListeners.forEach((K) => K(y, M));
            }
            subscribe(y, M, K) {
              return this._subject.subscribe({
                next: y,
                error: M,
                complete: K,
              });
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.LFG(Re), E.LFG(R));
            }),
            (m.normalizeQueryParams = ge),
            (m.joinWithSlash = De),
            (m.stripTrailingSlash = ae),
            (m.??prov = (0, E.Yz7)({
              factory: et,
              token: m,
              providedIn: "root",
            })),
            m
          );
        })();
      function et() {
        return new Ee((0, E.LFG)(Re), (0, E.LFG)(R));
      }
      function on(m) {
        return m.replace(/\/index.html$/, "");
      }
      var Nt = (() => (
          ((Nt = Nt || {})[(Nt.Decimal = 0)] = "Decimal"),
          (Nt[(Nt.Percent = 1)] = "Percent"),
          (Nt[(Nt.Currency = 2)] = "Currency"),
          (Nt[(Nt.Scientific = 3)] = "Scientific"),
          Nt
        ))(),
        at = (() => (
          ((at = at || {})[(at.Zero = 0)] = "Zero"),
          (at[(at.One = 1)] = "One"),
          (at[(at.Two = 2)] = "Two"),
          (at[(at.Few = 3)] = "Few"),
          (at[(at.Many = 4)] = "Many"),
          (at[(at.Other = 5)] = "Other"),
          at
        ))(),
        Me = (() => (
          ((Me = Me || {})[(Me.Decimal = 0)] = "Decimal"),
          (Me[(Me.Group = 1)] = "Group"),
          (Me[(Me.List = 2)] = "List"),
          (Me[(Me.PercentSign = 3)] = "PercentSign"),
          (Me[(Me.PlusSign = 4)] = "PlusSign"),
          (Me[(Me.MinusSign = 5)] = "MinusSign"),
          (Me[(Me.Exponential = 6)] = "Exponential"),
          (Me[(Me.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
          (Me[(Me.PerMille = 8)] = "PerMille"),
          (Me[(Me.Infinity = 9)] = "Infinity"),
          (Me[(Me.NaN = 10)] = "NaN"),
          (Me[(Me.TimeSeparator = 11)] = "TimeSeparator"),
          (Me[(Me.CurrencyDecimal = 12)] = "CurrencyDecimal"),
          (Me[(Me.CurrencyGroup = 13)] = "CurrencyGroup"),
          Me
        ))();
      function kt(m, S) {
        const y = (0, E.cg1)(m),
          M = y[E.wAp.NumberSymbols][S];
        if (void 0 === M) {
          if (S === Me.CurrencyDecimal)
            return y[E.wAp.NumberSymbols][Me.Decimal];
          if (S === Me.CurrencyGroup) return y[E.wAp.NumberSymbols][Me.Group];
        }
        return M;
      }
      const rr = E.kL8,
        pr = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function We(m) {
        const S = parseInt(m);
        if (isNaN(S))
          throw new Error("Invalid integer literal when parsing " + m);
        return S;
      }
      class ee {}
      let j = (() => {
        class m extends ee {
          constructor(y) {
            super(), (this.locale = y);
          }
          getPluralCategory(y, M) {
            switch (rr(M || this.locale)(y)) {
              case at.Zero:
                return "zero";
              case at.One:
                return "one";
              case at.Two:
                return "two";
              case at.Few:
                return "few";
              case at.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)(E.LFG(E.soG));
          }),
          (m.??prov = E.Yz7({ token: m, factory: m.??fac })),
          m
        );
      })();
      function he(m, S) {
        S = encodeURIComponent(S);
        for (const y of m.split(";")) {
          const M = y.indexOf("="),
            [K, ce] = -1 == M ? [y, ""] : [y.slice(0, M), y.slice(M + 1)];
          if (K.trim() === S) return decodeURIComponent(ce);
        }
        return null;
      }
      let Pe = (() => {
        class m {
          constructor(y, M, K, ce) {
            (this._iterableDiffers = y),
              (this._keyValueDiffers = M),
              (this._ngEl = K),
              (this._renderer = ce),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(y) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof y ? y.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(y) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof y ? y.split(/\s+/) : y),
              this._rawClass &&
                ((0, E.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const y = this._iterableDiffer.diff(this._rawClass);
              y && this._applyIterableChanges(y);
            } else if (this._keyValueDiffer) {
              const y = this._keyValueDiffer.diff(this._rawClass);
              y && this._applyKeyValueChanges(y);
            }
          }
          _applyKeyValueChanges(y) {
            y.forEachAddedItem((M) => this._toggleClass(M.key, M.currentValue)),
              y.forEachChangedItem((M) =>
                this._toggleClass(M.key, M.currentValue)
              ),
              y.forEachRemovedItem((M) => {
                M.previousValue && this._toggleClass(M.key, !1);
              });
          }
          _applyIterableChanges(y) {
            y.forEachAddedItem((M) => {
              if ("string" != typeof M.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  E.AaK)(M.item)}`
                );
              this._toggleClass(M.item, !0);
            }),
              y.forEachRemovedItem((M) => this._toggleClass(M.item, !1));
          }
          _applyClasses(y) {
            y &&
              (Array.isArray(y) || y instanceof Set
                ? y.forEach((M) => this._toggleClass(M, !0))
                : Object.keys(y).forEach((M) => this._toggleClass(M, !!y[M])));
          }
          _removeClasses(y) {
            y &&
              (Array.isArray(y) || y instanceof Set
                ? y.forEach((M) => this._toggleClass(M, !1))
                : Object.keys(y).forEach((M) => this._toggleClass(M, !1)));
          }
          _toggleClass(y, M) {
            (y = y.trim()) &&
              y.split(/\s+/g).forEach((K) => {
                M
                  ? this._renderer.addClass(this._ngEl.nativeElement, K)
                  : this._renderer.removeClass(this._ngEl.nativeElement, K);
              });
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)(
              E.Y36(E.ZZ4),
              E.Y36(E.aQg),
              E.Y36(E.SBq),
              E.Y36(E.Qsj)
            );
          }),
          (m.??dir = E.lG2({
            type: m,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          m
        );
      })();
      class k {
        constructor(S, y, M, K) {
          (this.$implicit = S),
            (this.ngForOf = y),
            (this.index = M),
            (this.count = K);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let oe = (() => {
        class m {
          constructor(y, M, K) {
            (this._viewContainer = y),
              (this._template = M),
              (this._differs = K),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(y) {
            (this._ngForOf = y), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(y) {
            this._trackByFn = y;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(y) {
            y && (this._template = y);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const y = this._ngForOf;
              if (!this._differ && y)
                try {
                  this._differ = this._differs
                    .find(y)
                    .create(this.ngForTrackBy);
                } catch (M) {
                  throw new Error(
                    `Cannot find a differ supporting object '${y}' of type '${(function (
                      m
                    ) {
                      return m.name || typeof m;
                    })(
                      y
                    )}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            if (this._differ) {
              const y = this._differ.diff(this._ngForOf);
              y && this._applyChanges(y);
            }
          }
          _applyChanges(y) {
            const M = [];
            y.forEachOperation((K, ce, ye) => {
              if (null == K.previousIndex) {
                const ke = this._viewContainer.createEmbeddedView(
                    this._template,
                    new k(null, this._ngForOf, -1, -1),
                    null === ye ? void 0 : ye
                  ),
                  rt = new re(K, ke);
                M.push(rt);
              } else if (null == ye)
                this._viewContainer.remove(null === ce ? void 0 : ce);
              else if (null !== ce) {
                const ke = this._viewContainer.get(ce);
                this._viewContainer.move(ke, ye);
                const rt = new re(K, ke);
                M.push(rt);
              }
            });
            for (let K = 0; K < M.length; K++)
              this._perViewChange(M[K].view, M[K].record);
            for (let K = 0, ce = this._viewContainer.length; K < ce; K++) {
              const ye = this._viewContainer.get(K);
              (ye.context.index = K),
                (ye.context.count = ce),
                (ye.context.ngForOf = this._ngForOf);
            }
            y.forEachIdentityChange((K) => {
              this._viewContainer.get(K.currentIndex).context.$implicit =
                K.item;
            });
          }
          _perViewChange(y, M) {
            y.context.$implicit = M.item;
          }
          static ngTemplateContextGuard(y, M) {
            return !0;
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)(E.Y36(E.s_b), E.Y36(E.Rgc), E.Y36(E.ZZ4));
          }),
          (m.??dir = E.lG2({
            type: m,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          m
        );
      })();
      class re {
        constructor(S, y) {
          (this.record = S), (this.view = y);
        }
      }
      let Te = (() => {
        class m {
          constructor(y, M) {
            (this._viewContainer = y),
              (this._context = new Ie()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = M);
          }
          set ngIf(y) {
            (this._context.$implicit = this._context.ngIf = y),
              this._updateView();
          }
          set ngIfThen(y) {
            Ze("ngIfThen", y),
              (this._thenTemplateRef = y),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(y) {
            Ze("ngIfElse", y),
              (this._elseTemplateRef = y),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(y, M) {
            return !0;
          }
        }
        return (
          (m.??fac = function (y) {
            return new (y || m)(E.Y36(E.s_b), E.Y36(E.Rgc));
          }),
          (m.??dir = E.lG2({
            type: m,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          m
        );
      })();
      class Ie {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Ze(m, S) {
        if (S && !S.createEmbeddedView)
          throw new Error(
            `${m} must be a TemplateRef, but received '${(0, E.AaK)(S)}'.`
          );
      }
      class Bt {
        constructor(S, y) {
          (this._viewContainerRef = S),
            (this._templateRef = y),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(S) {
          S && !this._created
            ? this.create()
            : !S && this._created && this.destroy();
        }
      }
      let gt = (() => {
          class m {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(y) {
              (this._ngSwitch = y),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(y) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(y);
            }
            _matchCase(y) {
              const M = y == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || M),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                M
              );
            }
            _updateDefaultCases(y) {
              if (this._defaultViews && y !== this._defaultUsed) {
                this._defaultUsed = y;
                for (let M = 0; M < this._defaultViews.length; M++)
                  this._defaultViews[M].enforceState(y);
              }
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)();
            }),
            (m.??dir = E.lG2({
              type: m,
              selectors: [["", "ngSwitch", ""]],
              inputs: { ngSwitch: "ngSwitch" },
            })),
            m
          );
        })(),
        bt = (() => {
          class m {
            constructor(y, M, K) {
              (this.ngSwitch = K), K._addCase(), (this._view = new Bt(y, M));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.Y36(E.s_b), E.Y36(E.Rgc), E.Y36(gt, 9));
            }),
            (m.??dir = E.lG2({
              type: m,
              selectors: [["", "ngSwitchCase", ""]],
              inputs: { ngSwitchCase: "ngSwitchCase" },
            })),
            m
          );
        })(),
        At = (() => {
          class m {
            constructor(y, M, K) {
              K._addDefault(new Bt(y, M));
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.Y36(E.s_b), E.Y36(E.Rgc), E.Y36(gt, 9));
            }),
            (m.??dir = E.lG2({
              type: m,
              selectors: [["", "ngSwitchDefault", ""]],
            })),
            m
          );
        })(),
        En = (() => {
          class m {
            constructor(y, M, K) {
              (this._ngEl = y),
                (this._differs = M),
                (this._renderer = K),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(y) {
              (this._ngStyle = y),
                !this._differ &&
                  y &&
                  (this._differ = this._differs.find(y).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const y = this._differ.diff(this._ngStyle);
                y && this._applyChanges(y);
              }
            }
            _setStyle(y, M) {
              const [K, ce] = y.split(".");
              null != (M = null != M && ce ? `${M}${ce}` : M)
                ? this._renderer.setStyle(this._ngEl.nativeElement, K, M)
                : this._renderer.removeStyle(this._ngEl.nativeElement, K);
            }
            _applyChanges(y) {
              y.forEachRemovedItem((M) => this._setStyle(M.key, null)),
                y.forEachAddedItem((M) =>
                  this._setStyle(M.key, M.currentValue)
                ),
                y.forEachChangedItem((M) =>
                  this._setStyle(M.key, M.currentValue)
                );
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.Y36(E.SBq), E.Y36(E.aQg), E.Y36(E.Qsj));
            }),
            (m.??dir = E.lG2({
              type: m,
              selectors: [["", "ngStyle", ""]],
              inputs: { ngStyle: "ngStyle" },
            })),
            m
          );
        })();
      function qn(m, S) {
        return Error(`InvalidPipeArgument: '${S}' for pipe '${(0, E.AaK)(m)}'`);
      }
      class ci {
        createSubscription(S, y) {
          return S.subscribe({
            next: y,
            error: (M) => {
              throw M;
            },
          });
        }
        dispose(S) {
          S.unsubscribe();
        }
        onDestroy(S) {
          S.unsubscribe();
        }
      }
      class Qs {
        createSubscription(S, y) {
          return S.then(y, (M) => {
            throw M;
          });
        }
        dispose(S) {}
        onDestroy(S) {}
      }
      const Mi = new Qs(),
        qs = new ci();
      let Ri = (() => {
          class m {
            constructor(y) {
              (this._ref = y),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            ngOnDestroy() {
              this._subscription && this._dispose();
            }
            transform(y) {
              return this._obj
                ? y !== this._obj
                  ? (this._dispose(), this.transform(y))
                  : this._latestValue
                : (y && this._subscribe(y), this._latestValue);
            }
            _subscribe(y) {
              (this._obj = y),
                (this._strategy = this._selectStrategy(y)),
                (this._subscription = this._strategy.createSubscription(
                  y,
                  (M) => this._updateLatestValue(y, M)
                ));
            }
            _selectStrategy(y) {
              if ((0, E.QGY)(y)) return Mi;
              if ((0, E.F4k)(y)) return qs;
              throw qn(m, y);
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(y, M) {
              y === this._obj &&
                ((this._latestValue = M), this._ref.markForCheck());
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.Y36(E.sBO, 16));
            }),
            (m.??pipe = E.Yjl({ name: "async", type: m, pure: !1 })),
            m
          );
        })(),
        Un = (() => {
          class m {
            constructor(y) {
              this._locale = y;
            }
            transform(y, M, K) {
              if (
                !(function (m) {
                  return !(null == m || "" === m || m != m);
                })(y)
              )
                return null;
              K = K || this._locale;
              try {
                return (function (m, S, y) {
                  return (function (m, S, y, M, K, ce, ye = !1) {
                    let ke = "",
                      rt = !1;
                    if (isFinite(m)) {
                      let jt = (function (m) {
                        let M,
                          K,
                          ce,
                          ye,
                          ke,
                          S = Math.abs(m) + "",
                          y = 0;
                        for (
                          (K = S.indexOf(".")) > -1 && (S = S.replace(".", "")),
                            (ce = S.search(/e/i)) > 0
                              ? (K < 0 && (K = ce),
                                (K += +S.slice(ce + 1)),
                                (S = S.substring(0, ce)))
                              : K < 0 && (K = S.length),
                            ce = 0;
                          "0" === S.charAt(ce);
                          ce++
                        );
                        if (ce === (ke = S.length)) (M = [0]), (K = 1);
                        else {
                          for (ke--; "0" === S.charAt(ke); ) ke--;
                          for (K -= ce, M = [], ye = 0; ce <= ke; ce++, ye++)
                            M[ye] = Number(S.charAt(ce));
                        }
                        return (
                          K > 22 &&
                            ((M = M.splice(0, 21)), (y = K - 1), (K = 1)),
                          { digits: M, exponent: y, integerLen: K }
                        );
                      })(m);
                      ye &&
                        (jt = (function (m) {
                          if (0 === m.digits[0]) return m;
                          const S = m.digits.length - m.integerLen;
                          return (
                            m.exponent
                              ? (m.exponent += 2)
                              : (0 === S
                                  ? m.digits.push(0, 0)
                                  : 1 === S && m.digits.push(0),
                                (m.integerLen += 2)),
                            m
                          );
                        })(jt));
                      let xt = S.minInt,
                        ut = S.minFrac,
                        wt = S.maxFrac;
                      if (ce) {
                        const Jn = ce.match(pr);
                        if (null === Jn)
                          throw new Error(`${ce} is not a valid digit info`);
                        const ze = Jn[1],
                          Jr = Jn[3],
                          Ei = Jn[5];
                        null != ze && (xt = We(ze)),
                          null != Jr && (ut = We(Jr)),
                          null != Ei
                            ? (wt = We(Ei))
                            : null != Jr && ut > wt && (wt = ut);
                      }
                      !(function (m, S, y) {
                        if (S > y)
                          throw new Error(
                            `The minimum number of digits after fraction (${S}) is higher than the maximum (${y}).`
                          );
                        let M = m.digits,
                          K = M.length - m.integerLen;
                        const ce = Math.min(Math.max(S, K), y);
                        let ye = ce + m.integerLen,
                          ke = M[ye];
                        if (ye > 0) {
                          M.splice(Math.max(m.integerLen, ye));
                          for (let ut = ye; ut < M.length; ut++) M[ut] = 0;
                        } else {
                          (K = Math.max(0, K)),
                            (m.integerLen = 1),
                            (M.length = Math.max(1, (ye = ce + 1))),
                            (M[0] = 0);
                          for (let ut = 1; ut < ye; ut++) M[ut] = 0;
                        }
                        if (ke >= 5)
                          if (ye - 1 < 0) {
                            for (let ut = 0; ut > ye; ut--)
                              M.unshift(0), m.integerLen++;
                            M.unshift(1), m.integerLen++;
                          } else M[ye - 1]++;
                        for (; K < Math.max(0, ce); K++) M.push(0);
                        let rt = 0 !== ce;
                        const jt = S + m.integerLen,
                          xt = M.reduceRight(function (ut, wt, Ut, cn) {
                            return (
                              (cn[Ut] = (wt += ut) < 10 ? wt : wt - 10),
                              rt &&
                                (0 === cn[Ut] && Ut >= jt
                                  ? cn.pop()
                                  : (rt = !1)),
                              wt >= 10 ? 1 : 0
                            );
                          }, 0);
                        xt && (M.unshift(xt), m.integerLen++);
                      })(jt, ut, wt);
                      let Ut = jt.digits,
                        cn = jt.integerLen;
                      const jr = jt.exponent;
                      let An = [];
                      for (rt = Ut.every((Jn) => !Jn); cn < xt; cn++)
                        Ut.unshift(0);
                      for (; cn < 0; cn++) Ut.unshift(0);
                      cn > 0
                        ? (An = Ut.splice(cn, Ut.length))
                        : ((An = Ut), (Ut = [0]));
                      const Ur = [];
                      for (
                        Ut.length >= S.lgSize &&
                        Ur.unshift(Ut.splice(-S.lgSize, Ut.length).join(""));
                        Ut.length > S.gSize;

                      )
                        Ur.unshift(Ut.splice(-S.gSize, Ut.length).join(""));
                      Ut.length && Ur.unshift(Ut.join("")),
                        (ke = Ur.join(kt(y, M))),
                        An.length && (ke += kt(y, K) + An.join("")),
                        jr && (ke += kt(y, Me.Exponential) + "+" + jr);
                    } else ke = kt(y, Me.Infinity);
                    return (
                      (ke =
                        m < 0 && !rt
                          ? S.negPre + ke + S.negSuf
                          : S.posPre + ke + S.posSuf),
                      ke
                    );
                  })(
                    m,
                    (function (m, S = "-") {
                      const y = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: "",
                          posSuf: "",
                          negPre: "",
                          negSuf: "",
                          gSize: 0,
                          lgSize: 0,
                        },
                        M = m.split(";"),
                        K = M[0],
                        ce = M[1],
                        ye =
                          -1 !== K.indexOf(".")
                            ? K.split(".")
                            : [
                                K.substring(0, K.lastIndexOf("0") + 1),
                                K.substring(K.lastIndexOf("0") + 1),
                              ],
                        ke = ye[0],
                        rt = ye[1] || "";
                      y.posPre = ke.substr(0, ke.indexOf("#"));
                      for (let xt = 0; xt < rt.length; xt++) {
                        const ut = rt.charAt(xt);
                        "0" === ut
                          ? (y.minFrac = y.maxFrac = xt + 1)
                          : "#" === ut
                          ? (y.maxFrac = xt + 1)
                          : (y.posSuf += ut);
                      }
                      const jt = ke.split(",");
                      if (
                        ((y.gSize = jt[1] ? jt[1].length : 0),
                        (y.lgSize =
                          jt[2] || jt[1] ? (jt[2] || jt[1]).length : 0),
                        ce)
                      ) {
                        const xt = K.length - y.posPre.length - y.posSuf.length,
                          ut = ce.indexOf("#");
                        (y.negPre = ce.substr(0, ut).replace(/'/g, "")),
                          (y.negSuf = ce.substr(ut + xt).replace(/'/g, ""));
                      } else (y.negPre = S + y.posPre), (y.negSuf = y.posSuf);
                      return y;
                    })(
                      (function (m, S) {
                        return (0, E.cg1)(m)[E.wAp.NumberFormats][S];
                      })(S, Nt.Decimal),
                      kt(S, Me.MinusSign)
                    ),
                    S,
                    Me.Group,
                    Me.Decimal,
                    y
                  );
                })(
                  (function (m) {
                    if (
                      "string" == typeof m &&
                      !isNaN(Number(m) - parseFloat(m))
                    )
                      return Number(m);
                    if ("number" != typeof m)
                      throw new Error(`${m} is not a number`);
                    return m;
                  })(y),
                  K,
                  M
                );
              } catch (ce) {
                throw qn(m, ce.message);
              }
            }
          }
          return (
            (m.??fac = function (y) {
              return new (y || m)(E.Y36(E.soG, 16));
            }),
            (m.??pipe = E.Yjl({ name: "number", type: m, pure: !0 })),
            m
          );
        })();
      let Br = (() => {
        class m {}
        return (
          (m.??fac = function (y) {
            return new (y || m)();
          }),
          (m.??mod = E.oAB({ type: m })),
          (m.??inj = E.cJS({ providers: [{ provide: ee, useClass: j }] })),
          m
        );
      })();
      const qr = "browser";
      function _i(m) {
        return m === qr;
      }
      let Zr = (() => {
        class m {}
        return (
          (m.??prov = (0, E.Yz7)({
            token: m,
            providedIn: "root",
            factory: () => new ps((0, E.LFG)(L), window),
          })),
          m
        );
      })();
      class ps {
        constructor(S, y) {
          (this.document = S), (this.window = y), (this.offset = () => [0, 0]);
        }
        setOffset(S) {
          this.offset = Array.isArray(S) ? () => S : S;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(S) {
          this.supportsScrolling() && this.window.scrollTo(S[0], S[1]);
        }
        scrollToAnchor(S) {
          if (!this.supportsScrolling()) return;
          const y = (function (m, S) {
            const y = m.getElementById(S) || m.getElementsByName(S)[0];
            if (y) return y;
            if (
              "function" == typeof m.createTreeWalker &&
              m.body &&
              (m.body.createShadowRoot || m.body.attachShadow)
            ) {
              const M = m.createTreeWalker(m.body, NodeFilter.SHOW_ELEMENT);
              let K = M.currentNode;
              for (; K; ) {
                const ce = K.shadowRoot;
                if (ce) {
                  const ye =
                    ce.getElementById(S) || ce.querySelector(`[name="${S}"]`);
                  if (ye) return ye;
                }
                K = M.nextNode();
              }
            }
            return null;
          })(this.document, S);
          y && (this.scrollToElement(y), this.attemptFocus(y));
        }
        setHistoryScrollRestoration(S) {
          if (this.supportScrollRestoration()) {
            const y = this.window.history;
            y && y.scrollRestoration && (y.scrollRestoration = S);
          }
        }
        scrollToElement(S) {
          const y = S.getBoundingClientRect(),
            M = y.left + this.window.pageXOffset,
            K = y.top + this.window.pageYOffset,
            ce = this.offset();
          this.window.scrollTo(M - ce[0], K - ce[1]);
        }
        attemptFocus(S) {
          return S.focus(), this.document.activeElement === S;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const S =
              xs(this.window.history) ||
              xs(Object.getPrototypeOf(this.window.history));
            return !(!S || (!S.writable && !S.set));
          } catch (S) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (S) {
            return !1;
          }
        }
      }
      function xs(m) {
        return Object.getOwnPropertyDescriptor(m, "scrollRestoration");
      }
      class qi {}
    },
    7716: (X, U, b) => {
      "use strict";
      b.d(U, {
        deG: () => oy,
        tb: () => g_,
        AFp: () => f_,
        ip1: () => md,
        CZH: () => Qo,
        hGG: () => eS,
        z2F: () => Ya,
        sBO: () => Wb,
        Sil: () => Ga,
        _Vd: () => Uo,
        EJc: () => __,
        SBq: () => Gs,
        qLn: () => yo,
        vpe: () => Ys,
        gxx: () => wo,
        tBr: () => po,
        XFs: () => Ce,
        OlP: () => Dn,
        zs3: () => hn,
        ZZ4: () => Nu,
        aQg: () => Fu,
        soG: () => Ku,
        YKP: () => nm,
        v3s: () => xT,
        h0i: () => $i,
        PXZ: () => IT,
        R0b: () => ns,
        FiY: () => ri,
        Lbi: () => p_,
        g9A: () => h_,
        n_E: () => Ka,
        Qsj: () => Mb,
        FYo: () => xu,
        JOm: () => $s,
        Tiy: () => Wc,
        q3G: () => Cn,
        PiD: () => fa,
        tp0: () => wi,
        EAV: () => kT,
        Rgc: () => Na,
        dDg: () => C_,
        DyG: () => ru,
        GfV: () => Yg,
        s_b: () => Vu,
        ifc: () => Se,
        eFA: () => S_,
        G48: () => DT,
        Gpc: () => W,
        f3M: () => Ey,
        X6Q: () => bd,
        _c5: () => GT,
        VLi: () => ET,
        c2e: () => m_,
        zSh: () => va,
        wAp: () => Qe,
        vHH: () => ae,
        EiD: () => gf,
        mCW: () => pa,
        qzn: () => _o,
        JVY: () => Ly,
        pB0: () => jy,
        eBb: () => Vy,
        L6k: () => ky,
        LAX: () => By,
        cg1: () => Fc,
        Tjo: () => KT,
        kL8: () => mg,
        yhl: () => af,
        dqk: () => Rt,
        sIi: () => Ta,
        CqO: () => bc,
        QGY: () => vc,
        F4k: () => wp,
        RDi: () => Pi,
        AaK: () => R,
        z3N: () => si,
        qOj: () => uc,
        TTD: () => Br,
        _Bn: () => Hg,
        xp6: () => Xf,
        uIk: () => dc,
        Gre: () => og,
        ekj: () => Rc,
        Suo: () => Wm,
        Xpm: () => Nn,
        lG2: () => Yr,
        Yz7: () => Dt,
        cJS: () => kt,
        oAB: () => Sr,
        Yjl: () => pr,
        Y36: () => Ia,
        _UZ: () => vp,
        BQk: () => Cc,
        ynx: () => Dc,
        qZA: () => Ec,
        TgZ: () => yc,
        EpF: () => bp,
        n5z: () => zd,
        Ikx: () => xc,
        LFG: () => Mn,
        $8M: () => ol,
        NdJ: () => wc,
        CRH: () => Km,
        kcU: () => Ge,
        O4$: () => xe,
        oxw: () => Ip,
        ALo: () => km,
        lcZ: () => Vm,
        xi3: () => Bm,
        Hsn: () => Mp,
        F$t: () => Ap,
        Q6J: () => mc,
        s9C: () => Ic,
        DdM: () => Rm,
        VKq: () => Om,
        iGM: () => $m,
        MAs: () => cp,
        CHM: () => xi,
        LSH: () => Dl,
        kYT: () => kr,
        Udp: () => Mc,
        WFA: () => Tc,
        d8E: () => Nc,
        YNc: () => lp,
        _uU: () => Zp,
        Oqu: () => Pc,
        hij: () => Su,
        Gf: () => Hm,
      });
      var E = b(9765),
        v = b(5319),
        Y = b(7574),
        Q = b(6682),
        B = b(8819);
      function P(e) {
        for (let t in e) if (e[t] === P) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function L(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function R(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(R).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function N(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const F = P({ __forward_ref__: P });
      function W(e) {
        return (
          (e.__forward_ref__ = W),
          (e.toString = function () {
            return R(this());
          }),
          e
        );
      }
      function V(e) {
        return te(e) ? e() : e;
      }
      function te(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(F) &&
          e.__forward_ref__ === W
        );
      }
      class ae extends Error {
        constructor(t, n) {
          super(
            (function (e, t) {
              return `${e ? `NG0${e}: ` : ""}${t}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function me(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function we(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : me(e);
      }
      function et(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new ae("201", `No provider for ${we(e)} found${n}`);
      }
      function Mt(e, t) {
        null == e &&
          (function (e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function Dt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function kt(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function mn(e) {
        return On(e, rr) || On(e, zn);
      }
      function On(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function br(e) {
        return e && (e.hasOwnProperty(tn) || e.hasOwnProperty(Vn))
          ? e[tn]
          : null;
      }
      const rr = P({ ??prov: P }),
        tn = P({ ??inj: P }),
        zn = P({ ngInjectableDef: P }),
        Vn = P({ ngInjectorDef: P });
      var Ce = (() => (
        ((Ce = Ce || {})[(Ce.Default = 0)] = "Default"),
        (Ce[(Ce.Host = 1)] = "Host"),
        (Ce[(Ce.Self = 2)] = "Self"),
        (Ce[(Ce.SkipSelf = 4)] = "SkipSelf"),
        (Ce[(Ce.Optional = 8)] = "Optional"),
        Ce
      ))();
      let Vt;
      function _n(e) {
        const t = Vt;
        return (Vt = e), t;
      }
      function sr(e, t, n) {
        const r = mn(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Ce.Optional
          ? null
          : void 0 !== t
          ? t
          : void et(R(e), "Injector");
      }
      function Bn(e) {
        return { toString: e }.toString();
      }
      var Yt = (() => (
          ((Yt = Yt || {})[(Yt.OnPush = 0)] = "OnPush"),
          (Yt[(Yt.Default = 1)] = "Default"),
          Yt
        ))(),
        Se = (() => (
          ((Se = Se || {})[(Se.Emulated = 0)] = "Emulated"),
          (Se[(Se.None = 2)] = "None"),
          (Se[(Se.ShadowDom = 3)] = "ShadowDom"),
          Se
        ))();
      const He = "undefined" != typeof globalThis && globalThis,
        wr = "undefined" != typeof window && window,
        Ht =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Rt = He || ("undefined" != typeof global && global) || wr || Ht,
        Ct = {},
        pt = [],
        lt = P({ ??cmp: P }),
        Tr = P({ ??dir: P }),
        Tn = P({ ??pipe: P }),
        ss = P({ ??mod: P }),
        ir = P({ ??loc: P }),
        Qt = P({ ??fac: P }),
        qe = P({ __NG_ELEMENT_ID__: P });
      let dr = 0;
      function Nn(e) {
        return Bn(() => {
          const n = {},
            r = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Yt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || pt,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Se.Emulated,
              id: "c",
              styles: e.styles || pt,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            s = e.directives,
            i = e.features,
            o = e.pipes;
          return (
            (r.id += dr++),
            (r.inputs = hr(e.inputs, n)),
            (r.outputs = hr(e.outputs)),
            i && i.forEach((a) => a(r)),
            (r.directiveDefs = s
              ? () => ("function" == typeof s ? s() : s).map(Gn)
              : null),
            (r.pipeDefs = o
              ? () => ("function" == typeof o ? o() : o).map(or)
              : null),
            r
          );
        });
      }
      function Gn(e) {
        return (
          rn(e) ||
          (function (e) {
            return e[Tr] || null;
          })(e)
        );
      }
      function or(e) {
        return (function (e) {
          return e[Tn] || null;
        })(e);
      }
      const fr = {};
      function Sr(e) {
        return Bn(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || pt,
            declarations: e.declarations || pt,
            imports: e.imports || pt,
            exports: e.exports || pt,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (fr[e.id] = e.type), t;
        });
      }
      function kr(e, t) {
        return Bn(() => {
          const n = sn(e, !0);
          (n.declarations = t.declarations || pt),
            (n.imports = t.imports || pt),
            (n.exports = t.exports || pt);
        });
      }
      function hr(e, t) {
        if (null == e) return Ct;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let s = e[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              t && (t[s] = i);
          }
        return n;
      }
      const Yr = Nn;
      function pr(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function rn(e) {
        return e[lt] || null;
      }
      function sn(e, t) {
        const n = e[ss] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${R(e)} does not have '\u0275mod' property.`);
        return n;
      }
      const k = 19;
      function Zt(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Lt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function ar(e) {
        return 0 != (8 & e.flags);
      }
      function En(e) {
        return 2 == (2 & e.flags);
      }
      function Vr(e) {
        return 1 == (1 & e.flags);
      }
      function ur(e) {
        return null !== e.template;
      }
      function qn(e) {
        return 0 != (512 & e[2]);
      }
      function Qr(e, t) {
        return e.hasOwnProperty(Qt) ? e[Qt] : null;
      }
      class pi {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Br() {
        return qr;
      }
      function qr(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Zs), gi;
      }
      function gi() {
        const e = _i(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === Ct) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Zs(e, t, n, r) {
        const s =
            _i(e) ||
            (function (e, t) {
              return (e[mi] = t);
            })(e, { previous: Ct, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          d = o[a];
        (i[a] = new pi(d && d.currentValue, t, o === Ct)), (e[r] = t);
      }
      Br.ngInherit = !0;
      const mi = "__ngSimpleChanges__";
      function _i(e) {
        return e[mi] || null;
      }
      const Zr = "http://www.w3.org/2000/svg";
      let xs;
      function Pi(e) {
        xs = e;
      }
      function m(e) {
        return !!e.listen;
      }
      const y = {
        createRenderer: (e, t) =>
          void 0 !== xs
            ? xs
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function K(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function ke(e, t) {
        return K(t[e]);
      }
      function rt(e, t) {
        return K(t[e.index]);
      }
      function xt(e, t) {
        return e.data[t];
      }
      function ut(e, t) {
        return e[t];
      }
      function wt(e, t) {
        const n = t[e];
        return Zt(n) ? n : n[0];
      }
      function Ut(e) {
        return 4 == (4 & e[2]);
      }
      function cn(e) {
        return 128 == (128 & e[2]);
      }
      function An(e, t) {
        return null == t ? null : e[t];
      }
      function Ur(e) {
        e[18] = 0;
      }
      function Jn(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const ze = {
        lFrame: un(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function Zi() {
        return ze.bindingsEnabled;
      }
      function _e() {
        return ze.lFrame.lView;
      }
      function _t() {
        return ze.lFrame.tView;
      }
      function xi(e) {
        return (ze.lFrame.contextLView = e), e[8];
      }
      function dn() {
        let e = Ni();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Ni() {
        return ze.lFrame.currentTNode;
      }
      function $r(e, t) {
        const n = ze.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function w() {
        return ze.lFrame.isParent;
      }
      function u() {
        ze.lFrame.isParent = !1;
      }
      function T() {
        return ze.isInCheckNoChangesMode;
      }
      function O(e) {
        ze.isInCheckNoChangesMode = e;
      }
      function $() {
        const e = ze.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function de() {
        return ze.lFrame.bindingIndex++;
      }
      function be(e) {
        const t = ze.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Et(e, t) {
        const n = ze.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Xe(t);
      }
      function Xe(e) {
        ze.lFrame.currentDirectiveIndex = e;
      }
      function ct(e) {
        const t = ze.lFrame.currentDirectiveIndex;
        return -1 === t ? null : e[t];
      }
      function Jt() {
        return ze.lFrame.currentQueryIndex;
      }
      function Xt(e) {
        ze.lFrame.currentQueryIndex = e;
      }
      function $n(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function fn(e, t, n) {
        if (n & Ce.SkipSelf) {
          let s = t,
            i = e;
          for (
            ;
            !((s = s.parent),
            null !== s ||
              n & Ce.Host ||
              ((s = $n(i)), null === s || ((i = i[15]), 10 & s.type)));

          );
          if (null === s) return !1;
          (t = s), (e = i);
        }
        const r = (ze.lFrame = Ir());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Hr(e) {
        const t = Ir(),
          n = e[1];
        (ze.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Ir() {
        const e = ze.lFrame,
          t = null === e ? null : e.child;
        return null === t ? un(e) : t;
      }
      function un(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Wr() {
        const e = ze.lFrame;
        return (
          (ze.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Kr = Wr;
      function _r() {
        const e = Wr();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function ln() {
        return ze.lFrame.selectedIndex;
      }
      function Xr(e) {
        ze.lFrame.selectedIndex = e;
      }
      function mt() {
        const e = ze.lFrame;
        return xt(e.tView, e.selectedIndex);
      }
      function xe() {
        ze.lFrame.currentNamespace = Zr;
      }
      function Ge() {
        ze.lFrame.currentNamespace = null;
      }
      function Ln(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: o,
              ngAfterContentChecked: a,
              ngAfterViewInit: d,
              ngAfterViewChecked: g,
              ngOnDestroy: D,
            } = i;
          o && (e.contentHooks || (e.contentHooks = [])).push(-n, o),
            a &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, a),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, a)),
            d && (e.viewHooks || (e.viewHooks = [])).push(-n, d),
            g &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, g),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, g)),
            null != D && (e.destroyHooks || (e.destroyHooks = [])).push(n, D);
        }
      }
      function lr(e, t, n) {
        Ar(e, t, 3, n);
      }
      function Wt(e, t, n, r) {
        (3 & e[2]) === n && Ar(e, t, n, r);
      }
      function Di(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Ar(e, t, n, r) {
        const i = null != r ? r : -1,
          o = t.length - 1;
        let a = 0;
        for (let d = void 0 !== r ? 65535 & e[18] : 0; d < o; d++)
          if ("number" == typeof t[d + 1]) {
            if (((a = t[d]), null != r && a >= r)) break;
          } else
            t[d] < 0 && (e[18] += 65536),
              (a < i || -1 == i) &&
                (Fs(e, n, t, d), (e[18] = (4294901760 & e[18]) + d + 2)),
              d++;
      }
      function Fs(e, t, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          a = e[s ? -n[r] : n[r]];
        if (s) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(a);
            } finally {
            }
          }
        } else
          try {
            i.call(a);
          } finally {
          }
      }
      class cr {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function eo(e, t, n) {
        const r = m(e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              d = n[s++];
            r ? e.setAttribute(t, a, d, o) : t.setAttributeNS(o, a, d);
          } else {
            const o = i,
              a = n[++s];
            to(o)
              ? r && e.setProperty(t, o, a)
              : r
              ? e.setAttribute(t, o, a)
              : t.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function eu(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function to(e) {
        return 64 === e.charCodeAt(0);
      }
      function no(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              "number" == typeof s
                ? (n = s)
                : 0 === n ||
                  tu(e, n, s, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function tu(e, t, n, r, s) {
        let i = 0,
          o = e.length;
        if (-1 === t) o = -1;
        else
          for (; i < e.length; ) {
            const a = e[i++];
            if ("number" == typeof a) {
              if (a === t) {
                o = -1;
                break;
              }
              if (a > t) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const a = e[i];
          if ("number" == typeof a) break;
          if (a === n) {
            if (null === r) return void (null !== s && (e[i + 1] = s));
            if (r === e[i + 1]) return void (e[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (e.splice(o, 0, t), (i = o + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== s && e.splice(i++, 0, s);
      }
      function nu(e) {
        return -1 !== e;
      }
      function Ls(e) {
        return 32767 & e;
      }
      function vi(e, t) {
        let n = (function (e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let ro = !0;
      function so(e) {
        const t = ro;
        return (ro = e), t;
      }
      let c = 0;
      function C(e, t) {
        const n = H(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          I(r.data, e),
          I(t, null),
          I(r.blueprint, null));
        const s = Z(e, t),
          i = e.injectorIndex;
        if (nu(s)) {
          const o = Ls(s),
            a = vi(s, t),
            d = a[1].data;
          for (let g = 0; g < 8; g++) t[i + g] = a[o + g] | d[o + g];
        }
        return (t[i + 8] = s), i;
      }
      function I(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function H(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Z(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          s = t;
        for (; null !== s; ) {
          const i = s[1],
            o = i.type;
          if (((r = 2 === o ? i.declTNode : 1 === o ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function fe(e, t, n) {
        !(function (e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(qe) && (r = n[qe]),
            null == r && (r = n[qe] = c++);
          const s = 255 & r;
          t.data[e + (s >> 5)] |= 1 << s;
        })(e, t, n);
      }
      function It(e, t, n) {
        if (n & Ce.Optional) return e;
        et(t, "NodeInjector");
      }
      function Ke(e, t, n, r) {
        if (
          (n & Ce.Optional && void 0 === r && (r = null),
          0 == (n & (Ce.Self | Ce.Host)))
        ) {
          const s = e[9],
            i = _n(void 0);
          try {
            return s ? s.get(t, r, n & Ce.Optional) : sr(t, r, n & Ce.Optional);
          } finally {
            _n(i);
          }
        }
        return It(r, t, n);
      }
      function Kt(e, t, n, r = Ce.Default, s) {
        if (null !== e) {
          const i = (function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(qe) ? e[qe] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : ks) : t;
          })(n);
          if ("function" == typeof i) {
            if (!fn(t, e, r)) return r & Ce.Host ? It(s, n, r) : Ke(t, n, r, s);
            try {
              const o = i(r);
              if (null != o || r & Ce.Optional) return o;
              et(n);
            } finally {
              Kr();
            }
          } else if ("number" == typeof i) {
            let o = null,
              a = H(e, t),
              d = -1,
              g = r & Ce.Host ? t[16][6] : null;
            for (
              (-1 === a || r & Ce.SkipSelf) &&
              ((d = -1 === a ? Z(e, t) : t[a + 8]),
              -1 !== d && io(r, !1)
                ? ((o = t[1]), (a = Ls(d)), (t = vi(d, t)))
                : (a = -1));
              -1 !== a;

            ) {
              const D = t[1];
              if (_s(i, a, D.data)) {
                const A = gs(a, t, n, o, r, g);
                if (A !== Tt) return A;
              }
              (d = t[a + 8]),
                -1 !== d && io(r, t[1].data[a + 8] === g) && _s(i, a, t)
                  ? ((o = D), (a = Ls(d)), (t = vi(d, t)))
                  : (a = -1);
            }
          }
        }
        return Ke(t, n, r, s);
      }
      const Tt = {};
      function ks() {
        return new oo(dn(), _e());
      }
      function gs(e, t, n, r, s, i) {
        const o = t[1],
          a = o.data[e + 8],
          D = Mr(
            a,
            o,
            n,
            null == r ? En(a) && ro : r != o && 0 != (3 & a.type),
            s & Ce.Host && i === a
          );
        return null !== D ? ms(t, o, D, a) : Tt;
      }
      function Mr(e, t, n, r, s) {
        const i = e.providerIndexes,
          o = t.data,
          a = 1048575 & i,
          d = e.directiveStart,
          D = i >> 20,
          x = s ? a + D : e.directiveEnd;
        for (let z = r ? a : a + D; z < x; z++) {
          const J = o[z];
          if ((z < d && n === J) || (z >= d && J.type === n)) return z;
        }
        if (s) {
          const z = o[d];
          if (z && ur(z) && z.type === n) return d;
        }
        return null;
      }
      function ms(e, t, n, r) {
        let s = e[n];
        const i = t.data;
        if (
          (function (e) {
            return e instanceof cr;
          })(s)
        ) {
          const o = s;
          o.resolving &&
            (function (e, t) {
              throw new ae(
                "200",
                `Circular dependency in DI detected for ${e}`
              );
            })(we(i[n]));
          const a = so(o.canSeeViewProviders);
          o.resolving = !0;
          const d = o.injectImpl ? _n(o.injectImpl) : null;
          fn(e, r, Ce.Default);
          try {
            (s = e[n] = o.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const o = qr(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, o),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, o);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== d && _n(d), so(a), (o.resolving = !1), Kr();
          }
        }
        return s;
      }
      function _s(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function io(e, t) {
        return !(e & Ce.Self || (e & Ce.Host && t));
      }
      class oo {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Kt(this._tNode, this._lView, t, r, n);
        }
      }
      function zd(e) {
        return Bn(() => {
          const t = e.prototype.constructor,
            n = t[Qt] || il(t),
            r = Object.prototype;
          let s = Object.getPrototypeOf(e.prototype).constructor;
          for (; s && s !== r; ) {
            const i = s[Qt] || il(s);
            if (i && i !== n) return i;
            s = Object.getPrototypeOf(s);
          }
          return (i) => new i();
        });
      }
      function il(e) {
        return te(e)
          ? () => {
              const t = il(V(e));
              return t && t();
            }
          : Qr(e);
      }
      function ol(e) {
        return (function (e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let s = 0;
            for (; s < r; ) {
              const i = n[s];
              if (eu(i)) break;
              if (0 === i) s += 2;
              else if ("number" == typeof i)
                for (s++; s < r && "string" == typeof n[s]; ) s++;
              else {
                if (i === t) return n[s + 1];
                s += 2;
              }
            }
          }
          return null;
        })(dn(), e);
      }
      const uo = "__parameters__";
      function Fi(e, t, n) {
        return Bn(() => {
          const r = (function (e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const s in r) this[s] = r[s];
              }
            };
          })(t);
          function s(...i) {
            if (this instanceof s) return r.apply(this, i), this;
            const o = new s(...i);
            return (a.annotation = o), a;
            function a(d, g, D) {
              const A = d.hasOwnProperty(uo)
                ? d[uo]
                : Object.defineProperty(d, uo, { value: [] })[uo];
              for (; A.length <= D; ) A.push(null);
              return (A[D] = A[D] || []).push(o), d;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = e),
            (s.annotationCls = s),
            s
          );
        });
      }
      class Dn {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.??prov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.??prov = Dt({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const oy = new Dn("AnalyzeForEntryComponents"),
        ru = Function;
      function as(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), as(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function Bs(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Bs(n, t) : t(n)));
      }
      function iu(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Li(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function bi(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function es(e, t, n) {
        let r = co(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function (e, t, n, r) {
                let s = e.length;
                if (s == t) e.push(n, r);
                else if (1 === s) e.push(r, e[0]), (e[0] = n);
                else {
                  for (s--, e.push(e[s - 1], e[s]); s > t; )
                    (e[s] = e[s - 2]), s--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function ul(e, t) {
        const n = co(e, t);
        if (n >= 0) return e[1 | n];
      }
      function co(e, t) {
        return (function (e, t, n) {
          let r = 0,
            s = e.length >> n;
          for (; s !== r; ) {
            const i = r + ((s - r) >> 1),
              o = e[i << n];
            if (t === o) return i << n;
            o > t ? (s = i) : (r = i + 1);
          }
          return ~(s << n);
        })(e, t, 1);
      }
      const la = {},
        cl = "__NG_DI_FLAG__",
        fo = "ngTempTokenPath",
        my = /\n/gm,
        dl = "__source",
        fl = P({ provide: String, useValue: P });
      let ca;
      function ho(e) {
        const t = ca;
        return (ca = e), t;
      }
      function yy(e, t = Ce.Default) {
        if (void 0 === ca)
          throw new Error("inject() must be called from an injection context");
        return null === ca
          ? sr(e, void 0, t)
          : ca.get(e, t & Ce.Optional ? null : void 0, t);
      }
      function Mn(e, t = Ce.Default) {
        return (Vt || yy)(V(e), t);
      }
      const Ey = Mn;
      function ki(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = V(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let s,
              i = Ce.Default;
            for (let o = 0; o < r.length; o++) {
              const a = r[o],
                d = Dy(a);
              "number" == typeof d
                ? -1 === d
                  ? (s = a.token)
                  : (i |= d)
                : (s = a);
            }
            t.push(Mn(s, i));
          } else t.push(Mn(r));
        }
        return t;
      }
      function da(e, t) {
        return (e[cl] = t), (e.prototype[cl] = t), e;
      }
      function Dy(e) {
        return e[cl];
      }
      function Jd(e, t, n, r) {
        const s = e[fo];
        throw (
          (t[dl] && s.unshift(t[dl]),
          (e.message = (function (e, t, n, r = null) {
            e =
              e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                ? e.substr(2)
                : e;
            let s = R(t);
            if (Array.isArray(t)) s = t.map(R).join(" -> ");
            else if ("object" == typeof t) {
              let i = [];
              for (let o in t)
                if (t.hasOwnProperty(o)) {
                  let a = t[o];
                  i.push(
                    o + ":" + ("string" == typeof a ? JSON.stringify(a) : R(a))
                  );
                }
              s = `{${i.join(", ")}}`;
            }
            return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${e.replace(
              my,
              "\n  "
            )}`;
          })("\n" + e.message, s, n, r)),
          (e.ngTokenPath = s),
          (e[fo] = null),
          e)
        );
      }
      const po = da(
          Fi("Inject", (e) => ({ token: e })),
          -1
        ),
        ri = da(Fi("Optional"), 8),
        fa = da(Fi("Self"), 2),
        wi = da(Fi("SkipSelf"), 4);
      let uu;
      function mo(e) {
        var t;
        return (
          (null ===
            (t = (function () {
              if (void 0 === uu && ((uu = null), Rt.trustedTypes))
                try {
                  uu = Rt.trustedTypes.createPolicy("angular", {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {}
              return uu;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(e)) || e
        );
      }
      class Vi {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class Oy extends Vi {
        getTypeName() {
          return "HTML";
        }
      }
      class Py extends Vi {
        getTypeName() {
          return "Style";
        }
      }
      class xy extends Vi {
        getTypeName() {
          return "Script";
        }
      }
      class Ny extends Vi {
        getTypeName() {
          return "URL";
        }
      }
      class Fy extends Vi {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function si(e) {
        return e instanceof Vi ? e.changingThisBreaksApplicationSecurity : e;
      }
      function _o(e, t) {
        const n = af(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === t;
      }
      function af(e) {
        return (e instanceof Vi && e.getTypeName()) || null;
      }
      function Ly(e) {
        return new Oy(e);
      }
      function ky(e) {
        return new Py(e);
      }
      function Vy(e) {
        return new xy(e);
      }
      function By(e) {
        return new Ny(e);
      }
      function jy(e) {
        return new Fy(e);
      }
      class Uy {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              mo(t),
              "text/html"
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch (n) {
            return null;
          }
        }
      }
      class $y {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              )),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(n);
            const r = this.inertDocument.createElement("body");
            n.appendChild(r);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          if ("content" in n) return (n.innerHTML = mo(t)), n;
          const r = this.inertDocument.createElement("body");
          return (
            (r.innerHTML = mo(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(r),
            r
          );
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let s = n.length - 1; 0 < s; s--) {
            const o = n.item(s).name;
            ("xmlns:ns1" === o || 0 === o.indexOf("ns1:")) &&
              t.removeAttribute(o);
          }
          let r = t.firstChild;
          for (; r; )
            r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r),
              (r = r.nextSibling);
        }
      }
      const Wy =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ky =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function pa(e) {
        return (e = String(e)).match(Wy) || e.match(Ky) ? e : "unsafe:" + e;
      }
      function js(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function ga(...e) {
        const t = {};
        for (const n of e)
          for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const cf = js("area,br,col,hr,img,wbr"),
        df = js("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        ff = js("rp,rt"),
        ml = ga(
          cf,
          ga(
            df,
            js(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          ga(
            ff,
            js(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          ga(ff, df)
        ),
        _l = js("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        yl = js("srcset"),
        hf = ga(
          _l,
          yl,
          js(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          js(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        zy = js("script,style,template");
      class Gy {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let s = this.checkClobberedElement(n, n.nextSibling);
                if (s) {
                  n = s;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!ml.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !zy.hasOwnProperty(n);
          this.buf.push("<"), this.buf.push(n);
          const r = t.attributes;
          for (let s = 0; s < r.length; s++) {
            const i = r.item(s),
              o = i.name,
              a = o.toLowerCase();
            if (!hf.hasOwnProperty(a)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let d = i.value;
            _l[a] && (d = pa(d)),
              yl[a] &&
                ((e = d),
                (d = (e = String(e))
                  .split(",")
                  .map((t) => pa(t.trim()))
                  .join(", "))),
              this.buf.push(" ", o, '="', pf(d), '"');
          }
          var e;
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          ml.hasOwnProperty(n) &&
            !cf.hasOwnProperty(n) &&
            (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(pf(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const Yy = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Qy = /([^\#-~ |!])/g;
      function pf(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(Yy, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(Qy, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let cu;
      function gf(e, t) {
        let n = null;
        try {
          cu =
            cu ||
            (function (e) {
              const t = new $y(e);
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(
                    mo(""),
                    "text/html"
                  );
                } catch (e) {
                  return !1;
                }
              })()
                ? new Uy(t)
                : t;
            })(e);
          let r = t ? String(t) : "";
          n = cu.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s)
              throw new Error(
                "Failed to sanitize html because the input is unstable"
              );
            s--, (r = i), (i = n.innerHTML), (n = cu.getInertBodyElement(r));
          } while (r !== i);
          return mo(new Gy().sanitizeChildren(El(n) || n));
        } finally {
          if (n) {
            const r = El(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function El(e) {
        return "content" in e &&
          (function (e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var Cn = (() => (
        ((Cn = Cn || {})[(Cn.NONE = 0)] = "NONE"),
        (Cn[(Cn.HTML = 1)] = "HTML"),
        (Cn[(Cn.STYLE = 2)] = "STYLE"),
        (Cn[(Cn.SCRIPT = 3)] = "SCRIPT"),
        (Cn[(Cn.URL = 4)] = "URL"),
        (Cn[(Cn.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        Cn
      ))();
      function Dl(e) {
        const t = (function () {
          const e = _e();
          return e && e[12];
        })();
        return t
          ? t.sanitize(Cn.URL, e) || ""
          : _o(e, "URL")
          ? si(e)
          : pa(me(e));
      }
      const yf = "__ngContext__";
      function Er(e, t) {
        e[yf] = t;
      }
      function vl(e) {
        const t = (function (e) {
          return e[yf] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function du(e) {
        return e.ngOriginalError;
      }
      function hE(e, ...t) {
        e.error(...t);
      }
      class yo {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            r = this._findContext(t),
            s = ((e = t) && e.ngErrorLogger) || hE;
          var e;
          s(this._console, "ERROR", t),
            n && s(this._console, "ORIGINAL ERROR", n),
            r && s(this._console, "ERROR CONTEXT", r);
        }
        _findContext(t) {
          return t ? t.ngDebugContext || this._findContext(du(t)) : null;
        }
        _findOriginalError(t) {
          let n = t && du(t);
          for (; n && du(n); ) n = du(n);
          return n || null;
        }
      }
      const If = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Rt))();
      function Us(e) {
        return e instanceof Function ? e() : e;
      }
      var $s = (() => (
        (($s = $s || {})[($s.Important = 1)] = "Important"),
        ($s[($s.DashCase = 2)] = "DashCase"),
        $s
      ))();
      function Tl(e, t) {
        return undefined(e, t);
      }
      function ya(e) {
        const t = e[3];
        return Lt(t) ? t[3] : t;
      }
      function Sl(e) {
        return Pf(e[13]);
      }
      function Il(e) {
        return Pf(e[4]);
      }
      function Pf(e) {
        for (; null !== e && !Lt(e); ) e = e[4];
        return e;
      }
      function Do(e, t, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Lt(r) ? (i = r) : Zt(r) && ((o = !0), (r = r[0]));
          const a = K(r);
          0 === e && null !== n
            ? null == s
              ? Vf(t, n, a)
              : Bi(t, n, a, s || null, !0)
            : 1 === e && null !== n
            ? Bi(t, n, a, s || null, !0)
            : 2 === e
            ? (function (e, t, n) {
                const r = hu(e, t);
                r &&
                  (function (e, t, n, r) {
                    m(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, a, o)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function (e, t, n, r, s) {
                const i = n[7];
                i !== K(n) && Do(t, e, r, i, s);
                for (let a = 10; a < n.length; a++) {
                  const d = n[a];
                  Ea(d[1], d, e, t, r, i);
                }
              })(t, e, i, n, s);
        }
      }
      function Ml(e, t, n) {
        return m(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Nf(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          s = t[3];
        1024 & t[2] && ((t[2] &= -1025), Jn(s, -1)), n.splice(r, 1);
      }
      function Rl(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const s = r[17];
          null !== s && s !== e && Nf(s, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = Li(e, 10 + t);
          !(function (e, t) {
            Ea(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const o = i[k];
          null !== o && o.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function Ff(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          m(n) && n.destroyNode && Ea(e, t, n, 3, null, null),
            (function (e) {
              let t = e[13];
              if (!t) return Ol(e[1], e);
              for (; t; ) {
                let n = null;
                if (Zt(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Zt(t) && Ol(t[1], t), (t = t[3]);
                  null === t && (t = e), Zt(t) && Ol(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ol(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const s = t[n[r]];
                  if (!(s instanceof cr)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let o = 0; o < i.length; o += 2) {
                        const a = s[i[o]],
                          d = i[o + 1];
                        try {
                          d.call(a);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(s);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function (e, t) {
              const n = e.cleanup,
                r = t[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const o = n[i + 1],
                      a = "function" == typeof o ? o(t) : K(t[o]),
                      d = r[(s = n[i + 2])],
                      g = n[i + 3];
                    "boolean" == typeof g
                      ? a.removeEventListener(n[i], d, g)
                      : g >= 0
                      ? r[(s = g)]()
                      : r[(s = -g)].unsubscribe(),
                      (i += 2);
                  } else {
                    const o = r[(s = n[i + 1])];
                    n[i].call(o);
                  }
              if (null !== r) {
                for (let i = s + 1; i < r.length; i++) r[i]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && m(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && Lt(t[3])) {
            n !== t[3] && Nf(n, t);
            const r = t[k];
            null !== r && r.detachView(e);
          }
        }
      }
      function Lf(e, t, n) {
        return (function (e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const s = e.data[r.directiveStart].encapsulation;
            if (s === Se.None || s === Se.Emulated) return null;
          }
          return rt(r, n);
        })(e, t.parent, n);
      }
      function Bi(e, t, n, r, s) {
        m(e) ? e.insertBefore(t, n, r, s) : t.insertBefore(n, r, s);
      }
      function Vf(e, t, n) {
        m(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function Bf(e, t, n, r, s) {
        null !== r ? Bi(e, t, n, r, s) : Vf(e, t, n);
      }
      function hu(e, t) {
        return m(e) ? e.parentNode(t) : t.parentNode;
      }
      function jf(e, t, n) {
        return $f(e, t, n);
      }
      let $f = function (e, t, n) {
        return 40 & e.type ? rt(e, n) : null;
      };
      function pu(e, t, n, r) {
        const s = Lf(e, r, t),
          i = t[11],
          a = jf(r.parent || t[6], r, t);
        if (null != s)
          if (Array.isArray(n))
            for (let d = 0; d < n.length; d++) Bf(i, s, n[d], a, !1);
          else Bf(i, s, n, a, !1);
      }
      function gu(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return rt(t, e);
          if (4 & n) return xl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return gu(e, r);
            {
              const s = e[t.index];
              return Lt(s) ? xl(-1, s) : K(s);
            }
          }
          if (32 & n) return Tl(t, e)() || K(e[t.index]);
          {
            const r = Wf(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : gu(ya(e[16]), r)
              : gu(e, t.next);
          }
        }
        return null;
      }
      function Wf(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function xl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            s = r[1].firstChild;
          if (null !== s) return gu(r, s);
        }
        return t[7];
      }
      function Nl(e, t, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            d = n.type;
          if (
            (o && 0 === t && (a && Er(K(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & d) Nl(e, t, n.child, r, s, i, !1), Do(t, e, s, a, i);
            else if (32 & d) {
              const g = Tl(n, r);
              let D;
              for (; (D = g()); ) Do(t, e, s, D, i);
              Do(t, e, s, a, i);
            } else 16 & d ? zf(e, t, r, n, s, i) : Do(t, e, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function Ea(e, t, n, r, s, i) {
        Nl(n, r, e.firstChild, t, s, i, !1);
      }
      function zf(e, t, n, r, s, i) {
        const o = n[16],
          d = o[6].projection[r.projection];
        if (Array.isArray(d))
          for (let g = 0; g < d.length; g++) Do(t, e, s, d[g], i);
        else Nl(e, t, d, o[3], s, i, !0);
      }
      function Gf(e, t, n) {
        m(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Fl(e, t, n) {
        m(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function Yf(e, t, n) {
        let r = e.length;
        for (;;) {
          const s = e.indexOf(t, n);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const i = t.length;
            if (s + i === r || e.charCodeAt(s + i) <= 32) return s;
          }
          n = s + 1;
        }
      }
      const Qf = "ng-template";
      function BE(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let s = e[r++];
          if (n && "class" === s) {
            if (((s = e[r]), -1 !== Yf(s.toLowerCase(), t, 0))) return !0;
          } else if (1 === s) {
            for (; r < e.length && "string" == typeof (s = e[r++]); )
              if (s.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function qf(e) {
        return 4 === e.type && e.value !== Qf;
      }
      function jE(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Qf);
      }
      function UE(e, t, n) {
        let r = 4;
        const s = e.attrs || [],
          i = (function (e) {
            for (let t = 0; t < e.length; t++) if (eu(e[t])) return t;
            return e.length;
          })(s);
        let o = !1;
        for (let a = 0; a < t.length; a++) {
          const d = t[a];
          if ("number" != typeof d) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== d && !jE(e, d, n)) || ("" === d && 1 === t.length))
                ) {
                  if (ys(r)) return !1;
                  o = !0;
                }
              } else {
                const g = 8 & r ? d : t[++a];
                if (8 & r && null !== e.attrs) {
                  if (!BE(e.attrs, g, n)) {
                    if (ys(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const A = $E(8 & r ? "class" : d, s, qf(e), n);
                if (-1 === A) {
                  if (ys(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== g) {
                  let x;
                  x = A > i ? "" : s[A + 1].toLowerCase();
                  const z = 8 & r ? x : null;
                  if ((z && -1 !== Yf(z, g, 0)) || (2 & r && g !== x)) {
                    if (ys(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !ys(r) && !ys(d)) return !1;
            if (o && ys(d)) continue;
            (o = !1), (r = d | (1 & r));
          }
        }
        return ys(r) || o;
      }
      function ys(e) {
        return 0 == (1 & e);
      }
      function $E(e, t, n, r) {
        if (null === t) return -1;
        let s = 0;
        if (r || !n) {
          let i = !1;
          for (; s < t.length; ) {
            const o = t[s];
            if (o === e) return s;
            if (3 === o || 6 === o) i = !0;
            else {
              if (1 === o || 2 === o) {
                let a = t[++s];
                for (; "string" == typeof a; ) a = t[++s];
                continue;
              }
              if (4 === o) break;
              if (0 === o) {
                s += 4;
                continue;
              }
            }
            s += i ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Zf(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (UE(e, t[r], n)) return !0;
        return !1;
      }
      function zE(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let s = 0; s < e.length; s++) if (e[s] !== r[s]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Jf(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function GE(e) {
        let t = e[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < e.length; ) {
          let o = e[n];
          if ("string" == typeof o)
            if (2 & r) {
              const a = e[++n];
              s += "[" + o + (a.length > 0 ? '="' + a + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" !== s && !ys(o) && ((t += Jf(i, s)), (s = "")),
              (r = o),
              (i = i || !ys(r));
          n++;
        }
        return "" !== s && (t += Jf(i, s)), t;
      }
      const it = {};
      function Xf(e) {
        eh(_t(), _e(), ln() + e, T());
      }
      function eh(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && lr(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Wt(t, i, 0, n);
          }
        Xr(n);
      }
      function mu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Es(e) {
        return (e >> 17) & 32767;
      }
      function Ll(e) {
        return 2 | e;
      }
      function ii(e) {
        return (131068 & e) >> 2;
      }
      function kl(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Vl(e) {
        return 1 | e;
      }
      function ch(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const o = e.data[i];
              Xt(s), o.contentQueries(2, t[i], i);
            }
          }
      }
      function Da(e, t, n, r, s, i, o, a, d, g) {
        const D = t.blueprint.slice();
        return (
          (D[0] = s),
          (D[2] = 140 | r),
          Ur(D),
          (D[3] = D[15] = e),
          (D[8] = n),
          (D[10] = o || (e && e[10])),
          (D[11] = a || (e && e[11])),
          (D[12] = d || (e && e[12]) || null),
          (D[9] = g || (e && e[9]) || null),
          (D[6] = i),
          (D[16] = 2 == t.type ? e[16] : D),
          D
        );
      }
      function Co(e, t, n, r, s) {
        let i = e.data[t];
        if (null === i)
          (i = (function (e, t, n, r, s) {
            const i = Ni(),
              o = w(),
              d = (e.data[t] = (function (e, t, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, o ? i : i && i.parent, n, t, r, s));
            return (
              null === e.firstChild && (e.firstChild = d),
              null !== i &&
                (o
                  ? null == i.child && null !== d.parent && (i.child = d)
                  : null === i.next && (i.next = d)),
              d
            );
          })(e, t, n, r, s)),
            ze.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const o = (function () {
            const e = ze.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === o ? -1 : o.injectorIndex;
        }
        return $r(i, !0), i;
      }
      function vo(e, t, n, r) {
        if (0 === n) return -1;
        const s = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return s;
      }
      function Ca(e, t, n) {
        Hr(t);
        try {
          const r = e.viewQuery;
          null !== r && ec(1, r, n);
          const s = e.template;
          null !== s && dh(e, t, s, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && ch(e, t),
            e.staticViewQueries && ec(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) SD(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), _r();
        }
      }
      function bo(e, t, n, r) {
        const s = t[2];
        if (256 == (256 & s)) return;
        Hr(t);
        const i = T();
        try {
          Ur(t),
            (function (e) {
              ze.lFrame.bindingIndex = e;
            })(e.bindingStartIndex),
            null !== n && dh(e, t, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const g = e.preOrderCheckHooks;
              null !== g && lr(t, g, null);
            } else {
              const g = e.preOrderHooks;
              null !== g && Wt(t, g, 0, null), Di(t, 0);
            }
          if (
            ((function (e) {
              for (let t = Sl(e); null !== t; t = Il(t)) {
                if (!t[2]) continue;
                const n = t[9];
                for (let r = 0; r < n.length; r++) {
                  const s = n[r],
                    i = s[3];
                  0 == (1024 & s[2]) && Jn(i, 1), (s[2] |= 1024);
                }
              }
            })(t),
            (function (e) {
              for (let t = Sl(e); null !== t; t = Il(t))
                for (let n = 10; n < t.length; n++) {
                  const r = t[n],
                    s = r[1];
                  cn(r) && bo(s, r, s.template, r[8]);
                }
            })(t),
            null !== e.contentQueries && ch(e, t),
            !i)
          )
            if (o) {
              const g = e.contentCheckHooks;
              null !== g && lr(t, g);
            } else {
              const g = e.contentHooks;
              null !== g && Wt(t, g, 1), Di(t, 1);
            }
          !(function (e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const s = n[r];
                  if (s < 0) Xr(~s);
                  else {
                    const i = s,
                      o = n[++r],
                      a = n[++r];
                    Et(o, i), a(2, t[i]);
                  }
                }
              } finally {
                Xr(-1);
              }
          })(e, t);
          const a = e.components;
          null !== a &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) TD(e, t[n]);
            })(t, a);
          const d = e.viewQuery;
          if ((null !== d && ec(2, d, r), !i))
            if (o) {
              const g = e.viewCheckHooks;
              null !== g && lr(t, g);
            } else {
              const g = e.viewHooks;
              null !== g && Wt(t, g, 2), Di(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            i || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), Jn(t[3], -1));
        } finally {
          _r();
        }
      }
      function oD(e, t, n, r) {
        const s = t[10],
          i = !T(),
          o = Ut(t);
        try {
          i && !o && s.begin && s.begin(), o && Ca(e, t, r), bo(e, t, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function dh(e, t, n, r, s) {
        const i = ln(),
          o = 2 & r;
        try {
          Xr(-1), o && t.length > 20 && eh(e, t, 20, T()), n(r, s);
        } finally {
          Xr(i);
        }
      }
      function fh(e, t, n) {
        if (ar(t)) {
          const s = t.directiveEnd;
          for (let i = t.directiveStart; i < s; i++) {
            const o = e.data[i];
            o.contentQueries && o.contentQueries(1, n[i], i);
          }
        }
      }
      function zl(e, t, n) {
        !Zi() ||
          ((function (e, t, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || C(n, t), Er(r, t);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const d = e.data[a],
                g = ur(d);
              g && DD(t, n, d);
              const D = ms(t, e, a, n);
              Er(D, t),
                null !== o && CD(0, a - s, D, d, 0, o),
                g && (wt(n.index, t)[8] = D);
            }
          })(e, t, n, rt(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                o = n.index,
                a = ze.lFrame.currentDirectiveIndex;
              try {
                Xr(o);
                for (let d = r; d < s; d++) {
                  const g = e.data[d],
                    D = t[d];
                  Xe(d),
                    (null !== g.hostBindings ||
                      0 !== g.hostVars ||
                      null !== g.hostAttrs) &&
                      Dh(g, D);
                }
              } finally {
                Xr(-1), Xe(a);
              }
            })(e, t, n));
      }
      function Gl(e, t, n = rt) {
        const r = t.localNames;
        if (null !== r) {
          let s = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(t, e) : e[o];
            e[s++] = a;
          }
        }
      }
      function hh(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Eu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Eu(e, t, n, r, s, i, o, a, d, g) {
        const D = 20 + r,
          A = D + s,
          x = (function (e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : it);
            return n;
          })(D, A),
          z = "function" == typeof g ? g() : g;
        return (x[1] = {
          type: e,
          blueprint: x,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: x.slice().fill(null, D),
          bindingStartIndex: D,
          expandoStartIndex: A,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: d,
          consts: z,
          incompleteFirstPass: !1,
        });
      }
      function mh(e, t, n, r) {
        const s = Sh(t);
        null === n
          ? s.push(r)
          : (s.push(n), e.firstCreatePass && Ih(e).push(r, s.length - 1));
      }
      function _h(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const s = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, s)
              : (n[r] = [t, s]);
          }
        return n;
      }
      function ts(e, t, n, r, s, i, o, a) {
        const d = rt(t, n);
        let D,
          g = t.inputs;
        !a && null != g && (D = g[r])
          ? (Rh(e, n, D, r, s),
            En(t) &&
              (function (e, t) {
                const n = wt(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function (e) {
              return "class" === e
                ? "className"
                : "for" === e
                ? "htmlFor"
                : "formaction" === e
                ? "formAction"
                : "innerHtml" === e
                ? "innerHTML"
                : "readonly" === e
                ? "readOnly"
                : "tabindex" === e
                ? "tabIndex"
                : e;
            })(r)),
            (s = null != o ? o(s, t.value || "", r) : s),
            m(i)
              ? i.setProperty(d, r, s)
              : to(r) || (d.setProperty ? d.setProperty(r, s) : (d[r] = s)));
      }
      function Yl(e, t, n, r) {
        let s = !1;
        if (Zi()) {
          const i = (function (e, t, n) {
              const r = e.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Zf(n, o.selectors, !1) &&
                    (s || (s = []),
                    fe(C(n, t), e, o.type),
                    ur(o) ? (Ch(e, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(e, t, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), vh(n, e.data.length, i.length);
            for (let D = 0; D < i.length; D++) {
              const A = i[D];
              A.providersResolver && A.providersResolver(A);
            }
            let a = !1,
              d = !1,
              g = vo(e, t, i.length, null);
            for (let D = 0; D < i.length; D++) {
              const A = i[D];
              (n.mergedAttrs = no(n.mergedAttrs, A.hostAttrs)),
                bh(e, n, t, g, A),
                ED(g, A, o),
                null !== A.contentQueries && (n.flags |= 8),
                (null !== A.hostBindings ||
                  null !== A.hostAttrs ||
                  0 !== A.hostVars) &&
                  (n.flags |= 128);
              const x = A.type.prototype;
              !a &&
                (x.ngOnChanges || x.ngOnInit || x.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (a = !0)),
                !d &&
                  (x.ngOnChanges || x.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (d = !0)),
                g++;
            }
            !(function (e, t) {
              const r = t.directiveEnd,
                s = e.data,
                i = t.attrs,
                o = [];
              let a = null,
                d = null;
              for (let g = t.directiveStart; g < r; g++) {
                const D = s[g],
                  A = D.inputs,
                  x = null === i || qf(t) ? null : vD(A, i);
                o.push(x), (a = _h(A, g, a)), (d = _h(D.outputs, g, d));
              }
              null !== a &&
                (a.hasOwnProperty("class") && (t.flags |= 16),
                a.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = o),
                (t.inputs = a),
                (t.outputs = d);
            })(e, n);
          }
          o &&
            (function (e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let s = 0; s < t.length; s += 2) {
                  const i = n[t[s + 1]];
                  if (null == i)
                    throw new ae(
                      "301",
                      `Export of name '${t[s + 1]}' not found!`
                    );
                  r.push(t[s], i);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = no(n.mergedAttrs, n.attrs)), s;
      }
      function Eh(e, t, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let a = e.hostBindingOpCodes;
          null === a && (a = e.hostBindingOpCodes = []);
          const d = ~t.index;
          (function (e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(a) != d && a.push(d),
            a.push(r, s, o);
        }
      }
      function Dh(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Ch(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function ED(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          ur(t) && (n[""] = e);
        }
      }
      function vh(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function bh(e, t, n, r, s) {
        e.data[r] = s;
        const i = s.factory || (s.factory = Qr(s.type)),
          o = new cr(i, ur(s), null);
        (e.blueprint[r] = o),
          (n[r] = o),
          Eh(e, t, 0, r, vo(e, n, s.hostVars, it), s);
      }
      function DD(e, t, n) {
        const r = rt(t, e),
          s = hh(n),
          i = e[10],
          o = Du(
            e,
            Da(
              e,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        e[t.index] = o;
      }
      function Hs(e, t, n, r, s, i) {
        const o = rt(e, t);
        !(function (e, t, n, r, s, i, o) {
          if (null == i)
            m(e) ? e.removeAttribute(t, s, n) : t.removeAttribute(s);
          else {
            const a = null == o ? me(i) : o(i, r || "", s);
            m(e)
              ? e.setAttribute(t, s, a, n)
              : n
              ? t.setAttributeNS(n, s, a)
              : t.setAttribute(s, a);
          }
        })(t[11], o, i, e.value, n, r, s);
      }
      function CD(e, t, n, r, s, i) {
        const o = i[t];
        if (null !== o) {
          const a = r.setInput;
          for (let d = 0; d < o.length; ) {
            const g = o[d++],
              D = o[d++],
              A = o[d++];
            null !== a ? r.setInput(n, A, g, D) : (n[D] = A);
          }
        }
      }
      function vD(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const s = t[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              e.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, e[s], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function wh(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function TD(e, t) {
        const n = wt(t, e);
        if (cn(n)) {
          const r = n[1];
          80 & n[2] ? bo(r, n, r.template, n[8]) : n[5] > 0 && ql(n);
        }
      }
      function ql(e) {
        for (let r = Sl(e); null !== r; r = Il(r))
          for (let s = 10; s < r.length; s++) {
            const i = r[s];
            if (1024 & i[2]) {
              const o = i[1];
              bo(o, i, o.template, i[8]);
            } else i[5] > 0 && ql(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const s = wt(n[r], e);
            cn(s) && s[5] > 0 && ql(s);
          }
      }
      function SD(e, t) {
        const n = wt(t, e),
          r = n[1];
        (function (e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Ca(r, n, n[8]);
      }
      function Du(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Zl(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = ya(e);
          if (qn(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Xl(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          bo(e, t, e.template, n);
        } catch (s) {
          throw (Mh(t, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Th(e) {
        !(function (e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = vl(n),
              s = r[1];
            oD(s, r, s.template, n);
          }
        })(e[8]);
      }
      function ec(e, t, n) {
        Xt(0), t(e, n);
      }
      const OD = (() => Promise.resolve(null))();
      function Sh(e) {
        return e[7] || (e[7] = []);
      }
      function Ih(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Ah(e, t, n) {
        return (
          (null === e || ur(e)) &&
            (n = (function (e) {
              for (; Array.isArray(e); ) {
                if ("object" == typeof e[1]) return e;
                e = e[0];
              }
              return null;
            })(n[t.index])),
          n[11]
        );
      }
      function Mh(e, t) {
        const n = e[9],
          r = n ? n.get(yo, null) : null;
        r && r.handleError(t);
      }
      function Rh(e, t, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            d = t[o],
            g = e.data[o];
          null !== g.setInput ? g.setInput(d, s, r, a) : (d[a] = s);
        }
      }
      function ai(e, t, n) {
        const r = ke(t, e);
        !(function (e, t, n) {
          m(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], r, n);
      }
      function Cu(e, t, n) {
        let r = n ? e.styles : null,
          s = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const a = t[o];
            "number" == typeof a
              ? (i = a)
              : 1 == i
              ? (s = N(s, a))
              : 2 == i && (r = N(r, a + ": " + t[++o] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      const wo = new Dn("INJECTOR", -1);
      class Oh {
        get(t, n = la) {
          if (n === la) {
            const r = new Error(`NullInjectorError: No provider for ${R(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      const va = new Dn("Set Injector scope."),
        ba = {},
        ND = {};
      let tc;
      function Ph() {
        return void 0 === tc && (tc = new Oh()), tc;
      }
      function xh(e, t = null, n = null, r) {
        return new LD(e, n, t || Ph(), r);
      }
      class LD {
        constructor(t, n, r, s = null) {
          (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const i = [];
          n && Bs(n, (a) => this.processProvider(a, t, n)),
            Bs([t], (a) => this.processInjectorType(a, [], i)),
            this.records.set(wo, To(void 0, this));
          const o = this.records.get(va);
          (this.scope = null != o ? o.value : null),
            (this.source = s || ("object" == typeof t ? null : R(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, n = la, r = Ce.Default) {
          this.assertNotDestroyed();
          const s = ho(this),
            i = _n(void 0);
          try {
            if (!(r & Ce.SkipSelf)) {
              let a = this.records.get(t);
              if (void 0 === a) {
                const d =
                  ("function" == typeof (e = t) ||
                    ("object" == typeof e && e instanceof Dn)) &&
                  mn(t);
                (a = d && this.injectableDefInScope(d) ? To(nc(t), ba) : null),
                  this.records.set(t, a);
              }
              if (null != a) return this.hydrate(t, a);
            }
            return (r & Ce.Self ? Ph() : this.parent).get(
              t,
              (n = r & Ce.Optional && n === la ? null : n)
            );
          } catch (o) {
            if ("NullInjectorError" === o.name) {
              if (((o[fo] = o[fo] || []).unshift(R(t)), s)) throw o;
              return Jd(o, t, "R3InjectorError", this.source);
            }
            throw o;
          } finally {
            _n(i), ho(s);
          }
          var e;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((r, s) => t.push(R(s))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, n, r) {
          if (!(t = V(t))) return !1;
          let s = br(t);
          const i = (null == s && t.ngModule) || void 0,
            o = void 0 === i ? t : i,
            a = -1 !== r.indexOf(o);
          if ((void 0 !== i && (s = br(i)), null == s)) return !1;
          if (null != s.imports && !a) {
            let D;
            r.push(o);
            try {
              Bs(s.imports, (A) => {
                this.processInjectorType(A, n, r) &&
                  (void 0 === D && (D = []), D.push(A));
              });
            } finally {
            }
            if (void 0 !== D)
              for (let A = 0; A < D.length; A++) {
                const { ngModule: x, providers: z } = D[A];
                Bs(z, (J) => this.processProvider(J, x, z || pt));
              }
          }
          this.injectorDefTypes.add(o);
          const d = Qr(o) || (() => new o());
          this.records.set(o, To(d, ba));
          const g = s.providers;
          if (null != g && !a) {
            const D = t;
            Bs(g, (A) => this.processProvider(A, D, g));
          }
          return void 0 !== i && void 0 !== t.providers;
        }
        processProvider(t, n, r) {
          let s = So((t = V(t))) ? t : V(t && t.provide);
          const i = ((e = t), Fh(e) ? To(void 0, e.useValue) : To(Nh(e), ba));
          var e;
          if (So(t) || !0 !== t.multi) this.records.get(s);
          else {
            let o = this.records.get(s);
            o ||
              ((o = To(void 0, ba, !0)),
              (o.factory = () => ki(o.multi)),
              this.records.set(s, o)),
              (s = t),
              o.multi.push(t);
          }
          this.records.set(s, i);
        }
        hydrate(t, n) {
          return (
            n.value === ba && ((n.value = ND), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              null !== (e = n.value) &&
              "object" == typeof e &&
              "function" == typeof e.ngOnDestroy &&
              this.onDestroy.add(n.value),
            n.value
          );
          var e;
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = V(t.providedIn);
          return "string" == typeof n
            ? "any" === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function nc(e) {
        const t = mn(e),
          n = null !== t ? t.factory : Qr(e);
        if (null !== n) return n;
        if (e instanceof Dn)
          throw new Error(`Token ${R(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const t = e.length;
            if (t > 0) {
              const r = bi(t, "?");
              throw new Error(
                `Can't resolve all parameters for ${R(e)}: (${r.join(", ")}).`
              );
            }
            const n = (function (e) {
              const t = e && (e[rr] || e[zn]);
              if (t) {
                const n = (function (e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Error("unreachable");
      }
      function Nh(e, t, n) {
        let r;
        if (So(e)) {
          const s = V(e);
          return Qr(s) || nc(s);
        }
        if (Fh(e)) r = () => V(e.useValue);
        else if (
          (function (e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...ki(e.deps || []));
        else if (
          (function (e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => Mn(V(e.useExisting));
        else {
          const s = V(e && (e.useClass || e.provide));
          if (
            !(function (e) {
              return !!e.deps;
            })(e)
          )
            return Qr(s) || nc(s);
          r = () => new s(...ki(e.deps));
        }
        return r;
      }
      function To(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Fh(e) {
        return null !== e && "object" == typeof e && fl in e;
      }
      function So(e) {
        return "function" == typeof e;
      }
      const Lh = function (e, t, n) {
        return (function (e, t = null, n = null, r) {
          const s = xh(e, t, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, t, e, n);
      };
      let hn = (() => {
        class e {
          static create(n, r) {
            return Array.isArray(n)
              ? Lh(n, r, "")
              : Lh(n.providers, n.parent, n.name || "");
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = la),
          (e.NULL = new Oh()),
          (e.??prov = Dt({
            token: e,
            providedIn: "any",
            factory: () => Mn(wo),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function rC(e, t) {
        Ln(vl(e)[1], dn());
      }
      function uc(e) {
        let t = (function (e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let s;
          if (ur(e)) s = t.??cmp || t.??dir;
          else {
            if (t.??cmp) throw new Error("Directives cannot inherit Components");
            s = t.??dir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const o = e;
              (o.inputs = lc(e.inputs)),
                (o.declaredInputs = lc(e.declaredInputs)),
                (o.outputs = lc(e.outputs));
              const a = s.hostBindings;
              a && aC(e, a);
              const d = s.viewQuery,
                g = s.contentQueries;
              if (
                (d && iC(e, d),
                g && oC(e, g),
                L(e.inputs, s.inputs),
                L(e.declaredInputs, s.declaredInputs),
                L(e.outputs, s.outputs),
                ur(s) && s.data.animation)
              ) {
                const D = e.data;
                D.animation = (D.animation || []).concat(s.data.animation);
              }
            }
            const i = s.features;
            if (i)
              for (let o = 0; o < i.length; o++) {
                const a = i[o];
                a && a.ngInherit && a(e), a === uc && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function (e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const s = e[r];
            (s.hostVars = t += s.hostVars),
              (s.hostAttrs = no(s.hostAttrs, (n = no(n, s.hostAttrs))));
          }
        })(r);
      }
      function lc(e) {
        return e === Ct ? {} : e === pt ? [] : e;
      }
      function iC(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, s) => {
              t(r, s), n(r, s);
            }
          : t;
      }
      function oC(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, s, i) => {
              t(r, s, i), n(r, s, i);
            }
          : t;
      }
      function aC(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, s) => {
              t(r, s), n(r, s);
            }
          : t;
      }
      let vu = null;
      function Io() {
        if (!vu) {
          const e = Rt.Symbol;
          if (e && e.iterator) vu = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (vu = r);
            }
          }
        }
        return vu;
      }
      class Cs {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Cs(t);
        }
        static unwrap(t) {
          return Cs.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Cs;
        }
      }
      function Ta(e) {
        return (
          !!cc(e) && (Array.isArray(e) || (!(e instanceof Map) && Io() in e))
        );
      }
      function cc(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Ws(e, t, n) {
        return (e[t] = n);
      }
      function Dr(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function dc(e, t, n, r) {
        const s = _e();
        return Dr(s, de(), t) && (_t(), Hs(mt(), s, e, t, n, r)), dc;
      }
      function Mo(e, t, n, r) {
        return Dr(e, de(), n) ? t + me(n) + r : it;
      }
      function lp(e, t, n, r, s, i, o, a) {
        const d = _e(),
          g = _t(),
          D = e + 20,
          A = g.firstCreatePass
            ? (function (e, t, n, r, s, i, o, a, d) {
                const g = t.consts,
                  D = Co(t, e, 4, o || null, An(g, a));
                Yl(t, n, D, An(g, d)), Ln(t, D);
                const A = (D.tViews = Eu(
                  2,
                  D,
                  r,
                  s,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  g
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, D),
                    (A.queries = t.queries.embeddedTView(D))),
                  D
                );
              })(D, g, d, t, n, r, s, i, o)
            : g.data[D];
        $r(A, !1);
        const x = d[11].createComment("");
        pu(g, d, x, A),
          Er(x, d),
          Du(d, (d[D] = wh(x, d, x, A))),
          Vr(A) && zl(g, d, A),
          null != o && Gl(d, A, a);
      }
      function cp(e) {
        return ut(ze.lFrame.contextLView, 20 + e);
      }
      function Ia(e, t = Ce.Default) {
        const n = _e();
        return null === n ? Mn(e, t) : Kt(dn(), n, V(e), t);
      }
      function mc(e, t, n) {
        const r = _e();
        return Dr(r, de(), t) && ts(_t(), mt(), r, e, t, r[11], n, !1), mc;
      }
      function _c(e, t, n, r, s) {
        const o = s ? "class" : "style";
        Rh(e, n, t.inputs[o], o, r);
      }
      function yc(e, t, n, r) {
        const s = _e(),
          i = _t(),
          o = 20 + e,
          a = s[11],
          d = (s[o] = Ml(a, t, ze.lFrame.currentNamespace)),
          g = i.firstCreatePass
            ? (function (e, t, n, r, s, i, o) {
                const a = t.consts,
                  g = Co(t, e, 2, s, An(a, i));
                return (
                  Yl(t, n, g, An(a, o)),
                  null !== g.attrs && Cu(g, g.attrs, !1),
                  null !== g.mergedAttrs && Cu(g, g.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, g),
                  g
                );
              })(o, i, s, 0, t, n, r)
            : i.data[o];
        $r(g, !0);
        const D = g.mergedAttrs;
        null !== D && eo(a, d, D);
        const A = g.classes;
        null !== A && Fl(a, d, A);
        const x = g.styles;
        null !== x && Gf(a, d, x),
          64 != (64 & g.flags) && pu(i, s, d, g),
          0 === ze.lFrame.elementDepthCount && Er(d, s),
          ze.lFrame.elementDepthCount++,
          Vr(g) && (zl(i, s, g), fh(i, g, s)),
          null !== r && Gl(s, g);
      }
      function Ec() {
        let e = dn();
        w() ? u() : ((e = e.parent), $r(e, !1));
        const t = e;
        ze.lFrame.elementDepthCount--;
        const n = _t();
        n.firstCreatePass && (Ln(n, e), ar(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            _c(n, t, _e(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            _c(n, t, _e(), t.stylesWithoutHost, !1);
      }
      function vp(e, t, n, r) {
        yc(e, t, n, r), Ec();
      }
      function Dc(e, t, n) {
        const r = _e(),
          s = _t(),
          i = e + 20,
          o = s.firstCreatePass
            ? (function (e, t, n, r, s) {
                const i = t.consts,
                  o = An(i, r),
                  a = Co(t, e, 8, "ng-container", o);
                return (
                  null !== o && Cu(a, o, !0),
                  Yl(t, n, a, An(i, s)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(i, s, r, t, n)
            : s.data[i];
        $r(o, !0);
        const a = (r[i] = r[11].createComment(""));
        pu(s, r, a, o),
          Er(a, r),
          Vr(o) && (zl(s, r, o), fh(s, o, r)),
          null != n && Gl(r, o);
      }
      function Cc() {
        let e = dn();
        const t = _t();
        w() ? u() : ((e = e.parent), $r(e, !1)),
          t.firstCreatePass && (Ln(t, e), ar(e) && t.queries.elementEnd(e));
      }
      function bp() {
        return _e();
      }
      function vc(e) {
        return !!e && "function" == typeof e.then;
      }
      function wp(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const bc = wp;
      function wc(e, t, n, r) {
        const s = _e(),
          i = _t(),
          o = dn();
        return Tp(i, s, s[11], o, e, t, !!n, r), wc;
      }
      function Tc(e, t) {
        const n = dn(),
          r = _e(),
          s = _t();
        return Tp(s, r, Ah(ct(s.data), n, r), n, e, t, !1), Tc;
      }
      function Tp(e, t, n, r, s, i, o, a) {
        const d = Vr(r),
          D = e.firstCreatePass && Ih(e),
          A = t[8],
          x = Sh(t);
        let z = !0;
        if (3 & r.type || a) {
          const ie = rt(r, t),
            ve = a ? a(ie) : ie,
            pe = x.length,
            je = a ? (nt) => a(K(nt[r.index])) : r.index;
          if (m(n)) {
            let nt = null;
            if (
              (!a &&
                d &&
                (nt = (function (e, t, n, r) {
                  const s = e.cleanup;
                  if (null != s)
                    for (let i = 0; i < s.length - 1; i += 2) {
                      const o = s[i];
                      if (o === n && s[i + 1] === r) {
                        const a = t[7],
                          d = s[i + 2];
                        return a.length > d ? a[d] : null;
                      }
                      "string" == typeof o && (i += 2);
                    }
                  return null;
                })(e, t, s, r.index)),
              null !== nt)
            )
              ((nt.__ngLastListenerFn__ || nt).__ngNextListenerFn__ = i),
                (nt.__ngLastListenerFn__ = i),
                (z = !1);
            else {
              i = Sc(r, t, A, i, !1);
              const St = n.listen(ve, s, i);
              x.push(i, St), D && D.push(s, je, pe, pe + 1);
            }
          } else
            (i = Sc(r, t, A, i, !0)),
              ve.addEventListener(s, i, o),
              x.push(i),
              D && D.push(s, je, pe, o);
        } else i = Sc(r, t, A, i, !1);
        const J = r.outputs;
        let ue;
        if (z && null !== J && (ue = J[s])) {
          const ie = ue.length;
          if (ie)
            for (let ve = 0; ve < ie; ve += 2) {
              const Kn = t[ue[ve]][ue[ve + 1]].subscribe(i),
                fs = x.length;
              x.push(i, Kn), D && D.push(s, r.index, fs, -(fs + 1));
            }
        }
      }
      function Sp(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (s) {
          return Mh(e, s), !1;
        }
      }
      function Sc(e, t, n, r, s) {
        return function i(o) {
          if (o === Function) return r;
          const a = 2 & e.flags ? wt(e.index, t) : t;
          0 == (32 & t[2]) && Zl(a);
          let d = Sp(t, 0, r, o),
            g = i.__ngNextListenerFn__;
          for (; g; ) (d = Sp(t, 0, g, o) && d), (g = g.__ngNextListenerFn__);
          return s && !1 === d && (o.preventDefault(), (o.returnValue = !1)), d;
        };
      }
      function Ip(e = 1) {
        return (function (e) {
          return (ze.lFrame.contextLView = (function (e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, ze.lFrame.contextLView))[8];
        })(e);
      }
      function $C(e, t) {
        let n = null;
        const r = (function (e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let s = 0; s < t.length; s++) {
          const i = t[s];
          if ("*" !== i) {
            if (null === r ? Zf(e, i, !0) : zE(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function Ap(e) {
        const t = _e()[16][6];
        if (!t.projection) {
          const r = (t.projection = bi(e ? e.length : 1, null)),
            s = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            const o = e ? $C(i, e) : 0;
            null !== o &&
              (s[o] ? (s[o].projectionNext = i) : (r[o] = i), (s[o] = i)),
              (i = i.next);
          }
        }
      }
      function Mp(e, t = 0, n) {
        const r = _e(),
          s = _t(),
          i = Co(s, 20 + e, 16, null, n || null);
        null === i.projection && (i.projection = t),
          u(),
          64 != (64 & i.flags) &&
            (function (e, t, n) {
              zf(t[11], 0, t, n, Lf(e, n, t), jf(n.parent || t[6], n, t));
            })(s, r, i);
      }
      function Ic(e, t, n) {
        return Ac(e, "", t, "", n), Ic;
      }
      function Ac(e, t, n, r, s) {
        const i = _e(),
          o = Mo(i, t, n, r);
        return o !== it && ts(_t(), mt(), i, e, o, i[11], s, !1), Ac;
      }
      function Vp(e, t, n, r, s) {
        const i = e[n + 1],
          o = null === t;
        let a = r ? Es(i) : ii(i),
          d = !1;
        for (; 0 !== a && (!1 === d || o); ) {
          const D = e[a + 1];
          KC(e[a], t) && ((d = !0), (e[a + 1] = r ? Vl(D) : Ll(D))),
            (a = r ? Es(D) : ii(D));
        }
        d && (e[n + 1] = r ? Ll(i) : Vl(i));
      }
      function KC(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && co(e, t) >= 0)
        );
      }
      const Wn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Bp(e) {
        return e.substring(Wn.key, Wn.keyEnd);
      }
      function jp(e, t) {
        const n = Wn.textEnd;
        return n === t
          ? -1
          : ((t = Wn.keyEnd =
              (function (e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (Wn.key = t), n)),
            Vo(e, t, n));
      }
      function Vo(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Mc(e, t, n) {
        return vs(e, t, n, !1), Mc;
      }
      function Rc(e, t) {
        return vs(e, t, null, !0), Rc;
      }
      function zs(e, t) {
        for (
          let n = (function (e) {
            return (
              (function (e) {
                (Wn.key = 0),
                  (Wn.keyEnd = 0),
                  (Wn.value = 0),
                  (Wn.valueEnd = 0),
                  (Wn.textEnd = e.length);
              })(e),
              jp(e, Vo(e, 0, Wn.textEnd))
            );
          })(t);
          n >= 0;
          n = jp(t, n)
        )
          es(e, Bp(t), !0);
      }
      function vs(e, t, n, r) {
        const s = _e(),
          i = _t(),
          o = be(2);
        i.firstUpdatePass && zp(i, e, o, r),
          t !== it &&
            Dr(s, o, t) &&
            Yp(
              i,
              i.data[ln()],
              s,
              s[11],
              e,
              (s[o + 1] = (function (e, t) {
                return (
                  null == e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = R(si(e)))),
                  e
                );
              })(t, n)),
              r,
              o
            );
      }
      function Kp(e, t) {
        return t >= e.expandoStartIndex;
      }
      function zp(e, t, n, r) {
        const s = e.data;
        if (null === s[n + 1]) {
          const i = s[ln()],
            o = Kp(e, n);
          qp(i, r) && null === t && !o && (t = !1),
            (t = (function (e, t, n, r) {
              const s = ct(e);
              let i = r ? t.residualClasses : t.residualStyles;
              if (null === s)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = Aa((n = Oc(null, e, t, n, r)), t.attrs, r)),
                  (i = null));
              else {
                const o = t.directiveStylingLast;
                if (-1 === o || e[o] !== s)
                  if (((n = Oc(s, e, t, n, r)), null === i)) {
                    let d = (function (e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== ii(r)) return e[Es(r)];
                    })(e, t, r);
                    void 0 !== d &&
                      Array.isArray(d) &&
                      ((d = Oc(null, e, t, d[1], r)),
                      (d = Aa(d, t.attrs, r)),
                      (function (e, t, n, r) {
                        e[Es(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, d));
                  } else
                    i = (function (e, t, n) {
                      let r;
                      const s = t.directiveEnd;
                      for (let i = 1 + t.directiveStylingLast; i < s; i++)
                        r = Aa(r, e[i].hostAttrs, n);
                      return Aa(r, t.attrs, n);
                    })(e, t, r);
              }
              return (
                void 0 !== i &&
                  (r ? (t.residualClasses = i) : (t.residualStyles = i)),
                n
              );
            })(s, i, t, r)),
            (function (e, t, n, r, s, i) {
              let o = i ? t.classBindings : t.styleBindings,
                a = Es(o),
                d = ii(o);
              e[r] = n;
              let D,
                g = !1;
              if (Array.isArray(n)) {
                const A = n;
                (D = A[1]), (null === D || co(A, D) > 0) && (g = !0);
              } else D = n;
              if (s)
                if (0 !== d) {
                  const x = Es(e[a + 1]);
                  (e[r + 1] = mu(x, a)),
                    0 !== x && (e[x + 1] = kl(e[x + 1], r)),
                    (e[a + 1] = (function (e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[a + 1], r));
                } else
                  (e[r + 1] = mu(a, 0)),
                    0 !== a && (e[a + 1] = kl(e[a + 1], r)),
                    (a = r);
              else
                (e[r + 1] = mu(d, 0)),
                  0 === a ? (a = r) : (e[d + 1] = kl(e[d + 1], r)),
                  (d = r);
              g && (e[r + 1] = Ll(e[r + 1])),
                Vp(e, D, r, !0),
                Vp(e, D, r, !1),
                (function (e, t, n, r, s) {
                  const i = s ? e.residualClasses : e.residualStyles;
                  null != i &&
                    "string" == typeof t &&
                    co(i, t) >= 0 &&
                    (n[r + 1] = Vl(n[r + 1]));
                })(t, D, e, r, i),
                (o = mu(a, d)),
                i ? (t.classBindings = o) : (t.styleBindings = o);
            })(s, i, t, n, o, r);
        }
      }
      function Oc(e, t, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = t[a]), (r = Aa(r, i.hostAttrs, s)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Aa(e, t, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const o = t[i];
            "number" == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                es(e, o, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Yp(e, t, n, r, s, i, o, a) {
        if (!(3 & t.type)) return;
        const d = e.data,
          g = d[a + 1];
        Tu(
          (function (e) {
            return 1 == (1 & e);
          })(g)
            ? Qp(d, t, n, s, ii(g), o)
            : void 0
        ) ||
          (Tu(i) ||
            ((function (e) {
              return 2 == (2 & e);
            })(g) &&
              (i = Qp(d, null, n, s, a, o))),
          (function (e, t, n, r, s) {
            const i = m(e);
            if (t)
              s
                ? i
                  ? e.addClass(n, r)
                  : n.classList.add(r)
                : i
                ? e.removeClass(n, r)
                : n.classList.remove(r);
            else {
              let o = -1 === r.indexOf("-") ? void 0 : $s.DashCase;
              if (null == s)
                i ? e.removeStyle(n, r, o) : n.style.removeProperty(r);
              else {
                const a = "string" == typeof s && s.endsWith("!important");
                a && ((s = s.slice(0, -10)), (o |= $s.Important)),
                  i
                    ? e.setStyle(n, r, s, o)
                    : n.style.setProperty(r, s, a ? "important" : "");
              }
            }
          })(r, o, ke(ln(), n), s, i));
      }
      function Qp(e, t, n, r, s, i) {
        const o = null === t;
        let a;
        for (; s > 0; ) {
          const d = e[s],
            g = Array.isArray(d),
            D = g ? d[1] : d,
            A = null === D;
          let x = n[s + 1];
          x === it && (x = A ? pt : void 0);
          let z = A ? ul(x, r) : D === r ? x : void 0;
          if ((g && !Tu(z) && (z = ul(d, r)), Tu(z) && ((a = z), o))) return a;
          const J = e[s + 1];
          s = o ? Es(J) : ii(J);
        }
        if (null !== t) {
          let d = i ? t.residualClasses : t.residualStyles;
          null != d && (a = ul(d, r));
        }
        return a;
      }
      function Tu(e) {
        return void 0 !== e;
      }
      function qp(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function Zp(e, t = "") {
        const n = _e(),
          r = _t(),
          s = e + 20,
          i = r.firstCreatePass ? Co(r, s, 1, t, null) : r.data[s],
          o = (n[s] = (function (e, t) {
            return m(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        pu(r, n, o, i), $r(i, !1);
      }
      function Pc(e) {
        return Su("", e, ""), Pc;
      }
      function Su(e, t, n) {
        const r = _e(),
          s = Mo(r, e, t, n);
        return s !== it && ai(r, ln(), s), Su;
      }
      function og(e, t, n) {
        !(function (e, t, n, r) {
          const s = _t(),
            i = be(2);
          s.firstUpdatePass && zp(s, null, i, r);
          const o = _e();
          if (n !== it && Dr(o, i, n)) {
            const a = s.data[ln()];
            if (qp(a, r) && !Kp(s, i)) {
              let d = r ? a.classesWithoutHost : a.stylesWithoutHost;
              null !== d && (n = N(d, n || "")), _c(s, a, o, n, r);
            } else
              !(function (e, t, n, r, s, i, o, a) {
                s === it && (s = pt);
                let d = 0,
                  g = 0,
                  D = 0 < s.length ? s[0] : null,
                  A = 0 < i.length ? i[0] : null;
                for (; null !== D || null !== A; ) {
                  const x = d < s.length ? s[d + 1] : void 0,
                    z = g < i.length ? i[g + 1] : void 0;
                  let ue,
                    J = null;
                  D === A
                    ? ((d += 2), (g += 2), x !== z && ((J = A), (ue = z)))
                    : null === A || (null !== D && D < A)
                    ? ((d += 2), (J = D))
                    : ((g += 2), (J = A), (ue = z)),
                    null !== J && Yp(e, t, n, r, J, ue, o, a),
                    (D = d < s.length ? s[d] : null),
                    (A = g < i.length ? i[g] : null);
                }
              })(
                s,
                a,
                o,
                o[11],
                o[i + 1],
                (o[i + 1] = (function (e, t, n) {
                  if (null == n || "" === n) return pt;
                  const r = [],
                    s = si(n);
                  if (Array.isArray(s))
                    for (let i = 0; i < s.length; i++) e(r, s[i], !0);
                  else if ("object" == typeof s)
                    for (const i in s) s.hasOwnProperty(i) && e(r, i, s[i]);
                  else "string" == typeof s && t(r, s);
                  return r;
                })(e, t, n)),
                r,
                i
              );
          }
        })(es, zs, Mo(_e(), e, t, n), !0);
      }
      function xc(e, t, n) {
        const r = _e();
        return Dr(r, de(), t) && ts(_t(), mt(), r, e, t, r[11], n, !0), xc;
      }
      function Nc(e, t, n) {
        const r = _e();
        if (Dr(r, de(), t)) {
          const i = _t(),
            o = mt();
          ts(i, o, r, e, t, Ah(ct(i.data), o, r), n, !0);
        }
        return Nc;
      }
      const Ui = void 0;
      var Tv = [
        "en",
        [["a", "p"], ["AM", "PM"], Ui],
        [["AM", "PM"], Ui, Ui],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Ui,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Ui,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Ui, "{1} 'at' {0}", Ui],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (e) {
          const t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let Bo = {};
      function Fc(e) {
        const t = (function (e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = _g(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = _g(r)), n)) return n;
        if ("en" === r) return Tv;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function mg(e) {
        return Fc(e)[Qe.PluralCase];
      }
      function _g(e) {
        return (
          e in Bo ||
            (Bo[e] =
              Rt.ng &&
              Rt.ng.common &&
              Rt.ng.common.locales &&
              Rt.ng.common.locales[e]),
          Bo[e]
        );
      }
      var Qe = (() => (
        ((Qe = Qe || {})[(Qe.LocaleId = 0)] = "LocaleId"),
        (Qe[(Qe.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (Qe[(Qe.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (Qe[(Qe.DaysFormat = 3)] = "DaysFormat"),
        (Qe[(Qe.DaysStandalone = 4)] = "DaysStandalone"),
        (Qe[(Qe.MonthsFormat = 5)] = "MonthsFormat"),
        (Qe[(Qe.MonthsStandalone = 6)] = "MonthsStandalone"),
        (Qe[(Qe.Eras = 7)] = "Eras"),
        (Qe[(Qe.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (Qe[(Qe.WeekendRange = 9)] = "WeekendRange"),
        (Qe[(Qe.DateFormat = 10)] = "DateFormat"),
        (Qe[(Qe.TimeFormat = 11)] = "TimeFormat"),
        (Qe[(Qe.DateTimeFormat = 12)] = "DateTimeFormat"),
        (Qe[(Qe.NumberSymbols = 13)] = "NumberSymbols"),
        (Qe[(Qe.NumberFormats = 14)] = "NumberFormats"),
        (Qe[(Qe.CurrencyCode = 15)] = "CurrencyCode"),
        (Qe[(Qe.CurrencySymbol = 16)] = "CurrencySymbol"),
        (Qe[(Qe.CurrencyName = 17)] = "CurrencyName"),
        (Qe[(Qe.Currencies = 18)] = "Currencies"),
        (Qe[(Qe.Directionality = 19)] = "Directionality"),
        (Qe[(Qe.PluralCase = 20)] = "PluralCase"),
        (Qe[(Qe.ExtraData = 21)] = "ExtraData"),
        Qe
      ))();
      const Iu = "en-US";
      let yg = Iu;
      function Lc(e) {
        Mt(e, "Expected localeId to be defined"),
          "string" == typeof e && (yg = e.toLowerCase().replace(/_/g, "-"));
      }
      function Bc(e, t, n, r, s) {
        if (((e = V(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Bc(e[i], t, n, r, s);
        else {
          const i = _t(),
            o = _e();
          let a = So(e) ? e : V(e.provide),
            d = Nh(e);
          const g = dn(),
            D = 1048575 & g.providerIndexes,
            A = g.directiveStart,
            x = g.providerIndexes >> 20;
          if (So(e) || !e.multi) {
            const z = new cr(d, s, Ia),
              J = Uc(a, t, s ? D : D + x, A);
            -1 === J
              ? (fe(C(g, o), i, a),
                jc(i, e, t.length),
                t.push(a),
                g.directiveStart++,
                g.directiveEnd++,
                s && (g.providerIndexes += 1048576),
                n.push(z),
                o.push(z))
              : ((n[J] = z), (o[J] = z));
          } else {
            const z = Uc(a, t, D + x, A),
              J = Uc(a, t, D, D + x),
              ue = z >= 0 && n[z],
              ie = J >= 0 && n[J];
            if ((s && !ie) || (!s && !ue)) {
              fe(C(g, o), i, a);
              const ve = (function (e, t, n, r, s) {
                const i = new cr(e, n, Ia);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  $g(i, s, r && !n),
                  i
                );
              })(s ? vb : Cb, n.length, s, r, d);
              !s && ie && (n[J].providerFactory = ve),
                jc(i, e, t.length, 0),
                t.push(a),
                g.directiveStart++,
                g.directiveEnd++,
                s && (g.providerIndexes += 1048576),
                n.push(ve),
                o.push(ve);
            } else jc(i, e, z > -1 ? z : J, $g(n[s ? J : z], d, !s && r));
            !s && r && ie && n[J].componentProviders++;
          }
        }
      }
      function jc(e, t, n, r) {
        const s = So(t);
        if (
          s ||
          (function (e) {
            return !!e.useClass;
          })(t)
        ) {
          const o = (t.useClass || t).prototype.ngOnDestroy;
          if (o) {
            const a = e.destroyHooks || (e.destroyHooks = []);
            if (!s && t.multi) {
              const d = a.indexOf(n);
              -1 === d ? a.push(n, [r, o]) : a[d + 1].push(r, o);
            } else a.push(n, o);
          }
        }
      }
      function $g(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Uc(e, t, n, r) {
        for (let s = n; s < r; s++) if (t[s] === e) return s;
        return -1;
      }
      function Cb(e, t, n, r) {
        return $c(this.multi, []);
      }
      function vb(e, t, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const o = this.providerFactory.componentProviders,
            a = ms(n, n[1], this.providerFactory.index, r);
          (i = a.slice(0, o)), $c(s, i);
          for (let d = o; d < a.length; d++) i.push(a[d]);
        } else (i = []), $c(s, i);
        return i;
      }
      function $c(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Hg(e, t = []) {
        return (n) => {
          n.providersResolver = (r, s) =>
            (function (e, t, n) {
              const r = _t();
              if (r.firstCreatePass) {
                const s = ur(e);
                Bc(n, r.data, r.blueprint, s, !0),
                  Bc(t, r.data, r.blueprint, s, !1);
              }
            })(r, s ? s(e) : e, t);
        };
      }
      class Wg {}
      const zg = "ngComponent";
      class Tb {
        resolveComponentFactory(t) {
          throw (function (e) {
            const t = Error(
              `No component factory found for ${R(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t[zg] = e), t;
          })(t);
        }
      }
      let Uo = (() => {
        class e {}
        return (e.NULL = new Tb()), e;
      })();
      function Pu(...e) {}
      function $o(e, t) {
        return new Gs(rt(e, t));
      }
      const Ab = function () {
        return $o(dn(), _e());
      };
      let Gs = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = Ab), e;
      })();
      function Gg(e) {
        return e instanceof Gs ? e.nativeElement : e;
      }
      class xu {}
      let Mb = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Ob()), e;
      })();
      const Ob = function () {
        const e = _e(),
          n = wt(dn().index, e);
        return (function (e) {
          return e[11];
        })(Zt(n) ? n : e);
      };
      let Wc = (() => {
        class e {}
        return (
          (e.??prov = Dt({ token: e, providedIn: "root", factory: () => null })),
          e
        );
      })();
      class Yg {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const Qg = new Yg("12.2.16");
      class qg {
        constructor() {}
        supports(t) {
          return Ta(t);
        }
        create(t) {
          return new Fb(t);
        }
      }
      const Nb = (e, t) => t;
      class Fb {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Nb);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            s = 0,
            i = null;
          for (; n || r; ) {
            const o = !r || (n && n.currentIndex < Jg(r, s, i)) ? n : r,
              a = Jg(o, s, i),
              d = o.currentIndex;
            if (o === r) s--, (r = r._nextRemoved);
            else if (((n = n._next), null == o.previousIndex)) s++;
            else {
              i || (i = []);
              const g = a - s,
                D = d - s;
              if (g != D) {
                for (let x = 0; x < g; x++) {
                  const z = x < i.length ? i[x] : (i[x] = 0),
                    J = z + x;
                  D <= J && J < g && (i[x] = z + 1);
                }
                i[o.previousIndex] = D - g;
              }
            }
            a !== d && t(o, a, d);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Ta(t)))
            throw new Error(
              `Error trying to diff '${R(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let s,
            i,
            o,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++)
              (i = t[a]),
                (o = this._trackByFn(a, i)),
                null !== n && Object.is(n.trackById, o)
                  ? (r && (n = this._verifyReinsertion(n, i, o, a)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, o, a)), (r = !0)),
                (n = n._next);
          } else
            (s = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Io()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (a) => {
                (o = this._trackByFn(s, a)),
                  null !== n && Object.is(n.trackById, o)
                    ? (r && (n = this._verifyReinsertion(n, a, o, s)),
                      Object.is(n.item, a) || this._addIdentityChange(n, a))
                    : ((n = this._mismatch(n, a, o, s)), (r = !0)),
                  (n = n._next),
                  s++;
              }),
              (this.length = s);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, s) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, s))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, s))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, s))
              : (t = this._addAfter(new Lb(n, r), i, s)),
            t
          );
        }
        _verifyReinsertion(t, n, r, s) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, s))
              : t.currentIndex != s &&
                ((t.currentIndex = s), this._addToMoves(t, s)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const s = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === s ? (this._removalsHead = i) : (s._nextRemoved = i),
            null === i ? (this._removalsTail = s) : (i._prevRemoved = s),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const s = null === n ? this._itHead : n._next;
          return (
            (t._next = s),
            (t._prev = n),
            null === s ? (this._itTail = t) : (s._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Zg()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Zg()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Lb {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class kb {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class Zg {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new kb()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const s = this.map.get(t);
          return s ? s.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Jg(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class Xg {
        constructor() {}
        supports(t) {
          return t instanceof Map || cc(t);
        }
        create() {
          return new Vb();
        }
      }
      class Vb {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || cc(t)))
              throw new Error(
                `Error trying to diff '${R(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, s) => {
              if (n && n.key === s)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(s, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const s = this._records.get(t);
            this._maybeAddToChanges(s, n);
            const i = s._prev,
              o = s._next;
            return (
              i && (i._next = o),
              o && (o._prev = i),
              (s._next = null),
              (s._prev = null),
              s
            );
          }
          const r = new Bb(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class Bb {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function em() {
        return new Nu([new qg()]);
      }
      let Nu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const s = r.factories.slice();
              n = n.concat(s);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || em()),
              deps: [[e, new wi(), new ri()]],
            };
          }
          find(n) {
            const r = this.factories.find((s) => s.supports(n));
            if (null != r) return r;
            throw new Error(
              `Cannot find a differ supporting object '${n}' of type '${(function (
                e
              ) {
                return e.name || typeof e;
              })(n)}'`
            );
          }
        }
        return (e.??prov = Dt({ token: e, providedIn: "root", factory: em })), e;
      })();
      function tm() {
        return new Fu([new Xg()]);
      }
      let Fu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const s = r.factories.slice();
              n = n.concat(s);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || tm()),
              deps: [[e, new wi(), new ri()]],
            };
          }
          find(n) {
            const r = this.factories.find((s) => s.supports(n));
            if (r) return r;
            throw new Error(`Cannot find a differ supporting object '${n}'`);
          }
        }
        return (e.??prov = Dt({ token: e, providedIn: "root", factory: tm })), e;
      })();
      function Lu(e, t, n, r, s = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(K(i)), Lt(i)))
            for (let a = 10; a < i.length; a++) {
              const d = i[a],
                g = d[1].firstChild;
              null !== g && Lu(d[1], d, g, r);
            }
          const o = n.type;
          if (8 & o) Lu(e, t, n.child, r);
          else if (32 & o) {
            const a = Tl(n, t);
            let d;
            for (; (d = a()); ) r.push(d);
          } else if (16 & o) {
            const a = Wf(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const d = ya(t[16]);
              Lu(d[1], d, a, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class xa {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Lu(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Lt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Rl(t, r), Li(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Ff(this._lView[1], this._lView);
        }
        onDestroy(t) {
          mh(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Zl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Xl(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, t, n) {
            O(!0);
            try {
              Xl(e, t, n);
            } finally {
              O(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            Ea(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class Ub extends xa {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Th(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            O(!0);
            try {
              Th(e);
            } finally {
              O(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const Hb = function (e) {
        return (function (e, t, n) {
          if (En(e) && !n) {
            const r = wt(e.index, t);
            return new xa(r, r);
          }
          return 47 & e.type ? new xa(t[16], t) : null;
        })(dn(), _e(), 16 == (16 & e));
      };
      let Wb = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Hb), e;
      })();
      const Gb = [new Xg()],
        Qb = new Nu([new qg()]),
        qb = new Fu(Gb),
        Jb = function () {
          return ku(dn(), _e());
        };
      let Na = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Jb), e;
      })();
      const Xb = Na,
        e0 = class extends Xb {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              r = Da(
                this._declarationLView,
                n,
                t,
                16,
                null,
                n.declTNode,
                null,
                null,
                null,
                null
              );
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const i = this._declarationLView[k];
            return (
              null !== i && (r[k] = i.createEmbeddedView(n)),
              Ca(n, r, t),
              new xa(r)
            );
          }
        };
      function ku(e, t) {
        return 4 & e.type ? new e0(t, e, $o(e, t)) : null;
      }
      class $i {}
      class nm {}
      const r0 = function () {
        return im(dn(), _e());
      };
      let Vu = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = r0), e;
      })();
      const i0 = Vu,
        rm = class extends i0 {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return $o(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new oo(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Z(this._hostTNode, this._hostLView);
            if (nu(t)) {
              const n = vi(t, this._hostLView),
                r = Ls(t);
              return new oo(n[1].data[r + 8], n);
            }
            return new oo(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = sm(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            const s = t.createEmbeddedView(n || {});
            return this.insert(s, r), s;
          }
          createComponent(t, n, r, s, i) {
            const o = r || this.parentInjector;
            if (!i && null == t.ngModule && o) {
              const d = o.get($i, null);
              d && (i = d);
            }
            const a = t.create(o, s, void 0, i);
            return this.insert(a.hostView, n), a;
          }
          insert(t, n) {
            const r = t._lView,
              s = r[1];
            if (Lt(r[3])) {
              const D = this.indexOf(t);
              if (-1 !== D) this.detach(D);
              else {
                const A = r[3],
                  x = new rm(A, A[6], A[3]);
                x.detach(x.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              o = this._lContainer;
            !(function (e, t, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[s]), iu(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const o = t[17];
              null !== o &&
                n !== o &&
                (function (e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(o, t);
              const a = t[k];
              null !== a && a.insertView(e), (t[2] |= 128);
            })(s, r, o, i);
            const a = xl(i, o),
              d = r[11],
              g = hu(d, o[7]);
            return (
              null !== g &&
                (function (e, t, n, r, s, i) {
                  (r[0] = s), (r[6] = t), Ea(e, r, n, 1, s, i);
                })(s, o[6], d, r, g, a),
              t.attachToViewContainerRef(),
              iu(Kc(o), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = sm(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Rl(this._lContainer, n);
            r && (Li(Kc(this._lContainer), n), Ff(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Rl(this._lContainer, n);
            return r && null != Li(Kc(this._lContainer), n) ? new xa(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function sm(e) {
        return e[8];
      }
      function Kc(e) {
        return e[8] || (e[8] = []);
      }
      function im(e, t) {
        let n;
        const r = t[e.index];
        if (Lt(r)) n = r;
        else {
          let s;
          if (8 & e.type) s = K(r);
          else {
            const i = t[11];
            s = i.createComment("");
            const o = rt(e, t);
            Bi(
              i,
              hu(i, o),
              s,
              (function (e, t) {
                return m(e) ? e.nextSibling(t) : t.nextSibling;
              })(i, o),
              !1
            );
          }
          (t[e.index] = n = wh(r, t, s, e)), Du(t, n);
        }
        return new rm(n, e, t);
      }
      const zo = {};
      class Tm extends Uo {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = rn(t);
          return new Im(n, this.ngModule);
        }
      }
      function Sm(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const tw = new Dn("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => If,
      });
      class Im extends Wg {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(GE).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Sm(this.componentDef.inputs);
        }
        get outputs() {
          return Sm(this.componentDef.outputs);
        }
        create(t, n, r, s) {
          const i = (s = s || this.ngModule)
              ? (function (e, t) {
                  return {
                    get: (n, r, s) => {
                      const i = e.get(n, zo, s);
                      return i !== zo || r === zo ? i : t.get(n, r, s);
                    },
                  };
                })(t, s.injector)
              : t,
            o = i.get(xu, y),
            a = i.get(Wc, null),
            d = o.createRenderer(null, this.componentDef),
            g = this.componentDef.selectors[0][0] || "div",
            D = r
              ? (function (e, t, n) {
                  if (m(e)) return e.selectRootElement(t, n === Se.ShadowDom);
                  let r = "string" == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ""), r;
                })(d, r, this.componentDef.encapsulation)
              : Ml(
                  o.createRenderer(null, this.componentDef),
                  g,
                  (function (e) {
                    const t = e.toLowerCase();
                    return "svg" === t
                      ? Zr
                      : "math" === t
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(g)
                ),
            A = this.componentDef.onPush ? 576 : 528,
            x = (function (e, t) {
              return {
                components: [],
                scheduler: e || If,
                clean: OD,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            z = Eu(0, null, null, 1, 0, null, null, null, null, null),
            J = Da(null, z, x, A, null, null, o, d, a, i);
          let ue, ie;
          Hr(J);
          try {
            const ve = (function (e, t, n, r, s, i) {
              const o = n[1];
              n[20] = e;
              const d = Co(o, 20, 2, "#host", null),
                g = (d.mergedAttrs = t.hostAttrs);
              null !== g &&
                (Cu(d, g, !0),
                null !== e &&
                  (eo(s, e, g),
                  null !== d.classes && Fl(s, e, d.classes),
                  null !== d.styles && Gf(s, e, d.styles)));
              const D = r.createRenderer(e, t),
                A = Da(
                  n,
                  hh(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  d,
                  r,
                  D,
                  i || null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (fe(C(d, n), o, t.type), Ch(o, d), vh(d, n.length, 1)),
                Du(n, A),
                (n[20] = A)
              );
            })(D, this.componentDef, J, o, d);
            if (D)
              if (r) eo(d, D, ["ng-version", Qg.full]);
              else {
                const { attrs: pe, classes: je } = (function (e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!ys(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                pe && eo(d, D, pe),
                  je && je.length > 0 && Fl(d, D, je.join(" "));
              }
            if (((ie = xt(z, 20)), void 0 !== n)) {
              const pe = (ie.projection = []);
              for (let je = 0; je < this.ngContentSelectors.length; je++) {
                const nt = n[je];
                pe.push(null != nt ? Array.from(nt) : null);
              }
            }
            (ue = (function (e, t, n, r, s) {
              const i = n[1],
                o = (function (e, t, n) {
                  const r = dn();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    bh(e, r, t, vo(e, t, 1, null), n));
                  const s = ms(t, e, r.directiveStart, r);
                  Er(s, t);
                  const i = rt(r, t);
                  return i && Er(i, t), s;
                })(i, n, t);
              if (
                (r.components.push(o),
                (e[8] = o),
                s && s.forEach((d) => d(o, t)),
                t.contentQueries)
              ) {
                const d = dn();
                t.contentQueries(1, o, d.directiveStart);
              }
              const a = dn();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (Xr(a.index),
                  Eh(n[1], a, 0, a.directiveStart, a.directiveEnd, t),
                  Dh(t, o)),
                o
              );
            })(ve, this.componentDef, J, x, [rC])),
              Ca(z, J, null);
          } finally {
            _r();
          }
          return new sw(this.componentType, ue, $o(ie, J), J, ie);
        }
      }
      class sw extends class {} {
        constructor(t, n, r, s, i) {
          super(),
            (this.location = r),
            (this._rootLView = s),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Ub(s)),
            (this.componentType = t);
        }
        get injector() {
          return new oo(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const Go = new Map();
      class aw extends $i {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Tm(this));
          const r = sn(t),
            s = t[ir] || null;
          s && Lc(s),
            (this._bootstrapComponents = Us(r.bootstrap)),
            (this._r3Injector = xh(
              t,
              n,
              [
                { provide: $i, useValue: this },
                { provide: Uo, useValue: this.componentFactoryResolver },
              ],
              R(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = hn.THROW_IF_NOT_FOUND, r = Ce.Default) {
          return t === hn || t === $i || t === wo
            ? this
            : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class sd extends nm {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== sn(t) &&
              (function (e) {
                const t = new Set();
                !(function n(r) {
                  const s = sn(r, !0),
                    i = s.id;
                  null !== i &&
                    ((function (e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${R(
                            t
                          )} vs ${R(t.name)}`
                        );
                    })(i, Go.get(i), r),
                    Go.set(i, r));
                  const o = Us(s.imports);
                  for (const a of o) t.has(a) || (t.add(a), n(a));
                })(e);
              })(t);
        }
        create(t) {
          return new aw(this.moduleType, t);
        }
      }
      function Rm(e, t, n) {
        const r = $() + e,
          s = _e();
        return s[r] === it
          ? Ws(s, r, n ? t.call(n) : t())
          : (function (e, t) {
              return e[t];
            })(s, r);
      }
      function Om(e, t, n, r) {
        return Pm(_e(), $(), e, t, n, r);
      }
      function $a(e, t) {
        const n = e[t];
        return n === it ? void 0 : n;
      }
      function Pm(e, t, n, r, s, i) {
        const o = t + n;
        return Dr(e, o, s)
          ? Ws(e, o + 1, i ? r.call(i, s) : r(s))
          : $a(e, o + 1);
      }
      function xm(e, t, n, r, s, i, o) {
        const a = t + n;
        return (function (e, t, n, r) {
          const s = Dr(e, t, n);
          return Dr(e, t + 1, r) || s;
        })(e, a, s, i)
          ? Ws(e, a + 2, o ? r.call(o, s, i) : r(s, i))
          : $a(e, a + 2);
      }
      function km(e, t) {
        const n = _t();
        let r;
        const s = e + 20;
        n.firstCreatePass
          ? ((r = (function (e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
              throw new ae("302", `The pipe '${e}' could not be found!`);
            })(t, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = Qr(r.type)),
          o = _n(Ia);
        try {
          const a = so(!1),
            d = i();
          return (
            so(a),
            (function (e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, _e(), s, d),
            d
          );
        } finally {
          _n(o);
        }
      }
      function Vm(e, t, n) {
        const r = e + 20,
          s = _e(),
          i = ut(s, r);
        return Wa(
          s,
          Ha(s, r) ? Pm(s, $(), t, i.transform, n, i) : i.transform(n)
        );
      }
      function Bm(e, t, n, r) {
        const s = e + 20,
          i = _e(),
          o = ut(i, s);
        return Wa(
          i,
          Ha(i, s) ? xm(i, $(), t, o.transform, n, r, o) : o.transform(n, r)
        );
      }
      function Ha(e, t) {
        return e[1].data[t].pure;
      }
      function Wa(e, t) {
        return (
          Cs.isWrapped(t) &&
            ((t = Cs.unwrap(t)), (e[ze.lFrame.bindingIndex] = it)),
          t
        );
      }
      function id(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Ys = class extends E.xQ {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var s, i, o;
          let a = t,
            d = n || (() => null),
            g = r;
          if (t && "object" == typeof t) {
            const A = t;
            (a = null === (s = A.next) || void 0 === s ? void 0 : s.bind(A)),
              (d = null === (i = A.error) || void 0 === i ? void 0 : i.bind(A)),
              (g =
                null === (o = A.complete) || void 0 === o ? void 0 : o.bind(A));
          }
          this.__isAsync && ((d = id(d)), a && (a = id(a)), g && (g = id(g)));
          const D = super.subscribe({ next: a, error: d, complete: g });
          return t instanceof v.w && t.add(D), D;
        }
      };
      function Cw() {
        return this._results[Io()]();
      }
      class Ka {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Io(),
            r = Ka.prototype;
          r[n] || (r[n] = Cw);
        }
        get changes() {
          return this._changes || (this._changes = new Ys());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const s = as(t);
          (this._changesDetected = !(function (e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let s = e[r],
                i = t[r];
              if ((n && ((s = n(s)), (i = n(i))), i !== s)) return !1;
            }
            return !0;
          })(r._results, s, n)) &&
            ((r._results = s),
            (r.length = s.length),
            (r.last = s[this.length - 1]),
            (r.first = s[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      class od {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new od(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class ad {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              s = [];
            for (let i = 0; i < r; i++) {
              const o = n.getByIndex(i);
              s.push(this.queries[o.indexInDeclarationView].clone());
            }
            return new ad(s);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Ym(t, n).matches && this.queries[n].setDirty();
        }
      }
      class jm {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class ud {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const s = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, s);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new ud(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class ld {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new ld(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let s = 0; s < r.length; s++) {
              const i = r[s];
              this.matchTNodeWithReadOption(t, n, ww(n, i)),
                this.matchTNodeWithReadOption(t, n, Mr(n, t, i, !1, !1));
            }
          else
            r === Na
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Mr(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const s = this.metadata.read;
            if (null !== s)
              if (s === Gs || s === Vu || (s === Na && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Mr(n, t, s, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function ww(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function Sw(e, t, n, r) {
        return -1 === n
          ? (function (e, t) {
              return 11 & e.type ? $o(e, t) : 4 & e.type ? ku(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function (e, t, n) {
              return n === Gs
                ? $o(t, e)
                : n === Na
                ? ku(t, e)
                : n === Vu
                ? im(t, e)
                : void 0;
            })(e, t, r)
          : ms(e, e[1], n, t);
      }
      function Um(e, t, n, r) {
        const s = t[k].queries[r];
        if (null === s.matches) {
          const i = e.data,
            o = n.matches,
            a = [];
          for (let d = 0; d < o.length; d += 2) {
            const g = o[d];
            a.push(g < 0 ? null : Sw(t, i[g], o[d + 1], n.metadata.read));
          }
          s.matches = a;
        }
        return s.matches;
      }
      function cd(e, t, n, r) {
        const s = e.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = Um(e, t, s, n);
          for (let a = 0; a < i.length; a += 2) {
            const d = i[a];
            if (d > 0) r.push(o[a / 2]);
            else {
              const g = i[a + 1],
                D = t[-d];
              for (let A = 10; A < D.length; A++) {
                const x = D[A];
                x[17] === x[3] && cd(x[1], x, g, r);
              }
              if (null !== D[9]) {
                const A = D[9];
                for (let x = 0; x < A.length; x++) {
                  const z = A[x];
                  cd(z[1], z, g, r);
                }
              }
            }
          }
        }
        return r;
      }
      function $m(e) {
        const t = _e(),
          n = _t(),
          r = Jt();
        Xt(r + 1);
        const s = Ym(n, r);
        if (e.dirty && Ut(t) === (2 == (2 & s.metadata.flags))) {
          if (null === s.matches) e.reset([]);
          else {
            const i = s.crossesNgTemplate ? cd(n, t, r, []) : Um(n, t, s, r);
            e.reset(i, Gg), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Hm(e, t, n) {
        const r = _t();
        r.firstCreatePass &&
          (Gm(r, new jm(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          zm(r, _e(), t);
      }
      function Wm(e, t, n, r) {
        const s = _t();
        if (s.firstCreatePass) {
          const i = dn();
          Gm(s, new jm(t, n, r), i.index),
            (function (e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(s, e),
            2 == (2 & n) && (s.staticContentQueries = !0);
        }
        zm(s, _e(), n);
      }
      function Km() {
        return (e = _e()), (t = Jt()), e[k].queries[t].queryList;
        var e, t;
      }
      function zm(e, t, n) {
        const r = new Ka(4 == (4 & n));
        mh(e, t, r, r.destroy),
          null === t[k] && (t[k] = new ad()),
          t[k].queries.push(new od(r));
      }
      function Gm(e, t, n) {
        null === e.queries && (e.queries = new ud()),
          e.queries.track(new ld(t, n));
      }
      function Ym(e, t) {
        return e.queries.getByIndex(t);
      }
      const md = new Dn("Application Initializer");
      let Qo = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Pu),
              (this.reject = Pu),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, s) => {
                (this.resolve = r), (this.reject = s);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let s = 0; s < this.appInits.length; s++) {
                const i = this.appInits[s]();
                if (vc(i)) n.push(i);
                else if (bc(i)) {
                  const o = new Promise((a, d) => {
                    i.subscribe({ complete: a, error: d });
                  });
                  n.push(o);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((s) => {
                this.reject(s);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)(Mn(md, 8));
          }),
          (e.??prov = Dt({ token: e, factory: e.??fac })),
          e
        );
      })();
      const f_ = new Dn("AppId"),
        rT = {
          provide: f_,
          useFactory: function () {
            return `${_d()}${_d()}${_d()}`;
          },
          deps: [],
        };
      function _d() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const h_ = new Dn("Platform Initializer"),
        p_ = new Dn("Platform ID"),
        g_ = new Dn("appBootstrapListener");
      let m_ = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)();
          }),
          (e.??prov = Dt({ token: e, factory: e.??fac })),
          e
        );
      })();
      const Ku = new Dn("LocaleId"),
        __ = new Dn("DefaultCurrencyCode");
      class iT {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      const yd = function (e) {
          return new sd(e);
        },
        oT = yd,
        aT = function (e) {
          return Promise.resolve(yd(e));
        },
        y_ = function (e) {
          const t = yd(e),
            r = Us(sn(e).declarations).reduce((s, i) => {
              const o = rn(i);
              return o && s.push(new Im(o)), s;
            }, []);
          return new iT(t, r);
        },
        uT = y_,
        lT = function (e) {
          return Promise.resolve(y_(e));
        };
      let Ga = (() => {
        class e {
          constructor() {
            (this.compileModuleSync = oT),
              (this.compileModuleAsync = aT),
              (this.compileModuleAndAllComponentsSync = uT),
              (this.compileModuleAndAllComponentsAsync = lT);
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)();
          }),
          (e.??prov = Dt({ token: e, factory: e.??fac })),
          e
        );
      })();
      const fT = (() => Promise.resolve(0))();
      function Ed(e) {
        "undefined" == typeof Zone
          ? fT.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class ns {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ys(!1)),
            (this.onMicrotaskEmpty = new Ys(!1)),
            (this.onStable = new Ys(!1)),
            (this.onError = new Ys(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const s = this;
          (s._nesting = 0),
            (s._outer = s._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
            (s.shouldCoalesceEventChangeDetection = !r && n),
            (s.shouldCoalesceRunChangeDetection = r),
            (s.lastRequestAnimationFrameId = -1),
            (s.nativeRequestAnimationFrame = (function () {
              let e = Rt.requestAnimationFrame,
                t = Rt.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const t = () => {
                !(function (e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Rt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Cd(e),
                                (e.isCheckStableRunning = !0),
                                Dd(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Cd(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return E_(e), n.invokeTask(s, i, o, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      D_(e);
                  }
                },
                onInvoke: (n, r, s, i, o, a, d) => {
                  try {
                    return E_(e), n.invoke(s, i, o, a, d);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), D_(e);
                  }
                },
                onHasTask: (n, r, s, i) => {
                  n.hasTask(s, i),
                    r === s &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          Cd(e),
                          Dd(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, s, i) => (
                  n.handleError(s, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(s);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!ns.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (ns.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, s) {
          const i = this._inner,
            o = i.scheduleEventTask("NgZoneEvent: " + s, t, pT, Pu, Pu);
          try {
            return i.runTask(o, n, r);
          } finally {
            i.cancelTask(o);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const pT = {};
      function Dd(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Cd(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function E_(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function D_(e) {
        e._nesting--, Dd(e);
      }
      class _T {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ys()),
            (this.onMicrotaskEmpty = new Ys()),
            (this.onStable = new Ys()),
            (this.onError = new Ys());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, s) {
          return t.apply(n, r);
        }
      }
      let C_ = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      ns.assertNotInAngularZone(),
                        Ed(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Ed(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, s) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (o) => o.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: s });
            }
            whenStable(n, r, s) {
              if (s && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, s), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, r, s) {
              return [];
            }
          }
          return (
            (e.??fac = function (n) {
              return new (n || e)(Mn(ns));
            }),
            (e.??prov = Dt({ token: e, factory: e.??fac })),
            e
          );
        })(),
        v_ = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), vd.addToWindow(this);
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return vd.findTestabilityInTree(this, n, r);
            }
          }
          return (
            (e.??fac = function (n) {
              return new (n || e)();
            }),
            (e.??prov = Dt({ token: e, factory: e.??fac })),
            e
          );
        })();
      class yT {
        addToWindow(t) {}
        findTestabilityInTree(t, n, r) {
          return null;
        }
      }
      function ET(e) {
        vd = e;
      }
      let vd = new yT(),
        b_ = !0,
        w_ = !1;
      function bd() {
        return (w_ = !0), b_;
      }
      function DT() {
        if (w_)
          throw new Error("Cannot enable prod mode after platform setup.");
        b_ = !1;
      }
      let Ss;
      const T_ = new Dn("AllowMultipleToken");
      class IT {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function S_(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new Dn(r);
        return (i = []) => {
          let o = I_();
          if (!o || o.injector.get(T_, !1))
            if (e) e(n.concat(i).concat({ provide: s, useValue: !0 }));
            else {
              const a = n
                .concat(i)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: va, useValue: "platform" }
                );
              !(function (e) {
                if (Ss && !Ss.destroyed && !Ss.injector.get(T_, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                Ss = e.get(A_);
                const t = e.get(h_, null);
                t && t.forEach((n) => n());
              })(hn.create({ providers: a, name: r }));
            }
          return (function (e) {
            const t = I_();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(s);
        };
      }
      function I_() {
        return Ss && !Ss.destroyed ? Ss : null;
      }
      let A_ = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const a = (function (e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new _T()
                      : ("zone.js" === e ? void 0 : e) ||
                        new ns({
                          enableLongStackTrace: bd(),
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(r ? r.ngZone : void 0, {
                ngZoneEventCoalescing: (r && r.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (r && r.ngZoneRunCoalescing) || !1,
              }),
              d = [{ provide: ns, useValue: a }];
            return a.run(() => {
              const g = hn.create({
                  providers: d,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                D = n.create(g),
                A = D.injector.get(yo, null);
              if (!A)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                a.runOutsideAngular(() => {
                  const x = a.onError.subscribe({
                    next: (z) => {
                      A.handleError(z);
                    },
                  });
                  D.onDestroy(() => {
                    wd(this._modules, D), x.unsubscribe();
                  });
                }),
                (function (e, t, n) {
                  try {
                    const r = n();
                    return vc(r)
                      ? r.catch((s) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(s)), s)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(A, a, () => {
                  const x = D.injector.get(Qo);
                  return (
                    x.runInitializers(),
                    x.donePromise.then(
                      () => (
                        Lc(D.injector.get(Ku, Iu) || Iu),
                        this._moduleDoBootstrap(D),
                        D
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const s = M_({}, r);
            return (function (e, t, n) {
              const r = new sd(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, s));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(Ya);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((s) => r.bootstrap(s));
            else {
              if (!n.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${R(
                    n.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((n) => n.destroy()),
              this._destroyListeners.forEach((n) => n()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)(Mn(hn));
          }),
          (e.??prov = Dt({ token: e, factory: e.??fac })),
          e
        );
      })();
      function M_(e, t) {
        return Array.isArray(t)
          ? t.reduce(M_, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let Ya = (() => {
        class e {
          constructor(n, r, s, i, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = s),
              (this._componentFactoryResolver = i),
              (this._initStatus = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const a = new Y.y((g) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    g.next(this._stable), g.complete();
                  });
              }),
              d = new Y.y((g) => {
                let D;
                this._zone.runOutsideAngular(() => {
                  D = this._zone.onStable.subscribe(() => {
                    ns.assertNotInAngularZone(),
                      Ed(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), g.next(!0));
                      });
                  });
                });
                const A = this._zone.onUnstable.subscribe(() => {
                  ns.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        g.next(!1);
                      }));
                });
                return () => {
                  D.unsubscribe(), A.unsubscribe();
                };
              });
            this.isStable = (0, Q.T)(a, d.pipe((0, B.B)()));
          }
          bootstrap(n, r) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let s;
            (s =
              n instanceof Wg
                ? n
                : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const i = (function (e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get($i),
              a = s.create(hn.NULL, [], r || s.selector, i),
              d = a.location.nativeElement,
              g = a.injector.get(C_, null),
              D = g && a.injector.get(v_);
            return (
              g && D && D.registerApplication(d, g),
              a.onDestroy(() => {
                this.detachView(a.hostView),
                  wd(this.components, a),
                  D && D.unregisterApplication(d);
              }),
              this._loadComponent(a),
              a
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            wd(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(g_, [])
                .concat(this._bootstrapListeners)
                .forEach((s) => s(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)(Mn(ns), Mn(hn), Mn(yo), Mn(Uo), Mn(Qo));
          }),
          (e.??prov = Dt({ token: e, factory: e.??fac })),
          e
        );
      })();
      function wd(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class xT {}
      class FT {}
      const LT = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let kT = (() => {
        class e {
          constructor(n, r) {
            (this._compiler = n), (this._config = r || LT);
          }
          load(n) {
            return this.loadAndCompile(n);
          }
          loadAndCompile(n) {
            let [r, s] = n.split("#");
            return (
              void 0 === s && (s = "default"),
              b(8255)(r)
                .then((i) => i[s])
                .then((i) => x_(i, r, s))
                .then((i) => this._compiler.compileModuleAsync(i))
            );
          }
          loadFactory(n) {
            let [r, s] = n.split("#"),
              i = "NgFactory";
            return (
              void 0 === s && ((s = "default"), (i = "")),
              b(8255)(
                this._config.factoryPathPrefix +
                  r +
                  this._config.factoryPathSuffix
              )
                .then((o) => o[s + i])
                .then((o) => x_(o, r, s))
            );
          }
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)(Mn(Ga), Mn(FT, 8));
          }),
          (e.??prov = Dt({ token: e, factory: e.??fac })),
          e
        );
      })();
      function x_(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      const KT = function (e) {
          return null;
        },
        GT = S_(null, "core", [
          { provide: p_, useValue: "unknown" },
          { provide: A_, deps: [hn] },
          { provide: v_, deps: [] },
          { provide: m_, deps: [] },
        ]),
        JT = [
          { provide: Ya, useClass: Ya, deps: [ns, hn, yo, Uo, Qo] },
          {
            provide: tw,
            deps: [ns],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (n) {
                  t.push(n);
                }
              );
            },
          },
          { provide: Qo, useClass: Qo, deps: [[new ri(), md]] },
          { provide: Ga, useClass: Ga, deps: [] },
          rT,
          {
            provide: Nu,
            useFactory: function () {
              return Qb;
            },
            deps: [],
          },
          {
            provide: Fu,
            useFactory: function () {
              return qb;
            },
            deps: [],
          },
          {
            provide: Ku,
            useFactory: function (e) {
              return (
                Lc(
                  (e =
                    e ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    Iu)
                ),
                e
              );
            },
            deps: [[new po(Ku), new ri(), new wi()]],
          },
          { provide: __, useValue: "USD" },
        ];
      let eS = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.??fac = function (n) {
            return new (n || e)(Mn(Ya));
          }),
          (e.??mod = Sr({ type: e })),
          (e.??inj = kt({ providers: JT })),
          e
        );
      })();
    },
    6237: (X, U, b) => {
      "use strict";
      b.d(U, { Qb: () => _t, PW: () => ti });
      var E = b(7716),
        v = b(9075),
        Y = b(7238);
      function Q() {
        return "undefined" != typeof window && void 0 !== window.document;
      }
      function B() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function P(w) {
        switch (w.length) {
          case 0:
            return new Y.ZN();
          case 1:
            return w[0];
          default:
            return new Y.ZE(w);
        }
      }
      function L(w, u, l, p, T = {}, O = {}) {
        const $ = [],
          G = [];
        let se = -1,
          de = null;
        if (
          (p.forEach((be) => {
            const Fe = be.offset,
              tt = Fe == se,
              Et = (tt && de) || {};
            Object.keys(be).forEach(($e) => {
              let Xe = $e,
                ct = be[$e];
              if ("offset" !== $e)
                switch (((Xe = u.normalizePropertyName(Xe, $)), ct)) {
                  case Y.k1:
                    ct = T[$e];
                    break;
                  case Y.l3:
                    ct = O[$e];
                    break;
                  default:
                    ct = u.normalizeStyleValue($e, Xe, ct, $);
                }
              Et[Xe] = ct;
            }),
              tt || G.push(Et),
              (de = Et),
              (se = Fe);
          }),
          $.length)
        ) {
          const be = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${be}${$.join(be)}`
          );
        }
        return G;
      }
      function R(w, u, l, p) {
        switch (u) {
          case "start":
            w.onStart(() => p(l && N(l, "start", w)));
            break;
          case "done":
            w.onDone(() => p(l && N(l, "done", w)));
            break;
          case "destroy":
            w.onDestroy(() => p(l && N(l, "destroy", w)));
        }
      }
      function N(w, u, l) {
        const p = l.totalTime,
          O = F(
            w.element,
            w.triggerName,
            w.fromState,
            w.toState,
            u || w.phaseName,
            null == p ? w.totalTime : p,
            !!l.disabled
          ),
          $ = w._data;
        return null != $ && (O._data = $), O;
      }
      function F(w, u, l, p, T = "", O = 0, $) {
        return {
          element: w,
          triggerName: u,
          fromState: l,
          toState: p,
          phaseName: T,
          totalTime: O,
          disabled: !!$,
        };
      }
      function W(w, u, l) {
        let p;
        return (
          w instanceof Map
            ? ((p = w.get(u)), p || w.set(u, (p = l)))
            : ((p = w[u]), p || (p = w[u] = l)),
          p
        );
      }
      function V(w) {
        const u = w.indexOf(":");
        return [w.substring(1, u), w.substr(u + 1)];
      }
      let te = (w, u) => !1,
        ae = (w, u) => !1,
        Re = (w, u, l) => [];
      const we = B();
      (we || "undefined" != typeof Element) &&
        ((te = Q()
          ? (w, u) => {
              for (; u && u !== document.documentElement; ) {
                if (u === w) return !0;
                u = u.parentNode || u.host;
              }
              return !1;
            }
          : (w, u) => w.contains(u)),
        (ae = (() => {
          if (we || Element.prototype.matches) return (w, u) => w.matches(u);
          {
            const w = Element.prototype,
              u =
                w.matchesSelector ||
                w.mozMatchesSelector ||
                w.msMatchesSelector ||
                w.oMatchesSelector ||
                w.webkitMatchesSelector;
            return u ? (l, p) => u.apply(l, [p]) : ae;
          }
        })()),
        (Re = (w, u, l) => {
          let p = [];
          if (l) {
            const T = w.querySelectorAll(u);
            for (let O = 0; O < T.length; O++) p.push(T[O]);
          } else {
            const T = w.querySelector(u);
            T && p.push(T);
          }
          return p;
        }));
      let Ne = null,
        Ee = !1;
      function et(w) {
        Ne ||
          ((Ne = ("undefined" != typeof document ? document.body : null) || {}),
          (Ee = !!Ne.style && "WebkitAppearance" in Ne.style));
        let u = !0;
        return (
          Ne.style &&
            !(function (w) {
              return "ebkit" == w.substring(1, 6);
            })(w) &&
            ((u = w in Ne.style),
            !u &&
              Ee &&
              (u =
                "Webkit" + w.charAt(0).toUpperCase() + w.substr(1) in
                Ne.style)),
          u
        );
      }
      const on = ae,
        bn = te,
        Nt = Re;
      function at(w) {
        const u = {};
        return (
          Object.keys(w).forEach((l) => {
            const p = l.replace(/([a-z])([A-Z])/g, "$1-$2");
            u[p] = w[l];
          }),
          u
        );
      }
      let dt = (() => {
          class w {
            validateStyleProperty(l) {
              return et(l);
            }
            matchesElement(l, p) {
              return on(l, p);
            }
            containsElement(l, p) {
              return bn(l, p);
            }
            query(l, p, T) {
              return Nt(l, p, T);
            }
            computeStyle(l, p, T) {
              return T || "";
            }
            animate(l, p, T, O, $, G = [], se) {
              return new Y.ZN(T, O);
            }
          }
          return (
            (w.??fac = function (l) {
              return new (l || w)();
            }),
            (w.??prov = E.Yz7({ token: w, factory: w.??fac })),
            w
          );
        })(),
        Ue = (() => {
          class w {}
          return (w.NOOP = new dt()), w;
        })();
      const xr = "ng-enter",
        tr = "ng-leave",
        ft = "ng-trigger",
        nr = ".ng-trigger",
        rs = "ng-animating",
        kn = ".ng-animating";
      function Dt(w) {
        if ("number" == typeof w) return w;
        const u = w.match(/^(-?[\.\d]+)(m?s)/);
        return !u || u.length < 2 ? 0 : Rn(parseFloat(u[1]), u[2]);
      }
      function Rn(w, u) {
        return "s" === u ? 1e3 * w : w;
      }
      function kt(w, u, l) {
        return w.hasOwnProperty("duration")
          ? w
          : (function (w, u, l) {
              let T,
                O = 0,
                $ = "";
              if ("string" == typeof w) {
                const G = w.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === G)
                  return (
                    u.push(`The provided timing value "${w}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                T = Rn(parseFloat(G[1]), G[2]);
                const se = G[3];
                null != se && (O = Rn(parseFloat(se), G[4]));
                const de = G[5];
                de && ($ = de);
              } else T = w;
              if (!l) {
                let G = !1,
                  se = u.length;
                T < 0 &&
                  (u.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (G = !0)),
                  O < 0 &&
                    (u.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (G = !0)),
                  G &&
                    u.splice(
                      se,
                      0,
                      `The provided timing value "${w}" is invalid.`
                    );
              }
              return { duration: T, delay: O, easing: $ };
            })(w, u, l);
      }
      function On(w, u = {}) {
        return (
          Object.keys(w).forEach((l) => {
            u[l] = w[l];
          }),
          u
        );
      }
      function Pn(w, u, l = {}) {
        if (u) for (let p in w) l[p] = w[p];
        else On(w, l);
        return l;
      }
      function br(w, u, l) {
        return l ? u + ":" + l + ";" : "";
      }
      function rr(w) {
        let u = "";
        for (let l = 0; l < w.style.length; l++) {
          const p = w.style.item(l);
          u += br(0, p, w.style.getPropertyValue(p));
        }
        for (const l in w.style)
          w.style.hasOwnProperty(l) &&
            !l.startsWith("_") &&
            (u += br(0, Yt(l), w.style[l]));
        w.setAttribute("style", u);
      }
      function tn(w, u, l) {
        w.style &&
          (Object.keys(u).forEach((p) => {
            const T = Bn(p);
            l && !l.hasOwnProperty(p) && (l[p] = w.style[T]),
              (w.style[T] = u[p]);
          }),
          B() && rr(w));
      }
      function zn(w, u) {
        w.style &&
          (Object.keys(u).forEach((l) => {
            const p = Bn(l);
            w.style[p] = "";
          }),
          B() && rr(w));
      }
      function Vn(w) {
        return Array.isArray(w) ? (1 == w.length ? w[0] : (0, Y.vP)(w)) : w;
      }
      const Vt = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function wn(w) {
        let u = [];
        if ("string" == typeof w) {
          let l;
          for (; (l = Vt.exec(w)); ) u.push(l[1]);
          Vt.lastIndex = 0;
        }
        return u;
      }
      function _n(w, u, l) {
        const p = w.toString(),
          T = p.replace(Vt, (O, $) => {
            let G = u[$];
            return (
              u.hasOwnProperty($) ||
                (l.push(`Please provide a value for the animation param ${$}`),
                (G = "")),
              G.toString()
            );
          });
        return T == p ? w : T;
      }
      function sr(w) {
        const u = [];
        let l = w.next();
        for (; !l.done; ) u.push(l.value), (l = w.next());
        return u;
      }
      const Gr = /-+([a-z0-9])/g;
      function Bn(w) {
        return w.replace(Gr, (...u) => u[1].toUpperCase());
      }
      function Yt(w) {
        return w.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function xn(w, u) {
        return 0 === w || 0 === u;
      }
      function Pt(w, u, l) {
        const p = Object.keys(l);
        if (p.length && u.length) {
          let O = u[0],
            $ = [];
          if (
            (p.forEach((G) => {
              O.hasOwnProperty(G) || $.push(G), (O[G] = l[G]);
            }),
            $.length)
          )
            for (var T = 1; T < u.length; T++) {
              let G = u[T];
              $.forEach(function (se) {
                G[se] = He(w, se);
              });
            }
        }
        return u;
      }
      function Se(w, u, l) {
        switch (u.type) {
          case 7:
            return w.visitTrigger(u, l);
          case 0:
            return w.visitState(u, l);
          case 1:
            return w.visitTransition(u, l);
          case 2:
            return w.visitSequence(u, l);
          case 3:
            return w.visitGroup(u, l);
          case 4:
            return w.visitAnimate(u, l);
          case 5:
            return w.visitKeyframes(u, l);
          case 6:
            return w.visitStyle(u, l);
          case 8:
            return w.visitReference(u, l);
          case 9:
            return w.visitAnimateChild(u, l);
          case 10:
            return w.visitAnimateRef(u, l);
          case 11:
            return w.visitQuery(u, l);
          case 12:
            return w.visitStagger(u, l);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${u.type}`
            );
        }
      }
      function He(w, u) {
        return window.getComputedStyle(w)[u];
      }
      function Ht(w, u) {
        const l = [];
        return (
          "string" == typeof w
            ? w.split(/\s*,\s*/).forEach((p) =>
                (function (w, u, l) {
                  if (":" == w[0]) {
                    const se = (function (w, u) {
                      switch (w) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (l, p) => parseFloat(p) > parseFloat(l);
                        case ":decrement":
                          return (l, p) => parseFloat(p) < parseFloat(l);
                        default:
                          return (
                            u.push(
                              `The transition alias value "${w}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(w, l);
                    if ("function" == typeof se) return void u.push(se);
                    w = se;
                  }
                  const p = w.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == p || p.length < 4)
                    return (
                      l.push(
                        `The provided transition expression "${w}" is not supported`
                      ),
                      u
                    );
                  const T = p[1],
                    O = p[2],
                    $ = p[3];
                  u.push(Ct(T, $));
                  "<" == O[0] && !("*" == T && "*" == $) && u.push(Ct($, T));
                })(p, l, u)
              )
            : l.push(w),
          l
        );
      }
      const pn = new Set(["true", "1"]),
        Lr = new Set(["false", "0"]);
      function Ct(w, u) {
        const l = pn.has(w) || Lr.has(w),
          p = pn.has(u) || Lr.has(u);
        return (T, O) => {
          let $ = "*" == w || w == T,
            G = "*" == u || u == O;
          return (
            !$ && l && "boolean" == typeof T && ($ = T ? pn.has(w) : Lr.has(w)),
            !G && p && "boolean" == typeof O && (G = O ? pn.has(u) : Lr.has(u)),
            $ && G
          );
        };
      }
      const lt = new RegExp("s*:selfs*,?", "g");
      function Tr(w, u, l) {
        return new ss(w).build(u, l);
      }
      class ss {
        constructor(u) {
          this._driver = u;
        }
        build(u, l) {
          const p = new qe(l);
          return this._resetContextStyleTimingState(p), Se(this, Vn(u), p);
        }
        _resetContextStyleTimingState(u) {
          (u.currentQuerySelector = ""),
            (u.collectedStyles = {}),
            (u.collectedStyles[""] = {}),
            (u.currentTime = 0);
        }
        visitTrigger(u, l) {
          let p = (l.queryCount = 0),
            T = (l.depCount = 0);
          const O = [],
            $ = [];
          return (
            "@" == u.name.charAt(0) &&
              l.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            u.definitions.forEach((G) => {
              if ((this._resetContextStyleTimingState(l), 0 == G.type)) {
                const se = G,
                  de = se.name;
                de
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((be) => {
                    (se.name = be), O.push(this.visitState(se, l));
                  }),
                  (se.name = de);
              } else if (1 == G.type) {
                const se = this.visitTransition(G, l);
                (p += se.queryCount), (T += se.depCount), $.push(se);
              } else
                l.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: u.name,
              states: O,
              transitions: $,
              queryCount: p,
              depCount: T,
              options: null,
            }
          );
        }
        visitState(u, l) {
          const p = this.visitStyle(u.styles, l),
            T = (u.options && u.options.params) || null;
          if (p.containsDynamicStyles) {
            const O = new Set(),
              $ = T || {};
            if (
              (p.styles.forEach((G) => {
                if (Nn(G)) {
                  const se = G;
                  Object.keys(se).forEach((de) => {
                    wn(se[de]).forEach((be) => {
                      $.hasOwnProperty(be) || O.add(be);
                    });
                  });
                }
              }),
              O.size)
            ) {
              const G = sr(O.values());
              l.errors.push(
                `state("${
                  u.name
                }", ...) must define default values for all the following style substitutions: ${G.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: u.name,
            style: p,
            options: T ? { params: T } : null,
          };
        }
        visitTransition(u, l) {
          (l.queryCount = 0), (l.depCount = 0);
          const p = Se(this, Vn(u.animation), l);
          return {
            type: 1,
            matchers: Ht(u.expr, l.errors),
            animation: p,
            queryCount: l.queryCount,
            depCount: l.depCount,
            options: Gn(u.options),
          };
        }
        visitSequence(u, l) {
          return {
            type: 2,
            steps: u.steps.map((p) => Se(this, p, l)),
            options: Gn(u.options),
          };
        }
        visitGroup(u, l) {
          const p = l.currentTime;
          let T = 0;
          const O = u.steps.map(($) => {
            l.currentTime = p;
            const G = Se(this, $, l);
            return (T = Math.max(T, l.currentTime)), G;
          });
          return (
            (l.currentTime = T), { type: 3, steps: O, options: Gn(u.options) }
          );
        }
        visitAnimate(u, l) {
          const p = (function (w, u) {
            let l = null;
            if (w.hasOwnProperty("duration")) l = w;
            else if ("number" == typeof w) return or(kt(w, u).duration, 0, "");
            const p = w;
            if (
              p
                .split(/\s+/)
                .some((O) => "{" == O.charAt(0) && "{" == O.charAt(1))
            ) {
              const O = or(0, 0, "");
              return (O.dynamic = !0), (O.strValue = p), O;
            }
            return (l = l || kt(p, u)), or(l.duration, l.delay, l.easing);
          })(u.timings, l.errors);
          l.currentAnimateTimings = p;
          let T,
            O = u.styles ? u.styles : (0, Y.oB)({});
          if (5 == O.type) T = this.visitKeyframes(O, l);
          else {
            let $ = u.styles,
              G = !1;
            if (!$) {
              G = !0;
              const de = {};
              p.easing && (de.easing = p.easing), ($ = (0, Y.oB)(de));
            }
            l.currentTime += p.duration + p.delay;
            const se = this.visitStyle($, l);
            (se.isEmptyStep = G), (T = se);
          }
          return (
            (l.currentAnimateTimings = null),
            { type: 4, timings: p, style: T, options: null }
          );
        }
        visitStyle(u, l) {
          const p = this._makeStyleAst(u, l);
          return this._validateStyleAst(p, l), p;
        }
        _makeStyleAst(u, l) {
          const p = [];
          Array.isArray(u.styles)
            ? u.styles.forEach(($) => {
                "string" == typeof $
                  ? $ == Y.l3
                    ? p.push($)
                    : l.errors.push(
                        `The provided style string value ${$} is not allowed.`
                      )
                  : p.push($);
              })
            : p.push(u.styles);
          let T = !1,
            O = null;
          return (
            p.forEach(($) => {
              if (Nn($)) {
                const G = $,
                  se = G.easing;
                if ((se && ((O = se), delete G.easing), !T))
                  for (let de in G)
                    if (G[de].toString().indexOf("{{") >= 0) {
                      T = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: p,
              easing: O,
              offset: u.offset,
              containsDynamicStyles: T,
              options: null,
            }
          );
        }
        _validateStyleAst(u, l) {
          const p = l.currentAnimateTimings;
          let T = l.currentTime,
            O = l.currentTime;
          p && O > 0 && (O -= p.duration + p.delay),
            u.styles.forEach(($) => {
              "string" != typeof $ &&
                Object.keys($).forEach((G) => {
                  if (!this._driver.validateStyleProperty(G))
                    return void l.errors.push(
                      `The provided animation property "${G}" is not a supported CSS property for animations`
                    );
                  const se = l.collectedStyles[l.currentQuerySelector],
                    de = se[G];
                  let be = !0;
                  de &&
                    (O != T &&
                      O >= de.startTime &&
                      T <= de.endTime &&
                      (l.errors.push(
                        `The CSS property "${G}" that exists between the times of "${de.startTime}ms" and "${de.endTime}ms" is also being animated in a parallel animation between the times of "${O}ms" and "${T}ms"`
                      ),
                      (be = !1)),
                    (O = de.startTime)),
                    be && (se[G] = { startTime: O, endTime: T }),
                    l.options &&
                      (function (w, u, l) {
                        const p = u.params || {},
                          T = wn(w);
                        T.length &&
                          T.forEach((O) => {
                            p.hasOwnProperty(O) ||
                              l.push(
                                `Unable to resolve the local animation param ${O} in the given list of values`
                              );
                          });
                      })($[G], l.options, l.errors);
                });
            });
        }
        visitKeyframes(u, l) {
          const p = { type: 5, styles: [], options: null };
          if (!l.currentAnimateTimings)
            return (
              l.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              p
            );
          let O = 0;
          const $ = [];
          let G = !1,
            se = !1,
            de = 0;
          const be = u.steps.map((Jt) => {
            const Xt = this._makeStyleAst(Jt, l);
            let $n =
                null != Xt.offset
                  ? Xt.offset
                  : (function (w) {
                      if ("string" == typeof w) return null;
                      let u = null;
                      if (Array.isArray(w))
                        w.forEach((l) => {
                          if (Nn(l) && l.hasOwnProperty("offset")) {
                            const p = l;
                            (u = parseFloat(p.offset)), delete p.offset;
                          }
                        });
                      else if (Nn(w) && w.hasOwnProperty("offset")) {
                        const l = w;
                        (u = parseFloat(l.offset)), delete l.offset;
                      }
                      return u;
                    })(Xt.styles),
              fn = 0;
            return (
              null != $n && (O++, (fn = Xt.offset = $n)),
              (se = se || fn < 0 || fn > 1),
              (G = G || fn < de),
              (de = fn),
              $.push(fn),
              Xt
            );
          });
          se &&
            l.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            G &&
              l.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const Fe = u.steps.length;
          let tt = 0;
          O > 0 && O < Fe
            ? l.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == O && (tt = 1 / (Fe - 1));
          const Et = Fe - 1,
            $e = l.currentTime,
            Xe = l.currentAnimateTimings,
            ct = Xe.duration;
          return (
            be.forEach((Jt, Xt) => {
              const $n = tt > 0 ? (Xt == Et ? 1 : tt * Xt) : $[Xt],
                fn = $n * ct;
              (l.currentTime = $e + Xe.delay + fn),
                (Xe.duration = fn),
                this._validateStyleAst(Jt, l),
                (Jt.offset = $n),
                p.styles.push(Jt);
            }),
            p
          );
        }
        visitReference(u, l) {
          return {
            type: 8,
            animation: Se(this, Vn(u.animation), l),
            options: Gn(u.options),
          };
        }
        visitAnimateChild(u, l) {
          return l.depCount++, { type: 9, options: Gn(u.options) };
        }
        visitAnimateRef(u, l) {
          return {
            type: 10,
            animation: this.visitReference(u.animation, l),
            options: Gn(u.options),
          };
        }
        visitQuery(u, l) {
          const p = l.currentQuerySelector,
            T = u.options || {};
          l.queryCount++, (l.currentQuery = u);
          const [O, $] = (function (w) {
            const u = !!w.split(/\s*,\s*/).find((l) => ":self" == l);
            return (
              u && (w = w.replace(lt, "")),
              (w = w
                .replace(/@\*/g, nr)
                .replace(/@\w+/g, (l) => nr + "-" + l.substr(1))
                .replace(/:animating/g, kn)),
              [w, u]
            );
          })(u.selector);
          (l.currentQuerySelector = p.length ? p + " " + O : O),
            W(l.collectedStyles, l.currentQuerySelector, {});
          const G = Se(this, Vn(u.animation), l);
          return (
            (l.currentQuery = null),
            (l.currentQuerySelector = p),
            {
              type: 11,
              selector: O,
              limit: T.limit || 0,
              optional: !!T.optional,
              includeSelf: $,
              animation: G,
              originalSelector: u.selector,
              options: Gn(u.options),
            }
          );
        }
        visitStagger(u, l) {
          l.currentQuery ||
            l.errors.push("stagger() can only be used inside of query()");
          const p =
            "full" === u.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : kt(u.timings, l.errors, !0);
          return {
            type: 12,
            animation: Se(this, Vn(u.animation), l),
            timings: p,
            options: null,
          };
        }
      }
      class qe {
        constructor(u) {
          (this.errors = u),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Nn(w) {
        return !Array.isArray(w) && "object" == typeof w;
      }
      function Gn(w) {
        return (
          w
            ? (w = On(w)).params &&
              (w.params = (function (w) {
                return w ? On(w) : null;
              })(w.params))
            : (w = {}),
          w
        );
      }
      function or(w, u, l) {
        return { duration: w, delay: u, easing: l };
      }
      function fr(w, u, l, p, T, O, $ = null, G = !1) {
        return {
          type: 1,
          element: w,
          keyframes: u,
          preStyleProps: l,
          postStyleProps: p,
          duration: T,
          delay: O,
          totalTime: T + O,
          easing: $,
          subTimeline: G,
        };
      }
      class Sr {
        constructor() {
          this._map = new Map();
        }
        consume(u) {
          let l = this._map.get(u);
          return l ? this._map.delete(u) : (l = []), l;
        }
        append(u, l) {
          let p = this._map.get(u);
          p || this._map.set(u, (p = [])), p.push(...l);
        }
        has(u) {
          return this._map.has(u);
        }
        clear() {
          this._map.clear();
        }
      }
      const Yr = new RegExp(":enter", "g"),
        rn = new RegExp(":leave", "g");
      function Ot(w, u, l, p, T, O = {}, $ = {}, G, se, de = []) {
        return new an().buildKeyframes(w, u, l, p, T, O, $, G, se, de);
      }
      class an {
        buildKeyframes(u, l, p, T, O, $, G, se, de, be = []) {
          de = de || new Sr();
          const Fe = new gr(u, l, de, T, O, be, []);
          (Fe.options = se),
            Fe.currentTimeline.setStyles([$], null, Fe.errors, se),
            Se(this, p, Fe);
          const tt = Fe.timelines.filter((Et) => Et.containsAnimation());
          if (tt.length && Object.keys(G).length) {
            const Et = tt[tt.length - 1];
            Et.allowOnlyTimelineStyles() ||
              Et.setStyles([G], null, Fe.errors, se);
          }
          return tt.length
            ? tt.map((Et) => Et.buildKeyframes())
            : [fr(l, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(u, l) {}
        visitState(u, l) {}
        visitTransition(u, l) {}
        visitAnimateChild(u, l) {
          const p = l.subInstructions.consume(l.element);
          if (p) {
            const T = l.createSubContext(u.options),
              O = l.currentTimeline.currentTime,
              $ = this._visitSubInstructions(p, T, T.options);
            O != $ && l.transformIntoNewTimeline($);
          }
          l.previousNode = u;
        }
        visitAnimateRef(u, l) {
          const p = l.createSubContext(u.options);
          p.transformIntoNewTimeline(),
            this.visitReference(u.animation, p),
            l.transformIntoNewTimeline(p.currentTimeline.currentTime),
            (l.previousNode = u);
        }
        _visitSubInstructions(u, l, p) {
          let O = l.currentTimeline.currentTime;
          const $ = null != p.duration ? Dt(p.duration) : null,
            G = null != p.delay ? Dt(p.delay) : null;
          return (
            0 !== $ &&
              u.forEach((se) => {
                const de = l.appendInstructionToTimeline(se, $, G);
                O = Math.max(O, de.duration + de.delay);
              }),
            O
          );
        }
        visitReference(u, l) {
          l.updateOptions(u.options, !0),
            Se(this, u.animation, l),
            (l.previousNode = u);
        }
        visitSequence(u, l) {
          const p = l.subContextCount;
          let T = l;
          const O = u.options;
          if (
            O &&
            (O.params || O.delay) &&
            ((T = l.createSubContext(O)),
            T.transformIntoNewTimeline(),
            null != O.delay)
          ) {
            6 == T.previousNode.type &&
              (T.currentTimeline.snapshotCurrentStyles(),
              (T.previousNode = sn));
            const $ = Dt(O.delay);
            T.delayNextStep($);
          }
          u.steps.length &&
            (u.steps.forEach(($) => Se(this, $, T)),
            T.currentTimeline.applyStylesToKeyframe(),
            T.subContextCount > p && T.transformIntoNewTimeline()),
            (l.previousNode = u);
        }
        visitGroup(u, l) {
          const p = [];
          let T = l.currentTimeline.currentTime;
          const O = u.options && u.options.delay ? Dt(u.options.delay) : 0;
          u.steps.forEach(($) => {
            const G = l.createSubContext(u.options);
            O && G.delayNextStep(O),
              Se(this, $, G),
              (T = Math.max(T, G.currentTimeline.currentTime)),
              p.push(G.currentTimeline);
          }),
            p.forEach(($) => l.currentTimeline.mergeTimelineCollectedStyles($)),
            l.transformIntoNewTimeline(T),
            (l.previousNode = u);
        }
        _visitTiming(u, l) {
          if (u.dynamic) {
            const p = u.strValue;
            return kt(l.params ? _n(p, l.params, l.errors) : p, l.errors);
          }
          return { duration: u.duration, delay: u.delay, easing: u.easing };
        }
        visitAnimate(u, l) {
          const p = (l.currentAnimateTimings = this._visitTiming(u.timings, l)),
            T = l.currentTimeline;
          p.delay && (l.incrementTime(p.delay), T.snapshotCurrentStyles());
          const O = u.style;
          5 == O.type
            ? this.visitKeyframes(O, l)
            : (l.incrementTime(p.duration),
              this.visitStyle(O, l),
              T.applyStylesToKeyframe()),
            (l.currentAnimateTimings = null),
            (l.previousNode = u);
        }
        visitStyle(u, l) {
          const p = l.currentTimeline,
            T = l.currentAnimateTimings;
          !T && p.getCurrentStyleProperties().length && p.forwardFrame();
          const O = (T && T.easing) || u.easing;
          u.isEmptyStep
            ? p.applyEmptyStep(O)
            : p.setStyles(u.styles, O, l.errors, l.options),
            (l.previousNode = u);
        }
        visitKeyframes(u, l) {
          const p = l.currentAnimateTimings,
            T = l.currentTimeline.duration,
            O = p.duration,
            G = l.createSubContext().currentTimeline;
          (G.easing = p.easing),
            u.styles.forEach((se) => {
              G.forwardTime((se.offset || 0) * O),
                G.setStyles(se.styles, se.easing, l.errors, l.options),
                G.applyStylesToKeyframe();
            }),
            l.currentTimeline.mergeTimelineCollectedStyles(G),
            l.transformIntoNewTimeline(T + O),
            (l.previousNode = u);
        }
        visitQuery(u, l) {
          const p = l.currentTimeline.currentTime,
            T = u.options || {},
            O = T.delay ? Dt(T.delay) : 0;
          O &&
            (6 === l.previousNode.type ||
              (0 == p &&
                l.currentTimeline.getCurrentStyleProperties().length)) &&
            (l.currentTimeline.snapshotCurrentStyles(), (l.previousNode = sn));
          let $ = p;
          const G = l.invokeQuery(
            u.selector,
            u.originalSelector,
            u.limit,
            u.includeSelf,
            !!T.optional,
            l.errors
          );
          l.currentQueryTotal = G.length;
          let se = null;
          G.forEach((de, be) => {
            l.currentQueryIndex = be;
            const Fe = l.createSubContext(u.options, de);
            O && Fe.delayNextStep(O),
              de === l.element && (se = Fe.currentTimeline),
              Se(this, u.animation, Fe),
              Fe.currentTimeline.applyStylesToKeyframe(),
              ($ = Math.max($, Fe.currentTimeline.currentTime));
          }),
            (l.currentQueryIndex = 0),
            (l.currentQueryTotal = 0),
            l.transformIntoNewTimeline($),
            se &&
              (l.currentTimeline.mergeTimelineCollectedStyles(se),
              l.currentTimeline.snapshotCurrentStyles()),
            (l.previousNode = u);
        }
        visitStagger(u, l) {
          const p = l.parentContext,
            T = l.currentTimeline,
            O = u.timings,
            $ = Math.abs(O.duration),
            G = $ * (l.currentQueryTotal - 1);
          let se = $ * l.currentQueryIndex;
          switch (O.duration < 0 ? "reverse" : O.easing) {
            case "reverse":
              se = G - se;
              break;
            case "full":
              se = p.currentStaggerTime;
          }
          const be = l.currentTimeline;
          se && be.delayNextStep(se);
          const Fe = be.currentTime;
          Se(this, u.animation, l),
            (l.previousNode = u),
            (p.currentStaggerTime =
              T.currentTime - Fe + (T.startTime - p.currentTimeline.startTime));
        }
      }
      const sn = {};
      class gr {
        constructor(u, l, p, T, O, $, G, se) {
          (this._driver = u),
            (this.element = l),
            (this.subInstructions = p),
            (this._enterClassName = T),
            (this._leaveClassName = O),
            (this.errors = $),
            (this.timelines = G),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = sn),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = se || new zt(this._driver, l, 0)),
            G.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(u, l) {
          if (!u) return;
          const p = u;
          let T = this.options;
          null != p.duration && (T.duration = Dt(p.duration)),
            null != p.delay && (T.delay = Dt(p.delay));
          const O = p.params;
          if (O) {
            let $ = T.params;
            $ || ($ = this.options.params = {}),
              Object.keys(O).forEach((G) => {
                (!l || !$.hasOwnProperty(G)) &&
                  ($[G] = _n(O[G], $, this.errors));
              });
          }
        }
        _copyOptions() {
          const u = {};
          if (this.options) {
            const l = this.options.params;
            if (l) {
              const p = (u.params = {});
              Object.keys(l).forEach((T) => {
                p[T] = l[T];
              });
            }
          }
          return u;
        }
        createSubContext(u = null, l, p) {
          const T = l || this.element,
            O = new gr(
              this._driver,
              T,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(T, p || 0)
            );
          return (
            (O.previousNode = this.previousNode),
            (O.currentAnimateTimings = this.currentAnimateTimings),
            (O.options = this._copyOptions()),
            O.updateOptions(u),
            (O.currentQueryIndex = this.currentQueryIndex),
            (O.currentQueryTotal = this.currentQueryTotal),
            (O.parentContext = this),
            this.subContextCount++,
            O
          );
        }
        transformIntoNewTimeline(u) {
          return (
            (this.previousNode = sn),
            (this.currentTimeline = this.currentTimeline.fork(this.element, u)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(u, l, p) {
          const T = {
              duration: null != l ? l : u.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != p ? p : 0) +
                u.delay,
              easing: "",
            },
            O = new Ae(
              this._driver,
              u.element,
              u.keyframes,
              u.preStyleProps,
              u.postStyleProps,
              T,
              u.stretchStartingKeyframe
            );
          return this.timelines.push(O), T;
        }
        incrementTime(u) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + u);
        }
        delayNextStep(u) {
          u > 0 && this.currentTimeline.delayNextStep(u);
        }
        invokeQuery(u, l, p, T, O, $) {
          let G = [];
          if ((T && G.push(this.element), u.length > 0)) {
            u = (u = u.replace(Yr, "." + this._enterClassName)).replace(
              rn,
              "." + this._leaveClassName
            );
            let de = this._driver.query(this.element, u, 1 != p);
            0 !== p &&
              (de =
                p < 0 ? de.slice(de.length + p, de.length) : de.slice(0, p)),
              G.push(...de);
          }
          return (
            !O &&
              0 == G.length &&
              $.push(
                `\`query("${l}")\` returned zero elements. (Use \`query("${l}", { optional: true })\` if you wish to allow this.)`
              ),
            G
          );
        }
      }
      class zt {
        constructor(u, l, p, T) {
          (this._driver = u),
            (this.element = l),
            (this.startTime = p),
            (this._elementTimelineStylesLookup = T),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(l)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                l,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(u) {
          const l =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || l
            ? (this.forwardTime(this.currentTime + u),
              l && this.snapshotCurrentStyles())
            : (this.startTime += u);
        }
        fork(u, l) {
          return (
            this.applyStylesToKeyframe(),
            new zt(
              this._driver,
              u,
              l || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(u) {
          this.applyStylesToKeyframe(),
            (this.duration = u),
            this._loadKeyframe();
        }
        _updateStyle(u, l) {
          (this._localTimelineStyles[u] = l),
            (this._globalTimelineStyles[u] = l),
            (this._styleSummary[u] = { time: this.currentTime, value: l });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(u) {
          u && (this._previousKeyframe.easing = u),
            Object.keys(this._globalTimelineStyles).forEach((l) => {
              (this._backFill[l] = this._globalTimelineStyles[l] || Y.l3),
                (this._currentKeyframe[l] = Y.l3);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(u, l, p, T) {
          l && (this._previousKeyframe.easing = l);
          const O = (T && T.params) || {},
            $ = (function (w, u) {
              const l = {};
              let p;
              return (
                w.forEach((T) => {
                  "*" === T
                    ? ((p = p || Object.keys(u)),
                      p.forEach((O) => {
                        l[O] = Y.l3;
                      }))
                    : Pn(T, !1, l);
                }),
                l
              );
            })(u, this._globalTimelineStyles);
          Object.keys($).forEach((G) => {
            const se = _n($[G], O, p);
            (this._pendingStyles[G] = se),
              this._localTimelineStyles.hasOwnProperty(G) ||
                (this._backFill[G] = this._globalTimelineStyles.hasOwnProperty(
                  G
                )
                  ? this._globalTimelineStyles[G]
                  : Y.l3),
              this._updateStyle(G, se);
          });
        }
        applyStylesToKeyframe() {
          const u = this._pendingStyles,
            l = Object.keys(u);
          0 != l.length &&
            ((this._pendingStyles = {}),
            l.forEach((p) => {
              this._currentKeyframe[p] = u[p];
            }),
            Object.keys(this._localTimelineStyles).forEach((p) => {
              this._currentKeyframe.hasOwnProperty(p) ||
                (this._currentKeyframe[p] = this._localTimelineStyles[p]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((u) => {
            const l = this._localTimelineStyles[u];
            (this._pendingStyles[u] = l), this._updateStyle(u, l);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const u = [];
          for (let l in this._currentKeyframe) u.push(l);
          return u;
        }
        mergeTimelineCollectedStyles(u) {
          Object.keys(u._styleSummary).forEach((l) => {
            const p = this._styleSummary[l],
              T = u._styleSummary[l];
            (!p || T.time > p.time) && this._updateStyle(l, T.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const u = new Set(),
            l = new Set(),
            p = 1 === this._keyframes.size && 0 === this.duration;
          let T = [];
          this._keyframes.forEach((G, se) => {
            const de = Pn(G, !0);
            Object.keys(de).forEach((be) => {
              const Fe = de[be];
              Fe == Y.k1 ? u.add(be) : Fe == Y.l3 && l.add(be);
            }),
              p || (de.offset = se / this.duration),
              T.push(de);
          });
          const O = u.size ? sr(u.values()) : [],
            $ = l.size ? sr(l.values()) : [];
          if (p) {
            const G = T[0],
              se = On(G);
            (G.offset = 0), (se.offset = 1), (T = [G, se]);
          }
          return fr(
            this.element,
            T,
            O,
            $,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Ae extends zt {
        constructor(u, l, p, T, O, $, G = !1) {
          super(u, l, $.delay),
            (this.keyframes = p),
            (this.preStyleProps = T),
            (this.postStyleProps = O),
            (this._stretchStartingKeyframe = G),
            (this.timings = {
              duration: $.duration,
              delay: $.delay,
              easing: $.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let u = this.keyframes,
            { delay: l, duration: p, easing: T } = this.timings;
          if (this._stretchStartingKeyframe && l) {
            const O = [],
              $ = p + l,
              G = l / $,
              se = Pn(u[0], !1);
            (se.offset = 0), O.push(se);
            const de = Pn(u[0], !1);
            (de.offset = Je(G)), O.push(de);
            const be = u.length - 1;
            for (let Fe = 1; Fe <= be; Fe++) {
              let tt = Pn(u[Fe], !1);
              (tt.offset = Je((l + tt.offset * p) / $)), O.push(tt);
            }
            (p = $), (l = 0), (T = ""), (u = O);
          }
          return fr(
            this.element,
            u,
            this.preStyleProps,
            this.postStyleProps,
            p,
            l,
            T,
            !0
          );
        }
      }
      function Je(w, u = 3) {
        const l = Math.pow(10, u - 1);
        return Math.round(w * l) / l;
      }
      class jn {}
      class Yn extends jn {
        normalizePropertyName(u, l) {
          return Bn(u);
        }
        normalizeStyleValue(u, l, p, T) {
          let O = "";
          const $ = p.toString().trim();
          if (mr[l] && 0 !== p && "0" !== p)
            if ("number" == typeof p) O = "px";
            else {
              const G = p.match(/^[+-]?[\d\.]+([a-z]*)$/);
              G &&
                0 == G[1].length &&
                T.push(`Please provide a CSS unit value for ${u}:${p}`);
            }
          return $ + O;
        }
      }
      const mr = (() =>
        (function (w) {
          const u = {};
          return w.forEach((l) => (u[l] = !0)), u;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function We(w, u, l, p, T, O, $, G, se, de, be, Fe, tt) {
        return {
          type: 0,
          element: w,
          triggerName: u,
          isRemovalTransition: T,
          fromState: l,
          fromStyles: O,
          toState: p,
          toStyles: $,
          timelines: G,
          queriedElements: se,
          preStyleProps: de,
          postStyleProps: be,
          totalTime: Fe,
          errors: tt,
        };
      }
      const ee = {};
      class q {
        constructor(u, l, p) {
          (this._triggerName = u), (this.ast = l), (this._stateStyles = p);
        }
        match(u, l, p, T) {
          return (function (w, u, l, p, T) {
            return w.some((O) => O(u, l, p, T));
          })(this.ast.matchers, u, l, p, T);
        }
        buildStyles(u, l, p) {
          const T = this._stateStyles["*"],
            O = this._stateStyles[u],
            $ = T ? T.buildStyles(l, p) : {};
          return O ? O.buildStyles(l, p) : $;
        }
        build(u, l, p, T, O, $, G, se, de, be) {
          const Fe = [],
            tt = (this.ast.options && this.ast.options.params) || ee,
            $e = this.buildStyles(p, (G && G.params) || ee, Fe),
            Xe = (se && se.params) || ee,
            ct = this.buildStyles(T, Xe, Fe),
            Jt = new Set(),
            Xt = new Map(),
            $n = new Map(),
            fn = "void" === T,
            Hr = { params: Object.assign(Object.assign({}, tt), Xe) },
            Ir = be
              ? []
              : Ot(u, l, this.ast.animation, O, $, $e, ct, Hr, de, Fe);
          let un = 0;
          if (
            (Ir.forEach((Kr) => {
              un = Math.max(Kr.duration + Kr.delay, un);
            }),
            Fe.length)
          )
            return We(
              l,
              this._triggerName,
              p,
              T,
              fn,
              $e,
              ct,
              [],
              [],
              Xt,
              $n,
              un,
              Fe
            );
          Ir.forEach((Kr) => {
            const _r = Kr.element,
              Ji = W(Xt, _r, {});
            Kr.preStyleProps.forEach((ln) => (Ji[ln] = !0));
            const Ns = W($n, _r, {});
            Kr.postStyleProps.forEach((ln) => (Ns[ln] = !0)),
              _r !== l && Jt.add(_r);
          });
          const Wr = sr(Jt.values());
          return We(l, this._triggerName, p, T, fn, $e, ct, Ir, Wr, Xt, $n, un);
        }
      }
      class ne {
        constructor(u, l, p) {
          (this.styles = u), (this.defaultParams = l), (this.normalizer = p);
        }
        buildStyles(u, l) {
          const p = {},
            T = On(this.defaultParams);
          return (
            Object.keys(u).forEach((O) => {
              const $ = u[O];
              null != $ && (T[O] = $);
            }),
            this.styles.styles.forEach((O) => {
              if ("string" != typeof O) {
                const $ = O;
                Object.keys($).forEach((G) => {
                  let se = $[G];
                  se.length > 1 && (se = _n(se, T, l));
                  const de = this.normalizer.normalizePropertyName(G, l);
                  (se = this.normalizer.normalizeStyleValue(G, de, se, l)),
                    (p[de] = se);
                });
              }
            }),
            p
          );
        }
      }
      class Pe {
        constructor(u, l, p) {
          (this.name = u),
            (this.ast = l),
            (this._normalizer = p),
            (this.transitionFactories = []),
            (this.states = {}),
            l.states.forEach((T) => {
              this.states[T.name] = new ne(
                T.style,
                (T.options && T.options.params) || {},
                p
              );
            }),
            k(this.states, "true", "1"),
            k(this.states, "false", "0"),
            l.transitions.forEach((T) => {
              this.transitionFactories.push(new q(u, T, this.states));
            }),
            (this.fallbackTransition = (function (w, u, l) {
              return new q(
                w,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [($, G) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                u
              );
            })(u, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(u, l, p, T) {
          return (
            this.transitionFactories.find(($) => $.match(u, l, p, T)) || null
          );
        }
        matchStyles(u, l, p) {
          return this.fallbackTransition.buildStyles(u, l, p);
        }
      }
      function k(w, u, l) {
        w.hasOwnProperty(u)
          ? w.hasOwnProperty(l) || (w[l] = w[u])
          : w.hasOwnProperty(l) && (w[u] = w[l]);
      }
      const oe = new Sr();
      class re {
        constructor(u, l, p) {
          (this.bodyNode = u),
            (this._driver = l),
            (this._normalizer = p),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(u, l) {
          const p = [],
            T = Tr(this._driver, l, p);
          if (p.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${p.join(
                "\n"
              )}`
            );
          this._animations[u] = T;
        }
        _buildPlayer(u, l, p) {
          const T = u.element,
            O = L(0, this._normalizer, 0, u.keyframes, l, p);
          return this._driver.animate(
            T,
            O,
            u.duration,
            u.delay,
            u.easing,
            [],
            !0
          );
        }
        create(u, l, p = {}) {
          const T = [],
            O = this._animations[u];
          let $;
          const G = new Map();
          if (
            (O
              ? (($ = Ot(this._driver, l, O, xr, tr, {}, {}, p, oe, T)),
                $.forEach((be) => {
                  const Fe = W(G, be.element, {});
                  be.postStyleProps.forEach((tt) => (Fe[tt] = null));
                }))
              : (T.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                ($ = [])),
            T.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${T.join(
                "\n"
              )}`
            );
          G.forEach((be, Fe) => {
            Object.keys(be).forEach((tt) => {
              be[tt] = this._driver.computeStyle(Fe, tt, Y.l3);
            });
          });
          const de = P(
            $.map((be) => {
              const Fe = G.get(be.element);
              return this._buildPlayer(be, {}, Fe);
            })
          );
          return (
            (this._playersById[u] = de),
            de.onDestroy(() => this.destroy(u)),
            this.players.push(de),
            de
          );
        }
        destroy(u) {
          const l = this._getPlayer(u);
          l.destroy(), delete this._playersById[u];
          const p = this.players.indexOf(l);
          p >= 0 && this.players.splice(p, 1);
        }
        _getPlayer(u) {
          const l = this._playersById[u];
          if (!l)
            throw new Error(
              `Unable to find the timeline player referenced by ${u}`
            );
          return l;
        }
        listen(u, l, p, T) {
          const O = F(l, "", "", "");
          return R(this._getPlayer(u), p, O, T), () => {};
        }
        command(u, l, p, T) {
          if ("register" == p) return void this.register(u, T[0]);
          if ("create" == p) return void this.create(u, l, T[0] || {});
          const O = this._getPlayer(u);
          switch (p) {
            case "play":
              O.play();
              break;
            case "pause":
              O.pause();
              break;
            case "reset":
              O.reset();
              break;
            case "restart":
              O.restart();
              break;
            case "finish":
              O.finish();
              break;
            case "init":
              O.init();
              break;
            case "setPosition":
              O.setPosition(parseFloat(T[0]));
              break;
            case "destroy":
              this.destroy(u);
          }
        }
      }
      const le = "ng-animate-queued",
        Ie = "ng-animate-disabled",
        Ze = ".ng-animate-disabled",
        bt = [],
        At = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        Zt = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Lt = "__ng_removed";
      class ar {
        constructor(u, l = "") {
          this.namespaceId = l;
          const p = u && u.hasOwnProperty("value");
          if (((this.value = null != (w = p ? u.value : u) ? w : null), p)) {
            const O = On(u);
            delete O.value, (this.options = O);
          } else this.options = {};
          var w;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(u) {
          const l = u.params;
          if (l) {
            const p = this.options.params;
            Object.keys(l).forEach((T) => {
              null == p[T] && (p[T] = l[T]);
            });
          }
        }
      }
      const En = "void",
        Vr = new ar(En);
      class ur {
        constructor(u, l, p) {
          (this.id = u),
            (this.hostElement = l),
            (this._engine = p),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + u),
            Zn(l, this._hostClassName);
        }
        listen(u, l, p, T) {
          if (!this._triggers.hasOwnProperty(l))
            throw new Error(
              `Unable to listen on the animation trigger event "${p}" because the animation trigger "${l}" doesn't exist!`
            );
          if (null == p || 0 == p.length)
            throw new Error(
              `Unable to listen on the animation trigger "${l}" because the provided event is undefined!`
            );
          if ("start" != (w = p) && "done" != w)
            throw new Error(
              `The provided animation trigger event "${p}" for the animation trigger "${l}" is not supported!`
            );
          var w;
          const O = W(this._elementListeners, u, []),
            $ = { name: l, phase: p, callback: T };
          O.push($);
          const G = W(this._engine.statesByElement, u, {});
          return (
            G.hasOwnProperty(l) ||
              (Zn(u, ft), Zn(u, ft + "-" + l), (G[l] = Vr)),
            () => {
              this._engine.afterFlush(() => {
                const se = O.indexOf($);
                se >= 0 && O.splice(se, 1), this._triggers[l] || delete G[l];
              });
            }
          );
        }
        register(u, l) {
          return !this._triggers[u] && ((this._triggers[u] = l), !0);
        }
        _getTrigger(u) {
          const l = this._triggers[u];
          if (!l)
            throw new Error(
              `The provided animation trigger "${u}" has not been registered!`
            );
          return l;
        }
        trigger(u, l, p, T = !0) {
          const O = this._getTrigger(l),
            $ = new ci(this.id, l, u);
          let G = this._engine.statesByElement.get(u);
          G ||
            (Zn(u, ft),
            Zn(u, ft + "-" + l),
            this._engine.statesByElement.set(u, (G = {})));
          let se = G[l];
          const de = new ar(p, this.id);
          if (
            (!(p && p.hasOwnProperty("value")) &&
              se &&
              de.absorbOptions(se.options),
            (G[l] = de),
            se || (se = Vr),
            de.value !== En && se.value === de.value)
          ) {
            if (
              !(function (w, u) {
                const l = Object.keys(w),
                  p = Object.keys(u);
                if (l.length != p.length) return !1;
                for (let T = 0; T < l.length; T++) {
                  const O = l[T];
                  if (!u.hasOwnProperty(O) || w[O] !== u[O]) return !1;
                }
                return !0;
              })(se.params, de.params)
            ) {
              const Xe = [],
                ct = O.matchStyles(se.value, se.params, Xe),
                Jt = O.matchStyles(de.value, de.params, Xe);
              Xe.length
                ? this._engine.reportError(Xe)
                : this._engine.afterFlush(() => {
                    zn(u, ct), tn(u, Jt);
                  });
            }
            return;
          }
          const tt = W(this._engine.playersByElement, u, []);
          tt.forEach((Xe) => {
            Xe.namespaceId == this.id &&
              Xe.triggerName == l &&
              Xe.queued &&
              Xe.destroy();
          });
          let Et = O.matchTransition(se.value, de.value, u, de.params),
            $e = !1;
          if (!Et) {
            if (!T) return;
            (Et = O.fallbackTransition), ($e = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: u,
              triggerName: l,
              transition: Et,
              fromState: se,
              toState: de,
              player: $,
              isFallbackTransition: $e,
            }),
            $e ||
              (Zn(u, le),
              $.onStart(() => {
                is(u, le);
              })),
            $.onDone(() => {
              let Xe = this.players.indexOf($);
              Xe >= 0 && this.players.splice(Xe, 1);
              const ct = this._engine.playersByElement.get(u);
              if (ct) {
                let Jt = ct.indexOf($);
                Jt >= 0 && ct.splice(Jt, 1);
              }
            }),
            this.players.push($),
            tt.push($),
            $
          );
        }
        deregister(u) {
          delete this._triggers[u],
            this._engine.statesByElement.forEach((l, p) => {
              delete l[u];
            }),
            this._elementListeners.forEach((l, p) => {
              this._elementListeners.set(
                p,
                l.filter((T) => T.name != u)
              );
            });
        }
        clearElementCache(u) {
          this._engine.statesByElement.delete(u),
            this._elementListeners.delete(u);
          const l = this._engine.playersByElement.get(u);
          l &&
            (l.forEach((p) => p.destroy()),
            this._engine.playersByElement.delete(u));
        }
        _signalRemovalForInnerTriggers(u, l) {
          const p = this._engine.driver.query(u, nr, !0);
          p.forEach((T) => {
            if (T[Lt]) return;
            const O = this._engine.fetchNamespacesByElement(T);
            O.size
              ? O.forEach(($) => $.triggerLeaveAnimation(T, l, !1, !0))
              : this.clearElementCache(T);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              p.forEach((T) => this.clearElementCache(T))
            );
        }
        triggerLeaveAnimation(u, l, p, T) {
          const O = this._engine.statesByElement.get(u);
          if (O) {
            const $ = [];
            if (
              (Object.keys(O).forEach((G) => {
                if (this._triggers[G]) {
                  const se = this.trigger(u, G, En, T);
                  se && $.push(se);
                }
              }),
              $.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, u, !0, l),
                p && P($).onDone(() => this._engine.processLeaveNode(u)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(u) {
          const l = this._elementListeners.get(u),
            p = this._engine.statesByElement.get(u);
          if (l && p) {
            const T = new Set();
            l.forEach((O) => {
              const $ = O.name;
              if (T.has($)) return;
              T.add($);
              const se = this._triggers[$].fallbackTransition,
                de = p[$] || Vr,
                be = new ar(En),
                Fe = new ci(this.id, $, u);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: u,
                  triggerName: $,
                  transition: se,
                  fromState: de,
                  toState: be,
                  player: Fe,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(u, l) {
          const p = this._engine;
          if (
            (u.childElementCount && this._signalRemovalForInnerTriggers(u, l),
            this.triggerLeaveAnimation(u, l, !0))
          )
            return;
          let T = !1;
          if (p.totalAnimations) {
            const O = p.players.length ? p.playersByQueriedElement.get(u) : [];
            if (O && O.length) T = !0;
            else {
              let $ = u;
              for (; ($ = $.parentNode); )
                if (p.statesByElement.get($)) {
                  T = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(u), T))
            p.markElementAsRemoved(this.id, u, !1, l);
          else {
            const O = u[Lt];
            (!O || O === At) &&
              (p.afterFlush(() => this.clearElementCache(u)),
              p.destroyInnerAnimations(u),
              p._onRemovalComplete(u, l));
          }
        }
        insertNode(u, l) {
          Zn(u, this._hostClassName);
        }
        drainQueuedTransitions(u) {
          const l = [];
          return (
            this._queue.forEach((p) => {
              const T = p.player;
              if (T.destroyed) return;
              const O = p.element,
                $ = this._elementListeners.get(O);
              $ &&
                $.forEach((G) => {
                  if (G.name == p.triggerName) {
                    const se = F(
                      O,
                      p.triggerName,
                      p.fromState.value,
                      p.toState.value
                    );
                    (se._data = u), R(p.player, G.phase, se, G.callback);
                  }
                }),
                T.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      T.destroy();
                    })
                  : l.push(p);
            }),
            (this._queue = []),
            l.sort((p, T) => {
              const O = p.transition.ast.depCount,
                $ = T.transition.ast.depCount;
              return 0 == O || 0 == $
                ? O - $
                : this._engine.driver.containsElement(p.element, T.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(u) {
          this.players.forEach((l) => l.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, u);
        }
        elementContainsData(u) {
          let l = !1;
          return (
            this._elementListeners.has(u) && (l = !0),
            (l = !!this._queue.find((p) => p.element === u) || l),
            l
          );
        }
      }
      class qn {
        constructor(u, l, p) {
          (this.bodyNode = u),
            (this.driver = l),
            (this._normalizer = p),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (T, O) => {});
        }
        _onRemovalComplete(u, l) {
          this.onRemovalComplete(u, l);
        }
        get queuedPlayers() {
          const u = [];
          return (
            this._namespaceList.forEach((l) => {
              l.players.forEach((p) => {
                p.queued && u.push(p);
              });
            }),
            u
          );
        }
        createNamespace(u, l) {
          const p = new ur(u, l, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, l)
              ? this._balanceNamespaceList(p, l)
              : (this.newHostElements.set(l, p), this.collectEnterElement(l)),
            (this._namespaceLookup[u] = p)
          );
        }
        _balanceNamespaceList(u, l) {
          const p = this._namespaceList.length - 1;
          if (p >= 0) {
            let T = !1;
            for (let O = p; O >= 0; O--)
              if (
                this.driver.containsElement(
                  this._namespaceList[O].hostElement,
                  l
                )
              ) {
                this._namespaceList.splice(O + 1, 0, u), (T = !0);
                break;
              }
            T || this._namespaceList.splice(0, 0, u);
          } else this._namespaceList.push(u);
          return this.namespacesByHostElement.set(l, u), u;
        }
        register(u, l) {
          let p = this._namespaceLookup[u];
          return p || (p = this.createNamespace(u, l)), p;
        }
        registerTrigger(u, l, p) {
          let T = this._namespaceLookup[u];
          T && T.register(l, p) && this.totalAnimations++;
        }
        destroy(u, l) {
          if (!u) return;
          const p = this._fetchNamespace(u);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(p.hostElement),
              delete this._namespaceLookup[u];
            const T = this._namespaceList.indexOf(p);
            T >= 0 && this._namespaceList.splice(T, 1);
          }),
            this.afterFlushAnimationsDone(() => p.destroy(l));
        }
        _fetchNamespace(u) {
          return this._namespaceLookup[u];
        }
        fetchNamespacesByElement(u) {
          const l = new Set(),
            p = this.statesByElement.get(u);
          if (p) {
            const T = Object.keys(p);
            for (let O = 0; O < T.length; O++) {
              const $ = p[T[O]].namespaceId;
              if ($) {
                const G = this._fetchNamespace($);
                G && l.add(G);
              }
            }
          }
          return l;
        }
        trigger(u, l, p, T) {
          if (qs(l)) {
            const O = this._fetchNamespace(u);
            if (O) return O.trigger(l, p, T), !0;
          }
          return !1;
        }
        insertNode(u, l, p, T) {
          if (!qs(l)) return;
          const O = l[Lt];
          if (O && O.setForRemoval) {
            (O.setForRemoval = !1), (O.setForMove = !0);
            const $ = this.collectedLeaveElements.indexOf(l);
            $ >= 0 && this.collectedLeaveElements.splice($, 1);
          }
          if (u) {
            const $ = this._fetchNamespace(u);
            $ && $.insertNode(l, p);
          }
          T && this.collectEnterElement(l);
        }
        collectEnterElement(u) {
          this.collectedEnterElements.push(u);
        }
        markElementAsDisabled(u, l) {
          l
            ? this.disabledNodes.has(u) ||
              (this.disabledNodes.add(u), Zn(u, Ie))
            : this.disabledNodes.has(u) &&
              (this.disabledNodes.delete(u), is(u, Ie));
        }
        removeNode(u, l, p, T) {
          if (qs(l)) {
            const O = u ? this._fetchNamespace(u) : null;
            if (
              (O ? O.removeNode(l, T) : this.markElementAsRemoved(u, l, !1, T),
              p)
            ) {
              const $ = this.namespacesByHostElement.get(l);
              $ && $.id !== u && $.removeNode(l, T);
            }
          } else this._onRemovalComplete(l, T);
        }
        markElementAsRemoved(u, l, p, T) {
          this.collectedLeaveElements.push(l),
            (l[Lt] = {
              namespaceId: u,
              setForRemoval: T,
              hasAnimation: p,
              removedBeforeQueried: !1,
            });
        }
        listen(u, l, p, T, O) {
          return qs(l) ? this._fetchNamespace(u).listen(l, p, T, O) : () => {};
        }
        _buildInstruction(u, l, p, T, O) {
          return u.transition.build(
            this.driver,
            u.element,
            u.fromState.value,
            u.toState.value,
            p,
            T,
            u.fromState.options,
            u.toState.options,
            l,
            O
          );
        }
        destroyInnerAnimations(u) {
          let l = this.driver.query(u, nr, !0);
          l.forEach((p) => this.destroyActiveAnimationsForElement(p)),
            0 != this.playersByQueriedElement.size &&
              ((l = this.driver.query(u, kn, !0)),
              l.forEach((p) => this.finishActiveQueriedAnimationOnElement(p)));
        }
        destroyActiveAnimationsForElement(u) {
          const l = this.playersByElement.get(u);
          l &&
            l.forEach((p) => {
              p.queued ? (p.markedForDestroy = !0) : p.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(u) {
          const l = this.playersByQueriedElement.get(u);
          l && l.forEach((p) => p.finish());
        }
        whenRenderingDone() {
          return new Promise((u) => {
            if (this.players.length) return P(this.players).onDone(() => u());
            u();
          });
        }
        processLeaveNode(u) {
          const l = u[Lt];
          if (l && l.setForRemoval) {
            if (((u[Lt] = At), l.namespaceId)) {
              this.destroyInnerAnimations(u);
              const p = this._fetchNamespace(l.namespaceId);
              p && p.clearElementCache(u);
            }
            this._onRemovalComplete(u, l.setForRemoval);
          }
          this.driver.matchesElement(u, Ze) &&
            this.markElementAsDisabled(u, !1),
            this.driver.query(u, Ze, !0).forEach((p) => {
              this.markElementAsDisabled(p, !1);
            });
        }
        flush(u = -1) {
          let l = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((p, T) =>
                this._balanceNamespaceList(p, T)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let p = 0; p < this.collectedEnterElements.length; p++)
              Zn(this.collectedEnterElements[p], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const p = [];
            try {
              l = this._flushAnimations(p, u);
            } finally {
              for (let T = 0; T < p.length; T++) p[T]();
            }
          } else
            for (let p = 0; p < this.collectedLeaveElements.length; p++)
              this.processLeaveNode(this.collectedLeaveElements[p]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((p) => p()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const p = this._whenQuietFns;
            (this._whenQuietFns = []),
              l.length
                ? P(l).onDone(() => {
                    p.forEach((T) => T());
                  })
                : p.forEach((T) => T());
          }
        }
        reportError(u) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${u.join(
              "\n"
            )}`
          );
        }
        _flushAnimations(u, l) {
          const p = new Sr(),
            T = [],
            O = new Map(),
            $ = [],
            G = new Map(),
            se = new Map(),
            de = new Map(),
            be = new Set();
          this.disabledNodes.forEach((xe) => {
            be.add(xe);
            const Be = this.driver.query(xe, ".ng-animate-queued", !0);
            for (let Ge = 0; Ge < Be.length; Ge++) be.add(Be[Ge]);
          });
          const Fe = this.bodyNode,
            tt = Array.from(this.statesByElement.keys()),
            Et = Oi(tt, this.collectedEnterElements),
            $e = new Map();
          let Xe = 0;
          Et.forEach((xe, Be) => {
            const Ge = xr + Xe++;
            $e.set(Be, Ge), xe.forEach((yt) => Zn(yt, Ge));
          });
          const ct = [],
            Jt = new Set(),
            Xt = new Set();
          for (let xe = 0; xe < this.collectedLeaveElements.length; xe++) {
            const Be = this.collectedLeaveElements[xe],
              Ge = Be[Lt];
            Ge &&
              Ge.setForRemoval &&
              (ct.push(Be),
              Jt.add(Be),
              Ge.hasAnimation
                ? this.driver
                    .query(Be, ".ng-star-inserted", !0)
                    .forEach((yt) => Jt.add(yt))
                : Xt.add(Be));
          }
          const $n = new Map(),
            fn = Oi(tt, Array.from(Jt));
          fn.forEach((xe, Be) => {
            const Ge = tr + Xe++;
            $n.set(Be, Ge), xe.forEach((yt) => Zn(yt, Ge));
          }),
            u.push(() => {
              Et.forEach((xe, Be) => {
                const Ge = $e.get(Be);
                xe.forEach((yt) => is(yt, Ge));
              }),
                fn.forEach((xe, Be) => {
                  const Ge = $n.get(Be);
                  xe.forEach((yt) => is(yt, Ge));
                }),
                ct.forEach((xe) => {
                  this.processLeaveNode(xe);
                });
            });
          const Hr = [],
            Ir = [];
          for (let xe = this._namespaceList.length - 1; xe >= 0; xe--)
            this._namespaceList[xe].drainQueuedTransitions(l).forEach((Ge) => {
              const yt = Ge.player,
                en = Ge.element;
              if ((Hr.push(yt), this.collectedEnterElements.length)) {
                const Ar = en[Lt];
                if (Ar && Ar.setForMove) return void yt.destroy();
              }
              const zr = !Fe || !this.driver.containsElement(Fe, en),
                Ln = $n.get(en),
                lr = $e.get(en),
                Wt = this._buildInstruction(Ge, p, lr, Ln, zr);
              if (Wt.errors && Wt.errors.length) Ir.push(Wt);
              else {
                if (zr)
                  return (
                    yt.onStart(() => zn(en, Wt.fromStyles)),
                    yt.onDestroy(() => tn(en, Wt.toStyles)),
                    void T.push(yt)
                  );
                if (Ge.isFallbackTransition)
                  return (
                    yt.onStart(() => zn(en, Wt.fromStyles)),
                    yt.onDestroy(() => tn(en, Wt.toStyles)),
                    void T.push(yt)
                  );
                Wt.timelines.forEach((Ar) => (Ar.stretchStartingKeyframe = !0)),
                  p.append(en, Wt.timelines),
                  $.push({ instruction: Wt, player: yt, element: en }),
                  Wt.queriedElements.forEach((Ar) => W(G, Ar, []).push(yt)),
                  Wt.preStyleProps.forEach((Ar, Fs) => {
                    const yr = Object.keys(Ar);
                    if (yr.length) {
                      let cr = se.get(Fs);
                      cr || se.set(Fs, (cr = new Set())),
                        yr.forEach((Xi) => cr.add(Xi));
                    }
                  }),
                  Wt.postStyleProps.forEach((Ar, Fs) => {
                    const yr = Object.keys(Ar);
                    let cr = de.get(Fs);
                    cr || de.set(Fs, (cr = new Set())),
                      yr.forEach((Xi) => cr.add(Xi));
                  });
              }
            });
          if (Ir.length) {
            const xe = [];
            Ir.forEach((Be) => {
              xe.push(`@${Be.triggerName} has failed due to:\n`),
                Be.errors.forEach((Ge) => xe.push(`- ${Ge}\n`));
            }),
              Hr.forEach((Be) => Be.destroy()),
              this.reportError(xe);
          }
          const un = new Map(),
            Wr = new Map();
          $.forEach((xe) => {
            const Be = xe.element;
            p.has(Be) &&
              (Wr.set(Be, Be),
              this._beforeAnimationBuild(
                xe.player.namespaceId,
                xe.instruction,
                un
              ));
          }),
            T.forEach((xe) => {
              const Be = xe.element;
              this._getPreviousPlayers(
                Be,
                !1,
                xe.namespaceId,
                xe.triggerName,
                null
              ).forEach((yt) => {
                W(un, Be, []).push(yt), yt.destroy();
              });
            });
          const Kr = ct.filter((xe) => Rs(xe, se, de)),
            _r = new Map();
          Ms(_r, this.driver, Xt, de, Y.l3).forEach((xe) => {
            Rs(xe, se, de) && Kr.push(xe);
          });
          const Ns = new Map();
          Et.forEach((xe, Be) => {
            Ms(Ns, this.driver, new Set(xe), se, Y.k1);
          }),
            Kr.forEach((xe) => {
              const Be = _r.get(xe),
                Ge = Ns.get(xe);
              _r.set(xe, Object.assign(Object.assign({}, Be), Ge));
            });
          const ln = [],
            Xr = [],
            mt = {};
          $.forEach((xe) => {
            const { element: Be, player: Ge, instruction: yt } = xe;
            if (p.has(Be)) {
              if (be.has(Be))
                return (
                  Ge.onDestroy(() => tn(Be, yt.toStyles)),
                  (Ge.disabled = !0),
                  Ge.overrideTotalTime(yt.totalTime),
                  void T.push(Ge)
                );
              let en = mt;
              if (Wr.size > 1) {
                let Ln = Be;
                const lr = [];
                for (; (Ln = Ln.parentNode); ) {
                  const Wt = Wr.get(Ln);
                  if (Wt) {
                    en = Wt;
                    break;
                  }
                  lr.push(Ln);
                }
                lr.forEach((Wt) => Wr.set(Wt, en));
              }
              const zr = this._buildAnimation(
                Ge.namespaceId,
                yt,
                un,
                O,
                Ns,
                _r
              );
              if ((Ge.setRealPlayer(zr), en === mt)) ln.push(Ge);
              else {
                const Ln = this.playersByElement.get(en);
                Ln && Ln.length && (Ge.parentPlayer = P(Ln)), T.push(Ge);
              }
            } else
              zn(Be, yt.fromStyles),
                Ge.onDestroy(() => tn(Be, yt.toStyles)),
                Xr.push(Ge),
                be.has(Be) && T.push(Ge);
          }),
            Xr.forEach((xe) => {
              const Be = O.get(xe.element);
              if (Be && Be.length) {
                const Ge = P(Be);
                xe.setRealPlayer(Ge);
              }
            }),
            T.forEach((xe) => {
              xe.parentPlayer
                ? xe.syncPlayerEvents(xe.parentPlayer)
                : xe.destroy();
            });
          for (let xe = 0; xe < ct.length; xe++) {
            const Be = ct[xe],
              Ge = Be[Lt];
            if ((is(Be, tr), Ge && Ge.hasAnimation)) continue;
            let yt = [];
            if (G.size) {
              let zr = G.get(Be);
              zr && zr.length && yt.push(...zr);
              let Ln = this.driver.query(Be, kn, !0);
              for (let lr = 0; lr < Ln.length; lr++) {
                let Wt = G.get(Ln[lr]);
                Wt && Wt.length && yt.push(...Wt);
              }
            }
            const en = yt.filter((zr) => !zr.destroyed);
            en.length ? Gi(this, Be, en) : this.processLeaveNode(Be);
          }
          return (
            (ct.length = 0),
            ln.forEach((xe) => {
              this.players.push(xe),
                xe.onDone(() => {
                  xe.destroy();
                  const Be = this.players.indexOf(xe);
                  this.players.splice(Be, 1);
                }),
                xe.play();
            }),
            ln
          );
        }
        elementContainsData(u, l) {
          let p = !1;
          const T = l[Lt];
          return (
            T && T.setForRemoval && (p = !0),
            this.playersByElement.has(l) && (p = !0),
            this.playersByQueriedElement.has(l) && (p = !0),
            this.statesByElement.has(l) && (p = !0),
            this._fetchNamespace(u).elementContainsData(l) || p
          );
        }
        afterFlush(u) {
          this._flushFns.push(u);
        }
        afterFlushAnimationsDone(u) {
          this._whenQuietFns.push(u);
        }
        _getPreviousPlayers(u, l, p, T, O) {
          let $ = [];
          if (l) {
            const G = this.playersByQueriedElement.get(u);
            G && ($ = G);
          } else {
            const G = this.playersByElement.get(u);
            if (G) {
              const se = !O || O == En;
              G.forEach((de) => {
                de.queued || (!se && de.triggerName != T) || $.push(de);
              });
            }
          }
          return (
            (p || T) &&
              ($ = $.filter(
                (G) => !((p && p != G.namespaceId) || (T && T != G.triggerName))
              )),
            $
          );
        }
        _beforeAnimationBuild(u, l, p) {
          const O = l.element,
            $ = l.isRemovalTransition ? void 0 : u,
            G = l.isRemovalTransition ? void 0 : l.triggerName;
          for (const se of l.timelines) {
            const de = se.element,
              be = de !== O,
              Fe = W(p, de, []);
            this._getPreviousPlayers(de, be, $, G, l.toState).forEach((Et) => {
              const $e = Et.getRealPlayer();
              $e.beforeDestroy && $e.beforeDestroy(), Et.destroy(), Fe.push(Et);
            });
          }
          zn(O, l.fromStyles);
        }
        _buildAnimation(u, l, p, T, O, $) {
          const G = l.triggerName,
            se = l.element,
            de = [],
            be = new Set(),
            Fe = new Set(),
            tt = l.timelines.map(($e) => {
              const Xe = $e.element;
              be.add(Xe);
              const ct = Xe[Lt];
              if (ct && ct.removedBeforeQueried)
                return new Y.ZN($e.duration, $e.delay);
              const Jt = Xe !== se,
                Xt = (function (w) {
                  const u = [];
                  return fi(w, u), u;
                })((p.get(Xe) || bt).map((un) => un.getRealPlayer())).filter(
                  (un) => !!un.element && un.element === Xe
                ),
                $n = O.get(Xe),
                fn = $.get(Xe),
                Hr = L(0, this._normalizer, 0, $e.keyframes, $n, fn),
                Ir = this._buildPlayer($e, Hr, Xt);
              if (($e.subTimeline && T && Fe.add(Xe), Jt)) {
                const un = new ci(u, G, Xe);
                un.setRealPlayer(Ir), de.push(un);
              }
              return Ir;
            });
          de.forEach(($e) => {
            W(this.playersByQueriedElement, $e.element, []).push($e),
              $e.onDone(() =>
                (function (w, u, l) {
                  let p;
                  if (w instanceof Map) {
                    if (((p = w.get(u)), p)) {
                      if (p.length) {
                        const T = p.indexOf(l);
                        p.splice(T, 1);
                      }
                      0 == p.length && w.delete(u);
                    }
                  } else if (((p = w[u]), p)) {
                    if (p.length) {
                      const T = p.indexOf(l);
                      p.splice(T, 1);
                    }
                    0 == p.length && delete w[u];
                  }
                  return p;
                })(this.playersByQueriedElement, $e.element, $e)
              );
          }),
            be.forEach(($e) => Zn($e, rs));
          const Et = P(tt);
          return (
            Et.onDestroy(() => {
              be.forEach(($e) => is($e, rs)), tn(se, l.toStyles);
            }),
            Fe.forEach(($e) => {
              W(T, $e, []).push(Et);
            }),
            Et
          );
        }
        _buildPlayer(u, l, p) {
          return l.length > 0
            ? this.driver.animate(
                u.element,
                l,
                u.duration,
                u.delay,
                u.easing,
                p
              )
            : new Y.ZN(u.duration, u.delay);
        }
      }
      class ci {
        constructor(u, l, p) {
          (this.namespaceId = u),
            (this.triggerName = l),
            (this.element = p),
            (this._player = new Y.ZN()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(u) {
          this._containsRealPlayer ||
            ((this._player = u),
            Object.keys(this._queuedCallbacks).forEach((l) => {
              this._queuedCallbacks[l].forEach((p) => R(u, l, void 0, p));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(u.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(u) {
          this.totalTime = u;
        }
        syncPlayerEvents(u) {
          const l = this._player;
          l.triggerCallback && u.onStart(() => l.triggerCallback("start")),
            u.onDone(() => this.finish()),
            u.onDestroy(() => this.destroy());
        }
        _queueEvent(u, l) {
          W(this._queuedCallbacks, u, []).push(l);
        }
        onDone(u) {
          this.queued && this._queueEvent("done", u), this._player.onDone(u);
        }
        onStart(u) {
          this.queued && this._queueEvent("start", u), this._player.onStart(u);
        }
        onDestroy(u) {
          this.queued && this._queueEvent("destroy", u),
            this._player.onDestroy(u);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(u) {
          this.queued || this._player.setPosition(u);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(u) {
          const l = this._player;
          l.triggerCallback && l.triggerCallback(u);
        }
      }
      function qs(w) {
        return w && 1 === w.nodeType;
      }
      function di(w, u) {
        const l = w.style.display;
        return (w.style.display = null != u ? u : "none"), l;
      }
      function Ms(w, u, l, p, T) {
        const O = [];
        l.forEach((se) => O.push(di(se)));
        const $ = [];
        p.forEach((se, de) => {
          const be = {};
          se.forEach((Fe) => {
            const tt = (be[Fe] = u.computeStyle(de, Fe, T));
            (!tt || 0 == tt.length) && ((de[Lt] = Zt), $.push(de));
          }),
            w.set(de, be);
        });
        let G = 0;
        return l.forEach((se) => di(se, O[G++])), $;
      }
      function Oi(w, u) {
        const l = new Map();
        if ((w.forEach((G) => l.set(G, [])), 0 == u.length)) return l;
        const T = new Set(u),
          O = new Map();
        function $(G) {
          if (!G) return 1;
          let se = O.get(G);
          if (se) return se;
          const de = G.parentNode;
          return (
            (se = l.has(de) ? de : T.has(de) ? 1 : $(de)), O.set(G, se), se
          );
        }
        return (
          u.forEach((G) => {
            const se = $(G);
            1 !== se && l.get(se).push(G);
          }),
          l
        );
      }
      const hs = "$$classes";
      function Zn(w, u) {
        if (w.classList) w.classList.add(u);
        else {
          let l = w[hs];
          l || (l = w[hs] = {}), (l[u] = !0);
        }
      }
      function is(w, u) {
        if (w.classList) w.classList.remove(u);
        else {
          let l = w[hs];
          l && delete l[u];
        }
      }
      function Gi(w, u, l) {
        P(l).onDone(() => w.processLeaveNode(u));
      }
      function fi(w, u) {
        for (let l = 0; l < w.length; l++) {
          const p = w[l];
          p instanceof Y.ZE ? fi(p.players, u) : u.push(p);
        }
      }
      function Rs(w, u, l) {
        const p = l.get(w);
        if (!p) return !1;
        let T = u.get(w);
        return T ? p.forEach((O) => T.add(O)) : u.set(w, p), l.delete(w), !0;
      }
      class Un {
        constructor(u, l, p) {
          (this.bodyNode = u),
            (this._driver = l),
            (this._normalizer = p),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (T, O) => {}),
            (this._transitionEngine = new qn(u, l, p)),
            (this._timelineEngine = new re(u, l, p)),
            (this._transitionEngine.onRemovalComplete = (T, O) =>
              this.onRemovalComplete(T, O));
        }
        registerTrigger(u, l, p, T, O) {
          const $ = u + "-" + T;
          let G = this._triggerCache[$];
          if (!G) {
            const se = [],
              de = Tr(this._driver, O, se);
            if (se.length)
              throw new Error(
                `The animation trigger "${T}" has failed to build due to the following errors:\n - ${se.join(
                  "\n - "
                )}`
              );
            (G = (function (w, u, l) {
              return new Pe(w, u, l);
            })(T, de, this._normalizer)),
              (this._triggerCache[$] = G);
          }
          this._transitionEngine.registerTrigger(l, T, G);
        }
        register(u, l) {
          this._transitionEngine.register(u, l);
        }
        destroy(u, l) {
          this._transitionEngine.destroy(u, l);
        }
        onInsert(u, l, p, T) {
          this._transitionEngine.insertNode(u, l, p, T);
        }
        onRemove(u, l, p, T) {
          this._transitionEngine.removeNode(u, l, T || !1, p);
        }
        disableAnimations(u, l) {
          this._transitionEngine.markElementAsDisabled(u, l);
        }
        process(u, l, p, T) {
          if ("@" == p.charAt(0)) {
            const [O, $] = V(p);
            this._timelineEngine.command(O, l, $, T);
          } else this._transitionEngine.trigger(u, l, p, T);
        }
        listen(u, l, p, T, O) {
          if ("@" == p.charAt(0)) {
            const [$, G] = V(p);
            return this._timelineEngine.listen($, l, G, O);
          }
          return this._transitionEngine.listen(u, l, p, T, O);
        }
        flush(u = -1) {
          this._transitionEngine.flush(u);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function Os(w, u) {
        let l = null,
          p = null;
        return (
          Array.isArray(u) && u.length
            ? ((l = Ps(u[0])), u.length > 1 && (p = Ps(u[u.length - 1])))
            : u && (l = Ps(u)),
          l || p ? new os(w, l, p) : null
        );
      }
      let os = (() => {
        class w {
          constructor(l, p, T) {
            (this._element = l),
              (this._startStyles = p),
              (this._endStyles = T),
              (this._state = 0);
            let O = w.initialStylesByElement.get(l);
            O || w.initialStylesByElement.set(l, (O = {})),
              (this._initialStyles = O);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                tn(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (tn(this._element, this._initialStyles),
                this._endStyles &&
                  (tn(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (w.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (zn(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (zn(this._element, this._endStyles),
                  (this._endStyles = null)),
                tn(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (w.initialStylesByElement = new WeakMap()), w;
      })();
      function Ps(w) {
        let u = null;
        const l = Object.keys(w);
        for (let p = 0; p < l.length; p++) {
          const T = l[p];
          hi(T) && ((u = u || {}), (u[T] = w[T]));
        }
        return u;
      }
      function hi(w) {
        return "display" === w || "position" === w;
      }
      const pi = "animation",
        Br = "animationend";
      class gi {
        constructor(u, l, p, T, O, $, G) {
          (this._element = u),
            (this._name = l),
            (this._duration = p),
            (this._delay = T),
            (this._easing = O),
            (this._fillMode = $),
            (this._onDoneFn = G),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (se) => this._handleCallback(se));
        }
        apply() {
          (function (w, u) {
            const l = Zr(w, "").trim();
            let p = 0;
            l.length &&
              ((function (w, u) {
                let l = 0;
                for (let p = 0; p < w.length; p++) "," === w.charAt(p) && l++;
                return l;
              })(l) + 1,
              (u = `${l}, ${u}`)),
              In(w, "", u);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            yi(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Zs(this._element, this._name, "paused");
        }
        resume() {
          Zs(this._element, this._name, "running");
        }
        setPosition(u) {
          const l = Js(this._element, this._name);
          (this._position = u * this._duration),
            In(this._element, "Delay", `-${this._position}ms`, l);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(u) {
          const l = u._ngTestManualTimestamp || Date.now(),
            p = 1e3 * parseFloat(u.elapsedTime.toFixed(3));
          u.animationName == this._name &&
            Math.max(l - this._startTime, 0) >= this._delay &&
            p >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            yi(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (w, u) {
              const p = Zr(w, "").split(","),
                T = Sn(p, u);
              T >= 0 && (p.splice(T, 1), In(w, "", p.join(",")));
            })(this._element, this._name));
        }
      }
      function Zs(w, u, l) {
        In(w, "PlayState", l, Js(w, u));
      }
      function Js(w, u) {
        const l = Zr(w, "");
        return l.indexOf(",") > 0 ? Sn(l.split(","), u) : Sn([l], u);
      }
      function Sn(w, u) {
        for (let l = 0; l < w.length; l++) if (w[l].indexOf(u) >= 0) return l;
        return -1;
      }
      function yi(w, u, l) {
        l ? w.removeEventListener(Br, u) : w.addEventListener(Br, u);
      }
      function In(w, u, l, p) {
        const T = pi + u;
        if (null != p) {
          const O = w.style[T];
          if (O.length) {
            const $ = O.split(",");
            ($[p] = l), (l = $.join(","));
          }
        }
        w.style[T] = l;
      }
      function Zr(w, u) {
        return w.style[pi + u] || "";
      }
      class Xs {
        constructor(u, l, p, T, O, $, G, se) {
          (this.element = u),
            (this.keyframes = l),
            (this.animationName = p),
            (this._duration = T),
            (this._delay = O),
            (this._finalStyles = G),
            (this._specialStyles = se),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = $ || "linear"),
            (this.totalTime = T + O),
            this._buildStyler();
        }
        onStart(u) {
          this._onStartFns.push(u);
        }
        onDone(u) {
          this._onDoneFns.push(u);
        }
        onDestroy(u) {
          this._onDestroyFns.push(u);
        }
        destroy() {
          this.init(),
            !(this._state >= 4) &&
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((u) => u()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((u) => u()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((u) => u()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            !(this._state >= 3) &&
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(u) {
          this._styler.setPosition(u);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          (this._state = 0),
            this._styler.destroy(),
            this._buildStyler(),
            this._styler.apply();
        }
        _buildStyler() {
          this._styler = new gi(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(u) {
          const l = "start" == u ? this._onStartFns : this._onDoneFns;
          l.forEach((p) => p()), (l.length = 0);
        }
        beforeDestroy() {
          this.init();
          const u = {};
          if (this.hasStarted()) {
            const l = this._state >= 3;
            Object.keys(this._finalStyles).forEach((p) => {
              "offset" != p &&
                (u[p] = l ? this._finalStyles[p] : He(this.element, p));
            });
          }
          this.currentSnapshot = u;
        }
      }
      class qi extends Y.ZN {
        constructor(u, l) {
          super(),
            (this.element = u),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = at(l));
        }
        init() {
          this.__initialized ||
            !this._startingStyles ||
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((u) => {
              this._startingStyles[u] = this.element.style[u];
            }),
            super.init());
        }
        play() {
          !this._startingStyles ||
            (this.init(),
            Object.keys(this._styles).forEach((u) =>
              this.element.style.setProperty(u, this._styles[u])
            ),
            super.play());
        }
        destroy() {
          !this._startingStyles ||
            (Object.keys(this._startingStyles).forEach((u) => {
              const l = this._startingStyles[u];
              l
                ? this.element.style.setProperty(u, l)
                : this.element.style.removeProperty(u);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class y {
        constructor() {
          this._count = 0;
        }
        validateStyleProperty(u) {
          return et(u);
        }
        matchesElement(u, l) {
          return on(u, l);
        }
        containsElement(u, l) {
          return bn(u, l);
        }
        query(u, l, p) {
          return Nt(u, l, p);
        }
        computeStyle(u, l, p) {
          return window.getComputedStyle(u)[l];
        }
        buildKeyframeElement(u, l, p) {
          p = p.map((G) => at(G));
          let T = `@keyframes ${l} {\n`,
            O = "";
          p.forEach((G) => {
            O = " ";
            const se = parseFloat(G.offset);
            (T += `${O}${100 * se}% {\n`),
              (O += " "),
              Object.keys(G).forEach((de) => {
                const be = G[de];
                switch (de) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      be && (T += `${O}animation-timing-function: ${be};\n`)
                    );
                  default:
                    return void (T += `${O}${de}: ${be};\n`);
                }
              }),
              (T += `${O}}\n`);
          }),
            (T += "}\n");
          const $ = document.createElement("style");
          return ($.textContent = T), $;
        }
        animate(u, l, p, T, O, $ = [], G) {
          const se = $.filter((ct) => ct instanceof Xs),
            de = {};
          xn(p, T) &&
            se.forEach((ct) => {
              let Jt = ct.currentSnapshot;
              Object.keys(Jt).forEach((Xt) => (de[Xt] = Jt[Xt]));
            });
          const be = (function (w) {
            let u = {};
            return (
              w &&
                (Array.isArray(w) ? w : [w]).forEach((p) => {
                  Object.keys(p).forEach((T) => {
                    "offset" == T || "easing" == T || (u[T] = p[T]);
                  });
                }),
              u
            );
          })((l = Pt(u, l, de)));
          if (0 == p) return new qi(u, be);
          const Fe = "gen_css_kf_" + this._count++,
            tt = this.buildKeyframeElement(u, Fe, l);
          (function (w) {
            var u;
            const l =
              null === (u = w.getRootNode) || void 0 === u ? void 0 : u.call(w);
            return "undefined" != typeof ShadowRoot && l instanceof ShadowRoot
              ? l
              : document.head;
          })(u).appendChild(tt);
          const $e = Os(u, l),
            Xe = new Xs(u, l, Fe, p, T, O, be, $e);
          return (
            Xe.onDestroy(() => {
              var w;
              (w = tt).parentNode.removeChild(w);
            }),
            Xe
          );
        }
      }
      class rt {
        constructor(u, l, p, T) {
          (this.element = u),
            (this.keyframes = l),
            (this.options = p),
            (this._specialStyles = T),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = p.duration),
            (this._delay = p.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((u) => u()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const u = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            u,
            this.options
          )),
            (this._finalKeyframe = u.length ? u[u.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(u, l, p) {
          return u.animate(l, p);
        }
        onStart(u) {
          this._onStartFns.push(u);
        }
        onDone(u) {
          this._onDoneFns.push(u);
        }
        onDestroy(u) {
          this._onDestroyFns.push(u);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((u) => u()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((u) => u()),
            (this._onDestroyFns = []));
        }
        setPosition(u) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = u * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const u = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((l) => {
              "offset" != l &&
                (u[l] = this._finished
                  ? this._finalKeyframe[l]
                  : He(this.element, l));
            }),
            (this.currentSnapshot = u);
        }
        triggerCallback(u) {
          const l = "start" == u ? this._onStartFns : this._onDoneFns;
          l.forEach((p) => p()), (l.length = 0);
        }
      }
      class jt {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            ut().toString()
          )),
            (this._cssKeyframesDriver = new y());
        }
        validateStyleProperty(u) {
          return et(u);
        }
        matchesElement(u, l) {
          return on(u, l);
        }
        containsElement(u, l) {
          return bn(u, l);
        }
        query(u, l, p) {
          return Nt(u, l, p);
        }
        computeStyle(u, l, p) {
          return window.getComputedStyle(u)[l];
        }
        overrideWebAnimationsSupport(u) {
          this._isNativeImpl = u;
        }
        animate(u, l, p, T, O, $ = [], G) {
          if (!G && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(u, l, p, T, O, $);
          const be = {
            duration: p,
            delay: T,
            fill: 0 == T ? "both" : "forwards",
          };
          O && (be.easing = O);
          const Fe = {},
            tt = $.filter(($e) => $e instanceof rt);
          xn(p, T) &&
            tt.forEach(($e) => {
              let Xe = $e.currentSnapshot;
              Object.keys(Xe).forEach((ct) => (Fe[ct] = Xe[ct]));
            });
          const Et = Os(u, (l = Pt(u, (l = l.map(($e) => Pn($e, !1))), Fe)));
          return new rt(u, l, be, Et);
        }
      }
      function ut() {
        return (Q() && Element.prototype.animate) || {};
      }
      var wt = b(8583);
      let Ut = (() => {
        class w extends Y._j {
          constructor(l, p) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = l.createRenderer(p.body, {
                id: "0",
                encapsulation: E.ifc.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(l) {
            const p = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const T = Array.isArray(l) ? (0, Y.vP)(l) : l;
            return (
              An(this._renderer, null, p, "register", [T]),
              new cn(p, this._renderer)
            );
          }
        }
        return (
          (w.??fac = function (l) {
            return new (l || w)(E.LFG(E.FYo), E.LFG(wt.K0));
          }),
          (w.??prov = E.Yz7({ token: w, factory: w.??fac })),
          w
        );
      })();
      class cn extends Y.LC {
        constructor(u, l) {
          super(), (this._id = u), (this._renderer = l);
        }
        create(u, l) {
          return new jr(this._id, u, l || {}, this._renderer);
        }
      }
      class jr {
        constructor(u, l, p, T) {
          (this.id = u),
            (this.element = l),
            (this._renderer = T),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", p);
        }
        _listen(u, l) {
          return this._renderer.listen(this.element, `@@${this.id}:${u}`, l);
        }
        _command(u, ...l) {
          return An(this._renderer, this.element, this.id, u, l);
        }
        onDone(u) {
          this._listen("done", u);
        }
        onStart(u) {
          this._listen("start", u);
        }
        onDestroy(u) {
          this._listen("destroy", u);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(u) {
          this._command("setPosition", u);
        }
        getPosition() {
          var u, l;
          return null !==
            (l =
              null === (u = this._renderer.engine.players[+this.id]) ||
              void 0 === u
                ? void 0
                : u.getPosition()) && void 0 !== l
            ? l
            : 0;
        }
      }
      function An(w, u, l, p, T) {
        return w.setProperty(u, `@@${l}:${p}`, T);
      }
      const Jn = "@.disabled";
      let ze = (() => {
        class w {
          constructor(l, p, T) {
            (this.delegate = l),
              (this.engine = p),
              (this._zone = T),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (p.onRemovalComplete = (O, $) => {
                $ && $.parentNode(O) && $.removeChild(O.parentNode, O);
              });
          }
          createRenderer(l, p) {
            const O = this.delegate.createRenderer(l, p);
            if (!(l && p && p.data && p.data.animation)) {
              let be = this._rendererCache.get(O);
              return (
                be ||
                  ((be = new Jr("", O, this.engine)),
                  this._rendererCache.set(O, be)),
                be
              );
            }
            const $ = p.id,
              G = p.id + "-" + this._currentId;
            this._currentId++, this.engine.register(G, l);
            const se = (be) => {
              Array.isArray(be)
                ? be.forEach(se)
                : this.engine.registerTrigger($, G, l, be.name, be);
            };
            return (
              p.data.animation.forEach(se), new Ei(this, G, O, this.engine)
            );
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(l, p, T) {
            l >= 0 && l < this._microtaskId
              ? this._zone.run(() => p(T))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((O) => {
                        const [$, G] = O;
                        $(G);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([p, T]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (w.??fac = function (l) {
            return new (l || w)(E.LFG(E.FYo), E.LFG(Un), E.LFG(E.R0b));
          }),
          (w.??prov = E.Yz7({ token: w, factory: w.??fac })),
          w
        );
      })();
      class Jr {
        constructor(u, l, p) {
          (this.namespaceId = u),
            (this.delegate = l),
            (this.engine = p),
            (this.destroyNode = this.delegate.destroyNode
              ? (T) => l.destroyNode(T)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(u, l) {
          return this.delegate.createElement(u, l);
        }
        createComment(u) {
          return this.delegate.createComment(u);
        }
        createText(u) {
          return this.delegate.createText(u);
        }
        appendChild(u, l) {
          this.delegate.appendChild(u, l),
            this.engine.onInsert(this.namespaceId, l, u, !1);
        }
        insertBefore(u, l, p, T = !0) {
          this.delegate.insertBefore(u, l, p),
            this.engine.onInsert(this.namespaceId, l, u, T);
        }
        removeChild(u, l, p) {
          this.engine.onRemove(this.namespaceId, l, this.delegate, p);
        }
        selectRootElement(u, l) {
          return this.delegate.selectRootElement(u, l);
        }
        parentNode(u) {
          return this.delegate.parentNode(u);
        }
        nextSibling(u) {
          return this.delegate.nextSibling(u);
        }
        setAttribute(u, l, p, T) {
          this.delegate.setAttribute(u, l, p, T);
        }
        removeAttribute(u, l, p) {
          this.delegate.removeAttribute(u, l, p);
        }
        addClass(u, l) {
          this.delegate.addClass(u, l);
        }
        removeClass(u, l) {
          this.delegate.removeClass(u, l);
        }
        setStyle(u, l, p, T) {
          this.delegate.setStyle(u, l, p, T);
        }
        removeStyle(u, l, p) {
          this.delegate.removeStyle(u, l, p);
        }
        setProperty(u, l, p) {
          "@" == l.charAt(0) && l == Jn
            ? this.disableAnimations(u, !!p)
            : this.delegate.setProperty(u, l, p);
        }
        setValue(u, l) {
          this.delegate.setValue(u, l);
        }
        listen(u, l, p) {
          return this.delegate.listen(u, l, p);
        }
        disableAnimations(u, l) {
          this.engine.disableAnimations(u, l);
        }
      }
      class Ei extends Jr {
        constructor(u, l, p, T) {
          super(l, p, T), (this.factory = u), (this.namespaceId = l);
        }
        setProperty(u, l, p) {
          "@" == l.charAt(0)
            ? "." == l.charAt(1) && l == Jn
              ? this.disableAnimations(u, (p = void 0 === p || !!p))
              : this.engine.process(this.namespaceId, u, l.substr(1), p)
            : this.delegate.setProperty(u, l, p);
        }
        listen(u, l, p) {
          if ("@" == l.charAt(0)) {
            const T = (function (w) {
              switch (w) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return w;
              }
            })(u);
            let O = l.substr(1),
              $ = "";
            return (
              "@" != O.charAt(0) &&
                ([O, $] = (function (w) {
                  const u = w.indexOf(".");
                  return [w.substring(0, u), w.substr(u + 1)];
                })(O)),
              this.engine.listen(this.namespaceId, T, O, $, (G) => {
                this.factory.scheduleListenerCallback(G._data || -1, p, G);
              })
            );
          }
          return this.delegate.listen(u, l, p);
        }
      }
      let Zi = (() => {
        class w extends Un {
          constructor(l, p, T) {
            super(l.body, p, T);
          }
          ngOnDestroy() {
            this.flush();
          }
        }
        return (
          (w.??fac = function (l) {
            return new (l || w)(E.LFG(wt.K0), E.LFG(Ue), E.LFG(jn));
          }),
          (w.??prov = E.Yz7({ token: w, factory: w.??fac })),
          w
        );
      })();
      const _t = new E.OlP("AnimationModuleType"),
        xi = [
          { provide: Y._j, useClass: Ut },
          {
            provide: jn,
            useFactory: function () {
              return new Yn();
            },
          },
          { provide: Un, useClass: Zi },
          {
            provide: E.FYo,
            useFactory: function (w, u, l) {
              return new ze(w, u, l);
            },
            deps: [v.se, Un, E.R0b],
          },
        ],
        dn = [
          {
            provide: Ue,
            useFactory: function () {
              return "function" == typeof ut() ? new jt() : new y();
            },
          },
          { provide: _t, useValue: "BrowserAnimations" },
          ...xi,
        ],
        Ni = [
          { provide: Ue, useClass: dt },
          { provide: _t, useValue: "NoopAnimations" },
          ...xi,
        ];
      let ti = (() => {
        class w {
          static withConfig(l) {
            return { ngModule: w, providers: l.disableAnimations ? Ni : dn };
          }
        }
        return (
          (w.??fac = function (l) {
            return new (l || w)();
          }),
          (w.??mod = E.oAB({ type: w })),
          (w.??inj = E.cJS({ providers: dn, imports: [v.b2] })),
          w
        );
      })();
    },
    9075: (X, U, b) => {
      "use strict";
      b.d(U, { b2: () => Sr, H7: () => lt, q6: () => or, se: () => On });
      var E = b(8583),
        v = b(7716);
      class Y extends E.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Q extends Y {
        static makeCurrent() {
          (0, E.HT)(new Q());
        }
        onAndCancel(q, j, ne) {
          return (
            q.addEventListener(j, ne, !1),
            () => {
              q.removeEventListener(j, ne, !1);
            }
          );
        }
        dispatchEvent(q, j) {
          q.dispatchEvent(j);
        }
        remove(q) {
          q.parentNode && q.parentNode.removeChild(q);
        }
        createElement(q, j) {
          return (j = j || this.getDefaultDocument()).createElement(q);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(q) {
          return q.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(q) {
          return q instanceof DocumentFragment;
        }
        getGlobalEventTarget(q, j) {
          return "window" === j
            ? window
            : "document" === j
            ? q
            : "body" === j
            ? q.body
            : null;
        }
        getBaseHref(q) {
          const j =
            ((B = B || document.querySelector("base")),
            B ? B.getAttribute("href") : null);
          return null == j
            ? null
            : (function (ee) {
                (L = L || document.createElement("a")),
                  L.setAttribute("href", ee);
                const q = L.pathname;
                return "/" === q.charAt(0) ? q : `/${q}`;
              })(j);
        }
        resetBaseElement() {
          B = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(q) {
          return (0, E.Mx)(document.cookie, q);
        }
      }
      let L,
        B = null;
      const N = new v.OlP("TRANSITION_ID"),
        W = [
          {
            provide: v.ip1,
            useFactory: function (ee, q, j) {
              return () => {
                j.get(v.CZH).donePromise.then(() => {
                  const ne = (0, E.q)(),
                    he = q.querySelectorAll(`style[ng-transition="${ee}"]`);
                  for (let Pe = 0; Pe < he.length; Pe++) ne.remove(he[Pe]);
                });
              };
            },
            deps: [N, E.K0, v.zs3],
            multi: !0,
          },
        ];
      class V {
        static init() {
          (0, v.VLi)(new V());
        }
        addToWindow(q) {
          (v.dqk.getAngularTestability = (ne, he = !0) => {
            const Pe = q.findTestabilityInTree(ne, he);
            if (null == Pe)
              throw new Error("Could not find testability for element.");
            return Pe;
          }),
            (v.dqk.getAllAngularTestabilities = () => q.getAllTestabilities()),
            (v.dqk.getAllAngularRootElements = () => q.getAllRootElements()),
            v.dqk.frameworkStabilizers || (v.dqk.frameworkStabilizers = []),
            v.dqk.frameworkStabilizers.push((ne) => {
              const he = v.dqk.getAllAngularTestabilities();
              let Pe = he.length,
                Ye = !1;
              const k = function (oe) {
                (Ye = Ye || oe), Pe--, 0 == Pe && ne(Ye);
              };
              he.forEach(function (oe) {
                oe.whenStable(k);
              });
            });
        }
        findTestabilityInTree(q, j, ne) {
          if (null == j) return null;
          const he = q.getTestability(j);
          return null != he
            ? he
            : ne
            ? (0, E.q)().isShadowRoot(j)
              ? this.findTestabilityInTree(q, j.host, !0)
              : this.findTestabilityInTree(q, j.parentElement, !0)
            : null;
        }
      }
      let te = (() => {
        class ee {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (ee.??fac = function (j) {
            return new (j || ee)();
          }),
          (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
          ee
        );
      })();
      const dt = new v.OlP("EventManagerPlugins");
      let Ue = (() => {
        class ee {
          constructor(j, ne) {
            (this._zone = ne),
              (this._eventNameToPlugin = new Map()),
              j.forEach((he) => (he.manager = this)),
              (this._plugins = j.slice().reverse());
          }
          addEventListener(j, ne, he) {
            return this._findPluginFor(ne).addEventListener(j, ne, he);
          }
          addGlobalEventListener(j, ne, he) {
            return this._findPluginFor(ne).addGlobalEventListener(j, ne, he);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(j) {
            const ne = this._eventNameToPlugin.get(j);
            if (ne) return ne;
            const he = this._plugins;
            for (let Pe = 0; Pe < he.length; Pe++) {
              const Ye = he[Pe];
              if (Ye.supports(j)) return this._eventNameToPlugin.set(j, Ye), Ye;
            }
            throw new Error(`No event manager plugin found for event ${j}`);
          }
        }
        return (
          (ee.??fac = function (j) {
            return new (j || ee)(v.LFG(dt), v.LFG(v.R0b));
          }),
          (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
          ee
        );
      })();
      class ht {
        constructor(q) {
          this._doc = q;
        }
        addGlobalEventListener(q, j, ne) {
          const he = (0, E.q)().getGlobalEventTarget(this._doc, q);
          if (!he)
            throw new Error(`Unsupported event target ${he} for event ${j}`);
          return this.addEventListener(he, j, ne);
        }
      }
      let Me = (() => {
          class ee {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(j) {
              const ne = new Set();
              j.forEach((he) => {
                this._stylesSet.has(he) ||
                  (this._stylesSet.add(he), ne.add(he));
              }),
                this.onStylesAdded(ne);
            }
            onStylesAdded(j) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (ee.??fac = function (j) {
              return new (j || ee)();
            }),
            (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
            ee
          );
        })(),
        Gt = (() => {
          class ee extends Me {
            constructor(j) {
              super(),
                (this._doc = j),
                (this._hostNodes = new Map()),
                this._hostNodes.set(j.head, []);
            }
            _addStylesToHost(j, ne, he) {
              j.forEach((Pe) => {
                const Ye = this._doc.createElement("style");
                (Ye.textContent = Pe), he.push(ne.appendChild(Ye));
              });
            }
            addHost(j) {
              const ne = [];
              this._addStylesToHost(this._stylesSet, j, ne),
                this._hostNodes.set(j, ne);
            }
            removeHost(j) {
              const ne = this._hostNodes.get(j);
              ne && ne.forEach(xr), this._hostNodes.delete(j);
            }
            onStylesAdded(j) {
              this._hostNodes.forEach((ne, he) => {
                this._addStylesToHost(j, he, ne);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((j) => j.forEach(xr));
            }
          }
          return (
            (ee.??fac = function (j) {
              return new (j || ee)(v.LFG(E.K0));
            }),
            (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
            ee
          );
        })();
      function xr(ee) {
        (0, E.q)().remove(ee);
      }
      const tr = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Nr = /%COMP%/g;
      function Rn(ee, q, j) {
        for (let ne = 0; ne < q.length; ne++) {
          let he = q[ne];
          Array.isArray(he)
            ? Rn(ee, he, j)
            : ((he = he.replace(Nr, ee)), j.push(he));
        }
        return j;
      }
      function kt(ee) {
        return (q) => {
          if ("__ngUnwrap__" === q) return ee;
          !1 === ee(q) && (q.preventDefault(), (q.returnValue = !1));
        };
      }
      let On = (() => {
        class ee {
          constructor(j, ne, he) {
            (this.eventManager = j),
              (this.sharedStylesHost = ne),
              (this.appId = he),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Fr(j));
          }
          createRenderer(j, ne) {
            if (!j || !ne) return this.defaultRenderer;
            switch (ne.encapsulation) {
              case v.ifc.Emulated: {
                let he = this.rendererByCompId.get(ne.id);
                return (
                  he ||
                    ((he = new tn(
                      this.eventManager,
                      this.sharedStylesHost,
                      ne,
                      this.appId
                    )),
                    this.rendererByCompId.set(ne.id, he)),
                  he.applyToHost(j),
                  he
                );
              }
              case 1:
              case v.ifc.ShadowDom:
                return new zn(this.eventManager, this.sharedStylesHost, j, ne);
              default:
                if (!this.rendererByCompId.has(ne.id)) {
                  const he = Rn(ne.id, ne.styles, []);
                  this.sharedStylesHost.addStyles(he),
                    this.rendererByCompId.set(ne.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (ee.??fac = function (j) {
            return new (j || ee)(v.LFG(Ue), v.LFG(Gt), v.LFG(v.AFp));
          }),
          (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
          ee
        );
      })();
      class Fr {
        constructor(q) {
          (this.eventManager = q), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(q, j) {
          return j
            ? document.createElementNS(tr[j] || j, q)
            : document.createElement(q);
        }
        createComment(q) {
          return document.createComment(q);
        }
        createText(q) {
          return document.createTextNode(q);
        }
        appendChild(q, j) {
          q.appendChild(j);
        }
        insertBefore(q, j, ne) {
          q && q.insertBefore(j, ne);
        }
        removeChild(q, j) {
          q && q.removeChild(j);
        }
        selectRootElement(q, j) {
          let ne = "string" == typeof q ? document.querySelector(q) : q;
          if (!ne)
            throw new Error(`The selector "${q}" did not match any elements`);
          return j || (ne.textContent = ""), ne;
        }
        parentNode(q) {
          return q.parentNode;
        }
        nextSibling(q) {
          return q.nextSibling;
        }
        setAttribute(q, j, ne, he) {
          if (he) {
            j = he + ":" + j;
            const Pe = tr[he];
            Pe ? q.setAttributeNS(Pe, j, ne) : q.setAttribute(j, ne);
          } else q.setAttribute(j, ne);
        }
        removeAttribute(q, j, ne) {
          if (ne) {
            const he = tr[ne];
            he ? q.removeAttributeNS(he, j) : q.removeAttribute(`${ne}:${j}`);
          } else q.removeAttribute(j);
        }
        addClass(q, j) {
          q.classList.add(j);
        }
        removeClass(q, j) {
          q.classList.remove(j);
        }
        setStyle(q, j, ne, he) {
          he & (v.JOm.DashCase | v.JOm.Important)
            ? q.style.setProperty(
                j,
                ne,
                he & v.JOm.Important ? "important" : ""
              )
            : (q.style[j] = ne);
        }
        removeStyle(q, j, ne) {
          ne & v.JOm.DashCase ? q.style.removeProperty(j) : (q.style[j] = "");
        }
        setProperty(q, j, ne) {
          q[j] = ne;
        }
        setValue(q, j) {
          q.nodeValue = j;
        }
        listen(q, j, ne) {
          return "string" == typeof q
            ? this.eventManager.addGlobalEventListener(q, j, kt(ne))
            : this.eventManager.addEventListener(q, j, kt(ne));
        }
      }
      class tn extends Fr {
        constructor(q, j, ne, he) {
          super(q), (this.component = ne);
          const Pe = Rn(he + "-" + ne.id, ne.styles, []);
          j.addStyles(Pe),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              Nr,
              he + "-" + ne.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(Nr, he + "-" + ne.id));
        }
        applyToHost(q) {
          super.setAttribute(q, this.hostAttr, "");
        }
        createElement(q, j) {
          const ne = super.createElement(q, j);
          return super.setAttribute(ne, this.contentAttr, ""), ne;
        }
      }
      class zn extends Fr {
        constructor(q, j, ne, he) {
          super(q),
            (this.sharedStylesHost = j),
            (this.hostEl = ne),
            (this.shadowRoot = ne.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Pe = Rn(he.id, he.styles, []);
          for (let Ye = 0; Ye < Pe.length; Ye++) {
            const k = document.createElement("style");
            (k.textContent = Pe[Ye]), this.shadowRoot.appendChild(k);
          }
        }
        nodeOrShadowRoot(q) {
          return q === this.hostEl ? this.shadowRoot : q;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(q, j) {
          return super.appendChild(this.nodeOrShadowRoot(q), j);
        }
        insertBefore(q, j, ne) {
          return super.insertBefore(this.nodeOrShadowRoot(q), j, ne);
        }
        removeChild(q, j) {
          return super.removeChild(this.nodeOrShadowRoot(q), j);
        }
        parentNode(q) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(q))
          );
        }
      }
      let Vn = (() => {
        class ee extends ht {
          constructor(j) {
            super(j);
          }
          supports(j) {
            return !0;
          }
          addEventListener(j, ne, he) {
            return (
              j.addEventListener(ne, he, !1),
              () => this.removeEventListener(j, ne, he)
            );
          }
          removeEventListener(j, ne, he) {
            return j.removeEventListener(ne, he);
          }
        }
        return (
          (ee.??fac = function (j) {
            return new (j || ee)(v.LFG(E.K0));
          }),
          (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
          ee
        );
      })();
      const Pt = ["alt", "control", "meta", "shift"],
        He = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        wr = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Lr = {
          alt: (ee) => ee.altKey,
          control: (ee) => ee.ctrlKey,
          meta: (ee) => ee.metaKey,
          shift: (ee) => ee.shiftKey,
        };
      let Ct = (() => {
          class ee extends ht {
            constructor(j) {
              super(j);
            }
            supports(j) {
              return null != ee.parseEventName(j);
            }
            addEventListener(j, ne, he) {
              const Pe = ee.parseEventName(ne),
                Ye = ee.eventCallback(Pe.fullKey, he, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() =>
                  (0, E.q)().onAndCancel(j, Pe.domEventName, Ye)
                );
            }
            static parseEventName(j) {
              const ne = j.toLowerCase().split("."),
                he = ne.shift();
              if (0 === ne.length || ("keydown" !== he && "keyup" !== he))
                return null;
              const Pe = ee._normalizeKey(ne.pop());
              let Ye = "";
              if (
                (Pt.forEach((oe) => {
                  const re = ne.indexOf(oe);
                  re > -1 && (ne.splice(re, 1), (Ye += oe + "."));
                }),
                (Ye += Pe),
                0 != ne.length || 0 === Pe.length)
              )
                return null;
              const k = {};
              return (k.domEventName = he), (k.fullKey = Ye), k;
            }
            static getEventFullKey(j) {
              let ne = "",
                he = (function (ee) {
                  let q = ee.key;
                  if (null == q) {
                    if (((q = ee.keyIdentifier), null == q))
                      return "Unidentified";
                    q.startsWith("U+") &&
                      ((q = String.fromCharCode(parseInt(q.substring(2), 16))),
                      3 === ee.location && wr.hasOwnProperty(q) && (q = wr[q]));
                  }
                  return He[q] || q;
                })(j);
              return (
                (he = he.toLowerCase()),
                " " === he ? (he = "space") : "." === he && (he = "dot"),
                Pt.forEach((Pe) => {
                  Pe != he && Lr[Pe](j) && (ne += Pe + ".");
                }),
                (ne += he),
                ne
              );
            }
            static eventCallback(j, ne, he) {
              return (Pe) => {
                ee.getEventFullKey(Pe) === j && he.runGuarded(() => ne(Pe));
              };
            }
            static _normalizeKey(j) {
              return "esc" === j ? "escape" : j;
            }
          }
          return (
            (ee.??fac = function (j) {
              return new (j || ee)(v.LFG(E.K0));
            }),
            (ee.??prov = v.Yz7({ token: ee, factory: ee.??fac })),
            ee
          );
        })(),
        lt = (() => {
          class ee {}
          return (
            (ee.??fac = function (j) {
              return new (j || ee)();
            }),
            (ee.??prov = (0, v.Yz7)({
              factory: function () {
                return (0, v.LFG)(Tn);
              },
              token: ee,
              providedIn: "root",
            })),
            ee
          );
        })(),
        Tn = (() => {
          class ee extends lt {
            constructor(j) {
              super(), (this._doc = j);
            }
            sanitize(j, ne) {
              if (null == ne) return null;
              switch (j) {
                case v.q3G.NONE:
                  return ne;
                case v.q3G.HTML:
                  return (0, v.qzn)(ne, "HTML")
                    ? (0, v.z3N)(ne)
                    : (0, v.EiD)(this._doc, String(ne)).toString();
                case v.q3G.STYLE:
                  return (0, v.qzn)(ne, "Style") ? (0, v.z3N)(ne) : ne;
                case v.q3G.SCRIPT:
                  if ((0, v.qzn)(ne, "Script")) return (0, v.z3N)(ne);
                  throw new Error("unsafe value used in a script context");
                case v.q3G.URL:
                  return (
                    (0, v.yhl)(ne),
                    (0, v.qzn)(ne, "URL")
                      ? (0, v.z3N)(ne)
                      : (0, v.mCW)(String(ne))
                  );
                case v.q3G.RESOURCE_URL:
                  if ((0, v.qzn)(ne, "ResourceURL")) return (0, v.z3N)(ne);
                  throw new Error(
                    "unsafe value used in a resource URL context (see https://g.co/ng/security#xss)"
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${j} (see https://g.co/ng/security#xss)`
                  );
              }
            }
            bypassSecurityTrustHtml(j) {
              return (0, v.JVY)(j);
            }
            bypassSecurityTrustStyle(j) {
              return (0, v.L6k)(j);
            }
            bypassSecurityTrustScript(j) {
              return (0, v.eBb)(j);
            }
            bypassSecurityTrustUrl(j) {
              return (0, v.LAX)(j);
            }
            bypassSecurityTrustResourceUrl(j) {
              return (0, v.pB0)(j);
            }
          }
          return (
            (ee.??fac = function (j) {
              return new (j || ee)(v.LFG(E.K0));
            }),
            (ee.??prov = (0, v.Yz7)({
              factory: function () {
                return (function (ee) {
                  return new Tn(ee.get(E.K0));
                })((0, v.LFG)(v.gxx));
              },
              token: ee,
              providedIn: "root",
            })),
            ee
          );
        })();
      const or = (0, v.eFA)(v._c5, "browser", [
          { provide: v.Lbi, useValue: E.bD },
          {
            provide: v.g9A,
            useValue: function () {
              Q.makeCurrent(), V.init();
            },
            multi: !0,
          },
          {
            provide: E.K0,
            useFactory: function () {
              return (0, v.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        fr = [
          [],
          { provide: v.zSh, useValue: "root" },
          {
            provide: v.qLn,
            useFactory: function () {
              return new v.qLn();
            },
            deps: [],
          },
          { provide: dt, useClass: Vn, multi: !0, deps: [E.K0, v.R0b, v.Lbi] },
          { provide: dt, useClass: Ct, multi: !0, deps: [E.K0] },
          [],
          { provide: On, useClass: On, deps: [Ue, Gt, v.AFp] },
          { provide: v.FYo, useExisting: On },
          { provide: Me, useExisting: Gt },
          { provide: Gt, useClass: Gt, deps: [E.K0] },
          { provide: v.dDg, useClass: v.dDg, deps: [v.R0b] },
          { provide: Ue, useClass: Ue, deps: [dt, v.R0b] },
          { provide: E.JF, useClass: te, deps: [] },
          [],
        ];
      let Sr = (() => {
        class ee {
          constructor(j) {
            if (j)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(j) {
            return {
              ngModule: ee,
              providers: [
                { provide: v.AFp, useValue: j.appId },
                { provide: N, useExisting: v.AFp },
                W,
              ],
            };
          }
        }
        return (
          (ee.??fac = function (j) {
            return new (j || ee)(v.LFG(ee, 12));
          }),
          (ee.??mod = v.oAB({ type: ee })),
          (ee.??inj = v.cJS({ providers: fr, imports: [E.ez, v.hGG] })),
          ee
        );
      })();
      "undefined" != typeof window && window;
    },
    5987: (X, U, b) => {
      "use strict";
      b.d(U, {
        gz: () => Pe,
        F0: () => mt,
        rH: () => Ge,
        yS: () => yt,
        Bz: () => Wd,
        lC: () => lr,
      });
      var E = b(8583),
        v = b(7716),
        Y = b(4402),
        Q = b(5917),
        B = b(6215),
        P = b(9112),
        L = b(7574),
        R = b(3410),
        N = b(8071),
        F = b(1439),
        W = b(9193),
        V = b(2441),
        te = b(9765),
        De = b(5435),
        ae = b(7393),
        ge = b(7108);
      function Re(h) {
        return function (c) {
          return 0 === h ? (0, W.c)() : c.lift(new me(h));
        };
      }
      class me {
        constructor(f) {
          if (((this.total = f), this.total < 0)) throw new ge.W();
        }
        call(f, c) {
          return c.subscribe(new we(f, this.total));
        }
      }
      class we extends ae.L {
        constructor(f, c) {
          super(f),
            (this.total = c),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(f) {
          const c = this.ring,
            _ = this.total,
            C = this.count++;
          c.length < _ ? c.push(f) : (c[C % _] = f);
        }
        _complete() {
          const f = this.destination;
          let c = this.count;
          if (c > 0) {
            const _ = this.count >= this.total ? this.total : this.count,
              C = this.ring;
            for (let I = 0; I < _; I++) {
              const H = c++ % _;
              f.next(C[H]);
            }
          }
          f.complete();
        }
      }
      var Le = b(4635),
        Ne = b(5242),
        Ee = b(4487),
        Ve = b(8002),
        on = b(3190),
        bn = b(5257),
        Nt = b(9761),
        at = b(2145),
        dt = b(5304),
        Ue = b(4612),
        ht = b(8049),
        Me = b(9773),
        Gt = b(3342),
        xr = b(1307),
        tr = b(8939),
        Nr = b(3282);
      class Mt {
        constructor(f, c) {
          (this.id = f), (this.url = c);
        }
      }
      class ft extends Mt {
        constructor(f, c, _ = "imperative", C = null) {
          super(f, c), (this.navigationTrigger = _), (this.restoredState = C);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class nr extends Mt {
        constructor(f, c, _) {
          super(f, c), (this.urlAfterRedirects = _);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class rs extends Mt {
        constructor(f, c, _) {
          super(f, c), (this.reason = _);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class kn extends Mt {
        constructor(f, c, _) {
          super(f, c), (this.error = _);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Dt extends Mt {
        constructor(f, c, _, C) {
          super(f, c), (this.urlAfterRedirects = _), (this.state = C);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Rn extends Mt {
        constructor(f, c, _, C) {
          super(f, c), (this.urlAfterRedirects = _), (this.state = C);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class kt extends Mt {
        constructor(f, c, _, C, I) {
          super(f, c),
            (this.urlAfterRedirects = _),
            (this.state = C),
            (this.shouldActivate = I);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class mn extends Mt {
        constructor(f, c, _, C) {
          super(f, c), (this.urlAfterRedirects = _), (this.state = C);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class On extends Mt {
        constructor(f, c, _, C) {
          super(f, c), (this.urlAfterRedirects = _), (this.state = C);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Fr {
        constructor(f) {
          this.route = f;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Pn {
        constructor(f) {
          this.route = f;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class br {
        constructor(f) {
          this.snapshot = f;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class rr {
        constructor(f) {
          this.snapshot = f;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class tn {
        constructor(f) {
          this.snapshot = f;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class zn {
        constructor(f) {
          this.snapshot = f;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Vn {
        constructor(f, c, _) {
          (this.routerEvent = f), (this.position = c), (this.anchor = _);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const Ce = "primary";
      class Vt {
        constructor(f) {
          this.params = f || {};
        }
        has(f) {
          return Object.prototype.hasOwnProperty.call(this.params, f);
        }
        get(f) {
          if (this.has(f)) {
            const c = this.params[f];
            return Array.isArray(c) ? c[0] : c;
          }
          return null;
        }
        getAll(f) {
          if (this.has(f)) {
            const c = this.params[f];
            return Array.isArray(c) ? c : [c];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function wn(h) {
        return new Vt(h);
      }
      const _n = "ngNavigationCancelingError";
      function sr(h) {
        const f = Error("NavigationCancelingError: " + h);
        return (f[_n] = !0), f;
      }
      function Bn(h, f, c) {
        const _ = c.path.split("/");
        if (
          _.length > h.length ||
          ("full" === c.pathMatch && (f.hasChildren() || _.length < h.length))
        )
          return null;
        const C = {};
        for (let I = 0; I < _.length; I++) {
          const H = _[I],
            Z = h[I];
          if (H.startsWith(":")) C[H.substring(1)] = Z;
          else if (H !== Z.path) return null;
        }
        return { consumed: h.slice(0, _.length), posParams: C };
      }
      function xn(h, f) {
        const c = h ? Object.keys(h) : void 0,
          _ = f ? Object.keys(f) : void 0;
        if (!c || !_ || c.length != _.length) return !1;
        let C;
        for (let I = 0; I < c.length; I++)
          if (((C = c[I]), !Pt(h[C], f[C]))) return !1;
        return !0;
      }
      function Pt(h, f) {
        if (Array.isArray(h) && Array.isArray(f)) {
          if (h.length !== f.length) return !1;
          const c = [...h].sort(),
            _ = [...f].sort();
          return c.every((C, I) => _[I] === C);
        }
        return h === f;
      }
      function Se(h) {
        return Array.prototype.concat.apply([], h);
      }
      function He(h) {
        return h.length > 0 ? h[h.length - 1] : null;
      }
      function Ht(h, f) {
        for (const c in h) h.hasOwnProperty(c) && f(h[c], c);
      }
      function nn(h) {
        return (0, v.CqO)(h)
          ? h
          : (0, v.QGY)(h)
          ? (0, Y.D)(Promise.resolve(h))
          : (0, Q.of)(h);
      }
      const pn = {
          exact: function lt(h, f, c) {
            if (
              !Fn(h.segments, f.segments) ||
              !ir(h.segments, f.segments, c) ||
              h.numberOfChildren !== f.numberOfChildren
            )
              return !1;
            for (const _ in f.children)
              if (!h.children[_] || !lt(h.children[_], f.children[_], c))
                return !1;
            return !0;
          },
          subset: Tn,
        },
        Lr = {
          exact: function (h, f) {
            return xn(h, f);
          },
          subset: function (h, f) {
            return (
              Object.keys(f).length <= Object.keys(h).length &&
              Object.keys(f).every((c) => Pt(h[c], f[c]))
            );
          },
          ignored: () => !0,
        };
      function Ct(h, f, c) {
        return (
          pn[c.paths](h.root, f.root, c.matrixParams) &&
          Lr[c.queryParams](h.queryParams, f.queryParams) &&
          !("exact" === c.fragment && h.fragment !== f.fragment)
        );
      }
      function Tn(h, f, c) {
        return ss(h, f, f.segments, c);
      }
      function ss(h, f, c, _) {
        if (h.segments.length > c.length) {
          const C = h.segments.slice(0, c.length);
          return !(!Fn(C, c) || f.hasChildren() || !ir(C, c, _));
        }
        if (h.segments.length === c.length) {
          if (!Fn(h.segments, c) || !ir(h.segments, c, _)) return !1;
          for (const C in f.children)
            if (!h.children[C] || !Tn(h.children[C], f.children[C], _))
              return !1;
          return !0;
        }
        {
          const C = c.slice(0, h.segments.length),
            I = c.slice(h.segments.length);
          return (
            !!(Fn(h.segments, C) && ir(h.segments, C, _) && h.children[Ce]) &&
            ss(h.children[Ce], f, I, _)
          );
        }
      }
      function ir(h, f, c) {
        return f.every((_, C) => Lr[c](h[C].parameters, _.parameters));
      }
      class Qt {
        constructor(f, c, _) {
          (this.root = f), (this.queryParams = c), (this.fragment = _);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = wn(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Sr.serialize(this);
        }
      }
      class qe {
        constructor(f, c) {
          (this.segments = f),
            (this.children = c),
            (this.parent = null),
            Ht(c, (_, C) => (_.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return kr(this);
        }
      }
      class dr {
        constructor(f, c) {
          (this.path = f), (this.parameters = c);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = wn(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return gr(this);
        }
      }
      function Fn(h, f) {
        return h.length === f.length && h.every((c, _) => c.path === f[_].path);
      }
      class or {}
      class fr {
        parse(f) {
          const c = new Ft(f);
          return new Qt(
            c.parseRootSegment(),
            c.parseQueryParams(),
            c.parseFragment()
          );
        }
        serialize(f) {
          const c = `/${hr(f.root, !0)}`,
            _ = (function (h) {
              const f = Object.keys(h)
                .map((c) => {
                  const _ = h[c];
                  return Array.isArray(_)
                    ? _.map((C) => `${pr(c)}=${pr(C)}`).join("&")
                    : `${pr(c)}=${pr(_)}`;
                })
                .filter((c) => !!c);
              return f.length ? `?${f.join("&")}` : "";
            })(f.queryParams);
          var h;
          return `${c}${_}${
            "string" == typeof f.fragment
              ? `#${((h = f.fragment), encodeURI(h))}`
              : ""
          }`;
        }
      }
      const Sr = new fr();
      function kr(h) {
        return h.segments.map((f) => gr(f)).join("/");
      }
      function hr(h, f) {
        if (!h.hasChildren()) return kr(h);
        if (f) {
          const c = h.children[Ce] ? hr(h.children[Ce], !1) : "",
            _ = [];
          return (
            Ht(h.children, (C, I) => {
              I !== Ce && _.push(`${I}:${hr(C, !1)}`);
            }),
            _.length > 0 ? `${c}(${_.join("//")})` : c
          );
        }
        {
          const c = (function (h, f) {
            let c = [];
            return (
              Ht(h.children, (_, C) => {
                C === Ce && (c = c.concat(f(_, C)));
              }),
              Ht(h.children, (_, C) => {
                C !== Ce && (c = c.concat(f(_, C)));
              }),
              c
            );
          })(h, (_, C) =>
            C === Ce ? [hr(h.children[Ce], !1)] : [`${C}:${hr(_, !1)}`]
          );
          return 1 === Object.keys(h.children).length && null != h.children[Ce]
            ? `${kr(h)}/${c[0]}`
            : `${kr(h)}/(${c.join("//")})`;
        }
      }
      function Yr(h) {
        return encodeURIComponent(h)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function pr(h) {
        return Yr(h).replace(/%3B/gi, ";");
      }
      function Ot(h) {
        return Yr(h)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function an(h) {
        return decodeURIComponent(h);
      }
      function sn(h) {
        return an(h.replace(/\+/g, "%20"));
      }
      function gr(h) {
        return `${Ot(h.path)}${(function (h) {
          return Object.keys(h)
            .map((f) => `;${Ot(f)}=${Ot(h[f])}`)
            .join("");
        })(h.parameters)}`;
      }
      const Je = /^[^\/()?;=#]+/;
      function vt(h) {
        const f = h.match(Je);
        return f ? f[0] : "";
      }
      const yn = /^[^=?&#]+/,
        qt = /^[^?&#]+/;
      class Ft {
        constructor(f) {
          (this.url = f), (this.remaining = f);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new qe([], {})
              : new qe([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const f = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(f);
            } while (this.consumeOptional("&"));
          return f;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const f = [];
          for (
            this.peekStartsWith("(") || f.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), f.push(this.parseSegment());
          let c = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (c = this.parseParens(!0)));
          let _ = {};
          return (
            this.peekStartsWith("(") && (_ = this.parseParens(!1)),
            (f.length > 0 || Object.keys(c).length > 0) &&
              (_[Ce] = new qe(f, c)),
            _
          );
        }
        parseSegment() {
          const f = vt(this.remaining);
          if ("" === f && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(f), new dr(an(f), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const f = {};
          for (; this.consumeOptional(";"); ) this.parseParam(f);
          return f;
        }
        parseParam(f) {
          const c = vt(this.remaining);
          if (!c) return;
          this.capture(c);
          let _ = "";
          if (this.consumeOptional("=")) {
            const C = vt(this.remaining);
            C && ((_ = C), this.capture(_));
          }
          f[an(c)] = an(_);
        }
        parseQueryParam(f) {
          const c = (function (h) {
            const f = h.match(yn);
            return f ? f[0] : "";
          })(this.remaining);
          if (!c) return;
          this.capture(c);
          let _ = "";
          if (this.consumeOptional("=")) {
            const H = (function (h) {
              const f = h.match(qt);
              return f ? f[0] : "";
            })(this.remaining);
            H && ((_ = H), this.capture(_));
          }
          const C = sn(c),
            I = sn(_);
          if (f.hasOwnProperty(C)) {
            let H = f[C];
            Array.isArray(H) || ((H = [H]), (f[C] = H)), H.push(I);
          } else f[C] = I;
        }
        parseParens(f) {
          const c = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const _ = vt(this.remaining),
              C = this.remaining[_.length];
            if ("/" !== C && ")" !== C && ";" !== C)
              throw new Error(`Cannot parse url '${this.url}'`);
            let I;
            _.indexOf(":") > -1
              ? ((I = _.substr(0, _.indexOf(":"))),
                this.capture(I),
                this.capture(":"))
              : f && (I = Ce);
            const H = this.parseChildren();
            (c[I] = 1 === Object.keys(H).length ? H[Ce] : new qe([], H)),
              this.consumeOptional("//");
          }
          return c;
        }
        peekStartsWith(f) {
          return this.remaining.startsWith(f);
        }
        consumeOptional(f) {
          return (
            !!this.peekStartsWith(f) &&
            ((this.remaining = this.remaining.substring(f.length)), !0)
          );
        }
        capture(f) {
          if (!this.consumeOptional(f)) throw new Error(`Expected "${f}".`);
        }
      }
      class mr {
        constructor(f) {
          this._root = f;
        }
        get root() {
          return this._root.value;
        }
        parent(f) {
          const c = this.pathFromRoot(f);
          return c.length > 1 ? c[c.length - 2] : null;
        }
        children(f) {
          const c = Qn(f, this._root);
          return c ? c.children.map((_) => _.value) : [];
        }
        firstChild(f) {
          const c = Qn(f, this._root);
          return c && c.children.length > 0 ? c.children[0].value : null;
        }
        siblings(f) {
          const c = We(f, this._root);
          return c.length < 2
            ? []
            : c[c.length - 2].children
                .map((C) => C.value)
                .filter((C) => C !== f);
        }
        pathFromRoot(f) {
          return We(f, this._root).map((c) => c.value);
        }
      }
      function Qn(h, f) {
        if (h === f.value) return f;
        for (const c of f.children) {
          const _ = Qn(h, c);
          if (_) return _;
        }
        return null;
      }
      function We(h, f) {
        if (h === f.value) return [f];
        for (const c of f.children) {
          const _ = We(h, c);
          if (_.length) return _.unshift(f), _;
        }
        return [];
      }
      class ee {
        constructor(f, c) {
          (this.value = f), (this.children = c);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function q(h) {
        const f = {};
        return h && h.children.forEach((c) => (f[c.value.outlet] = c)), f;
      }
      class j extends mr {
        constructor(f, c) {
          super(f), (this.snapshot = c), le(this, f);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ne(h, f) {
        const c = (function (h, f) {
            const H = new oe([], {}, {}, "", {}, Ce, f, null, h.root, -1, {});
            return new re("", new ee(H, []));
          })(h, f),
          _ = new B.X([new dr("", {})]),
          C = new B.X({}),
          I = new B.X({}),
          H = new B.X({}),
          Z = new B.X(""),
          fe = new Pe(_, C, H, Z, I, Ce, f, c.root);
        return (fe.snapshot = c.root), new j(new ee(fe, []), c);
      }
      class Pe {
        constructor(f, c, _, C, I, H, Z, fe) {
          (this.url = f),
            (this.params = c),
            (this.queryParams = _),
            (this.fragment = C),
            (this.data = I),
            (this.outlet = H),
            (this.component = Z),
            (this._futureSnapshot = fe);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, Ve.U)((f) => wn(f)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, Ve.U)((f) => wn(f))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Ye(h, f = "emptyOnly") {
        const c = h.pathFromRoot;
        let _ = 0;
        if ("always" !== f)
          for (_ = c.length - 1; _ >= 1; ) {
            const C = c[_],
              I = c[_ - 1];
            if (C.routeConfig && "" === C.routeConfig.path) _--;
            else {
              if (I.component) break;
              _--;
            }
          }
        return (function (h) {
          return h.reduce(
            (f, c) => ({
              params: Object.assign(Object.assign({}, f.params), c.params),
              data: Object.assign(Object.assign({}, f.data), c.data),
              resolve: Object.assign(
                Object.assign({}, f.resolve),
                c._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(c.slice(_));
      }
      class oe {
        constructor(f, c, _, C, I, H, Z, fe, Oe, It, Ke) {
          (this.url = f),
            (this.params = c),
            (this.queryParams = _),
            (this.fragment = C),
            (this.data = I),
            (this.outlet = H),
            (this.component = Z),
            (this.routeConfig = fe),
            (this._urlSegment = Oe),
            (this._lastPathIndex = It),
            (this._resolve = Ke);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = wn(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = wn(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((_) => _.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class re extends mr {
        constructor(f, c) {
          super(c), (this.url = f), le(this, c);
        }
        toString() {
          return Te(this._root);
        }
      }
      function le(h, f) {
        (f.value._routerState = h), f.children.forEach((c) => le(h, c));
      }
      function Te(h) {
        const f =
          h.children.length > 0 ? ` { ${h.children.map(Te).join(", ")} } ` : "";
        return `${h.value}${f}`;
      }
      function Ie(h) {
        if (h.snapshot) {
          const f = h.snapshot,
            c = h._futureSnapshot;
          (h.snapshot = c),
            xn(f.queryParams, c.queryParams) ||
              h.queryParams.next(c.queryParams),
            f.fragment !== c.fragment && h.fragment.next(c.fragment),
            xn(f.params, c.params) || h.params.next(c.params),
            (function (h, f) {
              if (h.length !== f.length) return !1;
              for (let c = 0; c < h.length; ++c) if (!xn(h[c], f[c])) return !1;
              return !0;
            })(f.url, c.url) || h.url.next(c.url),
            xn(f.data, c.data) || h.data.next(c.data);
        } else
          (h.snapshot = h._futureSnapshot), h.data.next(h._futureSnapshot.data);
      }
      function Ze(h, f) {
        const c =
          xn(h.params, f.params) &&
          (function (h, f) {
            return (
              Fn(h, f) && h.every((c, _) => xn(c.parameters, f[_].parameters))
            );
          })(h.url, f.url);
        return (
          c &&
          !(!h.parent != !f.parent) &&
          (!h.parent || Ze(h.parent, f.parent))
        );
      }
      function gt(h, f, c) {
        if (c && h.shouldReuseRoute(f.value, c.value.snapshot)) {
          const _ = c.value;
          _._futureSnapshot = f.value;
          const C = (function (h, f, c) {
            return f.children.map((_) => {
              for (const C of c.children)
                if (h.shouldReuseRoute(_.value, C.value.snapshot))
                  return gt(h, _, C);
              return gt(h, _);
            });
          })(h, f, c);
          return new ee(_, C);
        }
        {
          if (h.shouldAttach(f.value)) {
            const I = h.retrieve(f.value);
            if (null !== I) {
              const H = I.route;
              return bt(f, H), H;
            }
          }
          const _ = (function (h) {
              return new Pe(
                new B.X(h.url),
                new B.X(h.params),
                new B.X(h.queryParams),
                new B.X(h.fragment),
                new B.X(h.data),
                h.outlet,
                h.component,
                h
              );
            })(f.value),
            C = f.children.map((I) => gt(h, I));
          return new ee(_, C);
        }
      }
      function bt(h, f) {
        if (h.value.routeConfig !== f.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route"
          );
        if (h.children.length !== f.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children"
          );
        f.value._futureSnapshot = h.value;
        for (let c = 0; c < h.children.length; ++c)
          bt(h.children[c], f.children[c]);
      }
      function ar(h) {
        return (
          "object" == typeof h && null != h && !h.outlets && !h.segmentPath
        );
      }
      function En(h) {
        return "object" == typeof h && null != h && h.outlets;
      }
      function Vr(h, f, c, _, C) {
        let I = {};
        return (
          _ &&
            Ht(_, (H, Z) => {
              I[Z] = Array.isArray(H) ? H.map((fe) => `${fe}`) : `${H}`;
            }),
          new Qt(c.root === h ? f : ur(c.root, h, f), I, C)
        );
      }
      function ur(h, f, c) {
        const _ = {};
        return (
          Ht(h.children, (C, I) => {
            _[I] = C === f ? c : ur(C, f, c);
          }),
          new qe(h.segments, _)
        );
      }
      class qn {
        constructor(f, c, _) {
          if (
            ((this.isAbsolute = f),
            (this.numberOfDoubleDots = c),
            (this.commands = _),
            f && _.length > 0 && ar(_[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const C = _.find(En);
          if (C && C !== He(_))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Qs {
        constructor(f, c, _) {
          (this.segmentGroup = f), (this.processChildren = c), (this.index = _);
        }
      }
      function di(h, f, c) {
        if (
          (h || (h = new qe([], {})),
          0 === h.segments.length && h.hasChildren())
        )
          return Ms(h, f, c);
        const _ = (function (h, f, c) {
            let _ = 0,
              C = f;
            const I = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; C < h.segments.length; ) {
              if (_ >= c.length) return I;
              const H = h.segments[C],
                Z = c[_];
              if (En(Z)) break;
              const fe = `${Z}`,
                Oe = _ < c.length - 1 ? c[_ + 1] : null;
              if (C > 0 && void 0 === fe) break;
              if (fe && Oe && "object" == typeof Oe && void 0 === Oe.outlets) {
                if (!is(fe, Oe, H)) return I;
                _ += 2;
              } else {
                if (!is(fe, {}, H)) return I;
                _++;
              }
              C++;
            }
            return { match: !0, pathIndex: C, commandIndex: _ };
          })(h, f, c),
          C = c.slice(_.commandIndex);
        if (_.match && _.pathIndex < h.segments.length) {
          const I = new qe(h.segments.slice(0, _.pathIndex), {});
          return (
            (I.children[Ce] = new qe(
              h.segments.slice(_.pathIndex),
              h.children
            )),
            Ms(I, 0, C)
          );
        }
        return _.match && 0 === C.length
          ? new qe(h.segments, {})
          : _.match && !h.hasChildren()
          ? hs(h, f, c)
          : _.match
          ? Ms(h, 0, C)
          : hs(h, f, c);
      }
      function Ms(h, f, c) {
        if (0 === c.length) return new qe(h.segments, {});
        {
          const _ = (function (h) {
              return En(h[0]) ? h[0].outlets : { [Ce]: h };
            })(c),
            C = {};
          return (
            Ht(_, (I, H) => {
              "string" == typeof I && (I = [I]),
                null !== I && (C[H] = di(h.children[H], f, I));
            }),
            Ht(h.children, (I, H) => {
              void 0 === _[H] && (C[H] = I);
            }),
            new qe(h.segments, C)
          );
        }
      }
      function hs(h, f, c) {
        const _ = h.segments.slice(0, f);
        let C = 0;
        for (; C < c.length; ) {
          const I = c[C];
          if (En(I)) {
            const fe = ta(I.outlets);
            return new qe(_, fe);
          }
          if (0 === C && ar(c[0])) {
            _.push(new dr(h.segments[f].path, Zn(c[0]))), C++;
            continue;
          }
          const H = En(I) ? I.outlets[Ce] : `${I}`,
            Z = C < c.length - 1 ? c[C + 1] : null;
          H && Z && ar(Z)
            ? (_.push(new dr(H, Zn(Z))), (C += 2))
            : (_.push(new dr(H, {})), C++);
        }
        return new qe(_, {});
      }
      function ta(h) {
        const f = {};
        return (
          Ht(h, (c, _) => {
            "string" == typeof c && (c = [c]),
              null !== c && (f[_] = hs(new qe([], {}), 0, c));
          }),
          f
        );
      }
      function Zn(h) {
        const f = {};
        return Ht(h, (c, _) => (f[_] = `${c}`)), f;
      }
      function is(h, f, c) {
        return h == c.path && xn(f, c.parameters);
      }
      class Yi {
        constructor(f, c, _, C) {
          (this.routeReuseStrategy = f),
            (this.futureState = c),
            (this.currState = _),
            (this.forwardEvent = C);
        }
        activate(f) {
          const c = this.futureState._root,
            _ = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(c, _, f),
            Ie(this.futureState.root),
            this.activateChildRoutes(c, _, f);
        }
        deactivateChildRoutes(f, c, _) {
          const C = q(c);
          f.children.forEach((I) => {
            const H = I.value.outlet;
            this.deactivateRoutes(I, C[H], _), delete C[H];
          }),
            Ht(C, (I, H) => {
              this.deactivateRouteAndItsChildren(I, _);
            });
        }
        deactivateRoutes(f, c, _) {
          const C = f.value,
            I = c ? c.value : null;
          if (C === I)
            if (C.component) {
              const H = _.getContext(C.outlet);
              H && this.deactivateChildRoutes(f, c, H.children);
            } else this.deactivateChildRoutes(f, c, _);
          else I && this.deactivateRouteAndItsChildren(c, _);
        }
        deactivateRouteAndItsChildren(f, c) {
          this.routeReuseStrategy.shouldDetach(f.value.snapshot)
            ? this.detachAndStoreRouteSubtree(f, c)
            : this.deactivateRouteAndOutlet(f, c);
        }
        detachAndStoreRouteSubtree(f, c) {
          const _ = c.getContext(f.value.outlet);
          if (_ && _.outlet) {
            const C = _.outlet.detach(),
              I = _.children.onOutletDeactivated();
            this.routeReuseStrategy.store(f.value.snapshot, {
              componentRef: C,
              route: f,
              contexts: I,
            });
          }
        }
        deactivateRouteAndOutlet(f, c) {
          const _ = c.getContext(f.value.outlet),
            C = _ && f.value.component ? _.children : c,
            I = q(f);
          for (const H of Object.keys(I))
            this.deactivateRouteAndItsChildren(I[H], C);
          _ &&
            _.outlet &&
            (_.outlet.deactivate(),
            _.children.onOutletDeactivated(),
            (_.attachRef = null),
            (_.resolver = null),
            (_.route = null));
        }
        activateChildRoutes(f, c, _) {
          const C = q(c);
          f.children.forEach((I) => {
            this.activateRoutes(I, C[I.value.outlet], _),
              this.forwardEvent(new zn(I.value.snapshot));
          }),
            f.children.length && this.forwardEvent(new rr(f.value.snapshot));
        }
        activateRoutes(f, c, _) {
          const C = f.value,
            I = c ? c.value : null;
          if ((Ie(C), C === I))
            if (C.component) {
              const H = _.getOrCreateContext(C.outlet);
              this.activateChildRoutes(f, c, H.children);
            } else this.activateChildRoutes(f, c, _);
          else if (C.component) {
            const H = _.getOrCreateContext(C.outlet);
            if (this.routeReuseStrategy.shouldAttach(C.snapshot)) {
              const Z = this.routeReuseStrategy.retrieve(C.snapshot);
              this.routeReuseStrategy.store(C.snapshot, null),
                H.children.onOutletReAttached(Z.contexts),
                (H.attachRef = Z.componentRef),
                (H.route = Z.route.value),
                H.outlet && H.outlet.attach(Z.componentRef, Z.route.value),
                fi(Z.route);
            } else {
              const Z = (function (h) {
                  for (let f = h.parent; f; f = f.parent) {
                    const c = f.routeConfig;
                    if (c && c._loadedConfig) return c._loadedConfig;
                    if (c && c.component) return null;
                  }
                  return null;
                })(C.snapshot),
                fe = Z ? Z.module.componentFactoryResolver : null;
              (H.attachRef = null),
                (H.route = C),
                (H.resolver = fe),
                H.outlet && H.outlet.activateWith(C, fe),
                this.activateChildRoutes(f, null, H.children);
            }
          } else this.activateChildRoutes(f, null, _);
        }
      }
      function fi(h) {
        Ie(h.value), h.children.forEach(fi);
      }
      class Rs {
        constructor(f, c) {
          (this.routes = f), (this.module = c);
        }
      }
      function Un(h) {
        return "function" == typeof h;
      }
      function os(h) {
        return h instanceof Qt;
      }
      const Br = Symbol("INITIAL_VALUE");
      function qr() {
        return (0, on.w)((h) =>
          (0, P.aj)(h.map((f) => f.pipe((0, bn.q)(1), (0, Nt.O)(Br)))).pipe(
            (0, at.R)((f, c) => {
              let _ = !1;
              return c.reduce(
                (C, I, H) =>
                  C !== Br
                    ? C
                    : (I === Br && (_ = !0),
                      _ || (!1 !== I && H !== c.length - 1 && !os(I)) ? C : I),
                f
              );
            }, Br),
            (0, De.h)((f) => f !== Br),
            (0, Ve.U)((f) => (os(f) ? f : !0 === f)),
            (0, bn.q)(1)
          )
        );
      }
      let gi = (() => {
        class h {}
        return (
          (h.??fac = function (c) {
            return new (c || h)();
          }),
          (h.??cmp = v.Xpm({
            type: h,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (c, _) {
              1 & c && v._UZ(0, "router-outlet");
            },
            directives: function () {
              return [lr];
            },
            encapsulation: 2,
          })),
          h
        );
      })();
      function Zs(h, f = "") {
        for (let c = 0; c < h.length; c++) {
          const _ = h[c];
          mi(_, _i(f, _));
        }
      }
      function mi(h, f) {
        h.children && Zs(h.children, f);
      }
      function _i(h, f) {
        return f
          ? h || f.path
            ? h && !f.path
              ? `${h}/`
              : !h && f.path
              ? f.path
              : `${h}/${f.path}`
            : ""
          : h;
      }
      function Js(h) {
        const f = h.children && h.children.map(Js),
          c = f
            ? Object.assign(Object.assign({}, h), { children: f })
            : Object.assign({}, h);
        return (
          !c.component &&
            (f || c.loadChildren) &&
            c.outlet &&
            c.outlet !== Ce &&
            (c.component = gi),
          c
        );
      }
      function Sn(h) {
        return h.outlet || Ce;
      }
      function yi(h, f) {
        const c = h.filter((_) => Sn(_) === f);
        return c.push(...h.filter((_) => Sn(_) !== f)), c;
      }
      const In = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function Zr(h, f, c) {
        var _;
        if ("" === f.path)
          return "full" === f.pathMatch && (h.hasChildren() || c.length > 0)
            ? Object.assign({}, In)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const I = (f.matcher || Bn)(c, h, f);
        if (!I) return Object.assign({}, In);
        const H = {};
        Ht(I.posParams, (fe, Oe) => {
          H[Oe] = fe.path;
        });
        const Z =
          I.consumed.length > 0
            ? Object.assign(
                Object.assign({}, H),
                I.consumed[I.consumed.length - 1].parameters
              )
            : H;
        return {
          matched: !0,
          consumedSegments: I.consumed,
          lastChild: I.consumed.length,
          parameters: Z,
          positionalParamSegments:
            null !== (_ = I.posParams) && void 0 !== _ ? _ : {},
        };
      }
      function ps(h, f, c, _, C = "corrected") {
        if (
          c.length > 0 &&
          (function (h, f, c) {
            return c.some((_) => m(h, f, _) && Sn(_) !== Ce);
          })(h, c, _)
        ) {
          const H = new qe(
            f,
            (function (h, f, c, _) {
              const C = {};
              (C[Ce] = _),
                (_._sourceSegment = h),
                (_._segmentIndexShift = f.length);
              for (const I of c)
                if ("" === I.path && Sn(I) !== Ce) {
                  const H = new qe([], {});
                  (H._sourceSegment = h),
                    (H._segmentIndexShift = f.length),
                    (C[Sn(I)] = H);
                }
              return C;
            })(h, f, _, new qe(c, h.children))
          );
          return (
            (H._sourceSegment = h),
            (H._segmentIndexShift = f.length),
            { segmentGroup: H, slicedSegments: [] }
          );
        }
        if (
          0 === c.length &&
          (function (h, f, c) {
            return c.some((_) => m(h, f, _));
          })(h, c, _)
        ) {
          const H = new qe(
            h.segments,
            (function (h, f, c, _, C, I) {
              const H = {};
              for (const Z of _)
                if (m(h, c, Z) && !C[Sn(Z)]) {
                  const fe = new qe([], {});
                  (fe._sourceSegment = h),
                    (fe._segmentIndexShift =
                      "legacy" === I ? h.segments.length : f.length),
                    (H[Sn(Z)] = fe);
                }
              return Object.assign(Object.assign({}, C), H);
            })(h, f, c, _, h.children, C)
          );
          return (
            (H._sourceSegment = h),
            (H._segmentIndexShift = f.length),
            { segmentGroup: H, slicedSegments: c }
          );
        }
        const I = new qe(h.segments, h.children);
        return (
          (I._sourceSegment = h),
          (I._segmentIndexShift = f.length),
          { segmentGroup: I, slicedSegments: c }
        );
      }
      function m(h, f, c) {
        return (
          (!(h.hasChildren() || f.length > 0) || "full" !== c.pathMatch) &&
          "" === c.path
        );
      }
      function S(h, f, c, _) {
        return (
          !!(Sn(h) === _ || (_ !== Ce && m(f, c, h))) &&
          ("**" === h.path || Zr(f, h, c).matched)
        );
      }
      function y(h, f, c) {
        return 0 === f.length && !h.children[c];
      }
      class M {
        constructor(f) {
          this.segmentGroup = f || null;
        }
      }
      class K {
        constructor(f) {
          this.urlTree = f;
        }
      }
      function ce(h) {
        return new L.y((f) => f.error(new M(h)));
      }
      function ye(h) {
        return new L.y((f) => f.error(new K(h)));
      }
      function ke(h) {
        return new L.y((f) =>
          f.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${h}'`
            )
          )
        );
      }
      class xt {
        constructor(f, c, _, C, I) {
          (this.configLoader = c),
            (this.urlSerializer = _),
            (this.urlTree = C),
            (this.config = I),
            (this.allowRedirects = !0),
            (this.ngModule = f.get(v.h0i));
        }
        apply() {
          const f = ps(this.urlTree.root, [], [], this.config).segmentGroup,
            c = new qe(f.segments, f.children);
          return this.expandSegmentGroup(this.ngModule, this.config, c, Ce)
            .pipe(
              (0, Ve.U)((I) =>
                this.createUrlTree(
                  wt(I),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              (0, dt.K)((I) => {
                if (I instanceof K)
                  return (this.allowRedirects = !1), this.match(I.urlTree);
                throw I instanceof M ? this.noMatchError(I) : I;
              })
            );
        }
        match(f) {
          return this.expandSegmentGroup(this.ngModule, this.config, f.root, Ce)
            .pipe(
              (0, Ve.U)((C) =>
                this.createUrlTree(wt(C), f.queryParams, f.fragment)
              )
            )
            .pipe(
              (0, dt.K)((C) => {
                throw C instanceof M ? this.noMatchError(C) : C;
              })
            );
        }
        noMatchError(f) {
          return new Error(
            `Cannot match any routes. URL Segment: '${f.segmentGroup}'`
          );
        }
        createUrlTree(f, c, _) {
          const C = f.segments.length > 0 ? new qe([], { [Ce]: f }) : f;
          return new Qt(C, c, _);
        }
        expandSegmentGroup(f, c, _, C) {
          return 0 === _.segments.length && _.hasChildren()
            ? this.expandChildren(f, c, _).pipe((0, Ve.U)((I) => new qe([], I)))
            : this.expandSegment(f, _, c, _.segments, C, !0);
        }
        expandChildren(f, c, _) {
          const C = [];
          for (const I of Object.keys(_.children))
            "primary" === I ? C.unshift(I) : C.push(I);
          return (0, Y.D)(C).pipe(
            (0, Ue.b)((I) => {
              const H = _.children[I],
                Z = yi(c, I);
              return this.expandSegmentGroup(f, Z, H, I).pipe(
                (0, Ve.U)((fe) => ({ segment: fe, outlet: I }))
              );
            }),
            (0, at.R)((I, H) => ((I[H.outlet] = H.segment), I), {}),
            (function (h, f) {
              const c = arguments.length >= 2;
              return (_) =>
                _.pipe(
                  h ? (0, De.h)((C, I) => h(C, I, _)) : Ee.y,
                  Re(1),
                  c ? (0, Ne.d)(f) : (0, Le.T)(() => new R.K())
                );
            })()
          );
        }
        expandSegment(f, c, _, C, I, H) {
          return (0, Y.D)(_).pipe(
            (0, Ue.b)((Z) =>
              this.expandSegmentAgainstRoute(f, c, _, Z, C, I, H).pipe(
                (0, dt.K)((Oe) => {
                  if (Oe instanceof M) return (0, Q.of)(null);
                  throw Oe;
                })
              )
            ),
            (0, ht.P)((Z) => !!Z),
            (0, dt.K)((Z, fe) => {
              if (Z instanceof R.K || "EmptyError" === Z.name) {
                if (y(c, C, I)) return (0, Q.of)(new qe([], {}));
                throw new M(c);
              }
              throw Z;
            })
          );
        }
        expandSegmentAgainstRoute(f, c, _, C, I, H, Z) {
          return S(C, c, I, H)
            ? void 0 === C.redirectTo
              ? this.matchSegmentAgainstRoute(f, c, C, I, H)
              : Z && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(f, c, _, C, I, H)
              : ce(c)
            : ce(c);
        }
        expandSegmentAgainstRouteUsingRedirect(f, c, _, C, I, H) {
          return "**" === C.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(f, _, C, H)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                f,
                c,
                _,
                C,
                I,
                H
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(f, c, _, C) {
          const I = this.applyRedirectCommands([], _.redirectTo, {});
          return _.redirectTo.startsWith("/")
            ? ye(I)
            : this.lineralizeSegments(_, I).pipe(
                (0, Me.zg)((H) => {
                  const Z = new qe(H, {});
                  return this.expandSegment(f, Z, c, H, C, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(f, c, _, C, I, H) {
          const {
            matched: Z,
            consumedSegments: fe,
            lastChild: Oe,
            positionalParamSegments: It,
          } = Zr(c, C, I);
          if (!Z) return ce(c);
          const Ke = this.applyRedirectCommands(fe, C.redirectTo, It);
          return C.redirectTo.startsWith("/")
            ? ye(Ke)
            : this.lineralizeSegments(C, Ke).pipe(
                (0, Me.zg)((Kt) =>
                  this.expandSegment(f, c, _, Kt.concat(I.slice(Oe)), H, !1)
                )
              );
        }
        matchSegmentAgainstRoute(f, c, _, C, I) {
          if ("**" === _.path)
            return _.loadChildren
              ? (_._loadedConfig
                  ? (0, Q.of)(_._loadedConfig)
                  : this.configLoader.load(f.injector, _)
                ).pipe(
                  (0, Ve.U)((Kt) => ((_._loadedConfig = Kt), new qe(C, {})))
                )
              : (0, Q.of)(new qe(C, {}));
          const {
            matched: H,
            consumedSegments: Z,
            lastChild: fe,
          } = Zr(c, _, C);
          if (!H) return ce(c);
          const Oe = C.slice(fe);
          return this.getChildConfig(f, _, C).pipe(
            (0, Me.zg)((Ke) => {
              const Kt = Ke.module,
                Tt = Ke.routes,
                { segmentGroup: ks, slicedSegments: gs } = ps(c, Z, Oe, Tt),
                Mr = new qe(ks.segments, ks.children);
              if (0 === gs.length && Mr.hasChildren())
                return this.expandChildren(Kt, Tt, Mr).pipe(
                  (0, Ve.U)((io) => new qe(Z, io))
                );
              if (0 === Tt.length && 0 === gs.length)
                return (0, Q.of)(new qe(Z, {}));
              const ms = Sn(_) === I;
              return this.expandSegment(Kt, Mr, Tt, gs, ms ? Ce : I, !0).pipe(
                (0, Ve.U)((_s) => new qe(Z.concat(_s.segments), _s.children))
              );
            })
          );
        }
        getChildConfig(f, c, _) {
          return c.children
            ? (0, Q.of)(new Rs(c.children, f))
            : c.loadChildren
            ? void 0 !== c._loadedConfig
              ? (0, Q.of)(c._loadedConfig)
              : this.runCanLoadGuards(f.injector, c, _).pipe(
                  (0, Me.zg)((C) => {
                    return C
                      ? this.configLoader
                          .load(f.injector, c)
                          .pipe((0, Ve.U)((I) => ((c._loadedConfig = I), I)))
                      : ((h = c),
                        new L.y((f) =>
                          f.error(
                            sr(
                              `Cannot load children because the guard of the route "path: '${h.path}'" returned false`
                            )
                          )
                        ));
                    var h;
                  })
                )
            : (0, Q.of)(new Rs([], f));
        }
        runCanLoadGuards(f, c, _) {
          const C = c.canLoad;
          if (!C || 0 === C.length) return (0, Q.of)(!0);
          const I = C.map((H) => {
            const Z = f.get(H);
            let fe;
            if ((h = Z) && Un(h.canLoad)) fe = Z.canLoad(c, _);
            else {
              if (!Un(Z)) throw new Error("Invalid CanLoad guard");
              fe = Z(c, _);
            }
            var h;
            return nn(fe);
          });
          return (0, Q.of)(I).pipe(
            qr(),
            (0, Gt.b)((H) => {
              if (!os(H)) return;
              const Z = sr(
                `Redirecting to "${this.urlSerializer.serialize(H)}"`
              );
              throw ((Z.url = H), Z);
            }),
            (0, Ve.U)((H) => !0 === H)
          );
        }
        lineralizeSegments(f, c) {
          let _ = [],
            C = c.root;
          for (;;) {
            if (((_ = _.concat(C.segments)), 0 === C.numberOfChildren))
              return (0, Q.of)(_);
            if (C.numberOfChildren > 1 || !C.children[Ce])
              return ke(f.redirectTo);
            C = C.children[Ce];
          }
        }
        applyRedirectCommands(f, c, _) {
          return this.applyRedirectCreatreUrlTree(
            c,
            this.urlSerializer.parse(c),
            f,
            _
          );
        }
        applyRedirectCreatreUrlTree(f, c, _, C) {
          const I = this.createSegmentGroup(f, c.root, _, C);
          return new Qt(
            I,
            this.createQueryParams(c.queryParams, this.urlTree.queryParams),
            c.fragment
          );
        }
        createQueryParams(f, c) {
          const _ = {};
          return (
            Ht(f, (C, I) => {
              if ("string" == typeof C && C.startsWith(":")) {
                const Z = C.substring(1);
                _[I] = c[Z];
              } else _[I] = C;
            }),
            _
          );
        }
        createSegmentGroup(f, c, _, C) {
          const I = this.createSegments(f, c.segments, _, C);
          let H = {};
          return (
            Ht(c.children, (Z, fe) => {
              H[fe] = this.createSegmentGroup(f, Z, _, C);
            }),
            new qe(I, H)
          );
        }
        createSegments(f, c, _, C) {
          return c.map((I) =>
            I.path.startsWith(":")
              ? this.findPosParam(f, I, C)
              : this.findOrReturn(I, _)
          );
        }
        findPosParam(f, c, _) {
          const C = _[c.path.substring(1)];
          if (!C)
            throw new Error(
              `Cannot redirect to '${f}'. Cannot find '${c.path}'.`
            );
          return C;
        }
        findOrReturn(f, c) {
          let _ = 0;
          for (const C of c) {
            if (C.path === f.path) return c.splice(_), C;
            _++;
          }
          return f;
        }
      }
      function wt(h) {
        const f = {};
        for (const _ of Object.keys(h.children)) {
          const I = wt(h.children[_]);
          (I.segments.length > 0 || I.hasChildren()) && (f[_] = I);
        }
        return (function (h) {
          if (1 === h.numberOfChildren && h.children[Ce]) {
            const f = h.children[Ce];
            return new qe(h.segments.concat(f.segments), f.children);
          }
          return h;
        })(new qe(h.segments, f));
      }
      class cn {
        constructor(f) {
          (this.path = f), (this.route = this.path[this.path.length - 1]);
        }
      }
      class jr {
        constructor(f, c) {
          (this.component = f), (this.route = c);
        }
      }
      function An(h, f, c) {
        const _ = h._root;
        return Jr(_, f ? f._root : null, c, [_.value]);
      }
      function Jn(h, f, c) {
        const _ = (function (h) {
          if (!h) return null;
          for (let f = h.parent; f; f = f.parent) {
            const c = f.routeConfig;
            if (c && c._loadedConfig) return c._loadedConfig;
          }
          return null;
        })(f);
        return (_ ? _.module.injector : c).get(h);
      }
      function Jr(
        h,
        f,
        c,
        _,
        C = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const I = q(f);
        return (
          h.children.forEach((H) => {
            (function (
              h,
              f,
              c,
              _,
              C = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const I = h.value,
                H = f ? f.value : null,
                Z = c ? c.getContext(h.value.outlet) : null;
              if (H && I.routeConfig === H.routeConfig) {
                const fe = (function (h, f, c) {
                  if ("function" == typeof c) return c(h, f);
                  switch (c) {
                    case "pathParamsChange":
                      return !Fn(h.url, f.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Fn(h.url, f.url) || !xn(h.queryParams, f.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Ze(h, f) || !xn(h.queryParams, f.queryParams);
                    default:
                      return !Ze(h, f);
                  }
                })(H, I, I.routeConfig.runGuardsAndResolvers);
                fe
                  ? C.canActivateChecks.push(new cn(_))
                  : ((I.data = H.data), (I._resolvedData = H._resolvedData)),
                  Jr(h, f, I.component ? (Z ? Z.children : null) : c, _, C),
                  fe &&
                    Z &&
                    Z.outlet &&
                    Z.outlet.isActivated &&
                    C.canDeactivateChecks.push(new jr(Z.outlet.component, H));
              } else
                H && ei(f, Z, C),
                  C.canActivateChecks.push(new cn(_)),
                  Jr(h, null, I.component ? (Z ? Z.children : null) : c, _, C);
            })(H, I[H.value.outlet], c, _.concat([H.value]), C),
              delete I[H.value.outlet];
          }),
          Ht(I, (H, Z) => ei(H, c.getContext(Z), C)),
          C
        );
      }
      function ei(h, f, c) {
        const _ = q(h),
          C = h.value;
        Ht(_, (I, H) => {
          ei(I, C.component ? (f ? f.children.getContext(H) : null) : f, c);
        }),
          c.canDeactivateChecks.push(
            new jr(
              C.component && f && f.outlet && f.outlet.isActivated
                ? f.outlet.component
                : null,
              C
            )
          );
      }
      class ti {}
      function $r(h) {
        return new L.y((f) => f.error(h));
      }
      class u {
        constructor(f, c, _, C, I, H) {
          (this.rootComponentType = f),
            (this.config = c),
            (this.urlTree = _),
            (this.url = C),
            (this.paramsInheritanceStrategy = I),
            (this.relativeLinkResolution = H);
        }
        recognize() {
          const f = ps(
              this.urlTree.root,
              [],
              [],
              this.config.filter((H) => void 0 === H.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            c = this.processSegmentGroup(this.config, f, Ce);
          if (null === c) return null;
          const _ = new oe(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              Ce,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            C = new ee(_, c),
            I = new re(this.url, C);
          return this.inheritParamsAndData(I._root), I;
        }
        inheritParamsAndData(f) {
          const c = f.value,
            _ = Ye(c, this.paramsInheritanceStrategy);
          (c.params = Object.freeze(_.params)),
            (c.data = Object.freeze(_.data)),
            f.children.forEach((C) => this.inheritParamsAndData(C));
        }
        processSegmentGroup(f, c, _) {
          return 0 === c.segments.length && c.hasChildren()
            ? this.processChildren(f, c)
            : this.processSegment(f, c, c.segments, _);
        }
        processChildren(f, c) {
          const _ = [];
          for (const I of Object.keys(c.children)) {
            const H = c.children[I],
              Z = yi(f, I),
              fe = this.processSegmentGroup(Z, H, I);
            if (null === fe) return null;
            _.push(...fe);
          }
          const C = O(_);
          return (
            C.sort((f, c) =>
              f.value.outlet === Ce
                ? -1
                : c.value.outlet === Ce
                ? 1
                : f.value.outlet.localeCompare(c.value.outlet)
            ),
            C
          );
        }
        processSegment(f, c, _, C) {
          for (const I of f) {
            const H = this.processSegmentAgainstRoute(I, c, _, C);
            if (null !== H) return H;
          }
          return y(c, _, C) ? [] : null;
        }
        processSegmentAgainstRoute(f, c, _, C) {
          if (f.redirectTo || !S(f, c, _, C)) return null;
          let I,
            H = [],
            Z = [];
          if ("**" === f.path) {
            const Tt = _.length > 0 ? He(_).parameters : {};
            I = new oe(
              _,
              Tt,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              de(f),
              Sn(f),
              f.component,
              f,
              G(c),
              se(c) + _.length,
              be(f)
            );
          } else {
            const Tt = Zr(c, f, _);
            if (!Tt.matched) return null;
            (H = Tt.consumedSegments),
              (Z = _.slice(Tt.lastChild)),
              (I = new oe(
                H,
                Tt.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                de(f),
                Sn(f),
                f.component,
                f,
                G(c),
                se(c) + H.length,
                be(f)
              ));
          }
          const fe = (h = f).children
              ? h.children
              : h.loadChildren
              ? h._loadedConfig.routes
              : [],
            { segmentGroup: Oe, slicedSegments: It } = ps(
              c,
              H,
              Z,
              fe.filter((Tt) => void 0 === Tt.redirectTo),
              this.relativeLinkResolution
            );
          var h;
          if (0 === It.length && Oe.hasChildren()) {
            const Tt = this.processChildren(fe, Oe);
            return null === Tt ? null : [new ee(I, Tt)];
          }
          if (0 === fe.length && 0 === It.length) return [new ee(I, [])];
          const Ke = Sn(f) === C,
            Kt = this.processSegment(fe, Oe, It, Ke ? Ce : C);
          return null === Kt ? null : [new ee(I, Kt)];
        }
      }
      function T(h) {
        const f = h.value.routeConfig;
        return f && "" === f.path && void 0 === f.redirectTo;
      }
      function O(h) {
        const f = [],
          c = new Set();
        for (const _ of h) {
          if (!T(_)) {
            f.push(_);
            continue;
          }
          const C = f.find((I) => _.value.routeConfig === I.value.routeConfig);
          void 0 !== C ? (C.children.push(..._.children), c.add(C)) : f.push(_);
        }
        for (const _ of c) {
          const C = O(_.children);
          f.push(new ee(_.value, C));
        }
        return f.filter((_) => !c.has(_));
      }
      function G(h) {
        let f = h;
        for (; f._sourceSegment; ) f = f._sourceSegment;
        return f;
      }
      function se(h) {
        let f = h,
          c = f._segmentIndexShift ? f._segmentIndexShift : 0;
        for (; f._sourceSegment; )
          (f = f._sourceSegment),
            (c += f._segmentIndexShift ? f._segmentIndexShift : 0);
        return c - 1;
      }
      function de(h) {
        return h.data || {};
      }
      function be(h) {
        return h.resolve || {};
      }
      function ct(h) {
        return (0, on.w)((f) => {
          const c = h(f);
          return c ? (0, Y.D)(c).pipe((0, Ve.U)(() => f)) : (0, Q.of)(f);
        });
      }
      class $n extends class {
        shouldDetach(f) {
          return !1;
        }
        store(f, c) {}
        shouldAttach(f) {
          return !1;
        }
        retrieve(f) {
          return null;
        }
        shouldReuseRoute(f, c) {
          return f.routeConfig === c.routeConfig;
        }
      } {}
      const fn = new v.OlP("ROUTES");
      class Hr {
        constructor(f, c, _, C) {
          (this.loader = f),
            (this.compiler = c),
            (this.onLoadStartListener = _),
            (this.onLoadEndListener = C);
        }
        load(f, c) {
          if (c._loader$) return c._loader$;
          this.onLoadStartListener && this.onLoadStartListener(c);
          const C = this.loadModuleFactory(c.loadChildren).pipe(
            (0, Ve.U)((I) => {
              this.onLoadEndListener && this.onLoadEndListener(c);
              const H = I.create(f);
              return new Rs(
                Se(H.injector.get(fn, void 0, v.XFs.Self | v.XFs.Optional)).map(
                  Js
                ),
                H
              );
            }),
            (0, dt.K)((I) => {
              throw ((c._loader$ = void 0), I);
            })
          );
          return (
            (c._loader$ = new V.c(C, () => new te.xQ()).pipe((0, xr.x)())),
            c._loader$
          );
        }
        loadModuleFactory(f) {
          return "string" == typeof f
            ? (0, Y.D)(this.loader.load(f))
            : nn(f()).pipe(
                (0, Me.zg)((c) =>
                  c instanceof v.YKP
                    ? (0, Q.of)(c)
                    : (0, Y.D)(this.compiler.compileModuleAsync(c))
                )
              );
        }
      }
      class Ir {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new un()),
            (this.attachRef = null);
        }
      }
      class un {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(f, c) {
          const _ = this.getOrCreateContext(f);
          (_.outlet = c), this.contexts.set(f, _);
        }
        onChildOutletDestroyed(f) {
          const c = this.getContext(f);
          c && ((c.outlet = null), (c.attachRef = null));
        }
        onOutletDeactivated() {
          const f = this.contexts;
          return (this.contexts = new Map()), f;
        }
        onOutletReAttached(f) {
          this.contexts = f;
        }
        getOrCreateContext(f) {
          let c = this.getContext(f);
          return c || ((c = new Ir()), this.contexts.set(f, c)), c;
        }
        getContext(f) {
          return this.contexts.get(f) || null;
        }
      }
      class Kr {
        shouldProcessUrl(f) {
          return !0;
        }
        extract(f) {
          return f;
        }
        merge(f, c) {
          return f;
        }
      }
      function _r(h) {
        throw h;
      }
      function Ji(h, f, c) {
        return f.parse("/");
      }
      function Ns(h, f) {
        return (0, Q.of)(null);
      }
      const ln = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Xr = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let mt = (() => {
        class h {
          constructor(c, _, C, I, H, Z, fe, Oe) {
            (this.rootComponentType = c),
              (this.urlSerializer = _),
              (this.rootContexts = C),
              (this.location = I),
              (this.config = Oe),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.lastLocationChangeInfo = null),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new te.xQ()),
              (this.errorHandler = _r),
              (this.malformedUriErrorHandler = Ji),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: Ns,
                afterPreactivation: Ns,
              }),
              (this.urlHandlingStrategy = new Kr()),
              (this.routeReuseStrategy = new $n()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.ngModule = H.get(v.h0i)),
              (this.console = H.get(v.c2e));
            const Kt = H.get(v.R0b);
            (this.isNgZoneEnabled =
              Kt instanceof v.R0b && v.R0b.isInAngularZone()),
              this.resetConfig(Oe),
              (this.currentUrlTree = new Qt(new qe([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new Hr(
                Z,
                fe,
                (Tt) => this.triggerEvent(new Fr(Tt)),
                (Tt) => this.triggerEvent(new Pn(Tt))
              )),
              (this.routerState = ne(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new B.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            var c;
            return null === (c = this.location.getState()) || void 0 === c
              ? void 0
              : c.??routerPageId;
          }
          setupNavigations(c) {
            const _ = this.events;
            return c.pipe(
              (0, De.h)((C) => 0 !== C.id),
              (0, Ve.U)((C) =>
                Object.assign(Object.assign({}, C), {
                  extractedUrl: this.urlHandlingStrategy.extract(C.rawUrl),
                })
              ),
              (0, on.w)((C) => {
                let I = !1,
                  H = !1;
                return (0, Q.of)(C).pipe(
                  (0, Gt.b)((Z) => {
                    this.currentNavigation = {
                      id: Z.id,
                      initialUrl: Z.currentRawUrl,
                      extractedUrl: Z.extractedUrl,
                      trigger: Z.source,
                      extras: Z.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(
                            Object.assign({}, this.lastSuccessfulNavigation),
                            { previousNavigation: null }
                          )
                        : null,
                    };
                  }),
                  (0, on.w)((Z) => {
                    const fe = this.browserUrlTree.toString(),
                      Oe =
                        !this.navigated ||
                        Z.extractedUrl.toString() !== fe ||
                        fe !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || Oe) &&
                      this.urlHandlingStrategy.shouldProcessUrl(Z.rawUrl)
                    )
                      return (
                        Be(Z.source) && (this.browserUrlTree = Z.extractedUrl),
                        (0, Q.of)(Z).pipe(
                          (0, on.w)((Ke) => {
                            const Kt = this.transitions.getValue();
                            return (
                              _.next(
                                new ft(
                                  Ke.id,
                                  this.serializeUrl(Ke.extractedUrl),
                                  Ke.source,
                                  Ke.restoredState
                                )
                              ),
                              Kt !== this.transitions.getValue()
                                ? W.E
                                : Promise.resolve(Ke)
                            );
                          }),
                          (function (h, f, c, _) {
                            return (0, on.w)((C) =>
                              (function (h, f, c, _, C) {
                                return new xt(h, f, c, _, C).apply();
                              })(h, f, c, C.extractedUrl, _).pipe(
                                (0, Ve.U)((I) =>
                                  Object.assign(Object.assign({}, C), {
                                    urlAfterRedirects: I,
                                  })
                                )
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          (0, Gt.b)((Ke) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: Ke.urlAfterRedirects }
                            );
                          }),
                          (function (h, f, c, _, C) {
                            return (0, Me.zg)((I) =>
                              (function (
                                h,
                                f,
                                c,
                                _,
                                C = "emptyOnly",
                                I = "legacy"
                              ) {
                                try {
                                  const H = new u(h, f, c, _, C, I).recognize();
                                  return null === H
                                    ? $r(new ti())
                                    : (0, Q.of)(H);
                                } catch (H) {
                                  return $r(H);
                                }
                              })(
                                h,
                                f,
                                I.urlAfterRedirects,
                                c(I.urlAfterRedirects),
                                _,
                                C
                              ).pipe(
                                (0, Ve.U)((H) =>
                                  Object.assign(Object.assign({}, I), {
                                    targetSnapshot: H,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (Ke) => this.serializeUrl(Ke),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, Gt.b)((Ke) => {
                            "eager" === this.urlUpdateStrategy &&
                              (Ke.extras.skipLocationChange ||
                                this.setBrowserUrl(Ke.urlAfterRedirects, Ke),
                              (this.browserUrlTree = Ke.urlAfterRedirects));
                            const Kt = new Dt(
                              Ke.id,
                              this.serializeUrl(Ke.extractedUrl),
                              this.serializeUrl(Ke.urlAfterRedirects),
                              Ke.targetSnapshot
                            );
                            _.next(Kt);
                          })
                        )
                      );
                    if (
                      Oe &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: Kt,
                          extractedUrl: Tt,
                          source: ks,
                          restoredState: gs,
                          extras: Mr,
                        } = Z,
                        ms = new ft(Kt, this.serializeUrl(Tt), ks, gs);
                      _.next(ms);
                      const Vs = ne(Tt, this.rootComponentType).snapshot;
                      return (0, Q.of)(
                        Object.assign(Object.assign({}, Z), {
                          targetSnapshot: Vs,
                          urlAfterRedirects: Tt,
                          extras: Object.assign(Object.assign({}, Mr), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })
                      );
                    }
                    return (
                      (this.rawUrlTree = Z.rawUrl),
                      (this.browserUrlTree = Z.urlAfterRedirects),
                      Z.resolve(null),
                      W.E
                    );
                  }),
                  ct((Z) => {
                    const {
                      targetSnapshot: fe,
                      id: Oe,
                      extractedUrl: It,
                      rawUrl: Ke,
                      extras: { skipLocationChange: Kt, replaceUrl: Tt },
                    } = Z;
                    return this.hooks.beforePreactivation(fe, {
                      navigationId: Oe,
                      appliedUrlTree: It,
                      rawUrlTree: Ke,
                      skipLocationChange: !!Kt,
                      replaceUrl: !!Tt,
                    });
                  }),
                  (0, Gt.b)((Z) => {
                    const fe = new Rn(
                      Z.id,
                      this.serializeUrl(Z.extractedUrl),
                      this.serializeUrl(Z.urlAfterRedirects),
                      Z.targetSnapshot
                    );
                    this.triggerEvent(fe);
                  }),
                  (0, Ve.U)((Z) =>
                    Object.assign(Object.assign({}, Z), {
                      guards: An(
                        Z.targetSnapshot,
                        Z.currentSnapshot,
                        this.rootContexts
                      ),
                    })
                  ),
                  (function (h, f) {
                    return (0, Me.zg)((c) => {
                      const {
                        targetSnapshot: _,
                        currentSnapshot: C,
                        guards: {
                          canActivateChecks: I,
                          canDeactivateChecks: H,
                        },
                      } = c;
                      return 0 === H.length && 0 === I.length
                        ? (0, Q.of)(
                            Object.assign(Object.assign({}, c), {
                              guardsResult: !0,
                            })
                          )
                        : (function (h, f, c, _) {
                            return (0, Y.D)(h).pipe(
                              (0, Me.zg)((C) =>
                                (function (h, f, c, _, C) {
                                  const I =
                                    f && f.routeConfig
                                      ? f.routeConfig.canDeactivate
                                      : null;
                                  if (!I || 0 === I.length)
                                    return (0, Q.of)(!0);
                                  const H = I.map((Z) => {
                                    const fe = Jn(Z, f, C);
                                    let Oe;
                                    if (
                                      (function (h) {
                                        return h && Un(h.canDeactivate);
                                      })(fe)
                                    )
                                      Oe = nn(fe.canDeactivate(h, f, c, _));
                                    else {
                                      if (!Un(fe))
                                        throw new Error(
                                          "Invalid CanDeactivate guard"
                                        );
                                      Oe = nn(fe(h, f, c, _));
                                    }
                                    return Oe.pipe((0, ht.P)());
                                  });
                                  return (0, Q.of)(H).pipe(qr());
                                })(C.component, C.route, c, f, _)
                              ),
                              (0, ht.P)((C) => !0 !== C, !0)
                            );
                          })(H, _, C, h).pipe(
                            (0, Me.zg)((Z) =>
                              Z &&
                              (function (h) {
                                return "boolean" == typeof h;
                              })(Z)
                                ? (function (h, f, c, _) {
                                    return (0, Y.D)(f).pipe(
                                      (0, Ue.b)((C) =>
                                        (0, N.z)(
                                          (function (h, f) {
                                            return (
                                              null !== h && f && f(new br(h)),
                                              (0, Q.of)(!0)
                                            );
                                          })(C.route.parent, _),
                                          (function (h, f) {
                                            return (
                                              null !== h && f && f(new tn(h)),
                                              (0, Q.of)(!0)
                                            );
                                          })(C.route, _),
                                          (function (h, f, c) {
                                            const _ = f[f.length - 1],
                                              I = f
                                                .slice(0, f.length - 1)
                                                .reverse()
                                                .map((H) =>
                                                  (function (h) {
                                                    const f = h.routeConfig
                                                      ? h.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return f && 0 !== f.length
                                                      ? { node: h, guards: f }
                                                      : null;
                                                  })(H)
                                                )
                                                .filter((H) => null !== H)
                                                .map((H) =>
                                                  (0, F.P)(() => {
                                                    const Z = H.guards.map(
                                                      (fe) => {
                                                        const Oe = Jn(
                                                          fe,
                                                          H.node,
                                                          c
                                                        );
                                                        let It;
                                                        if (
                                                          (function (h) {
                                                            return (
                                                              h &&
                                                              Un(
                                                                h.canActivateChild
                                                              )
                                                            );
                                                          })(Oe)
                                                        )
                                                          It = nn(
                                                            Oe.canActivateChild(
                                                              _,
                                                              h
                                                            )
                                                          );
                                                        else {
                                                          if (!Un(Oe))
                                                            throw new Error(
                                                              "Invalid CanActivateChild guard"
                                                            );
                                                          It = nn(Oe(_, h));
                                                        }
                                                        return It.pipe(
                                                          (0, ht.P)()
                                                        );
                                                      }
                                                    );
                                                    return (0, Q.of)(Z).pipe(
                                                      qr()
                                                    );
                                                  })
                                                );
                                            return (0, Q.of)(I).pipe(qr());
                                          })(h, C.path, c),
                                          (function (h, f, c) {
                                            const _ = f.routeConfig
                                              ? f.routeConfig.canActivate
                                              : null;
                                            if (!_ || 0 === _.length)
                                              return (0, Q.of)(!0);
                                            const C = _.map((I) =>
                                              (0, F.P)(() => {
                                                const H = Jn(I, f, c);
                                                let Z;
                                                if (
                                                  (function (h) {
                                                    return (
                                                      h && Un(h.canActivate)
                                                    );
                                                  })(H)
                                                )
                                                  Z = nn(H.canActivate(f, h));
                                                else {
                                                  if (!Un(H))
                                                    throw new Error(
                                                      "Invalid CanActivate guard"
                                                    );
                                                  Z = nn(H(f, h));
                                                }
                                                return Z.pipe((0, ht.P)());
                                              })
                                            );
                                            return (0, Q.of)(C).pipe(qr());
                                          })(h, C.route, c)
                                        )
                                      ),
                                      (0, ht.P)((C) => !0 !== C, !0)
                                    );
                                  })(_, I, h, f)
                                : (0, Q.of)(Z)
                            ),
                            (0, Ve.U)((Z) =>
                              Object.assign(Object.assign({}, c), {
                                guardsResult: Z,
                              })
                            )
                          );
                    });
                  })(this.ngModule.injector, (Z) => this.triggerEvent(Z)),
                  (0, Gt.b)((Z) => {
                    if (os(Z.guardsResult)) {
                      const Oe = sr(
                        `Redirecting to "${this.serializeUrl(Z.guardsResult)}"`
                      );
                      throw ((Oe.url = Z.guardsResult), Oe);
                    }
                    const fe = new kt(
                      Z.id,
                      this.serializeUrl(Z.extractedUrl),
                      this.serializeUrl(Z.urlAfterRedirects),
                      Z.targetSnapshot,
                      !!Z.guardsResult
                    );
                    this.triggerEvent(fe);
                  }),
                  (0, De.h)(
                    (Z) =>
                      !!Z.guardsResult ||
                      (this.restoreHistory(Z),
                      this.cancelNavigationTransition(Z, ""),
                      !1)
                  ),
                  ct((Z) => {
                    if (Z.guards.canActivateChecks.length)
                      return (0, Q.of)(Z).pipe(
                        (0, Gt.b)((fe) => {
                          const Oe = new mn(
                            fe.id,
                            this.serializeUrl(fe.extractedUrl),
                            this.serializeUrl(fe.urlAfterRedirects),
                            fe.targetSnapshot
                          );
                          this.triggerEvent(Oe);
                        }),
                        (0, on.w)((fe) => {
                          let Oe = !1;
                          return (0, Q.of)(fe).pipe(
                            (function (h, f) {
                              return (0, Me.zg)((c) => {
                                const {
                                  targetSnapshot: _,
                                  guards: { canActivateChecks: C },
                                } = c;
                                if (!C.length) return (0, Q.of)(c);
                                let I = 0;
                                return (0, Y.D)(C).pipe(
                                  (0, Ue.b)((H) =>
                                    (function (h, f, c, _) {
                                      return (function (h, f, c, _) {
                                        const C = Object.keys(h);
                                        if (0 === C.length)
                                          return (0, Q.of)({});
                                        const I = {};
                                        return (0, Y.D)(C).pipe(
                                          (0, Me.zg)((H) =>
                                            (function (h, f, c, _) {
                                              const C = Jn(h, f, _);
                                              return nn(
                                                C.resolve
                                                  ? C.resolve(f, c)
                                                  : C(f, c)
                                              );
                                            })(h[H], f, c, _).pipe(
                                              (0, Gt.b)((Z) => {
                                                I[H] = Z;
                                              })
                                            )
                                          ),
                                          Re(1),
                                          (0, Me.zg)(() =>
                                            Object.keys(I).length === C.length
                                              ? (0, Q.of)(I)
                                              : W.E
                                          )
                                        );
                                      })(h._resolve, h, f, _).pipe(
                                        (0, Ve.U)(
                                          (I) => (
                                            (h._resolvedData = I),
                                            (h.data = Object.assign(
                                              Object.assign({}, h.data),
                                              Ye(h, c).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(H.route, _, h, f)
                                  ),
                                  (0, Gt.b)(() => I++),
                                  Re(1),
                                  (0, Me.zg)((H) =>
                                    I === C.length ? (0, Q.of)(c) : W.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            (0, Gt.b)({
                              next: () => (Oe = !0),
                              complete: () => {
                                Oe ||
                                  (this.restoreHistory(fe),
                                  this.cancelNavigationTransition(
                                    fe,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        (0, Gt.b)((fe) => {
                          const Oe = new On(
                            fe.id,
                            this.serializeUrl(fe.extractedUrl),
                            this.serializeUrl(fe.urlAfterRedirects),
                            fe.targetSnapshot
                          );
                          this.triggerEvent(Oe);
                        })
                      );
                  }),
                  ct((Z) => {
                    const {
                      targetSnapshot: fe,
                      id: Oe,
                      extractedUrl: It,
                      rawUrl: Ke,
                      extras: { skipLocationChange: Kt, replaceUrl: Tt },
                    } = Z;
                    return this.hooks.afterPreactivation(fe, {
                      navigationId: Oe,
                      appliedUrlTree: It,
                      rawUrlTree: Ke,
                      skipLocationChange: !!Kt,
                      replaceUrl: !!Tt,
                    });
                  }),
                  (0, Ve.U)((Z) => {
                    const fe = (function (h, f, c) {
                      const _ = gt(h, f._root, c ? c._root : void 0);
                      return new j(_, f);
                    })(
                      this.routeReuseStrategy,
                      Z.targetSnapshot,
                      Z.currentRouterState
                    );
                    return Object.assign(Object.assign({}, Z), {
                      targetRouterState: fe,
                    });
                  }),
                  (0, Gt.b)((Z) => {
                    (this.currentUrlTree = Z.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        Z.urlAfterRedirects,
                        Z.rawUrl
                      )),
                      (this.routerState = Z.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (Z.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, Z),
                        (this.browserUrlTree = Z.urlAfterRedirects));
                  }),
                  ((h, f, c) =>
                    (0, Ve.U)(
                      (_) => (
                        new Yi(
                          f,
                          _.targetRouterState,
                          _.currentRouterState,
                          c
                        ).activate(h),
                        _
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (Z) =>
                    this.triggerEvent(Z)
                  ),
                  (0, Gt.b)({
                    next() {
                      I = !0;
                    },
                    complete() {
                      I = !0;
                    },
                  }),
                  (0, tr.x)(() => {
                    var Z;
                    if (!I && !H) {
                      const fe = `Navigation ID ${C.id} is not equal to the current navigation id ${this.navigationId}`;
                      "replace" === this.canceledNavigationResolution
                        ? (this.restoreHistory(C),
                          this.cancelNavigationTransition(C, fe))
                        : this.cancelNavigationTransition(C, fe);
                    }
                    (null === (Z = this.currentNavigation) || void 0 === Z
                      ? void 0
                      : Z.id) === C.id && (this.currentNavigation = null);
                  }),
                  (0, dt.K)((Z) => {
                    if (
                      ((H = !0),
                      (function (h) {
                        return h && h[_n];
                      })(Z))
                    ) {
                      const fe = os(Z.url);
                      fe || ((this.navigated = !0), this.restoreHistory(C, !0));
                      const Oe = new rs(
                        C.id,
                        this.serializeUrl(C.extractedUrl),
                        Z.message
                      );
                      _.next(Oe),
                        fe
                          ? setTimeout(() => {
                              const It = this.urlHandlingStrategy.merge(
                                  Z.url,
                                  this.rawUrlTree
                                ),
                                Ke = {
                                  skipLocationChange:
                                    C.extras.skipLocationChange,
                                  replaceUrl:
                                    "eager" === this.urlUpdateStrategy ||
                                    Be(C.source),
                                };
                              this.scheduleNavigation(
                                It,
                                "imperative",
                                null,
                                Ke,
                                {
                                  resolve: C.resolve,
                                  reject: C.reject,
                                  promise: C.promise,
                                }
                              );
                            }, 0)
                          : C.resolve(!1);
                    } else {
                      this.restoreHistory(C, !0);
                      const fe = new kn(
                        C.id,
                        this.serializeUrl(C.extractedUrl),
                        Z
                      );
                      _.next(fe);
                      try {
                        C.resolve(this.errorHandler(Z));
                      } catch (Oe) {
                        C.reject(Oe);
                      }
                    }
                    return W.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(c) {
            (this.rootComponentType = c),
              (this.routerState.root.component = this.rootComponentType);
          }
          getTransition() {
            const c = this.transitions.value;
            return (c.urlAfterRedirects = this.browserUrlTree), c;
          }
          setTransition(c) {
            this.transitions.next(
              Object.assign(Object.assign({}, this.getTransition()), c)
            );
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((c) => {
                const _ = this.extractLocationChangeInfoFromEvent(c);
                this.shouldScheduleNavigation(this.lastLocationChangeInfo, _) &&
                  setTimeout(() => {
                    const { source: C, state: I, urlTree: H } = _,
                      Z = { replaceUrl: !0 };
                    if (I) {
                      const fe = Object.assign({}, I);
                      delete fe.navigationId,
                        delete fe.??routerPageId,
                        0 !== Object.keys(fe).length && (Z.state = fe);
                    }
                    this.scheduleNavigation(H, C, I, Z);
                  }, 0),
                  (this.lastLocationChangeInfo = _);
              }));
          }
          extractLocationChangeInfoFromEvent(c) {
            var _;
            return {
              source: "popstate" === c.type ? "popstate" : "hashchange",
              urlTree: this.parseUrl(c.url),
              state: (
                null === (_ = c.state) || void 0 === _ ? void 0 : _.navigationId
              )
                ? c.state
                : null,
              transitionId: this.getTransition().id,
            };
          }
          shouldScheduleNavigation(c, _) {
            if (!c) return !0;
            const C = _.urlTree.toString() === c.urlTree.toString();
            return (
              _.transitionId !== c.transitionId ||
              !C ||
              !(
                ("hashchange" === _.source && "popstate" === c.source) ||
                ("popstate" === _.source && "hashchange" === c.source)
              )
            );
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(c) {
            this.events.next(c);
          }
          resetConfig(c) {
            Zs(c),
              (this.config = c.map(Js)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(c, _ = {}) {
            const {
                relativeTo: C,
                queryParams: I,
                fragment: H,
                queryParamsHandling: Z,
                preserveFragment: fe,
              } = _,
              Oe = C || this.routerState.root,
              It = fe ? this.currentUrlTree.fragment : H;
            let Ke = null;
            switch (Z) {
              case "merge":
                Ke = Object.assign(
                  Object.assign({}, this.currentUrlTree.queryParams),
                  I
                );
                break;
              case "preserve":
                Ke = this.currentUrlTree.queryParams;
                break;
              default:
                Ke = I || null;
            }
            return (
              null !== Ke && (Ke = this.removeEmptyProps(Ke)),
              (function (h, f, c, _, C) {
                if (0 === c.length) return Vr(f.root, f.root, f, _, C);
                const I = (function (h) {
                  if ("string" == typeof h[0] && 1 === h.length && "/" === h[0])
                    return new qn(!0, 0, h);
                  let f = 0,
                    c = !1;
                  const _ = h.reduce((C, I, H) => {
                    if ("object" == typeof I && null != I) {
                      if (I.outlets) {
                        const Z = {};
                        return (
                          Ht(I.outlets, (fe, Oe) => {
                            Z[Oe] = "string" == typeof fe ? fe.split("/") : fe;
                          }),
                          [...C, { outlets: Z }]
                        );
                      }
                      if (I.segmentPath) return [...C, I.segmentPath];
                    }
                    return "string" != typeof I
                      ? [...C, I]
                      : 0 === H
                      ? (I.split("/").forEach((Z, fe) => {
                          (0 == fe && "." === Z) ||
                            (0 == fe && "" === Z
                              ? (c = !0)
                              : ".." === Z
                              ? f++
                              : "" != Z && C.push(Z));
                        }),
                        C)
                      : [...C, I];
                  }, []);
                  return new qn(c, f, _);
                })(c);
                if (I.toRoot()) return Vr(f.root, new qe([], {}), f, _, C);
                const H = (function (h, f, c) {
                    if (h.isAbsolute) return new Qs(f.root, !0, 0);
                    if (-1 === c.snapshot._lastPathIndex) {
                      const I = c.snapshot._urlSegment;
                      return new Qs(I, I === f.root, 0);
                    }
                    const _ = ar(h.commands[0]) ? 0 : 1;
                    return (function (h, f, c) {
                      let _ = h,
                        C = f,
                        I = c;
                      for (; I > C; ) {
                        if (((I -= C), (_ = _.parent), !_))
                          throw new Error("Invalid number of '../'");
                        C = _.segments.length;
                      }
                      return new Qs(_, !1, C - I);
                    })(
                      c.snapshot._urlSegment,
                      c.snapshot._lastPathIndex + _,
                      h.numberOfDoubleDots
                    );
                  })(I, f, h),
                  Z = H.processChildren
                    ? Ms(H.segmentGroup, H.index, I.commands)
                    : di(H.segmentGroup, H.index, I.commands);
                return Vr(H.segmentGroup, Z, f, _, C);
              })(Oe, this.currentUrlTree, c, Ke, null != It ? It : null)
            );
          }
          navigateByUrl(c, _ = { skipLocationChange: !1 }) {
            const C = os(c) ? c : this.parseUrl(c),
              I = this.urlHandlingStrategy.merge(C, this.rawUrlTree);
            return this.scheduleNavigation(I, "imperative", null, _);
          }
          navigate(c, _ = { skipLocationChange: !1 }) {
            return (
              (function (h) {
                for (let f = 0; f < h.length; f++) {
                  const c = h[f];
                  if (null == c)
                    throw new Error(
                      `The requested path contains ${c} segment at index ${f}`
                    );
                }
              })(c),
              this.navigateByUrl(this.createUrlTree(c, _), _)
            );
          }
          serializeUrl(c) {
            return this.urlSerializer.serialize(c);
          }
          parseUrl(c) {
            let _;
            try {
              _ = this.urlSerializer.parse(c);
            } catch (C) {
              _ = this.malformedUriErrorHandler(C, this.urlSerializer, c);
            }
            return _;
          }
          isActive(c, _) {
            let C;
            if (
              ((C =
                !0 === _
                  ? Object.assign({}, ln)
                  : !1 === _
                  ? Object.assign({}, Xr)
                  : _),
              os(c))
            )
              return Ct(this.currentUrlTree, c, C);
            const I = this.parseUrl(c);
            return Ct(this.currentUrlTree, I, C);
          }
          removeEmptyProps(c) {
            return Object.keys(c).reduce((_, C) => {
              const I = c[C];
              return null != I && (_[C] = I), _;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (c) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = c.id),
                  (this.currentPageId = c.targetPageId),
                  this.events.next(
                    new nr(
                      c.id,
                      this.serializeUrl(c.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  c.resolve(!0);
              },
              (c) => {
                this.console.warn(`Unhandled Navigation Error: ${c}`);
              }
            );
          }
          scheduleNavigation(c, _, C, I, H) {
            var Z, fe;
            if (this.disposed) return Promise.resolve(!1);
            const Oe = this.getTransition(),
              It = Be(_) && Oe && !Be(Oe.source),
              Tt =
                (this.lastSuccessfulId === Oe.id || this.currentNavigation
                  ? Oe.rawUrl
                  : Oe.urlAfterRedirects
                ).toString() === c.toString();
            if (It && Tt) return Promise.resolve(!0);
            let ks, gs, Mr;
            H
              ? ((ks = H.resolve), (gs = H.reject), (Mr = H.promise))
              : (Mr = new Promise((_s, io) => {
                  (ks = _s), (gs = io);
                }));
            const ms = ++this.navigationId;
            let Vs;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (C = this.location.getState()),
                  (Vs =
                    C && C.??routerPageId
                      ? C.??routerPageId
                      : I.replaceUrl || I.skipLocationChange
                      ? null !== (Z = this.browserPageId) && void 0 !== Z
                        ? Z
                        : 0
                      : (null !== (fe = this.browserPageId) && void 0 !== fe
                          ? fe
                          : 0) + 1))
                : (Vs = 0),
              this.setTransition({
                id: ms,
                targetPageId: Vs,
                source: _,
                restoredState: C,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: c,
                extras: I,
                resolve: ks,
                reject: gs,
                promise: Mr,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Mr.catch((_s) => Promise.reject(_s))
            );
          }
          setBrowserUrl(c, _) {
            const C = this.urlSerializer.serialize(c),
              I = Object.assign(
                Object.assign({}, _.extras.state),
                this.generateNgRouterState(_.id, _.targetPageId)
              );
            this.location.isCurrentPathEqualTo(C) || _.extras.replaceUrl
              ? this.location.replaceState(C, "", I)
              : this.location.go(C, "", I);
          }
          restoreHistory(c, _ = !1) {
            var C, I;
            if ("computed" === this.canceledNavigationResolution) {
              const H = this.currentPageId - c.targetPageId;
              ("popstate" !== c.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  (null === (C = this.currentNavigation) || void 0 === C
                    ? void 0
                    : C.finalUrl)) ||
              0 === H
                ? this.currentUrlTree ===
                    (null === (I = this.currentNavigation) || void 0 === I
                      ? void 0
                      : I.finalUrl) &&
                  0 === H &&
                  (this.resetState(c),
                  (this.browserUrlTree = c.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(H);
            } else
              "replace" === this.canceledNavigationResolution &&
                (_ && this.resetState(c), this.resetUrlToCurrentUrlTree());
          }
          resetState(c) {
            (this.routerState = c.currentRouterState),
              (this.currentUrlTree = c.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                c.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(c, _) {
            const C = new rs(c.id, this.serializeUrl(c.extractedUrl), _);
            this.triggerEvent(C), c.resolve(!1);
          }
          generateNgRouterState(c, _) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: c, ??routerPageId: _ }
              : { navigationId: c };
          }
        }
        return (
          (h.??fac = function (c) {
            return new (c || h)(
              v.LFG(v.DyG),
              v.LFG(or),
              v.LFG(un),
              v.LFG(E.Ye),
              v.LFG(v.zs3),
              v.LFG(v.v3s),
              v.LFG(v.Sil),
              v.LFG(void 0)
            );
          }),
          (h.??prov = v.Yz7({ token: h, factory: h.??fac })),
          h
        );
      })();
      function Be(h) {
        return "imperative" !== h;
      }
      let Ge = (() => {
          class h {
            constructor(c, _, C, I, H) {
              (this.router = c),
                (this.route = _),
                (this.commands = []),
                (this.onChanges = new te.xQ()),
                null == C && I.setAttribute(H.nativeElement, "tabindex", "0");
            }
            ngOnChanges(c) {
              this.onChanges.next(this);
            }
            set routerLink(c) {
              this.commands = null != c ? (Array.isArray(c) ? c : [c]) : [];
            }
            onClick() {
              const c = {
                skipLocationChange: en(this.skipLocationChange),
                replaceUrl: en(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, c), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: en(this.preserveFragment),
              });
            }
          }
          return (
            (h.??fac = function (c) {
              return new (c || h)(
                v.Y36(mt),
                v.Y36(Pe),
                v.$8M("tabindex"),
                v.Y36(v.Qsj),
                v.Y36(v.SBq)
              );
            }),
            (h.??dir = v.lG2({
              type: h,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (c, _) {
                1 & c &&
                  v.NdJ("click", function () {
                    return _.onClick();
                  });
              },
              inputs: {
                routerLink: "routerLink",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [v.TTD],
            })),
            h
          );
        })(),
        yt = (() => {
          class h {
            constructor(c, _, C) {
              (this.router = c),
                (this.route = _),
                (this.locationStrategy = C),
                (this.commands = []),
                (this.onChanges = new te.xQ()),
                (this.subscription = c.events.subscribe((I) => {
                  I instanceof nr && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(c) {
              this.commands = null != c ? (Array.isArray(c) ? c : [c]) : [];
            }
            ngOnChanges(c) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(c, _, C, I, H) {
              if (
                0 !== c ||
                _ ||
                C ||
                I ||
                H ||
                ("string" == typeof this.target && "_self" != this.target)
              )
                return !0;
              const Z = {
                skipLocationChange: en(this.skipLocationChange),
                replaceUrl: en(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, Z), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: en(this.preserveFragment),
              });
            }
          }
          return (
            (h.??fac = function (c) {
              return new (c || h)(v.Y36(mt), v.Y36(Pe), v.Y36(E.S$));
            }),
            (h.??dir = v.lG2({
              type: h,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (c, _) {
                1 & c &&
                  v.NdJ("click", function (I) {
                    return _.onClick(
                      I.button,
                      I.ctrlKey,
                      I.shiftKey,
                      I.altKey,
                      I.metaKey
                    );
                  }),
                  2 & c &&
                    (v.Ikx("href", _.href, v.LSH), v.uIk("target", _.target));
              },
              inputs: {
                routerLink: "routerLink",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [v.TTD],
            })),
            h
          );
        })();
      function en(h) {
        return "" === h || !!h;
      }
      let lr = (() => {
        class h {
          constructor(c, _, C, I, H) {
            (this.parentContexts = c),
              (this.location = _),
              (this.resolver = C),
              (this.changeDetector = H),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new v.vpe()),
              (this.deactivateEvents = new v.vpe()),
              (this.name = I || Ce),
              c.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const c = this.parentContexts.getContext(this.name);
              c &&
                c.route &&
                (c.attachRef
                  ? this.attach(c.attachRef, c.route)
                  : this.activateWith(c.route, c.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const c = this.activated;
            return (this.activated = null), (this._activatedRoute = null), c;
          }
          attach(c, _) {
            (this.activated = c),
              (this._activatedRoute = _),
              this.location.insert(c.hostView);
          }
          deactivate() {
            if (this.activated) {
              const c = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(c);
            }
          }
          activateWith(c, _) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = c;
            const H = (_ = _ || this.resolver).resolveComponentFactory(
                c._futureSnapshot.routeConfig.component
              ),
              Z = this.parentContexts.getOrCreateContext(this.name).children,
              fe = new Wt(c, Z, this.location.injector);
            (this.activated = this.location.createComponent(
              H,
              this.location.length,
              fe
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (h.??fac = function (c) {
            return new (c || h)(
              v.Y36(un),
              v.Y36(v.s_b),
              v.Y36(v._Vd),
              v.$8M("name"),
              v.Y36(v.sBO)
            );
          }),
          (h.??dir = v.lG2({
            type: h,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          h
        );
      })();
      class Wt {
        constructor(f, c, _) {
          (this.route = f), (this.childContexts = c), (this.parent = _);
        }
        get(f, c) {
          return f === Pe
            ? this.route
            : f === un
            ? this.childContexts
            : this.parent.get(f, c);
        }
      }
      class Di {}
      class Fs {
        preload(f, c) {
          return (0, Q.of)(null);
        }
      }
      let yr = (() => {
          class h {
            constructor(c, _, C, I, H) {
              (this.router = c),
                (this.injector = I),
                (this.preloadingStrategy = H),
                (this.loader = new Hr(
                  _,
                  C,
                  (Oe) => c.triggerEvent(new Fr(Oe)),
                  (Oe) => c.triggerEvent(new Pn(Oe))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, De.h)((c) => c instanceof nr),
                  (0, Ue.b)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const c = this.injector.get(v.h0i);
              return this.processRoutes(c, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(c, _) {
              const C = [];
              for (const I of _)
                if (I.loadChildren && !I.canLoad && I._loadedConfig) {
                  const H = I._loadedConfig;
                  C.push(this.processRoutes(H.module, H.routes));
                } else
                  I.loadChildren && !I.canLoad
                    ? C.push(this.preloadConfig(c, I))
                    : I.children && C.push(this.processRoutes(c, I.children));
              return (0, Y.D)(C).pipe(
                (0, Nr.J)(),
                (0, Ve.U)((I) => {})
              );
            }
            preloadConfig(c, _) {
              return this.preloadingStrategy.preload(_, () =>
                (_._loadedConfig
                  ? (0, Q.of)(_._loadedConfig)
                  : this.loader.load(c.injector, _)
                ).pipe(
                  (0, Me.zg)(
                    (I) => (
                      (_._loadedConfig = I),
                      this.processRoutes(I.module, I.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (h.??fac = function (c) {
              return new (c || h)(
                v.LFG(mt),
                v.LFG(v.v3s),
                v.LFG(v.Sil),
                v.LFG(v.zs3),
                v.LFG(Di)
              );
            }),
            (h.??prov = v.Yz7({ token: h, factory: h.??fac })),
            h
          );
        })(),
        cr = (() => {
          class h {
            constructor(c, _, C = {}) {
              (this.router = c),
                (this.viewportScroller = _),
                (this.options = C),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (C.scrollPositionRestoration =
                  C.scrollPositionRestoration || "disabled"),
                (C.anchorScrolling = C.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((c) => {
                c instanceof ft
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = c.navigationTrigger),
                    (this.restoredId = c.restoredState
                      ? c.restoredState.navigationId
                      : 0))
                  : c instanceof nr &&
                    ((this.lastId = c.id),
                    this.scheduleScrollEvent(
                      c,
                      this.router.parseUrl(c.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((c) => {
                c instanceof Vn &&
                  (c.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(c.position)
                    : c.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(c.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(c, _) {
              this.router.triggerEvent(
                new Vn(
                  c,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  _
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (h.??fac = function (c) {
              return new (c || h)(v.LFG(mt), v.LFG(E.EM), v.LFG(void 0));
            }),
            (h.??prov = v.Yz7({ token: h, factory: h.??fac })),
            h
          );
        })();
      const ni = new v.OlP("ROUTER_CONFIGURATION"),
        Ci = new v.OlP("ROUTER_FORROOT_GUARD"),
        nl = [
          E.Ye,
          { provide: or, useClass: fr },
          {
            provide: mt,
            useFactory: function (h, f, c, _, C, I, H, Z = {}, fe, Oe) {
              const It = new mt(null, h, f, c, _, C, I, Se(H));
              return (
                fe && (It.urlHandlingStrategy = fe),
                Oe && (It.routeReuseStrategy = Oe),
                (function (h, f) {
                  h.errorHandler && (f.errorHandler = h.errorHandler),
                    h.malformedUriErrorHandler &&
                      (f.malformedUriErrorHandler = h.malformedUriErrorHandler),
                    h.onSameUrlNavigation &&
                      (f.onSameUrlNavigation = h.onSameUrlNavigation),
                    h.paramsInheritanceStrategy &&
                      (f.paramsInheritanceStrategy =
                        h.paramsInheritanceStrategy),
                    h.relativeLinkResolution &&
                      (f.relativeLinkResolution = h.relativeLinkResolution),
                    h.urlUpdateStrategy &&
                      (f.urlUpdateStrategy = h.urlUpdateStrategy);
                })(Z, It),
                Z.enableTracing &&
                  It.events.subscribe((Ke) => {
                    var Kt, Tt;
                    null === (Kt = console.group) ||
                      void 0 === Kt ||
                      Kt.call(console, `Router Event: ${Ke.constructor.name}`),
                      console.log(Ke.toString()),
                      console.log(Ke),
                      null === (Tt = console.groupEnd) ||
                        void 0 === Tt ||
                        Tt.call(console);
                  }),
                It
              );
            },
            deps: [
              or,
              un,
              E.Ye,
              v.zs3,
              v.v3s,
              v.Sil,
              fn,
              ni,
              [class {}, new v.FiY()],
              [class {}, new v.FiY()],
            ],
          },
          un,
          {
            provide: Pe,
            useFactory: function (h) {
              return h.routerState.root;
            },
            deps: [mt],
          },
          { provide: v.v3s, useClass: v.EAV },
          yr,
          Fs,
          class {
            preload(f, c) {
              return c().pipe((0, dt.K)(() => (0, Q.of)(null)));
            }
          },
          { provide: ni, useValue: { enableTracing: !1 } },
        ];
      function rl() {
        return new v.PXZ("Router", mt);
      }
      let Wd = (() => {
        class h {
          constructor(c, _) {}
          static forRoot(c, _) {
            return {
              ngModule: h,
              providers: [
                nl,
                to(c),
                {
                  provide: Ci,
                  useFactory: eu,
                  deps: [[mt, new v.FiY(), new v.tp0()]],
                },
                { provide: ni, useValue: _ || {} },
                {
                  provide: E.S$,
                  useFactory: eo,
                  deps: [E.lw, [new v.tBr(E.mr), new v.FiY()], ni],
                },
                { provide: cr, useFactory: Kd, deps: [mt, E.EM, ni] },
                {
                  provide: Di,
                  useExisting:
                    _ && _.preloadingStrategy ? _.preloadingStrategy : Fs,
                },
                { provide: v.PXZ, multi: !0, useFactory: rl },
                [
                  Ls,
                  { provide: v.ip1, multi: !0, useFactory: sl, deps: [Ls] },
                  { provide: ro, useFactory: vi, deps: [Ls] },
                  { provide: v.tb, multi: !0, useExisting: ro },
                ],
              ],
            };
          }
          static forChild(c) {
            return { ngModule: h, providers: [to(c)] };
          }
        }
        return (
          (h.??fac = function (c) {
            return new (c || h)(v.LFG(Ci, 8), v.LFG(mt, 8));
          }),
          (h.??mod = v.oAB({ type: h })),
          (h.??inj = v.cJS({})),
          h
        );
      })();
      function Kd(h, f, c) {
        return c.scrollOffset && f.setOffset(c.scrollOffset), new cr(h, f, c);
      }
      function eo(h, f, c = {}) {
        return c.useHash ? new E.Do(h, f) : new E.b0(h, f);
      }
      function eu(h) {
        return "guarded";
      }
      function to(h) {
        return [
          { provide: v.deG, multi: !0, useValue: h },
          { provide: fn, multi: !0, useValue: h },
        ];
      }
      let Ls = (() => {
        class h {
          constructor(c) {
            (this.injector = c),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new te.xQ());
          }
          appInitializer() {
            return this.injector.get(E.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let _ = null;
              const C = new Promise((Z) => (_ = Z)),
                I = this.injector.get(mt),
                H = this.injector.get(ni);
              return (
                "disabled" === H.initialNavigation
                  ? (I.setUpLocationChangeListener(), _(!0))
                  : "enabled" === H.initialNavigation ||
                    "enabledBlocking" === H.initialNavigation
                  ? ((I.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, Q.of)(null)
                        : ((this.initNavigation = !0),
                          _(!0),
                          this.resultOfPreactivationDone)),
                    I.initialNavigation())
                  : _(!0),
                C
              );
            });
          }
          bootstrapListener(c) {
            const _ = this.injector.get(ni),
              C = this.injector.get(yr),
              I = this.injector.get(cr),
              H = this.injector.get(mt),
              Z = this.injector.get(v.z2F);
            c === Z.components[0] &&
              (("enabledNonBlocking" === _.initialNavigation ||
                void 0 === _.initialNavigation) &&
                H.initialNavigation(),
              C.setUpPreloading(),
              I.init(),
              H.resetRootComponentType(Z.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (h.??fac = function (c) {
            return new (c || h)(v.LFG(v.zs3));
          }),
          (h.??prov = v.Yz7({ token: h, factory: h.??fac })),
          h
        );
      })();
      function sl(h) {
        return h.appInitializer.bind(h);
      }
      function vi(h) {
        return h.bootstrapListener.bind(h);
      }
      const ro = new v.OlP("Router Initializer");
    },
    3572: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        FT: () => StoreDevtoolsModule,
      });
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(7716),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3065),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9193),
        rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7574),
        rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5917),
        rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6682),
        rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7771),
        rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8229),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8002),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4612),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4010),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4395),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(5304),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(5257),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(6782),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(3190),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(3653),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(9746),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(7057),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(2145);
      class StoreDevtoolsConfig {
        constructor() {
          this.maxAge = !1;
        }
      }
      const STORE_DEVTOOLS_CONFIG =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
            "@ngrx/store-devtools Options"
          ),
        INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          "@ngrx/store-devtools Initial Config"
        );
      function noMonitor() {
        return null;
      }
      const DEFAULT_NAME = "NgRx Store DevTools";
      function createConfig(X) {
        const U = {
            maxAge: !1,
            monitor: noMonitor,
            actionSanitizer: void 0,
            stateSanitizer: void 0,
            name: DEFAULT_NAME,
            serialize: !1,
            logOnly: !1,
            autoPause: !1,
            features: {
              pause: !0,
              lock: !0,
              persist: !0,
              export: !0,
              import: "custom",
              jump: !0,
              skip: !0,
              reorder: !0,
              dispatch: !0,
              test: !0,
            },
          },
          b = "function" == typeof X ? X() : X,
          Y = Object.assign(
            {},
            U,
            {
              features:
                b.features ||
                (!!b.logOnly && { pause: !0, export: !0, test: !0 }) ||
                U.features,
            },
            b
          );
        if (Y.maxAge && Y.maxAge < 2)
          throw new Error(
            `Devtools 'maxAge' cannot be less than 2, got ${Y.maxAge}`
          );
        return Y;
      }
      const PERFORM_ACTION = "PERFORM_ACTION",
        REFRESH = "REFRESH",
        RESET = "RESET",
        ROLLBACK = "ROLLBACK",
        COMMIT = "COMMIT",
        SWEEP = "SWEEP",
        TOGGLE_ACTION = "TOGGLE_ACTION",
        SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE",
        JUMP_TO_STATE = "JUMP_TO_STATE",
        JUMP_TO_ACTION = "JUMP_TO_ACTION",
        IMPORT_STATE = "IMPORT_STATE",
        LOCK_CHANGES = "LOCK_CHANGES",
        PAUSE_RECORDING = "PAUSE_RECORDING";
      class PerformAction {
        constructor(U, b) {
          if (
            ((this.action = U),
            (this.timestamp = b),
            (this.type = PERFORM_ACTION),
            void 0 === U.type)
          )
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
        }
      }
      class Refresh {
        constructor() {
          this.type = REFRESH;
        }
      }
      class Reset {
        constructor(U) {
          (this.timestamp = U), (this.type = RESET);
        }
      }
      class Rollback {
        constructor(U) {
          (this.timestamp = U), (this.type = ROLLBACK);
        }
      }
      class Commit {
        constructor(U) {
          (this.timestamp = U), (this.type = COMMIT);
        }
      }
      class Sweep {
        constructor() {
          this.type = SWEEP;
        }
      }
      class ToggleAction {
        constructor(U) {
          (this.id = U), (this.type = TOGGLE_ACTION);
        }
      }
      class SetActionsActive {
        constructor(U, b, E = !0) {
          (this.start = U),
            (this.end = b),
            (this.active = E),
            (this.type = SET_ACTIONS_ACTIVE);
        }
      }
      class JumpToState {
        constructor(U) {
          (this.index = U), (this.type = JUMP_TO_STATE);
        }
      }
      class JumpToAction {
        constructor(U) {
          (this.actionId = U), (this.type = JUMP_TO_ACTION);
        }
      }
      class ImportState {
        constructor(U) {
          (this.nextLiftedState = U), (this.type = IMPORT_STATE);
        }
      }
      class LockChanges {
        constructor(U) {
          (this.status = U), (this.type = LOCK_CHANGES);
        }
      }
      class PauseRecording {
        constructor(U) {
          (this.status = U), (this.type = PAUSE_RECORDING);
        }
      }
      let DevtoolsDispatcher = (() => {
        class X extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO {}
        return (
          (X.??fac = (function () {
            let U;
            return function (E) {
              return (
                U || (U = _angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(X))
              )(E || X);
            };
          })()),
          (X.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
            token: X,
            factory: X.??fac,
          })),
          X
        );
      })();
      function difference(X, U) {
        return X.filter((b) => U.indexOf(b) < 0);
      }
      function unliftState(X) {
        const { computedStates: U, currentStateIndex: b } = X;
        if (b >= U.length) {
          const { state: v } = U[U.length - 1];
          return v;
        }
        const { state: E } = U[b];
        return E;
      }
      function unliftAction(X) {
        return X.actionsById[X.nextActionId - 1];
      }
      function liftAction(X) {
        return new PerformAction(X, +Date.now());
      }
      function sanitizeActions(X, U) {
        return Object.keys(U).reduce((b, E) => {
          const v = Number(E);
          return (b[v] = sanitizeAction(X, U[v], v)), b;
        }, {});
      }
      function sanitizeAction(X, U, b) {
        return Object.assign(Object.assign({}, U), { action: X(U.action, b) });
      }
      function sanitizeStates(X, U) {
        return U.map((b, E) => ({
          state: sanitizeState(X, b.state, E),
          error: b.error,
        }));
      }
      function sanitizeState(X, U, b) {
        return X(U, b);
      }
      function shouldFilterActions(X) {
        return X.predicate || X.actionsSafelist || X.actionsBlocklist;
      }
      function filterLiftedState(X, U, b, E) {
        const v = [],
          Y = {},
          Q = [];
        return (
          X.stagedActionIds.forEach((B, P) => {
            const L = X.actionsById[B];
            !L ||
              (P && isActionFiltered(X.computedStates[P], L, U, b, E)) ||
              ((Y[B] = L), v.push(B), Q.push(X.computedStates[P]));
          }),
          Object.assign(Object.assign({}, X), {
            stagedActionIds: v,
            actionsById: Y,
            computedStates: Q,
          })
        );
      }
      function isActionFiltered(X, U, b, E, v) {
        const Y = b && !b(X, U.action),
          Q =
            E && !U.action.type.match(E.map((P) => escapeRegExp(P)).join("|")),
          B = v && U.action.type.match(v.map((P) => escapeRegExp(P)).join("|"));
        return Y || Q || B;
      }
      function escapeRegExp(X) {
        return X.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      const ExtensionActionTypes = {
          START: "START",
          DISPATCH: "DISPATCH",
          STOP: "STOP",
          ACTION: "ACTION",
        },
        REDUX_DEVTOOLS_EXTENSION =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
            "@ngrx/store-devtools Redux Devtools Extension"
          );
      let DevtoolsExtension = (() => {
        class DevtoolsExtension {
          constructor(X, U, b) {
            (this.config = U),
              (this.dispatcher = b),
              (this.devtoolsExtension = X),
              this.createActionStreams();
          }
          notify(X, U) {
            if (this.devtoolsExtension)
              if (X.type === PERFORM_ACTION) {
                if (U.isLocked || U.isPaused) return;
                const b = unliftState(U);
                if (
                  shouldFilterActions(this.config) &&
                  isActionFiltered(
                    b,
                    X,
                    this.config.predicate,
                    this.config.actionsSafelist,
                    this.config.actionsBlocklist
                  )
                )
                  return;
                const E = this.config.stateSanitizer
                    ? sanitizeState(
                        this.config.stateSanitizer,
                        b,
                        U.currentStateIndex
                      )
                    : b,
                  v = this.config.actionSanitizer
                    ? sanitizeAction(
                        this.config.actionSanitizer,
                        X,
                        U.nextActionId
                      )
                    : X;
                this.sendToReduxDevtools(() =>
                  this.extensionConnection.send(v, E)
                );
              } else {
                const b = Object.assign(Object.assign({}, U), {
                  stagedActionIds: U.stagedActionIds,
                  actionsById: this.config.actionSanitizer
                    ? sanitizeActions(
                        this.config.actionSanitizer,
                        U.actionsById
                      )
                    : U.actionsById,
                  computedStates: this.config.stateSanitizer
                    ? sanitizeStates(
                        this.config.stateSanitizer,
                        U.computedStates
                      )
                    : U.computedStates,
                });
                this.sendToReduxDevtools(() =>
                  this.devtoolsExtension.send(
                    null,
                    b,
                    this.getExtensionConfig(this.config)
                  )
                );
              }
          }
          createChangesObservable() {
            return this.devtoolsExtension
              ? new rxjs__WEBPACK_IMPORTED_MODULE_3__.y((X) => {
                  const U = this.devtoolsExtension.connect(
                    this.getExtensionConfig(this.config)
                  );
                  return (
                    (this.extensionConnection = U),
                    U.init(),
                    U.subscribe((b) => X.next(b)),
                    U.unsubscribe
                  );
                })
              : rxjs__WEBPACK_IMPORTED_MODULE_2__.E;
          }
          createActionStreams() {
            const X = this.createChangesObservable().pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()
              ),
              U = X.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (B) => B.type === ExtensionActionTypes.START
                )
              ),
              b = X.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (B) => B.type === ExtensionActionTypes.STOP
                )
              ),
              E = X.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (B) => B.type === ExtensionActionTypes.DISPATCH
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((B) =>
                  this.unwrapAction(B.payload)
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)((B) =>
                  B.type === IMPORT_STATE
                    ? this.dispatcher.pipe(
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                          (P) =>
                            P.type ===
                            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb
                        ),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(1e3),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(1e3),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                          () => B
                        ),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(
                          () => (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(B)
                        ),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)
                      )
                    : (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(B)
                )
              ),
              Y = X.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (B) => B.type === ExtensionActionTypes.ACTION
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((B) =>
                  this.unwrapAction(B.payload)
                )
              ).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(b)),
              Q = E.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(b)
              );
            (this.start$ = U.pipe(
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(b)
            )),
              (this.actions$ = this.start$.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => Y)
              )),
              (this.liftedActions$ = this.start$.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => Q)
              ));
          }
          unwrapAction(action) {
            return "string" == typeof action ? eval(`(${action})`) : action;
          }
          getExtensionConfig(X) {
            var U;
            const b = {
              name: X.name,
              features: X.features,
              serialize: X.serialize,
              autoPause: null !== (U = X.autoPause) && void 0 !== U && U,
            };
            return !1 !== X.maxAge && (b.maxAge = X.maxAge), b;
          }
          sendToReduxDevtools(X) {
            try {
              X();
            } catch (U) {
              console.warn(
                "@ngrx/store-devtools: something went wrong inside the redux devtools",
                U
              );
            }
          }
        }
        return (
          (DevtoolsExtension.??fac = function (U) {
            return new (U || DevtoolsExtension)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                REDUX_DEVTOOLS_EXTENSION
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                STORE_DEVTOOLS_CONFIG
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher)
            );
          }),
          (DevtoolsExtension.??prov =
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
              token: DevtoolsExtension,
              factory: DevtoolsExtension.??fac,
            })),
          DevtoolsExtension
        );
      })();
      const INIT_ACTION = { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg },
        RECOMPUTE = "@ngrx/store-devtools/recompute",
        RECOMPUTE_ACTION = { type: RECOMPUTE };
      function computeNextEntry(X, U, b, E, v) {
        if (E)
          return { state: b, error: "Interrupted by an error up the chain" };
        let Q,
          Y = b;
        try {
          Y = X(b, U);
        } catch (B) {
          (Q = B.toString()), v.handleError(B);
        }
        return { state: Y, error: Q };
      }
      function recomputeStates(X, U, b, E, v, Y, Q, B, P) {
        if (U >= X.length && X.length === Y.length) return X;
        const L = X.slice(0, U),
          R = Y.length - (P ? 1 : 0);
        for (let N = U; N < R; N++) {
          const F = Y[N],
            W = v[F].action,
            V = L[N - 1],
            te = V ? V.state : E,
            De = V ? V.error : void 0,
            ge = Q.indexOf(F) > -1 ? V : computeNextEntry(b, W, te, De, B);
          L.push(ge);
        }
        return P && L.push(X[X.length - 1]), L;
      }
      function liftInitialState(X, U) {
        return {
          monitorState: U(void 0, {}),
          nextActionId: 1,
          actionsById: { 0: liftAction(INIT_ACTION) },
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: X,
          currentStateIndex: 0,
          computedStates: [],
          isLocked: !1,
          isPaused: !1,
        };
      }
      function liftReducerWith(X, U, b, E, v = {}) {
        return (Y) => (Q, B) => {
          let {
            monitorState: P,
            actionsById: L,
            nextActionId: R,
            stagedActionIds: N,
            skippedActionIds: F,
            committedState: W,
            currentStateIndex: V,
            computedStates: te,
            isLocked: De,
            isPaused: ae,
          } = Q || U;
          function ge(we) {
            let Le = we,
              Ne = N.slice(1, Le + 1);
            for (let Ee = 0; Ee < Ne.length; Ee++) {
              if (te[Ee + 1].error) {
                (Le = Ee), (Ne = N.slice(1, Le + 1));
                break;
              }
              delete L[Ne[Ee]];
            }
            (F = F.filter((Ee) => -1 === Ne.indexOf(Ee))),
              (N = [0, ...N.slice(Le + 1)]),
              (W = te[Le].state),
              (te = te.slice(Le)),
              (V = V > Le ? V - Le : 0);
          }
          function Re() {
            (L = { 0: liftAction(INIT_ACTION) }),
              (R = 1),
              (N = [0]),
              (F = []),
              (W = te[V].state),
              (V = 0),
              (te = []);
          }
          Q || (L = Object.create(L));
          let me = 0;
          switch (B.type) {
            case LOCK_CHANGES:
              (De = B.status), (me = 1 / 0);
              break;
            case PAUSE_RECORDING:
              (ae = B.status),
                ae
                  ? ((N = [...N, R]),
                    (L[R] = new PerformAction(
                      { type: "@ngrx/devtools/pause" },
                      +Date.now()
                    )),
                    R++,
                    (me = N.length - 1),
                    (te = te.concat(te[te.length - 1])),
                    V === N.length - 2 && V++,
                    (me = 1 / 0))
                  : Re();
              break;
            case RESET:
              (L = { 0: liftAction(INIT_ACTION) }),
                (R = 1),
                (N = [0]),
                (F = []),
                (W = X),
                (V = 0),
                (te = []);
              break;
            case COMMIT:
              Re();
              break;
            case ROLLBACK:
              (L = { 0: liftAction(INIT_ACTION) }),
                (R = 1),
                (N = [0]),
                (F = []),
                (V = 0),
                (te = []);
              break;
            case TOGGLE_ACTION: {
              const { id: we } = B;
              (F =
                -1 === F.indexOf(we)
                  ? [we, ...F]
                  : F.filter((Ne) => Ne !== we)),
                (me = N.indexOf(we));
              break;
            }
            case SET_ACTIONS_ACTIVE: {
              const { start: we, end: Le, active: Ne } = B,
                Ee = [];
              for (let et = we; et < Le; et++) Ee.push(et);
              (F = Ne ? difference(F, Ee) : [...F, ...Ee]),
                (me = N.indexOf(we));
              break;
            }
            case JUMP_TO_STATE:
              (V = B.index), (me = 1 / 0);
              break;
            case JUMP_TO_ACTION: {
              const we = N.indexOf(B.actionId);
              -1 !== we && (V = we), (me = 1 / 0);
              break;
            }
            case SWEEP:
              (N = difference(N, F)), (F = []), (V = Math.min(V, N.length - 1));
              break;
            case PERFORM_ACTION: {
              if (De) return Q || U;
              if (
                ae ||
                (Q &&
                  isActionFiltered(
                    Q.computedStates[V],
                    B,
                    v.predicate,
                    v.actionsSafelist,
                    v.actionsBlocklist
                  ))
              ) {
                const Le = te[te.length - 1];
                (te = [
                  ...te.slice(0, -1),
                  computeNextEntry(Y, B.action, Le.state, Le.error, b),
                ]),
                  (me = 1 / 0);
                break;
              }
              v.maxAge && N.length === v.maxAge && ge(1),
                V === N.length - 1 && V++;
              const we = R++;
              (L[we] = B), (N = [...N, we]), (me = N.length - 1);
              break;
            }
            case IMPORT_STATE:
              ({
                monitorState: P,
                actionsById: L,
                nextActionId: R,
                stagedActionIds: N,
                skippedActionIds: F,
                committedState: W,
                currentStateIndex: V,
                computedStates: te,
                isLocked: De,
                isPaused: ae,
              } = B.nextLiftedState);
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:
              (me = 0),
                v.maxAge &&
                  N.length > v.maxAge &&
                  ((te = recomputeStates(te, me, Y, W, L, N, F, b, ae)),
                  ge(N.length - v.maxAge),
                  (me = 1 / 0));
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:
              if (te.filter((Le) => Le.error).length > 0)
                (me = 0),
                  v.maxAge &&
                    N.length > v.maxAge &&
                    ((te = recomputeStates(te, me, Y, W, L, N, F, b, ae)),
                    ge(N.length - v.maxAge),
                    (me = 1 / 0));
              else {
                if (!ae && !De) {
                  V === N.length - 1 && V++;
                  const Le = R++;
                  (L[Le] = new PerformAction(B, +Date.now())),
                    (N = [...N, Le]),
                    (me = N.length - 1),
                    (te = recomputeStates(te, me, Y, W, L, N, F, b, ae));
                }
                (te = te.map((Le) =>
                  Object.assign(Object.assign({}, Le), {
                    state: Y(Le.state, RECOMPUTE_ACTION),
                  })
                )),
                  (V = N.length - 1),
                  v.maxAge && N.length > v.maxAge && ge(N.length - v.maxAge),
                  (me = 1 / 0);
              }
              break;
            default:
              me = 1 / 0;
          }
          return (
            (te = recomputeStates(te, me, Y, W, L, N, F, b, ae)),
            (P = E(P, B)),
            {
              monitorState: P,
              actionsById: L,
              nextActionId: R,
              stagedActionIds: N,
              skippedActionIds: F,
              committedState: W,
              currentStateIndex: V,
              computedStates: te,
              isLocked: De,
              isPaused: ae,
            }
          );
        };
      }
      let StoreDevtools = (() => {
        class X {
          constructor(b, E, v, Y, Q, B, P, L) {
            const R = liftInitialState(P, L.monitor),
              N = liftReducerWith(P, R, B, L.monitor, L),
              F = (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                  E.asObservable().pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)
                  ),
                  Y.actions$
                ).pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(liftAction)
                ),
                b,
                Y.liftedActions$
              ).pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.QV)(
                  rxjs__WEBPACK_IMPORTED_MODULE_18__.N
                )
              ),
              W = v.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(N)),
              V = new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),
              te = F.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(W),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(
                  ({ state: Re }, [me, we]) => {
                    let Le = we(Re, me);
                    return (
                      me.type !== PERFORM_ACTION &&
                        shouldFilterActions(L) &&
                        (Le = filterLiftedState(
                          Le,
                          L.predicate,
                          L.actionsSafelist,
                          L.actionsBlocklist
                        )),
                      Y.notify(me, Le),
                      { state: Le, action: me }
                    );
                  },
                  { state: R, action: null }
                )
              ).subscribe(({ state: Re, action: me }) => {
                V.next(Re), me.type === PERFORM_ACTION && Q.next(me.action);
              }),
              De = Y.start$.subscribe(() => {
                this.refresh();
              }),
              ae = V.asObservable(),
              ge = ae.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(unliftState)
              );
            (this.extensionStartSubscription = De),
              (this.stateSubscription = te),
              (this.dispatcher = b),
              (this.liftedState = ae),
              (this.state = ge);
          }
          dispatch(b) {
            this.dispatcher.next(b);
          }
          next(b) {
            this.dispatcher.next(b);
          }
          error(b) {}
          complete() {}
          performAction(b) {
            this.dispatch(new PerformAction(b, +Date.now()));
          }
          refresh() {
            this.dispatch(new Refresh());
          }
          reset() {
            this.dispatch(new Reset(+Date.now()));
          }
          rollback() {
            this.dispatch(new Rollback(+Date.now()));
          }
          commit() {
            this.dispatch(new Commit(+Date.now()));
          }
          sweep() {
            this.dispatch(new Sweep());
          }
          toggleAction(b) {
            this.dispatch(new ToggleAction(b));
          }
          jumpToAction(b) {
            this.dispatch(new JumpToAction(b));
          }
          jumpToState(b) {
            this.dispatch(new JumpToState(b));
          }
          importState(b) {
            this.dispatch(new ImportState(b));
          }
          lockChanges(b) {
            this.dispatch(new LockChanges(b));
          }
          pauseRecording(b) {
            this.dispatch(new PauseRecording(b));
          }
        }
        return (
          (X.??fac = function (b) {
            return new (b || X)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                DevtoolsDispatcher
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsExtension),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                STORE_DEVTOOLS_CONFIG
              )
            );
          }),
          (X.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
            token: X,
            factory: X.??fac,
          })),
          X
        );
      })();
      const IS_EXTENSION_OR_MONITOR_PRESENT =
        new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          "@ngrx/store-devtools Is Devtools Extension or Monitor Present"
        );
      function createIsExtensionOrMonitorPresent(X, U) {
        return Boolean(X) || U.monitor !== noMonitor;
      }
      function createReduxDevtoolsExtension() {
        const X = "__REDUX_DEVTOOLS_EXTENSION__";
        return "object" == typeof window && void 0 !== window[X]
          ? window[X]
          : null;
      }
      function createStateObservable(X) {
        return X.state;
      }
      let StoreDevtoolsModule = (() => {
        class X {
          static instrument(b = {}) {
            return {
              ngModule: X,
              providers: [
                DevtoolsExtension,
                DevtoolsDispatcher,
                StoreDevtools,
                { provide: INITIAL_OPTIONS, useValue: b },
                {
                  provide: IS_EXTENSION_OR_MONITOR_PRESENT,
                  deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
                  useFactory: createIsExtensionOrMonitorPresent,
                },
                {
                  provide: REDUX_DEVTOOLS_EXTENSION,
                  useFactory: createReduxDevtoolsExtension,
                },
                {
                  provide: STORE_DEVTOOLS_CONFIG,
                  deps: [INITIAL_OPTIONS],
                  useFactory: createConfig,
                },
                {
                  provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,
                  deps: [StoreDevtools],
                  useFactory: createStateObservable,
                },
                {
                  provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK,
                  useExisting: DevtoolsDispatcher,
                },
              ],
            };
          }
        }
        return (
          (X.??fac = function (b) {
            return new (b || X)();
          }),
          (X.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({
            type: X,
          })),
          (X.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({})),
          X
        );
      })();
    },
    3065: (X, U, b) => {
      "use strict";
      b.d(U, {
        UO: () => Le,
        qg: () => we,
        Y6: () => Ve,
        mK: () => br,
        n$: () => Pn,
        Y$: () => Vn,
        FR: () => Vt,
        yh: () => Gr,
        CK: () => mr,
        Aw: () => Qn,
        cr: () => Ft,
        wb: () => rr,
        qC: () => mn,
        PH: () => ae,
        ZF: () => fr,
        Lq: () => Ye,
        P1: () => Fn,
        on: () => Pe,
        Ky: () => ge,
        Ys: () => Yt,
      });
      var E = b(7716),
        v = b(6215),
        Y = b(7574),
        Q = b(9765),
        B = b(7771),
        P = b(8002),
        N = b(9746),
        F = b(7057),
        W = b(2145),
        V = b(7519);
      const te = {};
      function ae(k, oe) {
        if (((te[k] = (te[k] || 0) + 1), "function" == typeof oe))
          return me(k, (...le) =>
            Object.assign(Object.assign({}, oe(...le)), { type: k })
          );
        switch (oe ? oe._as : "empty") {
          case "empty":
            return me(k, () => ({ type: k }));
          case "props":
            return me(k, (le) =>
              Object.assign(Object.assign({}, le), { type: k })
            );
          default:
            throw new Error("Unexpected config.");
        }
      }
      function ge() {
        return { _as: "props", _p: void 0 };
      }
      function me(k, oe) {
        return Object.defineProperty(oe, "type", { value: k, writable: !1 });
      }
      const we = "@ngrx/store/init";
      let Le = (() => {
        class k extends v.X {
          constructor() {
            super({ type: we });
          }
          next(re) {
            if ("function" == typeof re)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction()."
              );
            if (void 0 === re) throw new TypeError("Actions must be objects");
            if (void 0 === re.type)
              throw new TypeError("Actions must have a type property");
            super.next(re);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
        }
        return (
          (k.??fac = function (re) {
            return new (re || k)();
          }),
          (k.??prov = E.Yz7({ token: k, factory: k.??fac })),
          k
        );
      })();
      const Ne = [Le],
        Ee = new E.OlP("@ngrx/store Internal Root Guard"),
        et = new E.OlP("@ngrx/store Internal Initial State"),
        Ve = new E.OlP("@ngrx/store Initial State"),
        on = new E.OlP("@ngrx/store Reducer Factory"),
        bn = new E.OlP("@ngrx/store Internal Reducer Factory Provider"),
        Nt = new E.OlP("@ngrx/store Initial Reducers"),
        at = new E.OlP("@ngrx/store Internal Initial Reducers"),
        dt = new E.OlP("@ngrx/store Store Features"),
        Ue = new E.OlP("@ngrx/store Internal Store Reducers"),
        ht = new E.OlP("@ngrx/store Internal Feature Reducers"),
        Me = new E.OlP("@ngrx/store Internal Feature Configs"),
        Gt = new E.OlP("@ngrx/store Internal Store Features"),
        xr = new E.OlP("@ngrx/store Internal Feature Reducers Token"),
        tr = new E.OlP("@ngrx/store Feature Reducers"),
        Nr = new E.OlP("@ngrx/store User Provided Meta Reducers"),
        Mt = new E.OlP("@ngrx/store Meta Reducers"),
        ft = new E.OlP("@ngrx/store Internal Resolved Meta Reducers"),
        nr = new E.OlP("@ngrx/store User Runtime Checks Config"),
        rs = new E.OlP("@ngrx/store Internal User Runtime Checks Config"),
        kn = new E.OlP("@ngrx/store Internal Runtime Checks"),
        Dt = new E.OlP("@ngrx/store Check if Action types are unique");
      function Rn(k, oe = {}) {
        const re = Object.keys(k),
          le = {};
        for (let Ie = 0; Ie < re.length; Ie++) {
          const Ze = re[Ie];
          "function" == typeof k[Ze] && (le[Ze] = k[Ze]);
        }
        const Te = Object.keys(le);
        return function (Ze, Bt) {
          Ze = void 0 === Ze ? oe : Ze;
          let gt = !1;
          const bt = {};
          for (let At = 0; At < Te.length; At++) {
            const Zt = Te[At],
              ar = Ze[Zt],
              En = (0, le[Zt])(ar, Bt);
            (bt[Zt] = En), (gt = gt || En !== ar);
          }
          return gt ? bt : Ze;
        };
      }
      function mn(...k) {
        return function (oe) {
          if (0 === k.length) return oe;
          const re = k[k.length - 1];
          return k.slice(0, -1).reduceRight((Te, Ie) => Ie(Te), re(oe));
        };
      }
      function On(k, oe) {
        return (
          Array.isArray(oe) &&
            oe.length > 0 &&
            (k = mn.apply(null, [...oe, k])),
          (re, le) => {
            const Te = k(re);
            return (Ie, Ze) => Te((Ie = void 0 === Ie ? le : Ie), Ze);
          }
        );
      }
      class Pn extends Y.y {}
      class br extends Le {}
      const rr = "@ngrx/store/update-reducers";
      let tn = (() => {
        class k extends v.X {
          constructor(re, le, Te, Ie) {
            super(Ie(Te, le)),
              (this.dispatcher = re),
              (this.initialState = le),
              (this.reducers = Te),
              (this.reducerFactory = Ie);
          }
          get currentReducers() {
            return this.reducers;
          }
          addFeature(re) {
            this.addFeatures([re]);
          }
          addFeatures(re) {
            const le = re.reduce(
              (
                Te,
                {
                  reducers: Ie,
                  reducerFactory: Ze,
                  metaReducers: Bt,
                  initialState: gt,
                  key: bt,
                }
              ) => {
                const At =
                  "function" == typeof Ie
                    ? (function (k) {
                        const oe =
                          Array.isArray(k) && k.length > 0
                            ? mn(...k)
                            : (re) => re;
                        return (re, le) => (
                          (re = oe(re)),
                          (Te, Ie) => re((Te = void 0 === Te ? le : Te), Ie)
                        );
                      })(Bt)(Ie, gt)
                    : On(Ze, Bt)(Ie, gt);
                return (Te[bt] = At), Te;
              },
              {}
            );
            this.addReducers(le);
          }
          removeFeature(re) {
            this.removeFeatures([re]);
          }
          removeFeatures(re) {
            this.removeReducers(re.map((le) => le.key));
          }
          addReducer(re, le) {
            this.addReducers({ [re]: le });
          }
          addReducers(re) {
            (this.reducers = Object.assign(
              Object.assign({}, this.reducers),
              re
            )),
              this.updateReducers(Object.keys(re));
          }
          removeReducer(re) {
            this.removeReducers([re]);
          }
          removeReducers(re) {
            re.forEach((le) => {
              this.reducers = (function (k, oe) {
                return Object.keys(k)
                  .filter((re) => re !== oe)
                  .reduce((re, le) => Object.assign(re, { [le]: k[le] }), {});
              })(this.reducers, le);
            }),
              this.updateReducers(re);
          }
          updateReducers(re) {
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              this.dispatcher.next({ type: rr, features: re });
          }
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (k.??fac = function (re) {
            return new (re || k)(E.LFG(br), E.LFG(Ve), E.LFG(Nt), E.LFG(on));
          }),
          (k.??prov = E.Yz7({ token: k, factory: k.??fac })),
          k
        );
      })();
      const zn = [
        tn,
        { provide: Pn, useExisting: tn },
        { provide: br, useExisting: Le },
      ];
      let Vn = (() => {
        class k extends Q.xQ {
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (k.??fac = (function () {
            let oe;
            return function (le) {
              return (oe || (oe = E.n5z(k)))(le || k);
            };
          })()),
          (k.??prov = E.Yz7({ token: k, factory: k.??fac })),
          k
        );
      })();
      const Ce = [Vn];
      class Vt extends Y.y {}
      let wn = (() => {
        class k extends v.X {
          constructor(re, le, Te, Ie) {
            super(Ie);
            const bt = re
              .pipe((0, N.QV)(B.N))
              .pipe((0, F.M)(le))
              .pipe((0, W.R)(_n, { state: Ie }));
            this.stateSubscription = bt.subscribe(
              ({ state: At, action: Zt }) => {
                this.next(At), Te.next(Zt);
              }
            );
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
        }
        return (
          (k.??fac = function (re) {
            return new (re || k)(E.LFG(Le), E.LFG(Pn), E.LFG(Vn), E.LFG(Ve));
          }),
          (k.??prov = E.Yz7({ token: k, factory: k.??fac })),
          (k.INIT = we),
          k
        );
      })();
      function _n(k = { state: void 0 }, [oe, re]) {
        const { state: le } = k;
        return { state: re(le, oe), action: oe };
      }
      const sr = [wn, { provide: Vt, useExisting: wn }];
      let Gr = (() => {
        class k extends Y.y {
          constructor(re, le, Te) {
            super(),
              (this.actionsObserver = le),
              (this.reducerManager = Te),
              (this.source = re);
          }
          select(re, ...le) {
            return Yt.call(null, re, ...le)(this);
          }
          lift(re) {
            const le = new k(this, this.actionsObserver, this.reducerManager);
            return (le.operator = re), le;
          }
          dispatch(re) {
            this.actionsObserver.next(re);
          }
          next(re) {
            this.actionsObserver.next(re);
          }
          error(re) {
            this.actionsObserver.error(re);
          }
          complete() {
            this.actionsObserver.complete();
          }
          addReducer(re, le) {
            this.reducerManager.addReducer(re, le);
          }
          removeReducer(re) {
            this.reducerManager.removeReducer(re);
          }
        }
        return (
          (k.??fac = function (re) {
            return new (re || k)(E.LFG(Vt), E.LFG(Le), E.LFG(tn));
          }),
          (k.??prov = E.Yz7({ token: k, factory: k.??fac })),
          k
        );
      })();
      const Bn = [Gr];
      function Yt(k, oe, ...re) {
        return function (Te) {
          let Ie;
          if ("string" == typeof k) {
            const Ze = [oe, ...re].filter(Boolean);
            Ie = Te.pipe(
              (function (...k) {
                const oe = k.length;
                if (0 === oe)
                  throw new Error("list of properties cannot be empty.");
                return (re) =>
                  (0, P.U)(
                    (function (k, oe) {
                      return (le) => {
                        let Te = le;
                        for (let Ie = 0; Ie < oe; Ie++) {
                          const Ze = null != Te ? Te[k[Ie]] : void 0;
                          if (void 0 === Ze) return;
                          Te = Ze;
                        }
                        return Te;
                      };
                    })(k, oe)
                  )(re);
              })(k, ...Ze)
            );
          } else {
            if ("function" != typeof k)
              throw new TypeError(
                `Unexpected type '${typeof k}' in select operator, expected 'string' or 'function'`
              );
            Ie = Te.pipe((0, P.U)((Ze) => k(Ze, oe)));
          }
          return Ie.pipe((0, V.x)());
        };
      }
      const Pt = "https://ngrx.io/guide/store/configuration/runtime-checks";
      function Se(k) {
        return void 0 === k;
      }
      function He(k) {
        return null === k;
      }
      function wr(k) {
        return Array.isArray(k);
      }
      function pn(k) {
        return "object" == typeof k && null !== k;
      }
      function pt(k) {
        return "function" == typeof k;
      }
      function Qt(k, oe) {
        return k === oe;
      }
      function qe(k, oe, re) {
        for (let le = 0; le < k.length; le++) if (!re(k[le], oe[le])) return !0;
        return !1;
      }
      function Nn(k, oe = Qt, re = Qt) {
        let Ie,
          le = null,
          Te = null;
        return {
          memoized: function () {
            if (void 0 !== Ie) return Ie.result;
            if (!le)
              return (Te = k.apply(null, arguments)), (le = arguments), Te;
            if (!qe(arguments, le, oe)) return Te;
            const At = k.apply(null, arguments);
            return (le = arguments), re(Te, At) ? Te : ((Te = At), At);
          },
          reset: function () {
            (le = null), (Te = null);
          },
          setResult: function (At) {
            Ie = { result: At };
          },
          clearResult: function () {
            Ie = void 0;
          },
        };
      }
      function Fn(...k) {
        return (function (k, oe = { stateFn: Gn }) {
          return function (...re) {
            let le = re;
            if (Array.isArray(le[0])) {
              const [At, ...Zt] = le;
              le = [...At, ...Zt];
            }
            const Te = le.slice(0, le.length - 1),
              Ie = le[le.length - 1],
              Ze = Te.filter(
                (At) => At.release && "function" == typeof At.release
              ),
              Bt = k(function (...At) {
                return Ie.apply(null, At);
              }),
              gt = Nn(function (At, Zt) {
                return oe.stateFn.apply(null, [At, Te, Zt, Bt]);
              });
            return Object.assign(gt.memoized, {
              release: function () {
                gt.reset(), Bt.reset(), Ze.forEach((At) => At.release());
              },
              projector: Bt.memoized,
              setResult: gt.setResult,
              clearResult: gt.clearResult,
            });
          };
        })(Nn)(...k);
      }
      function Gn(k, oe, re, le) {
        if (void 0 === re) {
          const Ie = oe.map((Ze) => Ze(k));
          return le.memoized.apply(null, Ie);
        }
        const Te = oe.map((Ie) => Ie(k, re));
        return le.memoized.apply(null, [...Te, re]);
      }
      function fr(k) {
        return Fn(
          (oe) => {
            const re = oe[k];
            return (
              (0, E.X6Q)() &&
                !(k in oe) &&
                console.warn(
                  `@ngrx/store: The feature name "${k}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${k}', ...) or StoreModule.forFeature('${k}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`
                ),
              re
            );
          },
          (oe) => oe
        );
      }
      function pr(k) {
        Object.freeze(k);
        const oe = pt(k);
        return (
          Object.getOwnPropertyNames(k).forEach((re) => {
            if (
              !re.startsWith("\u0275") &&
              (function (k, oe) {
                return Object.prototype.hasOwnProperty.call(k, oe);
              })(k, re) &&
              (!oe ||
                ("caller" !== re && "callee" !== re && "arguments" !== re))
            ) {
              const le = k[re];
              (pn(le) || pt(le)) && !Object.isFrozen(le) && pr(le);
            }
          }),
          k
        );
      }
      function Ot(k, oe = []) {
        return (Se(k) || He(k)) && 0 === oe.length
          ? { path: ["root"], value: k }
          : Object.keys(k).reduce((le, Te) => {
              if (le) return le;
              const Ie = k[Te];
              return (function (k) {
                return pt(k) && k.hasOwnProperty("\u0275cmp");
              })(Ie)
                ? le
                : !(
                    Se(Ie) ||
                    He(Ie) ||
                    (function (k) {
                      return "number" == typeof k;
                    })(Ie) ||
                    (function (k) {
                      return "boolean" == typeof k;
                    })(Ie) ||
                    (function (k) {
                      return "string" == typeof k;
                    })(Ie) ||
                    wr(Ie)
                  ) &&
                    ((function (k) {
                      if (
                        !(function (k) {
                          return pn(k) && !wr(k);
                        })(k)
                      )
                        return !1;
                      const oe = Object.getPrototypeOf(k);
                      return oe === Object.prototype || null === oe;
                    })(Ie)
                      ? Ot(Ie, [...oe, Te])
                      : { path: [...oe, Te], value: Ie });
            }, !1);
      }
      function an(k, oe) {
        if (!1 === k) return;
        const re = k.path.join("."),
          le = new Error(
            `Detected unserializable ${oe} at "${re}". ${Pt}#strict${oe}serializability`
          );
        throw ((le.value = k.value), (le.unserializablePath = re), le);
      }
      function gr(k) {
        return (0, E.X6Q)()
          ? Object.assign(
              {
                strictStateSerializability: !1,
                strictActionSerializability: !1,
                strictStateImmutability: !0,
                strictActionImmutability: !0,
                strictActionWithinNgZone: !1,
                strictActionTypeUniqueness: !1,
              },
              k
            )
          : {
              strictStateSerializability: !1,
              strictActionSerializability: !1,
              strictStateImmutability: !1,
              strictActionImmutability: !1,
              strictActionWithinNgZone: !1,
              strictActionTypeUniqueness: !1,
            };
      }
      function zt({
        strictActionSerializability: k,
        strictStateSerializability: oe,
      }) {
        return (re) =>
          k || oe
            ? (function (k, oe) {
                return function (re, le) {
                  oe.action(le) && an(Ot(le), "action");
                  const Te = k(re, le);
                  return oe.state() && an(Ot(Te), "state"), Te;
                };
              })(re, { action: (le) => k && !Je(le), state: () => oe })
            : re;
      }
      function Ae({
        strictActionImmutability: k,
        strictStateImmutability: oe,
      }) {
        return (re) =>
          k || oe
            ? (function (k, oe) {
                return function (re, le) {
                  const Te = oe.action(le) ? pr(le) : le,
                    Ie = k(re, Te);
                  return oe.state() ? pr(Ie) : Ie;
                };
              })(re, { action: (le) => k && !Je(le), state: () => oe })
            : re;
      }
      function Je(k) {
        return k.type.startsWith("@ngrx");
      }
      function vt({ strictActionWithinNgZone: k }) {
        return (oe) =>
          k
            ? (function (k, oe) {
                return function (re, le) {
                  if (oe.action(le) && !E.R0b.isInAngularZone())
                    throw new Error(
                      `Action '${le.type}' running outside NgZone. ${Pt}#strictactionwithinngzone`
                    );
                  return k(re, le);
                };
              })(oe, { action: (re) => k && !Je(re) })
            : oe;
      }
      function yn(k) {
        return [
          { provide: rs, useValue: k },
          { provide: nr, useFactory: qt, deps: [rs] },
          { provide: kn, deps: [nr], useFactory: gr },
          { provide: Mt, multi: !0, deps: [kn], useFactory: Ae },
          { provide: Mt, multi: !0, deps: [kn], useFactory: zt },
          { provide: Mt, multi: !0, deps: [kn], useFactory: vt },
        ];
      }
      function jn() {
        return [{ provide: Dt, multi: !0, deps: [kn], useFactory: Yn }];
      }
      function qt(k) {
        return k;
      }
      function Yn(k) {
        if (!k.strictActionTypeUniqueness) return;
        const oe = Object.entries(te)
          .filter(([, re]) => re > 1)
          .map(([re]) => re);
        if (oe.length)
          throw new Error(
            `Action types are registered more than once, ${oe
              .map((re) => `"${re}"`)
              .join(", ")}. ${Pt}#strictactiontypeuniqueness`
          );
      }
      let Ft = (() => {
          class k {
            constructor(re, le, Te, Ie, Ze, Bt) {}
          }
          return (
            (k.??fac = function (re) {
              return new (re || k)(
                E.LFG(Le),
                E.LFG(Pn),
                E.LFG(Vn),
                E.LFG(Gr),
                E.LFG(Ee, 8),
                E.LFG(Dt, 8)
              );
            }),
            (k.??mod = E.oAB({ type: k })),
            (k.??inj = E.cJS({})),
            k
          );
        })(),
        mr = (() => {
          class k {
            constructor(re, le, Te, Ie, Ze) {
              (this.features = re),
                (this.featureReducers = le),
                (this.reducerManager = Te);
              const Bt = re.map((gt, bt) => {
                const Zt = le.shift()[bt];
                return Object.assign(Object.assign({}, gt), {
                  reducers: Zt,
                  initialState: j(gt.initialState),
                });
              });
              Te.addFeatures(Bt);
            }
            ngOnDestroy() {
              this.reducerManager.removeFeatures(this.features);
            }
          }
          return (
            (k.??fac = function (re) {
              return new (re || k)(
                E.LFG(Gt),
                E.LFG(tr),
                E.LFG(tn),
                E.LFG(Ft),
                E.LFG(Dt, 8)
              );
            }),
            (k.??mod = E.oAB({ type: k })),
            (k.??inj = E.cJS({})),
            k
          );
        })(),
        Qn = (() => {
          class k {
            static forRoot(re, le = {}) {
              return {
                ngModule: Ft,
                providers: [
                  {
                    provide: Ee,
                    useFactory: he,
                    deps: [[Gr, new E.FiY(), new E.tp0()]],
                  },
                  { provide: et, useValue: le.initialState },
                  { provide: Ve, useFactory: j, deps: [et] },
                  { provide: at, useValue: re },
                  { provide: Ue, useExisting: re instanceof E.OlP ? re : at },
                  {
                    provide: Nt,
                    deps: [E.zs3, at, [new E.tBr(Ue)]],
                    useFactory: We,
                  },
                  {
                    provide: Nr,
                    useValue: le.metaReducers ? le.metaReducers : [],
                  },
                  { provide: ft, deps: [Mt, Nr], useFactory: ne },
                  {
                    provide: bn,
                    useValue: le.reducerFactory ? le.reducerFactory : Rn,
                  },
                  { provide: on, deps: [bn, ft], useFactory: On },
                  Ne,
                  zn,
                  Ce,
                  sr,
                  Bn,
                  yn(le.runtimeChecks),
                  jn(),
                ],
              };
            }
            static forFeature(re, le, Te = {}) {
              return {
                ngModule: mr,
                providers: [
                  {
                    provide: Me,
                    multi: !0,
                    useValue: re instanceof Object ? {} : Te,
                  },
                  {
                    provide: dt,
                    multi: !0,
                    useValue: {
                      key: re instanceof Object ? re.name : re,
                      reducerFactory:
                        Te instanceof E.OlP || !Te.reducerFactory
                          ? Rn
                          : Te.reducerFactory,
                      metaReducers:
                        Te instanceof E.OlP || !Te.metaReducers
                          ? []
                          : Te.metaReducers,
                      initialState:
                        Te instanceof E.OlP || !Te.initialState
                          ? void 0
                          : Te.initialState,
                    },
                  },
                  { provide: Gt, deps: [E.zs3, Me, dt], useFactory: ee },
                  {
                    provide: ht,
                    multi: !0,
                    useValue: re instanceof Object ? re.reducer : le,
                  },
                  {
                    provide: xr,
                    multi: !0,
                    useExisting: le instanceof E.OlP ? le : ht,
                  },
                  {
                    provide: tr,
                    multi: !0,
                    deps: [E.zs3, ht, [new E.tBr(xr)]],
                    useFactory: q,
                  },
                  jn(),
                ],
              };
            }
          }
          return (
            (k.??fac = function (re) {
              return new (re || k)();
            }),
            (k.??mod = E.oAB({ type: k })),
            (k.??inj = E.cJS({})),
            k
          );
        })();
      function We(k, oe) {
        return oe instanceof E.OlP ? k.get(oe) : oe;
      }
      function ee(k, oe, re) {
        return re.map((le, Te) => {
          if (oe[Te] instanceof E.OlP) {
            const Ie = k.get(oe[Te]);
            return {
              key: le.key,
              reducerFactory: Ie.reducerFactory ? Ie.reducerFactory : Rn,
              metaReducers: Ie.metaReducers ? Ie.metaReducers : [],
              initialState: Ie.initialState,
            };
          }
          return le;
        });
      }
      function q(k, oe) {
        return oe.map((le) => (le instanceof E.OlP ? k.get(le) : le));
      }
      function j(k) {
        return "function" == typeof k ? k() : k;
      }
      function ne(k, oe) {
        return k.concat(oe);
      }
      function he(k) {
        if (k)
          throw new TypeError(
            "StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead."
          );
        return "guarded";
      }
      function Pe(...k) {
        return { reducer: k.pop(), types: k.map((le) => le.type) };
      }
      function Ye(k, ...oe) {
        const re = new Map();
        for (const le of oe)
          for (const Te of le.types) {
            const Ie = re.get(Te);
            re.set(
              Te,
              Ie ? (Bt, gt) => le.reducer(Ie(Bt, gt), gt) : le.reducer
            );
          }
        return function (le = k, Te) {
          const Ie = re.get(Te.type);
          return Ie ? Ie(le, Te) : le;
        };
      }
    },
    6215: (X, U, b) => {
      "use strict";
      b.d(U, { X: () => Y });
      var E = b(9765),
        v = b(7971);
      class Y extends E.xQ {
        constructor(B) {
          super(), (this._value = B);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(B) {
          const P = super._subscribe(B);
          return P && !P.closed && B.next(this._value), P;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new v.N();
          return this._value;
        }
        next(B) {
          super.next((this._value = B));
        }
      }
    },
    3098: (X, U, b) => {
      "use strict";
      b.d(U, { P: () => B });
      var E = b(9193),
        v = b(5917),
        Y = b(205);
      class B {
        constructor(L, R, N) {
          (this.kind = L),
            (this.value = R),
            (this.error = N),
            (this.hasValue = "N" === L);
        }
        observe(L) {
          switch (this.kind) {
            case "N":
              return L.next && L.next(this.value);
            case "E":
              return L.error && L.error(this.error);
            case "C":
              return L.complete && L.complete();
          }
        }
        do(L, R, N) {
          switch (this.kind) {
            case "N":
              return L && L(this.value);
            case "E":
              return R && R(this.error);
            case "C":
              return N && N();
          }
        }
        accept(L, R, N) {
          return L && "function" == typeof L.next
            ? this.observe(L)
            : this.do(L, R, N);
        }
        toObservable() {
          switch (this.kind) {
            case "N":
              return (0, v.of)(this.value);
            case "E":
              return (0, Y._)(this.error);
            case "C":
              return (0, E.c)();
          }
          throw new Error("unexpected notification kind value");
        }
        static createNext(L) {
          return void 0 !== L ? new B("N", L) : B.undefinedValueNotification;
        }
        static createError(L) {
          return new B("E", void 0, L);
        }
        static createComplete() {
          return B.completeNotification;
        }
      }
      (B.completeNotification = new B("C")),
        (B.undefinedValueNotification = new B("N", void 0));
    },
    7574: (X, U, b) => {
      "use strict";
      b.d(U, { y: () => W });
      var E = b(7393),
        Y = b(9181),
        Q = b(6490),
        P = b(6554),
        L = b(4487);
      var F = b(2494);
      let W = (() => {
        class te {
          constructor(ae) {
            (this._isScalar = !1), ae && (this._subscribe = ae);
          }
          lift(ae) {
            const ge = new te();
            return (ge.source = this), (ge.operator = ae), ge;
          }
          subscribe(ae, ge, Re) {
            const { operator: me } = this,
              we = (function (te, De, ae) {
                if (te) {
                  if (te instanceof E.L) return te;
                  if (te[Y.b]) return te[Y.b]();
                }
                return te || De || ae ? new E.L(te, De, ae) : new E.L(Q.c);
              })(ae, ge, Re);
            if (
              (we.add(
                me
                  ? me.call(we, this.source)
                  : this.source ||
                    (F.v.useDeprecatedSynchronousErrorHandling &&
                      !we.syncErrorThrowable)
                  ? this._subscribe(we)
                  : this._trySubscribe(we)
              ),
              F.v.useDeprecatedSynchronousErrorHandling &&
                we.syncErrorThrowable &&
                ((we.syncErrorThrowable = !1), we.syncErrorThrown))
            )
              throw we.syncErrorValue;
            return we;
          }
          _trySubscribe(ae) {
            try {
              return this._subscribe(ae);
            } catch (ge) {
              F.v.useDeprecatedSynchronousErrorHandling &&
                ((ae.syncErrorThrown = !0), (ae.syncErrorValue = ge)),
                (function (te) {
                  for (; te; ) {
                    const { closed: De, destination: ae, isStopped: ge } = te;
                    if (De || ge) return !1;
                    te = ae && ae instanceof E.L ? ae : null;
                  }
                  return !0;
                })(ae)
                  ? ae.error(ge)
                  : console.warn(ge);
            }
          }
          forEach(ae, ge) {
            return new (ge = V(ge))((Re, me) => {
              let we;
              we = this.subscribe(
                (Le) => {
                  try {
                    ae(Le);
                  } catch (Ne) {
                    me(Ne), we && we.unsubscribe();
                  }
                },
                me,
                Re
              );
            });
          }
          _subscribe(ae) {
            const { source: ge } = this;
            return ge && ge.subscribe(ae);
          }
          [P.L]() {
            return this;
          }
          pipe(...ae) {
            return 0 === ae.length
              ? this
              : (function (te) {
                  return 0 === te.length
                    ? L.y
                    : 1 === te.length
                    ? te[0]
                    : function (ae) {
                        return te.reduce((ge, Re) => Re(ge), ae);
                      };
                })(ae)(this);
          }
          toPromise(ae) {
            return new (ae = V(ae))((ge, Re) => {
              let me;
              this.subscribe(
                (we) => (me = we),
                (we) => Re(we),
                () => ge(me)
              );
            });
          }
        }
        return (te.create = (De) => new te(De)), te;
      })();
      function V(te) {
        if ((te || (te = F.v.Promise || Promise), !te))
          throw new Error("no Promise impl found");
        return te;
      }
    },
    6490: (X, U, b) => {
      "use strict";
      b.d(U, { c: () => Y });
      var E = b(2494),
        v = b(4449);
      const Y = {
        closed: !0,
        next(Q) {},
        error(Q) {
          if (E.v.useDeprecatedSynchronousErrorHandling) throw Q;
          (0, v.z)(Q);
        },
        complete() {},
      };
    },
    5197: (X, U, b) => {
      "use strict";
      b.d(U, { L: () => v });
      var E = b(7393);
      class v extends E.L {
        notifyNext(Q, B, P, L, R) {
          this.destination.next(B);
        }
        notifyError(Q, B) {
          this.destination.error(Q);
        }
        notifyComplete(Q) {
          this.destination.complete();
        }
      }
    },
    8229: (X, U, b) => {
      "use strict";
      b.d(U, { t: () => L });
      var E = b(9765),
        v = b(7771),
        Y = b(5319),
        Q = b(9746),
        B = b(7971),
        P = b(8858);
      class L extends E.xQ {
        constructor(
          F = Number.POSITIVE_INFINITY,
          W = Number.POSITIVE_INFINITY,
          V
        ) {
          super(),
            (this.scheduler = V),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = F < 1 ? 1 : F),
            (this._windowTime = W < 1 ? 1 : W),
            W === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0),
                (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(F) {
          if (!this.isStopped) {
            const W = this._events;
            W.push(F), W.length > this._bufferSize && W.shift();
          }
          super.next(F);
        }
        nextTimeWindow(F) {
          this.isStopped ||
            (this._events.push(new R(this._getNow(), F)),
            this._trimBufferThenGetEvents()),
            super.next(F);
        }
        _subscribe(F) {
          const W = this._infiniteTimeWindow,
            V = W ? this._events : this._trimBufferThenGetEvents(),
            te = this.scheduler,
            De = V.length;
          let ae;
          if (this.closed) throw new B.N();
          if (
            (this.isStopped || this.hasError
              ? (ae = Y.w.EMPTY)
              : (this.observers.push(F), (ae = new P.W(this, F))),
            te && F.add((F = new Q.ht(F, te))),
            W)
          )
            for (let ge = 0; ge < De && !F.closed; ge++) F.next(V[ge]);
          else for (let ge = 0; ge < De && !F.closed; ge++) F.next(V[ge].value);
          return (
            this.hasError
              ? F.error(this.thrownError)
              : this.isStopped && F.complete(),
            ae
          );
        }
        _getNow() {
          return (this.scheduler || v.c).now();
        }
        _trimBufferThenGetEvents() {
          const F = this._getNow(),
            W = this._bufferSize,
            V = this._windowTime,
            te = this._events,
            De = te.length;
          let ae = 0;
          for (; ae < De && !(F - te[ae].time < V); ) ae++;
          return (
            De > W && (ae = Math.max(ae, De - W)),
            ae > 0 && te.splice(0, ae),
            te
          );
        }
      }
      class R {
        constructor(F, W) {
          (this.time = F), (this.value = W);
        }
      }
    },
    9765: (X, U, b) => {
      "use strict";
      b.d(U, { Yc: () => L, xQ: () => R });
      var E = b(7574),
        v = b(7393),
        Y = b(5319),
        Q = b(7971),
        B = b(8858),
        P = b(9181);
      class L extends v.L {
        constructor(W) {
          super(W), (this.destination = W);
        }
      }
      let R = (() => {
        class F extends E.y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [P.b]() {
            return new L(this);
          }
          lift(V) {
            const te = new N(this, this);
            return (te.operator = V), te;
          }
          next(V) {
            if (this.closed) throw new Q.N();
            if (!this.isStopped) {
              const { observers: te } = this,
                De = te.length,
                ae = te.slice();
              for (let ge = 0; ge < De; ge++) ae[ge].next(V);
            }
          }
          error(V) {
            if (this.closed) throw new Q.N();
            (this.hasError = !0), (this.thrownError = V), (this.isStopped = !0);
            const { observers: te } = this,
              De = te.length,
              ae = te.slice();
            for (let ge = 0; ge < De; ge++) ae[ge].error(V);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new Q.N();
            this.isStopped = !0;
            const { observers: V } = this,
              te = V.length,
              De = V.slice();
            for (let ae = 0; ae < te; ae++) De[ae].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(V) {
            if (this.closed) throw new Q.N();
            return super._trySubscribe(V);
          }
          _subscribe(V) {
            if (this.closed) throw new Q.N();
            return this.hasError
              ? (V.error(this.thrownError), Y.w.EMPTY)
              : this.isStopped
              ? (V.complete(), Y.w.EMPTY)
              : (this.observers.push(V), new B.W(this, V));
          }
          asObservable() {
            const V = new E.y();
            return (V.source = this), V;
          }
        }
        return (F.create = (W, V) => new N(W, V)), F;
      })();
      class N extends R {
        constructor(W, V) {
          super(), (this.destination = W), (this.source = V);
        }
        next(W) {
          const { destination: V } = this;
          V && V.next && V.next(W);
        }
        error(W) {
          const { destination: V } = this;
          V && V.error && this.destination.error(W);
        }
        complete() {
          const { destination: W } = this;
          W && W.complete && this.destination.complete();
        }
        _subscribe(W) {
          const { source: V } = this;
          return V ? this.source.subscribe(W) : Y.w.EMPTY;
        }
      }
    },
    8858: (X, U, b) => {
      "use strict";
      b.d(U, { W: () => v });
      var E = b(5319);
      class v extends E.w {
        constructor(Q, B) {
          super(),
            (this.subject = Q),
            (this.subscriber = B),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const Q = this.subject,
            B = Q.observers;
          if (
            ((this.subject = null),
            !B || 0 === B.length || Q.isStopped || Q.closed)
          )
            return;
          const P = B.indexOf(this.subscriber);
          -1 !== P && B.splice(P, 1);
        }
      }
    },
    7393: (X, U, b) => {
      "use strict";
      b.d(U, { L: () => L });
      var E = b(9105),
        v = b(6490),
        Y = b(5319),
        Q = b(9181),
        B = b(2494),
        P = b(4449);
      class L extends Y.w {
        constructor(F, W, V) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = v.c;
              break;
            case 1:
              if (!F) {
                this.destination = v.c;
                break;
              }
              if ("object" == typeof F) {
                F instanceof L
                  ? ((this.syncErrorThrowable = F.syncErrorThrowable),
                    (this.destination = F),
                    F.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new R(this, F)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new R(this, F, W, V));
          }
        }
        [Q.b]() {
          return this;
        }
        static create(F, W, V) {
          const te = new L(F, W, V);
          return (te.syncErrorThrowable = !1), te;
        }
        next(F) {
          this.isStopped || this._next(F);
        }
        error(F) {
          this.isStopped || ((this.isStopped = !0), this._error(F));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(F) {
          this.destination.next(F);
        }
        _error(F) {
          this.destination.error(F), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: F } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = F),
            this
          );
        }
      }
      class R extends L {
        constructor(F, W, V, te) {
          super(), (this._parentSubscriber = F);
          let De,
            ae = this;
          (0, E.m)(W)
            ? (De = W)
            : W &&
              ((De = W.next),
              (V = W.error),
              (te = W.complete),
              W !== v.c &&
                ((ae = Object.create(W)),
                (0, E.m)(ae.unsubscribe) && this.add(ae.unsubscribe.bind(ae)),
                (ae.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = ae),
            (this._next = De),
            (this._error = V),
            (this._complete = te);
        }
        next(F) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: W } = this;
            B.v.useDeprecatedSynchronousErrorHandling && W.syncErrorThrowable
              ? this.__tryOrSetError(W, this._next, F) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, F);
          }
        }
        error(F) {
          if (!this.isStopped) {
            const { _parentSubscriber: W } = this,
              { useDeprecatedSynchronousErrorHandling: V } = B.v;
            if (this._error)
              V && W.syncErrorThrowable
                ? (this.__tryOrSetError(W, this._error, F), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, F), this.unsubscribe());
            else if (W.syncErrorThrowable)
              V
                ? ((W.syncErrorValue = F), (W.syncErrorThrown = !0))
                : (0, P.z)(F),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), V)) throw F;
              (0, P.z)(F);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: F } = this;
            if (this._complete) {
              const W = () => this._complete.call(this._context);
              B.v.useDeprecatedSynchronousErrorHandling && F.syncErrorThrowable
                ? (this.__tryOrSetError(F, W), this.unsubscribe())
                : (this.__tryOrUnsub(W), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(F, W) {
          try {
            F.call(this._context, W);
          } catch (V) {
            if ((this.unsubscribe(), B.v.useDeprecatedSynchronousErrorHandling))
              throw V;
            (0, P.z)(V);
          }
        }
        __tryOrSetError(F, W, V) {
          if (!B.v.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            W.call(this._context, V);
          } catch (te) {
            return B.v.useDeprecatedSynchronousErrorHandling
              ? ((F.syncErrorValue = te), (F.syncErrorThrown = !0), !0)
              : ((0, P.z)(te), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: F } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            F.unsubscribe();
        }
      }
    },
    5319: (X, U, b) => {
      "use strict";
      b.d(U, { w: () => P });
      var E = b(9796),
        v = b(1555),
        Y = b(9105);
      const B = (() => {
        function R(N) {
          return (
            Error.call(this),
            (this.message = N
              ? `${N.length} errors occurred during unsubscription:\n${N.map(
                  (F, W) => `${W + 1}) ${F.toString()}`
                ).join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = N),
            this
          );
        }
        return (R.prototype = Object.create(Error.prototype)), R;
      })();
      class P {
        constructor(N) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            N && ((this._ctorUnsubscribe = !0), (this._unsubscribe = N));
        }
        unsubscribe() {
          let N;
          if (this.closed) return;
          let {
            _parentOrParents: F,
            _ctorUnsubscribe: W,
            _unsubscribe: V,
            _subscriptions: te,
          } = this;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            F instanceof P)
          )
            F.remove(this);
          else if (null !== F)
            for (let De = 0; De < F.length; ++De) F[De].remove(this);
          if ((0, Y.m)(V)) {
            W && (this._unsubscribe = void 0);
            try {
              V.call(this);
            } catch (De) {
              N = De instanceof B ? L(De.errors) : [De];
            }
          }
          if ((0, E.k)(te)) {
            let De = -1,
              ae = te.length;
            for (; ++De < ae; ) {
              const ge = te[De];
              if ((0, v.K)(ge))
                try {
                  ge.unsubscribe();
                } catch (Re) {
                  (N = N || []),
                    Re instanceof B ? (N = N.concat(L(Re.errors))) : N.push(Re);
                }
            }
          }
          if (N) throw new B(N);
        }
        add(N) {
          let F = N;
          if (!N) return P.EMPTY;
          switch (typeof N) {
            case "function":
              F = new P(N);
            case "object":
              if (F === this || F.closed || "function" != typeof F.unsubscribe)
                return F;
              if (this.closed) return F.unsubscribe(), F;
              if (!(F instanceof P)) {
                const te = F;
                (F = new P()), (F._subscriptions = [te]);
              }
              break;
            default:
              throw new Error(
                "unrecognized teardown " + N + " added to Subscription."
              );
          }
          let { _parentOrParents: W } = F;
          if (null === W) F._parentOrParents = this;
          else if (W instanceof P) {
            if (W === this) return F;
            F._parentOrParents = [W, this];
          } else {
            if (-1 !== W.indexOf(this)) return F;
            W.push(this);
          }
          const V = this._subscriptions;
          return null === V ? (this._subscriptions = [F]) : V.push(F), F;
        }
        remove(N) {
          const F = this._subscriptions;
          if (F) {
            const W = F.indexOf(N);
            -1 !== W && F.splice(W, 1);
          }
        }
      }
      var R;
      function L(R) {
        return R.reduce((N, F) => N.concat(F instanceof B ? F.errors : F), []);
      }
      P.EMPTY = (((R = new P()).closed = !0), R);
    },
    2494: (X, U, b) => {
      "use strict";
      b.d(U, { v: () => v });
      let E = !1;
      const v = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(Y) {
          if (Y) {
            const Q = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                Q.stack
            );
          } else
            E &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          E = Y;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return E;
        },
      };
    },
    5345: (X, U, b) => {
      "use strict";
      b.d(U, { IY: () => Q, Ds: () => P, ft: () => R });
      var E = b(7393),
        v = b(7574),
        Y = b(7444);
      class Q extends E.L {
        constructor(F) {
          super(), (this.parent = F);
        }
        _next(F) {
          this.parent.notifyNext(F);
        }
        _error(F) {
          this.parent.notifyError(F), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class P extends E.L {
        notifyNext(F) {
          this.destination.next(F);
        }
        notifyError(F) {
          this.destination.error(F);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function R(N, F) {
        if (F.closed) return;
        if (N instanceof v.y) return N.subscribe(F);
        let W;
        try {
          W = (0, Y.s)(N)(F);
        } catch (V) {
          F.error(V);
        }
        return W;
      }
    },
    2441: (X, U, b) => {
      "use strict";
      b.d(U, { c: () => B, N: () => P });
      var E = b(9765),
        v = b(7574),
        Y = b(5319),
        Q = b(1307);
      class B extends v.y {
        constructor(W, V) {
          super(),
            (this.source = W),
            (this.subjectFactory = V),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(W) {
          return this.getSubject().subscribe(W);
        }
        getSubject() {
          const W = this._subject;
          return (
            (!W || W.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let W = this._connection;
          return (
            W ||
              ((this._isComplete = !1),
              (W = this._connection = new Y.w()),
              W.add(this.source.subscribe(new L(this.getSubject(), this))),
              W.closed && ((this._connection = null), (W = Y.w.EMPTY))),
            W
          );
        }
        refCount() {
          return (0, Q.x)()(this);
        }
      }
      const P = (() => {
        const F = B.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: F._subscribe },
          _isComplete: { value: F._isComplete, writable: !0 },
          getSubject: { value: F.getSubject },
          connect: { value: F.connect },
          refCount: { value: F.refCount },
        };
      })();
      class L extends E.Yc {
        constructor(W, V) {
          super(W), (this.connectable = V);
        }
        _error(W) {
          this._unsubscribe(), super._error(W);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const W = this.connectable;
          if (W) {
            this.connectable = null;
            const V = W._connection;
            (W._refCount = 0),
              (W._subject = null),
              (W._connection = null),
              V && V.unsubscribe();
          }
        }
      }
    },
    9112: (X, U, b) => {
      "use strict";
      b.d(U, { aj: () => L });
      var E = b(4869),
        v = b(9796),
        Y = b(5197),
        Q = b(509),
        B = b(6693);
      const P = {};
      function L(...F) {
        let W, V;
        return (
          (0, E.K)(F[F.length - 1]) && (V = F.pop()),
          "function" == typeof F[F.length - 1] && (W = F.pop()),
          1 === F.length && (0, v.k)(F[0]) && (F = F[0]),
          (0, B.n)(F, V).lift(new R(W))
        );
      }
      class R {
        constructor(W) {
          this.resultSelector = W;
        }
        call(W, V) {
          return V.subscribe(new N(W, this.resultSelector));
        }
      }
      class N extends Y.L {
        constructor(W, V) {
          super(W),
            (this.resultSelector = V),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(W) {
          this.values.push(P), this.observables.push(W);
        }
        _complete() {
          const W = this.observables,
            V = W.length;
          if (0 === V) this.destination.complete();
          else {
            (this.active = V), (this.toRespond = V);
            for (let te = 0; te < V; te++)
              this.add((0, Q.D)(this, W[te], void 0, te));
          }
        }
        notifyComplete(W) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(W, V, te) {
          const De = this.values,
            ge = this.toRespond
              ? De[te] === P
                ? --this.toRespond
                : this.toRespond
              : 0;
          (De[te] = V),
            0 === ge &&
              (this.resultSelector
                ? this._tryResultSelector(De)
                : this.destination.next(De.slice()));
        }
        _tryResultSelector(W) {
          let V;
          try {
            V = this.resultSelector.apply(this, W);
          } catch (te) {
            return void this.destination.error(te);
          }
          this.destination.next(V);
        }
      }
    },
    8071: (X, U, b) => {
      "use strict";
      b.d(U, { z: () => Q });
      var E = b(5917),
        v = b(3282);
      function Q(...B) {
        return (0, v.J)(1)((0, E.of)(...B));
      }
    },
    1439: (X, U, b) => {
      "use strict";
      b.d(U, { P: () => Q });
      var E = b(7574),
        v = b(4402),
        Y = b(9193);
      function Q(B) {
        return new E.y((P) => {
          let L;
          try {
            L = B();
          } catch (N) {
            return void P.error(N);
          }
          return (L ? (0, v.D)(L) : (0, Y.c)()).subscribe(P);
        });
      }
    },
    9193: (X, U, b) => {
      "use strict";
      b.d(U, { E: () => v, c: () => Y });
      var E = b(7574);
      const v = new E.y((B) => B.complete());
      function Y(B) {
        return B
          ? (function (B) {
              return new E.y((P) => B.schedule(() => P.complete()));
            })(B)
          : v;
      }
    },
    4402: (X, U, b) => {
      "use strict";
      b.d(U, { D: () => ae });
      var E = b(7574),
        v = b(7444),
        Y = b(5319),
        Q = b(6554),
        L = b(4087),
        R = b(377),
        W = b(4072),
        V = b(9489);
      function ae(ge, Re) {
        return Re
          ? (function (ge, Re) {
              if (null != ge) {
                if (
                  (function (ge) {
                    return ge && "function" == typeof ge[Q.L];
                  })(ge)
                )
                  return (function (ge, Re) {
                    return new E.y((me) => {
                      const we = new Y.w();
                      return (
                        we.add(
                          Re.schedule(() => {
                            const Le = ge[Q.L]();
                            we.add(
                              Le.subscribe({
                                next(Ne) {
                                  we.add(Re.schedule(() => me.next(Ne)));
                                },
                                error(Ne) {
                                  we.add(Re.schedule(() => me.error(Ne)));
                                },
                                complete() {
                                  we.add(Re.schedule(() => me.complete()));
                                },
                              })
                            );
                          })
                        ),
                        we
                      );
                    });
                  })(ge, Re);
                if ((0, W.t)(ge))
                  return (function (ge, Re) {
                    return new E.y((me) => {
                      const we = new Y.w();
                      return (
                        we.add(
                          Re.schedule(() =>
                            ge.then(
                              (Le) => {
                                we.add(
                                  Re.schedule(() => {
                                    me.next(Le),
                                      we.add(Re.schedule(() => me.complete()));
                                  })
                                );
                              },
                              (Le) => {
                                we.add(Re.schedule(() => me.error(Le)));
                              }
                            )
                          )
                        ),
                        we
                      );
                    });
                  })(ge, Re);
                if ((0, V.z)(ge)) return (0, L.r)(ge, Re);
                if (
                  (function (ge) {
                    return ge && "function" == typeof ge[R.hZ];
                  })(ge) ||
                  "string" == typeof ge
                )
                  return (function (ge, Re) {
                    if (!ge) throw new Error("Iterable cannot be null");
                    return new E.y((me) => {
                      const we = new Y.w();
                      let Le;
                      return (
                        we.add(() => {
                          Le && "function" == typeof Le.return && Le.return();
                        }),
                        we.add(
                          Re.schedule(() => {
                            (Le = ge[R.hZ]()),
                              we.add(
                                Re.schedule(function () {
                                  if (me.closed) return;
                                  let Ne, Ee;
                                  try {
                                    const et = Le.next();
                                    (Ne = et.value), (Ee = et.done);
                                  } catch (et) {
                                    return void me.error(et);
                                  }
                                  Ee
                                    ? me.complete()
                                    : (me.next(Ne), this.schedule());
                                })
                              );
                          })
                        ),
                        we
                      );
                    });
                  })(ge, Re);
              }
              throw new TypeError(
                ((null !== ge && typeof ge) || ge) + " is not observable"
              );
            })(ge, Re)
          : ge instanceof E.y
          ? ge
          : new E.y((0, v.s)(ge));
      }
    },
    6693: (X, U, b) => {
      "use strict";
      b.d(U, { n: () => Q });
      var E = b(7574),
        v = b(5015),
        Y = b(4087);
      function Q(B, P) {
        return P ? (0, Y.r)(B, P) : new E.y((0, v.V)(B));
      }
    },
    6682: (X, U, b) => {
      "use strict";
      b.d(U, { T: () => B });
      var E = b(7574),
        v = b(4869),
        Y = b(3282),
        Q = b(6693);
      function B(...P) {
        let L = Number.POSITIVE_INFINITY,
          R = null,
          N = P[P.length - 1];
        return (
          (0, v.K)(N)
            ? ((R = P.pop()),
              P.length > 1 &&
                "number" == typeof P[P.length - 1] &&
                (L = P.pop()))
            : "number" == typeof N && (L = P.pop()),
          null === R && 1 === P.length && P[0] instanceof E.y
            ? P[0]
            : (0, Y.J)(L)((0, Q.n)(P, R))
        );
      }
    },
    5917: (X, U, b) => {
      "use strict";
      b.d(U, { of: () => Q });
      var E = b(4869),
        v = b(6693),
        Y = b(4087);
      function Q(...B) {
        let P = B[B.length - 1];
        return (0, E.K)(P) ? (B.pop(), (0, Y.r)(B, P)) : (0, v.n)(B);
      }
    },
    205: (X, U, b) => {
      "use strict";
      b.d(U, { _: () => v });
      var E = b(7574);
      function v(Q, B) {
        return new E.y(
          B
            ? (P) => B.schedule(Y, 0, { error: Q, subscriber: P })
            : (P) => P.error(Q)
        );
      }
      function Y({ error: Q, subscriber: B }) {
        B.error(Q);
      }
    },
    5304: (X, U, b) => {
      "use strict";
      b.d(U, { K: () => v });
      var E = b(5345);
      function v(B) {
        return function (L) {
          const R = new Y(B),
            N = L.lift(R);
          return (R.caught = N);
        };
      }
      class Y {
        constructor(P) {
          this.selector = P;
        }
        call(P, L) {
          return L.subscribe(new Q(P, this.selector, this.caught));
        }
      }
      class Q extends E.Ds {
        constructor(P, L, R) {
          super(P), (this.selector = L), (this.caught = R);
        }
        error(P) {
          if (!this.isStopped) {
            let L;
            try {
              L = this.selector(P, this.caught);
            } catch (F) {
              return void super.error(F);
            }
            this._unsubscribeAndRecycle();
            const R = new E.IY(this);
            this.add(R);
            const N = (0, E.ft)(L, R);
            N !== R && this.add(N);
          }
        }
      }
    },
    4612: (X, U, b) => {
      "use strict";
      b.d(U, { b: () => v });
      var E = b(9773);
      function v(Y, Q) {
        return (0, E.zg)(Y, Q, 1);
      }
    },
    4395: (X, U, b) => {
      "use strict";
      b.d(U, { b: () => Y });
      var E = b(7393),
        v = b(3637);
      function Y(L, R = v.P) {
        return (N) => N.lift(new Q(L, R));
      }
      class Q {
        constructor(R, N) {
          (this.dueTime = R), (this.scheduler = N);
        }
        call(R, N) {
          return N.subscribe(new B(R, this.dueTime, this.scheduler));
        }
      }
      class B extends E.L {
        constructor(R, N, F) {
          super(R),
            (this.dueTime = N),
            (this.scheduler = F),
            (this.debouncedSubscription = null),
            (this.lastValue = null),
            (this.hasValue = !1);
        }
        _next(R) {
          this.clearDebounce(),
            (this.lastValue = R),
            (this.hasValue = !0),
            this.add(
              (this.debouncedSubscription = this.scheduler.schedule(
                P,
                this.dueTime,
                this
              ))
            );
        }
        _complete() {
          this.debouncedNext(), this.destination.complete();
        }
        debouncedNext() {
          if ((this.clearDebounce(), this.hasValue)) {
            const { lastValue: R } = this;
            (this.lastValue = null),
              (this.hasValue = !1),
              this.destination.next(R);
          }
        }
        clearDebounce() {
          const R = this.debouncedSubscription;
          null !== R &&
            (this.remove(R),
            R.unsubscribe(),
            (this.debouncedSubscription = null));
        }
      }
      function P(L) {
        L.debouncedNext();
      }
    },
    5242: (X, U, b) => {
      "use strict";
      b.d(U, { d: () => v });
      var E = b(7393);
      function v(B = null) {
        return (P) => P.lift(new Y(B));
      }
      class Y {
        constructor(P) {
          this.defaultValue = P;
        }
        call(P, L) {
          return L.subscribe(new Q(P, this.defaultValue));
        }
      }
      class Q extends E.L {
        constructor(P, L) {
          super(P), (this.defaultValue = L), (this.isEmpty = !0);
        }
        _next(P) {
          (this.isEmpty = !1), this.destination.next(P);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
    },
    7519: (X, U, b) => {
      "use strict";
      b.d(U, { x: () => v });
      var E = b(7393);
      function v(B, P) {
        return (L) => L.lift(new Y(B, P));
      }
      class Y {
        constructor(P, L) {
          (this.compare = P), (this.keySelector = L);
        }
        call(P, L) {
          return L.subscribe(new Q(P, this.compare, this.keySelector));
        }
      }
      class Q extends E.L {
        constructor(P, L, R) {
          super(P),
            (this.keySelector = R),
            (this.hasKey = !1),
            "function" == typeof L && (this.compare = L);
        }
        compare(P, L) {
          return P === L;
        }
        _next(P) {
          let L;
          try {
            const { keySelector: N } = this;
            L = N ? N(P) : P;
          } catch (N) {
            return this.destination.error(N);
          }
          let R = !1;
          if (this.hasKey)
            try {
              const { compare: N } = this;
              R = N(this.key, L);
            } catch (N) {
              return this.destination.error(N);
            }
          else this.hasKey = !0;
          R || ((this.key = L), this.destination.next(P));
        }
      }
    },
    5435: (X, U, b) => {
      "use strict";
      b.d(U, { h: () => v });
      var E = b(7393);
      function v(B, P) {
        return function (R) {
          return R.lift(new Y(B, P));
        };
      }
      class Y {
        constructor(P, L) {
          (this.predicate = P), (this.thisArg = L);
        }
        call(P, L) {
          return L.subscribe(new Q(P, this.predicate, this.thisArg));
        }
      }
      class Q extends E.L {
        constructor(P, L, R) {
          super(P), (this.predicate = L), (this.thisArg = R), (this.count = 0);
        }
        _next(P) {
          let L;
          try {
            L = this.predicate.call(this.thisArg, P, this.count++);
          } catch (R) {
            return void this.destination.error(R);
          }
          L && this.destination.next(P);
        }
      }
    },
    8939: (X, U, b) => {
      "use strict";
      b.d(U, { x: () => Y });
      var E = b(7393),
        v = b(5319);
      function Y(P) {
        return (L) => L.lift(new Q(P));
      }
      class Q {
        constructor(L) {
          this.callback = L;
        }
        call(L, R) {
          return R.subscribe(new B(L, this.callback));
        }
      }
      class B extends E.L {
        constructor(L, R) {
          super(L), this.add(new v.w(R));
        }
      }
    },
    8049: (X, U, b) => {
      "use strict";
      b.d(U, { P: () => L });
      var E = b(3410),
        v = b(5435),
        Y = b(5257),
        Q = b(5242),
        B = b(4635),
        P = b(4487);
      function L(R, N) {
        const F = arguments.length >= 2;
        return (W) =>
          W.pipe(
            R ? (0, v.h)((V, te) => R(V, te, W)) : P.y,
            (0, Y.q)(1),
            F ? (0, Q.d)(N) : (0, B.T)(() => new E.K())
          );
      }
    },
    8002: (X, U, b) => {
      "use strict";
      b.d(U, { U: () => v });
      var E = b(7393);
      function v(B, P) {
        return function (R) {
          if ("function" != typeof B)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return R.lift(new Y(B, P));
        };
      }
      class Y {
        constructor(P, L) {
          (this.project = P), (this.thisArg = L);
        }
        call(P, L) {
          return L.subscribe(new Q(P, this.project, this.thisArg));
        }
      }
      class Q extends E.L {
        constructor(P, L, R) {
          super(P),
            (this.project = L),
            (this.count = 0),
            (this.thisArg = R || this);
        }
        _next(P) {
          let L;
          try {
            L = this.project.call(this.thisArg, P, this.count++);
          } catch (R) {
            return void this.destination.error(R);
          }
          this.destination.next(L);
        }
      }
    },
    3282: (X, U, b) => {
      "use strict";
      b.d(U, { J: () => Y });
      var E = b(9773),
        v = b(4487);
      function Y(Q = Number.POSITIVE_INFINITY) {
        return (0, E.zg)(v.y, Q);
      }
    },
    9773: (X, U, b) => {
      "use strict";
      b.d(U, { zg: () => Q });
      var E = b(8002),
        v = b(4402),
        Y = b(5345);
      function Q(R, N, F = Number.POSITIVE_INFINITY) {
        return "function" == typeof N
          ? (W) =>
              W.pipe(
                Q(
                  (V, te) =>
                    (0, v.D)(R(V, te)).pipe(
                      (0, E.U)((De, ae) => N(V, De, te, ae))
                    ),
                  F
                )
              )
          : ("number" == typeof N && (F = N), (W) => W.lift(new B(R, F)));
      }
      class B {
        constructor(N, F = Number.POSITIVE_INFINITY) {
          (this.project = N), (this.concurrent = F);
        }
        call(N, F) {
          return F.subscribe(new P(N, this.project, this.concurrent));
        }
      }
      class P extends Y.Ds {
        constructor(N, F, W = Number.POSITIVE_INFINITY) {
          super(N),
            (this.project = F),
            (this.concurrent = W),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(N) {
          this.active < this.concurrent
            ? this._tryNext(N)
            : this.buffer.push(N);
        }
        _tryNext(N) {
          let F;
          const W = this.index++;
          try {
            F = this.project(N, W);
          } catch (V) {
            return void this.destination.error(V);
          }
          this.active++, this._innerSub(F);
        }
        _innerSub(N) {
          const F = new Y.IY(this),
            W = this.destination;
          W.add(F);
          const V = (0, Y.ft)(N, F);
          V !== F && W.add(V);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(N) {
          this.destination.next(N);
        }
        notifyComplete() {
          const N = this.buffer;
          this.active--,
            N.length > 0
              ? this._next(N.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
    },
    9746: (X, U, b) => {
      "use strict";
      b.d(U, { QV: () => Y, ht: () => B });
      var E = b(7393),
        v = b(3098);
      function Y(L, R = 0) {
        return function (F) {
          return F.lift(new Q(L, R));
        };
      }
      class Q {
        constructor(R, N = 0) {
          (this.scheduler = R), (this.delay = N);
        }
        call(R, N) {
          return N.subscribe(new B(R, this.scheduler, this.delay));
        }
      }
      class B extends E.L {
        constructor(R, N, F = 0) {
          super(R), (this.scheduler = N), (this.delay = F);
        }
        static dispatch(R) {
          const { notification: N, destination: F } = R;
          N.observe(F), this.unsubscribe();
        }
        scheduleMessage(R) {
          this.destination.add(
            this.scheduler.schedule(
              B.dispatch,
              this.delay,
              new P(R, this.destination)
            )
          );
        }
        _next(R) {
          this.scheduleMessage(v.P.createNext(R));
        }
        _error(R) {
          this.scheduleMessage(v.P.createError(R)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(v.P.createComplete()), this.unsubscribe();
        }
      }
      class P {
        constructor(R, N) {
          (this.notification = R), (this.destination = N);
        }
      }
    },
    1307: (X, U, b) => {
      "use strict";
      b.d(U, { x: () => v });
      var E = b(7393);
      function v() {
        return function (P) {
          return P.lift(new Y(P));
        };
      }
      class Y {
        constructor(P) {
          this.connectable = P;
        }
        call(P, L) {
          const { connectable: R } = this;
          R._refCount++;
          const N = new Q(P, R),
            F = L.subscribe(N);
          return N.closed || (N.connection = R.connect()), F;
        }
      }
      class Q extends E.L {
        constructor(P, L) {
          super(P), (this.connectable = L);
        }
        _unsubscribe() {
          const { connectable: P } = this;
          if (!P) return void (this.connection = null);
          this.connectable = null;
          const L = P._refCount;
          if (L <= 0) return void (this.connection = null);
          if (((P._refCount = L - 1), L > 1))
            return void (this.connection = null);
          const { connection: R } = this,
            N = P._connection;
          (this.connection = null), N && (!R || N === R) && N.unsubscribe();
        }
      }
    },
    2145: (X, U, b) => {
      "use strict";
      b.d(U, { R: () => v });
      var E = b(7393);
      function v(B, P) {
        let L = !1;
        return (
          arguments.length >= 2 && (L = !0),
          function (N) {
            return N.lift(new Y(B, P, L));
          }
        );
      }
      class Y {
        constructor(P, L, R = !1) {
          (this.accumulator = P), (this.seed = L), (this.hasSeed = R);
        }
        call(P, L) {
          return L.subscribe(
            new Q(P, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Q extends E.L {
        constructor(P, L, R, N) {
          super(P),
            (this.accumulator = L),
            (this._seed = R),
            (this.hasSeed = N),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(P) {
          (this.hasSeed = !0), (this._seed = P);
        }
        _next(P) {
          if (this.hasSeed) return this._tryNext(P);
          (this.seed = P), this.destination.next(P);
        }
        _tryNext(P) {
          const L = this.index++;
          let R;
          try {
            R = this.accumulator(this.seed, P, L);
          } catch (N) {
            this.destination.error(N);
          }
          (this.seed = R), this.destination.next(R);
        }
      }
    },
    8819: (X, U, b) => {
      "use strict";
      b.d(U, { B: () => L });
      var E = b(2441);
      var Q = b(1307),
        B = b(9765);
      function P() {
        return new B.xQ();
      }
      function L() {
        return (R) =>
          (0, Q.x)()(
            (function (R, N) {
              return function (W) {
                let V;
                V =
                  "function" == typeof R
                    ? R
                    : function () {
                        return R;
                      };
                const te = Object.create(W, E.N);
                return (te.source = W), (te.subjectFactory = V), te;
              };
            })(P)(R)
          );
      }
    },
    3653: (X, U, b) => {
      "use strict";
      b.d(U, { T: () => v });
      var E = b(7393);
      function v(B) {
        return (P) => P.lift(new Y(B));
      }
      class Y {
        constructor(P) {
          this.total = P;
        }
        call(P, L) {
          return L.subscribe(new Q(P, this.total));
        }
      }
      class Q extends E.L {
        constructor(P, L) {
          super(P), (this.total = L), (this.count = 0);
        }
        _next(P) {
          ++this.count > this.total && this.destination.next(P);
        }
      }
    },
    9761: (X, U, b) => {
      "use strict";
      b.d(U, { O: () => Y });
      var E = b(8071),
        v = b(4869);
      function Y(...Q) {
        const B = Q[Q.length - 1];
        return (0, v.K)(B)
          ? (Q.pop(), (P) => (0, E.z)(Q, P, B))
          : (P) => (0, E.z)(Q, P);
      }
    },
    3190: (X, U, b) => {
      "use strict";
      b.d(U, { w: () => Q });
      var E = b(8002),
        v = b(4402),
        Y = b(5345);
      function Q(L, R) {
        return "function" == typeof R
          ? (N) =>
              N.pipe(
                Q((F, W) =>
                  (0, v.D)(L(F, W)).pipe((0, E.U)((V, te) => R(F, V, W, te)))
                )
              )
          : (N) => N.lift(new B(L));
      }
      class B {
        constructor(R) {
          this.project = R;
        }
        call(R, N) {
          return N.subscribe(new P(R, this.project));
        }
      }
      class P extends Y.Ds {
        constructor(R, N) {
          super(R), (this.project = N), (this.index = 0);
        }
        _next(R) {
          let N;
          const F = this.index++;
          try {
            N = this.project(R, F);
          } catch (W) {
            return void this.destination.error(W);
          }
          this._innerSub(N);
        }
        _innerSub(R) {
          const N = this.innerSubscription;
          N && N.unsubscribe();
          const F = new Y.IY(this),
            W = this.destination;
          W.add(F),
            (this.innerSubscription = (0, Y.ft)(R, F)),
            this.innerSubscription !== F && W.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: R } = this;
          (!R || R.closed) && super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(R) {
          this.destination.next(R);
        }
      }
    },
    5257: (X, U, b) => {
      "use strict";
      b.d(U, { q: () => Q });
      var E = b(7393),
        v = b(7108),
        Y = b(9193);
      function Q(L) {
        return (R) => (0 === L ? (0, Y.c)() : R.lift(new B(L)));
      }
      class B {
        constructor(R) {
          if (((this.total = R), this.total < 0)) throw new v.W();
        }
        call(R, N) {
          return N.subscribe(new P(R, this.total));
        }
      }
      class P extends E.L {
        constructor(R, N) {
          super(R), (this.total = N), (this.count = 0);
        }
        _next(R) {
          const N = this.total,
            F = ++this.count;
          F <= N &&
            (this.destination.next(R),
            F === N && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    6782: (X, U, b) => {
      "use strict";
      b.d(U, { R: () => v });
      var E = b(5345);
      function v(B) {
        return (P) => P.lift(new Y(B));
      }
      class Y {
        constructor(P) {
          this.notifier = P;
        }
        call(P, L) {
          const R = new Q(P),
            N = (0, E.ft)(this.notifier, new E.IY(R));
          return N && !R.seenValue ? (R.add(N), L.subscribe(R)) : R;
        }
      }
      class Q extends E.Ds {
        constructor(P) {
          super(P), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
    },
    3342: (X, U, b) => {
      "use strict";
      b.d(U, { b: () => Q });
      var E = b(7393);
      function v() {}
      var Y = b(9105);
      function Q(L, R, N) {
        return function (W) {
          return W.lift(new B(L, R, N));
        };
      }
      class B {
        constructor(R, N, F) {
          (this.nextOrObserver = R), (this.error = N), (this.complete = F);
        }
        call(R, N) {
          return N.subscribe(
            new P(R, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class P extends E.L {
        constructor(R, N, F, W) {
          super(R),
            (this._tapNext = v),
            (this._tapError = v),
            (this._tapComplete = v),
            (this._tapError = F || v),
            (this._tapComplete = W || v),
            (0, Y.m)(N)
              ? ((this._context = this), (this._tapNext = N))
              : N &&
                ((this._context = N),
                (this._tapNext = N.next || v),
                (this._tapError = N.error || v),
                (this._tapComplete = N.complete || v));
        }
        _next(R) {
          try {
            this._tapNext.call(this._context, R);
          } catch (N) {
            return void this.destination.error(N);
          }
          this.destination.next(R);
        }
        _error(R) {
          try {
            this._tapError.call(this._context, R);
          } catch (N) {
            return void this.destination.error(N);
          }
          this.destination.error(R);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (R) {
            return void this.destination.error(R);
          }
          return this.destination.complete();
        }
      }
    },
    4635: (X, U, b) => {
      "use strict";
      b.d(U, { T: () => Y });
      var E = b(3410),
        v = b(7393);
      function Y(L = P) {
        return (R) => R.lift(new Q(L));
      }
      class Q {
        constructor(R) {
          this.errorFactory = R;
        }
        call(R, N) {
          return N.subscribe(new B(R, this.errorFactory));
        }
      }
      class B extends v.L {
        constructor(R, N) {
          super(R), (this.errorFactory = N), (this.hasValue = !1);
        }
        _next(R) {
          (this.hasValue = !0), this.destination.next(R);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let R;
            try {
              R = this.errorFactory();
            } catch (N) {
              R = N;
            }
            this.destination.error(R);
          }
        }
      }
      function P() {
        return new E.K();
      }
    },
    4010: (X, U, b) => {
      "use strict";
      b.d(U, { V: () => F });
      var E = b(3637);
      const Y = (() => {
        function W() {
          return (
            Error.call(this),
            (this.message = "Timeout has occurred"),
            (this.name = "TimeoutError"),
            this
          );
        }
        return (W.prototype = Object.create(Error.prototype)), W;
      })();
      var Q = b(9989),
        B = b(5345);
      class L {
        constructor(V, te, De, ae) {
          (this.waitFor = V),
            (this.absoluteTimeout = te),
            (this.withObservable = De),
            (this.scheduler = ae);
        }
        call(V, te) {
          return te.subscribe(
            new R(
              V,
              this.absoluteTimeout,
              this.waitFor,
              this.withObservable,
              this.scheduler
            )
          );
        }
      }
      class R extends B.Ds {
        constructor(V, te, De, ae, ge) {
          super(V),
            (this.absoluteTimeout = te),
            (this.waitFor = De),
            (this.withObservable = ae),
            (this.scheduler = ge),
            this.scheduleTimeout();
        }
        static dispatchTimeout(V) {
          const { withObservable: te } = V;
          V._unsubscribeAndRecycle(), V.add((0, B.ft)(te, new B.IY(V)));
        }
        scheduleTimeout() {
          const { action: V } = this;
          V
            ? (this.action = V.schedule(this, this.waitFor))
            : this.add(
                (this.action = this.scheduler.schedule(
                  R.dispatchTimeout,
                  this.waitFor,
                  this
                ))
              );
        }
        _next(V) {
          this.absoluteTimeout || this.scheduleTimeout(), super._next(V);
        }
        _unsubscribe() {
          (this.action = void 0),
            (this.scheduler = null),
            (this.withObservable = null);
        }
      }
      var N = b(205);
      function F(W, V = E.P) {
        return (function (W, V, te = E.P) {
          return (De) => {
            let ae = (0, Q.J)(W),
              ge = ae ? +W - te.now() : Math.abs(W);
            return De.lift(new L(ge, ae, V, te));
          };
        })(W, (0, N._)(new Y()), V);
      }
    },
    7057: (X, U, b) => {
      "use strict";
      b.d(U, { M: () => Y });
      var E = b(5197),
        v = b(509);
      function Y(...P) {
        return (L) => {
          let R;
          return (
            "function" == typeof P[P.length - 1] && (R = P.pop()),
            L.lift(new Q(P, R))
          );
        };
      }
      class Q {
        constructor(L, R) {
          (this.observables = L), (this.project = R);
        }
        call(L, R) {
          return R.subscribe(new B(L, this.observables, this.project));
        }
      }
      class B extends E.L {
        constructor(L, R, N) {
          super(L),
            (this.observables = R),
            (this.project = N),
            (this.toRespond = []);
          const F = R.length;
          this.values = new Array(F);
          for (let W = 0; W < F; W++) this.toRespond.push(W);
          for (let W = 0; W < F; W++) this.add((0, v.D)(this, R[W], void 0, W));
        }
        notifyNext(L, R, N) {
          this.values[N] = R;
          const F = this.toRespond;
          if (F.length > 0) {
            const W = F.indexOf(N);
            -1 !== W && F.splice(W, 1);
          }
        }
        notifyComplete() {}
        _next(L) {
          if (0 === this.toRespond.length) {
            const R = [L, ...this.values];
            this.project ? this._tryProject(R) : this.destination.next(R);
          }
        }
        _tryProject(L) {
          let R;
          try {
            R = this.project.apply(this, L);
          } catch (N) {
            return void this.destination.error(N);
          }
          this.destination.next(R);
        }
      }
    },
    4087: (X, U, b) => {
      "use strict";
      b.d(U, { r: () => Y });
      var E = b(7574),
        v = b(5319);
      function Y(Q, B) {
        return new E.y((P) => {
          const L = new v.w();
          let R = 0;
          return (
            L.add(
              B.schedule(function () {
                R !== Q.length
                  ? (P.next(Q[R++]), P.closed || L.add(this.schedule()))
                  : P.complete();
              })
            ),
            L
          );
        });
      }
    },
    6465: (X, U, b) => {
      "use strict";
      b.d(U, { o: () => Y });
      var E = b(5319);
      class v extends E.w {
        constructor(B, P) {
          super();
        }
        schedule(B, P = 0) {
          return this;
        }
      }
      class Y extends v {
        constructor(B, P) {
          super(B, P),
            (this.scheduler = B),
            (this.work = P),
            (this.pending = !1);
        }
        schedule(B, P = 0) {
          if (this.closed) return this;
          this.state = B;
          const L = this.id,
            R = this.scheduler;
          return (
            null != L && (this.id = this.recycleAsyncId(R, L, P)),
            (this.pending = !0),
            (this.delay = P),
            (this.id = this.id || this.requestAsyncId(R, this.id, P)),
            this
          );
        }
        requestAsyncId(B, P, L = 0) {
          return setInterval(B.flush.bind(B, this), L);
        }
        recycleAsyncId(B, P, L = 0) {
          if (null !== L && this.delay === L && !1 === this.pending) return P;
          clearInterval(P);
        }
        execute(B, P) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const L = this._execute(B, P);
          if (L) return L;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(B, P) {
          let R,
            L = !1;
          try {
            this.work(B);
          } catch (N) {
            (L = !0), (R = (!!N && N) || new Error(N));
          }
          if (L) return this.unsubscribe(), R;
        }
        _unsubscribe() {
          const B = this.id,
            P = this.scheduler,
            L = P.actions,
            R = L.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== R && L.splice(R, 1),
            null != B && (this.id = this.recycleAsyncId(P, B, null)),
            (this.delay = null);
        }
      }
    },
    6102: (X, U, b) => {
      "use strict";
      b.d(U, { v: () => v });
      let E = (() => {
        class Y {
          constructor(B, P = Y.now) {
            (this.SchedulerAction = B), (this.now = P);
          }
          schedule(B, P = 0, L) {
            return new this.SchedulerAction(this, B).schedule(L, P);
          }
        }
        return (Y.now = () => Date.now()), Y;
      })();
      class v extends E {
        constructor(Q, B = E.now) {
          super(Q, () =>
            v.delegate && v.delegate !== this ? v.delegate.now() : B()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(Q, B = 0, P) {
          return v.delegate && v.delegate !== this
            ? v.delegate.schedule(Q, B, P)
            : super.schedule(Q, B, P);
        }
        flush(Q) {
          const { actions: B } = this;
          if (this.active) return void B.push(Q);
          let P;
          this.active = !0;
          do {
            if ((P = Q.execute(Q.state, Q.delay))) break;
          } while ((Q = B.shift()));
          if (((this.active = !1), P)) {
            for (; (Q = B.shift()); ) Q.unsubscribe();
            throw P;
          }
        }
      }
    },
    3637: (X, U, b) => {
      "use strict";
      b.d(U, { P: () => Q });
      var E = b(6465);
      const Q = new (b(6102).v)(E.o);
    },
    7771: (X, U, b) => {
      "use strict";
      b.d(U, { c: () => P, N: () => B });
      var E = b(6465),
        Y = b(6102);
      const B = new (class extends Y.v {})(
          class extends E.o {
            constructor(R, N) {
              super(R, N), (this.scheduler = R), (this.work = N);
            }
            schedule(R, N = 0) {
              return N > 0
                ? super.schedule(R, N)
                : ((this.delay = N),
                  (this.state = R),
                  this.scheduler.flush(this),
                  this);
            }
            execute(R, N) {
              return N > 0 || this.closed
                ? super.execute(R, N)
                : this._execute(R, N);
            }
            requestAsyncId(R, N, F = 0) {
              return (null !== F && F > 0) || (null === F && this.delay > 0)
                ? super.requestAsyncId(R, N, F)
                : R.flush(this);
            }
          }
        ),
        P = B;
    },
    377: (X, U, b) => {
      "use strict";
      b.d(U, { hZ: () => v });
      const v =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
    },
    6554: (X, U, b) => {
      "use strict";
      b.d(U, { L: () => E });
      const E =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    9181: (X, U, b) => {
      "use strict";
      b.d(U, { b: () => E });
      const E =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
    },
    7108: (X, U, b) => {
      "use strict";
      b.d(U, { W: () => v });
      const v = (() => {
        function Y() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (Y.prototype = Object.create(Error.prototype)), Y;
      })();
    },
    3410: (X, U, b) => {
      "use strict";
      b.d(U, { K: () => v });
      const v = (() => {
        function Y() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (Y.prototype = Object.create(Error.prototype)), Y;
      })();
    },
    7971: (X, U, b) => {
      "use strict";
      b.d(U, { N: () => v });
      const v = (() => {
        function Y() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (Y.prototype = Object.create(Error.prototype)), Y;
      })();
    },
    4449: (X, U, b) => {
      "use strict";
      function E(v) {
        setTimeout(() => {
          throw v;
        }, 0);
      }
      b.d(U, { z: () => E });
    },
    4487: (X, U, b) => {
      "use strict";
      function E(v) {
        return v;
      }
      b.d(U, { y: () => E });
    },
    9796: (X, U, b) => {
      "use strict";
      b.d(U, { k: () => E });
      const E = Array.isArray || ((v) => v && "number" == typeof v.length);
    },
    9489: (X, U, b) => {
      "use strict";
      b.d(U, { z: () => E });
      const E = (v) =>
        v && "number" == typeof v.length && "function" != typeof v;
    },
    9989: (X, U, b) => {
      "use strict";
      function E(v) {
        return v instanceof Date && !isNaN(+v);
      }
      b.d(U, { J: () => E });
    },
    9105: (X, U, b) => {
      "use strict";
      function E(v) {
        return "function" == typeof v;
      }
      b.d(U, { m: () => E });
    },
    1555: (X, U, b) => {
      "use strict";
      function E(v) {
        return null !== v && "object" == typeof v;
      }
      b.d(U, { K: () => E });
    },
    4072: (X, U, b) => {
      "use strict";
      function E(v) {
        return (
          !!v && "function" != typeof v.subscribe && "function" == typeof v.then
        );
      }
      b.d(U, { t: () => E });
    },
    4869: (X, U, b) => {
      "use strict";
      function E(v) {
        return v && "function" == typeof v.schedule;
      }
      b.d(U, { K: () => E });
    },
    7444: (X, U, b) => {
      "use strict";
      b.d(U, { s: () => W });
      var E = b(5015),
        v = b(4449),
        Q = b(377),
        P = b(6554),
        R = b(9489),
        N = b(4072),
        F = b(1555);
      const W = (V) => {
        if (V && "function" == typeof V[P.L])
          return ((V) => (te) => {
            const De = V[P.L]();
            if ("function" != typeof De.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return De.subscribe(te);
          })(V);
        if ((0, R.z)(V)) return (0, E.V)(V);
        if ((0, N.t)(V))
          return ((V) => (te) => (
            V.then(
              (De) => {
                te.closed || (te.next(De), te.complete());
              },
              (De) => te.error(De)
            ).then(null, v.z),
            te
          ))(V);
        if (V && "function" == typeof V[Q.hZ])
          return ((V) => (te) => {
            const De = V[Q.hZ]();
            for (;;) {
              let ae;
              try {
                ae = De.next();
              } catch (ge) {
                return te.error(ge), te;
              }
              if (ae.done) {
                te.complete();
                break;
              }
              if ((te.next(ae.value), te.closed)) break;
            }
            return (
              "function" == typeof De.return &&
                te.add(() => {
                  De.return && De.return();
                }),
              te
            );
          })(V);
        {
          const De = `You provided ${
            (0, F.K)(V) ? "an invalid object" : `'${V}'`
          } where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
          throw new TypeError(De);
        }
      };
    },
    5015: (X, U, b) => {
      "use strict";
      b.d(U, { V: () => E });
      const E = (v) => (Y) => {
        for (let Q = 0, B = v.length; Q < B && !Y.closed; Q++) Y.next(v[Q]);
        Y.complete();
      };
    },
    509: (X, U, b) => {
      "use strict";
      b.d(U, { D: () => B });
      var E = b(7393);
      class v extends E.L {
        constructor(L, R, N) {
          super(),
            (this.parent = L),
            (this.outerValue = R),
            (this.outerIndex = N),
            (this.index = 0);
        }
        _next(L) {
          this.parent.notifyNext(
            this.outerValue,
            L,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(L) {
          this.parent.notifyError(L, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var Y = b(7444),
        Q = b(7574);
      function B(P, L, R, N, F = new v(P, R, N)) {
        if (!F.closed)
          return L instanceof Q.y ? L.subscribe(F) : (0, Y.s)(L)(F);
      }
    },
    9371: (X, U, b) => {
      "use strict";
      var E = b(9075),
        v = b(7716),
        Y = b(5987);
      let Q = (() => {
        class ae {
          constructor() {
            this.title = "week9";
          }
        }
        return (
          (ae.??fac = function (Re) {
            return new (Re || ae)();
          }),
          (ae.??cmp = v.Xpm({
            type: ae,
            selectors: [["app-root"]],
            decls: 1,
            vars: 0,
            template: function (Re, me) {
              1 & Re && v._UZ(0, "router-outlet");
            },
            directives: [Y.lC],
            styles: [""],
          })),
          ae
        );
      })();
      const B = [
        {
          path: "",
          component: Q,
          children: [
            {
              path: "login",
              loadChildren: () =>
                Promise.all([b.e(778), b.e(367)])
                  .then(b.bind(b, 9367))
                  .then((ae) => ae.LoginModule),
            },
            {
              path: "home",
              loadChildren: () =>
                Promise.all([b.e(778), b.e(210)])
                  .then(b.bind(b, 8210))
                  .then((ae) => ae.HomeModule),
            },
            { path: "", redirectTo: "login", pathMatch: "full" },
          ],
        },
      ];
      let P = (() => {
        class ae {}
        return (
          (ae.??fac = function (Re) {
            return new (Re || ae)();
          }),
          (ae.??mod = v.oAB({ type: ae })),
          (ae.??inj = v.cJS({ imports: [[Y.Bz.forRoot(B)], Y.Bz] })),
          ae
        );
      })();
      var L = b(6237),
        R = b(3065),
        N = b(3572);
      const W = {},
        te = [];
      let De = (() => {
        class ae {}
        return (
          (ae.??fac = function (Re) {
            return new (Re || ae)();
          }),
          (ae.??mod = v.oAB({ type: ae, bootstrap: [Q] })),
          (ae.??inj = v.cJS({
            providers: [],
            imports: [
              [
                E.b2,
                P,
                L.PW,
                R.Aw.forRoot(W, {
                  metaReducers: te,
                  runtimeChecks: {
                    strictActionImmutability: !0,
                    strictStateImmutability: !0,
                    strictActionSerializability: !0,
                    strictStateSerializability: !0,
                  },
                }),
                N.FT.instrument({ maxAge: 25, logOnly: true }),
              ],
            ],
          })),
          ae
        );
      })();
      (0, v.G48)(),
        E.q6()
          .bootstrapModule(De)
          .catch((ae) => console.error(ae));
    },
  },
  (X) => {
    X((X.s = 9371));
  },
]);
