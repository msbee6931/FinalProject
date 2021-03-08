<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
<link rel="icon" type="image/png" href="http://example.com/myicon.png">
<meta charset="UTF-8">
<title>SignUp</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet">

<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	font-family: 'Nanum Gothic', sans-serif;
}
/* .head3{
	font-family: 'GmarketSansLight';
}
.head4{
	font-family: 'GmarketSansBold';
} */

.title {
	border: 1px solid;
	width: 30%;
	font-size: 20px;
	background-color: #266ed4;
	color: white
}

.sub {
/* 	font-family: 'GmarketSansLight'; */
	font-size: 20px;
}

.subtitle {
	font-size: 20px;
	padding-right: 30px;
}

.a2 {
	text-decoration: none;
	color: white;
/* 	font-family: 'GmarketSansLight'; */
}

.contents{
/* 	font-family: 'GmarketSansLight'; */
}
</style>
</head>

<body>
	<div class="contatiner">
	<jsp:include page="/WEB-INF/views/topHeader.jsp"/>
	<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
		<div class="row body p-5">
			<div class="col-12 d-block d-lg-none head3">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="introduce.home">학교소개</a>
						<button class="navbar-toggler" type="button"
							data-bs-toggle="collapse" data-bs-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="true"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item"><a class="nav-link active"
									aria-current="page" href="introduce.home">인사말</a></li>
								<li class="nav-item"><a class="nav-link active"
									href="department.home">학과소개</a></li>
								<li class="nav-item"><a class="nav-link active" href="admission.home">입학정보</a>
								</li>

							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div class="row">
				<div class="col-0 col-lg-3 p- d-none d-lg-block head3">
					<b class="title  p-5"><a class="a2" href="introduce.home">학교소개</a></b>
					<div class="dropdown pt-2">
						<button class="btn btn-secondary dropdown-toggle" type="button"
							id="dropdownMenuButton" data-bs-toggle="dropdown"
							aria-expanded="false"></button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li><a class="dropdown-item" href="introduce.home">인사말</a></li>
							<li><a class="dropdown-item" href="department.home">학과소개</a></li>
							<li><a class="dropdown-item" href="admission.home">입학정보</a></li>
						</ul>
					</div>
				</div>
				<div class="col-12 col-lg-9">
					<b class="sub">인사말<br></b>
				</div>
			</div>
			<div class="row">
				<div class="col-3"></div>
				<div class="col-lg-9 contents">
					안녕하세요. kh대학입니다.<br> <br> 옛날 인디언 속담중에 이런말이있습니다.<br> <br>
					만번을 입밖으로 말하면 그말이 이루어진다<br> <br> 무언가 간절히원하게되면 그 일이
					이루어진다라는뜻인데요<br> <br> 여러분도 무언가 간절히 이루고싶은것이 있다면 만번 되내여보세요.<br>
					<br> 어느순간 이루어져있을겁니다. <br> <br>
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