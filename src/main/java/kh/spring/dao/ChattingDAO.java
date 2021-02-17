package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.FriendDTO;
import kh.spring.dto.MessageDTO;
import kh.spring.dto.RoomDTO;
import kh.spring.dto.RoomJoinDTO;
import kh.spring.dto.UserDTO;

@Repository
public class ChattingDAO {
	@Autowired
	private SqlSession session;
	
	/* User */
	public UserDTO getUserInfo(String userId) {
		return  session.selectOne("chatting.getUserInfo", userId);
	}
	
	public List<FriendDTO> getFriendsList(String userId){
		return session.selectList("chatting.getFriendsList", userId);
	}
	
	public List<UserDTO> getAllUserInfo() {
		return session.selectList("chatting.getAllUserInfo");
	}
	
	// 프로필 정보 변경
	public int profileUpdateAll(String oriName,String userName, String userId) {
		// 프로필 사진과 이름 모두 변경
		Map<String,String> param = new HashMap<>();
		param.put("oriName", oriName);
		param.put("userName", userName);
		param.put("userId", userId);
		return session.update("chatting.profileUpdateAll",param);
	}
		
	public int profileUpdatePic(String oriName, String userId) {
		// 프로필 사진만 변경
		Map<String,String> param = new HashMap<>();
		param.put("oriName", oriName);
		param.put("userId", userId);
		return session.update("chatting.profileUpdatePic",param);
	}
		
	public int profileUpdateName(String userName, String userId) {
		// 이름만 변경
		Map<String,String> param = new HashMap<>();
		param.put("userName", userName);
		param.put("userId", userId);
		return session.update("chatting.profileUpdateName",param);
	}
	
	// chatRoomJoin 테이블 userName 변경 
	public int roomJoinNameUpdate(String userName, String userId) {
		Map<String,String> param = new HashMap<>();
		param.put("userName", userName);
		param.put("userId", userId);
		return session.update("chatting.roomJoinNameUpdate",param);
	}
	
	// friend 테이블 userName 변경
	public int friendNameUpdateU(String userName, String userId) {
		Map<String,String> param = new HashMap<>();
		param.put("userName", userName);
		param.put("userId", userId);
		return session.update("chatting.friendNameUpdateU",param);
	}
	
	public int friendNameUpdateF(String userName, String userId) {
		Map<String,String> param = new HashMap<>();
		param.put("userName", userName);
		param.put("userId", userId);
		return session.update("chatting.friendNameUpdateF",param);
	}
	
	/* Friend */
	public List<UserDTO> searchFriend(String searchTxt) {
		return session.selectList("chatting.searchFriend", searchTxt);
	}
	
	public FriendDTO isFriendExist(String userId, String friendId) {
		Map<String,String> param = new HashMap<>();
		param.put("userId", userId);
		param.put("friendId", friendId);
		return session.selectOne("chatting.isFriendExist", param);
	}

	public int insertFriend(String userId, String userName, String friendId, String friendName) {
		Map<String,String> param = new HashMap<>();
		param.put("userId", userId);
		param.put("userName", userName);
		param.put("friendId", friendId);
		param.put("friendName", friendName);
		return session.insert("chatting.insertFriend",param);
	}
	
	public List<FriendDTO> getInviteList(List<RoomJoinDTO> joinList,String userId) {
		Map<String,Object> param = new HashMap<>();
		param.put("userId", userId);
		param.put("joinList", joinList);
		return session.selectList("chatting.getInviteList", param);
	}

	/* Chat */
	public int insertMessage(String userId, String message, String roomNumber) {
		Map<String,String> param = new HashMap<>();
		param.put("userId", userId);
		param.put("message", message);
		param.put("roomNumber", roomNumber);
		return session.insert("chatting.insertMessage", param);
	}
	
	public int insertEmoticon(String userId, String oriName, String roomNumber) {
		Map<String,String> param = new HashMap<>();
		param.put("userId", userId);
		param.put("oriName", oriName);
		param.put("roomNumber", roomNumber);
		return session.insert("chatting.insertEmoticon", param);
	}
	
	public List<MessageDTO> getChatting(String roomNumber) {
		return session.selectList("chatting.getChatting",roomNumber);
	}
	
	public int insertChatFile(String roomNumber, String oriName, String savedName,String userId) {
		Map<String,String> param = new HashMap<>();
		param.put("userId", userId);
		param.put("roomNumber", roomNumber);
		param.put("oriName", oriName);
		param.put("savedName", savedName);
		return session.insert("chatting.insertChatFile",param);
	}
	

	public MessageDTO getFile(String savedName) {
		return session.selectOne("chatting.getFile", savedName);
	}
	
	/* Room */
	public List<RoomDTO> findAllRoomByUserId(String userId) {
		return session.selectList("chatting.findAllRoomByUserId",userId);
	}
	
	public int insertRoom(String roomNumber,String roomName) {
		Map<String,String> param = new HashMap<>();
		param.put("roomNumber", roomNumber);
		param.put("roomName", roomName);
		return session.insert("chatting.insertRoom",param);
	}
	
	public RoomDTO findRoomByRoomNumber(String roomNumber) {
		return session.selectOne("chatting.findRoomByRoomNumber", roomNumber);
	}

	public RoomJoinDTO findRoomByName(String userName,String friendName) {
		Map<String,String> param = new HashMap<>();
		param.put("userName", userName);
		param.put("friendName", friendName);		
		return session.selectOne("chatting.findRoomByName",param);
	}
	
	public int joinRoom(String roomNumber, String roomName, String userId, String userName) {
		Map<String,String> param = new HashMap<>();
		param.put("roomNumber", roomNumber);
		param.put("roomName", roomName);
		param.put("userId", userId);
		param.put("userName", userName);
		return session.insert("chatting.joinRoom",param);
	}

	public List<RoomJoinDTO> findRoomJoin() {
		return session.selectList("chatting.findRoomJoin");
	}
	
	public List<RoomJoinDTO> getJoinRoomInfo(String roomNumber) {
		return session.selectList("chatting.getJoinRoomInfo", roomNumber);
	}
	
	public int leave(String roomNumber,String userId) {
		Map<String,String> param = new HashMap<>();
		param.put("roomNumber", roomNumber);
		param.put("userId", userId);
		return session.delete("chatting.leave",param);
	}
}
