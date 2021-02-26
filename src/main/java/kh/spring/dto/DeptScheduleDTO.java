package kh.spring.dto;

import java.sql.Date;

public class DeptScheduleDTO {
	private int seq;
	private int writer;
	private String name;
	private String title;
	private String sDate;
	private String eDate;
	private String code;
	private String content;
	private String writeDate;
	
	public DeptScheduleDTO() {}

	public DeptScheduleDTO(int seq, int writer, String name, String title, String sDate, String eDate, String code,
			String content, String writeDate) {
		super();
		this.seq = seq;
		this.writer = writer;
		this.name = name;
		this.title = title;
		this.sDate = sDate;
		this.eDate = eDate;
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

	public int getWriter() {
		return writer;
	}

	public void setWriter(int writer) {
		this.writer = writer;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
