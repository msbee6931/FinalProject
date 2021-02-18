package kh.spring.dto;

public class RoomJoinDTO {
	private String roomNumber;
	private String roomName;
	private String userId;
	private String userName;
	
	public RoomJoinDTO() {}
	public RoomJoinDTO(String roomNumber, String roomName, String userId, String userName) {
		super();
		this.roomNumber = roomNumber;
		this.roomName = roomName;
		this.userId = userId;
		this.userName = userName;
	}
	
	public String getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
}
