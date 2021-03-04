<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>자유게시판 글쓰기</title>

<!-- include libraries(jQuery, bootstrap) -->
<link
	href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css"
	rel="stylesheet">
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script
	src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<!-- include summernote css/js -->
<link
	href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css"
	rel="stylesheet">
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js"></script>

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
/* div {
	border: 1px solid gray;
} */
.container {
 	width: 1000px;
	height: 600px;
/* 	position: relative;  */
	text-align: center;
/* 	margin: 0px; */
	padding: 0px;
	border: 1px solid lightgray;
}

.main {
   height: 500px;
/*    background-color: white; */
   overflow:auto;
}

.comment{
	background-color: #efefef;
	padding: 10px;
}
.info {
	display: flex;
	justify-content: space-around;
	background-color: #efefef;
	padding: 10px;
	margin-bottom: 10px;
}
.comment-wrap{
	width: 1000px;
	height: 600px;
/* 	position: relative;  */
	padding: 0px;
	margin: auto;
}
.replyLine{
	text-align: center;
	margin: 20px 0px;
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
.replyLine2{
 text-align: right;
}
#navi{
	margin: 10px;
	text-align:center;
}
.revlist{
	margin-top: 10px;
}.title{
	display: flex;
	justify-content: space-between;
	margin: 10px;
}
</style>
</head>
<body>
	<div class="container">
		<h4 class=title><b>자유게시판</b></h4>

		<div class="info">
			<div class=bar1>${dto.seq }</div>
			<div class=bar2>${dto.title }</div>
			<div class=bar3>${dto.writer }</div>
			<div class=bar4>${dto.write_date }</div>
			<div class=bar5>${dto.view_count }</div>
		</div>

		<div class=main>${dto.contents }</div>

		<div class=title>
			<form action="/free/delete" method="post">
				<input type=hidden id=seq name=seq value=${dto.seq }> <input
					type=hidden id=cpage name=cpage value=1>
				<c:if test="${id == dto.writer}">
					<div class="btns">
						<input type="submit" id="btn" value="삭제">
						<input type="button" id="upt" value="수정하기">
					</div>
					<script>
						document.getElementById("upt").onclick=function(){
						  	location.href="/free/updatePage?seq="+seq.value;
					  	 }
					</script>
				</c:if>
			</form>
			<input type="button" id="btn2" value="돌아가기">
		</div>
	</div>
	
	<div class="comment-wrap">
		<h4 class="replyLine"><b>댓글 등록 하기</b></h4>
	
	<form action=/fcomment/insert method="post"
		enctype="multipart/form-data">
		<div class=rev>
			<textarea id=description name=rev_contents></textarea>
		</div>
		<div class="replyLine2">
			<input type="hidden" id=main_seq name=main_seq value=${dto.seq }>
			<input type="submit" id=write value="글 쓰기">
		</div>
	</form>

	<!-- <h5 class= replyLine3><b>댓글</b></h5> -->

	<div class="revlist" id=revList>
		<input type=hidden id=mSeq value=${dto.seq }>
		<input type=hidden id=hiddenId value=${id }>
		
		<c:forEach var="i" items="${list}">
			<div class='comment'>
				<span class='revWriter'><작성자> : ${i.rev_writer}</span> <span class='revDate'><작성일> : ${i.rev_write_date}</span>
				<p class='revContents'>${i.rev_contents}</p>
				<c:if test="${id == i.rev_writer}">
				<button type='button' class='rUpdBtn' data-revSeq=${i.rev_seq }
					data-mainSeq=${i.main_seq }>수정</button>
				<button type='button' class='rDelBtn' data-revSeq=${i.rev_seq }
					data-mainSeq=${i.main_seq }>삭제</button>
				</c:if>
			</div>
		</c:forEach>
	</div>
	
	<div class="rUpdModal">
			<div class="rUpdContent">
				<div>
					<textarea class="modalRevCon" name="modalRevCon"></textarea>
				</div>
				<div class="BtnsArea">
					<button type="button" class="modalRevBtns" id="modUpdBtn">수정</button>
					<button type="button" class="modalRevBtns" id="modCanBtn">취소</button>
				</div>
			</div>
	</div>


			<div class=replyLine3 id="navi"><a href=/free/view?page=${ppage }&seq=${seq}><-</a> ${navi } <a href=/free/view?page=${npage}&seq=${seq}>-></a></div>
		
	</div>
	<script>      

	document.getElementById("btn2").onclick=function(){
           location.href="/free/boardList?cpage=1"
       }
   
	$(function(){
	    //id가 description인 태그에 summernote 적용
	    $("#description").summernote({
	        height : 100,
	        width : 1000
	    });
	    $(".modalRevCon").summernote({
	    	height:200,
	    	width:600
	    });
	});
	$(".rUpdModal").hide();
	
	//-----------------------------------
	           $("#revList").on("click",".rUpdBtn",function(){
                    $(".rUpdModal").show();
                    $(".revlist").hide();
                    $("#navi").hide();
                    let rCon = $(this).parent().children(".revContents").text();
                    $(".modalRevCon").val(rCon);
                    let revSeq = $(this).attr("data-revSeq");
                    let mSeq = $(this).attr("data-mainSeq");
                    console.log(revSeq);
                    console.log(mSeq);
                    $("#modUpdBtn").attr("data-revSeq",revSeq);
                    $("#modUpdBtn").attr("data-mainSeq",mSeq);
                });

                $("#revList").on("click",".rDelBtn",function(){
                    let delConfirm = confirm("삭제하시겠습니까?");
                    if(delConfirm){
                   	$(this).parent().remove();
                        $.ajax({
                        	url:"/fcomment/delete",
            				type:"post",
            				data:{revSeq:$(this).attr("data-revSeq"),mainSeq:$(this).attr("data-mainSeq")},
            				dataType:"json"
                        })
                    $.ajax({
                        url:"/fcomment/getNavi",
                        type:"post",
                        data : {mSeq:$("#mSeq").val()},                    
                }).done(function(resp){
                	$("#revPage").html(resp);
                	$(".rUpdModal").hide();
                		})
                    }
                });
  
                $("#modCanBtn").on("click",function(){
                    $(".rUpdModal").attr("style", "display:none;");
                });

                $("#modUpdBtn").on("click",function(){
                    let updConfirm = confirm("수정하시겠습니까?");
                    if(updConfirm) {
                        $.ajax({
                        	url:"/fcomment/update",
		   		   				type:"post",
		   		   				data:{revSeq:$(this).attr("data-revSeq"),mSeq:$(this).attr("data-mainSeq"),revContents:$(".modalRevCon").val()},
		   		   				dataType:"json"
                        }).done(function(obj){
                       		console.log(obj);
                            if(obj.length > 0 ){
                                alert("업데이트 성공");
                                $(".comment").remove();
  		   		   					for (let i=0; i<obj.length;i++){
  		   		   						let div = $("<div class='comment'>");
  		   		   						if(hiddenId.value==obj[i].rev_writer){
  		   		   						 str= "<span class='revWriter'>"+"<작성자> : "+obj[i].rev_writer+"</span>"+
	              	         	 			  "<span class='revDate'>"+"<작성일> : "+obj[i].rev_write_date+"</span>"+
	   		                      	  		   "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
	   		                          		  "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
	   		                         		   "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
	   		                         	   "</div>"
  		   		   						}else{
  		   		   							str= "<span class='revWriter'>"+"<작성자> : "+obj[i].rev_writer+"</span>"+
  		              	         	 		  "<span class='revDate'>"+"<작성일> : "+obj[i].rev_write_date+"</span>"+
  		   		                      	     "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
  		   		                            "</div>"
  		   		   						}
  		   		                        
  		   		                        div.html(str);
  		   		                        $("#revList").append(div);
  		   		                    }
  		   		   				 $("#navi").show();
  		                       $(".revlist").show();
  		   		   				$(".rUpdModal").hide();
                            }
                            $(".rUpdModal").attr("style", "display:none;");
                            
                        })
                    }
                });


            </script>
   	

</body>
</html>