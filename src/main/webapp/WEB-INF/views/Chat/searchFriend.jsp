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

.searchOutput .profile{
	display: flex;
}
</style>
</head>
<body>
	<div class="container">
		<input type="hidden" value="${user.getUserName()}" id="userName">
		<div class="row p-2">친구 검색</div>
		<div class="row searchOutput">
			<c:choose>
				<c:when test="${list!=null}">
					<c:forEach var="dto" items="${list }">
						<c:if test="${dto.getUserId() != userId }">
							<div class="row p-2 d-flex align-items-center profile">
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
								<div class="col-2 friendId">${dto.getUserId() }</div>
								<div class="col-8 friendName">${dto.getUserName() }</div>
								<input type="button" class="col-1 add" value="+">
							</div>
						</c:if>
					</c:forEach>
				</c:when>
				<c:otherwise>검색결과가 없습니다.</c:otherwise>
			</c:choose>
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
					location.href="/chatting/chatHome?userId="+resp.userId;
				}
			}); 
			// location.href="/chatting/friendAdd?friendId="+friendId+"&friendName="+friendName+"&userName="+userName;
		});
	</script>
</body>
</html>