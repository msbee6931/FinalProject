package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ReferenceDTO;
import kh.spring.statics.BoardConfigurator;

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
	public int count() {
		return session.selectOne("Reference.count");
	}
	public List<ReferenceDTO> selectByPage(int page){
		int startRowNum = (page-1)*BoardConfigurator.recordCountPerPage +1;
		int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage -1;
		Map<String,Object> param = new HashMap<>();
		param.put("startRowNum", startRowNum);
		param.put("endRowNum", endRowNum);
		return session.selectList("Reference.selectByPage",param);
	}
	public int searchCount(String content,String category){
		Map<String,Object> param = new HashMap<>();
		param.put("content", content);
		param.put("category", category);
		return session.selectOne("Reference.searchCount",param);
	}
	public List<ReferenceDTO> searchByPage(String content, String category,int page){
		int startRowNum = (page-1)*BoardConfigurator.recordCountPerPage +1;
		int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage -1;
		Map<String,Object> param = new HashMap<>();
		param.put("startRowNum", startRowNum);
		param.put("endRowNum", endRowNum);
		param.put("content", content);
		param.put("category", category);
		return session.selectList("Reference.searchByPage",param);
	}
	public ReferenceDTO selectListSeq(ReferenceDTO dto) {
		return session.selectOne("Reference.selectListSeq",dto);
	}
	public int view_countUpd(ReferenceDTO dto) {
		return session.update("Reference.view_countUpd",dto);
	}
}
