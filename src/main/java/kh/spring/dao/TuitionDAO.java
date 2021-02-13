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
	
	public int insertTuition(List<TuitionDTO> list) {
		System.out.println("DAO 확인");
		return session.insert("Tuition.insertTuition", list);
	}
	
	public TuitionDTO selectByStd_code(String std_code) {
		return session.selectOne("Tuition.selectByStd_code",std_code);
	}
}
