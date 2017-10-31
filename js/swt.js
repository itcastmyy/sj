document.write('<script type="text/javascript" src="js/jquery.min.js"></script>');
document.write('<div style="display:none;height:0px"><img src="images/act.png"><img src="images/act1.png"><img src="images/phone.png"><img src="images/zx.png"><img src="images/index.png"></div>')
//商务通轨迹
document.write('<script language="javascript" src="http://kau.zoossoft.net/JS/LsJS.aspx?siteid=kau83879408&float=1&lng=cn"></script>');

var pic='tc'
// JavaScript Document
document.write('<script language="javascript" src="http://kau.zoossoft.net/JS/LsJS.aspx?siteid=kau83879408&float=1&lng=cn"></script>');

document.write('<script language="javascript" src="js/gjgz.js"></script>')
// JavaScript Document
document.write('<img src="images/footer_bottom.png" height="0px" width="0px" style="display:none";/>')	
if(pic=='tc'){
document.writeln("<div class=\"swtCenter translateXY\" style='height:255px;'>");
}
else{document.writeln("<div class=\"swtCenter translateXY\" style='height:230px;'>");}

/*document.writeln("<div class=\"Christmas_hats absolute\"></div>");*/
document.writeln("    	<a href=\"javascript:void(0)\" target='_self' onclick=\"hideswt()\" class=\"closeBtn_swt absolute\"><img src='/templets/201412/js/swt/images/closeBtn_swt.png'></a>");
//document.writeln("    	<div class='swt_logo'><img src='/templets/201412/js/swt/images/swt_logo.png'></div>");
document.writeln("<img src='/templets/201412/js/swt/images/swt_"+pic+".jpg' class='swttp'>");
document.writeln("        <div class=\"swt_lists absolute\">");
document.writeln("        	<a href=\"tel:027-86785799\"   class=\"swt_list1\"><i class=\"swtCallIcon\" ><img src='/templets/201412/js/swt/images/footerLink3.png'></i><em>拨打电话</em></a>");
document.writeln("            <a href=\"javascript:void(0)\" onclick=\"openZoosUrl('chatwin','&amp;e=swt2');LR_HideInvite();;return false;\" class=\"swt_list2\"><!--<i class=\"swtLinkCounter\" id=\"swtLinkCounter\" ></i>--><i class=\"swtLinkIcon\"><img src='/templets/201412/js/swt/images/footerLink2.png'></i><em>在线咨询</em></a>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("<link href=\"css/style.css\" type=\"text/css\" rel=\"stylesheet\"/>");


function tel(){
	var tel = $("[name='tel']").val();
		if(!(/^1[34578]\d{9}$/.test(tel))){ 
			alert("您输入的手机号码有误");  
			return false; 
		} 
	 else{window.location.href='http://kau.zoossoft.net/LR/Chatpre.aspx?siteid=KAU83879408&'+'&e='+'弹窗电话：'+tel}
	}

/*随机数*/
/*num=Math.round(Math.random()*4+16);*/
//中间弹窗
setTimeout(openMswt,20000);


function openMswt(){
			$(".swtCenter").show(0);
			$("#swtLinkCounter").text(num);
			/*$("#pfwx").hide();*/
}
function hideswt(){
	$(".swtCenter").hide(0);
	/*setTimeout('toolshow()',5000);*/
	setTimeout(openMswt,25000);
}
function swt_tel(val){
	 $(val).attr('placeholder','')
}
/*商桥*/
/*
function openZoosUrl()
	{
		var lujin="http://p6.qiao.baidu.com/im/index?siteid=2238899&ucid=3718948="+window.location.host+"&p="+window.location.href;
		window.open(lujin);
	}*/

document.write('<script type="text/javascript" src="js/swiper.min.js"></script>');
/*商务通左侧*/
/*
document.write('<div id="swtLeft">  <a href="javascript:void(0);" onclick="openZoosUrl(\'chatwin\',\'&amp;e=swtleft\');LR_HideInvite();;return false;"><img src="/templets/201412/js/swt/images/yhswt.png"></a></div>');*/
/*商务通右侧*/
/*
document.write('<script language="javascript" src="/templets/201412/js/zctc.js"></script>')
/*
document.write('<div id="swtright" style="display:none"><a href="javascript:void(0);" onclick="openZoosUrl(\'chatwin\',\'&amp;e=swtright\');LR_HideInvite();;return false;">点<br>击<br>免<br>费<br>咨<br>询</a></div>');
/*document.write('<div id="swtright" onclick="leftclick()"><a   target="_self">点<br>击<br>免<br>费<br>回<br>电</a></div>');*/
//判断页面
document.write('<script type="text/javascript" src="js/footswt.js"></script>');
/*
var seturl=window.location.href;
if(seturl.indexOf("/project/bb") >0){
	document.write('<script type="text/javascript" src="/templets/201412/js/footswt.js"></script>');
}
else if(seturl.indexOf("/project/xb") >0){
	document.write('<script type="text/javascript" src="/templets/201412/js/footswt.js"></script>');
}
else if(seturl.indexOf("/project/yb") >0){
	document.write('<script type="text/javascript" src="/templets/201412/js/footswt.js"></script>');
}else if(seturl.indexOf("/project/wzx") >0){
	document.write('<script type="text/javascript" src="/templets/201412/js/footswt.js"></script>');
}*/