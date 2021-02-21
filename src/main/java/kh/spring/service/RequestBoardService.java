package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.RequestBoardDAO;
import kh.spring.dto.FreeBoardDTO;
import kh.spring.dto.RequestBoardDTO;
import kh.spring.statics.BoardConfigurator;

@Service
public class RequestBoardService {

	@Autowired
	private RequestBoardDAO dao;
	
	public int insert(RequestBoardDTO dto) {
		return dao.insert(dto);
	}
	
	public int update(RequestBoardDTO dto) {
		return dao.update(dto);
	}
	
	public int delete(RequestBoardDTO dto) {
		return dao.delete(dto);
	}
	
	public List<RequestBoardDTO> selectAll(){
		return dao.selectAll();
	}
	
	public int updateReply(RequestBoardDTO dto) {
		return dao.updateReply(dto);
	}
	
	public int selectReply(RequestBoardDTO dto) {
		return dao.selectReply(dto);
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
	         sb.append("<a href= '/?cpage="+(startNavi-1)+"'> < </a>");
	      }
	      for(int i=startNavi; i <= endNavi; i++) {
	         sb.append("<a href= '/?cpage="+i+"'>"+i+" </a>");
	      }
	      if(needNext) {
	         sb.append("<a href='/?cpage="+(endNavi+1)+"'> > </a>");
	      }
	      
	      return sb.toString();
	   }
	 
	 public int getDataCount() throws Exception{
	      return dao.getDataCount();
	   }
	 public List<FreeBoardDTO> listByCpage(int cpage) throws Exception{
	      return dao.listByCpage(cpage);
	   }
	 
	 public int updateView_Count(int view_count, String seq) {
		 return dao.updateViewCount(view_count,seq);
	 }
	 
	 public RequestBoardDTO selectBySeq(String seq) {
		 return dao.selectBySeq(seq);
	 }
	 
	 public int deleteList(List<RequestBoardDTO> list) {
		 return dao.deleteList(list);
	 }
	 
	 public List<RequestBoardDTO> searchByTitle(String title) {
		 return dao.searchByTitle(title);
	 }
}
