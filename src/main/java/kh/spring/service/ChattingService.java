package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ChattingDAO;
import kh.spring.dto.FriendDTO;
import kh.spring.dto.MessageDTO;
import kh.spring.dto.RoomDTO;
import kh.spring.dto.UserDTO;

@Service
public class ChattingService {
	@Autowired
	private ChattingDAO dao;
	
	// User
	public UserDTO getUserInfo(String userId) {
		return  dao.getUserInfo(userId);
	}
	
	public List<FriendDTO> getFriendsList(String userId){
		return dao.getFriendsList(userId);
	}
	
	// Chat
	public int insertMessage(String userId, String message, String roomNumber) {
		return  dao.insertMessage(userId,message,roomNumber);
	}
	
	public List<MessageDTO> getChatting(String roomNumber) {
		return dao.getChatting(roomNumber);
	}

	
	// Room
	public List<RoomDTO> findAllRoomByUserId(String userId) {
		return dao.findAllRoomByUserId(userId);
	}
	
	public int insertRoom(String roomNumber,String roomName) {
		return dao.insertRoom(roomNumber,roomName);
	}
	
	public RoomDTO findRoomByRoomNumber(String roomNumber) {
		return  dao.findRoomByRoomNumber(roomNumber);
	}
	
	public RoomDTO findRoomById(String userId,String friendId) {
		return  dao.findRoomById(userId,friendId);
	}
}
