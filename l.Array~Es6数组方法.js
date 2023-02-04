/**---
 * 5个很实用的数组迭代方法: https://www.imooc.com/m/wap/article/detail.html?aid=284516
 * 
 * every() 迭代数组的每一项、每项都符合条件的才返回true、反之false
 *          用法：方法用于判断数组中(是否每个元素都满足)条件
 *          语法：Array.every(function(item,index?,array?) { return Boolean })
 *          情景： 有五个孩子，如果这个五个孩子都大于或等于18岁，才能进入此网站
 *
 * some() 迭代数组的每一项、只要有一项符合条件就返回true、如果全部不符合才返回false
 *          用法：用于判断数组中(是否有至少一个元素)满足条件
 *          语法：Array.some(function(item,index?,array?) { return Boolean })
 *          情景： 如果有4个人，其中只有一个小妹妹就可以通过了
 *
 * map() 迭代数组的每一项、可以给特定条件会返回重新组成新的数组、不会改变原数组
 *          用法：方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
 *          语法：Array.map(function(item, index?, array?) { return 新数组 })
 *          情景： 有五个员工，突然当月老板给每个人发奖金1w，求每个人的当月发的工资为多少
 *
 * filter() 迭代数组的每一项、可以给特定的条件进行筛选返回新的数组、不会改变原数组
 *          用法：方法用于对数组进行过滤
 *          语法：Array.filter(function(item, index?, array?) { return 新数组格式 })
 *          情景： 筛选班上期末考试成绩大于或等于90分的学生
 *
 * forEach() 迭代数组的每一项、没有返回值
 *          用法：方法用于调用数组的每个元素，并将元素传递给回调函数
 *          语法：Array.forEach(function(item, index?, array?) {  })
 *          情景： 我想看下班上的每一位同学的成绩为多少，没有返回值
 * 
 * 使用for...in遍历
 *  var arr1 = ["zhangsan", "lisi", "wangwu", "zhaoliu"];
    for (let index in arr1) {
        console.log(index, ":", arr1[index]);
    }  
 * 使用for...of遍历
 * var arr2 = ["zhangsan", "lisi", "wangwu", "zhaoliu"];
    for (let value of arr2) {
        console.log('value', value);
    } 
 *  
 * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 *          reduce() 可以作为一个高阶函数，用于函数的 compose。
 *          语法：Array.reduce(function(total, iten, index, array) { return 计算结果 }, initialValue)
 * 
 * fill() 方法用于将一个固定值替换数组的元素(填充数组值)
 *          语法：Array.fill(value, start?, end?){return }
 *              value：必需。填充的值。
 *              start：可选。开始填充位置。
 *              end：可选。停止填充位置。
 *          返回值：被填充的原数组。
 * 
 * find()   方法用于查找并返回符合条件的第一个数组项。
 *          语法：Array.find(function(item, index?, array?) { return 要查找的元素 }) 
 *          返回值：返回符合条件的第一个数组元素值，没有符合条件返回 undefined。
 * 
 * findIndex() 方法用于查找并返回符合条件的第一个数组项的位置。
 *              语法：Array.findIndex(function(item, index?, array?) { return 索引 或 -1 }) 
 *              返回值：返回符合条件的第一个数组元素值，没有符合条件返回 -1。
 * 
 * ES7新增数组方法 
 * includes() 方法用来判断一个数组是否包含一个指定的值。
 *              语法：Array.includes(searchElement, fromIndex?)
 *                  searchElement：必须。需要查找的元素值。
 *                  fromIndex：可选。从该索引处开始查找 searchElement。
 *              返回值：包含返回true，不包含返回false。
 */





// 情景与使用
// every()  情景： 有五个孩子，如果这个五个孩子都大于或等于18岁，才能进入此网站
let children = [
  { name: "Bob", age: 18 },
  { name: "Peter", age: 16 },
  { name: "Lynn", age: 28 },
  { name: "Jack", age: 38 },
];
// // 数组中需要每一个项都符合条件才返回true，反之返回false
let isAdults = children.every((child) => child.age >= 18);
// false 因为Peter的age小于18岁


children[1].age = 20;
let isAdults2 = children.every((child) => child.age >= 18);
// true 所有的孩子都已经满足大于或者等于18岁了，所以返回true
console.dir("every=============================");





// some()   情景： 如果有4个人，其中只有一个小妹妹就可以通过了
let people = [
  { name: "Bob", sex: "boy" },
  { name: "Peter", sex: "boy" },
  { name: "Lynn", sex: "girl" },
  { name: "Jack", sex: "boy" },
];
// 数组中只需要符合一个条件就返回true，反之返回false
let hasGirl = people.some((val) => val.sex === "girl");
// true

let hasGirl_ = people.some((val) => val.sex === "femall");
console.log(hasGirl_);
console.dir("some=============================");




// map()  情景： 有五个员工，突然当月老板给每个人发奖金1w，求每个人的当月发的工资为多少
let employees = [
  { name: "Bob", wage: 5000 },
  { name: "Peter", wage: 10000 },
  { name: "Lynn", wage: 15000 },
  { name: "Jack", wage: 20000 },
];
// 对每个员工进行加薪10000元奖金，返回新数组
let newEmployees = employees.map((item) => {
  let userName = item.name;
  // 每个人加1000元
  let userWage = item.wage + 10000
  return {
    userName, 
    userWage,
  };
});
console.log(newEmployees);
// 返回了新的员工工资数组
// [
//     { name: 'Bob', wage: 15000 },
//     { name: 'Peter', wage: 20000 },
//     { name: 'Lynn', wage: 25000 },
//     { name: 'Jack', wage: 30000 }
// ]

console.dir("map=============================");








// filter() 情景： 筛选班上期末考试成绩大于或等于90分的学生
let students = [
    {name: 'Bob', grade: 100},
    {name: 'Peter', grade: 75},
    {name: 'Lynn', grade: 80},
    {name: 'Jack', grade: 95}
]

// 获得成绩大于或等于90的学生，返回新数组
let awardStudents = students.filter(val => val.grade >= 90);
console.log(awardStudents)
/**
 * 输出新数组：
 * [
 *   { name: 'Bob', grade: 100 },
 *   { name: 'Jack', grade: 95 }
 * ]
 */
console.dir("filter=============================");




// forEach() 情景： 我想看下班上的每一位同学的成绩为多少，没有返回值
students.forEach( item => {
    console.log(item.grade)
})

var arr = [1, 2, 3, 4]
var sum = 0
arr.forEach(item => {
    sum += item
})
console.log(sum)    // 10
console.dir("forEach=============================");



// reduce()
// 数组去重
var arr = [1, 2, 3, 2, 1, 4]
var newArr = arr.reduce((total, item) => {
    total.indexOf(item) === -1 && total.push(item)
    return total
}, [])
console.log(newArr) // [1,2,3,4]
console.dir("reduce=============================");


// reduce
// 累加
var allUser = [
  { age: 20, salary: 10000 },
  { age: 21, salary: 15000 },
  { age: 22, salary: 18000 }
]  
const totalSalay = allUser.reduce((prev, curr) => { // 初始值0、当前值+初始值
  return prev + curr.salary
}, 0)
console.log(totalSalay) // 43000
console.dir("reduce2=============================");

console.log(Math.min([3, 5, 12, 55, 44, 7])) // NaN
console.log(Math.min(...[3, 5, 12, 55, 44, 7])) // 3