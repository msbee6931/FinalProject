package kh.spring.dto;

import java.sql.Date;

public class AbsenceDTO {
	private String chk;
	private int seq;
	private int std_code;
	private String sDate;
	private String eDate;
	private String code;
	private Date writeDate;
	private String checkValue;
	
	public AbsenceDTO() {}

	public AbsenceDTO(String chk, int seq, int std_code, String sDate, String eDate, String code, Date writeDate,
			String checkValue) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.std_code = std_code;
		this.sDate = sDate;
		this.eDate = eDate;
		this.code = code;
		this.writeDate = writeDate;
		this.checkValue = checkValue;
	}

	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public int getStd_code() {
		return std_code;
	}

	public void setStd_code(int std_code) {
		this.std_code = std_code;
	}

	public String getsDate() {
		return sDate;
	}

	public void setsDate(String sDate) {
		this.sDate = sDate;
	}

	public String geteDate() {
		return eDate;
	}

	public void seteDate(String eDate) {
		this.eDate = eDate;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Date getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(Date writeDate) {
		this.writeDate = writeDate;
	}

	public String getCheckValue() {
		return checkValue;
	}

	public void setCheckValue(String checkValue) {
		this.checkValue = checkValue;
	}

	
}
