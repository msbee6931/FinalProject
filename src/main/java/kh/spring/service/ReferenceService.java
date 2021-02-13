package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.ReferenceDAO;
import kh.spring.dto.ReferenceDTO;

@Service
public class ReferenceService {

	@Autowired
	private ReferenceDAO dao;
	
	public int insertDTO(ReferenceDTO dto) {
		return dao.insertDTO(dto);
	}
	
	public int selectLastSeq() {
		return dao.selectLastSeq();
	}
	
	public int update(ReferenceDTO dto) {
		return dao.update(dto);
	}
	
	public int delete(List<ReferenceDTO> list) {
		return dao.delete(list);
	}
	
	public List<ReferenceDTO> selectAll(){
		return dao.selectAll();
	}
}
