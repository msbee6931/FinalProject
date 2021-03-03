package kh.spring.dto;

import java.sql.Date;

public class ScholarshipDTO {
	private String chk;
	private int seq;
	private int std_code;
	private String std_grade;
	private String type;
	private int s_kind;
	private int s_rec;
	private int s_smt;
	private int s_spt;
	private int s_etc;
	private int sSum;
	private String s_date;
	
	public ScholarshipDTO() {}

	public ScholarshipDTO(String chk, int seq, int std_code, String std_grade, String type, int s_kind, int s_rec,
			int s_smt, int s_spt, int s_etc, int sSum, String s_date) {
		super();
		this.chk = chk;
		this.seq = seq;
		this.std_code = std_code;
		this.std_grade = std_grade;
		this.type = type;
		this.s_kind = s_kind;
		this.s_rec = s_rec;
		this.s_smt = s_smt;
		this.s_spt = s_spt;
		this.s_etc = s_etc;
		this.sSum = sSum;
		this.s_date = s_date;
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

	public String getStd_grade() {
		return std_grade;
	}

	public void setStd_grade(String std_grade) {
		this.std_grade = std_grade;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getS_kind() {
		return s_kind;
	}

	public void setS_kind(int s_kind) {
		this.s_kind = s_kind;
	}

	public int getS_rec() {
		return s_rec;
	}

	public void setS_rec(int s_rec) {
		this.s_rec = s_rec;
	}

	public int getS_smt() {
		return s_smt;
	}

	public void setS_smt(int s_smt) {
		this.s_smt = s_smt;
	}

	public int getS_spt() {
		return s_spt;
	}

	public void setS_spt(int s_spt) {
		this.s_spt = s_spt;
	}

	public int getS_etc() {
		return s_etc;
	}

	public void setS_etc(int s_etc) {
		this.s_etc = s_etc;
	}

	public int getsSum() {
		return sSum;
	}

	public void setsSum(int sSum) {
		this.sSum = sSum;
	}

	public String getS_date() {
		return s_date;
	}

	public void setS_date(String s_date) {
		this.s_date = s_date;
	}

	
	
}
