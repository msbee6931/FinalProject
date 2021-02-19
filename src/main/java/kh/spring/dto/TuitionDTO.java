package kh.spring.dto;

import java.sql.Date;

public class TuitionDTO {
	private int seq;
	private int std_code;
	private int t_enter;
	private int t_class;
	private int t_std;
	private int t_grd;
	private int t_ore;
	private int tSum;
	private String t_date;
	
	public TuitionDTO() {}

	public TuitionDTO(int seq, int std_code, int t_enter, int t_class, int t_std, int t_grd, int t_ore, int tSum,
			String t_date) {
		super();
		this.seq = seq;
		this.std_code = std_code;
		this.t_enter = t_enter;
		this.t_class = t_class;
		this.t_std = t_std;
		this.t_grd = t_grd;
		this.t_ore = t_ore;
		this.tSum = tSum;
		this.t_date = t_date;
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

	public int getT_enter() {
		return t_enter;
	}

	public void setT_enter(int t_enter) {
		this.t_enter = t_enter;
	}

	public int getT_class() {
		return t_class;
	}

	public void setT_class(int t_class) {
		this.t_class = t_class;
	}

	public int getT_std() {
		return t_std;
	}

	public void setT_std(int t_std) {
		this.t_std = t_std;
	}

	public int getT_grd() {
		return t_grd;
	}

	public void setT_grd(int t_grd) {
		this.t_grd = t_grd;
	}

	public int getT_ore() {
		return t_ore;
	}

	public void setT_ore(int t_ore) {
		this.t_ore = t_ore;
	}

	public int gettSum() {
		return tSum;
	}

	public void settSum(int tSum) {
		this.tSum = tSum;
	}

	public String getT_date() {
		return t_date;
	}

	public void setT_date(String t_date) {
		this.t_date = t_date;
	}

	
		
	
}
