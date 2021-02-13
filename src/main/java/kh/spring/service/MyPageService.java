package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.MyPageDAO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

@Service
public class MyPageService {
	
	@Autowired
	private MyPageDAO mDAO;
	
	public List<StudentsDTO> myInfoStu(int id){
		return mDAO.myInfoStu(id);
	}
	public int updateMyInfoStu(List<StudentsDTO> list) {
		return mDAO.updateMyInfoStu(list);
	}
	public List<ProfessorDTO> myInfoPro(int id){
		return mDAO.myInfoPro(id);
	}
	public int updateMyInfoPro(List<ProfessorDTO> list) {
		return mDAO.updateMyInfoPro(list);
	}

}
