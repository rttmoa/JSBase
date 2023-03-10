
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


