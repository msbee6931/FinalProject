package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.ColScheduleDTO;

@Repository
public class ColScheduleDAO {

	@Autowired
	private SqlSession session;
	
	public List<ColScheduleDTO> selectAll(){
		return session.selectList("Schedule.selectAll");
	}
}
