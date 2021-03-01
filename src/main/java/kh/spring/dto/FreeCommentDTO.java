package kh.spring.dto;

public class FreeCommentDTO {

	private int rev_seq;
	private int main_seq;
	private String rev_contents;
	private String rev_writer;
	private String rev_write_date;
	private int good;
	private int bad;
	private int writer_seq;
	private String blank1;
	private String blank2;
	private String blank3;
	private String blank4;
	public int getRev_seq() {
		return rev_seq;
	}
	public void setRev_seq(int rev_seq) {
		this.rev_seq = rev_seq;
	}
	public int getMain_seq() {
		return main_seq;
	}
	public void setMain_seq(int main_seq) {
		this.main_seq = main_seq;
	}
	public String getRev_contents() {
		return rev_contents;
	}
	public void setRev_contents(String rev_contents) {
		this.rev_contents = rev_contents;
	}
	public String getRev_writer() {
		return rev_writer;
	}
	public void setRev_writer(String rev_writer) {
		this.rev_writer = rev_writer;
	}
	public String getRev_write_date() {
		return rev_write_date;
	}
	public void setRev_write_date(String rev_write_date) {
		this.rev_write_date = rev_write_date;
	}
	public int getGood() {
		return good;
	}
	public void setGood(int good) {
		this.good = good;
	}
	public int getBad() {
		return bad;
	}
	public void setBad(int bad) {
		this.bad = bad;
	}
	public int getWriter_seq() {
		return writer_seq;
	}
	public void setWriter_seq(int writer_seq) {
		this.writer_seq = writer_seq;
	}
	public String getBlank1() {
		return blank1;
	}
	public void setBlank1(String blank1) {
		this.blank1 = blank1;
	}
	public String getBlank2() {
		return blank2;
	}
	public void setBlank2(String blank2) {
		this.blank2 = blank2;
	}
	public String getBlank3() {
		return blank3;
	}
	public void setBlank3(String blank3) {
		this.blank3 = blank3;
	}
	public String getBlank4() {
		return blank4;
	}
	public void setBlank4(String blank4) {
		this.blank4 = blank4;
	}
	public FreeCommentDTO(int rev_seq, int main_seq, String rev_contents, String rev_writer, String rev_write_date,
			int good, int bad, int writer_seq, String blank1, String blank2, String blank3, String blank4) {
		super();
		this.rev_seq = rev_seq;
		this.main_seq = main_seq;
		this.rev_contents = rev_contents;
		this.rev_writer = rev_writer;
		this.rev_write_date = rev_write_date;
		this.good = good;
		this.bad = bad;
		this.writer_seq = writer_seq;
		this.blank1 = blank1;
		this.blank2 = blank2;
		this.blank3 = blank3;
		this.blank4 = blank4;
	}
	public FreeCommentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
