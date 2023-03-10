




    
    // https://blog.csdn.net/weixin_42232156/article/details/121822723

    // Js 7种方法实现去重:  
    //     1、双循环去重 (双for设置标识flag)
    //     2、indexOf方法去重1 (查找数组元素)
    //     3、indexOf方法去重2 (查找数组位置)
    //     4、相邻元素去重 (先sort再循环比对)
    //     5、利用对象属性去重 (Obj属性是否是undefined || ++)
    //     6、set与解构赋值去重 ([...new Set(arr)])
    //     7、Array.from与set去重 (Array.from(new Set(arr)))


    

//------------------------------------------1、双循环去重------------------------------------------------------------------------------
        
        // 先定义一个包含原始数组第一个元素的数组，然后遍历原始数组，
        // 将原始数组中的每个元素与新数组中的每个元素进行比对，
        // 如果不重复则添加到新数组中，最后返回新数组；
        // 因为它的时间复杂度是O(n^2)，如果数组长度很大，那么将会非常耗费内存
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }

                let res = [arr[0]]
                for (let i = 1; i < arr.length; i++) {
                    
                    let flag = true
                    for (let j = 0; j < res.length; j++) {
                        
                        if(arr[i] === res[j]){
                            flag = false;
                            break
                        }
                    }
                    if(flag){
                        res.push(arr[i])
                    }
                }
                // console.log(res) // [5, 3, 2, 1, 4, 6]
            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            unique(arr) 
        }



//------------------------------------------2、indexOf方法去重1------------------------------------------------------------------------------
        
        // 数组的indexOf()方法可返回某个指定的元素在数组中首次出现的位置。
        // 该方法首先定义一个空数组res，然后调用indexOf方法对原来的数组进行遍历判断，
        // 如果元素不在res中，则将其push进res中，
        // 最后将res返回即可获得去重的数组
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }
                
                let res = []
                for (let i = 0; i < arr.length; i++) {
                    
                    let ele = arr[i]
                    if(res.indexOf(ele) === -1){
                        res.push(ele)
                    }
                }
                // console.log(res) // [5, 3, 2, 1, 4, 6]
            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            unique(arr)
        }



//------------------------------------------3、indexOf方法去重2------------------------------------------------------------------------------
        
        // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，
        // 如果不等则说明该元素是重复元素
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }
                
                return Array.prototype.filter.call(arr, function(item, index){
                    // console.log(item)
                    return arr.indexOf(item) === index
                })
            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            let res = unique(arr)
            // console.log(res) [5, 3, 2, 1, 4, 6]
        }
        


//------------------------------------------4、相邻元素去重------------------------------------------------------------------------------
        
        // 这种方法首先调用了数组的排序方法sort()，
        // 然后根据排序后的结果进行遍历及相邻元素比对，
        // 如果相等则跳过改元素，直到遍历结束
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }
                
                arr = arr.sort()
                let res = []
                for (let i = 0; i < arr.length; i++) {
                    
                    if(arr[i] !== arr[i-1]){
                        res.push(arr[i])
                    }
                }
                // console.log(res) // [1, 2, 3, 4, 5, 6]
            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            unique(arr)
        }

    
        
//------------------------------------------5、利用对象属性去重------------------------------------------------------------------------------
        
        // 创建空对象，遍历数组，将数组中的值设为对象的属性，并给该属性赋初始值1，
        // 每出现一次，对应的属性值增加1，
        // 这样，属性值对应的就是该元素出现的次数了
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }
                
                let res = [],
                    obj = {};
                for (let i = 0; i < arr.length; i++) {
                    
                    let item = arr[i]
                    if(!obj[item]){
                        // 属性值为undefined时
                        res.push(item)
                        obj[item] = 1
                    }
                    else{
                        obj[item]++
                    }
                }
                // console.log(res) [5, 3, 2, 1, 4, 6]
                // console.log(obj) {1: 1, 2: 2, 3: 2, 4: 1, 5: 3, 6: 1}

            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            unique(arr)
        }


    
//------------------------------------------6、set与解构赋值去重------------------------------------------------------------------------------
        
        // ES6中新增了数据类型set，set的一个最大的特点就是数据不重复。
        // Set函数可以接受一个数组（或类数组对象）作为参数来初始化，利用该特性也能做到给数组去重
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }
                
                return [...new Set(arr)]
            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            unique(arr)
        }



//------------------------------------------7、Array.from与set去重------------------------------------------------------------------------------
        
        // Array.from方法可以将Set结构转换为数组结果，而我们知道set结果是不重复的数据集，因此能够达到去重的目的
        {
            function unique(arr){
                if(!Array.isArray(arr)){ console.log("type error!"); return; }
                
                return Array.from(new Set(arr))
            }
            let arr = [5, 3, 2, 5, 1, 4, 2, 6, 5, 3]
            unique(arr)
        }