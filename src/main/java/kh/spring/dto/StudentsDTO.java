package kh.spring.dto;

public class StudentsDTO {

	
	private int chk;
	private int s_seq;
	private String pw;
	private String name;
	private int age;
	private String email;
	private String contact;
	private String address;
	private String scholarship;
	private String rest;
	private String grade;
	private String birth;
	private String gender;
	private String deptcode;
	private String colcode;
	
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
	}
	public int getS_seq() {
		return s_seq;
	}
	public void setS_seq(int s_seq) {
		this.s_seq = s_seq;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
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
	public String getScholarship() {
		return scholarship;
	}
	public void setScholarship(String scholarship) {
		this.scholarship = scholarship;
	}
	public String getRest() {
		return rest;
	}
	public void setRest(String rest) {
		this.rest = rest;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDeptcode() {
		return deptcode;
	}
	public void setDeptcode(String deptcode) {
		this.deptcode = deptcode;
	}
	public String getColcode() {
		return colcode;
	}
	public void setColcode(String colcode) {
		this.colcode = colcode;
	}
	public StudentsDTO(int chk, int s_seq, String pw, String name, int age, String email, String contact,
			String address, String scholarship, String rest, String grade, String birth, String gender, String deptcode,
			String colcode) {
		super();
		this.chk = chk;
		this.s_seq = s_seq;
		this.pw = pw;
		this.name = name;
		this.age = age;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.scholarship = scholarship;
		this.rest = rest;
		this.grade = grade;
		this.birth = birth;
		this.gender = gender;
		this.deptcode = deptcode;
		this.colcode = colcode;
	}
	public StudentsDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
}
