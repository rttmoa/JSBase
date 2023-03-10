
// 数组中对象多个属性排序 sort
// 只设计升序，如果需要倒序，处理一下field就可以了 
function sort(arr, fields) {
    let checkOrder = (left, right, fields) => {
        let field = fields.shift()
        if (field === undefined) return 0;
        return left[field] === right[field] ? checkOrder(left, right, fields) : (left[field] < right[field] ? -1 : 1)
    }
    return arr.sort((left, right) => {
        return checkOrder(left, right, JSON.parse(JSON.stringify(fields)))
    })
}
const arr = [{id:5, uname: 'zhangsan', age: 42, },{id:3, uname: 'lisi', age: 24, },{id:2, uname: 'wangwu', age: 33, }]
const rearr = sort(arr, ['id', 'age'])
// console.log(rearr)


// 递归求斐波那契数列
    // 斐波那契数列指的是这样一个数列：
    //     1 1 2 3 5 8 13 21 34 55 …
    //     这个数列从第3项开始，每一项都等于前两项之和
function sequence (n) { // n 就是要求的第n位
    // 设置终点
    if(n === 1 || n === 2){
        return 1;
    }
    // 未到终点
    return sequence(n - 1) + sequence(n - 2)
}
// sequence(5)