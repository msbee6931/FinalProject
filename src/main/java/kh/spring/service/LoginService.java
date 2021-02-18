package kh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.LoginDAO;
import kh.spring.dto.AdminDTO;
import kh.spring.dto.LoginInfoDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

@Service
public class LoginService {
	
	@Autowired
	private LoginDAO lDAO;
	
	public int loginStu(StudentsDTO sdto) {
		return lDAO.loginStu(sdto);
	}
	public int loginPro(ProfessorDTO pdto) {
		return lDAO.loginPro(pdto);
	}
	public int loginAdm(AdminDTO adto) {
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
	
	public int keepLogin(LoginInfoDTO dto) {
		return lDAO.keepLogin(dto);
	}
	public LoginInfoDTO selectLoginInfo(LoginInfoDTO dto) {
		return lDAO.selectLoginInfo(dto);
	}
	public int updLoginInfo(LoginInfoDTO dto) {
		return lDAO.updLoginInfo(dto);
	}
}
