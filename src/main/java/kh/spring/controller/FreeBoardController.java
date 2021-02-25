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

import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.FreeCommentDTO;
import kh.spring.service.FreeBoardService;
import kh.spring.service.FreeCommentService;

@Controller
@RequestMapping("/free")
public class FreeBoardController {
	
	@Autowired
	private FreeBoardService FBservice;
	@Autowired
	private FreeCommentService FCservice;
	@Autowired
	private HttpSession session;
	
	
	@RequestMapping("boardList")
	public String toBoard(HttpServletRequest request,Model model) throws Exception{
		try {
			int fid = (Integer)session.getAttribute("login");
			System.out.println("fid : "+fid);
		}catch(Exception e) {
			model.addAttribute("error","Login이 필요한 페이지입니다.");
			return "home";
		}
		
		String cpage = null;
		int currentPage = 0;
		if(request.getParameter("cpage")==null) {
			currentPage= 1;
		}else {
			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		model.addAttribute("navi", navi);
		

		return "Board/FreeList";
		
	}
	
	@RequestMapping("writePage")
	public String toWrite() {
		
		return "Board/FreeWrite";
	}
	
	@RequestMapping("view")
	public String view(HttpServletRequest request,Model model) {
		
		int fid = (Integer)session.getAttribute("login");
		String id= Integer.toString(fid);
		String seq = request.getParameter("seq");
		FreeBoardDTO pdto = FBservice.selectBySeq(seq);
		//view_count +1 업데이트
		FBservice.updateView_Count(pdto.getView_count(), seq);
		//변동 완료후 dto 보내기
		FreeBoardDTO dto = FBservice.selectBySeq(seq);
		model.addAttribute("dto",dto);

		model.addAttribute("id",id);
		//-----------------------------------------
		int page =1;
		List<FreeCommentDTO> list =FCservice.selectAll(seq, page);
		model.addAttribute("list",list);
		return "Board/FreeView";
	}
	
	@RequestMapping("viewp")
	public String viewp(HttpServletRequest request,Model model) {
		
		String fids = request.getParameter("login");
		int fid = Integer.parseInt(fids);
		String id= Integer.toString(fid);
		String seq = request.getParameter("seq");
		FreeBoardDTO pdto = FBservice.selectBySeq(seq);
		//view_count +1 업데이트
		FBservice.updateView_Count(pdto.getView_count(), seq);
		//변동 완료후 dto 보내기
		FreeBoardDTO dto = FBservice.selectBySeq(seq);
		model.addAttribute("dto",dto);

		model.addAttribute("id",id);
		//-----------------------------------------
		int page =1;
		List<FreeCommentDTO> list =FCservice.selectAll(seq, page);
		model.addAttribute("list",list);
		return "Board/FreeView";
	}
	

	@RequestMapping("delete")
	public String delete(FreeBoardDTO dto,HttpServletRequest request,Model model) throws Exception {
		String seq = Integer.toString(dto.getSeq());
		FBservice.deleteBySeq(seq);
		
		//---------------------------
		String cpage = null;
		int currentPage = 0;
		if(request.getParameter("cpage")==null) {
			currentPage= 1;
		}else {
			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		model.addAttribute("navi", navi);
		

		return "Board/FreeList";
		
	}
	
	
	@RequestMapping(value="write", method=RequestMethod.POST)
	public String write(FreeBoardDTO dto,MultipartHttpServletRequest request, MultipartFile files,Model model) throws Exception {

		int fid = (Integer)session.getAttribute("login");
		String id = Integer.toString(fid);
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
		
		
		
		FBservice.insert(dto);
		
		//-----------------------------------
		String cpage = null;
		int currentPage = 0;
		if(request.getParameter("cpage")==null) {
			currentPage= 1;
		}else {
			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		model.addAttribute("navi", navi);
		

		return "Board/FreeList";
		
	}
	
	@RequestMapping("updatePage")
	public String toUpdate(FreeBoardDTO dto,Model model) {

		String seq = Integer.toString(dto.getSeq());
		System.out.println("seq : "+seq);
		FreeBoardDTO dto2 = FBservice.selectBySeq(seq);
		model.addAttribute("dto",dto2);
		return "Board/FreeUpdate";
	}
	@RequestMapping(value="update", method=RequestMethod.POST)
	public String update(FreeBoardDTO dto,MultipartHttpServletRequest request, MultipartFile files,Model model) throws Exception {
		
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
               
          FBservice.update(dto);
		
		
		//-----------------------------------
				String cpage = null;
				int currentPage = 0;
				if(request.getParameter("cpage")==null) {
					currentPage= 1;
				}else {
					cpage = request.getParameter("cpage");
					currentPage = Integer.parseInt(cpage);
				}
				List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
				String navi = FBservice.getNavi(currentPage);
				
				model.addAttribute("list", list);
				model.addAttribute("navi", navi);
				

				return "Board/FreeList";
	}
	
	
	@RequestMapping("search")
	public String Go(HttpServletRequest request,Model model) throws Exception {
		String title = request.getParameter("title");
		List<FreeBoardDTO> list = FBservice.searchByTitle(title);
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

		String navi = FBservice.getNavi(currentPage);
		model.addAttribute("navi", navi);
		

		return "Board/FreeList";
	}
	

	
}
