package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.TuitionDAO;
import kh.spring.dto.TuitionDTO;

@Service
public class TuitionService {
	@Autowired
	private TuitionDAO tDao;
	
	public int insertTuition(List<TuitionDTO> list) {
		return tDao.insertTuition(list);
	}
	
	public TuitionDTO selectByStd_code(String std_code) {
		return tDao.selectByStd_code(std_code);
	}
}
