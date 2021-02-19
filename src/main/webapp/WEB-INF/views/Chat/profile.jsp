<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Profile</title>
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
		<div class="row">프로필 편집</div>
		<div id="img" class="row">
			<c:choose>
				<c:when test="${user.getImg() != null }">
					<img src="/files/${user.getImg() }" width="30px">
					<input type="hidden" value="Y" id="coment">
				</c:when>
				<c:otherwise>
					<img src="/img/deepblue.png" width="30px">
					<input type="hidden" value="N" id="coment">
				</c:otherwise>
			</c:choose>
		</div>
		
		<form name="profileForm" id="profileForm" method="POST" ENCTYPE="multipart/form-data">
    		<input type="file" id="file" name="file" style="display:none;" onchange="setThumbnail(event)">
		</form>
		<input type="button" id="pickBtn" class="row" value="사진 선택" onclick="pick()">
		
		<input type="text" value="${user.getUserName() }" id="name" class="row">
		<input type="hidden" value="${user.getUserName() }" id="oriName">
		
		<div class="row btns">
			<input type="button" value="완료" id="complete" class="col-12 col-sm-6">
			<input type="button" value="취소" id="close" class="col-12 col-sm-6">
		</div>
	</div>
	
	<script>
		function pick(){
			$('#file').click();
		}
		
		function setThumbnail(event) { 
			var reader = new FileReader();
			reader.onload = function(event) { 
				var img = document.createElement("img"); 
				img.setAttribute("src", event.target.result); 
				img.setAttribute("width", "30px");
				$("#img").html(img); 
			}; 
			reader.readAsDataURL(event.target.files[0]);
		}

		$("#complete").on("click",function(){
			var coment = $("#coment").val();
			var name = $("#name").val();
			var oriName = $("#oriName").val();
			var formData = new FormData($("#profileForm")[0]);
			
			if(coment == null && name != oriName){
				// 프로필 사진과 이름을 모두 변경했을 때
				$.ajax({
					type: 'POST', 
					url: '/chatting/profileUpdate?userName='+name, 
					processData: false, // 필수 
					contentType: false, // 필수 
					data: formData
				}).done(function(resp){
					alert("프로필 변경 성공!");
					opener.parent.location.reload();
					window.close();
				});
			}else if(name != oriName){
				// 이름을 변경했을 때
				$.ajax({
					type: 'POST', 
					url: '/chatting/profileUpdateName', 
					data: {userName:name}
				}).done(function(resp){
					alert("프로필 변경 성공!");
					opener.parent.location.reload();
					window.close();
				});
			}else if(coment == null){
				// 프로필 사진을 변경했을 때
				$.ajax({
					type: 'POST', 
					url: '/chatting/profileUpdate', 
					processData: false, // 필수 
					contentType: false, // 필수 
					data: formData
				}).done(function(resp){
					alert("프로필 변경 성공!");
					opener.parent.location.reload();
					window.close();
				});
			}else{
				alert("변경사항이 없습니다!");
			}
			
		});
		
		$("#close").on("click",function(){
			window.close();
		});
	</script>
</body>
</html>