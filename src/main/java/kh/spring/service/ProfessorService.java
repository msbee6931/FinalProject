package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ProfessorDAO;
import kh.spring.dto.ProfessorDTO;

@Service
public class ProfessorService {

	@Autowired
	private ProfessorDAO dao;
	
	public List<ProfessorDTO> selectAll(){
		return dao.selectAll();
	}
}
