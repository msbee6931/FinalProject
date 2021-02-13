package kh.spring.dto;

import java.sql.Date;

public class ClassDTO {
	private String chk;
	private String classPart;
	private String className;
	private int classSeq;
	private String classPoint;
	private String passFail;
	private String proCode;
	private String proName;
	private String dept;
	private String classTime;
	private String classRoom;
	private String limit;
	private String basketLimit;
	private String grade;
	private String classGoal;
	private String classMethod;
	private String classEvaluation;
	private String classReferences;
	private String reqState;
	private String rejectMsg;
	private String reg_date;
	public ClassDTO() {}
	public ClassDTO(String chk, String classPart, String className, int classSeq, String classPoint, String passFail,
			String proCode, String proName, String dept, String classTime, String classRoom, String limit,
			String basketLimit, String grade, String classGoal, String classMethod, String classEvaluation,
			String classReferences, String reqState, String rejectMsg, String reg_date) {
		this.chk = chk;
		this.classPart = classPart;
		this.className = className;
		this.classSeq = classSeq;
		this.classPoint = classPoint;
		this.passFail = passFail;
		this.proCode = proCode;
		this.proName = proName;
		this.dept = dept;
		this.classTime = classTime;
		this.classRoom = classRoom;
		this.limit = limit;
		this.basketLimit = basketLimit;
		this.grade = grade;
		this.classGoal = classGoal;
		this.classMethod = classMethod;
		this.classEvaluation = classEvaluation;
		this.classReferences = classReferences;
		this.reqState = reqState;
		this.rejectMsg = rejectMsg;
		this.reg_date = reg_date;
	}
	public String getChk() {
		return chk;
	}
	public void setChk(String chk) {
		this.chk = chk;
	}
	public String getClassPart() {
		return classPart;
	}
	public void setClassPart(String classPart) {
		this.classPart = classPart;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public int getClassSeq() {
		return classSeq;
	}
	public void setClassSeq(int classSeq) {
		this.classSeq = classSeq;
	}
	public String getClassPoint() {
		return classPoint;
	}
	public void setClassPoint(String classPoint) {
		this.classPoint = classPoint;
	}
	public String getPassFail() {
		return passFail;
	}
	public void setPassFail(String passFail) {
		this.passFail = passFail;
	}
	public String getProCode() {
		return proCode;
	}
	public void setProCode(String proCode) {
		this.proCode = proCode;
	}
	public String getProName() {
		return proName;
	}
	public void setProName(String proName) {
		this.proName = proName;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getClassTime() {
		return classTime;
	}
	public void setClassTime(String classTime) {
		this.classTime = classTime;
	}
	public String getClassRoom() {
		return classRoom;
	}
	public void setClassRoom(String classRoom) {
		this.classRoom = classRoom;
	}
	public String getLimit() {
		return limit;
	}
	public void setLimit(String limit) {
		this.limit = limit;
	}
	public String getBasketLimit() {
		return basketLimit;
	}
	public void setBasketLimit(String basketLimit) {
		this.basketLimit = basketLimit;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getClassGoal() {
		return classGoal;
	}
	public void setClassGoal(String classGoal) {
		this.classGoal = classGoal;
	}
	public String getClassMethod() {
		return classMethod;
	}
	public void setClassMethod(String classMethod) {
		this.classMethod = classMethod;
	}
	public String getClassEvaluation() {
		return classEvaluation;
	}
	public void setClassEvaluation(String classEvaluation) {
		this.classEvaluation = classEvaluation;
	}
	public String getClassReferences() {
		return classReferences;
	}
	public void setClassReferences(String classReferences) {
		this.classReferences = classReferences;
	}
	public String getReqState() {
		return reqState;
	}
	public void setReqState(String reqState) {
		this.reqState = reqState;
	}
	public String getRejectMsg() {
		return rejectMsg;
	}
	public void setRejectMsg(String rejectMsg) {
		this.rejectMsg = rejectMsg;
	}
	public String getReg_date() {
		return reg_date;
	}
	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}
	
	
}
