package kh.spring.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.PostMessageDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.service.PostMessageService;
import kh.spring.service.ProfessorService;
import kh.spring.service.StudentsService;

@Controller
public class ProfessorController {


	@Autowired
	private StudentsService sService;
	@Autowired
	private ProfessorService pService;
	
	@RequestMapping("/deptStudents.pro")
	public NexacroResult deptStudents(@ParamVariable(name="deptCode")String deptCode) {
		NexacroResult nr = new NexacroResult();
		StudentsDTO dto = new StudentsDTO();
		System.out.println("학과코드 : " +deptCode);
		dto.setDeptCode(deptCode);
		List<StudentsDTO> list = sService.deptStudentList(dto);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/professorInfo.pro")
	public NexacroResult professorInfo(@ParamVariable(name="pCode")int pCode) {
		NexacroResult nr = new NexacroResult();
		ProfessorDTO dto = new ProfessorDTO();
		dto.setP_seq(pCode);
		dto = pService.professorInfo(dto);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
}
