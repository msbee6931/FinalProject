package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.NoticeDTO;
import kh.spring.dto.NoticeFileDTO;

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

}
