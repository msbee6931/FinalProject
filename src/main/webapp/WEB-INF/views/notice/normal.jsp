<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>일반 공지</title>
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
#box {
	min-height:500px;
}
#nav-ul{
	width:100%;
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
#sideBox{
	max-height:300px;
}
#search{
	background-color: #495d8f;
	color: #ffffff;
}
#search:hover {
	background-color: #193461;
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
		<div class="container pb-5">
		<div class="row pt-3">
			<div class="d-flex flex-row-reverse">
				<div class="bd-highlight d-none d-lg-block">
					<h5>
						<a href="/">Home&gt;</a><a href="/normalList.notice?page=1">공지사항&gt;</a><a href="/normalList.notice?page=1">일반공지</a>
					</h5>
				</div>
			</div>
		</div>
			<div class="row">
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
								<li class="nav-item nav-li" ><a class="nav-link active" href="/normalList.notice?page=1">일반공지</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link " href="/academicList.notice?page=1">학사공지</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link" href="/scholarList.notice?page=1">장학공지</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link" href="/employmentList.notice?page=1">취업공지  </a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div class="col-lg-10 d- pt-4" id="box">
					<div class="row">
						<div class="col-12">
							<H3>
								<b>일반공지</b>
							</H3>
						</div>
						<div class="col-12">
							<form action="/searchNormal.notice?page=1" method="post" class="row">
								<div class="col-md-6 order-md-2">
									<div class="row p-4">
										<div class="col-sm-12 col-md-3 p-0">
											<select class="form-select" name="category" id="select">
												<option value="1"${category == '1' ? 'selected="selected"' : ''}>제목</option>
												<option value="2"${category == '2' ? 'selected="selected"' : ''}>내용</option>
												<option value="3"${category == '3' ? 'selected="selected"' : ''} >제목+내용</option>			
											</select>
										</div>
										<div class="col-sm-12 col-md-6 p-0 ">
											<input class="form-control" name="content" type="search" placeholder="검색어를 입력해주세요">
										</div>
										<div class="col-sm-12 col-md-3 p-0 d-grid">
											<button type="submit" class="btn d-md-block" id="search">검색</button>
										</div>
									</div>
								</div>
								<div class="col-md-6  align-self-center">현재 ${count}건 | 현재 ${page}/${end} 페이지</div>
							</form>
						</div>
					</div>
					<div class="row text-center py-2" style="border-bottom: 1px solid gray">
						<div class="col-md-2 d-none d-md-block">번호</div>
						<div class="col-md-4 d-none d-md-block">제목</div>
						<div class="col-md-2 d-none d-md-block">등록일</div>
						<div class="col-md-2 d-none d-md-block">첨부파일</div>
						<div class="col-md-2 d-none d-md-block">조회수</div>
					</div>
					<c:forEach var="i" items="${list}">
						<div class="row py-2" style="border-bottom: 1px solid #efefef">
							<div class="col-md-2 d-none d-md-block text-center">${i.rn}</div>
							<div class="col-md-4 col-12 text-left"><a href="/normalView.notice?seq=${i.n_seq}">${i.title}</a></div>
							<div class="col-md-2 col-3 text-center">
 							<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                            <fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/> 
                            </div> 
                            <c:choose>
                           	<c:when test="${i.file == 'Y'}">
								<div class="col-md-2 col-3 text-center"><a href="/downloadAll.notice?seq=${i.n_seq}&title=${i.title}"><img src="/img/file.png"></a></div>
							</c:when>
							<c:otherwise>
								<div class="col-md-2 col-3 text-center"></div>
							</c:otherwise>	
							</c:choose>
							<div class="col-md-2 d-none d-md-block text-center">${i.view_count}</div>
						</div>
					</c:forEach>
					<c:if test="${!empty list}">
					<c:choose>
					<c:when test="${type=='default'}">
					<nav aria-label="Page navigation example">
						<ul class="pagination justify-content-center mt-3" >
							<li class="page-item"><a class="page-link" href="/normalList.notice?page=1" aria-label="Previous"> <span aria-hidden="true">&laquo;</span></a></li>
							<li class="page-item"><a class="page-link" href="/normalList.notice?page=${page-1}"><span aria-hidden="true">&lt;</span></a></li>
						<c:set var="nav" value="${fn:split(navi,'/')}"></c:set>
						<c:forEach items="${nav}" var="i">
							<li class="page-item d-none d-md-block"><a class="page-link" href="/normalList.notice?page=${i}">${i}</a></li>
						</c:forEach>
							<li class="page-item d-block d-md-none"><a class="page-link"><span>${page} / ${end}</span></a></li>
							<li class="page-item"><a class="page-link" href="/normalList.notice?page=${page+1}"><span aria-hidden="true">&gt;</span></a></li>
							<li class="page-item"><a class="page-link" href="/normalList.notice?page=${end}"aria-label="Next"> <span aria-hidden="true">&raquo;</span></a></li>
						</ul>
					</nav>
					</c:when>
					<c:otherwise>
					<nav aria-label="Page navigation example">
						<ul class="pagination justify-content-center mt-3" >
							<li class="page-item"><a class="page-link" href="/searchNormal.notice?page=1&category=${category}&content=${content}" aria-label="Previous"> <span aria-hidden="true">&laquo;</span></a></li>
							<li class="page-item"><a class="page-link" href="/searchNormal.notice?page=${page-1}&category=${category}&content=${content}"><span aria-hidden="true">&lt;</span></a></li>
						<c:set var="nav" value="${fn:split(navi,'/')}"></c:set>
						<c:forEach items="${nav}" var="i">
							<li class="page-item d-none d-md-block"><a class="page-link" href="/searchNormal.notice?page=${i}&category=${category}&content=${content}">${i}</a></li>
						</c:forEach>
							<li class="page-item d-block d-md-none"><a class="page-link"><span>${page} / ${end}</span></a></li>
							<li class="page-item"><a class="page-link" href="/searchNormal.notice?page=${page+1}&category=${category}&content=${content}"><span aria-hidden="true">&gt;</span></a></li>
							<li class="page-item"><a class="page-link" href="/searchNormal.notice?page=${end}&category=${category}&content=${content}"aria-label="Next"> <span aria-hidden="true">&raquo;</span></a></li>
						</ul>
					</nav>
					</c:otherwise>
					</c:choose>
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
</html>