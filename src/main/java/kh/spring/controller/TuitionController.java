package kh.spring.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.ScholarshipDTO;
import kh.spring.dto.TuitionDTO;
import kh.spring.service.TuitionService;

@Controller
@RequestMapping("/tuition")
public class TuitionController {
	
	@Autowired
	TuitionService tService;
	@Autowired
	private HttpSession session;
	
	@RequestMapping("insert.tuition")
	public NexacroResult insert(@ParamDataSet(name="in_ds")TuitionDTO dto) {
		System.out.println("컨트롤러 확인");
		NexacroResult nr = new NexacroResult();
		System.out.println("학년확인,,,,,,,,,,,,,>" + dto.getStd_grade());
		int result = tService.insertTuition(dto);
		return nr;
	}
	
	@RequestMapping("selectAll.tuition")
	public NexacroResult selectAll() {
		System.out.println("등록금 컨트롤러 확인");
		NexacroResult nr = new NexacroResult();
		List<TuitionDTO> list = tService.selectAll();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("selectOne.tuition")
	public NexacroResult selectOne(@ParamVariable(name="seq")int seq) {
		System.out.println("등록금 개인 확인" + "------>seq확인 "+seq);
		NexacroResult nr = new NexacroResult();
		TuitionDTO dto = tService.selectOne(seq);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	@RequestMapping("updateOne.tuition")
	public NexacroResult updateOne( @ParamDataSet(name="in_ds")TuitionDTO dto) {
		System.out.println("등록금 개인 수정확인");
		System.out.println("시퀀스>>"+dto.getSeq()+ "학생코드"+dto.getStd_code()+dto.getT_enter()+dto.getT_ore());
		NexacroResult nr = new NexacroResult();

		int result = tService.updateOne(dto);
		
		return nr;
	}
	
	@RequestMapping("deleteOne.tuition")
	public NexacroResult deleteOne( @ParamVariable(name="seq")int seq) {
		System.out.println("등록금 삭제 확인");
		NexacroResult nr = new NexacroResult();

		int result = tService.deleteOne(seq);
		
		return nr;
	}
	
	@RequestMapping("stdSelectOne.tuition")
	public NexacroResult stdSelectOne() {
		int user = (int)session.getAttribute("std");
		System.out.println("등록금 조회띄우기,,,,,,,,,,,,,,,,>> "+user);
		NexacroResult nr = new NexacroResult();
		List<TuitionDTO> list = tService.stdSelectOne(user);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("TuitinConfirm.nex")
	public NexacroResult tuitionConfirm(@ParamVariable(name = "std_code") String std_code) {
		NexacroResult nr = new NexacroResult();
		System.out.println("std_code : "+std_code);
		TuitionDTO dto = new TuitionDTO();
			try {
				dto  = tService.selectByStd_code(std_code);
				nr.addVariable("confirm",dto.getSeq());
			}catch(Exception e) {
				nr.addVariable("confirm","no");
			}
			
		return nr;
	}

}
