package kh.spring.dto;

import java.sql.Date;

public class ColScheduleDTO {
	private int seq;
	private String title;
	private String sDate;
	private String eDate;
	private String contents;
	private Date writeDate;
	
	public ColScheduleDTO() {}
	public ColScheduleDTO(int seq, String title, String sDate, String eDate, String contents, Date writeDate) {
		super();
		this.seq = seq;
		this.title = title;
		this.sDate = sDate;
		this.eDate = eDate;
		this.contents = contents;
		this.writeDate = writeDate;
	}
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
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
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public Date getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(Date writeDate) {
		this.writeDate = writeDate;
	}

}
