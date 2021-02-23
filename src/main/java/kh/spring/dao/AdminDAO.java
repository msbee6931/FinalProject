package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.FacultyDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

@Repository
public class AdminDAO {
	@Autowired
	private SqlSession db;
	
	//students
	public List<StudentsDTO> getliststu(){
		return db.selectList("Admin.studentlist");
	}
	public int deletestu(List<StudentsDTO> list) {
		return db.delete("Admin.deletestu", list);
	}
	public int updatestu(List<StudentsDTO> list) {
		return db.update("Admin.updatestu", list);
	}
	public int insertstu(StudentsDTO dto) {
		return db.insert("Admin.insertstu", dto);
	}
	//professor
	public List<ProfessorDTO> getlistPro(){
		return db.selectList("Admin.professorList");
	}
	public int updatePro(List<ProfessorDTO> list) {
		return db.update("Admin.updatePro", list);
	}
	public int deletePro(List<ProfessorDTO> list) {
		return db.delete("Admin.deletePro", list);
	}
	public int insertPro(List<ProfessorDTO> list) {
		return db.insert("Admin.insertPro",list);
	}
	//faculty
	public List<FacultyDTO> getlistFac(){
		return db.selectList("Admin.facultylist");
	}
	public int deleteFac(List<FacultyDTO> list) {
		return db.delete("Admin.deleteFac", list);
	}
	public int updateFac(List<FacultyDTO> list) {
		return db.update("Admin.updateFac", list);
	}
	public int insertFac(List<FacultyDTO> list) {
		return db.insert("Admin.insertFac", list);
	}

}
