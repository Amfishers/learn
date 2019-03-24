function LimitDrag(id)
{
	Drag.call(this,id);  //属性继承 LimitDrag继承Drag的属性
}

for( var i in Drag.prototype)
{
	LimitDrag.prototype[i] =  Drag.prototype[i]; //继承Drag的原型
}

LimitDrag.prototype.fnMove=function (ev)
{
	var oEvent=ev||event;
	var l=oEvent.clientX-this.disX;
	var t=oEvent.clientY-this.disY;

	if(l<0){
		l=0;
	}
	else if (l>document.documentElement.clientWidth-this.oDiv.offserWidth) 
	{
		l=document.documentElement.clientWidth-this.oDiv.offserWidth;
	}

	this.oDiv.style.left=l+"px";
	this.oDiv.style.top=t+"px";
}
