package kh.spring.dto;

public class UserDTO {
	private String userId;
	private String userName;
	private String img;
	
	public UserDTO() {}
	public UserDTO(String userId, String userName, String img) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.img = img;
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
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	
}
