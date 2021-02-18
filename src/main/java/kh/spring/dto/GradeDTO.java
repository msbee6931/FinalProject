package kh.spring.dto;

public class GradeDTO {
	private int sCode;
	private String sName;
	private int classCode;
	private int attend;
	private int mid;
	private int otest;
	private int task ;
	private int fin ;
	private int total ;
	private String rank;
	private String grade ;
	
	public GradeDTO() {}

	public GradeDTO(int sCode, String sName, int classCode, int attend, int mid, int otest, int task, int fin,
			int total, String rank, String grade) {
		this.sCode = sCode;
		this.sName = sName;
		this.classCode = classCode;
		this.attend = attend;
		this.mid = mid;
		this.otest = otest;
		this.task = task;
		this.fin = fin;
		this.total = total;
		this.rank = rank;
		this.grade = grade;
	}

	public int getsCode() {
		return sCode;
	}

	public void setsCode(int sCode) {
		this.sCode = sCode;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public int getClassCode() {
		return classCode;
	}

	public void setClassCode(int classCode) {
		this.classCode = classCode;
	}

	public int getAttend() {
		return attend;
	}

	public void setAttend(int attend) {
		this.attend = attend;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public int getOtest() {
		return otest;
	}

	public void setOtest(int otest) {
		this.otest = otest;
	}

	public int getTask() {
		return task;
	}

	public void setTask(int task) {
		this.task = task;
	}

	public int getFin() {
		return fin;
	}

	public void setFin(int fin) {
		this.fin = fin;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	
	
}
