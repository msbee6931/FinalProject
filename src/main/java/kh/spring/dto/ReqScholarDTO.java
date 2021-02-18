package kh.spring.dto;

import java.sql.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class ReqScholarDTO {
	private String chk;
	private int seq;
	private int std_code;
	private String title;
	private String contents;
	private String writeDate;
	
	public ReqScholarDTO() {}

	public ReqScholarDTO(String chk, int seq, int std_code, String title, String contents, String writeDate) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.std_code = std_code;
		this.title = title;
		this.contents = contents;
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

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	public String getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}



	
	
}
