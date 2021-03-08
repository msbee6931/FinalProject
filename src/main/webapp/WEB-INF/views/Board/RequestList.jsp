<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>건의 게시판</title>
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
	/* box-sizing: border-box; */
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}
.container{
	 /* display: flex; */
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
#search, #write{
	background-color: #495d8f;
	color: #ffffff;
}
#search:hover,
#write:hover {
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
.write{
	display: flex;
	justify-content: flex-end;
}
.navi{
text-align:center;
}
</style>
</head>
<body>
	<div class="contatiner">
		<jsp:include page="/WEB-INF/views/topHeader.jsp" />
		<jsp:include page="/WEB-INF/views/mainHeader.jsp" />
		<div class="container pb-5">
			<div class="row pt-3">
			<div class="d-flex flex-row-reverse">
				<div class="bd-highlight d-none d-lg-block">
					<h5>
						<a href="/">Home&gt;</a><a href="/free/boardList">게시판&gt;</a><a href="/request/boardList">건의게시판</a>
					</h5>
				</div>
			</div>
		</div>
		
		<div class="row">
			<div class="col-lg-2 d-grid text-center" id="sideBox">
					<!--collapse 추가  -->
					<div class="col-12 d-none d-lg-block py-5" id="subLabel" >
						<h3><b>건의게시판</b></h3>
					</div>
					<nav class="navbar navbar-expand-lg mb-2 nav-justified ">
					<div class="col d-grid">
						<button type="button" class="btn mb-1 d-block d-lg-none "data-bs-toggle="collapse" data-bs-target="#listCollapse" id="btnCol"><b>건의게시판</b></button>
					</div>
						<div class="collapse navbar-collapse" id="listCollapse" >
							<ul class="navbar-nav flex-column" id="nav-ul">
								<li class="nav-item nav-li" ><a class="nav-link" href="/free/boardList">자유게시판</a>
								</li>
								<li class="nav-item nav-li"><a class="nav-link active " href="/request/boardList">건의게시판</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			<!-- <div class="blank"></div> -->
			
				<!-- <div class="col-xl-2 d-none d-xl-block"></div> -->
				<div class="col-lg-10 d- pt-4" id="box">
					<div class="row">
						<div class="col-12">
							<H3>
								<b>건의게시판</b>
							</H3>
						</div>
						<div class="col-12">
							<form action=/request/search method="post" class="row">
								<div class="col-md-6 order-md-2">
									<div class="row pb-3">
										<div class="col-sm-12 col-md-9 p-0">
											<input class="form-control" name="title" type="search"
												placeholder="제목을 입력해주세요" required>
										</div>
										<div class="col-sm-12 col-md-3 p-0 d-grid">
											<button type="submit" class="btn btn-primary d-md-block"
												id="search">검색</button>
										</div>
									</div>
								</div>
								<div class="col-md-6  align-self-center"></div>
							</form>
						</div>
					</div>
					<div class="row text-center py-2" style="border-bottom: 1px solid gray">
						<div class="col-md-2 d-none d-md-block">번호</div>
						<div class="col-md-3 d-none d-md-block">제목</div>
						<div class="col-md-2 d-none d-md-block">등록일</div>
						<div class="col-md-2 d-none d-md-block">작성자</div>
						<div class="col-md-2 d-none d-md-block">답변</div>
						<div class="col-md-1 d-none d-md-block">조회수</div>
					</div>
					<c:forEach var="i" items="${list}">
						<div class="row py-2" style="border-bottom: 1px solid #efefef">
							<div class="col-md-2 d-none d-md-block text-center">${i.seq}</div>
							<div class="col-md-3 col-12 text-left">
								<a href="/request/view?seq=${i.seq }">${i.title }</a>
							</div>
							<div class="col-md-2 col-3 text-center">${i.write_date}</div>
							<div class="col-md-2 col-3 text-center">${i.writer }</div>
							<c:choose>
								<c:when test="${i.reply==null }">
									<div class="col-md-2 col-3 text-center">[None]</div>
								</c:when>
								<c:otherwise>
									<div class="col-md-2 col-3 text-center">[Reply]</div>
								</c:otherwise>
							</c:choose>

							<div class="col-md-1 d-none d-md-block text-center">${i.view_count}</div>
						</div>
					</c:forEach>
					<div class="navi mt-3 text-center"><a href=/request/boardList?cpage=${page-1}><-</a> ${navi } <a href=/request/boardList?cpage=${page+1}>-></a></div>
					<div class="write">
						<button class="btn btn-primary d-md-block mt-3" id="write">글쓰기</button>
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
<script>
	document.getElementById("write").onclick = function() {
		location.href = "/request/toWrite"
	}
</script>
</html>