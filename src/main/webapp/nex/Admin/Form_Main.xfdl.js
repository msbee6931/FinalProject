(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/><Column id=\"file\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptcode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"name\">일반</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"name\">장학</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"name\">학사</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"name\">취업</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NoticeFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_colSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"bordercolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"textcolorcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("adm_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu_id\">10</Col><Col id=\"menu_name\">인적 자원 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">1010</Col><Col id=\"menu_name\">교직원 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::faculty.xfdl</Col></Row><Row><Col id=\"menu_id\">1020</Col><Col id=\"menu_name\">학생 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::students.xfdl</Col></Row><Row><Col id=\"menu_id\">1030</Col><Col id=\"menu_name\">교수 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::professor.xfdl</Col></Row><Row><Col id=\"menu_id\">20</Col><Col id=\"menu_name\">강좌 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">2010</Col><Col id=\"menu_name\">개설 강좌 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">201010</Col><Col id=\"menu_name\">강좌 개설 요청 확인</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::classReq.xfdl</Col></Row><Row><Col id=\"menu_id\">201020</Col><Col id=\"menu_name\">개설된 강좌 조회</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::classList.xfdl</Col></Row><Row><Col id=\"menu_id\">30</Col><Col id=\"menu_name\">홈페이지 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">3010</Col><Col id=\"menu_name\">공지사항 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\"/></Row><Row><Col id=\"menu_id\">301010</Col><Col id=\"menu_name\">공지사항 입력</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::renotice.xfdl</Col></Row><Row><Col id=\"menu_id\">301020</Col><Col id=\"menu_name\">공지사항 수정</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::noticeModify.xfdl</Col></Row><Row><Col id=\"menu_id\">3020</Col><Col id=\"menu_name\">학사 일정 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::colSchedule.xfdl</Col></Row><Row><Col id=\"menu_id\">40</Col><Col id=\"menu_name\">커뮤니티 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">4010</Col><Col id=\"menu_name\">자유게시판 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::freeboard.xfdl</Col></Row><Row><Col id=\"menu_id\">4020</Col><Col id=\"menu_name\">건의게시판 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::requestboard.xfdl</Col></Row><Row><Col id=\"menu_id\">4030</Col><Col id=\"menu_name\">자료실 자료 등록</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::reference.xfdl</Col></Row><Row><Col id=\"menu_id\">4040</Col><Col id=\"menu_name\">자료실 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::reference_controller.xfdl</Col></Row><Row><Col id=\"menu_id\">50</Col><Col id=\"menu_name\">학생 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">5010</Col><Col id=\"menu_name\">등록금 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">501010</Col><Col id=\"menu_name\">등록금 입력</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::tuition.xfdl</Col></Row><Row><Col id=\"menu_name\">장학금 입력</Col><Col id=\"menu_id\">501020</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::scholarship.xfdl</Col></Row><Row><Col id=\"menu_id\">5020</Col><Col id=\"menu_name\">신청서 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">502010</Col><Col id=\"menu_name\">장학금 신청 관리</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::requestScholar.xfdl</Col></Row><Row><Col id=\"menu_id\">502020</Col><Col id=\"menu_name\">휴학 신청 관리</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::reqAbsence.xfdl</Col></Row><Row><Col id=\"menu_id\">502030</Col><Col id=\"menu_name\">복학 신청 관리</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::rest.xfdl</Col></Row><Row><Col id=\"menu_id\">5020</Col><Col id=\"menu_name\">학생 통계</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::chart.xfdl</Col></Row><Row><Col id=\"menu_id\">60</Col><Col id=\"menu_name\">쪽지함</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">6010</Col><Col id=\"menu_name\">쪽지 보내기</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::write_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">6020</Col><Col id=\"menu_name\">받은 쪽지함</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::received_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">6030</Col><Col id=\"menu_name\">보낸 쪽지함</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::writtenList_postmessage.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("adm_form", this);
            obj._setContents("<ColumnInfo><Column id=\"form_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnBoard","50","370","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("건의게시판 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnReference","170","370","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자료실 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnClassList","50","420","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("개설강좌 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnScholarMg","170","420","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("장학금 신청 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnStudentMg","50","320","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("학생 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnNotice","170","320","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("공지사항 관리");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_schedule","750","36","290","224",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("monthonly");
            obj.set_innerdataset("ds_cal");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_schedule","750","280","290","210",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_colSchedule");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일정\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:sDate\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:eDate\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bookmark","50","276","100","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("즐겨찾기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","318","10","92","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공지사항");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_notice","310","80","420","306",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"196\"/><Column size=\"64\"/><Column size=\"112\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:deptcode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_deptcode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"1\" text=\"bind:title\" cursor=\"pointer\"/><Cell col=\"2\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" background=\"transparent\" text=\"expr:file==&quot;Y&quot;?&quot;theme://images/file.png&quot;:&quot;&quot;\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:writedate\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd \" displaytype=\"calendarcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","310","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("전체");
            this.addChild(obj.name, obj);

            obj = new Button("btnNormal","370","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일반");
            this.addChild(obj.name, obj);

            obj = new Button("btnAcademic","430","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학사");
            this.addChild(obj.name, obj);

            obj = new Button("btnScholar","490","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("장학");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmployment","550","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("취업");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore","670","50","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("more+");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("co_month","910","260","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_month_innerdataset = new nexacro.NormalDataset("co_month_innerdataset", obj);
            co_month_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1월</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2월</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3월</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4월</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5월</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6월</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7월</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8월</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9월</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10월</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11월</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12월</Col></Row></Rows>");
            obj.set_innerdataset(co_month_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta_schedule","750","260","91","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("남은 일정");
            this.addChild(obj.name, obj);

            obj = new Div("div_Info","50","51","250","229",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","5","14","230","46",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("0");
            obj.set_text("관리자님 환영합니다");
            obj.set_font("20px/normal \"-윤고딕330\"");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("label_alarm","5","93","190","60",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("1");
            obj.set_text("읽지 않은 메일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_alarm","195","108","30","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("2");
            obj.set_text("- 건");
            obj.set_cursor("pointer");
            obj.set_textDecoration("underline");
            obj.set_color("cornflowerblue");
            this.div_Info.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.fn_openForm = function(sMenuId,sMenuNm,sFormUrl)
        {
        	//화면 오픈 스크립트
        	if(sFormUrl.length <= 0)	return;
        	var av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;
        	var nWidth  = av_FrameSet.getOffsetWidth();
        	var nHeight = av_FrameSet.getOffsetHeight();

        	var sFormId = "form_" + sMenuId;	// FORM_1010...
        	var arrObj = av_FrameSet.all;
        	for(var i=0; i<arrObj.length; i++)
        	{
        		if(arrObj[i].name == sFormId)
        		{
        			arrObj[i].setFocus();
        			//mid 탭 일치시키기
        			this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_tabChange(sFormId);
        			return;
        		}
        	}

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sFormId, 0, 0, nWidth, nHeight);

        	av_FrameSet.addChild(sFormId, objChildFrame);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_titletext(sMenuNm);

        	var oParam = {form_id : sFormId,
        		menu_id : sMenuId,
        		menu_name : sMenuNm,
        		form_url : sFormUrl}

        	objChildFrame.khParam = oParam;
        	objChildFrame.set_formurl(sFormUrl);
        	objChildFrame.show();

        	//새로 생성
        	var nRow = this.adm_form.addRow();
        	this.adm_form.setColumn(nRow, "form_id"  , sFormId);
        	this.adm_form.setColumn(nRow, "menu_id"  , sMenuId);
        	this.adm_form.setColumn(nRow, "menu_name", sMenuNm);
        	this.adm_form.setColumn(nRow, "form_url" , sFormUrl);
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_addTab(sFormId, sMenuNm);
        }
        this.btnStudentMg_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" + 10 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("1020","학생 관리","admWork::students.xfdl"); //form 오픈 함수
        };

        this.btnNotice_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" + 30 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("301010","공지사항 입력","admWork::renotice.xfdl"); //form 오픈 함수
        };


        this.btnClassList_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" + 20 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("201020","개설된 강좌 조회","admWork::classList.xfdl"); //form 오픈 함수
        };

        this.btnBoard_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" + 40 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("4020","건의게시판 관리","admWork::requestboard.xfdl"); //form 오픈 함수
        };

        this.btnReference_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" +40 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("4040","자료실 관리","admWork::reference_controller.xfdl"); //form 오픈 함수
        };

        this.btnScholarMg_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" + 50 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("502010","장학금 신청 관리","admWork::requestScholar.xfdl"); //form 오픈 함수
        };

        this.Form_Work_onload = function(obj,e)
        {
        	this.transaction(
        		"main"
        		,"/mainAdm.notice"
        		,""
        		,"ds_Notice=out_ds ds_NoticeFiles=out_ds2 ds_colSchedule=out_ds3 "
        		,""
        		,"fn_callback"
        	);
        };

        this.count =""; // 읽지 않은 알람 개수
        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "main"){
        	this.div_Info.form.sta_alarm.set_text(this.count + "건");
        		//공지사항 정보
        		for(var j=0; j<this.ds_Notice.getRowCount(); j++){
        			var seq = this.ds_Notice.getColumn(j,"n_seq");
        			for(var i = 0; i<this.ds_NoticeFiles.getRowCount(); i++){
        				var parentSeq = this.ds_NoticeFiles.getColumn(i,"parentSeq");
        				if(seq == parentSeq){
        					this.ds_Notice.setColumn(j,"file","Y");
        				}
        			}
        		}
        		this.ds_Notice.filter("currow < 10");
        		//학사일정 정보
        		this.ds_cal.clearData();
        		for(var i=0; i<this.ds_colSchedule.getRowCount(); i++){
        			var sDate = this.ds_colSchedule.getColumn(i,"sDate");
        			var eDate = this.ds_colSchedule.getColumn(i,"eDate");
        			for(var j=0; j<=parseInt(eDate)-parseInt(sDate); j++){
        				var nRow = this.ds_cal.addRow();
        				this.ds_cal.setColumn(nRow,"backgroundcolumn","skyBlue");
        				this.ds_cal.setColumn(nRow,"bordercolumn","1px solid green");
        				this.ds_cal.setColumn(nRow,"datecolumn",parseInt(sDate)+j);
        			}
        		}
        		var objDate = new Date();
        		this.cal_schedule.set_value(objDate);
        		var month = this.cal_schedule.getMonth();
        		if(month < 10){
        			month = "0"+month;
        		}
        		trace(month);
        		this.ds_colSchedule.filter("sDate.substring(4,6) >='"+month+"'");
        	}
        }
        this.btnMore_onclick = function(obj,e)
        {
        	/*nexacro.open( strID, strFormURL, objParentFrame, {objArguList}, strOpenStyle, nLeft, nTop [, nWidth, nHeight [, objOpener [, strExtOpenStyle ]]])*/
        	var part = this.ds_Notice.getColumn(0,"deptcode")
        	nexacro.open("normal","Student::NoticeLocation.xfdl",this.getOwnerFrame(),{part : part},"showtitlebar=true resizable=true",0, 0, 800, 600, this);
        };


        this.btnAll_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(false);
        	this.ds_Notice.filter("currow < 10");
        };

        this.btnNormal_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'A'&&currow < 10");
        };

        this.btnAcademic_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'B'&&currow < 10");
        };

        this.btnScholar_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'C'&&currow < 10");
        };

        this.btnEmployment_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'D'&&currow < 10");
        };

        this.gr_notice_oncellclick = function(obj,e)
        {
        	var objDs = this.ds_Notice;
        	if(e.col == 1){
        		var nCode = objDs.getColumn(e.row,"n_seq");
        		let x = this.width/2-400;
        		let y = this.height/2-300;
        		let objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,800,600,0,0,"stdWork::notice_pop.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{nCode:nCode},this,"fn_pop_callback");
        	}else if(e.col == 2){
        		if(objDs.getColumn(e.row,"file")=='Y'){
        			var seq = objDs.getColumn(e.row,"n_seq");
        			var title = objDs.getColumn(e.row,"title");
        			this.FileDownTransfer00.setPostData("seq",seq); // 현재 게시물의seq를 넘김
        			//총 첨부파일 중 체크 된 파일만 이벤트 발생
        			this.FileDownTransfer00.setPostData("title",title);

        			this.ds_NoticeFiles.filter("parentSeq=='"+seq+"'");
        			for(var i=0; i< this.ds_NoticeFiles.getRowCount(); i++){
        					var savedFileName = this.ds_NoticeFiles.getColumn(i,"savedFileName");
        					this.FileDownTransfer00.setPostData("savedFileName'"+i+"'",savedFileName);

        					var fileName = this.ds_NoticeFiles.getColumn(i,"fileName");
        					this.FileDownTransfer00.setPostData("fileName'"+i+"'",fileName);
        					trace(fileName);
        			}

        // 			//파일다운로드 실행
         			this.FileDownTransfer00.download("/downloadNotice.notice");
        		}
        	}
        };

        //파일다운로드 성공시 (NRE 에서만 지원)
        this.FileDownTransfer00_onsuccess = function(obj,e)
        {
          var sMsg = e.targetfullpath +"\n"+  e.url;

          alert(sMsg);
        };

        //파일다운로드 실패시 (NRE 에서만 지원)
        this.FileDownTransfer00_onerror = function(obj,e)
        {
          var sMsg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
          sMsg += "statuscode: "+e.statuscode+"\n";
          sMsg += "requesturi: "+e.requesturi+"\n";
          sMsg += "locationuri: "+e.locationuri+"\n" ;
          sMsg += "errormsg: "+e.errormsg+"\n";

          alert(sMsg);
        };

        this.co_month_canitemchange = function(obj,e)
        {
        		var month = e.postvalue;
         		if(month < 10){
         			month = "0"+month;
         		}
        		this.ds_colSchedule.filter("sDate.substring(4,6)=='"+month+"'");
        };

        this.gr_schedule_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		var seq = this.ds_colSchedule.getColumn(e.row,"seq");
        		var objCF = new ChildFrame();
        		var x = this.width/2-200;
        		var y = this.height/2-175;
        		objCF.init("colSchedule_read_pop",x,y,400,350,0,0,"admWork::colSchedule_read_pop.xfdl");
        		objCF.set_titletext("일정 상세보기");
        		objCF.showModal(
        			this.getOwnerFrame(),
        			{seq:seq},
        			this,
        			"fn_pop_callback"
        	);

        	}
        };
        this.div_Info_sta_alarm_onclick = function(obj,e)
        {
        	this.adm_menu.filter("menu_id.substring(0,2) == '" + 60 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("6020","받은 쪽지함","admWork::received_postmessage.xfdl"); //form 오픈 함수
        };







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btnBoard.addEventHandler("onclick",this.btnBoard_onclick,this);
            this.btnReference.addEventHandler("onclick",this.btnReference_onclick,this);
            this.btnClassList.addEventHandler("onclick",this.btnClassList_onclick,this);
            this.btnScholarMg.addEventHandler("onclick",this.btnScholarMg_onclick,this);
            this.btnStudentMg.addEventHandler("onclick",this.btnStudentMg_onclick,this);
            this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.cal_schedule.addEventHandler("onspin",this.cal_schedule_onspin,this);
            this.gr_schedule.addEventHandler("oncellclick",this.gr_schedule_oncellclick,this);
            this.gr_notice.addEventHandler("oncellclick",this.gr_notice_oncellclick,this);
            this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);
            this.btnNormal.addEventHandler("onclick",this.btnNormal_onclick,this);
            this.btnAcademic.addEventHandler("onclick",this.btnAcademic_onclick,this);
            this.btnScholar.addEventHandler("onclick",this.btnScholar_onclick,this);
            this.btnEmployment.addEventHandler("onclick",this.btnEmployment_onclick,this);
            this.btnMore.addEventHandler("onclick",this.btnMore_onclick,this);
            this.co_month.addEventHandler("canitemchange",this.co_month_canitemchange,this);
            this.div_Info.form.sta_alarm.addEventHandler("onclick",this.div_Info_sta_alarm_onclick,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };

        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
