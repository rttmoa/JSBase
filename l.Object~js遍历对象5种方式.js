




    // 遍历对象 5 种 方法   ==> 
    //     URL1: https://www.php.cn/js-tutorial-494650.html
    //     URL2: https://blog.csdn.net/qq_41809113/article/details/124953731


// 对比
/* *
    *  方式 	                    基本属性 	原型链 	不可枚举 	Symbol
    *  for...in 	                 是 	     是 	  否 	     否
    *  Object.keys() 	             是 	     否 	  否 	     否   Object.keys()、Object.values()、Object.entries()
    *  Object.getOwnPropertyNames()  是 	     否 	  是 	     否
    *  Object.getOwnPropertySymbols()否 	     否 	  是 	     是
    *  Reflect.ownKeys() 	         是 	     否 	  是 	     是
    *  
    */

    

//-------------------------------for...in-------------------------------------------
        {
             // for...in 方法不仅会遍历当前的对象所有的可枚举属性，还会遍历其原型链上的属性 !

            // 创建一个对象并指定其原型，bar 为原型上的属性
            const obj = Object.create({bar: 'bars',sb: 'sbs'})  // Prototype中上存在这 bar、sb属性 
            // console.log(obj) 
            obj.foo = 'foos'; // foo 为对象自身的属性 、 打印： {foo: 'foo'} 
            // console.log(obj)

            // {foo: 'foos', bar: 'bars', sb: 'sbs'} 
            for (let key in obj) {
                // console.log(key) // foo
                // console.log(obj) // {foo: 'foos'}
                // console.log(obj[key]) // foos 
            }
            // for (const [x, y, z] in object) { console.log(x, y, z) }
                
            
            // 在这种情况下可以使用对象的 hasOwnProperty() 方法过滤掉原型链上的属性
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {// hasOwnProperty理解为是否自身的属性
                    console.log(obj[key]); // foos
                }
            }
            //这时候原型上的 bar 属性就被过滤掉了
        }




//-------------------------------拓展 for...of -- 这个for...of是用来遍历数组的-------------------------------------------
        {
            const foro = [{uname: 'lisi',},{age: 33, },{gender: 'female'}]
            for (let key of foro) {
                console.log(key)
            }
        }
 
        


//-------------------------------Object.keys()-------------------------------------------
        {
            // Object.keys()
            //该方法返回对象自身属性名组成的数组，它会自动过滤掉原型链上的属性
            const objs = Object.create({user: 'zhangsan',age: 22});
            
            objs.gender = 'female'; // foo 为对象自身的属性

            // Object.keys()：返回包含对象键名的数组；
            //通过数组的 forEach() 方法来遍历
            Object.keys(objs).forEach(key => {
                console.log(objs[key]) // female
            })
            
            Object.values(objs).forEach(value => {
                console.log(value) // female
            })

            Object.entries(objs).forEach(item => {
                console.log(item) // ['gender', 'female']
            })
        }
   
        


//-------------------------------Object.getOwnPropertyNames-------------------------------------------
        {
            // Object.getOwnPropertyNames:
            // Object.getOwnPropertyNames() 也是 ES5 新增的一个对象方法，
            //该方法返回对象自身属性名组成的数组，包括不可枚举的属性，也可以通过数组的 forEach 方法来遍历

            // 创建一个对象并指定其原型，bar 为原型上的属性
            // baz 为对象自身的属性并且不可枚举
            const getObj = Object.create({
                user: 'zhangsan'
            }, {
                hobby: {
                    value: 'coffee',
                    enumerable: false
                }
            }) 
            getObj.age = '25';
            console.log(getObj)

            // 不包括不可枚举的 baz 属性
            Object.keys(getObj).forEach((key) => {
                console.log(key) // age
                console.log(getObj[key]) // 25
            })

            // 包括不可枚举的 baz 属性
            Object.getOwnPropertyNames(getObj).forEach((key) => {
                console.log(getObj[key]) // coffee, 25
            })
        }


  


//-------------------------------Object.getOwnPropertySymbols-------------------------------------------
        {
            const getSymbols = Object.create({
                user: 'zhangsan'
            }, {
                hobby: {
                    value: 'coffee',
                    enumerable: false
                }
            }) 
            getSymbols.age = '25';
            console.log(getSymbols) // {age: '25', hobby: 'coffee'}
            // Symbol 数据类型，该类型可以作为对象的键
            // Object.getOwnPropertySymbols
            // 该方法:方法返回对象自身的 Symbol 属性组成的数组，不包括字符串属性
            Object.getOwnPropertySymbols(getSymbols).forEach((key) => {
                console.log(getSymbols[key]) // get不到=
            })
            console.log(123)
            // 什么都没有，因为该对象还没有 Symbol 属性
            // 给对象添加一个不可枚举的 Symbol 属性
            Object.defineProperties(getSymbols, {
                [Symbol('hobby')]: {
                    value: 'Symbol coffee',
                    enumerable: false
                }
            })
    
            // 给对象添加一个可枚举的 Symbol 属性
            getSymbols[Symbol('age')] = 'Symbol age'
    
            Object.getOwnPropertySymbols(getSymbols).forEach((key) => {
                console.log(getSymbols[key]) // Symbol coffee, Symbol age
            })
        }





//-------------------------------Reflect.ownKeys-------------------------------------------
        {
            // Reflect.ownKeys
            // 该方法返回对象自身所有属性名组成的数组，包括不可枚举的属性和 Symbol 属性
            Reflect.ownKeys(getSymbols).forEach((key) => {
                console.log(getSymbols[key]) // coffee, 25, Symbol coffee, Symbol age
            })
        }
