package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.AbsenceDTO;
import kh.spring.dto.AbsenceFileDTO;
import kh.spring.dto.RestDTO;

@Repository
public class AbsenceDAO {

	@Autowired
	SqlSession session;
	
		public int insertAbsence(AbsenceDTO dto) {
			return session.insert("Absence.insertAbsence", dto);
		}
		public int insertFileUp(AbsenceFileDTO dto) {
			return session.insert("Absence.insertFileUp", dto);
		}
		public List<AbsenceDTO> selectAllAbsence() {
			return session.selectList("Absence.selectAllAbsence");
		}
		public AbsenceDTO selectOneAbsence(int seq) {
			return session.selectOne("Absence.selectOneAbsence", seq);
		}
		public int selectCountFile(int seq) {
			return session.selectOne("Absence.selectCountFile",seq);
		}
		public List<AbsenceFileDTO> selectOneFile(int seq){
			return session.selectList("Absence.selectOneFile", seq);
		}
		
		public List<AbsenceDTO> selectStdOne(int sCode) {
			return session.selectList("Absence.selectStdOne", sCode);
		}
		
		public int deleteReqAbs(int seq) {
			return session.delete("Absence.deleteReqAbs", seq);
		}
		public int deleteReqAbsFile(int seq) {
			return session.delete("Absence.deleteReqAbsFile",seq);
		}
		public int updateReadAbs(int seq) {
			return session.update("Absence.updateReadAbs", seq);
		}
		
		public int insertRest(RestDTO dto) {
			return session.insert("Absence.insertRest",dto);
		}
		
		public List<RestDTO> selectOneRest(int std_code) {
			return session.selectList("Absence.selectOneRest", std_code);
		}
		public List<RestDTO> selectAllRest() {
			return session.selectList("Absence.selectAllRest");
		}
		public int deleteRest(int seq) {
			return session.delete("Absence.deleteRest",seq);
		}
}
