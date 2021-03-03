<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>취업 공지</title>
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
#subLabel{
	background-color: #193461;
	color:white;
	max-width:200px;
}
#btnCol{
	background-color: #193461;
	color:white;
}
#box {
	min-height:500px;
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
#nav-ul>li>a.active{
	background-color :#000d37;
	color: white;
}
#nav-ul>li>a:hover,
#nav-ul>li>a:focus {
  background-color: #495d8f;
  color: white;
}

.nav-li{
	border-bottom:1px solid black;
}
</style>
</head>
<body>
	<div class="contatiner">
    <jsp:include page="/WEB-INF/views/topHeader.jsp"/>
	<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
		<div class="container">
			<div class="row pt-3">
				<div class="d-flex flex-row-reverse">
					<div class="bd-highlight d-none d-lg-block">
						<h5>
							<a href="/">Home&gt;</a><a href="/normalList.notice?page=1">공지사항&gt;</a><a href="/employmentList.notice?page=1">취업공지</a>
						</h5>
					</div>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-lg-2 d-grid text-center" id="sideBox">
					<!--collapse 추가  -->
					<div class="col-12 d-none d-lg-block py-5" id="subLabel" >
						<h3><b>공지사항</b></h3>
					</div>
					<nav class="navbar navbar-expand-lg mb-2 nav-justified ">
					<div class="col d-grid">
						<button type="button" class="btn mb-1 d-block d-lg-none "data-bs-toggle="collapse" data-bs-target="#listCollapse" id="btnCol"><b>공지사항</b></button>
					</div>
						<div class="collapse navbar-collapse" id="listCollapse" >
							<ul class="navbar-nav flex-column" id="nav-ul">
								<li class="nav-item nav-li" ><a class="nav-link " href="/normalList.notice?page=1">일반공지</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link" href="/academicList.notice?page=1">학사공지</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link" href="/scholarList.notice?page=1">장학공지</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link active" href="/employmentList.notice?page=1">취업공지  </a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div class="col-lg-10 " id="box">
					<div class="row mx-2 ">
						<div class="col-12 py-4" style="border-bottom: 2px solid black">
							<H3>
								<b>취업공지</b>
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
									<div class="col-8"><img src="/img/file.png"><a href="/download.notice?seq=${i.f_seq}"> ${i.fileName}</a></div>
									<div class="col-4"><button type="button" class="download">다운로드</button><input type="hidden" value="${i.f_seq}"></div>
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
						<div class="col-8 -md-10"><a href="/employmentView.notice?seq=${dto2.n_seq}">${dto2.title}</a></div>
					</div>
					</c:if>
					<c:if test="${!empty dto3}">
					<div class="row  p-3" style="border-top:1px solid black">
						<div class="col-4 col-md-2 text-center"><img src="/img/down.png">이전글</div>
						<div class="col-8 col-md-10"><a href="/employmentView.notice?seq=${dto3.n_seq}">${dto3.title}</a></div>
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
		location.href="/download.notice?seq="+seq;
	})
	$("#backBtn").on("click",function(){
		location.href="/employmentList.notice?page=1"
	})
</script>
</html>