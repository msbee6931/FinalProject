package kh.spring.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ColScheduleDTO;
import kh.spring.dto.DeptScheduleDTO;
import kh.spring.dto.IndScheduleDTO;

@Repository
public class ScheduleDAO {
	
	@Autowired
	SqlSession session;
	
	public int insertDeptSchedule(DeptScheduleDTO dto) {
		return session.insert("Schedule.insertDeptSchedule", dto);
	}
	public int updateDeptSchedule(DeptScheduleDTO dto) {
		return session.update("Schedule.updateDeptSchedule", dto);
	}
	
	public List<DeptScheduleDTO> selectDeptSchedule(String deptCode) {
		return session.selectList("Schedule.selectDeptSchedule",deptCode);
	}
	
	public int updateDeptScheule(DeptScheduleDTO dto) {
		return session.update("Schedule.updateDeptScheule", dto);
	}
	
	public DeptScheduleDTO selectOneDeptSchedule(String seq) {
		return session.selectOne("Schedule.selectOneDeptSchedule", seq);
	}
	
	public int deleteDeptSchedule(String oriSeq) {
		return session.delete("Schedule.deleteDeptSchedule", oriSeq);
	}
	
	public int insertIndSchedule(IndScheduleDTO dto) {
		return session.insert("Schedule.insertIndSchedule", dto);
	}
	
	public List<IndScheduleDTO> selectIndSchedule(int writer){
		return session.selectList("Schedule.selectIndSchedule",writer);
	}
	
	public IndScheduleDTO selectOneIndSchedule(String id) {
		return session.selectOne("Schedule.selectIndSchedule", id);
	}
	
	public int updateIndSchedule(IndScheduleDTO dto) {
		return session.update("Schedule.updateIndSchedule", dto);
	}
	
	public int deleteIndSchedule(String id) {
		return session.delete("Schedule.deleteIndSchedule", id);
	}
	public int insertColSchedule(ColScheduleDTO dto) {
		return session.insert("Schedule.insertColSchedule", dto);
	}
	public List<ColScheduleDTO> selectColSchedule() {
		return session.selectList("Schedule.selectColSchedule");
	}
	public ColScheduleDTO selectOneColSchedule(int seq) {
		return session.selectOne("Schedule.selectOneColSchedule", seq);
	}
	public int updateColSchedule(ColScheduleDTO dto) {
		return session.update("Schedule.updateColSchedule", dto);
	}
	public int deleteColSchedule(int seq) {
		return session.delete("Schedule.deleteColSchedule", seq);
	}
}
