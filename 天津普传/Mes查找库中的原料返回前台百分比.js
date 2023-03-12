console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");

// 查看Mes需求数量、在库中查找是否满足条件
// Mes数据中的需求数量、放入总量、放入的数量
// let mesObj = {
//     DemandQuantity: 20,
//     TotalQuantity: 0,
//     // CurrentQuantity: 0,
//     PalletNumber: '999'
// }

// return
// 不满足
// 一个箱子
// let array = [{id: 1, num: 12,remarkNum:0, useNum: 12}];
// let array = [{id: 1, num: 12,remarkNum:4, useNum: 8}];
// 多个箱子
// const array = [{id: 1, num: 2},{id: 1, num: 2},{id: 2, num: 2}];

/**--- 模拟Mes数据、表中查询record数据map一下项目号、托盘号、柜号、主键、规格型号 ---**/
//
const MesArray = [
  {
    Project: "P22053-Z3",
    cab: "01",
    DemandQuantity: 30,
    TotalQuantity: 0, 
    PalletNumber: "123400022",
  },
  {
    Project: "P22053-Z4",
    cab: "03",
    DemandQuantity: 15,
    TotalQuantity: 15, 
    PalletNumber: "123400022",
  },
  {
    Project: "P22053-Z5",
    cab: "03",
    DemandQuantity: 20,
    TotalQuantity: 0, 
    PalletNumber: "123400022",
  },
  {
    Project: "P22053-Z4",
    cab: "04",
    DemandQuantity: 14, 
    TotalQuantity: 14, 
    PalletNumber: "123400022",
  },
  {
    Project: "P22053-Z3",
    cab: "02",
    DemandQuantity: 10,
    TotalQuantity: 0, 
    PalletNumber: "123400022",
  },
  {
    Project: "P22053-Z3",
    cab: "01",
    DemandQuantity: 30,
    TotalQuantity: 30,
    PalletNumber: "123400029",
  },
  {
    Project: "P22053-Z4",
    cab: "03",
    DemandQuantity: 15,
    TotalQuantity: 15,
    PalletNumber: "123400029",
  },
  {
    Project: "P22053-Z5",
    cab: "03",
    DemandQuantity: 20,
    TotalQuantity: 0,
    PalletNumber: "123400029",
    info: "库中无该项目号数据",
  },
  {
    Project: "P22053-Z4",
    cab: "04",
    DemandQuantity: 14,
    TotalQuantity: 14,
    PalletNumber: "123400029",
  },
  {
    Project: "P22053-Z3",
    cab: "02",
    DemandQuantity: 10,
    TotalQuantity: 10,
    PalletNumber: "123400029",
  },
];


/**--- https://blog.csdn.net/supming1/article/details/121400481 ---**/

// const arr = [{id:1,name:'ming'},{id:2,name:'ming2'},{id:1,name:'ming'}] 
const newArr = MesArray.reduce(function (tempArr, item) {
    // let re = tempArr.findIndex((ele) => {
    //     console.log(ele.PalletNumber === item.PalletNumber)
    //     // return ele.PalletNumber === item.PalletNumber === -1
    // })
    // console.log(re)
    // console.log(item)
    /**--- 表示tempArr数组中返回值如果是-1、那么就是没有在该数组中没有要找的元素 ---**/
    if (tempArr.findIndex((ele) => ele.PalletNumber === item.PalletNumber) === -1) {
        // console.log(item)
        tempArr.push(item)
    }else{
        // console.log(item)
        tempArr.forEach(function(ele) {
            if(ele.PalletNumber == item.PalletNumber){
                ele.DemandQuantity+=item.DemandQuantity
                ele.TotalQuantity+=item.TotalQuantity
                // console.log(item)
            }
        })
    }
    return tempArr
}, [])
/**--- 每个箱子的百分比 ---**/
// console.log(newArr)
const per = newArr.map(item => {
    const per = item.TotalQuantity / item.DemandQuantity
    const percent = (Math.round(per*10000)/100+'%');
    // console.log(percent)
    return {
        percentage: percent,
        PalletNumber: item.PalletNumber,
    }
})
console.log(per)