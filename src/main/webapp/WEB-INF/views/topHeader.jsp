<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Top Header</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
@font-face {
	font-family: 'GmarketSansMedium';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}
.headt1 {
font-family: 'GmarketSansMedium';
	font-size: 13px;
	color: white;
	background-color: #435a7c;
}
</style>
</head>
<body>
		<div class="d-flex flex-row-reverse headt1 ">
			<a href="/nex" class="p-4">종합정보</a> 
				<c:choose>
				<c:when test="${std == null && pro == null && adm == null}">
					<a href="/loginPage.log" class="p-4">로그인</a>
				</c:when>
				<c:otherwise>
					<a href="/logOut.log" class="p-4">로그아웃</a>
				</c:otherwise>
			</c:choose>
		</div>
</body>
</html>