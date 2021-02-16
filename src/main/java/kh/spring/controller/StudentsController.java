package kh.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.ReqScholarDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.service.StudentsService;

@Controller
@RequestMapping("/students")
public class StudentsController {
	
	@Autowired
	StudentsService sService;

	//학번 받아서 학생 정보 불러오기
	@RequestMapping("selectOneStd.students")
	public NexacroResult selectOneStd(@ParamVariable(name="sCode")int sCode) {
		NexacroResult nr = new NexacroResult();

		StudentsDTO dto = sService.selectOneStd(sCode);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	//휴학처리하기
	@RequestMapping("updateStdAbs.students")
	public NexacroResult updateStdAbs(@ParamVariable(name="sCode")int sCode) {
		NexacroResult nr = new NexacroResult();

		int result = sService.updateStdAbs(sCode);
		if(result>0) {
			System.out.println("rest update 확인");
		}
		
		return nr;
	}
	
	//복학처리하기
	@RequestMapping("updateStdRest.students")
	public NexacroResult updateStdRest(@ParamVariable(name="sCode")int sCode) {
		NexacroResult nr = new NexacroResult();

		int result = sService.updateStdRest(sCode);
		if(result>0) {
			System.out.println("rest update 확인");
		}
		
		return nr;
	}
	
	
}
