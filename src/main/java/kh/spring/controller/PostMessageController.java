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
import kh.spring.service.PostMessageService;

@Controller
public class PostMessageController {

	@Autowired
	private HttpSession session;
	
	@RequestMapping("PMInsert.nex")
	public NexacroResult postMessageInsert (@ParamVariable(name="contents")String contents, @ParamVariable(name="receiver")String receiver) {
	
		PostMessageDTO dto = new PostMessageDTO();
		int id = 1010001;
		dto.setSender(id);
		// 바꿔야하는 id
		//String id = (String)session.getAttribute("id");

		dto.setContents(contents);
		dto.setReceiver(Integer.parseInt(receiver));
		NexacroResult nr = new NexacroResult();
		PMservice.insert(dto);
		return nr;
	}
	
	@Autowired
	private PostMessageService PMservice;
	
	@RequestMapping("PMUpd.nex")
	public NexacroResult alarmUpd(@ParamDataSet(name="in_ds")PostMessageDTO dto) {
	
		NexacroResult nr = new NexacroResult();
		PMservice.update(dto);
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
		String id = "1010001";
		
		// 바꿔야하는 id
		//String id = (String)session.getAttribute("id");
		NexacroResult nr = new NexacroResult();
		List<PostMessageDTO> list = PMservice.listByReceiver(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	
	@RequestMapping("PMWritten.nex")
	public NexacroResult writtenPostMessageLoad() {
		String id = "1010001";
		
		// 바꿔야하는 id
		//String id = (String)session.getAttribute("id");
		NexacroResult nr = new NexacroResult();
		List<PostMessageDTO> list = PMservice.listBySender(id);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("alarm.nex")
	public NexacroResult alarm() {
		String id = "1010001";
		
		// 바꿔야하는 id
		//String id = (String)session.getAttribute("id");
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
	
	
	@RequestMapping("PMConfirm.nex")
	public NexacroResult postMessageConfirmUpdate(@ParamDataSet(name="in_ds")List<PostMessageDTO> list) {
	
		String id = "1010001";
		
		// 바꿔야하는 id
		//String id = (String)session.getAttribute("id");

		NexacroResult nr = new NexacroResult();
		PMservice.updateConfirm(list);
		List<PostMessageDTO> list2 = PMservice.listByReceiver(id);
		nr.addDataSet("out_ds",list2);
		return nr;
	}
	
	
}
