<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
    <link rel="icon" type="image/png" href="http://example.com/myicon.png">
    <meta charset="UTF-8">
    <title>SignUp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
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
* {
	box-sizing: border-box;
}

.headt1 {
	font-size: 13px;
	text-align: center;
	color: white;
	background-color: #435a7c;
	font-family: 'GmarketSansMedium';
}

.headt2 {
	background-color: white;
	border-bottom: 2px solid whitesmoke;
	font-family: 'GmarketSansLight';
}
.head3 {
	font-family: 'GmarketSansLight';
}
.row{
	font-family: 'GmarketSansLight';
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

.title {
	border: 1px solid;
	width: 30%;
	font-size: 20px;
	background-color: #266ed4;
	color: white
}

.sub {
	font-size: 20px;
	font-family: 'GmarketSansLight';
}

.subtitle {
	font-size: 20px;
	padding-right: 30px;
}

.left {
	background-color: light;
	text-align: left;
	vertical-align: middle;
}

.a2 {
	text-decoration: none;
	color: white;
	font-family: 'GmarketSansLight';
}

.bottom {
	border-bottom: 1px solid whitesmoke;
}

.bottoml {
	border-bottom: 1px solid #266ed4;
}
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
#dropdownMenuButton{
	margin-left: 0;
}

</style>
</head>

<body>
    <div class="contatiner">
        <div class="row">
            <div class="col">
                <input type="hidden" value="">
            </div>
        </div>
        <div class="row headt1 p-2">
            <div class="col-8 col-md-9"></div>
            <div class="col-2 col-md-1">로그인</div>
            <div class="col-2 col-md-1" id="pop">팝업창</div>
            <div class="col-0 col-md-1"></div>
        </div>
        <div class="row headt2">
            <nav class="navbar navbar-expand-xl navbar-light" style="background-color: white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src="img/logo.PNG"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item p-3"><a class="nav-link active" aria-current="page" href="introduce.home"><b>학교소개</b></a></li>
                            <li class="nav-item p-3"><a class="nav-link active" href="#" tabindex="-1"><b>공지사항</b></a></li>
                            <li class="nav-item p-3"><a class="nav-link active" href="#" tabindex="-1"><b>학사스케쥴</b></a></li>
                            <li class="nav-item p-3"><a class="nav-link active" href="#" tabindex="-1"><b>게시판</b></a></li>
                            <li class="nav-item p-3"><a class="nav-link active" href="#" tabindex="-1"><b>자료실</b></a></li>
                            <li class="nav-item p-3"><a class="nav-link active" href="#" tabindex="-1"><b>채팅</b></a></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div class="row body p-5">
            <div class="col-12 d-block d-lg-none head3">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="introduce.home">학교소개</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="introduce.home">인사말</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="department.home">학과소개</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="admission.home">입학정보</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="row">
                <div class="col-0 col-lg-3 p- d-none d-lg-block head3">
                    <b class="title  p-5"><a class="a2" href="introduce.home">학교소개</a></b>
                    <div class="dropdown pt-2">
						<button class="btn btn-secondary dropdown-toggle" type="button"
							id="dropdownMenuButton" data-bs-toggle="dropdown"
							aria-expanded="false"></button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li><a class="dropdown-item" href="introduce.home">인사말</a></li>
							<li><a class="dropdown-item" href="department.home">학과소개</a></li>
							<li><a class="dropdown-item" href="admission.home">입학정보</a></li>
						</ul>
					</div>
                </div>
                <div class="col-12 col-lg-9"><strong class="sub">수시모집</strong></div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-lg-9">
                    <p><small>-수시모집에 합격한 자는 수시모집 등록기간 내 등록 처리하며, 수시모집에 복수합격한 자는 수시모집 등록기간 내에 충원합격 대학을 포함하여 1개 대학에만 등록함(예치금 가 등록을 정식등록으로 처리함)</small></p>
                    <p><small>-수시모집에서 합격한 대학에 이미 등록 한 자가 다른 대학의 수시모집에 충원 합격하여 그 대학에 등록하고자 할 경우에는 먼저 등록한 대학을 포기한 후, 충원 합격 대학에 등록하는 것으로 함.</small></p>
                    <pre>    </pre>
                    <div class="row">
                        <div class="col bottoml"><strong>수시모집일정표</strong></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>원서접수</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>[1차] 2020. 9.23.(수)~10.13.(화), [2차] 2020.11.23.(월)~12. 7.(월)</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>전형기간</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2020.10.14.(수)부터∼최초 합격자 발표 전까지 자율</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>합격자발표</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2020.12.27.(일)까지</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>합격자등록</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2020.12.28.(월)∼12.30.(수) (3일)</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>충원합격자발표</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 1. 6(수)까지</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>충원합격자등록</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 1. 6(수)까지</small></div>
                    </div>
                    <pre>        </pre>
                    <div class="row pt-5 pb-5">
                        <div class="col"><b class="sub">정시모집</b></div>
                    </div>
                    <div class="row">
                        <p><small>- 정시모집에 합격한 자는 정시모집 등록기간 내 또는 대학별로 설정한 등록기간 내 등록 처리 하며, 정시모집에 복수합격한 자는 충원합격 대학을 포함하여 1개 대학에만 등록함.</small></p>
                        <p><small>- 단,수시모집대학의 합격자(충원합격자 포함)는 등록여부와 상관없이 정시모집 미 자율모집에 지원이 금지 됩니다.</small></p>
                        <pre>    </pre>
                        <p><small>[자율(추가)모집 관련]</small></p>
                        <p><small>※ 정시모집 원수접수기간 이후 결원이 발생한 대학은 결원된 인원에 한해서 2021.1.19(화)부터 자율 모집 허용. 단, 자율모집을
                                통한 최초 합격자는 정시모집 등록기간(2021. 2. 8. ~ 2. 10. 3일)에 반드시 등록</small></p>
                        <p><small>※ 수시모집 예치금 등록자는 예치금을 제외한 나머지 등록금을 정시모집 최초 합격자 등록기간에 등록하여야 함</small></p>
                        <pre>    </pre>
                        <div class="row">
                        <div class="col bottoml"><strong>정시모집일정표</strong></div>
                        <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>원서접수</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021.1.7.(목)∼2021.1.18.(월) (12일)</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>전형기간</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021.1.19.(화)부터∼최초 합격자 발표 전까지 자율</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>합격자발표</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 2. 7.(일)까지</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>합격자등록</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 2. 8.(월) ∼ 2.10.(수) (3일)</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>충원합격자발표</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 2.11.(목) ∼ 2. 28(일)까지</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>충원합격자등록</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 2.11.(목) ∼ 2. 28(일)까지</small></div>
                    </div>
                    <div class="row bottom">
                        <div class="col-3 pt-3 pb-3 col-md-2 left"><small><strong>추가모집</strong></small></div>
                        <div class="col-9 col-md-10 p-3 right"><small>2021. 2.11.(목) ∼ 2. 28(일)까지</small></div>
                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
		</div>

</body>
<script>
    document.getElementById('pop').onclick = function() {
        window.open('pop.home', '', 'width=500,height=500,left=0,top=0')
        //        openPopup('quiz03.html')
    }
</script></html>