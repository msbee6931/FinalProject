package kh.spring.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.data.datatype.PlatformDataType;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformRequest;
import com.nexacro17.xapi.tx.PlatformType;

import kh.spring.dto.ClassDTO;
import kh.spring.dto.ClassScheduleDTO;
import kh.spring.dto.StdTimeTableDTO;
import kh.spring.dto.StudentClassDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.service.ClassService;
import kh.spring.service.StudentsService;

@Controller
public class ClassController {

	@Autowired
	private ClassService service;
	@Autowired
	private StudentsService sService;
	
	@RequestMapping("/classInfo.nex")
	public NexacroResult classInfo(@ParamDataSet(name="in_ds1", required=false)ClassDTO dto, @ParamDataSet(name="in_ds2", required=false)ClassScheduleDTO dto2) {
		NexacroResult nr = new NexacroResult();
		service.classInsert(dto);
		service.classScheduleInsert(dto2);
		return nr;
	}
	@RequestMapping("/classSeqCheck.nex")
	public NexacroResult classSeqCheck(@ParamDataSet(name="classSeq") int classSeq) {
		NexacroResult nr = new NexacroResult();
		ClassDTO dto = service.classListSeq(classSeq);
		nr.addDataSet("out_ds",dto);
		return nr;
	}

	@RequestMapping("/classInfoUpd.nex")
	public NexacroResult classInfoUpd(@ParamDataSet(name="in_ds1", required=false)ClassDTO dto,@ParamDataSet(name="in_ds2", required=false)ClassScheduleDTO dto2) {
		System.out.println("수업 계획서 수정");
		NexacroResult nr = new NexacroResult();
		service.classUpdate(dto);
		service.classScheduleUpdate(dto2);
		System.out.println(dto2.getWeek1());
		return nr;
	}
	@RequestMapping("/proMyClassList.nex")
	public NexacroResult proMyClassList(@ParamVariable(name="proCode")int proCode) {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list = service.proMyClassList(proCode);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/classList.nex")
	public NexacroResult classList() {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list = service.classList();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/classReqList.nex")
	public NexacroResult classReqList() {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list = service.classReqList();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/classListProCode.nex")
	public NexacroResult classListProCode(@ParamVariable(name="proCode")int proCode,@ParamVariable(name="startTime")String startTime,@ParamVariable(name="endTime")String endTime) {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list = service.classListProCode(proCode,startTime,endTime);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/classDel.nex")
	public NexacroResult classDel(@ParamDataSet(name="in_ds")List<ClassDTO> list) {
		NexacroResult nr = new NexacroResult();
		service.classDel(list);
		service.scheduleDel(list);
		return nr;
	}
	@RequestMapping("/reqUpdAtoDR.nex")
	public NexacroResult reqUpdAtoDR(@ParamDataSet(name="in_ds")List<ClassDTO> list) {
		NexacroResult nr = new NexacroResult();
		service.reqUpdAtoDR(list);
		return nr;
	}
	@RequestMapping("/reqUpdARtoA.nex")
	public NexacroResult reqUpdARtoA(@ParamDataSet(name="in_ds")List<ClassDTO> list) {
		NexacroResult nr = new NexacroResult();
		service.reqUpdARtoA(list);
		return nr;
	}
	@RequestMapping("/reqUpdDRtoDC.nex")
	public NexacroResult reqUpdDRtoDC(@ParamDataSet(name="in_ds")List<ClassDTO> list) {
		NexacroResult nr = new NexacroResult();
		service.reqUpdDRtoDC(list);
		return nr;
	}
	@RequestMapping("/classListSeq.nex")
	public NexacroResult classListSeq(@ParamVariable(name="classSeq")int classSeq) {
		NexacroResult nr = new NexacroResult();
		ClassDTO dto1 = service.classListSeq(classSeq);
		ClassScheduleDTO dto2 = service.classScheduleSeq(classSeq);
		nr.addDataSet("out_ds",dto1);
		nr.addDataSet("out_ds2",dto2);
		return nr;
	}
	@RequestMapping("/classReqListA.nex")
	public NexacroResult classReqListA() {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list = service.classReqListA();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/rejectMsgInsert.nex")
	public NexacroResult rejectMsgInsert(@ParamDataSet(name="in_ds")List<ClassDTO> list,@ParamVariable(name="msg")String rejectMsg) {
		NexacroResult nr = new NexacroResult();
		service.rejectMsgInsert(list,rejectMsg);
		return nr;
	}
	@RequestMapping("/classListYear.nex")
	public NexacroResult classListYear(@ParamVariable(name="startTime")String startTime,@ParamVariable(name="endTime")String endTime) {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list =service.classListYear(startTime,endTime);
		nr.addDataSet("out_ds",list);
		return nr;
	}

	@RequestMapping("/stdTimeTableDelete.nex")
	public NexacroResult stdTimeTableDelete(HttpServletResponse response,@ParamVariable(name="classCode")int classCode,@ParamVariable(name="sCode")int sCode,@ParamVariable(name="row")int row) {
		NexacroResult nr = new NexacroResult();
		StdTimeTableDTO dto = new StdTimeTableDTO();
		dto.setClassCode(classCode); dto.setsCode(sCode);
		System.out.println(classCode + ":" + sCode +":"+row);
		service.stdTimeTableDelete(dto);
		service.stdClassDelete(dto);
		StudentClassDTO dto2 = new StudentClassDTO();
		dto2.setClassCode(classCode);
		int count = service.stdClassCount(dto2);
		int count2 = service.stdBasketCount(dto2);
		PlatformData out_pData = new PlatformData();
		VariableList varList = out_pData.getVariableList();
		varList.add("count",count);
		varList.add("count2",count2);
		varList.add("row",row);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);

		// Send data
		try {pRes.sendData();}
		catch(PlatformException e) {e.printStackTrace();}
		return nr;
	}
	@RequestMapping("/stdTimeTableList.nex")
	public NexacroResult stdTimeTableList(HttpServletResponse response,@ParamVariable(name="sCode")int sCode,
		@ParamVariable(name="startTime")String startTime,@ParamVariable(name="endTime")String endTime) {
		NexacroResult nr = new NexacroResult();
		StdTimeTableDTO dto = new StdTimeTableDTO();	
		dto.setsCode(sCode);
		List<StdTimeTableDTO> list = service.stdTimeTableList(dto,startTime,endTime);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/stdClassInsert.nex")
	public NexacroResult stdClassInsert(HttpServletResponse response,
		@ParamDataSet(name="in_ds1")StudentClassDTO dto,@ParamDataSet(name="in_ds2")List<StdTimeTableDTO> list,
		@ParamVariable(name="row")int row) {
		NexacroResult nr = new NexacroResult();
		PlatformData out_pData = new PlatformData();
		VariableList varList = out_pData.getVariableList();
		int limitCount = service.stdClassCount(dto);
		int classSeq = dto.getClassCode();
		ClassDTO cdto = new ClassDTO();
		cdto = service.classListSeq(classSeq);
		String[] limit = cdto.getLimit().split("/");
		if(limitCount < Integer.parseInt(limit[1])){
			service.stdClassInsert(dto);
			service.stdTimeTableInsert(list);
			varList.add("msg","Y");
		}else {
			varList.add("msg","N");
		}
		int count = service.stdClassCount(dto);
		int count2 = service.stdBasketCount(dto);

		varList.add("count",count);
		varList.add("count2",count2);
		varList.add("row",row);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		// Send data
		try {pRes.sendData();}
		catch(PlatformException e) {e.printStackTrace();}
		return nr;
	}
	@RequestMapping("/limitUpd.nex")
	public NexacroResult limitUpd(@ParamVariable(name="limit")String limit,@ParamVariable(name="classSeq")int classSeq) {
		NexacroResult nr = new NexacroResult();
		ClassDTO dto = new ClassDTO();
		dto.setLimit(limit);
		dto.setClassSeq(classSeq);
		service.limitUpd(dto);
		return nr;
	}
	@RequestMapping("/limitBasketUpd.nex")
	public NexacroResult limitBasketUpd(@ParamVariable(name="limit")String limit,@ParamVariable(name="classSeq")int classSeq) {
		NexacroResult nr = new NexacroResult();
		ClassDTO dto = new ClassDTO();
		dto.setBasketLimit(limit);
		dto.setClassSeq(classSeq);
		service.limitBasketUpd(dto);
		return nr;
	}
	@RequestMapping("/myClassList.nex")
	public NexacroResult myClassList(@ParamVariable(name="sCode")int sCode,
		@ParamVariable(name="startTime")String startTime,@ParamVariable(name="endTime")String endTime) {
		NexacroResult nr = new NexacroResult();
		StudentClassDTO dto = new StudentClassDTO();
		dto.setsCode(sCode);
		System.out.println(sCode + ":" + startTime + ":" + endTime);
		List<StudentClassDTO> list= service.myClassList(dto,startTime,endTime);
		if(list.size() > 0) {
			List<ClassDTO> list2 = service.myClassSeq(list);
			nr.addDataSet("out_ds",list2);
		}else {
			List<ClassDTO> list2 = new ArrayList<>();
			nr.addDataSet("out_ds",list2);
		}
		return nr;
	}
	@RequestMapping("/myBasketList.nex")
	public NexacroResult myBasketList(@ParamVariable(name="sCode")int sCode,
		@ParamVariable(name="startTime")String startTime,@ParamVariable(name="endTime")String endTime) {
		NexacroResult nr = new NexacroResult();
		StudentClassDTO dto = new StudentClassDTO();
		dto.setsCode(sCode);
		List<StudentClassDTO> list= service.myBasketList(dto, startTime, endTime);
		if(list.size() > 0) {
			List<ClassDTO> list2 = service.myClassSeq(list);
			nr.addDataSet("out_ds",list2);
		}
		return nr;
	}
	@Transactional
	@RequestMapping("/stdBasketDelete.nex")
	public NexacroResult stdBasketDelete(HttpServletResponse response,
			@ParamDataSet(name="in_ds1")List<StdTimeTableDTO> list,
			@ParamDataSet(name="in_ds2")StudentClassDTO dto,
			@ParamVariable(name="sCode")int sCode,@ParamVariable(name="classCode")String code,
			@ParamVariable(name="row")int row) {
		NexacroResult nr = new NexacroResult();
		String[] arr = code.split(",");
		PlatformData out_pData = new PlatformData();
		VariableList varList = out_pData.getVariableList();
		int limitCount = service.stdClassCount(dto);
		int classSeq = dto.getClassCode();
		ClassDTO cdto = new ClassDTO();
		cdto = service.classListSeq(classSeq);
		String[] limit = cdto.getLimit().split("/");
		if(limitCount < Integer.parseInt(limit[1])){

		for(int i=0; i<arr.length; i++) {
			StdTimeTableDTO dto2 = new StdTimeTableDTO();
			dto2.setsCode(sCode);
			dto2.setClassCode(Integer.parseInt(arr[i]));
			service.stdTimeTableDelete(dto2);
			service.stdClassDelete(dto2);
			StudentClassDTO dto3 = new StudentClassDTO();
			dto3.setClassCode(Integer.parseInt(arr[i]));
			int count = service.stdBasketCount(dto3);
			
			cdto = service.classListSeq(Integer.parseInt(arr[i]));
			String[] basketLimit = cdto.getBasketLimit().split("/");
			cdto.setClassSeq(Integer.parseInt(arr[i]));
			cdto.setBasketLimit(count+"/"+basketLimit[1]);
			service.limitBasketUpd(cdto);
		}
		service.stdTimeTableInsert(list);
		service.stdClassInsert(dto);
		varList.add("msg","Y");
		}else {
			varList.add("msg","N");
		}
		int count = service.stdClassCount(dto);
		int count2 = service.stdBasketCount(dto);
		varList.add("count",count);
		varList.add("count2",count2);
		varList.add("row",row);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		// Send data
		try {pRes.sendData();}
		catch(PlatformException e) {e.printStackTrace();}
		return nr;
	}
	@RequestMapping("/basketAllRegist.nex")
	public void basketAllRegist(HttpServletResponse response,
			@ParamDataSet(name="in_ds1")List<StdTimeTableDTO> list,
			@ParamDataSet(name="in_ds2")List<StudentClassDTO> list2) {
		StudentClassDTO dto = new StudentClassDTO();
		ClassDTO dto2 = new ClassDTO();
		String code = "";
		int classCode = 0;
		for(int i=list2.size()-1; i>=0; i--) {
			classCode = list2.get(i).getClassCode();
			dto.setClassCode(classCode);		
			dto2 = service.classListSeq(classCode);
			String[] limit = dto2.getLimit().split("/");
			int count = service.stdClassCount(dto);
			if(count >= Integer.parseInt(limit[1])) {
				list2.remove(i);
				for(int j=list.size()-1; j>=0; j--) {
					if(list.get(j).getClassCode()==classCode) {
						list.remove(j);
					}
				}	
			}else {
				code += classCode +"/";
			}
		}
		if(list.size() >0 && list.size() > 0) {
			service.stdClassesDelete(list2);
			service.stdTimeTablesDelete(list);
			service.stdClassesInsert(list2);
			service.stdTimeTableInsert(list);
			
			for(int i=list2.size()-1; i>=0; i--) {
				classCode = list2.get(i).getClassCode();
				dto.setClassCode(classCode);		
				dto2 = service.classListSeq(classCode);
				String[] limit = dto2.getLimit().split("/");
				int count = service.stdClassCount(dto);
				dto2.setLimit(count+"/"+limit[1]);
				service.limitUpd(dto2);
				int basketLimit = service.stdBasketCount(dto);
				dto2.setBasketLimit(basketLimit+"/"+limit[1]);
				service.limitBasketUpd(dto2);
			}
		}
		PlatformData out_pData = new PlatformData();
		VariableList varList = out_pData.getVariableList();
		varList.add("code",code.substring(0,code.length()-1));
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		// Send data
		try {pRes.sendData();}
		catch(PlatformException e) {e.printStackTrace();}
		
	}
	@RequestMapping("/basketAllDelete.nex")
	public NexacroResult basketAllDelete(@ParamDataSet(name="in_ds1")List<StdTimeTableDTO> list,@ParamDataSet(name="in_ds2")List<StudentClassDTO> list2) {
		NexacroResult nr = new NexacroResult();
		service.stdTimeTablesDelete(list);
		service.stdClassesDelete(list2);
		for(int i=0; i<list2.size(); i++) {
			int classSeq = list2.get(i).getClassCode();
			ClassDTO dto = service.classListSeq(classSeq);
			String[] limit = dto.getBasketLimit().split("/");
			int count = service.stdClassCount(list2.get(i));
			dto.setBasketLimit(count+"/"+limit[1]);
			service.limitBasketUpd(dto);
		}
		return nr;
	}
	@RequestMapping("/deleteStdClass.nex")
	public NexacroResult deleteStdClass(@ParamDataSet(name="in_ds")List<StudentClassDTO> list) {
		NexacroResult nr = new NexacroResult();
		service.stdClassSeqDel(list);
		service.stdTimeTableSeqDel(list);
		return nr;
	}
	@RequestMapping("/proClassList.nex")
	public NexacroResult proClassList(@ParamVariable(name="proCode")int proCode,@ParamVariable(name="startTime")String startTime,@ParamVariable(name="endTime")String endTime) {
		NexacroResult nr = new NexacroResult();
		 List<ClassDTO> list = service.proClassList(proCode,startTime,endTime);
		 nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("/stdListSeq.nex")
	public NexacroResult stdListSeq(@ParamVariable(name="classCode")int classCode) {
		NexacroResult nr = new NexacroResult();
		StudentClassDTO dto = new StudentClassDTO();
		dto.setClassCode(classCode);
		List<StudentClassDTO> list = service.stdListSeq(dto);
		if(list.size() > 0) {
			nr.addDataSet("out_ds",list);
		}else {
			List<StudentClassDTO> list2 = new ArrayList<>();
			nr.addDataSet("out_ds",list2);
		}
		return nr;
	}
	@RequestMapping("/classEvalUpd.nex")
	public NexacroResult classEvalUpd(@ParamDataSet(name="in_ds")ClassDTO dto) {
		NexacroResult nr = new NexacroResult();
		service.evalUpd(dto);
		return nr;
	}
	@RequestMapping("/classStudents.nex")
	public NexacroResult classStudents(@ParamVariable(name="classCode")int classCode) {
		NexacroResult nr = new NexacroResult();
		StudentClassDTO dto = new StudentClassDTO();
		dto.setClassCode(classCode);
		List<StudentClassDTO> list = service.stdListSeq(dto);
		if(list.size() > 0) {
			List<StudentsDTO> list2 = sService.classStudents(list);
			nr.addDataSet("out_ds",list2);
		}else {
			List<StudentsDTO> list2 = new ArrayList<>();
			nr.addDataSet("out_ds",list2);
		}
		return nr;
	}
	
	@ExceptionHandler
	public String exceptionhandler(Exception e){
		e.printStackTrace();
		return "error";
	}
}
