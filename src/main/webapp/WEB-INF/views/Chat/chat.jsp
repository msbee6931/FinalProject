<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chat</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.3.0/sockjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
<script src="https://kit.fontawesome.com/a24c081181.js" crossorigin="anonymous"></script>
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
	/* ROOM MEMBER */
	
	/* CHAT */
	.contents .me{
		text-align: right;
	}
	.contents .others{
		text-align: left;
	}
	.contents img{
		width: 100px;
		height: 100px;
	}
	.etc{
		display: flex;
		justify-content: space-around;
	}
</style>
</head>
<body>
	<div class="container">
		<input type="hidden" id="userId" value="${userId }">
		<input type="hidden" id="roomNumber" value="${roomNumber }">
		<input type="button" id="invite" value="초대하기">
		<input type="button" id="leave" value="방 나가기">
		<div class="row"> 
			<div class="row">참가자</div>
			<div class="row members">
				<c:forEach var="jDto" items="${joinList}">
					<c:forEach var="aDto" items="${allUser}">
						<c:if test="${jDto.getUserId() == aDto.getUserId() }">
							<div class="col member">
								<div class="col">
									<c:choose>
										<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" width="30px" class="joinUserImg"></c:when>
										<c:otherwise><img src="/files/${aDto.getImg()}" width="30px" class="joinUserImg"></c:otherwise>
									</c:choose>
								</div>
								<div class="joinUserId" style="display: none">${jDto.getUserId()}</div>
								<div class="col joinUserName">${jDto.getUserName()}</div>
							</div>
						</c:if>
					</c:forEach>
				</c:forEach>
			</div>
		</div>
		<div class="row contents">
			<c:if test="${list != null }">
				<c:forEach var="dto" items="${list}">
					<c:choose>
						<c:when test="${dto.getUserId() == userId}">
							<c:choose>
								<c:when test="${dto.getOriName() == null }">
									<div class="me">${dto.getMessage() }</div>
								</c:when>
								<c:when test="${dto.getOriName() != null and dto.getSavedName() == null}">
									<div class="me"><img src="${dto.getOriName()}"></div>
								</c:when>
								<c:when test="${dto.getFormat()=='gif' or dto.getFormat()=='png' or dto.getFormat()=='jpg' or dto.getFormat()=='raw' or dto.getFormat()=='tif' or dto.getFormat()=='tiff' or dto.getFormat()=='bpm' or dto.getFormat()=='rle' or dto.getFormat()=='dib'}">
									<div class="me"><img src='/files/${dto.getSavedName() }'><a href='/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }'>${dto.getOriName() }</a></div>
								</c:when>
								<c:otherwise>
									<div class="me"><a href="/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }">${dto.getOriName() }</a></div>
								</c:otherwise>
							</c:choose>
						</c:when>
						<c:otherwise>	
							<c:forEach var="aDto" items="${allUser}">
								<c:if test="${dto.getUserId() == aDto.getUserId() }">						
								<c:choose>
									<c:when test="${dto.getOriName() == null }">
										<div class="row others">	
											<c:choose>
												<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" width="10px" class="col"></c:when>
												<c:otherwise><img src="/files/${aDto.getImg()}" class="col"></c:otherwise>
											</c:choose>
											${aDto.getUserName()}: ${dto.getMessage() }
										</div>
									</c:when>

									<c:when test="${dto.getOriName() != null and dto.getSavedName() == null}">
										<div class="row others">	
											<c:choose>
												<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" width="10px" class="col"></c:when>
												<c:otherwise><img src="/files/${aDto.getImg()}" class="col"></c:otherwise>
											</c:choose>
											${aDto.getUserName()}:
											<img src="${dto.getOriName()}" class="col">
										</div>
									</c:when>

									<c:when test="${dto.getFormat()=='gif' or dto.getFormat()=='png' or dto.getFormat()=='jpg' or dto.getFormat()=='raw' or dto.getFormat()=='tif' or dto.getFormat()=='tiff' or dto.getFormat()=='bpm' or dto.getFormat()=='rle' or dto.getFormat()=='dib'}">
										<div class='row others'>
												<c:choose>
													<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" width="10px" class="col"></c:when>
													<c:otherwise><img src="/files/${aDto.getImg()}" class="col"></c:otherwise>
												</c:choose>
											${aDto.getUserName()}: 
											<img src='/files/${dto.getSavedName() }'>
											<a href='/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }'>${dto.getOriName() }</a>
										</div>
									</c:when>
									
									<c:otherwise>
										<div class="row others">
												<c:choose>
													<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" width="10px" class="col"></c:when>
													<c:otherwise><img src="/files/${aDto.getImg()}" class="col"></c:otherwise>
												</c:choose>
											${dto.getUserId()}: <br>
											<a href="/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }">${dto.getOriName() }</a>
										</div>
									</c:otherwise>
								</c:choose>
								</c:if>
							</c:forEach>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</c:if>
		</div>
		<div class="row" id="emoticons" style="display:none;">
			<img src="/img/happy.png" id="happy" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/excited.png" id="excited" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/nomal.png" id="nomal" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/soso.png" id="soso" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/sleepy.png" id="sleepy" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/sad.png" id="sad" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/angry.png" id="angry" ondblclick="sendEmoticon(this)" class="col">
			<img src="/img/surprised.png" id="surprised" ondblclick="sendEmoticon(this)" class="col">
		</div>
		<div class="row etc">
			<div id="fileWrapper" class="col-6">
				<i class="far fa-file-alt" id="fileIcon"></i>
				<form name="signform" id="signform" method="POST" ENCTYPE="multipart/form-data">
    				<input type="file" id="file" name="file" multiple="true" style="display:none;" onchange="upload()" >
				</form>	
			</div>
			<div id="emoticonIcon" class="col-6"><i class="far fa-laugh"></i></div>
		</div>
		<div class="row sendMsg">
			<input type="text" id="message" class="col-10">
			<button id="send" class="col-2">Send</button>
		</div>
	</div>
	
	<script>
		var socket = new SockJS("/wechat"); // 엔드포인트 주소 넣기
		var client = Stomp.over(socket); // 연결 이후 작업 처리하는 코드
		
		client.connect({},function(resp){ // {}는 헤더정보 없으면  빈 칸
			console.log(resp);
			var roomNumber = $("#roomNumber").val();
			var joinUserId = '';
			var joinUserName = '';
			var joinUserImg = '';
			
			$(".member").each(function(index){
				if(index!=0){
					joinUserId += ',';
					joinUserName += ',';
					joinUserImg += ',';
				}
				joinUserId += $(this).children(".joinUserId").text();
				joinUserName += $(this).children(".joinUserName").text();
				joinUserImg += $(this).children(".joinUserImg").attr("src");
			})
			
			var arrId = joinUserId.split(",");
			var arrName = joinUserName.split(",");
			var arrImg = joinUserImg.split(",");
			
			client.subscribe("/topic/chat/"+roomNumber,function(msg){ // 구독할 url 넣기
				var result = JSON.parse(msg.body);
				var userId = '';
				var userName = '';
				var userImg = '';
				
				for(var i=0;i<arrId.length;i++){
					if(result.userId == arrId[i]){
						userImg = arrImg[i]; 
						userName = arrName[i];
					}
				}
			
				if(result.userId == $("#userId").val()){
					$(".contents").append("<div class='me'>"+result.message+"</div>");
				}else{
					$(".contents").append("<div class='others'><img src='"+userImg+"'>"+userName+" : "+result.message+"</div>");
				}
			});
			client.subscribe("/topic/chat/emoticon/"+roomNumber,function(msg){ // 구독할 url 넣기
				var result = JSON.parse(msg.body);
				var userId = '';
				var userName = '';
				var userImg = '';
				
				for(var i=0;i<arrId.length;i++){
					if(result.userId == arrId[i]){
						userImg = arrImg[i]; 
						userName = arrName[i];
					}
				}
				
				if(result.userId == $("#userId").val()){
					$(".contents").append("<div class='me'><img src='"+result.oriName+"'></div>");
				}else{
					$(".contents").append("<div class='others'><img src='"+userImg+"'>"+userName+" : <img src='"+result.oriName+"'></div>");
				}
			});
			client.subscribe("/topic/file/"+roomNumber,function(msg){ // 구독할 url 넣기
				var result = JSON.parse(msg.body);
				var userId = '';
				var userName = '';
				var userImg = '';
				
				for(var i=0;i<arrId.length;i++){
					if(result.userId == arrId[i]){
						userImg = arrImg[i]; 
						userName = arrName[i];
					}
				}
				
				if(result.userId == $("#userId").val()){
					$(".contents").append("<div class='me'><a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div>");
				}else{
					$(".contents").append("<div class='others'><img src='"+userImg+"'>"+userName+": <a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div>");
				}
			});
			client.subscribe("/topic/img/"+roomNumber,function(msg){ // 구독할 url 넣기
				var result = JSON.parse(msg.body);
				var userId = '';
				var userName = '';
				var userImg = '';
				
				for(var i=0;i<arrId.length;i++){
					if(result.userId == arrId[i]){
						userImg = arrImg[i]; 
						userName = arrName[i];
					}
				}
				
				if(result.userId == $("#userId").val()){
					$(".contents").append("<div class='me'><img src='/files/"+result.savedName+"'><br><a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div>");
				}else{
					$(".contents").append("<div class='others'><img src='"+userImg+"'>"+userName+" : <img src='/files/"+result.savedName+"'><br><a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div>");
				}
			});
		});
		
		$("#send").on("click",function(){
			var userId = $("#userId").val();
			var msg = $("#message").val();
			var roomNumber = $("#roomNumber").val();
			$("#message").val("");
			client.send("/app/chat/"+roomNumber,{},JSON.stringify({userId:userId,message:msg,roomNumber:roomNumber})); // 세번째 인자값은 보내려는 메세지(String 혹은 json 형태로)
		});
		
		$("#fileIcon").on("click",function(){
			 $('#file').click();
		});
		
		$("#emoticonIcon").on("click",function(){
			var flag = $("#emoticons").css("display");
			(flag == "block")?$("#emoticons").css("display","none"):$("#emoticons").css("display","block");
		});
		
		function sendEmoticon(e){
			var roomNumber = $("#roomNumber").val();
			var userId = $("#userId").val();
			var emoticon = $(e).attr("src");
			client.send("/app/chat/emoticon/"+roomNumber,{},JSON.stringify({userId:userId,oriName:emoticon,roomNumber:roomNumber}));
		}
		
		function upload(){
			var roomNumber = $("#roomNumber").val();
			var userId = $("#userId").val();
			var formData = new FormData($("#signform")[0]);
			/* formData.append("file", $("#file")[0].files[0]); */
			
			$.ajax({
				type: 'POST', 
				url: '/chatting/upload?roomNumber='+roomNumber+'&userId='+userId, 
				processData: false, // 필수 
				contentType: false, // 필수 
				data: formData, 
				success: function(data) { console.log("success!")}
			});
		}
		
		$(document).on("click","#download",function(){
			var savedName = $(this).children(".savedName").val();
			console.log(savedName);
			$.ajax({
				type: 'POST', 
				url: '/chatting/download',
				data: {savedName: savedName}, 
				success: function(data) { console.log("success!")}
			});
		});
		
		// 방에 초대하기
		$("#invite").on("click",function(){
			// 팝업창 띄워서 초대할 사람 선택
			var roomNumber = $("#roomNumber").val();
			var url = "/chatting/friendAddPage?roomNumber="+roomNumber;
			var name = "friendAdd";
            var option = "width = 500, height = 500, top = 100, left = 200";
			window.open(url,name,option);
		});
		
		// 방에서 나가기
		$("#leave").on("click",function(){
			var roomNumber = $("#roomNumber").val();
			var userId = $("#userId").val();
			location.href="/chatting/leave?roomNumber="+roomNumber+"&userId="+userId;
		});
	
	</script>
</body>
</html>