window.onresize = function(){
	var width=document.body.clientWidth;
	var head = document.getElementById('head');
	if(width<=1200){
	    head.style.width = "1200px";
	}
	if(width>1200){
		head.style.width = "100%";
	}
}

window.onload=function(){
	var wrap=document.getElementById('wrap'),
 	pic=document.getElementById('pic').getElementsByTagName('li'),
 	list=document.getElementById('list').getElementsByTagName('li'),
 	index=0,
 	timer=null;
 
 	// 定义并调用自动播放函数
 	timer = setInterval(autoPlay, 2000);
 
 	// 鼠标划过整个容器时停止自动播放
 	wrap.onmouseover = function () {
 		clearInterval(timer);
 	}
 
 	// 鼠标离开整个容器时继续播放至下一张
 	wrap.onmouseout = function () {
 		timer = setInterval(autoPlay, 2000);
 	}
 	// 遍历所有数字导航实现划过切换至对应的图片
 	for (var i = 0; i < list.length; i++) {
 		list[i].onmouseover = function () {
 			clearInterval(timer);
 			index = this.innerText - 1;
 			changePic(index);
 		};
 	};
 
 	function autoPlay () {
 		if (++index >= pic.length) index = 0;
 		changePic(index);
 	}
 
	// 定义图片切换函数
 	function changePic (curIndex) {
 		for (var i = 0; i < pic.length; ++i) {
 			pic[i].style.display = "none";
 			list[i].className = "";
 		}
 		pic[curIndex].style.display = "block";
 		list[curIndex].className = "on";
 	}
 
 };


 function changeOpacity(i,j){
 	var hi = document.getElementById(i);
 	var hj = document.getElementById(j);
 	hi.style.opacity = 0.1;
 	hj.style.display = "block";
 }

 function recoverOpacity(i,j){
 	var hi = document.getElementById(i);
 	var hj = document.getElementById(j);
 	hi.style.opacity = 1;
 	hj.style.display = "none";
 }



function appear(){
	catalogue = document.getElementById('catalogue');
	catalogue.style.display = 'block';
	catalogue.style.animationName ="move";
	catalogue.style.animationDuration =" 3s";
}

function disappear(){
	catalogue = document.getElementById('catalogue');
	catalogue.style.display = 'none';
	catalogue.style.opacity = 0;
	
}