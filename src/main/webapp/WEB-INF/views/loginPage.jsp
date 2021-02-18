<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
#loginBox {
	position: absolute;
	width:500px;
	height:450px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

}
</style>
</head>
<body>
	<form action="login.log" method="post" id="loginBox" onsubmit="return InputChk()">
		<div class="container">
			<div class="row text-center" onclick="location.href='/'" style="cursor: pointer">
				<div class="col p-3">
					<h2>
						<b>통합 로그인</b>
					</h2>
				</div>
			</div>
			<div class="row p-5" style="border: 1px solid black">
				<div class="col">
					<div class="row p-3">
						<div class="col-4 form-check">
 							<input class="form-check-input user" name="user" type="radio" id="inlineRadio1" value="std">
 							<label class="form-check-label" for="inlineRadio1">학생</label>
						</div>
						<div class="col-4 form-check">
 							<input class="form-check-input user" name="user" type="radio" id="inlineRadio2" value="pro">
  							<label class="form-check-label" for="inlineRadio2">교수</label>
						</div>
						<div class="col-4 form-check" >
  							<input class="form-check-input user" name="user" type="radio"  id="inlineRadio3" value="adm">
  							<label class="form-check-label" for="inlineRadio3">관리자</label>
						</div>	
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" name="sCode" id="sCode"placeholder="아이디를 입력해주세요">
						<label for="sCode" class="form-label">학번 또는 직번</label> 
					</div>
					<div class="form-floating mb-3">		
						<input type="password" class="form-control" name="password" id="password" placeholder="비밀번호를 입력해주세요" >
						<label for="password" class="form-label">비밀번호</label>
					</div>
					<div class="row">
						<div class="col-6 mb-3 form-check text-center">						
							<label class="form-check-label"  for="idCheck">
								<input type="checkbox" class="form-check-input" name="idCheck" id="idCheck">아이디 저장
							</label>
						</div>
						<div class="col-6 mb-3 form-check text-center" >	
							<label class="form-check-label" for="login">
								<input type="checkbox" class="form-check-input" name="login" id="login">로그인 유지
							</label>
						</div>
					</div>
					<div class="d-grid" >
						<button type="submit" class="btn btn-primary">로그인</button>
					</div>
				</div>
			</div>
		</div>
	</form>
</body>
<script>
	$(document).ready(function(){
		var userId = getCookie("userId");
		$("#sCode").val(userId);
		if($("#sCode").val() != ""){
			$("#idCheck").attr("checked",true);
		}
	})
	$("#sCode").keyup(function(){
		if($("#idCheck").is(":checked")){
			var id = $("#sCode").val();
			setCookie("userId",id);
		}else{
			deleteCookie("userId");
		}
	})
	$("#idCheck").change(function(){
		if($("#idCheck").is(":checked")){
			var id = $("#sCode").val();
			setCookie("userId",id,30);
		}else{
			deleteCookie("userId");
		}
	})
	function setCookie(cookieName, value, exdays){
    	var exdate = new Date();
   	 exdate.setDate(exdate.getDate() + exdays);
    	var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    	document.cookie = cookieName + "=" + cookieValue;
	}
	function getCookie(cookieName) {
    	cookieName = cookieName + '=';
    	var cookieData = document.cookie;
    	var start = cookieData.indexOf(cookieName);
   	 var cookieValue = '';
   	 if(start != -1){
       	 start += cookieName.length;
       	 var end = cookieData.indexOf(';', start);
        	if(end == -1)end = cookieData.length;
        	cookieValue = cookieData.substring(start, end);
   	 }
    return unescape(cookieValue);
	}
	
	function deleteCookie(cookieName){
	    var expireDate = new Date();
	    expireDate.setDate(expireDate.getDate() - 1);
	    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
	}
	
	function InputChk(){
		var user = $(':input:radio[name=user]:checked').val(); 
		var id =$("#sCode").val();
		var password =$("#password").val();
		if(user == null){
			alert("사용자를 선택해주세요");
			return false;
		}else{
			if(id == ""){
				alert("학번 또는 직번을 입력해주세요");
				return false;
			}else{
				if(password == ""){
					alert("비밀번호를 입력해주세요")
				 	return false;
				}
			}
		}	
	}
</script>
</html>