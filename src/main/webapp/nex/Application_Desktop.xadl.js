(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("std_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu_id\">10</Col><Col id=\"menu_name\">학사 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">1010</Col><Col id=\"menu_name\">일정 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">101010</Col><Col id=\"menu_name\">학사 스케줄</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::colSchedule.xfdl</Col></Row><Row><Col id=\"menu_id\">101020</Col><Col id=\"menu_name\">학과 스케줄</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">prfWork::deptSchedule.xfdl</Col></Row><Row><Col id=\"menu_id\">1030</Col><Col id=\"menu_name\">등록금관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">103010</Col><Col id=\"menu_name\">등록금 조회</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">stdWork::stdReadTuition.xfdl</Col></Row><Row><Col id=\"menu_id\">103020</Col><Col id=\"menu_name\">등록금 고지서 출력</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">stdWork::reciptt.xfdl</Col></Row><Row><Col id=\"menu_id\">1040</Col><Col id=\"menu_name\">장학금관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">104010</Col><Col id=\"menu_name\">교내장학금 신청</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">stdWork::scholarship.xfdl</Col></Row><Row><Col id=\"menu_id\">104020</Col><Col id=\"menu_name\">장학금내역 조회</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">stdWork::stdReadScholarship.xfdl</Col></Row><Row><Col id=\"menu_id\">1050</Col><Col id=\"menu_name\">휴·복학 신청</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">105010</Col><Col id=\"menu_name\">휴학 신청</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">stdWork::absence.xfdl</Col></Row><Row><Col id=\"menu_id\">105020</Col><Col id=\"menu_name\">복학 신청</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">stdWork::stdRest.xfdl</Col></Row><Row><Col id=\"menu_id\">20</Col><Col id=\"menu_name\">수강 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">2010</Col><Col id=\"menu_name\">수강신청</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::regist.xfdl</Col></Row><Row><Col id=\"menu_id\">2020</Col><Col id=\"menu_name\">예비수강신청</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::testRegist.xfdl</Col></Row><Row><Col id=\"menu_id\">2030</Col><Col id=\"menu_name\">수강신청 내역</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::myClassList.xfdl</Col></Row><Row><Col id=\"menu_id\">2040</Col><Col id=\"menu_name\">개설강좌 조회</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::classList.xfdl</Col></Row><Row><Col id=\"menu_id\">2050</Col><Col id=\"menu_name\">시간표 조회</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::timeSchedule.xfdl</Col></Row><Row><Col id=\"menu_id\">2060</Col><Col id=\"menu_name\">출결 조회</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::attend.xfdl</Col></Row><Row><Col id=\"menu_id\">2070</Col><Col id=\"menu_name\">성적 조회</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::readGrade.xfdl</Col></Row><Row><Col id=\"menu_id\">30</Col><Col id=\"menu_name\">증명서 자격 발급</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">3010</Col><Col id=\"menu_name\">재학 증명서</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::enrollment.xfdl</Col></Row><Row><Col id=\"menu_id\">3020</Col><Col id=\"menu_name\">졸업 증명서</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::graduation.xfdl</Col></Row><Row><Col id=\"menu_id\">3030</Col><Col id=\"menu_name\">성적 증명서</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::transcript.xfdl</Col></Row><Row><Col id=\"menu_id\">40</Col><Col id=\"menu_name\">마이페이지</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">4010</Col><Col id=\"menu_name\">내 정보 보기</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::studentInfo.xfdl</Col></Row><Row><Col id=\"menu_id\">4020</Col><Col id=\"menu_name\">내 정보 수정</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::myInfoModify.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("std_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"form_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("prf_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu_id\">10</Col><Col id=\"menu_name\">학과 정보</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">1010</Col><Col id=\"menu_name\">학생 조회</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::deptStudent.xfdl</Col></Row><Row><Col id=\"menu_id\">20</Col><Col id=\"menu_name\">강좌 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">2010</Col><Col id=\"menu_name\">강좌 개설 요청</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::classReq.xfdl</Col></Row><Row><Col id=\"menu_id\">2020</Col><Col id=\"menu_name\">전체 강좌 조회</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::classList.xfdl</Col></Row><Row><Col id=\"menu_id\">2030</Col><Col id=\"menu_name\">나의 강좌 보기</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">203010</Col><Col id=\"menu_name\">내 강의 보기</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">prfWork::myClass.xfdl</Col></Row><Row><Col id=\"menu_id\">203020</Col><Col id=\"menu_name\">학생 성적 관리</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\"/></Row><Row><Col id=\"menu_id\">20302010</Col><Col id=\"menu_name\">학생 성적 입력</Col><Col id=\"menu_level\">3</Col><Col id=\"form_url\">prfWork::classGrade.xfdl</Col></Row><Row><Col id=\"menu_id\">20302020</Col><Col id=\"menu_name\">성적 등급 입력</Col><Col id=\"menu_level\">3</Col><Col id=\"form_url\">prfWork::gradeRank.xfdl</Col></Row><Row><Col id=\"menu_name\">학생 출결 관리</Col><Col id=\"menu_id\">203030</Col><Col id=\"menu_level\">2</Col></Row><Row><Col id=\"menu_id\">20303010</Col><Col id=\"menu_name\">학생 출결 입력</Col><Col id=\"menu_level\">3</Col><Col id=\"form_url\">prfWork::attendManage.xfdl</Col></Row><Row><Col id=\"menu_id\">20303020</Col><Col id=\"menu_level\">3</Col><Col id=\"menu_name\">학생 출결 조회</Col><Col id=\"form_url\">prfWork::prfAttend.xfdl</Col></Row><Row><Col id=\"menu_id\">30</Col><Col id=\"menu_name\">일정 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">3010</Col><Col id=\"menu_name\">학사 스케줄</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::colSchedule.xfdl</Col></Row><Row><Col id=\"menu_id\">3020</Col><Col id=\"menu_name\">학과 스케줄</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::deptSchedule.xfdl</Col></Row><Row><Col id=\"menu_id\">3030</Col><Col id=\"menu_name\">나의 스케줄</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::schedulerv2.xfdl</Col></Row><Row><Col id=\"menu_id\">40</Col><Col id=\"menu_name\">쪽지함</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">4010</Col><Col id=\"menu_name\">쪽지 보내기</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::write_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">4020</Col><Col id=\"menu_name\">받은 쪽지함</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::received_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">4030</Col><Col id=\"menu_name\">보낸 쪽지함</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::writtenList_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">50</Col><Col id=\"menu_name\">마이페이지</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">5010</Col><Col id=\"menu_name\">내 정보 보기</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">stdWork::studentInfo.xfdl</Col></Row><Row><Col id=\"menu_id\">5020</Col><Col id=\"menu_name\">내 정보 수정</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">prfWork::myInfoModifyPro.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("prf_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"form_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"INT\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"p_seq\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecture\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"a_seq\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"regist\" type=\"STRING\" size=\"256\"/><Column id=\"test\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("deptCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1011</Col><Col id=\"name\">국어국문학과</Col></Row><Row><Col id=\"code\">1012</Col><Col id=\"name\">영어영문학과</Col></Row><Row><Col id=\"code\">1013</Col><Col id=\"name\">국사학과</Col></Row><Row><Col id=\"code\">1014</Col><Col id=\"name\">철학과</Col></Row><Row><Col id=\"code\">2021</Col><Col id=\"name\">사회복지학과</Col></Row><Row><Col id=\"code\">2022</Col><Col id=\"name\">경제학부</Col></Row><Row><Col id=\"code\">2023</Col><Col id=\"name\">사회학과</Col></Row><Row><Col id=\"code\">2024</Col><Col id=\"name\">심리학과</Col></Row><Row><Col id=\"code\">3031</Col><Col id=\"name\">통계학과</Col></Row><Row><Col id=\"code\">3032</Col><Col id=\"name\">화학부</Col></Row><Row><Col id=\"code\">3033</Col><Col id=\"name\">생명과학부</Col></Row><Row><Col id=\"code\">4041</Col><Col id=\"name\">간호학부</Col></Row><Row><Col id=\"code\">5051</Col><Col id=\"name\">전기공학부</Col></Row><Row><Col id=\"code\">5052</Col><Col id=\"name\">컴퓨터공학부</Col></Row><Row><Col id=\"code\">5053</Col><Col id=\"name\">화학생물공학부</Col></Row><Row><Col id=\"code\">5054</Col><Col id=\"name\">건축학과</Col></Row><Row><Col id=\"code\">5055</Col><Col id=\"name\">산업공학과</Col></Row><Row><Col id=\"code\">6061</Col><Col id=\"name\">교육학과</Col></Row><Row><Col id=\"code\">6062</Col><Col id=\"name\">국어교육과</Col></Row><Row><Col id=\"code\">6063</Col><Col id=\"name\">영어교육과</Col></Row><Row><Col id=\"code\">6064</Col><Col id=\"name\">수학교육과</Col></Row><Row><Col id=\"code\">6065</Col><Col id=\"name\">체육교육과</Col></Row><Row><Col id=\"code\">7071</Col><Col id=\"name\">교양학과</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("colCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">10</Col><Col id=\"name\">인문대학</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">사회과학대학</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"name\">자연과학대학</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"name\">간호대학</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"name\">공과대학</Col></Row><Row><Col id=\"code\">60</Col><Col id=\"name\">사범대학</Col></Row><Row><Col id=\"code\">70</Col><Col id=\"name\">교양</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_part", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">A</Col><Col id=\"name\">전공필수</Col></Row><Row><Col id=\"id\">B</Col><Col id=\"name\">전공선택</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">교양필수</Col></Row><Row><Col id=\"id\">D</Col><Col id=\"name\">교양선택</Col></Row><Row><Col id=\"id\">E</Col><Col id=\"name\">지정교양</Col></Row><Row><Col id=\"id\">F</Col><Col id=\"name\">계열기초</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","738",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("MidLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("Loginform",null,null,null,null,null,null,"Admin::Form_login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Admin::Form_login.xfdl");


            var frame2 = new ChildFrame("TopFrame","0","0",null,null,null,null,"Professor::Form_Top.xfdl",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_showstatusbar("false");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("Professor::Form_Top.xfdl");


            var frame3 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("200,*");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"Professor::Form_Left.xfdl",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame3.addChild(frame4.name, frame4);
            frame4.set_formurl("Professor::Form_Left.xfdl");


            var frame5 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("30,*,0");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("ChildFrame00",null,null,null,null,null,null,"Professor::Form_Mdi.xfdl",frame5);
            frame6.set_showtitlebar("false");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("Professor::Form_Mdi.xfdl");


            var frame7 = new ChildFrame("Mainform",null,null,null,null,null,null,"",frame5);
            frame7.set_showtitlebar("false");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new FrameSet("FrameSet00",null,null,null,null,null,null,frame5);
            frame5.addChild(frame8.name, frame8);

            var frame9 = new ChildFrame("BottomFrame",null,null,"1280","60",null,null,"Student::Form_Bottom.xfdl",frame0);
            frame9.set_showtitlebar("false");
            frame9.set_showstatusbar("false");
            frame0.addChild(frame9.name, frame9);
            frame9.set_formurl("Student::Form_Bottom.xfdl");
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.av_FrameSet = "";

        this.Application_onload = function(obj,e)
        {
        	this.av_FrameSet = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;

        };
        });

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::exprColor.xcss");
        this.loadCss("xcssrc::Chart.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
