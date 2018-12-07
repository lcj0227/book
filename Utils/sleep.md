# javascript重点sleep
sleep函数作用是让线程休眠，等到指定时间在重新唤起。
因为JS是单线程，可以利用一个伪死循环阻塞主线程。

```javascript
function sleep(delay){
   var start = Date.now();
   while (Date.now() - start < delay) {
       continue;
   }
}
```

es6的实现
```javascript
function sleep(delay) {
  return new Promise(function() {
      setTimeout( function(){
        resolve()
      }, delay || 0)
  })
}
```

