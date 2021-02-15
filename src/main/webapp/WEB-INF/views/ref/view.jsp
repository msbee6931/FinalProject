<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학사 자료실</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet">

<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
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
#subLabel{
	width:fit-content;
	color:white;
}
#box {
	border: 1px solid black;
	border-radius: 10px;
}
</style>
</head>
<body>
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
							<li class="nav-item p-3"><a class="nav-link active" href="/reference/refList.ref"
								tabindex="-1"><b>자료실</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>채팅</b></a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="container">
		<div class="row pt-3">
			<div class="d-flex flex-row-reverse">
				<div class="bd-highlight d-none d-lg-block">
					<h5>
						<a href="/">Home&gt;</a><a href="/reference/refList.ref">자료실</a>
					</h5>
				</div>
			</div>
		<div class="d-flex d-none d-lg-block m-2 bg-dark p-5" id="subLabel" >
			<h3><b>자료실</b></h3>
			</div>
		</div>
			<div class="row">
			<!-- <div class="col-xl-2 d-none d-xl-block"></div> -->
			<div class="col-xl-12 d- py-4" id="box">
					<div class="row">
						<div class="col-12">
							<H3>
								<b>학사 자료실</b>
							</H3>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
	</div>
</body>
</html>