package kh.spring.controller;

import java.io.File;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.NoticeDTO;
import kh.spring.dto.NoticeFileDTO;
import kh.spring.service.NoticeService;

@Controller
public class NoticeController {

	private Logger logger = LoggerFactory.getLogger(NoticeController.class);

	@Autowired
	private HttpSession session;
	@Autowired
	private NoticeService nService;
	
	@RequestMapping("deleteNotice.notice")
	public NexacroResult deleteNotice(@ParamVariable(name="n_seq")int n_seq) {
		System.out.println("딜리트노티스도착");
		NexacroResult nr = new NexacroResult();
		nService.deleteNotice(n_seq);
		nService.deleteNoticeFile(n_seq);
		return nr;
	}
	@RequestMapping("uploadNomalNotice.notice")
	public NexacroResult uploadNomalNotice(@ParamDataSet(name="in_ds")NoticeDTO dto) {
		System.out.println("업로드Notice도착");
		int result = nService.insertNomalNotice(dto);
		
		NexacroResult nr = new NexacroResult();
		return nr;
	}@RequestMapping("uploadNoticeFile.notice")
	public NexacroResult uploadNoticeFile(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("업로드노티스파일도착");
		
		int selectLastSeq = nService.selectLastSeq();
		System.out.println("Seq확인 : "+selectLastSeq);
		
		int selectn_seq= nService.selectn_seq();
		System.out.println("n_seq : " + selectn_seq);
		if(selectLastSeq == 0) {
			selectLastSeq = 1;
		}
		if(selectn_seq == 0) {
			selectn_seq = 1;
		}
		
		if(!(request instanceof MultipartHttpServletRequest)) {
			if(logger.isDebugEnabled()) {
				logger.debug("Request is not a MultipartHttpServletRequst");
			}
			return new NexacroResult();
		}
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		
		Enumeration<String> parameterNames = multipartRequest.getParameterNames();
		
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		
		String realPath = session.getServletContext().getRealPath("NoticeFiles");
		File filesPath = new File(realPath);
		if(!filesPath.exists()) {
			filesPath.mkdir();
		}
		
		Set<String> keySet = fileMap.keySet();
		for(String name: keySet) {
			MultipartFile multipartFile = fileMap.get(name);
			String originalFileName = multipartFile.getOriginalFilename();
			String uid = UUID.randomUUID().toString().replaceAll("-", "");
			String savedFileName = uid + "_" +originalFileName;
			
			NoticeFileDTO ndto = new NoticeFileDTO(0,0,selectn_seq,originalFileName,savedFileName,multipartFile.getSize());
			int result = nService.insertNoticeFile(ndto);
			
			if(result > 0) {
				File targetLoc = new File(filesPath.getAbsolutePath()+"/"+savedFileName);
				FileCopyUtils.copy(multipartFile.getBytes(), targetLoc);
			}
			
			if(logger.isDebugEnabled()) {
				logger.debug("uploaded file write success. file={}", originalFileName);
			}
		}
		return new NexacroResult();
	
	}@RequestMapping("updateNoticeFile.notice")
	public NexacroResult updateNoticeFile(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("업데이트노티스파일도착");
		
		int selectLastSeq = nService.selectLastSeq();
		int selectseq = nService.selectseq();
		System.out.println("Seq확인 : "+selectLastSeq);
		System.out.println("현재시퀀스 : "+selectseq);
		if(selectLastSeq == 0) {
			selectLastSeq = 1;
		}
		
		if(!(request instanceof MultipartHttpServletRequest)) {
			if(logger.isDebugEnabled()) {
				logger.debug("Request is not a MultipartHttpServletRequst");
			}
			return new NexacroResult();
		}
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		
		Enumeration<String> parameterNames = multipartRequest.getParameterNames();
		
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		
		String realPath = session.getServletContext().getRealPath("NoticeFiles");
		File filesPath = new File(realPath);
		if(!filesPath.exists()) {
			filesPath.mkdir();
		}
		
		Set<String> keySet = fileMap.keySet();
		for(String name: keySet) {
			MultipartFile multipartFile = fileMap.get(name);
			String originalFileName = multipartFile.getOriginalFilename();
			String uid = UUID.randomUUID().toString().replaceAll("-", "");
			String savedFileName = uid + "_" +originalFileName;
			
			NoticeFileDTO ndto = new NoticeFileDTO(0,0,selectLastSeq,originalFileName,savedFileName,multipartFile.getSize());
			int result = nService.updateNoticeFile(ndto);
			
			if(result > 0) {
				File targetLoc = new File(filesPath.getAbsolutePath()+"/"+savedFileName);
				FileCopyUtils.copy(multipartFile.getBytes(), targetLoc);
			}
			
			if(logger.isDebugEnabled()) {
				logger.debug("uploaded file write success. file={}", originalFileName);
			}
		}
		return new NexacroResult();
	}
	//조회
	@RequestMapping("selectNomalNotice.notice")
	public NexacroResult selectNomalNotice() {
		NexacroResult nr = new NexacroResult();
		List<NoticeDTO> list = nService.selectNomalNotice();
		nr.addDataSet("out_ds",list);
		return nr;
	}@RequestMapping("selectScolarNotice.notice")
	public NexacroResult selectScolarNotice() {
		System.out.println("셀렉트스콜라도착");
		NexacroResult nr = new NexacroResult();
		List<NoticeDTO> list = nService.selectScolarNotice();
		nr.addDataSet("out_ds", list);
		return nr;
	}@RequestMapping("selectBachelorNotice.notice")
	public NexacroResult selectBachelorNotice() {
		NexacroResult nr = new NexacroResult();
		List<NoticeDTO> list = nService.selectBachelorNotice();
		nr.addDataSet("out_ds", list);
		return nr;
	}@RequestMapping("selectEmployNotice.notice")
	public NexacroResult selectEmployNotice() {
		NexacroResult nr = new NexacroResult();
		List<NoticeDTO> list = nService.selectEmployNotice();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	@RequestMapping("selectNomalNotice_Info.notice")
	public NexacroResult selectNomalNotice_Info(@ParamVariable(name="n_seq")int n_seq) {
		System.out.println(n_seq);
		NexacroResult nr = new NexacroResult();
		
		NoticeDTO dto = nService.selectNomalNotice_Info(n_seq);
		List<NoticeFileDTO> ndto = nService.selectNomalNoticeFile(n_seq);
		nr.addDataSet("out_ds", dto);
		nr.addDataSet("out_nds", ndto);
		return nr;
	}@RequestMapping("updateNomalNotice.notice")
	public NexacroResult updateNomalNotice(@ParamDataSet(name="in_ds")NoticeDTO dto) {
		System.out.println("업데이트노말노티스 도착");
		NexacroResult nr = new NexacroResult();
		//if(dto.getWritedate().length()>9) {
		//String writedate = dto.getWritedate().substring(0, 10);
		//String rwritedate = writedate.replace("-", "");
		//dto.setWritedate(rwritedate);
		//}
		
		int result = nService.updateNomalNotice(dto);
		return nr;
	}
	
	
	@ExceptionHandler
	public String exceptionhandler(Exception e){
		e.printStackTrace();
		return "error";
	}

}
