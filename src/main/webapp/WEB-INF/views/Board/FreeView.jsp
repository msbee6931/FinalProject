<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

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
div {
	border: 1px solid black
}

.container {
	width: 1000px;
	height: 600px;
	position: relative;
	text-align: center;
}

.title {
	width: 100%;
	hight: 30px;
	float: left;
}

.bar1 {
	float: left;
	width: 5%
}

.bar2 {
	float: left;
	width: 50%
}

.bar3 {
	float: left;
	width: 20%
}

.bar4 {
	float: left;
	width: 20%
}

.bar5 {
	float: left;
	width: 5%
}

.main {
	float: left;
	width: 100%;
	height: 500px;
}

.rev {
	width: 1000px;
	height: 300px;
	position: relative;
	left: 17%;
}

.revBTN {
	width: 1000px;
	height: 300px;
	position: relative;
	left: 17%;
	text-align: right
}

.revlist {
	width: 1000px;
	height: 800px;
	position: relative;
	left: 17%;
}

.rUpdModal {
	width: 600px;
	height: 200px;
	position: relative;
	left: 17%;
}
</style>
</head>
<body>
	<div class="container">

		<div class=title>자유게시판</div>

		<div class=bar1>${dto.seq }</div>
		<div class=bar2>${dto.title }</div>
		<div class=bar3>${dto.writer }</div>
		<div class=bar4>${dto.write_date }</div>
		<div class=bar5>${dto.view_count }</div>

		<div class=main>${dto.contents }</div>



		<div class=title>
			<form action="/free/delete" method="post">
				<input type=hidden id=seq name=seq value=${dto.seq }> <input
					type=hidden id=cpage name=cpage value=1>
				<c:if test="${id == i.writer}">
					<input type=submit id=btn value="삭제">
					<input type=button id=upt value="수정하기">
					<script>
						document.getElementById("upt").onclick=function(){
						  	location.href="/free/updatePage?seq="+seq.value;
					  	 }
					</script>
				</c:if>
				<input type=button id=btn2 value="돌아가기">
			</form>
		</div>
	</div>


	<form action=/fcomment/insert method="post"
		enctype="multipart/form-data">
		<div class=rev>
			<textarea id=description name=rev_contents></textarea>
		</div>
		<div class=revBTN>
			<input type="hidden" id=main_seq name=main_seq value=${dto.seq }>
			<input type="submit" id=write value="글 쓰기">

		</div>
	</form>


	<div class="revlist" id=revList>
		<input type=hidden id=mSeq value=${dto.seq }>
		<c:forEach var="i" items="${list}">
			<div class='comment'>
				<span class='revWriter'>${i.rev_writer}</span> <span class='revDate'>${i.rev_write_date}</span>
				<p class='revContents'>${i.rev_contents}</p>
				<!-- 여기다가 c:if id==i.writer_seq 해주기 -->
				<button type='button' class='rUpdBtn' data-revSeq=${i.rev_seq }
					data-mainSeq=${i.main_seq }>수정</button>
				<button type='button' class='rDelBtn' data-revSeq=${i.rev_seq }
					data-mainSeq=${i.main_seq }>삭제</button>

			</div>
		</c:forEach>

		<div class=rUpdModal>
			<textarea id=uptContents></textarea>
			<input type=button id=rUpdateBtn value=등록> <input type=button
				id=rUpdateReturn value=돌아가기>
		</div>
	</div>
	`


	<script>      
      
	document.getElementById("btn2").onclick=function(){
           location.href="/free/boardList?cpage=1"
       }
   
	$(function(){
	    //id가 description인 태그에 summernote 적용
	    $("#description").summernote({
	        height : 300,
	        width : 1000
	    });
	    $("#uptContents").summernote({
	    	height:200,
	    	width:600
	    });
	});
	$(".rDelBtn").click(function(){

			$.ajax({
				url:"/fcomment/delete",
				type:"post",
				data:{revSeq:$(this).attr("data-revSeq"),mainSeq:$(this).attr("data-mainSeq")},
				dataType:"json"
			}).done(function(obj){
				if(obj.length>0){
   					alert("삭제 성공!");
   					$(".comment").remove();
   					for (let i=0; i<obj.length;i++){
                        let div = $("<div class='comment'>");
                        str= "<span class='revWriter'>"+obj[i].rev_writer+"</span>"+
                            "<span class='revDate'>"+obj[i].rev_write_date+"</span>"+
                            "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
                            "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
                            "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
                            "</div>"
                        div.html(str);
                        $("#revList").append(div);
                    }
   					
   					$("#revList").on("click",".rDelBtn",function(){

   						$.ajax({
   							url:"/fcomment/delete",
   							type:"post",
   							data:{revSeq:$(this).attr("data-revSeq"),mainSeq:$(this).attr("data-mainSeq")},
   							dataType:"json"
   						}).done(function(obj){
   							if(obj.length>0){
   			   					alert("삭제 성공!");
   			   					$(".comment").remove();
   			   					for (let i=0; i<obj.length;i++){
   			                        let div = $("<div class='comment'>");
   			                        str= "<span class='revWriter'>"+obj[i].rev_writer+"</span>"+
   			                            "<span class='revDate'>"+obj[i].rev_write_date+"</span>"+
   			                            "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
   			                            "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
   			                            "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
   			                            "</div>"
   			                        div.html(str);
   			                        $("#revList").append(div);
   			                    }
   							}
   						})
   					});

   					$("#revList").on("click",".rUpdBtn",function(){
   						$(".comment").hide();
   			   			$(".rUpdModal").show();
   			   			
   			   			$("#rUpdateReturn").click(function(){
   			   		   		$(".rUpdModal").hide();
   			   		   		$(".comment").show();
   			   		   	})
   			   		   	let Seq = $(this).attr("data-revSeq");
   						let mainSeq = $(this).attr("data-mainSeq");
   			
   						$("#rUpdateBtn").click(function(){

   						let updConfirm = confirm("수정하시겠습니까?");
   		   		   		if(updConfirm) {
   		   		   			$.ajax({
   		   		   				url:"/fcomment/update",
   		   		   				type:"post",
   		   		   				data:{revSeq:Seq,revContents:$("#uptContents").val(),mSeq:mainSeq},
   		   		   				dataType:"json"
   		   		   			}).done(function(obj){
   		   		   				if(obj.length>0){
   		   		   					alert("업데이트 성공!");
   		   		   					$(".comment").remove();
   		   		   					for (let i=0; i<obj.length;i++){
   		   		                        let div = $("<div class='comment'>");
   		   		                        str= "<span class='revWriter'>"+obj[i].rev_writer+"</span>"+
   		   		                            "<span class='revDate'>"+obj[i].rev_write_date+"</span>"+
   		   		                            "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
   		   		                            "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
   		   		                            "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
   		   		                            "</div>"
   		   		                        div.html(str);
   		   		                        $("#revList").append(div);
   		   		                    }
   		   		   			 	 $("#uptContents").val()="";
   		   		   				 $(".rUpdModal").attr("style", "display:none;");
   		   		   				}
   							});
   						}
   					});
   				});
   			 $(".rUpdModal").attr("style", "display:none;");
			}
		})
		
	});

	
	
	
   	$(".rUpdModal").hide(); 
   	
   	$(".rUpdBtn").click(function() {
			$(".comment").hide();
   			$(".rUpdModal").show();
   			
   			$("#rUpdateReturn").click(function(){
   		   		$(".rUpdModal").hide();
   		   		$(".comment").show();
   		   	})
   		   	
   		   	let Seq = $(this).attr("data-revSeq");
   			let mainSeq = $(this).attr("data-mainSeq");
   			
   			$("#rUpdateBtn").click(function(){
   		   		let updConfirm = confirm("수정하시겠습니까?");
   		   		if(updConfirm) {
   		   			$.ajax({
   		   				url:"/fcomment/update",
   		   				type:"post",
   		   				data:{revSeq:Seq,revContents:$("#uptContents").val(),mSeq:mainSeq},
   		   				dataType:"json"
   		   			}).done(function(obj){
   		   				if(obj.length>0){
   		   					alert("업데이트 성공!");
   		   					$(".comment").remove();
   		   					for (let i=0; i<obj.length;i++){
   		                        let div = $("<div class='comment'>");
   		                        str= "<span class='revWriter'>"+obj[i].rev_writer+"</span>"+
   		                            "<span class='revDate'>"+obj[i].rev_write_date+"</span>"+
   		                            "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
   		                            "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
   		                            "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
   		                            "</div>"
   		                        div.html(str);
   		                        $("#revList").append(div);
   		                    }
   		   				$("#uptContents").val()="";
   		   				$("#revList").on("click",".rDelBtn",function(){

   	   						$.ajax({
   	   							url:"/fcomment/delete",
   	   							type:"post",
   	   							data:{revSeq:$(this).attr("data-revSeq"),mainSeq:$(this).attr("data-mainSeq")},
   	   							dataType:"json"
   	   						}).done(function(obj){
   	   							if(obj.length>0){
   	   			   					alert("삭제 성공!");
   	   			   					$(".comment").remove();
   	   			   					for (let i=0; i<obj.length;i++){
   	   			                        let div = $("<div class='comment'>");
   	   			                        str= "<span class='revWriter'>"+obj[i].rev_writer+"</span>"+
   	   			                            "<span class='revDate'>"+obj[i].rev_write_date+"</span>"+
   	   			                            "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
   	   			                            "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
   	   			                            "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
   	   			                            "</div>"
   	   			                        div.html(str);
   	   			                        $("#revList").append(div);
   	   			                    }
   	   							}
   	   						})
   	   					});

   	   					$("#revList").on("click",".rUpdBtn",function(){
   	   						$(".comment").hide();
   	   			   			$(".rUpdModal").show();
   	   			   			
   	   			   			$("#rUpdateReturn").click(function(){
   	   			   		   		$(".rUpdModal").hide();
   	   			   		   		$(".comment").show();
   	   			   		   	})
   	   			   		   	let Seq = $(this).attr("data-revSeq");
   	   						let mainSeq = $(this).attr("data-mainSeq");
   	   			
   	   						$("#rUpdateBtn").click(function(){

   	   						let updConfirm = confirm("수정하시겠습니까?");
   	   		   		   		if(updConfirm) {
   	   		   		   			$.ajax({
   	   		   		   				url:"/fcomment/update",
   	   		   		   				type:"post",
   	   		   		   				data:{revSeq:Seq,revContents:$("#uptContents").val(),mSeq:mainSeq},
   	   		   		   				dataType:"json"
   	   		   		   			}).done(function(obj){
   	   		   		   				if(obj.length>0){
   	   		   		   					alert("업데이트 성공!");
   	   		   		   					$(".comment").remove();
   	   		   		   					for (let i=0; i<obj.length;i++){
   	   		   		                        let div = $("<div class='comment'>");
   	   		   		                        str= "<span class='revWriter'>"+obj[i].rev_writer+"</span>"+
   	   		   		                            "<span class='revDate'>"+obj[i].rev_write_date+"</span>"+
   	   		   		                            "<p class='revContents'>"+obj[i].rev_contents+"</p>"+
   	   		   		                            "<button type ='button' class='rUpdBtn' data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">수정</button>"+
   	   		   		                            "<button type='button' class='rDelBtn'  data-revSeq="+obj[i].rev_seq+" data-mainSeq="+obj[i].main_seq+">삭제</button>"+
   	   		   		                            "</div>"
   	   		   		                        div.html(str);
   	   		   		                        $("#revList").append(div);
   	   		   		                    }
   	   		   		   				 $("#uptContents").val()="";
   	   		   		   				 $(".rUpdModal").attr("style", "display:none;");
   	   		   		   				}
   	   							});
   	   						}
   	   					});
   	   				});
   		   			 $(".rUpdModal").attr("style", "display:none;");
   		   			}
   		   		})
   			}
   		})
     });

   	
   
   	
   	
   	
   	

       
   </script>

</body>
</html>