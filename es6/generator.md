# generator函数

generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。一个函数是一段完整的代码，调用一个函数就是传入参数，然后返回结果

```javascript
function foo(x) {
    return x + x;
}

var r = foo(1); // 调用foo函数
```
函数在执行过程中，如果没有遇到return语句（函数末尾如果没有return，就是隐含的return undefined;），控制权无法交回被调用的代码。
generator跟函数很像，定义如下：
```javascript
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
```
generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。


一个栗子
```javascript
function* next_id() {
     let x = 1;
    while (1) {
        yield x++;
}
var x, pass = true, g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
            pass = false;
            console.log('测试失败!');
            break;
    }
}
if (pass) {
    console.log('测试通过!');
}
```