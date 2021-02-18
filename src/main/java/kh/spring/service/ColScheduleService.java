package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ColScheduleDAO;
import kh.spring.dto.ColScheduleDTO;

@Service
public class ColScheduleService {
	
	@Autowired
	private ColScheduleDAO dao;
	
	public List<ColScheduleDTO> selectAll(){
		return dao.selectAll();
	}
}
