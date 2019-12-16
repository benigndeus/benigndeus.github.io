/* * * * * Console Tools * * * * */
$(function() {	
	// Device Check
	var filter = "win16|win32|win64|mac|macintel";
	function areYouMobile() {
		if(navigator.platform) {
			if(filter.indexOf(navigator.platform.toLowerCase()) < 0) {
				console.log(
					"Developer : Who are you?\n" +
					"Device    : I'm MOBILE device."
				);
			} else {
				console.log(
					"Developer : Who are you?\n" +
					"Device    : I'm PC."
				);
			}
		}
	}

	// Browser INFO
	function myIntroduce() {
		console.log(
			"【Browser Information】" +
			"\n● userAgent     브라우저 구분값 " + navigator.userAgent +
			"\n● appCodeName   웹브라우저 코드 " + navigator.appCodeName +
			"\n● appName       웹브라우저 이름 " + navigator.appName +
			"\n● appVersion    웹브라우저 버전 " + navigator.appVersion +
			"\n● language      웹브라우저 언어 " + navigator.language +
			"\n● cookieEnabled 쿠키 사용 여부  " + navigator.cookieEnabled +
			"\n● onLine        온라인 상태     " + navigator.onLine +
			"\n● platform      플랫폼          " + navigator.platform
		);
	}

	function devConsoleTools() {
		areYouMobile();		// 접속한 기기가 모바일인지 확인
		myIntroduce();		// 웹브라우저의 정보 확인
	}
	devConsoleTools();
});