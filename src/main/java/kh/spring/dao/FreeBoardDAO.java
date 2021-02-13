package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.FreeBoardDTO;
import kh.spring.statics.BoardConfigurator;

@Repository
public class FreeBoardDAO {

	@Autowired
	private SqlSession session;
	
			
	   public int getDataCount() throws Exception{
		      return session.selectOne("Free.getDataCount");
		   }
	   
	   
	   public List<FreeBoardDTO> listByCpage(int cpage) throws Exception{
		      int startRowNum = (cpage-1) * BoardConfigurator.recordCountPerPage + 1;
		      int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage - 1;

		      Map<String, Integer> param = new HashMap<>();
		      param.put("startRowNum", startRowNum);
		      param.put("endRowNum", endRowNum);
		      return session.selectList("Free.listByCpage",param);
		   }
	   
	   public FreeBoardDTO selectBySeq(String seq) {
		   return session.selectOne("Free.selectBySeq",seq);
	   }
	   
	   public int updateViewCount(int view_count, String seq) {
		   String Sview_count = Integer.toString(view_count+1);
		   Map<String,String> param = new HashMap<>();
		   param.put("seq", seq);
		   param.put("view_count", Sview_count);
		   return session.update("Free.updateView_Count",param);
	   }
	   
	   public int deleteBySeq(String seq) {
		   return session.delete("Free.deleteBySeq",seq);
	   }
	   
	   public int insert(FreeBoardDTO dto) {
		   return session.insert("Free.insert",dto);
	   }
	   
	   public int update(FreeBoardDTO dto) {
		   return session.update("Free.update",dto);
	   }
	   
	   public List<FreeBoardDTO> searchByTitle(String title) {
		   return session.selectList("Free.searchByTitle",title);
	   }
	   
	   public int deleteList(List<FreeBoardDTO> list) {
		   return session.delete("Free.deleteList",list);
	   }
}
