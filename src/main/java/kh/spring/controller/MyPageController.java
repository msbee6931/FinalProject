package kh.spring.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.service.MyPageService;

@Controller
public class MyPageController {
	@Autowired
	private MyPageService mService;
	@Autowired
	private HttpSession session;
	
	@RequestMapping("myInfoStu.nex")
	public NexacroResult myInfoStu() {
//		int id =(int) session.getAttribute("id");
		int id = 1;
		NexacroResult nr = new NexacroResult();
		List<StudentsDTO> list = mService.myInfoStu(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("updateMyInfoStu.nex")
	public NexacroResult updateMyInfoStu(@ParamDataSet(name="in_ds")List<StudentsDTO> list) {
		System.out.println("도착");
		for(int i=0; i<list.size(); i++) {
			System.out.println(list.get(i).getPw());
		}
		NexacroResult nr = new NexacroResult();
		int result = mService.updateMyInfoStu(list);
		return nr;
	}
	@RequestMapping("myInfoPro.nex")
	public NexacroResult myInfoPro() {
//		int id = (int) session.getAttribute("id");
		int id = 1;
		NexacroResult nr = new NexacroResult();
		List<ProfessorDTO> list = mService.myInfoPro(id);
		nr.addDataSet("out_ds", list);
		return nr;
	}
	@RequestMapping("updateMyInfoPro.nex")
	public NexacroResult updateMyInfoPro(@ParamDataSet(name="in_ds")List<ProfessorDTO> list) {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		int result = mService.updateMyInfoPro(list);
		return nr;
	}

}
