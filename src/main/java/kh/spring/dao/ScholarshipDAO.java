package kh.spring.dao;


import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ReqSchFileDTO;
import kh.spring.dto.ReqScholarDTO;
import kh.spring.dto.ScholarshipDTO;

@Repository
public class ScholarshipDAO {

	@Autowired
	SqlSession session;
	
	//관리자_장학금 등록
	public int insertScholar(List<ScholarshipDTO> list) {
		for(int i =0; i<list.size();i++) {
			System.out.println(list.get(i).getStd_code());
		}
		return session.insert("Scholarship.insertScholarship", list);
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

}
