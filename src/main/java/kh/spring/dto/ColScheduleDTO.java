package kh.spring.dto;

import java.sql.Date;

public class ColScheduleDTO {

	private int seq;
	private String title;
	private String sdate;
	private String edate;
	private String contents;
	private String writedate;
	
	public ColScheduleDTO() {}
	public ColScheduleDTO(int seq, String title, String sdate, String edate, String contents, String writedate) {
		super();
		this.seq = seq;
		this.title = title;
		this.sdate = sdate;
		this.edate = edate;
		this.contents = contents;
		this.writedate = writedate;
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
	public String getSdate() {
		return sdate;
	}
	public void setSdate(String sdate) {
		this.sdate = sdate;
	}
	public String getEdate() {
		return edate;
	}
	public void setEdate(String edate) {
		this.edate = edate;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getWritedate() {
		return writedate;
	}
	public void setWritedate(String writedate) {
		this.writedate = writedate;
	}

}