package kh.spring.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.spring.dto.ScholarshipDTO;
import kh.spring.dto.Std_TranscriptDTO;
import kh.spring.dto.StudentsDTO;
import kh.spring.dto.TuitionDTO;
import kh.spring.service.ClassService;
import kh.spring.service.ScholarshipService;
import kh.spring.service.Std_TranscriptService;
import kh.spring.service.StudentsService;
import kh.spring.service.TuitionService;

@Controller
@RequestMapping("/certification")
public class CertificationController {

	@Autowired
	private StudentsService Sservice;

	@Autowired
	private TuitionService Tservice;
	
	@Autowired
	private ScholarshipService Scservice;
	
	@Autowired
	private ClassService Cservice;
	

	@Autowired
	private Std_TranscriptService STservice;
	
	@Autowired
	private HttpSession session;


	@RequestMapping("enrollment")
	public String enrollmnet(Model model) {
		int is_seq = (Integer)session.getAttribute("login");
		String s_seq = Integer.toString(is_seq);


		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());


		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}

		//-오늘날짜 출력하기
		SimpleDateFormat format = new SimpleDateFormat ( "yyyy년 MM월 dd일");
		Date time = new Date();
		String sysdate = format.format(time);

		//--학기 정의
		String semester = null;
		SimpleDateFormat format2 = new SimpleDateFormat ( "MM");
		Date time2 = new Date();
		int month = Integer.parseInt(format2.format(time2));
		if(month>=03 && month<=07) {
			semester="1학기";
		}else {
			semester="2학기";
		}

		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);

		model.addAttribute("dto",dto);
		model.addAttribute("birth",birth);
		model.addAttribute("semester",semester);
		model.addAttribute("sysdate",sysdate);
		model.addAttribute("part",part);



		return "Certification/enrollmentCertification";
	}
	@RequestMapping("graduate")
	public String graduate(Model model){
		int is_seq = (Integer)session.getAttribute("login");
		String s_seq = Integer.toString(is_seq);


		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());


		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}
		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);

		//-오늘날짜 출력하기
		SimpleDateFormat format = new SimpleDateFormat ( "yyyy년 MM월 dd일");
		Date time = new Date();
		String sysdate = format.format(time);

		model.addAttribute("dto",dto);
		model.addAttribute("birth",birth);
		model.addAttribute("part",part);
		model.addAttribute("sysdate",sysdate);
		return "Certification/graduateCertification";
	}
	@RequestMapping("payment")
	public String payment(Model model) {
		int is_seq = (Integer)session.getAttribute("login");
		String s_seq = Integer.toString(is_seq);


		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());

		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}

		//-오늘날짜 출력하기
		SimpleDateFormat format = new SimpleDateFormat ( "yyyy년 MM월 dd일");
		Date time = new Date();
		String sysdate = format.format(time);

		//--학기 정의
		String semester = null;
		SimpleDateFormat format2 = new SimpleDateFormat ( "MM");
		Date time2 = new Date();
		int month = Integer.parseInt(format2.format(time2));
		if(month>=03 && month<=07) {
			semester="1학기";
		}else {
			semester="2학기";
		}

		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);

		//-- 납부관련 dto 불러오기
		TuitionDTO dto2 = Tservice.selectByStd_code(s_seq);
		
		//-- 입학금 + 수업료 더한 합계 만들기
		int sum1=dto2.getT_enter()+dto2.getT_class();
		
		//-- 생년월일 포맷 맞추기
				String t_date = dto2.getT_date().substring(0,4)+"년 "+dto2.getT_date().substring(5,7)+"월 "+dto2.getT_date().substring(8,10)+"일";
			
		//장학금 총액 구하기
				ScholarshipDTO dto3 = Scservice.selectDTOByStd_Code(dto.getS_seq());
				int scholarship = dto3.getsSum();
				
		// 청구 총액 구하기
				
				int finalsum = dto2.gettSum()-scholarship;
		
		model.addAttribute("finalsum",finalsum);
		model.addAttribute("scholarship",scholarship);		
		model.addAttribute("sum1",sum1);
		model.addAttribute("t_date",t_date);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto",dto);
		model.addAttribute("semester",semester);
		model.addAttribute("part",part);
		model.addAttribute("sysdate",sysdate);
		model.addAttribute("birth",birth);
		return "Certification/receipt";
	}
	@RequestMapping("transcript")
	public String transcript(Model model) {
		int is_seq = (Integer)session.getAttribute("login");
		String s_seq = Integer.toString(is_seq);
		
		//--seq받은걸로 dto 찾기
		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());

		//--s_seq 분해
		String s_id = seq.substring(0,2);



		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}

		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);
	

		model.addAttribute("s_id",s_id);
		model.addAttribute("dto",dto);
		model.addAttribute("part",part);
		model.addAttribute("birth",birth);
		
		//------------성적관련--------------------

		int scode=(Integer)session.getAttribute("login");
		List<Std_TranscriptDTO> list = STservice.selectByScode(scode);

		List<Std_TranscriptDTO> f_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> f_s = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> s_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> s_s = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> t_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> t_s = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> ff_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> ff_s = new ArrayList<Std_TranscriptDTO>();
		
		
		for(int i = 0 ; i<list.size(); i++) {
			if(list.get(i).getSemester().contentEquals("1-1")) {
				f_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("1-2")) {
				f_s.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("2-1")) {
				s_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("2-2")) {
				s_s.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("3-1")) {
				t_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("3-2")) {
				t_s.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("4-1")) {
				ff_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("4-2")) {
				ff_s.add(list.get(i));
			}
			
		}

		model.addAttribute("f_f",f_f);
		model.addAttribute("f_s",f_s);
		model.addAttribute("s_f",s_f);
		model.addAttribute("s_s",s_s);
		model.addAttribute("t_f",t_f);
		model.addAttribute("t_s",t_s);
		model.addAttribute("ff_f",ff_f);
		model.addAttribute("ff_s",ff_s);
		return "Certification/transcript";
	}
	
	@RequestMapping("enrollmentp")
	public String enrollmnetp(Model model,HttpServletRequest request) {
		String s_seq = request.getParameter("seq");


		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());


		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}

		//-오늘날짜 출력하기
		SimpleDateFormat format = new SimpleDateFormat ( "yyyy년 MM월 dd일");
		Date time = new Date();
		String sysdate = format.format(time);

		//--학기 정의
		String semester = null;
		SimpleDateFormat format2 = new SimpleDateFormat ( "MM");
		Date time2 = new Date();
		int month = Integer.parseInt(format2.format(time2));
		if(month>=03 && month<=07) {
			semester="1학기";
		}else {
			semester="2학기";
		}

		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);

		model.addAttribute("dto",dto);
		model.addAttribute("birth",birth);
		model.addAttribute("semester",semester);
		model.addAttribute("sysdate",sysdate);
		model.addAttribute("part",part);



		return "Certification/enrollmentCertification";
	}

	
	@RequestMapping("graduatep")
	public String graduatep(Model model,HttpServletRequest request){
		String s_seq = request.getParameter("seq");


		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());


		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}
		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);

		//-오늘날짜 출력하기
		SimpleDateFormat format = new SimpleDateFormat ( "yyyy년 MM월 dd일");
		Date time = new Date();
		String sysdate = format.format(time);

		model.addAttribute("dto",dto);
		model.addAttribute("birth",birth);
		model.addAttribute("part",part);
		model.addAttribute("sysdate",sysdate);
		return "Certification/graduateCertification";
	}
	
	
	@RequestMapping("paymentp")
	public String paymenpt(Model model,HttpServletRequest request) {

		String s_seq = request.getParameter("seq");


		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());

		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}

		//-오늘날짜 출력하기
		SimpleDateFormat format = new SimpleDateFormat ( "yyyy년 MM월 dd일");
		Date time = new Date();
		String sysdate = format.format(time);

		//--학기 정의
		String semester = null;
		SimpleDateFormat format2 = new SimpleDateFormat ( "MM");
		Date time2 = new Date();
		int month = Integer.parseInt(format2.format(time2));
		if(month>=03 && month<=07) {
			semester="1학기";
		}else {
			semester="2학기";
		}

		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);

		//-- 납부관련 dto 불러오기
		TuitionDTO dto2 = Tservice.selectByStd_code(s_seq);
		
		//-- 입학금 + 수업료 더한 합계 만들기
		int sum1=dto2.getT_enter()+dto2.getT_class();
		
		//-- 생년월일 포맷 맞추기
				String t_date = dto2.getT_date().substring(0,4)+"년 "+dto2.getT_date().substring(5,7)+"월 "+dto2.getT_date().substring(8,10)+"일";
			
		//장학금 총액 구하기
				ScholarshipDTO dto3 = Scservice.selectDTOByStd_Code(dto.getS_seq());
				int scholarship = dto3.getsSum();
				
		// 청구 총액 구하기
				
				int finalsum = dto2.gettSum()-scholarship;
		
		model.addAttribute("finalsum",finalsum);
		model.addAttribute("scholarship",scholarship);		
		model.addAttribute("sum1",sum1);
		model.addAttribute("t_date",t_date);
		model.addAttribute("dto2",dto2);
		model.addAttribute("dto",dto);
		model.addAttribute("semester",semester);
		model.addAttribute("part",part);
		model.addAttribute("sysdate",sysdate);
		model.addAttribute("birth",birth);
		return "Certification/receipt";
	}
	
	@RequestMapping("transcriptp")
	public String transcriptp(Model model,HttpServletRequest request) {
		String s_seq = request.getParameter("seq");
		
		//--seq받은걸로 dto 찾기
		StudentsDTO dto = Sservice.selectStudentsByS_Seq(s_seq);
		String seq =Integer.toString(dto.getS_seq());

		//--s_seq 분해
		String s_id = seq.substring(0,2);



		String part = null;
		if(dto.getColCode().contentEquals("10")) {
			if(dto.getDeptCode().contentEquals("11")) {
				part = "국어국문학과";
			}else if(dto.getDeptCode().contentEquals("12")) {
				part = "영어영문학과";
			}else if(dto.getDeptCode().contentEquals("13")) {
				part = "국사학과";
			}else if(dto.getDeptCode().contentEquals("14")) {
				part = "철학과";
			}
		}else if(dto.getColCode().contentEquals("20")) {
			if(dto.getDeptCode().contentEquals("21")) {
				part = "사회복지학과";
			}else if(dto.getDeptCode().contentEquals("22")) {
				part = "경제학부";
			}else if(dto.getDeptCode().contentEquals("23")) {
				part = "사회학과";
			}else if(dto.getDeptCode().contentEquals("24")) {
				part = "심리학과";
			}
		}else if(dto.getColCode().contentEquals("30")) {
			if(dto.getDeptCode().contentEquals("31")) {
				part = "통계학과";
			}else if(dto.getDeptCode().contentEquals("32")) {
				part = "화학부";
			}else if(dto.getDeptCode().contentEquals("33")) {
				part = "생명과학부";
			}
		}else if(dto.getColCode().contentEquals("40")) {
			if(dto.getDeptCode().contentEquals("41")) {
				part = "간호학부";
			}
		}else if(dto.getColCode().contentEquals("50")) {
			if(dto.getDeptCode().contentEquals("51")) {
				part = "전기공학부";
			}else if(dto.getDeptCode().contentEquals("52")) {
				part = "컴퓨터공학부";
			}else if(dto.getDeptCode().contentEquals("53")) {
				part = "화학생물공학부";
			}else if(dto.getDeptCode().contentEquals("54")) {
				part = "건축학과";
			}else if(dto.getDeptCode().contentEquals("55")) {
				part = "산업공학과";
			}
		}else if(dto.getColCode().contentEquals("60")) {
			if(dto.getDeptCode().contentEquals("61")) {
				part = "교육학과";
			}else if(dto.getDeptCode().contentEquals("62")) {
				part = "국어교육과";
			}else if(dto.getDeptCode().contentEquals("63")) {
				part = "영어교육과";
			}else if(dto.getDeptCode().contentEquals("64")) {
				part = "수학교육과";
			}else if(dto.getDeptCode().contentEquals("65")) {
				part = "체육교육과";
			}
		}

		//-- 생년월일 포맷 맞추기
		String birth = dto.getSecNumber().substring(0,6);
	

		model.addAttribute("s_id",s_id);
		model.addAttribute("dto",dto);
		model.addAttribute("part",part);
		model.addAttribute("birth",birth);
		
		//------------성적관련--------------------

		int scode=Integer.parseInt(s_seq);
		List<Std_TranscriptDTO> list = STservice.selectByScode(scode);

		List<Std_TranscriptDTO> f_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> f_s = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> s_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> s_s = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> t_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> t_s = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> ff_f = new ArrayList<Std_TranscriptDTO>();
		List<Std_TranscriptDTO> ff_s = new ArrayList<Std_TranscriptDTO>();
		
		
		for(int i = 0 ; i<list.size(); i++) {
			if(list.get(i).getSemester().contentEquals("1-1")) {
				f_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("1-2")) {
				f_s.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("2-1")) {
				s_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("2-2")) {
				s_s.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("3-1")) {
				t_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("3-2")) {
				t_s.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("4-1")) {
				ff_f.add(list.get(i));
			}else if(list.get(i).getSemester().contentEquals("4-2")) {
				ff_s.add(list.get(i));
			}
			
		}

		model.addAttribute("f_f",f_f);
		model.addAttribute("f_s",f_s);
		model.addAttribute("s_f",s_f);
		model.addAttribute("s_s",s_s);
		model.addAttribute("t_f",t_f);
		model.addAttribute("t_s",t_s);
		model.addAttribute("ff_f",ff_f);
		model.addAttribute("ff_s",ff_s);
		return "Certification/transcript";
	}
	
	@RequestMapping("receiveSeq")
	private NexacroResult receiveSeq() {
		NexacroResult nr = new NexacroResult();
		int seq = (Integer)session.getAttribute("login");
		System.out.println("seq : "+seq);
		StudentsDTO dto = new StudentsDTO();
		dto.setS_seq(seq);
		nr.addDataSet("out_ds",dto);
		return nr;
	}
}
