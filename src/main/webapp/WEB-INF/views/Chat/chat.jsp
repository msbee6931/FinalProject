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
	@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
	.nanumgothic * {
 		font-family: 'Nanum Gothic', sans-serif;
	}
	/* COMMON */
	*{
		font-family: 'Nanum Gothic', sans-serif;
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
	}
	p{
		margin-bottom: 0rem;
	}
/* 	div{
		border: 1px solid black;
	} */
	.container{
		padding: 50px;
		/* width: 1000px; */
		height: 700px;
	}
	.row{
		--bs-gutter-x: 0rem;
	}
	/* CHAT */
	#contents{
		height: 500px;
		overflow-y:auto;
		word-wrap:break-word;
	}
	.contents .me{
		text-align: right;
		margin: 6px;
	}
	.contents .others{
		text-align: left;
		margin: 6px;
	}
	.contents .sendImg{
		width: 100px;
		height: 100px;
	}
	.contents #message{
		height: 200px;
	}
	.etc{
		padding: 15px 0px;
		border-top: 1px solid lightgray;
	}
	.etc div{
		text-align: center;
	}
	#emoticons{
		padding: 10px;
		text-align: center;
	}
	#emoticons img{
		margin-right: 30px;
	}
	.others{
		display: flex;
		align-items: center;
		padding: 5px;
	}
	.others .proImg{
		width: 30px;
		margin-right: 4px; 
	}
	.imgLink{
		display: block;
	}
	.members{
		border-bottom: 1px solid lightgray;
	}
	.member{
		cursor: pointer;
	}
	.joinUserName{
		cursor: point;
		display: flex;
		align-items: center;
	}
	.icons{
		display: flex;
		padding: 25px 0px;
		background-color: #efefef;
	}
	.icons>div{
		display: flex;
	}
	.icons .left{
		padding-left: 30px;
	}
	.icons .right{
		justify-content: flex-end;
	}
	.icons .left>div,
	.icons .right>div{
		cursor: pointer;
	}
	.btns{
		background-color: #efefef;
	}
	.btns>div{
		cursor: pointer;
	}
	.sendMsg>input{
		border: 1px solid lightgray;
		padding: 30px 0px;
	}
	.sendMsg>button{
		border-style: none;
		background-color: lightgray;
		color: #ffffff;
	}
	.sendMsg>button:hover{
		background-color: gray;
	}
	.search{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px;
	}
	.search>input{
		margin-right: 15px; 
		padding: 5px;
		border: 1px solid lightgray;
		border-radius: 100px;
	}
	#next, #cancel, #fileIcon, #emoticonIcon, #searchBtn{
		cursor: pointer;
	}
	input:focus{
		outline: none;
	}
	.others .friendName{
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
		<input type="hidden" id="userId" value="${userId }">
		<input type="hidden" id="roomNumber" value="${roomNumber }">
		<div class="row icons">
			<div class="col-6 left">
				<div class="col-1" id="showMember" title="참가자 목록"><i class="fas fa-user-friends"></i></div>
				<div class="col-1" id="showSearch" title="대화 검색"><i class="fas fa-search"></i></div>
			</div>
			<div class="col-6 right">
				<div class="col-1" id="invite" title="친구 초대"><i class="fas fa-plus"></i></div>
				<div class="col-1" id="leave" title="방 나가기"><i class="fas fa-sign-out-alt"></i></div>
			</div>
		</div>
		<div class="row p-3 members" style="display:none">
			<c:forEach var="jDto" items="${joinList}">
				<c:forEach var="aDto" items="${allUser}">
					<c:if test="${jDto.getUserId() == aDto.getUserId() }">
						<div class="col-3 d-flex member" title="프로필 보기">
							<c:choose>
								<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" width="30px" class="col-2 joinUserImg"></c:when>
								<c:otherwise><img src="/files/${aDto.getImg()}" width="30px" class="joinUserImg"></c:otherwise>
							</c:choose>
							<div class="joinUserId" style="display: none">${jDto.getUserId()}</div>
							<div class="col-3 px-2 joinUserName">${jDto.getUserName()}</div>
						</div>
					</c:if>
				</c:forEach>
			</c:forEach>
		</div>

		<div class="row search" style="display:none">
			<input type="text" class="col-8" id="searchTxt">
			<div class="col-1" id="searchBtn"><i class="fas fa-search"></i></div>
			<div class="col-1" id="next" style="display:none"><i class="fas fa-caret-down"></i></div>
			<div class="col-1" id="cancel" style="display:none"><i class="fas fa-times"></i></div>
		</div>
		<div class="row p-4 contents" id="contents">			
			<c:if test="${list != null }">
				<c:forEach var="dto" items="${list}">
					<c:choose>
						<c:when test="${dto.getUserId() == userId}">
							<c:choose>
								<c:when test="${dto.getOriName() == null }">
									<div class="row">
										<p class="col me">${dto.getMessage() }</p>
									</div>
								</c:when>
								<c:when test="${dto.getOriName() != null and dto.getSavedName() == null}">
									<div class="row">
										<div class="col me"><img src="${dto.getOriName()}" class="sendImg"></div>
									</div>
								</c:when>
								<c:when test="${dto.getFormat()=='gif' or dto.getFormat()=='png' or dto.getFormat()=='jpg' or dto.getFormat()=='raw' or dto.getFormat()=='tif' or dto.getFormat()=='tiff' or dto.getFormat()=='bpm' or dto.getFormat()=='rle' or dto.getFormat()=='dib'}">
									<div class="row">
										<div class="col me">
											<img src='/files/${dto.getSavedName() }' class="sendImg">
											<a href='/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }' class='imgLink'>${dto.getOriName() }</a>
										</div>
									</div>
								</c:when>
								<c:otherwise>
									<div class="row me">
										<a href="/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }">${dto.getOriName() }</a>
									</div>
								</c:otherwise>
							</c:choose>
						</c:when>
						<c:otherwise>	
							<c:forEach var="aDto" items="${allUser}">
								<c:if test="${dto.getUserId() == aDto.getUserId() }">						
								<c:choose>
									<c:when test="${dto.getOriName() == null }">
										<div class="row others">	
											<div class="col-1 text-center">
												<c:choose>
													<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" class="proImg"></c:when>
													<c:otherwise><img src="/files/${aDto.getImg()}" class="proImg"></c:otherwise>
												</c:choose>
											</div>
											<div class="col-1 friendName">${aDto.getUserName()} </div>
											<input type="hidden" class="friendId" value="${aDto.getUserId()}">
											<p class="col-10">${dto.getMessage() }</p>
										</div>
									</c:when>

									<c:when test="${dto.getOriName() != null and dto.getSavedName() == null}">
										<div class="row others">	
											<div class="col-1 text-center">
												<c:choose>
													<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" class="proImg"></c:when>
													<c:otherwise><img src="/files/${aDto.getImg()}" class="proImg"></c:otherwise>
												</c:choose>
											</div>
											<div class="col-1 friendName">${aDto.getUserName()} </div>
											<input type="hidden" class="friendId" value="${aDto.getUserId()}">
											<img src="${dto.getOriName()}" class="col-8 sendImg">
										</div>
									</c:when>

									<c:when test="${dto.getFormat()=='gif' or dto.getFormat()=='png' or dto.getFormat()=='jpg' or dto.getFormat()=='raw' or dto.getFormat()=='tif' or dto.getFormat()=='tiff' or dto.getFormat()=='bpm' or dto.getFormat()=='rle' or dto.getFormat()=='dib'}">
										<div class='row others'>
											<div class="col-1 text-center">
												<c:choose>
													<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" class="proImg"></c:when>
													<c:otherwise><img src="/files/${aDto.getImg()}" class="proImg"></c:otherwise>
												</c:choose>
											</div>
											<div class="col-1 friendName">${aDto.getUserName()} </div> 
											<input type="hidden" class="friendId" value="${aDto.getUserId()}">
											<div class="col-8">
												<img src='/files/${dto.getSavedName() }' class="sendImg">
												<a href='/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }' class='imgLink'>${dto.getOriName() }</a>
											</div>
										</div>
									</c:when>
									
									<c:otherwise>
										<div class="row others">
											<div class="col-1 text-center">
												<c:choose>
													<c:when test="${aDto.getImg() == null}"><img src="/img/blue.png" class="proImg"></c:when>
													<c:otherwise><img src="/files/${aDto.getImg()}" class="proImg"></c:otherwise>
												</c:choose>
											</div>
											<div class="col-1 friendName">${aDto.getUserName()} </div>
											<input type="hidden" class="friendId" value="${aDto.getUserId()}">
											<a href="/chatting/download?seq=${dto.getSeq() }&oriName=${dto.getOriName() }&savedName=${dto.getSavedName() }&roomNumber=${dto.getRoomNumber() }&uploadDate=${dto.getUploadDate() }" class="col-8">${dto.getOriName() }</a>
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
		<div class="row" id="emoticons" style="display:none">
			<img src="/img/happy.png" id="happy" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/excited.png" id="excited" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/nomal.png" id="nomal" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/soso.png" id="soso" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/sleepy.png" id="sleepy" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/sad.png" id="sad" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/angry.png" id="angry" class="col-1" ondblclick="sendEmoticon(this)">
			<img src="/img/surprised.png" id="surprised" class="col-1" ondblclick="sendEmoticon(this)">		
		</div>
		<div class="row etc">
			<div id="fileWrapper" class="col-6" title="파일/이미지">
				<i class="far fa-file-alt" id="fileIcon"></i>
				<form name="signform" id="signform" method="POST" ENCTYPE="multipart/form-data">
    				<input type="file" id="file" name="file" multiple="true" style="display:none;" onchange="upload()" >
				</form>	
			</div>
			<div id="emoticonIcon" class="col-6" title="이모티콘"><i class="far fa-laugh"></i></div>
		</div>
		<div class="row sendMsg">
			<input type="text" id="message" class="col-10 px-3">
			<button id="send" class="col-2"><b>전송</b></button>
		</div>
		<div class="row text-center py-4 btns">
			<div class="col-md-6 col-sm-12" id="goChatHome" title="채팅홈"><i class="fas fa-home"></i></div>
			<div class="col-md-6 col-sm-12" id="goChatList" title="채팅 목록"><i class="far fa-comments"></i></div>
		</div>
	</div>
	
	<script>
		var socket = new SockJS("/wechat"); // 엔드포인트 주소 넣기
		var client = Stomp.over(socket); // 연결 이후 작업 처리하는 코드
		
		$(document).ready(function(){
			var roomNumber = $("#roomNumber").val();
			
			$.ajax({
				type: 'POST',
				url: '/chatting/deleteUserState',
				data: {roomNumber:roomNumber},
				success: function(data) { console.log("success!")}
			});
		});
		
		client.connect({},function(resp){ // {}는 헤더정보 없으면  빈 칸
			console.log(resp);
			var roomNumber = $("#roomNumber").val();
			var joinUserId = '';
			var joinUserName = '';
			var joinUserImg = '';
			
			scrollBottom();
			
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
					$(".contents").append("<div class='row'><p class='col me'>"+result.message+"</p></div>");
				}else{
					$(".contents").append("<div class='row others'><div class='col-1 text-center'><img src='"+userImg+"' class='proImg'></div><div class='col-1 friendName'>"+userName+"</div><input type='hidden' class='friendId' value='"+result.userId+"'><p class='col-8'>"+result.message+"</p></div>");
				}
				scrollBottom();
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
					$(".contents").append("<div class='row'><div class='col me'><img src='"+result.oriName+"' class='sendImg'></div></div>");
				}else{
					$(".contents").append("<div class='row others'><div class='col-1 text-center'><img src='"+userImg+"' class='proImg'></div><div class='col-1 friendName'>"+userName+"</div><input type='hidden' class='friendId' value='"+result.userId+"'><img src='"+result.oriName+"' class='col-8 sendImg'></div>");
				}
				scrollBottom();
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
					$(".contents").append("<div class='row me'><a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div>");
				}else{
					$(".contents").append("<div class='row others'><div class='col-1 text-center'><img src='"+userImg+"' class='proImg'></div><div class='col-1 friendName'>"+userName+"</div><input type='hidden' class='friendId' value='"+result.userId+"'><a class='col-8' href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div>");
				}
				scrollBottom();
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
					$(".contents").append("<div class='row'><div class='col me'><img src='/files/"+result.savedName+"' class='sendImg'><br><a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div></div>");
				}else{
					$(".contents").append("<div class='row others'><div class='col-1 text-center'><img src='"+userImg+"' class='proImg'></div><div class='col-1 friendName'>"+userName+"</div><input type='hidden' class='friendId' value='"+result.userId+"'><div class='col-8'><img src='/files/"+result.savedName+"' class='sendImg'><br><a href='/chatting/download?seq="+result.seq+"&oriName="+result.oriName+"&savedName="+result.savedName+"&roomNumber="+result.roomNumber+"&uploadDate="+result.uploadDate+"'>"+result.oriName+"</a></div></div>");
				}
				scrollBottom();
			});
		});
		
		$("#send").on("click",function(){
			var userId = $("#userId").val();
			var msg = $("#message").val();
			var roomNumber = $("#roomNumber").val();
			$("#message").val("");
			client.send("/app/chat/"+roomNumber,{},JSON.stringify({userId:userId,message:msg,roomNumber:roomNumber})); // 세번째 인자값은 보내려는 메세지(String 혹은 json 형태로)
		});
		
		$("#message").on("keydown",function(e){
			/* if(e.shiftKey && e.keyCode==13){
				var msg = $("#message").val();
				$("#message").val(msg+"<br>");
			}else  */if(e.keyCode==13){
				var userId = $("#userId").val();
				var msg = $("#message").val();
				var roomNumber = $("#roomNumber").val();
				$("#message").val("");
				client.send("/app/chat/"+roomNumber,{},JSON.stringify({userId:userId,message:msg,roomNumber:roomNumber}));
			}
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
			$("#emoticons").css("display","none");
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
			var result = confirm("방을 나가시겠습니까?(확인을 누를시 해당 채팅방은 목록에 나타나지 않습니다.)");
			if(result){
				var roomNumber = $("#roomNumber").val();
				var userId = $("#userId").val();
				location.href="/chatting/leave?roomNumber="+roomNumber+"&userId="+userId;
			}
		});
		// 채팅 목록으로 가기
		$("#goChatList").on("click",function(){
			var roomNumber = $("#roomNumber").val();
			
			$.ajax({
				type: 'POST',
				url: '/chatting/insertUserState',
				data: {roomNumber:roomNumber},
				success: function(data) { console.log("success!")}
			});
			
			location.href="/chatting/chatList";
		});
		// 채팅홈으로 가기
		$("#goChatHome").on("click",function(){
			var roomNumber = $("#roomNumber").val();
			
			$.ajax({
				type: 'POST',
				url: '/chatting/insertUserState',
				data: {roomNumber:roomNumber},
				success: function(data) { console.log("success!")}
			});
			
			location.href="/chatting/chatHome";
		});
		
		// 멤버 클릭시 멤버 프로필 정보
		$(document).on("click",".member",function(){
			var joinUserId = $(this).children(".joinUserId").text();
			var url = "/chatting/profileView?joinUserId="+joinUserId;
			var name = "profileView";
	        var option = "width = 500, height = 300, top = 100, left = 200";
			window.open(url,name,option);
		});
		
		$(document).on("click",".friendName",function(){
			var friendId = $(this).siblings(".friendId").val();
			var url = "/chatting/profileView?joinUserId="+friendId;
			var name = "profileView";
	        var option = "width = 500, height = 300, top = 100, left = 200";
			window.open(url,name,option);
		});
		
		// 대화내용 검색
		var keyword = null;
		var count = 0;
			
		$("#searchBtn").on("click",function(){
			var searchTxt = $("#searchTxt").val();
			$("#next").css("display","block");
			$("#cancel").css("display","block");
			
			if(searchTxt == null || searchTxt == ''){
				alert("검색 키워드를 입력해주세요!");
			}else{
				if(count == 0){
					keyword = $("p:contains('"+searchTxt+"')");
				
					var offset = $(keyword[0]).offset();
					$('.contents').animate({scrollTop : offset.top}, 400);
					$(keyword[0]).css("background-color","#fdfd96");
					count++;
					
					$('#searchTxt').attr('disabled', true);
					$("#searchTxt").css("background-color","#efefef");
					$("#searchTxt").css("border","1px soild lightgray");
				}	
			}
		});
			
		$("#next").on("click",function(){
			if(count < keyword.length){ 
				var offset = $(keyword[count]).offset();
				$('.contents').animate({scrollTop : offset.top}, 400);
				$(keyword[count-1]).css("background-color","white");
				$(keyword[count]).css("background-color","#fdfd96");
				count++;
			}else{
				alert("마지막 검색 결과입니다.");
				$("#searchTxt").val("");
				keyword.css("background-color","white");
				count = 0;
				keyword = null;
				$('#searchTxt').attr('disabled', false);
				$("#searchTxt").css("background-color","white");
			} 
		});
			
		$("#cancel").on("click",function(){
			$("#searchTxt").val("");
			keyword.css("background-color","white");
			count = 0;
			keyword = null;
			$('#searchTxt').attr('disabled', false);
			$("#searchTxt").css("background-color","white");
		});
		
 		$("#searchTxt").on("keydown",function(e){
			if(e.keyCode==13){
				var searchTxt = $("#searchTxt").val();
				$("#next").css("display","block");
				$("#cancel").css("display","block");
				
				if(searchTxt == null || searchTxt == ''){
					alert("검색 키워드를 입력해주세요!");
				}else{
					if(keyword == null){
						keyword = $("p:contains('"+searchTxt+"')");
						$('#searchTxt').attr('disabled', true);
						$("#searchTxt").css("background-color","#efefef");
						$("#searchTxt").css("border","1px soild lightgray");
						
						if(count < keyword.length){ 
							var offset = $(keyword[count]).offset();
							$('.contents').animate({scrollTop : offset.top}, 400);
							$(keyword[count-1]).css("background-color","white");
							$(keyword[count]).css("background-color","#fdfd96");
							count++;
						}else{
							alert("마지막 검색 결과입니다.");
							$("#searchTxt").val("");
							keyword.css("background-color","white");
							count = 0;
							keyword = null;
							$('#searchTxt').attr('disabled', false);
							$("#searchTxt").css("background-color","white");
						} 
					}else{
						if(count < keyword.length){ 
							var offset = $(keyword[count]).offset();
							$('.contents').animate({scrollTop : offset.top}, 400);
							$(keyword[count-1]).css("background-color","white");
							$(keyword[count]).css("background-color","#fdfd96");
							count++;
						}else{
							alert("마지막 검색 결과입니다.");
							$("#searchTxt").val("");
							keyword.css("background-color","white");
							count = 0;
							keyword = null;
							$('#searchTxt').attr('disabled', false);
							$("#searchTxt").css("background-color","white");
						} 
					}
				}
			}
		});
		
		function scrollBottom(){
			var sideContents = document.getElementById("contents");
			sideContents.scrollTop = sideContents.scrollHeight;
		}		
		
		$("#showMember").on("click",function(){
			var flag = $(".members").css("display");
			(flag == "flex")?$(".members").css("display","none"):$(".members").css("display","flex");
		});
		$("#showSearch").on("click",function(){
			var flag = $(".search").css("display");
			(flag == "flex")?$(".search").css("display","none"):$(".search").css("display","flex");
		});
	</script>
</body>
</html>