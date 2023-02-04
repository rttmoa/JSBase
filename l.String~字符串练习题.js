




// 调试该文件			

		// 练习一、
		let str = '我哎我的abcdskjgajdgasasMnsadna,MndasMdasdsaM祖国, 非常喜爱'; 
		// // substring, substr
		let startIndex = str.indexOf('祖'); // 返回索引下标：40
		let endIndex = str.indexOf('国'); // 返回索引下标：41
		let re = str.substring(startIndex, endIndex+1); 
		console.log(re);/**--- 祖国 ---**/
		let osp = str.split("M") // ['我哎我的abcdskjgajdgasas', 'nsadna,', 'ndas', 'dasdsa', '祖国, 非常喜爱']
		let oj = osp.join('?')   // '我哎我的abcdskjgajdgasas?nsadna,?ndas?dasdsa?祖国, 非常喜爱'
		let os = str.replace("M", "@")
		let os2 = os.replace("M", "@")
		console.log("-----------------------------练习一、--------------------------------------------------")



		// 练习二、
		let strs = 'file:\\C:\\Users\\laogou\\Desktop\\JavaScript高级\\day3\\index.html'; 
		let dian = strs.lastIndexOf('.');
		// console.log(dian)/**--- 53 ---**/
		let gang = strs.lastIndexOf('\\');
		console.log(gang)/**--- 47 ---**/
		// 截取：
		let wjm = strs.substring(gang+1, dian);
		// console.log(wjm)/**--- index ---**/
		let hzm = strs.substr(dian+1);
		// console.log(hzm)/**--- html ---**/
		let last = strs.substr(gang+1);
		// console.log(last)/**--- index.html ---**/
		let arr = last.split('.'); 
		console.log(arr);/**--- ['index', 'html'] ---**/
		console.log("-----------------------------练习二、--------------------------------------------------")


		// 练习三、
		const stu = "小红=99 小白=100 小黄=70 小黑=66 小绿=88";
		const arrOld = stu.split(" ");
		// console.log(arrOld)  //  ['小红=99', '小白=100', '小黄=70', '小黑=66', '小绿=88']
		const arrNew = [];
		arrOld.forEach((item) => {
			arrNew.push(item.replace("=", ":"));
		});
		// console.log(arrNew) // ['小红:99', '小白:100', '小黄:70', '小黑:66', '小绿:88']
		const newStr = arrNew.join("\r\n");
		console.log(newStr);
		// 小红:99
		// 小白:100
		// 小黄:70
		// 小黑:66
		// 小绿:88  
		console.log("-----------------------------练习三、--------------------------------------------------")