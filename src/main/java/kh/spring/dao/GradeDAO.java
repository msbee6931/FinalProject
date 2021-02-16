package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.GradeDTO;

@Repository
public class GradeDAO {

	@Autowired
	private SqlSession session;
	
	public GradeDTO stdGrade(GradeDTO dto) {
		return session.selectOne("Grade.stdGrade",dto);
	}
	public int stdGradeInsert(GradeDTO dto) {
		return session.update("Grade.stdGradeInsert",dto);
	}
	public List<GradeDTO> stdGradeList(GradeDTO dto){
		return session.selectList("Grade.stdGradeList",dto);
	}
	public int stdGradeUpd(GradeDTO dto) {
		return session.update("Grade.stdGradeUpd",dto);
	}
	public List<GradeDTO> stdGradeOneList(int stdCode){
		return session.selectList("Grade.stdGradeOneList", stdCode);
	}
}
