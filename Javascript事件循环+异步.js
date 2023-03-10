









// Url: https://blog.csdn.net/qq_44552416/article/details/123133127
        // 同步执行和异步执行的任务执行流程



        // 常见的宏任务：setTimeout setInterval I/O script 
        // 常见的微任务：promise 
        //     同一事件循环中，微任务永远在宏任务之前
        //     同一事件循环中，微任务永远在宏任务之前
        //     同一事件循环中，微任务永远在宏任务之前
        // 案例一、
        console.log(1)
        setTimeout(() => {
            console.log(2)
        }, 0)
        Promise.resolve().then(() => {
            console.log(3)
        })
        console.log(4)
        // 结果 1 4 3 2
            // 1，任务开始执行，进入执行栈。遇到console.log(1)，是同步任务，输出1；
            // 2，执行栈继续执行，遇到定时器setTimeout，是异步宏任务，进入异步进程的宏任务队列；
            // 3，执行栈继续执行，遇到Promise，是异步微任务，进入异步进程的微任务队列；
            // 4，执行栈继续执行，遇到console.log(4)，是同步任务，输出4；
            // 5，同步任务执行完成，开始查询任务队列，微任务队列在宏任务队列之前，先执行微任务队列输出3；
            // 4，微任务队列执行完毕，再查询宏任务队列，输出2，至此整个任务队列完成，最后输出1 4 3 2 

 
        // 案例二、
        setTimeout(function(){
            console.log('定时器开始啦')
        }); 
        new Promise(function(resolve){
            console.log('马上执行for循环啦');
            for(var i = 0; i < 1000; i++){
                i == 99 && resolve();
            }
        }).then(function(){
            console.log('执行then函数啦')
        }); 
        console.log('代码执行结束'); 
        // 结果：马上执行for循环啦 --- 代码执行结束 --- 执行then函数啦 --- 定时器开始啦
            // 1，首先执行script下的宏任务,遇到setTimeout,将其放到宏任务的【队列】里
            // 2，遇到 new Promise直接执行,打印"马上执行for循环啦"
            // 3，遇到then方法,是微任务,将其放到微任务的【队列里】
            // 4，打印 “代码执行结束”
            // 5，本轮宏任务执行完毕,查看本轮的微任务,发现有一个then方法里的函数, 打印"执行then函数啦"
            // 到此,本轮的event loop 全部完成。
            // 6，下一轮的循环里,先执行一个宏任务,发现宏任务的【队列】里有一个 setTimeout里的函数,执行打印"定时器开始啦" 


        // 案例三、
        console.log(1)
        setTimeout(() => {
            console.log(2)
        }, 0) 
        new Promise((resolve) => {
            console.log(3)
            resolve(4)
        }).then((res)=> {
            console.log(res)
        })
        console.log(5)
        // 最后结果：1、3、5、4、2																			    



        // 案例四、
        setTimeout(() => console.log('setTimeout1'), 0) //1宏任务
        setTimeout(() => {								//2宏任务
            console.log('setTimeout2')
            Promise.resolve().then(() => {
                console.log('promise3')
                Promise.resolve().then(() => {
                    console.log('promise4')
                })
                console.log(5)
            })
            setTimeout(() => console.log('setTimeout4'), 0)  //4宏任务
        }, 0)
        setTimeout(() => console.log('setTimeout3'), 0)  //3宏任务
        Promise.resolve().then(() => {//1微任务
            console.log('promise1')
        }) 
        // 最后结果：promise1、setTimeout1、setTimeout2、promise3、5、promise4、setTimeout3、setTimeout4
            // 有微任务放到微任务队列
            // 宏任务中有微任务执行微任务





        






        // 遇到async和await的情况 
        //     一旦遇到await 就立刻让出线程，阻塞后面的代码，先执行async外面的同步代码
        //     等候之后,对于await来说分两种情况：
        //         不是promise对象
        //         是promise对象 
        //     1，如果不是promise,await会阻塞后面的代码,先执行async外面的同步代码,同步代码执行完毕后,
        //         在回到async内部,把promise的东西,作为await表达式的结果
        //     2，如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，
        //         先执行async外面的同步代码，等着 Promise 对象 fulfilled，
        //         然后把 resolve 的参数作为 await 表达式的运算结果。
        //     3，如果一个 Promise 被传递给一个 await 操作符，
        //         await 将等待 Promise 正常处理完成并返回其处理结果。 
        

        // 案例一、
        // (没有async、awiat)
        function fn1() {
            return 1
        }
        function fn2(){
            console.log(2)
            console.log(fn1())
            console.log(3)
        }
        fn2()
        console.log(4)
        // 结果：2、1、3、4


        // 案例二、
            // (没有Promise)如果不是promise,await会阻塞后面的代码,
            //     先执行async外面的同步代码,同步代码执行完毕后,在回到async内部,把promise的东西,作为await表达式的结果
        async function fn3(){
            return 1
        }
        async function fn4() {
            console.log(2)
            console.log(await fn3())
            console.log(3)
        }
        console.log(4)
        // 结果：2、4、1、3


        // 案例三、
        // （存在promise） 
        //     如果它等到的是一个 promise 对象，
        //     await 也会暂停async后面的代码，
        //     先执行async外面的同步代码，
        //     等着 Promise 对象 fulfilled，
        //     然后把 resolve 的参数作为 await 表达式的运算结果
        async function fn5(){
            return new Promise((resolve) => {
                resolve(1)
            })
        }
        async function fn6() {
            console.log(2)
            console.log(await fn5())
            console.log(3)
        }
        console.log(4)
        // 结果：2、4、1、3



        // 案例四、
        async function async1() {
            console.log( 'async1 start' )
            await async2()
            console.log( 'async1 end' )
        }
        async function async2() {
            console.log( 'async2' ) // 这里面没有Promise
        }
        async1()
        console.log( 'script start' )
        // 结果：执行结果：async1 start、async2、script start、async1 end







        async function t1 () {
            console.log(1)
            console.log(2)
            await new Promise(resolve => {
                setTimeout(() => {
                    console.log('t1p')
                    resolve()
                }, 1000)
            })
            await console.log(3)
            console.log(4)
        } 
        async function t2() {
            console.log(5)
            console.log(6)
            await Promise.resolve().then(() => console.log('t2p'))
            console.log(7)
            console.log(8)
        } 
        t1()
        t2() 
        console.log('end') 
        // 结果：1、2、5、6、end、t2p、7、8、undefined、t1p、3、4


