<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{box-sizing: border-box;}
        .container{width:80%;height:500px;position: absolute;left: 100px;}
        .d1{text-align: center;font-size: 30px; border-bottom-style: solid;}
        .d1-1{text-align:right;border-bottom-style:solid; width:100%;height:25px;}
        .d2-1{float: left;width: 10%;text-align: center;border-bottom-style: solid;}
        .d2-2{float: left;width: 40%;text-align: center;border-bottom-style: solid;}
        .d2-3{float: left;width: 15%;text-align: center;border-bottom-style: solid;}
        .d2-4{float: left;width: 20%;text-align: center;border-bottom-style: solid;}
        .d2-5{float: left;width: 15%;text-align: center;border-bottom-style: solid;}
        .d4{text-align : center;border-bottom-style: solid;}
        .d5{text-align : right;border-bottom-style: solid; height:100px;}
       #btn{position:relative;top:30px; right:30px; height:50px;}
        #search{width:150px; height:23px;}
    </style>
</head>

<body>

    <div class= container>
    <div class = d1>#자유게시판</div>
    <div class = d1-1>
    <form action = /free/search method="post">
    제목 검색 : <input type = text id= title name= title><input type=submit value="검색">
    </form>
    </div>
    <div class=d2>
        <div class = d2-1>seq</div>
        <div class = d2-2>Title</div>
        <div class = d2-3>Writer</div>
        <div class = d2-4>Date</div>
        <div class = d2-5>View</div>
    </div>
    <c:forEach var="i"  items="${list }" >
    <div class= d3>
			<div class=d2-1>${i.seq }</div>
			<div class=d2-2><a href ="/free/view?seq=${i.seq }">${i.title }</a></div>    
			<div class=d2-3>${i.writer }</div>    
			<div class=d2-4>${i.write_date }</div>    
			<div class=d2-5>${i.view_count }</div>  
    </div>
    </c:forEach>
    <div class=d4>${navi }</div>
    <div class=d5><input type=button id=btn value="글쓰기"></div>
    
    </div>
    <script>
    document.getElementById("btn").onclick = function(){
    	location.href="/free/writePage"
    }
    
    </script>
</body>
</html>