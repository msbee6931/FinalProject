package kh.spring.dto;

public class NoticeDTO {
	private int chk;
	private int n_seq;
	private String title;
	private String writedate;
	private String contents;
	private String deptcode;
	private int view_count;
	
	
	public NoticeDTO() {
		super();
	}
	public NoticeDTO(int chk, int n_seq, String title, String writedate, String contents, String deptcode,
			int view_count) {
		super();
		this.chk = chk;
		this.n_seq = n_seq;
		this.title = title;
		this.writedate = writedate;
		this.contents = contents;
		this.deptcode = deptcode;
		this.view_count = view_count;
	}
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
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
	public String getDeptcode() {
		return deptcode;
	}
	public void setDeptcode(String deptcode) {
		this.deptcode = deptcode;
	}
	public int getView_count() {
		return view_count;
	}
	public void setView_count(int view_count) {
		this.view_count = view_count;
	}
	
	
	
	
	
}
