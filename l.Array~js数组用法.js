
/**
 * URL: https://blog.csdn.net/syzdev/article/details/123735430
 * 
 * 数组方法的使用 文件名：0-Javascript数组方法.html
 * 数组提供了一些常用方法，可实现数组元素的添加、删除、替换以及排序等功能
 * 
 **** 常用方法 ****
 * 
 * isArray()---------判断数组(if(Array.isArray(arr))else{})
 * 
 * toString()--------类型转换为字符串
 * 
 * join()------------方法返回所有元素连接成一个字符串（数组转字符串的方法） | 参数可以省略，省略参数时，分隔符默认为“逗号”。
 * 
 * shift()------------方法可删除数组第一个元素，并返回删除的元素
 * pop()--------------方法可删除数组最后一个元素，并返回数组的元素
 * 
 * unshift()----------方法可把参数指定的元素依次添加到数组的前面，并返回添加元素后的数组长度。该方法必须至少有一个参数
 * push()-------------方法可把参数指定的元素依次添加到数组的末尾，并返回添加元素后的数组长度（该方法必须至少有一个参数）
 *  
 * reverse()----------方法可返回当前数组倒序排序形式
 * 
 * sort()-------------当方法的参数为空时，按字典序（即元素的 Unicode 编码从小到大排序顺序）排序数组元素
 * sort()-------------当参数为一个匿名函数时，将按匿名函数指定的规则排序数组元素
 * sort()-------------[5,2,4,66,0].sort(function(a,b){return a-b //从小到大排列 })
 * 
 * concat()-----------将参数指定的数组和当前数组连成一个新数组 | 返回值：返回合并后的新数组 | 是否改变原数组：不改变原数组。
 * 
 * slice()------------方法将截取数组中固定区间中的元素  返回值：返回截取后的新数组  | 需要注意的是，该方法只是读取指定的元素，并不会对原数组作任何修改
 * 
 * 
 *  
 * 替换|删除|新增 元素
 * !splice(index,count[,元素1,…,元素n])
 * splice()-----------方法功能比较强，它可以实现删除指定数量的元素、替换指定元素以及在指定位置添加元素。不同功能需要结合方法参数来确定
 * splice()-----------删除：当参数只有 index 和 count 两个参数时，如果 count 不等于 0，splice() 方法实现删除功能，同时返回所删除的元素
 * splice()-----------替换：当参数为 3 个以上，且 count 参数不为0时，splice() 方法实现替换功能，同时返回所替换的元素
 * splice()-----------新增：当参数为 3 个以上，且 count 参数为 0 时，splice() 方法的实现添加功能
 * splice()-----------实现数组去重
 * 
 * 
 * 
 * 填充与复制方法: fill() 和 copyWithin()
 * 
 * 
 * 查找方法: indexOf()、lastIndexOf()、find()、includes()
 * indexOf() - lastIndexOf() -- 与字符串操作方式一样
 * 
 * find()-------------返回值：数组中第一个满足所提供测试函数的元素的值，否则返回undefined | 是否改变原数组：不改变原数组
 * find()-------------['A', 'B', 'C', 'D', 'E'].find(item => item === 'C') // C
 * find()-------------find()方法会对每一个元素都执行该函数判断，直到遇到返回满足item === 'C'的元素，所以最后返回C
 * 
 * includes()---------方法用来判断一个数组是否包含一个指定的值 |　返回布尔值
 * 
 * ES6新增数组方法   文件名：2-ES6新增数组方法.html
 * 
 * fill()-------方法用于将一个固定值替换数组的元素(填充数组值)
 *              语法：Array.fill(value, start?, end?){ return 被填充的原数组 }     
 * find()-------方法用于查找并返回符合条件的第一个数组项
 *              语法：Array.find(function(item, index?, array?) { return 要查找的元素 })
 * findIndex()--方法用于查找并返回符合条件的第一个数组项的位置
 *              语法：Array.findIndex(function(item, index?, array?) { return 索引 或 -1 })
 * includes()---方法用来判断一个数组是否包含一个指定的值
 *              语法：Array.includes(searchElement, fromIndex?)  返回值 为 true 或 false
 * 
 * 
 * 
 * 
 * 
 *  
 ***** 迭代方法 ****
 * 
 * 
 * 并归方法： reduce() 和 reduceRight()
 * reduce()------------方法正序对数组中的每个元素执行一个reducer函数，每一次运行reducer函数会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值；
 *  
 * 
 * 迭代器方法：key() - value() - entries()  - 无参数，不改变原数组
 * 
 * 
 * 迭代数组方法   文件名：1-迭代数组的5种方法
 * 
 * every() -----方法用于判断数组中(是否每个元素都满足)条件 | 当所有元素都通过测试返回true，否则返回false | 不改变原数组 
 *              语法：Array.every(function(item,index?,array?) { return Boolean })
 *  
 * some()-------用于判断数组中(是否有至少一个元素)满足条件 | 只要有一个元素通过测试则返回true，否则返回false | 不改变原数组 
 *              语法：Array.some(function(item,index?,array?) { return Boolean })
 * 
 * filter()-----方法用于对数组进行过滤 | 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组 | 不改变原数组
 *              语法：Array.filter(function(item, index?, array?) { return 新数组格式 })
 * 
 * map()--------结果是该数组中的每个元素是调用一次提供的函数后的返回值 | 返回一个处理后的新数组 | 不改变原数组
 *              语法：Array.map(function(item, index?, array?) { return 新数组 })
 * 
 * forEach()----方法对数组的每个元素执行一次给定的函数 | 无返回值 | 不改变原数组
 *              语法：Array.forEach(function(currentValue, index?, array?) {  })
 * 
 * reduce()-----方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
 * reduce() 可以作为一个高阶函数，用于函数的 compose
 *              语法：Array.reduce(function(total, iten, index, array) { return 计算结果 }, initialValue)
 * 
 * 
 * 
 * 

 * 
 * 
 * 
 * 
 * 遍历对象和数组     
 * 遍历数组
 * forEach()
 * for(in)-------for (let index in array) {console.log(index, ":", array[index]);}
 * for(of)-------for (let value of array) {console.log(value);}
 * 遍历对象
 * for(in)-------for (let key in obj) {console.log(key + '---' + obj[key])}
 * Object.keys(obj)
 * Object.values(obj)
 * Object.getOwnPropertyNames(obj)
 *  
 * 
 * 遍历对象是否有 原型链上的属性
 * 
 */
