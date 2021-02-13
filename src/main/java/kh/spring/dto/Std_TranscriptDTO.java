package kh.spring.dto;

public class Std_TranscriptDTO {

	private int scode;
	private String semester;
	private String classname;
	private String classpart;
	private String classpoint;
	private String grade;
	public int getScode() {
		return scode;
	}
	public void setScode(int scode) {
		this.scode = scode;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getClassname() {
		return classname;
	}
	public void setClassname(String classname) {
		this.classname = classname;
	}
	public String getClasspart() {
		return classpart;
	}
	public void setClasspart(String classpart) {
		this.classpart = classpart;
	}
	public String getClasspoint() {
		return classpoint;
	}
	public void setClasspoint(String classpoint) {
		this.classpoint = classpoint;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public Std_TranscriptDTO(int scode, String semester, String classname, String classpart, String classpoint,
			String grade) {
		super();
		this.scode = scode;
		this.semester = semester;
		this.classname = classname;
		this.classpart = classpart;
		this.classpoint = classpoint;
		this.grade = grade;
	}
	public Std_TranscriptDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
