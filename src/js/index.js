/* * * * * INDEX * * * * *

 * * * * * * * * * * * * */

(function(win, $) { // Ⅰ. 메뉴와 스크롤 생성 관리
	var $html = $("html");

	var deviceSize = {
		pc: 801,
		mobile: 800
	}

	function scrollShowHide(status) {
		$html.css({"overflow-y": status});
		return $html.width();
	}

	var sc_w1 = scrollShowHide("hidden"),
		sc_w2 = scrollShowHide("scroll"),
		sc_w3 = sc_w1 - sc_w2;

	if(sc_w3 > 0) {
		deviceSize.pc = deviceSize.pc - sc_w3;
		deviceSize.mobile = deviceSize.mobile - sc_w3;
	}

	$(win).on("resize", function() {
		var w_size = $(win).width();

		if(w_size >= deviceSize.pc && !$("html").hasClass("pc")) {
			$html.removeClass("mobile").addClass("pc");
			scrollShowHide("scroll");
		} else if(w_size <= deviceSize.mobile && !$html.hasClass("mobile")) {
			$html.removeClass("pc").addClass("mobile");
			var menu_pos = parseInt($("#mobile-menu-wrap").css("left"));
			if(menu_pos >= 0) {
				scrollShowHide("hidden");
			}
		}
	});

	$(function() {
		$(win).trigger("resize");

		// PC에서 gnb에 마우스를 올렸을 때 하위 메뉴 보이기
		$(document).on("mouseover focus", ".pc #gnb>ul>li>a", gnbPlay);
		// Mobile에서 gnb 메뉴 클릭했을 때 하위 메뉴 보이기
		$(document).on("click", ".mobile #gnb>ul>li>a", gnbPlay);
		function gnbPlay() {
			var $ts = $(this);
			if($html.hasClass("mobile")) {
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

		// PC에서 gnb에 마우스를 떠났을 때 하위 메뉴 가리기
		$(document).on("mouseleave", ".pc #gnb", gnbleave);
		function gnbleave() {
			$("#gnb ul ul:visible").slideUp(300);
			$("#gnb>ul>li>a").removeClass("on");
		}

		// MOBILE에서 메뉴 열기 버튼 클릭 시 스크롤을 없애면서 메뉴 오픈
		$("#mobile-menu-open").on("click", function() {
			$("#mobile-menu-wrap").animate({"left": "0"}, 200);
			scrollShowHide("hidden");
		});

		// MOBILE에서 메뉴 닫기 버튼 클릭 시 스크롤을 생성하며 메뉴 오픈
		$("#mobile-menu-close").on("click", function() {
			$("#mobile-menu-wrap").animate({"left":"-1000px"}, 200);
			scrollShowHide("scroll");
			gnbleave();
		});
	});
}(window, jQuery));

$(function() {		// Ⅱ. bxslider 생성
	$(".main-visual-slide").bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true
	});
});

$(function() {		// Ⅲ. Aside 탭 영역 관리
	$("#side-tab-wrap h4 a").on("click", tabmenu);
	function tabmenu(e) {
		e.preventDefault();
		var $ts = $(this);
		var $next = $ts.parent().next().next(); //(*)
		if($next.is(":hidden")) {
			$("#side-tab-wrap h4 a").removeClass("on");
			$ts.addClass("on");
			$(".tab-container:visible").hide();
			$next.show();
		}
	}
});

$(function() {		// Ⅳ. Widget 위젯 영역 관리
	var $grid = $(".grid");
	$grid.isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});    
});