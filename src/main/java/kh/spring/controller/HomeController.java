package kh.spring.controller;


import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {



	@RequestMapping("/")
	public String home() throws Exception{

		return "home";
	}

	@RequestMapping("/nex")
	public String Nex() {
		return "redirect:/nex/index.html";
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
