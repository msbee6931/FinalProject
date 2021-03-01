package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.FreeBoardDAO;
import kh.spring.dto.FreeBoardDTO;
import kh.spring.statics.BoardConfigurator;
@Service
public class FreeBoardService {

	@Autowired
	private FreeBoardDAO dao;
	
	  public int getDataCount() throws Exception{
		      return dao.getDataCount();
		   }
	 
	   public List<FreeBoardDTO> listByCpage(int cpage) throws Exception{
		      return dao.listByCpage(cpage);
		   }
	  
	  
	 public String getNavi(int currentPage) throws Exception {
	      int recordTotalCount = getDataCount();
	      int pageTotalCount;
	      if(recordTotalCount % BoardConfigurator.recordCountPerPage > 0) {
	         pageTotalCount = recordTotalCount / BoardConfigurator.recordCountPerPage + 1;
	      }else {
	         pageTotalCount = recordTotalCount / BoardConfigurator.recordCountPerPage; 
	      }
	      // 보안 처리 코드
	      if(currentPage < 1) {
	         currentPage = 1;
	      }else if(currentPage > pageTotalCount) {
	         currentPage = pageTotalCount;
	      }
	      //-----------------------------------------------------------------------------------------
	      int startNavi = (currentPage-1) / BoardConfigurator.naviCountPerPage * BoardConfigurator.naviCountPerPage + 1;
	      int endNavi = startNavi + BoardConfigurator.naviCountPerPage - 1;

	      if(endNavi>pageTotalCount) {
	         endNavi = pageTotalCount;
	      }

	      boolean needPrev = true;
	      boolean needNext = true;

	      if(startNavi == 1) {
	         needPrev = false;
	      }
	      if(endNavi == pageTotalCount ) {
	         needNext = false;
	      }

	      StringBuilder sb = new StringBuilder(); // 메모리 효율성과 코드의 가독성에 좋음

	      if(needPrev) {
	         sb.append("<a href= '/free/boardList?cpage="+(startNavi-1)+"'> < </a>");
	      }
	      for(int i=startNavi; i <= endNavi; i++) {
	         sb.append("<a href= '/free/boardList?cpage="+i+"'>"+i+" </a>");
	      }
	      if(needNext) {
	         sb.append("<a href='/free/boardList?cpage="+(endNavi+1)+"'> > </a>");
	      }
	      
	      return sb.toString();
	   }
	 
	 public FreeBoardDTO selectBySeq(String seq) {
		 return dao.selectBySeq(seq);
	 }
	 
	 public int updateView_Count(int view_count, String seq) {
		 return dao.updateViewCount(view_count,seq);
	 }
	 
	 public int deleteBySeq(String seq) {
		 return dao.deleteBySeq(seq);
	 }
	 
	 public int deleteList(List<FreeBoardDTO> list) {
		 return dao.deleteList(list);
	 }
	 
	 public int insert(FreeBoardDTO dto) {
		 return dao.insert(dto);
	 }
	 
	 public int update(FreeBoardDTO dto) {
		 return dao.update(dto);
	 }
	 
	 public List<FreeBoardDTO> searchByTitle(String title) {
		 title = "%"+title+"%";
		 return dao.searchByTitle(title);
	 }
	 
	public int count() {
			return dao.count();
	}
}
