package kh.spring.dto;

public class ProfessorDTO {
	private int chk;
	private int p_seq;
	private String name;
	private int age;
	private String email;
	private String contact;
	private String address;
	private String lecture;
	private String pw;
		
	
	public ProfessorDTO() {
		super();
	}
	public ProfessorDTO(int chk, int p_seq, String name, int age, String email, String contact, String address,
			String lecture, String pw) {
		super();
		this.chk = chk;
		this.p_seq = p_seq;
		this.name = name;
		this.age = age;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.lecture = lecture;
		this.pw = pw;
	}
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
	}
	public int getP_seq() {
		return p_seq;
	}
	public void setP_seq(int p_seq) {
		this.p_seq = p_seq;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getLecture() {
		return lecture;
	}
	public void setLecture(String lecture) {
		this.lecture = lecture;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	
	
	
	
	
}
