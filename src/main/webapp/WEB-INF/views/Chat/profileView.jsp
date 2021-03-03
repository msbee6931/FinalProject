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
/* COMMON */
* {
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
</style>
</head>
<body>
	<div class="container">
		<div class="row">프로필</div>
		<div id="img" class="row">
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
		<input type="hidden" id="friendId" value="${friendInfo.getUserId() }">
		<input type="hidden" id="userName" value="${user.getUserName() }">
		<c:choose>
			<c:when test="${friend != null }">
				<div class="row btns">
					<input type="button" value="닫기" id="close" class="col-12 col-sm-6">
				</div>
			</c:when>
			<c:otherwise>
				<div class="row btns">
					<input type="button" value="친구 추가" id="friendAdd" class="col-12 col-sm-6">
					<input type="button" value="닫기" id="close" class="col-12 col-sm-6">
				</div>
			</c:otherwise>
		</c:choose>		
	</div>
	
	<script>
		$("#friendAdd").on("click",function(){
			var friendId = $("#friendId").val();
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