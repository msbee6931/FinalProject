package kh.spring.dto;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class UserStateDTO {
	private String userId;
	private String roomNumber;
	private String outTime;
		
	public UserStateDTO() {}
	public UserStateDTO(String userId, String roomNumber, String outTime) {
		super();
		this.userId = userId;
		this.roomNumber = roomNumber;
		this.outTime = outTime;
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
	public long getOutTime() throws Exception {
		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date to = transFormat.parse(outTime);
		long time = to.getTime();
		
		return time;
	}
	public void setOutTime(String outTime) {
		this.outTime = outTime;
	}
	
}
