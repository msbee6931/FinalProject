package kh.spring.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.Gson;

import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.FreeCommentDTO;
import kh.spring.service.FreeBoardService;
import kh.spring.service.FreeCommentService;
@Controller
@RequestMapping("fcomment")
public class FreeCommentController {

		@Autowired
	   private FreeCommentService service;
	   @Autowired
	   private FreeBoardService FBservice;
		@Autowired
	   private HttpSession session;
	   
	   
	   @RequestMapping(value="insert", method=RequestMethod.POST)
	   public String insert( MultipartFile files,Model model,HttpServletRequest request, FreeCommentDTO dto) {

	      //String rev_writer = (String)session.getAttribute("id");
	     String rev_writer="kms";
	     dto.setRev_writer(rev_writer);



	      System.out.println("insert요청 확인");
	      System.out.println("현재 게시글 seq : "+dto.getMain_seq());
	      System.out.println("댓글 내용확인 : " +dto.getRev_contents());
	     
	      int result = service.insert(dto);
	      //---
	      String realPath = session.getServletContext().getRealPath("resources/files");
	         File filesPath = new File(realPath); 
	         System.out.println("realPath : "+realPath);
	         
	         String fileName=files.getOriginalFilename();//원래 파일이름
	         String uid = UUID.randomUUID().toString().replaceAll("-", ""); //해쉬암호화 String화하기
	         String newFileName=uid+"_"+fileName; // 새로저장할 이름



	               File image = new File(filesPath.getAbsolutePath()+"/"+newFileName);
	               try {
	                 FileCopyUtils.copy(files.getBytes(), image);
	              } catch (IOException e) {
	                 e.printStackTrace();
	              }
	      int page = 1;
	      if(result > 0) {
	        
	         List <FreeCommentDTO> list = service.selectAll(Integer.toString(dto.getMain_seq()),page);
	         model.addAttribute("list",list);
	         
	 		FreeBoardDTO dto2 = FBservice.selectBySeq(Integer.toString(dto.getMain_seq()));
			model.addAttribute("dto",dto2);
	         return "Board/FreeView";
	      }
	      return "false" ;
	   }
	   
	   @RequestMapping(value="printAll",produces="application/text; charset=UTF-8")
	   @ResponseBody
	   public String printAll(HttpServletRequest request) throws Exception {
	      String mSeq=(String)request.getParameter("mSeq");
	      System.out.println("select 요청 확인");
	      int page =1;
	      Gson gson=new Gson();
	      List <FreeCommentDTO> list = service.selectAll(mSeq,page);
	      String navi = service.navi(page, mSeq);
	      
	      return gson.toJson(list);
	   }
	   
	   
	   @RequestMapping("delete")
	   @ResponseBody
	   public String delete(HttpServletRequest request) {
	      System.out.println("delete 요청 확인");
	      String mSeq=request.getParameter("mainSeq");
	      int rSeq= Integer.parseInt(request.getParameter("revSeq"));

	       int result = service.delete(rSeq);
	       int page = 1;
	       if(result>0) {
	    	   Gson gson = new Gson();
	    	   List<FreeCommentDTO> list = service.selectAll(mSeq, page);
	    	   return gson.toJson(list);
	       }
	      return "false";
	   }
	   
	   @RequestMapping("update")
	   @ResponseBody
	   public String update(HttpServletRequest request) {
	      String mSeq = (String)request.getParameter("mSeq");
	      System.out.println("update.FreeComment 요청확인");
	      String rSeq =  request.getParameter("revSeq");
	      String rCon =  request.getParameter("revContents");
	      System.out.println(rSeq +":"+rCon);
	      int result = service.update(rSeq,rCon);
	      int page =1;
	      if(result > 0) {
	         Gson gson=new Gson();
	         List <FreeCommentDTO> list = service.selectAll(mSeq,page);
	         return gson.toJson(list);
	      }
	      return "false";
	   }
	   
	   @RequestMapping("getNavi")
	   @ResponseBody
	   public String getNavi(HttpServletRequest request) throws Exception {
	      String mSeq = (String)request.getParameter("mSeq");
	      System.out.println("mseq : "+mSeq);
	      int page =1;
	      String navi = service.navi(page, mSeq);
	      int count = service.getDataCount(mSeq);

	      if(count == 1){
	         return "<a href='/free/view?page=1"+"&seq="+mSeq+"'>"+1+" "+"</a>";
	      }else if(count == 0){
	         return null;
	      }else {
	         return navi;
	      }
	   }

}
