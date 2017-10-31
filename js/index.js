// JavaScript Document
	//滑动模块
	function newScroll(element){
		return new IScroll(element,{ventPassthrough: true,scrollX: true,scrollY: false,preventDefault: false});	
		
	}	
//明星	
/*
TouchSlide({ 
	slideCell:"#anli_content1",
	titCell:".anli_content-hd li",
	mainCell:".anli_content-con",
	autoPlay:true,
	interTime:10000,
	startFun:function(i,c){		
	},
	endFun:function(i,c){
		var bd = document.getElementById("tabBox1-bd");
		bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+bd.children[i].children[1].offsetHeight+20+"px";
		if(0<i<1)bd.parentNode.style.transition="200ms";//添加动画效果		
		
		var widths = 0;
		for(j=0;j<i-1;j++){
			widths += $("#anli_content1 .anli_content-hd ul li").eq(j).outerWidth();	
		}
		if(i+3<c){
			$("#anli_content1 .anli_content-hd ul").animate({"left":-widths})	
		}
	}
}); 
var wW=$(window).width();*/
//自适应
//文字
	/*function resizeFont(){
		if(wW<640){
			
			
			}
		else{
			wW=640;
		}
		
 $(".anli_content-hd li .diao").width(wW*0.3);		
		}
	resizeFont();	
	$(window).resize(function(){resizeFont();});
		  
/*banner*/

$(function(){ 

  
  var mySwiper = new Swiper('.doctor',{
			  　　  mode : 'horizontal',
					calculateHeight:true,
					loop:true,
			  		slidesPerView: 3,
					loopedSlides:10,
					grabCursor: true,
                    autoplayDisableOnInteraction : false,
					autoplay:4000,
					speed:500
			 });
/*学术*/
 var galleryTop = new Swiper('.gallery-top', {
       slidesPerView: 1,
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5, 
    });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 2,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
		autoplay:6000,
		speed:500,
        slideToClickedSlide: true,
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
		
var mySwiper = new Swiper('.anli',{
			  　　  mode : 'horizontal',
					calculateHeight:true,
					loop:true,
			  		slidesPerView: 3,
					loopedSlides:10,
					grabCursor: true,
                    autoplayDisableOnInteraction : false,
					autoplay:4000,
					speed:500
			 });
  var mySwiper = new Swiper('#hdbanner',{
            pagination: '.swiper-pagination',
			paginationClickable: true,
			calculateHeight:true,
			grabCursor: true,
            loop:true,
			autoplay:4000,
			speed:500
  })
    var mySwiper = new Swiper('.wzsbnr',{
            
			paginationClickable: true,
			calculateHeight:true,
			grabCursor: true,
            loop:true,
			autoplay:4000,
			speed:500
  })
})

/*学术*/
/*
var mySwiper = $('.xsnr').swiper({
            pagination: '#pagenavi1',
			calculateHeight:true,
            loop:true,
            grabCursor: true,
			autoplay:4000,
			speed:500
            //autoResize:true
          });
/*专家*//*
var mySwiper = $('.doctor').swiper({
			  　　  mode : 'horizontal',
					calculateHeight:true,
					loop:true,
			  		slidesPerView: 'auto',
					loopedSlides:10,
					grabCursor: true,
                    autoplayDisableOnInteraction : false,
					autoplay:4000,
					speed:500
			 });
/*案例*//*
var mySwiper = $('.anli').swiper({
			  　　  mode : 'horizontal',
					calculateHeight:true,
					loop:true,
			  		slidesPerView: 'auto',
					loopedSlides:10,
					grabCursor: true,
                    autoplayDisableOnInteraction : false,
					autoplay:4000,
					speed:500
			 });
/*项目*//*
		 var mySwiper = $('.iSlider').swiper({
		    pagination: '.pagination4',
		    loop:true,
		    grabCursor: true,
		    autoResize:true
		  });*/
/*资料录入*/

function tel_call1(){
	var tel = $("[name='tel_call1']").val();
		if(!(/^1[34578]\d{9}$/.test(tel))){ 
			alert("您输入的手机号码有误");  
			return false; 
		} 
	 else{window.location.href='http://kau.zoossoft.net/LR/Chatpre.aspx?siteid=KAU83879408&'+'&e='+'首页电话1：'+tel}
	}
	
function tel_call2(){
	var tel = $("[name='tel_call2']").val();
		if(!(/^1[34578]\d{9}$/.test(tel))){ 
			alert("您输入的手机号码有误");  
			return false; 
		} 
	 else{window.location.href='http://kau.zoossoft.net/LR/Chatpre.aspx?siteid=KAU83879408&'+'&e='+'首页电话2：'+tel}
	}
	
$(document).ready(function(){	
    $(".miaosa").click(function(){				
        var username = $("[tag='username']").val();	
		var sex = $('input:radio[name="sex"]:checked').val();
		var iphone = $("[tag='iphone']").val();	
		var title = $("[tag='title']").val();		
		var address = $("[tag='address']").val();
		var isMobile = /^(?:13\d|14\d|15\d|16\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/; 
		if(username== ""){ 
					alert("名字不能为空！");
				}		
		if (iphone == "" ) {
			alert("电话不能为空！");
		}
		if (iphone != "") {
			if (!isMobile.test(iphone)) {
				alert("请填写正确填写手机号码！");
				
			}else if(username!= ""){ 
				window.location.href='http://kau.zoossoft.net/LR/Chatpre.aspx?siteid=KAU83879408&'+'&e='+'姓名：'+username+'  '+'电话：'+iphone+'  '+'改善部位:'+address;}
			    /*window.location.reload();*/	
			}
		}); 
		
});		  