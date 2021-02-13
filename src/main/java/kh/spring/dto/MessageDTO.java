package kh.spring.dto;

public class MessageDTO {
	private int seq;
	private String userId;
	private String message;
	private String roomNumber;
	
	public MessageDTO() {}
	public MessageDTO(int seq, String userId, String message, String roomNumber) {
		super();
		this.seq = seq;
		this.userId = userId;
		this.message = message;
		this.roomNumber = roomNumber;
	}
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}
}
