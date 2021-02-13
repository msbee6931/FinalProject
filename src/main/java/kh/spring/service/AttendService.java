package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.AttendDAO;
import kh.spring.dto.AttendDTO;

@Service
public class AttendService {

	@Autowired
	private AttendDAO dao;
	public List<AttendDTO> attendDayList(AttendDTO dto){
		return dao.attendDayList(dto);
	}
	public List<AttendDTO> attendList(AttendDTO dto){
		return dao.attendList(dto);
	}
	public int attendInsert(List<AttendDTO> list) {
		return dao.attendInsert(list);
	}
	public int attendUpd(AttendDTO dto) {
		return dao.attendUpd(dto);
	}
	public int attendDel(AttendDTO dto) {
		return dao.attendDel(dto);
	}
}
