package kh.spring.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.AbsenceDTO;
import kh.spring.dto.AbsenceFileDTO;
import kh.spring.dto.ReqSchFileDTO;
import kh.spring.dto.RestDTO;
import kh.spring.dto.ScholarshipDTO;
import kh.spring.service.AbsenceService;

@Controller
@RequestMapping("/absence")
public class AbsenceController {
	
	@Autowired
	AbsenceService aService;
	@Autowired
	private HttpSession session;

	@RequestMapping("insert.absence")
	public NexacroResult insert(@ParamDataSet(name="in_ds")AbsenceDTO dto) throws Exception {
		System.out.println("휴학신청서 입력 컨트롤러 확인");
		NexacroResult nr = new NexacroResult();
		int result = aService.insertAbsence(dto);
		if(result>0) {
			System.out.println(",,,,,,,,,,,,>>>> 파일 전달 seq 확인 ,,,>>"+dto.getSeq());
			dto.getSeq();
		} else {
			System.out.println("에러 확인하기");
		}
		nr.addVariable("parentSeq", dto.getSeq());
		return nr;
	}
	
	//휴학 신청 파일 업로드
	@RequestMapping("fileUp.absence")
	public NexacroResult uploadReqSchFile(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("휴학 신청 파일쪽 컨트롤러 확인");
		int pSeq = Integer.parseInt(request.getParameter("parentSeq"));

		System.out.println("parentSeq확인 ----------------->>>> "+pSeq);

		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

		// files..
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

		String realPath = session.getServletContext().getRealPath("AbsenceFiles");
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


			AbsenceFileDTO fDto = new AbsenceFileDTO("0",0,pSeq,originalFileName,savedFileName, multipartFile.getSize()); 
			int result = aService.insertFileUp(fDto);
			//DB에 저장이 되었을 경우 파일을 복사 저장하라는 조건문
			if(result > 0) {
				File targetLoc = new File(filesPath.getAbsolutePath()+"/"+savedFileName);
				FileCopyUtils.copy(multipartFile.getBytes(), targetLoc);
			}
		}

		return new NexacroResult();
	}
	
	@RequestMapping("selectAll.absence")
	public NexacroResult selectAll() throws Exception {
		System.out.println("휴학신청서 전체 수신 컨트롤러 확인");
		NexacroResult nr = new NexacroResult();
		List<AbsenceDTO> list = aService.selectAllAbsence();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	
	@RequestMapping("selectOne.absence")
	public NexacroResult selectOne(@ParamVariable(name="seq")int seq) throws Exception {
		System.out.println("휴학신청서 수신 컨트롤러 확인");
		System.out.println(",,,,,,,,,,,,,,,,,넘어오는 시퀀스 확인 >>"+seq);
		NexacroResult nr = new NexacroResult();
		AbsenceDTO dto = aService.selectOneAbsence(seq);
		nr.addDataSet("out_ds", dto);
		return nr;
	}
	
	@RequestMapping("selectOneFile.absence")
	public NexacroResult selectOneFile(@ParamVariable(name="seq")int seq) throws Exception {
		System.out.println("휴학신청서 수신 파일 쪽 컨트롤러 확인");
		System.out.println("seq 확인,,,,,,,,,,>>"+seq);
		NexacroResult nr = new NexacroResult();
		List<AbsenceFileDTO> list =  aService.selectOneFile(seq);
		System.out.println(list.get(0).getFileName());
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	
	@RequestMapping("downAbsFile.absence")
	public NexacroFileResult downAbsFile(HttpServletRequest request) throws Exception {
		System.out.println("다운로드 확인");
		String filePath = session.getServletContext().getRealPath("AbsenceFiles"); //현재 파일이 존재하는 폴더 경로 가져오기
		File targetFile = null; //실제 파일 취급
		String tranName =""; //다운받을 파일에 입힐 이름


		int seq = Integer.parseInt(request.getParameter("seq")); // 부모 고유 번호 받아오기
		int countFile = aService.selectCountFile(seq); // 해당 게시물에 총 첨부된 파일 갯수

		ArrayList arrSaved = new ArrayList(); //저장된 이름
		ArrayList arrOrg = new ArrayList(); // 원래 이름
		//그중 다운로드 될 파일 갯수 및 이름 조회
		for(int i=0;i<countFile;i++) {
			String downSFile  = request.getParameter("savedFileName'"+i+"'"); // 넥사에서 setPostData로 보낸 데이터
			arrSaved.add(i, downSFile);
			String downOFile  = request.getParameter("fileName'"+i+"'"); // 넥사에서 setPostData로 보낸 데이터
			arrOrg.add(i, downOFile);
		}

		

		for(int i=0; i<arrSaved.size();i++) {
			//파일이 2개 이상이면 압축파일로 저장한다.
			if(arrSaved.size()>1) {
    
				String uid = UUID.randomUUID().toString().replaceAll("-", "");
			    targetFile = aService.getCompressZipFile(arrSaved, filePath, "compressZip_"+uid);	    
			    tranName = seq+"번_장학금_요청글_첨부파일.zip";

			} else {
				targetFile = new File(filePath+"/"+arrSaved.get(i));
				tranName =(String)arrOrg.get(i);
			}
		}

		NexacroFileResult nfr = new NexacroFileResult(targetFile);
		nfr.setOriginalName(tranName);
		return nfr;
	}  
	
	@RequestMapping("selectStdOne.absence")
	public NexacroResult selectStdOne(@ParamVariable(name="sCode")int sCode) throws Exception {
		System.out.println("휴학신청서 수신 컨트롤러 확인----->");
		NexacroResult nr = new NexacroResult();
		List<AbsenceDTO> dto = aService.selectStdOne(sCode);
		nr.addDataSet("out_ds", dto);
		return nr;
	}
	
	@RequestMapping("deleteReqAbs.absence")
	public NexacroResult deleteReqAbs(@ParamVariable(name="seq")int seq) throws Exception {
		System.out.println("휴학신청서 삭제 컨트롤러 확인----->");
		NexacroResult nr = new NexacroResult();
		int resultFile=aService.deleteReqAbsFile(seq);
		int result = aService.deleteReqAbs(seq);
		return nr;
	}
	
	
	//------------------------------------------------------>> 복학 따로 안만들고 휴학과 같이 쓰는중
	
	//복학신청서 작성
		@RequestMapping("insertRest.absence")
		public NexacroResult insertRest(@ParamDataSet(name="in_ds")RestDTO dto) throws Exception {
			System.out.println("복학신청서 입력 컨트롤러 확인");
			NexacroResult nr = new NexacroResult();
			int result = aService.insertRest(dto);
			return nr;
		}
		
		//복학신청서 조회
		@RequestMapping("selectOneRest.absence")
		public NexacroResult selectOneRest(@ParamVariable(name="std_code")int std_code) throws Exception {
			System.out.println("복학신청서 입력 컨트롤러 확인");
			System.out.println("stdCode 확인하기,,,,,,>");
			NexacroResult nr = new NexacroResult();
			List<RestDTO> list = aService.selectOneRest(std_code);
			nr.addDataSet("out_ds", list);
			return nr;
		}
		
		//복학신청서 전체 조회
		@RequestMapping("selectAllRest.absence")
		public NexacroResult selectAllRest() throws Exception {
			System.out.println("복학신청서 입력 컨트롤러 확인");
			NexacroResult nr = new NexacroResult();
			List<RestDTO> list = aService.selectAllRest();
			nr.addDataSet("out_ds", list);
			return nr;
		}
		
	
	
	
}
