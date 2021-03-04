<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- include libraries(jQuery, bootstrap) -->
<link
	href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css"
	rel="stylesheet">
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script
	src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<!-- include summernote css/js -->
<link
	href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css"
	rel="stylesheet">
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js"></script>

<!-- ckeditor 사용을 위해 js 파일 연결 -->
<script src="/ckeditor/ckeditor.js"></script>


<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	font-family: 'Nanum Gothic', sans-serif;
}
div {
	border: 1px solid black
}

.container {
	width: 1000px;
	height: 600px;
	position: relative;
	text-align: center;
	background-color: #CCFFCC;
}

.title {
	width: 100%;
	hight: 30px;
	float: left;
	background-color: white;
}

.bar1 {
	float: left;
	width: 5%;
		background-color: white;
}

.bar2 {
	float: left;
	width: 50%;
		background-color: white;
}

.bar3 {
	float: left;
	width: 20%;
		background-color: white;
}

.bar4 {
	float: left;
	width: 20%;
		background-color: white;
}

.bar5 {
	float: left;
	width: 5%;
		background-color: white;
}

.main {
	float: left;
	width: 100%;
	height: 500px;
	background-color: white;
		overflow:scroll;
}

.rev {
	width: 1000px;
	height: 150px;
	position: relative;
	left: 17%;
}

.revBTN {
	width: 1000px;
	height: 300px;
	position: relative;
	left: 17%;
	text-align: right;
}

.revlist {
	width: 1000px;
	height: 800px;
	position: relative;
	left: 17%;
	border:1px solid white;
}

.rUpdModal {
	width: 600px;
	height: 200px;
	position: relative;
	left: 17%;
}

#btn2,#btn,#upt{
	border-radius : 10px;
	width:100px;
	height:30px;
	color: white;
	background-color: #435a7c;
	border: 1px solid white;
}
#write{
	border-radius : 10px;
	width:100px;
	height:30px;
	color: black;
	background-color: #CCFFCC;
	border: 1px solid white;
}
.replyLine{
	background-color: green;
	width: 1000px;
	height: 30px;
	position: relative;
	left: 17%;
	text-align: center;
	color: white;
	line-height:30px;
}

.replyLine2{
	background-color: green;
	width: 1000px;
	height: 50px;
	position: relative;
	left: 17%;
	text-align: right;
	color: white;
}

.replyLine3{
	background-color: #66CC66;
	width: 1000px;
	height: 50px;
	position: relative;
	left: 17%;
	text-align: center;
	color: white;
	line-height:50px;
	font-size:20px;
}
</style>
</head>
<body>
	<div class="container">

	
		<div class=title>자유게시판</div>

		<div class=bar1>${dto.seq }</div>
		<div class=bar2>${dto.title }</div>
		<div class=bar3>${dto.writer }</div>
		<div class=bar4>${dto.write_date }</div>
		<div class=bar5>${dto.view_count }</div>

		<div class=main>${dto.contents }</div>



		<div class=title>
			<form action="/free/delete" method="post">
				<input type=hidden id=seq name=seq value=${dto.seq }> <input
					type=hidden id=cpage name=cpage value=1>
				<c:if test="${id == dto.writer}">
					<input type=submit id=btn value="삭제">
					<input type=button id=upt value="수정하기">
					<script>
						document.getElementById("upt").onclick=function(){
						  	location.href="/free/updatePage?seq="+seq.value;
					  	 }
					</script>
				</c:if>
				<input type=button id=btn2 value="돌아가기">
			</form>
		</div>
	</div>
   
 <script>
	document.getElementById("btn2").onclick=function(){
           location.href="/free/boardList?cpage=1"
       }
   
   </script>

</body>
</html>