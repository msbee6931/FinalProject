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
	
	public List<DeptScheduleDTO> selectDeptSchedule() {
		return session.selectList("Schedule.selectDeptSchedule");
	}
	
	public int updateDeptScheule(DeptScheduleDTO dto) {
		return session.update("Schedule.updateDeptScheule", dto);
	}
	
	public DeptScheduleDTO selectOneDeptSchedule(String seq, String schDate) {
		   Map<String,String> param = new HashMap<>();
		   param.put("seq", seq);
		   param.put("schDate", schDate);
		return session.selectOne("Schedule.selectOneDeptSchedule", param);
	}
	
	public int deleteDeptSchedule(String oriSeq) {
		return session.delete("Schedule.deleteDeptSchedule", oriSeq);
	}
	
	public int insertIndSchedule(IndScheduleDTO dto) {
		return session.insert("Schedule.insertIndSchedule", dto);
	}
	
	public List<IndScheduleDTO> selectIndSchedule(){
		return session.selectList("Schedule.selectIndSchedule");
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
