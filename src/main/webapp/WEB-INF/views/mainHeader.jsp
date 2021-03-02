<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Main Header</title>
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
a {
	text-decoration: none;
}

li {
	list-style: none;
}

* {
	box-sizing: border-box;
	
}
.headt2 {
	background-color: white;
	font-family: 'Nanum Gothic', sans-serif;
}

nav {
	background-color: #ffffff;
}

.nav-item {
	font-size: 20px;
}

#pop {
	cursor: pointer;
}
</style>
</head>
<body>
		<div class="row headt2 p-2">
			<nav class="navbar navbar-expand-xl navbar-light"
				style="background-color: white">
				<div class="container-fluid">
					<a class="navbar-brand" href="/"><img src="/img/logo.PNG"></a>
					<button class="navbar-toggler" type="button"
						data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02" aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item p-3"><a class="nav-link active"
								aria-current="page" href="/introduce.home"><b>학교소개</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/normalList.notice?page=1"
								tabindex="-1"><b>공지사항</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/schoolSchedule"
								tabindex="-1"><b>학사일정</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/free/boardList"
								tabindex="-1"><b>게시판</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/reference/refList.ref?page=1"
								tabindex="-1"><b>자료실</b></a></li>
							<li class="nav-item p-3"><a class="nav-link active" href="/chatting/chatHome"
								tabindex="-1"><b>채팅</b></a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>		
</body>
</html>