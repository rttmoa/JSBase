console.log('\n')
console.log('\n')
console.log('\n')
console.log('\n')
console.log('\n')
console.log('\n')



 
/**--- 模拟Mes数据、在 `容器操作记录表(原料表)` 中查询record数据map一下项目号、托盘号、柜号、主键、规格型号 ---**/
// const MesArray = [ // DemandQuantity 需求数量 = 装配数量 - 分拣数量 
//     { id: 1,  Project: "P22053-Z3",cupboard: "01",DemandQuantity: 12,TotalQuantity: 0,PalletNumber: "L001",},
//     { id: 2,  Project: "P22053-Z4",cupboard: "03",DemandQuantity: 6, TotalQuantity: 0,PalletNumber: "L002",},
    
//     // { id: 3,  Project: "P22053-Z5",cupboard: "03",DemandQuantity: 20, TotalQuantity: 0,PalletNumber: "L003",},
//     // { id: 4,  Project: "P22053-Z5",cupboard: "04",DemandQuantity: 20, TotalQuantity: 0,PalletNumber: "L004",},
    
//     { id: 5,  Project: "P22053-Z3",cupboard: "02",DemandQuantity: 15, TotalQuantity: 0,PalletNumber: "L005",},
//     { id: 6,  Project: "P22053-Z4",cupboard: "02",DemandQuantity: 40, TotalQuantity: 0,PalletNumber: "L006",},
// ]

// // MES 在 `容器操作记录表(原料表)` 中查询库中物料数据 是否满足条件       这里find.() 查询所有去遍历数据
// const stock = [
//     // 料箱号、物料代码...、项目号、当前数量(在库数量)
//     {container: '123400028', project: 'P22053-Z3', nowNumber: 25  },  // 项目号表示：物料代码，物料名称，规格型号，项目号
//     {container: '123400029', project: 'P22053-Z3', nowNumber: 10  },
//     {container: '123400030', project: 'P22053-Z3', nowNumber: 20  },

//     {container: '123400031', project: 'P22053-Z4', nowNumber: 10  },
//     {container: '123400032', project: 'P22053-Z4', nowNumber: 4  },
//     {container: '123400033', project: 'P22053-Z4', nowNumber: 20  },
// ]   
// let newStock = stock.map(item => {
//     return {
//         num: item.nowNumber,   // 总数
//         remarkNum: 0,          // 标记数量
//         useNum: item.nowNumber,// 可用数量
//         pallet: item.container,// 箱号
//         project: item.project  // 项目号
//     }
// })



/**--- 查询表中所有数据、根据mesobj的每一项过滤掉数据map, filter、最红push到数组中 ---**/
// 满足
/**--- 一个箱子 ---**/
// const array = [{num: 45,remarkNum: 0, useNum: 45, pallet: '111', NullBox: ''}] // 未被标记过的原料箱
// const array = [{id: 1, num: 45,remarkNum:22, useNum: 23, pallet: '222'}] // 可用数量满足Mes需求数量
// const array = [{id: 1, num: 45,remarkNum:27, useNum: 18}] // 可用数量不满足Mes需求数量

/**--- 多个箱子 ---**/
// 数量相等的、未被使用过的
// const array = [
//     {num: 10, remarkNum:0, useNum: 10, pallet: '111'}, 
//     {num: 10, remarkNum:0, useNum: 10, pallet: '222'}, 
//     {num: 20,remarkNum:0, useNum: 20, pallet: '333'},
// ]
//  const array = [
//     {id: 1, num: 12, remarkNum:0, useNum: 12}, 
//     {id: 1, num: 14,remarkNum:0, useNum: 14}, 
// ]
// 数量不等的、被使用过的
// const array = [
//     {id: 1, num: 6, remarkNum:0, useNum: 6}, 
//     {id: 1, num: 7,remarkNum:2, useNum: 5, pallet:'0421111'}, 
//     {id: 1, num: 10,remarkNum:0, useNum: 10},
// ]
// const array = [
//     {num: 20, remarkNum:14, useNum: 6, pallet:'111',NullBox:'888' }, 
//     {num: 10, remarkNum:0, useNum: 10, pallet:'222',NullBox:'' },
//     {num: 7, remarkNum:0, useNum: 7,   pallet:'333',NullBox:''},
// ]
// const array = [
//     {id: 1, num: 30, remarkNum:14, useNum: 16, pallet: '111', NullBox: '888'},  
//     {id: 1, num: 25, remarkNum:0,  useNum: 25, pallet: '111', NullBox: ''},
// ]
// const array = [
//     {id: 1, num: 25,remarkNum:11, useNum: 14},
//     {id: 1, num: 30, remarkNum:14, useNum: 16, pallet: '0421111'},  
// ];



const { M } = require('./mesData')
const { Stock } = require('./mesStockData')
// console.log(M)

// 查看Mes需求数量、在库中查找是否满足条件
// Mes数据中的需求数量、放入总量、放入的数量 || 分拣数量
// const data = req.body;
const MesArray = M.map( v => {

    let [pro, cup ] = v.productnum.split("-"); // 项目号+柜号
    return {
        // key: v.key, // 测试 - 查看原数据使用
        id: v.id,             // ！id - 123
        Project: pro,   // 项目号 - "P22053-Z4"
        cupboard: cup, // 柜号 - "02"
        // material__c:v.material__c// 物料名称 - "整模抽屉单元"
        DemandQuantity: v.quantity - v.processquantity,     // 需求数量 = 计划数量 - 分拣数量 
        markRecord: v.boxrecord,         // 标记字段 -  record
        PalletNumber: v.boxnum,   // 已绑定的空箱号 - L0202
        specifications: v.specification, // 规格型号 - "8PT54266"
        TotalQuantity: 0,   // 库中数量(默认0) || library__c: v.library__c
    }
})
// console.log(MesArray) 

// return

const newStock = Stock.map(item => {
    return {
        _id: item._id,
        num: item.now_number__c,                // 总数
        remarkNum: 0,                           // 标记数量
        useNum: item.now_number__c,             // 可用数量
        pallet: item.container_number__c,       // 原料箱号
        project: item.project_number__c,        // 项目号
        materialName: item.material_name__c,    // 物料名称
        materialCode: item.material_code__c,    // 物料代码
        specifications: item.specifications__c, // 规格型号 
        mid: 0,
        MESDemandQuantity: 0,
        MESTotalQuantity: 0,                   // MES查找在库中的数量
    }
})
// console.log(newStock)
// return



// MES的需求数量，可用数量
const newMesArr = [];
// MES在库中筛选的原料数据
const newArr = [];

MesArray.forEach(function(mesObj){
 
    // MES表中根据项目号和规格型号去立体库中找
    let array = newStock.filter(item => {
        // return mesObj.Project === item.project
        return mesObj.Project === item.project && mesObj.specifications === item.specifications;
    }) 

    if(array.length){
        // console.log(123)
        // 根据Mes表中的每一条数据去配餐关系表中处理每一条数据即可

        // 库中几个箱子可满足配餐MES的需求数量
        let prev = 0;
        // 定义箱子个数
        let count = 0;
        for (let index = 0; index < array.length; index++) {
                const num = array[index].useNum; // 可用数量(库存数量)
                if(prev >= mesObj.DemandQuantity){ // 查询库中几个箱子才可满足 MES的需求数量
                    break;
                }
                else{
                    prev += num;
                    count++
                }
        }
        console.log('可用数量===========', prev)
        console.log('箱子个数===========', count)
        console.log('需求数量===========', mesObj.DemandQuantity)
 

        if(prev >= mesObj.DemandQuantity){
            console.dir('(=======================================满足========================================)')
            if(count >= 1){
                
                let MesTotal = 0;
                array.forEach((item, index, arr) => {
                    const demand = mesObj.DemandQuantity - MesTotal;
                    // console.log(demand) 
                    // console.log(item)
                    /**--- 这段表示配餐表中没有数据 length===0 ---**/
                    if(item.num === item.useNum){ // 表示箱子没有被用过
                        let newObj = {};
                        Object.assign(newObj, item)
                        if(demand >= item.useNum){ // 原料箱无剩余
                            newObj.remarkNum = newObj.useNum
                            newObj.useNum = 0;
                            newObj.NullBox = mesObj.PalletNumber;   // 添加MES绑定的空箱号
                            newObj.cupboard = mesObj.cupboard;      // 添加MES的柜子号
                            newObj.mid = mesObj.id;                 // 添加MES的id
                            newObj.MESDemandQuantity = mesObj.DemandQuantity; // 添加MES的总需求数量
                            newObj.MESTotalQuantity = mesObj.DemandQuantity;  // 添加MES在库中查找到的数量
                        }
                        else{// 原料箱有剩余
                            newObj.remarkNum = demand
                            newObj.useNum =  newObj.useNum-newObj.remarkNum;
                            newObj.NullBox = mesObj.PalletNumber;   // 添加MES绑定的空箱号
                            newObj.cupboard = mesObj.cupboard;      // 添加MES的柜子号
                            newObj.mid = mesObj.id;                 // 添加MES的id
                            newObj.MESDemandQuantity = mesObj.DemandQuantity; // 添加MES的总需求数量
                            newObj.MESTotalQuantity = mesObj.DemandQuantity;  // 添加MES在库中查找到的数量
                        }  
                        // newObj.MESDemandQuantity = mesObj.DemandQuantity;
                        Object.assign(item, newObj)
                        MesTotal += item.remarkNum;
                        if(newObj.remarkNum !== 0){newArr.push(newObj)} 
                    }
                    /**--- 表示配餐表中有数据、箱子被使用过 length!==0 ---**/
                    else{
                        // 箱子被使用过, 需要copy一条数据
                        let oldObj = {}
                        Object.assign(oldObj, item)
                        // console.log(item)
                        if(demand >= item.useNum){// 原料箱无剩余
                            oldObj.remarkNum = item.useNum
                            oldObj.useNum = 0;
                            item.useNum = 0;
                            oldObj.pallet = oldObj.pallet;
                            oldObj.NullBox = mesObj.PalletNumber; // 添加MES绑定的空箱号
                            oldObj.cupboard = mesObj.cupboard;    // 添加MES的柜子号
                            oldObj.mid = mesObj.id;               // 添加MES的id
                            oldObj.MESDemandQuantity = mesObj.DemandQuantity; // 添加MES的总需求数量
                            oldObj.MESTotalQuantity = mesObj.DemandQuantity;  // 添加MES在库中查找到的数量
                        }
                        else{// 原料箱有剩余 
                            // console.log('demand', demand)
                            oldObj.remarkNum = demand
                            oldObj.useNum =  item.useNum - oldObj.remarkNum;
                            item.useNum = 0;
                            oldObj.pallet = oldObj.pallet;
                            oldObj.NullBox = mesObj.PalletNumber; // 添加MES绑定的空箱号
                            oldObj.cupboard = mesObj.cupboard;    // 添加MES的柜子号
                            oldObj.mid = mesObj.id;               // 添加MES的id
                            oldObj.MESDemandQuantity = mesObj.DemandQuantity; // 添加MES的总需求数量
                            oldObj.MESTotalQuantity = mesObj.DemandQuantity;  // 添加MES在库中查找到的数量
                        }  
                        // oldObj.MESDemandQuantity = mesObj.DemandQuantity;
                        Object.assign(item, oldObj)
                        MesTotal += oldObj.remarkNum 
                        if(oldObj.remarkNum !== 0){ newArr.push(oldObj) }
                    }

                });

                mesObj.TotalQuantity = MesTotal; // MES需求的在库数量

                newMesArr.push(mesObj);
            }
            
        }else{
            console.dir('(=======================================不满足========================================)')
            // 库中所有的数据 < MES的需求数量
            // 当前的可用数量累加 = mesObj.TotalQuantity
            // console.log(1111111111111)
            // console.log(mesObj) // 第二箱MES需求的数量
            // console.log(array)
            const allNum = array.reduce((curr, prev) => {
                return curr + prev.useNum
            }, 0)
            // console.log(allNum)
            if(mesObj.DemandQuantity >= allNum && allNum !== 0){
                
                array.forEach(function(item) {
                    // console.log(item)
                    if(item.useNum !== 0){
                        let restObj = {}
                        Object.assign(restObj, item)
                        restObj.remarkNum = item.useNum;
                        restObj.useNum = 0;
                        restObj.NullBox = mesObj.PalletNumber;  // 添加MES绑定的空箱
                        restObj.mid = mesObj.id;                // 添加MES的id
                        restObj.MESDemandQuantity = mesObj.DemandQuantity; // 添加MES的需求数量
                        restObj.MESTotalQuantity = allNum;                 // 添加MES的在库中查找的数量 
                        restObj.cupboard = mesObj.cupboard;     // 添加MES的柜子号
                        Object.assign(item, restObj)
                        newArr.push(restObj); // 最终数组
                    } 
                })
                mesObj.TotalQuantity = allNum; // MES需求的在库数量
                // console.log(123)
                newMesArr.push(mesObj) // 最终数组 
            }
            else{
                mesObj.info = "库中项目数量不足"
                newMesArr.push(mesObj)
                // console.error("库中项目数量不足")
            }
            // console.log(mesObj)
        } 

    }
    else{
        // console.log('===================库中未找到该属性的数据==========================') 
        // // console.log(mesObj)
        mesObj.info = '库中无该项目号及规格型号数据'
        newMesArr.push(mesObj)
    } 
}) 
// 如果在立体库中未找到该数据： {info: '库中无该项目号数据'}
// console.info('\n')
// console.log('最终newMes==>', newMesArr)
console.log('最终newArr==>', newArr)
// console.log('原数据array=>', array)



// 更新MES数据  1、info = 库中未找到该属性的数据  2、TotalQuantity: ？
// 将newArr写入 容器-配餐关系表中
// 如果newArr.length === 0     表示一条数据都没有找到 ？？？
  
// 写入数据库例子
// const baseInfo = { space: spaceId,owner: userId,created_by: userId,modified_by: userId,created: new Date(),modified: new Date()};

// newArr.forEach(async item => { 
//     let newDoc = {
//         mes_id__c: item.mid,
//         config_project_number__c: item.project,
//         config_cabinet_number__c: item.cupboard,
//         mes_demand_quantity__c: item.MESDemandQuantity,
//         config_container_number__c: item.NullBox,
//         config_specifications__c: item.specifications,
//         mes_total_quantity__c: item.MESTotalQuantity,
//         // mes_info__c: item.info,

//         material_id__c: item._id,
//         container_number__c: item.pallet,
//         material_code__c: item.materialCode,
//         material_name__c: item.materialName,
//         specifications__c: item.specifications,
//         project_number__c: item.project,
//         box_number__c: item.num,
//         remark_number__c: item.remarkNum,
//         usable_number__c: item.useNum, 
//         ...baseInfo
//     }
//     // console.log(newDoc)
//     await objectql.getObject("pc_auto_config_relation__c").directInsert(newDoc)

// })

// newMesArr.forEach(async item => {
//     if(item.info){ 
//         let newDoc = {
//             mes_id__c: item.id,
//             config_project_number__c: item.Project,
//             config_cabinet_number__c: item.cupboard,
//             mes_demand_quantity__c: item.DemandQuantity,
//             config_container_number__c: item.PalletNumber,
//             config_specifications__c: item.specifications,
//             mes_total_quantity__c: item.TotalQuantity,
//             mes_info__c: item.info,

//             ...baseInfo
//         }
//         // console.log(newDoc)
//         await objectql.getObject("pc_auto_config_relation__c").directInsert(newDoc)
//     }
// })











// const arr = [{id:1,name:'ming'},{id:2,name:'ming2'},{id:1,name:'ming'}] 
const AllBoxPer = newMesArr.reduce(function (tempArr, item) {
    // let re = tempArr.findIndex((ele) => {
    //     console.log(ele.PalletNumber === item.PalletNumber)
    //     // return ele.PalletNumber === item.PalletNumber === -1
    // }) 
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
const EveryBoxPer = AllBoxPer.map(item => {
    const per = item.TotalQuantity / item.DemandQuantity
    const percent = (Math.round(per*10000)/100+'%');
    // console.log(percent)
    return {
        percentage: percent,
        PalletNumber: item.PalletNumber,
    }
})
console.log(EveryBoxPer)