package kh.spring.dao;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ClassDTO;
import kh.spring.dto.ClassScheduleDTO;
import kh.spring.dto.StdTimeTableDTO;
import kh.spring.dto.StudentClassDTO;

@Repository
public class ClassDAO {

	@Autowired
	private SqlSession session;

	public int classInsert(ClassDTO dto) {
		return session.insert("Class.classInsert",dto);
	}
	public int classScheduleInsert(ClassScheduleDTO dto) {
		return session.insert("Class.classScheduleInsert",dto);
	}
	public int classUpdate(ClassDTO dto) {
		return session.update("Class.classUpdate",dto);
	}
	public int classScheduleUpdate(ClassScheduleDTO dto) {
		return session.update("Class.classScheduleUpdate",dto);
	}
	public List<ClassDTO> proMyClassList(int proCode){
		return session.selectList("Class.proMyClassList",proCode);
	}
	public List<ClassDTO> classReqList(){
		return session.selectList("Class.classReqList");
	}
	public List<ClassDTO> classListProCode(int proCode,String startTime,String endTime){
		Map<String, Object> param = new HashMap<>();
		param.put("proCode", proCode);
		param.put("startTime", startTime);
		param.put("endTime", endTime);
		return session.selectList("Class.classListProCode",param);
	}
	public List<ClassDTO> classList(){
		return session.selectList("Class.classList");
	}
	public int classDel(List<ClassDTO> list) {
		return session.delete("Class.classDel",list);
	}
	public int scheduleDel(List<ClassDTO> list) {
		return session.delete("Class.scheduleDel",list);
	}
	public int reqUpdAtoDR(List<ClassDTO> list) {
		return session.update("Class.reqUpdAtoDR",list);
	}
	public int reqUpdARtoA(List<ClassDTO> list) {
		return session.update("Class.reqUpdARtoA",list);
	}
	public int reqUpdDRtoDC(List<ClassDTO> list) {
		return session.update("Class.reqUpdDRtoDC",list);
	}
	public ClassDTO classListSeq(int classSeq){
		return session.selectOne("Class.classListSeq", classSeq);
	}
	public ClassScheduleDTO classScheduleSeq(int classSeq){
		return session.selectOne("Class.classScheduleSeq", classSeq);
	}
	public List<ClassDTO> classReqListA(){
		return session.selectList("Class.classReqListA");
	}
	public int rejectMsgInsert(List<ClassDTO> list,String rejectMsg) {
		Map<String, Object> param = new HashMap<>();
		param.put("list", list);
		param.put("rejectMsg", rejectMsg);
		return session.update("Class.rejectMsgInsert",param);
	}
	public List<ClassDTO> classListYear(String startTime, String endTime){
		Map<String,String> param = new HashMap<>();
		param.put("startTime", startTime);
		param.put("endTime",endTime);
		return session.selectList("Class.classListYear",param);
	}
	public int stdTimeTableInsert(List<StdTimeTableDTO> list) {
		return session.insert("Class.stdTimeTableInsert",list);
	}
	public int stdTimeTableUpdate(StdTimeTableDTO dto) {
		return session.update("Class.stdTimeTableUpdate",dto);
	}
	public int stdTimeTableDelete(StdTimeTableDTO dto) {
		return session.delete("Class.stdTimeTableDelete",dto);
	}
	public int stdTimeTablesDelete(List<StdTimeTableDTO>list) {
		return session.delete("Class.stdTimeTablesDelete",list);
	}
	public List<StdTimeTableDTO> stdTimeTableList(StdTimeTableDTO dto,String startTime,String endTime){
		Map<String,Object> param = new HashMap<>();
		param.put("startTime", startTime);
		param.put("endTime",endTime);
		param.put("dto", dto);
		return session.selectList("Class.stdTimeTableList",param);
	}
	public int stdClassInsert(StudentClassDTO dto) {
		return session.insert("Class.stdClassInsert",dto);
	}
	public int stdClassesInsert(List<StudentClassDTO> list) {
		return session.insert("Class.stdClassesInsert",list);
	}
	public int stdClassUpdate(StudentClassDTO dto) {
		return session.update("Class.stdClassUpdate",dto);
	}
	public int stdClassCount(StudentClassDTO dto) {
		return session.selectOne("Class.stdClassCount",dto);
	}
	public int stdBasketCount(StudentClassDTO dto) {
		return session.selectOne("Class.stdBasketCount",dto);
	}
	public int stdClassDelete(StdTimeTableDTO dto) {
		return session.delete("Class.stdClassDelete",dto);
	}
	public int limitUpd(ClassDTO dto) {
		return session.update("Class.limitUpd",dto);
	}
	public int limitBasketUpd(ClassDTO dto) {
		return session.update("Class.limitBasketUpd",dto);
	}
	public List<StudentClassDTO> myClassList(StudentClassDTO dto,String startTime,String endTime){
		Map<String,Object> param = new HashMap<>();
		param.put("startTime", startTime);
		param.put("endTime",endTime);
		param.put("dto", dto);
		return session.selectList("Class.myClassList",param);
	}public List<StudentClassDTO> myBasketList(StudentClassDTO dto,String startTime,String endTime){
		Map<String,Object> param = new HashMap<>();
		param.put("startTime", startTime);
		param.put("endTime",endTime);
		param.put("dto", dto);
		return session.selectList("Class.myBasketList",param);
	}
	public List<ClassDTO>myClassSeq(List<StudentClassDTO>list){
		return session.selectList("Class.myClassSeq",list);
	}
	public int stdClassesDelete(List<StudentClassDTO> list) {
		return session.delete("Class.stdClassesDelete",list);
	}
	public int stdClassSeqDel(List<StudentClassDTO> list) {
		return session.delete("Class.stdClassSeqDel",list);
	}
	public int stdTimeTableSeqDel(List<StudentClassDTO> list) {
		return session.delete("Class.stdTimeTableSeqDel",list);
	}
	public List<ClassDTO> proClassList(int proCode, String startTime, String endTime){
		Map<String, Object> param = new HashMap<>();
		param.put("proCode", proCode);
		param.put("startTime", startTime);
		param.put("endTime",endTime);
		return session.selectList("Class.proClassList",param);
	}
	public List<StudentClassDTO> stdListSeq(StudentClassDTO dto){
		return session.selectList("Class.stdListSeq",dto);
	}
	public int evalUpd(ClassDTO dto) {
		return session.update("Class.evalUpd",dto);
	}
}
