function Promise2(executor) {
    var self = this;
    self.status = 'pending'; //promise当前的状态
    self.data = undefined; //promise的值
    self.onResolvedCallback = [];
    //promise状态变为resolve时的回调函数集，可能有多个
    self.onRejectedCallback = [];
    //promise状态变为reject时的回调函数集，可能有多个
    function resolve(value) {
        console.log('进来内部resolve')
        setTimeout(function () {
            if(self.status === 'pending') {
                self.status = 'resolved';
                self.data = value;
               console.log( self.onResolvedCallback.length,' self.onResolvedCallback.length===')
                for(var i = 0; i < self.onResolvedCallback.length; i++) {
                    self.onResolvedCallback[i](value);
                }
            }
        })
    }

    function reject(reason) {
        console.log('进来内部reject')
        setTimeout(function () {
            if(self.status === 'pending') {
                self.status = 'rejected';
                self.data = reason;
                for(var i = 0; i < self.onRejectedCallback.length; i++) {
                    self.onRejectedCallback[i](reason);
                }
            }
        })
    }

    try {
        executor(resolve, reject);
    } catch (e){
        reject(e);
    }
}

Promise2.prototype.then = function (onResolved, onRejected) {
    var self = this;
    var promise2;
    console.log(self,self.status,'进来then')
    onResolved = typeof onResolved === 'function'
        ? onResolved
        : function (value) {return value};
    onRejected = typeof onRejected === 'function'
        ? onRejected
        : function (reason) {throw reason};
    //promise对象当前状态为resolved
    if(self.status === 'resolved') {
        console.log('进来then---resolved')
        return promise2 = new Promise2(function (resolve, reject) {
            try {
                //调用onResolve回调函数
                var x = onResolved(self.data);
                console.log(x,'===')
                //如果onResolve回调函数返回值为一个promise对象
                if(x instanceof  Promise2) {
                    //将它的结果作为promise2的结果
                    x.then(resolve, reject);
                } else {
                    resolve(x);//执行promise2的onResolve回调
                }
            } catch (e) {
                reject(e); //执行promise2的onReject回调
            }
        })
    }
    //promise对象当前状态为rejected
    if(self.status === 'rejected') {
        console.log('进来then---rejected')
        return promise2 = new Promise2(function (resolve, reject) {
            try {
                var x = onRejected(self.data);
                console.log(x,'onRejected===')
                if (x instanceof Promise2) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (e) {
                reject(e)
            }
        })
    }
    //promise对象当前状态为pending
    //此时并不能确定调用onResolved还是onRejected，需要等当前Promise状态确定。
    //所以需要将callBack放入promise1的回调数组中
    if(self.status === 'pending') {
        return promise2 = new Promise2(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(self.data);
                    if (x instanceof Promise2) {
                        x.then(resolve, reject);
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e);
                }
            })
            self.onRejectedCallback.push(function(reason) {
                try {
                    var x = onRejected(self.data);
                    if (x instanceof Promise2) {
                        x.then(resolve, reject)
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
};


var p1 = new Promise2((resolve,reject)=>{
    resolve(123)
})
    var p2 = p1.then(async()=>{
    await setTimeout(()=>{
        console.log('then1111')
    },1000)
    return 333
})
        var p3 = p2.then((v)=>{
    console.log('000',v,'333----')
})