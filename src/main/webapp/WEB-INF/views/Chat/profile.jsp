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
	width: 200px;
	margin: 15px auto;
	border-style: none;
	background-color: #efefef;
	border-radius: 4px;
	padding: 7px;
	color: gray;
	cursor: pointer
}
#pickBtn>b{
	display: flex;
	justify-content: center;
}
#pickBtn:hover{
	background-color: lightgray;
}
#name{
	width: 90%;
	margin: 15px 30px;
	border: 1px solid lightgray;
	border-radius: 100px;
	padding: 10px;
}
.btns{
	display: flex;
	justify-content: center;
}
.btns>div{
	border-style: none;
	border-radius: 4px;
	padding: 10px;
	color: gray;
	cursor: pointer;
	background-color: #efefef;
	text-align: center;
	margin: 0px 20px;
}
.btns>div:hover {
	background-color: lightgray;
}
</style>
</head>
<body>
	<div class="container-fluid p-0">
		<div id="img" class="row pt-5">
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
		<div id="pickBtn" class="row" onclick="pick()"><b>사진 선택</b></div>
		
		<input type="text" value="${user.getUserName() }" id="name" class="row my-4">
		<input type="hidden" value="${user.getUserName() }" id="oriName">
		
		<div class="row btns py-3">
			<div id="complete" class="col-sx-12 col-sm-5"><b>완료</b></div>
			<div id="close" class="col-sx-12 col-sm-5"><b>닫기</b></div>
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