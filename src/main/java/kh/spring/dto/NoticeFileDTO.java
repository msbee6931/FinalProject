package kh.spring.dto;

public class NoticeFileDTO {
	private int chk;
	private int f_seq;
	private int parentSeq;
	private String fileName;
	private String savedFileName;
	private long fileSize;
	
	
	public NoticeFileDTO() {
		super();
	}
	public NoticeFileDTO(int chk, int f_seq, int parentSeq, String fileName, String savedFileName, long fileSize) {
		super();
		this.chk = chk;
		this.f_seq = f_seq;
		this.parentSeq = parentSeq;
		this.fileName = fileName;
		this.savedFileName = savedFileName;
		this.fileSize = fileSize;
	}
	public int getChk() {
		return chk;
	}
	public void setChk(int chk) {
		this.chk = chk;
	}
	public int getF_seq() {
		return f_seq;
	}
	public void setF_seq(int f_seq) {
		this.f_seq = f_seq;
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
