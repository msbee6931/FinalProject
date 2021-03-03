package kh.spring.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.spring.dto.PostMessageDTO;

@Repository
public class PostMessageDAO {

	@Autowired
	private SqlSession session;
	
	public int insert(PostMessageDTO dto) {
		return session.insert("PostMessage.insert",dto);
	}
	public List<PostMessageDTO> listByReceiver(String receiver){
		return session.selectList("PostMessage.listByReceiver",receiver);
	}
	
	public List<PostMessageDTO> listBySender(String sender){
		return session.selectList("PostMessage.listBySender",sender);
	}
	
	public int alarm(String receiver){
		return session.selectOne("PostMessage.alarm",receiver);
	}
	
	public int update(PostMessageDTO dto) {
		return session.update("PostMessage.update",dto);
	}
	
	public int delete(List<PostMessageDTO> list) {
		return session.delete("PostMessage.delete",list);
	}
	
	public int updateConfirm(List<PostMessageDTO> list) {
		return session.update("PostMessage.updateConfirm",list);
	}
	
	public int alarmAdmin(String sender) {
		return session.selectOne("PostMessage.alarmAdmin",sender);
	}
	
	public List<PostMessageDTO> received(String sender){
		return session.selectList("PostMessage.received",sender);
	}
	public int updateConfirmOne(int seq) {
		return session.update("PostMessage.updateConfirmOne",seq);
	}
	public PostMessageDTO selectDTO(int seq) {
		return session.selectOne("PostMessage.selectDTO",seq);
	}
}
