package kh.spring.dto;

import java.sql.Date;

public class RestDTO {
	private int seq;
	private int std_code;
	private String title;
	private Date writeDate;
	
	public RestDTO() {}

	public RestDTO(int seq, int std_code, String title, Date writeDate) {
		super();
		this.seq = seq;
		this.std_code = std_code;
		this.title = title;
		this.writeDate = writeDate;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(Date writeDate) {
		this.writeDate = writeDate;
	}

	
	
	
}
