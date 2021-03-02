package kh.spring.dto;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MessageDTO {
	private int seq;
	private String userId;
	private String roomNumber;
	private String message;
	private String oriName;
	private String savedName;
	private String uploadDate;
	private String format;
	
	public MessageDTO() {}
	public MessageDTO(int seq, String userId, String roomNumber, String message, String oriName, String savedName,
			String uploadDate, String format) {
		super();
		this.seq = seq;
		this.userId = userId;
		this.roomNumber = roomNumber;
		this.message = message;
		this.oriName = oriName;
		this.savedName = savedName;
		this.uploadDate = uploadDate;
		this.format = format;
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
	public String getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getOriName() {
		return oriName;
	}
	public void setOriName(String oriName) {
		this.oriName = oriName;
	}
	public String getSavedName() {
		return savedName;
	}
	public void setSavedName(String savedName) {
		this.savedName = savedName;
	}

	public String getUploadDate() { 
		return uploadDate; 
	}
	
	/*
	 * public long getUploadDate() throws Exception { SimpleDateFormat transFormat =
	 * new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); Date to =
	 * transFormat.parse(this.uploadDate); long time = to.getTime();
	 * 
	 * return time; }
	 */
	public void setUploadDate(String uploadDate) {
		this.uploadDate = uploadDate;
	}
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
}
