$(function(){
	//页脚滚动
	$(window).scroll(function() {
		var top=$(window).scrollTop();
		var win_h=$(window).height();
		var hr=$('#header_nav').offset().top+$('#header_nav').height();
		if(top >= win_h-200){
			/*$(".public_scollor_bar").stop().animate({"bottom":"0px"}, 100);*/
			/*$("#toptips").show();*/
			//$("#dbfoot").show();
			$("#swtright").fadeIn(300);
		}else{
			/*$(".public_scollor_bar").stop().animate({"bottom":"-100px"}, 100);*/
			/*$("#toptips").hide();*/
			/*$("#dbfoot").hide();*/
                       $("#swtright").fadeOut(300);
		}
	});


//导航主菜单部分
	var public_tool='<div class="ml_navc">导航</div><div id="public_nav_menu"><ul><li><a href="/"><span>返回首页</span></a></li><li><a href="/project/index.html"><span>服务项目</span></a></li><li><a href="/pingpai/basic.html"><span>明星中心</span></a></li><li><a href="/exp/index.html"><span>权威专家</span></a></li><li><a href="/pingpai/jsjl.html"><span>学术交流</span></a></li><li><a href="/pingpai/map.html"><span>来院地图</span></a></li><li><a href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();;return false;"><span>在线客服</span></a></li><li><a href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();;return false;"><span>JOINUS</span></a></li></ul></div><div id="public_nav_main" style="display:none"><div id="public_nav_focus"><img src="/templets/201412/images/b.jpg" alt=""></div><a id="public_join" href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();;return false;"></a><div id="public_back_return">x</div></div>';
	var s_width=$(window).width();
	var s_height=$(window).height();
	var normal_width=s_width;
	$("body").append(public_tool)
	// 展示焦点图
	$(".ml_nav").click(function() {
		$("#public_nav_main").animate({"left": "0px"},10);
		$("#public_nav_menu").animate({"bottom": "0"},200);
		$(this).animate({"left": "-200px"},100,function(){
			$("#public_nav_main").css({"width": normal_width+"px","display":'block'});
		});
	});
	$("#simple-menu").click(function() {
			$("#public_nav_main").animate({"left": "0px"},10);
			$("#public_nav_menu").animate({"bottom": "0"},200);
			$(this).animate(100,function(){
				$("#public_nav_main").css({"width": normal_width+"px","display":'block'});
			});
		});
	$("#more").click(function() {
			$("#public_nav_main").animate({"left": "0px"},10);
			$("#public_nav_menu").animate({"bottom": "0"},200);
			$(this).animate(100,function(){
				$("#public_nav_main").css({"width": normal_width+"px"});
			});
		});
	//退出焦点图
	$("#public_back_return").click(function() {
		$('.ml_navc').animate({"left": "5px"},100);
		$("#public_nav_main").animate({"left":s_width+"px","display":'none'},10);
		$("#public_nav_menu").animate({"bottom": "-20%"},200);
	});

});
//弹出微信
	var Wechat='<div id="wechat" class="none"><div id="wechat_bg"><div id="wechat_close">X</div></div><div id="wechat_img"><img src="/templets/201412/images/wechat.png"/></div></div>';
    $("body").append(Wechat);
	$("#wechat_bg").css({"height":window.screen.availHeight});
	$("#Wechatbtn").click(function(event) {
		$("#wechat").removeClass('none').addClass('block');
	});
	$("#wechat_bg").click(function(event) {
		$("#wechat").removeClass('block').addClass('none');
	});
	$("#wechat_close").click(function() {
			$("#wechat").removeClass('block').addClass('none');
	});
//头部弹窗
/*
function swt2(){
    var sHTML = [
        '<style type="text/css">',
        '#toptips{display: none;}.topTips { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; position: fixed; left:0; top: 0; width: 100%; z-index: 3000;-webkit-perspective: 600px; perspective: 600px;z-index: 21480; }',
        '.tipsInner {font-family: "Microsoft YaHei"; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-radius: 5px; -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); background: #000;-webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); opacity: 0; }',
        '.tipsInner a { text-decoration:none;display: block; position: relative; padding-left: 50px; color: #111; }',
        '.tipsInner img { position: absolute; left: 8px; top: 50%; margin-top: -17px; width: 36px; height: auto; padding-right: 5px; background: #000; }',
        '.tipsInner dl { margin:0; padding: 10px 5px; border-left: 1px solid #111; }',
        '.tipsInner dt { font-weight: bold;line-height:1em; font-size:13px;color:#fff}',
        '.tipsInner dd { margin:0; line-height: 1.2em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:12px; color:#fff}',
        '.showTip { visibility:visible; }',
        '.showTip .tipsInner { -webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }',
        '.hideTip { visibility:hidden; }',
        '.hideTip .tipsInner { -webkit-transform-origin: 0px 100%; transform-origin: 0px 100%; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); opacity: 0; }',
        '</style>',
        '<div class="topTips" id="toptips">',
        '   <div class="tipsInner">',
        '       <a onclick="openZoosUrl();return false;" href="javascript:void(0)" class="JS-SWT-LINK"  onclick="_czc.push([\'_trackEvent\',\'hk手机站顶部QQ\',\'点击量\'])">',

        '         <img src="/templets/201412/images/wx.png" alt="">',
        '         <dl>',
        '           <dt>微信<font style="font-weight:normal;font-size:0.9em;"> 在线</font></dt>',
        '           <dd>您好，我是五洲整形美丽顾问，需定制变美方案，请加我…</dd>',
        '         </dl>',
        '       </a>',
        '   </div>',
        '</div>'
    ].join('\r\n');
    var o = document.createElement('div');
    o.innerHTML = sHTML;
    while (o.firstElementChild) {
        document.body.appendChild(o.firstElementChild);

    };
    T = {
        hasClass: function(d, a) {
            var c = d.className.split(/\s+/);
            for (var b = 0; b < c.length; b++) {
                if (c[b] == a) {
                    return true
                }
            }
            return false
        },
        addClass: function(b, a) {
            if (!this.hasClass(b, a)) {
                b.className += " " + a
            }
        },
        removeClass: function(d, a) {
            if (this.hasClass(d, a)) {
                var c = d.className.split(/\s+/);
                for (var b = 0; b < c.length; b++) {
                    if (c[b] == a) {
                        delete c[b]
                    }
                }
                d.className = c.join(" ")
            }
        }
    };

    function Toptips(options) {
        this.init(options);
    };

    Toptips.prototype = {

        constructor: Toptips,

        init: function(options) {
            this.item = options.item;
            this.itemInner = options.item.children[0];
            this.loop = typeof options.loop == "undefined" ? true : options.loop;
            this.showTime = typeof options.showTime == "undefined" ? 5000 : options.showTime;
            this.hideTime = typeof options.hideTime == "undefined" ? 15000 : options.hideTime;
            this.showTimer = null;
            this.hideTimer = null;
            this.preTimer = null;
            this.item.style.WebkitTransition = this.item.style.transition = this.itemInner.style.WebkitTransition = this.itemInner.style.transition = "0.5s";
            var me = this;
            var initTimer = setTimeout(function() {
                me.showTip();
            }, 1000);
        },

        showTip: function() {
            var me = this;
            T.addClass(me.item, "showTip");
            T.removeClass(me.item, "hideTip");

            clearTimeout(me.hideTimer);
            me.showTimer = setTimeout(function() {
                me.hideTip();
            }, me.showTime);

        },

        hideTip: function() {
            var me = this;
            T.removeClass(me.item, "showTip");
            T.addClass(me.item, "hideTip");
            me.item.style.visibility = me.itemInner.style.visibility = "hidden";

            if (me.loop) {
                clearTimeout(me.showTimer);

                me.preTimer = setTimeout(function() {
                    me.item.style.visibility = me.itemInner.style.visibility = "visible";
                }, me.hideTime - 100);

                me.hideTimer = setTimeout(function() {
                    me.showTip();
                }, me.hideTime);

            }
        },

    };
    var toptip = document.getElementById("toptips");

    new Toptips({
        item: toptip,
        loop: true
    });
    return false;
    delete o;
}
setTimeout("swt2()",3000);*/

//头部弹窗2
/*
var tophtml='<style type="text/css">#header {margin-top: 40px;}#tophtm{background: #2c2540;max-width: 640px;margin: 0 !important;padding: 0 !important;height:45px}.top_wz{width: 40px;margin-left: 30px;float:left}.tophtm{ -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; position: fixed; top: 0; width: 100%; z-index: 3000;-webkit-perspective: 600px; perspective: 600px;z-index: 21480;height:40px }.tipsInner {font-family: "Microsoft YaHei"; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-radius: 5px;}.tipsInner dl { margin:0; padding: 10px 5px; border-left: 1px solid #111; }.tipsInner dt { font-weight: bold;line-height:1em; font-size:13px;color:#fff}.tipsInner dd { margin:0; line-height: 1.2em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:12px; color:#fff}.showTip { visibility:visible; }.showTip .tipsInner { -webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }.hideTip { visibility:hidden; }.hideTip .tipsInner { -webkit-transform-origin: 0px 100%; transform-origin: 0px 100%; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); opacity: 0; }.tophtm .anniu_input{position:relative;margin:0 105px 0px 40px;top:10px;}.tophtm .callbF_sub{float:left;width:80px;margin-left:25px;font-size: 14px;margin-top: 10px;color:#2c2540;background:#fff;border: 1px solid #6a7380;-moz-border-radius: 15px;-webkit-border-radius: 15px;border-radius: 15px;text-align: center;height:22px}.tophtm .top_wz img{width: 25px;margin-top: 8px;}.tophtm .callbF_text{float:left;width:70%;border: 1px solid #6a7380;-moz-border-radius: 15px;-webkit-border-radius: 15px;border-radius: 15px;background:#fff;height:22px;color: #999;padding-left: 20px;font-size:14px}</style><div class="tophtm" id="tophtm"> <div class="tipsInner"><div class="top_wz"><!--<img src="/templets/201412/js/swt/images/footerLink3.png">--></div><div class="anniu_input"><input class="callbF_text" id="tel" name="top_call" onclick="this.placeholder = \'\'" onblur="if(placeholder == \'\'){placeholder=\'请输入您的手机号码\'}" placeholder="请输入您的手机号码" type="text"></div><a class="callbF_sub" href="javascript:void(0)" onclick="top_call()" target="_self">免费回电</a></div></div>'


document.write(tophtml)*/

//头部弹窗3

    var url = window.location.href;
     var wxtc = "您好，我是五洲整形美丽顾问，需定制变美方案，请加我…"
     if(url.indexOf("/project/pfmr") > 0) {
		 
		 var wxtc = "您好，想要净白透亮的皮肤我帮您"
	 }
	 
    var sHTML = '<style type="text/css">#header {margin-top: 40px;}#toptips{display: document;}.topTips { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; position: fixed;  top: 0; width: 100%; z-index: 3000;-webkit-perspective: 600px; perspective: 600px;z-index: 21480;max-width: 640px; }.tipsInner {font-family: "Microsoft YaHei"; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-radius: 5px; -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); background: #fff;-webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }.tipsInner a { text-decoration:none;display: block; position: relative; padding-left: 50px; color: #111; }.tipsInner img { position: absolute; left: 8px; top: 50%; margin-top: -20px; width: 36px; height: auto; padding-right: 5px; background: #fff; }.tipsInner dl { margin:0; padding: 10px 5px; border-left: 1px solid #fff; }.tipsInner dt { font-weight: bold;line-height:1em; font-size:13px;color:#000;padding-bottom: 4px;}.tipsInner dd { margin:0; line-height: 1.2em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:12px; color:#000;}.showTip { visibility:visible; }.showTip .tipsInner { -webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }.hideTip { visibility:hidden; }.hideTip .tipsInner { -webkit-transform-origin: 0px 100%; transform-origin: 0px 100%; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); opacity: 1; }</style><div class="topTips" id="toptips">   <div class="tipsInner">      <a onclick="openZoosUrl(\'chatwin\',\'&e=top_wx\');return false;" href="javascript:void(0)" class="JS-SWT-LINK"  onclick="_czc.push([\'_trackEvent\',\'hk手机站顶部QQ\',\'点击量\'])"><img src="/templets/201412/images/wx.png" alt=""><dl><dt>微信<font style="font-weight:normal;font-size:0.9em;"> 在线</font></dt><dd>'+wxtc+'</dd></dl></a> </div></div>'
   document.write(sHTML)

function top_call(){
	var tel = $("[name='top_call']").val();
		if(!(/^1[34578]\d{9}$/.test(tel))){ 
			alert("您输入的手机号码有误");  
			return false; 
		} 
	 else{window.location.href='http://kau.zoossoft.net/LR/Chatpre.aspx?siteid=KAU83879408&'+'&e='+'top弹窗电话：'+tel}
	}
























//底部弹窗
 /*document.write('<script type="text/javascript" src="/templets/201412/js/xuanfu.js"></script>');*/
//商务通图片替换
//cnzz
/*
document.write('<div style="display:none;"><script src="https://s9.cnzz.com/z_stat.php?id=5405248&web_id=5405248" language="JavaScript"></script></div>');
/*
function swt_yc( )
{   
	var htmls='<div id="swtColse" onclick="LR_Hidemobileinvite(1);onlinerIcon1.hidden();swt_yc();"></div><img src="http://m.4000505027.com/images/mswtm.png" style="cursor:pointer" onclick="openZoosUrl();LR_HideInvite();"><a href="tel:027-86785799" id="call_tel">&nbsp;</a>'
	if($("#LRdiv0").css("display")=="none")
	{$("#LRdiv1").css("display");
    $("#LRfloater1").html(htmls);}
else{setTimeout("swt_yc( )",2000);
}
}
$(document).ready(function(){  
 setTimeout("swt_yc( )",9000);
})
*/
/*随机数*/
num=Math.round(Math.random()*4+16);
$(".swtCounter").text(num);
/*notice 通栏公告*/
function AutoScroll(obj){
			var objHeight = $(obj).height();
			$(obj).find("ul:first").animate({
				marginTop:-objHeight+"px"
			},500,function(){
					$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
			});
		};
setInterval(function(){AutoScroll("#noticeScroll")},4500);
var seturl=window.location.host;
/*文字大小*/
document.write('<script type="text/javascript" src="js/flexible.js"></script>');

document.write('<script type="text/javascript" src="js/TouchSlide.js"></script>');


/*项目文章*/

$(function(){
	var index;
$("#xmwzpp .ppnav li").click(function(){
			  index= $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(".changebox .change").eq(index).show("slow").siblings().hide("show");

			});
$(".content_xm .xm_nav .more").click(
	function()
		{
			$(".content_xm .xm_nav .changebox a").show("slow");
		    $(".content_xm .xm_nav .more").hide();
	});
})
//cnzz统计
//027imei
/*
if(seturl.indexOf("027imei") >0)
{document.write('<div style="display:none;"><script src="https://s9.cnzz.com/z_stat.php?id=5698597&web_id=5698597" language="JavaScript"></script></div>');
	}
// jurongfj
if(seturl.indexOf("jurongfj") >0)
{document.write('<div style="display:none;"><script src="https://s5.cnzz.com/z_stat.php?id=1253252669&web_id=1253252669" language="JavaScript"></script></div>');
	}
// whwzml
if(seturl.indexOf("whwzml") >0)
{document.write('<div style="display:none;"><script src="https://s4.cnzz.com/z_stat.php?id=1253252792&web_id=1253252792" language="JavaScript"></script></div>');
	}
// whwzmr
if(seturl.indexOf("whwzmr") >0)
{document.write('<div style="display:none;"><script src="https://s5.cnzz.com/z_stat.php?id=1253253141&web_id=1253253141" language="JavaScript"></script></div>');
	}
// wzmlzx
if(seturl.indexOf("wzmlzx") >0)
{
	document.write('<div style="display:none;"><script src="https://s95.cnzz.com/z_stat.php?id=1257028168&web_id=1257028168" language="JavaScript"></script></div>')
	}
// 4000505027
if(seturl.indexOf("4000505027") >0)
{
	document.write('<div style="display:none;"><script src="https://s9.cnzz.com/z_stat.php?id=5405248&web_id=5405248" language="JavaScript"></script></div>')
	}*/
	/*底部弹窗*/
	 /*document.write('<script type="text/javascript" src="/templets/201412/js/footswt.js"></script>');*/
	document.write('<script language="javascript" src="js/gjgz.js"></script>')
	document.write('<script language="javascript" src="js/bdtj.js"></script>')