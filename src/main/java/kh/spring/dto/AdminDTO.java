package kh.spring.dto;

public class AdminDTO {
	private int a_seq;
	private String pw;
	
	
	public AdminDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminDTO(int a_seq, String pw) {
		super();
		this.a_seq = a_seq;
		this.pw = pw;
	}
	public int getA_seq() {
		return a_seq;
	}
	public void setA_seq(int a_seq) {
		this.a_seq = a_seq;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	
	
}
