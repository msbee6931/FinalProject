package kh.spring.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ClassDAO;
import kh.spring.dto.ClassDTO;
import kh.spring.dto.ClassScheduleDTO;
import kh.spring.dto.StdTimeTableDTO;
import kh.spring.dto.StudentClassDTO;

@Service
public class ClassService {
	@Autowired
	private ClassDAO dao;
	
	public int classInsert(ClassDTO dto) {
		return dao.classInsert(dto);
	}
	public int classScheduleInsert(ClassScheduleDTO dto) {
		return dao.classScheduleInsert(dto);
	}
	public int classUpdate(ClassDTO dto) {
		return dao.classUpdate(dto);
	}
	public int classScheduleUpdate(ClassScheduleDTO dto) {
		return dao.classScheduleUpdate(dto);
	}
	public List<ClassDTO> classReqList(){
		return dao.classReqList();
	}
	public List<ClassDTO> classListProCode(String proCode,String startTime,String endTime){
		return dao.classListProCode(proCode,startTime,endTime);
	}
	public List<ClassDTO> classList(){
		return dao.classList();
	}
	public int classDel(List<ClassDTO> list) {
		return dao.classDel(list);
	}
	public int scheduleDel(List<ClassDTO> list) {
		return dao.scheduleDel(list);
	}
	public int reqUpdAtoDR(List<ClassDTO> list) {
		return dao.reqUpdAtoDR(list);
	}
	public int reqUpdARtoA(List<ClassDTO> list) {
		return dao.reqUpdARtoA(list);
	}
	public int reqUpdDRtoDC(List<ClassDTO> list) {
		return dao.reqUpdDRtoDC(list);
	}
	public ClassDTO classListSeq(int classSeq){
		return dao.classListSeq(classSeq);
	}
	public ClassScheduleDTO classScheduleSeq(int classSeq){
		return dao.classScheduleSeq(classSeq);
	}
	public List<ClassDTO> classReqListA(){
		return dao.classReqListA();
	}
	public int rejectMsgInsert(List<ClassDTO> list,String rejectMsg) {
		return dao.rejectMsgInsert(list,rejectMsg);
	}
	public List<ClassDTO> classListYear(String startTime, String endTime){
		return dao.classListYear(startTime, endTime);
	}
	public int stdTimeTableInsert(List<StdTimeTableDTO>list) {
		return dao.stdTimeTableInsert(list);
	}
	public int stdTimeTableUpdate(StdTimeTableDTO dto) {
		return dao.stdTimeTableUpdate(dto);
	}
	public int stdTimeTableDelete(StdTimeTableDTO dto) {
		return dao.stdTimeTableDelete(dto);
	}
	public int stdTimeTablesDelete(List<StdTimeTableDTO> list) {
		return dao.stdTimeTablesDelete(list);
	}
	public List<StdTimeTableDTO> stdTimeTableList(StdTimeTableDTO dto,String startTime, String endTime){
		return dao.stdTimeTableList(dto,startTime,endTime);
	}
	public int stdClassInsert(StudentClassDTO dto) {
		return dao.stdClassInsert(dto);
	}
	public int stdClassesInsert(List<StudentClassDTO>list) {
		return dao.stdClassesInsert(list);
	}
	public int stdClassUpdate(StudentClassDTO dto) {
		return dao.stdClassUpdate(dto);
	}
	public int stdClassCount(StudentClassDTO dto) {
		return dao.stdClassCount(dto);
	}
	public int stdBasketCount(StudentClassDTO dto) {
		return dao.stdBasketCount(dto);
	}
	public int stdClassDelete(StdTimeTableDTO dto) {
		return dao.stdClassDelete(dto);
	}
	public int stdClassesDelete(List<StudentClassDTO> list) {
		return dao.stdClassesDelete(list);
	}
	public int limitUpd(ClassDTO dto) {
		return dao.limitUpd(dto);
	}
	public int limitBasketUpd(ClassDTO dto) {
		return dao.limitBasketUpd(dto);
	}
	public List<StudentClassDTO>myClassList(StudentClassDTO dto,String startTime,String endTime){
		return dao.myClassList(dto,startTime,endTime);
	}
	public List<StudentClassDTO>myBasketList(StudentClassDTO dto,String startTime,String endTime){
		return dao.myBasketList(dto,startTime,endTime);
	}
	public List<ClassDTO>myClassSeq(List<StudentClassDTO>list){
		return dao.myClassSeq(list);
	}
	public int stdClassSeqDel(List<StudentClassDTO> list) {
		return dao.stdClassSeqDel(list);	
	}
	public int stdTimeTableSeqDel(List<StudentClassDTO>list) {
		return dao.stdTimeTableSeqDel(list);
	}
	public List<ClassDTO> proClassList(String proCode,String startTime,String endTime){
		return dao.proClassList(proCode,startTime,endTime);
	}
	public List<StudentClassDTO> stdListSeq(StudentClassDTO dto){
		return dao.stdListSeq(dto);
	}

}
