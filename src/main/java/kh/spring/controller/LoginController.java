package kh.spring.controller;

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
		nr.addDataSet("out_ds", ndto);
		System.out.println(nr);
		return nr;
	}@RequestMapping("loginPro.login")
	public NexacroResult loginPro(@ParamDataSet(name="in_ds") ProfessorDTO pdto) {
		System.out.println("ㄷㅊ");
		NexacroResult nr = new NexacroResult();
		ProfessorDTO ndto = lService.loginPro(pdto);
		nr.addDataSet("out_ds", ndto);
		return nr;
	}@RequestMapping("loginAdm.login")
	public NexacroResult loginAdm(@ParamDataSet(name="in_ds") AdminDTO adto) {
		System.out.println("loginAdm도착");
		NexacroResult nr = new NexacroResult();
		AdminDTO ndto = lService.loginAdm(adto);
		nr.addDataSet("out_ds", ndto);
		return nr;
	}
	@ExceptionHandler
	public String exceptionhandler(Exception e) {
		e.printStackTrace();
		return "error";
	}

}
