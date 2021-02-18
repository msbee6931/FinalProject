<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Room Create</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<style>
/* COMMON */
* {
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
}
/* CONTAINER */
#container {
	display: flex;
}
/* Profile */
.profile {
	padding: 10px;
}

.friend, .myProfile {
	display: flex;
	margin: 6px 0px;
	align-items: center;
}

.profileImg {
	padding-right: 6px;
}

.friendName {
	cursor: pointer;
}
</style>
</head>
<body>
	<div class="container">
		<input id="roomName" placeholder="방 제목을 입력해주세요.">
		<div class="profile">
			<c:choose>
				<c:when test="${friendList != null }">
					<c:forEach var="dto" items="${friendList }">
						<div class="friend">
							<div class="profileImg other">
								<c:forEach var="aDto" items="${allUser}">
									<c:if test="${dto.getFriendId() == aDto.getUserId() }">
										<c:choose>
											<c:when test="${aDto.getImg() == null }"><img src="/img/blue.png" width="30px"></c:when>
											<c:otherwise><img src="/files/${aDto.getImg()}" width="30px"></c:otherwise>
										</c:choose>
									</c:if>
								</c:forEach>
							</div>
							<div class="friendName">${dto.getFriendName() }</div>
							<input type="hidden" value="${dto.getFriendId() }" class="friendId">
							<input type="checkbox" class="select" value1="${dto.getFriendId() }" value2="${dto.getFriendName() }">
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<div>친구가 없습니다!</div>
				</c:otherwise>
			</c:choose>
		</div>
		<div class="btns">
			<input type="button" id="complete" value="완료">
			<input type="button" id="close" value="취소">
		</div>
	</div>

	<script>
		$("#complete").on("click",function(){
			var roomName = $("#roomName").val();
			var friendId = '';
			var friendName = '';
				
		    $('input[type="checkbox"]:checked').each(function (index) {
		        if(index!=0){
		        	friendId += ',';
		        	friendName += ',';
		        }
		    	friendId += $(this).attr("value1");
		    	friendName += $(this).attr("value2");
		    });
			
		    var arr = friendId.split(",");
		    
			if(roomName == null || roomName == ''){
				alert("방 제목을 입력해주세요!");
			}else if(arr.length < 2){
				alert("두명 이상의 친구를 선택해주세요!");
			}else{
				$.ajax({
					type: 'POST', 
					url: '/chatting/roomCreate', 
					data: {friendId: friendId,friendName:friendName,roomName:roomName},
			    	dataType: "json"
				}).done(function(resp){
					alert(resp.msg);
					opener.parent.location.reload();
					window.close();
				});	
			}
		});
		
		$("#close").on("click",function(){
			window.close();
		});
	</script>
</body>
</html>