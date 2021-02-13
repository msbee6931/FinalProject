<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{box-sizing: border-box;}
       div{border: 1px solid black}
.container{width:70%; height: 700px; position: absolute;left: 20%;}
    .right{text-align: right;}
        .header1{width: 30%;height: 90px; float: left;}
        .header2{width: 40%;height:90px; float:left;}
        .main{width: 33%; height: 525px; float: left;}
        .main2{width: 34%; height: 525px; float: left;}
        .main3-1{width:15%; height: 30px; float: left; text-align: center; border: 1px solid black;}
        .main3-2{width:55%; height: 30px; float: left;text-align: center; border:1px solid black; lin}
        .center{text-align: center;}
        .title{width: 100%;height: 30px;float: left;text-align: center;text-decoration-line: underline;border: none;}
        .main4-1{width:15%; height: 15px; float: left; text-align: center; font-size: 1px;border: none;}
        .main4-2{width:55%; height: 15px; float: left;text-align: center; font-size: 1px; border:none;}
    </style>
</head>
<body>
   <h1 class= center>성적증명서</h1>
    <div class=container>
        <div class=header1>
            학 번 : ${dto.s_seq }<br>
            성 명 : ${dto.name }<br>
            성 별 : ${dto.gender }<br>
            생 년 월 일 : ${birth}
             
        </div>
        <div class=header2>
            대 학 : KH대학교<br><br>
            학 부(과) :${part} <br>

        </div>
        <div class=header1>
            입학 연월일 : 20${s_id }.03.01<br>
            졸업 연월일 : <br>
            학 위 명 :
        </div>
        <div class= main>
            <div class=main3-1>구분</div>
            <div class=main3-2>교과목명</div>
            <div class=main3-1>학점</div>
            <div class=main3-1>성적</div>
            <div class=title>1학년 1학기</div>
            <c:forEach var="i" items="${f_f }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            
            
            <div class=title>1학년 2학기</div>
             <c:forEach var="i" items="${f_s }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            
            
              <div class=title>2학년 1학기</div>
             <c:forEach var="i" items="${s_f }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            </div>
            
        <div class= main>
             <div class=main3-1>구분</div>
            <div class=main3-2>교과목명</div>
            <div class=main3-1>학점</div>
            <div class=main3-1>성적</div>
            <div class=title>2학년 2학기</div>
            <c:forEach var="i" items="${s_s }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            
              <div class=title>3학년 1학기</div>
             <c:forEach var="i" items="${t_f }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            
            <div class=title>3학년 2학기</div>
             <c:forEach var="i" items="${t_s }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            </div>
        <div class= main2>
             <div class=main3-1>구분</div>
            <div class=main3-2>교과목명</div>
            <div class=main3-1>학점</div>
            <div class=main3-1>성적</div>
            <div class=title>4학년 1학기</div>
            <c:forEach var="i" items="${ff_f }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
            
            <div class=title>4학년 2학기</div>
             <c:forEach var="i" items="${ff_s }">
            <div class=main4-1>${i.classpart }</div>
            <div class=main4-2>${i.classname }</div>
            <div class=main4-1>${i.classpoint }</div>
            <div class=main4-1>${i.grade }</div>
            </c:forEach>
        </div>
            <h4 class=center>위의사실을 증명합니다.</h4>

            <h2 class=center>KH대학교 교무처장</h2>
    </div>
</body>
</html>