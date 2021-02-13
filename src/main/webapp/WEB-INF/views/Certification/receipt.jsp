<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{box-sizing: border-box;}
       div{border: 1px solid black}
.container{width:40%; height: 700px; position: absolute;left: 35%; text-align: center; }
    .right{text-align: right;}
        .header{width: 100%;height: 70px;}
        .basic1{width: 40%; height: 30px; float: left;}
        .basic2{width: 100%; height: 30px;}
        .pay1{width: 15%; height: 180px; line-height: 5;float: left;}
        .pay2{width: 15%; height: 90px;float: left;line-height: 5;}
        .pay2-1{width: 15%; height: 90px;float: left;line-height: 2.5;}
        .pay3{width: 35%; height: 30px;float: left;}
        .claim1{width: 30%; height :30px;float: left;}
        .claim2{width: 70%; height :30px;float: left;}
        .last1{width: 15%; height: 60px;float: left;}
        .last2{width: 15%; height: 30px;float: left;}
    </style>
</head>
<body>
    <div class=container>
        <div class=header>
            <h2>등록금 및 기타경비 납부 확인서</h2>
        </div>
        <div class=basic1>학 번</div>
        <div class=basic2>${dto.s_seq }</div>
        <div class=basic1>성 명</div>
        <div class=basic2>${dto.name }</div>
        <div class=basic1>주민등록번호</div>
        <div class=basic2>${birth }</div>
        <div class=basic1>학 과</div>
        <div class=basic2>${part }</div>
        <div class=basic1>학년</div>
        <div class=basic2>${dto.grade }</div>
        <div class=basic1>해당학기</div>
        <div class=basic2>${semester }</div>
        <div class=pay1>청 구<br>내 역</div>
        <div class=pay2>등록금</div>
        <div class=pay3>입 학 금</div>
        <div class=pay3>${dto2.t_enter }(원)</div>
        <div class=pay3>수 업 료</div>
        <div class=pay3>${dto2.t_class }(원)</div>
        <div class=pay3>합 계</div>
        <div class=pay3>${sum1 }(원)</div>
        <div class=pay2-1>기 타<br>경 비</div>
        <div class=pay3>학 생 회 비</div>
        <div class=pay3>${dto2.t_std }(원)</div>
        <div class=pay3>졸 업 앨 범 비</div>
        <div class=pay3>${dto2.t_grd }(원)</div>
        <div class=pay3>오리엔테이션비</div>
        <div class=pay3>${dto2.t_ore }(원)</div>
        <div class=claim1>장 학 금 액</div>
        <div class=claim2>${scholarship}(원)</div>
        <div class=claim1>청 구 총 액</div>
        <div class=claim2>${finalsum }(원)</div>
        <div class=last1>납 부<br>내 역</div>
        <div class=last2>등 록 금</div>
        <div class=pay3>지불한날</div>
        <div class=pay3>${t_date }</div>
        <div class=last2>기타경비</div>
        <div class=pay3></div>
        <div class=pay3></div>
        <h4>이와같이 납부했음을 증명합니다.</h4>
        <h5 class=right>${sysdate }</h5>
        <h1>KH대학 행정대장</h1>
    </div>
</body>
</html>