<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chat List</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<style>
	/* COMMON */
	*{
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
	}
	div{
		border: 1px solid black;
	}
	.container{
		padding: 50px;
	}
	.row{
		--bs-gutter-x: 0rem;
	}
	/* ROOMLIST */
	.enter{
		cursor: pointer;
	}
	.roomName{
	  	overflow: hidden;
  		text-overflow: ellipsis;
  		white-space: nowrap;
  		width: 200px;
  		height: 20px;
		display: block; 
	}
</style>
</head>
<body>
	<div class="container">
		<div class="row">채팅방</div>
		<div class="row list">
			<c:choose>
				<c:when test="${roomList != null }">
					<c:forEach var="dto" items="${roomList}">
						<div class="row p-2 enter">
							<input type="hidden" class="roomNumber" value="${dto.getRoomNumber() }">
							<div class="col roomName">
								<c:choose>
									<c:when test="${dto.getRoomName() == '' or dto.getRoomName() == null}">
										<c:forEach var="Jdto" items="${roomJoinList}">
											<c:if test="${dto.getRoomNumber() == Jdto.getRoomNumber() and user.getUserName() != Jdto.getUserName()}">
												${Jdto.getUserName() }
											</c:if>
										</c:forEach>
									</c:when>
									<c:otherwise>
										${dto.getRoomName() }
									</c:otherwise>
								</c:choose>
							</div>
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>채팅방이 없습니다.</c:otherwise>
			</c:choose>
		</div>
		<div class="row">
			<input type="button" id="roomCreate" value="방 생성">
		</div>
	</div>
	
	<script>
		$(document).on("click",".enter",function(){
			var roomNumber = $(this).children(".roomNumber").val();
			location.href="/chatting/chatDetail?roomNumber="+roomNumber;
			//$("#main").load("chatDetail?roomNumber="+roomNumber);
		});
		$("#roomCreate").on("click",function(){
			var url = "/chatting/chatRoomCreatePage";
			var name = "roomCreate";
            var option = "width = 500, height = 500, top = 100, left = 200";
			window.open(url,name,option);
		});
	</script>
</body>
</html>