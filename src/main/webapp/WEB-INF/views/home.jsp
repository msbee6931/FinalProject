<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/png" href="http://example.com/myicon.png">
<meta charset="UTF-8">
<title>Insert title here</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet">

<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
        function getCookie(name) {
            var cookie = document.cookie;
            if (document.cookie != "") {
                var cookie_array = cookie.split("; ");
                for (var index in cookie_array) {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "popupYN") {
                        return cookie_name[1];
                    }
                }
            }
            return;
        }

        function openPopup(url) {
            var cookieCheck = getCookie("popupYN");
            if (cookieCheck != "N") window.open(url, '', 'width=500,height=500,left=0,top=0')
        }
    </script>


<style>
@font-face {
	font-family: 'GmarketSansBold';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'GmarketSansMedium';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'GmarketSansLight';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}

* {
	box-sizing: border-box;
	
}

.headt1 {
font-family: 'GmarketSansMedium';
	font-size: 13px;
	text-align: center;
	color: white;
	background-color: #435a7c;
}

.headt2 {
font-family: 'GmarketSansLight';
	background-color: white;
}

nav {
	background-color: white;
}

.nav-item {
	font-size: 20px;
}

#pop {
	cursor: pointer;
}
</style>
</head>

<body onload="javascript:openPopup('pop.home')">
	<div class="contatiner">
		<div class="row">
			<div class="col">
				<input type="hidden" value="">
			</div>
		</div>
		<div class="row headt1 p-2">
			<div class="col-8 col-md-9"></div>
			<div class="col-2 col-md-1">로그인</div>
			<div class="col-2 col-md-1" id="pop">팝업창</div>
			<div class="col-0 col-md-1"></div>
		</div>
		<div class="row headt2 p-2">
			<nav class="navbar navbar-expand-xl navbar-light"
				style="background-color: white">
				<div class="container-fluid">
					<a class="navbar-brand" href="#"><img src="/img/logo.PNG"></a>
					<button class="navbar-toggler" type="button"
						data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02" aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item p-3"><a class="nav-link active"
								aria-current="page" href="introduce.home"><b>학교소개</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>공지사항</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>학사스케쥴</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>게시판</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>자료실</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>채팅</b></a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="row body">
			<div class="col">
				<div id="carouselExampleInterval" class="carousel slide"
					data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active" data-bs-interval="10000">
							<img src="/img/carousel1.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item" data-bs-interval="5000">
							<img src="/img/carousel2.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="/img/carousel3.jpg" class="d-block w-100" alt="...">
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleInterval"
						role="button" data-bs-slide="prev"> <span
						class="carousel-control-prev-icon" aria-hidden="true"></span> <span
						class="visually-hidden">Previous</span>
					</a> <a class="carousel-control-next" href="#carouselExampleInterval"
						role="button" data-bs-slide="next"> <span
						class="carousel-control-next-icon" aria-hidden="true"></span> <span
						class="visually-hidden">Next</span>
					</a>
				</div>
			</div>
		</div>
		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>

		<input type=button id=enroll value=재학증명서> <input type=button
			id=graduate value=졸업증명서> <input type=button id=payment
			value="납부 영수증"> <input type=button id=transcript value=성적증명서>
		<input type=button id=free value=자유게시판>

		<!-- 채팅을 위해 임시 아이디 생성 -->
		<input id="userId" type="text"
			placeholder="채팅을 위한 임시아이디 입력하고 버튼클릭시 채팅으로 이동"> <input
			type="button" value="send" id="sendBtn">
	</div>

</body>
<script>
	document.getElementById("enroll").onclick=function(){
		location.href="/certification/enrollment"
	}
	document.getElementById("graduate").onclick=function(){
		location.href="/certification/graduate"
	}
	document.getElementById("payment").onclick=function(){
		location.href="/certification/payment"
	}
	document.getElementById("transcript").onclick=function(){
		location.href="/certification/transcript"
	}
	document.getElementById("free").onclick=function(){
		location.href="/free/boardList"
	}

	document.getElementById("request").onclick=function(){
		location.href="/request/boardList"


	
	document.getElementById("sendBtn").onclick = function(){
		let userId = document.getElementById("userId").value;
		location.href="/chatting/chatHome?userId="+userId;
	}
    
	document.getElementById('pop').onclick = function() {
   		window.open('pop.home','', 'width=500,height=500,left=0,top=0')
    //        openPopup('quiz03.html')
	}
</script>
</html>