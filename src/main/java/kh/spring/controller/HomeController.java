package kh.spring.controller;


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

import kh.spring.dto.LoginInfoDTO;
import kh.spring.dto.NoticeDTO;
import kh.spring.service.LoginService;
import kh.spring.service.NoticeService;


@Controller
public class HomeController {
	@Autowired
	private NoticeService nService;
	@Autowired
	private LoginService lService;
	@Autowired
	private HttpSession session;
	@RequestMapping("/")
	public String home(HttpServletRequest request, HttpServletResponse response,Model model) throws Exception{
		int page =1;
		List<NoticeDTO> all = nService.selectNoticeAll();
		List<NoticeDTO> normal = nService.selectNormalByPage(page);
		List<NoticeDTO> academic = nService.selectAcademicByPage(page);
		List<NoticeDTO> scholar = nService.selectScholarByPage(page);
		List<NoticeDTO> employment = nService.selectEmploymentByPage(page);
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
		return "home";
	}

	@RequestMapping("/nex")
	public String Nex() {
		if(session.getAttribute("std") == null && session.getAttribute("pro") == null && session.getAttribute("adm") == null) {
			return "loginPage";
		}else {
			return "redirect:/nex/index.html";
		}
	}
	@RequestMapping("pop.home")
	public String popup() {
		return "Pop";

	}
	@RequestMapping("introduce.home")
	public String Introduce() {
		return "Introduce";
	}
	@RequestMapping("department.home")
	public String Department() {
		return "Department";
	}
	@RequestMapping("admission.home")
	public String Admission() {
		return "Admission";
	}
	@RequestMapping("PersonalInfomation.home")
	public String PersonalInfomation() {
		return "PersonalInfomation";
	}
	@RequestMapping("EmailNegative.home")
	public String EmailNegative() {
		return "EmailNegative";
	}
	@RequestMapping("LawOfOffical.home")
	public String LawOfOffical() {
		return "LawOfOffical";
	}

	@ExceptionHandler
	public String ExceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}



}
