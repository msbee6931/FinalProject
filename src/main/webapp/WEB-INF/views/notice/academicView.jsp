<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>힉사 공지</title>
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
#viewBox{
	background-color:#f5f5f5;
	height: 50px;
}
#nav-ul{
	width:100%;
}
#normalBox{
	min-height: 30px;
	border-bottom:1px solid black;
}
#content{
	min-height:150px;
	border-bottom:1px solid black;
}
#btnBox{
	height:80px;
}
#backBtn{
	width:80px;
	height:40px;
}
#sideBox{
	max-height:300px;
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
							<li class="nav-item p-3"><a class="nav-link active" href="/notice/normalList.notice?page=1"
								tabindex="-1"><b>공지사항</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/academicList.notice?page=1"
								tabindex="-1"><b>학사스케쥴</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="#"
								tabindex="-1"><b>게시판</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/reference/refList.ref?page=1"
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
							<a href="/">Home&gt;</a><a href="/normalList.notice?page=1">공지사항&gt;</a><a href="/academicList.notice?page=1">학사공지</a>
						</h5>
					</div>
				</div>
				<div class="d-flex d-none d-lg-block m-2 bg-dark p-5" id="subLabel"> 
					<h3>
						<b>일반공지</b>
					</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 d-grid text-center" id="sideBox">
					<!--collapse 추가  -->
					<nav class="navbar navbar-expand-lg mb-2 nav-pills nav-justified "style="background-color: #e3f2fd; border-radius: 10px">
					<div class="col d-grid">
						<button type="button" class="btn mb-1 d-block d-lg-none "data-bs-toggle="collapse" data-bs-target="#listCollapse" ><b>공지사항</b></button>
					</div>
						<div class="collapse navbar-collapse" id="listCollapse" >
							<ul class="navbar-nav flex-column" id="nav-ul">
								<li class="nav-item" ><a class="nav-link active" href="/normalList.notice?page=1">일반공지</a>
								</li>
								<li class="nav-item"><a class="nav-link" href="/academicList.notice?page=1">학사공지</a>
								</li>
								<li class="nav-item"><a class="nav-link" href="#">장학공지</a>
								</li>
								<li class="nav-item "><a class="nav-link" href="#">취업공지  </a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div class="col-lg-10 " id="box">
					<div class="row mx-2 ">
						<div class="col-12 py-4" style="border-bottom: 2px solid black">
							<H3>
								<b>학사공지</b>
							</H3>
						</div>
					</div>
					<div class="row">
						<div class="col text-center py-4">
							<h4>
								<b>${dto1.title}</b>
							</h4>
						</div>
					</div>
					<div class="row text-center" id="viewBox">
						<div class="col align-self-center">
							<b>작성일시</b>
							<fmt:parseDate var="Date" value="${dto1.writedate}"
								pattern="yyyy-MM-dd" />
							<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd" />
						</div>
						<div class="col align-self-center">
							<b>조회수</b> ${dto1.view_count}
						</div>
					</div>
					<div class="row mx-2" id="content" >
						<div class="col p-5">${dto1.contents}</div>
					</div>
					<div class="row mx-2" id="normalBox">
						<div class="col-12 col-md-2 p-2 text-center">첨부파일</div>
						<div class="col-12 col-md-10 " id="downloadBox">
							<c:if test="${!empty list}">
								<c:forEach var="i" items="${list}">
								<div class="row align-self-center my-1">
									<div class="col-8"><img src="/img/file.png"><a href="/downloadAcademic.notice?seq=${i.n_seq}"> ${i.fileName}</a></div>
									<div class="col-4"><button type="button" class="download">다운로드</button><input type="hidden" value="${i.n_seq}"></div>
								</div>
								</c:forEach>
							</c:if>
						</div>
					</div>
					<div class="row">
						<div class="col text-center pt-3 mx-2" id="btnBox">
							<button type="button" class="btn btn-dark" id="backBtn">목록</button>
						</div>
					</div>
					<c:if test="${!empty dto2}">
					<div class="row  p-3" style="border-top:1px solid black">
						<div class="col-4 col-md-2 text-center"><img src="/img/up.png">다음글</div>
						<div class="col-8 -md-10"><a href="/academicView.ref?seq=${dto2.n_seq}">${dto2.title}</a></div>
					</div>
					</c:if>
					<c:if test="${!empty dto3}">
					<div class="row  p-3" style="border-top:1px solid black">
						<div class="col-4 col-md-2 text-center"><img src="/img/down.png">이전글</div>
						<div class="col-8 col-md-10"><a href="/academicView.ref?seq=${dto3.n_seq}">${dto3.title}</a></div>
					</div>
					</c:if>
				</div>
			</div>
		</div>
		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
	</div>
</body>
<script>
	$("#downloadBox").on("click",".download",function(){
		var seq = $(this).next().val();
		location.href="/downloadAcademic.notice?seq="+seq;
	})
	$("#backBtn").on("click",function(){
		location.href="/academicList.notice?page=1"
	})
</script>
</html>