$(function(){
	
	
	/*header button*/
	$(".button").click(function(){
		$("#gnb").show();
		$(".close").show().css({zIndex:"200"},100);
			$(".close").click(function(){
				$("#gnb").hide();
				$(".close").hide().css({zIndex:"200"},100);
			});
	});
	
	
	/*gnb*/
	$("#gnb>li:nth-child(2)").click(function(){
		$(this).animate({color:"#000"});
		$("#gnb>li:nth-child(1)").animate({color:"#b4b4b4"});
		$("#gnb>li:nth-child(3)").animate({color:"#b4b4b4"});
		$(".sub1>li").addClass("on");
		$(".sub2>li").addClass("on");
		$(".sub3>li").removeClass("on");
	});
	$("#gnb>li:nth-child(1)").click(function(){
		$(this).animate({color:"#000"});
		$("#gnb>li:nth-child(2)").animate({color:"#b4b4b4"});
		$("#gnb>li:nth-child(3)").animate({color:"#b4b4b4"});
		$(".sub1>li").removeClass("on");
		$(".sub2>li").removeClass("on");
		$(".sub3>li").removeClass("on");
	});
	$("#gnb>li:nth-child(3)").click(function(){
		$(this).animate({color:"#000"});
		$("#gnb>li:nth-child(1)").animate({color:"#b4b4b4"});
		$("#gnb>li:nth-child(2)").animate({color:"#b4b4b4"});
		$(".sub1>li").addClass("on");
		$(".sub2>li").removeClass("on");
		$(".sub3>li").addClass("on");
	});

	/*$(".slide li>a>img").each(function(aa){
		$(this).css("left",aa*1900);
		});
		setInterval(function(){
			$(".slide li>a>img").each(function(){	
				var nowLeft = parseInt($(this).css("left"));
				var movePos = nowLeft-1900;
				$(this).animate({left:movePos},1000,function(){
				if(movePos==-1900){
					$(this).css("left",1900);
				}	
			});
		});
	},3000);*/
	setInterval(function(){
	$(".slide li a img:eq(1)").fadeOut(3000,function(){
		$(".slide li a img:eq(1)").insertBefore(".slide li a img:eq(0)");
		$(".slide li a img:eq(0)").fadeIn(2000);
		});
		},5000);
	
	$(".heart img").click(function(){
		$(this).attr('src','img/heart2.png');
		});
	$(".heart2 img").click(function(){
		$(this).attr('src','img/heart2.png');
		});
	$(".button2 a").mouseenter(function(){
	$(this).stop().animate({backgroundColor:"#1e4087", color:"#fff"});
	});
	$(".button2 a").mouseleave(function(){
	$(this).stop().animate({backgroundColor:"#fff", color:"#1e4087"});
	});
	
	$(window).scroll(function(){
		var aa=parseInt($(this).scrollTop()); 
		if (aa>200) {
		$(".left, .right").fadeIn()
		}
	});	
	$(window).scroll(function(){
		var aa=parseInt($(this).scrollTop()); 
		if (aa>800) {
		$(".left2, .right2").fadeIn()
		}
	});	
	$(window).scroll(function(){
		var aa=parseInt($(this).scrollTop()); 
		if (aa>1200) {
		$(".left3, .right3").fadeIn()
		}
	});	

	$(".button3 a").mouseenter(function(){
	$(this).stop().animate({backgroundColor:"#fff", color:"#1e4087"});
	});
	$(".button3 a").mouseleave(function(){
	$(this).stop().animate({backgroundColor:"#1e4087", color:"#fff"});
	});
	
	$(".menu li:nth-child(2)").click(function(){
		$(".menu li:nth-child(1)").animate({color:"#b4b4b4"});
		$(".menu li:nth-child(2)").animate({color:"#000"});
		$("#section2").css({display:"none"});
		$("#section3").css({display:"block"});
	});	
$(".menu li:nth-child(1)").click(function(){
		$(".menu li:nth-child(2)").animate({color:"#b4b4b4"});
		$(".menu li:nth-child(1)").animate({color:"#000"});
		$("#section2").css({display:"block"});
		$("#section3").css({display:"none"});
	});	












});/*function 끝*/