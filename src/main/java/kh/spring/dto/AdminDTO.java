package kh.spring.dto;

public class AdminDTO {
	private int a_seq;
	private String pw;
	private String regist;
	private String test;
	public AdminDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminDTO(int a_seq, String pw, String regist, String test) {
		super();
		this.a_seq = a_seq;
		this.pw = pw;
		this.regist = regist;
		this.test = test;
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
	public String getRegist() {
		return regist;
	}
	public void setRegist(String regist) {
		this.regist = regist;
	}
	public String getTest() {
		return test;
	}
	public void setTest(String test) {
		this.test = test;
	}
	
	
	
}
