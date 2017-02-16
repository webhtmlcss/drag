function drag(id){
	var obj = document.getElementById(id);
	obj.onmousedown = function(e){
		var disX = 0,
			disY = 0;
		disX = e.pageX - obj.offsetLeft;
		disY = e.pageY - obj.offsetTop;
		document.onmousemove = function(e){
			obj.style.left = e.clientX - disX + 'px';
			obj.style.top = e.clientY - disY + 'px';
		}
		return false;
	}
}
