package kh.spring.dto;

public class StudentsDTO {

   
   private int chk;
   private int s_seq;
   private String pw;
   private String name;
   private String secNumber;
   private String email;
   private String contact;
   private String address;
   private String scholarship;
   private String rest;
   private String grade;
   private String gender;
   private String deptCode;
   private String colCode;
   private String colGrade;
   public int getChk() {
      return chk;
   }
   public void setChk(int chk) {
      this.chk = chk;
   }
   public int getS_seq() {
      return s_seq;
   }
   public void setS_seq(int s_seq) {
      this.s_seq = s_seq;
   }
   public String getPw() {
      return pw;
   }
   public void setPw(String pw) {
      this.pw = pw;
   }
   public String getName() {
      return name;
   }
   public void setName(String name) {
      this.name = name;
   }
   public String getSecNumber() {
      return secNumber;
   }
   public void setSecNumber(String secNumber) {
      this.secNumber = secNumber;
   }
   public String getEmail() {
      return email;
   }
   public void setEmail(String email) {
      this.email = email;
   }
   public String getContact() {
      return contact;
   }
   public void setContact(String contact) {
      this.contact = contact;
   }
   public String getAddress() {
      return address;
   }
   public void setAddress(String address) {
      this.address = address;
   }
   public String getScholarship() {
      return scholarship;
   }
   public void setScholarship(String scholarship) {
      this.scholarship = scholarship;
   }
   public String getRest() {
      return rest;
   }
   public void setRest(String rest) {
      this.rest = rest;
   }
   public String getGrade() {
      return grade;
   }
   public void setGrade(String grade) {
      this.grade = grade;
   }
   public String getGender() {
      return gender;
   }
   public void setGender(String gender) {
      this.gender = gender;
   }
   public String getDeptCode() {
      return deptCode;
   }
   public void setDeptCode(String deptCode) {
      this.deptCode = deptCode;
   }
   public String getColCode() {
      return colCode;
   }
   public void setColCode(String colCode) {
      this.colCode = colCode;
   }
   public String getColGrade() {
      return colGrade;
   }
   public void setColGrade(String colGrade) {
      this.colGrade = colGrade;
   }
   public StudentsDTO(int chk, int s_seq, String pw, String name, String secNumber, String email, String contact,
         String address, String scholarship, String rest, String grade, String gender, String deptCode,
         String colCode, String colGrade) {
      super();
      this.chk = chk;
      this.s_seq = s_seq;
      this.pw = pw;
      this.name = name;
      this.secNumber = secNumber;
      this.email = email;
      this.contact = contact;
      this.address = address;
      this.scholarship = scholarship;
      this.rest = rest;
      this.grade = grade;
      this.gender = gender;
      this.deptCode = deptCode;
      this.colCode = colCode;
      this.colGrade = colGrade;
   }
   public StudentsDTO() {
      super();
   }
   
   
   
}