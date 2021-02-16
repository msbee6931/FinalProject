package kh.spring.dto;

import java.sql.Date;

public class DeptScheduleDTO {
	private int seq;
	private int id;
	private String writer;
	private String title;
	private String sDate;
	private String eDate;
	private String schDate;
	private String schDay;
	private String code;
	private String content;
	private String writeDate;
	
	public DeptScheduleDTO() {}

	public DeptScheduleDTO(int seq, int id, String writer, String title, String sDate, String eDate, String schDate,
			String schDay, String code, String content, String writeDate) {
		super();
		this.seq = seq;
		this.id = id;
		this.writer = writer;
		this.title = title;
		this.sDate = sDate;
		this.eDate = eDate;
		this.schDate = schDate;
		this.schDay = schDay;
		this.code = code;
		this.content = content;
		this.writeDate = writeDate;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
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

	public String getSchDate() {
		return schDate;
	}

	public void setSchDate(String schDate) {
		this.schDate = schDate;
	}

	public String getSchDay() {
		return schDay;
	}

	public void setSchDay(String schDay) {
		this.schDay = schDay;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}


	
	
	
}
