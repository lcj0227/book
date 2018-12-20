function Promise1(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
    };

    function resolve(value) {
        setTimeout(()=>{
            callbacks.forEach(function (callback) {
                callback(value);
            });
        })
    }

    fn(resolve);
}

function getUserId() {
    return new Promise1(function(resolve) {
        //异步请求
        resolve(111)
        // setTimeout(()=>{
        //     resolve(111)
        // },2000)
    })
}

getUserId().then(function(id) {
    console.info(id)
    return id+2
    //一些处理
})