package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.Std_TranscriptDTO;

@Repository
public class Std_TranscriptDAO {

	@Autowired
	private SqlSession session;
	
	public List<Std_TranscriptDTO> selectByScode(int scode) {
		return session.selectList("stdTranscript.selectByScode",scode);
	}
}
