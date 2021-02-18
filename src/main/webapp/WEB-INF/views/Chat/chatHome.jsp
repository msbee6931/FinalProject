<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
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
	/* PROFILE */
	.friendName {
		cursor: pointer;
	}
	/* ETC */
	#goChatList,#goProfile{
		text-align: center;
	}
</style>
</head>
<body>
	<div class="container" id="container">
		<div>친구</div>
		<div class="row p-3 d-flex align-items-center myProfile">
			<div class="col-6 p-0 profileImg user">
				<c:choose>
					<c:when test="${user.getImg() == null }"><img src="/img/deepblue.png" width="50px"></c:when>
					<c:otherwise><img src="/files/${user.getImg()}" width="50px"></c:otherwise>
				</c:choose>
			</div>
			<div class="col-6" id="userName">${user.getUserName() }</div>
			<input type="hidden" id="userId" value=${user.getUserId() }>
		</div>
		<div class="row p-0 otherProfile">
			<c:choose>
				<c:when test="${friendList != null }">
					<c:forEach var="dto" items="${friendList }">
						<div class="row p-3 d-flex align-items-center friend">
							<div class="col-6 profileImg other">
								<c:forEach var="aDto" items="#{allUser}">
									<c:if test="${dto.getFriendId() == aDto.getUserId() }">
										<c:choose>
											<c:when test="${aDto.getImg() == null }"><img src="/img/blue.png" width="50px"></c:when>
											<c:otherwise><img src="/files/${aDto.getImg()}" width="50px"></c:otherwise>
										</c:choose>
									</c:if>
								</c:forEach>
							</div>
							<div class="col-6 friendName">${dto.getFriendName() }</div>
							<input type="hidden" value="${dto.getFriendId() }" class="friendId">				
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<div class="col-12">친구가 없습니다!</div>
				</c:otherwise>
			</c:choose>
		</div>
		<div class="row etc">
			<div class="row p-3 searchInput">
				<input type="text" id="inputTxt" class="col-sm-8 col-12" placeholder="검색할 친구를 입력해주세요.">
				<input type="button" id="inputBtn" class="col-sm-4 col-12" value="검색">
			</div>
			<div class="row btns">
				<div id="goChatList" class="col-sm-6 col-12">chatList</div>
				<div id="goProfile" class="col-sm-6 col-12">profile update</div>
			</div>
		</div>
	</div>

	<script>
	$(document).on("click",".friend",function(){
		var userId = $("#userId").val();
		var friendId = $(this).children(".friendId").val();
		var userName = $("#userName").text();
		var friendName = $(this).children(".friendName").text();
		// console.log(userId + ":" + userName + ":" + friendId + ":" + friendName);
		location.href="/chatting/roomCheck?userId="+userId+"&friendId="+friendId+"&userName="+userName+"&friendName="+friendName;
		//$("#main").load("roomCheck?userId="+userId+"&friendId="+friendId+"&userName="+userName+"&friendName="+friendName);
	 });
	
	$("#inputBtn").on("click",function(){
		var searchTxt = $("#inputTxt").val();
		console.log(searchTxt.length);
		if(searchTxt == '' || searchTxt == null){
			alert("검색할 아이디 혹은 이름을 입력해주세요!");
		}else{
			location.href="searchFriend?searchTxt="+searchTxt;
		}
		//$("#main").load("searchFriend?searchId="+searchId);
	});
	
	$("#goChatList").on("click",function(){
		//$("#main").load("chatList");
		location.href="chatList";
	});
	
	$("#goProfile").on("click",function(){
		var url = "/chatting/profilePage";
		var name = "profile";
        var option = "width = 500, height = 500, top = 100, left = 200";
		window.open(url,name,option);
	});
	
	</script>
</body>
</html>