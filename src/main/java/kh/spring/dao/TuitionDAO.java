package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.TuitionDTO;

@Repository
public class TuitionDAO {

	@Autowired
	private SqlSession session;
	
	public int insertTuition(TuitionDTO dto) {
		System.out.println("DAO 확인");
		return session.insert("Tuition.insertTuition", dto);
	}
	
	public TuitionDTO selectByStd_code(String std_code) {
		return session.selectOne("Tuition.selectByStd_code",std_code);
	}
	
	public List<TuitionDTO> selectAll() {
		return session.selectList("Tuition.selectAll");
	}
	public TuitionDTO selectOne(int seq) {
		return session.selectOne("Tuition.selectOne", seq);
	}
	public int updateOne(TuitionDTO dto) {
		return session.update("Tuition.updateOne", dto);
	}
	public int deleteOne(int seq) {
		return session.delete("Tuition.deleteOne", seq);
	}
	public List<TuitionDTO> stdSelectOne(int std_code){
		return session.selectList("Tuition.stdSelectOne", std_code);
	}
}
