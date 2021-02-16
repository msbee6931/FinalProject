package kh.spring.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.AdminDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.service.LoginService;

@Controller
public class LoginController {
	
	@Autowired
	private LoginService lService;
	
	@Autowired
	private HttpSession session;
	
	@RequestMapping("loginStu.login")
	public NexacroResult loginStu(@ParamDataSet(name="in_ds")StudentsDTO sdto) {
		System.out.println("ㄷㅊ");
		System.out.println(sdto.getS_seq());
		System.out.println(sdto.getPw());
//		StudentsDTO dto = new StudentsDTO();
//		dto.setS_seq(sdto.getS_seq());
//		dto.setPw(sdto.getPw());
		NexacroResult nr = new NexacroResult();
		StudentsDTO ndto = lService.loginStu(sdto);
		session.setAttribute("login",sdto.getS_seq() );
		nr.addDataSet("out_ds", ndto);

		return nr;
	}@RequestMapping("loginPro.login")
	public NexacroResult loginPro(@ParamDataSet(name="in_ds") ProfessorDTO pdto) {
		System.out.println("ㄷㅊ");
		NexacroResult nr = new NexacroResult();
		ProfessorDTO ndto = lService.loginPro(pdto);
		session.setAttribute("login", pdto.getP_seq());
		nr.addDataSet("out_ds", ndto);
		return nr;
	}@RequestMapping("loginAdm.login")
	public NexacroResult loginAdm(@ParamDataSet(name="in_ds") AdminDTO adto) {
		System.out.println("loginAdm도착");
		NexacroResult nr = new NexacroResult();
		AdminDTO ndto = lService.loginAdm(adto);
		session.setAttribute("login",adto.getA_seq());
		nr.addDataSet("out_ds", ndto);

		return nr;
	}
	@RequestMapping("logout.nex")
	public NexacroResult logout(){
		NexacroResult nr = new NexacroResult();
		session.removeAttribute("login");
		return nr;
	}
	
	@RequestMapping("sessionA.nex")
	public NexacroResult sessionA(){
		NexacroResult nr = new NexacroResult();
		int seq = (Integer)session.getAttribute("login");
		AdminDTO dto = lService.selectAdm(seq);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	@RequestMapping("sessionS.nex")
	public NexacroResult sessionS(){
		NexacroResult nr = new NexacroResult();
		int seq = (Integer)session.getAttribute("login");
		StudentsDTO dto = lService.selectStd(seq);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	@RequestMapping("sessionP.nex")
	public NexacroResult session(){
		NexacroResult nr = new NexacroResult();
		int seq = (Integer)session.getAttribute("login");
		ProfessorDTO dto = lService.selectPro(seq);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	@ExceptionHandler
	public String exceptionhandler(Exception e) {
		e.printStackTrace();
		return "error";
	}

}
