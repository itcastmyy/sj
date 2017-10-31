//微信聊天界面
wechatBox();

function wechatBox(){

	document.writeln("<style>");
	document.writeln("/*#dbfoot{display:none}*/");
	document.writeln("#pfwx .all_mid{box-sizing:border-box;-webkit-box-sizing:border-box;margin:0 auto;font-family:\'微软雅黑\';font-size:14px;}");
	document.writeln("#pfwx .topTips{z-index: 4;}");
	//document.writeln(".ly-header{max-width:32rem;}");
	document.writeln("#pfwx .ly-header nav{height:40px;background:#393a3f;margin:0px}");
	document.writeln("#pfwx .ly-header nav a i{float:right;width:1px;height:20px;margin:10px 0 0 0;background:#2e2e32}");
	document.writeln("#pfwx .ly-header nav p{color:#FFF;font-size:16px;line-height:40px;text-indent:10px;}");
	document.writeln("#pfwx .ly-header nav a:nth-child(2){float:right;width:50px;height:40px;background:url(/templets/201412/images/wechatn.png) no-repeat scroll 14px -42px;}");
	document.writeln("#pfwx .ly-section1{background:#ebebeb; padding: 5px 0 5px 0;}");
	document.writeln("#pfwx .ly-section1 .line{margin:0 0 0 10px;}");

	document.writeln("#pfwx .ly-section1 .left{float:left;max-width:90%;}");

	document.writeln("#pfwx .ly-section1 .left div{position:relative;margin:0 0 0 55px;padding:5px;background:#FFF;color:#323232;border:1px solid #d5d5d5; border-radius:6px;}");

	document.writeln("#pfwx .time {font-size:13px;color:#fff; text-align: center; margin-top:5px;margin-left: 45%;border-radius: 3px; width: 40px;height:20px;line-height:20px;background: #ccc;overflow:hidden;}");

	document.writeln("#pfwx .ly-section1 .left div i{position:absolute;top:5px;left:-20px;width:20px;height:20px;background:url('/templets/201412/images/wechatn.png') no-repeat scroll 0 -200px;transform:rotate(-180deg)}");

	document.writeln("#pfwx .ly-section1 .left img{float:left;margin:0 5px 0 0; width:45px !important;}");

	document.writeln("#pfwx .ly-section1 .left div img{float:none; width:26px !important; vertical-align: middle;}");

	document.writeln("#pfwx .ly-section1 figure{ width:95%; margin:3px auto;overflow:hidden; border-bottom:1px solid #CCCCCC;}");

	document.writeln("#pfwx .ly-section1 .zzh{ width:100%; float:left; display:block; margin-bottom:15px;}");

	document.writeln("#pfwx .ly-section1 figcaption{ width:68%; float:left; margin-left:2%;}");



	document.writeln("#pfwx .ly-footer{height:50px;background:#FFF;border-top:1px solid #bfbfbf}");

	document.writeln("#pfwx .ly-footer .azf1 a{float:left;width:50px;height:50px;background:url('/templets/201412/images/wechatn.png') no-repeat scroll 9px -89px;}");

	document.writeln("#pfwx .ly-footer .azf2 textarea{float:left;width:60%;height:36px;margin:7px 0 0 0px;color:#000;font-size:18px;line-height:35px;border:none;border-bottom:1px solid #d8d8d8;transition:0.3s;resize:none;overflow-y:auto;outline:none;}");

	document.writeln("#pfwx .ly-footer .azf2 textarea:focus{border:none;border-bottom:1px solid #45c01a;}");

	document.writeln("#pfwx .ly-footer .azf2 textarea.on{border-bottom:#45c01a}");

	document.writeln("#pfwx .ly-footer .azf2 i{}");

	document.writeln("#pfwx .ly-footer .azf3 a{float:right; margin-right:10px;width:65px;height:35px;margin-top:-40px;margin:7px 5px 0 0;background:#45c01a;color:#FFF;text-align:center;line-height:35px;border-radius:5px;cursor:pointer;transition:0.3s;}");

	document.writeln("#pfwx .ly-footer .azf3 a:hover{background-color:#3aa814;}");

	document.writeln("#pfwx .ly-clear{clear:both;}");

	document.writeln("#pfwx .ly-hide{display:none;}");

	document.writeln("#pfwx .ly-animation-bell{display:inline-block;color:#F00;transition:0.5s;}");

	document.writeln("#pfwx .ly-animation-bell.on{animation:ly-animation-bell 0.5s;}");

	document.writeln("#pfwx{width:100%;z-index:9999999;left:0;bottom:0;position:fixed;display:none;}");

	document.writeln("#pfwx .closePop {line-height: 35px;font-size: 30px;text-decoration: none; color: #fff;text-align: center;float: left; width: 50px; height: 40px;background:url('/templets/201412/images/wechatn.png') no-repeat scroll 10px 12px;}");
    document.writeln("#pfwx dl{margin:5px 0;}");
	document.writeln("#pfwx .closePop img{ margin:2px auto;display:block;}");

	document.writeln("@keyframes ly-animation-bell{");

	document.writeln("    0%{transform:rotate(-5deg);}");

	document.writeln("    20%{transform:rotate(10deg);}");

	document.writeln("    40%{transform:rotate(-15deg);}");

	document.writeln("    60%{transform:rotate(20deg);}");

	document.writeln("    80%{transform:rotate(-15deg);}");

	document.writeln("    100%{transform:rotate(10deg);}");

	document.writeln("}");


	document.writeln("</style>");

	document.writeln("<div id=\'dbfoot\' >");
	
	document.writeln("<div class=\'all_zx\' id=\'pfwx\'>");

	document.writeln("<div class=\'all_mid\'>");

	document.writeln("<div class=\'ly-header\'>");

	document.writeln("<a onclick=\"toolclose();\" target=\'_self\' class=\'closePop\'></a>");

	document.writeln("    <nav>");

	document.writeln("        <a><i></i></a>");

	/*document.writeln("        <a onclick=\"openZoosUrl(\'chatwin\',\'&e=\'+escape(escape(\'&#24213;&#37096;&#24377;&#31383;&#95;&#21491;&#19978;&#35282;')));return false;\" href=\"javascript:;\"></a>");*/
     document.writeln("        <a onclick=\"toolclose();\" href=\"javascript:;\" target='_self'></a>");
	 
	document.writeln(" <p>在线解答</p>");

	document.writeln("    </nav>");

	document.writeln("</div>");

	document.writeln("");

	document.writeln("<div id=\"toopl\" class=\"shadow\"></div>");

	document.writeln("<section class=\"ly-section1\"  id=\'frist\'>");

	document.writeln("");

	document.writeln("");

	document.writeln("<div id='now4' class='time'>11:14:20</div>");

	document.writeln("<dl id=\"tools2\">");

	document.writeln("    <div class=\"line ly-hide\" >");

	document.writeln("        <div class=\"left\">");

	document.writeln("            <img src=\"/templets/201412/images/zficon.jpg\" width=\"45px\">");

	document.writeln("            <div>");

	document.writeln("                <i></i>");

	document.writeln("            </div>");

	document.writeln("        </div>");

	document.writeln("        <div class=\"ly-clear\"></div>");

	document.writeln("    </div>");

	document.writeln("</dl>");

	document.writeln("<dl id=\"tools3\">");

	document.writeln("    <div class=\"line ly-hide\" >");

	document.writeln("        <div class=\"left\">");

	document.writeln("            <img src=\"/templets/201412/images/zficon.jpg\" width=\"45px\">");

	document.writeln("            <div>");

	document.writeln("                <i></i>");

	document.writeln("            </div>");

	document.writeln("        </div>");

	document.writeln("        <div class=\"ly-clear\"></div>");

	document.writeln("    </div>");

	document.writeln("</dl>");

	document.writeln("</section>");

	document.writeln("");

	document.writeln("<div class=\'ly-footer\'>");

	document.writeln("    <div class=\'azf1\'><a href=\'tel:027-86785799\'></a></div>");

	document.writeln("    <div class=\'azf2\'>");

	document.writeln("        <textarea placeholder=\"\"></textarea>");

	document.writeln("        <i></i>");

	document.writeln("    </div>");

	document.writeln("    <div class=\'azf3\'><a>发送</a></div>");

	document.writeln("</div>");

	document.writeln("</div>");

	document.writeln("</div>");
    document.writeln("</div>");


	// 调用微信方法-开始

	var GetQueryString = function ($name){

		var $index=document.referrer.indexOf($name+"="),$e='';

		if($index>1){

			$e=document.referrer.substring($index+$name.length+1);

			if(($index=$e.indexOf("&"))>0){
				$e=$e.substring(0,$index);
			}
			else
			{
				$e='';
			}

		}

		return $e;

	}



	// 调用方法

	var $wd=GetQueryString("wd");

	if($wd&&$wd.length>0){}else{$wd=GetQueryString("word")}

	if($wd.length > 0){$wd = decodeURI($wd);}
	if($wd&&$wd.length>0&&$wd.indexOf('牙科')>-1){

		$line1='您好，有什么需要咨询的请讲！';

		$line2='希望能帮您解答！<img src="/templets/201412/images/smile0.gif" class="ly-animation-bell on">';

	}else if($wd&&$wd.length>0&&$wd.indexOf('医院')>-1){

		$line1='您好，有什么需要咨询的请讲！';

		$line2='希望能帮您解答！<img src="/templets/201412/images/smile0.gif" class="ly-animation-bell on">';

	}else if($wd&&$wd.length>0){

		$wd=decodeURIComponent($wd);

		$line1='关于【“'+$wd+'”】的问题,我帮您解答疑问！';

		$line2='您想了解什么，您请说 <img src="/templets/201412/images/emoji.gif">';

	}else{

		$line1='您好，有什么需要咨询的请讲！';

		$line2='希望能帮您解答！<img src="/templets/201412/images/smile0.gif" class="ly-animation-bell on">';

	}


	$('.ly-section1 .line:eq(0) .left div').html("<i></i>"+$line1);

	$('.ly-section1 .line:eq(1) .left div').html("<i></i>"+$line2);

	$(".ly-footer div:last a").on("click",function(){
        openZoosUrl('chatwin','&msg='+encodeURIComponent($(".ly-footer textarea").val())+'&e=foot3')
		/*openZoosUrl('chatwin','&msg='+encodeURIComponent($(".ly-footer textarea").val())+'&e=%e6%90%9c%e7%b4%a2%e5%85%b3%e9%94%ae%e8%af%8d%ef%bc%9a['+($wd||'')+"],客人："+encodeURIComponent($(".ly-footer textarea").val()));*/
		
	});

	setTimeout(function(){$('.ly-section1 .line:eq(0)').fadeIn(100)},300);

	setTimeout(function(){$('.ly-section1 .line:eq(1)').fadeIn(200)},3000);



	$(".ly-section1 .left img").on("click").on("click",function(){

		openZoosUrl('chatwin','&msg='+encodeURIComponent($(".ly-footer textarea").val())+'&e=foot3');
	})



	$(".ly-header nav a:eq(0)").on("click").on("click",function(){

		window.open('/');

	})



	/*$(".ly-header nav a:eq(1)").on("click").on("click",function(){

		openZoosUrl('chatwin','&msg='+encodeURIComponent($(".ly-footer textarea").val())+'&e=foot3')
	})*/



	setTimeout(function(){

		$(".ly-section1 .line:last .left div img").addClass("ly-animation-bell").addClass("on");

	},6000);

	// 调用微信方法-结束



	var now = new Date();

	var hh = now.getHours();

	var mm = now.getMinutes();

	var date4 = document.getElementById("now4");

	GDW = function (obj) {if (obj < 10) return "0" + obj; else return obj;}

	date4.innerHTML = GDW(hh) + ":" + GDW(mm) ;



	var frist = document.getElementById("pfwx");

	var toopl = document.getElementById("toopl");

	var tools2 = document.getElementById("tools2");

	var tools3 = document.getElementById("tools3");



	//控制弹出时间

	setTimeout("toolshow()", 15000);

	toolshow = function() {

		frist.style.display = "block";

		tools2.style.display = "none";

		tools3.style.display = "none";

		setTimeout(toolshow2, 0)

	}



	toolshow2 = function() {

		tools2.style.display = "block";

		setTimeout(toolshow3, 2000);

	}

	toolshow3 = function() {

		tools3.style.display = "block"

	}



	toolclose = function() {

		frist.style.display = "none";

		toopl.style.display = "none";

		tools2.style.display = "none";

		tools3.style.display = "none";
		setTimeout("toolshow()",20000);
		/*setTimeout("openMswt()",8000);*/

		/* history.back(-1); */
		

	}	
};





