package kh.spring.dto;

public class PostMessageDTO {

	private int chk=0;
	private int seq;
	private int receiver;
	private int sender;
	private String contents;
	private String confirm;
	private String reply;
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public int getReceiver() {
		return receiver;
	}
	public void setReceiver(int receiver) {
		this.receiver = receiver;
	}
	public int getSender() {
		return sender;
	}
	public void setSender(int sender) {
		this.sender = sender;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getConfirm() {
		return confirm;
	}
	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}
	public String getReply() {
		return reply;
	}
	public void setReply(String reply) {
		this.reply = reply;
	}
	public PostMessageDTO(int chk, int seq, int receiver, int sender, String contents, String confirm, String reply) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.receiver = receiver;
		this.sender = sender;
		this.contents = contents;
		this.confirm = confirm;
		this.reply = reply;
	}
	public PostMessageDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
}
