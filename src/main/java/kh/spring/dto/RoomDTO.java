package kh.spring.dto;

public class RoomDTO {
	private String roomNumber;
	private String roomName;

	public RoomDTO() {}
	public RoomDTO(String roomNumber, String roomName) {
		super();
		this.roomNumber = roomNumber;
		this.roomName = roomName;
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
}
