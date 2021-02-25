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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.FreeCommentDTO;
import kh.spring.dto.PostMessageDTO;
import kh.spring.dto.RequestBoardDTO;
import kh.spring.service.RequestBoardService;

@Controller
@RequestMapping("/request")
public class RequestBoardController {
	
	@Autowired
	private RequestBoardService RBservice;
	
	@Autowired
	private HttpSession session;
	
	@RequestMapping("toWrite")
	public String toWrite() {
		return "/Board/RequestWrite";
	}
	
	@RequestMapping("boardList")
	public String toBoard(HttpServletRequest request,Model model) throws Exception{
		String cpage = null;
		int currentPage = 0;
		if(request.getParameter("cpage")==null) {
			currentPage= 1;
		}else {
			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		List<FreeBoardDTO> list = RBservice.listByCpage(currentPage);	
		String navi = RBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		model.addAttribute("navi", navi);
		
		

		return "Board/RequestList";
		
	}
	
	@RequestMapping("write")
	public String Write(RequestBoardDTO dto,MultipartHttpServletRequest request, MultipartFile files,Model model) throws Exception {
		
				int seq = (Integer)session.getAttribute("login");
				String id = Integer.toString(seq);
				dto.setWriter(id);
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
				
				
				
				RBservice.insert(dto);
				
				//---------------------------------
				String cpage = null;
				int currentPage = 0;
				if(request.getParameter("cpage")==null) {
					currentPage= 1;
				}else {
					cpage = request.getParameter("cpage");
					currentPage = Integer.parseInt(cpage);
				}
				List<FreeBoardDTO> list = RBservice.listByCpage(currentPage);	
				String navi = RBservice.getNavi(currentPage);
				
				model.addAttribute("list", list);
				model.addAttribute("navi", navi);
		
		return "Board/RequestList";
	}
	
	@RequestMapping("view")
	public String view(HttpServletRequest request,Model model) {

		int fid = (Integer)session.getAttribute("login");
		String id = Integer.toString(fid);
		String seq = request.getParameter("seq");
		RequestBoardDTO rdto = RBservice.selectBySeq(seq);
		//view_count +1 업데이트
		RBservice.updateView_Count(rdto.getView_count(), seq);
		//변동 완료후 dto 보내기
		RequestBoardDTO dto = RBservice.selectBySeq(seq);
		
		model.addAttribute("dto",dto);
		

		model.addAttribute("id",id);
		//-----------------------------------------

		return "Board/RequestView";
	}
	
	@RequestMapping("viewp")
	public String viewp(HttpServletRequest request,Model model) {

		String fids = request.getParameter("login");
		int fid = Integer.parseInt(fids);
		String id = Integer.toString(fid);
		String seq = request.getParameter("seq");
		RequestBoardDTO rdto = RBservice.selectBySeq(seq);
		//view_count +1 업데이트
		RBservice.updateView_Count(rdto.getView_count(), seq);
		//변동 완료후 dto 보내기
		RequestBoardDTO dto = RBservice.selectBySeq(seq);
		
		model.addAttribute("dto",dto);
		

		model.addAttribute("id",id);
		//-----------------------------------------

		return "Board/RequestViewP";
	}
	
	@RequestMapping("updatePage")
	public String toUpdate(RequestBoardDTO dto,Model model) {

		String seq = Integer.toString(dto.getSeq());
		RequestBoardDTO dto2 = RBservice.selectBySeq(seq);
		model.addAttribute("dto",dto2);
		return "Board/RequestUpdate";
	}
	@RequestMapping(value="update", method=RequestMethod.POST)
	public String update(RequestBoardDTO dto,MultipartHttpServletRequest request, MultipartFile files,Model model) throws Exception {
		
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
               
          RBservice.update(dto);
		
		
		//-----------------------------------
				String cpage = null;
				int currentPage = 0;
				if(request.getParameter("cpage")==null) {
					currentPage= 1;
				}else {
					cpage = request.getParameter("cpage");
					currentPage = Integer.parseInt(cpage);
				}
				List<FreeBoardDTO> list = RBservice.listByCpage(currentPage);	
				String navi = RBservice.getNavi(currentPage);
				
				model.addAttribute("list", list);
				model.addAttribute("navi", navi);
				

				return "Board/RequestList";
	}
	
	@RequestMapping("delete")
	public String delete(HttpServletRequest request,Model model) throws Exception{
		String seq = (String)request.getParameter("seq");
		RequestBoardDTO dto = RBservice.selectBySeq(seq);
		RBservice.delete(dto);
		
		//--------------------------------
		String cpage = null;
		int currentPage = 0;
		if(request.getParameter("cpage")==null) {
			currentPage= 1;
		}else {
			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		List<FreeBoardDTO> list = RBservice.listByCpage(currentPage);	
		String navi = RBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		model.addAttribute("navi", navi);
		

		return "Board/RequestList";
	}
	

	@RequestMapping("search")
	public String Go(HttpServletRequest request,Model model) throws Exception {
		String title = request.getParameter("title");
		List<RequestBoardDTO> list = RBservice.searchByTitle(title);
		model.addAttribute("list",list);
		
		//-----------------------------------
		String cpage = null;
		int currentPage = 0;
		if(request.getParameter("cpage")==null) {
			currentPage= 1;
		}else {
			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}

		String navi = RBservice.getNavi(currentPage);
		model.addAttribute("navi", navi);
		

		return "Board/RequestList";
	}

}
