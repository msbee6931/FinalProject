package kh.spring.dto;

public class ProfessorDTO {
	private int chk;
	private int p_seq;
	private String name;
	private String secNumber;
	private String email;
	private String contact;
	private String address;
	private String pw;
	private String colCode;
	private String deptCode;
	private String gender;
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
	public String getSecNumber() {
		return secNumber;
	}
	public void setSecNumber(String secNumber) {
		this.secNumber = secNumber;
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
	public String getColCode() {
		return colCode;
	}
	public void setColCode(String colCode) {
		this.colCode = colCode;
	}
	public String getDeptCode() {
		return deptCode;
	}
	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public ProfessorDTO(int chk, int p_seq, String name, String secNumber, String email, String contact, String address,
			String pw, String colCode, String deptCode, String gender) {
		super();
		this.chk = chk;
		this.p_seq = p_seq;
		this.name = name;
		this.secNumber = secNumber;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.pw = pw;
		this.colCode = colCode;
		this.deptCode = deptCode;
		this.gender = gender;
	}
	public ProfessorDTO() {
		super();
	}
	
	
	
	
	
}
