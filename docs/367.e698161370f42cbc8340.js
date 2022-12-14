"use strict";
(self.webpackChunkweek9 = self.webpackChunkweek9 || []).push([
  [367],
  {
    9367: (U, m, o) => {
      o.r(m), o.d(m, { LoginModule: () => F });
      var d = o(8583),
        l = o(5987),
        n = o(7716),
        u = o(6860);
      let p = (() => {
        class t {
          constructor(r, e) {
            (this.credentialStorageService = r), (this.router = e);
          }
          canActivate(r, e) {
            return (
              this.credentialStorageService.isLoggedIn() &&
                this.router.navigate(["/home"]),
              !this.credentialStorageService.isLoggedIn()
            );
          }
        }
        return (
          (t.ɵfac = function (r) {
            return new (r || t)(n.LFG(u.q), n.LFG(l.F0));
          }),
          (t.ɵprov = n.Yz7({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var a = o(3679),
        f = o(205),
        C = o(8002),
        v = o(5304),
        M = o(1841);
      let h = (() => {
        class t {
          constructor(r, e) {
            (this.http = r),
              (this.storageService = e),
              (this.url =
                "https://trainee-program-api-staging.applaudostudios.com/api/v1");
          }
          login(r) {
            return this.http.post(`${this.url}/users/login`, { data: r }).pipe(
              (0, C.U)((e) => (this.storageService.saveCredentials(e), !0)),
              (0, v.K)((e) => {
                if ((console.log("hola", e), 401 === e.status)) {
                  const s = new Error("Invalid email or password");
                  return (0, f._)(s);
                }
                return (0, f._)("Unknown Error");
              })
            );
          }
        }
        return (
          (t.ɵfac = function (r) {
            return new (r || t)(n.LFG(M.eN), n.LFG(u.q));
          }),
          (t.ɵprov = n.Yz7({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var c = o(3738),
        g = o(8295),
        P = o(9983),
        O = o(1095);
      function Z(t, i) {
        1 & t &&
          (n.TgZ(0, "mat-error"),
          n._uU(1, " Email address is required. "),
          n.qZA());
      }
      function L(t, i) {
        1 & t &&
          (n.TgZ(0, "mat-error"),
          n._uU(1, " That is an invalid email address. "),
          n.qZA());
      }
      function w(t, i) {
        1 & t &&
          (n.TgZ(0, "mat-error"), n._uU(1, " Password is required. "), n.qZA());
      }
      function A(t, i) {
        1 & t &&
          (n.TgZ(0, "div", 11),
          n._uU(1, " Invalid email and/or password. "),
          n.qZA());
      }
      const T = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(r, e, s) {
                (this.fb = r),
                  (this.authService = e),
                  (this.router = s),
                  (this.loginError = !1),
                  (this.loading = !1),
                  (this.form = this.fb.group({
                    email: ["", [a.kI.required, a.kI.email]],
                    password: ["", a.kI.required],
                  }));
              }
              get email() {
                return this.form.get("email");
              }
              get password() {
                return this.form.get("password");
              }
              onSubmit() {
                this.form.valid && this.login();
              }
              login() {
                (this.loginError = !1),
                  (this.loading = !0),
                  this.authService.login(this.form.value).subscribe(
                    (r) => {
                      r && this.router.navigate(["/home"]);
                    },
                    (r) => {
                      (this.loginError = !0), (this.loading = !1);
                    }
                  );
              }
            }
            return (
              (t.ɵfac = function (r) {
                return new (r || t)(n.Y36(a.qu), n.Y36(h), n.Y36(l.F0));
              }),
              (t.ɵcmp = n.Xpm({
                type: t,
                selectors: [["app-login"]],
                decls: 27,
                vars: 7,
                consts: [
                  [1, "container"],
                  [1, "wrapper"],
                  ["src", "assets/images/applaudo_logo.png"],
                  [1, "form", 3, "formGroup", "ngSubmit"],
                  ["appearance", "fill"],
                  [
                    "matInput",
                    "",
                    "formControlName",
                    "email",
                    "placeholder",
                    "example@email.com",
                    "type",
                    "email",
                    "required",
                    "",
                  ],
                  [4, "ngIf"],
                  [
                    "matInput",
                    "",
                    "formControlName",
                    "password",
                    "type",
                    "password",
                  ],
                  ["class", "login-error", 4, "ngIf"],
                  [
                    "mat-raised-button",
                    "",
                    "type",
                    "submit",
                    "color",
                    "accent",
                    3,
                    "title",
                    "disabled",
                  ],
                  ["routerLink", "/home"],
                  [1, "login-error"],
                ],
                template: function (r, e) {
                  1 & r &&
                    (n.TgZ(0, "div", 0),
                    n.TgZ(1, "div", 1),
                    n._UZ(2, "img", 2),
                    n.TgZ(3, "mat-card"),
                    n.TgZ(4, "mat-card-header"),
                    n.TgZ(5, "mat-card-title"),
                    n.TgZ(6, "h1"),
                    n._uU(7, "Login"),
                    n.qZA(),
                    n.qZA(),
                    n.qZA(),
                    n.TgZ(8, "mat-card-content"),
                    n.TgZ(9, "form", 3),
                    n.NdJ("ngSubmit", function () {
                      return e.onSubmit();
                    }),
                    n.TgZ(10, "mat-form-field", 4),
                    n.TgZ(11, "mat-label"),
                    n._uU(12, "Email:"),
                    n.qZA(),
                    n._UZ(13, "input", 5),
                    n.YNc(14, Z, 2, 0, "mat-error", 6),
                    n.YNc(15, L, 2, 0, "mat-error", 6),
                    n.qZA(),
                    n.TgZ(16, "mat-form-field", 4),
                    n.TgZ(17, "mat-label"),
                    n._uU(18, "Password:"),
                    n.qZA(),
                    n._UZ(19, "input", 7),
                    n.YNc(20, w, 2, 0, "mat-error", 6),
                    n.qZA(),
                    n.YNc(21, A, 2, 0, "div", 8),
                    n.TgZ(22, "button", 9),
                    n._uU(23, " Login "),
                    n.qZA(),
                    n.qZA(),
                    n.qZA(),
                    n.TgZ(24, "mat-card-actions"),
                    n.TgZ(25, "a", 10),
                    n._uU(26, "Continue without loggin in \u2192"),
                    n.qZA(),
                    n.qZA(),
                    n.qZA(),
                    n.qZA(),
                    n.qZA()),
                    2 & r &&
                      (n.xp6(9),
                      n.Q6J("formGroup", e.form),
                      n.xp6(5),
                      n.Q6J(
                        "ngIf",
                        null == e.email || null == e.email.errors
                          ? null
                          : e.email.errors.required
                      ),
                      n.xp6(1),
                      n.Q6J(
                        "ngIf",
                        null == e.email || null == e.email.errors
                          ? null
                          : e.email.errors.email
                      ),
                      n.xp6(5),
                      n.Q6J(
                        "ngIf",
                        null == e.password || null == e.password.errors
                          ? null
                          : e.password.errors.required
                      ),
                      n.xp6(1),
                      n.Q6J("ngIf", e.loginError),
                      n.xp6(1),
                      n.Q6J(
                        "title",
                        e.form.invalid
                          ? "Please fill all the required fields as indicated."
                          : "Login"
                      )("disabled", e.form.invalid || e.loading));
                },
                directives: [
                  c.a8,
                  c.dk,
                  c.n5,
                  c.dn,
                  a._Y,
                  a.JL,
                  a.sg,
                  g.KE,
                  g.hX,
                  P.Nt,
                  a.Fj,
                  a.JJ,
                  a.u,
                  a.Q7,
                  d.O5,
                  O.lW,
                  c.hq,
                  l.yS,
                  g.TO,
                ],
                styles: [
                  ".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100vw;height:100vh;align-items:center;justify-content:center;background-image:url(/assets/images/background-login.png);background-attachment:fixed;background-size:cover}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:600px;width:90%}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;align-self:center;margin-bottom:5px}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{align-self:center}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:10px}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{background-color:#f9e5e0;color:#881c24;line-height:40px;margin-bottom:5px;text-align:center;vertical-align:middle}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;margin:4px}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{align-self:center}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{width:100%;justify-content:right;display:flex}",
                ],
              })),
              t
            );
          })(),
          canActivate: [p],
        },
      ];
      let y = (() => {
        class t {}
        return (
          (t.ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵmod = n.oAB({ type: t })),
          (t.ɵinj = n.cJS({ imports: [[l.Bz.forChild(T)], l.Bz] })),
          t
        );
      })();
      var S = o(778),
        x = o(3065);
      const I = {};
      let F = (() => {
        class t {}
        return (
          (t.ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵmod = n.oAB({ type: t })),
          (t.ɵinj = n.cJS({
            providers: [p, h],
            imports: [[d.ez, y, S.m, x.Aw.forFeature("login", I)]],
          })),
          t
        );
      })();
    },
  },
]);
