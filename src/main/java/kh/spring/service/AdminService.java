package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.AdminDAO;
import kh.spring.dto.FacultyDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

@Service
public class AdminService {
	@Autowired
	private AdminDAO aDAO;
	//students
	
	public List<StudentsDTO> getliststu(){
		return aDAO.getliststu();
	}
	public int deletestu(List<StudentsDTO> list) {
		return aDAO.deletestu(list);
	}
	public int updatestu(List<StudentsDTO> list) {
		return aDAO.updatestu(list);
	}
	public int insertstu(List<StudentsDTO> list) {
		return aDAO.insertstu(list);
	}
	//professor
	public List<ProfessorDTO> getlistPro(){
		return aDAO.getlistPro();
	}
	public int updatePro(List<ProfessorDTO> list) {
		return aDAO.updatePro(list);
	}
	public int deletePro(List<ProfessorDTO> list) {
		return aDAO.deletePro(list);
	}
	public int insertPro(List<ProfessorDTO> list) {
		return aDAO.insertPro(list);
	}
	//faculty
	public List<FacultyDTO> getlistFac(){
		return aDAO.getlistFac();
	}
	public int deleteFac(List<FacultyDTO> list) {
		return aDAO.deleteFac(list);
	}
	public int updateFac(List<FacultyDTO> list) {
		return aDAO.updateFac(list);
	}
	public int insertFac(List<FacultyDTO> list) {
		return aDAO.insertFac(list);
	}

}
