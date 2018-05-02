var this_img = 0; // 记录当前显示的图片索引值
var img_num = 5;  // 图片总数
var interval_id = null; // 定时器ID
var interval_value = 1000;

window.onload = function() {
	var thumbs = document.getElementById("thumbs");

	// 设置大图片的鼠标悬停事件
	var display = document.getElementById("display");
	display.onmouseover = function(){
		window.clearInterval(interval_id);
	}
	display.onmouseout = function(){
		interval_id = window.setInterval(autoChangeImg,interval_value);
	}

	interval_id = window.setInterval(autoChangeImg,interval_value);
	
	// 图片变换
	//el = thumbs.children[this_img]
	function changeImg(el){
		var img_src = el.children[0].src;
		var display_img = document.getElementById("display_img");
		var display_img_src = img_src.replace('thumb_', '');
		display_img.src = display_img_src;

		// 设置当前显示图片的小图片为激活状态
		for (i=0;i<thumbs.children.length;i++){
			thumbs.children[i].className = " ";
		}
		el.className = "active";

		// console.log(img_src);
		// 获取当前图片的索引值
		this_img = img_src.slice(-5,-4) - 1;
		// console.log(this_img);
	}

	// 设置小图片们的鼠标悬停事件
	for (i=0;i<thumbs.children.length;i++){
		thumbs.children[i].onmouseover = function(){
			changeImg(this);
			window.clearInterval(interval_id);
		}
		thumbs.children[i].onmouseout = function(){
			this_img = (this_img+1) % img_num;
			interval_id = window.setInterval(autoChangeImg,interval_value);
		}
	}

	// 设置定时器的执行函数
	function autoChangeImg(){
		changeImg(thumbs.children[this_img]);
		// console.log("auto-" + this_img);
		this_img = (this_img+1) % img_num;
	}
}	


