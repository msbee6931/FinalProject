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
#viewBox{
	background-color:#f5f5f5;
	height: 50px;
}
#refBox{
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
</style>
</head>
<body>
	<div class="contatiner">
    <jsp:include page="/WEB-INF/views/topHeader.jsp"/>
	<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
		<div class="container">
				<div class="d-flex flex-row-reverse">
					<div class="bd-highlight d-none d-lg-block">
						<h5>
							<a href="/">Home&gt;</a><a href="/reference/refList.ref?page=1">자료실</a>
						</h5>
					</div>
				</div>
			<div class="row">
				<!-- <div class="col-xl-2 d-none d-xl-block"></div> -->
				<div class="col-xl-12 mb-5" id="box">
					<div class="row mx-2 ">
						<div class="col-12 py-4" style="border-bottom: 2px solid black">
							<H3>
								<b>자료실</b>
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
							<fmt:parseDate var="Date" value="${dto1.write_date}"
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
					<div class="row mx-2" id="refBox">
						<div class="col-12 col-md-2 p-2 text-center">첨부파일</div>
						<div class="col-12 col-md-10 " id="downloadBox">
							<c:if test="${!empty list}">
								<c:forEach var="i" items="${list}">
								<div class="row align-self-center my-1">
									<div class="col-8"><img src="/img/file.png"><a href="/reference/download.ref?seq=${i.seq}"> ${i.fileName}</a></div>
									<div class="col-4"><button type="button" class="download">다운로드</button><input type="hidden" value="${i.seq}"></div>
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
						<div class="col-8 -md-10"><a href="/reference/view.ref?seq=${dto2.seq}">${dto2.title}</a></div>
					</div>
					</c:if>
					<c:if test="${!empty dto3}">
					<div class="row  p-3" style="border-top:1px solid black">
						<div class="col-4 col-md-2 text-center"><img src="/img/down.png">이전글</div>
						<div class="col-8 col-md-10"><a href="/reference/view.ref?seq=${dto3.seq}">${dto3.title}</a></div>
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
		location.href="/reference/download.ref?seq="+seq;
	})
	$("#backBtn").on("click",function(){
		location.href="/reference/refList.ref?page=1"
	})
</script>
</html>