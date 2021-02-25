package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ChartDTO;
import kh.spring.dto.StudentsDTO;

@Repository
public class StudentsDAO {

	@Autowired
	private SqlSession session;
	
	public StudentsDTO selectStudentsByS_Seq(String s_seq) {
		return session.selectOne("Students.selectStudentsByS_Seq",s_seq);
	}
	public StudentsDTO selectOneStd(int sCode) {
		return session.selectOne("Students.selectOneStd", sCode);
	}
	
	public int updateStdAbs(int sCode) {
		return session.update("Students.updateStdAbs", sCode);
	}
	public int updateStdRest(int sCode) {
		return session.update("Students.updateStdRest", sCode);
	}
	public List<ChartDTO> selectColCount() {
		return session.selectList("Students.selectColCount");
	}
	public List<ChartDTO> selectDeptCount() {
		return session.selectList("Students.selectDeptCount");
	}
	public List<ChartDTO> selectGenderCount() {
		return session.selectList("Students.selectGenderCount");
	}
	public List<StudentsDTO> selectAllStd() {
		return session.selectList("Students.selectAllStd");
	}
	public List<StudentsDTO> deptStudentList(StudentsDTO dto){
		return session.selectList("Students.deptStudentList",dto);
	}
	
	
}
