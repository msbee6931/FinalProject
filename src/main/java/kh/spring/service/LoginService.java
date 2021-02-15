package kh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.LoginDAO;
import kh.spring.dto.AdminDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

@Service
public class LoginService {
	
	@Autowired
	private LoginDAO lDAO;
	
	public StudentsDTO loginStu(StudentsDTO sdto) {
		return lDAO.loginStu(sdto);
	}
	public ProfessorDTO loginPro(ProfessorDTO pdto) {
		return lDAO.loginPro(pdto);
	}
	public AdminDTO loginAdm(AdminDTO adto) {
		return lDAO.loginAdm(adto);
	}


	public StudentsDTO selectStd(int seq) {
		return lDAO.selectStd(seq);
	}
	public ProfessorDTO selectPro(int seq) {
		return lDAO.selectPro(seq);
	}
	public AdminDTO selectAdm(int seq) {
		return lDAO.selectAdm(seq);
	}

}
