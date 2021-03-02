<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Top Header</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<style>
.headt1 {
	font-size: 13px;
	text-align: right;
	/* background-color: #435a7c; */
	background-color: #193461;
	padding: 15px 0px;
}
.txt{
	color: #ffffff;
}
</style>
</head>
<body>
	<div class="row headt1 ">
		<div class="col">
			<c:choose>
				<c:when test="${std == null && pro == null && adm == null}">
					<a href="/loginPage.log" class="p-4 txt">로그인</a>
				</c:when>
				<c:otherwise>
					<a href="/logOut.log" class="p-4 txt">로그아웃</a>
				</c:otherwise>
			</c:choose>
			<a href="/nex" class="p-4 txt">종합정보</a> 
		</div>
	</div>
</body>
</html>