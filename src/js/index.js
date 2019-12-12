/*** Developer Tool ***/

/* 접속한 사용자의 기기를 알 수 있는 구문 */
var filter = "win16|win32|win64|mac|macintel";

function deviceTest() {
	if(navigator.platform) {
		if(filter.indexOf(navigator.platform.toLowerCase()) < 0) { 
			alert("mobile 접속");
		} else {
			alert("pc 접속");
		}
	}
}

/* Browser info */
console.log(
	"【사용자 브라우저 상태 점검】" +
	"\n\n● <UserAgent> : 브라우저 구분값(웹브라우저 이름 전체)\n" + navigator.userAgent +
	"\n\n● <appCodeName> : 웹브라우저 코드이름\n" + navigator.appCodeName +
	"\n\n● <appName> : 웹브라우저 이름\n" + navigator.appName +
	"\n\n● <appVersion> : 웹브라우저 버전\n" + navigator.appVersion +
	"\n\n● <cookieEnabled> : 웹브라우저 쿠키 사용 가능 유무\n" + navigator.cookieEnabled +
	"\n\n● <language> : 웹브라우저 언어\n" + navigator.language +
	"\n\n● <onLine> : 사용자 온라인 상태 여부\n" + navigator.onLine +
	"\n\n● <platform> : 플랫폼\n" + navigator.platform);

/* Weather API */
//User location
$.getJSON("http://ip-api.com/json", function(data) {
	var lat = data.lat;
	var lon = data.lon;
	var units = "metric";

	$("#city").html(data.city + ", " + data.country)
	console.log(data);

	//Open weather API request
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + units + "&APPID=e95d958a11128b11ad3eb0fa101dae38"
	,function(json) {
		console.log(json);
		$("#temperature-celcius").html(json.main.temp + " C&deg");
		$("#temperature-farenheit").html((json.main.temp * 1,8 + 32) + " F&deg");
		$("#humidity").html(json.main.humidity + " %");
		$("#overall").html(json.weather[0].main);
		$("#icon").html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png"</img>');
	});
});

// 여기서부터 복붙한 거
(function(win, $) {
	var $html = $("html");
	var deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	};

	function scrollShowHide(status) {
		$html.css({"overflow-y": status});
		return $html.width();
	}

	var sc_w1 = scrollShowHide("hidden"),
		sc_w2 = scrollShowHide("scroll"),
		sc_w3 = sc_w1 - sc_w2;

	if(sc_w3 > 0) {
		deviceSize.pc = deviceSize.pc -  sc_w3;
		deviceSize.tablet = deviceSize.tablet -  sc_w3;
		deviceSize.mobile = deviceSize.mobile -  sc_w3;
	}
	//console.log(deviceSize.pc);

	$(win).on("resize", function() {
		var w_size = $(win).width();

		if(w_size >= deviceSize.pc && !$("html").hasClass("pc")) {
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		} else if( w_size < deviceSize.pc 
				&& w_size >= deviceSize.tablet 
				&& !$("html").hasClass("tablet")) {
			$html.removeClass("mobile pc").addClass("tablet");
			scrollShowHide("scroll");
		} else if( w_size <= deviceSize.mobile 
				&& !$html.hasClass("mobile")) {
			$html.removeClass("pc tablet").addClass("mobile");
			var menu_pos = parseInt($("#mobile-menu-wrap").css("left"));
			if(menu_pos >= 0) {
				scrollShowHide("hidden");
			}
		}
	});

	$(function() {
		$(win).trigger("resize");
		$(document).on("mouseover focus", ".pc #gnb>ul>li>a, .tablet #gnb>ul>li>a", gnbPlay);
		$(document).on("click", ".mobile #gnb>ul>li:not(.no-sub)>a", gnbPlay);
		
		function gnbPlay() {
			var $ts = $(this);
			if($("html").hasClass("mobile") | $("html").hasClass("tablet")) {
				$(".mobile #gnb>ul>li>a").removeClass("on");
				$("#gnb ul ul:visible").slideUp(300);
				if($ts.next().is(":hidden")) {
					$ts.addClass("on");
					$ts.next().stop(true,true).slideDown(300);
				}
			} else {
				$("#gnb ul ul:visible").slideUp(300);
				$ts.next().stop(true,true).slideDown(300);
			}
		} 

		$(document).on("mouseleave", ".pc #gnb, .tablet #gnb", gnbleave);
		function gnbleave() {
			$("#gnb ul ul:visible").slideUp(300);
			$("#gnb>ul>li>a").removeClass("on");
		}

		/* 모바일 메뉴 버튼 클릭 시 동작 */
		$("#mobile-menu-open").on("click", function() {
			$("#mobile-menu-wrap").animate({"left": "0"}, 200);scrollShowHide("hidden");
		});

		$("#mobile-menu-close").on("click", function() {
			$("#mobile-menu-wrap").animate({"left":"-1000px"}, 200);
			scrollShowHide("scroll");
			gnbleave();
		});
	});
}(window, jQuery));

// main.js
$(function(){
	/*var slider = */$(".main-visual-slide").bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true
		/*onSlideAfter: function() {
			slider.stopAuto();
			slider.startAuto();
		}*/
	});

	$("#side-tab-wrap h4 a").on("click", tabmenu);
	function tabmenu(e) {
		e.preventDefault();
		var $ts = $(this);
		var $next = $ts.parent().next();
		if($next.is(":hidden")){
			$("#notice-tab-wrap h4 a").removeClass("on");
			$ts.addClass("on");
			$("#notice-tab-wrap > div:visible").hide();
			$next.show();
		}
	}

	var $grid = $(".grid");
	$grid.isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});    
});