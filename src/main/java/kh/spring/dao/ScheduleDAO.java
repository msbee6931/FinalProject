package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.DeptScheduleDTO;

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

}
