
* 为什么有的编程规范要求用 void 0 代替 undefined?
```
7中数据类型
Undefined, Null, Boolean, String, Number, Object, Symbol
Undefined、Null
Undefined 类型表示未定义，它的类型只有一个值，就是 undefined。任何变量在赋值前是Undefined类型、值为undefined，一般我们可以运用全局变量 undefined（就是名为undefined的这个变量）来表达这个值，或者void运算来把任意一个表达式变成undefined值。
但是呢，因为 JavaScript 的代码 undefined是一个变量，而非一个关键字，这是JavaScript语言公认的失误之一，所以，我们为了避免无意中被篡改，建议使用 void 0 来获取undefined值。
```

* 字符串有最大长度吗?

* 0.1 + 0.2 不是等于 0.3 么？为什么 JavaScript 里不是这样的？

* ES6 新加入的 Symbol 是个什么东西？

* 为什么给对象添加的方法能用在基本类型上?
```
因为. 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。
```


## 面向对象还是基于对象

基于对象：语言和宿主的基础设施由对象来提供，并且 JavaScript 程序即是一系列互相通讯的对象集合
     

* 对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。   用内存地址来体现
* 对象有状态：对象具有状态，同一对象可能处于不同状态之下。
* 对象具有行为：即对象的状态，可能因为它的行为产生变迁。



  


