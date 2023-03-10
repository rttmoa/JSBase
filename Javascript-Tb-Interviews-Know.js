 







  // Tb-Interviews-Know: Js篇 -> 考点 11：编程题

  //   编程题：编写代码，实现数组扁平化，把[1, [2, [3, 4]]] 转换成 [1, 2, 3, 4]
  //   编程题：编写代码，使用 ES6 特性，实现数组[1, 1, 2, 2]去重
  //   编程题：创建 10 个a 标签，点击弹出对应序号
  //   编程题：封装一个冒泡排序的函数。对数组 [11,37,13,92,21,68] 进行排序
  //   编程题：编写一个函数，实现移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
  //   编程题：编写一个函数，实现在数组 arr 中，查找值与 item 相等的元素出现的所有位置
  //   编程题：var arr = [1,2,3,4,5] ; var arr2 = [3,4,9,5,6,7]; 将两数组比较，要求将 arr 里相同的部分与 arr2不同的部分合并得到新数组 [3,5,4,9,6,7]
  //   编程题：用reduce 统计一个数组 ["apple","orange","apple","orange","pear","orange"] 中单词出现的次数
  //   编程题：for循环分别使用es5的闭包和es6的let
  //   编程题：输出什么？




//------------------------------编程题：编写代码，实现数组扁平化，把[1, [2, [3, 4]]] 转换成 [1, 2, 3, 4]-------------------------------------------------------------------------------------------------------
        {
            // 
            function flatten(arr){

                let result = []
                for (let i = 0; i < arr.length; i++) {
                    
                    if(Array.isArray(arr[i])){
                        result = result.concat(flatten(arr[i]))
                    }
                    else{
                        result = result.concat(arr[i])
                    } 
                }

                return result;   // 这里return
            }
            // console.log(flatten([1, [2, [3, 4]]]))
        }


        
//------------------------------编程题：编写代码，使用 ES6 特性，实现数组[1, 1, 2, 2]去重-------------------------------------------------------------------------------------------------------
        {
          [...new Set([1, 1, 2, 2])]
          Array.from(new Set([1, 1, 2, 2]))
        }



//------------------------------编程题：创建 10 个a 标签，点击弹出对应序号。-------------------------------------------------------------------------------------------------------
        {
          var a
          for (let i = 0; i< 10; i++) {
            a = document.createElement('a'); 
            a.innerHTML = i + "<br>"; 
            a.addEventListener("click", function(e) {
              e.preventDefault(); 
              console.log("a标签的序号为：", i)
            })
            document.body.appendChild(a)
          }
        }



//------------------------------编程题：封装一个冒泡排序的函数。对数组 [11,37,13,92,21,68] 进行排序-------------------------------------------------------------------------------------------------------
        {
            function sort(arr) {

              for (let i = 0; i < arr.length - 1; i++) {

                  for (let j = 0; j < arr.length - i - 1; j++) {
                    
                      if(arr[j] > arr[j + 1]){
                         let temp = arr[j]
                         arr[j] = arr[j+1]
                         arr[j+1] = temp
                      }
                  }
              }
            }
            var arr = [11,37,13,92,21,98,68]
            sort(arr)
            // console.log(arr) // [11, 13, 21, 37, 68, 92, 98]
        }



//------------------------------编程题：编写一个函数，实现移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组-------------------------------------------------------------------------------------------------------
        {
            function remove(arr, item) {
              var newArr = []; 
              for(var i=0; i < arr.length; i++){
                if(arr[i] != item){
                  newArr.push(arr[i]);
                }
              }
              return newArr;
            }
            var arr = [1,2,3,4,2]; 
            var item = 2;
            let s = remove(arr,item);
            // console.log(s)
        }
 


//------------------------------编程题：编写一个函数，实现在数组 arr 中，查找值与 item 相等的元素出现的所有位置。-------------------------------------------------------------------------------------------------------
        {
          function find (arr, target) {
              let temp = []
              arr.forEach(function(val, index){
                  val !== target || temp.push(index)   // 当val!==target时、才可以走后面的或       || 左右满足一个就可以
                  // val === target && temp.push(index) // && 左右必须都满足才可以 
              })
              // console.log(temp) // [2, 4]
          }
          find(['ab','b','a','ac','a'], 'a');
        }



//------------------------------编程题：[1,2,3,4,5]、[3,4,9,5,6,7]; 将两数组比较，要求将 arr 里相同的部分与 arr2不同的部分合并得到新数组 [3,5,4,9,6,7]。-------------------------------------------------------------------------------------------------------
        {
            var arr = [1,2,3,4,5];
            var arr2 = [3,4,9,5,6,7];

            var temp1 = arr2.filter(value => arr.includes(value) ) // includes返回true/false    // temp1=[3, 4, 5]

            var temp2 = []
            for (let i = 0; i < arr2.length; i++) {
                const ele = arr2[i]
                if(temp1.indexOf(ele) === -1){ // arr2中元素在[3, 4, 5]中未找到、将元素推到temp2中
                    temp2.push(ele)
                }
            }
            // console.log(temp2) // [9, 6, 7]

            const res = temp1.concat(temp2)
            // console.log(res) // [3, 4, 5, 9, 6, 7]
        }



//------------------------------编程题：用reduce 统计一个数组 ["apple","orange","apple","orange","pear","orange"] 中单词出现的次数-------------------------------------------------------------------------------------------------------
        {
          const arr = ["apple","orange","apple","orange","pear","orange"]
          const res = arr.reduce((prev, curr, index, array) => { 
            // console.log(prev) // {}
            // console.log(curr)
            prev[curr] = (prev[curr] + 1) || 1
            return prev
          }, {})
          // console.log(res) // {apple: 2, orange: 3, pear: 1}
        }




//------------------------------编程题：for循环分别使用es5的闭包和es6的let-------------------------------------------------------------------------------------------------------
        {
          var func1 = []

          for (var i = 0; i < 10; i++) {
            // func1.push(function(){console.log(i)}())
            // func1.push((function(value){ return function(){ return value } })(i)())
          }

          var func2 = []
          for (let i = 0; i < 10; i++) {
              // func2.push(function(){ console.log(i) }())
          }
        }




//------------------------------编程题：输出什么？-------------------------------------------------------------------------------------------------------
        {
          var j = 0;
          for (var i = 0; i < 2; i++, j++) {
            // console.log(i, j)
          }
          // 0 0 1 1 
        }