package kh.spring.dto;

public class DeptScheduleDTO {
	private int seq;
	private int id;
	private String sdate;
	private String edate;
	private String title;
	private String content;
	private String type;
	
	public DeptScheduleDTO() {}

	public DeptScheduleDTO(int seq, int id, String sdate, String edate, String title, String content, String type) {
		super();
		this.seq = seq;
		this.id = id;
		this.sdate = sdate;
		this.edate = edate;
		this.title = title;
		this.content = content;
		this.type = type;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
	
	
	
}
