# benigndeus.github.io

## ISSUE

### :exclamation: Login을 하지 않고도 내 Google Account에서 Docs 받아오기

`index.html`을 제외한 나머지 문서들은 Google Drive나 다른 Github Repo에서 받아오는 것을 목표로 하고 있다.  
사실 그건 불가능하다고 생각되는 상황이지만 어쨌든 `redirect.html`에서 Google 로그인, OAuth2.0, Google Docs 읽어오는 구현까지는 성공했다.

### :exclamation: 로그인 페이지를 따로 제작하는 데 있어 Client Secret이 노출되는 상황

제대로 노출된 상황은 아니지만, API Key들이 몇 개 노출된 상황. 보안에 대해 학습한 것이 거의 존재하지 않아 발생한 일이지만 어느 정도는 처리했다.  
JSP를 사용하면 보안 수준을 높일 수 있을 것으로 예상하지만, Servlet 등을 대략 살펴보니 Spring을 학습해야 한다는 결론이 나왔다. 하지만 해당 내용은 Github Page로 사용이 가능하지부터가 의문이다. 애초에 내가 원하는 작업을 하기 위해서는 Server부터 공부해야 될 것 같은 공포감이 밀려온다.

### :exclamation: VSCode에서 Servlet을 실행시키기 위해 어떻게 개발환경을 설정해야 하는지

`benigndeus.github.io`를 Java Project로 변경하는 것까지는 어떻게 처리가 된 것 같은데, Servlet을 Debug 하는 것부터 막혔다. 자료를 뒤적거려 보아도 열의 아홉은 eclipse 개발 환경에서 tomcat을 통해 진행하므로 방법이 없다. 나머지 열의 하나는 Spring을 통한 구현이므로 현재로서 내가 할 수 있는 작업이 없다.

### :exclamation: Html 파일에서 Servlet 파일을 호출하는 방법

일단 이게 가능해야 `index.html`에서 Login 페이지를 불러올 수 있지 않을까?
