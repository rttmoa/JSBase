



// Url: https://blog.csdn.net/Candy5204/article/details/126976378?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~AD_ESQUERY~yljh-1-126976378-blog-96877155.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~AD_ESQUERY~yljh-1-126976378-blog-96877155.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=2
        
//         问题一：回文函数--------------------------
//         问题二：数组去重--------------------------遍历数组，对象属性
//         问题三：字符串中出现最多的字符--------------遍历数组，对象属性，遍历对象
//         问题四：冒泡排序
//         问题五：快速排序
//         问题六：不借助临时变量，进行两个整数的交换
//         问题七：找出下列正数组的最大差值
//         问题八：随机生成指定长度的字符串
//         问题九：二分查找算法
//         问题十：使用闭包获取每个li的index

  


        // 回文函数
                {
                    function checkPalindrom (str) {
        
                        return str == str.split("").reverse().join("")
                    }
                    checkPalindrom("mamam")
                }
        
        
        // 数组去重
                {
                    let unique = (arr) => {
                        let hashTable = {}
                        let data = []
                        for (let i = 0; p = arr.length, i < p; i++) {
        
                            if(!hashTable[arr[i]]){
                                hashTable[arr[i]] = true;
                                data.push(arr[i])
                            }
                        }
                        // console.log(hashTable)
                        // console.log(data) // [3, 4, 2]
                    }
                    unique([3, 4, 3, 2, 4, 3])
                }
        
        
        
        // 字符串中出现最多的字符
                {
                    function findMaxDuplicateChar(str) {
                        if(str.length === 1) {
                            return str
                        }
                        let charObj = {}
                        for (let i = 0; i < str.length; i++) {
        
                            // charAt() 方法可返回指定位置的字符
                            // console.log(charObj[str.charAt(i)])
                            if(!charObj[str.charAt(i)]){
                                charObj[str.charAt(i)] = 1;
                            }
                            else{
                                charObj[str.charAt(i)] += 1;
                            }
                        }
                        // console.log(charObj)
        
                        let maxChar, maxValue = 1; 
                        for (const key in charObj) {
                            // console.log(key) // a, s, d, e, l
                            if(charObj[key] > maxValue){
                                maxChar = key;
                                maxValue = charObj[key];
                            }
                        }
                        return maxChar
                    }
                    // findMaxDuplicateChar('aaasdae')
                    findMaxDuplicateChar('afjghdfraaaasdenas')
        
                }
        
        
        
        
        
        // 冒泡排序
        // https://blog.csdn.net/Sueko/article/details/124563226
                {
                    function bubbleSort(arr){
        
                        for (let i = 0; i < arr.length; i++) {
                            for (let j = 0; j < arr.length - i - 1; j++) {
                                
                                // console.log(arr[j])
                                if( arr[j] > arr[j+1] ){  
        
                                    let temp = arr[j]
                                    arr[j] = arr[j+1]
                                    arr[j+1] = temp
                                }
                            }
                            // console.log(arr)
                            // break
                        }
                        // console.log(arr) // [1, 2, 3, 4]
                    }
                    // bubbleSort([2,3,1,4])
                    bubbleSort([3, 4, 5, 2, 3, 4, 4, 6766, 6, 8])
                }
        
        
        
        
        
        
        // 快速排序
                {
                    
                    function quickSort(arr) {
                        if (arr.length <= 1) {
                            return arr;
                        }
                        let leftArr = [], rightArr = [], q = arr[0];
                        for (var i = 1, l = arr.length; i < l; i++) {
                            if (arr[i] > q) {
                                rightArr.push(arr[i]);
                            } else {
                                leftArr.push(arr[i]);
                            }
                        }
                        return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
                    }
                    // quickSort([3, 4, 5, 2, 3, 4, 4, 6766, 6])
        
        
                }
        
        
        
        
        // 不借助临时变量，进行两个整数的交换
                {
                    function swap(a, b) {
                        b = b - a;
                        a = a + b;
                        b = a - b;
                        return [a, b];
                    }
                    // swap(4, 8)
                }
        
        
        
        // 找出下列正数组的最大差值
                {
                    function getMaxProfit(arr) {
        
                        let minPrice = arr[0], maxProfit = 0;
                        for (let i = 0; i < arr.length; i++) {
                            
                            let currentValue = arr[i]
                            // 最小值
                            minPrice = Math.min(minPrice, currentValue)
                            
                            let diff = currentValue - minPrice; // 当前值-最小值=差值
                            // console.log(diff)
                            // 最大值
                            maxProfit = Math.max(maxProfit, diff)
                        }   
                        // console.log(maxProfit)
                    }
                    // getMaxProfit([3, 4, 5, 2, 3, 4, 4, 6766, 6, 1])
                }
        
        
        
        
        
        // 随机生成指定长度的字符串
                {
                    function randomString(n){
        
                        let res = "";
                        let str = 'abcdefghijklmnopqrstuvwxyz9876543210'; // 36
                        const length = str.length; 
        
                        for (let i = 0; i < n; i++) { 
                             
                            // console.log(str.charAt(3)) // d  传入位置返回字符串
                            // console.log(Math.floor(Math.random() * length)) // [0, 1) * 36 = [0, 35]
        
                            res = res + str.charAt(Math.floor(Math.random() * length))
        
                        }
                        // console.log(res) // x7y42omc5y
                    }
                    // randomString(10)
                }
        
        
        
        
        
        
        
        // 二分查找算法
                {
                    function binarrySearch(arry, start, stop, num) {
                        if (stop - start == 1) {
                            if (arry[stop] == num) {
                                return stop;
                            }
                            if (arry[start] == num) {
                                return start;
                            }
                            return -1;
                        }
                        var center = Math.floor((stop + start) / 2);
                        if (arry[center] != num) {
                            return num > arry[center] ? binarrySearch(arry, center, stop, num) : binarrySearch(arry, start, center, num);
                        }
                        return center;
                    }
                    var arry = [1, 3, 4, 6, 8, 9]
                    console.log(binarrySearch(arry, 0, arry.length, 9))
        
        
                }
        
        
        