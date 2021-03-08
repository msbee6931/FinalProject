<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        <style>
        @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
	.nanumgothic * {
		 font-family: 'Nanum Gothic', sans-serif;
	}
	*{
	font-family: 'Nanum Gothic', sans-serif;
	box-sizing: border-box;
	}
            .row{font-size: 13px;
            text-align: center}
            .container{
               margin: 0px;
                
            }
        </style>
        <script language="JavaScript">
    function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();
    }

    function closePopup() {
        if (document.getElementById("check").value) {
            setCookie("popupYN", "N", 1);
            self.close();
        }
    }
</script>

</head>
<body>
   <div class="container">
       <div class="row head">
          <div class="col"><img src="/img/corona.jpg"></div> 
       
       </div>
       <div class="row contents">
    <fontsize=3> <b>오늘하루더이상보지않기</b> </font>
       <input type="checkbox" id="check" onclick="closePopup();">

       </div>
       
   </div>
    
</body>
</html>