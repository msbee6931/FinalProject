package kh.spring.dto;

public class IndScheduleDTO {
	String id;
	int writer;
	String sdate;
	String edate;
	String title;
	String content;
	String type;
	
	public IndScheduleDTO() {}

	public IndScheduleDTO(String id, int writer, String sdate, String edate, String title, String content,
			String type) {
		super();
		this.id = id;
		this.writer = writer;
		this.sdate = sdate;
		this.edate = edate;
		this.title = title;
		this.content = content;
		this.type = type;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getWriter() {
		return writer;
	}

	public void setWriter(int writer) {
		this.writer = writer;
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
