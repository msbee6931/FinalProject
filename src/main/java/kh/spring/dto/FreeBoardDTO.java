package kh.spring.dto;

import java.sql.Date;

public class FreeBoardDTO {

	private int chk=0;
	private int seq;
	private String writer;
	private String title;
	private String contents;
	private int view_count;
	private String write_date;
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
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
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public int getView_count() {
		return view_count;
	}
	public void setView_count(int view_count) {
		this.view_count = view_count;
	}
	public String getWrite_date() {
		return write_date;
	}
	public void setWrite_date(String write_date) {
		this.write_date = write_date;
	}
	public FreeBoardDTO(int chk, int seq, String writer, String title, String contents, int view_count,
			String write_date) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.writer = writer;
		this.title = title;
		this.contents = contents;
		this.view_count = view_count;
		this.write_date = write_date;
	}
	public FreeBoardDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
}
