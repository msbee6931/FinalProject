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
		
		public AbsenceDTO selectStdOne(int sCode) {
			return session.selectOne("Absence.selectStdOne", sCode);
		}
		
		public int insertRest(RestDTO dto) {
			return session.insert("Absence.insertRest",dto);
		}
		
		public List<RestDTO> selectOneRest(int std_code) {
			return session.selectList("Absence.selectOneRest", std_code);
		}
}
