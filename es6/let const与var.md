# let、const与var

####在es6之前，我们用var来声明变量。

```
// 当变量用于控制循环时，就会泄露成全局变量。
if (true) {
     var a = 3;
}
console.log(a);   // 3 

for (var i = 0; i < 9; i++) {
     var j = i;
}
console.log(i);   // 9  
console.log(j);   // 8
```

```

// var声明的变量会存在变量提升
function hoistVariable() {
    console.log( a); 
    var a = 3;
}
hoistVariable(); // undefined
```

####es6提供了另外两种声明方式let 和 const，它们有几个共同的性质：*块级作用域，不能重复声明，TDZ*

##### 1、块级作用域

```
//for(var i=0;i<10;i++){
//	setTimeout(()=>{console.log(i)},1000*i)
//}

for(let i=0;i<10;i++){
	setTimeout(()=>{console.log(i)},1000*i)
}
```

##### 2、不能重复声明

同一作用域内，不管第二次声明使用const，还是let，都会报错。

##### 3、TDZ

The variables are created **when** their containing Lexical Environment **is** instantiated but may **not** be accessed **in** any way **until** the **variable**’s LexicalBinding **is** evaluated

##### 在变量声明前，不允许以任何方式访问let变量，虽然变量已经存在了

```
let x = 'outer value'

(function() {
  // TDZ
  console.log(x) // ReferenceError
  let x = 'inner value' // TDZ 结束
}())
```

对TDZ期间中的变量/常量作任何的访问动作，一律会抛出错误，使用typeof的语句也一样。

```
typeof x // "undefined"

{
  // TDZ
  typeof x // ReferenceError
  let x = 42
}

```

由于TDZ，虽然let的预编译过程中也发生了变量提升，但在当前作用域内我们不可以访问它。所以必须先声明，才可以使用。所以我们可以当做es6禁止变量提升的。因此我们习惯将变量声明在作用域的顶部。

```
function nohoistVariable() {
    const a = 3;
    console.log( a);   
}

nohoistVariable();
```

#### let与const的不同之处

const与let的不同点是const声明的变量不可以重新赋值，所以它在声明时就必须初始化。

```
const a;//报错
```

const只保证变量指向的那个内存地址所保存的数据是永恒不变的，如果变量是一个对象，则其属性仍然是可变的，因为对于对象和数组const声明的变量指向的内存地址保存的是指向实际数据的指针。

声明student一个对象，虽然无法修改对象所指向的地址，但是修改对象所包含的值是完全可以的：

```
const student = { name: 'honey' }

student.name = 'erdog'//修改对象所包含的值
    
student  = { name: 'erdog' }//修改对象所指向的地址
```

对于这种情况解决的办法是使用JavaScript的 freeze() 方法：

```
const freezObj = Object.freeze({});
freezObj.a = 2
console.log(freezObj) // {}
```

