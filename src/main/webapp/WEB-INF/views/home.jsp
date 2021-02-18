<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/png" href="http://example.com/myicon.png">
<meta charset="UTF-8">
<title>KH정보교육원</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
        function getCookie(name) {
            var cookie = document.cookie;
            if (document.cookie != "") {
                var cookie_array = cookie.split("; ");
                for (var index in cookie_array) {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "popupYN") {
                        return cookie_name[1];
                    }
                }
            }
            return;
        }

        function openPopup(url) {
            var cookieCheck = getCookie("popupYN");
            if (cookieCheck != "N") window.open(url, '', 'width=500,height=500,left=0,top=0')
        }
    </script>


<style>
@font-face {
	font-family: 'GmarketSansBold';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'GmarketSansMedium';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'GmarketSansLight';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}

* {
	box-sizing: border-box;
	
}

.headt1 {
font-family: 'GmarketSansMedium';
	font-size: 13px;
	text-align: center;
	color: white;
	background-color: #435a7c;
}

.headt2 {
font-family: 'GmarketSansLight';
	background-color: white;
}

nav {
	background-color: white;
}

.nav-item {
	font-size: 20px;
}

#pop {
	cursor: pointer;
}
.normal,.academic,.scholar,.employment{
	display:none;
}

</style>
</head>

<body onload="javascript:openPopup('pop.home')">
	<div class="contatiner">
		<div class="d-flex flex-row-reverse headt1 ">
			<a href="/nex" class="p-4">종합정보</a> 
			<c:choose>
				<c:when test="${std == null && pro == null && adm == null}">
					<a href="/loginPage.log" class="p-4">로그인</a>
				</c:when>
				<c:otherwise>
					<a href="/logOut.log" class="p-4">로그아웃</a>
				</c:otherwise>
			</c:choose>
			<a class="p-4" id="pop">팝업창</a>  
		</div>
		<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
		<div class="row body">
			<div class="col">
				<div id="carouselExampleInterval" class="carousel slide"
					data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active" data-bs-interval="10000">
							<img src="/img/carousel1.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item active" data-bs-interval="5000">
							<img src="/img/carousel2.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="/img/carousel3.jpg" class="d-block w-100" alt="...">
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleInterval"
						role="button" data-bs-slide="prev"> <span
						class="carousel-control-prev-icon" aria-hidden="true"></span> <span
						class="visually-hidden">Previous</span>
					</a> <a class="carousel-control-next" href="#carouselExampleInterval"
						role="button" data-bs-slide="next"> <span
						class="carousel-control-next-icon" aria-hidden="true"></span> <span
						class="visually-hidden">Next</span>
					</a>
				</div>
			</div>
		</div>
		<div class="container">
		<div class="row text-center py-5">
		<div class="col"><h2><b>새로운 소식</b></h2></div>'
		</div>
		<div class="row mb-5">
			<div class="col-12 col-lg-6">
				<nav>
				<div class="row" style="border-bottom: 2px solid black">
				<div class="col-10">
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<button class="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button"role="tab" aria-controls="nav-all" aria-selected="true">전체</button>
						<button class="nav-link" id="nav-normal-tab" data-bs-toggle="tab"data-bs-target="#nav-normal" type="button" role="tab"aria-controls="nav-normal" aria-selected="false">일반</button>
						<button class="nav-link" id="nav-academic-tab" data-bs-toggle="tab"data-bs-target="#nav-academic" type="button" role="tab"aria-controls="nav-academic" aria-selected="false">학사</button>
						<button class="nav-link" id="nav-scholar-tab" data-bs-toggle="tab"data-bs-target="#nav-scholar" type="button" role="tab"aria-controls="nav-scholar" aria-selected="false">장학</button>
						<button class="nav-link" id="nav-employment-tab" data-bs-toggle="tab"data-bs-target="#nav-employment" type="button" role="tab"aria-controls="nav-employment" aria-selected="false">취업</button>
					</div>	
				</div>
					<div class="col-2" id="more"></div>	
				</div>
				</nav>
				<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane show active" id="nav-all"role="tabpanel" aria-labelledby="nav-all-tab">
				<c:forEach var="i" items="${all}">
					<c:choose>
						<c:when test="${i.deptcode =='A'}">
						<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer"  onclick="location.href='/normalView.notice?seq=${i.n_seq}'">		
							<div class="col-2 text-center "><button class="btn btn-outline-danger">일반</button></div>
							<div class="col-7 ">${i.title}</div>
							<div class="col-3 text-center">
								<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    			<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
							</div>			
						</div>
						</c:when>
						<c:when test="${i.deptcode =='B'}">
						<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer" onclick="location.href='/academicView.notice?seq=${i.n_seq}'">		
							<div class="col-2 text-center"><button class="btn btn-outline-primary">학사</button></div>
							<div class="col-7">${i.title}</div>
							<div class="col-3 text-center">
								<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    			<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
							</div>			
						</div>
						</c:when>
						<c:when test="${i.deptcode =='C'}">
						<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer" onclick="location.href='/scholarView.notice?seq=${i.n_seq}'" >			
						<div class="col-2 text-center"><button class="btn btn-outline-success">장학</button></div>
						<div class="col-7">${i.title}</div>
						<div class="col-3 text-center">
							<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    		<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
						</div>
						</div>
						</c:when>
						<c:when test="${i.deptcode =='D'}">
						<div class="row py-2 align-items-center" style="border-bottom: 1px solid black;cursor: pointer" onclick="location.href='/employmentView.notice?seq=${i.n_seq}'">			
						<div class="col-2 text-center"><button class="btn btn-outline-warning">취업</button></div>
						<div class="col-7">${i.title}</div>
						<div class="col-3 text-center">
							<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    		<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
						</div>
						</div>
						</c:when>
						<c:otherwise>
						</c:otherwise>
					</c:choose>
				</c:forEach>	
				</div>
				<div class="tab-pane" id="nav-normal"role="tabpanel" aria-labelledby="nav-normal-tab">		
				<c:forEach var="i" items="${normal}">
				<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer"  onclick="location.href='/normalView.notice?seq=${i.n_seq}'">		
					<div class="col-2 text-center"><button class="btn btn-outline-danger">일반</button></div>
					<div class="col-7">${i.title}</div>
					<div class="col-3 text-center">
						<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    	<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
					</div>			
				</div>
				</c:forEach>	
				</div>
				
				<div class="tab-pane" id="nav-academic" role="tabpanel"aria-labelledby="nav-academic-tab">
				<c:forEach var="i" items="${academic}">
				<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer" onclick="location.href='/academicView.notice?seq=${i.n_seq}'">		
					<div class="col-2 text-center"><button class="btn btn-outline-primary">학사</button></div>
					<div class="col-7">${i.title}</div>
					<div class="col-3 text-center">
						<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    	<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
					</div>			
				</div>
				</c:forEach>	
				</div>
				
				<div class="tab-pane" id="nav-scholar" role="tabpanel"aria-labelledby="nav-scholar-tab">
				<c:forEach var="i" items="${scholar}">
				<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer"  onclick="location.href='/scholarView.notice?seq=${i.n_seq}'">		
					<div class="col-2 text-center"><button class="btn btn-outline-success">장학</button></div>
					<div class="col-7">${i.title}</div>
					<div class="col-3 text-center">
						<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                    	<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
					</div>			
				</div>
				</c:forEach>
				</div>
				<div class="tab-pane" id="nav-employment" role="tabpanel"aria-labelledby="nav-employment-tab">
				<c:forEach var="i" items="${employment}">
					<div class="row py-2 align-items-center" style="border-bottom: 1px solid black; cursor: pointer" onclick="location.href='/employmentView.notice?seq=${i.n_seq}'">			
						<div class="col-2 text-center"><button class="btn btn-outline-warning">취업</button></div>
						<div class="col-7">${i.title}</div>
						<div class="col-3 text-center">
							<fmt:parseDate var="Date" value="${i.writedate}" pattern="yyyy-MM-dd"/>
                   			<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd"/>
						</div>	
					</div>
				</c:forEach>
				</div>
			</div>
			</div>
			<div class="col-12 col-lg-6">
				<div class="row">
					<div class="col">일정</div>
				</div>
			</div>
		</div>
		</div>
		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp"/>
		</footer>

		<input type=button id=enroll value=재학증명서> <input type=button
			id=graduate value=졸업증명서> <input type=button id=payment
			value="납부 영수증"> <input type=button id=transcript value=성적증명서>
		<input type=button id=free value=자유게시판>

		<!-- 채팅을 위해 임시 아이디 생성 -->
		<input id="userId" type="text" placeholder="채팅을 위한 임시아이디 입력하고 버튼클릭시 채팅으로 이동">
		<input type="button" value="send" id="sendBtn">
	</div>

</body>
<script>

	document.getElementById("enroll").onclick=function(){
		location.href="/certification/enrollment"
	}
	document.getElementById("graduate").onclick=function(){
		location.href="/certification/graduate"
	}
	document.getElementById("payment").onclick=function(){
		location.href="/certification/payment"
	}
	document.getElementById("transcript").onclick=function(){
		location.href="/certification/transcript"
	}
	document.getElementById("free").onclick=function(){
		location.href="/free/boardList"
	}

/* 	document.getElementById("request").onclick=function(){
		location.href="/request/boardList";
	} */

	
	document.getElementById("sendBtn").onclick = function(){
		let userId = document.getElementById("userId").value;
		location.href="/chatting/chatHome?userId="+userId;
	}
    
	document.getElementById('pop').onclick = function() {
   		window.open('pop.home','', 'width=500,height=500,left=0,top=0');
    //        openPopup('quiz03.html')
	}
	$(".nav-link").on("click",function(){
		var id = $(this).attr('id')
		var more = $("#more");
		if(id == 'nav-normal-tab'){
			var btn = '<button type="button" class="btn btn-outline-primary" id="moreNormal">more+</button>'
			more.html(btn)
		}else if(id == 'nav-academic-tab'){
			var btn = '<button type="button" class="btn btn-outline-primary" id="moreAcademic">more+</button>'
			more.html(btn)
		}else if(id == 'nav-scholar-tab'){
			var btn = '<button type="button" class="btn btn-outline-primary" id="moreScholar">more+</button>'
			more.html(btn)
		}else if(id == 'nav-employment-tab'){
			var btn = '<button type="button" class="btn btn-outline-primary" id="moreEmployment">more+</button>'
			more.html(btn)
		}else{
			more.html("");
		}
	})
	$("#more").on("click","#moreNormal",function(){
		location.href="/normalList.notice?page=1";
	})
	$("#more").on("click","#moreAcademic",function(){
		location.href="/academicList.notice?page=1";
	})
	$("#more").on("click","#moreScholar",function(){
		location.href="/scholarList.notice?page=1";
	})	
	$("#more").on("click","#moreEmployment",function(){
		location.href="/employmentList.notice?page=1";
	})
	
	
</script>
</html>