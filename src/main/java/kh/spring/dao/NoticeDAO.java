package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.NoticeDTO;
import kh.spring.dto.NoticeFileDTO;
import kh.spring.statics.BoardConfigurator;

@Repository
public class NoticeDAO {
	
	@Autowired
	private SqlSession db;
	
	public int insertNomalNotice(NoticeDTO dto) {
		return db.insert("Notice.insertNomal", dto);
	}
	public int selectLastSeq() {
		return db.selectOne("Notice.selectLastSeq");
	}
	public int insertNoticeFile(NoticeFileDTO dto) {
		return db.insert("Notice.insertNoticeFile", dto);
	}
	public List<NoticeDTO> selectNomalNotice(){
		return db.selectList("Notice.selectNomalNotice");
	}
	public NoticeDTO selectNomalNotice_Info(int n_seq) {
		return db.selectOne("Notice.selectNomalNotice_Info", n_seq);
	}
	public List<NoticeFileDTO> selectNomalNoticeFile(int n_seq){
		return db.selectList("Notice.selectNomalNoticeFile", n_seq);
	}
	public int updateNomalNotice(NoticeDTO dto) {
		return db.update("Notice.updateNomalNotice", dto);
	}
	//Scolar
	public int insertScolarNotice(NoticeDTO dto) {
		return db.insert("Notice.insertScolar", dto);
	}
	public List<NoticeDTO> selectScolarNotice(){
		return db.selectList("Notice.selectScolarNotice");
	}
	public NoticeDTO selectScolarNotice_Info(int n_seq) {
		return db.selectOne("Notice.selectScolarNotice_Info", n_seq);
	}
	public List<NoticeDTO> selectScolarNoticeFile(int n_seq){
		return db.selectList("Notice.selectScolarNoticeFile", n_seq);
	}
	
	public int normalCount() {
		return db.selectOne("Notice.normalCount");
	}
	public List<NoticeDTO> selectNormalByPage(int page){
		int startRowNum = (page-1)*BoardConfigurator.recordCountPerPage +1;
		int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage -1;
		Map<String,Object> param = new HashMap<>();
		param.put("startRowNum", startRowNum);
		param.put("endRowNum", endRowNum);
		return db.selectList("Notice.selectNormalByPage",param);
	}
	public int searchNormalCount(String content,String category){
		Map<String,Object> param = new HashMap<>();
		param.put("content", content);
		param.put("category", category);
		return db.selectOne("Notice.searchNormalCount",param);
	}
	public List<NoticeDTO> searchNormalByPage(String content, String category,int page){
		int startRowNum = (page-1)*BoardConfigurator.recordCountPerPage +1;
		int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage -1;
		Map<String,Object> param = new HashMap<>();
		param.put("startRowNum", startRowNum);
		param.put("endRowNum", endRowNum);
		param.put("content", content);
		param.put("category", category);
		return db.selectList("Notice.searchNormalByPage",param);
	}
	
	
	
	public NoticeDTO selectListSeq(NoticeDTO dto) {
		return db.selectOne("Notice.selectListSeq",dto);
	}
	public int view_countUpd(NoticeDTO dto) {
		return db.update("Notice.view_countUpd",dto);
	}
	public List<NoticeFileDTO> selectFileParentSeq(NoticeFileDTO dto) {
		return db.selectList("Notice.selectFileParentSeq",dto);
	}
	public NoticeFileDTO selectFileSeq(NoticeFileDTO dto) {
		return db.selectOne("Notice.selectFileSeq",dto);
	}
	public List<NoticeFileDTO> selectByParentSeq(int parentSeq){
		return db.selectList("Notice.selectByParentSeq",parentSeq);
	}
	public List<NoticeFileDTO> selectFileAll(){
		return db.selectList("Notice.selectFileAll");
	}
}
