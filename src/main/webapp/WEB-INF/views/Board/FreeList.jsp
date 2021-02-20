<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>자유게시판</title>
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

.main{
	height:800px;
	border : 1px solid black;
}

.choose{
	border:3px solid #330099;
	border-radius:10px;
	width:10%;
	height : 200px;
	float:left;
	line-height: 45px;
	text-align:center;
	font-size:20px;
	text-decoration-line: underline;
}
.blank{
	border:1px solid white;
	float:left;
	width:10%;
}

#write{
	position:relative;
	left:1050px;
}
</style>
</head>
<body>
	
	<div class="contatiner">
		<jsp:include page="/WEB-INF/views/topHeader.jsp" />
		<jsp:include page="/WEB-INF/views/mainHeader.jsp" />

			<div class="row">
			<!-- <div class="col-xl-2 d-none d-xl-block"></div> -->
			<div class="col-xl-12 d- pt-4" id="box">
					<div class="row">
						<div class="col-12">
							<H3>
								<b>자유게시판</b>
							</H3>
						</div>
						<div class="col-12">
							 <form action = /free/search method="post" class="row">
								<div class="col-md-6 order-md-2">
									<div class="row p-4">

										<div class="col-sm-12 col-md-6 p-0">
											<input class="form-control" name="content" type="search" placeholder="제목을 입력해주세요" required>
										</div>
										<div class="col-sm-12 col-md-3 p-0 d-grid">
											<button type="submit" class="btn btn-primary d-md-block" id="search">검색</button>
										</div>
									</div>
								</div>
								<div class="col-md-6  align-self-center"></div>
							</form>
						</div>
					</div>
					<div class="row text-center" style="border-bottom: 1px solid black">
						<div class="col-md-2 d-none d-md-block">번호</div>
						<div class="col-md-4 d-none d-md-block">제목</div>
						<div class="col-md-2 d-none d-md-block">등록일</div>
						<div class="col-md-2 d-none d-md-block">작성자</div>
						<div class="col-md-2 d-none d-md-block">조회수</div>
					</div>
					<c:forEach var="i" items="${list}">
						<div class="row" style="border-bottom: 1px solid black">
							<div class="col-md-2 d-none d-md-block text-center">${i.seq}</div>
							<div class="col-md-4 col-12 text-left"><a href ="/free/view?seq=${i.seq }">${i.title }</a></div>
							<div class="col-md-2 col-3 text-center">${i.write_date}</div> 
							<div class="col-md-2 col-3 text-center">${i.writer }</div>
							<div class="col-md-2 d-none d-md-block text-center">${i.view_count}</div>
						</div>
					</c:forEach>

						<div class= "write"><button class="btn btn-primary d-md-block" id="write">글쓰기</button></div>
				</div>
			</div>

		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
	</div>
</body>
<script>
    document.getElementById("write").onclick = function(){
    	location.href="/free/writePage"
    }
    </script>
</html>