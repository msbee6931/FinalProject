package kh.spring.dto;

public class ChartDTO {
	private String category;
	private int count;
	
	public ChartDTO() {}
	public ChartDTO(String category, int count) {
		super();
		this.category = category;
		this.count = count;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	
}
