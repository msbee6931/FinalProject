package kh.spring.dto;

public class Reference_FileDTO {
	private int chk=0;
	private int seq;
	private int parentSeq;
	private String fileName;
	private String savedFileName;
	private long fileSize;
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
	public Reference_FileDTO(int chk, int seq, int parentSeq, String fileName, String savedFileName, long fileSize) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.parentSeq = parentSeq;
		this.fileName = fileName;
		this.savedFileName = savedFileName;
		this.fileSize = fileSize;
	}
	public Reference_FileDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
