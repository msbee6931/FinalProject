package kh.spring.dto;

public class NoticeDTO {
	private int n_seq;
	private String title;
	private String writedate;
	private String contents;
	
	
	public NoticeDTO() {
		super();
	}
	public NoticeDTO(int n_seq, String title, String writedate, String contents) {
		super();
		this.n_seq = n_seq;
		this.title = title;
		this.writedate = writedate;
		this.contents = contents;
	}
	public int getN_seq() {
		return n_seq;
	}
	public void setN_seq(int n_seq) {
		this.n_seq = n_seq;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getWritedate() {
		return writedate;
	}
	public void setWritedate(String writedate) {
		this.writedate = writedate;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	
	
	

	
}
