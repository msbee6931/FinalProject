package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ProfessorDTO;

@Repository
public class ProfessorDAO {

	@Autowired
	private SqlSession session;
	
	public List<ProfessorDTO> selectAll(){
		return session.selectList("Professor.selectAll");
	}
	public ProfessorDTO professorInfo(ProfessorDTO dto) {
		return session.selectOne("Professor.professorInfo",dto);
	}
}
