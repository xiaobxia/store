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
获取项
#### setItem(key, value[, option])
设置项，如果是cookieStore，提供了可选的option参数
- **option**
  - expires
  - path
  - domain
  - secure
#### removeItem(key)
移除项
#### getAllItem()
获取所有项
#### clearAll()
移除所有项
