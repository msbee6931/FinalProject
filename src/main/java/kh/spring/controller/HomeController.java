package kh.spring.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.spring.dto.ColScheduleDTO;
import kh.spring.service.SchoolScheduleService;


@Controller
public class HomeController {
	@Autowired
	private SchoolScheduleService sService;

	@RequestMapping("/")
	public String home() throws Exception{

		return "home";
	}

	@RequestMapping("/nex")
	public String Nex() {
		return "redirect:/nex/index.html";
	}
	@RequestMapping("pop.home")
	public String popup() {
		return "Pop";

	}
	@RequestMapping("introduce.home")
	public String Introduce() {
		return "Introduce";
	}
	@RequestMapping("department.home")
	public String Department() {
		return "Department";
	}
	@RequestMapping("admission.home")
	public String Admission() {
		return "Admission";
	}
	@RequestMapping("PersonalInfomation.home")
	public String PersonalInfomation() {
		return "PersonalInfomation";
	}
	@RequestMapping("EmailNegative.home")
	public String EmailNegative() {
		return "EmailNegative";
	}
	@RequestMapping("LawOfOffical.home")
	public String LawOfOffical() {
		return "LawOfOffical";
	}
	@RequestMapping("schoolSchedule")
	public String schoolSchedule(Model model) {
		List<ColScheduleDTO> list = sService.getSchoolSchedule();
		
		List<Map<String,String>> listMap = new ArrayList<Map<String,String>>();
		
		for(ColScheduleDTO dto : list) {
			Map<String,String> map = new HashMap<String,String>();
			 
			String sDate = dto.getsDate();
			String eDate = dto.geteDate();
			String title = dto.getTitle();
			
			String sYear = sDate.substring(0,4);
			String sMonth = sDate.substring(4,6);
			String sDay = sDate.substring(6);
			
			String eYear = eDate.substring(0,4);
			String eMonth = eDate.substring(4,6);
			String eDay = eDate.substring(6);
			
			if(sYear.contentEquals(eYear) && sMonth.contentEquals(eMonth) && sDay.contentEquals(eDay)) {
				map.put("year", sYear);
				map.put("month", sMonth);
				map.put("day", sDay);
			}else if(sYear.contentEquals(eYear) && sMonth.contentEquals(eMonth) && !(sDay.contentEquals(eDay))) {
				map.put("year", sYear);
				map.put("month", sMonth);
				map.put("day", sDay+"일 ~ "+eDay);
			}else if(sYear.contentEquals(eYear) && !(sMonth.contentEquals(eMonth))) {
				map.put("year", sYear);
				map.put("month", sMonth);
				map.put("day", sDay+"일 ~ "+eMonth+"월 "+eDay);
			}else if(!(sYear.contentEquals(eYear))) {
				map.put("year", sYear);
				map.put("month", sMonth);
				map.put("day", sDay+"일 ~ "+eYear+"년"+eMonth+"월 "+eDay);
			}		
			map.put("title", title);
			listMap.add(map);
		}
		model.addAttribute("listMap",listMap);
		return "schoolSchedule";
	}

	@ExceptionHandler
	public String ExceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}

}
