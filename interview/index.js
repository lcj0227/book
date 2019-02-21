// 1.用正则把yya yyb yyc变成yya5 yyb6 yyc7
// 考察replace方法的第二个参数function, function的第一参数代表匹配正则的字符串，第二个代表第一个子表达式匹配的字符串，第三个代表第二个子表达式匹配的字符串。
//
// 面试官顺带提了下数组的forEach(function(value,index,arr){});
//
// forEach的第二个参数，其实是this(context)，当执行回调函数时，作为this的值。如果省略 this，则 undefined将用作 this 值。回调函数中的第三个参数是包含元素的数组对象。此方法在IE8以及以下不支持。
var str='yya yyb yyc', n=5;
str.replace(/\w+/g,function(s){
    return s+n++;
});

// 2、arr = [1,2,3];arr.slice(1,2,3) ;arr.splice(1,2,3,4)
// slice只接受两个参数，第三个参数没用，因此就是arr.slice(1,2),第一个代表start，第二个代表end。包含从 start 到 end （不包括该元素）。
// splice可以接受无数个参数，第一个是开始项，第二项是要删除的个数，第三项以及最后一项是添加到数组的项。返回的值是删除的数组：[2,3]，数组arr变成[1,3,4]。