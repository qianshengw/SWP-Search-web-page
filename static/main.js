//设置背景图片
document.body.style.backgroundImage = "url(./static/beijing.jpg)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment='fixed'
document.getElementsByClassName("qhbeijing")[0].onclick=()=>{
	var qhbj=Math.round(Math.random()*9)
	document.body.style.backgroundImage=`url(./static/${qhbj}.png)`
}
//列出搜索引擎
var datss = {
    search_method: [
        {
            "name": "百度",
            "icon": "baidu",
            "url": "https://www.baidu.com/s?wd=%s"
        },
        {
            "name": "必应",
            "icon": "bing",
            "url": "https://cn.bing.com/search?q=%s"
        },
        {
            "name": "谷歌",
            "icon": "google",
            "url": "https://www.google.com/search?q=%s"
        },
        {
            "name": "360",
            "icon": "360so",
            "url": "https://www.so.com/s?q=%s"
        },
        {
            "name": "搜狗",
            "icon": "sogou",
            "url": "https://www.sogou.com/web?query=%s"
        },
		{
		    "name": "yandex",
		    "icon": "yandex",
		    "url": "https://online.yandex.com/search?text=%s"
		},
		{
		    "name": "bilibili",
		    "icon": "bili",
		    "url": "https://search.bilibili.com/all?keyword=%s"
		},
    ]
}
//界面时钟
var shizhongs=(() =>{
    var date=new Date();
    var year =date.getFullYear();
    var month =date.getMonth()+1;
    var day =date.getDate();
    var time_h =date.getHours();
    var time_m =date.getMinutes();
    var time_s =date.getSeconds();
    let Week ={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"};
    time_h=time_h<10?"0"+time_h:time_h;
    time_m=time_m<10?"0"+time_m:time_m;
    time_s=time_s<10?"0"+time_s:time_s;
    var sc=document.getElementsByClassName('shizhong');
    time_wan='现在是'+year+'年'+month+'月'+day+'日'+Week[date.getDay()]+time_h+':'+time_m+':'+time_s;
	zshsswz=time_h;
    sc[0].innerHTML=time_wan;
})();           
setInterval(        
		()=>{
		    var date=new Date();
		    var year =date.getFullYear();
		    var month =date.getMonth()+1;
		    var day =date.getDate();
		    var time_h =date.getHours();
		    var time_m =date.getMinutes();
		    var time_s =date.getSeconds();
		    let Week ={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"};
		    time_h=time_h<10?"0"+time_h:time_h;
		    time_m=time_m<10?"0"+time_m:time_m;
		    time_s=time_s<10?"0"+time_s:time_s;
		    var sc=document.getElementsByClassName('shizhong');
		    time_wan='现在是'+year+'年'+month+'月'+day+'日'+Week[date.getDay()]+time_h+':'+time_m+':'+time_s;
			zshsswz=time_h;
		    sc[0].innerHTML=time_wan;
        }
    ,
    500
    )
//设置浏览器初始引擎
yingqingm="百度";
//选搜索引擎渐显特效并判断是否切换默认引擎
document.getElementsByClassName('search-select')[0].onclick=()=>{
	if(document.getElementById('xuanxiang').style.display=='none' || document.getElementById('xuanxiang').style.display==''){
		opac=0;
		document.getElementById('xuanxiang').style.display='block';
		var fadein=setInterval(
			() => {			
				opac += 0.08;
				document.getElementById('xuanxiang').style.opacity = opac;
				if (opac>= 1) {
					clearInterval(fadein);
				}
			}, 10);
	}else{
		var fadeout=setInterval(
			() => {								
				opac -= 0.04;
				document.getElementById('xuanxiang').style.opacity = opac;
				if (opac<= 0) {
					clearInterval(fadeout);
				}
			}, 5);
		setTimeout("document.getElementById('xuanxiang').style.display='none'",400)
	}
}
//搜索引擎切换
let ssyqqh=document.getElementsByName('sspai')
for(i=0;i<=ssyqqh.length-1;i++){
	ssyqqh[i].onmouseover=function(){
		this.style.backgroundColor='pink';
		//点击事件进行图标切换
		this.onclick=function(){
			yingqingm = this.innerHTML.slice(7,-9);//对选中的搜索引擎进行储存
			var ssyqwzpipei=()=>{
				for(o=0;o<=datss.search_method.length-1;o++){
					if(datss.search_method[o].name==yingqingm){
						var adyingqingh=o;
						return adyingqingh;
					}
				}
			}
			document.getElementById('datess').className=`iconfont icon-${datss.search_method[ssyqwzpipei()].icon}`
			//退出
			var fadeout=setInterval(
				() => {								
					opac -= 0.04;
					document.getElementById('xuanxiang').style.opacity = opac;
					if (opac<= 0) {
						clearInterval(fadeout);
					}
				}, 5);
			setTimeout("document.getElementById('xuanxiang').style.display='none'",400)
		}
	}
	//移出
	ssyqqh[i].onmouseout=function(){
		this.style.backgroundColor='';
	}
}
//点击搜索
document.querySelector('input').style.outline='none';
//搜索事件
sousuojinxing=()=>{
	var xianzaisousuo = document.querySelector('input').value;	
	ssyqwzpipei=()=>{//对搜索引擎进行匹配
		for(o=0;o<=datss.search_method.length-1;o++){
			if(datss.search_method[o].name==yingqingm){
				var adyingqingh=o;
				return adyingqingh;
			}
		}
	}
	window.open(datss.search_method[ssyqwzpipei()].url.replace('%s',xianzaisousuo))
}
document.querySelector('button').onclick=()=>sousuojinxing()//按下搜索键
document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        sousuojinxing();
		e.preventDefault();
    }
})//按下回车键
//判断时间
function getTimeOfDay(hour) {
    if (hour < 6) {
		return "凌晨该睡觉了";
    } else if (hour < 12) {
        return "早上好";
    } else if (hour < 18) {
        return "下午好";
    } else {
        return "晚上好";
    }
}
var timeOfDay = getTimeOfDay(zshsswz);
document.getElementById("scwy").innerHTML = timeOfDay;
//打开收藏
document.getElementById('scwy').onclick=()=>{
	if(document.querySelector('main').style.marginTop=="500px"){
		document.querySelector('main').style.marginTop=""
		document.getElementById("sswyd").style.display='none'
	}else{
		document.querySelector('main').style.marginTop="500px"
		document.getElementById("sswyd").style.display='block'
		var opacsszy = 0
		var sszyxian=setInterval( () => {
			 opacsszy += 0.04;
			document.getElementById('sswyd').style.opacity = opacsszy;
			if (opacsszy>= 1) {
				clearInterval(sszyxian);
			}
		}, 5);
		
		
	}
		
}

			//拖拽框
var modal = document.querySelector(".msosdal")
var close = document.querySelector(".close")
var login = document.querySelector("#tjscwz")
var bg = document.querySelector(".bg");
login.addEventListener('click',function(){
	modal.style.display='block';
	bg.style.display='block';
	modal.style.backgroundColor='white';
	
});

close.addEventListener('click',function(){
	modal.style.display='none';
	bg.style.display='none';
	
});
modal.addEventListener('mousedown',function(e){
	var x =e.pageX-modal.offsetLeft;
	var y =e.pageY-modal.offsetTop;
	var move =function (e){
		modal.style.left =e.pageX-x+'px';
		modal.style.top =e.pageY-y+'px';
	};
	document.addEventListener('mousemove',move);
		document.addEventListener('mouseup',function(e){
			document.removeEventListener('mousemove',move);
		});
});
//删除
var as = document.getElementsByName('hnhnhn')
			for (var i = 0; i < as.length; i++) {
			  as[i].onclick = function () {
			    var cc=document.querySelector('#sswyd')
				cc.removeChild(this.parentNode);
				
			  }
			}
//添加收藏网站
document.getElementById('qd').addEventListener('click',function(){
	var wzwzv=document.getElementById('wzwz').value;
	var wzmcv=document.getElementById('wzmc').value;
	var plyuansu=document.createElement('div');
	var sjtp=Math.round(Math.random()*9)
	plyuansu.innerHTML=`
							<div style=" float:left;"><a href="${wzwzv}" target="_blank"><img src="static/picture/${sjtp}.jpg" style="margin: 16px 0px 16px 16px; width: 60px; height: 60px; border-radius: 50%;"/></a></div>
							<div style=" float:left; margin-top: 24px;"><b style=" font-size: 32px;">${wzmcv}</b></div>
							<a class="circle" name="hnhnhn" title="删除" style="width: 16px; height: 16px; float:left; margin-top: 16px; margin-left: 8px; font-size: 8px;">删除</a>
						`
	plyuansu.style.display='inline-block';
	plyuansu.style.margin='4px 0px 4px 20px'
	plyuansu.className="scd";
	document.getElementById('sswyd').insertBefore(plyuansu,document.getElementById('tj'))
	//删除
	var as = document.getElementsByName('hnhnhn')
				for (var i = 0; i < as.length; i++) {
				  as[i].onclick = function () {
				    var cc=document.querySelector('#sswyd')
					cc.removeChild(this.parentNode);
					
				  }
				}
	});