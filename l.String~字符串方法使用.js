




	// String.prototype
	// trim()、split()、replace()、toLowerCase()、toUpperCase()
	// indexOf()、lastIndexOf()
	// slice()、substring()、substr()
	// includes()、chatAt()、search()、concat()
	// join()、valueOf()、toString()
	
		
		let str = 'abcd';
		let st1 = new String('abcd');
		console.log('new String()', st1)
		console.log(new String())
		console.log(String.prototype)
		// console.log(st1.indexOf('cd', 0)) // String {'abcd'}
		// 字符串其实和数组很相似
		

		// let str2 = 'abcdefgabcd';
		// 属性：length
		// console.log( str2.length );
		// console.log( str2[1] );
		// for (let i = 0; i < str2.length; i++) {
			// console.log( str2[i] );
		// }



//---------------------------toString - join - valueOf------------------------------------------------------------------
		
		const t = [1, 2, 3];
		console.log('toString',  t.toString()) // 1,2,3
		const t1 = true;
		console.log('toString',  t1.toString())// true
		const t2 = {uname: 'zhangsan'} 
		console.log('toString',  t2.toString())// [object Object]

		//join() 方法用于把数组中的所有元素组合成一个字符串
		console.log('join', ['red', 'orange', 'pink'].join())    // red,orange,pink
		console.log('join', ['red', 'orange', 'pink'].join('.')) // red.orange.pink

		
		console.log('valueOf', t.valueOf() ) // [1, 2, 3]


		console.log(t.values()) // Array<number>.values(): IterableIterator<number>



//---------------------------trim：用于去除字符串两端空白------------------------------------------------------------------
 
		let str3 = '            abc        defgabcd       ';
		console.log('trim', str3);
		console.log('trim', str3.trim());


//---------------------------split - 将字符串分割为数组------------------------------------------------------------------
 
		let s4 = 'abcdefgabcd'; // (method) String.split(separator: string | RegExp, limit?: number): string[] (+1 overload)

		console.log('split',  s4.split('') );    // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd']

		console.log('split',  s4.split('', 6) ); // ['a', 'b', 'c', 'd', 'e', 'f']

		console.log('split',  s4.split('c') );   // ['ab', 'defgab', 'd']

		console.log('split',  s4.split('c', 2) );// ['ab', 'defgab']
		console.dir("(=========================== split ==================================)")


//---------------------------replace - 替换字符串------------------------------------------------------------------
 
		const baidu = 'www.baidu.com';
		console.log('replace', baidu.replace('baidu', 'jd'))
		console.log('replace', baidu.replace('www.', 'qq.'))
		console.log('replace', baidu.replace('.com', '.cn'))
		console.dir("(=========================== replace ==================================)")



//---------------------------toLowerCase - toUpperCase------------------------------------------------------------------
 
		let str5 = 'abcdeFGabcd'; 
		console.log('toLowerCase',str5.toLowerCase())// toLowerCase：把字母转成小写 
		console.log('toUpperCase', str5.toUpperCase());// toUpperCase：把字母转成大写 




//---------------------------indexOf/lastIndexOf - 查找元素出现的索引值------------------------------------------------------------------
 
		let s6 = 'abcdefgabcd';  // (method) String.indexOf(searchString: string, position?: number): number
		// 参数：(要找的元素, 从哪个位置开始找) 如果找到返回索引下标, 如果没找到返回-1 

		
		console.log('indexOf', s6.indexOf('cd', 0) )// 2    
		console.log('indexOf', s6.indexOf('dc', 0) )// -1

		 
		console.log('lastIndexOf', s6.lastIndexOf('bc', 6))// 1  // lastIndexOf：查找某个元素尾次出现的索引值，找不到就是-1
		console.log('lastIndexOf', s6.lastIndexOf('bc', 8))// 8
		console.log('lastIndexOf', s6.lastIndexOf('cv', 6))// -1
		console.dir("(=========================== indexOf,lastIndexOf ==================================)")



//---------------------------slice/substring/substr - 截取字符串 ------------------------------------------------------------------
 
		// 区别：https://blog.csdn.net/wozhenhaokan/article/details/102727984
		// 四种情况、一，start为负数，end不传、二，start为负数，end为负数时、三，start与end均大于零，且start > end、四，start与end均大于零，且start < end

		let s7 = 'abcdefgabcd';

		// 注意：如果只有一个参数，那么从这个索引值位置开始一直截取到最后

		// 字符串.slice(start，end);从start索引值位置截取字符串截取到end索引位置
		// 注意：end索引位置上的字符取不到 
		console.log('slice', s7.slice(1, 4)) // bcd 
		console.log('slice', s7.slice(4)) // efgabcd
 

		// 字符串.substring(start，end)从start索引值位置截取字符串截取到end索引位置
		// 注意：end索引位置上的字符取不到 
		console.log('substring', s7.substring(1, 4)) // bcd 
		console.log('substring', s7.substring(4))// efgabcd


		// 字符串.substr(start, length)从start索引位置开始截取字符串，截取length个 
		console.log('substr', s7.substr(1, 4)) // bcde
		console.log('substr', s7.substr(4)) // efgabcd
		console.dir("(=========================== slice,substring,substr ==================================)")


//---------------------------charAt------------------------------------------------------------------
 
		console.log('chatAt', '中华人民共和国万岁'.charAt(3) )// 传递位置 返回对应索引下标
		console.dir("(=========================== chatAt ==================================)")



//---------------------------search------------------------------------------------------------------
 
		console.log('search', 'www.baidu.com'.search('5')) // -1
		console.log('search', 'www.baidu.com'.search('b')) // 4
		console.log('search', 'www.baidu.com'.search('.')) // 0
		console.dir("(=========================== search ==================================)")

//---------------------------includes - 字符串是否包含某元素 返回布尔值------------------------------------------------------------------
 
		console.log('includes', '中华人民共和国万岁'.includes('万'))// true
		console.log('includes', '中华人民共和国万岁'.includes('共', 1))// true
		console.log('includes', '中华人民共和国万岁'.includes('妹'))// false
		console.log('includes', '中华人民共和国万岁'.includes('人', 4)) // false
		console.dir("(=========================== includes ==================================)")


		
//---------------------------concat------------------------------------------------------------------
 
		const tt = '123';
		console.log('concat', tt.concat('zhangsan')  )
		console.log('concat', tt.concat('zhangsan', tt)  )     // 123zhangsan123
		console.log('concat', tt.concat( ['zhangsan'] )  )     // 123zhangsan
		console.log('concat', tt.concat( [...'zhangsan'] )  )  // 123z,h,a,n,g,s,a,n
		console.dir("(=========================== concat ==================================)")

		