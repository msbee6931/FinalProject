<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>자유게시판 글쓰기</title>

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
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}
/* div {
	border: 1px solid gray;
} */
.container {
 	width: 1000px;
	height: 600px;
/* 	position: relative;  */
	text-align: center;
/* 	margin: 0px; */
	padding: 0px;
	border: 1px solid lightgray;
}

.main {
   height: 500px;
/*    background-color: white; */
   overflow:auto;
}

.comment{
	background-color: #efefef;
	padding: 10px;
}
.info {
	display: flex;
	justify-content: space-around;
	background-color: #efefef;
	padding: 10px;
	margin-bottom: 10px;
}
.comment-wrap{
	width: 1000px;
	height: 600px;
/* 	position: relative;  */
	padding: 0px;
	margin: auto;
}
.replyLine{
	text-align: center;
	margin: 20px 0px;
}
button,input[type='button'],input[type='submit'] {
	padding: 12px;
	border-style: none;
	background-color: #efefef;
	border-radius: 4px;
}
button:hover,input[type='button']:hover,input[type='submit']:hover{
	background-color: lightgray
}
.replyLine2{
 text-align: right;
}
#navi{
	margin: 10px;
	text-align:center;
}
.revlist{
	margin-top: 10px;
}.title{
	display: flex;
	justify-content: space-between;
	margin: 10px;
}#mainReply{
	background-color: lightgray;
	width: 1000px;
	height: 200px;
	text-align: center;
		padding: 10px;
	margin-bottom: 10px;
	font-size: 20px;
	color:green;
}#reply{
	width:100%;
	height: 200px;
	float:left;
	background-color:white;
}
</style>
</head>
<body>
	<div class="container">
		<h4 class=title><b>건의게시판</b></h4>

		<div class="info">
			<div class=bar1>${dto.seq }</div>
			<div class=bar2>${dto.title }</div>
			<div class=bar3>${dto.writer }</div>
			<div class=bar4>${dto.write_date }</div>
			<div class=bar5>${dto.view_count }</div>
		</div>

		<div class=main>${dto.contents }</div>

		<div class=title>
			<form action="/request/delete" method="post">
				<input type=hidden id=seq name=seq value=${dto.seq }> <input
					type=hidden id=cpage name=cpage value=1>
				<c:if test="${id == dto.writer}">
					<div class="btns">
						<input type="submit" id="btn" value="삭제">
						<input type="button" id="upt" value="수정하기">
					</div>
					<script>
						document.getElementById("upt").onclick=function(){
						  	location.href="/request/updatePage?seq="+seq.value;
					  	 }
					</script>
				</c:if>
			</form>
			<input type="button" id="btn2" value="돌아가기">
		</div>
	</div>
	
		<h4 class="replyLine"><b>관리자의 대답</b></h4>

		<c:choose>
			<c:when test="${dto.reply == null }">
			<div class="col-12" id = reply>
				<div class="col-12 col-sm-2"></div>
				<div id= mainReply class="col-12 col-sm-10">아직 관리자의 답변이 없습니다.</div>
				</div>
			</c:when>
			<c:otherwise>
				<div class="col-12" id =reply >
				<div class="col-12 col-sm-2"></div>
				<div id= mainReply class="col-12 col-sm-10">${dto.reply }</div>
				</div>
			</c:otherwise>
		</c:choose>


				<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
	

	<script>      
      
	document.getElementById("btn2").onclick=function(){
           location.href="/request/boardList?cpage=1"
       }
   
          
   </script>

</body>
</html>