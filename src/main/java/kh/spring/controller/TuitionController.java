package kh.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.TuitionDTO;
import kh.spring.service.TuitionService;

@Controller
@RequestMapping("/tuition")
public class TuitionController {
	
	@Autowired
	TuitionService tService;
	
	@RequestMapping("insert.tuition")
	public NexacroResult insert(@ParamDataSet(name="in_ds")List<TuitionDTO> list) {
		System.out.println("컨트롤러 확인");
		NexacroResult nr = new NexacroResult();
		int result = tService.insertTuition(list);
		return nr;
	}

}
