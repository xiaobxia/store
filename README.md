# store
## 使用
- browser: window.Store
```html
<!--在head引入store.js-->
<script src="./store.js"></script>
<script>
  //for cookie
  var cookieStore = new Store('cookie');
  //for sessionStorage
  var sessionStore = new Store('session');
  //for localStorage
  var localStore = new Store('local');
</script>
```
## 方法
#### getItem(key)
#### setItem(key, value[, option])
如果是cookieStore
- **option**
  - expires
  - path
  - domain
  - secure
#### removeItem(key)
#### getAllItem()
#### clearAll()
