<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/png" href="http://example.com/myicon.png">
<meta charset="UTF-8">
<title>KH대학교</title>
<link
	href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.css'
	rel='stylesheet' />
<link
	href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/daygrid/main.css'
	rel='stylesheet' />

<script
	src='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.js'></script>
<script
	src='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/interaction/main.js'></script>
<script
	src='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/daygrid/main.js'></script>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		var calendarEl = document.getElementById('calendar');

		var calendar = new FullCalendar.Calendar(calendarEl, {
			plugins : [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
			header : {
				left : 'prev,next today',
				center : 'title',
				right : 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
			},
			navLinks : true, // can click day/week names to navigate views
			businessHours : true, // display business hours
			editable : true,
			events : [

			]
		});

		var ssize = document.getElementById("size").value;
		var size = parseInt(ssize);
		for (var j = 0; j < size; j++) {
			var sj = String(j);
			calendar.addEvent({
				'title' : document.getElementById(sj+"title").value,
				'start' : document.getElementById(sj+"sDate").value,
				'end' : document.getElementById(sj+"eDate").value
			});

		}

		calendar.render();
	});
</script>

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
			for ( var index in cookie_array) {
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
		if (cookieCheck != "N")
			window.open(url, '', 'width=500,height=500,left=0,top=0')
	}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
	-ms-overflow-style: none;
}
::-webkit-scrollbar { display: none; }
.row{
	--bs-gutter-x: 0rem;
}
a {
	text-decoration: none;
}

li {
	list-style: none;
}

* {
	box-sizing: border-box;
	font-family: 'Nanum Gothic', sans-serif;
}
.container {
	padding: 0;
	font-size: 14px;
}
.align{
	display: flex;
	justify-content: space-between;
	margin-bottom: 80px;
	margin-top: 20px;
}
.calendar {
	max-width: 600px;
}
.notice{
	max-width: 600px;
	padding-top: 17px;
}

.headt1 {
	font-size: 13px;
	text-align: right;
	background-color: #193461;
/* 	background-color: #0d6efd; */
	color: #ffffff;
	padding: 15px 0px;
}

.headt2 {
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

.normal, .academic, .scholar, .employment {
	display: none;
}
.txt{
	color: #ffffff;
}
.news{
	display: flex;
	justify-content: space-around;
}
.newsImg{
	display: flex;
	justify-content: space-between;
}
.newsImg img{
	width: 400px;
	height: 350px;
}
.sns {
	background-image: url("/img/snsbg.png");
	padding: 100px 0px;
	display: flex;
	align-items: center;
	margin-bottom: 60px;
	margin-top: 30px;
}
.sns>.row{
	width: 100%;
	display: flex;
	justify-content: center;
}
.snsIcon{
	text-align: center;
}
.snsIcon img{
	width: 100px;
	height: 100px;
}
.snsIcon a{
	color: #ffffff;
}
.snsIcon div{
	margin-top: 20px;
}
</style>
</head>

<body onload="javascript:openPopup('pop.home')">
	<div class="container-fluid p-0">
		<div class="row headt1">
			<div class="col">
				<a class="p-4 txt" id="pop">팝업창</a>
				<c:choose>
					<c:when test="${std == null && pro == null && adm == null}">
						<a href="/loginPage.log" class="p-4 txt">로그인</a>
					</c:when>
					<c:otherwise>
						<a href="/logOut.log" class="p-4 txt">로그아웃</a>
					</c:otherwise>
				</c:choose>
				<a href="/nex" class="p-4 txt">종합정보</a>
			</div>

		</div>
		<jsp:include page="/WEB-INF/views/mainHeader.jsp" />
		<div class="row body">
				<div class="col p-0">
				<div id="carouselExampleInterval" class="carousel slide"
					data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active" data-bs-interval="10000">
							<img src="/img/2.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item" data-bs-interval="5000">
							<img src="/img/1.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="/img/3.jpg" class="d-block w-100" alt="...">
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
				<div class="col">
					<div class="row py-4">
						<h1><b>새로운 소식</b></h1>
						<h5>KH대학교의 다양한 소식을 전해드립니다.</h5>
					</div>
					<div class="row newsImg">
						<div class="col-md-12 col-lg-4">
							<a href="https://www.kosaf.go.kr/ko/main.do"><img src="/img/news1.gif" ></a>
						</div>
						<div class="col-md-12 col-lg-4">
							<a href="https://www.acrc.go.kr/acrc/index.do"><img src="/img/news2.gif" ></a>
						</div>
						<div class="col-md-12 col-lg-4">
							<a href="https://www.keris.or.kr/main/main.do"><img src="/img/news3.gif" ></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid sns">
			<div class="row">
				<div class="col-sm-2 col-lg-2 snsIcon">
					<a href="https://www.youtube.com/?gl=KR&hl=ko">
						<img src="/img/youtube.png">
						<div><b>Youtube</b></div>
					</a>
				</div>
				<div class="col-sm-2 col-lg-2 snsIcon">
					<a href="https://www.instagram.com/">
						<img src="/img/instagram.png">
						<div><b>Instagram</b></div>
					</a>
				</div>
				<div class="col-sm-2 col-lg-2 snsIcon">
					<a href="https://m.facebook.com/?locale2=ko_KR">
						<img src="/img/facebook.png">
						<div><b>Facebook</b></div>
					</a>
				</div>
				<div class="col-sm-2 col-lg-2 snsIcon">
					<a href="https://twitter.com/?lang=ko">
						<img src="/img/twitter.png">
						<div><b>Twitter</b></div>	
					</a>
				</div>
				<div class="col-sm-2 col-lg-2 snsIcon">
					<a href="https://section.blog.naver.com/BlogHome.nhn?directoryNo=0&currentPage=1&groupId=0">
						<img src="/img/blog.png">
						<div><b>Blog</b></div>
					</a>
				</div>
			</div>
		</div>
	<div class="container">
			<div class="row align">
				<div class="col-12 col-lg-6 notice">
					<nav>
						<div class="row" style="border-bottom: 2px solid black">
							<div class="col-10">
								<div class="nav nav-tabs" id="nav-tab" role="tablist">
									<button class="nav-link active" id="nav-all-tab"
										data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
										role="tab" aria-controls="nav-all" aria-selected="true">전체</button>
									<button class="nav-link" id="nav-normal-tab"
										data-bs-toggle="tab" data-bs-target="#nav-normal"
										type="button" role="tab" aria-controls="nav-normal"
										aria-selected="false">일반</button>
									<button class="nav-link" id="nav-academic-tab"
										data-bs-toggle="tab" data-bs-target="#nav-academic"
										type="button" role="tab" aria-controls="nav-academic"
										aria-selected="false">학사</button>
									<button class="nav-link" id="nav-scholar-tab"
										data-bs-toggle="tab" data-bs-target="#nav-scholar"
										type="button" role="tab" aria-controls="nav-scholar"
										aria-selected="false">장학</button>
									<button class="nav-link" id="nav-employment-tab"
										data-bs-toggle="tab" data-bs-target="#nav-employment"
										type="button" role="tab" aria-controls="nav-employment"
										aria-selected="false">취업</button>
								</div>
							</div>
							<div class="col-2" id="more"></div>
						</div>
					</nav>
					<div class="tab-content" id="nav-tabContent">
						<div class="tab-pane show active" id="nav-all" role="tabpanel"
							aria-labelledby="nav-all-tab">
							<c:forEach var="i" items="${all}">
								<c:choose>
									<c:when test="${i.deptcode =='A'}">
										<div class="row py-2 align-items-center"
											style="border-bottom: 1px solid black; cursor: pointer"
											onclick="location.href='/normalView.notice?seq=${i.n_seq}'">
											<div class="col-2 text-center ">
												<button class="btn btn-outline-danger">일반</button>
											</div>
											<div class="col-7 ">${i.title}</div>
											<div class="col-3 text-center">
												<fmt:parseDate var="Date" value="${i.writedate}"
													pattern="yyyy-MM-dd" />
												<fmt:formatDate value="${Date}" type="date"
													pattern="yyyy-MM-dd" />
											</div>
										</div>
									</c:when>
									<c:when test="${i.deptcode =='B'}">
										<div class="row py-2 align-items-center"
											style="border-bottom: 1px solid black; cursor: pointer"
											onclick="location.href='/academicView.notice?seq=${i.n_seq}'">
											<div class="col-2 text-center">
												<button class="btn btn-outline-primary">학사</button>
											</div>
											<div class="col-7">${i.title}</div>
											<div class="col-3 text-center">
												<fmt:parseDate var="Date" value="${i.writedate}"
													pattern="yyyy-MM-dd" />
												<fmt:formatDate value="${Date}" type="date"
													pattern="yyyy-MM-dd" />
											</div>
										</div>
									</c:when>
									<c:when test="${i.deptcode =='C'}">
										<div class="row py-2 align-items-center"
											style="border-bottom: 1px solid black; cursor: pointer"
											onclick="location.href='/scholarView.notice?seq=${i.n_seq}'">
											<div class="col-2 text-center">
												<button class="btn btn-outline-success">장학</button>
											</div>
											<div class="col-7">${i.title}</div>
											<div class="col-3 text-center">
												<fmt:parseDate var="Date" value="${i.writedate}"
													pattern="yyyy-MM-dd" />
												<fmt:formatDate value="${Date}" type="date"
													pattern="yyyy-MM-dd" />
											</div>
										</div>
									</c:when>
									<c:when test="${i.deptcode =='D'}">
										<div class="row py-2 align-items-center"
											style="border-bottom: 1px solid black; cursor: pointer"
											onclick="location.href='/employmentView.notice?seq=${i.n_seq}'">
											<div class="col-2 text-center">
												<button class="btn btn-outline-warning">취업</button>
											</div>
											<div class="col-7">${i.title}</div>
											<div class="col-3 text-center">
												<fmt:parseDate var="Date" value="${i.writedate}"
													pattern="yyyy-MM-dd" />
												<fmt:formatDate value="${Date}" type="date"
													pattern="yyyy-MM-dd" />
											</div>
										</div>
									</c:when>
									<c:otherwise>
									</c:otherwise>
								</c:choose>
							</c:forEach>
						</div>
						<div class="tab-pane" id="nav-normal" role="tabpanel"
							aria-labelledby="nav-normal-tab">
							<c:forEach var="i" items="${normal}">
								<div class="row py-2 align-items-center"
									style="border-bottom: 1px solid black; cursor: pointer"
									onclick="location.href='/normalView.notice?seq=${i.n_seq}'">
									<div class="col-2 text-center">
										<button class="btn btn-outline-danger">일반</button>
									</div>
									<div class="col-7">${i.title}</div>
									<div class="col-3 text-center">
										<fmt:parseDate var="Date" value="${i.writedate}"
											pattern="yyyy-MM-dd" />
										<fmt:formatDate value="${Date}" type="date"
											pattern="yyyy-MM-dd" />
									</div>
								</div>
							</c:forEach>
						</div>

						<div class="tab-pane" id="nav-academic" role="tabpanel"
							aria-labelledby="nav-academic-tab">
							<c:forEach var="i" items="${academic}">
								<div class="row py-2 align-items-center"
									style="border-bottom: 1px solid black; cursor: pointer"
									onclick="location.href='/academicView.notice?seq=${i.n_seq}'">
									<div class="col-2 text-center">
										<button class="btn btn-outline-primary">학사</button>
									</div>
									<div class="col-7">${i.title}</div>
									<div class="col-3 text-center">
										<fmt:parseDate var="Date" value="${i.writedate}"
											pattern="yyyy-MM-dd" />
										<fmt:formatDate value="${Date}" type="date"
											pattern="yyyy-MM-dd" />
									</div>
								</div>
							</c:forEach>
						</div>

						<div class="tab-pane" id="nav-scholar" role="tabpanel"
							aria-labelledby="nav-scholar-tab">
							<c:forEach var="i" items="${scholar}">
								<div class="row py-2 align-items-center"
									style="border-bottom: 1px solid black; cursor: pointer"
									onclick="location.href='/scholarView.notice?seq=${i.n_seq}'">
									<div class="col-2 text-center">
										<button class="btn btn-outline-success">장학</button>
									</div>
									<div class="col-7">${i.title}</div>
									<div class="col-3 text-center">
										<fmt:parseDate var="Date" value="${i.writedate}"
											pattern="yyyy-MM-dd" />
										<fmt:formatDate value="${Date}" type="date"
											pattern="yyyy-MM-dd" />
									</div>
								</div>
							</c:forEach>
						</div>
						<div class="tab-pane" id="nav-employment" role="tabpanel"
							aria-labelledby="nav-employment-tab">
							<c:forEach var="i" items="${employment}">
								<div class="row py-2 align-items-center"
									style="border-bottom: 1px solid black; cursor: pointer"
									onclick="location.href='/employmentView.notice?seq=${i.n_seq}'">
									<div class="col-2 text-center">
										<button class="btn btn-outline-warning">취업</button>
									</div>
									<div class="col-7">${i.title}</div>
									<div class="col-3 text-center">
										<fmt:parseDate var="Date" value="${i.writedate}"
											pattern="yyyy-MM-dd" />
										<fmt:formatDate value="${Date}" type="date"
											pattern="yyyy-MM-dd" />
									</div>
								</div>
							</c:forEach>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-6 calendar">
					<div class="row">
						<div id='calendar'></div>
					</div>
				</div>
			</div>
		</div>

		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
		
		<div class="row" style="display:none">
			<input type="hidden" id= size value=${size }><br>
			<c:forEach var="i" items="${list }">
				<input type=hidden id="${i.seq }seq" value=${i.seq }>
				<input type=hidden id="${i.seq }title" value= "${i.title }">
				<input type=hidden id="${i.seq }sDate" value= "${i.sDate }">
				<input type=hidden id="${i.seq }eDate" value= "${i.eDate }">
				<br>
			</c:forEach>	
			<input type="hidden" id = error value="${error }">
		</div>
	</div>
</body>

<script>

	var error =document.getElementById("error").value;
	if(error=='Login이 필요한 페이지입니다.'){
		alert(error);
	}
	
	document.getElementById('pop').onclick = function() {
		window.open('pop.home', '', 'width=500,height=500,left=0,top=0');
		//        openPopup('quiz03.html')
	}
	$(".nav-link")
			.on(
					"click",
					function() {
						var id = $(this).attr('id')
						var more = $("#more");
						if (id == 'nav-normal-tab') {
							var btn = '<button type="button" class="btn btn-outline-primary" id="moreNormal">more+</button>'
							more.html(btn)
						} else if (id == 'nav-academic-tab') {
							var btn = '<button type="button" class="btn btn-outline-primary" id="moreAcademic">more+</button>'
							more.html(btn)
						} else if (id == 'nav-scholar-tab') {
							var btn = '<button type="button" class="btn btn-outline-primary" id="moreScholar">more+</button>'
							more.html(btn)
						} else if (id == 'nav-employment-tab') {
							var btn = '<button type="button" class="btn btn-outline-primary" id="moreEmployment">more+</button>'
							more.html(btn)
						} else {
							more.html("");
						}
					})
	$("#more").on("click", "#moreNormal", function() {
		location.href = "/normalList.notice?page=1";
	})
	$("#more").on("click", "#moreAcademic", function() {
		location.href = "/academicList.notice?page=1";
	})
	$("#more").on("click", "#moreScholar", function() {
		location.href = "/scholarList.notice?page=1";
	})
	$("#more").on("click", "#moreEmployment", function() {
		location.href = "/employmentList.notice?page=1";
	})
</script>
</html>