package kh.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.FacultyDTO;
import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.RequestBoardDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.service.AdminService;
import kh.spring.service.ChattingService;
import kh.spring.service.FreeBoardService;
import kh.spring.service.RequestBoardService;
import kh.spring.util.EncryptUtils;

@Controller
public class AdminController {

	@Autowired
	private AdminService aService;

	@Autowired
	private RequestBoardService RBservice;

	@Autowired
	private FreeBoardService FBservice;

	@Autowired
	private ChattingService cService;

	//students
	@RequestMapping("studentslist.nex")
	public NexacroResult studentsList() {
		NexacroResult nr = new NexacroResult();
		List<StudentsDTO> list = aService.getliststu();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("deleteStudent.nex")
	public NexacroResult deletestudent(@ParamDataSet(name="in_ds")List<StudentsDTO> list) {
		System.out.println("도착여부");
		NexacroResult nr = new NexacroResult();
		int result = aService.deletestu(list);
		// 채팅 아이디 삭제
		cService.deleteChatUserStu(list);
		return nr;
	}
	@RequestMapping("updateStudent.nex")
	public NexacroResult updateStudent(@ParamDataSet(name="in_ds")List<StudentsDTO> list) {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();

		int result = aService.updatestu(list);
		return nr;
	}
	@RequestMapping("selectS_seq.nex")
	public NexacroResult selectS_seq() {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		List<StudentsDTO> dto = aService.selectS_seq();
		nr.addDataSet("out_ds", dto);
		return nr;
	}@RequestMapping("selectP_seq.nex")
	public NexacroResult selectP_seq() {
		System.out.println("셀렉트p도착");
		NexacroResult nr = new NexacroResult();
		List<ProfessorDTO> dto = aService.selectP_seq();
		nr.addDataSet("out_ds", dto);
		return nr;
	}
	@RequestMapping("insertStudent.nex")
	public NexacroResult insertStudent(@ParamDataSet(name="in_ds")StudentsDTO dto) {
		System.out.println("도착");
		String pw; 
		String Spw = null;
		int s_seq = 0;
		String userName = null;
		pw= dto.getPw();
		Spw = EncryptUtils.getSHA256(pw);
		dto.setPw(Spw); 
		s_seq = dto.getS_seq();
		System.out.println(s_seq);
		String seq = Integer.toString(s_seq);
		String seq1 = seq.substring(0, 6);
		System.out.println(seq1);
		int seq2 = Integer.parseInt(seq1);
		
		int r_seq = aService.selectstu(s_seq);
		
		if(r_seq > 0) {
			System.out.println("라스트넘버에 +1");
			System.out.println(s_seq);
			int lastNum = aService.lastNum(seq2);
			System.out.println(lastNum);
			s_seq = lastNum + 1;
			System.out.println(s_seq);
			dto.setS_seq(s_seq);
		}
		
		userName = dto.getName();
		NexacroResult nr = new NexacroResult();
		int result = aService.insertstu(dto);

		// 채팅 아이디 생성
		String userId = Integer.toString(s_seq);		
		cService.insertChatUser(userId,userName);

		return nr;
	//professor
	}
	@RequestMapping("professorList.nex")
	public NexacroResult professorList() {
		NexacroResult nr = new NexacroResult();
		List<ProfessorDTO> list = aService.getlistPro();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	@RequestMapping("updateProfessor.nex")
	public NexacroResult updateProfessor(@ParamDataSet(name="in_ds")List<ProfessorDTO> list) {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		int result = aService.updatePro(list);
		return nr;
	}
	@RequestMapping("deleteProfessor.nex")
	public NexacroResult deleteProfessor(@ParamDataSet(name="in_ds")List<ProfessorDTO> list) {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		int result = aService.deletePro(list);
		// 채팅 아이디 삭제
		cService.deleteChatUserPro(list);
		return nr;
	}
	@RequestMapping("insertProfessor.nex")
	public NexacroResult insertProfessor(@ParamDataSet(name="in_ds")ProfessorDTO dto) {
		System.out.println("도착");
		String pw; String Spw = null;
		int p_seq = 0;
		String userName = null;
			pw = dto.getPw();
			Spw = EncryptUtils.getSHA256(pw);
			dto.setPw(Spw);
			p_seq = dto.getP_seq();
			String seq = Integer.toString(p_seq);
			String seq1 = seq.substring(0, 6);
			System.out.println(seq1);
			int seq2 = Integer.parseInt(seq1);
			
			int r_seq = aService.selectpro(p_seq);
			
			if(r_seq > 0) {
				System.out.println("라스트넘버에 +1");
				System.out.println(p_seq);
				int lastPNum = aService.lastPNum(seq2);
				System.out.println(lastPNum);
				p_seq = lastPNum + 1;
				System.out.println(p_seq);
				dto.setP_seq(p_seq);
			}
			userName = dto.getName();
		NexacroResult nr = new NexacroResult();
		int result = aService.insertPro(dto);
		// 채팅 아이디 생성
		String userId = Integer.toString(p_seq);		
		cService.insertChatUser(userId,userName);
		return nr;
	}
	//faculty

	@RequestMapping("facultylist.nex")
	public NexacroResult facultylist() {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		List<FacultyDTO> list = aService.getlistFac();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	@RequestMapping("deleteFaculty.nex")
	public NexacroResult deleteFaculty(@ParamDataSet(name="in_ds")List<FacultyDTO> list) {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		int result = aService.deleteFac(list);
		// 채팅 아이디 삭제
		cService.deleteChatUserFac(list);
		return nr;
	}
	@RequestMapping("updateFaculty.nex")
	public NexacroResult updateFaculty(@ParamDataSet(name="in_ds") List<FacultyDTO> list) {
		System.out.println("도착");
		NexacroResult nr = new NexacroResult();
		int result = aService.updateFac(list);
		return nr;
	}
	@RequestMapping("insertFaculty.nex")
	public NexacroResult insertFaculty(@ParamDataSet(name="in_ds") List<FacultyDTO> list) {
		int f_seq = 0;
		String userName = null;
		for(int i =0; i < list.size(); i++) {
			f_seq = list.get(i).getF_seq();
			userName = list.get(i).getName();
		}
		NexacroResult nr = new NexacroResult();
		String pw; String Spw = null;
		for(int i =0; i < list.size(); i++) {
			pw = list.get(i).getPw();
			Spw = EncryptUtils.getSHA256(pw);
			list.get(i).setPw(Spw);
		}
		int result = aService.insertFac(list);
		// 채팅 아이디 생성
		String userId = Integer.toString(f_seq);		
		cService.insertChatUser(userId,userName);
		return nr;
	}



	@RequestMapping("ReplyUpd.nex")
	public NexacroResult updReply(@ParamDataSet(name="in_ds")RequestBoardDTO dto) {
		//-- login session update 이후 바꿔 줘야함
		String id= "0101005";

		NexacroResult nr = new NexacroResult();
		RBservice.updateReply(dto);
		List<RequestBoardDTO> list = RBservice.selectAll();
		nr.addDataSet("out_ds",list);		

		return nr;

	}

	@RequestMapping("RBLoad.nex")
	public NexacroResult RBNexLoad() {
		//-- login session update 이후 바꿔 줘야함
		String id= "0101005";
		NexacroResult nr = new NexacroResult();
		List<RequestBoardDTO> list = RBservice.selectAll();
		nr.addDataSet("out_ds",list);
		return nr;

	}	

	@RequestMapping("RBDel.nex")
	public NexacroResult RBNexDel(@ParamDataSet(name="in_ds")List<RequestBoardDTO> list) {
		NexacroResult nr = new NexacroResult();
		RBservice.deleteList(list);
		return nr;
	}

	@RequestMapping("FBLoad.nex")
	public NexacroResult FBNexLoad() throws Exception {
		//-- login session update 이후 바꿔 줘야함
		String id= "0101005";
		NexacroResult nr = new NexacroResult();
		int cpage = 1;
		List<FreeBoardDTO> list = FBservice.listByCpage(cpage);
		nr.addDataSet("out_ds",list);
		return nr;

	}

	@RequestMapping("FBDel.nex")
	public NexacroResult FBNexDel(@ParamDataSet(name="in_ds")List<FreeBoardDTO> list) {
		NexacroResult nr = new NexacroResult();
		FBservice.deleteList(list);
		return nr;
	}

	@ExceptionHandler
	public String exceptionhandler(Exception e){
		e.printStackTrace();
		return "error";
	}





}
