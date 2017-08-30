/**
 * Created by xiaobxia on 2017/8/30.
 */
(function () {
  class Store {
    //默认使用webStorage，如果传参cookie那就使用cookie
    constructor(storeType) {
      this.storeType = 'storage';
      if (storeType === 'cookie') {
        this.storeType = 'cookie';
      } else if (storeType === 'local') {
        this.$store = this.getLocalStorage();
      } else {
        this.$store = this.getSessionStorage();
      }
    }

    getItem(key) {
      let store = this.$store;
      if (this.storeType !== 'cookie') {
        return store.getItem(key);
      }
      let cookieName = encodeURIComponent(key) + '=',
        cookieStart = document.cookie.indexOf(key),
        cookieValue = '',
        cookieEnd;
      if (cookieStart !== -1) {
        cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd === -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
      }
      return cookieValue;
    }

    setItem(key, value, option) {
      if (this.storeType !== 'cookie') {
        return this.$store.setItem(key, value);
      }
      let cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value);
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

    removeItem(key) {
      if (this.storeType !== 'cookie') {
        return this.$store.removeItem(key);
      }
      this.setItem(key, "", new Date(0));
    }

    getAllItem() {
      let store = this.$store;
      let list = [];
      if (this.storeType !== 'cookie') {
        for (let key in store) {
          if (store.hasOwnProperty(key)) {
            list.push({key: key, value: store.getItem(key)});
          }
        }
        return list;
      }
      let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      for (let k = 0, len = keys.length; k < len; k++) {
        list.push({key: keys[k], value: this.getItem(keys[k])});
      }
      return list;
    }

    clearAll() {
      if (this.storeType !== 'cookie') {
        return this.$store.clear();
      }
      let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      for (let k = 0, len = keys.length; k < len; k++) {
        this.removeItem(keys[k]);
      }
    }

    getSessionStorage() {
      if (typeof sessionStorage === "object") {
        return sessionStorage;
      } else {
        throw new Error("Session storage not available.");
      }
    }

    getLocalStorage() {
      if (typeof localStorage === "object") {
        return localStorage;
      } else if (typeof globalStorage === "object") {
        return globalStorage[location.host];
      } else {
        throw new Error("Local storage not available.");
      }
    }
  }
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Store;
  } else {
    window.Store = Store;
  }
})();
