package kh.spring.dao;


import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ReqSchFileDTO;
import kh.spring.dto.ReqScholarDTO;
import kh.spring.dto.ScholarshipDTO;
import kh.spring.dto.TuitionDTO;

@Repository
public class ScholarshipDAO {

	@Autowired
	SqlSession session;
	
	//관리자_장학금 등록
	public int insertScholar(ScholarshipDTO dto) {
		return session.insert("Scholarship.insertScholarship", dto);
	}
	
	//학생_장학금 요청서 파일 업로드
	public int insertReqSchFile(ReqSchFileDTO dto) {
		return session.insert("Scholarship.reqSchFile",dto);
	}
	
	//학생 장학금 요청
	public int insertReqScholar(ReqScholarDTO dto) {
		return session.insert("Scholarship.reqScholar", dto);
	}
	
	public int selectLastSeq() {
		return session.selectOne("Scholarship.selectlastSeq");
	}

	public List<ReqScholarDTO> selectReqScholar() {
		return session.selectList("Scholarship.selectReqScholar");
	}
	
	public ReqScholarDTO selectSeqReqScholar(int seq) {
		return session.selectOne("Scholarship.selectSeqReqScholar", seq);
	}
	
	public List<ReqSchFileDTO> selectReqSchFile(int seq) {
		return session.selectList("Scholarship.selectReqSchFile", seq);
	}
	
	public int selectCountFile(int seq) {
		return session.selectOne("Scholarship.selectCountFile",seq);
	}
	

	
	public ScholarshipDTO selectDTOByStd_Code(int std_code) {
		return session.selectOne("Scholarship.selectDTOByStd_Code",std_code);
	}
	
	public List<ReqScholarDTO> selectOneReqScholar(int stdCode) {
		return session.selectList("Scholarship.selectOneReqScholar", stdCode);
	}
	public int checkValueReqScholar(int seq) {
		return session.update("Scholarship.checkValueReqScholar", seq);
	}
	public List<ScholarshipDTO> selectAll() {
		return session.selectList("Scholarship.selectAll");
	}
	public ScholarshipDTO selectOne(int seq) {
		return session.selectOne("Scholarship.selectOne", seq);
	}
	public int updateOne(ScholarshipDTO dto) {
		return session.update("Scholarship.updateOne", dto);
	}
	public int deleteOne(int seq) {
		return session.delete("Scholarship.deleteOne", seq);
	}
	public int deleteReqSch(List<ReqScholarDTO> list) {
		return session.delete("Scholarship.deleteReqSch", list);
	}
	public int deleteReqfile(int parentSeq) {
		return session.delete("Scholarship.deleteReqfile", parentSeq);
	}
	public List<ScholarshipDTO> stdSelectOne(int std_code) {
		return session.selectList("Scholarship.stdSelectOne", std_code);
	}
}
