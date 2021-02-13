package kh.spring.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.spring.dto.FriendDTO;
import kh.spring.dto.MessageDTO;
import kh.spring.dto.RoomDTO;
import kh.spring.dto.UserDTO;
import kh.spring.service.ChattingService;

@Controller
@RequestMapping("/chatting")
public class ChatController {
	@Autowired
	private HttpSession session;
	@Autowired
	private ChattingService service;
	
	@RequestMapping("chatHome")
	public String chatHome(Model model,HttpServletRequest request) {
		String userId = request.getParameter("userId");
		// 로그인시 저장된 유저 아이디 불러오기
		session.setAttribute("userId",userId);
		
		// 유저 정보
		UserDTO user = service.getUserInfo(userId);
		
		// 친구리스트
		List<FriendDTO> list = service.getFriendsList(userId); 
		
		model.addAttribute("user", user);
		model.addAttribute("list",list);
		
		return "Chat/chatHome";
	}
	
	@RequestMapping("chatList")
	public String chatList(Model model) {
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);
		
		// 모든 채팅방 목록 반환
		List<RoomDTO> list = service.findAllRoomByUserId(userId);
		model.addAttribute("list",list);
		model.addAttribute("user",user);
		return "Chat/chatList";
	}
	
	@RequestMapping("chatDetail")
	public String chatDetail(String roomNumber,Model model) {
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);
		
		List<MessageDTO> list = service.getChatting(roomNumber);
		
		model.addAttribute("list",list);
		model.addAttribute("userId", userId);
		model.addAttribute("roomNumber",roomNumber);
		return "Chat/chat";
	}

	// ----------------------------------------------------------------------- chat
	
	private final SimpMessagingTemplate template;

	@Autowired
	public ChatController(SimpMessagingTemplate template) {
		this.template = template;
	}

	// 채팅 메세지 전달
	@MessageMapping("chat") // 리퀘스트가 http를 통해 접속하는 경우 쓰임. 웹소켓 접속은 다른 어노테이션
	// @SendTo("/topic") // Proc 메서드 작업이 끝나면 response를 구독하는 사람한테만 메세지 보내는 설정 가능
	public void chat(MessageDTO dto) {
		int result = service.insertMessage(dto.getUserId(),dto.getMessage(),dto.getRoomNumber());
		if(result>0) {
			template.convertAndSend("/topic/chat/"+dto.getRoomNumber(),dto);
			
		}
	}
	
	// ----------------------------------------------------------------------- Room
	
	// 채팅방 생성
	@RequestMapping("roomCreate")
	public void createRoom(String roomNumber,String roomName) {
		int result = service.insertRoom(roomNumber,roomName);
		if(result>0) {
			RoomDTO dto = service.findRoomByRoomNumber(roomNumber);
			template.convertAndSend("/topic/roomCreate",dto);
		}
	}

	// 특정 채팅방 조회
	@RequestMapping("roomCheck")
	public String roomInfo(String userId,String friendId,String userName,String friendName,Model model) {
		System.out.println("여기는 룸체크 userId는 "+userId);
		System.out.println("여기는 룸체크 friendId는 "+friendId);
		
		String roomNumber = userId+"_"+friendId;
		String roomName = userName+"와 "+friendName+"의 채팅방";
		RoomDTO dto = service.findRoomById(userId, friendId);
		
		if(dto == null) {
			int result = service.insertRoom(roomNumber,roomName);
		}
		List<MessageDTO> list = service.getChatting(roomNumber);
		model.addAttribute("list",list);
		model.addAttribute("userId", userId);
		model.addAttribute("roomNumber",roomNumber);
		return "Chat/chat";
	}
	
	private static JSONObject JsonToObjectParser(String jsonStr) {
		JSONParser parser = new JSONParser();
		JSONObject obj = null;
		try {
			obj = (JSONObject)parser.parse(jsonStr);
		}catch(ParseException e) {
			e.printStackTrace();
		}
		return obj;
		// json 형태의 문자열을 SimpleJson의 parser를 이용하여 JSONObject로 파싱처리
	}
	
	@ExceptionHandler
	public String error(Exception e) {
		e.printStackTrace();
		return "error";
	}
}
