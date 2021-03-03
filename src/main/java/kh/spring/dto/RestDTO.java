package kh.spring.dto;

import java.sql.Date;

public class RestDTO {
	private String chk;
	private int seq;
	private int std_code;
	private String title;
	private String writeDate;
	
	public RestDTO() {}

	public RestDTO(String chk, int seq, int std_code, String title, String writeDate) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.std_code = std_code;
		this.title = title;
		this.writeDate = writeDate;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}

	
	
}
