 
   
   Url: https://mp.weixin.qq.com/s/PJLLxVsLEp6dZlkdrDSDzQ





    // 一、提炼函数
    //     将一段代码提炼到一个独立的函数Function中，并以这段代码的作用命名，可以清楚的看到这段代码是具体是做什么的

    // 二、函数参数化
    //     如果发现两个函数Function逻辑非常相似， 只有一些字面量值不同， 可以将其合并成一个函数， 以参数的形式传入不同的值， 从而消除重复

    // 三、使用策略模式替换“胖”分支
    //     当if-else或者switch-case分支过多时可以使用策略模式将各个分支独立出来、使用对象属性模式
        
    // 四、提炼变量
    //     一个表达式有可能非常复杂且难以阅读。这种情况下， 可以提炼出一个局部变量帮助我们将表达式分解为比较容易管理的形式 ，这样的变量在调试时也很方便

    // 五、内联变量
    //     用变量右侧表达式消除变量，这是提炼变量的逆操作

    // 六、封装变量
    //     将变量封装起来，只允许通过函数访问
    //     对于所有可变的数据， 只要它的作用域超出单个函数，就可以采用封装变量的方法。数据被使用得越广， 就越是值得花精力给它一个体面的封装。
        
    // 七、拆分阶段
    // 八、拆分循环
    // 九、拆分变量
    // 十、分解条件表达式
    // 十三、将查询函数和修改函数分离




    // 一、提炼函数  
    // what 将一段代码提炼到一个独立的函数中，并以这段代码的作用命名 
    // where 如果需要花时间浏览一段代码才能弄清楚它到底要干什么，那么这时候就应该将其提炼到一个函数中，并根据它所做的事命名。
    // 以后再读这段代码时，一眼就能知道这个函数的用途。
    
    // ==================重构前==================
    function printOwing(invoice) {
        let outstanding = 0;
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }
    // ==================重构后==================
    function printOwing(invoice) {
        let outstanding = 0;
        printBanner()
    }

    function printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }






    // 二、函数参数化
    // what 以参数的形式传入不同的值，消除重复函数
    // where 如果发现两个函数逻辑非常相似， 只有一些字面量值不同， 可以将其合并成一个函数， 以参数的形式传入不同的值， 从而消除重复。
    
    // ==================重构前==================
    function clickFaultsItem(item){
        this.$u.route({
            url: 'xxx',
            params: {
                id: item.id,
                type: '异常'
            }
        })
    }
    function clickFNormalItem(item){
        this.$u.route({
            url: 'xxx',
            params: {
                id: item.id,
                type: '正常'
            }
        })
    }
    // ==================重构后==================
    function clickItem(id, type){
        this.$u.route({
            url: 'xxx',
            params: {
                id,
                type
            }
        })
    }







    // 三、使用策略模式替换“胖”分支
    // what 使用策略模式替换“胖胖”的if-else或者switch-case
    // where 当if-else或者switch-case分支过多时可以使用策略模式将各个分支独立出来

    // ==================重构前==================
    function getPrice(tag, originPrice){
        // 新人价
        if(tag === 'newUser'){
            return originPrice > 50.1 ? originPrice - 50 : originPrice
        }
        // 返场价格
        if(tag === 'back'){
            return originPrice > 200 ? originPrice - 50 : originPrice
        }
        // 活动价格
        if(tag === 'activity'){
            return originPrice > 300 ? originPrice - 100 : originPrice
        }
    }
    // ==================重构后==================
    const priceHandler = {
        newUser(originPrice){
            return originPrice > 50.1 ? originPrice - 50 : originPrice
        },
        back(originPrice){
            return originPrice > 200 ? originPrice - 50 : originPrice
        },
        activity(originPrice){
            return originPrice > 300 ? originPrice - 100 : originPrice
        }
    }

    function getPrice(tag, originPrice){

        return priceHandler[tag](originPrice)
    }







    // 四、提炼变量
    // what 提炼局部变量替换表达式
    // where 一个表达式有可能非常复杂且难以阅读。这种情况下， 可以提炼出一个局部变量帮助我们将表达式分解为比较容易管理的形式 ，这样的变量在调试时也很方便。
    
    // ==================重构前==================
    function price(order) {
        //价格 = 商品原价 - 数量满减价 + 运费
        return order.quantity * order.price -
        Math.max(0, order.quantity - 500) * order.price * 0.05 +
        Math.min(order.quantity * order.price * 0.1, 100);
    }

    // ==================重构后==================
    function price(order) {
        const basePrice = order.quantity * order.price;
        const quantityDiscount = Math.max(0, order.quantity - 500) * order.price * 0.05;
        const shipping = Math.min(basePrice * 0.1, 100);
        return basePrice - quantityDiscount + shipping;
    }   





    // 五、内联变量
    // what 用变量右侧表达式消除变量，这是提炼变量的逆操作
    // where 当变量名字并不比表达式本身更具表现力时可以采取该方法

    // ==================重构前==================
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);

    // ==================重构后==================
    return anOrder.basePrice > 1000





    // 六、封装变量
    // what 将变量封装起来，只允许通过函数访问
    // where 对于所有可变的数据， 只要它的作用域超出单个函数，就可以采用封装变量的方法。数据被使用得越广， 就越是值得花精力给它一个体面的封装。

    // ==================重构前==================
    let defaultOwner = {firstName: "Martin", lastName: "Fowler"};
    // 访问
    spaceship.owner = defaultOwner;
    // 赋值
    defaultOwner = {firstName: "Rebecca", lastName: "Parsons"};

    // ==================重构后==================
    function getDafaultOwner () { return defaultOwner }
    function setDefaultOwner (arg) { defaultOwner = arg }
    // 访问
    spaceship.owner = getDafaultOwner();
    // 赋值
    setDefaultOwner( { firstName: "rebecca", lastName: "Parsons"} )






    // 七、拆分阶段
    // what 把一大段行为拆分成多个顺序执行的阶段
    // where 当看见一段代码在同时处理两件不同的事， 可以把它拆分成各自独立的模块， 因为这样到了需要修改的时候， 就可以单独处理每个模块

    // ==================重构前==================
    function priceOrder(product, quantity, shippingMethod) {
        const basePrice = product.basePrice * quantity;
        
        const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
        
        const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
        
        const shippingCost = quantity * shippingPerCase;
        
        const price = basePrice - discount + shippingCost;
        return price;
    }
    // ==================重构后==================
    function priceOrder(product, quantity, shippingMethod){
        const priceData = calculatePricingData(product, quantity);
        return applyShipping(priceData, shippingMethod)
    }
    // 计算商品价格
    function calculatePricingData(product, quantity){
        const basePrice = product.basePrice * quantity; 
        const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
        return { basePrice, quantity, discount}
    }
    // 计算配送价格
    function applyShipping(priceData, shippingMethod){
        const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase; 
        const shippingCost = priceData.quantity * shippingPerCase; 
        return priceData.basePrice - priceData.discount + shippingCost;
    }




    // 八、拆分循环
    // what 将一个循环拆分成多个循环
    // where 当遇到一个身兼数职的循环时可以将循环拆解，让一个循环只做一件事情， 那就能确保每次修改时你只需要理解要修改的那块代码的行为就可以了。
    //     该行为可能会被质疑，因为它会迫使你执行两次甚至多次循环，实际情况是，即使处理的列表数据更多一些，循环本身也很少成为性能瓶颈，
    //     更何况拆分出循环来通常还使一些更强大的优化手段变得可能。

    // ==================重构前==================
    var people = [
        { age: 20, salary: 10000 },
        { age: 21, salary: 15000 },
        { age: 22, salary: 18000 }
    ]

    var youngest = people[0] ? people[0].age : Infinity;
    var totalSalary = 0;
    for (const p of people) {
        // 查找最年轻的人员
        if (p.age < youngest) youngest = p.age;
        // 计算总薪水
        totalSalary += p.salary;
    }
    console.log(`youngestAge: ${youngest}, totalSalary: ${totalSalary}`);

    // ==================重构后==================
    var people = [
        { age: 20, salary: 10000 },
        { age: 21, salary: 15000 },
        { age: 22, salary: 18000 }
    ] 
    var totalSalary = 0;
    for (const p of people) { 
        // 计算总薪水
        totalSalary += p.salary;
    }
    var youngest = people[0] ? people[0].age : Infinity;
    for (const p of people) {
        // 查找最年轻的人员
        if (p.age < youngest) youngest = p.age;
    }
    console.log(`youngestAge: ${youngest}, totalSalary: ${totalSalary}`);

    // ==================提炼函数==================
    var people = [
        { age: 20, salary: 10000 },
        { age: 21, salary: 15000 },
        { age: 22, salary: 18000 }
    ]  
    console.log(`youngestAge: ${youngestAgv()}, totalSalary: ${totalSalary()}`);
    function youngestAgv() {
        var youngest = people[0] ? people[0].age : Infinity;
        for (const p of people) {
            // 查找最年轻的人员
            if (p.age < youngest) youngest = p.age;
        }
        return youngest
    }
    function totalSalary() {
        var totalSalary = 0;
        for (const p of people) { 
            // 计算总薪水
            totalSalary += p.salary;
        }
        return totalSalary
    }

    // ==================使用工具类进一步优化==================
    var people = [
        { age: 20, salary: 10000 },
        { age: 21, salary: 15000 },
        { age: 22, salary: 18000 }
    ]  
    console.log(`youngestAge: ${youngestAgv()}, totalSalary: ${totalSalary()}`);
    function youngestAgv() {
        return Math.min([20, 22, 12])
        return Math.min(...[20, 22, 12])
        return Math.min(...peron.map(value => value.age))
    }
    function totalSalary() {
        return people.reduce((prev, curr) => prev + curr.salary, 0) // 初始值+每一项的当前值
    }





    // 九、拆分变量
    // what 将一个变量拆分成两个或多个变量
    // where 如果变量承担多个责任， 它就应该被替换为多个变量， 每个变量只承担一个责任。

    // ==================重构前==================
    let temp = 2 * (height + width);
    console.log(temp);
    temp = height * width;
    console.log(temp);

    // ==================重构后==================
    const perimeter = 2 * (height + width);
    console.log(perimeter);
    const area = height * width;
    console.log(area);




    // 十、分解条件表达式
    // what 将条件表达式提炼成函数
    // where 在带有复杂条件逻辑的函数中，往往可以将原函数中对应的代码改为调用新函数。

    // ==================重构前==================
    // 计算一件商品的总价，该商品在冬季和夏季的单价是不同的
    if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
        charge = quantity * plan.summerRate;
    else
        charge = quantity * plan.regularRate + plan.regularServiceCharge;

    // ==================重构后==================
    if (summer())
        charge = summerCharge();
    else
        charge = regularCharge();

    function summer() {
        return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
    }
    function summerCharge() {
        return quantity * plan.summerRate;
    }
    function regularCharge() {
        return quantity * plan.regularRate + plan.regularServiceCharge;
    }
    
    // ==================进一步优化（使用三元运算符）================== 
    charge = summer() ? summerCharge() : regularCharge();
    function summer() {
        return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
    }
    function summerCharge() {
        return quantity * plan.summerRate;
    }
    function regularCharge() {
        return quantity * plan.regularRate + plan.regularServiceCharge;
    }






    // 十一、合并条件表达式
    // 将多个条件表达式合并
    // ==================重构前==================
    if (anEmployee.seniority < 2) return 0;
    if (anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;

    // ==================重构后==================
    if (isNotEligableForDisability()) return 0;
    function isNotEligableForDisability() {
        return ((anEmployee.seniority < 2) || (anEmployee.monthsDisabled > 12) || (anEmployee.isPartTime));
    }






    // 十二、以卫语句取代嵌套条件表达式
    // ==================重构前==================
    function payAmount(employee) {
        let result;
        if(employee.isSeparated) {
            result = {amount: 0, reasonCode:"SEP"};
        }
        else {
            if (employee.isRetired) {
                result = {amount: 0, reasonCode: "RET"};
            }
            else {
                result = someFinalComputation();
            }
        }
        return result;
    }

    // ==================重构后==================
    function payAmount(employee) {
        if (employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
        if (employee.isRetired) return {amount: 0, reasonCode: "RET"};
        return someFinalComputation();
    }





    // 十三、将查询函数和修改函数分离
    // what 将查询动作从修改动作中分离出来的方式
    // where 如果遇到一个“既有返回值又有副作用”的函数，此时可以将查询动作从修改动作中分离出来。

    // ==================重构前==================
    function alertForMiscreant (people) {
        for (const p of people) {
            if (p === "Don") {
                setOffAlarms();
                return "Don";
            }
            if (p === "John") {
                setOffAlarms();
                return "John";}
        }
        return "";
    }
    // 调用方
    var found = alertForMiscreant(people);

    // ==================重构后==================
    function findMiscreant (people) {
        for (const p of people) {
            if (p === "Don") {
                return "Don";
            }
            if (p === "John") {
                return "John";
            }
        }
        return "";
    }
    function alertForMiscreant (people) {
        if (findMiscreant(people) !== "") setOffAlarms();
    }
    // 调用方
    var found = findMiscreant(people);
    alertForMiscreant(people);


