package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ScheduleDAO;
import kh.spring.dto.DeptScheduleDTO;
import kh.spring.dto.IndScheduleDTO;

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
	
	public DeptScheduleDTO selectOneDeptSchedule(String seq, String schDate) {
		return sDao.selectOneDeptSchedule(seq,schDate);
	}

	public int deleteDeptSchedule(String oriSeq) {
		return sDao.deleteDeptSchedule(oriSeq);
	}
	
	public int insertIndSchedule(IndScheduleDTO dto) {
		return sDao.insertIndSchedule(dto);
	}
	
	public List<IndScheduleDTO> selectIndSchedule(){
		return sDao.selectIndSchedule();
	}
	
	public IndScheduleDTO  selectOneIndSchedule(String id) {
		return sDao. selectOneIndSchedule(id);
	}
	
	public int updateIndSchedule (IndScheduleDTO dto) {
		return sDao.updateIndSchedule(dto);
	}
	
	public int deleteIndSchedule (String id) {
		return sDao.deleteIndSchedule(id);
	}
}
