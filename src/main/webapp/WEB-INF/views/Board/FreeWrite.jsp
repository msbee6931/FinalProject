<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    
    <!-- include libraries(jQuery, bootstrap) -->
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css" rel="stylesheet">
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script> 
 
<!-- include summernote css/js -->
<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css" rel="stylesheet">
<script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js"></script>
 
 <!-- ckeditor 사용을 위해 js 파일 연결 -->
<script src="/ckeditor/ckeditor.js"></script>
    
    
    
    <style>
    @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	font-family: 'Nanum Gothic', sans-serif;
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}
		.container{
			margin-top: 20px;
			border: 1px solid lightgray;
			padding: 10px;
		}
        .content{
            display: flex;
            justify-content: center;
        }
        #textarea>div{
        	width: 100%;
        }
        .content
        /* table{width: 800px;} */
        /* table,tr,td{border: 1px solid;} */
        button{float: left;}
        table{
        	width: 100%;
        }
        table tr:nth-child(1){
            height: 30px;
            text-align: center;
        }
        table tr:nth-child(2){
            height: 30px;
        }
        table tr:nth-child(3){
            height: 400px;
        }
        table tr:nth-child(4){
            height: 30px; 
            text-align: right;
        }
        #title{
            width: 70%;
        }
        #textarea{
            height: 400px;
            width: 98%;
        }
        
       button,input[type='button'],input[type='submit'] {
		padding: 12px;
		border-style: none;
		background-color: #efefef;
		border-radius: 4px;
		}
		button:hover,input[type='button']:hover,input[type='submit']:hover{
			background-color: lightgray
		}
		#title{
			border: 1px solid lightgray;
			padding: 10px;
			width: 100%;
			margin-top: 10px;
		}
    </style>
</head>
<body>
	<div class="container">
		<form action=/free/write method="post" name = myform onsubmit="return check()" enctype="multipart/form-data">
    <div class = "content">
       <table>
        <tr>
            <td><h4><b>자유게시판 글 쓰기</b></h4></td>
        </tr>
        <tr>
            <td> 
            <input id ="title" name="title" type="text" placeholder="제목을 입력하세요"></td>
        </tr>
        <tr>
            <td> <textarea id="textarea" name="contents"></textarea></td>
        </tr>
        <tr>
           <td >
            <input type="submit" id = write value="글 쓰기">
            <input type="button" id = return value="목록으로">
            </td>
        </tr>
    </table>
        
    </div>
    </form>
	</div>
    
   <script>
   
   $(function(){
	    //id가 description인 태그에 summernote 적용
	    $("#textarea").summernote({
	        height : 500/* ,
	        width : 800 */
	    });
	});
   
  		function check(){
  			var myfrom = document.forms['myform']
  			if(myform['textarea'].value.length<1){
  			alert("내용을 입력하세요.");
  			return false
  			}
  			if(myform['title'].value.length<1){
  	  			alert("제목을 입력하세요.");
  	  			return false
  			}
  			
  			return true;
  		}
  		document.getElementById("return").onclick=function(){
  			location.href="/free/boardList?cpage=1"
  		}
       
       
    </script>
</body>
</html>