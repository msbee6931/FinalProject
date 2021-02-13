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

        .head4 {
            font-family: 'GmarketSansBold';
        }
        .head5{
            font-family: 'GmarketSansBold';
            font-size: 18px;
        }

        #head4 {
            font-family: 'GmarketSansBold';
        }

        .row {
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
            font-family: 'GmarketSansBold';
        }

        @font-face {
            font-family: 'GmarketSansBold';
            src:
                url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'GmarketSansMedium';
            src:
                url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'GmarketSansLight';
            src:
                url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        #dropdownMenuButton {
            margin-left: 0;
        }

        #c {
            color: dimgrey;
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
                        <a class="navbar-brand" href="PersonalInfomation.home">이용안내</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="PersonalInfomation.home">개인정보처리방침</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="EmailNegative.home">이메일수집거부</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="admission.home">공무원행동강령</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="row">
                <div class="col-0 col-lg-3 p- d-none d-lg-block head3">
                    <b class="title  p-5"><a class="a2" href="PersonalInfomation.home">이용안내</a></b>
                    <div class="dropdown pt-2">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="PersonalInfomation.home">개인정보처리방침</a></li>
                            <li><a class="dropdown-item" href="EmailNegative.home">이메일수집거부</a></li>
                            <li><a class="dropdown-item" href="admission.home">공무원행동강령</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-9"><strong class="sub">공무원행동강령</strong></div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-lg-9">
                    <p></p>
                    <div class="row">
                        <div class="col head4">
                            <p><strong>국가공무원법</strong></p>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col bottoml"><strong>제61조(청렴의 의무)</strong></div>
                    </div>
                    <p></p>
                    <ul>
                        <p><li><small>공무원은 직무와 관련하여 직접적이든 간접적이든 사례·증여 또는 향응을 주거나 받을 수 없다.</small></li></p>
                        <p><li><small>공무원은 직무상의 관계가 있든 없든 그 소속 상관에게 증여하거나 소속 공무원으로부터 증여를 받아서는 아니 된다.</small></li></p>
                        
                    </ul>
                    <pre>    </pre>
                    <div class="row">
                        <div class="col head4">
                            <p><strong>공무원 행동강령</strong></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col bottoml"><strong>제14조(금품등을 받는 행위의 제한)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>① 공무원은 직무관련자로부터 금전, 부동산, 선물 또는 향응(이하 "금품등"이라 한다)을 받아서는 아니 된다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.</small></p>
                    </div>
                    <ul>
                        <p><li><small>채무의 이행 등 정당한 권원에 의하여 제공되는 금품등</small></li></p>
                        <p><li><small>통상적인 관례의 범위에서 제공되는 음식물 또는 편의</small></li></p>
                        <p><li><small>직무와 관련된 공식적인 행사에서 주최자가 참석자에게 일률적으로 제공하는 교통·숙박 또는 음식물</small></li></p>
                        <p><li><small>불특정 다수인에게 배포하기 위한 기념품 또는 홍보용 물품</small></li></p>
                        <p><li><small>질병·재난 등으로 어려운 처지에 있는 공무원을 돕기 위하여 공개적으로 제공되는 금품등</small></li></p>
                        <p><li><small>그 밖에 원활한 직무수행 등을 위하여 중앙행정기관의 장등이 허용하는 범위에서 제공되는 금품등</small></li></p>
                        
                    </ul>
                    <div class="row">
                        <p><small>② 공무원은 직무관련공무원으로부터 금품 등을 받아서는 안 된다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.</small></p>
                    </div>
                    <ul>
                        <p><li><small>채무의 이행 등 정당한 권원에 따라 제공되는 금품 등</small></li></p>
                        <p><li><small>직무수행을 위해 부득이한 경우에 한하여 제공되는(1인당 3만원 이내의) 간소한 음식물 또는 교통·통신 등 편의</small></li></p>
                        <p><li><small>직무와 관련된 공식적인 행사에서 주최자가 참석자에게 일률적으로 제공하는 교통·숙박 또는 음식물</small></li></p>
                        <p><li><small>불특정 다수인에게 배포하기 위한 기념품 또는 홍보용 물품</small></li></p>
                        <p><li><small>질병·재난 등으로 어려운 처지에 있는 공무원을 돕기 위해 공개적으로 제공되는 금품 등</small></li></p>
                        <p><li><small>3만원을 초과하지 않는 범위에서 통상적으로 제공되는 간소한 선물</small></li></p>
                        <p><li><small>직원 상조회 등에서 공개적으로 제공되는 금품 등</small></li></p>
                        <p><li><small>상급자가 하급자에게 위로·격려·포상 등 사기를 높일 목적으로 제공하는 금품 등</small></li></p>
                        <p><li><small>그 밖에 원활한 직무수행 등을 위하여 기관장이 허용하는 범위에서 제공되는 금품 등</small></li></p>
                        
                    </ul>
                    <div class="row">
                        <p><small>③ 공무원은 직무관련자였던 자나 직무관련공무원이었던 사람으로부터 당시의 직무와 관련하여 금품 등을 받아서는 아니 된다. 다만, 제1항 각 호와 제2항 각 호의 어느 하나에 해당하는 경우는 제외한다. 공무원은 배우자나 직계 존속·비속이 제1항부터 제3항까지의 규정에 따라 수령이 금지되는 금품 등을 받지 않도록 하여야 한다.</small></p>
                    </div>
                     <div class="row">
                        <p><small>④ 이 영을 적용받는 공무원이 금품 등의 수수금지 의무를 위반하여 징계 처분을 할 경우에는 별표 1의 양정기준을 참작하여야 한다.</small></p>
                    </div>
                    <p></p>

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

</script>

</html>