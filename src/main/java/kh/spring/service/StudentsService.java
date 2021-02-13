package kh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.StudentsDAO;
import kh.spring.dto.StudentsDTO;

@Service
public class StudentsService {

	@Autowired
	private StudentsDAO dao;
	
	public StudentsDTO selectStudentsByS_Seq(String s_seq) {
		return dao.selectStudentsByS_Seq(s_seq);
	}
}
