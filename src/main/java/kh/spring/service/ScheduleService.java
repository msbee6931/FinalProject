package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ScheduleDAO;
import kh.spring.dto.DeptScheduleDTO;

@Service
public class ScheduleService {

	@Autowired
	ScheduleDAO sDao;

	public int insertDeptSchedule(DeptScheduleDTO dto){
		return sDao.insertDeptSchedule(dto);
	}

	public List<DeptScheduleDTO> selectDeptSchedule(){
		return sDao.selectDeptSchedule();
	}
	
	public int updateDeptScheule(DeptScheduleDTO dto) {
		return sDao.updateDeptScheule(dto);
	}

}
