package kh.spring.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletOutputStream;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.JsonObject;

import kh.spring.dto.FriendDTO;
import kh.spring.dto.MessageDTO;
import kh.spring.dto.RoomDTO;
import kh.spring.dto.RoomJoinDTO;
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
		// 로그인시 저장된 유저 아이디 불러오기
		String userId = (String) session.getAttribute("userId");
		
		if(userId != null) {
			// 로그인한 유저 정보
			UserDTO user = service.getUserInfo(userId);
			// 모든 유저 정보
			List<UserDTO> allUser = service.getAllUserInfo();
			// 친구리스트
			List<FriendDTO> friendList = service.getFriendsList(userId); 

			model.addAttribute("user", user);
			model.addAttribute("allUser",allUser);
			model.addAttribute("friendList",friendList);
			
			return "Chat/chatHome";
		}else {
			return "Chat/chatLoginFail";
		}
	}
	
	@RequestMapping("chatList")
	public String chatList(Model model) {
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);
		
		// 모든 채팅방 목록 가져오기
		List<RoomJoinDTO> roomList = service.findAllRoomByUserId(userId);
		// 모든 방 참가자 목록 가져오기
		List<RoomJoinDTO> roomJoinList = service.findRoomJoin();
		// 채팅 알림을 위한 목록
		List<List<MessageDTO>> list = new ArrayList<>();
		
		for(RoomJoinDTO dto : roomList){
			List<MessageDTO> mDto = service.getAlarmMessage(dto.getRoomNumber(),userId);
			list.add(mDto);
		}

		model.addAttribute("roomList",roomList);
		model.addAttribute("roomJoinList",roomJoinList);
		model.addAttribute("user",user);
		model.addAttribute("messageList",list);
		
		return "Chat/chatList";
	}
	
	// 채팅방 생성 페이지(채팅방 목록에서 방 개설 클릭시)
	@RequestMapping("chatRoomCreatePage")
	public String chatRoomCreate(Model model,HttpServletRequest request) {
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);	
		List<FriendDTO> friendList = service.getFriendsList(userId); 
		
		// 모든 유저 정보
		List<UserDTO> allUser = service.getAllUserInfo();
		
		model.addAttribute("user", user);
		model.addAttribute("friendList",friendList);
		model.addAttribute("allUser",allUser);
		model.addAttribute("friendList",friendList);
		
		return "Chat/roomCreate";
	}
	
	@RequestMapping("chatDetail")
	public String chatDetail(String roomNumber,Model model) {
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);
		
		List<MessageDTO> list = service.getChatting(roomNumber);
		List<RoomJoinDTO> joinList = service.getJoinRoomInfo(roomNumber);
		
		// 모든 유저 정보
		List<UserDTO> allUser = service.getAllUserInfo();
		// 친구리스트
		List<FriendDTO> friendList = service.getFriendsList(userId); 
		
		model.addAttribute("list",list);
		model.addAttribute("userId", userId);
		model.addAttribute("roomNumber",roomNumber);
		model.addAttribute("allUser",allUser);
		model.addAttribute("joinList",joinList);
		
		return "Chat/chat";
	}
	
	
	@RequestMapping("deleteUserState")
	public void deleteUserState(HttpServletRequest request,HttpServletResponse response) throws Exception {
		String userId = (String) session.getAttribute("userId");
		String roomNumber = request.getParameter("roomNumber");
		
		// 채팅방 입장시 채팅방 나간 기록 삭제
		int result = service.deleteUserState(roomNumber,userId);
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		if(result>0) {
			obj.addProperty("msg", "성공!");
		}else {
			obj.addProperty("msg", "실패!");;
		}
		pw.append(obj.toString());
	}
	
	@RequestMapping("profilePage")
	public String profilePage(Model model) {
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);
		model.addAttribute("user", user);
		return "Chat/profile";
	}
	
	@RequestMapping("friendAddPage")
	public String friendAddPage(HttpServletRequest request,Model model) {
		String userId = (String) session.getAttribute("userId");
		String roomNumber = request.getParameter("roomNumber");
		RoomDTO dto = service.findRoomByRoomNumber(roomNumber);
		List<UserDTO> allUser = service.getAllUserInfo();
		List<RoomJoinDTO> joinList = service.getJoinRoomInfo(roomNumber);
		
		String roomName = "";
		
		if(dto.getRoomName() != null) {
			roomName = dto.getRoomName();
		}
		
		// 채팅방 참여자를 제외한 초대 친구 목록
		List<FriendDTO> inviteList = service.getInviteList(joinList,userId);
		
		model.addAttribute("inviteList", inviteList);
		model.addAttribute("roomNumber",roomNumber);
		model.addAttribute("roomName",roomName);
		model.addAttribute("allUser",allUser);
		model.addAttribute("joinList", joinList);
		return "Chat/friendAdd";
	}
	
	@RequestMapping("insertUserState")
	public void insertUserState(HttpServletRequest request,HttpServletResponse response) throws Exception {
		String userId = (String) session.getAttribute("userId");
		String roomNumber = request.getParameter("roomNumber");
		
		int result = service.insertUserState(userId,roomNumber);
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		if(result>0) {
			obj.addProperty("msg", "성공!");
		}else {
			obj.addProperty("msg", "실패!");;
		}
		pw.append(obj.toString());
	}
	
	// ----------------------------------------------------------------------- user
	@RequestMapping("profileUpdate")
	public void profileUpdate(MultipartHttpServletRequest request,HttpServletResponse response,String userName) throws Exception {
		String userId = (String) session.getAttribute("userId");
		List<MultipartFile> fileList = request.getFiles("file");
		
		String testPath = session.getServletContext().getRealPath("resources");
		String realPath = session.getServletContext().getRealPath("resources/files");
		File filesTestPath = new File(testPath);
		File filesPath = new File(realPath);
		if(!filesTestPath.exists()) {filesTestPath.mkdir();}
		if(!filesPath.exists()) {filesPath.mkdir();}
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		
		if(fileList != null && userName != null) {
			// 프로필 사진과 이름 모두 변경할 때
			System.out.println("여기까지");
			for(MultipartFile mf : fileList) {
				String oriName = mf.getOriginalFilename();
				
				System.out.println("변경할 사진의 이름은 "+oriName);
				 
				// chatUser 테이블 userName과 img 변경
				int result = service.profileUpdateAll(oriName,userName,userId);
				// chatRoomJoin 테이블 userName 변경 
				service.roomJoinNameUpdate(userName,userId);
				// friend 테이블 userName 변경
				service.friendNameUpdateU(userName,userId); // 인자값이 user와 같을 때
				service.friendNameUpdateF(userName,userId); // 인자값이 friend와 같을 때
				
				if(result > 0) { 
					File targetLoc = new File(filesPath.getAbsoluteFile()+"/"+oriName);
					FileCopyUtils.copy(mf.getBytes(), targetLoc); // in에는 업로드하는 파일의 바이트, out에는 저장할 경로
					obj.addProperty("msg", "프로필 변경 성공!");
				}else {
					obj.addProperty("msg", "프로필 변경 실패!");
				}
			}
		}else if(fileList != null) {
			// 프로필 사진만 변경할 때
			for(MultipartFile mf : fileList) {
				String oriName = mf.getOriginalFilename();
				  
				int result = service.profileUpdatePic(oriName,userId);
		 
				if(result > 0) { 
					File targetLoc = new File(filesPath.getAbsoluteFile()+"/"+oriName);
					FileCopyUtils.copy(mf.getBytes(), targetLoc); // in에는 업로드하는 파일의 바이트, out에는 저장할 경로
					obj.addProperty("msg", "프로필 변경 성공!");
				}else {
					obj.addProperty("msg", "프로필 변경 실패!");
				}
			}
		}
		pw.append(obj.toString());
	}
	
	@RequestMapping("profileUpdateName")
	public void profileUpdateName(HttpServletResponse response,String userName) throws Exception {
		String userId = (String) session.getAttribute("userId");
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		
		// chatUser 테이블 userName 변경
		int result = service.profileUpdateName(userName,userId);
		// chatRoomJoin 테이블 userName 변경 
		service.roomJoinNameUpdate(userName,userId);
		// friend 테이블 userName 변경
		service.friendNameUpdateU(userName,userId); // 인자값이 user와 같을 때
		service.friendNameUpdateF(userName,userId); // 인자값이 friend와 같을 때
		 
		if(result > 0) { 
			obj.addProperty("msg", "프로필 변경 성공!");
		}else {
			obj.addProperty("msg", "프로필 변경 실패!");
		}
		pw.append(obj.toString());
	}
	
	@RequestMapping("profileView")
	public String profileView(HttpServletRequest request,Model model) {
		String userId = (String) session.getAttribute("userId");
		String joinMemberId = request.getParameter("joinUserId");
		
		FriendDTO friend = service.isFriendExist(userId,joinMemberId);
		UserDTO user = service.getUserInfo(userId);
		UserDTO friendInfo = service.getUserInfo(joinMemberId);
		
		model.addAttribute("friend",friend);
		model.addAttribute("user",user);		
		model.addAttribute("friendInfo",friendInfo);
		return "Chat/profileView";
	}
	
	// ----------------------------------------------------------------------- friend	
	@RequestMapping("searchFriend")
	public String searchFriend(String searchTxt,Model model) {
		String userId = (String) session.getAttribute("userId");
		List<UserDTO> list = service.searchFriend(searchTxt);
		// 모든 유저 정보
		List<UserDTO> allUser = service.getAllUserInfo();
		// 로그인한 유저 정보
		UserDTO user = service.getUserInfo(userId);
		
		model.addAttribute("userId", userId);
		model.addAttribute("user", user);
		model.addAttribute("list",list);
		model.addAttribute("allUser",allUser);
		
		return "Chat/searchFriend";
	}
	
	@RequestMapping("friendAdd")
	public void friendAdd(String friendId,String friendName,String userName,ServletResponse response) throws Exception{
		String userId = (String) session.getAttribute("userId");
		System.out.println("친구를 추가합니다! 나의 이름은 "+userName);
		FriendDTO result = service.isFriendExist(userId,friendId);
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		if(result!=null) {
			obj.addProperty("msg", "이미 친구인 사용자입니다.");
		}else {
			service.insertFriend(userId,userName,friendId,friendName);
			obj.addProperty("msg", "친구목록에 추가되었습니다.");
			obj.addProperty("userId", userId);
		}
		pw.append(obj.toString());
	}
	
	@RequestMapping("deleteFriend")
	public void deleteFriend(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String userId = request.getParameter("userId");
		String friendId = request.getParameter("friendId");
		System.out.println("요기는 controller userId는 "+userId+" friendId는 "+friendId);
		int result = service.deleteFriend(userId,friendId);
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		
		if(result>0) {
			obj.addProperty("msg", "친구가 삭제되었습니다.");
		}else {
			obj.addProperty("msg", "친구가 삭제되었습니다.");
		}
		pw.append(obj.toString());
	}

	// ----------------------------------------------------------------------- chat
	
	private final SimpMessagingTemplate template;

	@Autowired
	public ChatController(SimpMessagingTemplate template) {
		this.template = template;
	}

	// 채팅 메세지 전달
	@MessageMapping("chat/{roomNumber}") // 리퀘스트가 http를 통해 접속하는 경우 쓰임. 웹소켓 접속은 다른 어노테이션
	// @SendTo("/topic") // Proc 메서드 작업이 끝나면 response를 구독하는 사람한테만 메세지 보내는 설정 가능
	public void chat(MessageDTO dto) {
		int result = service.insertMessage(dto.getUserId(),dto.getMessage(),dto.getRoomNumber());
		
		if(result>0) {
			template.convertAndSend("/topic/chat/"+dto.getRoomNumber(),dto);
			template.convertAndSend("/topic/chatList",dto);
		}
	}
	
	@MessageMapping("chat/emoticon/{roomNumber}")
	public void chatEmoticon(MessageDTO dto) {
		int result = service.insertEmoticon(dto.getUserId(),dto.getOriName(),dto.getRoomNumber());
		
		if(result>0) {
			template.convertAndSend("/topic/chat/emoticon/"+dto.getRoomNumber(),dto);
			template.convertAndSend("/topic/chatListE",dto);
		}
	}
	
	@RequestMapping("upload")
	@ResponseBody
	public void upload(MultipartHttpServletRequest request,String roomNumber,String userId) throws Exception{
		List<MultipartFile> fileList = request.getFiles("file");
		
		String testPath = session.getServletContext().getRealPath("resources");
		String realPath = session.getServletContext().getRealPath("resources/files");
		File filesTestPath = new File(testPath);
		File filesPath = new File(realPath);
		if(!filesTestPath.exists()) {filesTestPath.mkdir();}
		if(!filesPath.exists()) {filesPath.mkdir();}
		
		for(MultipartFile mf : fileList) {
			String oriName = mf.getOriginalFilename();
			String uId = UUID.randomUUID().toString().replaceAll("-", ""); 
			String savedName = uId + "_" + oriName;
			  
			int result = service.insertChatFile(roomNumber,oriName,savedName,userId);
	 
			if(result > 0) { 
				File targetLoc = new File(filesPath.getAbsoluteFile()+"/"+savedName);
				FileCopyUtils.copy(mf.getBytes(), targetLoc); // in에는 업로드하는 파일의 바이트, out에는 저장할 경로
				
				MessageDTO dto = service.getFile(savedName);
				/*
				 * String time = dto.getUploadDate().toString(); dto.setUploadDate(time);
				 */
				
				String format = oriName.substring(oriName.lastIndexOf(".")+1);
				// System.out.println("업로드한 파일은 포맷은 "+format);
				if(format.contentEquals("gif")||format.contentEquals("jpg")||format.contentEquals("png")||format.contentEquals("bpm")||format.contentEquals("tif")||format.contentEquals("tiff")||format.contentEquals("raw")||format.contentEquals("rle")||format.contentEquals("dib")) {
					template.convertAndSend("/topic/img/"+roomNumber,dto);
					template.convertAndSend("/topic/chatListI",dto);
				}else {
					template.convertAndSend("/topic/file/"+roomNumber,dto); 
					template.convertAndSend("/topic/chatListF",dto);
				}
			}
		}
	}
	
	@RequestMapping("download")
	@ResponseBody
	public void download(HttpServletResponse resp,MessageDTO dto) throws Exception{		
		String filePath = session.getServletContext().getRealPath("resources/files");
		File targetFile = new File(filePath+"/"+dto.getSavedName()); 
		
		if(targetFile.exists() && targetFile.isFile()) {
			
			resp.setContentType("application/octet-stream; charset=utf8");
			// 파일의 내용 형식을 바꿔주는 것. 기본값은 text/html이다.
			// 여기서 보내려는건 파일의 내용이고 이것이 html로 랜더링 되면 안되니 꼭 타입을 바꿔줘야함
			resp.setContentLength((int)targetFile.length());
			String oriName = new String(dto.getOriName().getBytes("UTF-8"), "ISO-8859-1");
			dto.setOriName(oriName);
			resp.setHeader("Content-Disposition","attachment; filename=\""+dto.getOriName()+"\"");
			// 파일을 다운로드할때 하단에 뜨는 곳에 나오는 정보(헤더 정보가 나옴)
			
			FileInputStream fis = new FileInputStream(targetFile);
			// targetFile을 ram으로 불러오기 위한 통로
			ServletOutputStream sos = resp.getOutputStream();
			// resp가 데이터를 들고 클라이언트에게 가는 통로
			FileCopyUtils.copy(fis,sos);
			fis.close();
			
			sos.flush(); // fis의 데이터가 담긴 sos통로를 보내는 것
			sos.close();
			// fis에서 나오는 데이터를 sos에 복사해라
		}
	}
	
	// ----------------------------------------------------------------------- Room
	
	// 채팅방 생성
	@RequestMapping("roomCreate")
	public void roomCreate(HttpServletRequest request,Model model,ServletResponse response) throws Exception{
		String userId = (String) session.getAttribute("userId");
		UserDTO user = service.getUserInfo(userId);
		int auth = (int)(Math.random() * (99999 - 10000 + 1)) + 10000;
		String roomNumber = Integer.toString(auth);
		String roomName = request.getParameter("roomName");
		String oriFriendId = request.getParameter("friendId");
		String oriFriendName = request.getParameter("friendName");
		
		String[] friendId = oriFriendId.split(",");
		String[] friendName = oriFriendName.split(",");
		
		// 룸생성
		int roomCreateResult = service.insertRoom(roomNumber,roomName);
		// 방장 룸조인에 넣기
		int roomJoinResultU = service.joinRoom(roomNumber,roomName,userId,user.getUserName());
		// 룸조인에 유저들 넣기
		int roomJoinResultF = 0;
		for(int i=0;i<friendId.length;i++) {
			roomJoinResultF = service.joinRoom(roomNumber,roomName,friendId[i],friendName[i]);
		}
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		
		if(roomCreateResult>0 && roomJoinResultU>0 && roomJoinResultF>0) {
			obj.addProperty("msg", "방이 생성되었습니다.");
			
		}else {
			obj.addProperty("msg", "방을 생성하는데 실패했습니다.");
		}
		pw.append(obj.toString());
	}

	// 특정 채팅방 조회
	@RequestMapping("roomCheck")
	public String roomInfo(String userId,String friendId,String userName,String friendName,Model model) {
		RoomJoinDTO roomNumberCk = service.findRoomByName(userName, friendName);
		
		// 모든 유저 정보
		List<UserDTO> allUser = service.getAllUserInfo();
		
		if(roomNumberCk == null) {
			// 채팅방이 없을시 채팅방 생성
			int auth = (int)(Math.random() * (99999 - 10000 + 1)) + 10000;
			String roomNumber = Integer.toString(auth);
			// String roomName = userName+"와 "+friendName+"의 채팅방";
			String roomName = "";
			int result = service.insertRoom(roomNumber,roomName);
			List<MessageDTO> list = service.getChatting(roomNumber);
			List<RoomJoinDTO> joinList = service.getJoinRoomInfo(roomNumber);
			
			// roomjoin에 값 넣기
			service.joinRoom(roomNumber,roomName,userId,userName);
			service.joinRoom(roomNumber,roomName,friendId,friendName);
			
			model.addAttribute("list",list);
			model.addAttribute("userId", userId);
			model.addAttribute("roomNumber",roomNumber);
			model.addAttribute("joinList",joinList);
			model.addAttribute("allUser",allUser);
		}else {
			// 채팅방이 있을시
			List<MessageDTO> list = service.getChatting(roomNumberCk.getRoomNumber());
			List<RoomJoinDTO> joinList = service.getJoinRoomInfo(roomNumberCk.getRoomNumber());
			
			model.addAttribute("list",list);
			model.addAttribute("userId", userId);
			model.addAttribute("roomNumber",roomNumberCk.getRoomNumber());
			model.addAttribute("joinList",joinList);
			model.addAttribute("allUser",allUser);
		}
		
		return "Chat/chat";
	}
	
	@RequestMapping("invite")
	public void invite(HttpServletRequest request,HttpServletResponse response) throws Exception {
		String roomNumber = request.getParameter("roomNumber");
		String roomName = request.getParameter("roomName");
		String oriFriendId = request.getParameter("friendId");
		String oriFriendName = request.getParameter("friendName");
		
		String[] friendId = oriFriendId.split(",");
		String[] friendName = oriFriendName.split(",");
		
		int result = 0;
		for(int i=0;i<friendId.length;i++) {
			result = service.joinRoom(roomNumber,roomName,friendId[i],friendName[i]);
		}
		
		PrintWriter pw = response.getWriter();
		JsonObject obj = new JsonObject();
		
		if(result>0) {
			obj.addProperty("msg", "친구가 초대되었습니다.");
			
		}else {
			obj.addProperty("msg", "친구 초대에 실패했습니다.");
		}
		pw.append(obj.toString());
	}
	
	@RequestMapping("leave")
	public String leave(HttpServletRequest request,Model model) {
		String roomNumber = request.getParameter("roomNumber");
		String userId = request.getParameter("userId");
		int result = service.leave(roomNumber,userId);
		UserDTO user = service.getUserInfo(userId);
		
		// 모든 채팅방 목록 반환
		List<RoomJoinDTO> roomList = service.findAllRoomByUserId(userId);
		List<RoomJoinDTO> roomJoinList = service.findRoomJoin();
		
		model.addAttribute("roomList",roomList);
		model.addAttribute("roomJoinList",roomJoinList);
		model.addAttribute("user",user);
		return "Chat/chatList";
	}
	
	//----------------------------------------------------------------------------
	
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
