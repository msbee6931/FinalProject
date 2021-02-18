package kh.spring.dto;

import java.sql.Date;

public class LoginInfoDTO {

	private int userId;
	private String sessionId;
	private Date sessionLimit;
	private String userType;
	public LoginInfoDTO() {}
	public LoginInfoDTO(int userId, String sessionId, Date sessionLimit, String userType) {
		this.userId = userId;
		this.sessionId = sessionId;
		this.sessionLimit = sessionLimit;
		this.userType = userType;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public Date getSessionLimit() {
		return sessionLimit;
	}
	public void setSessionLimit(Date sessionLimit) {
		this.sessionLimit = sessionLimit;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	
	
	
}
