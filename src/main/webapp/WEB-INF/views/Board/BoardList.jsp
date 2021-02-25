<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>자유 게시판 글</title>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
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
<style>
#subLabel{
	width:fit-content;
	color:white;
}
#box {
	border: 1px solid black;
	border-radius: 10px;
}
#viewBox{
	background-color:#f5f5f5;
	height: 50px;
}
#refBox{
	min-height: 30px;
	border-bottom:1px solid black;
	text-align: center;
	background-color:#f5f5f5;
}
#content{
	min-height:150px;
	border-bottom:1px solid black;
}
#btnBox{
	height:80px;
}
#backBtn{
	width:80px;
	height:40px;
}
.rev {

}

.revBTN {

}

.revlist {
	background-color: #CCFFCC;
	border-bottom:1px solid black;
}
#write{
	border: 1px solid white;
	border-radius: 10px;
	width:100px;
	height:50px;
	color: white;
	background-color: #435a7c;
}
.rUpdBtn{
	border-radius : 10px;
	width:60px;
	height:40px;
	background-color:white;
}
.rDelBtn{
	border-radius : 10px;
	width:60px;
	height:40px;
	background-color:white;
}
</style>
</head>
<body>
	<div class="contatiner">
    <jsp:include page="/WEB-INF/views/topHeader.jsp"/>
	<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
		<div class="container">

			<div class="row">
				<!-- <div class="col-xl-2 d-none d-xl-block"></div> -->
				<div class="col-xl-12 " id="box">
					<div class="row mx-2 ">
						<div class="col-12 py-4" style="border-bottom: 2px solid black">
							<H3>
								<b>자유 게시판</b>
							</H3>
						</div>
					</div>
					<div class="row">
						<div class="col text-center py-4">
							<h4>
								<b>${dto.title }</b>
							</h4>
						</div>
					</div>
					<div class="row text-center" id="viewBox">
						<div class="col align-self-center">
							<b>작성일시</b>
							<fmt:parseDate var="Date" value="${dto.write_date}"
								pattern="yyyy-MM-dd" />
							<fmt:formatDate value="${Date}" type="date" pattern="yyyy-MM-dd" />
						</div>
						<div class="col align-self-center">
							<b>작성자</b> ${dto.writer}
						</div>
						<div class="col align-self-center">
							<b>조회수</b> ${dto.view_count}
						</div>
					</div>
					<div class="row mx-2" id="content" >
						<div class="col p-5">${dto.contents}</div>
					</div>
					<div class="row mx-2" id="refBox">
						<div class="col-12 p-2 text-center" >댓글 보기</div>
							<c:if test="${!empty list}">
								<c:forEach var="i" items="${list}">
								<div class="row align-self-center my-1">
								</div>
								</c:forEach>
							</c:if>
						</div>
						
		<div class=revBTN>
			<input type="hidden" id=main_seq name=main_seq value=${dto.seq }>
			<input type="submit" id=write value="댓글 쓰기">

		</div>

	<div class="revlist" id=revList>
		<input type=hidden id=mSeq value=${dto.seq }>
		<c:forEach var="i" items="${list}">
			<div class='comment'>
				<span class='revWriter'>작성자 : ${i.rev_writer}</span> <span class='revDate'>작성일 : ${i.rev_write_date}</span>
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
						
						
						
					</div>
					<div class="row">
						<div class="col text-center pt-3 mx-2" id="btnBox">
							<button type="button" class="btn btn-dark" id="backBtn">목록</button>
						</div>
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
	<script>      
      
	document.getElementById("backBtn").onclick=function(){
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
</html>