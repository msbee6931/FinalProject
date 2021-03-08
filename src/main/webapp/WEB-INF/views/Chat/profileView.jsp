<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>profileView</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
	font-family: 'Nanum Gothic', sans-serif;
}
/* COMMON */
* {
	font-family: 'Nanum Gothic', sans-serif;
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
}
.container{
	padding: 50px;
}
.row{
	--bs-gutter-x: 0rem;
}
#img{
	width: 70px;
	margin: auto;
}
#pickBtn{
	width: 100px;
	margin: 15px auto;
	text-align: center;
}
#name{
	width: 100%;
	margin: 15px 0px;
}
#friendName,#friendId{
	display: flex;
	justify-content: center;
	padding-bottom: 30px;
}
.btns{
	display: flex;
	justify-content: center;
}
.btns>div{
	border-style: none;
	border-radius: 10px;
	padding: 10px;
	color: gray;
	cursor: pointer;
	background-color: #efefef;
	text-align: center;
}
.btns>div:hover {
	background-color: lightgray;
}
</style>
</head>
<body>
	<div class="container-fluid">
		<div id="img" class="row py-5">
			<c:choose>
				<c:when test="${friendInfo.getImg() != null }">
					<img src="/files/${friendInfo.getImg() }" width="30px">
				</c:when>
				<c:otherwise>
					<img src="/img/deepblue.png" width="30px">
				</c:otherwise>
			</c:choose>
		</div>		
		<div class="row" id="friendName">${friendInfo.getUserName() }</div>
		<div class="row" id="friendId">${friendInfo.getUserId() }</div>
		<input type="hidden" id="userName" value="${user.getUserName() }">
		<c:choose>
			<c:when test="${friend != null }">
				<div class="row text-center btns">
					<div id="close" class="col-10"><b>닫기</b></div>
				</div>
			</c:when>
			<c:otherwise>
				<div class="row btns">
					<div id="friendAdd" class="col-sx-12 col-sm-5 mx-2"><b>친구추가</b></div>
					<div id="close" class="col-sx-12 col-sm-5"><b>닫기</b></div>
				</div>
			</c:otherwise>
		</c:choose>		
	</div>
	
	<script>
		$("#friendAdd").on("click",function(){
			var friendId = $("#friendId").text();
			var friendName = $("#friendName").text();
			var userName = $("#userName").val();
			
			$.ajax({
				url: "/chatting/friendAdd",
				type: "get",
				data: {friendId:friendId,friendName:friendName,userName:userName},
				dataType: "json"
			}).done(function(resp){
				alert("친구목록에 추가되었습니다.");
				opener.parent.location.reload();
				window.close();
			});
		});
		
		$("#close").on("click",function(){
			window.close();
		});
	</script>
</body>
</html>