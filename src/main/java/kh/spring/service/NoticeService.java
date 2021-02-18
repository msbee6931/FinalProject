package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.NoticeDAO;
import kh.spring.dto.NoticeDTO;
import kh.spring.dto.NoticeFileDTO;
import kh.spring.statics.BoardConfigurator;

@Service
public class NoticeService {
	
	@Autowired
	private NoticeDAO nDAO;
	
	public int insertNomalNotice(NoticeDTO dto) {
		return nDAO.insertNomalNotice(dto);
	}
	public int selectLastSeq() {
		return nDAO.selectLastSeq();
	}
	public int insertNoticeFile(NoticeFileDTO dto) {
		return nDAO.insertNoticeFile(dto);
	}
	public List<NoticeDTO> selectNomalNotice(){
		return nDAO.selectNomalNotice();
	}
	public NoticeDTO selectNomalNotice_Info(int n_seq) {
		return nDAO.selectNomalNotice_Info(n_seq);
	}
	public List<NoticeFileDTO> selectNomalNoticeFile(int n_seq){
		return nDAO.selectNomalNoticeFile(n_seq);
	}
	public int updateNomalNotice(NoticeDTO dto) {
		return nDAO.updateNomalNotice(dto);
	}
	//Scolar
	public int insertScolarNotice(NoticeDTO dto) {
		return nDAO.insertScolarNotice(dto);
	}
	public List<NoticeDTO> selectScolarNotice(){
		return nDAO.selectScolarNotice();
	}
	public NoticeDTO selectScolarNotice_Info(int n_seq) {
		return nDAO.selectScolarNotice_Info(n_seq);
	}
	public List<NoticeDTO> selectScolarNoticeFile(int n_seq){
		return nDAO.selectScolarNoticeFile(n_seq);
	}
	public int normalCount() {
		return nDAO.normalCount();
	}
	 public String normalNavi(int currentPage) throws Exception {
	      int recordTotalCount = normalCount();
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
	 public String searchNormalNavi(int currentPage,String content,String category) throws Exception {
	      int recordTotalCount = searchNormalCount(content,category);
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
	public List<NoticeDTO> selectNormalByPage(int page){
		return nDAO.selectNormalByPage(page);
	}
	public int searchNormalCount(String content,String category){
		return nDAO.searchNormalCount(content,category);
	}
	public List<NoticeDTO> searchNormalByPage(String content,String category,int page){
		return nDAO.searchNormalByPage(content,category,page);
	}
	
	public List<NoticeDTO> selectAcademicNotice(){
		return nDAO.selectAcademicNotice();
	}
	public int academicCount() {
		return nDAO.academicCount();
	}
	 public String academicNavi(int currentPage) throws Exception {
	      int recordTotalCount = academicCount();
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
	 public String searchAcademicNavi(int currentPage,String content,String category) throws Exception {
	      int recordTotalCount = searchAcademicCount(content,category);
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
	public List<NoticeDTO> selectAcademicByPage(int page){
		return nDAO.selectAcademicByPage(page);
	}
	public int searchAcademicCount(String content,String category){
		return nDAO.searchAcademicCount(content,category);
	}
	public List<NoticeDTO> searchAcademicByPage(String content,String category,int page){
		return nDAO.searchAcademicByPage(content,category,page);
	}
	
	public List<NoticeDTO> selectScholarNotice(){
		return nDAO.selectScholarNotice();
	}
	public int scholarCount() {
		return nDAO.scholarCount();
	}
	 public String scholarNavi(int currentPage) throws Exception {
	      int recordTotalCount = scholarCount();
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
	 public String searchScholarNavi(int currentPage,String content,String category) throws Exception {
	      int recordTotalCount = searchScholarCount(content,category);
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
	public List<NoticeDTO> selectScholarByPage(int page){
		return nDAO.selectScholarByPage(page);
	}
	public int searchScholarCount(String content,String category){
		return nDAO.searchScholarCount(content,category);
	}
	public List<NoticeDTO> searchScholarByPage(String content,String category,int page){
		return nDAO.searchScholarByPage(content,category,page);
	}
	
	public List<NoticeDTO> selectEmploymentNotice(){
		return nDAO.selectEmploymentNotice();
	}
	public int employmentCount() {
		return nDAO.employmentCount();
	}
	 public String employmentNavi(int currentPage) throws Exception {
	      int recordTotalCount = employmentCount();
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
	 public String searchEmploymentNavi(int currentPage,String content,String category) throws Exception {
	      int recordTotalCount = searchEmploymentCount(content,category);
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
	public List<NoticeDTO> selectEmploymentByPage(int page){
		return nDAO.selectEmploymentByPage(page);
	}
	public int searchEmploymentCount(String content,String category){
		return nDAO.searchEmploymentCount(content,category);
	}
	public List<NoticeDTO> searchEmploymentByPage(String content,String category,int page){
		return nDAO.searchEmploymentByPage(content,category,page);
	}
	
	
	public NoticeDTO selectListSeq(NoticeDTO dto) {
		return nDAO.selectListSeq(dto);
	}
	public int view_countUpd(NoticeDTO dto) {
		return nDAO.view_countUpd(dto);
	}
	public List<NoticeFileDTO> selectFileParentSeq(NoticeFileDTO dto) {
		return nDAO.selectFileParentSeq(dto);
	}
	public NoticeFileDTO selectFileSeq(NoticeFileDTO dto) {
		return nDAO.selectFileSeq(dto);
	}
	public List<NoticeFileDTO> selectByParentSeq(int parentSeq){
		return nDAO.selectByParentSeq(parentSeq);
	}
	public List<NoticeFileDTO> selectFileAll(){
		return nDAO.selectFileAll();
	}
	public List<NoticeDTO> selectNoticeAll(){
		return nDAO.selectNoticeAll();
	}
}
