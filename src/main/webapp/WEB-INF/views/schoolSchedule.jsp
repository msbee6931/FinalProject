<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>school schedule</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	font-family: 'Nanum Gothic', sans-serif;
}
.work-wrap{
	border-bottom: 1px solid #efefef;
}
.calendar-wrap{
	margin-bottom: 50px;
}
.year{
	color: #193461;
	padding-bottom: 50px;
	border-bottom: 1px solid  black;
}
.month{
	display: flex;
	justify-content: center;
	align-items: center;
}
.day,.desc{
}
</style>
</head>
<body>
	<jsp:include page="/WEB-INF/views/topHeader.jsp" />
	<jsp:include page="/WEB-INF/views/mainHeader.jsp" />
	<div class="container-fluid px-5">
		<!-- <h1 class="row title">학사일정</h1> -->
		<h3 class="row year mt-5"><b>2021학년도</b></h3>
		<div class="row calendar-wrap py-5">
			<c:forEach var="i" begin="1" end="12" step="1">
				<div class="row work-wrap py-4">
					<h5 class="col-sm-12 col-md-3 month"><b>${i }월</b></h5>
					<div class="col-sm-12 col-md-9 days">
						<c:forEach var="list" items="${listMap }" varStatus="status">
							<c:if test="${list.month == i }">
								<div class="row work py-3">
									<div class="col-md-6 col-sm-12 day">${list.day }일</div>
									<div class="col-md-6 col-sm-12 desc">${list.title }</div>
								</div>
							</c:if>
						</c:forEach>
					</div>
				</div>
			</c:forEach>
		</div>
	</div>
	<!-- FOOTER -->
	<footer>
		<jsp:include page="/WEB-INF/views/footer.jsp" />
	</footer>
</body>
</html>