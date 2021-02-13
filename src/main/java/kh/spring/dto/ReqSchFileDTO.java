package kh.spring.dto;

public class ReqSchFileDTO {
	private String chk;
	private int seq;
	private int parentSeq;
	private String fileName;
	private String savedFileName;
	private long fileSize;
	
	public ReqSchFileDTO() {}

	public ReqSchFileDTO(String chk, int seq, int parentSeq, String fileName, String savedFileName, long fileSize) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.parentSeq = parentSeq;
		this.fileName = fileName;
		this.savedFileName = savedFileName;
		this.fileSize = fileSize;
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

	public int getParentSeq() {
		return parentSeq;
	}

	public void setParentSeq(int parentSeq) {
		this.parentSeq = parentSeq;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getSavedFileName() {
		return savedFileName;
	}

	public void setSavedFileName(String savedFileName) {
		this.savedFileName = savedFileName;
	}

	public long getFileSize() {
		return fileSize;
	}

	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	
	
}

