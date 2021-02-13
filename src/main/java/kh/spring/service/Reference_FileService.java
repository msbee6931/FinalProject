package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.Reference_FileDAO;
import kh.spring.dto.ReferenceDTO;
import kh.spring.dto.Reference_FileDTO;

@Service
public class Reference_FileService {

	@Autowired
	private Reference_FileDAO dao;
	
	public int insertFileDTO(Reference_FileDTO dto) {
		return dao.insertFileDTO(dto);
	}
	
	public int delteFile(List<ReferenceDTO> list) {
		return dao.delete(list);
	}
	
	public List<Reference_FileDTO> selectFileAll(){
		return dao.selectFileAll();
	}
	
	public int updateFile(Reference_FileDTO dto) {
		return dao.updateFile(dto);
	}
	
	public int deleteAll(int parentSeq) {
		return dao.deleteAll(parentSeq);
	}
}
