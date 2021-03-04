<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Search Friend</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://kit.fontawesome.com/a24c081181.js" crossorigin="anonymous"></script>
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

.searchOutput .profile{
	display: flex;
}
#close{
	border-style: none;
	background-color: #efefef;
	border-radius: 4px;
	padding: 10px;
	color: gray;
	cursor: pointer;
}
#close:hover{
	background-color: lightgray;
}
.title{
	background-color: #efefef;
	color: gray;
}
.add{
	cursor: pointer;
}
</style>
</head>
<body>
	<div class="container-fluid p-0">
		<input type="hidden" value="${user.getUserName()}" id="userName">
		<div class="row p-3 px-4 title"><b>친구 검색</b></div>
		<div class="row p-3 searchOutput">
			<c:choose>
				<c:when test="${list!=null}">
					<c:forEach var="dto" items="${list }">
						<c:if test="${dto.getUserId() != userId }">
							<div class="row p-2 py-3 d-flex align-items-center profile">
								<div class="col-1">
									<c:forEach var="aDto" items="#{allUser}">
										<c:if test="${dto.getUserId() == aDto.getUserId() }">
											<c:choose>
												<c:when test="${aDto.getImg() == null }"><img src="/img/blue.png" width="30px"></c:when>
												<c:otherwise><img src="/files/${aDto.getImg()}" width="30px"></c:otherwise>
											</c:choose>
										</c:if>
									</c:forEach>
								</div>
								<div class="col-3 friendId">${dto.getUserId() }</div>
								<div class="col-7 friendName">${dto.getUserName() }</div>
								<div class="col-1 add"><i class="fas fa-plus"></i></div>
							</div>
						</c:if>
					</c:forEach>
				</c:when>
				<c:otherwise>검색결과가 없습니다.</c:otherwise>
			</c:choose>
		</div>
		<div class="row text-center btns">
			<div class="col-12 p-3" id="close"><b>취소</b></div>
		</div>
	</div>
	
	<script>
		$(document).on("click",".add",function(){
			var parent = $(this).parent();
			var friendId = parent.children(".friendId").text();
			var friendName = parent.children(".friendName").text();
			var userName = $("#userName").val();
			$.ajax({
				url: "/chatting/friendAdd",
				type: "get",
				data: {friendId:friendId,friendName:friendName,userName:userName},
				dataType: "json"
			}).done(function(resp){
				if(resp.msg == "이미 친구인 사용자입니다."){
					alert("이미 친구인 사용자입니다.");
				}else{
					alert("친구목록에 추가되었습니다.");
					opener.parent.location.reload();
					window.close();
				}
			}); 
		});
		
		$("#close").on("click", function() {
			window.close();
		});
	</script>
</body>
</html>