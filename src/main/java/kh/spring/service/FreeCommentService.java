package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.FreeCommentDAO;
import kh.spring.dto.FreeCommentDTO;
import kh.spring.statics.BoardConfigurator;


@Service
public class FreeCommentService {

	@Autowired
	private FreeCommentDAO dao;
	
	public int insert(FreeCommentDTO dto) {
		return dao.insert(dto);
	}
	
	
	   
	   public List<FreeCommentDTO> selectAll(String mSeq,int page) {
	      
	      return dao.selectAll(mSeq,page);
	   }
	   
	   public int delete(int rev_seq) {
	      return dao.delete(rev_seq);
	   }
	   
	   public int update(String rev_seq, String rev_contents) {
	      return dao.update(rev_seq,rev_contents);
	   }
	   
	   public int getDataCount(String main_seq) throws Exception{
	      return dao.getDataCount(main_seq);
	   }
	   public String navi(int currentPage,String mSeq) throws Exception {
	      int recordTotalCount = getDataCount(mSeq); 
	      int pageTotalCount = 0;
	      if(recordTotalCount % BoardConfigurator.recordCountPerPage > 0) {
	         pageTotalCount = recordTotalCount / BoardConfigurator.recordCountPerPage+ 1;
	      }else {
	         pageTotalCount = recordTotalCount/ BoardConfigurator.recordCountPerPage;
	      }
	      if(currentPage < 1) {
	         currentPage = 1;
	      }else if (currentPage > pageTotalCount) {
	         currentPage = pageTotalCount;
	      }
	      int startNavi = (currentPage-1) / BoardConfigurator.naviCountPerPage * BoardConfigurator.naviCountPerPage  +1;
	      int endNavi = startNavi + BoardConfigurator.naviCountPerPage  - 1;

	      if(endNavi > pageTotalCount) {
	         endNavi = pageTotalCount;
	      }
	      boolean needPrev = true;
	      boolean needNext = true;

	      if(startNavi == 1) {needPrev = false;}
	      if(endNavi == pageTotalCount) {needNext = false;}
	      StringBuilder sb = new StringBuilder();

	      if(needPrev) {
	         sb.append("<a href='/free/view?page="+(startNavi-1)+"&seq="+mSeq+"'> < </a>");
	      }
	      for(int i = startNavi; i<=endNavi; i++) {
	         sb.append("<a href='/free/view?page="+i+"&seq="+mSeq+"'>"+i+" "+"</a>");
	      }
	      if(needNext) {
	         sb.append("<a href='/free/view?page="+(endNavi+1)+"&seq="+mSeq+"'> > </a>");
	      }
	      return sb.toString();
	   }
	   
	   public FreeCommentDTO selectDTOByRev_Seq(String rev_seq) {
		   return dao.selectDTOByRev_Seq(rev_seq);
	   }
}
