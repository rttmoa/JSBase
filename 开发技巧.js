
//Url: https://fenxianglu.cn/functions







// 删除指定索引导的数组元素 --- splice
// function delArrVal (arr, index){
//     for (let i = 0; i < arr.length; i++) {
//         if(i == index){
//             arr.splice(i, 1)
//             break
//         } 
//     }
// }
// var arr = ['a', 'b', 'c'];
// delArrVal(arr, 1)
// console.log(arr) // [ 'a', 'c' ]
// ----------------------------------------splice--------------------------------------------------------


// 删除指定索引导的数组元素 --- splice、findIndex
// const arr = [{id: 1, uname: '111'},{id: 2, uname: '222'},{id: 3, uname: '333'}]
// const data = {id: 1, uname: '7777'}
// console.log(arr.findIndex(item => item.id === data.id)) // findIndex：返回索引
// const res = arr.splice(arr.findIndex(item => item.id === data.id), 1) // splice：从哪个索引开始删除、删除几个
// console.log(res)
// console.log(arr)
// -------------------------------------------splice、findIndex-----------------------------------------------------


// // 创建uuid
// function createUuid() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
//         return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16);
//     });
// }
// createUuid(); // 6f765470-f026-4819-8971-25ece4132e6f
// ---------------------------------------replace、random---------------------------------------------------------


// 格式化时间：使用momentjs或者封装函数
// ------------------------------------------------------------------------------------------------


// 手机号隐藏中间部分
// var phoneNumber = "13384632800";
// console.log(phoneNumber.substring(0, 3) + '****' + phoneNumber.substr(-4)) // 133****2800
// console.log("13384632800".replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')) // 133****2800
// ----------------------------------------substring、substr、replace--------------------------------------------------------


// // 对像值转数组
// var foo = {'0': 3, '1': 13, '2': 23, 'length': 3}; 
// console.log(Array.prototype.slice.call(foo)) //  [3, 13, 23]
// console.log(Object.values(foo)) // [ 3, 13, 23, 3 ]
// ------------------------------------------slice------------------------------------------------------



// 查询参数转json
// function search2json(){
//     // var search = location.search.substr(1);
//     var search = "http://www.abc.com?name=zhangsan&age=23"
//     var search = "?name=zhangsan&age=23"
//     // console.log(!!search) // true
//     if(search){
//         var searchArr = search.split("?")
//         // console.log(searchArr) // [ 'http://www.abc.com', 'name=zhangsan&age=23' ]
//         return searchArr.reduce(function (json, v){
//             var item = v.split("=")
//             console.log(item)
//             console.log(json)
//             json[item[0]] = item[1]
//             return json
//         }, {})
//     }
//     return {}
// }
// // url：http://www.abc.com?name=zhangsan&age=23
// console.log(search2json()); // {name: "zhangsan", age: "23"}
// -------------------------------------split、substr、-----------------------------------------------------------


// // 高亮匹配文本
// var dsgdlsdg = 'dslDosdg';
// function highlightSubText(substr, str) {
//     if(substr && str) {
//         var startPos = str.indexOf(substr); // indexOf：返回首次查找到的位置 | 找不到返回-1
//         // console.log(startPos) // 3
//         if(startPos !== -1) {
//             var substrLength = substr.length; // 3
//             var endPos = startPos + substrLength; // 6
//             // console.log(str.substr(0, startPos))
//             // console.log(str.substr(6))
//             // console.log('a'.substr()) // substr(from: number, length?: number | undefined): string
//             return str.substr(0, startPos) + '<strong>'+substr+'</strong>' + str.substr(endPos);
//         } 
//         return str;
//     }
//     return '--';
// } // 返回有三种情况 
// console.log(highlightSubText('Dos', dsgdlsdg)); // ds<strong>gls</strong>dg
// ----------------------------------indexOf、substr--------------------------------------------------------------



// 表头表尾固定及滚动到底部提示(滚动触底事件)
// ------------------------------------------------------------------------------------------------



// // 解构数组多参数
// var d = [1,2,3]
// function foo(a,b,c){
//     console.log(a,b,c)
// }
// foo(...d)
// ------------------------------------------------------------------------------------------------


// js设置css样式的几种方式
// document.getElementById("p").setAttribute('style', 'color:#FF0000');
// document.getElementById("p").style.setProperty('font-size', '50px');
// document.getElementById("p").style.cssText='font-size:50px;color: red;';
// document.getElementById("p").style.color ='red';
// ----------------------------------DOM--------------------------------------------------------------


// 删除首尾字符
// String.slice(start?: number | undefined, end?: number | undefined): string
// console.log("[tom, jak]".slice(1, -1))   // 'tom,jack'
// ----------------------------------slice--------------------------------------------------------------



// 删除对象属性
// let foo = {
//     name: 'tom',
//     age: 24
// }
// delete foo.name
// console.log(foo) // { age: 24 }

// Reflect.deleteProperty(foo, "name")
// console.log(foo) // { age: 24 }
// ----------------------------------Object--------------------------------------------------------------


// 用??运行符代替三目表达式
// var nickname;
// console.log(nickname ?? "tom")

// var a;
// console.log(a?.name)

// var b = {
//     name: 'b'
// }
// console.log(b.name, b?.c?.d)
// ----------------------------------???--------------------------------------------------------------


// // 字符串转数组
// const str = "hello"
// console.log(str.split('')) // [ 'h', 'e', 'l', 'l', 'o' ]

// const Str = "hello"
// console.log([...Str]) // [ 'h', 'e', 'l', 'l', 'o' ]
// ----------------------------------split--------------------------------------------------------------


// // 数组转字符串
// console.log(['a', 'b', 'c'].join()) // a,b,c
// console.log(['a', 'b', 'c'].toString()) // a,b,c
// ----------------------------------join、toString--------------------------------------------------------------



// 逗号参数解构赋值
// function foo(...args) {
//     const [a,,c] = args
//     console.log(a, c) // 1 3
// }
// foo(1, 2, 3)
// ----------------------------------ES--------------------------------------------------------------


// // 一维数组分段转二维数组
// const data = [
//     {"id":1,"name":"系统集成"},
//     {"id":2,"name":"公告"},
//     {"id":3,"name":"信息系统"},
//     {"id":4,"name":"考试必看"},
//     {"id":5,"name":"心得笔记"},
//     {"id":6,"name":"考试心得"}
// ]
// const cData = []

// for(let i in data) { // i是索引值
//     // console.log(i % 4)
//     if(i === 0) {
//         cData[0] = [data[i]]
//         // console.log([data[i]]) // [ { id: 1, name: '系统集成' } ]
//         // console.log(cData) // [ [ { id: 1, name: '系统集成' } ] ]
//     } else {
//         if(i % 4 === 0) { // 4可以改为任意分隔数
//             // console.log(cData.length)
//             // console.log([data[i]])
//             cData[cData.length] = [data[i]]
//         } else {
//             console.log(cData.length-1)
//             console.log(data[i])
//             cData[cData.length-1].push(data[i])
//         }
//     }
// }
// console.log(cData)
// ----------------------------------一维数组分段转二维数组--------------------------------------------------------------



// // 去除数组 if假 数据
// const arr = [1, 7, 3, 0, '', null, undefined, false]
// const res = arr.filter(Boolean)
// console.log(res) // [ 1, 7, 3 ]
// ----------------------------------filter--------------------------------------------------------------



// // 快速合并数组和对象
// const a = [1,2,3];
// const b = [1,5,6];
// const c = [...new Set([...a,...b])]; // [1,2,3,5,6]
// console.log(c) // [ 1, 2, 3, 5, 6 ]
// ----------------------------------Set合并数组--------------------------------------------------------------



// 页面卸载前事件监听
// window.addEventListener("beforeunload", function (e) {
//     var confirmationMessage = '确定离开此页吗？';
//     (e || window.event).returnValue = confirmationMessage;
//     return confirmationMessage;
// });
// ----------------------------------DOM--------------------------------------------------------------


// // 实现睡眠功能
// // const sleep = (ms) => {new Promise (resolve => setTimeout(resolve, ms))}
// const sleep = (ms) => {return new Promise (resolve => setTimeout(resolve, ms))}
// const printNums = async () => {
//     console.log(1)
//     await sleep(2000)
//     console.log(2)
//     console.log(3) 
// }
// printNums() 
// ----------------------------------Promise--------------------------------------------------------------



// // 刷新页面
// history.go(0)
// location.reload()
// location=location
// location.assign(location)
// document.execCommand('Refresh')
// window.navigate(location)
// location.replace(location)
// document.URL=location.href


// // 年月时分前置补0
// function padZero(num, length) {
//     return ('0' + num).slice(-2);
// }
// console.log(padZero(2)); // 02


// // 递增填充数组 --- 一个空数组变成有值的数组
// var res = [...Array(24)].map((v, i) => i)
// var res = Array.from({length: 24}, (v, i) => i)
// var res = Array(24).fill(null).map((v, i) => i)
// var res = [...new Array(10).keys()] // [0, 1, 2, 3, 4,5, 6, 7, 8, 9 ]
// console.log(res)
// ----------------------------------Array填空数组--------------------------------------------------------------


// 数组求和及平均值
// var arr = [1,2,3,4,5];
// const sum = arr.reduce((a, b) => a + b)
// const sum = eval(arr.join('+')); // 相当于 eval('1+2+3+4+5')
// ----------------------------------reduce、join--------------------------------------------------------------


// // 判断是否JSON对象
// Object.prototype.isJSON = function(v) {
//     if(typeof v==='object' && Object.prototype.toString.call(v).toLowerCase()==='[object object]' && !v.length) {
//         return true;
//     }
//     return false;
// }
// console.log(Object.isJSON({})); // true



// 字符串重复
// String.prototype.repeat = function(n) {
//     var str = '';
//     for(var i=0; i<n; i++) {
//         str += this;
//     }
//     return str;
// }
// 'abc'.repeat(3); // abcabcabc

// 'abc'.repeat(3); // abcabcabc

// 'abc'.replace(/(abc)/, '$1$1$1')
// ----------------------------------repeat--------------------------------------------------------------


// // // 获取星期
// var oDate = new Date(),
//     day = oDate.getDay(), 
//     weekStr = '日一二三四五六';
//     console.log(oDate)
//     console.log(day)
//     console.log(weekStr.charAt(2)) // String.charAt(pos: number): string
// console.log('星期' + weekStr.charAt(day));
// // ----------------------------------charAt--------------------------------------------------------------


// // 数组去重
// const arr = [1,2,2,3,5,5,5,5,6,7, 66,6,66,6,]
// 方式一
// // console.log([...[new Set(arr)]]) // [ Set { 1, 2, 3, 5, 6, 7, 66 } ]
// // console.log(Array.from(new Set(arr))) // [1, 2, 3, 5,6, 7, 66]
// 方式二
// const unique = arr.filter((value, index, arrs) => {
//     // console.log(arrs.indexOf((value))) 
//     return arrs.indexOf(value) === index // indexOf：返回首次查找到的位置
// })
// console.log(unique) // [1, 2, 3, 5,6, 7, 66]
// // ----------------------------------Array.from、Set、filter、indexOf数组去重--------------------------------------------------------------



// // 取数组最大值 
// console.log(Math.max(...[1,2,3,4,5,6]))
// console.log(Math.max.call(Math, ...[1,2,3,4,5,6]))
// console.log(Math.max.apply(Math, [1,2,3,4,5,6]))
// console.log(Reflect.apply(Math.max, Math, [1,2,3,4,5,6]))
// console.log([1,2,3,4,5,6].sort((a,b) => a-b ).pop())
// const arr = [1,2,3,4,5,6]
// arr.reduce((max, val) => { if(max < val){ max = val };  return max }, arr[1])
// arr.reduce((a,b)=> a > b ? a : b)
// // ----------------------------------call、apply、reduce数组去重--------------------------------------------------------------



// 操作URL查询参数
// const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
// params.has("young"); // true
// params.get("sex"); // "male"
// // ----------------------------------URLSearchParams--------------------------------------------------------------


// // 格式化金钱
// const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// const money = ThousandNum(20190214);
// // money => "20,190,214"


// // 判断奇偶数
// if (value % 2) {
//     // 奇数
// } else {
//     // 偶数 
// }
// // 位操作
// if (value & 1) {
//     // 奇数
// } else {
//     // 偶数
// }
// // ----------------------------------位操作--------------------------------------------------------------


// // 快速去除小数部分
// // 方式一
// ~~(Math.random() * 100)
// // 方式二
// Math.random() * 100 | 0
// // 方式三
// Math.random() * 100 >> 0
// ~~10.12 // 10
// ~~10 // 10
// ~~'1.5' // 1
// ~~undefined // 0
// ~~null // 0
// // 方式四（取位取整）
// Math.floor(3.122)
// // 方式五（进位取整）
// Math.ceil(3.11)
// // 方式六（四舍五入）
// Math.round(3.13)
// // ----------------------------------~~--------------------------------------------------------------



// // 位运算符用作判断
// // & 判断
// true & true // 1
// true & false // 0

// // | 判断
// true | false // 1
// false | false // 0
// // ----------------------------------位运算-------------------------------------------------------------


// 生成随机码
// console.log(Math.random().toString(16).substring(2)) // 14位随机码
// console.log(Math.random().toString(36).substring(2)) // 11位随机码
  
    

// 快速日期转时间戳
// console.log(+new Date())  // 1672987242898
// // ----------------------------------快速日期转时间戳-------------------------------------------------------------