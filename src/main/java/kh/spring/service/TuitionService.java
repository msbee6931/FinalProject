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
	
	public int insertTuition(TuitionDTO dto) {
		return tDao.insertTuition(dto);
	}
	
	public TuitionDTO selectByStd_code(String std_code) {
		return tDao.selectByStd_code(std_code);
	}
	
	public List<TuitionDTO> selectAll() {
		return tDao.selectAll();
	}
	public TuitionDTO selectOne(int seq) {
		return tDao.selectOne(seq);
	}
	public int updateOne(TuitionDTO dto) {
		return tDao.updateOne(dto);
	}
	public int deleteOne(int seq) {
		return tDao.deleteOne(seq);
	}
	public List<TuitionDTO> stdSelectOne(int user) {
		return tDao.stdSelectOne(user);
	}
}
