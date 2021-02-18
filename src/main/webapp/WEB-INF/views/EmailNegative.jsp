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
    <style>
        

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
    <jsp:include page="/WEB-INF/views/topHeader.jsp"/>
	<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
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
                <div class="col-12 col-lg-9"><strong class="sub">이메일수집거부</strong></div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-lg-9">
                    <p></p>
                    <p><small>본웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.</small></p>
                    <pre>    </pre>
                    <div class="row">
                        <div class="col sub">
                            <p><strong>정보통신망 이용촉진 및 정보보호 등에 관한 법률</strong></p>
                        </div>
                    </div>
                    <p></p>
                    <div class="row">
                        <div class="col bottoml"><strong>제50조(전자우편주소의 무단 수집행위 등 금지)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>① 누구든지 전자우편주소의 수집을 거부하는 의가사 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는아니된다</small></p>
                    </div>
                    <div class="row">
                        <p><small>② 누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.</small></p>
                    </div>
                    <div class="row">
                        <p><small>③ 누구든지 제1항 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편 주소임을 알고 이를 정보 전송에이용하여서는 아니된다.</small></p>
                    </div>
                    <p></p>
                    <div class="row">
                        <div class="col bottoml"><strong>제72조(벌칙)</strong></div>
                    </div>
                    <p></p>
                    <div class="row">
                        <p><small>다음 각 호의 어느 하나에 해당하는 자는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처한다.</small></p>
                    </div>
                    <div class="row">
                        <p><small>① 제48조제1항을 위반하여 정보통신망에 침입한 자</small></p>
                    </div>
                    <div class="row">
                        <p><small>② 제49조의 2 제1항을 위반하여 다른 사람의 개인 정보를 수집한 자</small></p>
                    </div>
                    <div class="row">
                        <p><small>③ 제53조제1항에 따른 등록을 하지 아니하고 그 업무를 수행한 자</small></p>
                    </div>
                    <div class="row">
                        <p><small>④ 다음 각 목의 어느 하나에 해당하는 행위를 통하여 자금을 융통하여 준 자 또는 이를 알선한 자</small></p>
                    </div>
                    <ul>
                        <p>
                            <li><small>가. 재화 등의 판매·제공을 가장하거나 실제 매출금액을 초과하여 통신과금 서비스에 의한 거래를 하거나 이를 대행하게 하는 행위</small></li>
                        </p>
                        <p>
                            <li><small>나. 통신과금 서비스 이용자로 하여금 통신과금 서비스에 의하여 재화 등을 구매·이용하도록 한 후<br>
                                    통신과금 서비스 이용자가 구매·이용한 재화 등을 할인하여 매입하는 행위</small></li>
                        </p>
                    </ul>
                    <div class="row">
                        <p><small>⑤ 제66조를 위반하여 직무상 알게 된 비밀을 타인에게 누설하거나 직무 외의 목적으로 사용한 자</small></p>
                    </div>
                    <div class="row">
                        <p><small>-제1항제1호의 미수범은 처벌한다.</small></p>
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

</html>
