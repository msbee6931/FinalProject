package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ScheduleDAO;
import kh.spring.dto.ColScheduleDTO;
import kh.spring.dto.DeptScheduleDTO;
import kh.spring.dto.IndScheduleDTO;

@Service
public class ScheduleService {

	@Autowired
	ScheduleDAO sDao;

	public int insertDeptSchedule(DeptScheduleDTO dto){
		return sDao.insertDeptSchedule(dto);
	}
	public int updateDeptSchedule(DeptScheduleDTO dto) {
		return sDao.updateDeptSchedule(dto);
	}

	public List<DeptScheduleDTO> selectDeptSchedule(){
		return sDao.selectDeptSchedule();
	}
	
	public int updateDeptScheule(DeptScheduleDTO dto) {
		return sDao.updateDeptScheule(dto);
	}
	
	public DeptScheduleDTO selectOneDeptSchedule(String seq) {
		return sDao.selectOneDeptSchedule(seq);
	}

	public int deleteDeptSchedule(String oriSeq) {
		return sDao.deleteDeptSchedule(oriSeq);
	}
	
	public int insertIndSchedule(IndScheduleDTO dto) {
		return sDao.insertIndSchedule(dto);
	}
	
	public List<IndScheduleDTO> selectIndSchedule(int writer){
		return sDao.selectIndSchedule(writer);
	}
	
	public IndScheduleDTO  selectOneIndSchedule(String id) {
		return sDao.selectOneIndSchedule(id);
	}
	
	public int updateIndSchedule (IndScheduleDTO dto) {
		return sDao.updateIndSchedule(dto);
	}
	
	public int deleteIndSchedule (String id) {
		return sDao.deleteIndSchedule(id);
	}
	
	public int insertColSchedule(ColScheduleDTO dto) {
		return sDao.insertColSchedule(dto);
	}
	public List<ColScheduleDTO> selectColSchedule() {
		return sDao.selectColSchedule();
	}
	public ColScheduleDTO selectOneColSchedule(int seq) {
		return sDao.selectOneColSchedule(seq);
	}
	public int updateColSchedule(ColScheduleDTO dto) {
		return sDao.updateColSchedule(dto);
	}
	public int deleteColSchedule(int seq) {
		return sDao.deleteColSchedule(seq);
	}
}
