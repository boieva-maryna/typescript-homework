/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_tscript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/tscript/app */ "./src/tscript/app.ts");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);


new _src_tscript_app__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: 'Press Start 2P','Segoe UI', Tahoma, Geneva, Verdana, sans-serif\n}\n\n#root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 90%;\n    width: 100%;\n}\n\n.fighters {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n    flex-wrap: wrap;\n    padding: 0 15px;\n}\n\n.fighter {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n}\n\n.fighter:hover {\n    box-shadow: 0 0 50px 10px rgba(0,0,0,0.06);\n    cursor: pointer;\n}\n\n.name {\n    align-self: center;\n    font-size: 21px;\n    margin-top: 20px;\n}\n\n.fighter-image {\n    height: 260px;\n}\n\n#loading-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.7);\n    visibility: hidden;\n}\n.modal{\n    width:20%;\n    height: 40%;\n    min-width: 155px;\n    max-height: 300px;\n    background-color: whitesmoke;\n    border-radius: 2%;\n    position: fixed;\n    z-index: 2; \n    left: 40%;\n    top: 0;\n}\n.modal-button{\n    display: block;\n    width: 30px;\n    height: 30px;\n    position: relative;\n    left: 95%;\n    cursor: pointer;\n}\n.modal-wrap{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 1; \n    left: 0;\n    top: 0;\n    background-color: rgba(0,0,0,0.6);\n}\n.controls--wrap{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n    flex-wrap: wrap;\n    padding: 0 100px;\n}\n.icon{\n    margin: 0;\n    height: 50px;\n    width: 40px;\n    background-image: url(\"https://bitbucket.org/marynaboieva/stage-2-es6-for-everyone/raw/aaccacb887806971c49a2100345a3cbe32a0a7c0/src/images/icons.png\");\n    background-size:cover;\n}\n.label:first-child>.icon{\n    background-position: -80px 0;\n}.label:nth-child(2)>.icon{\n    background-position: -210px 0;\n}\n.label:nth-child(3)>.icon{\n    background-position: -40px 0;\n}\n.label:nth-child(4)>.icon{\n    background-position: -120px 0;\n}\n.label:nth-child(5)>.icon{\n    background-position: -170px 0;\n}\n.label{\n    font-size: 10px;\n}\n.label input{\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n}\n.label input:checked~.icon{\n    border: 1px solid darkred;\n}\n#start-fight,.controls--button,.back{\n    display: block;\n    font-size: 0.7em;\n    border:none;\n    text-align: center;\n    width: 200px;\n    height: 50px;\n    line-height: 50px;\n    background-color: darkolivegreen;\n}\n#start-fight{\n    margin: 0 auto;\n}\n#start-fight:active.controls--button:active,.back:active{\n    background-color: crimson;\n}\n.congrad{\n    text-align: center;\n    animation:text 1s steps(2) infinite;\n    width: 50%;\n}\n@keyframes text{\n    50%{transform:scale(1.25); text-shadow: cornsilk};\n}\n.progress{\n    width: 49%;\n    height: 20px;\n    background-color:red;\n    display: flex;\n}\n.bar{\n    height: 100%;\n    background-color: orange;\n}\n.stage{\n    position: relative;\n    width: 90%;\n    height: 60%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    background-image: url('https://bitbucket.org/marynaboieva/stage-2-es6-for-everyone/raw/1719b76f91545b7b0d47850d6af30516c8e01329/src/images/stage.gif');\n}\n.player{\n    position: absolute;\n    top:50%;\n    width: 78px;\n    height: 175px;\n    background-image: url('https://bitbucket.org/marynaboieva/stage-2-es6-for-everyone/raw/aaccacb887806971c49a2100345a3cbe32a0a7c0/src/images/sprite.png');\n}\n#player1{\n    left: 47%;\n}\n#player2{\n    left: 53%;\n}\n.right{\n    transform: scale(-1, 1);\n}\n.Ryu{\n    animation:Ryu-idle 0.5s steps(4) infinite;\n}\n.Ryu--punch{\n    animation:Ryu-punch 0.2s steps(2) infinite;\n}\n.Ryu--dodge{\n    animation:Ryu-dodge 0.3s steps(2) infinite;\n}\n.Ryu--victory{\n    animation: Ryu-victory 0.5s steps(3) 1 forwards;\n}\n.Ryu--death{\n    animation: Ryu-death 0.5s steps(5) 1 forwards;\n}\n@keyframes Ryu-idle{\n    0%{background-position:0 0;}\n    100%{background-position: -340px 0;}\n}\n@keyframes Ryu-punch{\n    0%{background-position: -340px 0;}\n    100%{background-position: -510px 0;}\n}\n@keyframes Ryu-dodge{\n    0%{background-position: -595px 0;}\n    100%{background-position: -765px 0;}\n}\n@keyframes Ryu-victory{\n    0%{background-position: 0px -175px;}\n    100%{background-position: -170px -175px;}\n}\n@keyframes Ryu-death{\n    0%{background-position: -255px -175px;}\n    100%{background-position: -595px -175px;}\n}\n.Dhalsim{\n    animation:Dhalsim-idle 0.9s steps(9) infinite;\n}\n.Dhalsim--punch{\n    animation:Dhalsim-punch 0.3s steps(3) infinite;\n}\n.Dhalsim--dodge{\n    animation:Dhalsim-dodge 0.3s steps(1) infinite;\n}\n.Dhalsim--victory{\n    animation: Dhalsim-victory 0.5s steps(3) 1 forwards;\n}\n.Dhalsim--death{\n    animation: Dhalsim-death 0.5s steps(5) 1 forwards;\n}\n@keyframes Dhalsim-idle{\n    0%{background-position:0 -2100px;}\n    100%{background-position: -770px -2100px;}\n}\n@keyframes Dhalsim-punch{\n    0%{background-position: -510px -1575px;}\n    100%{background-position: -770px -1575px;}\n}\n@keyframes Dhalsim-dodge{\n    0%{background-position: 0px -1925px;}\n    100%{background-position: -680px -1925px;}\n}\n@keyframes Dhalsim-victory{\n    0%{background-position: 0px -1925px;}\n    100%{background-position: -255px -1925px;}\n}\n@keyframes Dhalsim-death{\n    0%{background-position: -255px -1925px;}\n    100%{background-position: -595px -1925px;}\n}\n.Gulie{\n    animation:Gulie-idle 0.3s steps(3) infinite;\n}\n.Guile--punch{\n    animation:Gulie-punch 0.2s steps(2) infinite;\n}\n.Guile--dodge{\n    animation:Gulie-dodge 0.3s steps(2) infinite;\n}\n.Guile--victory{\n    animation: Gulie-victory 0.7s steps(7) 1 forwards;\n}\n.Guile--death{\n    animation: Gulie-death 0.5s steps(5) 1 forwards;\n}\n@keyframes Gulie-idle{\n    0%{background-position:0 -1400px;}\n    100%{background-position: -255px -1400px;}\n}\n@keyframes Gulie-punch{\n    0%{background-position: -255px -1400px;}\n    100%{background-position: -425px -1400px;}\n}\n@keyframes Gulie-dodge{\n    0%{background-position: -510px -1400px;}\n    100%{background-position: -680px -1400px;}\n}\n@keyframes Gulie-victory{\n    0%{background-position: 0px -1750px;}\n    100%{background-position: -595px -1750px;}\n}\n@keyframes Gulie-death{\n    0%{background-position: 0px -1575px;}\n    100%{background-position: -425px -1575px;}\n}\n.Zangief{\n    animation:Zangief-idle 0.3s steps(3) infinite;\n}\n.Zangief--punch{\n    animation:Zangief-punch 0.2s steps(2) infinite;\n}\n.Zangief--dodge{\n    animation:Zangief-dodge 0.3s steps(2) infinite;\n}\n.Zangief--victory{\n    animation:Zangief-victory 0.5s steps(5) 1 forwards;\n}\n.Zangief--death{\n    animation:Zangief-death 0.3s steps(3) 1 forwards;\n}\n@keyframes Zangief-idle{\n    0%{background-position: 0px -350px;}\n    100%{background-position: -255px -350px;}\n}\n@keyframes Zangief-punch{\n    0%{background-position: -425px -350px;}\n    100%{background-position: -595px -350px;}\n}\n@keyframes Zangief-dodge{\n    0%{background-position: -255px -350px;}\n    100%{background-position: -425px -350px;}\n}\n@keyframes Zangief-victory{\n    0%{background-position: 0px -525px;}\n    100%{background-position: -425px -525px;}\n}\n@keyframes Zangief-death{\n    0%{background-position: 0px -700px;}\n    100%{background-position: -340px -700px;}\n}\n.Ken{\n    animation:Ken-idle 0.3s steps(3) infinite;\n}\n.Ken--punch{\n    animation:Ken-punch 0.2s steps(2) infinite;\n}\n.Ken--dodge{\n    animation:Ken-dodge 0.3s steps(2) infinite;\n}\n.Ken--victory{\n    animation:Ken-victory 0.3s steps(3) 1 forwards;\n}\n.Ken--death{\n    animation:Ken-death 0.3s steps(3) 1 forwards;\n}\n@keyframes Ken-idle{\n    0%{background-position: -425px -700px;}\n    100%{background-position: -680px -700px;}\n}\n@keyframes Ken-punch{\n    0%{background-position: -510px -525px;}\n    100%{background-position: -680px -525px;}\n}\n@keyframes Ken-dodge{\n    0%{background-position: 0px -875px;}\n    100%{background-position: -170px -875px;}\n}\n@keyframes Ken-victory{\n    0%{background-position: -255px -875px;}\n    100%{background-position: -340px -875px;}\n}\n@keyframes Ken-death{\n    0%{background-position: 0px -1050px;}\n    100%{background-position: -340px -1050px;}\n}\n.Bison{\n    animation:Bison-idle 0.3s steps(3) infinite;\n}\n.Bison--punch{\n    animation:Bison-punch 0.4s steps(4) infinite;\n}\n.Bison--dodge{\n    animation:Bison-dodge 0.3s steps(2) infinite;\n}\n.Bison--victory{\n    animation:Bison-victory 0.2s steps(2) 1 forwards;\n}\n.Bison--death{\n    animation:Bison-death 0.3s steps(3) 1 forwards;\n}\n@keyframes Bison-idle{\n    0%{background-position: -425px -875px;}\n    100%{background-position: -680px -875px;}\n}\n@keyframes Bison-punch{\n    0%{background-position: 0px -1225px;}\n    100%{background-position: -340px -1225px;}\n}\n@keyframes Bison-dodge{\n    0%{background-position: -340px -1225px;}\n    100%{background-position: -510px -1225px;}\n}\n@keyframes Bison-victory{\n    0%{background-position: -510px -1225px;}\n    100%{background-position: -595px -1225px;}\n}\n@keyframes Bison-death{\n    0%{background-position: -510px -1050px;}\n    100%{background-position: -680px -1050px;}\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/tscript/app.ts":
/*!****************************!*\
  !*** ./src/tscript/app.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fightersView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fightersView */ "./src/tscript/fightersView.ts");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fightersService */ "./src/tscript/services/fightersService.ts");
/* harmony import */ var _fightView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fightView */ "./src/tscript/fightView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var App = /** @class */ (function () {
    function App() {
        this.startApp();
    }
    App.prototype.startApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fighters, fightersView, fightersElement, fight, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        App.loadingElement.style.visibility = 'visible';
                        return [4 /*yield*/, _services_fightersService__WEBPACK_IMPORTED_MODULE_1__["fighterService"].getFighters()];
                    case 1:
                        fighters = _a.sent();
                        fightersView = new _fightersView__WEBPACK_IMPORTED_MODULE_0__["default"](fighters);
                        fightersElement = fightersView.element;
                        App.rootElement.appendChild(fightersElement);
                        fight = new _fightView__WEBPACK_IMPORTED_MODULE_2__["default"](fightersView);
                        document.body.appendChild(fight.element);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        App.rootElement.innerText = 'Failed to load data';
                        return [3 /*break*/, 4];
                    case 3:
                        App.loadingElement.style.visibility = 'hidden';
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.rootElement = document.getElementById('root');
    App.loadingElement = document.getElementById('loading-overlay');
    return App;
}());
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/tscript/fightView.ts":
/*!**********************************!*\
  !*** ./src/tscript/fightView.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/tscript/view.ts");
/* harmony import */ var _fighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fighter */ "./src/tscript/fighter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


var FightView = /** @class */ (function (_super) {
    __extends(FightView, _super);
    function FightView(fightersView) {
        var _this = _super.call(this) || this;
        _this.throttle = function (func, limit) {
            var inThrottle;
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!inThrottle) {
                    func.apply(void 0, __spread(args));
                    inThrottle = setTimeout(function () { return inThrottle = false; }, limit);
                }
            };
        };
        _this.createControls(fightersView);
        _this.isFinished = false;
        _this.player1;
        _this.player2;
        _this.winner;
        return _this;
    }
    FightView.prototype.getChoice = function (fightersView, id1, id2) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _b = _fighter__WEBPACK_IMPORTED_MODULE_1__["default"].bind;
                        return [4 /*yield*/, fightersView.getInfo(id1)];
                    case 1:
                        _a.player1 = new (_b.apply(_fighter__WEBPACK_IMPORTED_MODULE_1__["default"], [void 0, _e.sent()]))();
                        _c = this;
                        _d = _fighter__WEBPACK_IMPORTED_MODULE_1__["default"].bind;
                        return [4 /*yield*/, fightersView.getInfo(id2)];
                    case 2:
                        _c.player2 = new (_d.apply(_fighter__WEBPACK_IMPORTED_MODULE_1__["default"], [void 0, _e.sent()]))();
                        document.getElementsByClassName("bar")[0].innerHTML = String(this.player1.health);
                        document.getElementsByClassName("bar")[1].innerHTML = String(this.player2.health);
                        return [2 /*return*/];
                }
            });
        });
    };
    FightView.prototype.createControls = function (fightersView) {
        var _this = this;
        this.element = this.createElement({ tagName: 'div', className: 'controls' });
        this.element.appendChild(this.createElement({ tagName: 'div', className: 'controls--wrap' }));
        var ch1 = this.createCheckBox("1", "Ryu");
        var ch2 = this.createCheckBox("2", "Dhalsim");
        var ch3 = this.createCheckBox("3", "Gulie");
        var ch4 = this.createCheckBox("4", "Zangief");
        var ch5 = this.createCheckBox("5", "Ken");
        var ch6 = this.createCheckBox("6", "Bison");
        var submit = this.createElement({ tagName: 'a', className: 'controls--button' });
        submit.innerText = "Choose";
        this.element.firstChild.append(ch1, ch2, ch3, ch4, ch5, ch6, submit);
        submit.addEventListener("click", function () { _this.handleStartClick(fightersView); });
        var start = this.createElement({ tagName: 'a', className: 'controls' });
        start.innerText = "Start";
        start.id = "start-fight";
        start.addEventListener("click", function () {
            if (!_this.isFinished)
                _this.handlePress();
        });
        start.style.display = "none";
        document.body.append(start);
        var stage = this.createElement({ tagName: 'div', className: 'stage' });
        var gamer1 = this.createPlayerFrame("1");
        var gamer2 = this.createPlayerFrame("2");
        stage.append(gamer1, gamer2);
        stage.style.display = "none";
        document.getElementById("root").append(stage);
        var congrad = this.createElement({ tagName: 'h1', className: 'congrad' });
        congrad.style.display = "none";
        var back = this.createElement({ tagName: 'a', className: 'back' });
        back.onclick = function () { _this.startAgain(); };
        back.style.display = "none";
        var hp1 = this.createProgressBar();
        var hp2 = this.createProgressBar();
        document.body.append(congrad, back);
        var container = this.createElement({ tagName: "div", className: "controls--wrap" });
        container.append(hp1, hp2);
        container.id = "progress-bars";
        container.style.display = "none";
        document.body.insertBefore(container, document.getElementById("root"));
    };
    FightView.prototype.createProgressBar = function () {
        var progress = this.createElement({ tagName: 'div', className: "progress" });
        var bar = this.createElement({ tagName: 'div', className: "bar" });
        bar.style.width = "100%";
        progress.append(bar);
        return progress;
    };
    FightView.prototype.createCheckBox = function (id, text) {
        var label = this.createElement({ tagName: 'label', className: 'label' });
        var checkbox = this.createElement({ tagName: 'input', className: 'checkbox' });
        checkbox.type = "checkbox";
        checkbox.id = id;
        label.appendChild(checkbox);
        label.append(document.createTextNode(text));
        label.append(this.createElement({ tagName: 'div', className: 'icon' }));
        return label;
    };
    FightView.prototype.createPlayerFrame = function (id) {
        var frame = this.createElement({ tagName: 'div', className: 'player' });
        frame.id = "player" + id;
        return frame;
    };
    FightView.prototype.handleStartClick = function (fightersView) {
        return __awaiter(this, void 0, void 0, function () {
            var id1, id2, checkboxes, checked;
            return __generator(this, function (_a) {
                id1 = "";
                id2 = "";
                checkboxes = Array.from(document.getElementsByClassName("checkbox"));
                checked = checkboxes.filter(function (elem) { return elem.checked == true; });
                switch (checked.length) {
                    case 0:
                        id1 = id2 = "1";
                        document.getElementById("player1").className = "player Ryu";
                        document.getElementById("player2").className = "player right Ryu";
                        break;
                    case 1:
                        id1 = id2 = checked[0].id;
                        document.getElementById("player1").className = "player " + checked[0].parentNode.innerText;
                        document.getElementById("player2").className = "player right " + checked[0].parentNode.innerText;
                        break;
                    default:
                        id1 = checked[0].id;
                        id2 = checked[1].id;
                        document.getElementById("player1").className = "player " + checked[0].parentNode.innerText;
                        document.getElementById("player2").className = "player right " + checked[1].parentNode.innerText;
                        break;
                }
                this.getChoice(fightersView, id1, id2);
                document.getElementsByClassName("stage")[0].style.display = "block";
                document.getElementById("start-fight").style.display = "block";
                document.getElementById("progress-bars").style.display = "flex";
                this.element.style.display = "none";
                document.getElementsByClassName("fighters")[0].style.display = "none";
                return [2 /*return*/];
            });
        });
    };
    FightView.prototype.handlePress = function () {
        var _this = this;
        //кривовато
        var player1_elem = document.getElementById("player1");
        var player2_elem = document.getElementById("player2");
        var hp1 = document.getElementsByClassName("bar")[0];
        var hp2 = document.getElementsByClassName("bar")[1];
        var width1 = this.player1.health;
        var width2 = this.player2.health; //нужно для формулы
        var map = {};
        var handler = function (event) {
            map[event.keyCode] = event.type == "keydown";
            if (map['40'] && map['87']) {
                player1_elem.classList.add(_this.player1.name + "--punch");
                setTimeout(function () { player1_elem.classList.remove(_this.player1.name + "--punch"); }, 200);
                player2_elem.classList.add(_this.player2.name + "--dodge");
                setTimeout(function () { player2_elem.classList.remove(_this.player2.name + "--dodge"); }, 300);
                map = {};
            }
            else if (map['38'] && map['83']) {
                player2_elem.classList.add(_this.player2.name + "--punch");
                setTimeout(function () { player2_elem.classList.remove(_this.player2.name + "--punch"); }, 200);
                player1_elem.classList.add(_this.player1.name + "--dodge");
                setTimeout(function () { player1_elem.classList.remove(_this.player1.name + "--dodge"); }, 300);
                map = {};
            }
            else if (map['87']) {
                _this.fight(_this.player1, _this.player2, hp2, width2);
                player1_elem.classList.add(_this.player1.name + "--punch");
                setTimeout(function () { player1_elem.classList.remove(_this.player1.name + "--punch"); }, 200);
                map = {};
            }
            else if (map['38']) {
                _this.fight(_this.player2, _this.player1, hp1, width1);
                player2_elem.classList.add(_this.player2.name + "--punch");
                setTimeout(function () { player2_elem.classList.remove(_this.player2.name + "--punch"); }, 200);
                map = {};
            }
            if (_this.checkWin(player1_elem, player2_elem))
                document.body.removeEventListener("keydown", f);
        };
        var f = this.throttle(handler, 200); //вызываем обработчик с задержкой
        document.getElementById("start-fight").style.display = "none";
        document.body.addEventListener("keydown", f);
        document.body.addEventListener("keyup", f);
    };
    FightView.prototype.fight = function (player1, player2, hp, width) {
        var damage = player2.getBlockPower() - player1.getHitPower();
        if (damage <= 0) {
            player2.health += damage;
            hp.innerText = String(player2.health);
            hp.style.width = Number.parseInt(hp.style.width) + 100 * damage / width + "%";
        }
    };
    FightView.prototype.checkWin = function (player1_elem, player2_elem) {
        if (this.player1.health <= 0 || this.player2.health <= 0) {
            if (this.player1.health > this.player2.health) {
                this.winner = "Player 1";
                player1_elem.classList.add(this.player1.name + "--victory"); // ОБЯЗАТЕЛЬНО СДЕЛАТЬ АНИМАЦИЮ ПРОИГРЫША
                player2_elem.classList.add(this.player2.name + "--death");
            }
            else {
                this.winner = "Player 2";
                player2_elem.classList.add(this.player2.name + "--victory");
                player1_elem.classList.add(this.player1.name + "--death");
            }
            this.isFinished = true;
            var congrad = document.getElementsByClassName("congrad")[0];
            congrad.style.display = "inline-block";
            congrad.innerText = this.winner + " won!";
            document.getElementsByClassName("back")[0].style.display = "inline-block";
            return true;
        }
    };
    FightView.prototype.startAgain = function () {
        this.player1.reset();
        this.player2.reset();
        this.isFinished = false;
        this.element.style.display = "flex";
        document.getElementsByClassName("fighters")[0].style.display = "flex";
        document.getElementsByClassName("stage")[0].style.display = "none";
        document.getElementsByClassName("congrad")[0].style.display = "none";
        document.getElementsByClassName("back")[0].style.display = "none";
        document.getElementsByClassName("bar")[0].style.width = "100%";
        document.getElementsByClassName("bar")[1].style.width = "100%";
        document.getElementById("progress-bars").style.display = "none";
    };
    return FightView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FightView);


/***/ }),

/***/ "./src/tscript/fighter.ts":
/*!********************************!*\
  !*** ./src/tscript/fighter.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Fighter = /** @class */ (function () {
    function Fighter(fighterInfo) {
        var name = fighterInfo.name, health = fighterInfo.health, attack = fighterInfo.attack, defense = fighterInfo.defense, source = fighterInfo.source;
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.source = source;
    }
    Fighter.prototype.chance = function () {
        return Math.floor(1 + Math.random() * 2);
    };
    Fighter.prototype.getHitPower = function () {
        return this.attack * this.chance();
    };
    Fighter.prototype.getBlockPower = function () {
        return this.defense * this.chance();
    };
    Fighter.prototype.reset = function () {
        this.name = "";
        this.health = 0;
        this.attack = 0;
        this.defense = 0;
        this.source = "";
    };
    return Fighter;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fighter);


/***/ }),

/***/ "./src/tscript/fighterView.ts":
/*!************************************!*\
  !*** ./src/tscript/fighterView.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/tscript/view.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FighterView = /** @class */ (function (_super) {
    __extends(FighterView, _super);
    function FighterView(fighter, handleClick) {
        var _this = _super.call(this) || this;
        _this.createFighter(fighter, handleClick);
        return _this;
    }
    FighterView.prototype.createFighter = function (fighter, handleClick) {
        var name = fighter.name, source = fighter.source;
        var nameElement = this.createName(name);
        var imageElement = this.createImage(source);
        this.element = this.createElement({ tagName: 'div', className: 'fighter' });
        this.element.append(imageElement, nameElement);
        this.element.addEventListener('click', function (event) { return handleClick(event, fighter); }, false);
    };
    FighterView.prototype.createName = function (name) {
        var nameElement = this.createElement({ tagName: 'span', className: 'name' });
        nameElement.innerText = name;
        return nameElement;
    };
    FighterView.prototype.createImage = function (source) {
        var attributes = { src: source };
        var imgElement = this.createElement({
            tagName: 'img',
            className: 'fighter-image',
            attributes: attributes
        });
        return imgElement;
    };
    return FighterView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FighterView);


/***/ }),

/***/ "./src/tscript/fightersView.ts":
/*!*************************************!*\
  !*** ./src/tscript/fightersView.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/tscript/view.ts");
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fighterView */ "./src/tscript/fighterView.ts");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalView */ "./src/tscript/modalView.ts");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/fightersService */ "./src/tscript/services/fightersService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};




var FightersView = /** @class */ (function (_super) {
    __extends(FightersView, _super);
    function FightersView(fighters) {
        var _this = _super.call(this) || this;
        _this.fightersDetailsMap = new Map();
        _this.handleClick = _this.handleFighterClick.bind(_this);
        _this.createFighters(fighters);
        return _this;
    }
    FightersView.prototype.createFighters = function (fighters) {
        var _a;
        var _this = this;
        var fighterElements = fighters.map(function (fighter) {
            var fighterView = new _fighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighter, _this.handleClick);
            return fighterView.element;
        });
        this.element = this.createElement({ tagName: 'div', className: 'fighters' });
        (_a = this.element).append.apply(_a, __spread(fighterElements));
    };
    FightersView.prototype.handleFighterClick = function (event, fighter) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, myelem, fighterInfo, myelem2, list, i, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = fighter._id;
                        myelem = document.getElementsByClassName("modal-wrap");
                        return [4 /*yield*/, this.getInfo(_id)];
                    case 1:
                        fighterInfo = _a.sent();
                        if (myelem.length == 0) {
                            myelem2 = new _modalView__WEBPACK_IMPORTED_MODULE_2__["default"](fighterInfo);
                            document.body.append(myelem2.element);
                        }
                        else {
                            myelem[0].style.display = "block";
                            list = myelem[0].getElementsByClassName("modal-text");
                            i = 0;
                            Object.defineProperty(fighterInfo, "_id", { enumerable: false });
                            Object.defineProperty(fighterInfo, "source", { enumerable: false });
                            for (key in fighterInfo) {
                                if (i < list.length) {
                                    list[i].innerText = key + ":" + fighterInfo[key];
                                }
                                i++;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FightersView.prototype.getInfo = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.fightersDetailsMap.has(_id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, _services_fightersService__WEBPACK_IMPORTED_MODULE_3__["fighterService"].getFighterDetails(_id)];
                    case 1:
                        res = _a.sent();
                        this.fightersDetailsMap.set(_id, res);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.fightersDetailsMap.get(_id)];
                }
            });
        });
    };
    return FightersView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FightersView);


/***/ }),

/***/ "./src/tscript/helpers/apiHelper.ts":
/*!******************************************!*\
  !*** ./src/tscript/helpers/apiHelper.ts ***!
  \******************************************/
/*! exports provided: callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
var API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';
function callApi(endpoind, method) {
    var url = API_URL + endpoind;
    var options = {
        method: method
    };
    return fetch(url, options)
        .then(function (response) {
        return response.ok ? response.json() : Promise.reject(Error('Failed to load'));
    })
        .catch(function (error) {
        throw error;
    });
}



/***/ }),

/***/ "./src/tscript/modalView.ts":
/*!**********************************!*\
  !*** ./src/tscript/modalView.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/tscript/view.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};

var ModalView = /** @class */ (function (_super) {
    __extends(ModalView, _super);
    function ModalView(fighterInfo) {
        var _this = _super.call(this) || this;
        _this.createModal(fighterInfo);
        return _this;
    }
    ModalView.prototype.createModal = function (fighterInfo) {
        this.element = this.createElement({ tagName: 'div', className: 'modal-wrap' });
        var modal = this.createElement({ tagName: 'div', className: 'modal' });
        var close = this.createElement({ tagName: 'span', className: 'modal-button' });
        close.innerText = "X";
        close.addEventListener("click", function () {
            this.parentNode.parentNode.style.display = "none";
        });
        this.element.addEventListener("dblclick", function () {
            this.style.display = "none";
        });
        modal.append(close);
        var list = this.createList(fighterInfo);
        modal.append.apply(modal, __spread(list));
        this.element.appendChild(modal);
    };
    ModalView.prototype.createList = function (fighterInfo) {
        var i = 0;
        var list = [];
        Object.defineProperty(fighterInfo, "_id", { enumerable: false });
        Object.defineProperty(fighterInfo, "source", { enumerable: false });
        for (var key in fighterInfo) {
            var p = this.createElement({ tagName: 'p', className: 'modal-text' });
            p.innerText = key + ":" + fighterInfo[key];
            list.push(p);
            i++;
        }
        return list;
    };
    return ModalView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ModalView);


/***/ }),

/***/ "./src/tscript/services/fightersService.ts":
/*!*************************************************!*\
  !*** ./src/tscript/services/fightersService.ts ***!
  \*************************************************/
/*! exports provided: fighterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fighterService", function() { return fighterService; });
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiHelper */ "./src/tscript/helpers/apiHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FighterService = /** @class */ (function () {
    function FighterService() {
    }
    FighterService.prototype.getFighters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = 'fighters.json';
                        return [4 /*yield*/, Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FighterService.prototype.getFighterDetails = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = "details/fighter/" + _id + ".json";
                        return [4 /*yield*/, Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FighterService;
}());
var fighterService = new FighterService();



/***/ }),

/***/ "./src/tscript/view.ts":
/*!*****************************!*\
  !*** ./src/tscript/view.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.createElement = function (_a) {
        var tagName = _a.tagName, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
        var element = document.createElement(tagName);
        element.classList.add(className);
        Object.keys(attributes).forEach(function (key) { return element.setAttribute(key, attributes[key]); });
        return element;
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map