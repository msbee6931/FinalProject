package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ReferenceDAO;
import kh.spring.dto.ReferenceDTO;
import kh.spring.statics.BoardConfigurator;

@Service
public class ReferenceService {

	@Autowired
	private ReferenceDAO dao;
	
	public int insertDTO(ReferenceDTO dto) {
		return dao.insertDTO(dto);
	}
	
	public int selectLastSeq() {
		return dao.selectLastSeq();
	}
	
	public int update(ReferenceDTO dto) {
		return dao.update(dto);
	}
	
	public int delete(List<ReferenceDTO> list) {
		return dao.delete(list);
	}
	
	public List<ReferenceDTO> selectAll(){
		return dao.selectAll();
	}
	public int count() {
		return dao.count();
	}
	 public String navi(int currentPage) throws Exception {
	      int recordTotalCount = count();
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

	      StringBuilder sb = new StringBuilder(); // 메모리 효율성과 코드의 가독성에 좋음

	      for(int i=startNavi; i <= endNavi; i++) {
	         sb.append(i+"/");
	      }
	      return sb.toString();
	   }
	 public String searchNavi(int currentPage,String content,String category) throws Exception {
	      int recordTotalCount = searchCount(content,category);
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

	      StringBuilder sb = new StringBuilder(); // 메모리 효율성과 코드의 가독성에 좋음

	      for(int i=startNavi; i <= endNavi; i++) {
	         sb.append(i+"/");
	      }
	      return sb.toString();
	   }
	public List<ReferenceDTO> selectByPage(int page){
		return dao.selectByPage(page);
	}
	public int searchCount(String content,String category){
		return dao.searchCount(content,category);
	}
	public List<ReferenceDTO> searchByPage(String content,String category,int page){
		return dao.searchByPage(content,category,page);
	}
}
