package kh.spring.dto;

public class AttendDTO {

	private int classCode;
	private int sCode;
	private String sName;
	private String attendDay;
	private String attendState;
	private String absenceReason;
	public AttendDTO() {}
	public AttendDTO(int classCode, int sCode, String sName, String attendDay, String attendState,
			String absenceReason) {
		this.classCode = classCode;
		this.sCode = sCode;
		this.sName = sName;
		this.attendDay = attendDay;
		this.attendState = attendState;
		this.absenceReason = absenceReason;
	}
	public int getClassCode() {
		return classCode;
	}
	public void setClassCode(int classCode) {
		this.classCode = classCode;
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
	public String getAttendDay() {
		return attendDay;
	}
	public void setAttendDay(String attendDay) {
		this.attendDay = attendDay;
	}
	public String getAttendState() {
		return attendState;
	}
	public void setAttendState(String attendState) {
		this.attendState = attendState;
	}
	public String getAbsenceReason() {
		return absenceReason;
	}
	public void setAbsenceReason(String absenceReason) {
		this.absenceReason = absenceReason;
	}
	
}
