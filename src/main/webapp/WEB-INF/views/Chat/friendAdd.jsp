<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>friendAdd</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
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
/* Profile */
.profile {
	padding: 10px;
}
.friend{
	display: flex;
	align-items: center;
	margin: 10px 0px;
}
.friendName {
	cursor: pointer;
}
.title{
	background-color: #efefef;
	color: gray;
}
.btns>div{
	border-style: none;
	background-color: #efefef;
	border-radius: 4px;
	padding: 15px;
	color: gray;
	cursor: pointer;
}
.btns>div:hover {
	background-color: lightgray;
}
</style>
</head>
<body>
	<div class="container-fluid p-0">
		<div class="row p-3 px-4 title"><b>대화상대 초대</b></div>
		<input type="hidden" id="roomNumber" value="${roomNumber}">
		<input type="hidden" id="roomName" value="${roomName}">
		<%-- <div> 
			<div>참가자</div>
			<c:forEach var="jDto" items="${joinList}">
				<div class="joinMember">${jDto.getUserName()}</div>
			</c:forEach>
		</div> --%>
		<div class="row p-3 profile">
			<c:choose>
				<c:when test="${inviteList != null }">
					<c:forEach var="dto" items="${inviteList }">
						<div class="row p-2 py-3 friend">
							<div class="col-2 profileImg other">
								<c:forEach var="aDto" items="${allUser}">
									<c:if test="${dto.getFriendId() == aDto.getUserId() }">
										<c:choose>
											<c:when test="${aDto.getImg() == null }">
												<img src="/img/blue.png" width="30px">
											</c:when>
											<c:otherwise>
												<img src="/files/${aDto.getImg()}" width="30px">
											</c:otherwise>
										</c:choose>
									</c:if>
								</c:forEach>
							</div>
							<div class="col-8 friendName">${dto.getFriendName() }</div>
							<input type="hidden" value="${dto.getFriendId() }" class="friendId">
							<input type="checkbox" class="col-2 select" value1="${dto.getFriendId() }" value2="${dto.getFriendName() }">
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<div class="row">친구가 없습니다!</div>
				</c:otherwise>
			</c:choose>
		</div>
		<div class="row btns text-center">
			<div id="complete" class="col-sx-12 col-sm-6"><b>완료</b></div>
			<div id="close" class="col-sx-12 col-sm-6"><b>취소</b></div>
		</div>
	</div>

	<script>
		$("#complete").on("click", function() {
			var roomNumber = $("#roomNumber").val();
			var roomName = $("#roomName").val();
			var friendId = '';
			var friendName = '';

			$('input[type="checkbox"]:checked').each(function(index) {
				if (index != 0) {
					friendId += ',';
					friendName += ',';
				}
				friendId += $(this).attr("value1");
				friendName += $(this).attr("value2");
			});

			if (friendId == '') {
				alert("한명 이상의 친구를 선택해주세요!");
			} else {
				$.ajax({
					type : 'POST',
					url : '/chatting/invite',
					data : {
						friendId : friendId,
						friendName : friendName,
						roomNumber : roomNumber,
						roomName : roomName
					},
					dataType : "json"
				}).done(function(resp) {
					alert(resp.msg);
					opener.parent.location.reload();
					window.close();
				});
			}
		});

		$("#close").on("click", function() {
			window.close();
		});
	</script>
</body>
</html>