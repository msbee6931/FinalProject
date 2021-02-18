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
</head>
<body>
	<!-- HEADER -->
	<header>
		헤더
	</header>
	<!-- MAIN -->
	<div class="container">
		<div class="row title">학사일정</div>
		<div class="row year">2021학년도</div>
		<div class="row calendar-wrap">
			<c:forEach var="i" begin="1" end="12" step="1">
				<div class="row work-wrap">
					<div class="col-6 month">${i }월</div>
					<div class="col-6 days">
						<c:forEach var="list" items="${listMap }" varStatus="status">
							<c:if test="${list.month == i }">
								<div class="row work">
									<div class="col-6 col-sm-12 day">${list.day }일</div>
									<div class="col-6 col-sm-12 desc">${list.title }</div>
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