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
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

import kh.spring.dto.ColScheduleDTO;
import kh.spring.dto.IndScheduleDTO;
import kh.spring.dto.NoticeDTO;
import kh.spring.dto.NoticeFileDTO;
import kh.spring.dto.PostMessageDTO;
import kh.spring.service.ColScheduleService;
import kh.spring.service.NoticeService;
import kh.spring.service.PostMessageService;
import kh.spring.service.ScheduleService;
import kh.spring.service.ScholarshipService;

@Controller
public class NoticeController {

	private Logger logger = LoggerFactory.getLogger(NoticeController.class);

	@Autowired
	private HttpSession session;
	@Autowired
	private NoticeService nService;
	@Autowired
	private ScholarshipService sService;
	@Autowired
	private ColScheduleService cService;
	@Autowired
	private ScheduleService scService;
	@Autowired
	private PostMessageService pService; 
	
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
	
	
	@RequestMapping("normalList.notice")
	public String goNormal(Model model,HttpServletRequest request) throws Exception {		
		int page = Integer.parseInt(request.getParameter("page"));
		System.out.println("PAGE : " + page);
		if(page <= 0) {
			page = 1;
		}
		int count = nService.normalCount();
		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		String navi = nService.normalNavi(page);
		String type = "notice";
		List<NoticeDTO> list = nService.selectNormalByPage(page,type);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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
		return "notice/normal";
	}
	@RequestMapping("searchNormal.notice")
	public String searchNormal(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		String content = request.getParameter("content");
		String category = request.getParameter("category");
		System.out.println(content +":" +category );
		if(page <= 0) {
			page = 1;
		}
		int count = nService.searchNormalCount(content,category);

		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		List<NoticeDTO> list = nService.searchNormalByPage(content,category,page);
		String navi = nService.searchNormalNavi(page,content,category);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				for(int j=0; j<file.size(); j++) {
					if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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

		return "notice/normal";
	}
	@RequestMapping("normalView.notice")
	public String normalView(HttpServletRequest request,Model model) {
		int seq = Integer.parseInt(request.getParameter("seq"));
		
		List<NoticeDTO> list = nService.selectNomalNotice();
		NoticeDTO dto1 = new NoticeDTO(); //현재
		NoticeDTO dto2 = new NoticeDTO(); //다음
		NoticeDTO dto3 = new NoticeDTO(); //이전
		int next = 0;
		int prev = 0;
		for(int i=0; i<list.size(); i++) {
			if(list.get(i).getN_seq() == seq) {
				if(i+1 < list.size()) {
					next = list.get(i+1).getN_seq();
				}
				if(i-1 >= 0) {
					prev = list.get(i-1).getN_seq();
				}
				dto1.setN_seq(seq);
				dto2.setN_seq(next);
				dto3.setN_seq(prev);
			}
		}
		dto1.setN_seq(seq);
		nService.view_countUpd(dto1);
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setParentSeq(seq);
		dto1 = nService.selectListSeq(dto1);
		dto2 = nService.selectListSeq(dto2);
		dto3 = nService.selectListSeq(dto3);
		List<NoticeFileDTO> list2 = nService.selectFileParentSeq(fdto);
		model.addAttribute("list",list2);
		model.addAttribute("dto1",dto1);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto3",dto3);
		return "notice/normalView";
	}
	
	
	@RequestMapping("academicList.notice")
	public String goAcademic(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		if(page <= 0) {
			page = 1;
		}
		int count = nService.academicCount();
		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		String navi = nService.academicNavi(page);
		String type = "notice";
		List<NoticeDTO> list = nService.selectAcademicByPage(page,type);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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
		return "notice/academic";
	}
	@RequestMapping("searchAcademic.notice")
	public String searchAcademic(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		String content = request.getParameter("content");
		String category = request.getParameter("category");
		System.out.println(content +":" +category );
		if(page <= 0) {
			page = 1;
		}
		int count = nService.searchAcademicCount(content,category);

		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		List<NoticeDTO> list = nService.searchAcademicByPage(content,category,page);
		String navi = nService.searchAcademicNavi(page,content,category);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				for(int j=0; j<file.size(); j++) {
					if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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

		return "notice/academic";
	}
	@RequestMapping("academicView.notice")
	public String academicView(HttpServletRequest request,Model model) {
		int seq = Integer.parseInt(request.getParameter("seq"));
		
		List<NoticeDTO> list = nService.selectAcademicNotice();
		NoticeDTO dto1 = new NoticeDTO(); //현재
		NoticeDTO dto2 = new NoticeDTO(); //다음
		NoticeDTO dto3 = new NoticeDTO(); //이전
		int next = 0;
		int prev = 0;
		for(int i=0; i<list.size(); i++) {
			if(list.get(i).getN_seq() == seq) {
				if(i+1 < list.size()) {
					next = list.get(i+1).getN_seq();
				}
				if(i-1 >= 0) {
					prev = list.get(i-1).getN_seq();
				}
				dto1.setN_seq(seq);
				dto2.setN_seq(next);
				dto3.setN_seq(prev);
			}
		}
		dto1.setN_seq(seq);
		nService.view_countUpd(dto1);
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setParentSeq(seq);
		dto1 = nService.selectListSeq(dto1);
		dto2 = nService.selectListSeq(dto2);
		dto3 = nService.selectListSeq(dto3);
		List<NoticeFileDTO> list2 = nService.selectFileParentSeq(fdto);
		model.addAttribute("list",list2);
		model.addAttribute("dto1",dto1);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto3",dto3);
		return "notice/academicView";
	}
	
	@RequestMapping("scholarList.notice")
	public String goScholar(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		if(page <= 0) {
			page = 1;
		}
		int count = nService.scholarCount();
		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		String navi = nService.scholarNavi(page);
		String type = "notice";
		List<NoticeDTO> list = nService.selectScholarByPage(page,type);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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
		return "notice/scholar";
	}
	@RequestMapping("searchScholar.notice")
	public String searchScholar(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		String content = request.getParameter("content");
		String category = request.getParameter("category");
		System.out.println(content +":" +category );
		if(page <= 0) {
			page = 1;
		}
		int count = nService.searchScholarCount(content,category);

		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		List<NoticeDTO> list = nService.searchScholarByPage(content,category,page);
		String navi = nService.searchScholarNavi(page,content,category);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				for(int j=0; j<file.size(); j++) {
					if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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

		return "notice/scholar";
	}
	@RequestMapping("scholarView.notice")
	public String scholarView(HttpServletRequest request,Model model) {
		int seq = Integer.parseInt(request.getParameter("seq"));
		
		List<NoticeDTO> list = nService.selectScholarNotice();
		NoticeDTO dto1 = new NoticeDTO(); //현재
		NoticeDTO dto2 = new NoticeDTO(); //다음
		NoticeDTO dto3 = new NoticeDTO(); //이전
		int next = 0;
		int prev = 0;
		for(int i=0; i<list.size(); i++) {
			if(list.get(i).getN_seq() == seq) {
				if(i+1 < list.size()) {
					next = list.get(i+1).getN_seq();
				}
				if(i-1 >= 0) {
					prev = list.get(i-1).getN_seq();
				}
				dto1.setN_seq(seq);
				dto2.setN_seq(next);
				dto3.setN_seq(prev);
			}
		}
		dto1.setN_seq(seq);
		nService.view_countUpd(dto1);
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setParentSeq(seq);
		dto1 = nService.selectListSeq(dto1);
		dto2 = nService.selectListSeq(dto2);
		dto3 = nService.selectListSeq(dto3);
		List<NoticeFileDTO> list2 = nService.selectFileParentSeq(fdto);
		model.addAttribute("list",list2);
		model.addAttribute("dto1",dto1);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto3",dto3);
		return "notice/scholarView";
	}
	
	@RequestMapping("employmentList.notice")
	public String goEmployment(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		if(page <= 0) {
			page = 1;
		}
		int count = nService.employmentCount();
		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		String navi = nService.employmentNavi(page);
		String type = "notice";
		List<NoticeDTO> list = nService.selectEmploymentByPage(page,type);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
		for(int i=0; i<list.size(); i++) {
			for(int j=0; j<file.size(); j++) {
				if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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
		return "notice/employment";
	}
	@RequestMapping("searchEmployment.notice")
	public String searchEmployment(Model model,HttpServletRequest request) throws Exception {
		int page = Integer.parseInt(request.getParameter("page"));
		String content = request.getParameter("content");
		String category = request.getParameter("category");
		System.out.println(content +":" +category );
		if(page <= 0) {
			page = 1;
		}
		int count = nService.searchEmploymentCount(content,category);

		int end = count/10;
		if(count % 10 > 0) {
			end += 1;
		}
		if(page >= end) {
			page = end;
		}
		List<NoticeDTO> list = nService.searchEmploymentByPage(content,category,page);
		String navi = nService.searchEmploymentNavi(page,content,category);
		List<NoticeFileDTO> file = nService.selectFileAll();
		if(list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				for(int j=0; j<file.size(); j++) {
					if(list.get(i).getN_seq() == file.get(j).getParentSeq()) {
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

		return "notice/employment";
	}
	@RequestMapping("employmentView.notice")
	public String employmentView(HttpServletRequest request,Model model) {
		int seq = Integer.parseInt(request.getParameter("seq"));
		
		List<NoticeDTO> list = nService.selectScholarNotice();
		NoticeDTO dto1 = new NoticeDTO(); //현재
		NoticeDTO dto2 = new NoticeDTO(); //다음
		NoticeDTO dto3 = new NoticeDTO(); //이전
		int next = 0;
		int prev = 0;
		for(int i=0; i<list.size(); i++) {
			if(list.get(i).getN_seq() == seq) {
				if(i+1 < list.size()) {
					next = list.get(i+1).getN_seq();
				}
				if(i-1 >= 0) {
					prev = list.get(i-1).getN_seq();
				}
				dto1.setN_seq(seq);
				dto2.setN_seq(next);
				dto3.setN_seq(prev);
			}
		}
		dto1.setN_seq(seq);
		nService.view_countUpd(dto1);
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setParentSeq(seq);
		dto1 = nService.selectListSeq(dto1);
		dto2 = nService.selectListSeq(dto2);
		dto3 = nService.selectListSeq(dto3);
		List<NoticeFileDTO> list2 = nService.selectFileParentSeq(fdto);
		model.addAttribute("list",list2);
		model.addAttribute("dto1",dto1);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto3",dto3);
		return "notice/employmentView";
	}
	
	@RequestMapping("downloadAll.notice")
	public void downloadAll(HttpServletRequest request,HttpServletResponse resp) throws Exception {
		int seq = Integer.parseInt(request.getParameter("seq"));
		String title = request.getParameter("title");
		NoticeFileDTO dto = new NoticeFileDTO();
		dto.setParentSeq(seq);
		List<NoticeFileDTO> list = nService.selectFileParentSeq(dto);
		String filePath = session.getServletContext().getRealPath("NoticeFiles");
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

	@RequestMapping("download.notice")
	public void download(HttpServletRequest request,HttpServletResponse resp)throws Exception {
		int seq = Integer.parseInt(request.getParameter("seq"));
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setF_seq(seq);
		fdto = nService.selectFileSeq(fdto);
		String filePath = session.getServletContext().getRealPath("NoticeFiles");
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
	
	@RequestMapping("/main.notice")
	public NexacroResult mainStd() {
		NexacroResult nr = new NexacroResult();
		List<NoticeDTO> list = nService.selectNoticeList();
		List<NoticeFileDTO> list2 = nService.selectFileAll();
		List<ColScheduleDTO> list3 = cService.selectAll();
		nr.addDataSet("out_ds",list);
		nr.addDataSet("out_ds2",list2);
		nr.addDataSet("out_ds3",list3);
		return nr;
	}
	@RequestMapping("/mainPro.notice")
	public NexacroResult mainPro(HttpServletResponse response) {
		String proCode = session.getAttribute("pro").toString();
		
		NexacroResult nr = new NexacroResult();
		PlatformData out_pData = new PlatformData();
		VariableList varList = out_pData.getVariableList();
		int writer = (int)session.getAttribute("pro");
		List<NoticeDTO> list = nService.selectNoticeList();
		List<NoticeFileDTO> list2 = nService.selectFileAll();
		List<IndScheduleDTO> list3 = scService.selectIndSchedule(writer);
		int count = pService.alarm(proCode);
		varList.add("count",count);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		// Send data
		try {pRes.sendData();}
		catch(PlatformException e) {e.printStackTrace();}
		
		nr.addDataSet("out_ds",list);
		nr.addDataSet("out_ds2",list2);
		nr.addDataSet("out_ds3",list3);
		return nr;
	}
	@RequestMapping("/mainAdm.notice")
	public NexacroResult mainAdm(HttpServletResponse response) {
		String AdmCode = session.getAttribute("adm").toString();
		
		NexacroResult nr = new NexacroResult();
		PlatformData out_pData = new PlatformData();
		VariableList varList = out_pData.getVariableList();
		List<NoticeDTO> list = nService.selectNoticeList();
		List<NoticeFileDTO> list2 = nService.selectFileAll();
		List<ColScheduleDTO> list3 = cService.selectAll();
		int count = pService.alarm(AdmCode);
		varList.add("count",count);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		// Send data
		try {pRes.sendData();}
		catch(PlatformException e) {e.printStackTrace();}
		
		nr.addDataSet("out_ds",list);
		nr.addDataSet("out_ds2",list2);
		nr.addDataSet("out_ds3",list3);
		return nr;
	}
	@RequestMapping("/noticeOnload.notice")
	public NexacroResult noticeOnload(@ParamVariable(name="nCode")int nCode) {
		NexacroResult nr = new NexacroResult();
		NoticeDTO dto  = nService.selectNomalNotice_Info(nCode);
		
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setParentSeq(nCode);
		List<NoticeFileDTO> list = nService.selectFileParentSeq(fdto);

		nr.addDataSet("out_ds",dto);
		nr.addDataSet("out_ds2",list);
		return nr;
	}
	@RequestMapping("/downloadNotice.notice")
	public NexacroFileResult downNoticeFile(HttpServletRequest request) throws Exception {
		System.out.println("다운로드 확인");
		String filePath = session.getServletContext().getRealPath("NoticeFiles"); //현재 파일이 존재하는 폴더 경로 가져오기
		File targetFile = null; //실제 파일 취급
		String tranName =""; //다운받을 파일에 입힐 이름


		int seq = Integer.parseInt(request.getParameter("seq")); // 부모 고유 번호 받아오기
		String fileTitle = request.getParameter("title");
		System.out.println("SEQ : " + seq);
		System.out.println("TITLE : " + fileTitle);
		
		NoticeFileDTO fdto = new NoticeFileDTO();
		fdto.setParentSeq(seq);
		List<NoticeFileDTO> list = nService.selectFileParentSeq(fdto);
		int countFile = list.size(); // 해당 게시물에 총 첨부된 파일 갯수

		ArrayList arrSaved = new ArrayList(); //저장된 이름
		ArrayList arrOrg = new ArrayList(); // 원래 이름
		//그중 다운로드 될 파일 갯수 및 이름 조회
		for(int i=0;i<countFile;i++) {
			String downSFile  = request.getParameter("savedFileName'"+i+"'"); // 넥사에서 setPostData로 보낸 데이터		
			arrSaved.add(i, downSFile);
			String downOFile  = request.getParameter("fileName'"+i+"'"); // 넥사에서 setPostData로 보낸 데이터
			System.out.println("downOFILE : " + downOFile);
			arrOrg.add(i, downOFile);
		}


		for(int i=0; i<arrSaved.size();i++) {
			//파일이 2개 이상이면 압축파일로 저장한다.
			if(arrSaved.size()>1) {
				String uid = UUID.randomUUID().toString().replaceAll("-", "");
			    targetFile = sService.getCompressZipFile(arrSaved, filePath, "compressZip_"+uid);	    
			    tranName = fileTitle+".zip";
			} else {
				targetFile = new File(filePath+"/"+arrSaved.get(i));
				tranName =(String)arrOrg.get(i);
			}
		}

		NexacroFileResult nfr = new NexacroFileResult(targetFile);
		nfr.setOriginalName(tranName);
		return nfr;
	}    
	@ExceptionHandler
	public String exceptionhandler(Exception e){
		e.printStackTrace();
		return "error";
	}

}
