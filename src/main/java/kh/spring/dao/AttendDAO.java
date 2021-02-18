package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.AttendDTO;

@Repository
public class AttendDAO {

	@Autowired
	private SqlSession session;
	public List<AttendDTO> attendDayList(AttendDTO dto){
		return session.selectList("Attend.attendDayList",dto);
	}
	public List<AttendDTO> attendList(AttendDTO dto){
		return session.selectList("Attend.attendList",dto);
	}
	public int attendInsert(List<AttendDTO> list) {
		return session.insert("Attend.attendInsert",list);
	}
	public int attendUpd(AttendDTO dto) {
		return session.update("Attend.attendUpd",dto);
	}
	public int attendDel(AttendDTO dto) {
		return session.delete("Attend.attendDel",dto);
	}
	public List <AttendDTO> selectOneAttend(AttendDTO dto) {
		return session.selectList("Attend.selectOneAttend", dto);
	}
	public List <AttendDTO> selectAttend(int cCode) {
		return session.selectList("Attend.selectAttend", cCode);
	}
}
