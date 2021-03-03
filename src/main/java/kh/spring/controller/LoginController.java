package kh.spring.controller;



import java.sql.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.WebUtils;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.AdminDTO;
import kh.spring.dto.LoginInfoDTO;
import kh.spring.dto.NoticeDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

import kh.spring.service.LoginService;
import kh.spring.service.NoticeService;
import kh.spring.util.EncryptUtils;

@Controller
public class LoginController {
	
	@Autowired
	private LoginService lService;
	
	@Autowired
	private NoticeService nService;
	
	@Autowired
	private HttpSession session;
	
	@RequestMapping("loginPage.log")
	public String loginPage(Model model) {
		model.addAttribute("logReq","home");
		return "loginPage";
	}
	@RequestMapping("login.log")
	public String login(HttpServletRequest request,HttpServletResponse response, Model model){
		String user = request.getParameter("user");
		String Id = request.getParameter("sCode");
		String logReq = request.getParameter("logReq");

		for(int i=0; i<Id.length(); i++) {	
			if(48 > (int)Id.charAt(i) || (int)Id.charAt(i) > 57) {	
				return "loginFail";
			};
		}
		int sCode = Integer.parseInt(Id); 
		String password = EncryptUtils.getSHA256(request.getParameter("password"));
		String login = request.getParameter("login");
		session.setAttribute("login", sCode);
		System.out.println("user" +":" + user);
		System.out.println("sCode" +":" + sCode);
		System.out.println("password" +":" + password);
		System.out.println("login" +":" + login);
		if(user.contentEquals("std")) {
			//학생
			StudentsDTO sdto = new StudentsDTO();
			sdto.setS_seq(sCode);
			sdto.setPw(password);
			int result = lService.loginStu(sdto);
			if(result > 0) {
				session.setAttribute("std",sCode);
				session.setAttribute("userId", Integer.toString(sCode));
				if(login != null) {
					LoginInfo(sCode, user, response);
				}
				if(logReq.contentEquals("home")) {
					notice(model);
					return "home";
				}else {
					return "redirect:/nex/index.html";
				}
				
			}else {
				return "loginFail";
			}
		}else if(user.contentEquals("pro")){
			//교수
			ProfessorDTO pdto = new ProfessorDTO();
			pdto.setP_seq(sCode);
			pdto.setPw(password);
			int result = lService.loginPro(pdto);
			if(result > 0) {
				session.setAttribute("pro",sCode);
				session.setAttribute("userId", Integer.toString(sCode));
				if(login != null) {
					LoginInfo(sCode, user, response);
				}
				if(logReq.contentEquals("home")) {
					notice(model);
					return "home";
				}else {
					return "redirect:/nex/index.html";
				}
			}else {
				return "loginFail";
			}
		}else if(user.contentEquals("adm")){
			//관리자
			AdminDTO adto = new AdminDTO();
			adto.setA_seq(sCode);
			adto.setPw(password);
			int result = lService.loginAdm(adto);
			if(result > 0) {
				session.setAttribute("adm",sCode);
				if(login != null) {
					LoginInfo(sCode, user, response);
				}
				if(logReq.contentEquals("home")) {
					notice(model);
					return "home";
				}else {
					return "redirect:/nex/index.html";
				}
			}else {
				return "loginFail";
			}
		}else {
			return "home";
		}
		
	}
	@RequestMapping("logOut.log")
	public String logOut(HttpServletRequest request,HttpServletResponse response,Model model) {
		LoginInfoDTO dto = new LoginInfoDTO();
		if(session.getAttribute("std") != null) {
			System.out.println("A");
			String std = session.getAttribute("std").toString();
			dto.setUserId(Integer.parseInt(std));
			dto.setUserType("std");
			session.removeAttribute("std");
			session.removeAttribute("userId");
		}else if(session.getAttribute("pro") != null) {
			System.out.println("B");
			String pro = session.getAttribute("pro").toString();
			dto.setUserId(Integer.parseInt(pro));
			dto.setUserType("pro");
			session.removeAttribute("pro");
			session.removeAttribute("userId");
		}else if(session.getAttribute("adm") !=null) {
			System.out.println("C");
			String adm = session.getAttribute("adm").toString();
			dto.setUserId(Integer.parseInt(adm));
			dto.setUserType("adm");
			session.removeAttribute("adm");
		}	
		Cookie loginCookie = WebUtils.getCookie(request,"loginCookie");
		if(loginCookie != null) {
			 loginCookie.setPath("/");
			 loginCookie.setMaxAge(0);
			 response.addCookie(loginCookie);
			dto.setSessionId(session.getId());
			Date date =new Date(System.currentTimeMillis());
			dto.setSessionLimit(date);
			lService.updLoginInfo(dto);
		}
		session.removeAttribute("login");
		notice(model);
		return "home";
	}


	public void LoginInfo(int sCode,String user,HttpServletResponse response) {
		Cookie cookie = new Cookie("loginCookie",session.getId());
		cookie.setPath("/");
		int amount = 60*60*24*7;
		cookie.setMaxAge(amount);
		response.addCookie(cookie);
		Date sessionLimit =new Date(System.currentTimeMillis() + (amount*1000));

		LoginInfoDTO dto = new LoginInfoDTO();
		dto.setUserId(sCode);
		dto.setSessionId(session.getId());
		dto.setSessionLimit(sessionLimit);
		dto.setUserType(user);
		lService.keepLogin(dto);
	}
	@RequestMapping("/reqLogigInfo.log")
	public NexacroResult reqLoginInfo() {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		System.out.println("관리자 : " + session.getAttribute("adm"));
		if(session.getAttribute("std") != null) {
			int seq = (int)(session.getAttribute("std"));
			StudentsDTO dto = lService.selectStd(seq);	
			System.out.println("DTO : " + dto);
			nr.addDataSet("std_ds",dto);
		}else if(session.getAttribute("pro") != null) {
			int seq = (int)(session.getAttribute("pro"));
			ProfessorDTO dto = lService.selectPro(seq);	
			nr.addDataSet("pro_ds",dto);
		}else if(session.getAttribute("adm") !=null) {
			int seq = (int)(session.getAttribute("adm"));
			AdminDTO dto = lService.selectAdm(seq);	
			nr.addDataSet("adm_ds",dto);
		}
		return nr;
	}
	public void notice(Model model) {
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
	}
	@RequestMapping("/admList.log")
	public NexacroResult adminList() {
		NexacroResult nr = new NexacroResult();
		List<AdminDTO> list = lService.adminList();
		nr.addDataSet("adm_ds",list);
		return nr;
	}
	@RequestMapping("/registUpd.log")
	public NexacroResult registUpd(@ParamDataSet(name="in_ds")AdminDTO dto) {
		NexacroResult nr = new NexacroResult();
		lService.registUpd(dto);
		return nr;
	}
	@RequestMapping("/testUpd.log")
	public NexacroResult testUpd(@ParamDataSet(name="in_ds")AdminDTO dto) {
		NexacroResult nr = new NexacroResult();
		lService.testUpd(dto);
		return nr;
	}
	@ExceptionHandler
	public String exceptionhandler(Exception e) {
		e.printStackTrace();
		return "error";
	}

}
