package kh.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.PostMessageDAO;
import kh.spring.dto.PostMessageDTO;

@Service
public class PostMessageService {

	@Autowired
	private PostMessageDAO dao;
	
	public int insert(PostMessageDTO dto) {
		return dao.insert(dto);
	}
	
	public List<PostMessageDTO> listByReceiver(String receiver){
		return dao.listByReceiver(receiver);
	}
	public List<PostMessageDTO> listBySender(String sender){
		return dao.listBySender(sender);
	}
	
	public int alarm(String receiver){
		return dao.alarm(receiver);
	}
	public int update(PostMessageDTO dto) {
		return dao.update(dto);
	}
	public int delete(List<PostMessageDTO> list) {
		return dao.delete(list);
	}
	public int updateConfirm(List<PostMessageDTO> list) {
		return dao.updateConfirm(list);
	}
}
