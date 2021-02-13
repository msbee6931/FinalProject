package kh.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.DeptScheduleDTO;
import kh.spring.service.ScheduleService;

@Controller
@RequestMapping("/schedule")
public class ScheduleController {
	
	@Autowired
	ScheduleService sService;
	
	@RequestMapping("selectDeptSchedule")
	public NexacroResult selectDeptSchedule() {
		List<DeptScheduleDTO> list = sService.selectDeptSchedule();
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	


	@RequestMapping("insertDeptScheule")
	public NexacroResult insertDeptScheule(@ParamDataSet(name="in_ds")DeptScheduleDTO dto) {
		System.out.println("--------학과 스케줄 추가 컨트롤러 확인");
		System.out.println("---- id : "+ dto.getId() + "------ title : "+ dto.getTitle()+ "------ sdate : " + dto.getSdate());
		int result = sService.insertDeptSchedule(dto);
		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	@RequestMapping("updateDeptScheule")
	public NexacroResult updateDeptScheule(@ParamDataSet(name="in_ds")DeptScheduleDTO dto) {
		System.out.println("-------------학과 스케줄 수정 컨트롤러 확인");
		int result = sService.updateDeptScheule(dto);
		NexacroResult nr = new NexacroResult();
		return nr;
	}
		
}
