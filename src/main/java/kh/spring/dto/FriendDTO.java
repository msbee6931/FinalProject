package kh.spring.dto;

public class FriendDTO {
	private String userId;
	private String userName;
	private String friendId;
	private String friendName;
	
	public FriendDTO() {}
	public FriendDTO(String userId, String userName, String friendId, String friendName) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.friendId = friendId;
		this.friendName = friendName;
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
	public String getFriendId() {
		return friendId;
	}
	public void setFriendId(String friendId) {
		this.friendId = friendId;
	}
	public String getFriendName() {
		return friendName;
	}
	public void setFriendName(String friendName) {
		this.friendName = friendName;
	}
}
