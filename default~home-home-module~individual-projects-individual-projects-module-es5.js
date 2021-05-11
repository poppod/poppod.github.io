(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~individual-projects-individual-projects-module"], {
    /***/
    "+rOU":
    /*!*******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
      \*******************************************************************/

    /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

    /***/
    function rOU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
        return BasePortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
        return BasePortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
        return CdkPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
        return CdkPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
        return ComponentPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
        return DomPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
        return DomPortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
        return DomPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Portal", function () {
        return Portal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
        return PortalHostDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
        return PortalInjector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
        return PortalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
        return TemplatePortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
        return TemplatePortalDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception when attempting to attach a null portal to a host.
       * @docs-private
       */


      function throwNullPortalError() {
        throw Error('Must provide a portal to attach');
      }
      /**
       * Throws an exception when attempting to attach a portal to a host that is already attached.
       * @docs-private
       */


      function throwPortalAlreadyAttachedError() {
        throw Error('Host already has a portal attached');
      }
      /**
       * Throws an exception when attempting to attach a portal to an already-disposed host.
       * @docs-private
       */


      function throwPortalOutletAlreadyDisposedError() {
        throw Error('This PortalOutlet has already been disposed');
      }
      /**
       * Throws an exception when attempting to attach an unknown portal type.
       * @docs-private
       */


      function throwUnknownPortalTypeError() {
        throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
      }
      /**
       * Throws an exception when attempting to attach a portal to a null host.
       * @docs-private
       */


      function throwNullPortalOutletError() {
        throw Error('Attempting to attach a portal to a null PortalOutlet');
      }
      /**
       * Throws an exception when attempting to detach a portal that is not attached.
       * @docs-private
       */


      function throwNoPortalAttachedError() {
        throw Error('Attempting to detach a portal that is not attached to a host');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A `Portal` is something that you want to render somewhere else.
       * It can be attach to / detached from a `PortalOutlet`.
       */


      var Portal = /*#__PURE__*/function () {
        function Portal() {
          _classCallCheck(this, Portal);
        }

        _createClass(Portal, [{
          key: "attach",
          value:
          /** Attach this portal to a host. */
          function attach(host) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (host == null) {
                throwNullPortalOutletError();
              }

              if (host.hasAttached()) {
                throwPortalAlreadyAttachedError();
              }
            }

            this._attachedHost = host;
            return host.attach(this);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host != null) {
              this._attachedHost = null;
              host.detach();
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throwNoPortalAttachedError();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
          /**
           * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
           * the PortalOutlet when it is performing an `attach()` or `detach()`.
           */

        }, {
          key: "setAttachedHost",
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }]);

        return Portal;
      }();
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */


      var ComponentPortal = /*#__PURE__*/function (_Portal) {
        _inherits(ComponentPortal, _Portal);

        var _super = _createSuper(ComponentPortal);

        function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
          var _this;

          _classCallCheck(this, ComponentPortal);

          _this = _super.call(this);
          _this.component = component;
          _this.viewContainerRef = viewContainerRef;
          _this.injector = injector;
          _this.componentFactoryResolver = componentFactoryResolver;
          return _this;
        }

        return ComponentPortal;
      }(Portal);
      /**
       * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
       */


      var TemplatePortal = /*#__PURE__*/function (_Portal2) {
        _inherits(TemplatePortal, _Portal2);

        var _super2 = _createSuper(TemplatePortal);

        function TemplatePortal(template, viewContainerRef, context) {
          var _this2;

          _classCallCheck(this, TemplatePortal);

          _this2 = _super2.call(this);
          _this2.templateRef = template;
          _this2.viewContainerRef = viewContainerRef;
          _this2.context = context;
          return _this2;
        }

        _createClass(TemplatePortal, [{
          key: "origin",
          get: function get() {
            return this.templateRef.elementRef;
          }
          /**
           * Attach the portal to the provided `PortalOutlet`.
           * When a context is provided it will override the `context` property of the `TemplatePortal`
           * instance.
           */

        }, {
          key: "attach",
          value: function attach(host) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
            this.context = context;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
          }
        }, {
          key: "detach",
          value: function detach() {
            this.context = undefined;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
          }
        }]);

        return TemplatePortal;
      }(Portal);
      /**
       * A `DomPortal` is a portal whose DOM element will be taken from its current position
       * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
       * will be restored to its original position.
       */


      var DomPortal = /*#__PURE__*/function (_Portal3) {
        _inherits(DomPortal, _Portal3);

        var _super3 = _createSuper(DomPortal);

        function DomPortal(element) {
          var _this3;

          _classCallCheck(this, DomPortal);

          _this3 = _super3.call(this);
          _this3.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
          return _this3;
        }

        return DomPortal;
      }(Portal);
      /**
       * Partial implementation of PortalOutlet that handles attaching
       * ComponentPortal and TemplatePortal.
       */


      var BasePortalOutlet = /*#__PURE__*/function () {
        function BasePortalOutlet() {
          _classCallCheck(this, BasePortalOutlet);

          /** Whether this host has already been permanently disposed. */
          this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

          this.attachDomPortal = null;
        }
        /** Whether this host has an attached portal. */


        _createClass(BasePortalOutlet, [{
          key: "hasAttached",
          value: function hasAttached() {
            return !!this._attachedPortal;
          }
          /** Attaches a portal. */

        }, {
          key: "attach",
          value: function attach(portal) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!portal) {
                throwNullPortalError();
              }

              if (this.hasAttached()) {
                throwPortalAlreadyAttachedError();
              }

              if (this._isDisposed) {
                throwPortalOutletAlreadyDisposedError();
              }
            }

            if (portal instanceof ComponentPortal) {
              this._attachedPortal = portal;
              return this.attachComponentPortal(portal);
            } else if (portal instanceof TemplatePortal) {
              this._attachedPortal = portal;
              return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
            } else if (this.attachDomPortal && portal instanceof DomPortal) {
              this._attachedPortal = portal;
              return this.attachDomPortal(portal);
            }

            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throwUnknownPortalTypeError();
            }
          }
          /** Detaches a previously attached portal. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost(null);

              this._attachedPortal = null;
            }

            this._invokeDisposeFn();
          }
          /** Permanently dispose of this portal host. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.hasAttached()) {
              this.detach();
            }

            this._invokeDisposeFn();

            this._isDisposed = true;
          }
          /** @docs-private */

        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }, {
          key: "_invokeDisposeFn",
          value: function _invokeDisposeFn() {
            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = null;
            }
          }
        }]);

        return BasePortalOutlet;
      }();
      /**
       * @deprecated Use `BasePortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
        _inherits(BasePortalHost, _BasePortalOutlet);

        var _super4 = _createSuper(BasePortalHost);

        function BasePortalHost() {
          _classCallCheck(this, BasePortalHost);

          return _super4.apply(this, arguments);
        }

        return BasePortalHost;
      }(BasePortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       */


      var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
        _inherits(DomPortalOutlet, _BasePortalOutlet2);

        var _super5 = _createSuper(DomPortalOutlet);

        function DomPortalOutlet(
        /** Element into which the content is projected. */
        outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
        /**
         * @deprecated `_document` Parameter to be made required.
         * @breaking-change 10.0.0
         */
        _document) {
          var _thisSuper, _this4;

          _classCallCheck(this, DomPortalOutlet);

          _this4 = _super5.call(this);
          _this4.outletElement = outletElement;
          _this4._componentFactoryResolver = _componentFactoryResolver;
          _this4._appRef = _appRef;
          _this4._defaultInjector = _defaultInjector;
          /**
           * Attaches a DOM portal by transferring its content into the outlet.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this4.attachDomPortal = function (portal) {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this4._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this4._document.createComment('dom-portal');

            element.parentNode.insertBefore(anchorNode, element);

            _this4.outletElement.appendChild(element);

            _this4._attachedPortal = portal;

            _get((_thisSuper = _assertThisInitialized(_this4), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper, function () {
              // We can't use `replaceWith` here because IE doesn't support it.
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this4._document = _document;
          return _this4;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         * @returns Reference to the created component.
         */


        _createClass(DomPortalOutlet, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            var _this5 = this;

            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the view to the application.

            if (portal.viewContainerRef) {
              componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
              this.setDisposeFn(function () {
                return componentRef.destroy();
              });
            } else {
              componentRef = componentFactory.create(portal.injector || this._defaultInjector);

              this._appRef.attachView(componentRef.hostView);

              this.setDisposeFn(function () {
                _this5._appRef.detachView(componentRef.hostView);

                componentRef.destroy();
              });
            } // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.


            this.outletElement.appendChild(this._getComponentRootNode(componentRef));
            this._attachedPortal = portal;
            return componentRef;
          }
          /**
           * Attaches a template portal to the DOM as an embedded view.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this6 = this;

            var viewContainer = portal.viewContainerRef;
            var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
            // But for the DomPortalOutlet the view can be added everywhere in the DOM
            // (e.g Overlay Container) To move the view to the specified host element. We just
            // re-append the existing root nodes.

            viewRef.rootNodes.forEach(function (rootNode) {
              return _this6.outletElement.appendChild(rootNode);
            }); // Note that we want to detect changes after the nodes have been moved so that
            // any directives inside the portal that are looking at the DOM inside a lifecycle
            // hook won't be invoked too early.

            viewRef.detectChanges();
            this.setDisposeFn(function () {
              var index = viewContainer.indexOf(viewRef);

              if (index !== -1) {
                viewContainer.remove(index);
              }
            });
            this._attachedPortal = portal; // TODO(jelbourn): Return locals from view.

            return viewRef;
          }
          /**
           * Clears out a portal from the DOM.
           */

        }, {
          key: "dispose",
          value: function dispose() {
            _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

            if (this.outletElement.parentNode != null) {
              this.outletElement.parentNode.removeChild(this.outletElement);
            }
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalOutlet;
      }(BasePortalOutlet);
      /**
       * @deprecated Use `DomPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
        _inherits(DomPortalHost, _DomPortalOutlet);

        var _super6 = _createSuper(DomPortalHost);

        function DomPortalHost() {
          _classCallCheck(this, DomPortalHost);

          return _super6.apply(this, arguments);
        }

        return DomPortalHost;
      }(DomPortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
       * the directive instance itself can be attached to a host, enabling declarative use of portals.
       */


      var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
        _inherits(CdkPortal, _TemplatePortal);

        var _super7 = _createSuper(CdkPortal);

        function CdkPortal(templateRef, viewContainerRef) {
          _classCallCheck(this, CdkPortal);

          return _super7.call(this, templateRef, viewContainerRef);
        }

        return CdkPortal;
      }(TemplatePortal);

      CdkPortal.ɵfac = function CdkPortal_Factory(t) {
        return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortal]',
            exportAs: 'cdkPortal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();
      /**
       * @deprecated Use `CdkPortal` instead.
       * @breaking-change 9.0.0
       */


      var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
        _inherits(TemplatePortalDirective, _CdkPortal);

        var _super8 = _createSuper(TemplatePortalDirective);

        function TemplatePortalDirective() {
          _classCallCheck(this, TemplatePortalDirective);

          return _super8.apply(this, arguments);
        }

        return TemplatePortalDirective;
      }(CdkPortal);

      TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
        return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
      };

      TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵTemplatePortalDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdk-portal], [portal]',
            exportAs: 'cdkPortal',
            providers: [{
              provide: CdkPortal,
              useExisting: TemplatePortalDirective
            }]
          }]
        }], null, null);
      })();
      /**
       * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
       * directly attached to it, enabling declarative use.
       *
       * Usage:
       * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
       */


      var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
        _inherits(CdkPortalOutlet, _BasePortalOutlet3);

        var _super9 = _createSuper(CdkPortalOutlet);

        function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
          var _thisSuper2, _this7;

          _classCallCheck(this, CdkPortalOutlet);

          _this7 = _super9.call(this);
          _this7._componentFactoryResolver = _componentFactoryResolver;
          _this7._viewContainerRef = _viewContainerRef;
          /** Whether the portal component is initialized. */

          _this7._isInitialized = false;
          /** Emits when a portal is attached to the outlet. */

          _this7.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this7.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this7._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this7._document.createComment('dom-portal');

            portal.setAttachedHost(_assertThisInitialized(_this7));
            element.parentNode.insertBefore(anchorNode, element);

            _this7._getRootNode().appendChild(element);

            _this7._attachedPortal = portal;

            _get((_thisSuper2 = _assertThisInitialized(_this7), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2, function () {
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this7._document = _document;
          return _this7;
        }
        /** Portal associated with the Portal outlet. */


        _createClass(CdkPortalOutlet, [{
          key: "portal",
          get: function get() {
            return this._attachedPortal;
          },
          set: function set(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
              return;
            }

            if (this.hasAttached()) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
            }

            if (portal) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
            }

            this._attachedPortal = portal;
          }
          /** Component or view reference that is attached to the portal. */

        }, {
          key: "attachedRef",
          get: function get() {
            return this._attachedRef;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

            this._attachedPortal = null;
            this._attachedRef = null;
          }
          /**
           * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
           *
           * @param portal Portal to be attached to the portal outlet.
           * @returns Reference to the created component.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.

            var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.

            if (viewContainerRef !== this._viewContainerRef) {
              this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return ref.destroy();
            });

            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
          }
          /**
           * Attach the given TemplatePortal to this PortalHost as an embedded View.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this8 = this;

            portal.setAttachedHost(this);

            var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return _this8._viewContainerRef.clear();
            });

            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
          }
          /** Gets the root node of the portal outlet. */

        }, {
          key: "_getRootNode",
          value: function _getRootNode() {
            var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.

            return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
          }
        }]);

        return CdkPortalOutlet;
      }(BasePortalOutlet);

      CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
        return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortalOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      CdkPortalOutlet.propDecorators = {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalOutlet]',
            exportAs: 'cdkPortalOutlet',
            inputs: ['portal: cdkPortalOutlet']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * @deprecated Use `CdkPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
        _inherits(PortalHostDirective, _CdkPortalOutlet);

        var _super10 = _createSuper(PortalHostDirective);

        function PortalHostDirective() {
          _classCallCheck(this, PortalHostDirective);

          return _super10.apply(this, arguments);
        }

        return PortalHostDirective;
      }(CdkPortalOutlet);

      PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
        return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
      };

      PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
          portal: ["cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵPortalHostDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalHost',
            inputs: ['portal: cdkPortalHost'],
            providers: [{
              provide: CdkPortalOutlet,
              useExisting: PortalHostDirective
            }]
          }]
        }], null, null);
      })();

      var PortalModule = function PortalModule() {
        _classCallCheck(this, PortalModule);
      };

      PortalModule.ɵfac = function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      };

      PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortalModule
      });
      PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
            declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Custom injector to be used when providing custom
       * injection tokens to components inside a portal.
       * @docs-private
       * @deprecated Use `Injector.create` instead.
       * @breaking-change 11.0.0
       */


      var PortalInjector = /*#__PURE__*/function () {
        function PortalInjector(_parentInjector, _customTokens) {
          _classCallCheck(this, PortalInjector);

          this._parentInjector = _parentInjector;
          this._customTokens = _customTokens;
        }

        _createClass(PortalInjector, [{
          key: "get",
          value: function get(token, notFoundValue) {
            var value = this._customTokens.get(token);

            if (typeof value !== 'undefined') {
              return value;
            }

            return this._parentInjector.get(token, notFoundValue);
          }
        }]);

        return PortalInjector;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=portal.js.map

      /***/

    },

    /***/
    "0EQZ":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
      \************************************************************************/

    /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, getMultipleValuesInSingleSelectionError, isDataSource */

    /***/
    function EQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
        return ArrayDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return DataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
        return SelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
        return UniqueSelectionDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_DisposeViewRepeaterStrategy", function () {
        return _DisposeViewRepeaterStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_RecycleViewRepeaterStrategy", function () {
        return _RecycleViewRepeaterStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_VIEW_REPEATER_STRATEGY", function () {
        return _VIEW_REPEATER_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
        return getMultipleValuesInSingleSelectionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
        return isDataSource;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DataSource = function DataSource() {
        _classCallCheck(this, DataSource);
      };
      /** Checks whether an object is a data source. */


      function isDataSource(value) {
        // Check if the value is a DataSource by observing if it has a connect function. Cannot
        // be checked as an `instanceof DataSource` since people could create their own sources
        // that match the interface, but don't extend DataSource.
        return value && typeof value.connect === 'function';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** DataSource wrapper for a native array. */


      var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
        _inherits(ArrayDataSource, _DataSource);

        var _super11 = _createSuper(ArrayDataSource);

        function ArrayDataSource(_data) {
          var _this9;

          _classCallCheck(this, ArrayDataSource);

          _this9 = _super11.call(this);
          _this9._data = _data;
          return _this9;
        }

        _createClass(ArrayDataSource, [{
          key: "connect",
          value: function connect() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return ArrayDataSource;
      }(DataSource);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A repeater that destroys views when they are removed from a
       * {@link ViewContainerRef}. When new items are inserted into the container,
       * the repeater will always construct a new embedded view for each item.
       *
       * @template T The type for the embedded view's $implicit property.
       * @template R The type for the item in each IterableDiffer change record.
       * @template C The type for the context passed to each embedded view.
       */


      var _DisposeViewRepeaterStrategy = /*#__PURE__*/function () {
        function _DisposeViewRepeaterStrategy() {
          _classCallCheck(this, _DisposeViewRepeaterStrategy);
        }

        _createClass(_DisposeViewRepeaterStrategy, [{
          key: "applyChanges",
          value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              var view;
              var operation;

              if (record.previousIndex == null) {
                var insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
                operation = 1
                /* INSERTED */
                ;
              } else if (currentIndex == null) {
                viewContainerRef.remove(adjustedPreviousIndex);
                operation = 3
                /* REMOVED */
                ;
              } else {
                view = viewContainerRef.get(adjustedPreviousIndex);
                viewContainerRef.move(view, currentIndex);
                operation = 2
                /* MOVED */
                ;
              }

              if (itemViewChanged) {
                itemViewChanged({
                  context: view === null || view === void 0 ? void 0 : view.context,
                  operation: operation,
                  record: record
                });
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {}
        }]);

        return _DisposeViewRepeaterStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A repeater that caches views when they are removed from a
       * {@link ViewContainerRef}. When new items are inserted into the container,
       * the repeater will reuse one of the cached views instead of creating a new
       * embedded view. Recycling cached views reduces the quantity of expensive DOM
       * inserts.
       *
       * @template T The type for the embedded view's $implicit property.
       * @template R The type for the item in each IterableDiffer change record.
       * @template C The type for the context passed to each embedded view.
       */


      var _RecycleViewRepeaterStrategy = /*#__PURE__*/function () {
        function _RecycleViewRepeaterStrategy() {
          _classCallCheck(this, _RecycleViewRepeaterStrategy);

          /**
           * The size of the cache used to store unused views.
           * Setting the cache size to `0` will disable caching. Defaults to 20 views.
           */
          this.viewCacheSize = 20;
          /**
           * View cache that stores embedded view instances that have been previously stamped out,
           * but don't are not currently rendered. The view repeater will reuse these views rather than
           * creating brand new ones.
           *
           * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
           */

          this._viewCache = [];
        }
        /** Apply changes to the DOM. */


        _createClass(_RecycleViewRepeaterStrategy, [{
          key: "applyChanges",
          value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
            var _this10 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              var view;
              var operation;

              if (record.previousIndex == null) {
                // Item added.
                var viewArgsFactory = function viewArgsFactory() {
                  return itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                };

                view = _this10._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = view ? 1
                /* INSERTED */
                : 0
                /* REPLACED */
                ;
              } else if (currentIndex == null) {
                // Item removed.
                _this10._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);

                operation = 3
                /* REMOVED */
                ;
              } else {
                // Item moved.
                view = _this10._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = 2
                /* MOVED */
                ;
              }

              if (itemViewChanged) {
                itemViewChanged({
                  context: view === null || view === void 0 ? void 0 : view.context,
                  operation: operation,
                  record: record
                });
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            var _iterator = _createForOfIteratorHelper(this._viewCache),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var view = _step.value;
                view.destroy();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._viewCache = [];
          }
          /**
           * Inserts a view for a new item, either from the cache or by creating a new
           * one. Returns `undefined` if the item was inserted into a cached view.
           */

        }, {
          key: "_insertView",
          value: function _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
            var cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);

            if (cachedView) {
              cachedView.context.$implicit = value;
              return undefined;
            }

            var viewArgs = viewArgsFactory();
            return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
          }
          /** Detaches the view at the given index and inserts into the view cache. */

        }, {
          key: "_detachAndCacheView",
          value: function _detachAndCacheView(index, viewContainerRef) {
            var detachedView = viewContainerRef.detach(index);

            this._maybeCacheView(detachedView, viewContainerRef);
          }
          /** Moves view at the previous index to the current index. */

        }, {
          key: "_moveView",
          value: function _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
            var view = viewContainerRef.get(adjustedPreviousIndex);
            viewContainerRef.move(view, currentIndex);
            view.context.$implicit = value;
            return view;
          }
          /**
           * Cache the given detached view. If the cache is full, the view will be
           * destroyed.
           */

        }, {
          key: "_maybeCacheView",
          value: function _maybeCacheView(view, viewContainerRef) {
            if (this._viewCache.length < this.viewCacheSize) {
              this._viewCache.push(view);
            } else {
              var index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
              // the view repeater. It's unlikely this will occur, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.

              if (index === -1) {
                view.destroy();
              } else {
                viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a recycled view from the cache at the given index. */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index, viewContainerRef) {
            var cachedView = this._viewCache.pop();

            if (cachedView) {
              viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
        }]);

        return _RecycleViewRepeaterStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to be used to power selecting one or more options from a list.
       */


      var SelectionModel = /*#__PURE__*/function () {
        function SelectionModel() {
          var _this11 = this;

          var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

          var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          _classCallCheck(this, SelectionModel);

          this._multiple = _multiple;
          this._emitChanges = _emitChanges;
          /** Currently-selected values. */

          this._selection = new Set();
          /** Keeps track of the deselected options that haven't been emitted by the change event. */

          this._deselectedToEmit = [];
          /** Keeps track of the selected options that haven't been emitted by the change event. */

          this._selectedToEmit = [];
          /** Event emitted when the value has changed. */

          this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
              initiallySelectedValues.forEach(function (value) {
                return _this11._markSelected(value);
              });
            } else {
              this._markSelected(initiallySelectedValues[0]);
            } // Clear the array in order to avoid firing the change event for preselected values.


            this._selectedToEmit.length = 0;
          }
        }
        /** Selected values. */


        _createClass(SelectionModel, [{
          key: "selected",
          get: function get() {
            if (!this._selected) {
              this._selected = Array.from(this._selection.values());
            }

            return this._selected;
          }
          /**
           * Selects a value or an array of values.
           */

        }, {
          key: "select",
          value: function select() {
            var _this12 = this;

            for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
              values[_key] = arguments[_key];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this12._markSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Deselects a value or an array of values.
           */

        }, {
          key: "deselect",
          value: function deselect() {
            var _this13 = this;

            for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              values[_key2] = arguments[_key2];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this13._unmarkSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Toggles a value between selected and deselected.
           */

        }, {
          key: "toggle",
          value: function toggle(value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
          }
          /**
           * Clears all of the selected values.
           */

        }, {
          key: "clear",
          value: function clear() {
            this._unmarkAll();

            this._emitChangeEvent();
          }
          /**
           * Determines whether a value is selected.
           */

        }, {
          key: "isSelected",
          value: function isSelected(value) {
            return this._selection.has(value);
          }
          /**
           * Determines whether the model does not have a value.
           */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._selection.size === 0;
          }
          /**
           * Determines whether the model has a value.
           */

        }, {
          key: "hasValue",
          value: function hasValue() {
            return !this.isEmpty();
          }
          /**
           * Sorts the selected values based on a predicate function.
           */

        }, {
          key: "sort",
          value: function sort(predicate) {
            if (this._multiple && this.selected) {
              this._selected.sort(predicate);
            }
          }
          /**
           * Gets whether multiple values can be selected.
           */

        }, {
          key: "isMultipleSelection",
          value: function isMultipleSelection() {
            return this._multiple;
          }
          /** Emits a change event and clears the records of selected and deselected values. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            // Clear the selected values so they can be re-cached.
            this._selected = null;

            if (this._selectedToEmit.length || this._deselectedToEmit.length) {
              this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
              });
              this._deselectedToEmit = [];
              this._selectedToEmit = [];
            }
          }
          /** Selects a value. */

        }, {
          key: "_markSelected",
          value: function _markSelected(value) {
            if (!this.isSelected(value)) {
              if (!this._multiple) {
                this._unmarkAll();
              }

              this._selection.add(value);

              if (this._emitChanges) {
                this._selectedToEmit.push(value);
              }
            }
          }
          /** Deselects a value. */

        }, {
          key: "_unmarkSelected",
          value: function _unmarkSelected(value) {
            if (this.isSelected(value)) {
              this._selection["delete"](value);

              if (this._emitChanges) {
                this._deselectedToEmit.push(value);
              }
            }
          }
          /** Clears out the selected values. */

        }, {
          key: "_unmarkAll",
          value: function _unmarkAll() {
            var _this14 = this;

            if (!this.isEmpty()) {
              this._selection.forEach(function (value) {
                return _this14._unmarkSelected(value);
              });
            }
          }
          /**
           * Verifies the value assignment and throws an error if the specified value array is
           * including multiple values while the selection model is not supporting multiple values.
           */

        }, {
          key: "_verifyValueAssignment",
          value: function _verifyValueAssignment(values) {
            if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMultipleValuesInSingleSelectionError();
            }
          }
        }]);

        return SelectionModel;
      }();
      /**
       * Returns an error that reports that multiple values are passed into a selection model
       * with a single value.
       * @docs-private
       */


      function getMultipleValuesInSingleSelectionError() {
        return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to coordinate unique selection based on name.
       * Intended to be consumed as an Angular service.
       * This service is needed because native radio change events are only fired on the item currently
       * being selected, and we still need to uncheck the previous selection.
       *
       * This service does not *store* any IDs and names because they may change at any time, so it is
       * less error-prone if they are simply passed through when the events occur.
       */


      var UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function UniqueSelectionDispatcher() {
          _classCallCheck(this, UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */


        _createClass(UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator2 = _createForOfIteratorHelper(this._listeners),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var listener = _step2.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this15 = this;

            this._listeners.push(listener);

            return function () {
              _this15._listeners = _this15._listeners.filter(function (registered) {
                return listener !== registered;
              });
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return UniqueSelectionDispatcher;
      }();

      UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
        return new (t || UniqueSelectionDispatcher)();
      };

      UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new UniqueSelectionDispatcher();
        },
        token: UniqueSelectionDispatcher,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
       * @docs-private
       */


      var _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('_ViewRepeater');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=collections.js.map

      /***/

    },

    /***/
    "7EHt":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
      \***************************************************************************/

    /*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations, ɵ0 */

    /***/
    function EHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
        return EXPANSION_PANEL_ANIMATION_TIMING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
        return MAT_ACCORDION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
        return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
        return MatAccordion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
        return MatExpansionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
        return MatExpansionPanel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
        return MatExpansionPanelActionRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
        return MatExpansionPanelContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
        return MatExpansionPanelDescription;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
        return MatExpansionPanelHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
        return MatExpansionPanelTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
        return matExpansionAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "N/qJ");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
       * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
       */


      var _c0 = ["body"];

      function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

      var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
      var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

      function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
        }
      }

      var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
      var _c4 = ["mat-panel-title", "mat-panel-description", "*"];
      var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time and timing curve for expansion panel animations. */
      // Note: Keep this in sync with the Sass variable for the panel header animation.

      var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
      /**
       * Animations used by the Material expansion panel.
       *
       * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
       * causes the animation state of moved components to become `void` upon exit, and not update again
       * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
       * of the panel is `expanded` or `collapsed` but the animation state is `void`.
       *
       * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
       * are defined to have the same styles. Since angular animates from the current styles to the
       * destination state's style definition, in situations where we are moving from `void`'s styles to
       * `collapsed` this acts a noop since no style values change.
       *
       * In the case where angular's animation state is out of sync with the expansion panel's state, the
       * expansion panel being `expanded` and angular animations being `void`, the animation from the
       * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
       * occur as expected.
       *
       * Angular Bug: https://github.com/angular/angular/issues/18847
       *
       * @docs-private
       */

      var matExpansionAnimations = {
        /** Animation that rotates the indicator arrow. */
        indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'rotate(0deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'rotate(180deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

        /** Animation that expands and collapses the panel content. */
        bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '*',
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Expansion panel content that will be rendered lazily
       * after the panel is opened for the first time.
       */

      var MatExpansionPanelContent = function MatExpansionPanelContent(_template) {
        _classCallCheck(this, MatExpansionPanelContent);

        this._template = _template;
      };

      MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
        return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]]
      });

      MatExpansionPanelContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matExpansionPanelContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter for generating unique element ids. */


      var uniqueId = 0;
      /**
       * Injection token that can be used to configure the defalt
       * options for the expansion panel component.
       */

      var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
      var ɵ0 = undefined;
      /**
       * This component can be used as a single element to show expandable content, or as one of
       * multiple children of an element with the MatAccordion directive attached.
       */

      var MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
        _inherits(MatExpansionPanel, _angular_cdk_accordio);

        var _super12 = _createSuper(MatExpansionPanel);

        function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
          var _this16;

          _classCallCheck(this, MatExpansionPanel);

          _this16 = _super12.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
          _this16._viewContainerRef = _viewContainerRef;
          _this16._animationMode = _animationMode;
          _this16._hideToggle = false;
          /** An event emitted after the body's expansion animation happens. */

          _this16.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** An event emitted after the body's collapse animation happens. */

          _this16.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Stream that emits for changes in `@Input` properties. */

          _this16._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          /** ID for the associated header element. Used for a11y labelling. */

          _this16._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
          /** Stream of body animation done events. */

          _this16._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          _this16.accordion = accordion;
          _this16._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
          // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

          _this16._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            if (event.fromState !== 'void') {
              if (event.toState === 'expanded') {
                _this16.afterExpand.emit();
              } else if (event.toState === 'collapsed') {
                _this16.afterCollapse.emit();
              }
            }
          });

          if (defaultOptions) {
            _this16.hideToggle = defaultOptions.hideToggle;
          }

          return _this16;
        }
        /** Whether the toggle indicator should be hidden. */


        _createClass(MatExpansionPanel, [{
          key: "hideToggle",
          get: function get() {
            return this._hideToggle || this.accordion && this.accordion.hideToggle;
          },
          set: function set(value) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The position of the expansion indicator. */

        }, {
          key: "togglePosition",
          get: function get() {
            return this._togglePosition || this.accordion && this.accordion.togglePosition;
          },
          set: function set(value) {
            this._togglePosition = value;
          }
          /** Determines whether the expansion panel should have spacing between it and its siblings. */

        }, {
          key: "_hasSpacing",
          value: function _hasSpacing() {
            if (this.accordion) {
              return this.expanded && this.accordion.displayMode === 'default';
            }

            return false;
          }
          /** Gets the expanded state string. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.expanded ? 'expanded' : 'collapsed';
          }
          /** Toggles the expanded state of the expansion panel. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
          /** Sets the expanded state of the expansion panel to false. */

        }, {
          key: "close",
          value: function close() {
            this.expanded = false;
          }
          /** Sets the expanded state of the expansion panel to true. */

        }, {
          key: "open",
          value: function open() {
            this.expanded = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this17 = this;

            if (this._lazyContent) {
              // Render the content as soon as the panel becomes open.
              this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function () {
                return _this17.expanded && !_this17._portal;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                _this17._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](_this17._lazyContent._template, _this17._viewContainerRef);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._inputChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

            this._bodyAnimationDone.complete();

            this._inputChanges.complete();
          }
          /** Checks whether the expansion panel's content contains the currently-focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (this._body) {
              var focusedElement = this._document.activeElement;
              var bodyElement = this._body.nativeElement;
              return focusedElement === bodyElement || bodyElement.contains(focusedElement);
            }

            return false;
          }
        }]);

        return MatExpansionPanel;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"]);

      MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
        return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
      };

      MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
          }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 6,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
          }
        },
        inputs: {
          disabled: "disabled",
          expanded: "expanded",
          hideToggle: "hideToggle",
          togglePosition: "togglePosition"
        },
        outputs: {
          opened: "opened",
          closed: "closed",
          expandedChange: "expandedChange",
          afterExpand: "afterExpand",
          afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: ɵ0
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 4,
        consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
              return ctx._bodyAnimationDone.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.bodyExpansion]
        },
        changeDetection: 0
      });

      MatExpansionPanel.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      MatExpansionPanel.propDecorators = {
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['body']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-expansion-panel',
            exportAs: 'matExpansionPanel',
            template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled', 'expanded'],
            outputs: ['opened', 'closed', 'expandedChange'],
            animations: [matExpansionAnimations.bodyExpansion],
            providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            {
              provide: MAT_ACCORDION,
              useValue: ɵ0
            }],
            host: {
              'class': 'mat-expansion-panel',
              '[class.mat-expanded]': 'expanded',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
            },
            styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_ACCORDION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatExpansionPanelContent]
          }],
          _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['body']
          }]
        });
      })();
      /**
       * Actions of a `<mat-expansion-panel>`.
       */


      var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
        _classCallCheck(this, MatExpansionPanelActionRow);
      };

      MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
        return new (t || MatExpansionPanelActionRow)();
      };

      MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-action-row',
            host: {
              "class": 'mat-action-row'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Header element of a `<mat-expansion-panel>`.
       */


      var MatExpansionPanelHeader = /*#__PURE__*/function () {
        function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
          var _this18 = this;

          _classCallCheck(this, MatExpansionPanelHeader);

          this.panel = panel;
          this._element = _element;
          this._focusMonitor = _focusMonitor;
          this._changeDetectorRef = _changeDetectorRef;
          this._animationMode = _animationMode;
          this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
          var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (changes) {
            return !!(changes['hideToggle'] || changes['togglePosition']);
          })) : rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
          // need to subscribe and trigger change detection manually.

          this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (changes) {
            return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
          }))).subscribe(function () {
            return _this18._changeDetectorRef.markForCheck();
          }); // Avoids focus being lost if the panel contained the focused element and was closed.

          panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function () {
            return panel._containsFocus();
          })).subscribe(function () {
            return _focusMonitor.focusVia(_element, 'program');
          });

          if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
          }
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */


        _createClass(MatExpansionPanelHeader, [{
          key: "disabled",
          get: function get() {
            return this.panel.disabled;
          }
          /** Toggles the expanded state of the panel. */

        }, {
          key: "_toggle",
          value: function _toggle() {
            if (!this.disabled) {
              this.panel.toggle();
            }
          }
          /** Gets whether the panel is expanded. */

        }, {
          key: "_isExpanded",
          value: function _isExpanded() {
            return this.panel.expanded;
          }
          /** Gets the expanded state string of the panel. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.panel._getExpandedState();
          }
          /** Gets the panel id. */

        }, {
          key: "_getPanelId",
          value: function _getPanelId() {
            return this.panel.id;
          }
          /** Gets the toggle position for the header. */

        }, {
          key: "_getTogglePosition",
          value: function _getTogglePosition() {
            return this.panel.togglePosition;
          }
          /** Gets whether the expand indicator should be shown. */

        }, {
          key: "_showToggle",
          value: function _showToggle() {
            return !this.panel.hideToggle && !this.panel.disabled;
          }
          /**
           * Gets the current height of the header. Null if no custom height has been
           * specified, and if the default height from the stylesheet should be used.
           */

        }, {
          key: "_getHeaderHeight",
          value: function _getHeaderHeight() {
            var isExpanded = this._isExpanded();

            if (isExpanded && this.expandedHeight) {
              return this.expandedHeight;
            } else if (!isExpanded && this.collapsedHeight) {
              return this.collapsedHeight;
            }

            return null;
          }
          /** Handle keydown event calling to toggle() if appropriate. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            switch (event.keyCode) {
              // Toggle for space and enter keys.
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
                  event.preventDefault();

                  this._toggle();
                }

                break;

              default:
                if (this.panel.accordion) {
                  this.panel.accordion._handleHeaderKeydown(event);
                }

                return;
            }
          }
          /**
           * Focuses the panel header. Implemented as a part of `FocusableOption`.
           * @param origin Origin of the action that triggered the focus.
           * @docs-private
           */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (origin) {
              this._focusMonitor.focusVia(this._element, origin, options);
            } else {
              this._element.nativeElement.focus(options);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this19 = this;

            this._focusMonitor.monitor(this._element).subscribe(function (origin) {
              if (origin && _this19.panel.accordion) {
                _this19.panel.accordion._handleHeaderFocus(_this19);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._parentChangeSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._element);
          }
        }]);

        return MatExpansionPanelHeader;
      }();

      MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
        return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
              return ctx._toggle();
            })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          expandedHeight: "expandedHeight",
          collapsedHeight: "collapsedHeight"
        },
        ngContentSelectors: _c4,
        decls: 5,
        vars: 1,
        consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}\n"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.indicatorRotate]
        },
        changeDetection: 0
      });

      MatExpansionPanelHeader.ctorParameters = function () {
        return [{
          type: MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-expansion-panel-header',
            template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            animations: [matExpansionAnimations.indicatorRotate],
            host: {
              'class': 'mat-expansion-panel-header mat-focus-indicator',
              'role': 'button',
              '[attr.id]': 'panel._headerId',
              '[attr.tabindex]': 'disabled ? -1 : 0',
              '[attr.aria-controls]': '_getPanelId()',
              '[attr.aria-expanded]': '_isExpanded()',
              '[attr.aria-disabled]': 'panel.disabled',
              '[class.mat-expanded]': '_isExpanded()',
              '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
              '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[style.height]': '_getHeaderHeight()',
              '(click)': '_toggle()',
              '(keydown)': '_keydown($event)'
            },
            styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}\n"]
          }]
        }], function () {
          return [{
            type: MatExpansionPanel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Description element of a `<mat-expansion-panel-header>`.
       */


      var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
        _classCallCheck(this, MatExpansionPanelDescription);
      };

      MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
        return new (t || MatExpansionPanelDescription)();
      };

      MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-panel-description',
            host: {
              "class": 'mat-expansion-panel-header-description'
            }
          }]
        }], null, null);
      })();
      /**
       * Title element of a `<mat-expansion-panel-header>`.
       */


      var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
        _classCallCheck(this, MatExpansionPanelTitle);
      };

      MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
        return new (t || MatExpansionPanelTitle)();
      };

      MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-panel-title',
            host: {
              "class": 'mat-expansion-panel-header-title'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive for a Material Design Accordion.
       */


      var MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
        _inherits(MatAccordion, _angular_cdk_accordio2);

        var _super13 = _createSuper(MatAccordion);

        function MatAccordion() {
          var _this20;

          _classCallCheck(this, MatAccordion);

          _this20 = _super13.apply(this, arguments);
          /** Headers belonging to this accordion. */

          _this20._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          _this20._hideToggle = false;
          /**
           * Display mode used for all expansion panels in the accordion. Currently two display
           * modes exist:
           *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
           *     panel at a different elevation from the rest of the accordion.
           *  flat - no spacing is placed around expanded panels, showing all panels at the same
           *     elevation.
           */

          _this20.displayMode = 'default';
          /** The position of the expansion indicator. */

          _this20.togglePosition = 'after';
          return _this20;
        }
        /** Whether the expansion indicator should be hidden. */


        _createClass(MatAccordion, [{
          key: "hideToggle",
          get: function get() {
            return this._hideToggle;
          },
          set: function set(show) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(show);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this21 = this;

            this._headers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._headers)).subscribe(function (headers) {
              _this21._ownHeaders.reset(headers.filter(function (header) {
                return header.panel.accordion === _this21;
              }));

              _this21._ownHeaders.notifyOnChanges();
            });

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this._ownHeaders).withWrap().withHomeAndEnd();
          }
          /** Handles keyboard events coming in from the panel headers. */

        }, {
          key: "_handleHeaderKeydown",
          value: function _handleHeaderKeydown(event) {
            this._keyManager.onKeydown(event);
          }
        }, {
          key: "_handleHeaderFocus",
          value: function _handleHeaderFocus(header) {
            this._keyManager.updateActiveItem(header);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatAccordion.prototype), "ngOnDestroy", this).call(this);

            this._ownHeaders.destroy();
          }
        }]);

        return MatAccordion;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"]);

      MatAccordion.ɵfac = function MatAccordion_Factory(t) {
        return ɵMatAccordion_BaseFactory(t || MatAccordion);
      };

      MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
          }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
          }
        },
        inputs: {
          multi: "multi",
          displayMode: "displayMode",
          togglePosition: "togglePosition",
          hideToggle: "hideToggle"
        },
        exportAs: ["matAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_ACCORDION,
          useExisting: MatAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      MatAccordion.propDecorators = {
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatExpansionPanelHeader, {
            descendants: true
          }]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatAccordion_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-accordion',
            exportAs: 'matAccordion',
            inputs: ['multi'],
            providers: [{
              provide: MAT_ACCORDION,
              useExisting: MatAccordion
            }],
            host: {
              "class": 'mat-accordion',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if multiple panel support is enabled.
              '[class.mat-accordion-multi]': 'this.multi'
            }
          }]
        }], null, {
          displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatExpansionPanelHeader, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatExpansionModule = function MatExpansionModule() {
        _classCallCheck(this, MatExpansionModule);
      };

      MatExpansionModule.ɵfac = function MatExpansionModule_Factory(t) {
        return new (t || MatExpansionModule)();
      };

      MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatExpansionModule
      });
      MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, {
          declarations: function declarations() {
            return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
          },
          exports: function exports() {
            return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
            exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
            declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=expansion.js.map

      /***/

    },

    /***/
    "8LU1":
    /*!********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
      \********************************************************/

    /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray */

    /***/
    function LU1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
        return _isNumberValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
        return coerceBooleanProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
        return coerceCssPixelValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
        return coerceElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
        return coerceNumberProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceStringArray", function () {
        return coerceStringArray;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Coerces a data-bound value (typically a string) to a boolean. */


      function coerceBooleanProperty(value) {
        return value != null && "".concat(value) !== 'false';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function coerceNumberProperty(value) {
        var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return _isNumberValue(value) ? Number(value) : fallbackValue;
      }
      /**
       * Whether the provided value is considered a number.
       * @docs-private
       */


      function _isNumberValue(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return !isNaN(parseFloat(value)) && !isNaN(Number(value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Coerces a value to a CSS pixel value. */


      function coerceCssPixelValue(value) {
        if (value == null) {
          return '';
        }

        return typeof value === 'string' ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Coerces an ElementRef or an Element into an element.
       * Useful for APIs that can accept either a ref or the native element itself.
       */


      function coerceElement(elementOrRef) {
        return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Coerces a value to an array of trimmed non-empty strings.
       * Any input that is not an array, `null` or `undefined` will be turned into a string
       * via `toString()` and subsequently split with the given separator.
       * `null` and `undefined` will result in an empty array.
       * This results in the following outcomes:
       * - `null` -&gt; `[]`
       * - `[null]` -&gt; `["null"]`
       * - `["a", "b ", " "]` -&gt; `["a", "b"]`
       * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
       * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
       * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
       *
       * Useful for defining CSS classes or table columns.
       * @param value the value to coerce into an array of strings
       * @param separator split-separator if value isn't an array
       */


      function coerceStringArray(value) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /\s+/;
        var result = [];

        if (value != null) {
          var sourceValues = Array.isArray(value) ? value : "".concat(value).split(separator);

          var _iterator3 = _createForOfIteratorHelper(sourceValues),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var sourceValue = _step3.value;
              var trimmedString = "".concat(sourceValue).trim();

              if (trimmedString) {
                result.push(trimmedString);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        return result;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      //# sourceMappingURL=coercion.js.map

      /***/

    },

    /***/
    "FKr1":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
      \**********************************************************************/

    /*! exports provided: AnimationCurves, AnimationDurations, DateAdapter, ErrorStateMatcher, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MatCommonModule, MatLine, MatLineModule, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NativeDateAdapter, NativeDateModule, RippleRef, RippleRenderer, ShowOnDirtyErrorStateMatcher, VERSION, _MatOptgroupBase, _MatOptionBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵ0, ɵangular_material_src_material_core_core_a */

    /***/
    function FKr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
        return AnimationCurves;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
        return AnimationDurations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
        return ErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
        return MATERIAL_SANITY_CHECKS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
        return MAT_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
        return MAT_DATE_LOCALE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
        return MAT_DATE_LOCALE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
        return MAT_NATIVE_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTGROUP", function () {
        return MAT_OPTGROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
        return MAT_OPTION_PARENT_COMPONENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
        return MAT_RIPPLE_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
        return MatCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLine", function () {
        return MatLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
        return MatLineModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
        return MatNativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
        return MatOptgroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOption", function () {
        return MatOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
        return MatOptionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
        return MatOptionSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
        return MatPseudoCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
        return MatPseudoCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
        return MatRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
        return MatRippleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
        return NativeDateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
        return NativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
        return RippleRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
        return RippleRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
        return ShowOnDirtyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatOptgroupBase", function () {
        return _MatOptgroupBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatOptionBase", function () {
        return _MatOptionBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
        return _countGroupLabelsBeforeOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
        return _getOptionScrollPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
        return defaultRippleAnimationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
        return mixinColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
        return mixinDisableRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
        return mixinDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
        return mixinErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
        return mixinInitialized;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
        return mixinTabIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLines", function () {
        return setLines;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function () {
        return MATERIAL_SANITY_CHECKS_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk */
      "xz+E");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of Angular Material. */


      var _c0 = ["*", [["mat-option"], ["ng-container"]]];
      var _c1 = ["*", "mat-option, ng-container"];

      function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      function MatOption_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
        }
      }

      var _c2 = ["*"];
      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.11');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */

      var AnimationCurves = function AnimationCurves() {
        _classCallCheck(this, AnimationCurves);
      };

      AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
      AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
      AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
      AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
      /** @docs-private */

      var AnimationDurations = function AnimationDurations() {
        _classCallCheck(this, AnimationDurations);
      };

      AnimationDurations.COMPLEX = '375ms';
      AnimationDurations.ENTERING = '225ms';
      AnimationDurations.EXITING = '195ms';
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Private version constant to circumvent test/build issues,
      // i.e. avoid core to depend on the @angular/material primary entry-point
      // Can be removed once the Material primary entry-point no longer
      // re-exports all secondary entry-points

      var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.11');
      /** @docs-private */

      function MATERIAL_SANITY_CHECKS_FACTORY() {
        return true;
      }
      /** Injection token that configures whether the Material sanity checks are enabled. */


      var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
        providedIn: 'root',
        factory: MATERIAL_SANITY_CHECKS_FACTORY
      });
      /**
       * Module that captures anything that should be loaded and/or run for *all* Angular Material
       * components. This includes Bidi, etc.
       *
       * This module should be imported to each top-level component module (e.g., MatTabsModule).
       */

      var MatCommonModule = /*#__PURE__*/function () {
        function MatCommonModule(highContrastModeDetector, sanityChecks, document) {
          _classCallCheck(this, MatCommonModule);

          /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
          this._hasDoneGlobalChecks = false;
          this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
          // in MatCommonModule.

          highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
          // throws an error if we use the `SanityChecks` type directly.


          this._sanityChecks = sanityChecks;

          if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();

            this._checkThemeIsPresent();

            this._checkCdkVersionMatch();

            this._hasDoneGlobalChecks = true;
          }
        }
        /** Use defaultView of injected document if available or fallback to global window reference */


        _createClass(MatCommonModule, [{
          key: "_getWindow",
          value: function _getWindow() {
            var win = this._document.defaultView || window;
            return typeof win === 'object' && win ? win : null;
          }
          /** Whether any sanity checks are enabled. */

        }, {
          key: "_checksAreEnabled",
          value: function _checksAreEnabled() {
            // TODO(crisbeto): we can't use `ngDevMode` here yet, because ViewEngine apps might not support
            // it. Since these checks can have performance implications and they aren't tree shakeable
            // in their current form, we can leave the `isDevMode` check in for now.
            // tslint:disable-next-line:ban
            return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
          }
          /** Whether the code is running in tests. */

        }, {
          key: "_isTestEnv",
          value: function _isTestEnv() {
            var window = this._getWindow();

            return window && (window.__karma__ || window.jasmine);
          }
        }, {
          key: "_checkDoctypeIsDefined",
          value: function _checkDoctypeIsDefined() {
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.doctype);

            if (isEnabled && !this._document.doctype) {
              console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
            }
          }
        }, {
          key: "_checkThemeIsPresent",
          value: function _checkThemeIsPresent() {
            // We need to assert that the `body` is defined, because these checks run very early
            // and the `body` won't be defined if the consumer put their scripts in the `head`.
            var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !this._sanityChecks.theme;

            if (isDisabled || !this._document.body || typeof getComputedStyle !== 'function') {
              return;
            }

            var testElement = this._document.createElement('div');

            testElement.classList.add('mat-theme-loaded-marker');

            this._document.body.appendChild(testElement);

            var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

            if (computedStyle && computedStyle.display !== 'none') {
              console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
            }

            this._document.body.removeChild(testElement);
          }
          /** Checks whether the material version matches the cdk version */

        }, {
          key: "_checkCdkVersionMatch",
          value: function _checkCdkVersionMatch() {
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.version);

            if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
              console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
            }
          }
        }]);

        return MatCommonModule;
      }();

      MatCommonModule.ɵfac = function MatCommonModule_Factory(t) {
        return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCommonModule
      });
      MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      });

      MatCommonModule.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MATERIAL_SANITY_CHECKS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `disabled` property. */


      function mixinDisabled(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super14 = _createSuper(_class);

          function _class() {
            var _this22;

            _classCallCheck(this, _class);

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this22 = _super14.call.apply(_super14, [this].concat(args));
            _this22._disabled = false;
            return _this22;
          }

          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            },
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `color` property. */


      function mixinColor(base, defaultColor) {
        return /*#__PURE__*/function (_base2) {
          _inherits(_class2, _base2);

          var _super15 = _createSuper(_class2);

          function _class2() {
            var _this23;

            _classCallCheck(this, _class2);

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this23 = _super15.call.apply(_super15, [this].concat(args));
            _this23.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

            _this23.color = defaultColor;
            return _this23;
          }

          _createClass(_class2, [{
            key: "color",
            get: function get() {
              return this._color;
            },
            set: function set(value) {
              var colorPalette = value || this.defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
          }]);

          return _class2;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `disableRipple` property. */


      function mixinDisableRipple(base) {
        var Mixin = /*#__PURE__*/function (_base3) {
          _inherits(Mixin, _base3);

          var _super16 = _createSuper(Mixin);

          function Mixin() {
            var _this24;

            _classCallCheck(this, Mixin);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this24 = _super16.call.apply(_super16, [this].concat(args));
            _this24._disableRipple = false;
            return _this24;
          }
          /** Whether the ripple effect is disabled or not. */


          _createClass(Mixin, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            },
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return Mixin;
        }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
        // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
        // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


        return Mixin;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `tabIndex` property. */


      function mixinTabIndex(base) {
        var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        // Note: We cast `base` to `unknown` and then `Constructor`. It could be an abstract class,
        // but given we `extend` it from another class, we can assume a constructor being accessible.
        var Mixin = /*#__PURE__*/function (_base4) {
          _inherits(Mixin, _base4);

          var _super17 = _createSuper(Mixin);

          function Mixin() {
            var _this25;

            _classCallCheck(this, Mixin);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this25 = _super17.call.apply(_super17, [this].concat(args));
            _this25._tabIndex = defaultTabIndex;
            _this25.defaultTabIndex = defaultTabIndex;
            return _this25;
          }

          _createClass(Mixin, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            },
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value) : this.defaultTabIndex;
            }
          }]);

          return Mixin;
        }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
        // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
        // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


        return Mixin;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to augment a directive with updateErrorState method.
       * For component with `errorState` and need to update `errorState`.
       */


      function mixinErrorState(base) {
        return /*#__PURE__*/function (_base5) {
          _inherits(_class3, _base5);

          var _super18 = _createSuper(_class3);

          function _class3() {
            var _this26;

            _classCallCheck(this, _class3);

            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            _this26 = _super18.call.apply(_super18, [this].concat(args));
            /** Whether the component is in an error state. */

            _this26.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this26.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            return _this26;
          }

          _createClass(_class3, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              var oldState = this.errorState;
              var parent = this._parentFormGroup || this._parentForm;
              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              var control = this.ngControl ? this.ngControl.control : null;
              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class3;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


      function mixinInitialized(base) {
        return /*#__PURE__*/function (_base6) {
          _inherits(_class4, _base6);

          var _super19 = _createSuper(_class4);

          function _class4() {
            var _this27;

            _classCallCheck(this, _class4);

            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            _this27 = _super19.call.apply(_super19, [this].concat(args));
            /** Whether this directive has been marked as initialized. */

            _this27._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this27._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this27.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this27._isInitialized) {
                _this27._notifySubscriber(subscriber);
              } else {
                _this27._pendingSubscribers.push(subscriber);
              }
            });
            return _this27;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * @docs-private
           */


          _createClass(_class4, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /** Emits and completes the subscriber stream (should only emit once). */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class4;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** InjectionToken for datepicker that can be used to override default locale code. */


      var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
        providedIn: 'root',
        factory: MAT_DATE_LOCALE_FACTORY
      });
      /** @docs-private */

      function MAT_DATE_LOCALE_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
      }
      /** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */


      var DateAdapter = /*#__PURE__*/function () {
        function DateAdapter() {
          _classCallCheck(this, DateAdapter);

          this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** A stream that emits when the locale changes. */

          this.localeChanges = this._localeChanges;
        }
        /**
         * Given a potential date object, returns that same date object if it is
         * a valid date, or `null` if it's not a valid date.
         * @param obj The object to check.
         * @returns A date or `null`.
         */


        _createClass(DateAdapter, [{
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
          }
          /**
           * Attempts to deserialize a value to a valid date object. This is different from parsing in that
           * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
           * string). The default implementation does not allow any deserialization, it simply checks that
           * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
           * method on all of its `@Input()` properties that accept dates. It is therefore possible to
           * support passing values from your backend directly to these properties by overriding this method
           * to also deserialize the format used by your backend.
           * @param value The value to be deserialized into a date object.
           * @returns The deserialized date object, either a valid date, null if the value can be
           *     deserialized into a null date (e.g. the empty string), or an invalid date.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (value == null || this.isDateInstance(value) && this.isValid(value)) {
              return value;
            }

            return this.invalid();
          }
          /**
           * Sets the locale used for all dates.
           * @param locale The new locale.
           */

        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            this.locale = locale;

            this._localeChanges.next();
          }
          /**
           * Compares two dates.
           * @param first The first date to compare.
           * @param second The second date to compare.
           * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
           *     a number greater than 0 if the first date is later.
           */

        }, {
          key: "compareDate",
          value: function compareDate(first, second) {
            return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
          }
          /**
           * Checks if two dates are equal.
           * @param first The first date to check.
           * @param second The second date to check.
           * @returns Whether the two dates are equal.
           *     Null dates are considered equal to other null dates.
           */

        }, {
          key: "sameDate",
          value: function sameDate(first, second) {
            if (first && second) {
              var firstValid = this.isValid(first);
              var secondValid = this.isValid(second);

              if (firstValid && secondValid) {
                return !this.compareDate(first, second);
              }

              return firstValid == secondValid;
            }

            return first == second;
          }
          /**
           * Clamp the given date between min and max dates.
           * @param date The date to clamp.
           * @param min The minimum value to allow. If null or omitted no min is enforced.
           * @param max The maximum value to allow. If null or omitted no max is enforced.
           * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
           *     otherwise `date`.
           */

        }, {
          key: "clampDate",
          value: function clampDate(date, min, max) {
            if (min && this.compareDate(date, min) < 0) {
              return min;
            }

            if (max && this.compareDate(date, max) > 0) {
              return max;
            }

            return date;
          }
        }]);

        return DateAdapter;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): Remove when we no longer support safari 9.

      /** Whether the browser supports the Intl API. */

      var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        SUPPORTS_INTL_API = typeof Intl != 'undefined';
      } catch (_a) {
        SUPPORTS_INTL_API = false;
      }
      /** The default month names to use if Intl API is not available. */


      var DEFAULT_MONTH_NAMES = {
        'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      };

      var ɵ0 = function ɵ0(i) {
        return String(i + 1);
      };
      /** The default date names to use if Intl API is not available. */


      var DEFAULT_DATE_NAMES = range(31, ɵ0);
      /** The default day of the week names to use if Intl API is not available. */

      var DEFAULT_DAY_OF_WEEK_NAMES = {
        'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      };
      /**
       * Matches strings that have the form of a valid RFC 3339 string
       * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
       * because the regex will match strings an with out of bounds month, date, etc.
       */

      var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
      /** Creates an array and fills it with values. */

      function range(length, valueFunction) {
        var valuesArray = Array(length);

        for (var i = 0; i < length; i++) {
          valuesArray[i] = valueFunction(i);
        }

        return valuesArray;
      }
      /** Adapts the native JS Date for use with cdk-based components that work with dates. */


      var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
        _inherits(NativeDateAdapter, _DateAdapter);

        var _super20 = _createSuper(NativeDateAdapter);

        function NativeDateAdapter(matDateLocale, platform) {
          var _thisSuper3, _this28;

          _classCallCheck(this, NativeDateAdapter);

          _this28 = _super20.call(this);
          /**
           * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
           * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
           * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
           * will produce `'8/13/1800'`.
           *
           * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
           * getting the string representation of a Date object from its utc representation. We're keeping
           * it here for sometime, just for precaution, in case we decide to revert some of these changes
           * though.
           */

          _this28.useUtcForDisplay = true;

          _get((_thisSuper3 = _assertThisInitialized(_this28), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper3).call(_thisSuper3, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


          _this28.useUtcForDisplay = !platform.TRIDENT;
          _this28._clampDate = platform.TRIDENT || platform.EDGE;
          return _this28;
        }

        _createClass(NativeDateAdapter, [{
          key: "getYear",
          value: function getYear(date) {
            return date.getFullYear();
          }
        }, {
          key: "getMonth",
          value: function getMonth(date) {
            return date.getMonth();
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return date.getDate();
          }
        }, {
          key: "getDayOfWeek",
          value: function getDayOfWeek(date) {
            return date.getDay();
          }
        }, {
          key: "getMonthNames",
          value: function getMonthNames(style) {
            var _this29 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
              });
              return range(12, function (i) {
                return _this29._stripDirectionalityCharacters(_this29._format(dtf, new Date(2017, i, 1)));
              });
            }

            return DEFAULT_MONTH_NAMES[style];
          }
        }, {
          key: "getDateNames",
          value: function getDateNames() {
            var _this30 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
              });
              return range(31, function (i) {
                return _this30._stripDirectionalityCharacters(_this30._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DATE_NAMES;
          }
        }, {
          key: "getDayOfWeekNames",
          value: function getDayOfWeekNames(style) {
            var _this31 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
              });
              return range(7, function (i) {
                return _this31._stripDirectionalityCharacters(_this31._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DAY_OF_WEEK_NAMES[style];
          }
        }, {
          key: "getYearName",
          value: function getYearName(date) {
            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
              });
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return String(this.getYear(date));
          }
        }, {
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
          }
        }, {
          key: "getNumDaysInMonth",
          value: function getNumDaysInMonth(date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
          }
        }, {
          key: "clone",
          value: function clone(date) {
            return new Date(date.getTime());
          }
        }, {
          key: "createDate",
          value: function createDate(year, month, date) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              // Check for invalid month and date (except upper bound on date which we have to check after
              // creating the Date).
              if (month < 0 || month > 11) {
                throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
              }

              if (date < 1) {
                throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
              }
            }

            var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


            if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
        }, {
          key: "today",
          value: function today() {
            return new Date();
          }
        }, {
          key: "parse",
          value: function parse(value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
              return new Date(value);
            }

            return value ? new Date(Date.parse(value)) : null;
          }
        }, {
          key: "format",
          value: function format(date, displayFormat) {
            if (!this.isValid(date)) {
              throw Error('NativeDateAdapter: Cannot format invalid date.');
            }

            if (SUPPORTS_INTL_API) {
              // On IE and Edge the i18n API will throw a hard error that can crash the entire app
              // if we attempt to format a date whose year is less than 1 or greater than 9999.
              if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
              }

              displayFormat = Object.assign(Object.assign({}, displayFormat), {
                timeZone: 'utc'
              });
              var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return this._stripDirectionalityCharacters(date.toDateString());
          }
        }, {
          key: "addCalendarYears",
          value: function addCalendarYears(date, years) {
            return this.addCalendarMonths(date, years * 12);
          }
        }, {
          key: "addCalendarMonths",
          value: function addCalendarMonths(date, months) {
            var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.


            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
              newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }

            return newDate;
          }
        }, {
          key: "addCalendarDays",
          value: function addCalendarDays(date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
          }
        }, {
          key: "toIso8601",
          value: function toIso8601(date) {
            return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
          }
          /**
           * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
           * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
           * invalid date for all other values.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (typeof value === 'string') {
              if (!value) {
                return null;
              } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
              // string is the right format first.


              if (ISO_8601_REGEX.test(value)) {
                var date = new Date(value);

                if (this.isValid(date)) {
                  return date;
                }
              }
            }

            return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
          }
        }, {
          key: "isDateInstance",
          value: function isDateInstance(obj) {
            return obj instanceof Date;
          }
        }, {
          key: "isValid",
          value: function isValid(date) {
            return !isNaN(date.getTime());
          }
        }, {
          key: "invalid",
          value: function invalid() {
            return new Date(NaN);
          }
          /** Creates a date but allows the month and date to overflow. */

        }, {
          key: "_createDateWithOverflow",
          value: function _createDateWithOverflow(year, month, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setFullYear` and `setHours` instead.
            var d = new Date();
            d.setFullYear(year, month, date);
            d.setHours(0, 0, 0, 0);
            return d;
          }
          /**
           * Pads a number to make it two digits.
           * @param n The number to pad.
           * @returns The padded number.
           */

        }, {
          key: "_2digit",
          value: function _2digit(n) {
            return ('00' + n).slice(-2);
          }
          /**
           * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
           * other browsers do not. We remove them to make output consistent and because they interfere with
           * date parsing.
           * @param str The string to strip direction characters from.
           * @returns The stripped string.
           */

        }, {
          key: "_stripDirectionalityCharacters",
          value: function _stripDirectionalityCharacters(str) {
            return str.replace(/[\u200e\u200f]/g, '');
          }
          /**
           * When converting Date object to string, javascript built-in functions may return wrong
           * results because it applies its internal DST rules. The DST rules around the world change
           * very frequently, and the current valid rule is not always valid in previous years though.
           * We work around this problem building a new Date object which has its internal UTC
           * representation with the local date and time.
           * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
           *    timeZone set to 'utc' to work fine.
           * @param date Date from which we want to get the string representation according to dtf
           * @returns A Date object with its UTC representation based on the passed in date info
           */

        }, {
          key: "_format",
          value: function _format(dtf, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
            var d = new Date();
            d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
            return dtf.format(d);
          }
        }]);

        return NativeDateAdapter;
      }(DateAdapter);

      NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
        return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
      };

      NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NativeDateAdapter,
        factory: NativeDateAdapter.ɵfac
      });

      NativeDateAdapter.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_DATE_LOCALE]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_NATIVE_DATE_FORMATS = {
        parse: {
          dateInput: null
        },
        display: {
          dateInput: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },
          monthYearLabel: {
            year: 'numeric',
            month: 'short'
          },
          dateA11yLabel: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          monthYearA11yLabel: {
            year: 'numeric',
            month: 'long'
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var NativeDateModule = function NativeDateModule() {
        _classCallCheck(this, NativeDateModule);
      };

      NativeDateModule.ɵfac = function NativeDateModule_Factory(t) {
        return new (t || NativeDateModule)();
      };

      NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NativeDateModule
      });
      NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }],
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            providers: [{
              provide: DateAdapter,
              useClass: NativeDateAdapter
            }]
          }]
        }], null, null);
      })();

      var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

      var MatNativeDateModule = function MatNativeDateModule() {
        _classCallCheck(this, MatNativeDateModule);
      };

      MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) {
        return new (t || MatNativeDateModule)();
      };

      MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatNativeDateModule
      });
      MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }],
        imports: [[NativeDateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
          imports: [NativeDateModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [NativeDateModule],
            providers: [{
              provide: MAT_DATE_FORMATS,
              useValue: ɵ0$1
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Error state matcher that matches when a control is invalid and dirty. */


      var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
        function ShowOnDirtyErrorStateMatcher() {
          _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
        }

        _createClass(ShowOnDirtyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.dirty || form && form.submitted));
          }
        }]);

        return ShowOnDirtyErrorStateMatcher;
      }();

      ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
        return new (t || ShowOnDirtyErrorStateMatcher)();
      };

      ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowOnDirtyErrorStateMatcher,
        factory: ShowOnDirtyErrorStateMatcher.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /** Provider that defines how form controls behave with regards to displaying error messages. */


      var ErrorStateMatcher = /*#__PURE__*/function () {
        function ErrorStateMatcher() {
          _classCallCheck(this, ErrorStateMatcher);
        }

        _createClass(ErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.touched || form && form.submitted));
          }
        }]);

        return ErrorStateMatcher;
      }();

      ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
        return new (t || ErrorStateMatcher)();
      };

      ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ErrorStateMatcher_Factory() {
          return new ErrorStateMatcher();
        },
        token: ErrorStateMatcher,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shared directive to count lines inside a text area, such as a list item.
       * Line elements can be extracted with a @ContentChildren(MatLine) query, then
       * counted by checking the query list's length.
       */


      var MatLine = function MatLine() {
        _classCallCheck(this, MatLine);
      };

      MatLine.ɵfac = function MatLine_Factory(t) {
        return new (t || MatLine)();
      };

      MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-line], [matLine]',
            host: {
              'class': 'mat-line'
            }
          }]
        }], null, null);
      })();
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * @docs-private
       */


      function setLines(lines, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
        // Note: doesn't need to unsubscribe, because `changes`
        // gets completed by Angular when the view is destroyed.
        lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(lines)).subscribe(function (_ref) {
          var length = _ref.length;
          setClass(element, "".concat(prefix, "-2-line"), false);
          setClass(element, "".concat(prefix, "-3-line"), false);
          setClass(element, "".concat(prefix, "-multi-line"), false);

          if (length === 2 || length === 3) {
            setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
          } else if (length > 3) {
            setClass(element, "".concat(prefix, "-multi-line"), true);
          }
        });
      }
      /** Adds or removes a class from an element. */


      function setClass(element, className, isAdd) {
        var classList = element.nativeElement.classList;
        isAdd ? classList.add(className) : classList.remove(className);
      }

      var MatLineModule = function MatLineModule() {
        _classCallCheck(this, MatLineModule);
      };

      MatLineModule.ɵfac = function MatLineModule_Factory(t) {
        return new (t || MatLineModule)();
      };

      MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatLineModule
      });
      MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatCommonModule], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
          declarations: [MatLine],
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatLine, MatCommonModule],
            declarations: [MatLine]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to a previously launched ripple element.
       */


      var RippleRef = /*#__PURE__*/function () {
        function RippleRef(_renderer,
        /** Reference to the ripple HTML element. */
        element,
        /** Ripple configuration used for the ripple. */
        config) {
          _classCallCheck(this, RippleRef);

          this._renderer = _renderer;
          this.element = element;
          this.config = config;
          /** Current state of the ripple. */

          this.state = 3
          /* HIDDEN */
          ;
        }
        /** Fades out the ripple element. */


        _createClass(RippleRef, [{
          key: "fadeOut",
          value: function fadeOut() {
            this._renderer.fadeOutRipple(this);
          }
        }]);

        return RippleRef;
      }();
      /**
       * Default ripple animation configuration for ripples without an explicit
       * animation config specified.
       */


      var defaultRippleAnimationConfig = {
        enterDuration: 450,
        exitDuration: 400
      };
      /**
       * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
       * events to avoid synthetic mouse events.
       */

      var ignoreMouseEventsTimeout = 800;
      /** Options that apply to all the event listeners that are bound by the ripple renderer. */

      var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Events that signal that the pointer is down. */

      var pointerDownEvents = ['mousedown', 'touchstart'];
      /** Events that signal that the pointer is up. */

      var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      /**
       * Helper service that performs DOM manipulations. Not intended to be used outside this module.
       * The constructor takes a reference to the ripple directive's host element and a map of DOM
       * event handlers to be installed on the element that triggers ripple animations.
       * This will eventually become a custom renderer once Angular support exists.
       * @docs-private
       */

      var RippleRenderer = /*#__PURE__*/function () {
        function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
          _classCallCheck(this, RippleRenderer);

          this._target = _target;
          this._ngZone = _ngZone;
          /** Whether the pointer is currently down or not. */

          this._isPointerDown = false;
          /** Set of currently active ripple references. */

          this._activeRipples = new Set();
          /** Whether pointer-up event listeners have been registered. */

          this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

          if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
          }
        }
        /**
         * Fades in a ripple at the given coordinates.
         * @param x Coordinate within the element, along the X axis at which to start the ripple.
         * @param y Coordinate within the element, along the Y axis at which to start the ripple.
         * @param config Extra ripple options.
         */


        _createClass(RippleRenderer, [{
          key: "fadeInRipple",
          value: function fadeInRipple(x, y) {
            var _this32 = this;

            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

            if (config.centered) {
              x = containerRect.left + containerRect.width / 2;
              y = containerRect.top + containerRect.height / 2;
            }

            var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
            var offsetX = x - containerRect.left;
            var offsetY = y - containerRect.top;
            var duration = animationConfig.enterDuration;
            var ripple = document.createElement('div');
            ripple.classList.add('mat-ripple-element');
            ripple.style.left = "".concat(offsetX - radius, "px");
            ripple.style.top = "".concat(offsetY - radius, "px");
            ripple.style.height = "".concat(radius * 2, "px");
            ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
            // set, the default color will be applied through the ripple theme styles.

            if (config.color != null) {
              ripple.style.backgroundColor = config.color;
            }

            ripple.style.transitionDuration = "".concat(duration, "ms");

            this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
            // ripple elements. This is critical because then the `scale` would not animate properly.


            enforceStyleRecalculation(ripple);
            ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

            var rippleRef = new RippleRef(this, ripple, config);
            rippleRef.state = 0
            /* FADING_IN */
            ; // Add the ripple reference to the list of all active ripples.

            this._activeRipples.add(rippleRef);

            if (!config.persistent) {
              this._mostRecentTransientRipple = rippleRef;
            } // Wait for the ripple element to be completely faded in.
            // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


            this._runTimeoutOutsideZone(function () {
              var isMostRecentTransientRipple = rippleRef === _this32._mostRecentTransientRipple;
              rippleRef.state = 1
              /* VISIBLE */
              ; // When the timer runs out while the user has kept their pointer down, we want to
              // keep only the persistent ripples and the latest transient ripple. We do this,
              // because we don't want stacked transient ripples to appear after their enter
              // animation has finished.

              if (!config.persistent && (!isMostRecentTransientRipple || !_this32._isPointerDown)) {
                rippleRef.fadeOut();
              }
            }, duration);

            return rippleRef;
          }
          /** Fades out a ripple reference. */

        }, {
          key: "fadeOutRipple",
          value: function fadeOutRipple(rippleRef) {
            var wasActive = this._activeRipples["delete"](rippleRef);

            if (rippleRef === this._mostRecentTransientRipple) {
              this._mostRecentTransientRipple = null;
            } // Clear out the cached bounding rect if we have no more ripples.


            if (!this._activeRipples.size) {
              this._containerRect = null;
            } // For ripples that are not active anymore, don't re-run the fade-out animation.


            if (!wasActive) {
              return;
            }

            var rippleEl = rippleRef.element;
            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
            rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
            rippleEl.style.opacity = '0';
            rippleRef.state = 2
            /* FADING_OUT */
            ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

            this._runTimeoutOutsideZone(function () {
              rippleRef.state = 3
              /* HIDDEN */
              ;
              rippleEl.parentNode.removeChild(rippleEl);
            }, animationConfig.exitDuration);
          }
          /** Fades out all currently active ripples. */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._activeRipples.forEach(function (ripple) {
              return ripple.fadeOut();
            });
          }
          /** Sets up the trigger event listeners */

        }, {
          key: "setupTriggerEvents",
          value: function setupTriggerEvents(elementOrElementRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);

            if (!element || element === this._triggerElement) {
              return;
            } // Remove all previously registered event listeners from the trigger element.


            this._removeTriggerEvents();

            this._triggerElement = element;

            this._registerEvents(pointerDownEvents);
          }
          /**
           * Handles all registered events.
           * @docs-private
           */

        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (event.type === 'mousedown') {
              this._onMousedown(event);
            } else if (event.type === 'touchstart') {
              this._onTouchStart(event);
            } else {
              this._onPointerUp();
            } // If pointer-up events haven't been registered yet, do so now.
            // We do this on-demand in order to reduce the total number of event listeners
            // registered by the ripples, which speeds up the rendering time for large UIs.


            if (!this._pointerUpEventsRegistered) {
              this._registerEvents(pointerUpEvents);

              this._pointerUpEventsRegistered = true;
            }
          }
          /** Function being called whenever the trigger is being pressed using mouse. */

        }, {
          key: "_onMousedown",
          value: function _onMousedown(event) {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.
            var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
            var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
              this._isPointerDown = true;
              this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
          }
          /** Function being called whenever the trigger is being pressed using touch. */

        }, {
          key: "_onTouchStart",
          value: function _onTouchStart(event) {
            if (!this._target.rippleDisabled && !Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeTouchstartFromScreenReader"])(event)) {
              // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
              // events will launch a second ripple if we don't ignore mouse events for a specific
              // time after a touchstart event.
              this._lastTouchStartEvent = Date.now();
              this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
              // their finger down, but used another finger to tap the element again.

              var touches = event.changedTouches;

              for (var i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
              }
            }
          }
          /** Function being called whenever the trigger is being released. */

        }, {
          key: "_onPointerUp",
          value: function _onPointerUp() {
            if (!this._isPointerDown) {
              return;
            }

            this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

            this._activeRipples.forEach(function (ripple) {
              // By default, only ripples that are completely visible will fade out on pointer release.
              // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
              var isVisible = ripple.state === 1
              /* VISIBLE */
              || ripple.config.terminateOnPointerUp && ripple.state === 0
              /* FADING_IN */
              ;

              if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
              }
            });
          }
          /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */

        }, {
          key: "_runTimeoutOutsideZone",
          value: function _runTimeoutOutsideZone(fn) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this._ngZone.runOutsideAngular(function () {
              return setTimeout(fn, delay);
            });
          }
          /** Registers event listeners for a given list of events. */

        }, {
          key: "_registerEvents",
          value: function _registerEvents(eventTypes) {
            var _this33 = this;

            this._ngZone.runOutsideAngular(function () {
              eventTypes.forEach(function (type) {
                _this33._triggerElement.addEventListener(type, _this33, passiveEventOptions);
              });
            });
          }
          /** Removes previously registered event listeners from the trigger element. */

        }, {
          key: "_removeTriggerEvents",
          value: function _removeTriggerEvents() {
            var _this34 = this;

            if (this._triggerElement) {
              pointerDownEvents.forEach(function (type) {
                _this34._triggerElement.removeEventListener(type, _this34, passiveEventOptions);
              });

              if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach(function (type) {
                  _this34._triggerElement.removeEventListener(type, _this34, passiveEventOptions);
                });
              }
            }
          }
        }]);

        return RippleRenderer;
      }();
      /** Enforces a style recalculation of a DOM element by computing its styles. */


      function enforceStyleRecalculation(element) {
        // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
        // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
        // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        window.getComputedStyle(element).getPropertyValue('opacity');
      }
      /**
       * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
       */


      function distanceToFurthestCorner(x, y, rect) {
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to specify the global ripple options. */


      var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

      var MatRipple = /*#__PURE__*/function () {
        function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
          _classCallCheck(this, MatRipple);

          this._elementRef = _elementRef;
          this._animationMode = _animationMode;
          /**
           * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
           * will be the distance from the center of the ripple to the furthest corner of the host element's
           * bounding rectangle.
           */

          this.radius = 0;
          this._disabled = false;
          /** Whether ripple directive is initialized and the input bindings are set. */

          this._isInitialized = false;
          this._globalOptions = globalOptions || {};
          this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        }
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         */


        _createClass(MatRipple, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = value;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * The element that triggers the ripple when click events are received.
           * Defaults to the directive's host element.
           */

        }, {
          key: "trigger",
          get: function get() {
            return this._trigger || this._elementRef.nativeElement;
          },
          set: function set(trigger) {
            this._trigger = trigger;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents();
          }
          /** Fades out all currently showing ripple elements. */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._rippleRenderer.fadeOutAll();
          }
          /**
           * Ripple configuration from the directive's input values.
           * @docs-private Implemented as part of RippleTarget
           */

        }, {
          key: "rippleConfig",
          get: function get() {
            return {
              centered: this.centered,
              radius: this.radius,
              color: this.color,
              animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
                enterDuration: 0,
                exitDuration: 0
              } : {}), this.animation),
              terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
            };
          }
          /**
           * Whether ripples on pointer-down are disabled or not.
           * @docs-private Implemented as part of RippleTarget
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || !!this._globalOptions.disabled;
          }
          /** Sets up the trigger event listeners if ripples are enabled. */

        }, {
          key: "_setupTriggerEventsIfEnabled",
          value: function _setupTriggerEventsIfEnabled() {
            if (!this.disabled && this._isInitialized) {
              this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
          }
          /** Launches a manual ripple at the specified coordinated or just by the ripple config. */

        }, {
          key: "launch",
          value: function launch(configOrX) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var config = arguments.length > 2 ? arguments[2] : undefined;

            if (typeof configOrX === 'number') {
              return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
            } else {
              return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
            }
          }
        }]);

        return MatRipple;
      }();

      MatRipple.ɵfac = function MatRipple_Factory(t) {
        return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
          }
        },
        inputs: {
          radius: ["matRippleRadius", "radius"],
          disabled: ["matRippleDisabled", "disabled"],
          trigger: ["matRippleTrigger", "trigger"],
          color: ["matRippleColor", "color"],
          unbounded: ["matRippleUnbounded", "unbounded"],
          centered: ["matRippleCentered", "centered"],
          animation: ["matRippleAnimation", "animation"]
        },
        exportAs: ["matRipple"]
      });

      MatRipple.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatRipple.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-ripple], [matRipple]',
            exportAs: 'matRipple',
            host: {
              'class': 'mat-ripple',
              '[class.mat-ripple-unbounded]': 'unbounded'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleRadius']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleTrigger']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleColor']
          }],
          unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleUnbounded']
          }],
          centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleCentered']
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleAnimation']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatRippleModule = function MatRippleModule() {
        _classCallCheck(this, MatRippleModule);
      };

      MatRippleModule.ɵfac = function MatRippleModule_Factory(t) {
        return new (t || MatRippleModule)();
      };

      MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRippleModule
      });
      MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
          declarations: function declarations() {
            return [MatRipple];
          },
          imports: function imports() {
            return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          },
          exports: function exports() {
            return [MatRipple, MatCommonModule];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            exports: [MatRipple, MatCommonModule],
            declarations: [MatRipple]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Component that shows a simplified checkbox without including any kind of "real" checkbox.
       * Meant to be used when the checkbox is purely decorative and a large number of them will be
       * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
       * Note that theming is meant to be handled by the parent element, e.g.
       * `mat-primary .mat-pseudo-checkbox`.
       *
       * Note that this component will be completely invisible to screen-reader users. This is *not*
       * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
       * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
       * of more complex components that appropriately handle selected / checked state.
       * @docs-private
       */


      var MatPseudoCheckbox = function MatPseudoCheckbox(_animationMode) {
        _classCallCheck(this, MatPseudoCheckbox);

        this._animationMode = _animationMode;
        /** Display state of the checkbox. */

        this.state = 'unchecked';
        /** Whether the checkbox is disabled. */

        this.disabled = false;
      };

      MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
        return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 8,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          state: "state",
          disabled: "disabled"
        },
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) {},
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatPseudoCheckbox.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPseudoCheckbox.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'mat-pseudo-checkbox',
            template: '',
            host: {
              'class': 'mat-pseudo-checkbox',
              '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
              '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
              '[class.mat-pseudo-checkbox-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
        _classCallCheck(this, MatPseudoCheckboxModule);
      };

      MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) {
        return new (t || MatPseudoCheckboxModule)();
      };

      MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPseudoCheckboxModule
      });
      MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatCommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
          declarations: [MatPseudoCheckbox],
          imports: [MatCommonModule],
          exports: [MatPseudoCheckbox]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatPseudoCheckbox],
            declarations: [MatPseudoCheckbox]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide the parent component to options.
       */


      var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Notes on the accessibility pattern used for `mat-optgroup`.
      // The option group has two different "modes": regular and inert. The regular mode uses the
      // recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
      // pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
      // under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
      // there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
      // VoiceOver on Safari won't read it out.
      // We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
      // removed from the group, and we get the screen reader to read out the group label by mirroring it
      // inside an invisible element in the option. This is sub-optimal, because the screen reader will
      // repeat the group label on each navigation, whereas the default pattern only reads the group when
      // the user enters a new group. The following alternate approaches were considered:
      // 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
      //    when the text will be read out so sometimes it comes in too late or never if the user
      //    navigates quickly.
      // 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
      //    won't read out the description at all.
      // 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
      //     doesn't read out the text at all. Furthermore, on
      // Boilerplate for applying mixins to MatOptgroup.

      /** @docs-private */

      var MatOptgroupBase = function MatOptgroupBase() {
        _classCallCheck(this, MatOptgroupBase);
      };

      var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.


      var _uniqueOptgroupIdCounter = 0;

      var _MatOptgroupBase = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
        _inherits(_MatOptgroupBase, _MatOptgroupMixinBase2);

        var _super21 = _createSuper(_MatOptgroupBase);

        function _MatOptgroupBase(parent) {
          var _this35;

          _classCallCheck(this, _MatOptgroupBase);

          var _a;

          _this35 = _super21.call(this);
          /** Unique id for the underlying label. */

          _this35._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
          _this35._inert = (_a = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _a !== void 0 ? _a : false;
          return _this35;
        }

        return _MatOptgroupBase;
      }(_MatOptgroupMixinBase);

      _MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
        return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
      };

      _MatOptgroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatOptgroupBase,
        inputs: {
          label: "label"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatOptgroupBase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      _MatOptgroupBase.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptgroupBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
       * alternative token to the actual `MatOptgroup` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatOptgroup');
      /**
       * Component that is used to group instances of `mat-option`.
       */

      var MatOptgroup = /*#__PURE__*/function (_MatOptgroupBase2) {
        _inherits(MatOptgroup, _MatOptgroupBase2);

        var _super22 = _createSuper(MatOptgroup);

        function MatOptgroup() {
          _classCallCheck(this, MatOptgroup);

          return _super22.apply(this, arguments);
        }

        return MatOptgroup;
      }(_MatOptgroupBase);

      MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
        return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
      };

      MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: [1, "mat-optgroup"],
        hostVars: 5,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled"
        },
        exportAs: ["matOptgroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_OPTGROUP,
          useExisting: MatOptgroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
        template: function MatOptgroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
          }
        },
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatOptgroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-optgroup',
            exportAs: 'matOptgroup',
            template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            host: {
              'class': 'mat-optgroup',
              '[attr.role]': '_inert ? null : "group"',
              '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
              '[attr.aria-labelledby]': '_inert ? null : _labelId',
              '[class.mat-optgroup-disabled]': 'disabled'
            },
            providers: [{
              provide: MAT_OPTGROUP,
              useExisting: MatOptgroup
            }],
            styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Option IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _uniqueIdCounter = 0;
      /** Event object emitted by MatOption when selected or deselected. */

      var MatOptionSelectionChange = function MatOptionSelectionChange(
      /** Reference to the option that emitted the event. */
      source) {
        var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, MatOptionSelectionChange);

        this.source = source;
        this.isUserInput = isUserInput;
      };

      var _MatOptionBase = /*#__PURE__*/function () {
        function _MatOptionBase(_element, _changeDetectorRef, _parent, group) {
          _classCallCheck(this, _MatOptionBase);

          this._element = _element;
          this._changeDetectorRef = _changeDetectorRef;
          this._parent = _parent;
          this.group = group;
          this._selected = false;
          this._active = false;
          this._disabled = false;
          this._mostRecentViewValue = '';
          /** The unique ID of the option. */

          this.id = "mat-option-".concat(_uniqueIdCounter++);
          /** Event emitted when the option is selected or deselected. */
          // tslint:disable-next-line:no-output-on-prefix

          this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the state of the option changes and any parents have to be notified. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /** Whether the wrapping component is in multiple selection mode. */


        _createClass(_MatOptionBase, [{
          key: "multiple",
          get: function get() {
            return this._parent && this._parent.multiple;
          }
          /** Whether or not the option is currently selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /** Whether the option is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this.group && this.group.disabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether ripples for the option are disabled. */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._parent && this._parent.disableRipple;
          }
          /**
           * Whether or not the option is currently active and ready to be selected.
           * An active option displays styles as if it is focused, but the
           * focus is actually retained somewhere else. This comes in handy
           * for components like autocomplete where focus must remain on the input.
           */

        }, {
          key: "active",
          get: function get() {
            return this._active;
          }
          /**
           * The displayed value of the option. It is necessary to show the selected option in the
           * select's trigger.
           */

        }, {
          key: "viewValue",
          get: function get() {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
          }
          /** Selects the option. */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /** Deselects the option. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /** Sets focus onto this option. */

        }, {
          key: "focus",
          value: function focus(_origin, options) {
            // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
            // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
            var element = this._getHostElement();

            if (typeof element.focus === 'function') {
              element.focus(options);
            }
          }
          /**
           * This method sets display styles on the option to make it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           */

        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            if (!this._active) {
              this._active = true;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * This method removes display styles on the option that made it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           */

        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            if (this._active) {
              this._active = false;

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Gets the label to be used when determining whether the option should be focused. */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.viewValue;
          }
          /** Ensures the option is selected when activated from the keyboard. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


              event.preventDefault();
            }
          }
          /**
           * `Selects the option while indicating the selection came from the user. Used to
           * determine if the select's view -> model callback should be invoked.`
           */

        }, {
          key: "_selectViaInteraction",
          value: function _selectViaInteraction() {
            if (!this.disabled) {
              this._selected = this.multiple ? !this._selected : true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent(true);
            }
          }
          /**
           * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
           * attribute from single-selection, unselected options. Including the `aria-selected="false"`
           * attributes adds a significant amount of noise to screen-reader users without providing useful
           * information.
           */

        }, {
          key: "_getAriaSelected",
          value: function _getAriaSelected() {
            return this.selected || (this.multiple ? false : null);
          }
          /** Returns the correct tabindex for the option depending on disabled state. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /** Gets the host DOM element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            // Since parent components could be using the option's label to display the selected values
            // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
            // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
            // relatively cheap, however we still limit them only to selected options in order to avoid
            // hitting the DOM too often.
            if (this._selected) {
              var viewValue = this.viewValue;

              if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;

                this._stateChanges.next();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
          /** Emits the selection change event. */

        }, {
          key: "_emitSelectionChangeEvent",
          value: function _emitSelectionChangeEvent() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
          }
        }]);

        return _MatOptionBase;
      }();

      _MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
        return new (t || _MatOptionBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatOptgroupBase));
      };

      _MatOptionBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatOptionBase,
        inputs: {
          id: "id",
          disabled: "disabled",
          value: "value"
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        }
      });

      _MatOptionBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined
        }, {
          type: _MatOptgroupBase
        }];
      };

      _MatOptionBase.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptionBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined
          }, {
            type: _MatOptgroupBase
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Single option inside of a `<mat-select>` element.
       */


      var MatOption = /*#__PURE__*/function (_MatOptionBase2) {
        _inherits(MatOption, _MatOptionBase2);

        var _super23 = _createSuper(MatOption);

        function MatOption(element, changeDetectorRef, parent, group) {
          _classCallCheck(this, MatOption);

          return _super23.call(this, element, changeDetectorRef, parent, group);
        }

        return MatOption;
      }(_MatOptionBase);

      MatOption.ɵfac = function MatOption_Factory(t) {
        return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
      };

      MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOption,
        selectors: [["mat-option"]],
        hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
        hostVars: 12,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
              return ctx._selectViaInteraction();
            })("keydown", function MatOption_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
          }
        },
        exportAs: ["matOption"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c2,
        decls: 5,
        vars: 4,
        consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
        template: function MatOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox],
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTGROUP]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-option',
            exportAs: 'matOption',
            host: {
              'role': 'option',
              '[attr.tabindex]': '_getTabIndex()',
              '[class.mat-selected]': 'selected',
              '[class.mat-option-multiple]': 'multiple',
              '[class.mat-active]': 'active',
              '[id]': 'id',
              '[attr.aria-selected]': '_getAriaSelected()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[class.mat-option-disabled]': 'disabled',
              '(click)': '_selectViaInteraction()',
              '(keydown)': '_handleKeydown($event)',
              'class': 'mat-option mat-focus-indicator'
            },
            template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }]
          }, {
            type: MatOptgroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTGROUP]
            }]
          }];
        }, null);
      })();
      /**
       * Counts the amount of option group labels that precede the specified option.
       * @param optionIndex Index of the option at which to start counting.
       * @param options Flat list of all of the options.
       * @param optionGroups Flat list of all of the option groups.
       * @docs-private
       */


      function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
        if (optionGroups.length) {
          var optionsArray = options.toArray();
          var groups = optionGroups.toArray();
          var groupCounter = 0;

          for (var i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
              groupCounter++;
            }
          }

          return groupCounter;
        }

        return 0;
      }
      /**
       * Determines the position to which to scroll a panel in order for an option to be into view.
       * @param optionOffset Offset of the option from the top of the panel.
       * @param optionHeight Height of the options.
       * @param currentScrollPosition Current scroll position of the panel.
       * @param panelHeight Height of the panel.
       * @docs-private
       */


      function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
        if (optionOffset < currentScrollPosition) {
          return optionOffset;
        }

        if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
          return Math.max(0, optionOffset - panelHeight + optionHeight);
        }

        return currentScrollPosition;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatOptionModule = function MatOptionModule() {
        _classCallCheck(this, MatOptionModule);
      };

      MatOptionModule.ɵfac = function MatOptionModule_Factory(t) {
        return new (t || MatOptionModule)();
      };

      MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatOptionModule
      });
      MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
          declarations: function declarations() {
            return [MatOption, MatOptgroup];
          },
          imports: function imports() {
            return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule];
          },
          exports: function exports() {
            return [MatOption, MatOptgroup];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule],
            exports: [MatOption, MatOptgroup],
            declarations: [MatOption, MatOptgroup]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=core.js.map

      /***/

    },

    /***/
    "FtGj":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
      \*********************************************************************/

    /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PERIOD, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

    /***/
    function FtGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALT", function () {
        return ALT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
        return APOSTROPHE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
        return AT_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
        return BACKSLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
        return BACKSPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
        return CAPS_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
        return CLOSE_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMA", function () {
        return COMMA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
        return CONTEXT_MENU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
        return CONTROL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DASH", function () {
        return DASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE", function () {
        return DELETE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
        return DOWN_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
        return EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "END", function () {
        return END;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENTER", function () {
        return ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
        return EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
        return ESCAPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F1", function () {
        return F1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F10", function () {
        return F10;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F11", function () {
        return F11;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F12", function () {
        return F12;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F2", function () {
        return F2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F3", function () {
        return F3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F4", function () {
        return F4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F5", function () {
        return F5;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F6", function () {
        return F6;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F7", function () {
        return F7;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F8", function () {
        return F8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F9", function () {
        return F9;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
        return FF_EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
        return FF_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
        return FF_MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
        return FF_SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
        return FF_VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
        return FF_VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
        return FIRST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIVE", function () {
        return FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOUR", function () {
        return FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOME", function () {
        return HOME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "INSERT", function () {
        return INSERT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
        return LAST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
        return LEFT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
        return MAC_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
        return MAC_META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
        return MAC_WK_CMD_LEFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
        return MAC_WK_CMD_RIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "META", function () {
        return META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MUTE", function () {
        return MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NINE", function () {
        return NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
        return NUMPAD_DIVIDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
        return NUMPAD_EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
        return NUMPAD_FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
        return NUMPAD_FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
        return NUMPAD_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
        return NUMPAD_MULTIPLY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
        return NUMPAD_NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
        return NUMPAD_ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
        return NUMPAD_PERIOD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
        return NUMPAD_PLUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
        return NUMPAD_SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
        return NUMPAD_SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
        return NUMPAD_THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
        return NUMPAD_TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
        return NUMPAD_ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
        return NUM_CENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
        return NUM_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ONE", function () {
        return ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
        return OPEN_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
        return PAGE_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
        return PAGE_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
        return PAUSE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERIOD", function () {
        return PERIOD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
        return PLUS_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
        return PRINT_SCREEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
        return QUESTION_MARK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
        return RIGHT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
        return SCROLL_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
        return SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
        return SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
        return SHIFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
        return SINGLE_QUOTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIX", function () {
        return SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SLASH", function () {
        return SLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPACE", function () {
        return SPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TAB", function () {
        return TAB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THREE", function () {
        return THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILDE", function () {
        return TILDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TWO", function () {
        return TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
        return UP_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
        return VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
        return VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZERO", function () {
        return ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
        return hasModifierKey;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAC_ENTER = 3;
      var BACKSPACE = 8;
      var TAB = 9;
      var NUM_CENTER = 12;
      var ENTER = 13;
      var SHIFT = 16;
      var CONTROL = 17;
      var ALT = 18;
      var PAUSE = 19;
      var CAPS_LOCK = 20;
      var ESCAPE = 27;
      var SPACE = 32;
      var PAGE_UP = 33;
      var PAGE_DOWN = 34;
      var END = 35;
      var HOME = 36;
      var LEFT_ARROW = 37;
      var UP_ARROW = 38;
      var RIGHT_ARROW = 39;
      var DOWN_ARROW = 40;
      var PLUS_SIGN = 43;
      var PRINT_SCREEN = 44;
      var INSERT = 45;
      var DELETE = 46;
      var ZERO = 48;
      var ONE = 49;
      var TWO = 50;
      var THREE = 51;
      var FOUR = 52;
      var FIVE = 53;
      var SIX = 54;
      var SEVEN = 55;
      var EIGHT = 56;
      var NINE = 57;
      var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

      var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

      var QUESTION_MARK = 63;
      var AT_SIGN = 64;
      var A = 65;
      var B = 66;
      var C = 67;
      var D = 68;
      var E = 69;
      var F = 70;
      var G = 71;
      var H = 72;
      var I = 73;
      var J = 74;
      var K = 75;
      var L = 76;
      var M = 77;
      var N = 78;
      var O = 79;
      var P = 80;
      var Q = 81;
      var R = 82;
      var S = 83;
      var T = 84;
      var U = 85;
      var V = 86;
      var W = 87;
      var X = 88;
      var Y = 89;
      var Z = 90;
      var META = 91; // WIN_KEY_LEFT

      var MAC_WK_CMD_LEFT = 91;
      var MAC_WK_CMD_RIGHT = 93;
      var CONTEXT_MENU = 93;
      var NUMPAD_ZERO = 96;
      var NUMPAD_ONE = 97;
      var NUMPAD_TWO = 98;
      var NUMPAD_THREE = 99;
      var NUMPAD_FOUR = 100;
      var NUMPAD_FIVE = 101;
      var NUMPAD_SIX = 102;
      var NUMPAD_SEVEN = 103;
      var NUMPAD_EIGHT = 104;
      var NUMPAD_NINE = 105;
      var NUMPAD_MULTIPLY = 106;
      var NUMPAD_PLUS = 107;
      var NUMPAD_MINUS = 109;
      var NUMPAD_PERIOD = 110;
      var NUMPAD_DIVIDE = 111;
      var F1 = 112;
      var F2 = 113;
      var F3 = 114;
      var F4 = 115;
      var F5 = 116;
      var F6 = 117;
      var F7 = 118;
      var F8 = 119;
      var F9 = 120;
      var F10 = 121;
      var F11 = 122;
      var F12 = 123;
      var NUM_LOCK = 144;
      var SCROLL_LOCK = 145;
      var FIRST_MEDIA = 166;
      var FF_MINUS = 173;
      var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

      var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

      var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

      var FF_MUTE = 181;
      var FF_VOLUME_DOWN = 182;
      var LAST_MEDIA = 183;
      var FF_VOLUME_UP = 183;
      var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

      var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

      var COMMA = 188;
      var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

      var PERIOD = 190;
      var SLASH = 191;
      var APOSTROPHE = 192;
      var TILDE = 192;
      var OPEN_SQUARE_BRACKET = 219;
      var BACKSLASH = 220;
      var CLOSE_SQUARE_BRACKET = 221;
      var SINGLE_QUOTE = 222;
      var MAC_META = 224;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Checks whether a modifier key is pressed.
       * @param event Event to be checked.
       */

      function hasModifierKey(event) {
        for (var _len9 = arguments.length, modifiers = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          modifiers[_key9 - 1] = arguments[_key9];
        }

        if (modifiers.length) {
          return modifiers.some(function (modifier) {
            return event[modifier];
          });
        }

        return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=keycodes.js.map

      /***/

    },

    /***/
    "GU7r":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
      \**********************************************************************/

    /*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */

    /***/
    function GU7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
        return CdkObserveContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
        return ContentObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
        return MutationObserverFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
        return ObserversModule;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
       * @docs-private
       */


      var MutationObserverFactory = /*#__PURE__*/function () {
        function MutationObserverFactory() {
          _classCallCheck(this, MutationObserverFactory);
        }

        _createClass(MutationObserverFactory, [{
          key: "create",
          value: function create(callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
          }
        }]);

        return MutationObserverFactory;
      }();

      MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
        return new (t || MutationObserverFactory)();
      };

      MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MutationObserverFactory_Factory() {
          return new MutationObserverFactory();
        },
        token: MutationObserverFactory,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** An injectable service that allows watching elements for changes to their content. */


      var ContentObserver = /*#__PURE__*/function () {
        function ContentObserver(_mutationObserverFactory) {
          _classCallCheck(this, ContentObserver);

          this._mutationObserverFactory = _mutationObserverFactory;
          /** Keeps track of the existing MutationObservers so they can be reused. */

          this._observedElements = new Map();
        }

        _createClass(ContentObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this36 = this;

            this._observedElements.forEach(function (_, element) {
              return _this36._cleanupObserver(element);
            });
          }
        }, {
          key: "observe",
          value: function observe(elementOrRef) {
            var _this37 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var stream = _this37._observeElement(element);

              var subscription = stream.subscribe(observer);
              return function () {
                subscription.unsubscribe();

                _this37._unobserveElement(element);
              };
            });
          }
          /**
           * Observes the given element by using the existing MutationObserver if available, or creating a
           * new one if not.
           */

        }, {
          key: "_observeElement",
          value: function _observeElement(element) {
            if (!this._observedElements.has(element)) {
              var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

              var observer = this._mutationObserverFactory.create(function (mutations) {
                return stream.next(mutations);
              });

              if (observer) {
                observer.observe(element, {
                  characterData: true,
                  childList: true,
                  subtree: true
                });
              }

              this._observedElements.set(element, {
                observer: observer,
                stream: stream,
                count: 1
              });
            } else {
              this._observedElements.get(element).count++;
            }

            return this._observedElements.get(element).stream;
          }
          /**
           * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
           * observing this element.
           */

        }, {
          key: "_unobserveElement",
          value: function _unobserveElement(element) {
            if (this._observedElements.has(element)) {
              this._observedElements.get(element).count--;

              if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
              }
            }
          }
          /** Clean up the underlying MutationObserver for the specified element. */

        }, {
          key: "_cleanupObserver",
          value: function _cleanupObserver(element) {
            if (this._observedElements.has(element)) {
              var _this$_observedElemen = this._observedElements.get(element),
                  observer = _this$_observedElemen.observer,
                  stream = _this$_observedElemen.stream;

              if (observer) {
                observer.disconnect();
              }

              stream.complete();

              this._observedElements["delete"](element);
            }
          }
        }]);

        return ContentObserver;
      }();

      ContentObserver.ɵfac = function ContentObserver_Factory(t) {
        return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
      };

      ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ContentObserver_Factory() {
          return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
        },
        token: ContentObserver,
        providedIn: "root"
      });

      ContentObserver.ctorParameters = function () {
        return [{
          type: MutationObserverFactory
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MutationObserverFactory
          }];
        }, null);
      })();
      /**
       * Directive that triggers a callback whenever the content of
       * its associated element has changed.
       */


      var CdkObserveContent = /*#__PURE__*/function () {
        function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
          _classCallCheck(this, CdkObserveContent);

          this._contentObserver = _contentObserver;
          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** Event emitted for each change in the element's content. */

          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._disabled = false;
          this._currentSubscription = null;
        }
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */


        _createClass(CdkObserveContent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
          }
          /** Debounce interval for emitting the changes. */

        }, {
          key: "debounce",
          get: function get() {
            return this._debounce;
          },
          set: function set(value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

            this._subscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this._currentSubscription && !this.disabled) {
              this._subscribe();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribe();
          }
        }, {
          key: "_subscribe",
          value: function _subscribe() {
            var _this38 = this;

            this._unsubscribe();

            var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
            // Consider brining it back inside the zone next time we're making breaking changes.
            // Bringing it back inside can cause things like infinite change detection loops and changed
            // after checked errors if people's code isn't handling it properly.


            this._ngZone.runOutsideAngular(function () {
              _this38._currentSubscription = (_this38.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this38.debounce)) : stream).subscribe(_this38.event);
            });
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var _a;

            (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return CdkObserveContent;
      }();

      CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
        return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: ["cdkObserveContentDisabled", "disabled"],
          debounce: "debounce"
        },
        outputs: {
          event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"]
      });

      CdkObserveContent.ctorParameters = function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkObserveContent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkObserveContent]',
            exportAs: 'cdkObserveContent'
          }]
        }], function () {
          return [{
            type: ContentObserver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkObserveContent']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkObserveContentDisabled']
          }],
          debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var ObserversModule = function ObserversModule() {
        _classCallCheck(this, ObserversModule);
      };

      ObserversModule.ɵfac = function ObserversModule_Factory(t) {
        return new (t || ObserversModule)();
      };

      ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ObserversModule
      });
      ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [MutationObserverFactory]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
          declarations: [CdkObserveContent],
          exports: [CdkObserveContent]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkObserveContent],
            declarations: [CdkObserveContent],
            providers: [MutationObserverFactory]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=observers.js.map

      /***/

    },

    /***/
    "N/qJ":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
      \**********************************************************************/

    /*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule, ɵangular_material_src_cdk_accordion_accordion_a */

    /***/
    function NQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () {
        return CdkAccordion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () {
        return CdkAccordionItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () {
        return CdkAccordionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_accordion_accordion_a", function () {
        return CDK_ACCORDION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion. */


      var nextId = 0;
      /**
       * Injection token that can be used to reference instances of `CdkAccordion`. It serves
       * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkAccordion');
      /**
       * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
       */

      var CdkAccordion = /*#__PURE__*/function () {
        function CdkAccordion() {
          _classCallCheck(this, CdkAccordion);

          /** Emits when the state of the accordion changes */
          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** Stream that emits true/false when openAll/closeAll is triggered. */

          this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** A readonly id value to use for unique selection coordination. */

          this.id = "cdk-accordion-".concat(nextId++);
          this._multi = false;
        }
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


        _createClass(CdkAccordion, [{
          key: "multi",
          get: function get() {
            return this._multi;
          },
          set: function set(multi) {
            this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi);
          }
          /** Opens all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "openAll",
          value: function openAll() {
            if (this._multi) {
              this._openCloseAllActions.next(true);
            }
          }
          /** Closes all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._openCloseAllActions.next(false);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._stateChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();

            this._openCloseAllActions.complete();
          }
        }]);

        return CdkAccordion;
      }();

      CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
        return new (t || CdkAccordion)();
      };

      CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: "multi"
        },
        exportAs: ["cdkAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_ACCORDION,
          useExisting: CdkAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      CdkAccordion.propDecorators = {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-accordion, [cdkAccordion]',
            exportAs: 'cdkAccordion',
            providers: [{
              provide: CDK_ACCORDION,
              useExisting: CdkAccordion
            }]
          }]
        }], function () {
          return [];
        }, {
          multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion item. */


      var nextId$1 = 0;
      var ɵ0 = undefined;
      /**
       * An basic directive expected to be extended and decorated as a component.  Sets up all
       * events and attributes needed to be managed by a CdkAccordion parent.
       */

      var CdkAccordionItem = /*#__PURE__*/function () {
        function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
          var _this39 = this;

          _classCallCheck(this, CdkAccordionItem);

          this.accordion = accordion;
          this._changeDetectorRef = _changeDetectorRef;
          this._expansionDispatcher = _expansionDispatcher;
          /** Subscription to openAll/closeAll events. */

          this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
          /** Event emitted every time the AccordionItem is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted every time the AccordionItem is opened. */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted when the AccordionItem is destroyed. */

          this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits whenever the expanded state of the accordion changes.
           * Primarily used to facilitate two-way binding.
           * @docs-private
           */

          this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** The unique AccordionItem id. */

          this.id = "cdk-accordion-child-".concat(nextId$1++);
          this._expanded = false;
          this._disabled = false;
          /** Unregister function for _expansionDispatcher. */

          this._removeUniqueSelectionListener = function () {};

          this._removeUniqueSelectionListener = _expansionDispatcher.listen(function (id, accordionId) {
            if (_this39.accordion && !_this39.accordion.multi && _this39.accordion.id === accordionId && _this39.id !== id) {
              _this39.expanded = false;
            }
          }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

          if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
          }
        }
        /** Whether the AccordionItem is expanded. */


        _createClass(CdkAccordionItem, [{
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(expanded) {
            expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

            if (this._expanded !== expanded) {
              this._expanded = expanded;
              this.expandedChange.emit(expanded);

              if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */

                var accordionId = this.accordion ? this.accordion.id : this.id;

                this._expansionDispatcher.notify(this.id, accordionId);
              } else {
                this.closed.emit();
              } // Ensures that the animation will run when the value is set outside of an `@Input`.
              // This includes cases like the open, close and toggle methods.


              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the AccordionItem is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(disabled) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled);
          }
          /** Emits an event for the accordion item being destroyed. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.opened.complete();
            this.closed.complete();
            this.destroyed.emit();
            this.destroyed.complete();

            this._removeUniqueSelectionListener();

            this._openCloseAllSubscription.unsubscribe();
          }
          /** Toggles the expanded state of the accordion item. */

        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.disabled) {
              this.expanded = !this.expanded;
            }
          }
          /** Sets the expanded state of the accordion item to false. */

        }, {
          key: "close",
          value: function close() {
            if (!this.disabled) {
              this.expanded = false;
            }
          }
          /** Sets the expanded state of the accordion item to true. */

        }, {
          key: "open",
          value: function open() {
            if (!this.disabled) {
              this.expanded = true;
            }
          }
        }, {
          key: "_subscribeToOpenCloseAllActions",
          value: function _subscribeToOpenCloseAllActions() {
            var _this40 = this;

            return this.accordion._openCloseAllActions.subscribe(function (expanded) {
              // Only change expanded state if item is enabled
              if (!_this40.disabled) {
                _this40.expanded = expanded;
              }
            });
          }
        }]);

        return CdkAccordionItem;
      }();

      CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
        return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]));
      };

      CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: "expanded",
          disabled: "disabled"
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: ɵ0
        }])]
      });

      CdkAccordionItem.ctorParameters = function () {
        return [{
          type: CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_ACCORDION]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
        }];
      };

      CdkAccordionItem.propDecorators = {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-accordion-item, [cdkAccordionItem]',
            exportAs: 'cdkAccordionItem',
            providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            {
              provide: CDK_ACCORDION,
              useValue: ɵ0
            }]
          }]
        }], function () {
          return [{
            type: CdkAccordion,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_ACCORDION]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
          }];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkAccordionModule = function CdkAccordionModule() {
        _classCallCheck(this, CdkAccordionModule);
      };

      CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(t) {
        return new (t || CdkAccordionModule)();
      };

      CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CdkAccordionModule
      });
      CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, {
          declarations: [CdkAccordion, CdkAccordionItem],
          exports: [CdkAccordion, CdkAccordionItem]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkAccordion, CdkAccordionItem],
            declarations: [CdkAccordion, CdkAccordionItem]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=accordion.js.map

      /***/

    },

    /***/
    "cH1L":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
      \*****************************************************************/

    /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

    /***/
    function cH1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
        return BidiModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
        return DIR_DOCUMENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dir", function () {
        return Dir;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Directionality", function () {
        return Directionality;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
        return DIR_DOCUMENT_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to inject the document into Directionality.
       * This is used so that the value can be faked in tests.
       *
       * We can't use the real document in tests because changing the real `dir` causes geometry-based
       * tests in Safari to fail.
       *
       * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
       * themselves use things like `querySelector` in test code.
       *
       * This token is defined in a separate file from Directionality as a workaround for
       * https://github.com/angular/angular/issues/22559
       *
       * @docs-private
       */


      var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
        providedIn: 'root',
        factory: DIR_DOCUMENT_FACTORY
      });
      /** @docs-private */

      function DIR_DOCUMENT_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The directionality (LTR / RTL) context for the application (or a subtree of it).
       * Exposes the current direction and a stream of direction changes.
       */


      var Directionality = /*#__PURE__*/function () {
        function Directionality(_document) {
          _classCallCheck(this, Directionality);

          /** The current 'ltr' or 'rtl' value. */
          this.value = 'ltr';
          /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
          }
        }

        _createClass(Directionality, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Directionality;
      }();

      Directionality.ɵfac = function Directionality_Factory(t) {
        return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
      };

      Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Directionality_Factory() {
          return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
        },
        token: Directionality,
        providedIn: "root"
      });

      Directionality.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [DIR_DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to listen for changes of direction of part of the DOM.
       *
       * Provides itself as Directionality such that descendant directives only need to ever inject
       * Directionality to get the closest direction.
       */


      var Dir = /*#__PURE__*/function () {
        function Dir() {
          _classCallCheck(this, Dir);

          /** Normalized direction that accounts for invalid/unsupported values. */
          this._dir = 'ltr';
          /** Whether the `value` has been set to its initial value. */

          this._isInitialized = false;
          /** Event emitted when the direction changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** @docs-private */


        _createClass(Dir, [{
          key: "dir",
          get: function get() {
            return this._dir;
          },
          set: function set(value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

            if (old !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /** Current layout direction of the element. */

        }, {
          key: "value",
          get: function get() {
            return this.dir;
          }
          /** Initialize once default value has been set. */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Dir;
      }();

      Dir.ɵfac = function Dir_Factory(t) {
        return new (t || Dir)();
      };

      Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
          }
        },
        inputs: {
          dir: "dir"
        },
        outputs: {
          change: "dirChange"
        },
        exportAs: ["dir"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: Directionality,
          useExisting: Dir
        }])]
      });
      Dir.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[dir]',
            providers: [{
              provide: Directionality,
              useExisting: Dir
            }],
            host: {
              '[attr.dir]': '_rawDir'
            },
            exportAs: 'dir'
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['dirChange']
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var BidiModule = function BidiModule() {
        _classCallCheck(this, BidiModule);
      };

      BidiModule.ɵfac = function BidiModule_Factory(t) {
        return new (t || BidiModule)();
      };

      BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BidiModule
      });
      BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
          declarations: [Dir],
          exports: [Dir]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [Dir],
            declarations: [Dir]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=bidi.js.map

      /***/

    },

    /***/
    "nLfN":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
      \*********************************************************************/

    /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

    /***/
    function nLfN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Platform", function () {
        return Platform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
        return PlatformModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
        return _getShadowRoot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
        return _supportsShadowDom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
        return getRtlScrollAxisType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
        return getSupportedInputTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
        return normalizePassiveListenerOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
        return supportsPassiveEventListeners;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
        return supportsScrollBehavior;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Whether the current platform supports the V8 Break Iterator. The V8 check
      // is necessary to detect all Blink based browsers.


      var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
      } catch (_a) {
        hasV8BreakIterator = false;
      }
      /**
       * Service to detect the current platform by comparing the userAgent strings and
       * checking browser-specific global properties.
       */


      var Platform = function Platform(_platformId) {
        _classCallCheck(this, Platform);

        this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention

        /** Whether the Angular application is being rendered in the browser. */

        this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */

        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */

        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

        /** Whether the current rendering engine is Blink. */

        this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.

        /** Whether the current rendering engine is WebKit. */

        this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */

        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.

        /** Whether the current browser is Firefox. */

        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.

        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.

        /** Whether the current browser is Safari. */

        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      };

      Platform.ɵfac = function Platform_Factory(t) {
        return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Platform_Factory() {
          return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
        },
        token: Platform,
        providedIn: "root"
      });

      Platform.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var PlatformModule = function PlatformModule() {
        _classCallCheck(this, PlatformModule);
      };

      PlatformModule.ɵfac = function PlatformModule_Factory(t) {
        return new (t || PlatformModule)();
      };

      PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PlatformModule
      });
      PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Cached result Set of input types support by the current browser. */


      var supportedInputTypes;
      /** Types of `<input>` that *might* be supported. */

      var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
      // first changing it to something else:
      // The specified value "" does not conform to the required format.
      // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
      'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
      /** @returns The input types supported by this browser. */

      function getSupportedInputTypes() {
        // Result is cached.
        if (supportedInputTypes) {
          return supportedInputTypes;
        } // We can't check if an input type is not supported until we're on the browser, so say that
        // everything is supported when not on the browser. We don't use `Platform` here since it's
        // just a helper function and can't inject it.


        if (typeof document !== 'object' || !document) {
          supportedInputTypes = new Set(candidateInputTypes);
          return supportedInputTypes;
        }

        var featureTestInput = document.createElement('input');
        supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
          featureTestInput.setAttribute('type', value);
          return featureTestInput.type === value;
        }));
        return supportedInputTypes;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Cached result of whether the user's browser supports passive event listeners. */


      var supportsPassiveEvents;
      /**
       * Checks whether the user's browser supports passive event listeners.
       * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
       */

      function supportsPassiveEventListeners() {
        if (supportsPassiveEvents == null && typeof window !== 'undefined') {
          try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
              get: function get() {
                return supportsPassiveEvents = true;
              }
            }));
          } finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
          }
        }

        return supportsPassiveEvents;
      }
      /**
       * Normalizes an `AddEventListener` object to something that can be passed
       * to `addEventListener` on any browser, no matter whether it supports the
       * `options` parameter.
       * @param options Object to be normalized.
       */


      function normalizePassiveListenerOptions(options) {
        return supportsPassiveEventListeners() ? options : !!options.capture;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


      var rtlScrollAxisType;
      /** Cached result of the check that indicates whether the browser supports scroll behaviors. */

      var scrollBehaviorSupported;
      /** Check whether the browser supports scroll behaviors. */

      function supportsScrollBehavior() {
        if (scrollBehaviorSupported == null) {
          // If we're not in the browser, it can't be supported. Also check for `Element`, because
          // some projects stub out the global `document` during SSR which can throw us off.
          if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
            scrollBehaviorSupported = false;
            return scrollBehaviorSupported;
          } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


          if ('scrollBehavior' in document.documentElement.style) {
            scrollBehaviorSupported = true;
          } else {
            // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
            // supported but it doesn't handle scroll behavior, or it has been polyfilled.
            var scrollToFunction = Element.prototype.scrollTo;

            if (scrollToFunction) {
              // We can detect if the function has been polyfilled by calling `toString` on it. Native
              // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
              // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
              // polyfilled functions as supporting scroll behavior.
              scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
            } else {
              scrollBehaviorSupported = false;
            }
          }
        }

        return scrollBehaviorSupported;
      }
      /**
       * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
       * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
       */


      function getRtlScrollAxisType() {
        // We can't check unless we're on the browser. Just assume 'normal' if we're not.
        if (typeof document !== 'object' || !document) {
          return 0
          /* NORMAL */
          ;
        }

        if (rtlScrollAxisType == null) {
          // Create a 1px wide scrolling container and a 2px wide content element.
          var scrollContainer = document.createElement('div');
          var containerStyle = scrollContainer.style;
          scrollContainer.dir = 'rtl';
          containerStyle.width = '1px';
          containerStyle.overflow = 'auto';
          containerStyle.visibility = 'hidden';
          containerStyle.pointerEvents = 'none';
          containerStyle.position = 'absolute';
          var content = document.createElement('div');
          var contentStyle = content.style;
          contentStyle.width = '2px';
          contentStyle.height = '1px';
          scrollContainer.appendChild(content);
          document.body.appendChild(scrollContainer);
          rtlScrollAxisType = 0
          /* NORMAL */
          ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
          // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
          // dealing with one of the other two types of browsers.

          if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
            /* NEGATED */
            : 2
            /* INVERTED */
            ;
          }

          scrollContainer.parentNode.removeChild(scrollContainer);
        }

        return rtlScrollAxisType;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var shadowDomIsSupported;
      /** Checks whether the user's browser support Shadow DOM. */

      function _supportsShadowDom() {
        if (shadowDomIsSupported == null) {
          var head = typeof document !== 'undefined' ? document.head : null;
          shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
        }

        return shadowDomIsSupported;
      }
      /** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


      function _getShadowRoot(element) {
        if (_supportsShadowDom()) {
          var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
          // teams have been able to hit this code path on unsupported browsers.

          if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
          }
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=platform.js.map

      /***/

    },

    /***/
    "u47x":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
      \*****************************************************************/

    /*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */

    /***/
    function u47x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
        return A11yModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
        return ActiveDescendantKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
        return AriaDescriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
        return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
        return CDK_DESCRIBEDBY_ID_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
        return CdkAriaLive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
        return CdkMonitorFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
        return CdkTrapFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function () {
        return ConfigurableFocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function () {
        return ConfigurableFocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function () {
        return EventListenerFocusTrapInertStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function () {
        return FOCUS_MONITOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function () {
        return FOCUS_TRAP_INERT_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
        return FocusKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
        return FocusMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
        return FocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
        return FocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function () {
        return HighContrastModeDetector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
        return InteractivityChecker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsFocusableConfig", function () {
        return IsFocusableConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
        return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
        return ListKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
        return LiveAnnouncer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
        return MESSAGES_CONTAINER_ID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
        return TOUCH_BUFFER_MS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
        return isFakeMousedownFromScreenReader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFakeTouchstartFromScreenReader", function () {
        return isFakeTouchstartFromScreenReader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function () {
        return FocusTrapManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function () {
        return ConfigurableFocusTrapConfig;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IDs are delimited by an empty space, as per the spec. */


      var ID_DELIMITER = ' ';
      /**
       * Adds the given ID to the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */

      function addAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);

        if (ids.some(function (existingId) {
          return existingId.trim() == id.trim();
        })) {
          return;
        }

        ids.push(id.trim());
        el.setAttribute(attr, ids.join(ID_DELIMITER));
      }
      /**
       * Removes the given ID from the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function removeAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);
        var filteredIds = ids.filter(function (val) {
          return val != id.trim();
        });

        if (filteredIds.length) {
          el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
        } else {
          el.removeAttribute(attr);
        }
      }
      /**
       * Gets the list of IDs referenced by the given ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function getAriaReferenceIds(el, attr) {
        // Get string array of all individual ids (whitespace delimited) in the attribute value
        return (el.getAttribute(attr) || '').match(/\S+/g) || [];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** ID used for the body container where all messages are appended. */


      var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
      /** ID prefix used for each created message element. */

      var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
      /** Attribute given to each host element that is described by a message element. */

      var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
      /** Global incremental identifier for each registered message element. */

      var nextId = 0;
      /** Global map of all registered message elements that have been placed into the document. */

      var messageRegistry = new Map();
      /** Container for all registered messages. */

      var messagesContainer = null;
      /**
       * Utility that creates visually hidden elements with a message content. Useful for elements that
       * want to use aria-describedby to further describe themselves without adding additional visual
       * content.
       */

      var AriaDescriber = /*#__PURE__*/function () {
        function AriaDescriber(_document) {
          _classCallCheck(this, AriaDescriber);

          this._document = _document;
        }

        _createClass(AriaDescriber, [{
          key: "describe",
          value: function describe(hostElement, message, role) {
            if (!this._canBeDescribed(hostElement, message)) {
              return;
            }

            var key = getKey(message, role);

            if (typeof message !== 'string') {
              // We need to ensure that the element has an ID.
              setMessageId(message);
              messageRegistry.set(key, {
                messageElement: message,
                referenceCount: 0
              });
            } else if (!messageRegistry.has(key)) {
              this._createMessageElement(message, role);
            }

            if (!this._isElementDescribedByMessage(hostElement, key)) {
              this._addMessageReference(hostElement, key);
            }
          }
        }, {
          key: "removeDescription",
          value: function removeDescription(hostElement, message, role) {
            if (!message || !this._isElementNode(hostElement)) {
              return;
            }

            var key = getKey(message, role);

            if (this._isElementDescribedByMessage(hostElement, key)) {
              this._removeMessageReference(hostElement, key);
            } // If the message is a string, it means that it's one that we created for the
            // consumer so we can remove it safely, otherwise we should leave it in place.


            if (typeof message === 'string') {
              var registeredMessage = messageRegistry.get(key);

              if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(key);
              }
            }

            if (messagesContainer && messagesContainer.childNodes.length === 0) {
              this._deleteMessagesContainer();
            }
          }
          /** Unregisters all created message elements and removes the message container. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

            for (var i = 0; i < describedElements.length; i++) {
              this._removeCdkDescribedByReferenceIds(describedElements[i]);

              describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
            }

            if (messagesContainer) {
              this._deleteMessagesContainer();
            }

            messageRegistry.clear();
          }
          /**
           * Creates a new element in the visually hidden message container element with the message
           * as its content and adds it to the message registry.
           */

        }, {
          key: "_createMessageElement",
          value: function _createMessageElement(message, role) {
            var messageElement = this._document.createElement('div');

            setMessageId(messageElement);
            messageElement.textContent = message;

            if (role) {
              messageElement.setAttribute('role', role);
            }

            this._createMessagesContainer();

            messagesContainer.appendChild(messageElement);
            messageRegistry.set(getKey(message, role), {
              messageElement: messageElement,
              referenceCount: 0
            });
          }
          /** Deletes the message element from the global messages container. */

        }, {
          key: "_deleteMessageElement",
          value: function _deleteMessageElement(key) {
            var registeredMessage = messageRegistry.get(key);
            var messageElement = registeredMessage && registeredMessage.messageElement;

            if (messagesContainer && messageElement) {
              messagesContainer.removeChild(messageElement);
            }

            messageRegistry["delete"](key);
          }
          /** Creates the global container for all aria-describedby messages. */

        }, {
          key: "_createMessagesContainer",
          value: function _createMessagesContainer() {
            if (!messagesContainer) {
              var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
              // already a container on the page, but we don't have a reference to it. Clear the
              // old container so we don't get duplicates. Doing this, instead of emptying the previous
              // container, should be slightly faster.


              if (preExistingContainer && preExistingContainer.parentNode) {
                preExistingContainer.parentNode.removeChild(preExistingContainer);
              }

              messagesContainer = this._document.createElement('div');
              messagesContainer.id = MESSAGES_CONTAINER_ID; // We add `visibility: hidden` in order to prevent text in this container from
              // being searchable by the browser's Ctrl + F functionality.
              // Screen-readers will still read the description for elements with aria-describedby even
              // when the description element is not visible.

              messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
              // the description element doesn't impact page layout.

              messagesContainer.classList.add('cdk-visually-hidden');

              this._document.body.appendChild(messagesContainer);
            }
          }
          /** Deletes the global messages container. */

        }, {
          key: "_deleteMessagesContainer",
          value: function _deleteMessagesContainer() {
            if (messagesContainer && messagesContainer.parentNode) {
              messagesContainer.parentNode.removeChild(messagesContainer);
              messagesContainer = null;
            }
          }
          /** Removes all cdk-describedby messages that are hosted through the element. */

        }, {
          key: "_removeCdkDescribedByReferenceIds",
          value: function _removeCdkDescribedByReferenceIds(element) {
            // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
            var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(function (id) {
              return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
            });
            element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
          }
          /**
           * Adds a message reference to the element using aria-describedby and increments the registered
           * message's reference count.
           */

        }, {
          key: "_addMessageReference",
          value: function _addMessageReference(element, key) {
            var registeredMessage = messageRegistry.get(key); // Add the aria-describedby reference and set the
            // describedby_host attribute to mark the element.

            addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
            registeredMessage.referenceCount++;
          }
          /**
           * Removes a message reference from the element using aria-describedby
           * and decrements the registered message's reference count.
           */

        }, {
          key: "_removeMessageReference",
          value: function _removeMessageReference(element, key) {
            var registeredMessage = messageRegistry.get(key);
            registeredMessage.referenceCount--;
            removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }
          /** Returns true if the element has been described by the provided message ID. */

        }, {
          key: "_isElementDescribedByMessage",
          value: function _isElementDescribedByMessage(element, key) {
            var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
            var registeredMessage = messageRegistry.get(key);
            var messageId = registeredMessage && registeredMessage.messageElement.id;
            return !!messageId && referenceIds.indexOf(messageId) != -1;
          }
          /** Determines whether a message can be described on a particular element. */

        }, {
          key: "_canBeDescribed",
          value: function _canBeDescribed(element, message) {
            if (!this._isElementNode(element)) {
              return false;
            }

            if (message && typeof message === 'object') {
              // We'd have to make some assumptions about the description element's text, if the consumer
              // passed in an element. Assume that if an element is passed in, the consumer has verified
              // that it can be used as a description.
              return true;
            }

            var trimmedMessage = message == null ? '' : "".concat(message).trim();
            var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
            // element, because screen readers will end up reading out the same text twice in a row.

            return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
          }
          /** Checks whether a node is an Element node. */

        }, {
          key: "_isElementNode",
          value: function _isElementNode(element) {
            return element.nodeType === this._document.ELEMENT_NODE;
          }
        }]);

        return AriaDescriber;
      }();

      AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
        return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AriaDescriber_Factory() {
          return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: AriaDescriber,
        providedIn: "root"
      });

      AriaDescriber.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** Gets a key that can be used to look messages up in the registry. */


      function getKey(message, role) {
        return typeof message === 'string' ? "".concat(role || '', "/").concat(message) : message;
      }
      /** Assigns a unique ID to an element, if it doesn't have one already. */


      function setMessageId(element) {
        if (!element.id) {
          element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This class manages keyboard events for selectable lists. If you pass it a query list
       * of items, it will set the active item correctly when arrow events occur.
       */


      var ListKeyManager = /*#__PURE__*/function () {
        function ListKeyManager(_items) {
          var _this41 = this;

          _classCallCheck(this, ListKeyManager);

          this._items = _items;
          this._activeItemIndex = -1;
          this._activeItem = null;
          this._wrap = false;
          this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          this._vertical = true;
          this._allowedModifierKeys = [];
          this._homeAndEnd = false;
          /**
           * Predicate function that can be used to check whether an item should be skipped
           * by the key manager. By default, disabled items are skipped.
           */

          this._skipPredicateFn = function (item) {
            return item.disabled;
          }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


          this._pressedLetters = [];
          /**
           * Stream that emits any time the TAB key is pressed, so components can react
           * when focus is shifted off of the list.
           */

          this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Stream that emits whenever the active item of the list manager changes. */

          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
          // not have access to a QueryList of the items they want to manage (e.g. when the
          // items aren't being collected via `ViewChildren` or `ContentChildren`).

          if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
              if (_this41._activeItem) {
                var itemArray = newItems.toArray();
                var newIndex = itemArray.indexOf(_this41._activeItem);

                if (newIndex > -1 && newIndex !== _this41._activeItemIndex) {
                  _this41._activeItemIndex = newIndex;
                }
              }
            });
          }
        }
        /**
         * Sets the predicate function that determines which items should be skipped by the
         * list key manager.
         * @param predicate Function that determines whether the given item should be skipped.
         */


        _createClass(ListKeyManager, [{
          key: "skipPredicate",
          value: function skipPredicate(predicate) {
            this._skipPredicateFn = predicate;
            return this;
          }
          /**
           * Configures wrapping mode, which determines whether the active item will wrap to
           * the other end of list when there are no more items in the given direction.
           * @param shouldWrap Whether the list should wrap when reaching the end.
           */

        }, {
          key: "withWrap",
          value: function withWrap() {
            var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._wrap = shouldWrap;
            return this;
          }
          /**
           * Configures whether the key manager should be able to move the selection vertically.
           * @param enabled Whether vertical selection should be enabled.
           */

        }, {
          key: "withVerticalOrientation",
          value: function withVerticalOrientation() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._vertical = enabled;
            return this;
          }
          /**
           * Configures the key manager to move the selection horizontally.
           * Passing in `null` will disable horizontal movement.
           * @param direction Direction in which the selection can be moved.
           */

        }, {
          key: "withHorizontalOrientation",
          value: function withHorizontalOrientation(direction) {
            this._horizontal = direction;
            return this;
          }
          /**
           * Modifier keys which are allowed to be held down and whose default actions will be prevented
           * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
           */

        }, {
          key: "withAllowedModifierKeys",
          value: function withAllowedModifierKeys(keys) {
            this._allowedModifierKeys = keys;
            return this;
          }
          /**
           * Turns on typeahead mode which allows users to set the active item by typing.
           * @param debounceInterval Time to wait after the last keystroke before setting the active item.
           */

        }, {
          key: "withTypeAhead",
          value: function withTypeAhead() {
            var _this42 = this;

            var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(function (item) {
              return typeof item.getLabel !== 'function';
            })) {
              throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
            }

            this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
            // and convert those letters back into a string. Afterwards find the first item that starts
            // with that string and select it.


            this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (letter) {
              return _this42._pressedLetters.push(letter);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
              return _this42._pressedLetters.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return _this42._pressedLetters.join('');
            })).subscribe(function (inputString) {
              var items = _this42._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
              // following the current active item.


              for (var i = 1; i < items.length + 1; i++) {
                var index = (_this42._activeItemIndex + i) % items.length;
                var item = items[index];

                if (!_this42._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                  _this42.setActiveItem(index);

                  break;
                }
              }

              _this42._pressedLetters = [];
            });
            return this;
          }
          /**
           * Configures the key manager to activate the first and last items
           * respectively when the Home or End key is pressed.
           * @param enabled Whether pressing the Home or End key activates the first/last item.
           */

        }, {
          key: "withHomeAndEnd",
          value: function withHomeAndEnd() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._homeAndEnd = enabled;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            var previousActiveItem = this._activeItem;
            this.updateActiveItem(item);

            if (this._activeItem !== previousActiveItem) {
              this.change.next(this._activeItemIndex);
            }
          }
          /**
           * Sets the active item depending on the key event passed in.
           * @param event Keyboard event to be used for determining which element should be active.
           */

        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            var _this43 = this;

            var keyCode = event.keyCode;
            var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
            var isModifierAllowed = modifiers.every(function (modifier) {
              return !event[modifier] || _this43._allowedModifierKeys.indexOf(modifier) > -1;
            });

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setFirstItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setLastItemActive();
                  break;
                } else {
                  return;
                }

              default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                  // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                  // otherwise fall back to resolving alphanumeric characters via the keyCode.
                  if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                  } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                  }
                } // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.


                return;
            }

            this._pressedLetters = [];
            event.preventDefault();
          }
          /** Index of the currently active item. */

        }, {
          key: "activeItemIndex",
          get: function get() {
            return this._activeItemIndex;
          }
          /** The active item. */

        }, {
          key: "activeItem",
          get: function get() {
            return this._activeItem;
          }
          /** Gets whether the user is currently typing into the manager using the typeahead feature. */

        }, {
          key: "isTyping",
          value: function isTyping() {
            return this._pressedLetters.length > 0;
          }
          /** Sets the active item to the first enabled item in the list. */

        }, {
          key: "setFirstItemActive",
          value: function setFirstItemActive() {
            this._setActiveItemByIndex(0, 1);
          }
          /** Sets the active item to the last enabled item in the list. */

        }, {
          key: "setLastItemActive",
          value: function setLastItemActive() {
            this._setActiveItemByIndex(this._items.length - 1, -1);
          }
          /** Sets the active item to the next enabled item in the list. */

        }, {
          key: "setNextItemActive",
          value: function setNextItemActive() {
            this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
          }
          /** Sets the active item to a previous enabled item in the list. */

        }, {
          key: "setPreviousItemActive",
          value: function setPreviousItemActive() {
            this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
          }
        }, {
          key: "updateActiveItem",
          value: function updateActiveItem(item) {
            var itemArray = this._getItemsArray();

            var index = typeof item === 'number' ? item : itemArray.indexOf(item);
            var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

            this._activeItem = activeItem == null ? null : activeItem;
            this._activeItemIndex = index;
          }
          /**
           * This method sets the active item, given a list of items and the delta between the
           * currently active item and the new active item. It will calculate differently
           * depending on whether wrap mode is turned on.
           */

        }, {
          key: "_setActiveItemByDelta",
          value: function _setActiveItemByDelta(delta) {
            this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
          }
          /**
           * Sets the active item properly given "wrap" mode. In other words, it will continue to move
           * down the list until it finds an item that is not disabled, and it will wrap if it
           * encounters either end of the list.
           */

        }, {
          key: "_setActiveInWrapMode",
          value: function _setActiveInWrapMode(delta) {
            var items = this._getItemsArray();

            for (var i = 1; i <= items.length; i++) {
              var index = (this._activeItemIndex + delta * i + items.length) % items.length;
              var item = items[index];

              if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
              }
            }
          }
          /**
           * Sets the active item properly given the default mode. In other words, it will
           * continue to move down the list until it finds an item that is not disabled. If
           * it encounters either end of the list, it will stop and not wrap.
           */

        }, {
          key: "_setActiveInDefaultMode",
          value: function _setActiveInDefaultMode(delta) {
            this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
          }
          /**
           * Sets the active item to the first enabled item starting at the index specified. If the
           * item is disabled, it will move in the fallbackDelta direction until it either
           * finds an enabled item or encounters the end of the list.
           */

        }, {
          key: "_setActiveItemByIndex",
          value: function _setActiveItemByIndex(index, fallbackDelta) {
            var items = this._getItemsArray();

            if (!items[index]) {
              return;
            }

            while (this._skipPredicateFn(items[index])) {
              index += fallbackDelta;

              if (!items[index]) {
                return;
              }
            }

            this.setActiveItem(index);
          }
          /** Returns the items as an array. */

        }, {
          key: "_getItemsArray",
          value: function _getItemsArray() {
            return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
          }
        }]);

        return ListKeyManager;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
        _inherits(ActiveDescendantKeyManager, _ListKeyManager);

        var _super24 = _createSuper(ActiveDescendantKeyManager);

        function ActiveDescendantKeyManager() {
          _classCallCheck(this, ActiveDescendantKeyManager);

          return _super24.apply(this, arguments);
        }

        _createClass(ActiveDescendantKeyManager, [{
          key: "setActiveItem",
          value: function setActiveItem(index) {
            if (this.activeItem) {
              this.activeItem.setInactiveStyles();
            }

            _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

            if (this.activeItem) {
              this.activeItem.setActiveStyles();
            }
          }
        }]);

        return ActiveDescendantKeyManager;
      }(ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
        _inherits(FocusKeyManager, _ListKeyManager2);

        var _super25 = _createSuper(FocusKeyManager);

        function FocusKeyManager() {
          var _this44;

          _classCallCheck(this, FocusKeyManager);

          _this44 = _super25.apply(this, arguments);
          _this44._origin = 'program';
          return _this44;
        }
        /**
         * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
         * @param origin Focus origin to be used when focusing items.
         */


        _createClass(FocusKeyManager, [{
          key: "setFocusOrigin",
          value: function setFocusOrigin(origin) {
            this._origin = origin;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

            if (this.activeItem) {
              this.activeItem.focus(this._origin);
            }
          }
        }]);

        return FocusKeyManager;
      }(ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for the isFocusable method.
       */


      var IsFocusableConfig = function IsFocusableConfig() {
        _classCallCheck(this, IsFocusableConfig);

        /**
         * Whether to count an element as focusable even if it is not currently visible.
         */
        this.ignoreVisibility = false;
      }; // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
      // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
      // supported.

      /**
       * Utility for checking the interactivity of an element, such as whether is is focusable or
       * tabbable.
       */


      var InteractivityChecker = /*#__PURE__*/function () {
        function InteractivityChecker(_platform) {
          _classCallCheck(this, InteractivityChecker);

          this._platform = _platform;
        }
        /**
         * Gets whether an element is disabled.
         *
         * @param element Element to be checked.
         * @returns Whether the element is disabled.
         */


        _createClass(InteractivityChecker, [{
          key: "isDisabled",
          value: function isDisabled(element) {
            // This does not capture some cases, such as a non-form control with a disabled attribute or
            // a form control inside of a disabled form, but should capture the most common cases.
            return element.hasAttribute('disabled');
          }
          /**
           * Gets whether an element is visible for the purposes of interactivity.
           *
           * This will capture states like `display: none` and `visibility: hidden`, but not things like
           * being clipped by an `overflow: hidden` parent or being outside the viewport.
           *
           * @returns Whether the element is visible.
           */

        }, {
          key: "isVisible",
          value: function isVisible(element) {
            return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
          }
          /**
           * Gets whether an element can be reached via Tab key.
           * Assumes that the element has already been checked with isFocusable.
           *
           * @param element Element to be checked.
           * @returns Whether the element is tabbable.
           */

        }, {
          key: "isTabbable",
          value: function isTabbable(element) {
            // Nothing is tabbable on the server 😎
            if (!this._platform.isBrowser) {
              return false;
            }

            var frameElement = getFrameElement(getWindow(element));

            if (frameElement) {
              // Frame elements inherit their tabindex onto all child elements.
              if (getTabIndexValue(frameElement) === -1) {
                return false;
              } // Browsers disable tabbing to an element inside of an invisible frame.


              if (!this.isVisible(frameElement)) {
                return false;
              }
            }

            var nodeName = element.nodeName.toLowerCase();
            var tabIndexValue = getTabIndexValue(element);

            if (element.hasAttribute('contenteditable')) {
              return tabIndexValue !== -1;
            }

            if (nodeName === 'iframe' || nodeName === 'object') {
              // The frame or object's content may be tabbable depending on the content, but it's
              // not possibly to reliably detect the content of the frames. We always consider such
              // elements as non-tabbable.
              return false;
            } // In iOS, the browser only considers some specific elements as tabbable.


            if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
              return false;
            }

            if (nodeName === 'audio') {
              // Audio elements without controls enabled are never tabbable, regardless
              // of the tabindex attribute explicitly being set.
              if (!element.hasAttribute('controls')) {
                return false;
              } // Audio elements with controls are by default tabbable unless the
              // tabindex attribute is set to `-1` explicitly.


              return tabIndexValue !== -1;
            }

            if (nodeName === 'video') {
              // For all video elements, if the tabindex attribute is set to `-1`, the video
              // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
              // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
              // tabindex attribute is the source of truth here.
              if (tabIndexValue === -1) {
                return false;
              } // If the tabindex is explicitly set, and not `-1` (as per check before), the
              // video element is always tabbable (regardless of whether it has controls or not).


              if (tabIndexValue !== null) {
                return true;
              } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
              // has controls enabled. Firefox is special as videos are always tabbable regardless
              // of whether there are controls or not.


              return this._platform.FIREFOX || element.hasAttribute('controls');
            }

            return element.tabIndex >= 0;
          }
          /**
           * Gets whether an element can be focused by the user.
           *
           * @param element Element to be checked.
           * @param config The config object with options to customize this method's behavior
           * @returns Whether the element is focusable.
           */

        }, {
          key: "isFocusable",
          value: function isFocusable(element, config) {
            // Perform checks in order of left to most expensive.
            // Again, naive approach that does not capture many edge cases and browser quirks.
            return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
          }
        }]);

        return InteractivityChecker;
      }();

      InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
        return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
      };

      InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function InteractivityChecker_Factory() {
          return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
        },
        token: InteractivityChecker,
        providedIn: "root"
      });

      InteractivityChecker.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }];
        }, null);
      })();
      /**
       * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
       * the frameElement property is being accessed from a different host address, this property
       * should be accessed carefully.
       */


      function getFrameElement(window) {
        try {
          return window.frameElement;
        } catch (_a) {
          return null;
        }
      }
      /** Checks whether the specified element has any geometry / rectangles. */


      function hasGeometry(element) {
        // Use logic from jQuery to check for an invisible element.
        // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
        return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
      }
      /** Gets whether an element's  */


      function isNativeFormElement(element) {
        var nodeName = element.nodeName.toLowerCase();
        return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
      }
      /** Gets whether an element is an `<input type="hidden">`. */


      function isHiddenInput(element) {
        return isInputElement(element) && element.type == 'hidden';
      }
      /** Gets whether an element is an anchor that has an href attribute. */


      function isAnchorWithHref(element) {
        return isAnchorElement(element) && element.hasAttribute('href');
      }
      /** Gets whether an element is an input element. */


      function isInputElement(element) {
        return element.nodeName.toLowerCase() == 'input';
      }
      /** Gets whether an element is an anchor element. */


      function isAnchorElement(element) {
        return element.nodeName.toLowerCase() == 'a';
      }
      /** Gets whether an element has a valid tabindex. */


      function hasValidTabIndex(element) {
        if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
          return false;
        }

        var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

        if (tabIndex == '-32768') {
          return false;
        }

        return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
      }
      /**
       * Returns the parsed tabindex from the element attributes instead of returning the
       * evaluated tabindex from the browsers defaults.
       */


      function getTabIndexValue(element) {
        if (!hasValidTabIndex(element)) {
          return null;
        } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


        var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
        return isNaN(tabIndex) ? -1 : tabIndex;
      }
      /** Checks whether the specified element is potentially tabbable on iOS */


      function isPotentiallyTabbableIOS(element) {
        var nodeName = element.nodeName.toLowerCase();
        var inputType = nodeName === 'input' && element.type;
        return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
      }
      /**
       * Gets whether an element is potentially focusable without taking current visible/disabled state
       * into account.
       */


      function isPotentiallyFocusable(element) {
        // Inputs are potentially focusable *unless* they're type="hidden".
        if (isHiddenInput(element)) {
          return false;
        }

        return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
      }
      /** Gets the parent window of a DOM node with regards of being inside of an iframe. */


      function getWindow(node) {
        // ownerDocument is null if `node` itself *is* a document.
        return node.ownerDocument && node.ownerDocument.defaultView || window;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class currently uses a relatively simple approach to focus trapping.
       * It assumes that the tab order is the same as DOM order, which is not necessarily true.
       * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
       *
       * @deprecated Use `ConfigurableFocusTrap` instead.
       * @breaking-change 11.0.0
       */


      var FocusTrap = /*#__PURE__*/function () {
        function FocusTrap(_element, _checker, _ngZone, _document) {
          var _this45 = this;

          var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          _classCallCheck(this, FocusTrap);

          this._element = _element;
          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
          this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

          this.startAnchorListener = function () {
            return _this45.focusLastTabbableElement();
          };

          this.endAnchorListener = function () {
            return _this45.focusFirstTabbableElement();
          };

          this._enabled = true;

          if (!deferAnchors) {
            this.attachAnchors();
          }
        }
        /** Whether the focus trap is active. */


        _createClass(FocusTrap, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(value, this._startAnchor);

              this._toggleAnchorTabIndex(value, this._endAnchor);
            }
          }
          /** Destroys the focus trap by cleaning up the anchors. */

        }, {
          key: "destroy",
          value: function destroy() {
            var startAnchor = this._startAnchor;
            var endAnchor = this._endAnchor;

            if (startAnchor) {
              startAnchor.removeEventListener('focus', this.startAnchorListener);

              if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
              }
            }

            if (endAnchor) {
              endAnchor.removeEventListener('focus', this.endAnchorListener);

              if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
              }
            }

            this._startAnchor = this._endAnchor = null;
            this._hasAttached = false;
          }
          /**
           * Inserts the anchors into the DOM. This is usually done automatically
           * in the constructor, but can be deferred for cases like directives with `*ngIf`.
           * @returns Whether the focus trap managed to attach successfully. This may not be the case
           * if the target element isn't currently in the DOM.
           */

        }, {
          key: "attachAnchors",
          value: function attachAnchors() {
            var _this46 = this;

            // If we're not on the browser, there can be no focus to trap.
            if (this._hasAttached) {
              return true;
            }

            this._ngZone.runOutsideAngular(function () {
              if (!_this46._startAnchor) {
                _this46._startAnchor = _this46._createAnchor();

                _this46._startAnchor.addEventListener('focus', _this46.startAnchorListener);
              }

              if (!_this46._endAnchor) {
                _this46._endAnchor = _this46._createAnchor();

                _this46._endAnchor.addEventListener('focus', _this46.endAnchorListener);
              }
            });

            if (this._element.parentNode) {
              this._element.parentNode.insertBefore(this._startAnchor, this._element);

              this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

              this._hasAttached = true;
            }

            return this._hasAttached;
          }
          /**
           * Waits for the zone to stabilize, then either focuses the first element that the
           * user specified, or the first tabbable element.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusInitialElementWhenReady",
          value: function focusInitialElementWhenReady() {
            var _this47 = this;

            return new Promise(function (resolve) {
              _this47._executeOnStable(function () {
                return resolve(_this47.focusInitialElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the first tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusFirstTabbableElementWhenReady",
          value: function focusFirstTabbableElementWhenReady() {
            var _this48 = this;

            return new Promise(function (resolve) {
              _this48._executeOnStable(function () {
                return resolve(_this48.focusFirstTabbableElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the last tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusLastTabbableElementWhenReady",
          value: function focusLastTabbableElementWhenReady() {
            var _this49 = this;

            return new Promise(function (resolve) {
              _this49._executeOnStable(function () {
                return resolve(_this49.focusLastTabbableElement());
              });
            });
          }
          /**
           * Get the specified boundary element of the trapped region.
           * @param bound The boundary to get (start or end of trapped region).
           * @returns The boundary element.
           */

        }, {
          key: "_getRegionBoundary",
          value: function _getRegionBoundary(bound) {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var markers = this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

            for (var i = 0; i < markers.length; i++) {
              // @breaking-change 8.0.0
              if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
              } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
              }
            }

            if (bound == 'start') {
              return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
            }

            return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
          }
          /**
           * Focuses the element that should be focused when the focus trap is initialized.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusInitialElement",
          value: function focusInitialElement() {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var redirectToElement = this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

            if (redirectToElement) {
              // @breaking-change 8.0.0
              if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
              } // Warn the consumer if the element they've pointed to
              // isn't focusable, when not in production mode.


              if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
              }

              if (!this._checker.isFocusable(redirectToElement)) {
                var focusableChild = this._getFirstTabbableElement(redirectToElement);

                focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus();
                return !!focusableChild;
              }

              redirectToElement.focus();
              return true;
            }

            return this.focusFirstTabbableElement();
          }
          /**
           * Focuses the first tabbable element within the focus trap region.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusFirstTabbableElement",
          value: function focusFirstTabbableElement() {
            var redirectToElement = this._getRegionBoundary('start');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Focuses the last tabbable element within the focus trap region.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusLastTabbableElement",
          value: function focusLastTabbableElement() {
            var redirectToElement = this._getRegionBoundary('end');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Checks whether the focus trap has successfully been attached.
           */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._hasAttached;
          }
          /** Get the first tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getFirstTabbableElement",
          value: function _getFirstTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
            // back to `childNodes` which includes text nodes, comments etc.


            var children = root.children || root.childNodes;

            for (var i = 0; i < children.length; i++) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Get the last tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getLastTabbableElement",
          value: function _getLastTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in reverse DOM order.


            var children = root.children || root.childNodes;

            for (var i = children.length - 1; i >= 0; i--) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Creates an anchor element. */

        }, {
          key: "_createAnchor",
          value: function _createAnchor() {
            var anchor = this._document.createElement('div');

            this._toggleAnchorTabIndex(this._enabled, anchor);

            anchor.classList.add('cdk-visually-hidden');
            anchor.classList.add('cdk-focus-trap-anchor');
            anchor.setAttribute('aria-hidden', 'true');
            return anchor;
          }
          /**
           * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
           * @param isEnabled Whether the focus trap is enabled.
           * @param anchor Anchor on which to toggle the tabindex.
           */

        }, {
          key: "_toggleAnchorTabIndex",
          value: function _toggleAnchorTabIndex(isEnabled, anchor) {
            // Remove the tabindex completely, rather than setting it to -1, because if the
            // element has a tabindex, the user might still hit it when navigating with the arrow keys.
            isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
          }
          /**
           * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
           * @param enabled: Whether the anchors should trap Tab.
           */

        }, {
          key: "toggleAnchors",
          value: function toggleAnchors(enabled) {
            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(enabled, this._startAnchor);

              this._toggleAnchorTabIndex(enabled, this._endAnchor);
            }
          }
          /** Executes a function when the zone is stable. */

        }, {
          key: "_executeOnStable",
          value: function _executeOnStable(fn) {
            if (this._ngZone.isStable) {
              fn();
            } else {
              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
            }
          }
        }]);

        return FocusTrap;
      }();
      /**
       * Factory that allows easy instantiation of focus traps.
       * @deprecated Use `ConfigurableFocusTrapFactory` instead.
       * @breaking-change 11.0.0
       */


      var FocusTrapFactory = /*#__PURE__*/function () {
        function FocusTrapFactory(_checker, _ngZone, _document) {
          _classCallCheck(this, FocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
        }
        /**
         * Creates a focus-trapped region around the given element.
         * @param element The element around which focus will be trapped.
         * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
         *     manually by the user.
         * @returns The created focus trap instance.
         */


        _createClass(FocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
          }
        }]);

        return FocusTrapFactory;
      }();

      FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
        return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapFactory_Factory() {
          return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: FocusTrapFactory,
        providedIn: "root"
      });

      FocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** Directive for trapping focus within a region. */


      var CdkTrapFocus = /*#__PURE__*/function () {
        function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
          _classCallCheck(this, CdkTrapFocus);

          this._elementRef = _elementRef;
          this._focusTrapFactory = _focusTrapFactory;
          /** Previously focused element to restore focus to upon destroy when using autoCapture. */

          this._previouslyFocusedElement = null;
          this._document = _document;
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
        /** Whether the focus trap is active. */


        _createClass(CdkTrapFocus, [{
          key: "enabled",
          get: function get() {
            return this.focusTrap.enabled;
          },
          set: function set(value) {
            this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the directive should automatically move focus into the trapped region upon
           * initialization and return focus to the previous activeElement upon destruction.
           */

        }, {
          key: "autoCapture",
          get: function get() {
            return this._autoCapture;
          },
          set: function set(value) {
            this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
            // element now that the trapped region is being destroyed.

            if (this._previouslyFocusedElement) {
              this._previouslyFocusedElement.focus();

              this._previouslyFocusedElement = null;
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusTrap.attachAnchors();

            if (this.autoCapture) {
              this._captureFocus();
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.focusTrap.hasAttached()) {
              this.focusTrap.attachAnchors();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var autoCaptureChange = changes['autoCapture'];

            if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
              this._captureFocus();
            }
          }
        }, {
          key: "_captureFocus",
          value: function _captureFocus() {
            this._previouslyFocusedElement = this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }]);

        return CdkTrapFocus;
      }();

      CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
        return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
          enabled: ["cdkTrapFocus", "enabled"],
          autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
        },
        exportAs: ["cdkTrapFocus"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkTrapFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      CdkTrapFocus.propDecorators = {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkTrapFocus]',
            exportAs: 'cdkTrapFocus'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusTrapFactory
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, {
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocus']
          }],
          autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocusAutoCapture']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class uses a strategy pattern that determines how it traps focus.
       * See FocusTrapInertStrategy.
       */


      var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
        _inherits(ConfigurableFocusTrap, _FocusTrap);

        var _super26 = _createSuper(ConfigurableFocusTrap);

        function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
          var _this50;

          _classCallCheck(this, ConfigurableFocusTrap);

          _this50 = _super26.call(this, _element, _checker, _ngZone, _document, config.defer);
          _this50._focusTrapManager = _focusTrapManager;
          _this50._inertStrategy = _inertStrategy;

          _this50._focusTrapManager.register(_assertThisInitialized(_this50));

          return _this50;
        }
        /** Whether the FocusTrap is enabled. */


        _createClass(ConfigurableFocusTrap, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._enabled) {
              this._focusTrapManager.register(this);
            } else {
              this._focusTrapManager.deregister(this);
            }
          }
          /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */

        }, {
          key: "destroy",
          value: function destroy() {
            this._focusTrapManager.deregister(this);

            _get(_getPrototypeOf(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_enable",
          value: function _enable() {
            this._inertStrategy.preventFocus(this);

            this.toggleAnchors(true);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_disable",
          value: function _disable() {
            this._inertStrategy.allowFocus(this);

            this.toggleAnchors(false);
          }
        }]);

        return ConfigurableFocusTrap;
      }(FocusTrap);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */


      function closest(element, selector) {
        if (!(element instanceof Node)) {
          return null;
        }

        var curr = element;

        while (curr != null && !(curr instanceof Element)) {
          curr = curr.parentNode;
        }

        return curr && (hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
      }
      /** Polyfill for browsers without Element.closest. */


      function polyfillClosest(element, selector) {
        var curr = element;

        while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
          curr = curr.parentNode;
        }

        return curr || null;
      }

      var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
      /** IE 11 compatible matches implementation. */

      function matches(element, selector) {
        return element.matches ? element.matches(selector) : element['msMatchesSelector'](selector);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Lightweight FocusTrapInertStrategy that adds a document focus event
       * listener to redirect focus back inside the FocusTrap.
       */


      var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
        function EventListenerFocusTrapInertStrategy() {
          _classCallCheck(this, EventListenerFocusTrapInertStrategy);

          /** Focus event handler. */
          this._listener = null;
        }
        /** Adds a document event listener that keeps focus inside the FocusTrap. */


        _createClass(EventListenerFocusTrapInertStrategy, [{
          key: "preventFocus",
          value: function preventFocus(focusTrap) {
            var _this51 = this;

            // Ensure there's only one listener per document
            if (this._listener) {
              focusTrap._document.removeEventListener('focus', this._listener, true);
            }

            this._listener = function (e) {
              return _this51._trapFocus(focusTrap, e);
            };

            focusTrap._ngZone.runOutsideAngular(function () {
              focusTrap._document.addEventListener('focus', _this51._listener, true);
            });
          }
          /** Removes the event listener added in preventFocus. */

        }, {
          key: "allowFocus",
          value: function allowFocus(focusTrap) {
            if (!this._listener) {
              return;
            }

            focusTrap._document.removeEventListener('focus', this._listener, true);

            this._listener = null;
          }
          /**
           * Refocuses the first element in the FocusTrap if the focus event target was outside
           * the FocusTrap.
           *
           * This is an event listener callback. The event listener is added in runOutsideAngular,
           * so all this code runs outside Angular as well.
           */

        }, {
          key: "_trapFocus",
          value: function _trapFocus(focusTrap, event) {
            var target = event.target;
            var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
            // with an element inside the FocusTrap, ex. mat-select.

            if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
              // Some legacy FocusTrap usages have logic that focuses some element on the page
              // just before FocusTrap is destroyed. For backwards compatibility, wait
              // to be sure FocusTrap is still enabled before refocusing.
              setTimeout(function () {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                  focusTrap.focusFirstTabbableElement();
                }
              });
            }
          }
        }]);

        return EventListenerFocusTrapInertStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for creating a ConfigurableFocusTrap.
       */


      var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
        _classCallCheck(this, ConfigurableFocusTrapConfig);

        /**
         * Whether to defer the creation of FocusTrap elements to be
         * done manually by the user. Default is to create them
         * automatically.
         */
        this.defer = false;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the inert strategy. */


      var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injectable that ensures only the most recently enabled FocusTrap is active. */

      var FocusTrapManager = /*#__PURE__*/function () {
        function FocusTrapManager() {
          _classCallCheck(this, FocusTrapManager);

          // A stack of the FocusTraps on the page. Only the FocusTrap at the
          // top of the stack is active.
          this._focusTrapStack = [];
        }
        /**
         * Disables the FocusTrap at the top of the stack, and then pushes
         * the new FocusTrap onto the stack.
         */


        _createClass(FocusTrapManager, [{
          key: "register",
          value: function register(focusTrap) {
            // Dedupe focusTraps that register multiple times.
            this._focusTrapStack = this._focusTrapStack.filter(function (ft) {
              return ft !== focusTrap;
            });
            var stack = this._focusTrapStack;

            if (stack.length) {
              stack[stack.length - 1]._disable();
            }

            stack.push(focusTrap);

            focusTrap._enable();
          }
          /**
           * Removes the FocusTrap from the stack, and activates the
           * FocusTrap that is the new top of the stack.
           */

        }, {
          key: "deregister",
          value: function deregister(focusTrap) {
            focusTrap._disable();

            var stack = this._focusTrapStack;
            var i = stack.indexOf(focusTrap);

            if (i !== -1) {
              stack.splice(i, 1);

              if (stack.length) {
                stack[stack.length - 1]._enable();
              }
            }
          }
        }]);

        return FocusTrapManager;
      }();

      FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
        return new (t || FocusTrapManager)();
      };

      FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapManager_Factory() {
          return new FocusTrapManager();
        },
        token: FocusTrapManager,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Factory that allows easy instantiation of configurable focus traps. */


      var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
        function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
          _classCallCheck(this, ConfigurableFocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._focusTrapManager = _focusTrapManager;
          this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

          this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
        }

        _createClass(ConfigurableFocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();
            var configObject;

            if (typeof config === 'boolean') {
              configObject = new ConfigurableFocusTrapConfig();
              configObject.defer = config;
            } else {
              configObject = config;
            }

            return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
          }
        }]);

        return ConfigurableFocusTrapFactory;
      }();

      ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
        return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
      };

      ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ConfigurableFocusTrapFactory_Factory() {
          return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
        },
        token: ConfigurableFocusTrapFactory,
        providedIn: "root"
      });

      ConfigurableFocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: FocusTrapManager
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [FOCUS_TRAP_INERT_STRATEGY]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
        providedIn: 'root',
        factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
      });
      /** @docs-private */

      function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
        return null;
      }
      /** Injection token that can be used to configure the default options for the LiveAnnouncer. */


      var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var LiveAnnouncer = /*#__PURE__*/function () {
        function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
          _classCallCheck(this, LiveAnnouncer);

          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
          // reference browser globals (HTMLElement, Document) on non-browser environments, since having
          // a class decorator causes TypeScript to preserve the constructor signature types.

          this._document = _document;
          this._liveElement = elementToken || this._createLiveElement();
        }

        _createClass(LiveAnnouncer, [{
          key: "announce",
          value: function announce(message) {
            var _this52 = this;

            var defaultOptions = this._defaultOptions;
            var politeness;
            var duration;

            for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
              args[_key10 - 1] = arguments[_key10];
            }

            if (args.length === 1 && typeof args[0] === 'number') {
              duration = args[0];
            } else {
              politeness = args[0];
              duration = args[1];
            }

            this.clear();
            clearTimeout(this._previousTimeout);

            if (!politeness) {
              politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
            }

            if (duration == null && defaultOptions) {
              duration = defaultOptions.duration;
            } // TODO: ensure changing the politeness works on all environments we support.


            this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
            // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
            // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
            //   second time without clearing and then using a non-zero delay.
            // (using JAWS 17 at time of this writing).


            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                clearTimeout(_this52._previousTimeout);
                _this52._previousTimeout = setTimeout(function () {
                  _this52._liveElement.textContent = message;
                  resolve();

                  if (typeof duration === 'number') {
                    _this52._previousTimeout = setTimeout(function () {
                      return _this52.clear();
                    }, duration);
                  }
                }, 100);
              });
            });
          }
          /**
           * Clears the current text from the announcer element. Can be used to prevent
           * screen readers from reading the text out again while the user is going
           * through the page landmarks.
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this._liveElement) {
              this._liveElement.textContent = '';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this._previousTimeout);

            if (this._liveElement && this._liveElement.parentNode) {
              this._liveElement.parentNode.removeChild(this._liveElement);

              this._liveElement = null;
            }
          }
        }, {
          key: "_createLiveElement",
          value: function _createLiveElement() {
            var elementClass = 'cdk-live-announcer-element';

            var previousElements = this._document.getElementsByClassName(elementClass);

            var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


            for (var i = 0; i < previousElements.length; i++) {
              previousElements[i].parentNode.removeChild(previousElements[i]);
            }

            liveEl.classList.add(elementClass);
            liveEl.classList.add('cdk-visually-hidden');
            liveEl.setAttribute('aria-atomic', 'true');
            liveEl.setAttribute('aria-live', 'polite');

            this._document.body.appendChild(liveEl);

            return liveEl;
          }
        }]);

        return LiveAnnouncer;
      }();

      LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
        return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      };

      LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function LiveAnnouncer_Factory() {
          return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
        },
        token: LiveAnnouncer,
        providedIn: "root"
      });

      LiveAnnouncer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
       * with a wider range of browsers and screen readers.
       */


      var CdkAriaLive = /*#__PURE__*/function () {
        function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
          _classCallCheck(this, CdkAriaLive);

          this._elementRef = _elementRef;
          this._liveAnnouncer = _liveAnnouncer;
          this._contentObserver = _contentObserver;
          this._ngZone = _ngZone;
          this._politeness = 'polite';
        }
        /** The aria-live politeness level to use when announcing messages. */


        _createClass(CdkAriaLive, [{
          key: "politeness",
          get: function get() {
            return this._politeness;
          },
          set: function set(value) {
            var _this53 = this;

            this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

            if (this._politeness === 'off') {
              if (this._subscription) {
                this._subscription.unsubscribe();

                this._subscription = null;
              }
            } else if (!this._subscription) {
              this._subscription = this._ngZone.runOutsideAngular(function () {
                return _this53._contentObserver.observe(_this53._elementRef).subscribe(function () {
                  // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                  var elementText = _this53._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                  // changes which we don't want to announce.

                  if (elementText !== _this53._previousAnnouncedText) {
                    _this53._liveAnnouncer.announce(elementText, _this53._politeness);

                    _this53._previousAnnouncedText = elementText;
                  }
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }]);

        return CdkAriaLive;
      }();

      CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
        return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
          politeness: ["cdkAriaLive", "politeness"]
        },
        exportAs: ["cdkAriaLive"]
      });

      CdkAriaLive.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkAriaLive.propDecorators = {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAriaLive]',
            exportAs: 'cdkAriaLive'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: LiveAnnouncer
          }, {
            type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAriaLive']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


      function isFakeMousedownFromScreenReader(event) {
        // We can typically distinguish between these faked mousedown events and real mousedown events
        // using the "buttons" property. While real mousedowns will indicate the mouse button that was
        // pressed (e.g. "1" for the left mouse button), faked mousedowns will usually set the property
        // value to 0.
        return event.buttons === 0;
      }
      /** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


      function isFakeTouchstartFromScreenReader(event) {
        var touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
        // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
        // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
        // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

        return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
      // that a value of around 650ms seems appropriate.


      var TOUCH_BUFFER_MS = 650;
      /** InjectionToken for FocusMonitorOptions. */

      var FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
      /**
       * Event listener options that enable capturing and also
       * mark the listener as passive if the browser supports it.
       */

      var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
        passive: true,
        capture: true
      });
      /** Monitors mouse and keyboard events to determine the cause of focus events. */

      var FocusMonitor = /*#__PURE__*/function () {
        function FocusMonitor(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document, options) {
          var _this54 = this;

          _classCallCheck(this, FocusMonitor);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** The focus origin that the next focus event is a result of. */

          this._origin = null;
          /** Whether the window has just been focused. */

          this._windowFocused = false;
          /** Map of elements being monitored to their info. */

          this._elementInfo = new Map();
          /** The number of elements currently being monitored. */

          this._monitoredElementCount = 0;
          /**
           * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
           * as well as the number of monitored elements that they contain. We have to treat focus/blur
           * handlers differently from the rest of the events, because the browser won't emit events
           * to the document when focus moves inside of a shadow root.
           */

          this._rootNodeFocusListenerCount = new Map();
          /**
           * Event listener for `keydown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */

          this._documentKeydownListener = function () {
            // On keydown record the origin and clear any touch event that may be in progress.
            _this54._lastTouchTarget = null;

            _this54._setOriginForCurrentEventQueue('keyboard');
          };
          /**
           * Event listener for `mousedown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentMousedownListener = function (event) {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!_this54._lastTouchTarget) {
              // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
              // Resolve the focus source to `keyboard` if we detect one of them.
              var source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';

              _this54._setOriginForCurrentEventQueue(source);
            }
          };
          /**
           * Event listener for `touchstart` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentTouchstartListener = function (event) {
            // Some screen readers will fire a fake `touchstart` event if an element is activated using
            // the keyboard while on a device with a touchsreen. Consider such events as keyboard focus.
            if (!isFakeTouchstartFromScreenReader(event)) {
              // When the touchstart event fires the focus event is not yet in the event queue. This means
              // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
              // see if a focus happens.
              if (_this54._touchTimeoutId != null) {
                clearTimeout(_this54._touchTimeoutId);
              }

              _this54._lastTouchTarget = getTarget(event);
              _this54._touchTimeoutId = setTimeout(function () {
                return _this54._lastTouchTarget = null;
              }, TOUCH_BUFFER_MS);
            } else if (!_this54._lastTouchTarget) {
              _this54._setOriginForCurrentEventQueue('keyboard');
            }
          };
          /**
           * Event listener for `focus` events on the window.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._windowFocusListener = function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this54._windowFocused = true;
            _this54._windowFocusTimeoutId = setTimeout(function () {
              return _this54._windowFocused = false;
            });
          };
          /**
           * Event listener for `focus` and 'blur' events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._rootNodeFocusAndBlurListener = function (event) {
            var target = getTarget(event);
            var handler = event.type === 'focus' ? _this54._onFocus : _this54._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

            for (var element = target; element; element = element.parentElement) {
              handler.call(_this54, event, element);
            }
          };

          this._document = document;
          this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
          /* IMMEDIATE */
          ;
        }

        _createClass(FocusMonitor, [{
          key: "monitor",
          value: function monitor(element) {
            var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

            if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
            // the shadow root, rather than the `document`, because the browser won't emit focus events
            // to the `document`, if focus is moving within the same shadow root.


            var rootNode = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["_getShadowRoot"])(nativeElement) || this._getDocument();

            var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


            if (cachedInfo) {
              if (checkChildren) {
                // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                // observers into ones that behave as if `checkChildren` was turned on. We need a more
                // robust solution.
                cachedInfo.checkChildren = true;
              }

              return cachedInfo.subject;
            } // Create monitored element info.


            var info = {
              checkChildren: checkChildren,
              subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
              rootNode: rootNode
            };

            this._elementInfo.set(nativeElement, info);

            this._registerGlobalListeners(info);

            return info.subject;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(element) {
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

            var elementInfo = this._elementInfo.get(nativeElement);

            if (elementInfo) {
              elementInfo.subject.complete();

              this._setClasses(nativeElement);

              this._elementInfo["delete"](nativeElement);

              this._removeGlobalListeners(elementInfo);
            }
          }
        }, {
          key: "focusVia",
          value: function focusVia(element, origin, options) {
            var _this55 = this;

            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

            var focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
            // which means that the focus classes won't be updated. If that's the case, update the classes
            // directly without waiting for an event.


            if (nativeElement === focusedElement) {
              this._getClosestElementsInfo(nativeElement).forEach(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                    currentElement = _ref3[0],
                    info = _ref3[1];

                return _this55._originChanged(currentElement, origin, info);
              });
            } else {
              this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


              if (typeof nativeElement.focus === 'function') {
                nativeElement.focus(options);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this56 = this;

            this._elementInfo.forEach(function (_info, element) {
              return _this56.stopMonitoring(element);
            });
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(element, className, shouldSet) {
            if (shouldSet) {
              element.classList.add(className);
            } else {
              element.classList.remove(className);
            }
          }
        }, {
          key: "_getFocusOrigin",
          value: function _getFocusOrigin(event) {
            // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
            // 1) The window has just regained focus, in which case we want to restore the focused state of
            //    the element from before the window blurred.
            // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
            // 3) The element was programmatically focused, in which case we should mark the origin as
            //    'program'.
            if (this._origin) {
              return this._origin;
            }

            if (this._windowFocused && this._lastFocusOrigin) {
              return this._lastFocusOrigin;
            } else if (this._wasCausedByTouch(event)) {
              return 'touch';
            } else {
              return 'program';
            }
          }
          /**
           * Sets the focus classes on the element based on the given focus origin.
           * @param element The element to update the classes on.
           * @param origin The focus origin.
           */

        }, {
          key: "_setClasses",
          value: function _setClasses(element, origin) {
            this._toggleClass(element, 'cdk-focused', !!origin);

            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
          }
          /**
           * Sets the origin and schedules an async function to clear it at the end of the event queue.
           * If the detection mode is 'eventual', the origin is never cleared.
           * @param origin The origin to set.
           */

        }, {
          key: "_setOriginForCurrentEventQueue",
          value: function _setOriginForCurrentEventQueue(origin) {
            var _this57 = this;

            this._ngZone.runOutsideAngular(function () {
              _this57._origin = origin;

              if (_this57._detectionMode === 0
              /* IMMEDIATE */
              ) {
                  // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                  // tick after the interaction event fired. To ensure the focus origin is always correct,
                  // the focus origin will be determined at the beginning of the next tick.
                  _this57._originTimeoutId = setTimeout(function () {
                    return _this57._origin = null;
                  }, 1);
                }
            });
          }
          /**
           * Checks whether the given focus event was caused by a touchstart event.
           * @param event The focus event to check.
           * @returns Whether the event was caused by a touch.
           */

        }, {
          key: "_wasCausedByTouch",
          value: function _wasCausedByTouch(event) {
            // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
            // Consider the following dom structure:
            //
            // <div #parent tabindex="0" cdkFocusClasses>
            //   <div #child (click)="#parent.focus()"></div>
            // </div>
            //
            // If the user touches the #child element and the #parent is programmatically focused as a
            // result, this code will still consider it to have been caused by the touch event and will
            // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
            // relatively small edge-case that can be worked around by using
            // focusVia(parentEl, 'program') to focus the parent element.
            //
            // If we decide that we absolutely must handle this case correctly, we can do so by listening
            // for the first focus event after the touchstart, and then the first blur event after that
            // focus event. When that blur event fires we know that whatever follows is not a result of the
            // touchstart.
            var focusTarget = getTarget(event);
            return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
          }
          /**
           * Handles focus events on a registered element.
           * @param event The focus event.
           * @param element The monitored element.
           */

        }, {
          key: "_onFocus",
          value: function _onFocus(event, element) {
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // If we are not counting child-element-focus as focused, make sure that the event target is the
            // monitored element itself.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || !elementInfo.checkChildren && element !== getTarget(event)) {
              return;
            }

            this._originChanged(element, this._getFocusOrigin(event), elementInfo);
          }
          /**
           * Handles blur events on a registered element.
           * @param event The blur event.
           * @param element The monitored element.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur(event, element) {
            // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
            // order to focus another child of the monitored element.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
              return;
            }

            this._setClasses(element);

            this._emitOrigin(elementInfo.subject, null);
          }
        }, {
          key: "_emitOrigin",
          value: function _emitOrigin(subject, origin) {
            this._ngZone.run(function () {
              return subject.next(origin);
            });
          }
        }, {
          key: "_registerGlobalListeners",
          value: function _registerGlobalListeners(elementInfo) {
            var _this58 = this;

            if (!this._platform.isBrowser) {
              return;
            }

            var rootNode = elementInfo.rootNode;
            var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

            if (!rootNodeFocusListeners) {
              this._ngZone.runOutsideAngular(function () {
                rootNode.addEventListener('focus', _this58._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener('blur', _this58._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              });
            }

            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


            if (++this._monitoredElementCount === 1) {
              // Note: we listen to events in the capture phase so we
              // can detect them even if the user stops propagation.
              this._ngZone.runOutsideAngular(function () {
                var document = _this58._getDocument();

                var window = _this58._getWindow();

                document.addEventListener('keydown', _this58._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', _this58._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', _this58._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', _this58._windowFocusListener);
              });
            }
          }
        }, {
          key: "_removeGlobalListeners",
          value: function _removeGlobalListeners(elementInfo) {
            var rootNode = elementInfo.rootNode;

            if (this._rootNodeFocusListenerCount.has(rootNode)) {
              var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

              if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
              } else {
                rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

                this._rootNodeFocusListenerCount["delete"](rootNode);
              }
            } // Unregister global listeners when last element is unmonitored.


            if (! --this._monitoredElementCount) {
              var _document2 = this._getDocument();

              var _window = this._getWindow();

              _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

              _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

              _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

              _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


              clearTimeout(this._windowFocusTimeoutId);
              clearTimeout(this._touchTimeoutId);
              clearTimeout(this._originTimeoutId);
            }
          }
          /** Updates all the state on an element once its focus origin has changed. */

        }, {
          key: "_originChanged",
          value: function _originChanged(element, origin, elementInfo) {
            this._setClasses(element, origin);

            this._emitOrigin(elementInfo.subject, origin);

            this._lastFocusOrigin = origin;
          }
          /**
           * Collects the `MonitoredElementInfo` of a particular element and
           * all of its ancestors that have enabled `checkChildren`.
           * @param element Element from which to start the search.
           */

        }, {
          key: "_getClosestElementsInfo",
          value: function _getClosestElementsInfo(element) {
            var results = [];

            this._elementInfo.forEach(function (info, currentElement) {
              if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
                results.push([currentElement, info]);
              }
            });

            return results;
          }
        }]);

        return FocusMonitor;
      }();

      FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
        return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      };

      FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusMonitor_Factory() {
          return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
        },
        token: FocusMonitor,
        providedIn: "root"
      });

      FocusMonitor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /** Gets the target of an event, accounting for Shadow DOM. */


      function getTarget(event) {
        // If an event is bound outside the Shadow DOM, the `event.target` will
        // point to the shadow root so we have to use `composedPath` instead.
        return event.composedPath ? event.composedPath()[0] : event.target;
      }
      /**
       * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
       * programmatically) and adds corresponding classes to the element.
       *
       * There are two variants of this directive:
       * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
       *    focused.
       * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
       */


      var CdkMonitorFocus = /*#__PURE__*/function () {
        function CdkMonitorFocus(_elementRef, _focusMonitor) {
          _classCallCheck(this, CdkMonitorFocus);

          this._elementRef = _elementRef;
          this._focusMonitor = _focusMonitor;
          this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkMonitorFocus, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this59 = this;

            var element = this._elementRef.nativeElement;
            this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(function (origin) {
              return _this59.cdkFocusChange.emit(origin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            if (this._monitorSubscription) {
              this._monitorSubscription.unsubscribe();
            }
          }
        }]);

        return CdkMonitorFocus;
      }();

      CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
        return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
      };

      CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
          cdkFocusChange: "cdkFocusChange"
        }
      });

      CdkMonitorFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      };

      CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusMonitor
          }];
        }, {
          cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** CSS class applied to the document body when in black-on-white high-contrast mode. */


      var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
      /** CSS class applied to the document body when in white-on-black high-contrast mode. */

      var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
      /** CSS class applied to the document body when in high-contrast mode. */

      var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
      /**
       * Service to determine whether the browser is currently in a high-contrast-mode environment.
       *
       * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
       * changes the appearance of all applications, including web applications, to dramatically increase
       * contrast.
       *
       * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
       * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
       * browser extension.
       */

      var HighContrastModeDetector = /*#__PURE__*/function () {
        function HighContrastModeDetector(_platform, document) {
          _classCallCheck(this, HighContrastModeDetector);

          this._platform = _platform;
          this._document = document;
        }
        /** Gets the current high-contrast-mode for the page. */


        _createClass(HighContrastModeDetector, [{
          key: "getHighContrastMode",
          value: function getHighContrastMode() {
            if (!this._platform.isBrowser) {
              return 0
              /* NONE */
              ;
            } // Create a test element with an arbitrary background-color that is neither black nor
            // white; high-contrast mode will coerce the color to either black or white. Also ensure that
            // appending the test element to the DOM does not affect layout by absolutely positioning it


            var testElement = this._document.createElement('div');

            testElement.style.backgroundColor = 'rgb(1,2,3)';
            testElement.style.position = 'absolute';

            this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
            // browsers. Once we get this color, we no longer need the test element. Access the `window`
            // via the document so we can fake it in tests. Note that we have extra null checks, because
            // this logic will likely run during app bootstrap and throwing can break the entire app.


            var documentWindow = this._document.defaultView || window;
            var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
            var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

            this._document.body.removeChild(testElement);

            switch (computedColor) {
              case 'rgb(0,0,0)':
                return 2
                /* WHITE_ON_BLACK */
                ;

              case 'rgb(255,255,255)':
                return 1
                /* BLACK_ON_WHITE */
                ;
            }

            return 0
            /* NONE */
            ;
          }
          /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */

        }, {
          key: "_applyBodyHighContrastModeCssClasses",
          value: function _applyBodyHighContrastModeCssClasses() {
            if (this._platform.isBrowser && this._document.body) {
              var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

              bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
              bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
              bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
              var mode = this.getHighContrastMode();

              if (mode === 1
              /* BLACK_ON_WHITE */
              ) {
                  bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                  bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
                } else if (mode === 2
              /* WHITE_ON_BLACK */
              ) {
                  bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                  bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
                }
            }
          }
        }]);

        return HighContrastModeDetector;
      }();

      HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
        return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function HighContrastModeDetector_Factory() {
          return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: HighContrastModeDetector,
        providedIn: "root"
      });

      HighContrastModeDetector.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var A11yModule = function A11yModule(highContrastModeDetector) {
        _classCallCheck(this, A11yModule);

        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
      };

      A11yModule.ɵfac = function A11yModule_Factory(t) {
        return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector));
      };

      A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: A11yModule
      });
      A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
      });

      A11yModule.ctorParameters = function () {
        return [{
          type: HighContrastModeDetector
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
          declarations: function declarations() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
          },
          exports: function exports() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
            declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
            exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
          }]
        }], function () {
          return [{
            type: HighContrastModeDetector
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=a11y.js.map

      /***/

    },

    /***/
    "vxfF":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
      \**********************************************************************/

    /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

    /***/
    function vxfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
        return CdkFixedSizeVirtualScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return CdkScrollable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
        return CdkScrollableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
        return CdkVirtualForOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
        return CdkVirtualScrollViewport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
        return DEFAULT_RESIZE_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
        return DEFAULT_SCROLL_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
        return FixedSizeVirtualScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return ScrollDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
        return ScrollingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
        return VIRTUAL_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return ViewportRuler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
        return _fixedSizeVirtualScrollStrategyFactory;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the virtual scrolling strategy. */


      var _c0 = ["contentWrapper"];
      var _c1 = ["*"];
      var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Virtual scrolling strategy for lists with items of known fixed size. */

      var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */
        function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
          _classCallCheck(this, FixedSizeVirtualScrollStrategy);

          this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          /** The attached viewport. */

          this._viewport = null;
          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;
        }
        /**
         * Attaches this scroll strategy to a viewport.
         * @param viewport The viewport to attach this strategy to.
         */


        _createClass(FixedSizeVirtualScrollStrategy, [{
          key: "attach",
          value: function attach(viewport) {
            this._viewport = viewport;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** Detaches this scroll strategy from the currently attached viewport. */

        }, {
          key: "detach",
          value: function detach() {
            this._scrolledIndexChange.complete();

            this._viewport = null;
          }
          /**
           * Update the item size and buffer size.
           * @param itemSize The size of the items in the virtually scrolling list.
           * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           */

        }, {
          key: "updateItemAndBufferSize",
          value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
            if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
            }

            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentScrolled",
          value: function onContentScrolled() {
            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onDataLengthChanged",
          value: function onDataLengthChanged() {
            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentRendered",
          value: function onContentRendered() {}
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onRenderedOffsetChanged",
          value: function onRenderedOffsetChanged() {}
          /**
           * Scroll to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index, behavior) {
            if (this._viewport) {
              this._viewport.scrollToOffset(index * this._itemSize, behavior);
            }
          }
          /** Update the viewport's total content size. */

        }, {
          key: "_updateTotalContentSize",
          value: function _updateTotalContentSize() {
            if (!this._viewport) {
              return;
            }

            this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
          }
          /** Update the viewport's rendered range. */

        }, {
          key: "_updateRenderedRange",
          value: function _updateRenderedRange() {
            if (!this._viewport) {
              return;
            }

            var renderedRange = this._viewport.getRenderedRange();

            var newRange = {
              start: renderedRange.start,
              end: renderedRange.end
            };

            var viewportSize = this._viewport.getViewportSize();

            var dataLength = this._viewport.getDataLength();

            var scrollOffset = this._viewport.measureScrollOffset(); // Prevent NaN as result when dividing by zero.


            var firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0; // If user scrolls to the bottom of the list and data changes to a smaller list

            if (newRange.end > dataLength) {
              // We have to recalculate the first visible index based on new data length and viewport size.
              var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
              var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
              // Current range must also be adjusted to cover the new position (bottom of new list).

              if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
              }

              newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
            }

            var startBuffer = scrollOffset - newRange.start * this._itemSize;

            if (startBuffer < this._minBufferPx && newRange.start != 0) {
              var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
              newRange.start = Math.max(0, newRange.start - expandStart);
              newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
            } else {
              var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

              if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

                if (expandEnd > 0) {
                  newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                  newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
              }
            }

            this._viewport.setRenderedRange(newRange);

            this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
          }
        }]);

        return FixedSizeVirtualScrollStrategy;
      }();
      /**
       * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
       * `FixedSizeVirtualScrollStrategy` from the given directive.
       * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
       *     `FixedSizeVirtualScrollStrategy` from.
       */


      function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
        return fixedSizeDir._scrollStrategy;
      }
      /** A virtual scroll strategy that supports fixed-size items. */


      var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /** The scroll strategy used by this directive. */

          this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */


        _createClass(CdkFixedSizeVirtualScroll, [{
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(value) {
            this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          },
          set: function set(value) {
            this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          },
          set: function set(value) {
            this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }]);

        return CdkFixedSizeVirtualScroll;
      }();

      CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
        return new (t || CdkFixedSizeVirtualScroll)();
      };

      CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return CdkFixedSizeVirtualScroll;
          })]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport[itemSize]',
            providers: [{
              provide: VIRTUAL_SCROLL_STRATEGY,
              useFactory: _fixedSizeVirtualScrollStrategyFactory,
              deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return CdkFixedSizeVirtualScroll;
              })]
            }]
          }]
        }], function () {
          return [];
        }, {
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the scrolling events by default. */


      var DEFAULT_SCROLL_TIME = 20;
      /**
       * Service contained all registered Scrollable references and emits an event when any one of the
       * Scrollable references emit a scrolled event.
       */

      var ScrollDispatcher = /*#__PURE__*/function () {
        function ScrollDispatcher(_ngZone, _platform, document) {
          _classCallCheck(this, ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** Subject for notifying that a registered scrollable reference element has been scrolled. */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Keeps track of the global `scroll` and `resize` subscriptions. */

          this._globalSubscription = null;
          /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
          this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */


        _createClass(ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this60 = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
                return _this60._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this61 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              if (!_this61._globalSubscription) {
                _this61._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.


              var subscription = auditTimeInMs > 0 ? _this61._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this61._scrolled.subscribe(observer);
              _this61._scrolledCount++;
              return function () {
                subscription.unsubscribe();
                _this61._scrolledCount--;

                if (!_this61._scrolledCount) {
                  _this61._removeGlobalListener();
                }
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this62 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(function (_, container) {
              return _this62.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementOrElementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementOrElementRef, auditTimeInMs) {
            var ancestors = this.getAncestorScrollContainers(elementOrElementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /** Returns all registered Scrollables that contain the provided element. */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementOrElementRef) {
            var _this63 = this;

            var scrollingContainers = [];
            this.scrollContainers.forEach(function (_subscription, scrollable) {
              if (_this63._scrollableContainsElement(scrollable, elementOrElementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementOrElementRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrElementRef);
            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element = element.parentElement);

            return false;
          }
          /** Sets up the global scroll listeners. */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this64 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              var window = _this64._getWindow();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () {
                return _this64._scrolled.next();
              });
            });
          }
          /** Cleans up the global scroll listener. */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return ScrollDispatcher;
      }();

      ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
        return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollDispatcher_Factory() {
          return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ScrollDispatcher,
        providedIn: "root"
      });

      ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Sends an event when the directive's element is scrolled. Registers itself with the
       * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
       * can be listened to through the service.
       */


      var CdkScrollable = /*#__PURE__*/function () {
        function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this65 = this;

          _classCallCheck(this, CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this65.ngZone.runOutsideAngular(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this65.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this65._destroyed)).subscribe(observer);
            });
          });
        }

        _createClass(CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            var el = this.elementRef.nativeElement;
            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.


            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
            /* NORMAL */
            ) {
                if (options.left != null) {
                  options.right = el.scrollWidth - el.clientWidth - options.left;
                }

                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
                /* INVERTED */
                ) {
                    options.left = options.right;
                  } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
                /* NEGATED */
                ) {
                    options.left = options.right ? -options.right : options.right;
                  }
              } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            var el = this.elementRef.nativeElement;

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            var LEFT = 'left';
            var RIGHT = 'right';
            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
            /* INVERTED */
            ) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollWidth - el.clientWidth - el.scrollLeft;
                } else {
                  return el.scrollLeft;
                }
              } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
            /* NEGATED */
            ) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollLeft + el.scrollWidth - el.clientWidth;
                } else {
                  return -el.scrollLeft;
                }
              } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return CdkScrollable;
      }();

      CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
        return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
      };

      CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
      });

      CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-scrollable], [cdkScrollable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the resize events by default. */


      var DEFAULT_RESIZE_TIME = 20;
      /**
       * Simple utility for getting the bounds of the browser viewport.
       * @docs-private
       */

      var ViewportRuler = /*#__PURE__*/function () {
        function ViewportRuler(_platform, ngZone, document) {
          var _this66 = this;

          _classCallCheck(this, ViewportRuler);

          this._platform = _platform;
          /** Stream of viewport change events. */

          this._change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Event listener that will be used to handle the viewport change events. */

          this._changeListener = function (event) {
            _this66._change.next(event);
          };

          this._document = document;
          ngZone.runOutsideAngular(function () {
            if (_platform.isBrowser) {
              var _window2 = _this66._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
              // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


              _window2.addEventListener('resize', _this66._changeListener);

              _window2.addEventListener('orientationchange', _this66._changeListener);
            } // We don't need to keep track of the subscription,
            // because we complete the `change` stream on destroy.


            _this66.change().subscribe(function () {
              return _this66._updateViewportSize();
            });
          });
        }

        _createClass(ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._platform.isBrowser) {
              var _window3 = this._getWindow();

              _window3.removeEventListener('resize', this._changeListener);

              _window3.removeEventListener('orientationchange', this._changeListener);
            }

            this._change.complete();
          }
          /** Returns the viewport's width and height. */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.


            var document = this._document;

            var window = this._getWindow();

            var documentElement = document.documentElement;
            var documentRect = documentElement.getBoundingClientRect();
            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /** Updates the cached viewport size. */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            var window = this._getWindow();

            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return ViewportRuler;
      }();

      ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
        return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ViewportRuler_Factory() {
          return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ViewportRuler,
        providedIn: "root"
      });

      ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Checks if the given ranges are equal. */


      function rangesEqual(r1, r2) {
        return r1.start == r2.start && r1.end == r2.end;
      }
      /**
       * Scheduler to be used for scroll events. Needs to fall back to
       * something that doesn't rely on requestAnimationFrame on environments
       * that don't support it (e.g. server-side rendering).
       */


      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
      /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

      var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
        _inherits(CdkVirtualScrollViewport, _CdkScrollable);

        var _super27 = _createSuper(CdkVirtualScrollViewport);

        function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler) {
          var _this67;

          _classCallCheck(this, CdkVirtualScrollViewport);

          _this67 = _super27.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this67.elementRef = elementRef;
          _this67._changeDetectorRef = _changeDetectorRef;
          _this67._scrollStrategy = _scrollStrategy;
          /** Emits when the viewport is detached from a CdkVirtualForOf. */

          _this67._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits when the rendered range changes. */

          _this67._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this67._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /** Emits when the index of the first element visible in the viewport changes. */

          _this67.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this67._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
              return Promise.resolve().then(function () {
                return _this67.ngZone.run(function () {
                  return observer.next(index);
                });
              });
            });
          });
          /** A stream that emits whenever the rendered range changes. */

          _this67.renderedRangeStream = _this67._renderedRangeSubject;
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this67._totalContentSize = 0;
          /** A string representing the `style.width` property value to be used for the spacer element. */

          _this67._totalContentWidth = '';
          /** A string representing the `style.height` property value to be used for the spacer element. */

          _this67._totalContentHeight = '';
          /** The currently rendered range of indices. */

          _this67._renderedRange = {
            start: 0,
            end: 0
          };
          /** The length of the data bound to this viewport (in number of items). */

          _this67._dataLength = 0;
          /** The size of the viewport (in pixels). */

          _this67._viewportSize = 0;
          /** The last rendered content offset that was set. */

          _this67._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this67._renderedContentOffsetNeedsRewrite = false;
          /** Whether there is a pending change detection cycle. */

          _this67._isChangeDetectionPending = false;
          /** A list of functions to run after the next change detection cycle. */

          _this67._runAfterChangeDetection = [];
          /** Subscription to changes in the viewport size. */

          _this67._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

          if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          }

          _this67._viewportChanges = viewportRuler.change().subscribe(function () {
            _this67.checkViewportSize();
          });
          return _this67;
        }
        /** The direction the viewport scrolls. */


        _createClass(CdkVirtualScrollViewport, [{
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this68 = this;

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this68._measureViewportSize();

                _this68._scrollStrategy.attach(_this68);

                _this68.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
                  return _this68._scrollStrategy.onContentScrolled();
                });

                _this68._markChangeDetectionNeeded();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this69 = this;

            if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(function () {
              _this69._forOf = forOf;

              _this69._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this69._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;

                if (newLength !== _this69._dataLength) {
                  _this69._dataLength = newLength;

                  _this69._scrollStrategy.onDataLengthChanged();
                }

                _this69._doChangeDetection();
              });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this70 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(function () {
                return _this70._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this71 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            var isRtl = this.dir && this.dir.value == 'rtl';
            var isHorizontal = this.orientation == 'horizontal';
            var axis = isHorizontal ? 'X' : 'Y';
            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(function () {
                if (_this71._renderedContentOffsetNeedsRewrite) {
                  _this71._renderedContentOffset -= _this71.measureRenderedContentSize();
                  _this71._renderedContentOffsetNeedsRewrite = false;

                  _this71.setRenderedContentOffset(_this71._renderedContentOffset);
                } else {
                  _this71._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /** Measure the combined size of all of the rendered items. */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this72 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(function () {
                return Promise.resolve().then(function () {
                  _this72._doChangeDetection();
                });
              });
            }
          }
          /** Run change detection. */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this73 = this;

            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(function () {
              return _this73._changeDetectorRef.markForCheck();
            });
            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator4 = _createForOfIteratorHelper(runAfterChangeDetection),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var fn = _step4.value;
                fn();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }]);

        return CdkVirtualScrollViewport;
      }(CdkScrollable);

      CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
        return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler));
      };

      CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation"
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 4,
        consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler
        }];
      };

      CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport',
            template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
            host: {
              'class': 'cdk-virtual-scroll-viewport',
              '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
              '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: CdkScrollable,
              useExisting: CdkVirtualScrollViewport
            }],
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [VIRTUAL_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: ScrollDispatcher
          }, {
            type: ViewportRuler
          }];
        }, {
          scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentWrapper', {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Helper to extract the offset of a DOM Node in a certain direction. */


      function getOffset(orientation, direction, node) {
        var el = node;

        if (!el.getBoundingClientRect) {
          return 0;
        }

        var rect = el.getBoundingClientRect();

        if (orientation === 'horizontal') {
          return direction === 'start' ? rect.left : rect.right;
        }

        return direction === 'start' ? rect.top : rect.bottom;
      }
      /**
       * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
       * container.
       */


      var CdkVirtualForOf = /*#__PURE__*/function () {
        function CdkVirtualForOf(
        /** The view container to add items to. */
        _viewContainerRef,
        /** The template to use when stamping out new items. */
        _template,
        /** The set of available differs. */
        _differs,
        /** The strategy used to render items in the virtual scroll viewport. */
        _viewRepeater,
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
          var _this74 = this;

          _classCallCheck(this, CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewRepeater = _viewRepeater;
          this._viewport = _viewport;
          /** Emits when the rendered view of the data changes. */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Subject that emits when a new DataSource instance is given. */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits whenever the data in the current DataSource changes. */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                prev = _ref5[0],
                cur = _ref5[1];

            return _this74._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          /** The differ used to calculate changes to the data. */

          this._differ = null;
          /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.dataStream.subscribe(function (data) {
            _this74._data = data;

            _this74._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this74._renderedRange = range;
            ngZone.run(function () {
              return _this74.viewChange.next(_this74._renderedRange);
            });

            _this74._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /** The DataSource to display. */


        _createClass(CdkVirtualForOf, [{
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          },
          set: function set(value) {
            this._cdkVirtualForOf = value;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
              this._dataSourceChanges.next(value);
            } else {
              // If value is an an NgIterable, convert it to an array.
              this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.from(value || [])));
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          },
          set: function set(fn) {
            var _this75 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ? function (index, item) {
              return fn(index + (_this75._renderedRange ? _this75._renderedRange.start : 0), item);
            } : undefined;
          }
          /** The template used to stamp out new elements. */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

        }, {
          key: "cdkVirtualForTemplateCacheSize",
          get: function get() {
            return this._viewRepeater.viewCacheSize;
          },
          set: function set(size) {
            this._viewRepeater.viewCacheSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);
          }
          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            var rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
            // the top of the first node from the bottom of the last one.

            var firstNode;
            var lastNode; // Find the first node by starting from the beginning and going forwards.

            for (var i = 0; i < rangeLen; i++) {
              var view = this._viewContainerRef.get(i + renderedStartIndex);

              if (view && view.rootNodes.length) {
                firstNode = lastNode = view.rootNodes[0];
                break;
              }
            } // Find the last node by starting from the end and going backwards.


            for (var _i2 = rangeLen - 1; _i2 > -1; _i2--) {
              var _view = this._viewContainerRef.get(_i2 + renderedStartIndex);

              if (_view && _view.rootNodes.length) {
                lastNode = _view.rootNodes[_view.rootNodes.length - 1];
                break;
              }
            }

            return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next(undefined);

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            this._viewRepeater.detach();
          }
          /** React to scroll state changes in the viewport. */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            var _this76 = this;

            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              // Use a wrapper function for the `trackBy` so any new values are
              // picked up automatically without having to recreate the differ.
              this._differ = this._differs.find(this._renderedItems).create(function (index, item) {
                return _this76.cdkVirtualForTrackBy ? _this76.cdkVirtualForTrackBy(index, item) : item;
              });
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this77 = this;

            this._viewRepeater.applyChanges(changes, this._viewContainerRef, function (record, _adjustedPreviousIndex, currentIndex) {
              return _this77._getEmbeddedViewArgs(record, currentIndex);
            }, function (record) {
              return record.item;
            }); // Update $implicit for any items that had an identity change.


            changes.forEachIdentityChange(function (record) {
              var view = _this77._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
        }, {
          key: "_getEmbeddedViewArgs",
          value: function _getEmbeddedViewArgs(record, index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return {
              templateRef: this._template,
              context: {
                $implicit: record.item,
                // It's guaranteed that the iterable is not "undefined" or "null" because we only
                // generate views for elements if the "cdkVirtualForOf" iterable has elements.
                cdkVirtualForOf: this._cdkVirtualForOf,
                index: -1,
                count: -1,
                first: false,
                last: false,
                odd: false,
                even: false
              },
              index: index
            };
          }
        }]);

        return CdkVirtualForOf;
      }();

      CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
        return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate",
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"]
        }])]
      });

      CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
          }]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkVirtualFor][cdkVirtualForOf]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"]
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
            }]
          }, {
            type: CdkVirtualScrollViewport,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkScrollableModule = function CdkScrollableModule() {
        _classCallCheck(this, CdkScrollableModule);
      };

      CdkScrollableModule.ɵfac = function CdkScrollableModule_Factory(t) {
        return new (t || CdkScrollableModule)();
      };

      CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CdkScrollableModule
      });
      CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
          declarations: [CdkScrollable],
          exports: [CdkScrollable]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkScrollable],
            declarations: [CdkScrollable]
          }]
        }], null, null);
      })();
      /**
       * @docs-primary-export
       */


      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      };

      ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
      ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
          declarations: function declarations() {
            return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
            declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=scrolling.js.map

      /***/

    },

    /***/
    "wZkO":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b, ɵangular_material_src_material_tabs_tabs_c, ɵangular_material_src_material_tabs_tabs_d */

    /***/
    function wZkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () {
        return MAT_TABS_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function () {
        return MAT_TAB_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInkBar", function () {
        return MatInkBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTab", function () {
        return MatTab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabBody", function () {
        return MatTabBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () {
        return MatTabBodyPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () {
        return MatTabChangeEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabContent", function () {
        return MatTabContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () {
        return MatTabGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () {
        return MatTabHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () {
        return MatTabLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () {
        return MatTabLabelWrapper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabLink", function () {
        return MatTabLink;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabNav", function () {
        return MatTabNav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () {
        return MatTabsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () {
        return _MAT_INK_BAR_POSITIONER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () {
        return _MatTabBodyBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () {
        return _MatTabGroupBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () {
        return _MatTabHeaderBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () {
        return _MatTabLinkBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () {
        return _MatTabNavBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () {
        return matTabsAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function () {
        return _MAT_INK_BAR_POSITIONER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function () {
        return MAT_TAB_LABEL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_c", function () {
        return MAT_TAB_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_d", function () {
        return MatPaginatedTabHeader;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token for the MatInkBar's Positioner. */


      function MatTab_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      function MatTabBody_ng_template_2_Template(rf, ctx) {}

      var _c1 = function _c1(a0) {
        return {
          animationDuration: a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          value: a0,
          params: a1
        };
      };

      var _c3 = ["tabBodyWrapper"];
      var _c4 = ["tabHeader"];

      function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

      function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
        }

        if (rf & 2) {
          var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
        }
      }

      function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r4.textLabel);
        }
      }

      function MatTabGroup_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var tab_r4 = ctx.$implicit;
            var i_r5 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            return ctx_r11._handleClick(tab_r4, _r0, i_r5);
          })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var i_r5 = ctx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13._tabFocusChanged($event, i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
        }
      }

      function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16._removeTabBodyWrapperHeight();
          })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18._setTabBodyWrapperHeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r15))("content", tab_r14.content)("position", tab_r14.position)("origin", tab_r14.origin)("animationDuration", ctx_r3.animationDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r15));
        }
      }

      var _c5 = ["tabListContainer"];
      var _c6 = ["tabList"];
      var _c7 = ["nextPaginator"];
      var _c8 = ["previousPaginator"];
      var _c9 = ["mat-tab-nav-bar", ""];

      var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
        providedIn: 'root',
        factory: _MAT_INK_BAR_POSITIONER_FACTORY
      });
      /**
       * The default positioner function for the MatInkBar.
       * @docs-private
       */


      function _MAT_INK_BAR_POSITIONER_FACTORY() {
        var method = function method(element) {
          return {
            left: element ? (element.offsetLeft || 0) + 'px' : '0',
            width: element ? (element.offsetWidth || 0) + 'px' : '0'
          };
        };

        return method;
      }
      /**
       * The ink-bar is used to display and animate the line underneath the current active tab label.
       * @docs-private
       */


      var MatInkBar = /*#__PURE__*/function () {
        function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
          _classCallCheck(this, MatInkBar);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._inkBarPositioner = _inkBarPositioner;
          this._animationMode = _animationMode;
        }
        /**
         * Calculates the styles from the provided element in order to align the ink-bar to that element.
         * Shows the ink bar if previously set as hidden.
         * @param element
         */


        _createClass(MatInkBar, [{
          key: "alignToElement",
          value: function alignToElement(element) {
            var _this78 = this;

            this.show();

            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  return _this78._setStyles(element);
                });
              });
            } else {
              this._setStyles(element);
            }
          }
          /** Shows the ink bar. */

        }, {
          key: "show",
          value: function show() {
            this._elementRef.nativeElement.style.visibility = 'visible';
          }
          /** Hides the ink bar. */

        }, {
          key: "hide",
          value: function hide() {
            this._elementRef.nativeElement.style.visibility = 'hidden';
          }
          /**
           * Sets the proper styles to the ink bar element.
           * @param element
           */

        }, {
          key: "_setStyles",
          value: function _setStyles(element) {
            var positions = this._inkBarPositioner(element);

            var inkBar = this._elementRef.nativeElement;
            inkBar.style.left = positions.left;
            inkBar.style.width = positions.width;
          }
        }]);

        return MatInkBar;
      }();

      MatInkBar.ɵfac = function MatInkBar_Factory(t) {
        return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatInkBar,
        selectors: [["mat-ink-bar"]],
        hostAttrs: [1, "mat-ink-bar"],
        hostVars: 2,
        hostBindings: function MatInkBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        }
      });

      MatInkBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_MAT_INK_BAR_POSITIONER]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'mat-ink-bar',
            host: {
              'class': 'mat-ink-bar',
              '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_MAT_INK_BAR_POSITIONER]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatTabContent`. It serves as
       * alternative token to the actual `MatTabContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabContent');
      /** Decorates the `ng-template` tags and reads out the template from it. */

      var MatTabContent = function MatTabContent(
      /** Content for the tab. */
      template) {
        _classCallCheck(this, MatTabContent);

        this.template = template;
      };

      MatTabContent.ɵfac = function MatTabContent_Factory(t) {
        return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
      };

      MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabContent,
        selectors: [["", "matTabContent", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_CONTENT,
          useExisting: MatTabContent
        }])]
      });

      MatTabContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matTabContent]',
            providers: [{
              provide: MAT_TAB_CONTENT,
              useExisting: MatTabContent
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
       * alternative token to the actual `MatTabLabel` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabLabel');
      /** Used to flag tab labels for use with the portal directive */

      var MatTabLabel = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(MatTabLabel, _angular_cdk_portal__);

        var _super28 = _createSuper(MatTabLabel);

        function MatTabLabel() {
          _classCallCheck(this, MatTabLabel);

          return _super28.apply(this, arguments);
        }

        return MatTabLabel;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"]);

      MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
        return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
      };

      MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabLabel,
        selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_LABEL,
          useExisting: MatTabLabel
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatTabLabel_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[mat-tab-label], [matTabLabel]',
            providers: [{
              provide: MAT_TAB_LABEL,
              useExisting: MatTabLabel
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatTab.

      /** @docs-private */


      var MatTabBase = function MatTabBase() {
        _classCallCheck(this, MatTabBase);
      };

      var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
      /**
       * Used to provide a tab group to a tab without causing a circular dependency.
       * @docs-private
       */


      var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');

      var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
        _inherits(MatTab, _MatTabMixinBase2);

        var _super29 = _createSuper(MatTab);

        function MatTab(_viewContainerRef, _closestTabGroup) {
          var _this79;

          _classCallCheck(this, MatTab);

          _this79 = _super29.call(this);
          _this79._viewContainerRef = _viewContainerRef;
          _this79._closestTabGroup = _closestTabGroup;
          /** Plain text label for the tab, used when there is no template label. */

          _this79.textLabel = '';
          /** Portal that will be the hosted content of the tab */

          _this79._contentPortal = null;
          /** Emits whenever the internal state of the tab changes. */

          _this79._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * The relatively indexed position where 0 represents the center, negative is left, and positive
           * represents the right.
           */

          _this79.position = null;
          /**
           * The initial relatively index origin of the tab if it was created and selected after there
           * was already a selected tab. Provides context of what position the tab should originate from.
           */

          _this79.origin = null;
          /**
           * Whether the tab is currently active.
           */

          _this79.isActive = false;
          return _this79;
        }
        /** Content for the tab label given by `<ng-template mat-tab-label>`. */


        _createClass(MatTab, [{
          key: "templateLabel",
          get: function get() {
            return this._templateLabel;
          },
          set: function set(value) {
            this._setTemplateLabelInput(value);
          }
          /** @docs-private */

        }, {
          key: "content",
          get: function get() {
            return this._contentPortal;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
              this._stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setTemplateLabelInput",
          value: function _setTemplateLabelInput(value) {
            // Only update the templateLabel via query if there is actually
            // a MatTabLabel found. This works around an issue where a user may have
            // manually set `templateLabel` during creation mode, which would then get clobbered
            // by `undefined` when this query resolves.
            if (value) {
              this._templateLabel = value;
            }
          }
        }]);

        return MatTab;
      }(_MatTabMixinBase);

      MatTab.ɵfac = function MatTab_Factory(t) {
        return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP));
      };

      MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTab,
        selectors: [["mat-tab"]],
        contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MAT_TAB_CONTENT, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
          }
        },
        viewQuery: function MatTab_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
          }
        },
        inputs: {
          disabled: "disabled",
          textLabel: ["label", "textLabel"],
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
        },
        exportAs: ["matTab"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatTab_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2
      });

      MatTab.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TAB_GROUP]
          }]
        }];
      };

      MatTab.propDecorators = {
        templateLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MAT_TAB_LABEL]
        }],
        _explicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MAT_TAB_CONTENT, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
            "static": true
          }]
        }],
        _implicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
            "static": true
          }]
        }],
        textLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['label']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-labelledby']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab',
            template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
            inputs: ['disabled'],
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            exportAs: 'matTab'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_TAB_GROUP]
            }]
          }];
        }, {
          textLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['label']
          }],
          templateLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_LABEL]
          }],
          _explicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_CONTENT, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
              "static": true
            }]
          }],
          _implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
              "static": true
            }]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-labelledby']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material tabs.
       * @docs-private
       */


      var matTabsAnimations = {
        /** Animation translates a tab along the X axis. */
        translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none'
        })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(-100%, 0, 0)',
          minHeight: '1px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(100%, 0, 0)',
          minHeight: '1px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(-100%, 0, 0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(100%, 0, 0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The portal host directive for the contents of the tab.
       * @docs-private
       */

      var MatTabBodyPortal = /*#__PURE__*/function (_angular_cdk_portal__2) {
        _inherits(MatTabBodyPortal, _angular_cdk_portal__2);

        var _super30 = _createSuper(MatTabBodyPortal);

        function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host, _document) {
          var _this80;

          _classCallCheck(this, MatTabBodyPortal);

          _this80 = _super30.call(this, componentFactoryResolver, viewContainerRef, _document);
          _this80._host = _host;
          /** Subscription to events for when the tab body begins centering. */

          _this80._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Subscription to events for when the tab body finishes leaving from center position. */

          _this80._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          return _this80;
        }
        /** Set initial visibility or set up subscription for changing visibility. */


        _createClass(MatTabBodyPortal, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this81 = this;

            _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

            this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(function (isCentering) {
              if (isCentering && !_this81.hasAttached()) {
                _this81.attach(_this81._host._content);
              }
            });
            this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
              _this81.detach();
            });
          }
          /** Clean up centering subscription. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

            this._centeringSub.unsubscribe();

            this._leavingSub.unsubscribe();
          }
        }]);

        return MatTabBodyPortal;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]);

      MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
        return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatTabBody;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabBodyPortal,
        selectors: [["", "matTabBodyHost", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatTabBodyPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: MatTabBody,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatTabBody;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matTabBodyHost]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: MatTabBody,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return MatTabBody;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Base class with all of the `MatTabBody` functionality.
       * @docs-private
       */


      var _MatTabBodyBase = /*#__PURE__*/function () {
        function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
          var _this82 = this;

          _classCallCheck(this, _MatTabBodyBase);

          this._elementRef = _elementRef;
          this._dir = _dir;
          /** Subscription to the directionality change observable. */

          this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Emits when an animation on the tab is complete. */

          this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Event emitted when the tab begins to animate towards the center as the active tab. */

          this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted before the centering of the tab begins. */

          this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted before the centering of the tab begins. */

          this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when the tab completes its animation towards the center. */

          this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
          // anyway to prevent the animations module from throwing an error if the body is used on its own.

          /** Duration for the tab's animation. */

          this.animationDuration = '500ms';

          if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
              _this82._computePositionAnimationState(dir);

              changeDetectorRef.markForCheck();
            });
          } // Ensure that we get unique animation events, because the `.done` callback can get
          // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


          this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            // If the transition to the center is complete, emit an event.
            if (_this82._isCenterPosition(event.toState) && _this82._isCenterPosition(_this82._position)) {
              _this82._onCentered.emit();
            }

            if (_this82._isCenterPosition(event.fromState) && !_this82._isCenterPosition(_this82._position)) {
              _this82._afterLeavingCenter.emit();
            }
          });
        }
        /** The shifted index position of the tab body, where zero represents the active center tab. */


        _createClass(_MatTabBodyBase, [{
          key: "position",
          set: function set(position) {
            this._positionIndex = position;

            this._computePositionAnimationState();
          }
          /**
           * After initialized, check if the content is centered and has an origin. If so, set the
           * special position states that transition the tab from the left or right before centering.
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._position == 'center' && this.origin != null) {
              this._position = this._computePositionFromOrigin(this.origin);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._dirChangeSubscription.unsubscribe();

            this._translateTabComplete.complete();
          }
        }, {
          key: "_onTranslateTabStarted",
          value: function _onTranslateTabStarted(event) {
            var isCentering = this._isCenterPosition(event.toState);

            this._beforeCentering.emit(isCentering);

            if (isCentering) {
              this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
            }
          }
          /** The text direction of the containing app. */

        }, {
          key: "_getLayoutDirection",
          value: function _getLayoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Whether the provided position state is considered center, regardless of origin. */

        }, {
          key: "_isCenterPosition",
          value: function _isCenterPosition(position) {
            return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
          }
          /** Computes the position state that will be used for the tab-body animation trigger. */

        }, {
          key: "_computePositionAnimationState",
          value: function _computePositionAnimationState() {
            var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

            if (this._positionIndex < 0) {
              this._position = dir == 'ltr' ? 'left' : 'right';
            } else if (this._positionIndex > 0) {
              this._position = dir == 'ltr' ? 'right' : 'left';
            } else {
              this._position = 'center';
            }
          }
          /**
           * Computes the position state based on the specified origin position. This is used if the
           * tab is becoming visible immediately after creation.
           */

        }, {
          key: "_computePositionFromOrigin",
          value: function _computePositionFromOrigin(origin) {
            var dir = this._getLayoutDirection();

            if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
              return 'left-origin-center';
            }

            return 'right-origin-center';
          }
        }]);

        return _MatTabBodyBase;
      }();

      _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
        return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      _MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabBodyBase,
        inputs: {
          animationDuration: "animationDuration",
          position: "position",
          _content: ["content", "_content"],
          origin: "origin"
        },
        outputs: {
          _onCentering: "_onCentering",
          _beforeCentering: "_beforeCentering",
          _afterLeavingCenter: "_afterLeavingCenter",
          _onCentered: "_onCentered"
        }
      });

      _MatTabBodyBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      _MatTabBodyBase.propDecorators = {
        _onCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _beforeCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _afterLeavingCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _onCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['content']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          _onCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _beforeCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _afterLeavingCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _onCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['content']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Wrapper for the contents of a tab.
       * @docs-private
       */


      var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
        _inherits(MatTabBody, _MatTabBodyBase2);

        var _super31 = _createSuper(MatTabBody);

        function MatTabBody(elementRef, dir, changeDetectorRef) {
          _classCallCheck(this, MatTabBody);

          return _super31.call(this, elementRef, dir, changeDetectorRef);
        }

        return MatTabBody;
      }(_MatTabBodyBase);

      MatTabBody.ɵfac = function MatTabBody_Factory(t) {
        return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabBody,
        selectors: [["mat-tab-body"]],
        viewQuery: function MatTabBody_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-body"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 6,
        consts: [["cdkScrollable", "", 1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
        template: function MatTabBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
              return ctx._onTranslateTabStarted($event);
            })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
              return ctx._translateTabComplete.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
          }
        },
        directives: [MatTabBodyPortal],
        styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
        encapsulation: 2,
        data: {
          animation: [matTabsAnimations.translateTab]
        }
      });

      MatTabBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      MatTabBody.propDecorators = {
        _portalHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab-body',
            template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            animations: [matTabsAnimations.translateTab],
            host: {
              'class': 'mat-tab-body'
            },
            styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          _portalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to provide the default options the tabs module. */


      var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID's for each tab component */

      var nextId = 0;
      /** A simple change event emitted on focus or selection changes. */

      var MatTabChangeEvent = function MatTabChangeEvent() {
        _classCallCheck(this, MatTabChangeEvent);
      }; // Boilerplate for applying mixins to MatTabGroup.

      /** @docs-private */


      var MatTabGroupMixinBase = function MatTabGroupMixinBase(_elementRef) {
        _classCallCheck(this, MatTabGroupMixinBase);

        this._elementRef = _elementRef;
      };

      var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
      /**
       * Base class with all of the `MatTabGroupBase` functionality.
       * @docs-private
       */


      var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
        _inherits(_MatTabGroupBase, _MatTabGroupMixinBase2);

        var _super32 = _createSuper(_MatTabGroupBase);

        function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
          var _this83;

          _classCallCheck(this, _MatTabGroupBase);

          _this83 = _super32.call(this, elementRef);
          _this83._changeDetectorRef = _changeDetectorRef;
          _this83._animationMode = _animationMode;
          /** All of the tabs that belong to the group. */

          _this83._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
          /** The tab index that should be selected after the content has been checked. */

          _this83._indexToSelect = 0;
          /** Snapshot of the height of the tab body wrapper before another tab is activated. */

          _this83._tabBodyWrapperHeight = 0;
          /** Subscription to tabs being added/removed. */

          _this83._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Subscription to changes in the tab labels. */

          _this83._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          _this83._selectedIndex = null;
          /** Position of the tab header. */

          _this83.headerPosition = 'above';
          /** Output to enable support for two-way binding on `[(selectedIndex)]` */

          _this83.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when focus has changed within a tab group. */

          _this83.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when the body animation has completed */

          _this83.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when the tab selection has changed. */

          _this83.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
          _this83._groupId = nextId++;
          _this83.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
          _this83.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
          _this83.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
          return _this83;
        }
        /** Whether the tab group should grow to the size of the active tab. */


        _createClass(_MatTabGroupBase, [{
          key: "dynamicHeight",
          get: function get() {
            return this._dynamicHeight;
          },
          set: function set(value) {
            this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
          }
          /** The index of the active tab. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
          }
          /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */

        }, {
          key: "animationDuration",
          get: function get() {
            return this._animationDuration;
          },
          set: function set(value) {
            this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
          }
          /** Background color of the tab group. */

        }, {
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            var nativeElement = this._elementRef.nativeElement;
            nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

            if (value) {
              nativeElement.classList.add("mat-background-".concat(value));
            }

            this._backgroundColor = value;
          }
          /**
           * After the content is checked, this component knows what tabs have been defined
           * and what the selected index should be. This is where we can know exactly what position
           * each tab should be in according to the new selected index, and additionally we know how
           * a new selected tab should transition in (from the left or right).
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var _this84 = this;

            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.


            if (this._selectedIndex != indexToSelect) {
              var isFirstRun = this._selectedIndex == null;

              if (!isFirstRun) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect)); // Preserve the height so page doesn't scroll up during tab change.
                // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change

                var wrapper = this._tabBodyWrapper.nativeElement;
                wrapper.style.minHeight = wrapper.clientHeight + 'px';
              } // Changing these values after change detection has run
              // since the checked content may contain references to them.


              Promise.resolve().then(function () {
                _this84._tabs.forEach(function (tab, index) {
                  return tab.isActive = index === indexToSelect;
                });

                if (!isFirstRun) {
                  _this84.selectedIndexChange.emit(indexToSelect); // Clear the min-height, this was needed during tab change to avoid
                  // unnecessary scrolling.


                  _this84._tabBodyWrapper.nativeElement.style.minHeight = '';
                }
              });
            } // Setup the position for each tab and optionally setup an origin on the next selected tab.


            this._tabs.forEach(function (tab, index) {
              tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
              // if it doesn't have one already.

              if (_this84._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - _this84._selectedIndex;
              }
            });

            if (this._selectedIndex !== indexToSelect) {
              this._selectedIndex = indexToSelect;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this85 = this;

            this._subscribeToAllTabChanges();

            this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.


            this._tabsSubscription = this._tabs.changes.subscribe(function () {
              var indexToSelect = _this85._clampTabIndex(_this85._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
              // explicit change that selects a different tab.


              if (indexToSelect === _this85._selectedIndex) {
                var tabs = _this85._tabs.toArray();

                for (var i = 0; i < tabs.length; i++) {
                  if (tabs[i].isActive) {
                    // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                    // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                    // adding a tab within the `selectedIndexChange` event.
                    _this85._indexToSelect = _this85._selectedIndex = i;
                    break;
                  }
                }
              }

              _this85._changeDetectorRef.markForCheck();
            });
          }
          /** Listens to changes in all of the tabs. */

        }, {
          key: "_subscribeToAllTabChanges",
          value: function _subscribeToAllTabChanges() {
            var _this86 = this;

            // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
            // some that are inside of nested tab groups. We filter them out manually by checking that
            // the closest group to the tab is the current one.
            this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs)).subscribe(function (tabs) {
              _this86._tabs.reset(tabs.filter(function (tab) {
                return tab._closestTabGroup === _this86;
              }));

              _this86._tabs.notifyOnChanges();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._tabs.destroy();

            this._tabsSubscription.unsubscribe();

            this._tabLabelSubscription.unsubscribe();
          }
          /** Re-aligns the ink bar to the selected tab element. */

        }, {
          key: "realignInkBar",
          value: function realignInkBar() {
            if (this._tabHeader) {
              this._tabHeader._alignInkBarToSelectedTab();
            }
          }
        }, {
          key: "_focusChanged",
          value: function _focusChanged(index) {
            this.focusChange.emit(this._createChangeEvent(index));
          }
        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent(index) {
            var event = new MatTabChangeEvent();
            event.index = index;

            if (this._tabs && this._tabs.length) {
              event.tab = this._tabs.toArray()[index];
            }

            return event;
          }
          /**
           * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
           * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
           * binding to be updated, we need to subscribe to changes in it and trigger change detection
           * manually.
           */

        }, {
          key: "_subscribeToTabLabels",
          value: function _subscribeToTabLabels() {
            var _this87 = this;

            if (this._tabLabelSubscription) {
              this._tabLabelSubscription.unsubscribe();
            }

            this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this._tabs.map(function (tab) {
              return tab._stateChanges;
            }))).subscribe(function () {
              return _this87._changeDetectorRef.markForCheck();
            });
          }
          /** Clamps the given index to the bounds of 0 and the tabs length. */

        }, {
          key: "_clampTabIndex",
          value: function _clampTabIndex(index) {
            // Note the `|| 0`, which ensures that values like NaN can't get through
            // and which would otherwise throw the component into an infinite loop
            // (since Math.max(NaN, 0) === NaN).
            return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
          }
          /** Returns a unique id for each tab label element */

        }, {
          key: "_getTabLabelId",
          value: function _getTabLabelId(i) {
            return "mat-tab-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns a unique id for each tab content element */

        }, {
          key: "_getTabContentId",
          value: function _getTabContentId(i) {
            return "mat-tab-content-".concat(this._groupId, "-").concat(i);
          }
          /**
           * Sets the height of the body wrapper to the height of the activating tab if dynamic
           * height property is true.
           */

        }, {
          key: "_setTabBodyWrapperHeight",
          value: function _setTabBodyWrapperHeight(tabHeight) {
            if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
              return;
            }

            var wrapper = this._tabBodyWrapper.nativeElement;
            wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
            // the animation to the new height can have an origin.

            if (this._tabBodyWrapper.nativeElement.offsetHeight) {
              wrapper.style.height = tabHeight + 'px';
            }
          }
          /** Removes the height of the tab body wrapper. */

        }, {
          key: "_removeTabBodyWrapperHeight",
          value: function _removeTabBodyWrapperHeight() {
            var wrapper = this._tabBodyWrapper.nativeElement;
            this._tabBodyWrapperHeight = wrapper.clientHeight;
            wrapper.style.height = '';
            this.animationDone.emit();
          }
          /** Handle click events, setting new selected index if appropriate. */

        }, {
          key: "_handleClick",
          value: function _handleClick(tab, tabHeader, index) {
            if (!tab.disabled) {
              this.selectedIndex = tabHeader.focusIndex = index;
            }
          }
          /** Retrieves the tabindex for the tab. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex(tab, idx) {
            if (tab.disabled) {
              return null;
            }

            return this.selectedIndex === idx ? 0 : -1;
          }
          /** Callback for when the focused state of a tab has changed. */

        }, {
          key: "_tabFocusChanged",
          value: function _tabFocusChanged(focusOrigin, index) {
            if (focusOrigin) {
              this._tabHeader.focusIndex = index;
            }
          }
        }]);

        return _MatTabGroupBase;
      }(_MatTabGroupMixinBase);

      _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
        return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabGroupBase,
        inputs: {
          headerPosition: "headerPosition",
          animationDuration: "animationDuration",
          disablePagination: "disablePagination",
          dynamicHeight: "dynamicHeight",
          selectedIndex: "selectedIndex",
          backgroundColor: "backgroundColor"
        },
        outputs: {
          selectedIndexChange: "selectedIndexChange",
          focusChange: "focusChange",
          animationDone: "animationDone",
          selectedTabChange: "selectedTabChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabGroupBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabGroupBase.propDecorators = {
        dynamicHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        headerPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        focusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        selectedTabChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_TABS_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          headerPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          selectedTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dynamicHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Material design tab-group component. Supports basic tab pairs (label + content) and includes
       * animated ink-bar, keyboard navigation, and screen reader.
       * See: https://material.io/design/components/tabs.html
       */


      var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
        _inherits(MatTabGroup, _MatTabGroupBase2);

        var _super33 = _createSuper(MatTabGroup);

        function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
          _classCallCheck(this, MatTabGroup);

          return _super33.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
        }

        return MatTabGroup;
      }(_MatTabGroupBase);

      MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
        return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabGroup,
        selectors: [["mat-tab-group"]],
        contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
          }
        },
        viewQuery: function MatTabGroup_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-group"],
        hostVars: 4,
        hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple"
        },
        exportAs: ["matTabGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_GROUP,
          useExisting: MatTabGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 7,
        consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click", "cdkFocusChange"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
        template: function MatTabGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
              return ctx._focusChanged($event);
            })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
              return ctx.selectedIndex = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
          }
        },
        directives: function directives() {
          return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody];
        },
        styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
        encapsulation: 2
      });

      MatTabGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatTabGroup.propDecorators = {
        _allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTab, {
            descendants: true
          }]
        }],
        _tabBodyWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabBodyWrapper']
        }],
        _tabHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabHeader']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab-group',
            exportAs: 'matTabGroup',
            template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\"\n       (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            inputs: ['color', 'disableRipple'],
            providers: [{
              provide: MAT_TAB_GROUP,
              useExisting: MatTabGroup
            }],
            host: {
              'class': 'mat-tab-group',
              '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
              '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
            },
            styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_TABS_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          _allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTab, {
              descendants: true
            }]
          }],
          _tabBodyWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabBodyWrapper']
          }],
          _tabHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabHeader']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatTabLabelWrapper.

      /** @docs-private */


      var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
        _classCallCheck(this, MatTabLabelWrapperBase);
      };

      var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
      /**
       * Used in the `mat-tab-group` view to display tab labels.
       * @docs-private
       */


      var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
        _inherits(MatTabLabelWrapper, _MatTabLabelWrapperMi);

        var _super34 = _createSuper(MatTabLabelWrapper);

        function MatTabLabelWrapper(elementRef) {
          var _this88;

          _classCallCheck(this, MatTabLabelWrapper);

          _this88 = _super34.call(this);
          _this88.elementRef = elementRef;
          return _this88;
        }
        /** Sets focus on the wrapper element */


        _createClass(MatTabLabelWrapper, [{
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "getOffsetLeft",
          value: function getOffsetLeft() {
            return this.elementRef.nativeElement.offsetLeft;
          }
        }, {
          key: "getOffsetWidth",
          value: function getOffsetWidth() {
            return this.elementRef.nativeElement.offsetWidth;
          }
        }]);

        return MatTabLabelWrapper;
      }(_MatTabLabelWrapperMixinBase);

      MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
        return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabLabelWrapper,
        selectors: [["", "matTabLabelWrapper", ""]],
        hostVars: 3,
        hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatTabLabelWrapper.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matTabLabelWrapper]',
            inputs: ['disabled'],
            host: {
              '[class.mat-tab-disabled]': 'disabled',
              '[attr.aria-disabled]': '!!disabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Config used to bind passive event listeners */


      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
       * provide a small affordance to the label next to it.
       */

      var EXAGGERATED_OVERSCROLL = 60;
      /**
       * Amount of milliseconds to wait before starting to scroll the header automatically.
       * Set a little conservatively in order to handle fake events dispatched on touch devices.
       */

      var HEADER_SCROLL_DELAY = 650;
      /**
       * Interval in milliseconds at which to scroll the header
       * while the user is holding their pointer.
       */

      var HEADER_SCROLL_INTERVAL = 100;
      /**
       * Base class for a tab header that supported pagination.
       * @docs-private
       */

      var MatPaginatedTabHeader = /*#__PURE__*/function () {
        function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
          var _this89 = this;

          _classCallCheck(this, MatPaginatedTabHeader);

          this._elementRef = _elementRef;
          this._changeDetectorRef = _changeDetectorRef;
          this._viewportRuler = _viewportRuler;
          this._dir = _dir;
          this._ngZone = _ngZone;
          this._platform = _platform;
          this._animationMode = _animationMode;
          /** The distance in pixels that the tab labels should be translated to the left. */

          this._scrollDistance = 0;
          /** Whether the header should scroll to the selected index after the view has been checked. */

          this._selectedIndexChanged = false;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Whether the controls for pagination should be displayed */

          this._showPaginationControls = false;
          /** Whether the tab list can be scrolled more towards the end of the tab label list. */

          this._disableScrollAfter = true;
          /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

          this._disableScrollBefore = true;
          /** Stream that will stop the automated scrolling. */

          this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Whether pagination should be disabled. This can be used to avoid unnecessary
           * layout recalculations if it's known that pagination won't be required.
           */

          this.disablePagination = false;
          this._selectedIndex = 0;
          /** Event emitted when the option is selected. */

          this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when a label is focused. */

          this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

          _ngZone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this89._destroyed)).subscribe(function () {
              _this89._stopInterval();
            });
          });
        }
        /** The index of the active tab. */


        _createClass(MatPaginatedTabHeader, [{
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);

            if (this._selectedIndex != value) {
              this._selectedIndexChanged = true;
              this._selectedIndex = value;

              if (this._keyManager) {
                this._keyManager.updateActiveItem(value);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this90 = this;

            // We need to handle these events manually, because we want to bind passive event listeners.
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this90._handlePaginatorPress('before');
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this90._handlePaginatorPress('after');
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this91 = this;

            var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);

            var resize = this._viewportRuler.change(150);

            var realign = function realign() {
              _this91.updatePagination();

              _this91._alignInkBarToSelectedTab();
            };

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

            this._keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
            // This helps in cases where the user lands directly on a page with paginated tabs.


            typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
            // the key manager if the direction has changed.

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              // We need to defer this to give the browser some time to recalculate
              // the element dimensions. The call has to be wrapped in `NgZone.run`,
              // because the viewport change handler runs outside of Angular.
              _this91._ngZone.run(function () {
                return Promise.resolve().then(realign);
              });

              _this91._keyManager.withHorizontalOrientation(_this91._getLayoutDirection());
            }); // If there is a change in the focus key manager we need to emit the `indexFocused`
            // event in order to provide a public event that notifies about focus changes. Also we realign
            // the tabs container by scrolling the new focused tab into the visible section.

            this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (newFocusIndex) {
              _this91.indexFocused.emit(newFocusIndex);

              _this91._setTabFocus(newFocusIndex);
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // If the number of tab labels have changed, check if scrolling should be enabled
            if (this._tabLabelCount != this._items.length) {
              this.updatePagination();
              this._tabLabelCount = this._items.length;

              this._changeDetectorRef.markForCheck();
            } // If the selected index has changed, scroll to the label and check if the scrolling controls
            // should be disabled.


            if (this._selectedIndexChanged) {
              this._scrollToLabel(this._selectedIndex);

              this._checkScrollingControls();

              this._alignInkBarToSelectedTab();

              this._selectedIndexChanged = false;

              this._changeDetectorRef.markForCheck();
            } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
            // then translate the header to reflect this.


            if (this._scrollDistanceChanged) {
              this._updateTabScrollPosition();

              this._scrollDistanceChanged = false;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this._stopScrolling.complete();
          }
          /** Handles keyboard events on the header. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            // We don't handle any key bindings with a modifier key.
            if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
                if (this.focusIndex !== this.selectedIndex) {
                  this.selectFocusedIndex.emit(this.focusIndex);

                  this._itemSelected(event);
                }

                break;

              default:
                this._keyManager.onKeydown(event);

            }
          }
          /**
           * Callback for when the MutationObserver detects that the content has changed.
           */

        }, {
          key: "_onContentChanges",
          value: function _onContentChanges() {
            var _this92 = this;

            var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
            // will fire even if the text content didn't change which is inefficient and is prone
            // to infinite loops if a poorly constructed expression is passed in (see #14249).

            if (textContent !== this._currentTextContent) {
              this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
              // means that we need to bring the callback back in ourselves.

              this._ngZone.run(function () {
                _this92.updatePagination();

                _this92._alignInkBarToSelectedTab();

                _this92._changeDetectorRef.markForCheck();
              });
            }
          }
          /**
           * Updates the view whether pagination should be enabled or not.
           *
           * WARNING: Calling this method can be very costly in terms of performance. It should be called
           * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
           * page.
           */

        }, {
          key: "updatePagination",
          value: function updatePagination() {
            this._checkPaginationEnabled();

            this._checkScrollingControls();

            this._updateTabScrollPosition();
          }
          /** Tracks which element has focus; used for keyboard navigation */

        }, {
          key: "focusIndex",
          get: function get() {
            return this._keyManager ? this._keyManager.activeItemIndex : 0;
          }
          /** When the focus index is set, we must manually send focus to the correct label */
          ,
          set: function set(value) {
            if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
              return;
            }

            this._keyManager.setActiveItem(value);
          }
          /**
           * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
           * providing a valid index and return true.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            if (!this._items) {
              return true;
            }

            var tab = this._items ? this._items.toArray()[index] : null;
            return !!tab && !tab.disabled;
          }
          /**
           * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
           * scrolling is enabled.
           */

        }, {
          key: "_setTabFocus",
          value: function _setTabFocus(tabIndex) {
            if (this._showPaginationControls) {
              this._scrollToLabel(tabIndex);
            }

            if (this._items && this._items.length) {
              this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
              // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
              // should be the full width minus the offset width.


              var containerEl = this._tabListContainer.nativeElement;

              var dir = this._getLayoutDirection();

              if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
              } else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
              }
            }
          }
          /** The layout direction of the containing app. */

        }, {
          key: "_getLayoutDirection",
          value: function _getLayoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Performs the CSS transformation on the tab list that will cause the list to scroll. */

        }, {
          key: "_updateTabScrollPosition",
          value: function _updateTabScrollPosition() {
            if (this.disablePagination) {
              return;
            }

            var scrollDistance = this.scrollDistance;
            var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
            // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
            // and ripples will exceed the boundaries of the visible tab bar.
            // See: https://github.com/angular/components/issues/10276
            // We round the `transform` here, because transforms with sub-pixel precision cause some
            // browsers to blur the content of the element.

            this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
            // position to be thrown off in some cases. We have to reset it ourselves to ensure that
            // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
            // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).

            if (this._platform.TRIDENT || this._platform.EDGE) {
              this._tabListContainer.nativeElement.scrollLeft = 0;
            }
          }
          /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */

        }, {
          key: "scrollDistance",
          get: function get() {
            return this._scrollDistance;
          },
          set: function set(value) {
            this._scrollTo(value);
          }
          /**
           * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
           * the end of the list, respectively). The distance to scroll is computed to be a third of the
           * length of the tab list view window.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_scrollHeader",
          value: function _scrollHeader(direction) {
            var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

            var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
            return this._scrollTo(this._scrollDistance + scrollAmount);
          }
          /** Handles click events on the pagination arrows. */

        }, {
          key: "_handlePaginatorClick",
          value: function _handlePaginatorClick(direction) {
            this._stopInterval();

            this._scrollHeader(direction);
          }
          /**
           * Moves the tab list such that the desired tab label (marked by index) is moved into view.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_scrollToLabel",
          value: function _scrollToLabel(labelIndex) {
            if (this.disablePagination) {
              return;
            }

            var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

            if (!selectedLabel) {
              return;
            } // The view length is the visible width of the tab labels.


            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
                offsetLeft = _selectedLabel$elemen.offsetLeft,
                offsetWidth = _selectedLabel$elemen.offsetWidth;
            var labelBeforePos, labelAfterPos;

            if (this._getLayoutDirection() == 'ltr') {
              labelBeforePos = offsetLeft;
              labelAfterPos = labelBeforePos + offsetWidth;
            } else {
              labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
              labelBeforePos = labelAfterPos - offsetWidth;
            }

            var beforeVisiblePos = this.scrollDistance;
            var afterVisiblePos = this.scrollDistance + viewLength;

            if (labelBeforePos < beforeVisiblePos) {
              // Scroll header to move label to the before direction
              this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            } else if (labelAfterPos > afterVisiblePos) {
              // Scroll header to move label to the after direction
              this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
          }
          /**
           * Evaluate whether the pagination controls should be displayed. If the scroll width of the
           * tab list is wider than the size of the header container, then the pagination controls should
           * be shown.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_checkPaginationEnabled",
          value: function _checkPaginationEnabled() {
            if (this.disablePagination) {
              this._showPaginationControls = false;
            } else {
              var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

              if (!isEnabled) {
                this.scrollDistance = 0;
              }

              if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
              }

              this._showPaginationControls = isEnabled;
            }
          }
          /**
           * Evaluate whether the before and after controls should be enabled or disabled.
           * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
           * before button. If the header is at the end of the list (scroll distance is equal to the
           * maximum distance we can scroll), then disable the after button.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_checkScrollingControls",
          value: function _checkScrollingControls() {
            if (this.disablePagination) {
              this._disableScrollAfter = this._disableScrollBefore = true;
            } else {
              // Check if the pagination arrows should be activated.
              this._disableScrollBefore = this.scrollDistance == 0;
              this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Determines what is the maximum length in pixels that can be set for the scroll distance. This
           * is equal to the difference in width between the tab list container and tab header container.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_getMaxScrollDistance",
          value: function _getMaxScrollDistance() {
            var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            return lengthOfTabList - viewLength || 0;
          }
          /** Tells the ink-bar to align itself to the current label wrapper */

        }, {
          key: "_alignInkBarToSelectedTab",
          value: function _alignInkBarToSelectedTab() {
            var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
            var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

            if (selectedLabelWrapper) {
              this._inkBar.alignToElement(selectedLabelWrapper);
            } else {
              this._inkBar.hide();
            }
          }
          /** Stops the currently-running paginator interval.  */

        }, {
          key: "_stopInterval",
          value: function _stopInterval() {
            this._stopScrolling.next();
          }
          /**
           * Handles the user pressing down on one of the paginators.
           * Starts scrolling the header after a certain amount of time.
           * @param direction In which direction the paginator should be scrolled.
           */

        }, {
          key: "_handlePaginatorPress",
          value: function _handlePaginatorPress(direction, mouseEvent) {
            var _this93 = this;

            // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
            // null check the `button`, but we do it so we don't break tests that use fake events.
            if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
              return;
            } // Avoid overlapping timers.


            this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed))).subscribe(function () {
              var _this93$_scrollHeader = _this93._scrollHeader(direction),
                  maxScrollDistance = _this93$_scrollHeader.maxScrollDistance,
                  distance = _this93$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


              if (distance === 0 || distance >= maxScrollDistance) {
                _this93._stopInterval();
              }
            });
          }
          /**
           * Scrolls the header to a given position.
           * @param position Position to which to scroll.
           * @returns Information on the current scroll distance and the maximum.
           */

        }, {
          key: "_scrollTo",
          value: function _scrollTo(position) {
            if (this.disablePagination) {
              return {
                maxScrollDistance: 0,
                distance: 0
              };
            }

            var maxScrollDistance = this._getMaxScrollDistance();

            this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.

            this._scrollDistanceChanged = true;

            this._checkScrollingControls();

            return {
              maxScrollDistance: maxScrollDistance,
              distance: this._scrollDistance
            };
          }
        }]);

        return MatPaginatedTabHeader;
      }();

      MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
        return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatPaginatedTabHeader,
        inputs: {
          disablePagination: "disablePagination"
        }
      });

      MatPaginatedTabHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPaginatedTabHeader.propDecorators = {
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class with all of the `MatTabHeader` functionality.
       * @docs-private
       */


      var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
        _inherits(_MatTabHeaderBase, _MatPaginatedTabHeade);

        var _super35 = _createSuper(_MatTabHeaderBase);

        function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
          var _this94;

          _classCallCheck(this, _MatTabHeaderBase);

          _this94 = _super35.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
          _this94._disableRipple = false;
          return _this94;
        }
        /** Whether the ripple effect is disabled or not. */


        _createClass(_MatTabHeaderBase, [{
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          },
          set: function set(value) {
            this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "_itemSelected",
          value: function _itemSelected(event) {
            event.preventDefault();
          }
        }]);

        return _MatTabHeaderBase;
      }(MatPaginatedTabHeader);

      _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
        return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabHeaderBase,
        inputs: {
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabHeaderBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabHeaderBase.propDecorators = {
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * The header of the tab group which displays a list of all the tabs in the tab group. Includes
       * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
       * width of the header container, then arrows will be displayed to allow the user to scroll
       * left and right across the header.
       * @docs-private
       */


      var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
        _inherits(MatTabHeader, _MatTabHeaderBase2);

        var _super36 = _createSuper(MatTabHeader);

        function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
          _classCallCheck(this, MatTabHeader);

          return _super36.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        }

        return MatTabHeader;
      }(_MatTabHeaderBase);

      MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
        return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabHeader,
        selectors: [["mat-tab-header"]],
        contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabHeader_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatInkBar, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c6, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-header"],
        hostVars: 4,
        hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex"
        },
        outputs: {
          selectFocusedIndex: "selectFocusedIndex",
          indexFocused: "indexFocused"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 13,
        vars: 8,
        consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
        template: function MatTabHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
              return ctx._handlePaginatorClick("before");
            })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
              return ctx._handlePaginatorPress("before", $event);
            })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
              return ctx._handleKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
              return ctx._onContentChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
              return ctx._handlePaginatorPress("after", $event);
            })("click", function MatTabHeader_Template_div_click_10_listener() {
              return ctx._handlePaginatorClick("after");
            })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
        encapsulation: 2
      });

      MatTabHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatTabHeader.propDecorators = {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTabLabelWrapper, {
            descendants: false
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab-header',
            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
            inputs: ['selectedIndex'],
            outputs: ['selectFocusedIndex', 'indexFocused'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            host: {
              'class': 'mat-tab-header',
              '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
              '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
            },
            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTabLabelWrapper, {
              descendants: false
            }]
          }],
          _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, {
              "static": true
            }]
          }],
          _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', {
              "static": true
            }]
          }],
          _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', {
              "static": true
            }]
          }],
          _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
          }],
          _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class with all of the `MatTabNav` functionality.
       * @docs-private
       */


      var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
        _inherits(_MatTabNavBase, _MatPaginatedTabHeade2);

        var _super37 = _createSuper(_MatTabNavBase);

        function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
          var _this95;

          _classCallCheck(this, _MatTabNavBase);

          _this95 = _super37.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
          _this95._disableRipple = false;
          /** Theme color of the nav bar. */

          _this95.color = 'primary';
          return _this95;
        }
        /** Background color of the tab nav. */


        _createClass(_MatTabNavBase, [{
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            var classList = this._elementRef.nativeElement.classList;
            classList.remove("mat-background-".concat(this.backgroundColor));

            if (value) {
              classList.add("mat-background-".concat(value));
            }

            this._backgroundColor = value;
          }
          /** Whether the ripple effect is disabled or not. */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          },
          set: function set(value) {
            this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "_itemSelected",
          value: function _itemSelected() {// noop
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this96 = this;

            // We need this to run before the `changes` subscription in parent to ensure that the
            // selectedIndex is up-to-date by the time the super class starts looking for it.
            this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this96.updateActiveLink();
            });

            _get(_getPrototypeOf(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
          }
          /** Notifies the component that the active link has been changed. */

        }, {
          key: "updateActiveLink",
          value: function updateActiveLink() {
            if (!this._items) {
              return;
            }

            var items = this._items.toArray();

            for (var i = 0; i < items.length; i++) {
              if (items[i].active) {
                this.selectedIndex = i;

                this._changeDetectorRef.markForCheck();

                return;
              }
            } // The ink bar should hide itself if no items are active.


            this.selectedIndex = -1;

            this._inkBar.hide();
          }
        }]);

        return _MatTabNavBase;
      }(MatPaginatedTabHeader);

      _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
        return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabNavBase,
        inputs: {
          color: "color",
          backgroundColor: "backgroundColor",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabNavBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabNavBase.propDecorators = {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Navigation component matching the styles of the tab group header.
       * Provides anchored navigation with animated ink bar.
       */


      var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
        _inherits(MatTabNav, _MatTabNavBase2);

        var _super38 = _createSuper(MatTabNav);

        function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
          _classCallCheck(this, MatTabNav);

          return _super38.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
        }

        return MatTabNav;
      }(_MatTabNavBase);

      MatTabNav.ɵfac = function MatTabNav_Factory(t) {
        return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabNav,
        selectors: [["", "mat-tab-nav-bar", ""]],
        contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabNav_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatInkBar, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c6, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
        hostVars: 10,
        hostBindings: function MatTabNav_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matTabNavBar", "matTabNav"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        attrs: _c9,
        ngContentSelectors: _c0,
        decls: 13,
        vars: 8,
        consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
        template: function MatTabNav_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
              return ctx._handlePaginatorClick("before");
            })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
              return ctx._handlePaginatorPress("before", $event);
            })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
              return ctx._handleKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
              return ctx._onContentChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
              return ctx._handlePaginatorPress("after", $event);
            })("click", function MatTabNav_Template_div_click_10_listener() {
              return ctx._handlePaginatorClick("after");
            })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
        encapsulation: 2
      });

      MatTabNav.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatTabNav.propDecorators = {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
            return MatTabLink;
          }), {
            descendants: true
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mat-tab-nav-bar]',
            exportAs: 'matTabNavBar, matTabNav',
            inputs: ['color'],
            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
            host: {
              'class': 'mat-tab-nav-bar mat-tab-header',
              '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
              '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
              '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
              '[class.mat-accent]': 'color === "accent"',
              '[class.mat-warn]': 'color === "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatTabLink;
            }), {
              descendants: true
            }]
          }],
          _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, {
              "static": true
            }]
          }],
          _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', {
              "static": true
            }]
          }],
          _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', {
              "static": true
            }]
          }],
          _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
          }],
          _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
          }]
        });
      })(); // Boilerplate for applying mixins to MatTabLink.


      var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
        _classCallCheck(this, MatTabLinkMixinBase);
      };

      var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
      /** Base class with all of the `MatTabLink` functionality. */


      var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
        _inherits(_MatTabLinkBase, _MatTabLinkMixinBase2);

        var _super39 = _createSuper(_MatTabLinkBase);

        function _MatTabLinkBase(_tabNavBar,
        /** @docs-private */
        elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
          var _this97;

          _classCallCheck(this, _MatTabLinkBase);

          _this97 = _super39.call(this);
          _this97._tabNavBar = _tabNavBar;
          _this97.elementRef = elementRef;
          _this97._focusMonitor = _focusMonitor;
          /** Whether the tab link is active or not. */

          _this97._isActive = false;
          _this97.rippleConfig = globalRippleOptions || {};
          _this97.tabIndex = parseInt(tabIndex) || 0;

          if (animationMode === 'NoopAnimations') {
            _this97.rippleConfig.animation = {
              enterDuration: 0,
              exitDuration: 0
            };
          }

          return _this97;
        }
        /** Whether the link is active. */


        _createClass(_MatTabLinkBase, [{
          key: "active",
          get: function get() {
            return this._isActive;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);

            if (newValue !== this._isActive) {
              this._isActive = value;

              this._tabNavBar.updateActiveLink();
            }
          }
          /**
           * Whether ripples are disabled on interaction.
           * @docs-private
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
          }
          /** Focuses the tab link. */

        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this.elementRef);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this.elementRef);
          }
        }]);

        return _MatTabLinkBase;
      }(_MatTabLinkMixinBase);

      _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
        return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabLinkBase,
        inputs: {
          active: "active"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabLinkBase.ctorParameters = function () {
        return [{
          type: _MatTabNavBase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabLinkBase.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _MatTabNavBase
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Link inside of a `mat-tab-nav-bar`.
       */


      var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
        _inherits(MatTabLink, _MatTabLinkBase2);

        var _super40 = _createSuper(MatTabLink);

        function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
          var _this98;

          _classCallCheck(this, MatTabLink);

          _this98 = _super40.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
          _this98._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_assertThisInitialized(_this98), ngZone, elementRef, platform);

          _this98._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

          return _this98;
        }

        _createClass(MatTabLink, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatTabLink.prototype), "ngOnDestroy", this).call(this);

            this._tabLinkRipple._removeTriggerEvents();
          }
        }]);

        return MatTabLink;
      }(_MatTabLinkBase);

      MatTabLink.ɵfac = function MatTabLink_Factory(t) {
        return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabLink,
        selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
        hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatTabLink_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex"
        },
        exportAs: ["matTabLink"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatTabLink.ctorParameters = function () {
        return [{
          type: MatTabNav
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[mat-tab-link], [matTabLink]',
            exportAs: 'matTabLink',
            inputs: ['disabled', 'disableRipple', 'tabIndex'],
            host: {
              'class': 'mat-tab-link mat-focus-indicator',
              '[attr.aria-current]': 'active ? "page" : null',
              '[attr.aria-disabled]': 'disabled',
              '[attr.tabIndex]': 'tabIndex',
              '[class.mat-tab-disabled]': 'disabled',
              '[class.mat-tab-label-active]': 'active'
            }
          }]
        }], function () {
          return [{
            type: MatTabNav
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatTabsModule = function MatTabsModule() {
        _classCallCheck(this, MatTabsModule);
      };

      MatTabsModule.ɵfac = function MatTabsModule_Factory(t) {
        return new (t || MatTabsModule)();
      };

      MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: MatTabsModule
      });
      MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, {
          declarations: function declarations() {
            return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]],
            // Don't export all components because some are only to be used internally.
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
            declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tabs.js.map

      /***/

    },

    /***/
    "xz+E":
    /*!***************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
      \***************************************************/

    /*! exports provided: VERSION */

    /***/
    function xzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of the Angular Component Development Kit. */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.11');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      //# sourceMappingURL=cdk.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~home-home-module~individual-projects-individual-projects-module-es5.js.map