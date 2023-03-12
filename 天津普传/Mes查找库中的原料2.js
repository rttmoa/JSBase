// 查看Mes需求数量、在库中查找是否满足条件
// Mes数据中的需求数量、放入总量、放入的数量
let mesObj = {
    DemandQuantity: 20,
    TotalQuantity: 0,
    // CurrentQuantity: 0,
    PalletNumber: '999'
}
// 不满足
// 一个箱子
// let array = [{id: 1, num: 12,remarkNum:0, useNum: 12}];  
// let array = [{id: 1, num: 12,remarkNum:4, useNum: 8}];  
// 多个箱子
// const array = [{id: 1, num: 2},{id: 1, num: 2},{id: 2, num: 2}];  

// 满足
// 一个箱子
const array = [{id: 1, num: 45,remarkNum:0, useNum: 45, pallet: '111', NullBox: ''}] // 未被标记过的原料箱
// const array = [{id: 1, num: 45,remarkNum:22, useNum: 23}] // 可用数量满足Mes需求数量
// const array = [{id: 1, num: 45,remarkNum:27, useNum: 18}] // 可用数量不满足Mes需求数量
// 多个箱子
// 数量相等的、未被使用过的
// const array = [
//     {id: 1, num: 6, remarkNum:0, useNum: 6}, 
//     {id: 1, num: 7,remarkNum:0, useNum: 7}, 
//     {id: 1, num: 8,remarkNum:0, useNum: 8},
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


// 查找容器配餐关系表中可用数量不为0
if(array.length){
        // 根据Mes表中的每一条数据去配餐关系表中处理每一条数据即可
       let prev = 0;
       let count = 0;
       for (let index = 0; index < array.length; index++) {
            const num = array[index].useNum;
            if(prev >= mesObj.DemandQuantity){
                break;
            }
            else{
                prev += num;
                count++
            }
       }
       console.log('\n')
       console.log('\n')
       console.log('\n')
       console.log('可用数量===========', prev)
       console.log('箱子个数===========', count)
       if(prev >= mesObj.DemandQuantity){
        console.dir('(=======================================满足========================================)')
            
        if(count >= 1){
            let MesTotal = 0;
            array.forEach((item, index, arr) => { 
                const demand = mesObj.DemandQuantity-MesTotal;
                console.log(demand)
                /**--- 这段表示配餐表中没有数据 length===0 ---**/
                if(item.num === item.useNum){// 表示箱子没有被用过
                    let newObj = item;
                    if(demand >= item.useNum){// 原料箱无剩余
                        newObj.remarkNum = newObj.useNum
                        newObj.useNum = 0;
                        newObj.NullBox = mesObj.PalletNumber
                    }
                    else{// 原料箱有剩余
                        newObj.remarkNum = demand
                        newObj.useNum =  newObj.useNum-newObj.remarkNum;
                        newObj.NullBox = mesObj.PalletNumber
                    } 
                    MesTotal += item.remarkNum
                }
                /**--- 表示配餐表中有数据、箱子被使用过 length!==0 ---**/
                else{ // 箱子被使用过, 需要copy一条数据
                    let oldObj = {}
                    Object.assign(oldObj, item)
                    if(demand >= item.useNum){// 原料箱无剩余
                        oldObj.remarkNum = item.useNum
                        oldObj.useNum = 0;
                        item.useNum = 0;
                        oldObj.pallet = oldObj.pallet;
                        oldObj.NullBox = mesObj.PalletNumber
                    }
                    else{// 原料箱有剩余 
                        // console.log('demand', demand)
                        oldObj.remarkNum = demand
                        oldObj.useNum =  item.useNum-oldObj.remarkNum;
                        item.useNum = 0;
                        oldObj.pallet = oldObj.pallet
                        oldObj.NullBox = mesObj.PalletNumber
                    } 
                    // console.log(newObj)
                    array.push(oldObj)
                    MesTotal += oldObj.remarkNum 
                }
            });
            // 在这里更新Mes数据
            mesObj.TotalQuantity = MesTotal
        } 
       }else{
        console.dir('(=======================================不满足========================================)')
        if(count === 1){
            // 一、库中就一个箱子、不满足Mes的需求数量、判断count是否为1、如果是一条直接处理1条数据即可
            // 1.判断原始数量和可用数量是否相等、如果相等那么这条数据没有被使用过
                // 1.1 如果相等、更新该条数据托盘号为Mes空箱号、标记数量为(箱内总数)、可用数量为(原始数-箱内总数=0)
                let failedobj = array[0];
                console.log(failedobj)
                if(failedobj.num === failedobj.useNum){
                    // 拷贝数组中的对象、处理完这个对象后、用数据库更新这个对象即可
                    failedobj.remarkNum = failedobj.useNum 
                    failedobj.useNum = 0
                    failedobj.parrlet = mesObj.PalletNumber;

                    mesObj.TotalQuantity = mesObj.TotalQuantity+failedobj.useNum
                }
                // 1.2 如果不相等、将查找到的这条数据复制一条
                    // 1.2.1 托盘号、原始数量不变, 标记数量为(查找的这条数据的数量), 可用数量为(可用数量-查找这条数据的数量)
                else {
                    // 拷贝数组中的对象、处理完这个对象后、用数据库更新这个对象即可
                    array[0].parrlet = '042111'
                    let obj = {}  
                    Object.assign(obj, array[0])

                    const out = obj.useNum;
                    obj.remarkNum = out
                    obj.useNum = obj.useNum - out;
                    obj.parrlet = mesObj.PalletNumber

                    mesObj.TotalQuantity = out; // 更新mes数据库

                    array[1] = obj// 更新数据库
                }

            // 二、如果count是多条、先判断第一条数据原始数量和可用数量
        }
        if(count > 1){
            console.log('不满足条件、多个箱子')
        }

    }
    console.dir('(=======================================结果========================================)')
    console.log('mes', mesObj)
    console.log('array', array)

}
else{
    console.log('不满足条件')
}