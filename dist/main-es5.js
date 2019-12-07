(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"demoForm\"\n  ngNativeValidate\n  (keydown.enter)=\"$event.preventDefault()\"\n>\n  <mat-card\n    style=\"    width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  /* background-color: #6600cc; */\n  color: grey;\n  font-size:16px;\n  /* box-shadow: 6px 6px 12px 0px rgb(219, 175, 219); */\n  border-radius: 10px 10px 10px 10px;\"\n  class=\"shadow-lg\"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-1 text-center\">BP</div>\n      <div class=\"col-md-1  text-center\">SG</div>\n      <div class=\"col-md-1  text-center\">SU</div>\n      <div class=\"col-md-1  text-center\">RBC</div>\n      <div class=\"col-md-1  text-center\">PC</div>\n      <div class=\"col-md-1  text-center\">PCC</div>\n      <div class=\"col-md-1  text-center\">BA</div>\n      <div class=\"col-md-1  text-center\">BGR</div>\n      <div class=\"col-md-1  text-center\">BU</div>\n      <div class=\"col-md-1  text-center\">SC</div>\n      <div class=\"col-md-1  text-center\">SOD</div>\n      <div class=\"col-md-1  text-center\">WC</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input1\"\n          input1\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input2\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input3\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input4\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input5\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input6\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input7\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input8\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input9\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input10\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input11\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n      <div class=\"col-md-1  text-center\">\n        <input\n          type=\"text\"\n          formControlName=\"input12\"\n          style=\"color: black;\"\n          required\n        />\n      </div>\n    </div>\n  </mat-card>\n  <div class=\"col-md-12 text-center\" style=\"margin-top: 30px;;\">\n    <mat-card-actions class=\"login-button-style\">\n      <button\n        style=\"background-color:#6600cc;color: white\"\n        mat-raised-button\n        (click)=\"SubmitForm(demoForm.value)\"\n      >\n        Submit\n      </button>\n    </mat-card-actions>\n  </div>\n</form>\n\n<mat-card\n  id=\"showBlock\"\n  style=\"    width: 25%;\nmargin-left: auto;\nmargin-right: auto;\nmargin-top: 100px;\nborder-radius: 10px 10px 10px 10px;\n\n/* background-color: #6600cc; */\ncolor: black;\nheight: 100px; \nfont-size: 20px;display: none;\"\n  class=\"text-center col-md-12 row shadow-lg\"\n  >\n<div class=\"col-md-12 row\" style=\"margin-top: 20px;\">  <div class=\"col-md-4\"> <img src=\"../../../assets/images/ckd.png\" style=\"width: 66px;\n  margin-top: -19px;\"></div>\n  <div class=\"col-md-4\"> CKD</div>\n  <div class=\"col-md-4\" style=\"font-weight: 600;font-size: 23px;\">96 %</div>\n</div>\n\n  </mat-card\n>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-state.ts": 
        /*!******************************!*\
          !*** ./src/app/app-state.ts ***!
          \******************************/
        /*! exports provided: AppState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function () { return AppState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AppState = /** @class */ (function () {
                function AppState() {
                    var _this = this;
                    this.isSpinnerVisible = false;
                    this.spinnerVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        var currentVisibility = _this.isSpinnerVisible;
                        setInterval(function () {
                            if (currentVisibility !== _this.isSpinnerVisible) {
                                observer.next(_this.isSpinnerVisible);
                                currentVisibility = _this.isSpinnerVisible;
                            }
                        }, 500);
                    });
                }
                return AppState;
            }());
            AppState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AppState);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.title = "PITCHPACER";
                    this.app_env = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].app_env;
                    this.environmentUrl = "Debug api";
                    this.environmentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].environmentUrl;
                    //const storedState = localStorage.getItem("state");
                    // if (storedState) {
                    //   const sessionState: AppState = JSON.parse(storedState);
                    //   this.state.isLoggedIn = sessionState.isLoggedIn;
                    //   this.state.user = sessionState.user;
                    //   this.state.title = sessionState.title;
                    // }
                }
                AppComponent.prototype.ngOnInit = function () {
                    // this.loaderService.status.subscribe((val: boolean) => {
                    //   this.showLoader = val;
                    // });
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
                        console.log("dev Development!");
                    }
                    else {
                        console.log("qa Production!");
                    }
                    console.log("Current environment ****************", this.app_env);
                    this.router.onSameUrlNavigation = "reload";
                    this.router.events.subscribe(function (evt) {
                        if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                            return;
                        }
                        window.scrollTo(0, 0);
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _core_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/app-routing.module */ "./src/app/core/app-routing.module.ts");
            /* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-state */ "./src/app/app-state.ts");
            /* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/demo/demo.component */ "./src/app/components/demo/demo.component.ts");
            // import { RegisterComponent } from "./components/register/register.component";
            // import { LoginPageComponent } from "./components/login-page/login-page.component";
            // import { HomePageComponent } from "./components/home-page/home-page.component";
            // import { ForgotDialogComponent } from "./components/forgot-dialog/forgot-dialog.component";
            // import { EditContactDialogComponent } from "./components/edit-contact-dialog/edit-contact-dialog.component";
            // import { EditPhaseDialogComponent } from "./components/edit-phase-dialog/edit-phase-dialog.component";
            // import { EditProjectDialogComponent } from "./components/edit-project-dialog/edit-project-dialog.component";
            // import { IntroPageComponent } from "./components/intro-page/intro-page.component";
            // import { PreferencesDialogComponent } from "./components/preferences-dialog/preferences-dialog.component";
            // import { DemoComponent } from './components/demo/demo.component';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        // LoginPageComponent,
                        // RegisterComponent,
                        // ForgotDialogComponent,
                        // HomePageComponent,
                        // LogoHeaderComponent,
                        // AddProjectDialogComponent,
                        // AddContactDialogComponent,
                        // AddPhaseDialogComponent,
                        // EditContactDialogComponent,
                        // EditPhaseDialogComponent,
                        // EditProjectDialogComponent,
                        // IntroPageComponent,
                        // PreferencesDialogComponent,
                        _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["DemoComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _core_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                        _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
                        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"].forRoot(),
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]
                    ],
                    entryComponents: [
                    // ForgotDialogComponent,
                    // AddProjectDialogComponent,
                    // AddContactDialogComponent,
                    // AddPhaseDialogComponent,
                    // EditContactDialogComponent,
                    // EditPhaseDialogComponent,
                    // EditProjectDialogComponent,
                    // PreferencesDialogComponent
                    ],
                    providers: [_app_state__WEBPACK_IMPORTED_MODULE_15__["AppState"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/demo/demo.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/components/demo/demo.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVtby9kZW1vLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/demo/demo.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/demo/demo.component.ts ***!
          \***************************************************/
        /*! exports provided: DemoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function () { return DemoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DemoComponent = /** @class */ (function () {
                function DemoComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                }
                DemoComponent.prototype.ngOnInit = function () {
                    this.demoForm = this.formBuilder.group({
                        input1: [],
                        input2: [],
                        input3: [],
                        input4: [],
                        input5: [],
                        input6: [],
                        input7: [],
                        input8: [],
                        input9: [],
                        input10: [],
                        input11: [],
                        input12: []
                    });
                };
                DemoComponent.prototype.SubmitForm = function (formValues) {
                    console.log(formValues);
                    if (formValues.input1 == null) {
                    }
                    else if (formValues.input2 == null) {
                    }
                    else if (formValues.input3 == null) {
                    }
                    else if (formValues.input4 == null) {
                    }
                    else if (formValues.input5 == null) {
                    }
                    else if (formValues.input6 == null) {
                    }
                    else if (formValues.input7 == null) {
                    }
                    else if (formValues.input8 == null) {
                    }
                    else if (formValues.input9 == null) {
                    }
                    else if (formValues.input10 == null) {
                    }
                    else if (formValues.input11 == null) {
                    }
                    else if (formValues.input12 == null) {
                    }
                    else {
                        document.getElementById("showBlock").style.display = "block";
                    }
                };
                return DemoComponent;
            }());
            DemoComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-demo",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo.component.scss */ "./src/app/components/demo/demo.component.scss")).default]
                })
            ], DemoComponent);
            /***/ 
        }),
        /***/ "./src/app/core/app-routing.module.ts": 
        /*!********************************************!*\
          !*** ./src/app/core/app-routing.module.ts ***!
          \********************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/demo/demo.component */ "./src/app/components/demo/demo.component.ts");
            var routes = [
                // { path: "", component: IntroPageComponent },
                // { path: "login", component: LoginPageComponent },
                // { path: "register", component: RegisterComponent },
                // { path: "home", component: HomePageComponent }
                { path: "demo", component: _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"] },
                { path: "", component: _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    declarations: []
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/core/material.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/core/material.module.ts ***!
          \*****************************************/
        /*! exports provided: CustomMaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function () { return CustomMaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            var CustomMaterialModule = /** @class */ (function () {
                function CustomMaterialModule() {
                }
                return CustomMaterialModule;
            }());
            CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]
                    ],
                    exports: [
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]
                    ],
                })
            ], CustomMaterialModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                app_env: "dev",
                environmentUrl: "http://18.189.170.84/",
                stripePublicKey: "pk_test_tQlHC8LOUlXdT1ZQDIaQJfJp00HViFTxbE"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/deepak/test/cure.github.io/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map