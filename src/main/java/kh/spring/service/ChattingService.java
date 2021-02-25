package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ChattingDAO;
import kh.spring.dto.FacultyDTO;
import kh.spring.dto.FriendDTO;
import kh.spring.dto.MessageDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.RoomDTO;
import kh.spring.dto.RoomJoinDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.dto.UserDTO;

@Service
public class ChattingService {
	@Autowired
	private ChattingDAO dao;
	
	/* User */
	public UserDTO getUserInfo(String userId) {
		return  dao.getUserInfo(userId);
	}
	
	public List<FriendDTO> getFriendsList(String userId){
		return dao.getFriendsList(userId);
	}
	
	public List<UserDTO> getAllUserInfo() {
		return dao.getAllUserInfo();
	}
	
	// 프로필 정보 변경
	public int profileUpdateAll(String oriName,String userName, String userId) {
		// 프로필 사진과 이름 모두 변경
		return dao.profileUpdateAll(oriName,userName,userId);
	}
	
	public int profileUpdatePic(String oriName, String userId) {
		// 프로필 사진만 변경
		return dao.profileUpdatePic(oriName,userId);
	}
	
	public int profileUpdateName(String userName, String userId) {
		// 이름만 변경
		return dao.profileUpdateName(userName,userId);
	}
	
	// chatRoomJoin 테이블 userName 변경 
	public int roomJoinNameUpdate(String userName, String userId) {
		return dao.roomJoinNameUpdate(userName,userId);
	}
	
	// friend 테이블 userName 변경
	public int friendNameUpdateU(String userName, String userId) {
		return dao.friendNameUpdateU(userName,userId);
	}
	
	public int friendNameUpdateF(String userName, String userId) {
		return dao.friendNameUpdateF(userName,userId);
	}
	
	public int insertChatUser(String userId,String userName) {
		return dao.insertChatUser(userId,userName);
	}
	
	// 채팅 아이디 삭제(학생)
	public int deleteChatUserStu(List<StudentsDTO> list) {
		return dao.deleteChatUserStu(list);
	}
	
	// 채팅 아이디 삭제(교수)
	public int deleteChatUserPro(List<ProfessorDTO> list) {
		return dao.deleteChatUserPro(list);
	}
	
	// 채팅 아이디 삭제(교직원)
	public int deleteChatUserFac(List<FacultyDTO> list) {
		return dao.deleteChatUserFac(list);
	}
	
	/* Friend */
	public List<UserDTO> searchFriend(String searchTxt) {
		return dao.searchFriend(searchTxt);
	}
	

	public FriendDTO isFriendExist(String userId, String friendId) {
		return dao.isFriendExist(userId,friendId);
	}

	public int insertFriend(String userId, String userName, String friendId, String friendName) {
		return dao.insertFriend(userId,userName,friendId,friendName);
	}
	
	public List<FriendDTO> getInviteList(List<RoomJoinDTO> joinList,String userId) {
		return dao.getInviteList(joinList,userId);
	}
	
	// 친구 삭제하기
	public int deleteFriend(String userId,String friendId) {
		return dao.deleteFriend(userId,friendId);
	}
	
	/* Chat */
	public int insertMessage(String userId, String message, String roomNumber) {
		return  dao.insertMessage(userId,message,roomNumber);
	}
	
	public int insertEmoticon(String userId, String oriName, String roomNumber) {
		return  dao.insertEmoticon(userId,oriName,roomNumber);
	}
	
	public List<MessageDTO> getChatting(String roomNumber) {
		return dao.getChatting(roomNumber);
	}
	
	public List<MessageDTO> getAllChatting() {
		return dao.getAllChatting();
	}
	
	public int insertChatFile(String roomNumber, String oriName, String savedName, String userId) {
		return dao.insertChatFile(roomNumber,oriName,savedName,userId);
	}

	public MessageDTO getFile(String savedName) {
		return dao.getFile(savedName);
	}
	
	/* Room */
	public List<RoomDTO> findAllRoomByUserId(String userId) {
		return dao.findAllRoomByUserId(userId);
	}
	
	public int insertRoom(String roomNumber,String roomName) {
		return dao.insertRoom(roomNumber,roomName);
	}
	
	public RoomDTO findRoomByRoomNumber(String roomNumber) {
		return  dao.findRoomByRoomNumber(roomNumber);
	}
	
	public RoomJoinDTO findRoomByName(String userName,String friendName) {
		return  dao.findRoomByName(userName,friendName);
	}

	public int joinRoom(String roomNumber, String roomName, String userId, String userName) {
		return dao.joinRoom(roomNumber,roomName,userId,userName);
	}

	public List<RoomJoinDTO> findRoomJoin() {
		return dao.findRoomJoin();
	}
	
	public List<RoomJoinDTO> getJoinRoomInfo(String roomNumber) {
		return dao.getJoinRoomInfo(roomNumber);
	}
	
	public int leave(String roomNumber,String userId) {
		return dao.leave(roomNumber,userId);
	}

}
