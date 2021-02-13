package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.FreeCommentDTO;
import kh.spring.statics.BoardConfigurator;

@Repository
public class FreeCommentDAO {

	@Autowired
	private SqlSession session;
	
	public int insert(FreeCommentDTO dto) {

		return session.insert("fcomment.insert",dto);
	}
	
	 public List<FreeCommentDTO> selectAll(String mSeq,int page) {
	      int startRowNum = (page-1)*BoardConfigurator.recordCountPerPage +1;
	      int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage -1;
	      Map<String,Object> param = new HashMap<>();
	      param.put("startRowNum", startRowNum);
	      param.put("endRowNum", endRowNum);
	      param.put("main_seq", mSeq);
	      return session.selectList("fcomment.selectAll", param);
	   }
	   
	   public int delete(int rev_seq) {
	      return session.delete("fcomment.delete", rev_seq);
	   }
	   
	   public int update(String rev_seq, String rev_contents) {
	      Map<String,Object> param = new HashMap<>();
	      param.put("rev_seq", rev_seq);
	      param.put("rev_contents", rev_contents);
	      return session.update("fcomment.update", param);
	   }
	   
	   public List<FreeCommentDTO> listByCpage(int cpage,int mSeq) throws Exception{
	      int startRowNum = (cpage-1) * 10 + 1;
	      int endRowNum = startRowNum + 10 - 1;

	      Map<String, Integer> param = new HashMap<>();
	      param.put("startRowNum", startRowNum);
	      param.put("endRowNum", endRowNum);
	      param.put("main_seq", mSeq);
	      return session.selectList("fcomment.listByCpage",param);
	   }
	   

	   public int getDataCount(String main_seq) throws Exception{
	      return session.selectOne("fcomment.getDataCount",main_seq);
	   }
	   
	   public FreeCommentDTO selectDTOByRev_Seq(String rev_seq) {
		   return session.selectOne("fcomment.selectDTOByRev_Seq",rev_seq);
	   }
}
