function drag(id){
	var obj = document.getElementById(id);
	obj.onmousedown = function(e){
		var disX = 0,
			disY = 0;
		disX = e.pageX - obj.offsetLeft;
		disY = e.pageY - obj.offsetTop;
		return false;
	}
}
