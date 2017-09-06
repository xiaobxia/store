'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by xiaobxia on 2017/8/30.
 */
(function () {
  var COOKIE_KEY = /[^ =;]+(?=\=)/g;

  var Store = function () {
    //默认使用webStorage，如果传参cookie那就使用cookie
    function Store(storeType) {
      _classCallCheck(this, Store);

      this.storeType = 'storage';
      if (storeType === 'cookie') {
        this.storeType = 'cookie';
      } else if (storeType === 'local') {
        this.$store = this.getLocalStorage();
      } else {
        this.$store = this.getSessionStorage();
      }
    }

    _createClass(Store, [{
      key: 'getData',
      value: function getData(list) {
        var values = [];
        for (var k = 0, len = list.length; k < len; k++) {
          values.push(this.getItem(list[k]));
        }
        return values;
      }
    }, {
      key: 'getItem',
      value: function getItem(key) {
        var store = this.$store;
        if (this.storeType !== 'cookie') {
          return store.getItem(key) || '';
        }
        var cookieName = encodeURIComponent(key) + '=',
            cookieStart = document.cookie.indexOf(key),
            cookieValue = '',
            cookieEnd = void 0;
        if (cookieStart !== -1) {
          cookieEnd = document.cookie.indexOf(";", cookieStart);
          if (cookieEnd === -1) {
            cookieEnd = document.cookie.length;
          }
          cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
      }
    }, {
      key: 'setData',
      value: function setData(data, option) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            this.setItem(key, data[key], option);
          }
        }
      }
    }, {
      key: 'setItem',
      value: function setItem(key, value, option) {
        if (this.storeType !== 'cookie') {
          return this.$store.setItem(key, value);
        }
        var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        if (option) {
          if (option.expires && option.expires instanceof Date) {
            cookieText += "; expires=" + option.expires.toGMTString();
          }
          if (option.path) {
            cookieText += "; path=" + option.path;
          }
          if (option.domain) {
            cookieText += "; domain=" + option.domain;
          }
          if (option.secure) {
            cookieText += "; secure";
          }
        }
        document.cookie = cookieText;
      }
    }, {
      key: 'removeItem',
      value: function removeItem(key) {
        if (this.storeType !== 'cookie') {
          return this.$store.removeItem(key);
        }
        this.setItem(key, "", new Date(0));
      }
    }, {
      key: 'getAllItem',
      value: function getAllItem() {
        var store = this.$store;
        var list = [];
        if (this.storeType !== 'cookie') {
          for (var key in store) {
            if (store.hasOwnProperty(key)) {
              list.push({ key: key, value: store.getItem(key) });
            }
          }
          return list;
        }
        var keys = document.cookie.match(COOKIE_KEY);
        for (var k = 0, len = keys.length; k < len; k++) {
          var value = this.getItem(keys[k]);
          if (value) {
            list.push({ key: keys[k], value: this.getItem(keys[k]) });
          }
        }
        return list;
      }
    }, {
      key: 'clearAll',
      value: function clearAll() {
        if (this.storeType !== 'cookie') {
          return this.$store.clear();
        }
        var keys = document.cookie.match(COOKIE_KEY);
        for (var k = 0, len = keys.length; k < len; k++) {
          this.removeItem(keys[k]);
        }
      }
    }, {
      key: 'getSessionStorage',
      value: function getSessionStorage() {
        if ((typeof sessionStorage === 'undefined' ? 'undefined' : _typeof(sessionStorage)) === "object") {
          return sessionStorage;
        } else {
          throw new Error("Session storage not available.");
        }
      }
    }, {
      key: 'getLocalStorage',
      value: function getLocalStorage() {
        if ((typeof localStorage === 'undefined' ? 'undefined' : _typeof(localStorage)) === "object") {
          return localStorage;
        } else if ((typeof globalStorage === 'undefined' ? 'undefined' : _typeof(globalStorage)) === "object") {
          return globalStorage[location.host];
        } else {
          throw new Error("Local storage not available.");
        }
      }
    }]);

    return Store;
  }();

  if (typeof module !== 'undefined' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = Store;
  } else {
    window.Store = Store;
  }
})();