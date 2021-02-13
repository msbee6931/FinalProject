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
                                    <a class="nav-link active" href="LawOfOffical.home">공무원행동강령</a>
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
                            <li><a class="dropdown-item" href="LawOfOffical.home">공무원행동강령</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-9"><strong class="sub">개인정보처리방침</strong></div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-lg-9">
                    <p></p>
                    <p><strong class="head4">KH대학 개인정보처리방침</strong></p>
                    <p><small>KH대학교는 개인정보 보호법 제 30조에 따라 정보주제의 개인정보 및 권익을 보호하고 개인정보와 관련된 정보주체의 고충을 원할하게 처리할 수 있도록 하기 위하여 다음과 같이 처리방침을 수립,공개합니다.</small></p>
                    <pre>    </pre>
                    <div class="row">
                        <div class="col bottoml"><strong>제1조(개인정보의 처리 목적)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>KH대학교는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용목적이 변경되는 경우에는 개인정보보호법 제18조에따라 별도의 동의를 받는 등 필요한 조치를 이행토록 하겠습니다.</small></p>
                    </div>
                    <ul>
                        <p>
                            <li><small>1.학사관리 및 학교 행정서비스 제공</small><br>
                                <small>학적,성적,졸업 등의 학사관리 및 각종 학교 행정서비스를 제공하기 위한 목적으로 개인정보를 처리합니다.</small>
                            </li>
                        </p>
                        <p>
                            <li><small>2.KH대학교 정보시스템 서비스제공</small><br>
                                <small>KH대학교 정보시스템 사용자 등록 및 서비스 이용, 고지사항 전달 등을 목적으로 개인정보를 처리합니다.</small>
                            </li>
                        </p>
                    </ul>

                    <p></p>
                    <div class="row">
                        <div class="col bottoml"><strong>제2조(개인정보의 항목, 처리 및 보유기간)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>KH대학교에서 각종 서비스 제공을 위해 개인정보의 항목, 처리 및 보유기간은 다음과 같습니다.</small></p>
                    </div>
                    <p></p>
                    <div class="row bottom" id="head4">
                        <div class="col-3 d-none d-lg-block"><strong>개인정보 파일명</strong></div>
                        <div class="col-3 d-none d-lg-block"><strong>운영근거/처리목적</strong></div>
                        <div class="col-3 d-none d-lg-block"><strong>개인정보의 항목</strong></div>
                        <div class="col-3 d-none d-lg-block"><strong>처리 및 보유기간</strong></div>
                    </div>
                    <p></p>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>유학생관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>외국인유학생 및 관리지침/학사관리 및 입학자격심사</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, E-Mail, 연락처, 생년월일, 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>10년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>해외파견학생관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙)/학사관리 및 학교 행정업무</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, E-Mail, 연락처, 생년월일, 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>10년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>외국어수강생관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>대학 규정/어학원생 학사관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, E-Mail, 연락처, 생년월일, 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>5년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>대학원 성적</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙)/학사관리 및 학교 행정업무</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 주민번호, 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>대학원 졸업관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙)/</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 주민번호, 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>대학원 학적</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙)/</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 주민번호, 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>도서관이용자 관리파일</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>도서관법 제38조, 정보주체동의/학교도서관 대출 및 반납관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 연락처, EMail, 연락처, 생년월일 기타</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>5년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>대학발전기금 접수대장</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>기부금품 모집 및 사용에 관한 법률 시행령 제 19조(장부·서류의 비치 및 공개 의무) / 대학발전기금 기탁자 관리 및 기부금영수증 발급</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, 직장주소, E-Mail, 연락처, 기타(사업자번호)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>취업관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>순천대학교인력개발위원회규정 / 학생경력관리 및 취업선발자관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 학번</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>5년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>신입학지원자 정보관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제35조(입학전형관리) / 신입생 선발</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, E-Mail, 연락처, 주민번호, 기타(환불계좌번호, 출신학교)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>1년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>평생교육수강생</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>평생교육법시행규칙제4조(학습계좌운영) / 평생교육생 학사관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, E-Mail, 연락처, 생년월일, 기타(계좌정보)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>학사성적</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙) / 학사관리 및 학교 행정업무</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 주민번호, 기타(학번, 성적))</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>학사졸업관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙) / 학사관리 및 학교 행정업무</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 주민번호, 기타(학번, 학위번호)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>학사학적</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>고등교육법시행령 제4조(학칙) / 학사관리 및 학교 행정업무</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, 연락처, 주민번호, 기타(주소, 보호자주소, 보호자연락처, 보호자 성명, 학번)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>준영구</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>사생관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>순천대학교 학생생활관 운영규정 / 생활관생 선발 및 관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 집주소, E-Mail, 연락처, 생년월일, 기타(보호자성명, 보호자연락처)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>5년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>보건관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>학교보건법 7조의3(건강검사기록) / 학생건강의 보호, 진료현황 관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 연락처, 기타(학과)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>1년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>장애학생관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>장애인 등에 대한 특수교육법 제30조 / 장애학생 지원</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 연락처, 기타(학번, 장애등록번호)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>5년</small></strong></div>
                    </div>
                    <div class="row bottom" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>장학생관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>대학등록금에관한규칙제3조(등록금의 면제,감액) / 교내.외 장학생 관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 생년월일, 기타(학번, 연락처 보호자성명, 보호자연락처)</small></strong></div>
                        <div class="col-2 col-lg-3"><strong><small>5년</small></strong></div>
                    </div>
                    <div class="row" id="c">
                        <div class="col-12 col-lg-3" id="head4"><strong><small>공동활용 기자재 이용 회원관리</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>순천대학교공동실험실습관규정 / 기자재 이용 회원관리 및 신청 이용료 청구</small></strong></div>
                        <div class="col-5 col-lg-3"><strong><small>이름, 연락처, 기타(소속, 직급, 성명, E-Mail)</small></strong></div>
                        <div class="col-2 col-lg-3">
                            <p><strong><small>10년</small></strong></p>
                        </div>
                        <p></p>
                    </div>

                    <p></p>
                    <div class="row">
                        <div class="col bottoml"><strong>제3조(정보주체와 법정대리인의 권리, 의무 및 그 행사 방법)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>① 정보의 주체는 KH대학교에 대하여 언제든지 각 호의 개인정보 보호 간련 권리를 행사할 수 있습니다.</small></p>
                    </div>
                    <ul>
                        <li><small>1.개인정보의 열람 요구</small></li>
                        <li><small>2.개인정보의 오류 등이 있을 경우 정정 요구</small></li>
                        <li><small>3.개인정보의 삭제 요구</small></li>
                        <li><small>4.개인정보의 처리정지 요구</small></li>
                    </ul>

                    <div class="row">
                        <p><small>② 제1항에 따른 권리 행사는 KH대학교에 대하여 방문,서면,전화,전자우편 등을 통하여 하실수 있으며 KH대학교는 이에 대해 지체 없이 조치하겠습니다.</small></p>
                    </div>
                    <div class="row">
                        <p><small>③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 KH대학교는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</small></p>
                    </div>
                    <div class="row">
                        <p><small>④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</small></p>
                    </div>
                    <p></p>
                    <div class="row">
                        <div class="col bottoml"><strong>제4조(개인정보의 파기)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>① KH대학교는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</small></p>
                    </div>
                    <div class="row">
                        <p><small>② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보(또는 개인정보파일)를 별도의 데이터베이스로 옮기거나 보관 장소를 달리하여 보존합니다.</small></p>
                    </div>
                    <div class="row">
                        <p><small>③ 개인정보 파기의 절차, 기한 및 방법은 다음과 같습니다.</small></p>
                    </div>
                    <ul>
                        <p>
                            <li><small>1. 파기절차
                                    KH대학교는 파기하여야 하는 개인정보(또는 개인정보파일)에 대해 개인정보 파기계획을 수립하여 파기합니다. 파기 사유가 발생한 개인정보(또는 개인정보파일)을 선정하고, 개인정보 보호책임자의 승인받아 개인정보(또는 개인정보파일)를 파기합니다.</small></li>
                        </p>
                        <p>
                            <li><small>2. 파기기한
                                    이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.</small></li>
                        </p>
                        <p>
                            <li><small>3. 파기방법
                                    KH대학교는 “공공기록물 관리에 관한 법률”을 준용하여 전자적 형태로 기록ㆍ저장된 개인정보는 기록을 재생할 수 없도록 기술적 방식으로 파기하며, 비전자 형태(종이 등)의 기록물은 분쇄기로 파쇄하거나 소각을 통하여 파기합니다.</small></li>
                        </p>
                    </ul>
                    <p></p><br>
                    <div class="row">
                        <div class="col bottoml"><strong>제5조(개인정보의 안정성 확보조치)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>KH대학교는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적 및 물리적 조치를 하고 있습니다.</small></p>
                    </div>
                    <ul>
                        <p>
                            <li><small>1. 개인정보 취급 직원의 최소화 및 교육<br>
                                    개인정보를 취급하는 직원을 지정하고, 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다. 또한 취급 직원을 대상으로 안전한 관리를 위한 교육을 실시하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>2. 정기적인 자체 감사 실시<br>
                                    개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>3. 내부관리계획의 수립 및 시행<br>
                                    개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>4. 개인정보의 암호화<br>
                                    정보주체의 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알 수 있으며, 중요한 데이터는 전송데이터를 암호화하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>5. 해킹 등에 대비한 기술적 대책<br>
                                    KH대학교는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신/점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>6. 개인정보에 대한 접근 제한<br>
                                    개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>7. 접속기록의 보관 및 위변조 방지<br>
                                    개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.</small></li>
                        </p>
                        <p>
                            <li><small>8. 비인가자에 대한 출입 통제<br>
                                    개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</small></li>
                        </p>
                    </ul>
                    <p></p><br>
                    <div class="row">
                        <div class="col bottoml"><strong>제6조(개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>KH대학교는 쿠키 등 인터넷 서비스 이용 시 자동 생성되는 개인정보를 수집하는 장치를 운영하지 않습니다.</small></p>
                    </div>
                    <p></p><br>
                    <div class="row">
                        <div class="col bottoml"><strong>제7조(권익침해 구제방법)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>정보주체께서는 아래의 기관에 대하여 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.
                                아래의 기관은 KH대학교와는 별개의 기관으로서, 순천대학교의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.</small></p>
                    </div>
                    <ul>
                        <p>
                            <li><small>1. 개인정보 침해신고센터 (한국인터넷진흥원 운영)<br>
                                    -소관업무 : 개인정보 침해사실 신고, 상담 신청<br>
                                    -홈페이지 : privacy.kisa.or.kr<br>
                                    -전화 : (국번없이) 118</small></li>
                        </p>
                        <p>
                            <li><small>2. 개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)<br>
                                    소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)<br>
                                    홈페이지 : privacy.kisa.or.kr</small></li>
                        </p>
                        <p>
                            <li><small>3. 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)</small></li>
                        </p>
                        <p>
                            <li><small>4. 경찰청 사이버테러대응센터 : 1566-0112 (www.netan.go.kr)</small></li>
                        </p>

                    </ul>
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