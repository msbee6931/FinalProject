package kh.spring.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.AttendDTO;
import kh.spring.service.AttendService;

@Controller
public class AttendController {

	@Autowired
	private AttendService service;
	@RequestMapping("/attendDayList.nex")
	public NexacroResult attendDayList(@ParamVariable(name="classCode")int classCode) {
		NexacroResult nr = new NexacroResult();
		AttendDTO dto = new AttendDTO();
		dto.setClassCode(classCode);
		List<AttendDTO> list = service.attendDayList(dto); //요일리스트
		if(list.size() > 0) {
			nr.addDataSet("out_ds",list);
		}else {
			list = new ArrayList<>();
			nr.addDataSet("out_ds",list);
		}
		return nr;
	}
	@RequestMapping("/attendList.nex")
	public NexacroResult attendList(@ParamDataSet(name="in_ds")List<AttendDTO> list) {
		NexacroResult nr = new NexacroResult();
		AttendDTO dto = new AttendDTO();
		String attendDay = list.get(0).getAttendDay();
		int classCode = list.get(0).getClassCode();
		dto.setAttendDay(attendDay);
		dto.setClassCode(classCode);
		List<AttendDTO> list2 = service.attendList(dto); //요일로 attendList
		if(list2.size() > 0) {
			for(int i=0; i<list2.size(); i++) {
				for(int j=list.size()-1; j>=0; j--) {
					if(list.get(j).getsCode()==list2.get(i).getsCode()) {
						list.remove(j);
					}
				}
			}
		}
		if(list.size()>0) {
			service.attendInsert(list);
		}
		list2 = service.attendList(dto);
		nr.addDataSet("out_ds",list2);
		System.out.println(list2.size());
		return nr;
	}
	@RequestMapping("/attendUpd.nex")
	public NexacroResult attendUpd(@ParamDataSet(name="in_ds")List<AttendDTO> list) {
		NexacroResult nr = new NexacroResult();	
		AttendDTO dto = new AttendDTO();
		String attendDay = list.get(0).getAttendDay();
		int classCode = list.get(0).getClassCode();
		dto.setAttendDay(attendDay);
		dto.setClassCode(classCode);
		for(AttendDTO dto2 : list) {
			service.attendUpd(dto2);
		}
		list = service.attendList(dto);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/attendDel.nex")
	public NexacroResult attendDel(@ParamDataSet(name="in_ds")AttendDTO dto) {
		NexacroResult nr = new NexacroResult();	
		service.attendDel(dto);
		return nr;
	}

	@RequestMapping("/selectOneAttend.nex")
	public NexacroResult selectOneAttend(@ParamVariable(name="cCode")int cCode, @ParamVariable(name="sCode")int sCode) {
		System.out.println("학생 출결조회 들어오는지확인 ------ cCode>>"+cCode+"------sCode >> "+sCode);
		AttendDTO dto = new AttendDTO();
		dto.setClassCode(cCode);
		dto.setsCode(sCode);
		List<AttendDTO> list = service.selectOneAttend(dto);
		
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("/selectAttend.nex")
	public NexacroResult selectAttend(@ParamVariable(name="cCode")int cCode) {
		System.out.println("교수쪽 학생 출결조회 들어오는지확인 ------ cCode>>"+cCode);

		List<AttendDTO> list = service.selectAttend(cCode);	
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
}
