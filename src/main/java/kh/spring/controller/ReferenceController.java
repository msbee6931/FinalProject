package kh.spring.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;

import java.util.ArrayList;
import java.util.Enumeration;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;


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
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.AttendDTO;
import kh.spring.dto.PostMessageDTO;
import kh.spring.dto.ReferenceDTO;
import kh.spring.dto.Reference_FileDTO;
import kh.spring.dto.ReqSchFileDTO;
import kh.spring.service.ReferenceService;
import kh.spring.service.Reference_FileService;
import kh.spring.service.ScholarshipService;

@Controller
@RequestMapping("/reference")
public class ReferenceController {

	private Logger logger = LoggerFactory.getLogger(ScholarshipController.class);

	@Autowired
	private ReferenceService Rservice;
	@Autowired
	private Reference_FileService RFservice;
	@Autowired
	private ScholarshipService sService;
	@Autowired
	private HttpSession session;

	@RequestMapping("uploadDTO")
	public NexacroResult uploadReferenceDTO(@ParamDataSet(name="in_ds")ReferenceDTO dto) throws Exception{

	      session.setAttribute("ycount", 0);
		NexacroResult nr = new NexacroResult();
		int seq1 = (Integer)session.getAttribute("login");
		String writer = Integer.toString(seq1);
		dto.setWriter(writer);
		int sResult = Rservice.insertDTO(dto);

		if(sResult>0) {
			int fseq = Rservice.selectLastSeq();
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("fseq : "+fseq);

			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			System.out.println("*");
			session.setAttribute("fseq", fseq);
		}else {
			System.out.println("에러 등장");
		}

		return nr;
	}

	@RequestMapping("uploadFile")
	public NexacroResult uploadFile(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("파일 업로드");
		int parentSeq = (Integer)session.getAttribute("fseq");

		
				parentSeq+=1;
				System.out.println("*----");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("parentSeq : "+parentSeq);

				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
				System.out.println("*---");
		
		
		
		
		
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
		System.out.println("=============================");
		System.out.println("=============================");
		System.out.println("useq : "+dto.getSeq());
		System.out.println("=============================");
		System.out.println("=============================");
		return nr;
	}
	@RequestMapping("updateFile")
	public NexacroResult updateFile(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("파일 업데이트");

		int parentSeq = (Integer)session.getAttribute("useq");

			System.out.println("##########################");
			System.out.println("##########################");
			System.out.println("parentSeq : "+parentSeq);
			System.out.println("##########################");
			System.out.println("##########################");

		
		
		
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

		
		return new NexacroResult();
	}


	@RequestMapping("delete")
	public NexacroResult delete(@ParamDataSet(name="in_ds")List<ReferenceDTO> list) {

		NexacroResult nr = new NexacroResult();
		Rservice.delete(list);
		RFservice.delteFile(list);
		return nr;
	}
	
	@RequestMapping("deleteFile")
	public NexacroResult deleteFile(@ParamDataSet(name="in_ds")List<Reference_FileDTO> list) {

		NexacroResult nr = new NexacroResult();
		RFservice.deleteFile(list);
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
		String navi = Rservice.navi(page);
		List<ReferenceDTO> list = Rservice.selectByPage(page);
		List<Reference_FileDTO> file = RFservice.selectFileAll();
		if(list.size() > 0) {
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getSeq() == file.get(j).getParentSeq()) {
					list.get(i).setFile("Y");
				}
			}
		}
		navi = navi.substring(0, navi.length()-1);
		}
		
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
		String navi = Rservice.searchNavi(page,content,category);
		List<Reference_FileDTO> file = RFservice.selectFileAll();
		if(list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				for(int j=0; j<file.size(); j++) {
					if(list.get(i).getSeq() == file.get(j).getParentSeq()) {
						list.get(i).setFile("Y");
					}
				}
			}
			navi = navi.substring(0, navi.length()-1);
		}
		model.addAttribute("category",category);
		model.addAttribute("content",content);
		model.addAttribute("type","search");
		model.addAttribute("list",list);
		model.addAttribute("count",count);
		model.addAttribute("navi",navi);
		model.addAttribute("page",page);
		model.addAttribute("end",end);

		return "ref/pds";
	}
	@RequestMapping("downloadAll.ref")
	public void downloadAll(HttpServletRequest request,HttpServletResponse resp) throws Exception {
		int seq = Integer.parseInt(request.getParameter("seq"));
		String title = request.getParameter("title");
		Reference_FileDTO dto = new Reference_FileDTO();
		dto.setParentSeq(seq);
		List<Reference_FileDTO> list = RFservice.selectFileParentSeq(dto);
		String filePath = session.getServletContext().getRealPath("ReferenceFiles");
		if(list.size() <= 1) {
			String oriName = list.get(0).getFileName();
			String savedName = list.get(0).getSavedFileName();
			File targetFile = new File(filePath + "/" + savedName);
			if(targetFile.exists() && targetFile.isFile()) {
				String browser = getBrowser(request);
				String encodedFilename = null;
				if (browser.equals("MSIE")) {
					encodedFilename = URLEncoder.encode(oriName, "UTF-8").replaceAll(
							"\\+", "%20");
				} else if (browser.equals("Firefox")) {
					encodedFilename = "\""
							+ new String(oriName.getBytes("UTF-8"), "8859_1") + "\"";
				} else if (browser.equals("Opera")) {
					encodedFilename = "\""
							+ new String(oriName.getBytes("UTF-8"), "8859_1") + "\"";
				} else if (browser.equals("Chrome")) {
					StringBuffer sb = new StringBuffer();
					for (int j = 0; j < oriName.length(); j++) {
						char c = oriName.charAt(j);
						if (c > '~') {
							sb.append(URLEncoder.encode("" + c, "UTF-8"));
						} else {
							sb.append(c);
						}
					}
					encodedFilename = sb.toString();
				} else {
					throw new IOException("Not supported browser");
				}
				resp.setContentType("application/octet-stream; charset=utf-8"); 	//응답으로 보낼 데이터의 내용 형태 세팅/resp 기본적으로 text형식으로 보낸다.(text형식으로 보내면 랜더링 된다

				resp.setContentLength((int)targetFile.length());
				resp.setHeader("Content-Disposition", "attachment; filename=\""+encodedFilename+"\"");
				FileInputStream fis = new FileInputStream(targetFile);
				ServletOutputStream sos = resp.getOutputStream();
				FileCopyUtils.copy(fis, sos);
				fis.close();
				sos.flush();
				sos.close();
			}
		}else {
			File targetFile = null; //실제 파일 취급
			String tranName =""; //다운받을 파일에 입힐 이름
			ArrayList arrSaved = new ArrayList();
			ArrayList arrOrg = new ArrayList();
			for(int i=0; i< list.size(); i++) {
				String savedName  = list.get(i).getSavedFileName(); // 넥사에서 setPostData로 보낸 데이터
				arrSaved.add(i, savedName);
				
				String oriName  = list.get(i).getFileName(); // 넥사에서 setPostData로 보낸 데이터
				arrOrg.add(i, oriName);
			}
			for(int i=0; i<arrSaved.size();i++) {
				//파일이 2개 이상이면 압축파일로 저장한다.
				if(arrSaved.size()>1) {
					String uid = UUID.randomUUID().toString().replaceAll("-", "");
				    targetFile = sService.getCompressZipFile(arrSaved, filePath, "compressZip_"+uid);	    
				    tranName = title+".zip";	 
					resp.setContentType("application/zip; charset=utf-8"); 	//응답으로 보낼 데이터의 내용 형태 세팅/resp 기본적으로 text형식으로 보낸다.(text형식으로 보내면 랜더링 된다

					resp.setContentLength((int)targetFile.length());
					resp.setHeader("Content-Disposition", "attachment; filename=\""+tranName+"\"");
					FileInputStream fis = new FileInputStream(targetFile);
					ServletOutputStream sos = resp.getOutputStream();
					FileCopyUtils.copy(fis, sos);
					fis.close();
					sos.flush();
					sos.close();
				}
			}
		}

	}
	@RequestMapping("view.ref")
	public String view(HttpServletRequest request,Model model) {
		int seq = Integer.parseInt(request.getParameter("seq"));
		
		List<ReferenceDTO> list = Rservice.selectAll();
		ReferenceDTO dto1 = new ReferenceDTO(); //현재
		ReferenceDTO dto2 = new ReferenceDTO(); //다음
		ReferenceDTO dto3 = new ReferenceDTO(); //이전
		int next = 0;
		int prev = 0;
		for(int i=0; i<list.size(); i++) {
			if(list.get(i).getSeq() == seq) {
				if(i+1 < list.size()) {
					next = list.get(i+1).getSeq();
				}
				if(i-1 >= 0) {
					prev = list.get(i-1).getSeq();
				}
				dto1.setSeq(seq);
				dto2.setSeq(next);
				dto3.setSeq(prev);
			}
		}
		dto1.setSeq(seq);
		Rservice.view_countUpd(dto1);
		Reference_FileDTO fdto = new Reference_FileDTO();
		fdto.setParentSeq(seq);
		dto1 = Rservice.selectListSeq(dto1);
		dto2 = Rservice.selectListSeq(dto2);
		dto3 = Rservice.selectListSeq(dto3);
		List<Reference_FileDTO> list2 = RFservice.selectFileParentSeq(fdto);
		model.addAttribute("list",list2);
		model.addAttribute("dto1",dto1);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto3",dto3);
		return "ref/view";
	}
	@RequestMapping("download.ref")
	public void download(HttpServletRequest request,HttpServletResponse resp)throws Exception {
		int seq = Integer.parseInt(request.getParameter("seq"));
		Reference_FileDTO fdto = new Reference_FileDTO();
		fdto.setSeq(seq);
		fdto = RFservice.selectFileSeq(fdto);
		String filePath = session.getServletContext().getRealPath("ReferenceFiles");
		String oriName = fdto.getFileName();
		String savedName =  fdto.getSavedFileName();
		File targetFile = new File(filePath + "/" + savedName);
		if(targetFile.exists() && targetFile.isFile()) {
			String browser = getBrowser(request);
			String encodedFilename = null;
			if (browser.equals("MSIE")) {
				encodedFilename = URLEncoder.encode(oriName, "UTF-8").replaceAll(
						"\\+", "%20");
			} else if (browser.equals("Firefox")) {
				encodedFilename = "\""
						+ new String(oriName.getBytes("UTF-8"), "8859_1") + "\"";
			} else if (browser.equals("Opera")) {
				encodedFilename = "\""
						+ new String(oriName.getBytes("UTF-8"), "8859_1") + "\"";
			} else if (browser.equals("Chrome")) {
				StringBuffer sb = new StringBuffer();
				for (int j = 0; j < oriName.length(); j++) {
					char c = oriName.charAt(j);
					if (c > '~') {
						sb.append(URLEncoder.encode("" + c, "UTF-8"));
					} else {
						sb.append(c);
					}
				}
				encodedFilename = sb.toString();
			} else {
				throw new IOException("Not supported browser");
			}
			resp.setContentType("application/octet-stream; charset=utf-8"); 	//응답으로 보낼 데이터의 내용 형태 세팅/resp 기본적으로 text형식으로 보낸다.(text형식으로 보내면 랜더링 된다
			resp.setContentLength((int)targetFile.length());
			resp.setHeader("Content-Disposition", "attachment; filename=\""+encodedFilename+"\"");
			FileInputStream fis = new FileInputStream(targetFile);
			ServletOutputStream sos = resp.getOutputStream();
			FileCopyUtils.copy(fis, sos);
			fis.close();
			sos.flush();
			sos.close();
		}
	}
	public String getBrowser(HttpServletRequest request) {
		String header = request.getHeader("User-Agent");
		if (header.indexOf("MSIE") > -1) {
			return "MSIE";
		} else if (header.indexOf("Trident") > -1) {   // IE11 문자열 깨짐 방지
			return "Trident";
		} else if (header.indexOf("Chrome") > -1) {
			return "Chrome";
		} else if (header.indexOf("Opera") > -1) {
			return "Opera";
		} else if (header.indexOf("Safari") > -1) {
			return "Safari";
		}
		return "Firefox";
	}
	
	@RequestMapping("findFile")
	public NexacroResult findFile(@ParamVariable(name="seq")int seq) {
		NexacroResult nr = new NexacroResult();
		session.setAttribute("useq", seq);
		List<Reference_FileDTO> list = RFservice.selectByParentSeq(seq);
		nr.addDataSet("out_ds",list);
		return nr;
	}
	@RequestMapping("garbageInsert")
	public NexacroResult newGarbage() {
		NexacroResult nr = new NexacroResult();
		int seq1 = (Integer)session.getAttribute("login");
		String writer = Integer.toString(seq1);
		ReferenceDTO dto = new ReferenceDTO();
		dto.setWriter(writer);
		dto.setTitle("axc_ss3321kw");
		dto.setContents("a");
		int sResult = Rservice.insertDTO(dto);
		int fseq = Rservice.selectLastSeq();
		session.setAttribute("fseq", fseq);
		if(sResult>0) {
			System.out.println("garbage입력 완료");
		}
		return nr;
	}
	
	@RequestMapping("garbageDelete")
	public NexacroResult Garbage() {
		NexacroResult nr = new NexacroResult();
		int sResult = Rservice.garbageDelete();
		if(sResult>0) {
			System.out.println("garbage삭제 완료");
		}
		return nr;
	}
}
