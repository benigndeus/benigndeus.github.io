# **OAuth2.0 인증을 통한 API 사용**

_Author_ : Jiho Kim ( jiho@kakao.com )

How to use Javascript-OAuth for API

## **_INDEX_**

1. OAuth란?
2. 개발 환경
3. Service Oauth 인증
4. Reference

## **_Goal_**

"**OAuth2.0 인증을 통한 안전하고 효율적인 API 사용**"

---

## 1. **OAuth란?**

Open Authorization 또는 Open Authentication의 줄임말로 직역하면 _공개 인증_ 정도가 되겠다. 사실 상세한 이야기를 적을 기량은 없으므로 자세한 것은 [위키백과](https://ko.wikipedia.org/wiki/OAuth#cite_note-4)나 [생활코딩](https://opentutorials.org/course/3405)을 참고하시라. 버전 1과 버전 2가 있는데, 여기서는 OAuth2.0만 이야기한다.

### 1) 용어

|Name|Description|
|:-|-|
|**Roles**|어떠한 역할을 하고 있는 주체들이다.|
|Resource Owner|쉽게 말하면 서비스 이용자라고 할 수 있다.<br>우리(개발자)가 만들 서비스에 필요한 자원의 주인을 뜻한다.|
|Resource Server|실제 자원이 존재하는 서버를 의미한다.<br>우리가 평소 사용하는 Google, Naver, Facebook 등이 있다.|
|Client|우리가 만들 서비스를 의미한다.|
|Authorization Server|인증 과정 처리를 위한 서버 정도로 이해하고 있으면 된다.|
|**Data**|Definition, Parameter 중에 고민하다가 Simple is Best.|
|Client id/secret|Resource Server에서 Client에게 부여해주는 IDentification/Secret|
|Redirect uri|Callback이랑 많이 혼동되는 부분. 어디서는 url이라고 사용하기도 한다. 애초에 용어 좀 제대로 정립하고 만들지 짜증난다.<br>Authorization Server와 Client가 소통할 때 Client가 Response 받을 주소 정도로 이해하자.|
|scpoe|API에서 필요한 여러 내용을 받아올 때 사용자가 자신의 어떤 정보를 Client에게 넘겨줄지를 보여주는 항목들???????|
|Access Token|우리가 최종적으로 받아내야 할 Key 값이다.|

### 2) 흐름 Flow

전체 진행 과정은 다음과 같다.

```text
+--------+                               +---------------+
|        |--(1)- Authorization Request ->|   Resource    |
|        |                               |     Owner     |
|        |<-(2)-- Authorization Grant ---|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(3)-- Authorization Grant -->| Authorization |
| Client |                               |     Server    |
|        |<-(4)----- Access Token -------|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(5)----- Access Token ------>|    Resource   |
|        |                               |     Server    |
|        |<-(6)--- Protected Resource ---|               |
+--------+                               +---------------+
```

출처 : [oauth.net](https://tools.ietf.org/html/rfc6749#section-1.1)

1. Client가 Resource Owner에게 인증을 **request**한다.
2. Resource Owner는 Client에게 권한을 **response**한다.
3. Client가 Resource Owner로부터 권한을 부여받았음을 증명하여 Access Token을 Authorization Server에게 **request**한다.
4. Authorization Server는 이를 확인하고 Client에게 Access Token을 **response**한다.
5. Client는 부여된 Access Token을 통해 Resouce Server에 존재하는 Resource Owner의 데이터에 접근을 **request**한다.
6. Access Token이 유효하다면 Client에게 요청한 Protected Resource를 **response**한다.

---

### **Reference**

- [OAuth.net](https://oauth.net)
- [Google OAuth API **scopes** list](https://developers.google.com/identity/protocols/googlescopes#sheetsv4)
