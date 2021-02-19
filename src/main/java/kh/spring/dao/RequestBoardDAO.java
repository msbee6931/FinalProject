package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.RequestBoardDTO;
import kh.spring.statics.BoardConfigurator;

@Repository
public class RequestBoardDAO {

	@Autowired
	private SqlSession session;
	
	public int insert(RequestBoardDTO dto) {
		return session.insert("Request.insert",dto);
	}
	public int update(RequestBoardDTO dto) {
		return session.update("Request.update",dto);
	}
	public int delete(RequestBoardDTO dto) {
		return session.delete("Request.delete",dto);
	}
	
	public int deleteList(List<RequestBoardDTO> list) {
		return session.delete("Request.deleteList",list);
	}
	public List<RequestBoardDTO> selectAll(){
		return session.selectList("Request.selectAll");
	}
	
	public int updateReply(RequestBoardDTO dto) {
		return session.update("Request.updateReply",dto);
	}
	
	public int selectReply(RequestBoardDTO dto) {
		return session.selectOne("Request.selectReply",dto);
	}
	
	 public int getDataCount() throws Exception{
	      return session.selectOne("Request.getDataCount");
	   }
	 public List<FreeBoardDTO> listByCpage(int cpage) throws Exception{
	      int startRowNum = (cpage-1) * BoardConfigurator.recordCountPerPage + 1;
	      int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage - 1;

	      Map<String, Integer> param = new HashMap<>();
	      param.put("startRowNum", startRowNum);
	      param.put("endRowNum", endRowNum);
	      return session.selectList("Request.listByCpage",param);
	   }
	 
	 
	 public int updateViewCount(int view_count, String seq) {
		   String Sview_count = Integer.toString(view_count+1);
		   Map<String,String> param = new HashMap<>();
		   param.put("seq", seq);
		   param.put("view_count", Sview_count);
		   return session.update("Request.updateView_Count",param);
	   }
	 
	 public RequestBoardDTO selectBySeq(String seq) {
		 return session.selectOne("Request.selectBySeq",seq);
	 }
	 
	   public List<RequestBoardDTO> searchByTitle(String title) {
		   return session.selectList("Request.searchByTitle",title);
	   }
}
