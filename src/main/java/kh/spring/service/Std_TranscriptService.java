package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.Std_TranscriptDAO;
import kh.spring.dto.Std_TranscriptDTO;

@Service
public class Std_TranscriptService {

	@Autowired
	private Std_TranscriptDAO dao;
	
	public List<Std_TranscriptDTO> selectByScode(int scode){
		return dao.selectByScode(scode);
	}
}
