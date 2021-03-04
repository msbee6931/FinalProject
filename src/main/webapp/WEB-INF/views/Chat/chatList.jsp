<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chat List</title>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.3.0/sockjs.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
	integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
	crossorigin="anonymous"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
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
.container {
	padding: 50px;
}
.row { -
	-bs-gutter-x: 0rem;
}
p{
	margin-bottom: 0rem;
}
/* ROOMLIST */
.enter {
	cursor: pointer;
}
.roomName {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 200px;
	/* height: 20px; */
	display: block;
}
img {
	margin-right: 10px;
}
.detail {
	width: 100%;
	display: flex;
	align-items: center;
}
.top{
	border-bottom: 1px solid lightgray;
	text-align: right;
}
.btns{
	display: flex;
	justify-content: center;
}
.btns>div{
	text-align: center;
}
.message{
	padding-left: 12px;
}
.count{
	display: flex;
	justify-content: center;
	width: 25px;
	height: 25px;
	line-height: 25px;
	background-color: #ff5c36;
	border-radius: 50px;
	color: #ffffff;
}
.msgContent{
	display: flex;
	justify-content: space-between;
}
.top,.btns{
	cursor: pointer;
}
</style>
</head>
<script type="text/javascript">
 window.history.forward();
 function noBack(){
	window.history.forward();
 }
</script>
<body onload="noBack();" onpageshow="if(event.persisted) noBack();" onunload="">
	<div class="container-fluid p-0">
		<div class="row p-4 px-5 top" id="roomCreate" title="채팅방 생성"><i class="fas fa-plus"></i></div>
		<div class="row list">
			<c:choose>
				<c:when test="${roomList != null }">
					<c:forEach var="dto" items="${roomList}">
						<div class="row p-3 px-5 enter">
							<input type="hidden" class="roomNumber" value="${dto.getRoomNumber() }">
							<div class="col-12 d-flex roomInfo">
								<c:choose>
									<c:when
										test="${dto.getRoomName() == '' or dto.getRoomName() == null}">
										<img src="/img/chat2.png" class="col-1">
										<div class="row px-3 detail">
										<c:forEach var="Jdto" items="${roomJoinList}">
											<c:if test="${dto.getRoomNumber() == Jdto.getRoomNumber() and user.getUserName() != Jdto.getUserName()}">
													<div class="col-2">${Jdto.getUserName() }</div>
													<c:if test="${messageList != null }">
														<c:forEach var="list" items="${messageList}">
															<c:forEach var="cDto" items="${list }" varStatus="status">
																<c:if test="${cDto.getRoomNumber() == dto.getRoomNumber()}">
																	<c:if test="${status.last == true}">
																		<div class="row msgContent">
																			<div class="col-10 message">
																			<c:choose>
																			<c:when test="${cDto.getOriName() == null }">
																				<div class="row">
																					<p class="col">${cDto.getMessage() }</p>
																				</div>
																			</c:when>
																			<c:when test="${cDto.getOriName() != null and cDto.getSavedName() == null}">
																				<div class="row">
																					<div class="col">이모티콘을 보냈습니다.</div>
																				</div>
																			</c:when>
																			<c:when test="${cDto.getFormat()=='gif' or cDto.getFormat()=='png' or cDto.getFormat()=='jpg' or cDto.getFormat()=='raw' or cDto.getFormat()=='tif' or cDto.getFormat()=='tiff' or cDto.getFormat()=='bpm' or cDto.getFormat()=='rle' or cDto.getFormat()=='dib'}">
																				<div class="row">
																					<div class="col">이미지를 보냈습니다.</div>
																				</div>
																			</c:when>
																			<c:otherwise>
																				<div class="row">파일을 보냈습니다.</div>
																			</c:otherwise>
																		</c:choose>
																		</div>
																		<div class="col-2 count">${status.count }</div>
																	</div>
																	</c:if>
																</c:if>
															</c:forEach>
														</c:forEach>
													</c:if>
											</c:if>
										</c:forEach>
										</div>
									</c:when>
									<c:otherwise>
										<img src="/img/chat4.png" class="col-1">
										<div class="row px-3 detail">
											<div class="col-12">${dto.getRoomName() }</div>
											<c:if test="${messageList != null }">
														<c:forEach var="list" items="${messageList}">
															<c:forEach var="cDto" items="${list }" varStatus="status">
																<c:if test="${cDto.getRoomNumber() == dto.getRoomNumber()}">
																	<c:if test="${status.last == true}">
																		<div class="row msgContent">
																			<div class="col-10 message">
																		<c:choose>
																			<c:when test="${cDto.getOriName() == null }">
																				<div class="row">
																					<p class="col">${cDto.getMessage() }</p>
																				</div>
																			</c:when>
																			<c:when test="${cDto.getOriName() != null and cDto.getSavedName() == null}">
																				<div class="row">
																					<div class="col">이모티콘을 보냈습니다.</div>
																				</div>
																			</c:when>
																			<c:when test="${cDto.getFormat()=='gif' or cDto.getFormat()=='png' or cDto.getFormat()=='jpg' or cDto.getFormat()=='raw' or cDto.getFormat()=='tif' or cDto.getFormat()=='tiff' or cDto.getFormat()=='bpm' or cDto.getFormat()=='rle' or cDto.getFormat()=='dib'}">
																				<div class="row">
																					<div class="col">이미지를 보냈습니다.</div>
																				</div>
																			</c:when>
																			<c:otherwise>
																				<div class="row">파일을 보냈습니다.</div>
																			</c:otherwise>
																		</c:choose>
																	</div>
																	<div class="col-2 count">${status.count }</div>
																		</div>
																	</c:if>
																</c:if>
															</c:forEach>
														</c:forEach>
													</c:if>
										</div>
									</c:otherwise>
								</c:choose>
							</div>
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>채팅방이 없습니다.</c:otherwise>
			</c:choose>
		</div>
		<div class="row etc">
			<div class="row btns py-4" style="background-color:#efefef">
				<div id="goChatHome" class="col-md-6 col-sm-12" title="채팅홈"><i class="fas fa-home"></i></div>
			</div>
		</div>
	</div>

	<script>
		var socket = new SockJS("/wechat"); // 엔드포인트 주소 넣기
		var client = Stomp.over(socket); // 연결 이후 작업 처리하는 코드
		
		client.connect({}, function(resp) { // {}는 헤더정보 없으면  빈 칸
			var count = 0;

			client.subscribe("/topic/chatList", function(msg) {
				var result = JSON.parse(msg.body);

				$(".enter").each(function(i) {
					var roomNumber = $(this).children(".roomNumber").val();
						if (result.roomNumber == roomNumber) {
							var parent = $(this).children(".roomInfo").children(".detail");
							var msg = parent.children(".msgContent");
							
							if(msg.length > 0){
								count = msg.children(".count").text(); // 기존의 count를 가져옴
								count *= 1; // 불러온 count는 문자열이므로 숫자로 형변환
								count += 1;
								msg.children(".count").text(count);
								msg.children(".message").text(result.message);
							}else{
								count += 1;
								parent.append("<div class='row msgContent'><div class='col-10 message'>"+result.message+"</div><div class='col-2 count'>"+count+"</div></div>");
							}
						}
				});
			});
			client.subscribe("/topic/chatListE", function(msg) {
				var result = JSON.parse(msg.body);

				$(".enter").each(function(i) {
					var roomNumber = $(this).children(".roomNumber").val();
						if (result.roomNumber == roomNumber) {
							var parent = $(this).children(".roomInfo").children(".detail");
							var msg = parent.children(".msgContent");

							if(msg.length > 0){
								count = msg.children(".count").text(); // 기존의 count를 가져옴
								count *= 1; // 불러온 count는 문자열이므로 숫자로 형변환
								count += 1;
								msg.children(".count").text(count);
								msg.children(".message").text("이모티콘을 보냈습니다.");
							}else{
								count += 1;
								parent.append("<div class='row msgContent'><div class='col-10 message'>이모티콘을 보냈습니다.</div><div class='col-2 count'>"+count+"</div></div>");
							}
						}
				});
			});
			client.subscribe("/topic/chatListI", function(msg) {
				var result = JSON.parse(msg.body);

				$(".enter").each(function(i) {
					var roomNumber = $(this).children(".roomNumber").val();
						if (result.roomNumber == roomNumber) {
							var parent = $(this).children(".roomInfo").children(".detail");
							var msg = parent.children(".msgContent");
							
							if(msg.length > 0){
								count = msg.children(".count").text(); // 기존의 count를 가져옴
								count *= 1; // 불러온 count는 문자열이므로 숫자로 형변환
								count += 1;
								msg.children(".count").text(count);
								msg.children(".message").text("사진을 보냈습니다.");
							}else{
								count += 1;
								parent.append("<div class='row msgContent'><div class='col-10 message'>사진을 보냈습니다.</div><div class='col-2 count'>"+count+"</div></div>");
							}
						}
				});
			});
			client.subscribe("/topic/chatListF", function(msg) {
				var result = JSON.parse(msg.body);

				$(".enter").each(function(i) {
					var roomNumber = $(this).children(".roomNumber").val();
						if (result.roomNumber == roomNumber) {
							var parent = $(this).children(".roomInfo").children(".detail");
							var msg = parent.children(".msgContent");
								
							if(msg.length > 0){
								count = msg.children(".count").text(); // 기존의 count를 가져옴
								count *= 1; // 불러온 count는 문자열이므로 숫자로 형변환
								count += 1;
								msg.children(".count").text(count);
								msg.children(".message").text("파일을 보냈습니다.");
							}else{
								count += 1;
								parent.append("<div class='row msgContent'><div class='col-10 message'>파일을 보냈습니다.</div><div class='col-2 count'>"+count+"</div></div>");
							}
						}
				});
			});
		});

		$(document).on("click", ".enter", function() {
			var roomNumber = $(this).children(".roomNumber").val();
			location.href = "/chatting/chatDetail?roomNumber=" + roomNumber;
			//$("#main").load("chatDetail?roomNumber="+roomNumber);
		});
		$("#roomCreate").on("click", function() {
			var url = "/chatting/chatRoomCreatePage";
			var name = "roomCreate";
			var option = "width = 500, height = 500, top = 100, left = 200";
			window.open(url, name, option);
		});
		// 채팅홈으로 가기
		$("#goChatHome").on("click", function() {
			location.href = "/chatting/chatHome";
		});
	</script>
</body>
</html>