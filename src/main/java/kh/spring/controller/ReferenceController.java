package kh.spring.controller;

import java.io.File;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.mail.Session;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.PostMessageDTO;
import kh.spring.dto.ReferenceDTO;
import kh.spring.dto.Reference_FileDTO;
import kh.spring.dto.ReqSchFileDTO;
import kh.spring.service.ReferenceService;
import kh.spring.service.Reference_FileService;

@Controller
@RequestMapping("/reference")
public class ReferenceController {

	private Logger logger = LoggerFactory.getLogger(ScholarshipController.class);

	@Autowired
	private ReferenceService Rservice;
	@Autowired
	private Reference_FileService RFservice;
	
	@Autowired
	private HttpSession session;
	
	@RequestMapping("uploadDTO")
	public NexacroResult uploadReferenceDTO(@ParamDataSet(name="in_ds")ReferenceDTO dto) throws Exception{
		System.out.println("장학금 요청 컨트롤러 확인");

		dto.setWriter("12345");
		int sResult = Rservice.insertDTO(dto);
		int fseq = Rservice.selectLastSeq();
		session.setAttribute("fseq", fseq);
		
		NexacroResult nr = new NexacroResult();
		return nr;
	}

	@RequestMapping("uploadFile")
	public NexacroResult uploadFile(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("장학금 요청 컨트롤러 확인");

//		int selectLastSeq = sService.selectLastSeq(); 
//		System.out.println("parentSeq확인 : "+selectLastSeq);

		
		int parentSeq = (Integer)session.getAttribute("fseq");
		System.out.println("parentSeq : "+parentSeq);
		if(!(request instanceof MultipartHttpServletRequest)) {
			if(logger.isDebugEnabled()) {
				logger.debug("Request is not a MultipartHttpServletRequest");
			}
			return new NexacroResult();
		}

		MultipartHttpServletRequest multipartRequest = 
				(MultipartHttpServletRequest) request;

		// parameter and multipart parameter
		Enumeration<String> parameterNames = multipartRequest.getParameterNames();

		// files..
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

		String realPath = session.getServletContext().getRealPath("ReferenceFiles");
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


			Reference_FileDTO fDto = new Reference_FileDTO(0,0,parentSeq,originalFileName,savedFileName, multipartFile.getSize()); 
			int result = RFservice.insertFileDTO(fDto);
			//DB에 저장이 되었을 경우 파일을 복사 저장하라는 조건문
			if(result > 0) {
				File targetLoc = new File(filesPath.getAbsolutePath()+"/"+savedFileName);
				FileCopyUtils.copy(multipartFile.getBytes(), targetLoc);
			}

			// upload some logic…

			if(logger.isDebugEnabled()) {
				logger.debug("uploaded file write success. file={}", 
						originalFileName);
			}

		}
		session.removeAttribute("fseq");
		return new NexacroResult();
	}
	
	@RequestMapping("load")
	public NexacroResult referenceLoad() {

		NexacroResult nr = new NexacroResult();
		List<ReferenceDTO> list =Rservice.selectAll();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("loadFile")
	public NexacroResult refFileLoad() {

		NexacroResult nr = new NexacroResult();
		List<Reference_FileDTO> list =RFservice.selectFileAll();
		nr.addDataSet("out_ds",list);
		return nr;
	}
	
	@RequestMapping("update")
	public NexacroResult update(@ParamDataSet(name="in_ds")ReferenceDTO dto) {
	
		NexacroResult nr = new NexacroResult();
		Rservice.update(dto);
		session.setAttribute("useq",dto.getSeq());
		return nr;
	}
	@RequestMapping("updateFile")
	public NexacroResult updateFile(HttpServletRequest request, HttpServletResponse response) throws Exception{
		int parentSeq = (Integer)session.getAttribute("fseq");
		System.out.println("parentSeq : "+parentSeq);
		if(!(request instanceof MultipartHttpServletRequest)) {
			if(logger.isDebugEnabled()) {
				logger.debug("Request is not a MultipartHttpServletRequest");
			}
			return new NexacroResult();
		}

		MultipartHttpServletRequest multipartRequest = 
				(MultipartHttpServletRequest) request;

		// parameter and multipart parameter
		Enumeration<String> parameterNames = multipartRequest.getParameterNames();

		// files..
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

		String realPath = session.getServletContext().getRealPath("ReferenceFiles");
		File filesPath = new File(realPath); 
		if(!filesPath.exists()) {
			filesPath.mkdir();
		}


		Set<String> keySet = fileMap.keySet();
		
		RFservice.deleteAll(parentSeq);
		for(String name: keySet) {
			MultipartFile multipartFile = fileMap.get(name);
			String originalFileName = multipartFile.getOriginalFilename();
			String uid = UUID.randomUUID().toString().replaceAll("-", "");
			String savedFileName = uid + "_" +originalFileName;


			Reference_FileDTO fDto = new Reference_FileDTO(0,0,parentSeq,originalFileName,savedFileName, multipartFile.getSize()); 
			int result = RFservice.insertFileDTO(fDto);
			//DB에 저장이 되었을 경우 파일을 복사 저장하라는 조건문
			if(result > 0) {
				File targetLoc = new File(filesPath.getAbsolutePath()+"/"+savedFileName);
				FileCopyUtils.copy(multipartFile.getBytes(), targetLoc);
			}

			// upload some logic…

			if(logger.isDebugEnabled()) {
				logger.debug("uploaded file write success. file={}", 
						originalFileName);
			}

		}
		session.removeAttribute("fseq");
		return new NexacroResult();
	}
	
	
	@RequestMapping("delete")
	public NexacroResult delete(@ParamDataSet(name="in_ds")List<ReferenceDTO> list) {
	
		NexacroResult nr = new NexacroResult();
		Rservice.delete(list);
		RFservice.delteFile(list);
		return nr;
	}
	
	
}
