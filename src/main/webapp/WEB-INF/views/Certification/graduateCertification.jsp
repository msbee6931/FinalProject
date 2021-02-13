<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<style>
    div{border: 1px solid black}
.container{width:40%; height: 600px; position: absolute;left: 35%; text-align: center; padding: 70px;}
    .left{text-align: left;}
    </style>
<body>
    <div class = container>
        <h1>졸업 증명서</h1><br><br>
    <h4 class=left>성      명 : ${dto.name }</h4>
    <h4 class=left>생 년 월 일 : ${birth }</h4>
    <h4 class=left>학      과 : ${part }</h4>

    <br><br>
    <h4>위의 사람은 본교의 졸업생임을 증명합니다.</h4>
    <br><br>
    <b4>${sysdate }</b4>
    <br><br>
    <h2>KH대학 총장</h2>
    </div>
</body>
</html>