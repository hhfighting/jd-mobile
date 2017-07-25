/*
* @Author: user
* @Date:   2017-07-21 16:16:46
* @Last Modified by:   user
* @Last Modified time: 2017-07-24 10:52:30
*/

window.onload = function(){
	//顶部通栏的滚动效果
	headerScroll();
	//倒计时的效果
	cutDownTime();
	//轮播图的效果 
	banner();

}
//通栏方法
//
//
 /*
  获取导航栏的高度
 
在onscroll事件中计算颜色修改颜色0-1的透明度
 获取到滚动的距离
 滚动的距离/导航栏 （0-1）
 滚动的距离大于导航栏 >1 如果透明度>1 变为1

 通过js 修改 顶部通栏的透明度即可

 为了保证子元素能正常显示 应该使用rgba()或者hsla()


*/
function headerScroll(argument){
	//1.获取一些必须要知道的参数	
	//
	//导航栏的高度
	//顶部的通栏（为了在onscroll事件中 使用 避免一直获取造成的性能浪费）
	//offsetTop:距离顶部的高度
	//offsetHeight:自己的高度
	var navDom = document.querySelector(".jd-nav");
	var maxDistance= navDom.offsetTop + navDom.offsetHeight ;

	//获取顶部的通栏
	var headerDom = document.querySelector(".jd-header");

	//2.注册onscroll事件 注册给谁
	//
	window.onscroll = function(){
		//1.获取滚动的距离
		var scrollDistance = window.document.body.scrollTop;
		
		//2.计算一个0-1的百分数
		var percent = scrollDistance/maxDistance;
		//如果超过了1，没有意义，则还原为1
		if(percent > 1){
			percent = 1;
		}//因此获取的值介于0-1之间
		//3.设置顶部通栏的透明度
		headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';      
	}
	
	}

//倒计时方法
function cutDownTime(argument){
	//body
}
//轮播图方法
/*

      获取必须知道的变量
      步骤1：不考虑过渡效果 直接刷刷刷的切换
             定时器中index++
             判断是否越界
             修改 轮播图ul的位置
       步骤2：下方的索引li标签修改外观
           由于我们是使用.current标示当前的索引值
           清空所有的li的class
           为当前的那个li添加current

 */
  
 
function banner(argument){
	//body
	//1.获取变量
	//屏幕的宽度
	var width = document.body.offsetWidth;
	//获取轮播图的ul
	var moveUl = document.querySelector('.banner-images');
	//索引的li标签
	var indexLiArr = document.querySelectorAll('.banner-index li');
	//定义index记录当前的索引值
	var index = 0;
	//开启定时器
	var timeid = setInterval(function(){
		//累加
		index++;
	    //判断
	    if(index >= 9){
	    	index = 1;
	    }
	    //修改ul的位置
	    //x正方向是右边
	    moveUl.style.transform = 'translateX('+index*width*-1+'px)';
	    //修改li标签的外观
	    for(var i=0;i<indexLiArr.length;i++){
	    	indexLiArr[i].className = '';
	    }
	    //为当前的li添加
	    indexLiArr[index-1].className = 'current';
	}, 1000);
	
}
