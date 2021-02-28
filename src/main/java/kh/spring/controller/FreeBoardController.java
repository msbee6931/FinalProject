package kh.spring.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.Cookie;
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
import org.springframework.web.util.WebUtils;

import kh.spring.dto.ColScheduleDTO;
import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.FreeCommentDTO;
import kh.spring.dto.LoginInfoDTO;
import kh.spring.dto.NoticeDTO;
import kh.spring.dto.ReferenceDTO;
import kh.spring.dto.Reference_FileDTO;
import kh.spring.service.ColScheduleService;
import kh.spring.service.FreeBoardService;
import kh.spring.service.FreeCommentService;
import kh.spring.service.LoginService;
import kh.spring.service.NoticeService;
import kh.spring.service.SchoolScheduleService;

@Controller
@RequestMapping("/free")
public class FreeBoardController {
	
	@Autowired
	private FreeBoardService FBservice;
	@Autowired
	private FreeCommentService FCservice;
	@Autowired
	private HttpSession session;
	@Autowired
	private NoticeService nService;
	@Autowired
	private LoginService lService;
	@Autowired
	private ColScheduleService cService;

	
	@RequestMapping("boardList")
	public String toBoard(HttpServletRequest request,Model model) throws Exception{
		try {
			int fid = (Integer)session.getAttribute("login");
			System.out.println("fid : "+fid);
		}catch(Exception e) {
			model.addAttribute("error","Login이 필요한 페이지입니다.");
			int page =1;
			String type = "home";
			List<NoticeDTO> all = nService.selectNoticeAll();
			List<NoticeDTO> normal = nService.selectNormalByPage(page,type);
			List<NoticeDTO> academic = nService.selectAcademicByPage(page,type);
			List<NoticeDTO> scholar = nService.selectScholarByPage(page,type);
			List<NoticeDTO> employment = nService.selectEmploymentByPage(page,type);
			model.addAttribute("all",all);
			model.addAttribute("normal",normal);
			model.addAttribute("academic",academic);
			model.addAttribute("scholar",scholar);
			model.addAttribute("employment",employment);
			if(session.getAttribute("std") == null && session.getAttribute("pro") == null && session.getAttribute("adm") == null) {
				Cookie loginCookie = WebUtils.getCookie(request, "loginCookie");
				System.out.println("loginCookie : " + loginCookie);
				if(loginCookie != null) {
					String sessionId = loginCookie.getValue();
					LoginInfoDTO dto = new LoginInfoDTO();
					dto.setSessionId(sessionId);
					dto = lService.selectLoginInfo(dto); 
					if(dto != null) {
						if(dto.getUserType().contentEquals("std")) {
							session.setAttribute("std", dto.getUserId());
						}else if(dto.getUserType().contentEquals("pro")) {
							session.setAttribute("pro", dto.getUserId());
						}else {
							session.setAttribute("adm",dto.getUserId());
						}
					}
				}
			}
			//-----------------------
			List<ColScheduleDTO> list =cService.selectAll();
			List<ColScheduleDTO> list2 = new ArrayList<ColScheduleDTO>();
			for(int i = 0; i<list.size(); i++) {
				String title =list.get(i).getTitle();
				String sdate =list.get(i).getsDate().substring(0, 4)+"-"+list.get(i).getsDate().substring(4, 6)+"-"+list.get(i).getsDate().substring(6, 8);
				String edate =list.get(i).geteDate().substring(0,4)+"-"+list.get(i).geteDate().substring(4,6)+"-"+list.get(i).geteDate().substring(6, 8);
				ColScheduleDTO dto = new ColScheduleDTO();
				dto.setTitle(title);
				dto.setsDate(sdate);
				dto.seteDate(edate);
				dto.setSeq(i);
				list2.add(dto);
			}
			int size = list2.size();
			model.addAttribute("size",size);
			model.addAttribute("list",list2);
			return "home";
		}
		
		String cpage = null;
		int currentPage = 0;
		String s = null;
		int p = 0;
		int end = 0;
		try {
		 s = request.getParameter("cpage");
		 p = Integer.parseInt(s);
		 end = FBservice.count()/10+1;
		}catch(Exception e) {
			s = null;
		}
		
		if(request.getParameter("cpage")==null||request.getParameter("cpage").contentEquals("0")) {
			currentPage= 1;
		}else if(p>end){
			currentPage = end;
		}else {

			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		
		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		
		
		model.addAttribute("page",currentPage);
		model.addAttribute("navi", navi);
		

		return "Board/FreeList";
		
	}
	
	@RequestMapping("writePage")
	public String toWrite() {
		
		return "Board/FreeWrite";
	}
	
	@RequestMapping("view")
	public String view(HttpServletRequest request,Model model) throws Exception {
		
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
		int page =0;
		try {
			String spage = request.getParameter("page");
			page = Integer.parseInt(spage);
			int end = (FCservice.countAll(Integer.parseInt(seq))/10)+1;
			if(page>end) {
				page=end;
			}else if(page<=0) {
				page=1;
			}
		}catch(Exception e) {
			page = 1;
		}
		List<FreeCommentDTO> list =FCservice.selectAll(seq, page);
		model.addAttribute("list",list);
		
		String navi = FCservice.navi(page, seq);
		model.addAttribute("navi",navi);
		model.addAttribute("npage",page+1);
		model.addAttribute("ppage",page-1);
		model.addAttribute("seq",seq);
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
		return "Board/FreeViewP";
	}
	

	@RequestMapping("delete")
	public String delete(FreeBoardDTO dto,HttpServletRequest request,Model model) throws Exception {
		String seq = Integer.toString(dto.getSeq());
		FBservice.deleteBySeq(seq);
		
		//---------------------------
		String cpage = null;
		int currentPage = 0;
		String s = null;
		int p = 0;
		int end = 0;
		try {
		 s = request.getParameter("cpage");
		 p = Integer.parseInt(s);
		 end = FBservice.count()/10+1;
		}catch(Exception e) {
			s = null;
		}
		
		if(request.getParameter("cpage")==null||request.getParameter("cpage").contentEquals("0")) {
			currentPage= 1;
		}else if(p>end){
			currentPage = end;
		}else {

			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		
		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		
		
		model.addAttribute("page",currentPage);
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
		String s = null;
		int p = 0;
		int end = 0;
		try {
		 s = request.getParameter("cpage");
		 p = Integer.parseInt(s);
		 end = FBservice.count()/10+1;
		}catch(Exception e) {
			s = null;
		}
		
		if(request.getParameter("cpage")==null||request.getParameter("cpage").contentEquals("0")) {
			currentPage= 1;
		}else if(p>end){
			currentPage = end;
		}else {

			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		
		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		
		
		model.addAttribute("page",currentPage);
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
  		String s = null;
  		int p = 0;
  		int end = 0;
  		try {
  		 s = request.getParameter("cpage");
  		 p = Integer.parseInt(s);
  		 end = FBservice.count()/10+1;
  		}catch(Exception e) {
  			s = null;
  		}
  		
  		if(request.getParameter("cpage")==null||request.getParameter("cpage").contentEquals("0")) {
  			currentPage= 1;
  		}else if(p>end){
  			currentPage = end;
  		}else {

  			cpage = request.getParameter("cpage");
  			currentPage = Integer.parseInt(cpage);
  		}
  		
  		List<FreeBoardDTO> list = FBservice.listByCpage(currentPage);	
  		String navi = FBservice.getNavi(currentPage);
  		
  		model.addAttribute("list", list);
  		
  		
  		model.addAttribute("page",currentPage);
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
		String s = null;
		int p = 0;
		int end = 0;
		try {
		 s = request.getParameter("cpage");
		 p = Integer.parseInt(s);
		 end = FBservice.count()/10+1;
		}catch(Exception e) {
			s = null;
		}
		
		if(request.getParameter("cpage")==null||request.getParameter("cpage").contentEquals("0")) {
			currentPage= 1;
		}else if(p>end){
			currentPage = end;
		}else {

			cpage = request.getParameter("cpage");
			currentPage = Integer.parseInt(cpage);
		}
		
		String navi = FBservice.getNavi(currentPage);
		
		model.addAttribute("list", list);
		
		
		model.addAttribute("page",currentPage);
		model.addAttribute("navi", navi);
		

		return "Board/FreeList";
	}
	

	
}
