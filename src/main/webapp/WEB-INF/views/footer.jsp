<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	font-family: 'Nanum Gothic', sans-serif;
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
}
footer{
	background-color: #efefef;
}
footer ul {
	display: flex;
	justify-content: space-around;
	padding: 15px 0;
	background-color: #efefef;
	margin: 0px;
}

.co {
	font-size: small;
	text-align: center;
}

.t {
	font-size: x-small;
}

.copy {
	font-size: x-small;
	text-align: center;
	color: #767474;
}

footer .co_info {
	padding-top: 30px;
	padding-bottom: 20px;
	border-top: 2px solid lightgray;
}
/* footer .policy{
	border-top: 1px solid whitesmoke;
} */

a {
	text-decoration: none;
	color: black;
}

li {
	list-style: none;
	text-align: center;
}
</style>
</head>
<body>
	<div class="container-fluid">
		<ul class="row policy">
			<li class="col-sm-12 col-lg-3"><a href="PersonalInfomation.home">이용안내</a></li>
			<li class="col-sm-12 col-lg-3"><a href="PersonalInfomation.home">개인정보처리방침</a></li>
			<li class="col-sm-12 col-lg-3"><a href="EmailNegative.home">이메일수집거부</a></li>
			<li class="col-sm-12 col-lg-3"><a href="LawOfOffical.home">공무원행동강령</a></li>
		</ul>
		<div class="row co_info">
			<p class="co">파이널프로젝트 &nbsp;|&nbsp; 2021.01.14-2021.03.05 &nbsp;</p>
			<p class="co">
				(조)아무것도모르조 &nbsp;|&nbsp;
				<span class="t">조장</span>
				김민섭 &nbsp;|&nbsp;
				<span class="t">조원</span>
				김용재, 김윤희, 박현, 한명환&nbsp;
			</p>
			<p class="co">
				주소 : 서울특별시 중구 남대문로 120 대일빌딩 3F KH 정보교육원 Eclass &nbsp;|&nbsp; &nbsp;호스팅 서비스 
				<span>Amazon Web Service(AWS)</span>
			</p>
			<p class="copy">Copyright © 2021 KHFinalProject All rights reserved.</p>
		</div>
	</div>
</body>
</html>