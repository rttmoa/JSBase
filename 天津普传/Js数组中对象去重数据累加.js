const res = [
  {
    _id: "640f0e9a105b550c40259fe5",
    mes_id__c: 8856,
    status__c: "已完成",
    remark_number__c: 8, 
  },
  {
    _id: "640f0e9a105b550c40259fe6",
    mes_id__c: 8856,
    remark_number__c: 6,
    status__c: "已完成", 
  },
  {
    _id: "640f0e9a105b550c40259fe7",
    mes_id__c: 8857,
    remark_number__c: 12,
    status__c: "已完成", 
  },
]; 
// https://blog.csdn.net/Lguorong/article/details/124326304


let newArr = []
let obj = {}
for (let i = 0; i < res.length; i++) {
    if(res[i].status__c === "已完成"){
        if(!obj[res[i].mes_id__c]){
            newArr.push(res[i])
            obj[res[i].mes_id__c] = true
        }
        else{ 
            for (let r = 0; r < newArr.length; r++) {
                const element = newArr[r];
                if(element.mes_id__c === res[i].mes_id__c){
                    element.remark_number__c += res[i].remark_number__c
                }
            }
        }
    }
}
console.log(obj)
console.log(newArr)