package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.SchoolScheduleDAO;
import kh.spring.dto.ColScheduleDTO;

@Service
public class SchoolScheduleService {
	@Autowired
	private SchoolScheduleDAO dao;
	
	public List<ColScheduleDTO> getSchoolSchedule(){
		return dao.getSchoolSchedule();
	}
}
