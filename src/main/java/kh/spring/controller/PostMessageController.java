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
import kh.spring.service.PostMessageService;
import kh.spring.service.ProfessorService;

@Controller
public class PostMessageController {

	@Autowired
	private HttpSession session;
	
	
	@RequestMapping("PMInsert.nex")
	public NexacroResult postMessageInsert (@ParamVariable(name="contents")String contents, @ParamVariable(name="receiver")String receiver) {
	
		PostMessageDTO dto = new PostMessageDTO();
		
		int id = (Integer)session.getAttribute("login");
		dto.setSender(id);
		dto.setContents(contents);
		dto.setReceiver(Integer.parseInt(receiver));
		NexacroResult nr = new NexacroResult();
		PMservice.insert(dto);
		return nr;
	}
	
	@Autowired
	private PostMessageService PMservice;
	
	@RequestMapping("PMUpd.nex")
	public NexacroResult alarmUpd(@ParamDataSet(name="in_ds")PostMessageDTO dto,@ParamVariable(name="reply")String reply) {
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		//답글 넣기
		dto.setReply(reply);
		//답글 db 넣기
		PMservice.update(dto);
		//확인 y 만들기
		PMservice.updateConfirmOne(dto.getSeq());
		// 보낸이 찾기위한 dto select


		PostMessageDTO dto2 = new PostMessageDTO();
		//dto2에 받는이에 답글 작성자 기입
		dto2.setReceiver(dto.getSender());
		// 보낸이에 지금 로그인한사람 넣기
		dto2.setSender(seq);
		// 내용에 답글 넣고
		dto2.setContents(reply);
		// 위를 바탕으로 새로운 데이터 만들기
		PMservice.insert(dto2);
		List<PostMessageDTO> list = PMservice.listByReceiver(id);
		nr.addDataSet("out_ds",list);
		
		return nr;
	}
	
	
	@RequestMapping("PMDel.nex")
	public NexacroResult alarmDel(@ParamDataSet(name="in_ds")List<PostMessageDTO> list) {
	
		NexacroResult nr = new NexacroResult();
		PMservice.delete(list);
		return nr;
	}
	
	@RequestMapping("PMLoad.nex")
	public NexacroResult postMessageLoad() {
		

		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		List<PostMessageDTO> list = PMservice.listByReceiver(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	
	
	@RequestMapping("PMWritten.nex")
	public NexacroResult writtenPostMessageLoad() {
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		List<PostMessageDTO> list = PMservice.listBySender(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("PMReceivedP.nex")
	public NexacroResult receivedMessageP() {
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		List<PostMessageDTO> list = PMservice.listByReceiver(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("PMReceived.nex")
	public NexacroResult receivedMessage() {
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		List<PostMessageDTO> list = PMservice.received(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("alarm.nex")
	public NexacroResult alarm() {
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		int result = PMservice.alarm(id);
		if(result>0) {
			PostMessageDTO dto = new PostMessageDTO();
			dto.setConfirm("알람!");
			nr.addDataSet("out_ds",dto);
			return nr;
		}
		PostMessageDTO dto = new PostMessageDTO();
		dto.setConfirm("알람");
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	
	@RequestMapping("alarmAdmin.nex")
	public NexacroResult alarmAdmin() {
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		int result = PMservice.alarmAdmin(id);
		if(result>0) {
			PostMessageDTO dto = new PostMessageDTO();
			dto.setConfirm("알람!");
			nr.addDataSet("out_ds",dto);
			return nr;
		}
		PostMessageDTO dto = new PostMessageDTO();
		dto.setConfirm("알람");
		nr.addDataSet("out_ds",dto);
		return nr;
	}
	
	
	@RequestMapping("PMConfirm.nex")
	public NexacroResult postMessageConfirmUpdate(@ParamDataSet(name="in_ds")List<PostMessageDTO> list) {
	
		int seq = (Integer)session.getAttribute("login");
		String id = Integer.toString(seq);
		NexacroResult nr = new NexacroResult();
		PMservice.updateConfirm(list);
		List<PostMessageDTO> list2 = PMservice.listByReceiver(id);

		nr.addDataSet("out_ds",list2);
		return nr;
	}
	@Autowired
	private ProfessorService Pservice;
	
	@RequestMapping("ListProfessor.nex")
	public NexacroResult professorList() {
		NexacroResult nr = new NexacroResult();
		List<ProfessorDTO> list  =Pservice.selectAll();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
}
