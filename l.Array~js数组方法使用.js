


// 数组方法的使用
//         toString()
//         join()
//         pop()
//         push()
//         shift()
//         unshift()
//         reverse()
//         splice()
//         indexOf()
//         lastIndexOf()
//         sort()
//         concat()
//         slice()


// console.log(Array.prototype)




 


//---------------------------------isArray()-------------------------------------------------------
    
    {
        if(Array.isArray([1, 22])) {
            // console.log('确实是Array')
        }
    }


//---------------------------------toString()-------------------------------------------------------

    {
        const toString = ['a', 'b', 'c'].toString()

    }
//---------------------------------join() 方法用于把数组中所有元素放入一个字符串-------------------------------------------------------

        const join = ['a', 'b', 'v'].join('?')
        console.log(join) // a?b?v
        
  
//---------------------------------pop()  删除数组最后一项 返回值：数组长度减1，并返回删除的元素的值。如果是空数组，返回undefined。-------------------------------------------------------

        var arr = ['a', 's', 'd'];
        var str = arr.pop();
        console.log(str);  /* d */
        console.log(arr);  /* ['a', 's'] */


//---------------------------------push() 数组尾部添加元素-------------------------------------------------------
        /* push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
         * grammer: arrayObject.push(newelement1,newelement2,....,newelementX) 
         */ 
        var arr = ['a','s','d'];
        var len = arr.push('f');
        console.log(len); //4
        console.log(arr); //['a', 's', 'd', 'f']


//---------------------------------shift() 删除数组第一项-------------------------------------------------------
 
        var arr = ['a','s','d'];
        var str = arr.shift();
        console.log(str); //a
        console.log(arr);//['s', 'd']


//---------------------------------unshift() 数组开头添加元素 -------------------------------------------------------
        /* unshift()方法可以向数组的开头添加一个或多个元素 并返回新的长度
         * arrayObjectshift(ele1,ele2,ele3) --ele1: 必须， ele2可选
        */ 
        var arr = ['a','s','d'];
        var len = arr.unshift('f', 'h');
        console.log(len); //5
        console.log(arr); //['f', 'h', 'a', 's', 'd']


//---------------------------------reverse()  颠倒数组-------------------------------------------------------
        /* reverse() 方法用于颠倒数组中元素的顺序
         * 返回值： 排序的原数组 
         */ 
        var arr = ['a','s','d'];
        arr.reverse()
        console.log(arr);  //['d', 's', 'a']


//---------------------------------sort() 方法用于对数组的元素进行排序-------------------------------------------------------
        /* arrayObject.sort(sortby)
         * 返回值： 排序的原数组
         */ 
        var arr = ['a', 'c', 'd', 'b'];
        arr.sort();
        console.log(arr); /* ['a', 'b', 'c', 'd'] */


//---------------------------------concat() 方法用于合并两个或多个数组-------------------------------------------------------
        /* arrayObject.concat(arrayX, arrayX, arrayX)
         * 返回值： 返回一个新的数组 不会改变原数组
         */ 
         var arr1 = ['a','b'];
         var arr2 = ['c','d'];
         var arr3 = arr1.concat(arr2);
         console.log(arr1);/* ['a', 'b'] */
         console.log(arr2);/* ['c', 'd'] */
         console.log(arr3);/* ['a', 'b', 'c', 'd'] */


//---------------------------------concat() 方法用于合并两个或多个数组-------------------------------------------------------

        /***
         * slice() 提取
         * slice() 方法可从已有的数组中返回选定的元素
         * arrayObject.slice(start, end)    start：必需。   end：可选。
         * 返回值：返回一个新的数组。不会改变原数组。
         */ 
        var arr = ['a','b','c','d','e'];
        var newArr = arr.slice(1, 3);
        console.log(arr);  /* ['a', 'b', 'c', 'd', 'e'] */
        console.log(newArr); /* ['b', 'c'] */


//---------------------------------splice() 添加 删除 替换-------------------------------------------------------

        /* splice() 方法用于添加、删除、替换数组元素，返回被删除的项目。
         * 语法：arrayObject.splice(index,howmany,item1,.....,itemX)
         * index：必需。整数，规定添加/删除项目的位置。
         * howmany：必需。要删除的项目数量。如果设置为 0，则不会删除项目。
         * item1,.....,itemX：可选。向数组添加/替换的新项目。
         *  返回值：删除的数组。
         *  */
        // 删除元素
        var arr = ['a','b','c','d','e']
        arr.splice(2,1)
        console.log(arr)    // a,b,d,e
    
        // 删除元素 替换新元素
        var arr = ['a','b','c','d','e']
        var del = arr.splice(1,1,'f')
        console.log(arr)    // a,f,c,d,e
        console.log(del)    // b
    
        // 添加新的元素
        var arr = ['a','b','c','d','e']
        arr.splice(1,0,'f')
        console.log(arr)    // a,f,b,c,d,e 


//---------------------------------indexOf() 方法可返回一个指定元素在数组中第一次出现的位置-------------------------------------------------------

        /* 语法：Array.indexOf(item,start)---item：必须。查找的元素。
         * 返回值：元素在数组中的位置，如果没有搜索到则返回 -1。
         */ 
        var arr = ['a','c','b','c','e']
        var index = arr.indexOf('c')
        console.log(index)  // 1

 
//---------------------------------lastIndexOf() 查找最后位置-------------------------------------------------------

        /* lastIndexOf() 方法可返回一个指定元素在数组中最后出现的位置，从后向前查找
         * 语法：Array.lastIndexOf(item,start)---item：必须。查找的元素
         * 返回值：元素在数组中的位置，如果没有搜索到则返回 -1
         */ 
        var arr = ['a','c','b','c','e']
        var index = arr.lastIndexOf('c')
        console.log(index)  // 3