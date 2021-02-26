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
	public int insertstu(StudentsDTO dto) {
		return aDAO.insertstu(dto);
	}
	public int selectstu(int s_seq) {
		return aDAO.selectstu(s_seq);
	}
	public List<StudentsDTO> selectS_seq() {
		return aDAO.selectS_seq();
	}
	public int lastNum(int s_seq) {
		return aDAO.lastNum(s_seq);
	}
	public int lastPNum(int p_seq) {
		return aDAO.lastPNum(p_seq);
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
	public int insertPro(ProfessorDTO dto) {
		return aDAO.insertPro(dto);
	}
	public List<ProfessorDTO> selectP_seq(){
		return aDAO.selectP_seq();
	}
	public int selectpro(int p_seq) {
		return aDAO.selectpro(p_seq);
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
