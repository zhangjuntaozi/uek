/*
* @Author: Acer
* @Date:   2017-04-01 11:31:28
* @Last Modified by:   Acer
* @Last Modified time: 2017-04-01 16:56:26
*/

'use strict';
// 窗口 加载完之后 执行一段程序

// alert(2);
window.onload = function(){
	var designWidth = 375;     
	 // 定义设计尺寸
		function fontSize(){
			var CW =document.documentElement.clientWidth;

			// 设备尺寸  文档的宽度
			// console.log(CW); 输出文档的宽度
			var size =CW/designWidth*100+"px";
			document.querySelector("html").style.fontSize=size;
			// 设置html的font-size
		}
		fontSize();  
		// 运行函数
		window.onresize=fontSize;
		// 检测窗口尺寸是否发生改变
}