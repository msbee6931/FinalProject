package kh.spring.dto;

public class FacultyDTO {
	private int chk;
	private int f_seq;
	private String name;
	private int age;
	private String email;
	private String contact;
	private String address;
	private String pw;
	
	
	public FacultyDTO() {
		super();
	}
	public FacultyDTO(int chk, int f_seq, String name, int age, String email, String contact, String address,
			String pw) {
		super();
		this.chk = chk;
		this.f_seq = f_seq;
		this.name = name;
		this.age = age;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.pw = pw;
	}
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
	}
	public int getF_seq() {
		return f_seq;
	}
	public void setF_seq(int f_seq) {
		this.f_seq = f_seq;
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
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	
	

}
