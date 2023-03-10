 
    





        // 随机生成验证码
        // fs读取文件异步回调方式
        // 搜索框搜索内容(字符串是否包含输入的文字)
        // 使用async-await方法
        // Promise静态方法
        // Promise 使用、Promise读取文件、Promise写文件优化、async/await
         



// 日期
// Date.now()
// +new Date()

// undefined & null
// let newCityCity = null
// console.log(City == null) // true
// console.log(City === null) // true
// console.log(City == undefined) // true
// console.log(City === undefined) // false
// let newCity = undefined
// console.log(newCity == null) // true
// console.log(newCity === null) // false
// console.log(newCity == undefined) // true
// console.log(newCity === undefined) // true

// 对象属性
// function User4(){ return "sb"}
// let stars = {}, User1 = "zs", User2 = "ls", User3 = "ww"
// stars['User1'] = "P1";
// stars.User2 = "P2";
// stars[User3] = "P3";
// stars[User4()] = "P4";
// // console.log(stars) // { User1: 'P1', User2: 'P2', ww: 'P3', sb: 'P4' }

// 三元运算符
// let eat = 0, sleep = 1, play = 2, run = 3;
// let FinalResults = eat === "0" ? "eat" : sleep === "1" ? "sleep" : play === "2" ? "play" : run === "3" ? "run" : "最后结果为?"
// // console.log(FinalResults)





//--------------------------随机生成验证码-------------------------------------------------------------------------------------

        {
            let Ran = function randomCode(length){
                let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                let result = ""
                for (let i = 0; i < length; i++) {
                    let index = Math.ceil(Math.random() * 9) // [0, 1) * 9 = [0, 9]
                    result += chars[index]
                }
                // console.log(res)
            }
            Ran(6)
        }



//--------------------------fs读取文件异步回调方式-------------------------------------------------------------------------------------
 
        {
            function FileExtension () {

                fs.readFile(fileURL, function(err, data){
                    if(err){
                        // 文件不存在
                        res.writeHead(404, {"Content-Type":"text/html;charset=UTF8"})
                        res.end("404, 页面没有找到")
                    }
                    getMime(extname, function(mime){
                        res.writeHead(200, {"Content-Type": mime})
                        res.end(data)
                    }) 
                })
            }
            function getMime(extname, callback){
                // 读取mime.json文件 得到JSON 根据extname的key 返回对应的value
                fs.readFile("./mime.js", function(err, data){
                    if(err) {throw new Error("找不到mime.json文件"); return}
                    const mimeJSON = JSON.parse(data);
                    // ".json":"application/json"  ||  ".css":"text/css"
                    const mime = mimeJSON[extname] || "text/plain"
                    // mime   text/html | text/css | 
                    callback(mime)
                })
            }
        }



//--------------------------搜索框搜索内容(字符串是否包含输入的文字)-------------------------------------------------------------------------------------
        {
            const key = '黑马';
            	// 提示文字列表
            	const list = [
            		'黑马程序员',
            		'黑马程序员官网',
            		'黑马程序员顺义校区',
            		'黑马程序员学院报名系统',
            		'传智播客',
            		'传智博客前端与移动端开发',
            		'传智播客大数据',
            		'传智播客python',
            		'传智播客java',
            		'传智播客c++',
            		'传智播客怎么样'
            	];
            	// 搜索结果
            	// let result = list.filter(item => item.includes(key));
            	// 将查询结果返回给客户端
            	// console.log(result);
        }



//--------------------------使用async-await方法-------------------------------------------------------------------------------------
        {
            async function test(){return '您好';}
            async function main(params){
                let data = await test();   
                return `${data} ${params}`
            }
            // main("zhangsan").then(value => {
            //     // console.log(value)
            //     return main("Lisi")
            // }).then(newValue => {
            //     // console.log(newValue)
            // })
        }

//--------------------------Promise静态方法-------------------------------------------------------------------------------------
        {
            // console.log(Promise.prototype) // then, catch, finally
            const p = new Promise((reslove, reject) => {
                reslove(200)
                // reject(a)
            })
            // console.log(p)

            // Promise还提供了一些常用的静态方法
                // Promise.reslove()
                // Promise.reject()
                // Promise.all()
                // Promise.race()
            
            // 1. Promise.resolve(200) 会返回一个成功的promise
            // 等价于
            // new Promise((resolve, reject) => {
            //   resolve(200)
            // })

            // 2. Promise.reject(new Error('123')) 返回一个失败的promise
            // 等价于
            // new Promise((resolve, reject) => {
            //   reject(new Error())
            // })

            // 3. Promise.all()  接受一个promise数组，返回一个promise
            // 只有所有的promise都成功了，返回的promise才会成功
            // Promise.all([p1, p2, p3, p4]).then()

            // 4. Promise.race() 接收一个Promise数组，返回一个promise
            // 返回的promise只会取决于第一个结束的promise
            // Promise.race([p1, p2, p3, p4])  获取一个数据  缓存  请求获取
        }



//--------------------------异步方案、普通回调、Promise回调、async-------------------------------------------------------------------------------------
        {
            {
                // 普通回调
                function doSomething(cb){
                    setTimeout(function() {
                        cb("完成")
                    }, 1000)
                }
                // doSomething(function(arg){
                //     console.log( "done here" , arg);
                // })
            } 
            {  
                // Promise回调
                function doSomething2(){
                    return new Promise((reslove, reject) => {
                        setTimeout(function(){
                            reslove("promise 成功")
                        }, 2000)
                    }) 
                }
                // doSomething2().then(function(res) {
                //     console.log(res)
                // })
            }
            {
                // Promise异步读取文件回调 finally
                function getFile(fPath){
                    return new Promise((reslove, reject) => {
                        fs.readFile(fPath, "UTF-8", function (err, dataStr) {
                            if(err) return reject(err);
                            reslove(dataStr)
                        })
                    })
                }
                // getFile("./files/1.txt").then(value => {
                //     console.log(value)
                // }).catch(error => {
                //     console.log(error)
                // }).finally(() => console.log('finished'));
            }
            {
                // promise 代码优化
                // // bad
                    // request(url, function(err, res, body) {
                    //     if (err) handleError(err);
                    //     fs.writeFile('1.txt', body, function(err) {
                    //         request(url2, function(err, res, body) {
                    //             if (err) handleError(err)
                    //         })
                    //     })
                    // });
                    
                    // // good
                    // request(url)
                    // .then(function(result) {
                    //     return writeFileAsynv('1.txt', result)
                    // })
                    // .then(function(result) {
                    //     return request(url2)
                    // })
                    // .catch(function(e){
                    //     handleError(e)
                    // }); 
            }
            {
                // async/await
                {
                    async function getItems() {
                        try {
                            const user = await getUser()
                            const order = await getOrderByUser(user)
                            const items = await getOrderItemsByOrder(order)
                            return items
                        } catch (error) {
                            // 在这里处理错误，建议返回某个值或者重新抛出错误
                        }
                    }
                    // getItems().then(item => {
                    //     // 处理排序后的成员
                    // })
                }
            }
        }

 