package kh.spring.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.AdminDTO;
import kh.spring.dto.LoginInfoDTO;
import kh.spring.dto.ProfessorDTO;
import kh.spring.dto.StudentsDTO;

@Repository
public class LoginDAO {
	
	@Autowired
	private SqlSession db;
	
	public int loginStu(StudentsDTO sdto) {
		return db.selectOne("Login.loginStu", sdto);
	}
	public int loginPro(ProfessorDTO pdto) {
		return db.selectOne("Login.loginPro", pdto);
	}
	public int loginAdm(AdminDTO adto) {
		return db.selectOne("Login.loginAdm", adto);
	}
	
	public StudentsDTO selectStd(int seq) {
		return db.selectOne("Login.selectStudents",seq);
	}
	public ProfessorDTO selectPro(int seq) {
		return db.selectOne("Login.selectProfessor", seq);
	}
	public AdminDTO selectAdm(int seq) {
		return db.selectOne("Login.selectAdmin", seq);
	}
	public int keepLogin(LoginInfoDTO dto) {
		return db.update("Login.keepLogin",dto);
	}
	public LoginInfoDTO selectLoginInfo(LoginInfoDTO dto) {
		return db.selectOne("Login.selectLoginInfo",dto);
	}
	public int updLoginInfo(LoginInfoDTO dto) {
		return db.delete("Login.updLoginInfo",dto);
	}

}
