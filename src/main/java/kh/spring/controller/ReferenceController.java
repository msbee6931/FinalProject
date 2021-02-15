package kh.spring.controller;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.mail.Session;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
	@RequestMapping("refList.ref")
	public String goPds(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		if(page <= 0) {
			page = 1;
		}
		int count = Rservice.count();
		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		List<ReferenceDTO> list = Rservice.selectByPage(page);
		List<Reference_FileDTO> file = RFservice.selectFileAll();
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getSeq() == file.get(j).getParentSeq()) {
					list.get(i).setFile("Y");
				}
			}
		}

		String navi = Rservice.navi(page);
		navi = navi.substring(0, navi.length()-1);
		model.addAttribute("select",1);
		model.addAttribute("type","default");
		model.addAttribute("list",list);
		model.addAttribute("count",count);
		model.addAttribute("navi",navi);
		model.addAttribute("page",page);
		model.addAttribute("end",end);
		return "ref/pds";
	}
	@RequestMapping("search.ref")
	public String search(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		String content = request.getParameter("content");
		String category = request.getParameter("category");
		System.out.println(content +":" +category );
		if(page <= 0) {
			page = 1;
		}
		int count = Rservice.searchCount(content,category);

		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		List<ReferenceDTO> list = Rservice.searchByPage(content,category,page);
		System.out.println("List : "+ list.size());
		List<Reference_FileDTO> file = RFservice.selectFileAll();
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getSeq() == file.get(j).getParentSeq()) {
					list.get(i).setFile("Y");
				}
			}
		}
		String navi = Rservice.searchNavi(page,content,category);
		navi = navi.substring(0, navi.length()-1);
		model.addAttribute("select",category);
		model.addAttribute("type","search");
		model.addAttribute("list",list);
		model.addAttribute("count",count);
		model.addAttribute("navi",navi);
		model.addAttribute("page",page);
		model.addAttribute("end",end);
		return "ref/pds";
	}
	@RequestMapping("download.ref")
	public void download(HttpServletRequest request,HttpServletResponse resp) throws Exception {
		int seq = Integer.parseInt(request.getParameter("seq"));
		Reference_FileDTO dto = new Reference_FileDTO();
		dto.setParentSeq(seq);
		List<Reference_FileDTO> list = RFservice.selectFileSeq(dto);

		for(int i=0; i<list.size(); i++) {
			String oriName = list.get(i).getFileName();
			String savedName = list.get(i).getSavedFileName();
			String filePath = session.getServletContext().getRealPath("ReferenceFiles");
			File targetFile = new File(filePath + "/" + savedName);
			System.out.println(targetFile.exists() && targetFile.isFile());
			if(targetFile.exists() && targetFile.isFile()) {
				resp.setContentType("application/octet-stream; charset=utf8"); 	//응답으로 보낼 데이터의 내용 형태 세팅/resp 기본적으로 text형식으로 보낸다.(text형식으로 보내면 랜더링 된다
				resp.setContentLength((int)targetFile.length());
				resp.setHeader("Content-Disposition", "attachment; filename=\""+oriName+"\"");

				FileInputStream fis = new FileInputStream(targetFile);
				ServletOutputStream sos = resp.getOutputStream();
				FileCopyUtils.copy(fis, sos);
				fis.close();
				sos.flush();
				sos.close();
			}
		}
	}
	@RequestMapping("view.ref")
	public String view() {
		return "ref/view";
	}

}
