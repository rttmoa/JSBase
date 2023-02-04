
// Url: https://blog.csdn.net/weixin_43073143/article/details/96877155





        // 1、冒泡排序调优（从小到大排序）
        // 2、输出九九乘法表
        // 3、输出水仙花数
        // 4、1–10的阶乘和
        // 5、输出1900年至2100年中的所有闰年
        // 6、输出10–100之间的所有素数
        // 7、1，2，3，4四个数字,能组合成多少种互不相同且没有重复的三位数
        // 8、取出四位数中的各个位上的数字
        // 9、猴子吃桃问题
        // 10、用星号输出菱形。




// 2、输出九九乘法表
{
    let output = ""
    for (let i = 1; i <= 3; i++) { // 外循环控制列

        for (let j = 1; j <= i; j++) { // 内循环控制行
            // console.log(j) 
            output += `${j}X${i}=${i*j}\t`
        }
        output += "\n"
    }
    // console.log(output)
    // 1x1=1
    // 1x2=2 2x2=4
    // 1x3=3 2x3=6 3x3=9
}




// 3、输出水仙花数
// 使用for循环查找遍历，从100到999的所有三位数。
// 2、判断遍历的数字是否是各个位数的数字的3次幂数之和是否等于数字本身，如果是即为水仙花数，则在控制台输出（如何选取各个位数）。
// （1）选取个位数，模以10，得到余数即为个位数。 
// （2）选取十位数，i除以10，再对结果进行取整，取整后得到一个两位数的整数。用这个结果对10取模，得到十位数。
// （3）选取百位数，三位数除以100，再取整，就得到了百位数。
{
    let a, b, c = 0
    let output = "水仙花数有："
    for (let num = 101; num <= 999; num++) {
        // a = Math.floor(876 / 100) -> 8.76 -> 向下取整 -> 8 
        a = parseInt(num / 100)
        b = parseInt(num % 100 / 10)
        c = parseInt(num % 100 % 10)
        
        // Math.pow(底数,几次方)
        if(Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)  == num ){
            // output += num + " "
            output += String(num) + " "
        }
    }
    // console.log(output) // 字符串拼接仙花数有：153 370 371 407 
} 




// 4、1--10的阶乘和
{
    {
        let sum = 1;
        for (let i = 1; i <= 10; i++) {
            // !1=1  !2=2x1  !3=3x2x1  !4=4x3x2x1 
            
            sum = sum * i 
        }
        // console.log(sum) // 3628800
    }
    {
        let result = 0;
        // 定义阶乘结果
        let factorial = 1;

        // 4的阶乘：4x3x2x1
        for (let i = 1; i <= 10; i++) { // i=1 factorial=1   i=2 factorial=2   i=3 factorial=6   i=4 factorial=24
            // console.log(i)
            for (let j = 1; j <= i; j++) { 
                factorial = factorial * j // 2x3  
            }
            // console.log(factorial)
            result = factorial + result
            // console.log(result)
            factorial = 1
            
        }
        // console.log(result)
    }
}




// 5、输出1900年至2100年中的所有闰年
// 闰年计算方法：https://wenku.baidu.com/view/0c34365956270722192e453610661ed9ad5155d1.html?_wkts_=1674047880173
{
    // 定义结果集，并给出提示，用于储存结果
    let result = "1900年至2100年中的所有闰年有: \n";
    // 设置一个标志，用来判断每行是否有5个年份
    let flag = 0;
    for (let year = 1900; year <= 2100; year++) {

        if( (parseInt(year % 4) === 0) && (parseInt(year % 100) != 0) || (parseInt(year % 400) === 0) ){ // 比如1900, 2000

            result += year + "\t";  // \t 制表符
            flag++;
        }

        // 如果标志等于5，表示每一行有了5个年份，需要换行操作
        if(flag === 5){
            result += "\n"
            flag = 0
        }

    }
    // console.log(flag)
    // console.log(result)
}





// 6、输出10--500之间的所有素数有  (质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数)
{
    // 定义结果集，用于储存后面计算得出的素数并提示
    let primeNumbers = "10--500之间的所有素数有: \n";
    // 定义一个是否到了5的标志，用于后面控制是否一行有5个数字
    let areFive = 0;
    for (let num = 10; num <= 500; num++) {
        
        let flag = true;

        for (let i = 2; i <= num - 1; i++) { // 让 i != num
            // 2、3、5、7、11、13、17、19、23、29、31、37、41 、43、47
 
            if(num % i === 0){
                // console.log(num) // 10, 12, 14...
                flag = false;
                break;
            }
        }

        if(flag){
            // console.log(num) // 11, 13, 17...
            primeNumbers += num + "\t\t";
            areFive++;
        }
        if(areFive === 5){
            // 给结果集增加一个换行
            primeNumbers += "\n";
            // 重置标志
            areFive = 0;
        }
    }
    // console.log(primeNumbers)
}





// 7、 1，2，3，4四个数字, 能组合成多少种互不相同且没有重复的三位数
{
    // 定义记数标志
    let count = 0;
    // 定义结果集，存放结果
    let result = "能组合成的互不相同且没有重复的三位数有: \n";

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            for (let k = 1; k <= 4; k++) {

                if( i !== j && j !== k && i !== k){ // 213, 413...

                    let num =  100*i + 10*j + k;

                    result += `${num} `;

                    count++
                }
                else{ // 114, 111, 222...
                    // console.log(i,j,k)
                }
                
            }
        }
    }
    // console.log(count)
    // console.log(result)
}






// 8、取出四位数中的各个位上的数字
{
    //定义一个四位数 
    let num = 4578;
    // console.log("原四位数是：" + num);

    let thousand = num / 1000;

    let hundred = num % 1000 / 100; // 4578取余1000=578, 578除以100=5.78

    let ten = num % 100 / 10; // 7.8

    let n = num % 10;


    // console.log(
    //     "千分位是："+ parseInt(thousand) + "百分位是："+ parseInt(hundred) + "十分位是："+ parseInt(ten) + "个位是："+ parseInt(n)
    // )
}






// 9、猴子吃桃问题
{
    // console.log("猴子吃桃子问题：猴子第一天摘下N个桃子，当时就吃了一半，还不过瘾，就又吃了一个。");
    // console.log("\t\t\t第二天又将剩下的桃子吃掉一半，又多吃了一个。以后每天都吃前一天剩下的一半零一个。");
    // console.log("\t\t\t到第10天在想吃的时候就剩一个桃子了。求第一天共摘下来多少个桃子？");

    let sum = 1;
    for (let index = 1; index < 10; index++) {
        // 1, 4, 10, 22, 46, 94, 190, 382, 766, 1534
        
        sum = (sum + 1) * 2;
    }
    // console.log(sum) // 1534
}






// 10、用星号输出菱形
// Url: https://blog.csdn.net/weixin_43073143/article/details/96877155
{
    // 内容提示
    // console.log("10、用星号输出菱形");
    // 定义结果集，用来存放星号和空格
    let result10 = "";
    // 定义菱形宽度
    let width = 10;
    // 菱形上半部分，循环递增
    for (var i = 1; i <= width; i++) {
        // 菱形上半部分，空格递减
        for (var a = width - i; a >= 1; a--) {
            result10 += " ";
        }
        // 菱形上半部分，星号递增
        for (var j = 1; j <= i * 2 - 1; j++) {
            result10 += "*";
        }
        // 每一行结束后换行
        result10 += "\n";
    }
    // 菱形下半部分，循环递减
    for (var i = width - 1; i >= 1; i--) {
        // 菱形下半部分，空格递增（递减的递减）
        for (var a = width - i; a >= 1; a--) {
            result10 += " ";
        }
        // 菱形下半部分，星号递减（递减的递增）
        for (var j = 1; j <= i * 2 - 1; j++) {
            result10 += "*";
        }
        result10 += "\n";
    }
    // console.log(result10);
    // 输出换行，区分下一块内容
    // console.log("\n");
}