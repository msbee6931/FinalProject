package kh.spring.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.ColScheduleDTO;
import kh.spring.dto.DeptScheduleDTO;
import kh.spring.dto.IndScheduleDTO;
import kh.spring.service.ScheduleService;

@Controller
@RequestMapping("/schedule")
public class ScheduleController {
	
	
	@Autowired
	ScheduleService sService;
	@Autowired
	private HttpSession session;
	
	//학과 스케줄 입력
	@RequestMapping("insertDeptScheule")
	public NexacroResult insertDeptScheule(@ParamDataSet(name="in_ds")List<DeptScheduleDTO> list) {
		System.out.println("--------------------- 학과 스케줄 등록 컨트롤러 확인------ "+list.size());
		for(int i=0; i<list.size();i++) {
			DeptScheduleDTO dto = list.get(i);
			int result = sService.insertDeptSchedule(dto);
		}
		
		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	//학과 스케줄 조회
	@RequestMapping("selectDeptSchedule")
	public NexacroResult selectDeptSchedule() {
		List<DeptScheduleDTO> list = sService.selectDeptSchedule();
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	//학과 스케줄 개별 조회
	@RequestMapping("selectOneDeptSchedule")
	public NexacroResult selectOneDeptSchedule(@ParamVariable(name="seq")String seq, @ParamVariable(name="schDate")String schDate) {
		System.out.println("-----------------학과 스케줄 개별 조회");
		System.out.println("seq 넘어 오는 값:  "+seq + "   schDate 넘어오는 값" + schDate);
		DeptScheduleDTO dto = sService.selectOneDeptSchedule(seq, schDate);
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	//학과 스케줄 수정
	@RequestMapping("updateDeptSchedule")
	public NexacroResult updateDeptSchedule(@ParamVariable(name="oriSeq")String oriSeq, @ParamDataSet(name="in_ds")List<DeptScheduleDTO> list) {
		System.out.println("-----------------학과 스케줄 수정 컨트롤러 확인 ");
		System.out.println("seq 넘어 오는 값:  "+oriSeq + " 기존 스케줄러 삭제 예정");
		int resultDelete = sService.deleteDeptSchedule(oriSeq);
		
		if(resultDelete>0) {
			System.out.println("기존 내용 지우고 다시 새로 입력 ---------- 리스트 사이즈 : ");
			for(int i=1; i<list.size();i++) {
				DeptScheduleDTO dto = list.get(i);
				System.out.println(list.get(i).getSchDate()+"-----------들어오는 시퀀스확인 : "+list.get(i).getSeq());
				int resultInsert = sService.insertDeptSchedule(dto);
			}
		}
		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	//학과 스케줄 삭제
		@RequestMapping("deleteScheule")
		public NexacroResult deleteScheule(@ParamVariable(name="oriSeq")String oriSeq) {
			System.out.println("--------------------- 학과 스케줄 삭제 컨트롤러 확인------ ");
			int result = sService.deleteDeptSchedule(oriSeq);
			if(result>0) {
			System.out.println("삭제완료");
			}
			NexacroResult nr = new NexacroResult();
			return nr;
		}
	
	

	// 개인 스케줄 입력
	@RequestMapping("insertIndSchedule")
	public NexacroResult insertIndSchedule(@ParamDataSet(name="in_ds")IndScheduleDTO dto) {
		int writer = (int)session.getAttribute("pro");
		System.out.println("--------개인 스케줄 추가 컨트롤러 확인" + "작성자확인 ,,>"+writer);
		System.out.println(dto.getId() + "---------------"+dto.getTitle() + "-----------"+dto.getType());
		dto.setWriter(writer);
		int result = sService.insertIndSchedule(dto);
		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	@RequestMapping("selectIndSchedule")
	public NexacroResult selectIndSchedule() {
		int writer = (int)session.getAttribute("pro");

		System.out.println("--------개인 스케줄 확인 컨트롤러 확인 작성자 >>>>" );
		List<IndScheduleDTO> list = sService.selectIndSchedule(writer);
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	
	@RequestMapping("updateIndSchedule")
	public NexacroResult updateIndSchedule(@ParamDataSet(name="in_ds")IndScheduleDTO dto) {
		System.out.println("-------------개인 스케줄 수정 컨트롤러 확인");
		int writer = (int)session.getAttribute("pro");
		dto.setWriter(writer);

		int result = sService.updateIndSchedule(dto);

		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	@RequestMapping("deleteIndSchedule")
	public NexacroResult deleteIndSchedule(@ParamVariable(name="id")String id) {
		System.out.println("-------------개인 스케줄 삭제 컨트롤러 확인");

		int result = sService.deleteIndSchedule(id);

		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	@RequestMapping("insertColSchedule")
	public NexacroResult insertColSchedule(@ParamDataSet(name="in_ds")ColScheduleDTO dto) {
		System.out.println("--------학사 스케줄 추가 컨트롤러 확인");
		System.out.println(dto.getTitle()+ "<<,,,,,,title" + dto.getsDate()+"<<sDate");
		int result = sService.insertColSchedule(dto);
		NexacroResult nr = new NexacroResult();
		return nr;
	}
	@RequestMapping("selectColSchedule")
	public NexacroResult selectColSchedule() {
		System.out.println("--------학사스케줄 추가 컨트롤러 확인");
		List<ColScheduleDTO> list = sService.selectColSchedule();
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("selectOneColSchedule")
	public NexacroResult selectOneColSchedule(@ParamVariable(name="seq")int seq) {
		System.out.println("--------학사스케줄 하나 띄우기 컨트롤러 확인");
		ColScheduleDTO dto = sService.selectOneColSchedule(seq);
		NexacroResult nr = new NexacroResult();
		nr.addDataSet("out_ds", dto);
		return nr;
	}
	
	@RequestMapping("updateColSchedule")
	public NexacroResult updateColSchedule(@ParamDataSet(name="in_ds")ColScheduleDTO dto) {
		System.out.println("--------학사 스케줄 추가 컨트롤러 확인");
		int result = sService.updateColSchedule(dto);
		NexacroResult nr = new NexacroResult();
		return nr;
	}
	
	@RequestMapping("deleteColSchedule")
	public NexacroResult deleteColSchedule(@ParamVariable(name="seq")int seq) {
		System.out.println("--------학사 스케줄 삭제 컨트롤러 확인");
		int result = sService.deleteColSchedule(seq);
		NexacroResult nr = new NexacroResult();
		return nr;
	}

		
}
