package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.StudentsDAO;
import kh.spring.dto.ChartDTO;
import kh.spring.dto.StudentClassDTO;
import kh.spring.dto.StudentsDTO;

@Service
public class StudentsService {

	@Autowired
	private StudentsDAO dao;
	
	public StudentsDTO selectStudentsByS_Seq(String s_seq) {
		return dao.selectStudentsByS_Seq(s_seq);
	}
	public StudentsDTO selectOneStd(int sCode) {
		return dao.selectOneStd(sCode);
	}
	
	public int updateStdAbs(int sCode) {
		return dao.updateStdAbs(sCode);
	}
	
	public int updateStdRest(int sCode) {
		return dao.updateStdRest(sCode);
	}
	public List<ChartDTO> selectColCount() {
		return dao.selectColCount();
	}
	public List<ChartDTO> selectDeptCount() {
		return dao.selectDeptCount();
	}
	public List<ChartDTO> selectGenderCount() {
		return dao.selectGenderCount();
	}	
	public List<StudentsDTO> selectAllStd() {
		return dao.selectAllStd();
	}
	public List<StudentsDTO> deptStudentList(StudentsDTO dto){
		return dao.deptStudentList(dto);
	}
	public List<StudentsDTO> classStudents(List<StudentClassDTO> list){
		return dao.classStudents(list);
	}
	
	
	
}
