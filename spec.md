# Data Dictionary

|Name|Type|Parent|File|Description|
|:---|:---|:-------|:--:|:----------|
|blind|&lt;*&gt; class| *|index.html|- 화면에서 보여주지 않는 태그<br>- 주석 및 읽어주기 기능에서 역할을 할 것으로 예상<br>- 개발 시 CSS로 처리하기 전 HTML 파일의 구조를 파악하기 위해 만든 태그들|
|header-wrap|&lt;div&gt; class|body|index.html|헤더 영역을 묶어주는 빈 태그|
|header-inner|&lt;header&gt; class|.header-wrap|index.html|헤더|
|mobile-menu-open|&lt;p&gt; class|.header-inner|index.html|모바일 화면에서 메뉴를 열어주는 버튼 영역|
|mobile-menu-wrap|&lt;div&gt; class|.header-inner|index.html|모바일 메뉴의 목록과 목록을 닫는 버튼을 묶어주는 태그|
|mobile-menu|&lt;div&gt; class|.mobile-menu-wrap|index.html|유틸 메뉴와 GNB를 묶어주는 태그|
|util-menu|&lt;ul&gt; class|.mobile-menu|index.html|유틸 메뉴 목록<br>pc에서는 우상단에 배치|
|gnb|&lt;nav&gt; id|.mobile-menu|index.html|Global Navigation Bar (메인 메뉴)<br>사이트 전체에서 동일하게 적용되는 네비게이션 바|
|m1, m2, m3|&lt;li&gt; class|#gnb>ul|index.html|서브 메뉴를 가지는 메인 메뉴 항목|
|m4 no-sub|&lt;li&gt; class|#gnb>ul|index.html|서브 메뉴가 없는 메인 메뉴 항목|
|mobile-menu-close|&lt;p&gt; class|.mobile-menu-wrap|index.html|열린 모바일 메뉴를 닫는 버튼 영역|
|container|&lt;div&gt; id|body|index.html|페이지의 내용을 담는 컨테이너 영역|
|main-visual|&lt;section&gt; id|#container|index.html|메인 비주얼 컨텐츠|
|rounded|&lt;section&gt; class|#container|index.html|컨텐츠(article)의 테두리를 둥글게 해주는 건가|
|main-visual-slide|&lt;ul&gt; class|#main-visual|index.html|메인 비주얼 컨텐츠 목록을 슬라이드쇼로 보여주는 영역|
|visual-item-wrap item1·2·3|&lt;div&gt; class|.main-visual-slide|index.html|메인 비주얼 슬라이드쇼에 들어가는 내용|
|main-visual-title|&lt;div&gt; class|.visual-item-wrap item1·2·3|index.html|슬라이드쇼 컨텐츠의 제목|
|detail-view|&lt;p&gt; class|.visual-item-wrap item1·2·3|index.html|슬라이드쇼 컨텐츠 내용 자세히 보기 버튼|
|notice-tab-wrap|&lt;section&gt; id|#container|index.html|공지사항 탭 영역|
|sec-tit-1|&lt;h3&gt; class|#notice-tab-wrap|index.html|공지사항 제목|
|tab-btn-1·2|&lt;h4&gt; class|#notice-tab-wrap|index.html|공지사항 탭 메뉴 구분 버튼|
|tab-container-1·2|&lt;div&gt; class|#notice-tab-wrap|index.html|공지사항 탭 내부 내용|
|icon-more|&lt;p&gt; class|.tab-container-1|index.html|해당 탭의 내용 더 보기|
|no-write|&lt;p&gt; class|.tab-container-2|index.html|해당 탭의 내용이 없을 때 출력하는 역할인데 왜 있니|
|best-book-wrap|&lt;section&gt; id|#container|index.html|베스트 셀러 소개해주는 섹션|
|sec-tit-1|&lt;h3&gt; class|#best-book-wrap|index.html|섹션의 제목|
|best-book-list grid|&lt;ul&gt; class|#best-book-wrap|index.html|책 목록을 그리드 형식으로 배치|
|grid-item|&lt;li&gt; class||||
