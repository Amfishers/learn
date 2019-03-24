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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cal_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vue_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_js__ = __webpack_require__(12);





new __WEBPACK_IMPORTED_MODULE_2__vue_js___default.a({
    el: '#app',
    components: {
        app: __WEBPACK_IMPORTED_MODULE_3__App_js__["a" /* default */]
    },
    template: '<app/>'
})





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ('我是计算器');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!./node_modules/css-loader/index.js!./main.css", function() {
		var newContent = require("!!./node_modules/css-loader/index.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "body {\r\n    background: #02c;\r\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
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

var	fixUrls = __webpack_require__(7);

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(9).setImmediate))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(10);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_jpg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__01_jpg__);


var App = {
    template: `
        <div>
            <img :src="imgSrc" />
        </div>
    `,
    data() {
        return {
            imgSrc: __WEBPACK_IMPORTED_MODULE_0__01_jpg___default.a 
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE3ODE3Mzk1MzBBRDExRThBM0NDQ0ZERTY4RjJENEMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE3ODE3Mzk2MzBBRDExRThBM0NDQ0ZERTY4RjJENEMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTc4MTczOTMzMEFEMTFFOEEzQ0NDRkRFNjhGMkQ0QzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTc4MTczOTQzMEFEMTFFOEEzQ0NDRkRFNjhGMkQ0QzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAKASgABQCUAASgCgEoBNoEcQJtAjiBHECbQG0CbQG0BtAbQLtAu0C7QLtAtAFALQC0AAWgCgCgFAAAACgCgFAAAAFoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAFAJQABKAKAKASgCgEoBKAKASgCgCgCgDaAoAoBaAWgCgFoAoAoBQAABQBQC0AAAAAAAAUAqQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAoBAAEoAoAoBAFAFAFAFAFAFAFAAFAAKAKAWgCgAAAAAAACgFoAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgEAAAFAFAFAFAJQC0AUAAAAAAAAUAtAFAFAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAFAFAFAFAFAFAFAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"

/***/ })
/******/ ]);