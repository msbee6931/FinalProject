<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chat</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.3.0/sockjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
<style>
	*{
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
	}
	.container>div{
		border: 1px solid black;
	}
	.contents .me{
		text-align: right;
	}
	.contents .others{
		text-align: left;
	}
</style>
</head>
<body>
	<div class="container">
		<input type="text" id="userId" value="${userId }">
		<input type="text" id="roomNumber" value="${roomNumber }">
		<div class="contents">
			<c:if test="${list != null }">
				<c:forEach var="dto" items="${list}">
					<c:choose>
						<c:when test="${dto.getUserId() == userId}">
							<div class="me">${dto.getMessage() }</div>
						</c:when>
						<c:otherwise>
							<div class="others">${dto.getUserId() } : ${dto.getMessage() }</div>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</c:if>
		</div>
		<div class="sendMsg">
			<input type="text" id="message">
			<button id="send">Send</button>
		</div>
	</div>
	
	<script>
		var socket = new SockJS("/wechat"); // 엔드포인트 주소 넣기
		var client = Stomp.over(socket); // 연결 이후 작업 처리하는 코드
		
		client.connect({},function(resp){ // {}는 헤더정보 없으면  빈 칸
			console.log(resp);
			var roomNumber = $("#roomNumber").val();
			client.subscribe("/topic/chat/"+roomNumber,function(msg){ // 구독할 url 넣기
				var result = JSON.parse(msg.body);
				if(result.userId == $("#userId").val()){
					$(".contents").append("<p class='me'>"+result.message+"</p>");
				}else{
					$(".contents").append("<p class='others'>"+result.userId+" : "+result.message+"</p>");
				}
			});
		});
		
		$("#send").on("click",function(){
			var userId = $("#userId").val();
			var msg = $("#message").val();
			var roomNumber = $("#roomNumber").val();
			$("#message").val("");
			client.send("/app/chat",{},JSON.stringify({userId:userId,message:msg,roomNumber:roomNumber})); // 세번째 인자값은 보내려는 메세지(String 혹은 json 형태로)
		});
	</script>
</body>
</html>