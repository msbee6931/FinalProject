<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Room Create</title>
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
/* Profile */
#roomName{
	width: 90%;
	margin: 10px 35px;
	padding: 10px;
	border: 1px solid lightgray;
	border-radius: 100px;
}
.friend{
	display: flex;
	align-items: center;
	margin: 10px 0px;
}
.friendName {
	cursor: pointer;
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
.btns>div:hover{
	background-color: lightgray;
}
</style>
</head>
<body>
	<div class="container-fluid p-3">
		<input id="roomName" class="row" placeholder="방 제목을 입력해주세요.">
		<div class="row py-3 profile">
			<c:choose>
				<c:when test="${friendList != null }">
					<c:forEach var="dto" items="${friendList }">
						<div class="row p-0 py-2 friend">
							<div class="col-2 profileImg other text-center">
								<c:forEach var="aDto" items="${allUser}">
									<c:if test="${dto.getFriendId() == aDto.getUserId() }">
										<c:choose>
											<c:when test="${aDto.getImg() == null }"><img src="/img/blue.png" width="30px"></c:when>
											<c:otherwise><img src="/files/${aDto.getImg()}" width="30px"></c:otherwise>
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
					<div>친구가 없습니다!</div>
				</c:otherwise>
			</c:choose>
		</div>
		<div class="row btns">
			<div id="complete" class="col-sx-12 col-sm-5"><b>완료</b></div>
			<div id="close" class="col-sx-12 col-sm-5"><b>취소</b></div>
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