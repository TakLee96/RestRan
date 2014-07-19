var items = [{name:"苏氏牛肉面",lat:"116.469316",lng:"39.962848",addr:"北京朝阳区霄云路(近鹏润大厦)",tel:"(010)83799802"},
			{name:"吉野家",lat:"116.469371",lng:"39.962958",addr:"北京朝阳区霄云路35号(国航大厦对面)",tel:"(010)64669915"},
			{name:"DQ",lat:"116.468894",lng:"39.962792",addr:"北京市朝阳区霄云路35号（6-5）原海华城中餐厅一层",tel:"(010)64669095"},
		    {name:"红薯地瓜坊",lat:"116.470456",lng:"39.964023",addr:"北京朝阳区霄云路霞光里30号院1号楼(近国航大厦)",tel:"(010)64632968"},
		    {name:"周黑鸭",lat:"116.465013",lng:"39.963933",addr:"北京朝阳区东三环中心24号B2楼BHG超市熟食区",tel:"4001717917"},
		    {name:"永丰饺子馆",lat:"116.470596",lng:"39.964113",addr:"朝阳区霄云路霞光里30号院1号楼1楼(近鹏润大厦)",tel:"18701091767"},
		    {name:"驴肉火烧",lat:"116.468168",lng:"39.963836",addr:"朝阳区霞光里1号(移动公司三元桥营业厅东侧)",tel:""},
		    {name:"晓林鲜果",lat:"116.473922",lng:"39.965302",addr:"霄云路甲26号海航大厦底商HiShop超市内	",tel:"13520738752"},
		    {name:"711便利店",lat:"116.471082",lng:"39.964617",addr:"北京朝阳区霄云路霞光里30号院5号楼1楼",tel:"(010)64616914"},
		    {name:"桂林米粉",lat:"116.468867",lng:"39.962509",addr:"北京朝阳区三元桥霄云路36号国航大厦对面",tel:"(010)64688815"},
		    {name:"肯德基",lat:"116.471391",lng:"39.964839",addr:"朝阳区霄云路27号中国庆安大厦首层西侧",tel:"(010)64608554"},
		    {name:"香猪坊韩国烤肉（霄云路店）",lat:"116.468706",lng:"39.962357",addr:"朝阳区霄云路35号(现代汽车大厦北侧)",tel:"(010)57172118"},
		    {name:"香草香草",lat:"116.471535",lng:"39.965018",addr:"北京朝阳区东三环霄云路27号庆安大厦2楼",tel:"010-64685665"},
		    {name:"东来顺",lat:"116.473143",lng:"39.966421",addr:"朝阳区霄云路15号(女人街西侧200米路北)",tel:"010-64610844"},
		    {name:"杭州小笼包",lat:"116.470909",lng:"39.964797",addr:"朝阳区麦子店西街霞光里30号院同仁堂旁",tel:""},
		    {name:"Kro's Nest Pizza",lat:"116.463272",lng:"39.937321",addr:"北京朝阳区工体北路4号院机电研究院内(近三里屯)",tel:"(010)65535253"},
		    {name:"Coco茶饮",lat:"116.473753",lng:"39.962129",addr:"女人街步行街美食街Y15号",tel:"13811905388"},
		    {name:"山西风味小吃",lat:"116.474391",lng:"39.967742",addr:"北京市朝阳区",tel:""},
		    {name:"兰州拉面",lat:"116.468232",lng:"39.962571",addr:"北京朝阳区三元东桥霄云路35号(鹿港小镇院内左转,北京现代汽车大厦对面) ",tel:"(010)64668826"},
		    {name:"万福烤鸭",lat:"",lng:"",addr:"",tel:""},
		    {name:"巫山烤全鱼",lat:"116.482165",lng:"39.960622",addr:"亮马桥路59号",tel:"010-64615726,15810635858"},
		    {name:"永和大王",lat:"",lng:"",addr:"",tel:""},
		    {name:"香猪坊韩国料理",lat:"",lng:"",addr:"",tel:""},
		    {name:"面香",lat:"",lng:"",addr:"",tel:""},
		    {name:"金凤成翔",lat:"",lng:"",addr:"",tel:""},
		    {name:"大粥锅",lat:"",lng:"",addr:"",tel:""},
		    {name:"重庆麻辣烫",lat:"",lng:"",addr:"",tel:""},
		    {name:"砂锅米线",lat:"",lng:"",addr:"",tel:""},
		    {name:"羊蝎子大棒骨",lat:"",lng:"",addr:"",tel:""},
		    {name:"传奇酸辣粉",lat:"",lng:"",addr:"",tel:""},
		    {name:"沙县小吃",lat:"",lng:"",addr:"",tel:""},
		    {name:"麦多馅饼",lat:"",lng:"",addr:"",tel:""},
	     	{name:"苏皇肉夹馍酸奶",lat:"",lng:"",addr:"",tel:""},
	     	{name:"合利屋",lat:"",lng:"",addr:"",tel:""},
		    {name:"黄焖鸡米饭",lat:"",lng:"",addr:"",tel:""},
		    {name:"百年卤煮",lat:"",lng:"",addr:"",tel:""},
		    {name:"食立方",lat:"",lng:"",addr:"",tel:""},
		    {name:"山西刀削面",lat:"",lng:"",addr:"",tel:""},
		    {name:"霄云羊杂割",lat:"",lng:"",addr:"",tel:""}];
	
var index = 0;
var timer = 0;
var isActive = false;
var theButton = document.getElementById("roll");
var theItem;
function roll(){
		//To Do: Tell whether the queue is rolling, and start or stop the rolling respectively while changing the active state of the button.
		if (!isActive)
		{
			theButton.setAttribute("class", "btn btn-danger btn-lg btn-block active");
			isActive = true;
			$('.item').attr("class", "item btn btn-info btn-lg btn-block disabled");
			theButton.innerHTML="Click to Stop!!!";
			setTimer();
		}
		else
		{
			theButton.setAttribute("class", "btn btn-warning btn-lg btn-block");
			isActive = false;
			clearTimeout(timer);
			theItem.setAttribute("class", "item btn btn-success btn-lg btn-block");
			theButton.innerHTML="Click to Start!!!";
		}
}

function setTimer() {
		$(".item").animate({top:"-=50"}, 50);
		$("#" + (index % 4)).animate({top:"+=200"}, 0);					
		$("#" + (index % 4)).html(items[(index + 4) % 39].name);
		index++;
		theItem = document.getElementById("" + (index % 4 + 1) % 4);
		timer = setTimeout('setTimer()', 50);
}

function moreInfo(num) {
	if (index!=0)
	{
		num = (index + 1) % 39 /* Why plus 1, not 2??? */
		document.getElementById("myModalLabel").innerHTML = "Congratulations!";
		$("#modalText").show();
	}
	else
	{
		document.getElementById("myModalLabel").innerHTML = "Information";
		$("#modalText").hide();
	}
	document.getElementById("restName").innerHTML = items[num].name;
//Baidu Map API
	var map = new BMap.Map("container");
	map.centerAndZoom(new BMap.Point(items[num].lat,items[num].lng), 19);
	map.enableScrollWheelZoom();
	var marker=new BMap.Marker(new BMap.Point(items[num].lat,items[num].lng));
	map.addOverlay(marker);
	var licontent="<b>"+items[num].name+"</b><br>";
		licontent+="<span><strong>地址：</strong>"+items[num].addr+"</span><br>";
		licontent+="<span><strong>电话：</strong>"+items[num].tel+"</span><br>";
		licontent+="<span class=\"input\"><strong></strong><input class=\"outset\" type=\"text\" name=\"origin\" value=\"北京站\"/><input class=\"outset-but\" type=\"button\" value=\"公交\" onclick=\"gotobaidu(1)\" /><input class=\"outset-but\" type=\"button\" value=\"驾车\"  onclick=\"gotobaidu(2)\"/><a class=\"gotob\" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"®ion=北京"+"&amp;output=html\" target=\"_blank\"></a></span>";
	var hiddeninput="<input type=\"hidden\" value=\""+'北京'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"\" name=\"destination\" />";
	var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>"; 
	var opts1 = { width: 300 };

	var infoWindow = new BMap.InfoWindow(content1, opts1);
	marker.openInfoWindow(infoWindow);
	marker.addEventListener('click',function(){ marker.openInfoWindow(infoWindow);});
};

//Baidu Map API
function gotobaidu(type)
{
    if($.trim($("input[name=origin]").val())=="")
    {
        alert("请输入起点！");
        return;
    }else{
        if(type==1)
        {
            $("input[name=mode]").val("transit");
            $("#gotobaiduform")[0].submit();
        }else if(type==2)
        {    
            $("input[name=mode]").val("driving");        
            $("#gotobaiduform")[0].submit();
        }
    }
}   
