package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ReferenceDTO;

@Repository
public class ReferenceDAO {

	@Autowired
	private SqlSession session;
	
	public int insertDTO(ReferenceDTO dto) {
		return session.insert("Reference.insertDTO",dto);
	}
	
	public int selectLastSeq() {
		return session.selectOne("Reference.selectLastSeq");
	}
	
	public int update(ReferenceDTO dto) {
		return session.update("Reference.update",dto);
	}
	
	public int delete(List<ReferenceDTO> list) {
		return session.delete("Reference.delete",list);
	}
	
	public List<ReferenceDTO> selectAll(){
		return session.selectList("Reference.selectAll");
	}
}
