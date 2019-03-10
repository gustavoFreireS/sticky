(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Sticky", [], factory);
	else if(typeof exports === 'object')
		exports["Sticky"] = factory();
	else
		root["Sticky"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Sticky.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Brick.js":
/*!**********************!*\
  !*** ./src/Brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brick; });
/* harmony import */ var _blockBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockBuilder.js */ "./src/blockBuilder.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _arrangePorts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrangePorts */ "./src/arrangePorts.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var RENDER_HTML = true;
var defaultConfig = {
  strokeWidth: 3,
  marginLeft: 0,
  width: 90,
  opacity: 1,
  height: 50,
  rx: 20,
  ry: 20,
  fill: '#1F8244',
  stroke: '#000000',
  gui: {}
};

var Brick =
/*#__PURE__*/
function () {
  function Brick() {
    var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Brick);

    var cfg = _objectSpread({}, defaultConfig, custom);

    var behavior = cfg.behavior,
        title = cfg.title,
        ports = cfg.ports,
        icon = cfg.icon,
        gui = cfg.gui,
        id = cfg.id,
        x = cfg.x,
        y = cfg.y,
        inputs = cfg.inputs; // this._id = id;

    this.inputs = inputs || {};
    this._el = (RENDER_HTML ? _blockBuilder_js__WEBPACK_IMPORTED_MODULE_0__["htmlBlockBuilder"] : _blockBuilder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, cfg);
    this.behavior = behavior;
    this._container = null;
    this._refBlock = id;
    this.x = x || 0;
    this.y = y || 0;
    this._ports = {
      in: [],
      out: []
    };
    this.wires = [];
    this._aux = {
      attaching: {}
    };
    this._states = {
      dragging: false
    };
    _arrangePorts__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, ports, gui);
    return this;
  }

  _createClass(Brick, [{
    key: "attr",
    value: function attr(key, value) {
      if (value) return this._el.setAttribute(key, value);else if (key) return this._el.getAttribute(key);
    }
  }, {
    key: "detach",
    value: function detach() {
      this._el.parentNode.removeChild(this._el);

      return this;
    }
  }, {
    key: "arrangePorts",
    value: function arrangePorts() {}
  }, {
    key: "delete",
    value: function _delete() {
      var _arr = _toConsumableArray(this.wires);

      for (var _i = 0; _i < _arr.length; _i++) {
        var wire = _arr[_i];
        wire.delete();
      }

      this.detach();
    }
  }, {
    key: "updateWires",
    value: function updateWires() {
      this.wires.forEach(function (wire) {
        return wire.render();
      });
    }
  }, {
    key: "getValue",
    value: function getValue(id) {
      // var args = this._
      var args = [];
      var In = this._ports.in;

      for (var i = 0; i < In.length; i++) {
        args.push([]);

        for (var j = 0; j < In[i].length; j++) {
          args[i].push(In[i][j].value());
        }
      }

      if (id) return this._behavior(args)[id];else return this._behavior(args);
    }
  }, {
    key: "data",
    get: function get() {
      return this.behavior();
    }
  }, {
    key: "main",
    get: function get() {
      return this._el.querySelector('#main');
    }
  }, {
    key: "_svg",
    get: function get() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getParentSvg"])(this._el);
    }
  }, {
    key: "x",
    get: function get() {
      return this._el.getAttribute('x') * 1;
    } // force coercion
    ,
    set: function set(val) {
      return this._el.setAttribute('x', val);
    }
  }, {
    key: "y",
    get: function get() {
      return this._el.getAttribute('y') * 1;
    },
    set: function set(val) {
      return this._el.setAttribute('y', val);
    }
  }, {
    key: "text",
    get: function get() {
      return this._el.innerHTML;
    },
    set: function set(val) {
      return this._el.innerHTML = val;
    }
  }]);

  return Brick;
}();



/***/ }),

/***/ "./src/Port.js":
/*!*********************!*\
  !*** ./src/Port.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Port; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Port =
/*#__PURE__*/
function () {
  function Port(_ref) {
    var id = _ref.id,
        type = _ref.type,
        dir = _ref.dir,
        brick = _ref.brick;

    _classCallCheck(this, Port);

    if (!['in', 'out'].includes(dir)) throw "port direction must be 'in' or 'out'";
    if (!['data', 'flow'].includes(type)) throw "type must be 'data' or 'flow'"; // var attrs = { width: 30, height: 30, fill: '#B8D430', stroke: 'black', 'stroke-width': 3 };

    var attrs = {
      r: 7,
      fill: '#B8D430',
      stroke: 'black',
      'stroke-width': 2.5
    }; // Object.assign(attrs, { wrapper: this, type: 'port', dir: dir });

    this._el = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('circle', attrs);
    this._el.wrapper = this;
    this._el.type = 'port';
    this._el.dir = dir;
    this._brick = brick;
    this._maxcon = 2;
    this._conn = [];
    this.id = id;
    this.type = type;
    this.dir = dir; //dir -> direction, not directory
  }

  _createClass(Port, [{
    key: "attr",
    value: function attr(key, value) {
      if (value) return this._el.setAttribute(key, value);else return this._el.getAttribute(key);
    }
  }, {
    key: "value",
    value: function value() {
      this._brick.getValue(); // this.wrapper.getValue(this._id);

    }
  }, {
    key: "getPoint",
    value: function getPoint() {
      return {
        x: this._brick.x + this.x,
        y: this._brick.y + this.y
      };
    }
  }, {
    key: "attach",
    value: function attach(to) {
      if (this.canAttach(to)) {
        this._conn.push({
          brick: to._brick._id,
          id: to.id
        });

        to._conn.push({
          brick: this._brick._id,
          id: this.id
        }); // console.log(this, to);


        return true;
      }

      return false;
    }
  }, {
    key: "dettach",
    value: function dettach(to) {
      var index1 = this._conn.indexOf({
        brick: to._brick._id,
        id: to.id
      });

      var index2 = this._conn.indexOf({
        brick: this._brick._id,
        id: this.id
      });

      this._conn.splice(index1, 1);

      to._conn.splice(index2, 1);
    }
  }, {
    key: "canAttach",
    value: function canAttach(to) {
      return this.available && to.available && this.type === to.type ? true : false;
    }
  }, {
    key: "x",
    get: function get() {
      return this.attr('cx') * 1;
    } //force coercion to number

  }, {
    key: "y",
    get: function get() {
      return this.attr('cy') * 1;
    }
  }, {
    key: "available",
    get: function get() {
      return this._conn.length < this._maxcon;
    }
  }]);

  return Port;
}();



/***/ }),

/***/ "./src/Sticky.js":
/*!***********************!*\
  !*** ./src/Sticky.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sticky; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wire_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wire.js */ "./src/Wire.js");
/* harmony import */ var _Brick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brick.js */ "./src/Brick.js");
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks.js */ "./src/blocks.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Sticky =
/*#__PURE__*/
function () {
  function Sticky(id) {
    var _this = this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      width: 800,
      height: 600
    },
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Sticky);

    this.el = document.getElementById(id);
    if (!this.el) throw "Couldn't find element :(";
    this._uid = 0;
    this._aux = {};
    this.blocks = {};
    this._objects = [];
    this._wires = [];
    this._state = null;
    var svg = Sticky.createElement('svg', {
      class: 'svg-content',
      preserveAspectRatio: "xMidYMid meet"
    });
    this._svg = svg;
    this.el.appendChild(this._svg);
    this.matchViewBox(); // this.registerBlock('actuator', ActuatorBrick);

    this.clearCanvas();
    this.setCanvasSize({
      width: width,
      height: height
    });
    this.colors = ["#B8D430", "#3AB745", "#029990", "#3501CB", "#2E2C75", "#673A7E", "#CC0071", "#F80120", "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"]; // DOM Events

    svg.addEventListener('mousedown', function (e) {
      normalizeEvent(e);
      _this.lastSelected = null;
      var target = e.target;

      if (target.type === 'wire') {
        _this.lastSelected = target.wrapper;
        return _this.selectedWire = target.wrapper;
      }

      if (target.type === 'port' && target.dir === 'out') {
        return _this.startAttach(target);
      }

      var parentSvg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["getParentSvg"])(target);

      var shouldCapture = function shouldCapture(tagName) {
        return !['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(tagName);
      };

      if (shouldCapture(target.tagName) && parentSvg && parentSvg.type == 'block') {
        var blockNode = parentSvg;
        console.debug('Block selected:', blockNode, 'Triggered by: ', target);
        var wrapper = blockNode.wrapper;
        _this.lastSelected = wrapper;
        _this.dragging = blockNode;

        var SVGbox = wrapper._svg.getBoundingClientRect();

        var offset = {
          x: e.x - SVGbox.left,
          y: e.y - SVGbox.top
        };
        _this._aux.mouseDown = {
          x: offset.x - wrapper.x,
          y: offset.y - wrapper.y
        };

        _this._svg.appendChild(_this.dragging);

        wrapper.wires.forEach(function (wire) {
          return _this._svg.appendChild(wire._el);
        });
      }
    }, false);
    document.addEventListener('keydown', function (e) {
      if (e.keyCode == 46) {
        console.debug('deleting', _this.lastSelected);

        _this.lastSelected.delete(); // @TODO should remove from state (brick, wire, port)

      }
    }, false);
    svg.addEventListener('mouseup', function (e) {
      _this.dragging = null;
      if (e.target.type === 'port') return _this.endAttach(e.target);

      if (_this.isState('attaching')) {
        _this.setState(null);

        svg.removeChild(_this._aux['wire']._el);
      }
    });
    svg.addEventListener('mousemove', function (e) {
      normalizeEvent(e);
      return _this.attachMove(e);
    });
    svg.addEventListener('mousemove', function (e) {
      normalizeEvent(e);

      if (_this.dragging) {
        var wrapper = _this.dragging.wrapper;

        var SVGbox = wrapper._svg.getBoundingClientRect();

        var OffsetX = e.x - SVGbox.left;
        var OffsetY = e.y - SVGbox.top;
        var firstState = _this._aux.mouseDown;
        wrapper.x = OffsetX - firstState.x;
        wrapper.y = OffsetY - firstState.y;
        wrapper.updateWires();
      }
    });
    return this;
  }

  _createClass(Sticky, [{
    key: "setCanvasSize",
    value: function setCanvasSize(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      this._svg.style.width = width;
      this._svg.style.height = height;

      this._svg.setAttribute('viewBox', "0 0 ".concat(width, " ").concat(height));
    } //static methods

  }, {
    key: "matchViewBox",
    value: function matchViewBox() {
      var _this$_svg$getBoundin = this._svg.getBoundingClientRect(),
          width = _this$_svg$getBoundin.width,
          height = _this$_svg$getBoundin.height;

      this._svg.setAttribute('viewBox', "0, 0, ".concat(width, " ").concat(height));
    }
  }, {
    key: "Brick",
    value: function Brick(name, attrs) {
      var el = Sticky.createElement(name, attrs);
      var brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_2__["default"](el, this);
      brick._id = this._uid++;

      this._objects.push(brick);

      return brick;
    }
  }, {
    key: "addObj",
    value: function addObj(obj) {
      if (obj._id == null) obj._id = this._uid++;

      this._objects.push(obj);

      this.addElement(obj._el);
    }
  }, {
    key: "removeObj",
    value: function removeObj(obj, update) {
      var index = this._objects.indexOf(obj);

      if (index == -1) return;

      var _arr = Object.keys(obj._ports);

      for (var _i = 0; _i < _arr.length; _i++) {
        var port_type = _arr[_i];

        if (obj._ports[port_type].length) {
          // if there's any connection
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = obj._ports[port_type][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {// port.dettach();

              var port = _step.value;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      var _arr2 = _toConsumableArray(obj.wires);

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var _wire = _arr2[_i2];

        _wire.delete();
      }

      this.removeElement(obj._el);
      if (update) // should splice wires too
        return this._objects.splice(index, 1);
    }
  }, {
    key: "addElement",
    value: function addElement(el) {
      this._svg.appendChild(el);
    }
  }, {
    key: "removeElement",
    value: function removeElement(el) {
      if (this._svg.contains(el)) this._svg.removeChild(el);
    }
  }, {
    key: "startAttach",
    value: function startAttach(port) {
      var wire = new _Wire_js__WEBPACK_IMPORTED_MODULE_1__["default"](port.wrapper);
      wire._inverted = port.wrapper.dir === 'in';
      this.setState('attaching');
      this._aux['wire'] = wire;
      this.addElement(wire._el);
    }
  }, {
    key: "startDrag",
    value: function startDrag(port) {
      this.setState('attaching');
      this._aux['wire'] = wire;
      this.addElement(wire._el);
    }
  }, {
    key: "endAttach",
    value: function endAttach(port) {
      if (this.isState('attaching')) {
        this.setState(null);
        var wire = this._aux['wire'];
        wire._cp2 = port.wrapper;

        if (wire.seal()) {
          wire.render();

          this._wires.push(wire);
        } else {
          this.removeElement(wire._el);
        }

        delete this._aux['wire'];
      }
    }
  }, {
    key: "setState",
    value: function setState(state) {
      return this._state = state;
    }
  }, {
    key: "isState",
    value: function isState(state) {
      return this._state === state;
    }
  }, {
    key: "attachMove",
    value: function attachMove(mouse) {
      if (this.isState('attaching')) {
        var wire = this._aux['wire'];

        var SVGbox = this._svg.getBoundingClientRect(); //(below) pixel for removing the wire from the way so we can detect the event on port


        var offset = wire._inverted ? 4 : -4;
        var mouse = {
          x: mouse.x - SVGbox.left + offset,
          y: mouse.y - SVGbox.top
        };

        var port = wire._cp1.getPoint();

        wire._render(port, mouse, wire._inverted);
      }
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._objects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var obj = _step2.value;
          // this.removeElement(obj._el);
          this.removeObj(obj, false);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._objects = [];
      this._wires = [];
      if (!start) return;
      var startBlock = this.createBlock('start');
      startBlock.x = 30;
      startBlock.y = 30;

      startBlock.behavior = function () {
        return 0;
      };

      this.addObj(startBlock);
    }
  }, {
    key: "registerBlock",
    value: function registerBlock(name, obj) {
      this.blocks[name] = _objectSpread({}, obj, {
        id: name,
        behavior: typeof obj.behavior !== 'function' ? new Function('findById', obj.behavior) : obj.behavior
      });
    }
  }, {
    key: "createBlock",
    value: function createBlock(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cfg = this.blocks[name] || this.__blocks[name];
      if (!cfg) throw "Block '".concat(name, "' not registered");
      return new _Brick_js__WEBPACK_IMPORTED_MODULE_2__["default"](_objectSpread({}, cfg, data));
    }
  }, {
    key: "findById",
    value: function findById(id) {
      if (id == undefined) return null;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._objects[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var obj = _step3.value;
          if (obj._id === id) return obj;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var fluxgram = this._objects.map(function (obj) {
        var object = {
          refBlock: obj._refBlock,
          inputs: obj.inputs,
          id: obj._id,
          x: obj.x,
          y: obj.y,
          ports: {} // flow_in, flow_out, in, out

        };

        for (var type in obj._ports) {
          console.log(type, obj._ports[type]);
          object.ports[type] = obj._ports[type].map(function (port) {
            return _toConsumableArray(port._conn);
          });
        }

        return object;
      });

      var refBlock = Object.entries(this.__blocks).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            blockId = _ref4[0],
            block = _ref4[1];

        return _objectSpread({}, block, {
          behavior: block.behavior.toString()
        });
      });
      var string = JSON.stringify({
        refBlock: refBlock,
        fluxgram: fluxgram
      }, null, 2);
      copy(string);
      return JSON.parse(string);
    }
  }, {
    key: "sealOrDiscard",
    value: function sealOrDiscard() {
      for (var _len = arguments.length, cps = new Array(_len), _key = 0; _key < _len; _key++) {
        cps[_key] = arguments[_key];
      }

      var wire = _construct(_Wire_js__WEBPACK_IMPORTED_MODULE_1__["default"], cps);

      this.addElement(wire._el);

      if (wire.seal()) {
        wire.render();

        this._wires.push(wire);
      } else {
        this.removeElement(wire._el);
      }
    }
  }, {
    key: "loadPorts",
    value: function loadPorts(blocky, ports, _ref5) {
      var _this2 = this;

      var _ref6 = _slicedToArray(_ref5, 2),
          from = _ref6[0],
          to = _ref6[1];

      ports.forEach(function (port, index) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = port[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var conn = _step4.value;

            var blocky2 = _this2.findById(conn.brick);

            var cps = [blocky._ports[from][index], blocky2._ports[to][conn.id]];

            _this2.sealOrDiscard.apply(_this2, cps);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      });
    }
  }, {
    key: "loadJSON",
    value: function loadJSON(data) {
      this.clearCanvas(false);
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var block = _step5.value;
          var refBlock = block.refBlock,
              inputs = block.inputs,
              x = block.x,
              y = block.y,
              value = block.value,
              id = block.id;
          var obj = this.createBlock(refBlock, {
            inputs: inputs
          });
          obj.x = x;
          obj.y = y;
          obj.value = value;
          obj._id = id;
          this.addObj(obj);
        } // load wires

      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _block = _step6.value;
          var blocky = this.findById(_block.id);
          this.loadPorts(blocky, _block.ports.out, ['out', 'in']);
          this.loadPorts(blocky, _block.ports.flow_out, ['flow_out', 'flow_in']);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      var flow = this.toJSON().fluxgram;
      this.clearCanvas(true);
      this.loadJSON(flow);
    }
  }, {
    key: "run",
    value: function run() {
      var flow, id, refBlock;

      var block = this._objects.find(function (_ref7) {
        var _refBlock = _ref7._refBlock;
        return _refBlock == 'start';
      });

      if (!block) {
        console.warning('Start block not found');
        return false;
      }

      console.debug('Start block found:', block); // flow = start.behavior();
      // an ActuatorBrick should return the flow_out port id
      // it'll be useful for if block

      var findById = this.findById.bind(this);
      var step = 0;

      do {
        refBlock = this.blocks[block._refBlock] || this.__blocks[block._refBlock];
        flow = refBlock.behavior.call(block, findById);
        id = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(block._ports, ['flow_out', flow, '_conn', 0, 'brick'], null);
        block = findById(id);
        console.debug('Step', ++step, refBlock);
        console.debug('Next Step', flow, block);
      } while (block);
    }
  }, {
    key: "compile",
    value: function compile() {}
  }], [{
    key: "createElement",
    value: function createElement(name, attrs) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', name);

      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }

      return el;
    }
  }, {
    key: "registerBlock",
    value: function registerBlock(name, obj) {
      this.prototype.__blocks[name] = _objectSpread({}, obj, {
        id: name,
        behavior: typeof obj.behavior !== 'function' ? new Function('findById', obj.behavior) : obj.behavior
      });
    }
  }, {
    key: "createBlock",
    value: function createBlock(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cfg = this.prototype.__blocks[name];
      if (!cfg) throw "Block not registered";
      return new _Brick_js__WEBPACK_IMPORTED_MODULE_2__["default"](_objectSpread({}, cfg, data));
    }
  }]);

  return Sticky;
}();


Sticky.prototype.__blocks = _blocks_js__WEBPACK_IMPORTED_MODULE_3__["default"] || {};

var normalizeEvent = function normalizeEvent(e) {
  if (e.x == undefined) e.x = e.clientX;
  if (e.y == undefined) e.y = e.clientY;
};

/***/ }),

/***/ "./src/Wire.js":
/*!*********************!*\
  !*** ./src/Wire.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wire; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

function Wire(p1, p2) {
  var _this = this;

  var styles = [{
    'stroke': '#000000',
    'stroke-width': 7,
    'stroke-linejoin': 'round',
    'stroke-linecap': 'round',
    'fill': 'none',
    'opacity': 1
  }, {
    'stroke': '#505050',
    'stroke-width': 6,
    'stroke-linejoin': 'round',
    'stroke-linecap': 'round',
    'fill': 'none',
    'opacity': 0.8
  }, {
    'stroke': '#F3F375',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-dasharray': 6,
    'fill': 'none',
    'opacity': 0.8
  }];
  var group = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('g');
  this._path = styles.map(function (style) {
    var path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('path', style);
    path.type = 'wire';
    path.wrapper = _this;
    group.appendChild(path);
    return path;
  });
  this._el = group;
  this._el.type = 'wire';
  this._el.wrapper = this;
  this._cp1 = p1;
  this._cp2 = p2;
  this._inverted = false;
  this._behavior = undefined;
  return this;
} //static methods

Wire.describeJoint = function (x1, y1, x2, y2, offset) {
  return ["M", x1, y1, "C", x1 + offset, y1, x2 - offset, y2, x2, y2].join(" ");
};

Wire.dt2p = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

Wire.prototype = {
  _render: function _render(p1, p2, inv) {
    inv = inv ? -1 : 1;
    var offset = Wire.dt2p(p1.x, p1.y, p2.x, p2.y) / 2;
    var d = Wire.describeJoint(p1.x, p1.y, p2.x, p2.y, offset * inv);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;
        element.setAttribute('d', d);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  seal: function seal() {
    if (this._cp1.dir == this._cp2.dir) return false;
    var wrapper1 = this._cp1._brick;
    var wrapper2 = this._cp2._brick;

    if (this._cp1.attach(this._cp2)) {
      wrapper1.wires.push(this);
      wrapper2.wires.push(this);
      return true;
    } else {
      return false;
    }
  },
  delete: function _delete() {
    var wrapper1 = this._cp1._brick;
    var wrapper2 = this._cp2._brick;
    spliceByIndex(wrapper1.wires, this);
    spliceByIndex(wrapper2.wires, this);

    this._cp1.dettach(this._cp2);

    this._el.parentNode.removeChild(this._el);
  },
  render: function render() {
    this._render(this._cp1.getPoint(), this._cp2.getPoint(), this._inverted);
  }
};

function spliceByIndex(arr, obj) {
  var index = arr.indexOf(obj);

  if (index != -1) {
    arr.splice(index, 1);
    return true;
  }

  return false;
}

/***/ }),

/***/ "./src/arrangePorts.js":
/*!*****************************!*\
  !*** ./src/arrangePorts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrangePorts; });
/* harmony import */ var _ports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ports.js */ "./src/ports.js");

function arrangePorts() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$data_in = _ref.data_in,
      data_in = _ref$data_in === void 0 ? 1 : _ref$data_in,
      _ref$data_out = _ref.data_out,
      data_out = _ref$data_out === void 0 ? 1 : _ref$data_out,
      _ref$flow_in = _ref.flow_in,
      flow_in = _ref$flow_in === void 0 ? 1 : _ref$flow_in,
      _ref$flow_out = _ref.flow_out,
      flow_out = _ref$flow_out === void 0 ? 1 : _ref$flow_out;

  var gui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var radius = 10;
  var distance = 0; //distance beetween ports

  var strokeWidth = 3.5;
  var marginTop = 30;
  var ports = this._ports;
  var main = this.main; // var rectBox = main.getBBox ? main.getBBox() : main.getBoundingClientRect();

  var rectBox = main.getBoundingClientRect();
  var maxPorts = Math.max(data_in + flow_in, data_out + flow_out); // var maxPorts = Math.max(ports.in.length, ports.out.length);

  var Radius = radius + strokeWidth / 2; //total radius -> circle radius plus its stroke width

  var tRadius = distance + Radius;
  var height = tRadius * 2 * Math.max(maxPorts, 1 + Object.keys(gui).length); //distance + diameter * number of ports + final distance

  var width = main.getAttribute('width') * 1;
  this._ports.in = [];
  this._ports.out = [];
  this._ports.flow_in = [];
  this._ports.flow_out = [];
  main.setAttribute('height', height + marginTop + marginTop / 4);
  var attrs = {
    id: null,
    r: radius,
    fill: '#B8D430',
    stroke: 'black',
    'stroke-width': strokeWidth
  };
  var flow_attrs = {
    id: null,
    r: radius,
    fill: '#2549e4',
    stroke: 'black',
    'stroke-width': strokeWidth
  };
  var i, y, ds; // attrs.cx = margin; attrs.cy = rectBox.height/2;

  ds = height / (data_in + flow_in);
  y = marginTop + ds / 2; // center circle origin

  for (i = 0; i < flow_in; i++, y += ds) {
    var port = new _ports_js__WEBPACK_IMPORTED_MODULE_0__["FlowPort"]({
      id: i,
      dir: 'in',
      brick: this
    });
    port.attr('cy', y);
    ports.flow_in.push(port);

    this._el.appendChild(port._el);
  }

  for (i = 0; i < data_in; i++, y += ds) {
    var _port = new _ports_js__WEBPACK_IMPORTED_MODULE_0__["DataPort"]({
      id: i,
      dir: 'in',
      brick: this
    });

    _port.attr('cy', y);

    ports.in.push(_port);

    this._el.appendChild(_port._el);
  }

  ds = height / (data_out + flow_out);
  y = marginTop + ds / 2;

  for (i = 0; i < flow_out; i++, y += ds) {
    var _port2 = new _ports_js__WEBPACK_IMPORTED_MODULE_0__["FlowPort"]({
      id: i,
      dir: 'out',
      brick: this
    });

    _port2.attr('cx', width);

    _port2.attr('cy', y);

    ports.flow_out.push(_port2);

    this._el.appendChild(_port2._el);
  }

  for (i = 0; i < data_out; i++, y += ds) {
    var _port3 = new _ports_js__WEBPACK_IMPORTED_MODULE_0__["DataPort"]({
      id: i,
      dir: 'out',
      brick: this
    });

    _port3.attr('cx', width);

    _port3.attr('cy', y);

    ports.out.push(_port3);

    this._el.appendChild(_port3._el);
  }
}

/***/ }),

/***/ "./src/blockBuilder.js":
/*!*****************************!*\
  !*** ./src/blockBuilder.js ***!
  \*****************************/
/*! exports provided: htmlBlockBuilder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlBlockBuilder", function() { return htmlBlockBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blockBuilder; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui */ "./src/gui.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var example = {
  fill: '#31dfaf',
  border: '#e695bf',
  ports: {
    data_in: 0,
    data_out: 0,
    flow_in: 1,
    flow_out: 1
  },
  title: 'Example Block',
  icon: 'img/icon.png',
  gui: {
    select: {
      label: 'Select',
      type: 'select',
      options: ['USA', 'BR', 'CND']
    },
    text: {
      label: 'Text',
      type: 'text'
    },
    number: {
      label: 'Number',
      type: 'number'
    }
  }
};
function htmlBlockBuilder(wrapper, cfg) {
  var width = cfg.width,
      height = cfg.height,
      gui = cfg.gui,
      title = cfg.title,
      fill = cfg.fill;
  var svg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('svg');
  svg.wrapper = wrapper;
  svg.type = 'block';
  svg.style.overflow = 'visible';
  var attrs = {
    width: Math.max(60, width),
    height: height + Object.keys(gui).length * 25,
    class: 'sticky-block-html',
    id: 'main'
  };
  var foreign = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('foreignObject', _objectSpread({}, attrs));
  var body = document.createElement('body');
  body.innerHTML =
  /*html*/
  "\n    <header>".concat(title, "</header>\n  ");
  body.style.backgroundColor = fill;
  var section = document.createElement('section');
  var form = Object(_gui__WEBPACK_IMPORTED_MODULE_1__["buildForm"])(gui, function (id) {
    return wrapper.inputs[id] || '';
  }, function (_ref) {
    var id = _ref.id,
        value = _ref.value;
    wrapper.inputs[id] = value;
  });
  section.appendChild(form);
  body.appendChild(section);
  foreign.appendChild(body);
  svg.appendChild(foreign);
  return svg;
} // function SVGBuilder({ strokeWidth, marginLeft, width, opacity, height, rx, ry, fill, stroke, ...rest }) {

function blockBuilder(wrapper, cfg) {
  var strokeWidth = cfg.strokeWidth,
      marginLeft = cfg.marginLeft,
      width = cfg.width,
      opacity = cfg.opacity,
      height = cfg.height,
      rx = cfg.rx,
      ry = cfg.ry,
      fill = cfg.fill,
      stroke = cfg.stroke,
      title = cfg.title,
      gui = cfg.gui; // { strokeWidth = 3, marginLeft = 10, width = 150, opacity = 1, height = 50, rx = 20, ry = 20, fill = '#1F8244', stroke = '#000000' }

  var svg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('svg');
  svg.wrapper = wrapper;
  svg.type = 'block';
  svg.style.overflow = 'visible';
  var attrs = {
    width: width,
    height: height + Object.keys(gui).length * 25,
    rx: rx,
    ry: ry,
    'stroke-width': strokeWidth,
    style: "fill: ".concat(fill, "; stroke: ").concat(stroke, "; opacity: ").concat(opacity, ";"),
    class: 'sticky-block',
    id: 'main'
  };
  var rect = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('rect', attrs);
  var text = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('text', {
    x: 15,
    y: 30,
    style: 'cursor: default'
  });
  var txtNode = document.createTextNode(title);
  text.appendChild(txtNode);
  svg.appendChild(rect);
  svg.appendChild(text);
  var foreign = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('foreignObject', {
    class: 'sticky-gui',
    x: 15,
    y: 40
  });
  var guiElement = Object(_gui__WEBPACK_IMPORTED_MODULE_1__["buildForm"])(gui, function (_ref2) {
    var id = _ref2.id,
        value = _ref2.value;
    svg.wrapper.inputs[id] = value;
  });
  foreign.appendChild(guiElement);
  svg.appendChild(foreign);
  return svg;
}

/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'start': {
    id: 'start',
    width: 35,
    height: 60,
    rx: 10,
    ry: 10,
    fill: '#AF2B37',
    ports: {
      data_in: 0,
      data_out: 0,
      flow_in: 0,
      flow_out: 1
    },
    title: 'Start',
    icon: 'img/icon.png',
    behavior: function behavior() {
      return 0;
    }
  },
  'SourceNumber': {
    id: 'SourceNumber',
    fill: '#cfec2f',
    ports: {
      data_in: 0,
      data_out: 1,
      flow_in: 0,
      flow_out: 0
    },
    title: 'Number',
    gui: {
      number: {
        label: 'Number',
        type: 'number'
      }
    },
    behavior: function behavior() {
      return [this.inputs.number];
    }
  },
  'SourceString': {
    id: 'SourceString',
    fill: '#cfec2f',
    ports: {
      data_in: 0,
      data_out: 1,
      flow_in: 0,
      flow_out: 0
    },
    title: 'String',
    gui: {
      text: {
        label: 'Text',
        type: 'text'
      }
    },
    behavior: function behavior() {
      return [this.inputs.text];
    }
  },
  'Operation': {
    id: 'Operation',
    fill: '#cfec2f',
    ports: {
      data_in: 2,
      data_out: 1,
      flow_in: 0,
      flow_out: 0
    },
    title: 'Operation',
    gui: {
      op: {
        label: 'Operation',
        type: 'select',
        options: ['==', '!=', '===', '!==', '>', '>=', '<', '<=', '+', '-', '*', '/']
      }
    },
    behavior: function behavior(findById) {
      var conn1 = this._ports['in'][0]._conn[0];
      var conn2 = this._ports['in'][1]._conn[0];
      var brick1 = findById(conn1.brick);
      var brick2 = findById(conn2.brick);
      var val1 = brick1.behavior(findById)[conn1.id];
      var val2 = brick2.behavior(findById)[conn2.id];
      return [eval("".concat(JSON.stringify(val1), " ").concat(this.inputs.op, " ").concat(JSON.stringify(val2)))];
    }
  },
  'Alert': {
    id: 'Alert',
    fill: '#EC962F',
    ports: {
      data_in: 1,
      data_out: 0,
      flow_in: 1,
      flow_out: 1
    },
    title: 'Alert',
    behavior: function behavior(findById) {
      var conn = this._ports['in'][0]._conn[0];
      var brick = findById(conn.brick);
      var data = brick.behavior(findById)[conn.id];
      alert(data);
      return 0;
    }
  },
  'Sum': {
    id: 'Sum',
    fill: '#cfec2f',
    ports: {
      data_in: 2,
      data_out: 1,
      flow_in: 0,
      flow_out: 0
    },
    title: 'Sum',
    behavior: function behavior(findById) {
      var conn1 = this._ports['in'][0]._conn[0];
      var conn2 = this._ports['in'][1]._conn[0];
      var brick1 = findById(conn1.brick);
      var brick2 = findById(conn2.brick);
      var val1 = brick1.behavior(findById)[conn1.id];
      var val2 = brick2.behavior(findById)[conn2.id];
      return [val1 + val2];
    }
  },
  'If': {
    id: 'If',
    fill: '#EC962F',
    ports: {
      data_in: 1,
      data_out: 0,
      flow_in: 1,
      flow_out: 2
    },
    title: 'If',
    behavior: function behavior(findById) {
      var conn = this._ports['in'][0]._conn[0];
      var brick = findById(conn.brick);
      var data = brick.behavior(findById)[conn.id];
      return data ? 0 : 1;
    }
  }
});

/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/*! exports provided: buildForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildForm", function() { return buildForm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _identity = function _identity(v) {
  return v;
};

function buildForm(gui, getValue) {
  var onChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity;
  var form = document.createElement('form');
  form.xmlns = 'http://www.w3.org/1999/xhtml'; // form.style.margin = '0';

  Object.entries(gui).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        id = _ref2[0],
        input = _ref2[1];

    var label = input.label,
        type = input.type,
        options = input.options;
    var element;

    var createHandler = function createHandler() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _identity;
      return function (event) {
        onChange({
          event: event,
          id: id,
          value: f(event.target.value)
        });
      };
    };

    switch (type) {
      case 'number':
        {
          element = createLabel(label, type, getValue(id), createHandler(Number));
          break;
        }

      case 'text':
        {
          element = createLabel(label, type, getValue(id), createHandler());
          break;
        }

      case 'select':
        {
          element = createSelect(label, options, getValue(id), createHandler());
          break;
        }
    }

    form.appendChild(element);
  });
  return form;
}

var createLabel = function createLabel(_label, type, value, onChange) {
  var label = document.createElement('label');
  var txt = document.createTextNode("".concat(_label, ": "));
  var input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.addEventListener('change', onChange);
  onChange({
    target: input
  }); // input.style.width = '100%';

  label.appendChild(txt);
  label.appendChild(input);
  return label;
};

var createSelect = function createSelect(_label, options, value, onChange) {
  var label = document.createElement('label');
  var txt = document.createTextNode("".concat(_label, ": "));
  var select = document.createElement('select');
  options.forEach(function (value) {
    var option = document.createElement('option');
    option.value = option.text = value;
    select.add(option, null);
  });
  select.value = value;
  select.addEventListener('change', onChange);
  onChange({
    target: select
  });
  label.appendChild(txt);
  label.appendChild(select);
  return label;
};

/***/ }),

/***/ "./src/ports.js":
/*!**********************!*\
  !*** ./src/ports.js ***!
  \**********************/
/*! exports provided: DataPort, FlowPort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPort", function() { return DataPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowPort", function() { return FlowPort; });
/* harmony import */ var _Port_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Port.js */ "./src/Port.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var DataPort =
/*#__PURE__*/
function (_Port) {
  _inherits(DataPort, _Port);

  function DataPort(_ref) {
    var _this;

    var id = _ref.id,
        dir = _ref.dir,
        brick = _ref.brick;

    _classCallCheck(this, DataPort);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataPort).call(this, {
      id: id,
      dir: dir,
      brick: brick,
      type: 'data'
    }));
    var opts = {
      fill: '#B8D43'
    };
    return _this;
  }

  return DataPort;
}(_Port_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var FlowPort =
/*#__PURE__*/
function (_Port2) {
  _inherits(FlowPort, _Port2);

  function FlowPort(_ref2) {
    var _this2;

    var id = _ref2.id,
        dir = _ref2.dir,
        brick = _ref2.brick;

    _classCallCheck(this, FlowPort);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FlowPort).call(this, {
      id: id,
      dir: dir,
      brick: brick,
      type: 'flow'
    }));
    _this2._maxcon = 1;

    _this2._el.setAttribute('fill', '#2549e4');

    var opts = {
      fill: '#2549e4'
    };
    return _this2;
  }

  return FlowPort;
}(_Port_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getParentSvg, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentSvg", function() { return getParentSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
function getParentSvg(el) {
  if (!el.parentNode) return null;
  if (el.parentNode.nodeName === 'svg') return el.parentNode;
  return getParentSvg(el.parentNode);
}
function createElement(name, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', name);

  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }

  return el;
}

/***/ })

/******/ });
});
//# sourceMappingURL=sticky.js.map