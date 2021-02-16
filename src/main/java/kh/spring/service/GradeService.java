package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.GradeDAO;
import kh.spring.dto.GradeDTO;

@Service
public class GradeService {

	@Autowired
	private GradeDAO dao;
	
	public GradeDTO stdGrade(GradeDTO dto) {
		return dao.stdGrade(dto);
	}
	public int stdGradeInsert(GradeDTO dto) {
		return dao.stdGradeInsert(dto);
	}
	public List<GradeDTO> stdGradeList(GradeDTO dto){
		return dao.stdGradeList(dto);
	}
	public int stdGradeUpd(GradeDTO dto) {
		return dao.stdGradeUpd(dto);
	}
	public List<GradeDTO> stdGradeOneList(int stdCode){
		return dao.stdGradeOneList(stdCode);
	}
}
