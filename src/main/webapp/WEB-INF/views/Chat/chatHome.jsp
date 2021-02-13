<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<style>
	/* COMMON */
	*{
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
	}
	/* Profile */
	.profile{
		padding: 10px;	
	}
	.friend,
	.myProfile {
		display: flex;
		margin: 6px 0px;
		align-items: center;
	}
	.profileImg{
		padding-right: 6px;
	}
	.friendName {
		cursor: pointer;
	}
</style>
</head>
<body>
	<div class="container">
		<div class="profile">
			<div class="myProfile">
				<div class="profileImg user">이미지</div>
				<input type="hidden" id="userId" value=${user.getUserId() }>
				<div id="userName">${user.getUserName() }</div>
			</div>
			<div class="otherProfile">
				<c:choose>
					<c:when test="${list != null }">
						<c:forEach var="dto" items="${list }">
							<div class="friend">
								<div class="profileImg friend">이미지</div>
								<div class="friendName" id="friendName">${dto.getFriendName() }</div>
								<input type="hidden" value="${dto.getFriendId() }" class="friendId" id="friendId">				
							</div>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<div>친구가 없습니다!</div>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
		<div class="btn">
			<a href="#">home</a>
			<a href="/chatting/chatList">List</a>
		</div>
	</div>
	
	<script>
	$("#friendName").on("dblclick",function(){
		var userId = $("#userId").val();
		var friendId = $("#friendId").val();
		var userName = $("#userName").text();
		var friendName = $("#friendName").text();
		location.href="/chatting/roomCheck?userId="+userId+"&friendId="+friendId+"&userName="+userName+"&friendName="+friendName;
	});
	</script>
</body>
</html>